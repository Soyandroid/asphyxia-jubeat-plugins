import ShopInfo from "./routes/shopinfo";
import GameTop from "./routes/gametop";
import Lobby from "./routes/lobby";
import Recommend from "./routes/recommend";

export function register() {
  R.GameCode("L44");
  R.Contributor("Kirito", "https://github.com/kirito3481");

  R.Route("logger.report", true);
  R.Route("recommend.get_recommend", Recommend.Get);

  R.Route("shopinfo.regist", ShopInfo);

  R.Route("gametop.regist", GameTop.GetProfile);
  R.Route("gametop.get_pdata", GameTop.GetProfile);
  R.Route("gametop.get_mdata", GameTop.GetScores);
  R.Route("gametop.get_meeting", GameTop.Meeting);

  R.Route("lobby.check", Lobby.Check);
  R.Route("lobby.entry", Lobby.Entry);
  R.Route("lobby.refresh", Lobby.Refresh);
  R.Route("lobby.report", Lobby.Report);

  R.Unhandled();
}
