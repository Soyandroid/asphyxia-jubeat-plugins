const Regist = async (req: EamuseInfo, data: any, send: EamuseSend) => {
  console.dir(data, { depth: null });
  return null;
};

const Final = async (req: EamuseInfo, data: any, send: EamuseSend) =>
  send.success({ compress: true });

export default { Regist, Final };
