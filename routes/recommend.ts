const Get = (req: EamuseInfo, data: any, send: EamuseSend) => {
  return send.object(
    { data: { player: { music_list: { music: [] } } } },
    { compress: true }
  );
};

export default { Get };
