import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.hardhatLocal,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "DiceApeAlliance",
  tokenName: "Dice Ape Alliance",
  tokenSymbol: "DAA",
  hiddenMetadataUri: 'ipfs://QmdqVMcfwYiWpPahK1Ww7vk94yvDGmHsoVPknV6M6LEzvw/hidden-meta.json',
  maxSupply: 5500,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.08,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.10,
    maxMintAmountPerTx: 5,
  },
  contractAddress: null,
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
