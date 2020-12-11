import { shopinfoRegist } from "./handlers/shopinfo";

export function register() {
  console.log("Registering L44");
  R.GameCode("L44");

  R.Route("shopinfo.regist", shopinfoRegist);

  R.Unhandled();
}
