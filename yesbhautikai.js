const _0x45fa5a = _0x42a0;
(function (_0x5b8520, _0x4c1b5b) {
  const _0xf1c635 = _0x42a0,
    _0x1fc80d = _0x5b8520();
  while (!![]) {
    try {
      const _0x515b53 =
        (-parseInt(_0xf1c635(0x1df)) / 0x1) *
          (-parseInt(_0xf1c635(0x1c3)) / 0x2) +
        -parseInt(_0xf1c635(0x1c0)) / 0x3 +
        (parseInt(_0xf1c635(0x1f0)) / 0x4) *
          (parseInt(_0xf1c635(0x1c5)) / 0x5) +
        -parseInt(_0xf1c635(0x21d)) / 0x6 +
        (-parseInt(_0xf1c635(0x1fa)) / 0x7) *
          (-parseInt(_0xf1c635(0x203)) / 0x8) +
        -parseInt(_0xf1c635(0x1da)) / 0x9 +
        -parseInt(_0xf1c635(0x20a)) / 0xa;
      if (_0x515b53 === _0x4c1b5b) break;
      else _0x1fc80d["push"](_0x1fc80d["shift"]());
    } catch (_0x4d3906) {
      _0x1fc80d["push"](_0x1fc80d["shift"]());
    }
  }
})(_0x4571, 0xdf267);
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
  } = require("@adiwajshing/baileys"),
  fs = require("fs"),
  util = require(_0x45fa5a(0x1bc)),
  chalk = require(_0x45fa5a(0x1d0)),
  { Configuration, OpenAIApi } = require(_0x45fa5a(0x209));
let setting = require(_0x45fa5a(0x1b5));
module[_0x45fa5a(0x1e0)] = yesbhautikai = async (
  _0x4def5a,
  _0x20e63b,
  _0x13d581,
  _0x498324
) => {
  const _0x496678 = _0x45fa5a;
  try {
    var _0x4bd08d =
        _0x20e63b[_0x496678(0x1cd)] === _0x496678(0x1b2)
          ? _0x20e63b[_0x496678(0x201)]["conversation"]
          : _0x20e63b["mtype"] == "imageMessage"
          ? _0x20e63b[_0x496678(0x201)][_0x496678(0x1c6)][_0x496678(0x20d)]
          : _0x20e63b[_0x496678(0x1cd)] == _0x496678(0x213)
          ? _0x20e63b["message"][_0x496678(0x213)][_0x496678(0x20d)]
          : _0x20e63b[_0x496678(0x1cd)] == "extendedTextMessage"
          ? _0x20e63b[_0x496678(0x201)]["extendedTextMessage"]["text"]
          : _0x20e63b[_0x496678(0x1cd)] == _0x496678(0x211)
          ? _0x20e63b[_0x496678(0x201)]["buttonsResponseMessage"][
              _0x496678(0x20f)
            ]
          : _0x20e63b[_0x496678(0x1cd)] == _0x496678(0x1f1)
          ? _0x20e63b[_0x496678(0x201)][_0x496678(0x1f1)][_0x496678(0x212)][
              _0x496678(0x1c7)
            ]
          : _0x20e63b["mtype"] == _0x496678(0x1fd)
          ? _0x20e63b[_0x496678(0x201)][_0x496678(0x1fd)][_0x496678(0x1d6)]
          : _0x20e63b["mtype"] === "messageContextInfo"
          ? _0x20e63b[_0x496678(0x201)][_0x496678(0x211)]?.[
              "selectedButtonId"
            ] ||
            _0x20e63b[_0x496678(0x201)][_0x496678(0x1f1)]?.[
              "singleSelectReply"
            ][_0x496678(0x1c7)] ||
            _0x20e63b[_0x496678(0x204)]
          : "",
      _0x2e464d =
        typeof _0x20e63b[_0x496678(0x204)] == "string" ? _0x20e63b["text"] : "",
      _0x3baf40 = /^[\\/!#.]/gi[_0x496678(0x1be)](_0x4bd08d)
        ? _0x4bd08d[_0x496678(0x1bf)](/^[\\/!#.]/gi)
        : "/";
    const _0x1155fe = _0x4bd08d[_0x496678(0x1d5)](_0x3baf40),
      _0x11fe0a = _0x4bd08d["replace"](_0x3baf40, "")
        ["trim"]()
        [_0x496678(0x1f2)](/ +/)
        [_0x496678(0x1b1)]()
        [_0x496678(0x1fb)](),
      _0x392fcd = _0x4bd08d[_0x496678(0x1de)]()
        ["split"](/ +/)
        [_0x496678(0x1c8)](0x1),
      _0x35db57 = _0x20e63b["pushName"] || _0x496678(0x1ef),
      _0x2c9173 = await _0x4def5a[_0x496678(0x208)](_0x4def5a["user"]["id"]),
      _0xdd3e33 = _0x20e63b["sender"] == _0x2c9173 ? !![] : ![];
    let _0x5b8192 = (q = _0x392fcd[_0x496678(0x21c)]("\x20"));
    const _0x4cbf8d = _0x2e464d[_0x496678(0x1de)]()[_0x496678(0x1f4)](
        _0x2e464d[_0x496678(0x1bb)]("\x20") + 0x1
      ),
      _0x1336db = _0x4cbf8d[_0x496678(0x1de)]()[_0x496678(0x1f4)](
        _0x4cbf8d["indexOf"]("\x20") + 0x1
      ),
      _0xd5962b = _0x20e63b["chat"],
      _0xe75a = _0x20e63b[_0x496678(0x1c4)],
      _0x387c43 = _0x20e63b[_0x496678(0x1d4)],
      _0x7cbed3 = _0x13d581[_0x496678(0x20e)][0x0],
      _0x257384 = (_0xdaded8, _0x2071db) => {
        const _0x2210db = _0x496678;
        return !_0x2071db
          ? chalk[_0x2210db(0x217)](_0xdaded8)
          : chalk[_0x2210db(0x1ce)](_0x2071db)(_0xdaded8);
      },
      _0x137c36 = _0x20e63b[_0x496678(0x1ea)]
        ? await _0x4def5a[_0x496678(0x1f3)](_0x20e63b["chat"])[
            _0x496678(0x1c9)
          ]((_0x5f1c3a) => {})
        : "",
      _0x48fdc1 = _0x20e63b[_0x496678(0x1ea)]
        ? _0x137c36[_0x496678(0x1f6)]
        : "";
    let _0x4f4c1e =
      _0x2e464d[_0x496678(0x1f5)] > 0x1e
        ? q[_0x496678(0x1f4)](0x0, 0x1e) + _0x496678(0x1ca)
        : _0x2e464d;
    if (_0x1155fe && !_0x20e63b[_0x496678(0x1ea)])
      console[_0x496678(0x1ec)](
        chalk[_0x496678(0x1dd)](chalk[_0x496678(0x1e5)](_0x496678(0x1e6))),
        _0x257384(_0x4f4c1e, _0x496678(0x1cb)),
        chalk[_0x496678(0x214)](_0x496678(0x206)),
        chalk[_0x496678(0x217)](_0x35db57),
        chalk[_0x496678(0x20b)](
          "[\x20" +
            _0x20e63b["sender"]["replace"](_0x496678(0x1ff), "") +
            "\x20]"
        )
      );
    else
      _0x1155fe &&
        _0x20e63b["isGroup"] &&
        console[_0x496678(0x1ec)](
          chalk[_0x496678(0x1dd)](chalk[_0x496678(0x1e5)](_0x496678(0x1e6))),
          _0x257384(_0x4f4c1e, _0x496678(0x1cb)),
          chalk[_0x496678(0x214)](_0x496678(0x206)),
          chalk["green"](_0x35db57),
          chalk[_0x496678(0x20b)](
            "[\x20" +
              _0x20e63b[_0x496678(0x1d4)][_0x496678(0x1ee)](
                _0x496678(0x1ff),
                ""
              ) +
              "\x20]"
          ),
          chalk[_0x496678(0x1dc)]("IN"),
          chalk[_0x496678(0x217)](_0x48fdc1)
        );
    if (_0x1155fe)
      switch (_0x11fe0a) {
        case _0x496678(0x205):
        case "menu":
          _0x20e63b[_0x496678(0x1c4)](
            "*Whatsapp\x20Ai\x20Bot*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*(ChatGPT)*\x0aCmd:\x20" +
              _0x3baf40 +
              _0x496678(0x218) +
              _0x3baf40 +
              "img\x0aCreate\x20an\x20image\x20from\x20text\x0a\x0a*(Source\x20Code\x20Bot)*\x0aCmd:\x20" +
              _0x3baf40 +
              _0x496678(0x1e3)
          );
          break;
        case "ai":
        case _0x496678(0x209):
          try {
            if (setting[_0x496678(0x216)] === _0x496678(0x1f9))
              return _0xe75a(_0x496678(0x1d9));
            if (!_0x5b8192)
              return _0xe75a(
                "Chat\x20with\x20AI.\x0a\x0aExample:\x0a" +
                  _0x3baf40 +
                  _0x11fe0a +
                  _0x496678(0x1d2)
              );
            const _0x36cacf = new Configuration({
                apiKey: setting[_0x496678(0x216)],
              }),
              _0x1017e9 = new OpenAIApi(_0x36cacf),
              _0x2c1fb6 = JSON[_0x496678(0x21a)](_0x5b8192),
              _0x1330b1 = JSON[_0x496678(0x21a)](_0x35db57),
              _0x120d45 = "\x0a",
              _0x95b49e = "\x20",
              _0x4a2a10 = _0x496678(0x1e4),
              _0x5bba7c = JSON[_0x496678(0x1d3)](_0x1330b1),
              _0x580301 = fs[_0x496678(0x1eb)](
                "yesbhautik/" + _0x5bba7c + _0x496678(0x1e2),
                "a"
              ),
              _0x4af892 = JSON[_0x496678(0x1d3)](_0x2c1fb6),
              _0x5da9a6 = "\x20";
            let _0x2b720d = fs[_0x496678(0x21b)](
              "yesbhautik/" + _0x5bba7c + ".txt"
            );
            const _0x34aba1 = _0x2b720d[_0x496678(0x1fe)]();
            let _0x24db53 = _0x34aba1 + "\x0a\x0a" + _0x5b8192 + "\x20:";
            const _0x329fa1 = await _0x1017e9[_0x496678(0x1e1)]({
                model: "gpt-3.5-turbo",
                messages: [{ role: _0x496678(0x1b8), content: _0x5b8192 }],
              }),
              _0x1485eb = _0x329fa1[_0x496678(0x1fe)]();
            _0x20e63b[_0x496678(0x1c4)](
              "" +
                _0x329fa1[_0x496678(0x1bd)]["choices"][0x0][_0x496678(0x201)][
                  "content"
                ]
            );
            const _0x4a265e = JSON[_0x496678(0x21a)](
                "" +
                  _0x329fa1["data"][_0x496678(0x1b3)][0x0][_0x496678(0x201)][
                    "content"
                  ]
              ),
              _0x959fd3 = JSON[_0x496678(0x1d3)](_0x4a265e),
              _0x4eb776 = _0x959fd3[_0x496678(0x1ee)](/\r?\n|\r/g, "");
            fs[_0x496678(0x215)](
              "yesbhautik/convo.txt",
              _0x120d45,
              function (_0x57283d) {
                if (_0x57283d) throw _0x57283d;
              }
            ),
              fs[_0x496678(0x215)](
                _0x496678(0x1fc) + _0x5bba7c + ".txt",
                _0x95b49e,
                function (_0x37bdc8) {
                  const _0x1c4b1f = _0x496678;
                  fs[_0x1c4b1f(0x215)](
                    _0x1c4b1f(0x1fc) + _0x5bba7c + _0x1c4b1f(0x1e2),
                    _0x120d45,
                    function (_0x1f79aa) {
                      const _0x197d4b = _0x1c4b1f;
                      fs["appendFile"](
                        _0x197d4b(0x1fc) + _0x5bba7c + _0x197d4b(0x1e2),
                        _0x95b49e,
                        function (_0x30f90f) {
                          const _0x58b654 = _0x197d4b;
                          fs[_0x58b654(0x215)](
                            _0x58b654(0x1fc) + _0x5bba7c + ".txt",
                            _0x4af892,
                            function (_0x5a88f3) {
                              const _0x35369e = _0x58b654;
                              fs[_0x35369e(0x215)](
                                _0x35369e(0x1fc) + _0x5bba7c + _0x35369e(0x1e2),
                                _0x120d45,
                                function (_0x1d4c13) {
                                  const _0x1d78cf = _0x35369e;
                                  fs["appendFile"](
                                    _0x1d78cf(0x1fc) +
                                      _0x5bba7c +
                                      _0x1d78cf(0x1e2),
                                    _0x120d45,
                                    function (_0x4eba5f) {
                                      const _0x2ea96a = _0x1d78cf;
                                      fs[_0x2ea96a(0x215)](
                                        _0x2ea96a(0x1fc) + _0x5bba7c + ".txt",
                                        _0x4eb776,
                                        function (_0x3cfe24) {
                                          fs["appendFile"](
                                            "yesbhautik/" + _0x5bba7c + ".txt",
                                            _0x120d45,
                                            function (_0x50a0e5) {
                                              if (_0x50a0e5) throw _0x50a0e5;
                                            }
                                          );
                                          if (_0x3cfe24) throw _0x3cfe24;
                                        }
                                      );
                                      if (_0x4eba5f) throw _0x4eba5f;
                                    }
                                  );
                                  if (_0x1d4c13) throw _0x1d4c13;
                                }
                              );
                              if (_0x5a88f3) throw _0x5a88f3;
                            }
                          );
                          if (_0x30f90f) throw _0x30f90f;
                        }
                      );
                      if (_0x1f79aa) throw erroror;
                    }
                  );
                  if (_0x37bdc8) throw _0x37bdc8;
                }
              );
          } catch (_0x31978d) {
            _0x31978d[_0x496678(0x1e9)]
              ? (console[_0x496678(0x1ec)](_0x31978d["response"]["status"]),
                console[_0x496678(0x1ec)](
                  _0x31978d[_0x496678(0x1e9)][_0x496678(0x1bd)]
                ),
                console[_0x496678(0x1ec)](
                  _0x31978d[_0x496678(0x1e9)][_0x496678(0x1db)] +
                    "\x0a\x0a" +
                    _0x31978d["response"]["data"]
                ))
              : (console[_0x496678(0x1ec)](_0x31978d),
                _0x20e63b[_0x496678(0x1c4)](
                  _0x496678(0x1d8) + _0x31978d[_0x496678(0x201)]
                ));
          }
          break;
        case _0x496678(0x1d7):
        case _0x496678(0x1ed):
        case _0x496678(0x200):
        case _0x496678(0x202):
          try {
            if (setting[_0x496678(0x216)] === _0x496678(0x1f9))
              return _0xe75a(
                "Apikey\x20has\x20not\x20been\x20filled\x0a\x0aPlease\x20fill\x20in\x20the\x20apikey\x20first\x20in\x20the\x20key.json\x20file\x0a\x0aApikey\x20can\x20be\x20made\x20on\x20the\x20website:\x20https://beta.openai.com/account/api-keys"
              );
            if (!_0x5b8192)
              return _0xe75a(
                _0x496678(0x20c) + _0x3baf40 + _0x11fe0a + _0x496678(0x1c1)
              );
            const _0x4e9018 = new Configuration({
                apiKey: setting[_0x496678(0x216)],
              }),
              _0xd36901 = new OpenAIApi(_0x4e9018),
              _0x38ecff = await _0xd36901[_0x496678(0x1e8)]({
                prompt: _0x5b8192,
                n: 0x1,
                size: _0x496678(0x1cc),
              });
            _0x4def5a[_0x496678(0x219)](
              _0xd5962b,
              _0x38ecff["data"][_0x496678(0x1bd)][0x0][_0x496678(0x21e)],
              _0x5b8192,
              _0x7cbed3
            );
          } catch (_0x3d791c) {
            _0x3d791c[_0x496678(0x1e9)]
              ? (console[_0x496678(0x1ec)](
                  _0x3d791c["response"][_0x496678(0x1db)]
                ),
                console[_0x496678(0x1ec)](
                  _0x3d791c[_0x496678(0x1e9)][_0x496678(0x1bd)]
                ),
                console[_0x496678(0x1ec)](
                  _0x3d791c[_0x496678(0x1e9)]["status"] +
                    "\x0a\x0a" +
                    _0x3d791c["response"][_0x496678(0x1bd)]
                ))
              : (console["log"](_0x3d791c),
                _0x20e63b[_0x496678(0x1c4)](
                  _0x496678(0x1d8) + _0x3d791c[_0x496678(0x201)]
                ));
          }
          break;
        case "sc":
        case "script":
        case _0x496678(0x207):
          _0x20e63b[_0x496678(0x1c4)](_0x496678(0x210));
          break;
        default: {
          if (_0x1155fe && _0x2e464d[_0x496678(0x1fb)]() != undefined) {
            if (_0x20e63b[_0x496678(0x1f8)][_0x496678(0x1d1)](_0x496678(0x1b6)))
              return;
            if (_0x20e63b["isBaileys"]) return;
            if (!_0x2e464d["toLowerCase"]()) return;
            if (_0x4f4c1e || (_0x1155fe && !_0x20e63b[_0x496678(0x1ea)]))
              console[_0x496678(0x1ec)](
                chalk[_0x496678(0x1dd)](
                  chalk[_0x496678(0x1e7)](_0x496678(0x1b4))
                ),
                _0x257384(_0x496678(0x1ba), "turquoise"),
                _0x257384("" + _0x3baf40 + _0x11fe0a, _0x496678(0x1cb)),
                _0x257384("not\x20available", _0x496678(0x1cb))
              );
            else
              (_0x4f4c1e || (_0x1155fe && _0x20e63b[_0x496678(0x1ea)])) &&
                console[_0x496678(0x1ec)](
                  chalk["black"](chalk[_0x496678(0x1e7)](_0x496678(0x1b4))),
                  _0x257384(_0x496678(0x1ba), _0x496678(0x1cb)),
                  _0x257384("" + _0x3baf40 + _0x11fe0a, _0x496678(0x1cb)),
                  _0x257384(_0x496678(0x1b9), "turquoise")
                );
          }
        }
      }
  } catch (_0x42d176) {
    _0x20e63b[_0x496678(0x1c4)](util[_0x496678(0x1cf)](_0x42d176));
  }
};
function _0x42a0(_0x22560b, _0x3920b9) {
  const _0x4571d2 = _0x4571();
  return (
    (_0x42a0 = function (_0x42a008, _0x408134) {
      _0x42a008 = _0x42a008 - 0x1b1;
      let _0x1516ed = _0x4571d2[_0x42a008];
      return _0x1516ed;
    }),
    _0x42a0(_0x22560b, _0x3920b9)
  );
}
let file = require["resolve"](__filename);
fs["watchFile"](file, () => {
  const _0x511896 = _0x45fa5a;
  fs[_0x511896(0x1f7)](file),
    console[_0x511896(0x1ec)](
      chalk[_0x511896(0x1b7)](_0x511896(0x1c2) + __filename)
    ),
    delete require["cache"][file],
    require(file);
});
function _0x4571() {
  const _0x21f685 = [
    "text",
    "help",
    "From",
    "scbot",
    "decodeJid",
    "openai",
    "1609270mtsDlP",
    "yellow",
    "Mcreate\x20an\x20image\x20from\x20AI.\x0a\x0aExample:\x0a",
    "caption",
    "messages",
    "selectedButtonId",
    "This\x20bot\x20uses\x20a\x20script\x20from\x20https://github.com/yesbhautik/Whatsapp-Ai-BOT",
    "buttonsResponseMessage",
    "singleSelectReply",
    "videoMessage",
    "magenta",
    "appendFile",
    "keyopenai",
    "green",
    "ai\x20\x0aAsk\x20anything\x20to\x20AI.\x0a\x0a*(DALL-E)*\x0aCmd:\x20",
    "sendImage",
    "stringify",
    "readFileSync",
    "join",
    "3233280cpjXKV",
    "url",
    "shift",
    "conversation",
    "choices",
    "[\x20ERROR\x20]",
    "./key.json",
    "broadcast",
    "redBright",
    "user",
    "not\x20available",
    "command",
    "indexOf",
    "util",
    "data",
    "test",
    "match",
    "982509HTjiyV",
    "\x20Wooden\x20house\x20on\x20snow\x20mountain",
    "Update\x20",
    "21948iuHDOf",
    "reply",
    "20185yDIZaV",
    "imageMessage",
    "selectedRowId",
    "slice",
    "catch",
    "...",
    "turquoise",
    "512x512",
    "mtype",
    "keyword",
    "format",
    "chalk",
    "endsWith",
    "\x20What\x20is\x20a\x20recession",
    "parse",
    "sender",
    "startsWith",
    "selectedId",
    "img",
    "Sorry,\x20there\x20seems\x20to\x20be\x20an\x20error\x20:",
    "Apikey\x20has\x20not\x20been\x20filled\x0a\x0aPlease\x20fill\x20in\x20the\x20apikey\x20first\x20in\x20the\x20key.json\x20file\x0a\x0aThe\x20api\x20key\x20can\x20be\x20generated\x20on\x20the\x20website:\x20https://beta.openai.com/account/api-keys",
    "1190034qDvKUr",
    "status",
    "blueBright",
    "black",
    "trim",
    "107skuuOu",
    "exports",
    "createChatCompletion",
    ".txt",
    "sc\x0aDisplays\x20the\x20source\x20code\x20of\x20the\x20bot\x20used",
    "Human\x20:",
    "bgWhite",
    "[\x20LOGS\x20]",
    "bgRed",
    "createImage",
    "response",
    "isGroup",
    "openSync",
    "log",
    "ai-img",
    "replace",
    "No\x20Name",
    "436USjsQS",
    "listResponseMessage",
    "split",
    "groupMetadata",
    "substring",
    "length",
    "subject",
    "unwatchFile",
    "chat",
    "ISI_APIKEY_OPENAI_DISINI",
    "1607578ZbXzoM",
    "toLowerCase",
    "yesbhautik/",
    "templateButtonReplyMessage",
    "toString",
    "@s.whatsapp.net",
    "image",
    "message",
    "images",
    "16xMkVWA",
  ];
  _0x4571 = function () {
    return _0x21f685;
  };
  return _0x4571();
}