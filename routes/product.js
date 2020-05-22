const express = require("express");
const router = express.Router();

const { create,productId,read,remove,update,list,listRelated,listCategories,listBySearch,photo,listSearch} = require("../controllers/product");

const {  requireSignin , isAuth, isAdmin} = require("../controllers/auth");
router.get('/product/:productId', read)
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);
router.delete(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
);
router.put(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update
);
router.get('/products',list)
router.get('/products/related/:productId',listRelated)
router.get('/products/categories', listCategories)
router.get("/products/search", listSearch);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo)
const {userById} = require("../controllers/user");
router.param('userId', userById)
router.param('productId', productId)



module.exports = router;