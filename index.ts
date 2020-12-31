import ShopInfo from "./routes/shopinfo";

export function register() {
  R.GameCode("L44");
  R.Contributor("Kirito", "https://github.com/kirito3481");

  R.Route("shopinfo.regist", ShopInfo);

  R.Unhandled();
}
