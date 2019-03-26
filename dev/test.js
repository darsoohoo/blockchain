const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = 'OISDVSDVSD45645436346456';
const currentBlockData = [
    {
        amount: 10,
        sender: 'NGH68DFGDFGDFGFD',
        recipient: 'FHJ6756GHDFHDDFGD'
    },
    {
        amount: 30,
        sender: '0987NGH68DFGDFGDFGFD',
        recipient: 'UIGFHJ6756GHDFHDDFGD'
    },
    {
        amount: 200,
        sender: '456NGH68DFGDFGDFGFD',
        recipient: 'AUSFHJ6756GHDFHDDFGD'
    }
];
const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));



