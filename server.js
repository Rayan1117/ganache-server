const ganache = require("ganache");

const server = ganache.server({
  chain: { chainId: 1337 },
  wallet: { totalAccounts: 10, defaultBalance: 1000 }
});

const PORT = process.env.PORT || 7545;

server.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`Ganache running on port ${PORT}`);
});