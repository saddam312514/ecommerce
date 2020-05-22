const express = require("express");
const router = express.Router();

const {
create,categoryId,read,update,remove,list
} = require("../controllers/category");

const {  requireSignin , isAuth, isAdmin} = require("../controllers/auth");
router.get('/category/:categoryId', read)
router.post("/category/create/:userId", requireSignin, isAuth, isAdmin, create);
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, update);
router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove);
router.get('/categories',list)
const {userById} = require("../controllers/user");
router.param('categoryId', categoryId)
router.param('userId', userById)



module.exports = router;