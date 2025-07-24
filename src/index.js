const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();

// app.get("api/v1/blogs", (req, res) => {});

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
