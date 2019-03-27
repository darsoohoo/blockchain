const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = 'OISDVSDVSD45645436346456';
const currentBlockData = [
    {
        amount: 101,
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


console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 54272));



