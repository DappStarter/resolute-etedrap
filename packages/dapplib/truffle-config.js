require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'include clog swift suggest firm crater remain purse grace castle obscure thumb'; 
let testAccounts = [
"0x6c3405da387142ed054cfb579ca2858bfc7c1a2cc8f8602d2fd0b08509b21e73",
"0x83bcbca7adb624605059fd1550bd3e4518c31ce334141711b4268062e64abfe7",
"0x3c6c3fa137d79380bfb398d3ad90cea7ec6af7d48fb42b6d16538e14e46c272c",
"0x2929ed848d1b991d0e40dc00761395e1203ee7a0ab7b80d6cb14eb8aece3d37b",
"0x92a64182c4688bfb7a9be3ca84d0b67717cd75f99a19ae6d0520a01fe43100d1",
"0x8607bfa2b4fab504e8470543322e597600065b049f16def4aa98a70d4d547c3d",
"0xe09535e4c05e3e1bd6d512053f4798fbed69a11f35934d074f1baefd60fccabf",
"0xf793afd567fc2c7f13c9ce8d3f3db49cdf76fc5ae3e5e842c1510181244fbea3",
"0xf737192d363ced9e113dcd3aa2391c850b9e36a3cf6e7460f5ac035af8a74759",
"0x552720c6cf30054a3634f3aac750b838f0923dd33939e935b59e53a96562c855"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

