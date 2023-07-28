# Smart Contract Lottery with Chainlink VRF

Welcome to the Smart Contract Lottery project! This decentralized application (DApp) allows participants to enter a lottery by paying an entrance fee. A random winner will be selected every X minutes, with the randomness obtained from Chainlink VRF (Verifiable Random Function). The lottery is conducted entirely on the blockchain, ensuring fairness, transparency, and security.

## Features

1. **Entrance Fee:** Participants can enter the lottery by paying an entrance fee in the specified cryptocurrency (ETH).

2. **Random Winner Selection:** The smart contract uses Chainlink VRF to generate random numbers, ensuring a fair and unbiased winner selection process.

3. **Multiple Raffles:** The contract supports running multiple raffles, each with its own unique entrance fee and time interval.

4. **Chainlink Keeper Integration:** The contract is integrated with Chainlink Keepers to automate the process of requesting a random winner.

## Smart Contract Details

The smart contract for the lottery is written in Solidity and utilizes Chainlink VRF and Chainlink Keepers functionalities. The contract is deployed on the Ethereum blockchain and can be interacted with using compatible wallets and DApp browsers.

### Contract Functions

The following are the main functions provided by the smart contract:

1. `enterRaffle()`: Allows participants to enter the lottery by paying the specified entrance fee in ETH. Participants must send enough ETH to meet the entrance fee requirement; otherwise, the transaction will be reverted.

2. `checkUpkeep()`: This function is called by Chainlink Keepers to determine if it is time to request a random winner. The function checks if the lottery is open, if the time interval has passed, if there are players in the lottery, and if there are funds available for the prize pool.

3. `performUpkeep()`: This function is called by Chainlink Keepers when `checkUpkeep()` returns true. It triggers the process of requesting a random number from Chainlink VRF.

4. `fulfillRandomWords()`: This internal function is called by Chainlink VRF after the random number is generated. It selects a winner based on the random number and transfers the prize pool to the winner.

### Deployment

To deploy the Smart Contract Lottery on your local development environment or the Ethereum mainnet/testnet, you will need:

1. A compatible Ethereum wallet (e.g., MetaMask) to interact with the smart contract.

2. The Solidity contract source code, which can be found in the `contracts` directory.

3. A funded Chainlink VRF contract address and a funded Chainlink Keeper node.

### Running the DApp

To run the decentralized application:

1. Ensure you have the required dependencies installed and the smart contract deployed on the desired network.

2. Navigate to the `frontend` directory.

3. Install the necessary dependencies using `npm install`.

4. Update the `contractAddress` in the `lottery.js` file with the deployed smart contract address.

5. Run the DApp using `npm start`.

6. Visit `http://localhost:3000` in your web browser to access the DApp.

## Security Considerations

The use of Chainlink VRF enhances the security and randomness of the lottery. However, it is essential to perform a thorough security audit before deploying the contract on the Ethereum mainnet or any other public network.

## Disclaimer

This project is for educational and informational purposes only. Use it at your own risk. The developers of this project are not responsible for any losses or damages that may occur from using this application or the underlying smart contract.

## License

This Smart Contract Lottery project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

For any questions, feedback, or contributions, please contact [Your Contact Email]. Happy lotterying!
