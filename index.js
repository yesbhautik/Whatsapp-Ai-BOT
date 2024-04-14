function _0x4f7b(_0x260f88, _0x270b96) {
  const _0x5ea8eb = _0x5ea8();
  return (
    (_0x4f7b = function (_0x4f7b5e, _0x41a01f) {
      _0x4f7b5e = _0x4f7b5e - 0x192;
      let _0x5aa78b = _0x5ea8eb[_0x4f7b5e];
      return _0x5aa78b;
    }),
    _0x4f7b(_0x260f88, _0x270b96)
  );
}
const _0x4003d6 = _0x4f7b;
(function (_0x1cc439, _0x99636c) {
  const _0x109c7f = _0x4f7b,
    _0xda7897 = _0x1cc439();
  while (!![]) {
    try {
      const _0x18c644 =
        (parseInt(_0x109c7f(0x1fc)) / 0x1) *
          (parseInt(_0x109c7f(0x19a)) / 0x2) +
        parseInt(_0x109c7f(0x1de)) / 0x3 +
        -parseInt(_0x109c7f(0x1c0)) / 0x4 +
        -parseInt(_0x109c7f(0x21e)) / 0x5 +
        (parseInt(_0x109c7f(0x1b3)) / 0x6) *
          (-parseInt(_0x109c7f(0x193)) / 0x7) +
        (parseInt(_0x109c7f(0x201)) / 0x8) *
          (-parseInt(_0x109c7f(0x1b5)) / 0x9) +
        parseInt(_0x109c7f(0x1c9)) / 0xa;
      if (_0x18c644 === _0x99636c) break;
      else _0xda7897["push"](_0xda7897["shift"]());
    } catch (_0x5e992d) {
      _0xda7897["push"](_0xda7897["shift"]());
    }
  }
})(_0x5ea8, 0xc9022);
const sessionName = "Yesbhautik",
  donet = _0x4003d6(0x205),
  owner = [_0x4003d6(0x1e1)],
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
  } = require(_0x4003d6(0x213)),
  pino = require("pino"),
  { Boom } = require("@hapi/boom"),
  fs = require("fs"),
  axios = require(_0x4003d6(0x221)),
  chalk = require(_0x4003d6(0x1e7)),
  figlet = require(_0x4003d6(0x1ed)),
  _ = require(_0x4003d6(0x214)),
  PhoneNumber = require("awesome-phonenumber"),
  store = makeInMemoryStore({
    logger: pino()[_0x4003d6(0x1aa)]({
      level: _0x4003d6(0x20e),
      stream: _0x4003d6(0x212),
    }),
  }),
  color = (_0x50bd69, _0x66a585) => {
    const _0x3aa087 = _0x4003d6;
    return !_0x66a585
      ? chalk[_0x3aa087(0x1e8)](_0x50bd69)
      : chalk[_0x3aa087(0x1f1)](_0x66a585)(_0x50bd69);
  };
function smsg(_0x1ac937, _0x3e6a42, _0xd50a88) {
  const _0x57788a = _0x4003d6;
  if (!_0x3e6a42) return _0x3e6a42;
  let _0x533f62 = proto[_0x57788a(0x20c)];
  if (_0x3e6a42[_0x57788a(0x1f0)]) {
    (_0x3e6a42["id"] = _0x3e6a42[_0x57788a(0x1f0)]["id"]),
      (_0x3e6a42[_0x57788a(0x1e9)] =
        _0x3e6a42["id"][_0x57788a(0x1dc)](_0x57788a(0x1bf)) &&
        _0x3e6a42["id"][_0x57788a(0x1a7)] === 0x10),
      (_0x3e6a42[_0x57788a(0x1f2)] = _0x3e6a42["key"]["remoteJid"]),
      (_0x3e6a42[_0x57788a(0x1a2)] = _0x3e6a42["key"][_0x57788a(0x1a2)]),
      (_0x3e6a42[_0x57788a(0x1cc)] = _0x3e6a42["chat"]["endsWith"](
        _0x57788a(0x194)
      )),
      (_0x3e6a42[_0x57788a(0x1f9)] = _0x1ac937[_0x57788a(0x1d2)](
        (_0x3e6a42["fromMe"] && _0x1ac937["user"]["id"]) ||
          _0x3e6a42[_0x57788a(0x217)] ||
          _0x3e6a42[_0x57788a(0x1f0)]["participant"] ||
          _0x3e6a42[_0x57788a(0x1f2)] ||
          ""
      ));
    if (_0x3e6a42["isGroup"])
      _0x3e6a42[_0x57788a(0x217)] =
        _0x1ac937[_0x57788a(0x1d2)](_0x3e6a42["key"]["participant"]) || "";
  }
  if (_0x3e6a42[_0x57788a(0x1c1)]) {
    (_0x3e6a42[_0x57788a(0x1ab)] = getContentType(_0x3e6a42[_0x57788a(0x1c1)])),
      (_0x3e6a42[_0x57788a(0x1fe)] =
        _0x3e6a42[_0x57788a(0x1ab)] == _0x57788a(0x1d0)
          ? _0x3e6a42[_0x57788a(0x1c1)][_0x3e6a42[_0x57788a(0x1ab)]]["message"][
              getContentType(
                _0x3e6a42[_0x57788a(0x1c1)][_0x3e6a42[_0x57788a(0x1ab)]][
                  _0x57788a(0x1c1)
                ]
              )
            ]
          : _0x3e6a42["message"][_0x3e6a42[_0x57788a(0x1ab)]]),
      (_0x3e6a42[_0x57788a(0x19b)] =
        _0x3e6a42[_0x57788a(0x1c1)]["conversation"] ||
        _0x3e6a42[_0x57788a(0x1fe)][_0x57788a(0x19e)] ||
        _0x3e6a42[_0x57788a(0x1fe)]["text"] ||
        (_0x3e6a42[_0x57788a(0x1ab)] == _0x57788a(0x1e6) &&
          _0x3e6a42["msg"][_0x57788a(0x1c3)][_0x57788a(0x1bd)]) ||
        (_0x3e6a42["mtype"] == _0x57788a(0x1f4) &&
          _0x3e6a42[_0x57788a(0x1fe)]["selectedButtonId"]) ||
        (_0x3e6a42[_0x57788a(0x1ab)] == _0x57788a(0x1d0) &&
          _0x3e6a42["msg"][_0x57788a(0x19e)]) ||
        _0x3e6a42["text"]);
    let _0x1832d0 = (_0x3e6a42[_0x57788a(0x200)] = _0x3e6a42[_0x57788a(0x1fe)][
      _0x57788a(0x1b0)
    ]
      ? _0x3e6a42[_0x57788a(0x1fe)][_0x57788a(0x1b0)][_0x57788a(0x1a1)]
      : null);
    _0x3e6a42[_0x57788a(0x220)] = _0x3e6a42["msg"][_0x57788a(0x1b0)]
      ? _0x3e6a42[_0x57788a(0x1fe)]["contextInfo"][_0x57788a(0x220)]
      : [];
    if (_0x3e6a42[_0x57788a(0x200)]) {
      let _0xbc61e8 = getContentType(_0x1832d0);
      _0x3e6a42[_0x57788a(0x200)] = _0x3e6a42[_0x57788a(0x200)][_0xbc61e8];
      [_0x57788a(0x20a)]["includes"](_0xbc61e8) &&
        ((_0xbc61e8 = getContentType(_0x3e6a42["quoted"])),
        (_0x3e6a42[_0x57788a(0x200)] = _0x3e6a42[_0x57788a(0x200)][_0xbc61e8]));
      if (typeof _0x3e6a42[_0x57788a(0x200)] === _0x57788a(0x1ef))
        _0x3e6a42[_0x57788a(0x200)] = { text: _0x3e6a42[_0x57788a(0x200)] };
      (_0x3e6a42[_0x57788a(0x200)][_0x57788a(0x1ab)] = _0xbc61e8),
        (_0x3e6a42[_0x57788a(0x200)]["id"] =
          _0x3e6a42[_0x57788a(0x1fe)]["contextInfo"][_0x57788a(0x1be)]),
        (_0x3e6a42[_0x57788a(0x200)]["chat"] =
          _0x3e6a42[_0x57788a(0x1fe)][_0x57788a(0x1b0)][_0x57788a(0x216)] ||
          _0x3e6a42[_0x57788a(0x1f2)]),
        (_0x3e6a42["quoted"][_0x57788a(0x1e9)] = _0x3e6a42[_0x57788a(0x200)][
          "id"
        ]
          ? _0x3e6a42[_0x57788a(0x200)]["id"][_0x57788a(0x1dc)]("BAE5") &&
            _0x3e6a42["quoted"]["id"][_0x57788a(0x1a7)] === 0x10
          : ![]),
        (_0x3e6a42[_0x57788a(0x200)][_0x57788a(0x1f9)] = _0x1ac937["decodeJid"](
          _0x3e6a42[_0x57788a(0x1fe)][_0x57788a(0x1b0)][_0x57788a(0x217)]
        )),
        (_0x3e6a42["quoted"][_0x57788a(0x1a2)] =
          _0x3e6a42[_0x57788a(0x200)]["sender"] ===
          _0x1ac937[_0x57788a(0x1d2)](_0x1ac937[_0x57788a(0x20d)]["id"])),
        (_0x3e6a42[_0x57788a(0x200)]["text"] =
          _0x3e6a42[_0x57788a(0x200)]["text"] ||
          _0x3e6a42[_0x57788a(0x200)]["caption"] ||
          _0x3e6a42[_0x57788a(0x200)][_0x57788a(0x1c6)] ||
          _0x3e6a42[_0x57788a(0x200)][_0x57788a(0x209)] ||
          _0x3e6a42[_0x57788a(0x200)][_0x57788a(0x203)] ||
          _0x3e6a42[_0x57788a(0x200)][_0x57788a(0x1e0)] ||
          ""),
        (_0x3e6a42["quoted"][_0x57788a(0x220)] = _0x3e6a42[_0x57788a(0x1fe)][
          "contextInfo"
        ]
          ? _0x3e6a42["msg"][_0x57788a(0x1b0)]["mentionedJid"]
          : []),
        (_0x3e6a42[_0x57788a(0x1a9)] = _0x3e6a42[_0x57788a(0x1ac)] =
          async () => {
            const _0x4a86e5 = _0x57788a;
            if (!_0x3e6a42[_0x4a86e5(0x200)]["id"]) return ![];
            let _0x3d8d39 = await _0xd50a88[_0x4a86e5(0x1b7)](
              _0x3e6a42[_0x4a86e5(0x1f2)],
              _0x3e6a42[_0x4a86e5(0x200)]["id"],
              _0x1ac937
            );
            return exports[_0x4a86e5(0x1b9)](_0x1ac937, _0x3d8d39, _0xd50a88);
          });
      let _0x5b03c3 = (_0x3e6a42["quoted"][_0x57788a(0x1a0)] = _0x533f62[
        _0x57788a(0x1af)
      ]({
        key: {
          remoteJid: _0x3e6a42[_0x57788a(0x200)][_0x57788a(0x1f2)],
          fromMe: _0x3e6a42["quoted"]["fromMe"],
          id: _0x3e6a42[_0x57788a(0x200)]["id"],
        },
        message: _0x1832d0,
        ...(_0x3e6a42["isGroup"]
          ? { participant: _0x3e6a42[_0x57788a(0x200)]["sender"] }
          : {}),
      }));
      (_0x3e6a42["quoted"][_0x57788a(0x1cf)] = () =>
        _0x1ac937[_0x57788a(0x1ae)](
          _0x3e6a42[_0x57788a(0x200)][_0x57788a(0x1f2)],
          { delete: _0x5b03c3[_0x57788a(0x1f0)] }
        )),
        (_0x3e6a42[_0x57788a(0x200)][_0x57788a(0x19c)] = (
          _0xcf095c,
          _0x284131 = ![],
          _0x27765b = {}
        ) =>
          _0x1ac937["copyNForward"](
            _0xcf095c,
            _0x5b03c3,
            _0x284131,
            _0x27765b
          )),
        (_0x3e6a42[_0x57788a(0x200)][_0x57788a(0x21f)] = () =>
          _0x1ac937[_0x57788a(0x198)](_0x3e6a42[_0x57788a(0x200)]));
    }
  }
  if (_0x3e6a42[_0x57788a(0x1fe)][_0x57788a(0x1fd)])
    _0x3e6a42["download"] = () =>
      _0x1ac937[_0x57788a(0x198)](_0x3e6a42[_0x57788a(0x1fe)]);
  return (
    (_0x3e6a42[_0x57788a(0x215)] =
      _0x3e6a42[_0x57788a(0x1fe)]["text"] ||
      _0x3e6a42["msg"][_0x57788a(0x19e)] ||
      _0x3e6a42[_0x57788a(0x1c1)][_0x57788a(0x1c6)] ||
      _0x3e6a42["msg"][_0x57788a(0x209)] ||
      _0x3e6a42["msg"][_0x57788a(0x203)] ||
      _0x3e6a42[_0x57788a(0x1fe)][_0x57788a(0x1e0)] ||
      ""),
    (_0x3e6a42[_0x57788a(0x1d4)] = (
      _0x443444,
      _0x3392a5 = _0x3e6a42[_0x57788a(0x1f2)],
      _0x16c97a = {}
    ) =>
      Buffer[_0x57788a(0x1c7)](_0x443444)
        ? _0x1ac937[_0x57788a(0x224)](
            _0x3392a5,
            _0x443444,
            "file",
            "",
            _0x3e6a42,
            { ..._0x16c97a }
          )
        : _0x1ac937[_0x57788a(0x1ee)](_0x3392a5, _0x443444, _0x3e6a42, {
            ..._0x16c97a,
          })),
    (_0x3e6a42["copy"] = () =>
      exports[_0x57788a(0x1b9)](
        _0x1ac937,
        _0x533f62["fromObject"](_0x533f62[_0x57788a(0x1e5)](_0x3e6a42))
      )),
    (_0x3e6a42["copyNForward"] = (
      _0x14651c = _0x3e6a42["chat"],
      _0x373a84 = ![],
      _0xf90ae3 = {}
    ) =>
      _0x1ac937[_0x57788a(0x19c)](_0x14651c, _0x3e6a42, _0x373a84, _0xf90ae3)),
    _0x3e6a42
  );
}
function _0x5ea8() {
  const _0x15aa9b = [
    "error",
    "singleSelectReply",
    "@broadcast",
    "groupAcceptInvite",
    "conversation",
    "isBuffer",
    "default",
    "34541740TPadze",
    "set",
    "base64",
    "isGroup",
    "international",
    "open",
    "delete",
    "viewOnceMessage",
    "Connection\x20closed,\x20reconnecting....",
    "decodeJid",
    "Type\x20/menu\x20to\x20see\x20menu",
    "reply",
    "groupMetadata",
    "Device\x20Logged\x20Out,\x20Please\x20Delete\x20Folder\x20Session\x20yusril\x20and\x20Scan\x20Again.",
    "Connection\x20Lost\x20from\x20Server,\x20reconnecting...",
    "cMod",
    "Yesbhautik",
    "contacts.update",
    "cache",
    "startsWith",
    "2.1.0",
    "3355227jcppqF",
    "getNumber",
    "title",
    "916353586391",
    "keys",
    "split",
    "includes",
    "toObject",
    "listResponseMessage",
    "chalk",
    "green",
    "isBaileys",
    "yellow",
    "alloc",
    "WhatsApp",
    "figlet",
    "sendText",
    "string",
    "key",
    "keyword",
    "chat",
    "badSession",
    "buttonsResponseMessage",
    "@s.whatsapp.net",
    "getName",
    "public",
    "subject",
    "sender",
    "serializeM",
    "close",
    "3kSsfMy",
    "url",
    "msg",
    "redBright",
    "quoted",
    "64bmSpGg",
    "verifiedName",
    "selectedDisplayText",
    "connectionClosed",
    "https://rzp.io/l/Whatsapp-Ai-BOT",
    "connectionReplaced",
    "output",
    "catch",
    "contentText",
    "productMessage",
    "from",
    "WebMessageInfo",
    "user",
    "silent",
    "0@s.whatsapp.net",
    "exit",
    "Bot\x20success\x20conneted\x20to\x20server",
    "store",
    "@whiskeysockets/baileys",
    "lodash",
    "text",
    "remoteJid",
    "participant",
    "Bot\x20started!\x0a\x0aSupport\x20WhatsApp-Ai-BOT\x20Project\x20and\x20in\x20return,\x20get\x20exclusive\x20access\x20to\x20PRIME\x20version.\x0a",
    "server",
    "status",
    "Support\x20WhatsApp-Ai-BOT\x20Project\x20and\x20in\x20return,\x20get\x20exclusive\x20access\x20to\x20PRIME\x20version.\x20https://rzp.io/l/Whatsapp-Ai-BOT",
    "unwatchFile",
    "reason:",
    "6245705KkzZQZ",
    "download",
    "mentionedJid",
    "axios",
    "Standard",
    "Whatsapp-Ai-Bot\x20-\x20YesbhautikX",
    "sendMedia",
    "watchFile",
    "3605YpVTNx",
    "@g.us",
    "session",
    "utf-8",
    "arraybuffer",
    "downloadMediaMessage",
    "test",
    "328242qlpMOr",
    "body",
    "copyNForward",
    "Caught\x20exception:\x20",
    "caption",
    "notify",
    "fakeObj",
    "quotedMessage",
    "fromMe",
    "Restart\x20Required,\x20Restarting...",
    "Something\x20went\x20wrong",
    "bind",
    "withoutContact",
    "length",
    "join",
    "getQuotedObj",
    "child",
    "mtype",
    "getQuotedMessage",
    "log",
    "sendMessage",
    "fromObject",
    "contextInfo",
    "ephemeralMessage",
    "existsSync",
    "14154CaIsid",
    "timedOut",
    "1328283VHDVAQ",
    "Unhandled\x20Rejection\x20at:",
    "loadMessage",
    "name",
    "smsg",
    "restartRequired",
    "contacts",
    "DoV9wBztYVJ2aMAJ5rzrsO",
    "selectedRowId",
    "stanzaId",
    "BAE5",
    "2387576tuOszu",
    "message",
  ];
  _0x5ea8 = function () {
    return _0x15aa9b;
  };
  return _0x5ea8();
}
async function startHisoka() {
  const _0x5cdae0 = _0x4003d6,
    { state: _0x889194, saveCreds: _0x6f4dc8 } = await useMultiFileAuthState(
      "./" + (sessionName ? sessionName : _0x5cdae0(0x195))
    ),
    { version: _0x33d4eb, isLatest: _0x327f92 } =
      await fetchLatestWaWebVersion()[_0x5cdae0(0x208)](() =>
        fetchLatestBaileysVersion()
      );
  console[_0x5cdae0(0x1ad)](
    "using\x20WA\x20v" +
      _0x33d4eb[_0x5cdae0(0x1a8)](".") +
      ",\x20isLatest:\x20" +
      _0x327f92
  ),
    console[_0x5cdae0(0x1ad)](
      color(
        figlet["textSync"](_0x5cdae0(0x1d9), {
          font: _0x5cdae0(0x222),
          horizontalLayout: _0x5cdae0(0x1c8),
          vertivalLayout: _0x5cdae0(0x1c8),
          whitespaceBreak: ![],
        }),
        _0x5cdae0(0x1e8)
      )
    );
  const _0x17b6e8 = yesbhautikaiConnect({
    logger: pino({ level: _0x5cdae0(0x20e) }),
    printQRInTerminal: !![],
    browser: [_0x5cdae0(0x223), "Browser", _0x5cdae0(0x1dd)],
    auth: _0x889194,
  });
  store[_0x5cdae0(0x1a5)](_0x17b6e8["ev"]),
    _0x17b6e8["ev"]["on"]("messages.upsert", async (_0x8cd59c) => {
      const _0x4f3d8d = _0x5cdae0;
      try {
        mek = _0x8cd59c["messages"][0x0];
        if (!mek[_0x4f3d8d(0x1c1)]) return;
        mek[_0x4f3d8d(0x1c1)] =
          Object[_0x4f3d8d(0x1e2)](mek[_0x4f3d8d(0x1c1)])[0x0] ===
          _0x4f3d8d(0x1b1)
            ? mek[_0x4f3d8d(0x1c1)][_0x4f3d8d(0x1b1)][_0x4f3d8d(0x1c1)]
            : mek[_0x4f3d8d(0x1c1)];
        if (
          mek[_0x4f3d8d(0x1f0)] &&
          mek[_0x4f3d8d(0x1f0)][_0x4f3d8d(0x216)] === "status@broadcast"
        )
          return;
        if (
          !_0x17b6e8[_0x4f3d8d(0x1f7)] &&
          !mek[_0x4f3d8d(0x1f0)][_0x4f3d8d(0x1a2)] &&
          _0x8cd59c["type"] === _0x4f3d8d(0x19f)
        )
          return;
        if (
          mek["key"]["id"][_0x4f3d8d(0x1dc)]("BAE5") &&
          mek["key"]["id"][_0x4f3d8d(0x1a7)] === 0x10
        )
          return;
        (m = smsg(_0x17b6e8, mek, store)),
          require("./yesbhautikai")(_0x17b6e8, m, _0x8cd59c, store);
      } catch (_0xc1f942) {
        console[_0x4f3d8d(0x1ad)](_0xc1f942);
      }
    });
  const _0x114dee = new Map();
  process["on"]("unhandledRejection", (_0x1e2d7a, _0x571d5e) => {
    const _0x1dadb5 = _0x5cdae0;
    _0x114dee[_0x1dadb5(0x1ca)](_0x571d5e, _0x1e2d7a),
      console[_0x1dadb5(0x1ad)](
        _0x1dadb5(0x1b6),
        _0x571d5e,
        _0x1dadb5(0x21d),
        _0x1e2d7a
      );
  }),
    process["on"]("rejectionHandled", (_0x58f15b) => {
      const _0xcdbee9 = _0x5cdae0;
      _0x114dee[_0xcdbee9(0x1cf)](_0x58f15b);
    }),
    process["on"](_0x5cdae0(0x1a4), function (_0x5e1745) {
      const _0x2e6542 = _0x5cdae0;
      console[_0x2e6542(0x1ad)](_0x2e6542(0x19d), _0x5e1745);
    }),
    (_0x17b6e8[_0x5cdae0(0x1d2)] = (_0xb8669f) => {
      const _0x46fffe = _0x5cdae0;
      if (!_0xb8669f) return _0xb8669f;
      if (/:\d+@/gi[_0x46fffe(0x199)](_0xb8669f)) {
        let _0x23f159 = jidDecode(_0xb8669f) || {};
        return (
          (_0x23f159[_0x46fffe(0x20d)] &&
            _0x23f159["server"] &&
            _0x23f159[_0x46fffe(0x20d)] + "@" + _0x23f159[_0x46fffe(0x219)]) ||
          _0xb8669f
        );
      } else return _0xb8669f;
    }),
    _0x17b6e8["ev"]["on"](_0x5cdae0(0x1da), (_0x537d9e) => {
      const _0x51ec0e = _0x5cdae0;
      for (let _0x1e6608 of _0x537d9e) {
        let _0x18618c = _0x17b6e8[_0x51ec0e(0x1d2)](_0x1e6608["id"]);
        if (store && store[_0x51ec0e(0x1bb)])
          store["contacts"][_0x18618c] = {
            id: _0x18618c,
            name: _0x1e6608[_0x51ec0e(0x19f)],
          };
      }
    }),
    (_0x17b6e8[_0x5cdae0(0x1f6)] = (_0x307648, _0x3b5c82 = ![]) => {
      const _0x5a6c4f = _0x5cdae0;
      (id = _0x17b6e8[_0x5a6c4f(0x1d2)](_0x307648)),
        (_0x3b5c82 = _0x17b6e8[_0x5a6c4f(0x1a6)] || _0x3b5c82);
      let _0x3aadd9;
      if (id["endsWith"](_0x5a6c4f(0x194)))
        return new Promise(async (_0x29172e) => {
          const _0x384e02 = _0x5a6c4f;
          _0x3aadd9 = store[_0x384e02(0x1bb)][id] || {};
          if (!(_0x3aadd9[_0x384e02(0x1b8)] || _0x3aadd9[_0x384e02(0x1f8)]))
            _0x3aadd9 = _0x17b6e8[_0x384e02(0x1d5)](id) || {};
          _0x29172e(
            _0x3aadd9[_0x384e02(0x1b8)] ||
              _0x3aadd9[_0x384e02(0x1f8)] ||
              PhoneNumber("+" + id["replace"](_0x384e02(0x1f5), ""))[
                _0x384e02(0x1df)
              ](_0x384e02(0x1cd))
          );
        });
      else
        _0x3aadd9 =
          id === _0x5a6c4f(0x20f)
            ? { id: id, name: _0x5a6c4f(0x1ec) }
            : id ===
              _0x17b6e8[_0x5a6c4f(0x1d2)](_0x17b6e8[_0x5a6c4f(0x20d)]["id"])
            ? _0x17b6e8[_0x5a6c4f(0x20d)]
            : store["contacts"][id] || {};
      return (
        (_0x3b5c82 ? "" : _0x3aadd9["name"]) ||
        _0x3aadd9["subject"] ||
        _0x3aadd9[_0x5a6c4f(0x202)] ||
        PhoneNumber("+" + _0x307648["replace"](_0x5a6c4f(0x1f5), ""))[
          _0x5a6c4f(0x1df)
        ](_0x5a6c4f(0x1cd))
      );
    }),
    (_0x17b6e8["setStatus"] = (_0xf621e5) => {
      const _0x310548 = _0x5cdae0;
      return (
        _0x17b6e8["query"]({
          tag: "iq",
          attrs: {
            to: _0x310548(0x1f5),
            type: _0x310548(0x1ca),
            xmlns: _0x310548(0x21a),
          },
          content: [
            {
              tag: _0x310548(0x21a),
              attrs: {},
              content: Buffer[_0x310548(0x20b)](_0xf621e5, _0x310548(0x196)),
            },
          ],
        }),
        _0xf621e5
      );
    }),
    (_0x17b6e8[_0x5cdae0(0x1f7)] = !![]),
    (_0x17b6e8[_0x5cdae0(0x1fa)] = (_0x537a00) =>
      smsg(_0x17b6e8, _0x537a00, store)),
    _0x17b6e8["ev"]["on"]("connection.update", async (_0x3627ed) => {
      const _0xd26331 = _0x5cdae0,
        { connection: _0x966e83, lastDisconnect: _0x1753f2 } = _0x3627ed;
      if (_0x966e83 === _0xd26331(0x1fb)) {
        let _0x15d475 = new Boom(_0x1753f2?.[_0xd26331(0x1c2)])?.[
          _0xd26331(0x207)
        ]["statusCode"];
        if (_0x15d475 === DisconnectReason[_0xd26331(0x1f3)])
          console[_0xd26331(0x1ad)](
            "Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again"
          ),
            process[_0xd26331(0x210)]();
        else {
          if (_0x15d475 === DisconnectReason[_0xd26331(0x204)])
            console[_0xd26331(0x1ad)](_0xd26331(0x1d1)), startHisoka();
          else {
            if (_0x15d475 === DisconnectReason["connectionLost"])
              console[_0xd26331(0x1ad)](_0xd26331(0x1d7)), startHisoka();
            else {
              if (_0x15d475 === DisconnectReason[_0xd26331(0x206)])
                console["log"](
                  "Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Restart\x20Bot"
                ),
                  process["exit"]();
              else {
                if (_0x15d475 === DisconnectReason["loggedOut"])
                  console[_0xd26331(0x1ad)](_0xd26331(0x1d6)),
                    process["exit"]();
                else {
                  if (_0x15d475 === DisconnectReason[_0xd26331(0x1ba)])
                    console["log"](_0xd26331(0x1a3)), startHisoka();
                  else
                    _0x15d475 === DisconnectReason[_0xd26331(0x1b4)]
                      ? (console[_0xd26331(0x1ad)](
                          "Connection\x20TimedOut,\x20Reconnecting..."
                        ),
                        startHisoka())
                      : (console[_0xd26331(0x1ad)](
                          "Unknown\x20DisconnectReason:\x20" +
                            _0x15d475 +
                            "|" +
                            _0x966e83
                        ),
                        startHisoka());
                }
              }
            }
          }
        }
      } else {
        if (_0x966e83 === _0xd26331(0x1ce)) {
          console["log"](color(_0xd26331(0x211), "green")),
            console["log"](color(_0xd26331(0x21b), _0xd26331(0x1ea))),
            console[_0xd26331(0x1ad)](color(_0xd26331(0x1d3))),
            _0x17b6e8[_0xd26331(0x1ae)](owner + _0xd26331(0x1f5), {
              text: _0xd26331(0x218) + donet,
            });
          const _0x5ee741 = _0xd26331(0x1bc);
          _0x17b6e8[_0xd26331(0x1c5)](_0x5ee741)
            ["then"]((_0x4e6a40) =>
              console[_0xd26331(0x1ad)](
                "Joined\x20the\x20group\x20with\x20response:\x20" + _0x4e6a40
              )
            )
            ["catch"]((_0x192ac7) =>
              console[_0xd26331(0x1c2)](
                "Failed\x20to\x20join\x20the\x20group:\x20" + _0x192ac7
              )
            );
        }
      }
    }),
    _0x17b6e8["ev"]["on"]("creds.update", _0x6f4dc8);
  const _0x5853c3 = async (_0x3b91a7, _0x16ef30) => {
    const _0xdcbc86 = _0x5cdae0;
    try {
      _0x16ef30 ? _0x16ef30 : {};
      const _0x52bbdb = await axios({
        method: "get",
        url: _0x3b91a7,
        headers: { DNT: 0x1, "Upgrade-Insecure-Request": 0x1 },
        ..._0x16ef30,
        responseType: _0xdcbc86(0x197),
      });
      return _0x52bbdb["data"];
    } catch (_0x1681ed) {
      return _0x1681ed;
    }
  };
  return (
    (_0x17b6e8["sendImage"] = async (
      _0x99b4e3,
      _0x5b9a08,
      _0x3a5789 = "",
      _0x39f640 = "",
      _0x42a54c
    ) => {
      const _0x1506ea = _0x5cdae0;
      let _0x9cdca4 = Buffer[_0x1506ea(0x1c7)](_0x5b9a08)
        ? _0x5b9a08
        : /^data:.*?\/.*?;base64,/i[_0x1506ea(0x199)](_0x5b9a08)
        ? Buffer[_0x1506ea(0x20b)](
            _0x5b9a08[_0x1506ea(0x1e3)]`,`[0x1],
            _0x1506ea(0x1cb)
          )
        : /^https?:\/\//["test"](_0x5b9a08)
        ? await await _0x5853c3(_0x5b9a08)
        : fs[_0x1506ea(0x1b2)](_0x5b9a08)
        ? fs["readFileSync"](_0x5b9a08)
        : Buffer[_0x1506ea(0x1eb)](0x0);
      return await _0x17b6e8[_0x1506ea(0x1ae)](
        _0x99b4e3,
        { image: _0x9cdca4, caption: _0x3a5789, ..._0x42a54c },
        { quoted: _0x39f640 }
      );
    }),
    (_0x17b6e8[_0x5cdae0(0x1ee)] = (
      _0x9bb3b3,
      _0x1fbc8d,
      _0xc0b7d2 = "",
      _0x52813e
    ) =>
      _0x17b6e8[_0x5cdae0(0x1ae)](
        _0x9bb3b3,
        { text: _0x1fbc8d, ..._0x52813e },
        { quoted: _0xc0b7d2 }
      )),
    (_0x17b6e8[_0x5cdae0(0x1d8)] = (
      _0xca3d31,
      _0x46ece5,
      _0x4b8316 = "",
      _0x2decd = _0x17b6e8["user"]["id"],
      _0x9e0cd = {}
    ) => {
      const _0x5d1184 = _0x5cdae0;
      let _0x618bd3 = Object[_0x5d1184(0x1e2)](_0x46ece5["message"])[0x0],
        _0x16edc4 = _0x618bd3 === _0x5d1184(0x1b1);
      _0x16edc4 &&
        (_0x618bd3 = Object[_0x5d1184(0x1e2)](
          _0x46ece5[_0x5d1184(0x1c1)][_0x5d1184(0x1b1)][_0x5d1184(0x1c1)]
        )[0x0]);
      let _0x14ece9 = _0x16edc4
          ? _0x46ece5["message"]["ephemeralMessage"][_0x5d1184(0x1c1)]
          : _0x46ece5[_0x5d1184(0x1c1)],
        _0x2e2707 = _0x14ece9[_0x618bd3];
      if (typeof _0x2e2707 === _0x5d1184(0x1ef))
        _0x14ece9[_0x618bd3] = _0x4b8316 || _0x2e2707;
      else {
        if (_0x2e2707[_0x5d1184(0x19e)])
          _0x2e2707[_0x5d1184(0x19e)] =
            _0x4b8316 || _0x2e2707[_0x5d1184(0x19e)];
        else {
          if (_0x2e2707[_0x5d1184(0x215)])
            _0x2e2707["text"] = _0x4b8316 || _0x2e2707[_0x5d1184(0x215)];
        }
      }
      if (typeof _0x2e2707 !== _0x5d1184(0x1ef))
        _0x14ece9[_0x618bd3] = { ..._0x2e2707, ..._0x9e0cd };
      if (_0x46ece5["key"][_0x5d1184(0x217)])
        _0x2decd = _0x46ece5[_0x5d1184(0x1f0)][_0x5d1184(0x217)] =
          _0x2decd || _0x46ece5[_0x5d1184(0x1f0)][_0x5d1184(0x217)];
      else {
        if (_0x46ece5[_0x5d1184(0x1f0)]["participant"])
          _0x2decd = _0x46ece5[_0x5d1184(0x1f0)][_0x5d1184(0x217)] =
            _0x2decd || _0x46ece5[_0x5d1184(0x1f0)]["participant"];
      }
      if (
        _0x46ece5["key"][_0x5d1184(0x216)][_0x5d1184(0x1e4)]("@s.whatsapp.net")
      )
        _0x2decd = _0x2decd || _0x46ece5[_0x5d1184(0x1f0)][_0x5d1184(0x216)];
      else {
        if (_0x46ece5["key"]["remoteJid"][_0x5d1184(0x1e4)](_0x5d1184(0x1c4)))
          _0x2decd = _0x2decd || _0x46ece5[_0x5d1184(0x1f0)][_0x5d1184(0x216)];
      }
      return (
        (_0x46ece5[_0x5d1184(0x1f0)][_0x5d1184(0x216)] = _0xca3d31),
        (_0x46ece5[_0x5d1184(0x1f0)][_0x5d1184(0x1a2)] =
          _0x2decd === _0x17b6e8[_0x5d1184(0x20d)]["id"]),
        proto[_0x5d1184(0x20c)][_0x5d1184(0x1af)](_0x46ece5)
      );
    }),
    _0x17b6e8
  );
}
startHisoka();
let file = require["resolve"](__filename);
fs[_0x4003d6(0x192)](file, () => {
  const _0x3f35c7 = _0x4003d6;
  fs[_0x3f35c7(0x21c)](file),
    console[_0x3f35c7(0x1ad)](
      chalk[_0x3f35c7(0x1ff)]("Update\x20" + __filename)
    ),
    delete require[_0x3f35c7(0x1db)][file],
    require(file);
});
