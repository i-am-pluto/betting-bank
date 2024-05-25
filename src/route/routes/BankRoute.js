const express = require('express');
const router = express.Router();

/**
- **POST** /bank/register
- **GET** /bank/bal
- **POST** /bank/deposit
- **POST** /bank/withdraw
- **POST** /bank/transfer
*/

router.post('/register', async (req, res) => {

});

router.get('/bal',/** add middleware here */, async (req, res) => {

});

router.post('/deposit',/** add middleware here */, async (req, res) => {

});
router.post('/withdraw', /** add middleware here */ , async (req, res) => {

});

module.exports = router;
