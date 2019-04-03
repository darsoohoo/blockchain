const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bc1 = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1554293314945,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1554293342647,
    "transactions": [],
    "nonce": 18140,
    "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1554293407601,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "34a51800560911e9b78d6bd96d39dca5",
    "transactionId": "452cd050560911e9b78d6bd96d39dca5"
    },
    {
    "amount": 10,
    "sender": "EDCNHFGSNSGF456456DFGHDF",
    "recipient": "MIAF34FKUJHGFFH56856GSERGER",
    "transactionId": "5d5cfba0560911e9b78d6bd96d39dca5"
    },
    {
    "amount": 20,
    "sender": "EDCNHFGSNSGF456456DFGHDF",
    "recipient": "MIAF34FKUJHGFFH56856GSERGER",
    "transactionId": "61f6f620560911e9b78d6bd96d39dca5"
    },
    {
    "amount": 30,
    "sender": "EDCNHFGSNSGF456456DFGHDF",
    "recipient": "MIAF34FKUJHGFFH56856GSERGER",
    "transactionId": "65cb7dc0560911e9b78d6bd96d39dca5"
    }
    ],
    "nonce": 11542,
    "hash": "00007d7f89986d66efc30c6406fe40d8fa8059a6c01f25dd2e7a9cf5f4062643",
    "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
    "index": 4,
    "timestamp": 1554293449175,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "34a51800560911e9b78d6bd96d39dca5",
    "transactionId": "6bdfe340560911e9b78d6bd96d39dca5"
    },
    {
    "amount": 4,
    "sender": "EDCNHFGSNSGF456456DFGHDF",
    "recipient": "MIAF34FKUJHGFFH56856GSERGER",
    "transactionId": "7972c590560911e9b78d6bd96d39dca5"
    },
    {
    "amount": 50,
    "sender": "EDCNHFGSNSGF456456DFGHDF",
    "recipient": "MIAF34FKUJHGFFH56856GSERGER",
    "transactionId": "7cc01bd0560911e9b78d6bd96d39dca5"
    },
    {
    "amount": 60,
    "sender": "EDCNHFGSNSGF456456DFGHDF",
    "recipient": "MIAF34FKUJHGFFH56856GSERGER",
    "transactionId": "7ef412d0560911e9b78d6bd96d39dca5"
    },
    {
    "amount": 70,
    "sender": "EDCNHFGSNSGF456456DFGHDF",
    "recipient": "MIAF34FKUJHGFFH56856GSERGER",
    "transactionId": "816dec70560911e9b78d6bd96d39dca5"
    }
    ],
    "nonce": 56137,
    "hash": "0000ff61bae057dc684f40b3aa777cf443bb8b4f8678f22396d4b7042b98d1d1",
    "previousBlockHash": "00007d7f89986d66efc30c6406fe40d8fa8059a6c01f25dd2e7a9cf5f4062643"
    },
    {
    "index": 5,
    "timestamp": 1554293491188,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "34a51800560911e9b78d6bd96d39dca5",
    "transactionId": "84a7bab0560911e9b78d6bd96d39dca5"
    }
    ],
    "nonce": 72197,
    "hash": "0000b0809123678d81a0c9b2134f2957e5f1f98be9bad59ab6708d1784d84e7e",
    "previousBlockHash": "0000ff61bae057dc684f40b3aa777cf443bb8b4f8678f22396d4b7042b98d1d1"
    },
    {
    "index": 6,
    "timestamp": 1554293494514,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "34a51800560911e9b78d6bd96d39dca5",
    "transactionId": "9db26780560911e9b78d6bd96d39dca5"
    }
    ],
    "nonce": 82827,
    "hash": "00005ff234b1d3482f29fda3d8ade89dd688f75d4b8250bfcc0ee78e1f16914a",
    "previousBlockHash": "0000b0809123678d81a0c9b2134f2957e5f1f98be9bad59ab6708d1784d84e7e"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "34a51800560911e9b78d6bd96d39dca5",
    "transactionId": "9fad9b40560911e9b78d6bd96d39dca5"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    }


    console.log('VALID: ', bitcoin.chainIsValid(bc1.chain))