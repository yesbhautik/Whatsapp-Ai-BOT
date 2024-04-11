const _0x39e3e6 = _0x2987;
(function (_0x34eda4, _0x4ab326) {
  const _0x4ef61a = _0x2987,
    _0x5333ec = _0x34eda4();
  while (!![]) {
    try {
      const _0x119b60 =
        parseInt(_0x4ef61a(0x9d)) / 0x1 +
        (-parseInt(_0x4ef61a(0x86)) / 0x2) *
          (-parseInt(_0x4ef61a(0x9c)) / 0x3) +
        -parseInt(_0x4ef61a(0x96)) / 0x4 +
        (parseInt(_0x4ef61a(0x8f)) / 0x5) * (-parseInt(_0x4ef61a(0x9a)) / 0x6) +
        (-parseInt(_0x4ef61a(0x7b)) / 0x7) *
          (-parseInt(_0x4ef61a(0xc4)) / 0x8) +
        -parseInt(_0x4ef61a(0xae)) / 0x9 +
        (-parseInt(_0x4ef61a(0xba)) / 0xa) * (-parseInt(_0x4ef61a(0xb4)) / 0xb);
      if (_0x119b60 === _0x4ab326) break;
      else _0x5333ec["push"](_0x5333ec["shift"]());
    } catch (_0x5de297) {
      _0x5333ec["push"](_0x5333ec["shift"]());
    }
  }
})(_0x4195, 0xce1ca);
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType,
  } = require(_0x39e3e6(0x94)),
  fs = require("fs"),
  util = require("util"),
  chalk = require(_0x39e3e6(0xd1)),
  OpenAI = require("openai");
let setting = require(_0x39e3e6(0xc6));
const openai = new OpenAI({ apiKey: setting[_0x39e3e6(0xaa)] });
module[_0x39e3e6(0xda)] = yesbhautikai = async (
  _0x34e142,
  _0x5cbb01,
  _0x15882e
) => {
  const _0x56484c = _0x39e3e6;
  try {
    var _0x512345 =
      _0x5cbb01[_0x56484c(0x81)] === _0x56484c(0x8c)
        ? _0x5cbb01["message"][_0x56484c(0x8c)]
        : _0x5cbb01[_0x56484c(0x81)] == _0x56484c(0x7e)
        ? _0x5cbb01[_0x56484c(0xcf)][_0x56484c(0x7e)][_0x56484c(0x99)]
        : _0x5cbb01[_0x56484c(0x81)] == _0x56484c(0xa3)
        ? _0x5cbb01[_0x56484c(0xcf)]["videoMessage"][_0x56484c(0x99)]
        : _0x5cbb01[_0x56484c(0x81)] == _0x56484c(0xe1)
        ? _0x5cbb01[_0x56484c(0xcf)][_0x56484c(0xe1)][_0x56484c(0xc0)]
        : _0x5cbb01["mtype"] == _0x56484c(0xab)
        ? _0x5cbb01[_0x56484c(0xcf)][_0x56484c(0xab)][_0x56484c(0xca)]
        : _0x5cbb01[_0x56484c(0x81)] == "listResponseMessage"
        ? _0x5cbb01[_0x56484c(0xcf)][_0x56484c(0xce)]["singleSelectReply"][
            _0x56484c(0xa9)
          ]
        : _0x5cbb01[_0x56484c(0x81)] == _0x56484c(0xd7)
        ? _0x5cbb01["message"][_0x56484c(0xd7)]["selectedId"]
        : _0x5cbb01[_0x56484c(0x81)] === _0x56484c(0xc8)
        ? _0x5cbb01["message"][_0x56484c(0xab)]?.["selectedButtonId"] ||
          _0x5cbb01["message"][_0x56484c(0xce)]?.[_0x56484c(0x9b)][
            _0x56484c(0xa9)
          ] ||
          _0x5cbb01["text"]
        : "";
    if (_0x5cbb01["mtype"] === _0x56484c(0x7a)) return;
    var _0x52ffca =
        typeof _0x5cbb01[_0x56484c(0xc0)] == _0x56484c(0xa0)
          ? _0x5cbb01[_0x56484c(0xc0)]
          : "",
      _0x51fe27 = /^[\\/!#.]/gi["test"](_0x512345)
        ? _0x512345[_0x56484c(0x8d)](/^[\\/!#.]/gi)
        : "/";
    const _0x4c9947 = _0x512345[_0x56484c(0xd6)](_0x51fe27),
      _0x158081 = _0x512345["replace"](_0x51fe27, "")
        [_0x56484c(0xe5)]()
        ["split"](/ +/)
        [_0x56484c(0xb5)]()
        ["toLowerCase"](),
      _0x5b303f = _0x512345[_0x56484c(0xe5)]()
        [_0x56484c(0xcb)](/ +/)
        [_0x56484c(0x82)](0x1),
      _0x208872 = _0x5cbb01["pushName"] || "No\x20Name",
      _0x388b86 = await _0x34e142[_0x56484c(0xd2)](
        _0x34e142[_0x56484c(0xd0)]["id"]
      ),
      _0x5654b1 = _0x5cbb01[_0x56484c(0xe3)] == _0x388b86 ? !![] : ![];
    let _0x3e83e8 = (q = _0x5b303f[_0x56484c(0xbd)]("\x20"));
    const _0x114cc2 = _0x52ffca["trim"]()[_0x56484c(0xd4)](
        _0x52ffca["indexOf"]("\x20") + 0x1
      ),
      _0x1ad373 = _0x114cc2[_0x56484c(0xe5)]()[_0x56484c(0xd4)](
        _0x114cc2[_0x56484c(0x91)]("\x20") + 0x1
      ),
      _0x5ba7d8 = _0x5cbb01["chat"],
      _0x576d92 = _0x5cbb01[_0x56484c(0xbc)],
      _0x2a4f69 = _0x5cbb01[_0x56484c(0xe3)],
      _0x11c15a = _0x15882e["messages"][0x0],
      _0x3d805d = (_0x436c29, _0x23af12) => {
        const _0x46407c = _0x56484c;
        return !_0x23af12
          ? chalk[_0x46407c(0xa1)](_0x436c29)
          : chalk[_0x46407c(0xd5)](_0x23af12)(_0x436c29);
      },
      _0x331efc = _0x5cbb01[_0x56484c(0xdb)]
        ? await _0x34e142[_0x56484c(0xbe)](_0x5cbb01[_0x56484c(0x98)])[
            _0x56484c(0xa7)
          ]((_0x524897) => {})
        : "",
      _0x5bdaeb = _0x5cbb01[_0x56484c(0xdb)] ? _0x331efc[_0x56484c(0x93)] : "";
    let _0x1b1e36 =
      _0x52ffca["length"] > 0x1e
        ? q[_0x56484c(0xd4)](0x0, 0x1e) + _0x56484c(0xd8)
        : _0x52ffca;
    if (_0x4c9947 && !_0x5cbb01[_0x56484c(0xdb)])
      console[_0x56484c(0xad)](
        chalk[_0x56484c(0x95)](chalk[_0x56484c(0xc1)](_0x56484c(0x8a))),
        _0x3d805d(_0x1b1e36, _0x56484c(0x92)),
        chalk[_0x56484c(0x7c)]("From"),
        chalk[_0x56484c(0xa1)](_0x208872),
        chalk[_0x56484c(0xe0)](
          "[\x20" +
            _0x5cbb01["sender"][_0x56484c(0x9e)](_0x56484c(0x9f), "") +
            "\x20]"
        )
      );
    else
      _0x4c9947 &&
        _0x5cbb01["isGroup"] &&
        console[_0x56484c(0xad)](
          chalk["black"](chalk[_0x56484c(0xc1)](_0x56484c(0x8a))),
          _0x3d805d(_0x1b1e36, "turquoise"),
          chalk[_0x56484c(0x7c)](_0x56484c(0xb7)),
          chalk[_0x56484c(0xa1)](_0x208872),
          chalk[_0x56484c(0xe0)](
            "[\x20" +
              _0x5cbb01[_0x56484c(0xe3)][_0x56484c(0x9e)](
                "@s.whatsapp.net",
                ""
              ) +
              "\x20]"
          ),
          chalk[_0x56484c(0xb8)]("IN"),
          chalk[_0x56484c(0xa1)](_0x5bdaeb)
        );
    if (_0x4c9947)
      switch (_0x158081) {
        case _0x56484c(0xdc):
        case "menu":
        case _0x56484c(0xd9):
        case _0x56484c(0xa4):
          _0x5cbb01["reply"](
            _0x56484c(0xbf) +
              _0x51fe27 +
              _0x56484c(0xd3) +
              _0x51fe27 +
              _0x56484c(0xa2) +
              _0x51fe27 +
              _0x56484c(0x83)
          );
          break;
        case "ai":
        case _0x56484c(0x8b):
        case _0x56484c(0x80):
        case "ask":
          try {
            if (setting[_0x56484c(0xaa)] === _0x56484c(0xa8))
              return _0x576d92(_0x56484c(0x8e));
            if (!_0x3e83e8)
              return _0x576d92(
                _0x56484c(0x7d) +
                  _0x51fe27 +
                  _0x158081 +
                  "\x20What\x20is\x20a\x20recession"
              );
            const _0x9c56a8 = await openai["chat"][_0x56484c(0xb9)][
              _0x56484c(0x88)
            ]({
              messages: [{ role: _0x56484c(0xd0), content: q }],
              model: _0x56484c(0xc5),
            });
            await _0x5cbb01[_0x56484c(0xbc)](
              _0x9c56a8[_0x56484c(0xb6)][0x0][_0x56484c(0xcf)][_0x56484c(0x97)]
            );
          } catch (_0x510326) {
            _0x510326[_0x56484c(0xde)]
              ? (console[_0x56484c(0xad)](
                  _0x510326[_0x56484c(0xde)][_0x56484c(0xc7)]
                ),
                console[_0x56484c(0xad)](_0x510326[_0x56484c(0xde)]["data"]))
              : (console[_0x56484c(0xad)](_0x510326),
                _0x5cbb01[_0x56484c(0xbc)](
                  _0x56484c(0x85) + _0x510326[_0x56484c(0xcf)]
                ));
          }
          break;
        case _0x56484c(0x7f):
        case _0x56484c(0x89):
        case _0x56484c(0xe4):
        case _0x56484c(0xb3):
        case "dall-e":
        case _0x56484c(0xbb):
          try {
            if (setting[_0x56484c(0xaa)] === _0x56484c(0xa8))
              return _0x576d92(_0x56484c(0xdf));
            if (!_0x3e83e8)
              return _0x576d92(
                "Mcreate\x20an\x20image\x20from\x20AI.\x0a\x0aExample:\x0a" +
                  _0x51fe27 +
                  _0x158081 +
                  _0x56484c(0xcd)
              );
            const _0x11cf44 = await openai[_0x56484c(0xb3)][_0x56484c(0x87)]({
              model: _0x56484c(0x84),
              prompt: q,
              n: 0x1,
              size: "512x512",
            });
            _0x34e142["sendImage"](
              _0x5ba7d8,
              _0x11cf44[_0x56484c(0xc9)][0x0]["url"],
              _0x3e83e8,
              _0x11c15a
            );
          } catch (_0x103010) {
            _0x103010["response"]
              ? (console["log"](_0x103010[_0x56484c(0xde)][_0x56484c(0xc7)]),
                console[_0x56484c(0xad)](
                  _0x103010[_0x56484c(0xde)][_0x56484c(0xc9)]
                ),
                console[_0x56484c(0xad)](
                  _0x103010[_0x56484c(0xde)][_0x56484c(0xc7)] +
                    "\x0a\x0a" +
                    _0x103010[_0x56484c(0xde)][_0x56484c(0xc9)]
                ))
              : (console[_0x56484c(0xad)](_0x103010),
                _0x5cbb01["reply"](
                  _0x56484c(0x85) + _0x103010[_0x56484c(0xcf)]
                ));
          }
          break;
        case "sc":
        case _0x56484c(0xb0):
        case _0x56484c(0xac):
          _0x5cbb01[_0x56484c(0xbc)](_0x56484c(0xa6));
          break;
        default: {
          if (_0x4c9947 && _0x52ffca[_0x56484c(0xdd)]() != undefined) {
            if (_0x5cbb01[_0x56484c(0x98)]["endsWith"](_0x56484c(0xcc))) return;
            if (_0x5cbb01["isBaileys"]) return;
            if (!_0x52ffca[_0x56484c(0xdd)]()) return;
            if (_0x1b1e36 || (_0x4c9947 && !_0x5cbb01[_0x56484c(0xdb)]))
              console[_0x56484c(0xad)](
                chalk["black"](chalk[_0x56484c(0xb1)](_0x56484c(0xa5))),
                _0x3d805d(_0x56484c(0xc3), _0x56484c(0x92)),
                _0x3d805d("" + _0x51fe27 + _0x158081, _0x56484c(0x92)),
                _0x3d805d(_0x56484c(0xe2), "turquoise")
              );
            else
              (_0x1b1e36 || (_0x4c9947 && _0x5cbb01[_0x56484c(0xdb)])) &&
                console["log"](
                  chalk[_0x56484c(0x95)](chalk["bgRed"](_0x56484c(0xa5))),
                  _0x3d805d(_0x56484c(0xc3), "turquoise"),
                  _0x3d805d("" + _0x51fe27 + _0x158081, _0x56484c(0x92)),
                  _0x3d805d(_0x56484c(0xe2), _0x56484c(0x92))
                );
          }
        }
      }
  } catch (_0x26c12e) {
    _0x5cbb01[_0x56484c(0xbc)](util["format"](_0x26c12e));
  }
};
function _0x2987(_0x1b212f, _0x1b4209) {
  const _0x4195ae = _0x4195();
  return (
    (_0x2987 = function (_0x2987da, _0x112b9d) {
      _0x2987da = _0x2987da - 0x7a;
      let _0x5b6948 = _0x4195ae[_0x2987da];
      return _0x5b6948;
    }),
    _0x2987(_0x1b212f, _0x1b4209)
  );
}
let file = require["resolve"](__filename);
function _0x4195() {
  const _0x56340b = [
    "images",
    "2585eThCnN",
    "shift",
    "choices",
    "From",
    "blueBright",
    "completions",
    "44860fyTTHC",
    "dalle",
    "reply",
    "join",
    "groupMetadata",
    "*Whatsapp\x20Ai\x20Bot*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*(ChatGPT)*\x0aCmd:\x20",
    "text",
    "bgWhite",
    "unwatchFile",
    "command",
    "8BUyGEz",
    "gpt-3.5-turbo",
    "./key.json",
    "status",
    "messageContextInfo",
    "data",
    "selectedButtonId",
    "split",
    "broadcast",
    "\x20Wooden\x20house\x20on\x20snow\x20mountain",
    "listResponseMessage",
    "message",
    "user",
    "chalk",
    "decodeJid",
    "ai\x20\x0aAsk\x20anything\x20to\x20AI.\x0a\x0a*(DALL-E)*\x0aCmd:\x20",
    "substring",
    "keyword",
    "startsWith",
    "templateButtonReplyMessage",
    "...",
    "start",
    "exports",
    "isGroup",
    "help",
    "toLowerCase",
    "response",
    "Apikey\x20has\x20not\x20been\x20filled\x0a\x0aPlease\x20fill\x20in\x20the\x20apikey\x20first\x20in\x20the\x20key.json\x20file\x0a\x0aApikey\x20can\x20be\x20made\x20on\x20the\x20website:\x20https://beta.openai.com/account/api-keys",
    "yellow",
    "extendedTextMessage",
    "not\x20available",
    "sender",
    "image",
    "trim",
    "viewOnceMessageV2",
    "10797493pzkLpt",
    "magenta",
    "Chat\x20with\x20AI.\x0a\x0aExample:\x0a",
    "imageMessage",
    "img",
    "chatgpt",
    "mtype",
    "slice",
    "sc\x0aDisplays\x20the\x20source\x20code\x20of\x20the\x20bot\x20used",
    "dall-e-2",
    "Sorry,\x20there\x20seems\x20to\x20be\x20an\x20error\x20:",
    "2MxaoUW",
    "generate",
    "create",
    "ai-img",
    "[\x20LOGS\x20]",
    "openai",
    "conversation",
    "match",
    "Apikey\x20has\x20not\x20been\x20filled\x0a\x0aPlease\x20fill\x20in\x20the\x20apikey\x20first\x20in\x20the\x20key.json\x20file\x0a\x0aThe\x20api\x20key\x20can\x20be\x20generated\x20on\x20the\x20website:\x20https://beta.openai.com/account/api-keys",
    "7264615lEOnQU",
    "watchFile",
    "indexOf",
    "turquoise",
    "subject",
    "@whiskeysockets/baileys",
    "black",
    "3001060tHBjGT",
    "content",
    "chat",
    "caption",
    "6oxPgxi",
    "singleSelectReply",
    "3242082SXqfbA",
    "48932wGUKuB",
    "replace",
    "@s.whatsapp.net",
    "string",
    "green",
    "img\x0aCreate\x20an\x20image\x20from\x20text\x0a\x0a*(Source\x20Code\x20Bot)*\x0aCmd:\x20",
    "videoMessage",
    "info",
    "[\x20ERROR\x20]",
    "This\x20bot\x20uses\x20a\x20script\x20from\x20https://github.com/yesbhautik/Whatsapp-Ai-BOT",
    "catch",
    "ISI_APIKEY_OPENAI_DISINI",
    "selectedRowId",
    "keyopenai",
    "buttonsResponseMessage",
    "scbot",
    "log",
    "6110217QDuKKY",
    "redBright",
    "script",
    "bgRed",
    "cache",
  ];
  _0x4195 = function () {
    return _0x56340b;
  };
  return _0x4195();
}
fs[_0x39e3e6(0x90)](file, () => {
  const _0x1476e2 = _0x39e3e6;
  fs[_0x1476e2(0xc2)](file),
    console[_0x1476e2(0xad)](chalk[_0x1476e2(0xaf)]("Update\x20" + __filename)),
    delete require[_0x1476e2(0xb2)][file],
    require(file);
});
