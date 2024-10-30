import CompaniesRouters from "./routers/companies";
import ProductsRouters from "./routers/products";
import BrandsRouters from "./routers/brands";
import ColorsRouters from "./routers/colors";
import ImagesRouters from "./routers/images";
import SkusRouters from "./routers/skus";
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/companie", CompaniesRouters);
app.use("/product", ProductsRouters);
app.use("/brand", BrandsRouters);
app.use("/color", ColorsRouters);
app.use("/image", ImagesRouters);
app.use("/sku", SkusRouters);

app.get("/", (_req, res) => {
  res.status(200).json({ status: "active" });
});

const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
