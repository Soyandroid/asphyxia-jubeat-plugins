import { GameInfo, emoList } from "./shopinfo";
import { JubeatProfile } from "../models/profile";
import { FestoCourse } from "../static/courses";

const GetProfile = async (req: EamuseInfo, data: any, send: EamuseSend) => {
  const {
    data: { player },
  } = data;
  const refid = $(player).content("refid");
  const name = $(player).content("name") || null;

  if (!refid) return send.deny();

  let profile = await DB.FindOne<JubeatProfile>(refid, {
    collection: "profile",
  });

  if (!profile && name) {
    try {
      profile = await DB.Insert<JubeatProfile>(refid, {
        collection: "profile",
        jubeatId: Math.round(Math.random() * 99999999),
        name,
        eventFlag: 0,
        firstPlay: true,
        info: {
          bonusTunePoints: 0,
          isBonusTunePlayed: false,
        },
        last: {
          totalPlayTime: 0,
          shopname: "",
          areaname: "",
          musicId: 0,
          seqId: 0,
          seqEditId: "",
          sort: 0,
          category: 0,
          expertOption: 0,
        },
        settings: {
          marker: 0,
          theme: 0,
          title: 0,
          parts: 0,
          rankSort: 0,
          comboDisp: 0,
          emblem: [0, 0, 0, 0, 0],
          matching: 0,
          hard: 0,
          hazard: 0,
        },
        rivals: [],
        emo: [],
      });
    } catch {
      return send.deny();
    }
  } else if (!profile && !name) {
    return send.deny();
  }

  const sendObj = {
    data: {
      ...GameInfo,
      player: {
        jid: K.ITEM("s32", profile.jubeatId),
        session_id: K.ITEM("s32", 1),
        name: K.ITEM("str", profile.name),
        event_flag: K.ITEM("u64", BigInt(profile.eventFlag)),
        info: {
          tune_cnt: K.ITEM("s32", 0),
          save_cnt: K.ITEM("s32", 0),
          saved_cnt: K.ITEM("s32", 0),
          fc_cnt: K.ITEM("s32", 0),
          ex_cnt: K.ITEM("s32", 0),
          clear_cnt: K.ITEM("s32", 0),
          match_cnt: K.ITEM("s32", 0),
          beat_cnt: K.ITEM("s32", 0),
          mynews_cnt: K.ITEM("s32", 0),
          mtg_entry_cnt: K.ITEM("s32", 0),
          mtg_hold_cnt: K.ITEM("s32", 0),
          mtg_result: K.ITEM("u8", 0),
          bonus_tune_points: K.ITEM("s32", profile.info.bonusTunePoints),
          is_bonus_tune_played: K.ITEM("bool", profile.info.isBonusTunePlayed),
        },
        last: {
          play_time: K.ITEM("s64", BigInt(profile.last.totalPlayTime)),
          shopname: K.ITEM("str", profile.last.shopname),
          areaname: K.ITEM("str", profile.last.areaname),
          music_id: K.ITEM("s32", profile.last.musicId),
          seq_id: K.ITEM("s8", profile.last.seqId),
          seq_edit_id: K.ITEM("str", profile.last.seqEditId),
          sort: K.ITEM("s8", profile.last.sort),
          category: K.ITEM("s8", profile.last.category),
          expert_option: K.ITEM("s8", profile.last.expertOption),

          settings: {
            marker: K.ITEM("s8", profile.settings.marker),
            theme: K.ITEM("s8", profile.settings.theme),
            title: K.ITEM("s16", profile.settings.title),
            parts: K.ITEM("s16", profile.settings.parts),
            rank_sort: K.ITEM("s8", profile.settings.rankSort),
            combo_disp: K.ITEM("s8", profile.settings.comboDisp),
            emblem: K.ARRAY("s16", profile.settings.emblem),
            matching: K.ITEM("s8", profile.settings.matching),
            hard: K.ITEM("s8", profile.settings.hard),
            hazard: K.ITEM("s8", profile.settings.hazard),
          },
        },
        item: {
          music_list: K.ARRAY("s32", new Array(64).fill(-1)),
          secret_list: K.ARRAY("s32", new Array(64).fill(-1)),
          theme_list: K.ARRAY("s32", new Array(16).fill(-1)),
          marker_list: K.ARRAY("s32", new Array(16).fill(-1)),
          title_list: K.ARRAY("s32", new Array(160).fill(-1)),
          parts_list: K.ARRAY("s32", new Array(160).fill(-1)),
          emblem_list: K.ARRAY("s32", new Array(96).fill(-1)),
          commu_list: K.ARRAY("s32", new Array(16).fill(-1)),

          new: {
            secret_list: K.ARRAY("s32", new Array(64).fill(0)),
            theme_list: K.ARRAY("s32", new Array(16).fill(0)),
            marker_list: K.ARRAY("s32", new Array(16).fill(0)),
          },
        },
        rivallist: profile.rivals.map((rival) => ({
          jid: K.ITEM("s32", rival.jubeatId),
          name: K.ITEM("str", rival.name),
        })),
        lab_edit_seq: K.ATTR({ count: "0" }, { seq: [] }),
        fc_challenge: {
          today: {
            music_id: K.ITEM("s32", -1),
            state: K.ITEM("u8", 0),
          },
          whim: {
            music_id: K.ITEM("s32", -1),
            state: K.ITEM("u8", 0),
          },
        },
        official_news: {
          news_list: { news: [] },
        },
        history: K.ATTR({ count: "0" }, { tune: [] }),
        free_first_play: {
          is_available: K.ITEM("bool", profile.firstPlay),
        },
        event_info: { event: [] },
        jbox: {
          point: K.ITEM("s32", 0),
          emblem: {
            normal: { index: K.ITEM("s16", 2) },
            premium: { index: K.ITEM("s16", 1) },
          },
        },
        new_music: {},
        navi: {
          flag: K.ITEM("u64", BigInt(0)),
        },
        gift_list: {},
        question_list: {},
        team_battle: {},
        server: {},
        course_list: {
          course: FestoCourse.map((course, i) =>
            K.ATTR({ id: String(i + 1) }, { status: K.ITEM("s8", 0) })
          ),
          category_list: {
            category: [
              K.ATTR({ id: String(1) }, { is_display: K.ITEM("bool", true) }),
              K.ATTR({ id: String(2) }, { is_display: K.ITEM("bool", true) }),
              K.ATTR({ id: String(3) }, { is_display: K.ITEM("bool", true) }),
              K.ATTR({ id: String(4) }, { is_display: K.ITEM("bool", true) }),
              K.ATTR({ id: String(5) }, { is_display: K.ITEM("bool", true) }),
              K.ATTR({ id: String(6) }, { is_display: K.ITEM("bool", true) }),
            ],
          },
        },
        fill_in_category: {
          normal: {
            no_gray_flag_list: K.ARRAY("s32", [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ]),
            all_yellow_flag_list: K.ARRAY("s32", [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ]),
            full_combo_flag_list: K.ARRAY("s32", [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ]),
            excellent_flag_list: K.ARRAY("s32", [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ]),
          },
          hard: {
            no_gray_flag_list: K.ARRAY("s32", [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ]),
            all_yellow_flag_list: K.ARRAY("s32", [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ]),
            full_combo_flag_list: K.ARRAY("s32", [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ]),
            excellent_flag_list: K.ARRAY("s32", [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ]),
          },
        },
        emo_list: {
          emo: emoList.map((emo, i) => {
            const playerEmo = profile.emo[i];
            if (!playerEmo) {
              return K.ATTR({ id: String(i + 1) }, { num: K.ITEM("s32", 0) });
            } else {
              return K.ATTR(
                { id: String(playerEmo.id) },
                { num: K.ITEM("s32", playerEmo.value) }
              );
            }
          }),
        },
        eamuse_gift_list: { gift: [] },
        department: {
          shop_list: { shop: [] },
        },
      },
    },
  };
  console.dir(sendObj.data.player.course_list, { depth: null });
  return send.object(sendObj, { compress: true });
};

const GetScores = async (req: EamuseInfo, data: any, send: EamuseSend) => {
  const {
    data: { player },
  } = data;
  const jid = $(player).content("jid");
  const ver = $(player).content("mdata_ver");
  const rival = $(player).content("rival");

  if (!jid || !ver || !rival) return send.deny();

  const scores = (await DB.Find({ collection: "scores", jid })) || [];

  return send.object(
    {
      data: {
        player: {
          jid: K.ITEM("s32", jid),

          mdata_list: {
            musicdata: scores.map((score) => {}),
          },
        },
      },
    },
    { compress: true }
  );
};

const Meeting = (req: EamuseInfo, data: any, send: EamuseSend) => {
  return send.object({
    data: {
      meeting: {
        single: K.ATTR({ count: "0" }),
      },
      reward: {
        total: K.ITEM("s32", 0),
        point: K.ITEM("s32", 0),
      },
    },
  });
};

const Getinfo = (req: EamuseInfo, data: any, send: EamuseSend) =>
  send.object({ data: GameInfo }, { compress: true });

export default { GetProfile, GetScores, Meeting, Getinfo };
