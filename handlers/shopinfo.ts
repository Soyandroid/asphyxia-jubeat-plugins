import { Version } from "../versions";
import { RegionCheck, VersionCheck } from "../utils";

export const shopinfoRegist: EPR = async ({ model, module }, data, send) => {
  const ver = model.split(":")[4];
  const templatePath = "templates/gameinfo/";
  const locid = $(data).element("shop").str("locationid", "");
  const tax =
    RegionCheck(model) === "Japan"
      ? $(data)
          .element("shop")
          .element("testmode")
          .element("tax")
          .number("tax_phase")
      : 0;

  if (VersionCheck(ver, Version.PROP)) {
    send.xmlFile(
      templatePath + "prop.xml",
      { module, locid, tax },
      { compress: true }
    );
  } else if (VersionCheck(ver, Version.FESTO)) {
    send.xmlFile(
      templatePath + "festo.xml",
      { module, locid, tax },
      { compress: true }
    );
  } else {
    send.deny();
  }
};
