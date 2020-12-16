import { lobbyEntry } from "./handlers/lobby";
import { shopinfoRegist } from "./handlers/shopinfo";

export function register() {
  console.log("Registering L44");
  R.GameCode("L44");

  R.Route("shopinfo.regist", shopinfoRegist);

  R.Route("gametop.regist", shopinfoRegist);

  R.Route("lobby.entry", lobbyEntry);

  R.Unhandled();
}
