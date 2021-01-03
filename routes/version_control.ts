import festo from "../games/festo";
import common from "./common";

export default (req: EamuseInfo, data: any, send: EamuseSend) => {
  const { module, method, model } = req;
  const [modelCode, dest, spec, rev, ext] = model.split(":");
  const version = Number.parseInt(ext);
  let sendObj = null;

  sendObj = common(req, data, send);

  if (modelCode === "H44") return null;
  if (modelCode === "I44") {
    if (version >= 2010031800) {
      // Append
      return null;
    } else {
      return null;
    }
  }
  if (modelCode === "J44") {
    if (version >= 2011032300) {
      // Append
      return null;
    } else {
      return null;
    }
  }
  if (modelCode === "K44") {
    if (version >= 2012031400) {
      // Append
      return null;
    } else {
      return null;
    }
  }
  if (modelCode === "L44") {
    if (version <= 2014022400) {
      console.log("saucer");
      // Saucer
      return null;
    } else if (version >= 2014030300 && version < 2015022000) {
      console.log("fulfill");
      // Fulfill
      return null;
    } else if (version >= 2015022000 && version < 2016033000) {
      console.log("prop");
      // Prop
      return null;
    } else if (version >= 2016033000 && version < 2017062600) {
      console.log("qubell");
      // Qubell
      return null;
    } else if (version >= 2017062600 && version < 2018090500) {
      console.log("clan");
      // Clan
      return null;
    } else if (version >= 2018090500) {
      sendObj = festo(req, data, send);
    }
  }

  console.dir(sendObj, { depth: null });

  return sendObj ? send.object(sendObj, { compress: true }) : null;
};
