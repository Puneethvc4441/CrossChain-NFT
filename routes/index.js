const router =  require('express').Router();
const {matic_instance, bnb_instance} = require("../config")

router.route('/nft').get(async (req, res) => {