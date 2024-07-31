const vendorController=require('../controllers/vendorController');

const express = require('express');

const router=express.Router();

router.post('/register',vendorController.vendorRegister);

router.post('/login',vendorController.vendorLogin);

router.get('/vendordetails',vendorController.getVendorDetails)

router.get('/single-vendor/:id',vendorController.getVendorByID)

module.exports=router;