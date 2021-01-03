function handleLobbyCheck(data) {
  return { data: {} };
}

export default ({ module, method }: EamuseInfo, data, send: EamuseSend) => {
  const req = `${module}.${method}`;
  let sendObj = null;

  if (req === "lobby.check") {
    sendObj = handleLobbyCheck(data);
  }

  return sendObj;
};
