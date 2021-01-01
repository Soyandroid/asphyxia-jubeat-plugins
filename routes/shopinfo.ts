export const GameInfo = {
  info: {
    white_music_list: K.ARRAY("s32", new Array(32).fill(-1)),
    white_marker_list: K.ARRAY("s32", new Array(16).fill(-1)),
    white_theme_list: K.ARRAY("s32", new Array(16).fill(-1)),
    open_music_list: K.ARRAY("s32", new Array(32).fill(-1)),

    expert_option: {
      is_available: K.ITEM("bool", true),
    },

    konami_logo_50th: {
      is_available: K.ITEM("bool", true),
    },

    all_music_matching: {
      is_available: K.ITEM("bool", false),
    },
  },
};

export default (_: EamuseInfo, data: any, send: EamuseSend) => {
  const locId = $(data).element("shop").content("locationid");
  return send.object(
    {
      data: {
        cabid: K.ITEM("u32", 1),
        locationid: K.ITEM("str", locId),
        tax_phase: K.ITEM("u8", 0),
        facility: {
          exist: K.ITEM("u32", 0),
        },

        ...GameInfo,
      },
    },
    { compress: true }
  );
};
