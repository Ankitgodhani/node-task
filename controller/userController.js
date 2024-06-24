const ProductModel = require("../model/product");
const Joi = require('joi');



async function userProductCreate(req, res) {
    const schema = Joi.object({
        productName: Joi.string().required(),
        ProductDescription: Joi.string().required(),
        productPrice: Joi.number().required(),
        productBrand: Joi.string().required(),
        productWarranty: Joi.string().required(),
        productReview: Joi.string().required(),
    })
    var data = req.body;
    const value = schema.validate(data);

    if (value.error) {
        console.log(value.error);
        return res.json({
            status: false,
            message: value.error.details[0].message,
        });
    }

    console.log(req.body);
    await ProductModel.create({
        productName: data.productName,
        ProductDescription: data.ProductDescription,
        productPrice: data.productPrice,
        productBrand: data.productBrand,
        productWarranty: data.productWarranty,
        productReview: data.productReview,
    });



    res.json({
        status: true,
        message: "Product Created",
    });
};

async function productget(req, res) {
    var ProductGet = await ProductModel.find({});
    res.json({
        status: true,
        message: "Product get",
        data: ProductGet
    });
};





async function ProductUpdateGet(req, res) {
    var product = await ProductModel.findOne({ _id: req.params.productID });
    res.json({
        status: true,
        message: "Product Update get",
        data: product
    });
};

async function ProductUpdatePost(req, res) {
    const schema = Joi.object({
        productName: Joi.string().required(),
        ProductDescription: Joi.string().required(),
        productPrice: Joi.number().required(),
        productBrand: Joi.string().required(),
        productWarranty: Joi.string().required(),
        productReview: Joi.string().required(),
    })
    var data = req.boody;
    const value = schema.validate(data);

    if (value.error) {
        console.log(value.error);
        return res.json({
            status: false,
            message: value.error.details[0].message,
        });
    }
    var data = req.body;
    await ProductModel.updateOne({ _id: req.params.productID }, {
        productName: data.productName,
        ProductDescription: data.ProductDescription,
        productPrice: data.productPrice,
        productBrand: data.productBrand,
        productWarranty: data.productWarranty,
        productReview: data.productReview,
    }, { upsert: true });


    res.json({
        status: true,
        message: "Product Updated",
    });
}





async function productRemove(req, res) {
    await ProductModel.deleteOne({ _id: req.params.productID });
    console.log("123");
    res.json({
        status: true,
        message: "Product remove",
    })
}



module.exports = {
    userProductCreate,
    productget,
    ProductUpdateGet,
    ProductUpdatePost,
    productRemove,

}