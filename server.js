const ganache = require("ganache");

const server = ganache.server({
  chain: { chainId: 1337 },
  wallet: {
    totalAccounts: 10,
    defaultBalance: 1000,
    mnemonic: "test test test test test test test test test test test junk"
  }
});

const PORT = process.env.PORT || 7545;

server.listen(PORT, async (err) => {
  if (err) console.error(err);

  console.log(`Ganache running on port ${PORT}`);

  // ✅ Correct way to get accounts
  const provider = server.provider;

  const initialAccounts = provider.getInitialAccounts();

  for (const [address, info] of Object.entries(initialAccounts)) {
    console.log("Address:", address);
    console.log("Private Key:", info.secretKey);
    console.log("-------------------------");
  }
});