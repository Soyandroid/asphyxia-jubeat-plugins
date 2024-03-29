import { VersionConstants } from "../constants";

export interface JubeatProfile {
  collection: "profile";

  profile_version: VersionConstants;

  jubeatId: number;
  name: string;
  eventFlag: number;
  firstPlay: boolean;

  info: {
    bonusTunePoints: number;
    isBonusTunePlayed: boolean;
  };

  last: {
    totalPlayTime: number;
    shopname: string;
    areaname: string;
    musicId: number;
    seqId: number;
    seqEditId: string;
    sort: number;
    category: number;
    expertOption: number;
  };

  settings: {
    marker: number;
    theme: number;
    title: number;
    parts: number;
    rankSort: number;
    comboDisp: number;
    emblem: number[];
    matching: number;
    hard: number;
    hazard: number;
  };
}
