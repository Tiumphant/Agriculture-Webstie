const express = require("express");
require("../server/db/config");
const cors = require("cors");
const productRoutes = require("../server/controler/ProductControler");
const userRoutes = require("../server/controler/userControler");
const ServiceRoutes = require("./controler/ServicesController");
const NewsRoutes = require("./controler/NewsController");
const ContactRoutes = require("./controler/ContactController");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", ServiceRoutes);
app.use("/api", NewsRoutes);
app.use("/api", ContactRoutes);

app.listen(8000, () =>
  console.log(`Server running on http://localhost:${8000}`)
);
