const { matic_instance, bnb_instance, 
        matic_web3, bnb_web3, bnb_nft_address,
        matic_nft_address} = require('../../config')
require('dotenv').config()

exports.mint_bnb_nft = async (req, res) => {
    try{
        const {to} = req.body
        const owner_pk = process.env.OWNER_PK
        const from = process.env.OWNER_ADDRESS
        let txObj;
        txObj = bnb_instance.methods.safeMint(to);
        const gas = await txObj.estimateGas({from});
        const gasPrice = await bnb_web3.eth.getGasPrice();
        const data = txObj.encodeABI();
        const txObj1 = {
            from,
            to: bnb_nft_address,
            data,
            gas: gas,
            gasPrice,
            chainId: 97
        };
        const signature = await bnb_web3.eth.accounts.signTransaction(txObj1, owner_pk);
        const signedTx = signature.rawTransaction;
        const receipt = await bnb_web3.eth.sendSignedTransaction(signedTx);
        console.log(receipt);
        res.status(200).json({receipt})

    } catch (err) {
        console.log(err)
        res.status(500).json({err})
    }
}

exports.mint_matic_nft = async (req, res) => {
    try{
        const {to, tokenId} = req.body
        const owner_pk = process.env.OWNER_PK
        const from = process.env.OWNER_ADDRESS
        let txObj;
        txObj = matic_instance.methods.safeMint(to, tokenId);
        const gas = await txObj.estimateGas({from});
        const gasPrice = await matic_web3.eth.getGasPrice();
        const data = txObj.encodeABI();
        const txObj1 = {
            from,
            to: matic_nft_address,
            data,
            gas: gas,
            gasPrice,
            chainId: 80001
        };
        const signature = await matic_web3.eth.accounts.signTransaction(txObj1, owner_pk);
        const signedTx = signature.rawTransaction;
        const receipt = await matic_web3.eth.sendSignedTransaction(signedTx);
        console.log(receipt);
        res.status(200).json({receipt})

    } catch (err) {
        console.log(err)
        res.status(500).json({err})
    }
}

exports.burn_bnb_nft = async (req, res) => {
    try{
        const {tokenId} = req.body
        const owner_pk = process.env.OWNER_PK
        const from = process.env.OWNER_ADDRESS
        let txObj;
        txObj = bnb_instance.methods.burn(tokenId);
        const gas = await txObj.estimateGas({from});
        const gasPrice = await bnb_web3.eth.getGasPrice();
        const data = txObj.encodeABI();
        const txObj1 = {
            from,
            to: bnb_nft_address,
            data,
            gas: gas,
            gasPrice,
            chainId: 97
        };
        const signature = await bnb_web3.eth.accounts.signTransaction(txObj1, owner_pk);
        const signedTx = signature.rawTransaction;
        const receipt = await bnb_web3.eth.sendSignedTransaction(signedTx);
        console.log(receipt);
        res.status(200).json({receipt})

    } catch (err) {
        console.log(err)
        res.status(500).json({err})
    }
}

exports.burn_matic_nft = async (req, res) => {
    try{
        const {tokenId} = req.body
        const owner_pk = process.env.OWNER_PK
        const from = process.env.OWNER_ADDRESS
        let txObj;
        txObj = matic_instance.methods.burn(tokenId);
        const gas = await txObj.estimateGas({from});
        const gasPrice = await matic_web3.eth.getGasPrice();
        const data = txObj.encodeABI();
        const txObj1 = {
            from,
            to: matic_nft_address,
            data,
            gas: gas,
            gasPrice,
            chainId: 80001
        };
        const signature = await matic_web3.eth.accounts.signTransaction(txObj1, owner_pk);
        const signedTx = signature.rawTransaction;
        const receipt = await matic_web3.eth.sendSignedTransaction(signedTx);
        console.log(receipt);
        res.status(200).json({receipt})

    } catch (err) {
        console.log(err)
        res.status(500).json({err})
    }
}


// cross chain transfer
// first burn on matic chain - print the tokenId, tx hash read the event and then mint on bnb chain - print the tokenId, tx hash

exports.burn_matic_mint_bnb = async (req, res) => {
    try{
        const {tokenId} = req.body
        const owner_pk = process.env.OWNER_PK
        const from = process.env.OWNER_ADDRESS
        let txObj;
        txObj = matic_instance.methods.burn(tokenId);
        const gas = await txObj.estimateGas({from});
        const gasPrice = await matic_web3.eth.getGasPrice();
        const data = txObj.encodeABI();
        const txObj1 = {
            from,
            to: matic_nft_address,
            data,
            gas: gas,
            gasPrice,
            chainId: 80001
        };
        const signature = await matic_web3.eth.accounts.signTransaction(txObj1, owner_pk);
        const signedTx = signature.rawTransaction;
        const receipt = await matic_web3.eth.sendSignedTransaction(signedTx);
        console.log(receipt);
 
        const tokenId2 = receipt.events.Transfer.returnValues.tokenId
        const txObj2 = bnb_instance.methods.safeMint(from, tokenId2);
        const gas2 = await txObj2.estimateGas({from});
        const gasPrice2 = await bnb_web3.eth.getGasPrice();
        const data2 = txObj2.encodeABI();
        const txObj3 = {
            from,
            to: bnb_nft_address,
            data: data2,
            gas: gas2,
            gasPrice: gasPrice2,
            chainId: 97
        };
        const signature2 = await bnb_web3.eth.accounts.signTransaction(txObj3, owner_pk);
        const signedTx2 = signature2.rawTransaction;
        const receipt2 = await bnb_web3.eth.sendSignedTransaction(signedTx2);
        console.log(receipt2);
        res.status(200).json({receipt, receipt2})

}   catch (err) {
        console.log(err)
        res.status(500).json({err})
    }
}


exports.mint_matic_burn_bnb = async (req, res) => {
    try{
        const {to} = req.body
        const owner_pk = process.env.OWNER_PK
        const from = process.env.OWNER_ADDRESS
        let txObj;
        txObj = matic_instance.methods.safeMint(to);
        const gas = await txObj.estimateGas({from});
        const gasPrice = await matic_web3.eth.getGasPrice();
        const data = txObj.encodeABI();
        const txObj1 = {
            from,
            to: matic_nft_address,
            data,
            gas: gas,
            gasPrice,
            chainId: 80001
        };
        const signature = await matic_web3.eth.accounts.signTransaction(txObj1, owner_pk);
        const signedTx = signature.rawTransaction;
        const receipt = await matic_web3.eth.sendSignedTransaction(signedTx);
        console.log(receipt);
 
        const tokenId = receipt.events.Transfer.returnValues.tokenId
        const txObj2 = bnb_instance.methods.burn(tokenId);
        const gas2 = await txObj2.estimateGas({from});
        const gasPrice2 = await bnb_web3.eth.getGasPrice();
        const data2 = txObj2.encodeABI();
        const txObj3 = {
            from,
            to: bnb_nft_address,
            data: data2,
            gas: gas2,
            gasPrice: gasPrice2,
            chainId: 97
        };
        const signature2 = await bnb_web3.eth.accounts.signTransaction(txObj3, owner_pk);
        const signedTx2 = signature2.rawTransaction;
        const receipt2 = await bnb_web3.eth.sendSignedTransaction(signedTx2);
        console.log(receipt2);
        res.status(200).json({receipt, receipt2})

    } catch (err) {
        console.log(err)
        res.status(500).json({err})
    }

}