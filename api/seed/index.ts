import CompaniesSeed from "./companies";
import ProductsSeed from "./products";
import BrandsSeed from "./brands";
import ColorsSeed from "./colors";
import ImagesSeed from "./images";
import SkusSeed from "./skus";

export default async function Seed() {
  await CompaniesSeed();
  await ProductsSeed();
  await BrandsSeed();
  await ColorsSeed();
  await ImagesSeed();
  await SkusSeed();
}
