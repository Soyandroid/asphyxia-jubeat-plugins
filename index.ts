import ShopInfo from "./routes/shopinfo";
import GameTop from "./routes/gametop";
import Lobby from "./routes/lobby";
import Recommend from "./routes/recommend";
import Gameend from "./routes/gameend";
import versionControl from "./routes/version_control";

export function register() {
  // R.GameCode("H44");
  // R.GameCode("I44");
  // R.GameCode("J44");
  // R.GameCode("K44");
  R.GameCode("L44");
  R.Contributor("Kirito", "https://github.com/kirito3481");

  /*R.Route("logger.report", true);
  R.Route("recommend.get_recommend", Recommend.Get);

  R.Route("shopinfo.regist", ShopInfo);

  R.Route("gametop.get_info", GameTop.Getinfo);
  R.Route("gametop.regist", GameTop.GetProfile);
  R.Route("gametop.get_pdata", GameTop.GetProfile);
  R.Route("gametop.get_mdata", GameTop.GetScores);
  R.Route("gametop.get_meeting", GameTop.Meeting);

  R.Route("lobby.check", Lobby.Check);
  R.Route("lobby.entry", Lobby.Entry);
  R.Route("lobby.refresh", Lobby.Refresh);
  R.Route("lobby.report", Lobby.Report);

  R.Route("gameend.regist", Gameend.Regist);
  R.Route("gameend.final", Gameend.Final);*/

  R.Route("logger.report", versionControl);
  R.Route("shopinfo.regist", versionControl);
  R.Route("recommend.get_recommend", versionControl);

  R.Route("gametop.get_info", versionControl);
  R.Route("gametop.regist", versionControl);
  R.Route("gametop.get_pdata", versionControl);
  R.Route("gametop.get_mdata", versionControl);
  R.Route("gametop.get_meeting", versionControl);

  R.Route("lobby.check", versionControl);
  R.Route("lobby.entry", versionControl);
  R.Route("lobby.refresh", versionControl);
  R.Route("lobby.report", versionControl);

  R.Route("gameend.regist", versionControl);
  R.Route("gameend.final", versionControl);

  R.Unhandled();
}
