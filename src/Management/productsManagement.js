import fs from "fs-extra";
import multer from "multer";
import modeloProducts from "../modelos/modeloProducts.js";

const productsManagement = {
  CreateProduct: async (req, res) => {
    const productStorage = multer.diskStorage({
      destination: "productsSrc",
      filename: (res, file, cb) => {
        cb(null, file.originalname);
      },
    });
    const upload = multer({ storage: productStorage }).single("img");
    upload(req, res, async (error) => {
      if (error) {
        res.json({
          answer: "Error!, There's an error uploading the img of tge product",
          error: error,
        });
      } else {
        const newProduct = new modeloProducts({
          product: req.body.product,
          brand: req.body.brand,
          brandType: req.body.brandType,
          img: req.file.filename,
          price: req.body.price,
          description: req.body.description,
          ingredients: req.body.ingredients,
          activeIngredients: req.body.activeIngredients,
          volume: req.body.volume,
          neto: req.body.neto,
          productAmount: req.body.productAmount,
          productType: req.body.productType,
          available: req.body.available,
        });
        const productCreated = await newProduct.save();
        if (productCreated._id) {
          res.json({
            answer: "Great!, the product has been created!",
            product: productCreated._id,
          });
        }
      }
    });
  },
  FindProduct: async (req, res) => {
    try {
      const productfinded = await modeloProducts.findById(req.params.id);
      if (productfinded._id) {
        res.json({
          respuesta: "bien",
          mensaje: "Product finded",
          product: productfinded,
        });
      }
    } catch (error) {
      res.json({
        respuesta: "mal",
        mensaje: "error , there's an issue finding the product",
      });
    }
  },
  FindProductsByName: async (req, res) => {
    try {
      const productfindedbyname = await modeloProducts.find({
        product: new RegExp(req.params.query, "i"),
      });
      res.json(productfindedbyname);
    } catch (error) {
      res.json({
        respuesta: "mal",
        mensaje: "There's an issue finding the product by name",
      });
    }
  },
  FindProducts: async (req, res) => {
    try {
      const allProducts = await modeloProducts.find();
      console.log(allProducts);
      res.json({
        respuesta: "bien",
        mensaje: "All Products found",
        datos: allProducts,
      });
    } catch (error) {
      res.json({
        respuesta: "mal",
        mensaje: "There's an issue finding all the products",
      });
    }
  },
  UpdateProduct: async (req, res) => {
    try {
      const updateProduct = await modeloProducts.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (updateProduct._id) {
        res.json({
          respuesta: "bien",
          mensaje: "Product Updated",
          productUpdated: updateProduct._id,
        });
      }
    } catch (error) {
      res.json({
        respuesta: "mal",
        mensaje: "There's an issue updating the product",
      });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const productDeleted = await modeloProducts.findByIdAndDelete(
        req.params.id
      );
      if (productDeleted._id) {
        await fs.unlink("productsSrc/" + productDeleted.img);
        res.json({
          respuesta: "bien",
          mensaje: "Product deleted",
          productUpdated: productDeleted._id,
        });
      }
    } catch (error) {
      res.json({
        respuesta: "mal",
        mensaje: "There's an issue deleting the product",
      });
    }
  },
};

export default productsManagement;
