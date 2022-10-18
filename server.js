const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const { APP_NAME, NODE_ENV, PORT, CLIENT_URL } = require("./src/utils/env");
const { failed } = require("./src/utils/createResponse");
const creditCardRoute = require("./src/router/credit_card.route");

// deklarasi express
const app = express();

app.use(helmet());
app.use(xss());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

const corsOptions = {
  origin: CLIENT_URL,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// root router
app.get("/", (req, res) =>
  res.send(`${APP_NAME} API - ${NODE_ENV[0].toUpperCase() + NODE_ENV.slice(1)}`)
);
// main router

app.use(creditCardRoute);
app.use(require("./src/router/auth.route"));
app.use(require("./src/router/user.route"));

// 404 router
app.use("*", (req, res) => {
  failed(res, {
    code: 404,
    payload: "Resource on that url not found",
    message: "Not Found",
  });
});

// running server
app.listen(PORT, (req, res) => {
  console.log(`Server started on port ${PORT} with ${NODE_ENV} environment`);
  console.log(`Visit http://localhost:${PORT}`);
  // console.log(req);
});
