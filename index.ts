import GameTop from "./routes/gametop";
import ShopInfo from "./routes/shopinfo";

export function register() {
  R.GameCode("L44");
  R.Contributor("Kirito", "https://github.com/kirito3481");

  R.Route("logger.report", true);

  R.Route("shopinfo.regist", ShopInfo);
  R.Route("gametop.regist", GameTop.GetProfile);
  R.Route("gametop.get_pdata", GameTop.GetProfile);
  R.Route("gametop.get_mdata", GameTop.GetScores);
  R.Route("gametop.get_meeting", GameTop.Meeting);

  R.Unhandled();
}
