const EMO = [
  { id: 1, is_exchange: false }, // Default Emo

  { id: 2, is_exchange: false }, // 2018, 09
  { id: 3, is_exchange: false }, // 2018, 10
  { id: 4, is_exchange: false }, // 2018, 11
  { id: 5, is_exchange: false }, // 2018, 12

  { id: 6, is_exchange: false }, // 2019, 01
  { id: 7, is_exchange: false }, // 2019, 02
  { id: 8, is_exchange: false }, // 2019, 03
  { id: 9, is_exchange: false }, // 2019, 04
  { id: 10, is_exchange: false }, // 2019, 05
  { id: 11, is_exchange: false }, // 2019, 06
  { id: 12, is_exchange: false }, // 2019, 07
  { id: 13, is_exchange: false }, // 2019, 08
  { id: 14, is_exchange: false }, // 2019, 09
  { id: 15, is_exchange: false }, // 2019, 10
  { id: 16, is_exchange: false }, // 2019, 11
];

const GameInfo = {
  info: {
    white_music_list: K.ARRAY("s32", new Array(64).fill(-1)),
    white_marker_list: K.ARRAY("s32", new Array(16).fill(-1)),
    white_theme_list: K.ARRAY("s32", new Array(16).fill(-1)),
    open_music_list: K.ARRAY("s32", new Array(64).fill(-1)),

    expert_option: { is_available: K.ITEM("bool", true) },

    konami_logo_50th: { is_available: K.ITEM("bool", true) },

    all_music_matching: { is_available: K.ITEM("bool", false) },

    emo_list: {
      emo: EMO.map((emo) =>
        K.ATTR(
          { id: String(emo.id) },
          {
            tex_id: K.ITEM("s32", emo.id),
            is_exchange: K.ITEM("bool", emo.is_exchange),
          }
        )
      ),
    },
  },
};

const ProfileFormat = {
  player: {
    jid: K.ITEM("s32", 1),
    session_id: K.ITEM("s32", 1),
    name: K.ITEM("str", "NAME"),
    event_flag: K.ITEM("u64", 0n),

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
      bonus_tune_points: K.ITEM("s32", 0),
      is_bonus_tune_played: K.ITEM("bool", false),
    },

    last: {
      play_time: K.ITEM("s64", 0n),
      shopname: K.ITEM("str", ""),
      areaname: K.ITEM("str", ""),
      music_id: K.ITEM("s32", 0),
      seq_id: K.ITEM("s8", 0),
      sort: K.ITEM("s8", 0),
      category: K.ITEM("s8", 0),
      expert_option: K.ITEM("s8", 0),

      settings: {
        marker: K.ITEM("s8", 0),
        theme: K.ITEM("s8", 0),
        title: K.ITEM("s16", 0),
        parts: K.ITEM("s16", 0),
        rank_sort: K.ITEM("s8", 0),
        combo_disp: K.ITEM("s8", 0),
        emblem: K.ARRAY("s16", [0, 0, 0, 0, 0]),
        matching: K.ITEM("s8", 0),
        hard: K.ITEM("s8", 0),
        hazard: K.ITEM("s8", 0),
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

    rivallist: { rival: [] },

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
    free_first_play: { is_available: K.ITEM("bool", false) },
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
      course: [],
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
      emo: [],
    },
    eamuse_gift_list: { gift: [] },
    department: {
      shop_list: { shop: [] },
    },
  },
};

function handleShopinfoRegist({ shop }): Object {
  const locId = $(shop).content("locationid");

  return {
    data: {
      cabid: K.ITEM("u32", 1),
      locationid: K.ITEM("str", locId),
      tax_phase: K.ITEM("u8", 1),
      facility: { exist: K.ITEM("u32", 1) },

      ...GameInfo,
    },
  };
}

function handleGameTopGetInfo() {
  return { data: GameInfo };
}

function handleGameTopRegist() {
  return { data: { ...GameInfo, ...ProfileFormat } };
}

function handleGameTopGetPdata() {
  return { data: { ...GameInfo, ...ProfileFormat } };
}

export default (
  { module, method }: EamuseInfo,
  data,
  send: EamuseSend
): Promise<void> => {
  const req = `${module}.${method}`;
  let sendObj = null;

  if (req === "shopinfo.regist") {
    sendObj = handleShopinfoRegist(data);
  } else if (req === "gametop.get_info") {
    sendObj = handleGameTopGetInfo();
  } else if (req === "gametop.regist") {
    sendObj = handleGameTopRegist();
  } else if (req === "gametop.get_pdata") {
    sendObj = handleGameTopGetPdata();
  }

  return sendObj;
};
