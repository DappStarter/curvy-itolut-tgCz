require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture story riot sad modify injury light army gas'; 
let testAccounts = [
"0x75f9105346f4bdaa916ced943056fe0a10d033b0b8a58a53b99a7e85b28298f5",
"0x743b6e7b69890104c150ecb3b52a42295202104e74e0137699987b5a2ad678a6",
"0x45b345ac6dbace3e4a73033e50eac0d298266d685ebdee16b38dbc63b56215f7",
"0xa0f774caee757846f62956f8c76b0672c9f4aad7d87719eb0b89cde29cdfb557",
"0x43a21fc35f2db320ffd85515dc69c7426a51bfcc4424e519a9400b657351daca",
"0xe4b534db1bfad802cbb6b271492abd53979b829dff0b14932bbd57327c13747d",
"0xb14ec6962b5add0de85287fe179e2f4feb14f40da5dd1fca561f428d63e41caa",
"0x1799f0eb5a3104516ad57ab22e56955327452df8a7eb8055c7aef196cff20696",
"0x896e0fdcff92fd15aae4e6ee0d87ff22ec03f078288e9568fc5775d8f5fb13c6",
"0xc371529ff7d356c507c0002ca68d0ef138c068d6615ead940a441884c7d3a2c6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

