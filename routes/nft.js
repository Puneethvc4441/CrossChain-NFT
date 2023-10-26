const router = require('express').Router();
const {mint_matic_nft, burn_matic_mint_bnb} = require('../src/helpers/nftHelper');

router.route('/transfer')
    .post(burn_matic_mint_bnb);

router.route('/mint')
    .post(mint_matic_nft);

module.exports = router;