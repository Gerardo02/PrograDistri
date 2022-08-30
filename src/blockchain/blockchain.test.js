import BlockChain from "./blockchain.js";
import Block from "./block.js";


describe('BlockChain', () => {
    let blockchain;

    beforeEach(() => {
        blockchain = new BlockChain();
    });

    it('Valida que la cadena tenga un blocke genesis', () => {
        const [genesisBlock] = blockchain.blocks;

        expect(genesisBlock).toEqual(Block.genesis);
        expect(blockchain.blocks.length).toEqual(1);
    });

    it('Funciona addBlock()', () => {
        const data = 'd4t4';
        blockchain.addBlock(data);

        const [, lastBlock] = blockchain.blocks;

        expect(lastBlock.data).toEqual(data);
        expect(blockchain.blocks.length).toEqual(2);
    });
});