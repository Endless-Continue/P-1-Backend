import modeloProducts from "../modelos/modeloProducts.js";

const productsManagement = {
  CreateProduct: async (req, res) => {
    try {
      const newProduct = new modeloProducts(req.body);
      const productCreated = await newProduct.save();
      if (newProduct._id) {
        res.json({
          resultado: "Works!",
          mensaje: "Product Created!",
          datos: productCreated._id,
        });
      }
    } catch (error) {
      res.json({
        error: true,
        mensaje: "error , there's an issue in the sign up of the product",
      });
    }
  },
  FindProduct: async (req, res) => {
    try {
      const productfinded = await modeloProducts.findById(req.params.id);
      if (productfinded._id) {
        res.json({
          answer: "product finded",
          product: productfinded,
        });
      }
    } catch (error) {
      res.json({
        error: true,
        mensaje: "error , there's an issue finding the product",
      });
    }
  },
  FindProducts: async (req, res) => {
    try {
      const allProducts = await modeloProducts.find();
      console.log(allProducts);
      res.json({
        answer: "get all products works",
        products: allProducts,
      });
    } catch (error) {
      res.json({
        error: true,
        mensaje: "error , there's an issue finding all products",
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
          mensaje: "update works",
          productUpdated: updateProduct._id,
        });
      }
    } catch (error) {
      res.json({
        error: true,
        mensaje: "error , there's an issue updating the product",
      });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const productDeleted = await modeloProducts.findByIdAndDelete(
        req.params.id
      );
      res.json({
        id: req.params.id,
        answer: "Product deleted",
      });
    } catch (error) {
      res.json({
        error: true,
        mensaje: "error , there's an issue deleting the product",
      });
    }
  },
};

export default productsManagement;
