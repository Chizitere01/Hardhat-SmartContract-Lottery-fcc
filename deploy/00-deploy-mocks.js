const { developmentChains } = require("../helper-hardhat-config")
const { ethers } = require("ethers")

const BASE_FEE = ethers.utils.parseEther("0.25") // 0.25 is the prmium it cots 0.25 link per request.
const GAS_PRICE_LINK = 1e9 //link per gas. calculated value based on the gas price of the chain.

//Chainlink Nodes pay the gass fees to give us randomness & do external execution
// So they price of requests change based on the price of gas
module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [BASE_FEE, GAS_PRICE_LINK]

    if (developmentChains.includes(network.name)) {
        log("Local network detected! Deploying mocks...")
        // deploy a mock vrfcoordinator
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: args,
        })
        log("Mocks Deployed!")
        log("--------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
