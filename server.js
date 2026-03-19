const ganache = require("ganache");

// Define a fixed mnemonic for reproducibility
const MNEMONIC = "test test test test test test test test test test test junk";

const server = ganache.server({
  chain: { chainId: 1337 },
  wallet: { 
    totalAccounts: 10, 
    defaultBalance: 1000, 
    mnemonic: MNEMONIC 
  }
});

const PORT = process.env.PORT || 7545;

server.listen(PORT, (err) => {
  if (err) return console.error(err);
  
  console.log(`Ganache running on port ${PORT}`);
  console.log(`Mnemonic for accounts: ${MNEMONIC}`);

  // Print all accounts with their private keys
  const accounts = server.provider.getWallets();
  console.log("Accounts and Private Keys:");
  accounts.forEach((acc, index) => {
    console.log(`Account ${index + 1}:`);
    console.log(`  Address: ${acc.getAddressString()}`);
    console.log(`  Private Key: ${acc.getPrivateKeyString()}`);
  });
});