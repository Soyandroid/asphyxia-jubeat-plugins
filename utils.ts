export function RegionCheck(model: string) {
  const region = model.split(":")[1];
  let curRegion = "Unknown";
  if (region === "J") {
    return "Japan";
  } else if (region === "K") {
    return "Korea";
  } else if (region === "A") {
    return "Asia";
  } else if (region === "C") {
    return "China";
  } else if (region === "Y") {
    return "Indonesia";
  } else if (region === "U") {
    return "North America";
  } else if (region === "E") {
    return "Europe";
  }
}

export function VersionCheck(curVer, ver: number[]) {
  return curVer >= ver[0] && curVer <= ver[1];
}

export default { VersionCheck };
