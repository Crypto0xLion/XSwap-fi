import {
  B as l,
  g as w,
  s as b,
  i as h,
  I as m,
  d as O,
  c as L,
  a as E,
  b as x,
  H as y,
  f as R,
} from "./index-80b9e8d9.js";
class M extends l {
  constructor({
    callbackSelector: e,
    cause: t,
    data: n,
    extraData: c,
    sender: i,
    urls: s,
  }) {
    super(
      t.shortMessage ||
        "An error occurred while fetching for an offchain result.",
      {
        cause: t,
        metaMessages: [
          ...(t.metaMessages || []),
          t.metaMessages?.length ? "" : [],
          "Offchain Gateway Call:",
          s && ["  Gateway URL(s):", ...s.map((u) => `    ${w(u)}`)],
          `  Sender: ${i}`,
          `  Data: ${n}`,
          `  Callback selector: ${e}`,
          `  Extra data: ${c}`,
        ].flat(),
      }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "OffchainLookupError",
      });
  }
}
class $ extends l {
  constructor({ result: e, url: t }) {
    super(
      "Offchain gateway response is malformed. Response data must be a hex value.",
      { metaMessages: [`Gateway URL: ${w(t)}`, `Response: ${b(e)}`] }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "OffchainLookupResponseMalformedError",
      });
  }
}
class S extends l {
  constructor({ sender: e, to: t }) {
    super(
      "Reverted sender address does not match target contract address (`to`).",
      {
        metaMessages: [
          `Contract address: ${t}`,
          `OffchainLookup sender address: ${e}`,
        ],
      }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "OffchainLookupSenderMismatchError",
      });
  }
}
function A(r, e) {
  if (!h(r, { strict: !1 })) throw new m({ address: r });
  if (!h(e, { strict: !1 })) throw new m({ address: e });
  return r.toLowerCase() === e.toLowerCase();
}
const P = "0x556f1830",
  q = {
    name: "OffchainLookup",
    type: "error",
    inputs: [
      { name: "sender", type: "address" },
      { name: "urls", type: "string[]" },
      { name: "callData", type: "bytes" },
      { name: "callbackFunction", type: "bytes4" },
      { name: "extraData", type: "bytes" },
    ],
  };
async function j(r, { blockNumber: e, blockTag: t, data: n, to: c }) {
  const { args: i } = O({ data: n, abi: [q] }),
    [s, u, a, o, p] = i,
    { ccipRead: d } = r,
    g = d && typeof d?.request == "function" ? d.request : v;
  try {
    if (!A(c, s)) throw new S({ sender: s, to: c });
    const f = await g({ data: a, sender: s, urls: u }),
      { data: k } = await L(r, {
        blockNumber: e,
        blockTag: t,
        data: E([o, x([{ type: "bytes" }, { type: "bytes" }], [f, p])]),
        to: c,
      });
    return k;
  } catch (f) {
    throw new M({
      callbackSelector: o,
      cause: f,
      data: n,
      extraData: p,
      sender: s,
      urls: u,
    });
  }
}
async function v({ data: r, sender: e, urls: t }) {
  let n = new Error("An unknown error occurred.");
  for (let c = 0; c < t.length; c++) {
    const i = t[c],
      s = i.includes("{data}") ? "GET" : "POST",
      u = s === "POST" ? { data: r, sender: e } : void 0;
    try {
      const a = await fetch(i.replace("{sender}", e).replace("{data}", r), {
        body: JSON.stringify(u),
        method: s,
      });
      let o;
      if (
        (a.headers.get("Content-Type")?.startsWith("application/json")
          ? (o = (await a.json()).data)
          : (o = await a.text()),
        !a.ok)
      ) {
        n = new y({
          body: u,
          details: o?.error ? b(o.error) : a.statusText,
          headers: a.headers,
          status: a.status,
          url: i,
        });
        continue;
      }
      if (!R(o)) {
        n = new $({ result: o, url: i });
        continue;
      }
      return o;
    } catch (a) {
      n = new y({ body: u, details: a.message, url: i });
    }
  }
  throw n;
}
export {
  v as ccipRequest,
  j as offchainLookup,
  q as offchainLookupAbiItem,
  P as offchainLookupSignature,
};
