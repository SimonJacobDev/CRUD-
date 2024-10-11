const express = require('express');
const router = express.Router();

const usercontroller = require("../controllers/usercontroller");

router.post("/addcoupon", usercontroller.coupon_create);
router.get("/displaycoupon", usercontroller.coupon_get);
router.put("/altercoupon", usercontroller.coupon_update);
router.delete("/removecoupon", usercontroller.coupon_delete);

module.exports = router;
