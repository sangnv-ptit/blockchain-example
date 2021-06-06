import CryptoBlockchain from './CryptoBlockchain.js'
import CryptoBlock from './CryptoBlock.js'

let smashingCoin = new CryptoBlockchain();

console.log("smashingCoin mining in progress....");
smashingCoin.addNewBlock(
    new CryptoBlock(1, "03/06/2021", {
        sender: "Sang Nguyen",
        recipent: "Another Sang",
        quantity: 50
    })
);

smashingCoin.addNewBlock(
    new CryptoBlock(2, "06/06/2021", {
        sender: "Another Sang",
        recipent: "Sang Nguyen",
        quantity: 100
    })
);

console.log(JSON.stringify(smashingCoin, null, 4));