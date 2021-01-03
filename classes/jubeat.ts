import { VersionConstants } from "../constants";

class JubeatBase {
  name: "None";
  version: VersionConstants;

  constructor(version: VersionConstants) {
    this.version = version;
  }
}
