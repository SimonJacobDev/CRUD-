const usermodel = require('../models/usermodel');

const coupon_create = async (req, res) => {
    try {
        const { offer_name, coupon_name, start_date, end_date, discount_percentage, discount_amount, isactive } = req.body;
        const newcoupon = new usermodel({ offer_name, coupon_name, start_date, end_date, discount_percentage, discount_amount, isactive });
        await newcoupon.save();
        res.json({ message: "Coupon created successfully" });
    } 
    catch (error) {
        console.log(error);
        res.json({ message: "Error occurred while creating the coupon" });
    }
};


const coupon_get = async(req, res) =>{
    try{
        const getcoupon = await usermodel.find();
        res.json(getcoupon)
    }
    catch(error){
        console.log(error);
        res.json({message: "Error occurred while fetching the coupon" });
    }
}

const coupon_update = async(req, res) =>{
    try{
        const updateid = req.body.updateid;

        const  updatecoupon ={
            offer_name: req.body.offer_name,
            coupon_name: req.body.coupon_name,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            discount_percentage: req.body.discount_percentage,
            discount_amount: req.body.discount_amount,
            isactive: req.body.isactive
        } 
        await usermodel.findByIdAndUpdate(updateid,{$set:updatecoupon});
        res.json({message: "Coupon updated successfully" });
        }
        catch{
            res.json({message:"error in updating  the coupon" });
        }
}

const coupon_delete = async(req, res)=>{
    try{
        const deleteId = req.params.deleteId;
        await usermodel.findByIdAndDelete(deleteId);
        res.json({message : "coupon  deleted successfully" });
    }
    catch(error){
        res.json({message:"error"});
    }
}

module.exports = { coupon_create, coupon_get , coupon_update , coupon_delete };

