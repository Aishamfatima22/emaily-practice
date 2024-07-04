// es6 imports ye new hain
const express = require("express"); // commonjs modules

const app = express();
/**
 * app meri express ap hai jispe main function aur routes handle kr skta hu
 *
 */

const PORT = process.env.PORT || 5000;
app.listen(PORT);
// Route Handler:
// Port pe request ayi "/home"

app.get("/", (req, res) => {
  res.send({ hi: "Hello Aisham" });
});
