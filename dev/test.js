const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, '23235235GF3532', '32523523DFG897');

bitcoin.createNewTransaction(100, 'ALEX8679567DFGDG34', 'JENN435345DFGDFG4');

bitcoin.createNewBlock(1232389, '0HFGH5235GF3532', 'JKGN23523DFG897');

bitcoin.createNewTransaction(50, 'ALEX8679567DFGDG34', 'JENN435345DFGDFG4');
bitcoin.createNewTransaction(300, 'ALEX8679567DFGDG34', 'JENN435345DFGDFG4');
bitcoin.createNewTransaction(2000, 'ALEX8679567DFGDG34', 'JENN435345DFGDFG4');

bitcoin.createNewBlock(98796, 'ASDSA446456346', '466436436SDFF');


console.log(bitcoin.chain[2]);

