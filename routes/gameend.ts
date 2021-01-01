const Regist = async (req: EamuseInfo, { data }, send: EamuseSend) => {
  const info = $(data).element("info");
  const result = $(data).element("result");
  const player = $(data).element("player");

  if (!player) {
    // Guest Player
  } else if (player) {
    const refid = player.content("refid");

    console.dir(player, { depth: null });

    try {
      await DB.Update(
        refid,
        { collection: "profile" },
        {
          $set: {
            eventFlag: player.content("event_flag"),
            firstPlay: false,

            info: {
              bonusTunePoints: player.content("bonus_tune_points"),
              isBonusTunePlayed: player.content("is_bonus_tune_played"),
            },
          },
          $inc: {
            "last.totalPlayTime": info.content("play_time"),
          },
        }
      );

      return send.object(
        { data: { player: { end_final_session_id: K.ITEM("s32", 1) } } },
        { compress: true }
      );
    } catch (e) {
      console.log(e);
      return send.deny();
    }
  }
};

const Final = async (req: EamuseInfo, data: any, send: EamuseSend) =>
  send.success({ compress: true });

export default { Regist, Final };
