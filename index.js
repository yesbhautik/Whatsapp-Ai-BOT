const _0x2c893f = _0x2504;
(function (_0x2207ac, _0xe44904) {
  const _0x5045c2 = _0x2504,
    _0x397b92 = _0x2207ac();
  while (!![]) {
    try {
      const _0x92aba1 =
        parseInt(_0x5045c2(0x1dc)) / 0x1 +
        (-parseInt(_0x5045c2(0x1c5)) / 0x2) *
          (parseInt(_0x5045c2(0x241)) / 0x3) +
        (parseInt(_0x5045c2(0x1cc)) / 0x4) *
          (parseInt(_0x5045c2(0x1e9)) / 0x5) +
        parseInt(_0x5045c2(0x1f4)) / 0x6 +
        (parseInt(_0x5045c2(0x1db)) / 0x7) *
          (-parseInt(_0x5045c2(0x1cf)) / 0x8) +
        -parseInt(_0x5045c2(0x1f7)) / 0x9 +
        (-parseInt(_0x5045c2(0x1c8)) / 0xa) *
          (-parseInt(_0x5045c2(0x228)) / 0xb);
      if (_0x92aba1 === _0xe44904) break;
      else _0x397b92["push"](_0x397b92["shift"]());
    } catch (_0x337520) {
      _0x397b92["push"](_0x397b92["shift"]());
    }
  }
})(_0x17f9, 0xb2647);
function _0x2504(_0x2cb0ce, _0x4af41f) {
  const _0x17f941 = _0x17f9();
  return (
    (_0x2504 = function (_0x2504f3, _0x8bd9d3) {
      _0x2504f3 = _0x2504f3 - 0x1c0;
      let _0x2a817c = _0x17f941[_0x2504f3];
      return _0x2a817c;
    }),
    _0x2504(_0x2cb0ce, _0x4af41f)
  );
}
const sessionName = "Yesbhautik",
  donet = _0x2c893f(0x247),
  owner = [_0x2c893f(0x1c2)],
  {
    default: yesbhautikaiConnect,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    makeInMemoryStore,
    jidDecode,
    proto,
    getContentType,
    Browsers,
    fetchLatestWaWebVersion,
  } = require("@whiskeysockets/baileys"),
  pino = require("pino"),
  { Boom } = require(_0x2c893f(0x225)),
  fs = require("fs"),
  axios = require(_0x2c893f(0x20d)),
  chalk = require("chalk"),
  figlet = require(_0x2c893f(0x236)),
  _ = require(_0x2c893f(0x202)),
  PhoneNumber = require("awesome-phonenumber"),
  store = makeInMemoryStore({
    logger: pino()[_0x2c893f(0x230)]({
      level: _0x2c893f(0x24c),
      stream: _0x2c893f(0x250),
    }),
  }),
  color = (_0x4736c7, _0x3c5e34) => {
    const _0x5b1852 = _0x2c893f;
    return !_0x3c5e34
      ? chalk[_0x5b1852(0x255)](_0x4736c7)
      : chalk[_0x5b1852(0x1de)](_0x3c5e34)(_0x4736c7);
  };
function smsg(_0x5a50ec, _0x19f0a3, _0x5f4570) {
  const _0x722305 = _0x2c893f;
  if (!_0x19f0a3) return _0x19f0a3;
  let _0x2f2f5d = proto[_0x722305(0x1f1)];
  if (_0x19f0a3[_0x722305(0x234)]) {
    (_0x19f0a3["id"] = _0x19f0a3[_0x722305(0x234)]["id"]),
      (_0x19f0a3[_0x722305(0x21a)] =
        _0x19f0a3["id"][_0x722305(0x22f)](_0x722305(0x238)) &&
        _0x19f0a3["id"][_0x722305(0x244)] === 0x10),
      (_0x19f0a3[_0x722305(0x1d5)] =
        _0x19f0a3[_0x722305(0x234)][_0x722305(0x1ca)]),
      (_0x19f0a3[_0x722305(0x20a)] =
        _0x19f0a3[_0x722305(0x234)][_0x722305(0x20a)]),
      (_0x19f0a3["isGroup"] = _0x19f0a3[_0x722305(0x1d5)]["endsWith"]("@g.us")),
      (_0x19f0a3[_0x722305(0x1ee)] = _0x5a50ec[_0x722305(0x200)](
        (_0x19f0a3["fromMe"] && _0x5a50ec[_0x722305(0x23b)]["id"]) ||
          _0x19f0a3[_0x722305(0x227)] ||
          _0x19f0a3[_0x722305(0x234)][_0x722305(0x227)] ||
          _0x19f0a3[_0x722305(0x1d5)] ||
          ""
      ));
    if (_0x19f0a3["isGroup"])
      _0x19f0a3[_0x722305(0x227)] =
        _0x5a50ec[_0x722305(0x200)](
          _0x19f0a3[_0x722305(0x234)][_0x722305(0x227)]
        ) || "";
  }
  if (_0x19f0a3[_0x722305(0x25c)]) {
    (_0x19f0a3[_0x722305(0x1f9)] = getContentType(_0x19f0a3[_0x722305(0x25c)])),
      (_0x19f0a3[_0x722305(0x1da)] =
        _0x19f0a3[_0x722305(0x1f9)] == _0x722305(0x1fc)
          ? _0x19f0a3[_0x722305(0x25c)][_0x19f0a3[_0x722305(0x1f9)]]["message"][
              getContentType(
                _0x19f0a3["message"][_0x19f0a3["mtype"]][_0x722305(0x25c)]
              )
            ]
          : _0x19f0a3[_0x722305(0x25c)][_0x19f0a3[_0x722305(0x1f9)]]),
      (_0x19f0a3["body"] =
        _0x19f0a3[_0x722305(0x25c)][_0x722305(0x1f8)] ||
        _0x19f0a3["msg"][_0x722305(0x20b)] ||
        _0x19f0a3[_0x722305(0x1da)][_0x722305(0x1d8)] ||
        (_0x19f0a3[_0x722305(0x1f9)] == _0x722305(0x1f5) &&
          _0x19f0a3[_0x722305(0x1da)][_0x722305(0x1e1)][_0x722305(0x1d7)]) ||
        (_0x19f0a3[_0x722305(0x1f9)] == "buttonsResponseMessage" &&
          _0x19f0a3[_0x722305(0x1da)][_0x722305(0x1d2)]) ||
        (_0x19f0a3[_0x722305(0x1f9)] == "viewOnceMessage" &&
          _0x19f0a3[_0x722305(0x1da)][_0x722305(0x20b)]) ||
        _0x19f0a3[_0x722305(0x1d8)]);
    let _0x4a5a3a = (_0x19f0a3[_0x722305(0x216)] = _0x19f0a3[_0x722305(0x1da)][
      _0x722305(0x245)
    ]
      ? _0x19f0a3[_0x722305(0x1da)][_0x722305(0x245)][_0x722305(0x251)]
      : null);
    _0x19f0a3[_0x722305(0x259)] = _0x19f0a3["msg"][_0x722305(0x245)]
      ? _0x19f0a3[_0x722305(0x1da)]["contextInfo"][_0x722305(0x259)]
      : [];
    if (_0x19f0a3[_0x722305(0x216)]) {
      let _0x5eafb5 = getContentType(_0x4a5a3a);
      _0x19f0a3[_0x722305(0x216)] = _0x19f0a3[_0x722305(0x216)][_0x5eafb5];
      [_0x722305(0x1d1)][_0x722305(0x1fd)](_0x5eafb5) &&
        ((_0x5eafb5 = getContentType(_0x19f0a3[_0x722305(0x216)])),
        (_0x19f0a3[_0x722305(0x216)] = _0x19f0a3[_0x722305(0x216)][_0x5eafb5]));
      if (typeof _0x19f0a3["quoted"] === _0x722305(0x1e4))
        _0x19f0a3[_0x722305(0x216)] = { text: _0x19f0a3[_0x722305(0x216)] };
      (_0x19f0a3[_0x722305(0x216)][_0x722305(0x1f9)] = _0x5eafb5),
        (_0x19f0a3["quoted"]["id"] =
          _0x19f0a3[_0x722305(0x1da)]["contextInfo"][_0x722305(0x204)]),
        (_0x19f0a3["quoted"][_0x722305(0x1d5)] =
          _0x19f0a3[_0x722305(0x1da)][_0x722305(0x245)]["remoteJid"] ||
          _0x19f0a3[_0x722305(0x1d5)]),
        (_0x19f0a3[_0x722305(0x216)][_0x722305(0x21a)] = _0x19f0a3[
          _0x722305(0x216)
        ]["id"]
          ? _0x19f0a3[_0x722305(0x216)]["id"]["startsWith"]("BAE5") &&
            _0x19f0a3[_0x722305(0x216)]["id"]["length"] === 0x10
          : ![]),
        (_0x19f0a3[_0x722305(0x216)]["sender"] = _0x5a50ec["decodeJid"](
          _0x19f0a3[_0x722305(0x1da)][_0x722305(0x245)]["participant"]
        )),
        (_0x19f0a3["quoted"][_0x722305(0x20a)] =
          _0x19f0a3[_0x722305(0x216)][_0x722305(0x1ee)] ===
          _0x5a50ec[_0x722305(0x200)](_0x5a50ec["user"]["id"])),
        (_0x19f0a3[_0x722305(0x216)][_0x722305(0x1d8)] =
          _0x19f0a3[_0x722305(0x216)][_0x722305(0x1d8)] ||
          _0x19f0a3[_0x722305(0x216)][_0x722305(0x20b)] ||
          _0x19f0a3[_0x722305(0x216)][_0x722305(0x1f8)] ||
          _0x19f0a3["quoted"][_0x722305(0x233)] ||
          _0x19f0a3[_0x722305(0x216)][_0x722305(0x20f)] ||
          _0x19f0a3[_0x722305(0x216)]["title"] ||
          ""),
        (_0x19f0a3[_0x722305(0x216)]["mentionedJid"] = _0x19f0a3[
          _0x722305(0x1da)
        ]["contextInfo"]
          ? _0x19f0a3[_0x722305(0x1da)][_0x722305(0x245)][_0x722305(0x259)]
          : []),
        (_0x19f0a3[_0x722305(0x21e)] = _0x19f0a3["getQuotedMessage"] =
          async () => {
            const _0x488d7c = _0x722305;
            if (!_0x19f0a3["quoted"]["id"]) return ![];
            let _0x2954f4 = await _0x5f4570[_0x488d7c(0x24f)](
              _0x19f0a3[_0x488d7c(0x1d5)],
              _0x19f0a3[_0x488d7c(0x216)]["id"],
              _0x5a50ec
            );
            return exports[_0x488d7c(0x25a)](_0x5a50ec, _0x2954f4, _0x5f4570);
          });
      let _0x4c19f7 = (_0x19f0a3[_0x722305(0x216)][_0x722305(0x1ef)] =
        _0x2f2f5d[_0x722305(0x237)]({
          key: {
            remoteJid: _0x19f0a3[_0x722305(0x216)][_0x722305(0x1d5)],
            fromMe: _0x19f0a3[_0x722305(0x216)][_0x722305(0x20a)],
            id: _0x19f0a3[_0x722305(0x216)]["id"],
          },
          message: _0x4a5a3a,
          ...(_0x19f0a3["isGroup"]
            ? { participant: _0x19f0a3["quoted"][_0x722305(0x1ee)] }
            : {}),
        }));
      (_0x19f0a3["quoted"][_0x722305(0x231)] = () =>
        _0x5a50ec[_0x722305(0x1fa)](
          _0x19f0a3[_0x722305(0x216)][_0x722305(0x1d5)],
          { delete: _0x4c19f7[_0x722305(0x234)] }
        )),
        (_0x19f0a3[_0x722305(0x216)]["copyNForward"] = (
          _0x22464d,
          _0xa9524f = ![],
          _0x4aad02 = {}
        ) =>
          _0x5a50ec["copyNForward"](
            _0x22464d,
            _0x4c19f7,
            _0xa9524f,
            _0x4aad02
          )),
        (_0x19f0a3[_0x722305(0x216)][_0x722305(0x1f3)] = () =>
          _0x5a50ec[_0x722305(0x214)](_0x19f0a3["quoted"]));
    }
  }
  if (_0x19f0a3[_0x722305(0x1da)][_0x722305(0x21d)])
    _0x19f0a3["download"] = () => _0x5a50ec[_0x722305(0x214)](_0x19f0a3["msg"]);
  return (
    (_0x19f0a3["text"] =
      _0x19f0a3[_0x722305(0x1da)][_0x722305(0x1d8)] ||
      _0x19f0a3[_0x722305(0x1da)]["caption"] ||
      _0x19f0a3[_0x722305(0x25c)][_0x722305(0x1f8)] ||
      _0x19f0a3[_0x722305(0x1da)][_0x722305(0x233)] ||
      _0x19f0a3[_0x722305(0x1da)][_0x722305(0x20f)] ||
      _0x19f0a3["msg"]["title"] ||
      ""),
    (_0x19f0a3["reply"] = (
      _0xcb0784,
      _0x40e0c1 = _0x19f0a3["chat"],
      _0x213c61 = {}
    ) =>
      Buffer["isBuffer"](_0xcb0784)
        ? _0x5a50ec[_0x722305(0x1d0)](
            _0x40e0c1,
            _0xcb0784,
            _0x722305(0x1e8),
            "",
            _0x19f0a3,
            { ..._0x213c61 }
          )
        : _0x5a50ec[_0x722305(0x23a)](_0x40e0c1, _0xcb0784, _0x19f0a3, {
            ..._0x213c61,
          })),
    (_0x19f0a3[_0x722305(0x252)] = () =>
      exports["smsg"](
        _0x5a50ec,
        _0x2f2f5d["fromObject"](_0x2f2f5d[_0x722305(0x1ea)](_0x19f0a3))
      )),
    (_0x19f0a3["copyNForward"] = (
      _0x3c8858 = _0x19f0a3[_0x722305(0x1d5)],
      _0x141214 = ![],
      _0x15d221 = {}
    ) =>
      _0x5a50ec[_0x722305(0x254)](_0x3c8858, _0x19f0a3, _0x141214, _0x15d221)),
    _0x19f0a3
  );
}
function _0x17f9() {
  const _0xdf1efc = [
    "cMod",
    "downloadMediaMessage",
    "connectionReplaced",
    "quoted",
    "log",
    "messages.upsert",
    "from",
    "isBaileys",
    "redBright",
    "status",
    "url",
    "getQuotedObj",
    "replace",
    "Yesbhautik",
    "0@s.whatsapp.net",
    "Whatsapp-Ai-Bot\x20-\x20YesbhautikX",
    "bind",
    "Connection\x20TimedOut,\x20Reconnecting...",
    "@hapi/boom",
    "default",
    "participant",
    "11FaDWfo",
    "unwatchFile",
    "notify",
    "getName",
    "name",
    "close",
    "./yesbhautikai",
    "startsWith",
    "child",
    "delete",
    "output",
    "contentText",
    "key",
    "statusCode",
    "figlet",
    "fromObject",
    "BAE5",
    "Unhandled\x20Rejection\x20at:",
    "sendText",
    "user",
    "@broadcast",
    "public",
    "set",
    "creds.update",
    "alloc",
    "27vDRTnd",
    "Standard",
    "Type\x20/menu\x20to\x20see\x20menu",
    "length",
    "contextInfo",
    "get",
    "https://go.yesbhautik.co.in/yukl0o82",
    "using\x20WA\x20v",
    "isBuffer",
    "Browser",
    "test",
    "silent",
    "resolve",
    "server",
    "loadMessage",
    "store",
    "quotedMessage",
    "copy",
    "@s.whatsapp.net",
    "copyNForward",
    "green",
    "yellow",
    "Connection\x20Lost\x20from\x20Server,\x20reconnecting...",
    "2.1.0",
    "mentionedJid",
    "smsg",
    "Restart\x20Required,\x20Restarting...",
    "message",
    "sendImage",
    "Unknown\x20DisconnectReason:\x20",
    "916353586391",
    "unhandledRejection",
    "textSync",
    "4770SWmJSN",
    "verifiedName",
    "Donate\x20for\x20creator\x20https://go.yesbhautik.co.in/yukl0o82",
    "14513560EPNkcD",
    "international",
    "remoteJid",
    "connectionClosed",
    "6220exlyoS",
    "Something\x20went\x20wrong",
    "messages",
    "4360928yrOdbx",
    "sendMedia",
    "productMessage",
    "selectedButtonId",
    "groupMetadata",
    "serializeM",
    "chat",
    "restartRequired",
    "selectedRowId",
    "text",
    "Caught\x20exception:\x20",
    "msg",
    "7hROFXC",
    "649202WSVnRV",
    "reason:",
    "keyword",
    "Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again",
    "@g.us",
    "singleSelectReply",
    "subject",
    "keys",
    "string",
    "Update\x20",
    "contacts",
    "query",
    "file",
    "855dqYyhN",
    "toObject",
    "exit",
    "Bot\x20started!\x0a\x0aDon\x27t\x20forget\x20to\x20support,\x20dude:)\x0a",
    "getNumber",
    "sender",
    "fakeObj",
    "error",
    "WebMessageInfo",
    "ephemeralMessage",
    "download",
    "443172QwoJqQ",
    "listResponseMessage",
    "badSession",
    "10287441jFBtZL",
    "conversation",
    "mtype",
    "sendMessage",
    "data",
    "viewOnceMessage",
    "includes",
    ",\x20isLatest:\x20",
    "connection.update",
    "decodeJid",
    "split",
    "lodash",
    "session",
    "stanzaId",
    "Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Restart\x20Bot",
    "loggedOut",
    "base64",
    "Bot\x20success\x20conneted\x20to\x20server",
    "WhatsApp",
    "fromMe",
    "caption",
    "open",
    "axios",
    "readFileSync",
    "selectedDisplayText",
    "contacts.update",
    "connectionLost",
    "setStatus",
  ];
  _0x17f9 = function () {
    return _0xdf1efc;
  };
  return _0x17f9();
}
async function startHisoka() {
  const _0x137351 = _0x2c893f,
    { state: _0x35b9a7, saveCreds: _0x1f4495 } = await useMultiFileAuthState(
      "./" + (sessionName ? sessionName : _0x137351(0x203))
    ),
    { version: _0x33efed, isLatest: _0xad31e3 } =
      await fetchLatestWaWebVersion()["catch"](() =>
        fetchLatestBaileysVersion()
      );
  console[_0x137351(0x217)](
    _0x137351(0x248) + _0x33efed["join"](".") + _0x137351(0x1fe) + _0xad31e3
  ),
    console[_0x137351(0x217)](
      color(
        figlet[_0x137351(0x1c4)](_0x137351(0x220), {
          font: _0x137351(0x242),
          horizontalLayout: _0x137351(0x226),
          vertivalLayout: _0x137351(0x226),
          whitespaceBreak: ![],
        }),
        _0x137351(0x255)
      )
    );
  const _0x1cb899 = yesbhautikaiConnect({
    logger: pino({ level: "silent" }),
    printQRInTerminal: !![],
    browser: [_0x137351(0x222), _0x137351(0x24a), _0x137351(0x258)],
    auth: _0x35b9a7,
  });
  store[_0x137351(0x223)](_0x1cb899["ev"]),
    _0x1cb899["ev"]["on"](_0x137351(0x218), async (_0x694d7a) => {
      const _0x690441 = _0x137351;
      try {
        mek = _0x694d7a[_0x690441(0x1ce)][0x0];
        if (!mek[_0x690441(0x25c)]) return;
        mek[_0x690441(0x25c)] =
          Object[_0x690441(0x1e3)](mek[_0x690441(0x25c)])[0x0] ===
          _0x690441(0x1f2)
            ? mek[_0x690441(0x25c)][_0x690441(0x1f2)][_0x690441(0x25c)]
            : mek[_0x690441(0x25c)];
        if (
          mek["key"] &&
          mek[_0x690441(0x234)][_0x690441(0x1ca)] === "status@broadcast"
        )
          return;
        if (
          !_0x1cb899["public"] &&
          !mek[_0x690441(0x234)]["fromMe"] &&
          _0x694d7a["type"] === _0x690441(0x22a)
        )
          return;
        if (
          mek["key"]["id"][_0x690441(0x22f)](_0x690441(0x238)) &&
          mek[_0x690441(0x234)]["id"]["length"] === 0x10
        )
          return;
        (m = smsg(_0x1cb899, mek, store)),
          require(_0x690441(0x22e))(_0x1cb899, m, _0x694d7a, store);
      } catch (_0x4c3ca7) {
        console[_0x690441(0x217)](_0x4c3ca7);
      }
    });
  const _0x2a32ff = new Map();
  process["on"](_0x137351(0x1c3), (_0x4ccdd4, _0x5b8276) => {
    const _0x4dbf1a = _0x137351;
    _0x2a32ff["set"](_0x5b8276, _0x4ccdd4),
      console[_0x4dbf1a(0x217)](
        _0x4dbf1a(0x239),
        _0x5b8276,
        _0x4dbf1a(0x1dd),
        _0x4ccdd4
      );
  }),
    process["on"]("rejectionHandled", (_0x40d499) => {
      _0x2a32ff["delete"](_0x40d499);
    }),
    process["on"](_0x137351(0x1cd), function (_0x6da8a2) {
      const _0x14a2f3 = _0x137351;
      console["log"](_0x14a2f3(0x1d9), _0x6da8a2);
    }),
    (_0x1cb899["decodeJid"] = (_0x28e838) => {
      const _0x181732 = _0x137351;
      if (!_0x28e838) return _0x28e838;
      if (/:\d+@/gi[_0x181732(0x24b)](_0x28e838)) {
        let _0x2f664e = jidDecode(_0x28e838) || {};
        return (
          (_0x2f664e[_0x181732(0x23b)] &&
            _0x2f664e[_0x181732(0x24e)] &&
            _0x2f664e[_0x181732(0x23b)] + "@" + _0x2f664e[_0x181732(0x24e)]) ||
          _0x28e838
        );
      } else return _0x28e838;
    }),
    _0x1cb899["ev"]["on"](_0x137351(0x210), (_0x312a12) => {
      const _0x355fad = _0x137351;
      for (let _0x55d184 of _0x312a12) {
        let _0x2f8f20 = _0x1cb899[_0x355fad(0x200)](_0x55d184["id"]);
        if (store && store[_0x355fad(0x1e6)])
          store[_0x355fad(0x1e6)][_0x2f8f20] = {
            id: _0x2f8f20,
            name: _0x55d184["notify"],
          };
      }
    }),
    (_0x1cb899[_0x137351(0x22b)] = (_0x8b9608, _0x4a3ad1 = ![]) => {
      const _0x3b8e47 = _0x137351;
      (id = _0x1cb899[_0x3b8e47(0x200)](_0x8b9608)),
        (_0x4a3ad1 = _0x1cb899["withoutContact"] || _0x4a3ad1);
      let _0x4f7d5a;
      if (id["endsWith"](_0x3b8e47(0x1e0)))
        return new Promise(async (_0xbfb364) => {
          const _0x5b6a67 = _0x3b8e47;
          _0x4f7d5a = store[_0x5b6a67(0x1e6)][id] || {};
          if (!(_0x4f7d5a[_0x5b6a67(0x22c)] || _0x4f7d5a[_0x5b6a67(0x1e2)]))
            _0x4f7d5a = _0x1cb899[_0x5b6a67(0x1d3)](id) || {};
          _0xbfb364(
            _0x4f7d5a[_0x5b6a67(0x22c)] ||
              _0x4f7d5a[_0x5b6a67(0x1e2)] ||
              PhoneNumber("+" + id[_0x5b6a67(0x21f)]("@s.whatsapp.net", ""))[
                _0x5b6a67(0x1ed)
              ](_0x5b6a67(0x1c9))
          );
        });
      else
        _0x4f7d5a =
          id === _0x3b8e47(0x221)
            ? { id: id, name: _0x3b8e47(0x209) }
            : id ===
              _0x1cb899[_0x3b8e47(0x200)](_0x1cb899[_0x3b8e47(0x23b)]["id"])
            ? _0x1cb899["user"]
            : store[_0x3b8e47(0x1e6)][id] || {};
      return (
        (_0x4a3ad1 ? "" : _0x4f7d5a[_0x3b8e47(0x22c)]) ||
        _0x4f7d5a["subject"] ||
        _0x4f7d5a[_0x3b8e47(0x1c6)] ||
        PhoneNumber("+" + _0x8b9608["replace"](_0x3b8e47(0x253), ""))[
          "getNumber"
        ](_0x3b8e47(0x1c9))
      );
    }),
    (_0x1cb899[_0x137351(0x212)] = (_0x3bcd05) => {
      const _0x51af20 = _0x137351;
      return (
        _0x1cb899[_0x51af20(0x1e7)]({
          tag: "iq",
          attrs: {
            to: _0x51af20(0x253),
            type: _0x51af20(0x23e),
            xmlns: _0x51af20(0x21c),
          },
          content: [
            {
              tag: _0x51af20(0x21c),
              attrs: {},
              content: Buffer[_0x51af20(0x219)](_0x3bcd05, "utf-8"),
            },
          ],
        }),
        _0x3bcd05
      );
    }),
    (_0x1cb899[_0x137351(0x23d)] = !![]),
    (_0x1cb899[_0x137351(0x1d4)] = (_0x4b1995) =>
      smsg(_0x1cb899, _0x4b1995, store)),
    _0x1cb899["ev"]["on"](_0x137351(0x1ff), async (_0x3c9205) => {
      const _0x250b99 = _0x137351,
        { connection: _0x354f2a, lastDisconnect: _0x33f3fd } = _0x3c9205;
      if (_0x354f2a === _0x250b99(0x22d)) {
        let _0x36a175 = new Boom(_0x33f3fd?.[_0x250b99(0x1f0)])?.[
          _0x250b99(0x232)
        ][_0x250b99(0x235)];
        if (_0x36a175 === DisconnectReason[_0x250b99(0x1f6)])
          console[_0x250b99(0x217)](_0x250b99(0x1df)),
            process[_0x250b99(0x1eb)]();
        else {
          if (_0x36a175 === DisconnectReason[_0x250b99(0x1cb)])
            console["log"]("Connection\x20closed,\x20reconnecting...."),
              startHisoka();
          else {
            if (_0x36a175 === DisconnectReason[_0x250b99(0x211)])
              console[_0x250b99(0x217)](_0x250b99(0x257)), startHisoka();
            else {
              if (_0x36a175 === DisconnectReason[_0x250b99(0x215)])
                console[_0x250b99(0x217)](_0x250b99(0x205)),
                  process[_0x250b99(0x1eb)]();
              else {
                if (_0x36a175 === DisconnectReason[_0x250b99(0x206)])
                  console[_0x250b99(0x217)](
                    "Device\x20Logged\x20Out,\x20Please\x20Delete\x20Folder\x20Session\x20yusril\x20and\x20Scan\x20Again."
                  ),
                    process[_0x250b99(0x1eb)]();
                else {
                  if (_0x36a175 === DisconnectReason[_0x250b99(0x1d6)])
                    console[_0x250b99(0x217)](_0x250b99(0x25b)), startHisoka();
                  else
                    _0x36a175 === DisconnectReason["timedOut"]
                      ? (console["log"](_0x250b99(0x224)), startHisoka())
                      : (console["log"](
                          _0x250b99(0x1c1) + _0x36a175 + "|" + _0x354f2a
                        ),
                        startHisoka());
                }
              }
            }
          }
        }
      } else
        _0x354f2a === _0x250b99(0x20c) &&
          (console[_0x250b99(0x217)](color(_0x250b99(0x208), _0x250b99(0x255))),
          console[_0x250b99(0x217)](color(_0x250b99(0x1c7), _0x250b99(0x256))),
          console[_0x250b99(0x217)](color(_0x250b99(0x243))),
          _0x1cb899["sendMessage"](owner + _0x250b99(0x253), {
            text: _0x250b99(0x1ec) + donet,
          }));
    }),
    _0x1cb899["ev"]["on"](_0x137351(0x23f), _0x1f4495);
  const _0xd2e6e7 = async (_0xec3f11, _0x541433) => {
    const _0x469db4 = _0x137351;
    try {
      _0x541433 ? _0x541433 : {};
      const _0x19c69f = await axios({
        method: _0x469db4(0x246),
        url: _0xec3f11,
        headers: { DNT: 0x1, "Upgrade-Insecure-Request": 0x1 },
        ..._0x541433,
        responseType: "arraybuffer",
      });
      return _0x19c69f[_0x469db4(0x1fb)];
    } catch (_0x56877d) {
      return _0x56877d;
    }
  };
  return (
    (_0x1cb899[_0x137351(0x1c0)] = async (
      _0x550ea9,
      _0x5e435c,
      _0x5c3fb4 = "",
      _0x44e32b = "",
      _0x50947b
    ) => {
      const _0x41d20d = _0x137351;
      let _0x4a5d67 = Buffer[_0x41d20d(0x249)](_0x5e435c)
        ? _0x5e435c
        : /^data:.*?\/.*?;base64,/i[_0x41d20d(0x24b)](_0x5e435c)
        ? Buffer["from"](_0x5e435c[_0x41d20d(0x201)]`,`[0x1], _0x41d20d(0x207))
        : /^https?:\/\//["test"](_0x5e435c)
        ? await await _0xd2e6e7(_0x5e435c)
        : fs["existsSync"](_0x5e435c)
        ? fs[_0x41d20d(0x20e)](_0x5e435c)
        : Buffer[_0x41d20d(0x240)](0x0);
      return await _0x1cb899[_0x41d20d(0x1fa)](
        _0x550ea9,
        { image: _0x4a5d67, caption: _0x5c3fb4, ..._0x50947b },
        { quoted: _0x44e32b }
      );
    }),
    (_0x1cb899[_0x137351(0x23a)] = (
      _0x5f107f,
      _0x78ce87,
      _0x976de2 = "",
      _0x2be6a4
    ) =>
      _0x1cb899[_0x137351(0x1fa)](
        _0x5f107f,
        { text: _0x78ce87, ..._0x2be6a4 },
        { quoted: _0x976de2 }
      )),
    (_0x1cb899[_0x137351(0x213)] = (
      _0x1a8d0d,
      _0x253f82,
      _0x5b8b31 = "",
      _0x334586 = _0x1cb899[_0x137351(0x23b)]["id"],
      _0x1aa15c = {}
    ) => {
      const _0x11edb2 = _0x137351;
      let _0x5a3f6e = Object[_0x11edb2(0x1e3)](
          _0x253f82[_0x11edb2(0x25c)]
        )[0x0],
        _0xb3136 = _0x5a3f6e === _0x11edb2(0x1f2);
      _0xb3136 &&
        (_0x5a3f6e = Object[_0x11edb2(0x1e3)](
          _0x253f82[_0x11edb2(0x25c)][_0x11edb2(0x1f2)][_0x11edb2(0x25c)]
        )[0x0]);
      let _0xc89744 = _0xb3136
          ? _0x253f82[_0x11edb2(0x25c)][_0x11edb2(0x1f2)][_0x11edb2(0x25c)]
          : _0x253f82[_0x11edb2(0x25c)],
        _0x3b7bd7 = _0xc89744[_0x5a3f6e];
      if (typeof _0x3b7bd7 === _0x11edb2(0x1e4))
        _0xc89744[_0x5a3f6e] = _0x5b8b31 || _0x3b7bd7;
      else {
        if (_0x3b7bd7[_0x11edb2(0x20b)])
          _0x3b7bd7[_0x11edb2(0x20b)] =
            _0x5b8b31 || _0x3b7bd7[_0x11edb2(0x20b)];
        else {
          if (_0x3b7bd7[_0x11edb2(0x1d8)])
            _0x3b7bd7[_0x11edb2(0x1d8)] =
              _0x5b8b31 || _0x3b7bd7[_0x11edb2(0x1d8)];
        }
      }
      if (typeof _0x3b7bd7 !== _0x11edb2(0x1e4))
        _0xc89744[_0x5a3f6e] = { ..._0x3b7bd7, ..._0x1aa15c };
      if (_0x253f82["key"]["participant"])
        _0x334586 = _0x253f82[_0x11edb2(0x234)][_0x11edb2(0x227)] =
          _0x334586 || _0x253f82[_0x11edb2(0x234)][_0x11edb2(0x227)];
      else {
        if (_0x253f82[_0x11edb2(0x234)][_0x11edb2(0x227)])
          _0x334586 = _0x253f82[_0x11edb2(0x234)][_0x11edb2(0x227)] =
            _0x334586 || _0x253f82["key"][_0x11edb2(0x227)];
      }
      if (_0x253f82["key"][_0x11edb2(0x1ca)]["includes"](_0x11edb2(0x253)))
        _0x334586 = _0x334586 || _0x253f82[_0x11edb2(0x234)][_0x11edb2(0x1ca)];
      else {
        if (
          _0x253f82["key"][_0x11edb2(0x1ca)][_0x11edb2(0x1fd)](_0x11edb2(0x23c))
        )
          _0x334586 =
            _0x334586 || _0x253f82[_0x11edb2(0x234)][_0x11edb2(0x1ca)];
      }
      return (
        (_0x253f82[_0x11edb2(0x234)][_0x11edb2(0x1ca)] = _0x1a8d0d),
        (_0x253f82[_0x11edb2(0x234)][_0x11edb2(0x20a)] =
          _0x334586 === _0x1cb899["user"]["id"]),
        proto[_0x11edb2(0x1f1)][_0x11edb2(0x237)](_0x253f82)
      );
    }),
    _0x1cb899
  );
}
startHisoka();
let file = require[_0x2c893f(0x24d)](__filename);
fs["watchFile"](file, () => {
  const _0x2480f8 = _0x2c893f;
  fs[_0x2480f8(0x229)](file),
    console[_0x2480f8(0x217)](
      chalk[_0x2480f8(0x21b)](_0x2480f8(0x1e5) + __filename)
    ),
    delete require["cache"][file],
    require(file);
});
