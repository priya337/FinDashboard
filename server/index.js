const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom rewrites for RESTful endpoints
server.use(jsonServer.rewriter({
  "/dashboard/cards": "/cards",
  "/dashboard/transactions": "/transactions",
  "/dashboard/weekly-activity": "/weeklyActivity",
  "/dashboard/expense-stats": "/expenseStats",
  "/dashboard/balance-history": "/balanceHistory",
  "/dashboard/contacts": "/contacts",
  "/settings/user-profile": "/userProfile"
}));

server.use(router);

const PORT = 1200;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
