import {
  r as zw,
  j as Au,
  k as Hr,
  l as Qr,
  m as Nu,
  U as Ru,
  _ as Kw,
} from "./index-80b9e8d9.js";
var Fu = {},
  na = {},
  $e = {},
  Yd = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  function e(f, _) {
    var y = (f >>> 16) & 65535,
      E = f & 65535,
      I = (_ >>> 16) & 65535,
      P = _ & 65535;
    return (E * P + (((y * P + E * I) << 16) >>> 0)) | 0;
  }
  i.mul = Math.imul || e;
  function t(f, _) {
    return (f + _) | 0;
  }
  i.add = t;
  function s(f, _) {
    return (f - _) | 0;
  }
  i.sub = s;
  function o(f, _) {
    return (f << _) | (f >>> (32 - _));
  }
  i.rotl = o;
  function u(f, _) {
    return (f << (32 - _)) | (f >>> _);
  }
  i.rotr = u;
  function d(f) {
    return typeof f == "number" && isFinite(f) && Math.floor(f) === f;
  }
  (i.isInteger = Number.isInteger || d),
    (i.MAX_SAFE_INTEGER = 9007199254740991),
    (i.isSafeInteger = function (f) {
      return (
        i.isInteger(f) && f >= -i.MAX_SAFE_INTEGER && f <= i.MAX_SAFE_INTEGER
      );
    });
})(Yd);
Object.defineProperty($e, "__esModule", { value: !0 });
var Qd = Yd;
function kw(i, e) {
  return e === void 0 && (e = 0), (((i[e + 0] << 8) | i[e + 1]) << 16) >> 16;
}
$e.readInt16BE = kw;
function Vw(i, e) {
  return e === void 0 && (e = 0), ((i[e + 0] << 8) | i[e + 1]) >>> 0;
}
$e.readUint16BE = Vw;
function Ww(i, e) {
  return e === void 0 && (e = 0), (((i[e + 1] << 8) | i[e]) << 16) >> 16;
}
$e.readInt16LE = Ww;
function Gw(i, e) {
  return e === void 0 && (e = 0), ((i[e + 1] << 8) | i[e]) >>> 0;
}
$e.readUint16LE = Gw;
function Xd(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 8),
    (e[t + 1] = i >>> 0),
    e
  );
}
$e.writeUint16BE = Xd;
$e.writeInt16BE = Xd;
function Zd(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 0),
    (e[t + 1] = i >>> 8),
    e
  );
}
$e.writeUint16LE = Zd;
$e.writeInt16LE = Zd;
function cu(i, e) {
  return (
    e === void 0 && (e = 0),
    (i[e] << 24) | (i[e + 1] << 16) | (i[e + 2] << 8) | i[e + 3]
  );
}
$e.readInt32BE = cu;
function uu(i, e) {
  return (
    e === void 0 && (e = 0),
    ((i[e] << 24) | (i[e + 1] << 16) | (i[e + 2] << 8) | i[e + 3]) >>> 0
  );
}
$e.readUint32BE = uu;
function hu(i, e) {
  return (
    e === void 0 && (e = 0),
    (i[e + 3] << 24) | (i[e + 2] << 16) | (i[e + 1] << 8) | i[e]
  );
}
$e.readInt32LE = hu;
function lu(i, e) {
  return (
    e === void 0 && (e = 0),
    ((i[e + 3] << 24) | (i[e + 2] << 16) | (i[e + 1] << 8) | i[e]) >>> 0
  );
}
$e.readUint32LE = lu;
function Yo(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 24),
    (e[t + 1] = i >>> 16),
    (e[t + 2] = i >>> 8),
    (e[t + 3] = i >>> 0),
    e
  );
}
$e.writeUint32BE = Yo;
$e.writeInt32BE = Yo;
function Qo(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 0),
    (e[t + 1] = i >>> 8),
    (e[t + 2] = i >>> 16),
    (e[t + 3] = i >>> 24),
    e
  );
}
$e.writeUint32LE = Qo;
$e.writeInt32LE = Qo;
function Jw(i, e) {
  e === void 0 && (e = 0);
  var t = cu(i, e),
    s = cu(i, e + 4);
  return t * 4294967296 + s - (s >> 31) * 4294967296;
}
$e.readInt64BE = Jw;
function Yw(i, e) {
  e === void 0 && (e = 0);
  var t = uu(i, e),
    s = uu(i, e + 4);
  return t * 4294967296 + s;
}
$e.readUint64BE = Yw;
function Qw(i, e) {
  e === void 0 && (e = 0);
  var t = hu(i, e),
    s = hu(i, e + 4);
  return s * 4294967296 + t - (t >> 31) * 4294967296;
}
$e.readInt64LE = Qw;
function Xw(i, e) {
  e === void 0 && (e = 0);
  var t = lu(i, e),
    s = lu(i, e + 4);
  return s * 4294967296 + t;
}
$e.readUint64LE = Xw;
function ep(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    Yo((i / 4294967296) >>> 0, e, t),
    Yo(i >>> 0, e, t + 4),
    e
  );
}
$e.writeUint64BE = ep;
$e.writeInt64BE = ep;
function tp(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    Qo(i >>> 0, e, t),
    Qo((i / 4294967296) >>> 0, e, t + 4),
    e
  );
}
$e.writeUint64LE = tp;
$e.writeInt64LE = tp;
function Zw(i, e, t) {
  if ((t === void 0 && (t = 0), i % 8 !== 0))
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (i / 8 > e.length - t)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var s = 0, o = 1, u = i / 8 + t - 1; u >= t; u--)
    (s += e[u] * o), (o *= 256);
  return s;
}
$e.readUintBE = Zw;
function e_(i, e, t) {
  if ((t === void 0 && (t = 0), i % 8 !== 0))
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (i / 8 > e.length - t)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var s = 0, o = 1, u = t; u < t + i / 8; u++) (s += e[u] * o), (o *= 256);
  return s;
}
$e.readUintLE = e_;
function t_(i, e, t, s) {
  if (
    (t === void 0 && (t = new Uint8Array(i / 8)),
    s === void 0 && (s = 0),
    i % 8 !== 0)
  )
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Qd.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var o = 1, u = i / 8 + s - 1; u >= s; u--)
    (t[u] = (e / o) & 255), (o *= 256);
  return t;
}
$e.writeUintBE = t_;
function r_(i, e, t, s) {
  if (
    (t === void 0 && (t = new Uint8Array(i / 8)),
    s === void 0 && (s = 0),
    i % 8 !== 0)
  )
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Qd.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var o = 1, u = s; u < s + i / 8; u++) (t[u] = (e / o) & 255), (o *= 256);
  return t;
}
$e.writeUintLE = r_;
function i_(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat32(e);
}
$e.readFloat32BE = i_;
function n_(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat32(e, !0);
}
$e.readFloat32LE = n_;
function s_(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat64(e);
}
$e.readFloat64BE = s_;
function o_(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat64(e, !0);
}
$e.readFloat64LE = o_;
function a_(i, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(t, i), e;
}
$e.writeFloat32BE = a_;
function c_(i, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(t, i, !0), e;
}
$e.writeFloat32LE = c_;
function u_(i, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(t, i), e;
}
$e.writeFloat64BE = u_;
function h_(i, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(t, i, !0), e;
}
$e.writeFloat64LE = h_;
var Ar = {};
Object.defineProperty(Ar, "__esModule", { value: !0 });
function l_(i) {
  for (var e = 0; e < i.length; e++) i[e] = 0;
  return i;
}
Ar.wipe = l_;
Object.defineProperty(na, "__esModule", { value: !0 });
var tr = $e,
  fu = Ar,
  f_ = 20;
function d_(i, e, t) {
  for (
    var s = 1634760805,
      o = 857760878,
      u = 2036477234,
      d = 1797285236,
      f = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
      _ = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
      y = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
      E = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
      I = (t[19] << 24) | (t[18] << 16) | (t[17] << 8) | t[16],
      P = (t[23] << 24) | (t[22] << 16) | (t[21] << 8) | t[20],
      T = (t[27] << 24) | (t[26] << 16) | (t[25] << 8) | t[24],
      A = (t[31] << 24) | (t[30] << 16) | (t[29] << 8) | t[28],
      q = (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0],
      L = (e[7] << 24) | (e[6] << 16) | (e[5] << 8) | e[4],
      Y = (e[11] << 24) | (e[10] << 16) | (e[9] << 8) | e[8],
      p = (e[15] << 24) | (e[14] << 16) | (e[13] << 8) | e[12],
      D = s,
      v = o,
      b = u,
      g = d,
      c = f,
      w = _,
      K = y,
      G = E,
      se = I,
      ue = P,
      de = T,
      x = A,
      R = q,
      te = L,
      X = Y,
      V = p,
      W = 0;
    W < f_;
    W += 2
  )
    (D = (D + c) | 0),
      (R ^= D),
      (R = (R >>> (32 - 16)) | (R << 16)),
      (se = (se + R) | 0),
      (c ^= se),
      (c = (c >>> (32 - 12)) | (c << 12)),
      (v = (v + w) | 0),
      (te ^= v),
      (te = (te >>> (32 - 16)) | (te << 16)),
      (ue = (ue + te) | 0),
      (w ^= ue),
      (w = (w >>> (32 - 12)) | (w << 12)),
      (b = (b + K) | 0),
      (X ^= b),
      (X = (X >>> (32 - 16)) | (X << 16)),
      (de = (de + X) | 0),
      (K ^= de),
      (K = (K >>> (32 - 12)) | (K << 12)),
      (g = (g + G) | 0),
      (V ^= g),
      (V = (V >>> (32 - 16)) | (V << 16)),
      (x = (x + V) | 0),
      (G ^= x),
      (G = (G >>> (32 - 12)) | (G << 12)),
      (b = (b + K) | 0),
      (X ^= b),
      (X = (X >>> (32 - 8)) | (X << 8)),
      (de = (de + X) | 0),
      (K ^= de),
      (K = (K >>> (32 - 7)) | (K << 7)),
      (g = (g + G) | 0),
      (V ^= g),
      (V = (V >>> (32 - 8)) | (V << 8)),
      (x = (x + V) | 0),
      (G ^= x),
      (G = (G >>> (32 - 7)) | (G << 7)),
      (v = (v + w) | 0),
      (te ^= v),
      (te = (te >>> (32 - 8)) | (te << 8)),
      (ue = (ue + te) | 0),
      (w ^= ue),
      (w = (w >>> (32 - 7)) | (w << 7)),
      (D = (D + c) | 0),
      (R ^= D),
      (R = (R >>> (32 - 8)) | (R << 8)),
      (se = (se + R) | 0),
      (c ^= se),
      (c = (c >>> (32 - 7)) | (c << 7)),
      (D = (D + w) | 0),
      (V ^= D),
      (V = (V >>> (32 - 16)) | (V << 16)),
      (de = (de + V) | 0),
      (w ^= de),
      (w = (w >>> (32 - 12)) | (w << 12)),
      (v = (v + K) | 0),
      (R ^= v),
      (R = (R >>> (32 - 16)) | (R << 16)),
      (x = (x + R) | 0),
      (K ^= x),
      (K = (K >>> (32 - 12)) | (K << 12)),
      (b = (b + G) | 0),
      (te ^= b),
      (te = (te >>> (32 - 16)) | (te << 16)),
      (se = (se + te) | 0),
      (G ^= se),
      (G = (G >>> (32 - 12)) | (G << 12)),
      (g = (g + c) | 0),
      (X ^= g),
      (X = (X >>> (32 - 16)) | (X << 16)),
      (ue = (ue + X) | 0),
      (c ^= ue),
      (c = (c >>> (32 - 12)) | (c << 12)),
      (b = (b + G) | 0),
      (te ^= b),
      (te = (te >>> (32 - 8)) | (te << 8)),
      (se = (se + te) | 0),
      (G ^= se),
      (G = (G >>> (32 - 7)) | (G << 7)),
      (g = (g + c) | 0),
      (X ^= g),
      (X = (X >>> (32 - 8)) | (X << 8)),
      (ue = (ue + X) | 0),
      (c ^= ue),
      (c = (c >>> (32 - 7)) | (c << 7)),
      (v = (v + K) | 0),
      (R ^= v),
      (R = (R >>> (32 - 8)) | (R << 8)),
      (x = (x + R) | 0),
      (K ^= x),
      (K = (K >>> (32 - 7)) | (K << 7)),
      (D = (D + w) | 0),
      (V ^= D),
      (V = (V >>> (32 - 8)) | (V << 8)),
      (de = (de + V) | 0),
      (w ^= de),
      (w = (w >>> (32 - 7)) | (w << 7));
  tr.writeUint32LE((D + s) | 0, i, 0),
    tr.writeUint32LE((v + o) | 0, i, 4),
    tr.writeUint32LE((b + u) | 0, i, 8),
    tr.writeUint32LE((g + d) | 0, i, 12),
    tr.writeUint32LE((c + f) | 0, i, 16),
    tr.writeUint32LE((w + _) | 0, i, 20),
    tr.writeUint32LE((K + y) | 0, i, 24),
    tr.writeUint32LE((G + E) | 0, i, 28),
    tr.writeUint32LE((se + I) | 0, i, 32),
    tr.writeUint32LE((ue + P) | 0, i, 36),
    tr.writeUint32LE((de + T) | 0, i, 40),
    tr.writeUint32LE((x + A) | 0, i, 44),
    tr.writeUint32LE((R + q) | 0, i, 48),
    tr.writeUint32LE((te + L) | 0, i, 52),
    tr.writeUint32LE((X + Y) | 0, i, 56),
    tr.writeUint32LE((V + p) | 0, i, 60);
}
function rp(i, e, t, s, o) {
  if ((o === void 0 && (o = 0), i.length !== 32))
    throw new Error("ChaCha: key size must be 32 bytes");
  if (s.length < t.length)
    throw new Error("ChaCha: destination is shorter than source");
  var u, d;
  if (o === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    (u = new Uint8Array(16)), (d = u.length - e.length), u.set(e, d);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    (u = e), (d = o);
  }
  for (var f = new Uint8Array(64), _ = 0; _ < t.length; _ += 64) {
    d_(f, u, i);
    for (var y = _; y < _ + 64 && y < t.length; y++) s[y] = t[y] ^ f[y - _];
    g_(u, 0, d);
  }
  return fu.wipe(f), o === 0 && fu.wipe(u), s;
}
na.streamXOR = rp;
function p_(i, e, t, s) {
  return s === void 0 && (s = 0), fu.wipe(t), rp(i, e, t, t, s);
}
na.stream = p_;
function g_(i, e, t) {
  for (var s = 1; t--; )
    (s = (s + (i[e] & 255)) | 0), (i[e] = s & 255), (s >>>= 8), e++;
  if (s > 0) throw new Error("ChaCha: counter overflow");
}
var ip = {},
  Bi = {};
Object.defineProperty(Bi, "__esModule", { value: !0 });
function y_(i, e, t) {
  return (~(i - 1) & e) | ((i - 1) & t);
}
Bi.select = y_;
function m_(i, e) {
  return (((i | 0) - (e | 0) - 1) >>> 31) & 1;
}
Bi.lessOrEqual = m_;
function np(i, e) {
  if (i.length !== e.length) return 0;
  for (var t = 0, s = 0; s < i.length; s++) t |= i[s] ^ e[s];
  return 1 & ((t - 1) >>> 8);
}
Bi.compare = np;
function v_(i, e) {
  return i.length === 0 || e.length === 0 ? !1 : np(i, e) !== 0;
}
Bi.equal = v_;
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = Bi,
    t = Ar;
  i.DIGEST_LENGTH = 16;
  var s = (function () {
    function d(f) {
      (this.digestLength = i.DIGEST_LENGTH),
        (this._buffer = new Uint8Array(16)),
        (this._r = new Uint16Array(10)),
        (this._h = new Uint16Array(10)),
        (this._pad = new Uint16Array(8)),
        (this._leftover = 0),
        (this._fin = 0),
        (this._finished = !1);
      var _ = f[0] | (f[1] << 8);
      this._r[0] = _ & 8191;
      var y = f[2] | (f[3] << 8);
      this._r[1] = ((_ >>> 13) | (y << 3)) & 8191;
      var E = f[4] | (f[5] << 8);
      this._r[2] = ((y >>> 10) | (E << 6)) & 7939;
      var I = f[6] | (f[7] << 8);
      this._r[3] = ((E >>> 7) | (I << 9)) & 8191;
      var P = f[8] | (f[9] << 8);
      (this._r[4] = ((I >>> 4) | (P << 12)) & 255),
        (this._r[5] = (P >>> 1) & 8190);
      var T = f[10] | (f[11] << 8);
      this._r[6] = ((P >>> 14) | (T << 2)) & 8191;
      var A = f[12] | (f[13] << 8);
      this._r[7] = ((T >>> 11) | (A << 5)) & 8065;
      var q = f[14] | (f[15] << 8);
      (this._r[8] = ((A >>> 8) | (q << 8)) & 8191),
        (this._r[9] = (q >>> 5) & 127),
        (this._pad[0] = f[16] | (f[17] << 8)),
        (this._pad[1] = f[18] | (f[19] << 8)),
        (this._pad[2] = f[20] | (f[21] << 8)),
        (this._pad[3] = f[22] | (f[23] << 8)),
        (this._pad[4] = f[24] | (f[25] << 8)),
        (this._pad[5] = f[26] | (f[27] << 8)),
        (this._pad[6] = f[28] | (f[29] << 8)),
        (this._pad[7] = f[30] | (f[31] << 8));
    }
    return (
      (d.prototype._blocks = function (f, _, y) {
        for (
          var E = this._fin ? 0 : 2048,
            I = this._h[0],
            P = this._h[1],
            T = this._h[2],
            A = this._h[3],
            q = this._h[4],
            L = this._h[5],
            Y = this._h[6],
            p = this._h[7],
            D = this._h[8],
            v = this._h[9],
            b = this._r[0],
            g = this._r[1],
            c = this._r[2],
            w = this._r[3],
            K = this._r[4],
            G = this._r[5],
            se = this._r[6],
            ue = this._r[7],
            de = this._r[8],
            x = this._r[9];
          y >= 16;

        ) {
          var R = f[_ + 0] | (f[_ + 1] << 8);
          I += R & 8191;
          var te = f[_ + 2] | (f[_ + 3] << 8);
          P += ((R >>> 13) | (te << 3)) & 8191;
          var X = f[_ + 4] | (f[_ + 5] << 8);
          T += ((te >>> 10) | (X << 6)) & 8191;
          var V = f[_ + 6] | (f[_ + 7] << 8);
          A += ((X >>> 7) | (V << 9)) & 8191;
          var W = f[_ + 8] | (f[_ + 9] << 8);
          (q += ((V >>> 4) | (W << 12)) & 8191), (L += (W >>> 1) & 8191);
          var Q = f[_ + 10] | (f[_ + 11] << 8);
          Y += ((W >>> 14) | (Q << 2)) & 8191;
          var ie = f[_ + 12] | (f[_ + 13] << 8);
          p += ((Q >>> 11) | (ie << 5)) & 8191;
          var _e = f[_ + 14] | (f[_ + 15] << 8);
          (D += ((ie >>> 8) | (_e << 8)) & 8191), (v += (_e >>> 5) | E);
          var oe = 0,
            be = oe;
          (be += I * b),
            (be += P * (5 * x)),
            (be += T * (5 * de)),
            (be += A * (5 * ue)),
            (be += q * (5 * se)),
            (oe = be >>> 13),
            (be &= 8191),
            (be += L * (5 * G)),
            (be += Y * (5 * K)),
            (be += p * (5 * w)),
            (be += D * (5 * c)),
            (be += v * (5 * g)),
            (oe += be >>> 13),
            (be &= 8191);
          var le = oe;
          (le += I * g),
            (le += P * b),
            (le += T * (5 * x)),
            (le += A * (5 * de)),
            (le += q * (5 * ue)),
            (oe = le >>> 13),
            (le &= 8191),
            (le += L * (5 * se)),
            (le += Y * (5 * G)),
            (le += p * (5 * K)),
            (le += D * (5 * w)),
            (le += v * (5 * c)),
            (oe += le >>> 13),
            (le &= 8191);
          var ve = oe;
          (ve += I * c),
            (ve += P * g),
            (ve += T * b),
            (ve += A * (5 * x)),
            (ve += q * (5 * de)),
            (oe = ve >>> 13),
            (ve &= 8191),
            (ve += L * (5 * ue)),
            (ve += Y * (5 * se)),
            (ve += p * (5 * G)),
            (ve += D * (5 * K)),
            (ve += v * (5 * w)),
            (oe += ve >>> 13),
            (ve &= 8191);
          var z = oe;
          (z += I * w),
            (z += P * c),
            (z += T * g),
            (z += A * b),
            (z += q * (5 * x)),
            (oe = z >>> 13),
            (z &= 8191),
            (z += L * (5 * de)),
            (z += Y * (5 * ue)),
            (z += p * (5 * se)),
            (z += D * (5 * G)),
            (z += v * (5 * K)),
            (oe += z >>> 13),
            (z &= 8191);
          var H = oe;
          (H += I * K),
            (H += P * w),
            (H += T * c),
            (H += A * g),
            (H += q * b),
            (oe = H >>> 13),
            (H &= 8191),
            (H += L * (5 * x)),
            (H += Y * (5 * de)),
            (H += p * (5 * ue)),
            (H += D * (5 * se)),
            (H += v * (5 * G)),
            (oe += H >>> 13),
            (H &= 8191);
          var $ = oe;
          ($ += I * G),
            ($ += P * K),
            ($ += T * w),
            ($ += A * c),
            ($ += q * g),
            (oe = $ >>> 13),
            ($ &= 8191),
            ($ += L * b),
            ($ += Y * (5 * x)),
            ($ += p * (5 * de)),
            ($ += D * (5 * ue)),
            ($ += v * (5 * se)),
            (oe += $ >>> 13),
            ($ &= 8191);
          var l = oe;
          (l += I * se),
            (l += P * G),
            (l += T * K),
            (l += A * w),
            (l += q * c),
            (oe = l >>> 13),
            (l &= 8191),
            (l += L * g),
            (l += Y * b),
            (l += p * (5 * x)),
            (l += D * (5 * de)),
            (l += v * (5 * ue)),
            (oe += l >>> 13),
            (l &= 8191);
          var F = oe;
          (F += I * ue),
            (F += P * se),
            (F += T * G),
            (F += A * K),
            (F += q * w),
            (oe = F >>> 13),
            (F &= 8191),
            (F += L * c),
            (F += Y * g),
            (F += p * b),
            (F += D * (5 * x)),
            (F += v * (5 * de)),
            (oe += F >>> 13),
            (F &= 8191);
          var ae = oe;
          (ae += I * de),
            (ae += P * ue),
            (ae += T * se),
            (ae += A * G),
            (ae += q * K),
            (oe = ae >>> 13),
            (ae &= 8191),
            (ae += L * w),
            (ae += Y * c),
            (ae += p * g),
            (ae += D * b),
            (ae += v * (5 * x)),
            (oe += ae >>> 13),
            (ae &= 8191);
          var fe = oe;
          (fe += I * x),
            (fe += P * de),
            (fe += T * ue),
            (fe += A * se),
            (fe += q * G),
            (oe = fe >>> 13),
            (fe &= 8191),
            (fe += L * K),
            (fe += Y * w),
            (fe += p * c),
            (fe += D * g),
            (fe += v * b),
            (oe += fe >>> 13),
            (fe &= 8191),
            (oe = ((oe << 2) + oe) | 0),
            (oe = (oe + be) | 0),
            (be = oe & 8191),
            (oe = oe >>> 13),
            (le += oe),
            (I = be),
            (P = le),
            (T = ve),
            (A = z),
            (q = H),
            (L = $),
            (Y = l),
            (p = F),
            (D = ae),
            (v = fe),
            (_ += 16),
            (y -= 16);
        }
        (this._h[0] = I),
          (this._h[1] = P),
          (this._h[2] = T),
          (this._h[3] = A),
          (this._h[4] = q),
          (this._h[5] = L),
          (this._h[6] = Y),
          (this._h[7] = p),
          (this._h[8] = D),
          (this._h[9] = v);
      }),
      (d.prototype.finish = function (f, _) {
        _ === void 0 && (_ = 0);
        var y = new Uint16Array(10),
          E,
          I,
          P,
          T;
        if (this._leftover) {
          for (T = this._leftover, this._buffer[T++] = 1; T < 16; T++)
            this._buffer[T] = 0;
          (this._fin = 1), this._blocks(this._buffer, 0, 16);
        }
        for (E = this._h[1] >>> 13, this._h[1] &= 8191, T = 2; T < 10; T++)
          (this._h[T] += E), (E = this._h[T] >>> 13), (this._h[T] &= 8191);
        for (
          this._h[0] += E * 5,
            E = this._h[0] >>> 13,
            this._h[0] &= 8191,
            this._h[1] += E,
            E = this._h[1] >>> 13,
            this._h[1] &= 8191,
            this._h[2] += E,
            y[0] = this._h[0] + 5,
            E = y[0] >>> 13,
            y[0] &= 8191,
            T = 1;
          T < 10;
          T++
        )
          (y[T] = this._h[T] + E), (E = y[T] >>> 13), (y[T] &= 8191);
        for (y[9] -= 8192, I = (E ^ 1) - 1, T = 0; T < 10; T++) y[T] &= I;
        for (I = ~I, T = 0; T < 10; T++) this._h[T] = (this._h[T] & I) | y[T];
        for (
          this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
            this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
            this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
            this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
            this._h[4] =
              ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) &
              65535,
            this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
            this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
            this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
            P = this._h[0] + this._pad[0],
            this._h[0] = P & 65535,
            T = 1;
          T < 8;
          T++
        )
          (P = (((this._h[T] + this._pad[T]) | 0) + (P >>> 16)) | 0),
            (this._h[T] = P & 65535);
        return (
          (f[_ + 0] = this._h[0] >>> 0),
          (f[_ + 1] = this._h[0] >>> 8),
          (f[_ + 2] = this._h[1] >>> 0),
          (f[_ + 3] = this._h[1] >>> 8),
          (f[_ + 4] = this._h[2] >>> 0),
          (f[_ + 5] = this._h[2] >>> 8),
          (f[_ + 6] = this._h[3] >>> 0),
          (f[_ + 7] = this._h[3] >>> 8),
          (f[_ + 8] = this._h[4] >>> 0),
          (f[_ + 9] = this._h[4] >>> 8),
          (f[_ + 10] = this._h[5] >>> 0),
          (f[_ + 11] = this._h[5] >>> 8),
          (f[_ + 12] = this._h[6] >>> 0),
          (f[_ + 13] = this._h[6] >>> 8),
          (f[_ + 14] = this._h[7] >>> 0),
          (f[_ + 15] = this._h[7] >>> 8),
          (this._finished = !0),
          this
        );
      }),
      (d.prototype.update = function (f) {
        var _ = 0,
          y = f.length,
          E;
        if (this._leftover) {
          (E = 16 - this._leftover), E > y && (E = y);
          for (var I = 0; I < E; I++)
            this._buffer[this._leftover + I] = f[_ + I];
          if (((y -= E), (_ += E), (this._leftover += E), this._leftover < 16))
            return this;
          this._blocks(this._buffer, 0, 16), (this._leftover = 0);
        }
        if (
          (y >= 16 &&
            ((E = y - (y % 16)), this._blocks(f, _, E), (_ += E), (y -= E)),
          y)
        ) {
          for (var I = 0; I < y; I++)
            this._buffer[this._leftover + I] = f[_ + I];
          this._leftover += y;
        }
        return this;
      }),
      (d.prototype.digest = function () {
        if (this._finished) throw new Error("Poly1305 was finished");
        var f = new Uint8Array(16);
        return this.finish(f), f;
      }),
      (d.prototype.clean = function () {
        return (
          t.wipe(this._buffer),
          t.wipe(this._r),
          t.wipe(this._h),
          t.wipe(this._pad),
          (this._leftover = 0),
          (this._fin = 0),
          (this._finished = !0),
          this
        );
      }),
      d
    );
  })();
  i.Poly1305 = s;
  function o(d, f) {
    var _ = new s(d);
    _.update(f);
    var y = _.digest();
    return _.clean(), y;
  }
  i.oneTimeAuth = o;
  function u(d, f) {
    return d.length !== i.DIGEST_LENGTH || f.length !== i.DIGEST_LENGTH
      ? !1
      : e.equal(d, f);
  }
  i.equal = u;
})(ip);
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = na,
    t = ip,
    s = Ar,
    o = $e,
    u = Bi;
  (i.KEY_LENGTH = 32), (i.NONCE_LENGTH = 12), (i.TAG_LENGTH = 16);
  var d = new Uint8Array(16),
    f = (function () {
      function _(y) {
        if (
          ((this.nonceLength = i.NONCE_LENGTH),
          (this.tagLength = i.TAG_LENGTH),
          y.length !== i.KEY_LENGTH)
        )
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(y);
      }
      return (
        (_.prototype.seal = function (y, E, I, P) {
          if (y.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          var T = new Uint8Array(16);
          T.set(y, T.length - y.length);
          var A = new Uint8Array(32);
          e.stream(this._key, T, A, 4);
          var q = E.length + this.tagLength,
            L;
          if (P) {
            if (P.length !== q)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            L = P;
          } else L = new Uint8Array(q);
          return (
            e.streamXOR(this._key, T, E, L, 4),
            this._authenticate(
              L.subarray(L.length - this.tagLength, L.length),
              A,
              L.subarray(0, L.length - this.tagLength),
              I
            ),
            s.wipe(T),
            L
          );
        }),
        (_.prototype.open = function (y, E, I, P) {
          if (y.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          if (E.length < this.tagLength) return null;
          var T = new Uint8Array(16);
          T.set(y, T.length - y.length);
          var A = new Uint8Array(32);
          e.stream(this._key, T, A, 4);
          var q = new Uint8Array(this.tagLength);
          if (
            (this._authenticate(
              q,
              A,
              E.subarray(0, E.length - this.tagLength),
              I
            ),
            !u.equal(q, E.subarray(E.length - this.tagLength, E.length)))
          )
            return null;
          var L = E.length - this.tagLength,
            Y;
          if (P) {
            if (P.length !== L)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            Y = P;
          } else Y = new Uint8Array(L);
          return (
            e.streamXOR(
              this._key,
              T,
              E.subarray(0, E.length - this.tagLength),
              Y,
              4
            ),
            s.wipe(T),
            Y
          );
        }),
        (_.prototype.clean = function () {
          return s.wipe(this._key), this;
        }),
        (_.prototype._authenticate = function (y, E, I, P) {
          var T = new t.Poly1305(E);
          P &&
            (T.update(P),
            P.length % 16 > 0 && T.update(d.subarray(P.length % 16))),
            T.update(I),
            I.length % 16 > 0 && T.update(d.subarray(I.length % 16));
          var A = new Uint8Array(8);
          P && o.writeUint64LE(P.length, A),
            T.update(A),
            o.writeUint64LE(I.length, A),
            T.update(A);
          for (var q = T.digest(), L = 0; L < q.length; L++) y[L] = q[L];
          T.clean(), s.wipe(q), s.wipe(A);
        }),
        _
      );
    })();
  i.ChaCha20Poly1305 = f;
})(Fu);
var sp = {},
  Cs = {},
  Uu = {};
Object.defineProperty(Uu, "__esModule", { value: !0 });
function w_(i) {
  return (
    typeof i.saveState < "u" &&
    typeof i.restoreState < "u" &&
    typeof i.cleanSavedState < "u"
  );
}
Uu.isSerializableHash = w_;
Object.defineProperty(Cs, "__esModule", { value: !0 });
var ni = Uu,
  __ = Bi,
  b_ = Ar,
  op = (function () {
    function i(e, t) {
      (this._finished = !1),
        (this._inner = new e()),
        (this._outer = new e()),
        (this.blockSize = this._outer.blockSize),
        (this.digestLength = this._outer.digestLength);
      var s = new Uint8Array(this.blockSize);
      t.length > this.blockSize
        ? this._inner.update(t).finish(s).clean()
        : s.set(t);
      for (var o = 0; o < s.length; o++) s[o] ^= 54;
      this._inner.update(s);
      for (var o = 0; o < s.length; o++) s[o] ^= 106;
      this._outer.update(s),
        ni.isSerializableHash(this._inner) &&
          ni.isSerializableHash(this._outer) &&
          ((this._innerKeyedState = this._inner.saveState()),
          (this._outerKeyedState = this._outer.saveState())),
        b_.wipe(s);
    }
    return (
      (i.prototype.reset = function () {
        if (
          !ni.isSerializableHash(this._inner) ||
          !ni.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't reset() because hash doesn't implement restoreState()"
          );
        return (
          this._inner.restoreState(this._innerKeyedState),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (i.prototype.clean = function () {
        ni.isSerializableHash(this._inner) &&
          this._inner.cleanSavedState(this._innerKeyedState),
          ni.isSerializableHash(this._outer) &&
            this._outer.cleanSavedState(this._outerKeyedState),
          this._inner.clean(),
          this._outer.clean();
      }),
      (i.prototype.update = function (e) {
        return this._inner.update(e), this;
      }),
      (i.prototype.finish = function (e) {
        return this._finished
          ? (this._outer.finish(e), this)
          : (this._inner.finish(e),
            this._outer.update(e.subarray(0, this.digestLength)).finish(e),
            (this._finished = !0),
            this);
      }),
      (i.prototype.digest = function () {
        var e = new Uint8Array(this.digestLength);
        return this.finish(e), e;
      }),
      (i.prototype.saveState = function () {
        if (!ni.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't saveState() because hash doesn't implement it"
          );
        return this._inner.saveState();
      }),
      (i.prototype.restoreState = function (e) {
        if (
          !ni.isSerializableHash(this._inner) ||
          !ni.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't restoreState() because hash doesn't implement it"
          );
        return (
          this._inner.restoreState(e),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (i.prototype.cleanSavedState = function (e) {
        if (!ni.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't cleanSavedState() because hash doesn't implement it"
          );
        this._inner.cleanSavedState(e);
      }),
      i
    );
  })();
Cs.HMAC = op;
function E_(i, e, t) {
  var s = new op(i, e);
  s.update(t);
  var o = s.digest();
  return s.clean(), o;
}
Cs.hmac = E_;
Cs.equal = __.equal;
Object.defineProperty(sp, "__esModule", { value: !0 });
var af = Cs,
  cf = Ar,
  D_ = (function () {
    function i(e, t, s, o) {
      s === void 0 && (s = new Uint8Array(0)),
        (this._counter = new Uint8Array(1)),
        (this._hash = e),
        (this._info = o);
      var u = af.hmac(this._hash, s, t);
      (this._hmac = new af.HMAC(e, u)),
        (this._buffer = new Uint8Array(this._hmac.digestLength)),
        (this._bufpos = this._buffer.length);
    }
    return (
      (i.prototype._fillBuffer = function () {
        this._counter[0]++;
        var e = this._counter[0];
        if (e === 0) throw new Error("hkdf: cannot expand more");
        this._hmac.reset(),
          e > 1 && this._hmac.update(this._buffer),
          this._info && this._hmac.update(this._info),
          this._hmac.update(this._counter),
          this._hmac.finish(this._buffer),
          (this._bufpos = 0);
      }),
      (i.prototype.expand = function (e) {
        for (var t = new Uint8Array(e), s = 0; s < t.length; s++)
          this._bufpos === this._buffer.length && this._fillBuffer(),
            (t[s] = this._buffer[this._bufpos++]);
        return t;
      }),
      (i.prototype.clean = function () {
        this._hmac.clean(),
          cf.wipe(this._buffer),
          cf.wipe(this._counter),
          (this._bufpos = 0);
      }),
      i
    );
  })(),
  S_ = (sp.HKDF = D_),
  Hn = {},
  sa = {},
  oa = {};
Object.defineProperty(oa, "__esModule", { value: !0 });
oa.BrowserRandomSource = void 0;
const uf = 65536;
class I_ {
  constructor() {
    (this.isAvailable = !1), (this.isInstantiated = !1);
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e &&
      e.getRandomValues !== void 0 &&
      ((this._crypto = e), (this.isAvailable = !0), (this.isInstantiated = !0));
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const t = new Uint8Array(e);
    for (let s = 0; s < t.length; s += uf)
      this._crypto.getRandomValues(
        t.subarray(s, s + Math.min(t.length - s, uf))
      );
    return t;
  }
}
oa.BrowserRandomSource = I_;
function O_(i) {
  throw new Error(
    'Could not dynamically require "' +
      i +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var aa = {};
Object.defineProperty(aa, "__esModule", { value: !0 });
aa.NodeRandomSource = void 0;
const x_ = Ar;
class P_ {
  constructor() {
    if (
      ((this.isAvailable = !1), (this.isInstantiated = !1), typeof O_ < "u")
    ) {
      const e = zw;
      e &&
        e.randomBytes &&
        ((this._crypto = e),
        (this.isAvailable = !0),
        (this.isInstantiated = !0));
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let t = this._crypto.randomBytes(e);
    if (t.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const s = new Uint8Array(e);
    for (let o = 0; o < s.length; o++) s[o] = t[o];
    return (0, x_.wipe)(t), s;
  }
}
aa.NodeRandomSource = P_;
Object.defineProperty(sa, "__esModule", { value: !0 });
sa.SystemRandomSource = void 0;
const C_ = oa,
  T_ = aa;
class A_ {
  constructor() {
    if (
      ((this.isAvailable = !1),
      (this.name = ""),
      (this._source = new C_.BrowserRandomSource()),
      this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Browser");
      return;
    }
    if (
      ((this._source = new T_.NodeRandomSource()), this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Node");
      return;
    }
  }
  randomBytes(e) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(e);
  }
}
sa.SystemRandomSource = A_;
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 }),
    (i.randomStringForEntropy =
      i.randomString =
      i.randomUint32 =
      i.randomBytes =
      i.defaultRandomSource =
        void 0);
  const e = sa,
    t = $e,
    s = Ar;
  i.defaultRandomSource = new e.SystemRandomSource();
  function o(y, E = i.defaultRandomSource) {
    return E.randomBytes(y);
  }
  i.randomBytes = o;
  function u(y = i.defaultRandomSource) {
    const E = o(4, y),
      I = (0, t.readUint32LE)(E);
    return (0, s.wipe)(E), I;
  }
  i.randomUint32 = u;
  const d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function f(y, E = d, I = i.defaultRandomSource) {
    if (E.length < 2) throw new Error("randomString charset is too short");
    if (E.length > 256) throw new Error("randomString charset is too long");
    let P = "";
    const T = E.length,
      A = 256 - (256 % T);
    for (; y > 0; ) {
      const q = o(Math.ceil((y * 256) / A), I);
      for (let L = 0; L < q.length && y > 0; L++) {
        const Y = q[L];
        Y < A && ((P += E.charAt(Y % T)), y--);
      }
      (0, s.wipe)(q);
    }
    return P;
  }
  i.randomString = f;
  function _(y, E = d, I = i.defaultRandomSource) {
    const P = Math.ceil(y / (Math.log(E.length) / Math.LN2));
    return f(P, E, I);
  }
  i.randomStringForEntropy = _;
})(Hn);
var ca = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = $e,
    t = Ar;
  (i.DIGEST_LENGTH = 32), (i.BLOCK_SIZE = 64);
  var s = (function () {
    function f() {
      (this.digestLength = i.DIGEST_LENGTH),
        (this.blockSize = i.BLOCK_SIZE),
        (this._state = new Int32Array(8)),
        (this._temp = new Int32Array(64)),
        (this._buffer = new Uint8Array(128)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (f.prototype._initState = function () {
        (this._state[0] = 1779033703),
          (this._state[1] = 3144134277),
          (this._state[2] = 1013904242),
          (this._state[3] = 2773480762),
          (this._state[4] = 1359893119),
          (this._state[5] = 2600822924),
          (this._state[6] = 528734635),
          (this._state[7] = 1541459225);
      }),
      (f.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (f.prototype.clean = function () {
        t.wipe(this._buffer), t.wipe(this._temp), this.reset();
      }),
      (f.prototype.update = function (_, y) {
        if ((y === void 0 && (y = _.length), this._finished))
          throw new Error("SHA256: can't update because hash was finished.");
        var E = 0;
        if (((this._bytesHashed += y), this._bufferLength > 0)) {
          for (; this._bufferLength < this.blockSize && y > 0; )
            (this._buffer[this._bufferLength++] = _[E++]), y--;
          this._bufferLength === this.blockSize &&
            (u(this._temp, this._state, this._buffer, 0, this.blockSize),
            (this._bufferLength = 0));
        }
        for (
          y >= this.blockSize &&
          ((E = u(this._temp, this._state, _, E, y)), (y %= this.blockSize));
          y > 0;

        )
          (this._buffer[this._bufferLength++] = _[E++]), y--;
        return this;
      }),
      (f.prototype.finish = function (_) {
        if (!this._finished) {
          var y = this._bytesHashed,
            E = this._bufferLength,
            I = (y / 536870912) | 0,
            P = y << 3,
            T = y % 64 < 56 ? 64 : 128;
          this._buffer[E] = 128;
          for (var A = E + 1; A < T - 8; A++) this._buffer[A] = 0;
          e.writeUint32BE(I, this._buffer, T - 8),
            e.writeUint32BE(P, this._buffer, T - 4),
            u(this._temp, this._state, this._buffer, 0, T),
            (this._finished = !0);
        }
        for (var A = 0; A < this.digestLength / 4; A++)
          e.writeUint32BE(this._state[A], _, A * 4);
        return this;
      }),
      (f.prototype.digest = function () {
        var _ = new Uint8Array(this.digestLength);
        return this.finish(_), _;
      }),
      (f.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (f.prototype.restoreState = function (_) {
        return (
          this._state.set(_.state),
          (this._bufferLength = _.bufferLength),
          _.buffer && this._buffer.set(_.buffer),
          (this._bytesHashed = _.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (f.prototype.cleanSavedState = function (_) {
        t.wipe(_.state),
          _.buffer && t.wipe(_.buffer),
          (_.bufferLength = 0),
          (_.bytesHashed = 0);
      }),
      f
    );
  })();
  i.SHA256 = s;
  var o = new Int32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]);
  function u(f, _, y, E, I) {
    for (; I >= 64; ) {
      for (
        var P = _[0],
          T = _[1],
          A = _[2],
          q = _[3],
          L = _[4],
          Y = _[5],
          p = _[6],
          D = _[7],
          v = 0;
        v < 16;
        v++
      ) {
        var b = E + v * 4;
        f[v] = e.readUint32BE(y, b);
      }
      for (var v = 16; v < 64; v++) {
        var g = f[v - 2],
          c =
            ((g >>> 17) | (g << (32 - 17))) ^
            ((g >>> 19) | (g << (32 - 19))) ^
            (g >>> 10);
        g = f[v - 15];
        var w =
          ((g >>> 7) | (g << (32 - 7))) ^
          ((g >>> 18) | (g << (32 - 18))) ^
          (g >>> 3);
        f[v] = ((c + f[v - 7]) | 0) + ((w + f[v - 16]) | 0);
      }
      for (var v = 0; v < 64; v++) {
        var c =
            ((((((L >>> 6) | (L << 26)) ^
              ((L >>> 11) | (L << 21)) ^
              ((L >>> 25) | (L << 7))) +
              ((L & Y) ^ (~L & p))) |
              0) +
              ((D + ((o[v] + f[v]) | 0)) | 0)) |
            0,
          w =
            ((((P >>> 2) | (P << (32 - 2))) ^
              ((P >>> 13) | (P << (32 - 13))) ^
              ((P >>> 22) | (P << (32 - 22)))) +
              ((P & T) ^ (P & A) ^ (T & A))) |
            0;
        (D = p),
          (p = Y),
          (Y = L),
          (L = (q + c) | 0),
          (q = A),
          (A = T),
          (T = P),
          (P = (c + w) | 0);
      }
      (_[0] += P),
        (_[1] += T),
        (_[2] += A),
        (_[3] += q),
        (_[4] += L),
        (_[5] += Y),
        (_[6] += p),
        (_[7] += D),
        (E += 64),
        (I -= 64);
    }
    return E;
  }
  function d(f) {
    var _ = new s();
    _.update(f);
    var y = _.digest();
    return _.clean(), y;
  }
  i.hash = d;
})(ca);
var $u = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 }),
    (i.sharedKey =
      i.generateKeyPair =
      i.generateKeyPairFromSeed =
      i.scalarMultBase =
      i.scalarMult =
      i.SHARED_KEY_LENGTH =
      i.SECRET_KEY_LENGTH =
      i.PUBLIC_KEY_LENGTH =
        void 0);
  const e = Hn,
    t = Ar;
  (i.PUBLIC_KEY_LENGTH = 32),
    (i.SECRET_KEY_LENGTH = 32),
    (i.SHARED_KEY_LENGTH = 32);
  function s(v) {
    const b = new Float64Array(16);
    if (v) for (let g = 0; g < v.length; g++) b[g] = v[g];
    return b;
  }
  const o = new Uint8Array(32);
  o[0] = 9;
  const u = s([56129, 1]);
  function d(v) {
    let b = 1;
    for (let g = 0; g < 16; g++) {
      let c = v[g] + b + 65535;
      (b = Math.floor(c / 65536)), (v[g] = c - b * 65536);
    }
    v[0] += b - 1 + 37 * (b - 1);
  }
  function f(v, b, g) {
    const c = ~(g - 1);
    for (let w = 0; w < 16; w++) {
      const K = c & (v[w] ^ b[w]);
      (v[w] ^= K), (b[w] ^= K);
    }
  }
  function _(v, b) {
    const g = s(),
      c = s();
    for (let w = 0; w < 16; w++) c[w] = b[w];
    d(c), d(c), d(c);
    for (let w = 0; w < 2; w++) {
      g[0] = c[0] - 65517;
      for (let G = 1; G < 15; G++)
        (g[G] = c[G] - 65535 - ((g[G - 1] >> 16) & 1)), (g[G - 1] &= 65535);
      g[15] = c[15] - 32767 - ((g[14] >> 16) & 1);
      const K = (g[15] >> 16) & 1;
      (g[14] &= 65535), f(c, g, 1 - K);
    }
    for (let w = 0; w < 16; w++)
      (v[2 * w] = c[w] & 255), (v[2 * w + 1] = c[w] >> 8);
  }
  function y(v, b) {
    for (let g = 0; g < 16; g++) v[g] = b[2 * g] + (b[2 * g + 1] << 8);
    v[15] &= 32767;
  }
  function E(v, b, g) {
    for (let c = 0; c < 16; c++) v[c] = b[c] + g[c];
  }
  function I(v, b, g) {
    for (let c = 0; c < 16; c++) v[c] = b[c] - g[c];
  }
  function P(v, b, g) {
    let c,
      w,
      K = 0,
      G = 0,
      se = 0,
      ue = 0,
      de = 0,
      x = 0,
      R = 0,
      te = 0,
      X = 0,
      V = 0,
      W = 0,
      Q = 0,
      ie = 0,
      _e = 0,
      oe = 0,
      be = 0,
      le = 0,
      ve = 0,
      z = 0,
      H = 0,
      $ = 0,
      l = 0,
      F = 0,
      ae = 0,
      fe = 0,
      Ie = 0,
      He = 0,
      ke = 0,
      Le = 0,
      yt = 0,
      mt = 0,
      Me = g[0],
      Oe = g[1],
      Re = g[2],
      Fe = g[3],
      qe = g[4],
      Pe = g[5],
      Ue = g[6],
      Se = g[7],
      Ce = g[8],
      ze = g[9],
      xe = g[10],
      Ve = g[11],
      Ge = g[12],
      et = g[13],
      tt = g[14],
      Qe = g[15];
    (c = b[0]),
      (K += c * Me),
      (G += c * Oe),
      (se += c * Re),
      (ue += c * Fe),
      (de += c * qe),
      (x += c * Pe),
      (R += c * Ue),
      (te += c * Se),
      (X += c * Ce),
      (V += c * ze),
      (W += c * xe),
      (Q += c * Ve),
      (ie += c * Ge),
      (_e += c * et),
      (oe += c * tt),
      (be += c * Qe),
      (c = b[1]),
      (G += c * Me),
      (se += c * Oe),
      (ue += c * Re),
      (de += c * Fe),
      (x += c * qe),
      (R += c * Pe),
      (te += c * Ue),
      (X += c * Se),
      (V += c * Ce),
      (W += c * ze),
      (Q += c * xe),
      (ie += c * Ve),
      (_e += c * Ge),
      (oe += c * et),
      (be += c * tt),
      (le += c * Qe),
      (c = b[2]),
      (se += c * Me),
      (ue += c * Oe),
      (de += c * Re),
      (x += c * Fe),
      (R += c * qe),
      (te += c * Pe),
      (X += c * Ue),
      (V += c * Se),
      (W += c * Ce),
      (Q += c * ze),
      (ie += c * xe),
      (_e += c * Ve),
      (oe += c * Ge),
      (be += c * et),
      (le += c * tt),
      (ve += c * Qe),
      (c = b[3]),
      (ue += c * Me),
      (de += c * Oe),
      (x += c * Re),
      (R += c * Fe),
      (te += c * qe),
      (X += c * Pe),
      (V += c * Ue),
      (W += c * Se),
      (Q += c * Ce),
      (ie += c * ze),
      (_e += c * xe),
      (oe += c * Ve),
      (be += c * Ge),
      (le += c * et),
      (ve += c * tt),
      (z += c * Qe),
      (c = b[4]),
      (de += c * Me),
      (x += c * Oe),
      (R += c * Re),
      (te += c * Fe),
      (X += c * qe),
      (V += c * Pe),
      (W += c * Ue),
      (Q += c * Se),
      (ie += c * Ce),
      (_e += c * ze),
      (oe += c * xe),
      (be += c * Ve),
      (le += c * Ge),
      (ve += c * et),
      (z += c * tt),
      (H += c * Qe),
      (c = b[5]),
      (x += c * Me),
      (R += c * Oe),
      (te += c * Re),
      (X += c * Fe),
      (V += c * qe),
      (W += c * Pe),
      (Q += c * Ue),
      (ie += c * Se),
      (_e += c * Ce),
      (oe += c * ze),
      (be += c * xe),
      (le += c * Ve),
      (ve += c * Ge),
      (z += c * et),
      (H += c * tt),
      ($ += c * Qe),
      (c = b[6]),
      (R += c * Me),
      (te += c * Oe),
      (X += c * Re),
      (V += c * Fe),
      (W += c * qe),
      (Q += c * Pe),
      (ie += c * Ue),
      (_e += c * Se),
      (oe += c * Ce),
      (be += c * ze),
      (le += c * xe),
      (ve += c * Ve),
      (z += c * Ge),
      (H += c * et),
      ($ += c * tt),
      (l += c * Qe),
      (c = b[7]),
      (te += c * Me),
      (X += c * Oe),
      (V += c * Re),
      (W += c * Fe),
      (Q += c * qe),
      (ie += c * Pe),
      (_e += c * Ue),
      (oe += c * Se),
      (be += c * Ce),
      (le += c * ze),
      (ve += c * xe),
      (z += c * Ve),
      (H += c * Ge),
      ($ += c * et),
      (l += c * tt),
      (F += c * Qe),
      (c = b[8]),
      (X += c * Me),
      (V += c * Oe),
      (W += c * Re),
      (Q += c * Fe),
      (ie += c * qe),
      (_e += c * Pe),
      (oe += c * Ue),
      (be += c * Se),
      (le += c * Ce),
      (ve += c * ze),
      (z += c * xe),
      (H += c * Ve),
      ($ += c * Ge),
      (l += c * et),
      (F += c * tt),
      (ae += c * Qe),
      (c = b[9]),
      (V += c * Me),
      (W += c * Oe),
      (Q += c * Re),
      (ie += c * Fe),
      (_e += c * qe),
      (oe += c * Pe),
      (be += c * Ue),
      (le += c * Se),
      (ve += c * Ce),
      (z += c * ze),
      (H += c * xe),
      ($ += c * Ve),
      (l += c * Ge),
      (F += c * et),
      (ae += c * tt),
      (fe += c * Qe),
      (c = b[10]),
      (W += c * Me),
      (Q += c * Oe),
      (ie += c * Re),
      (_e += c * Fe),
      (oe += c * qe),
      (be += c * Pe),
      (le += c * Ue),
      (ve += c * Se),
      (z += c * Ce),
      (H += c * ze),
      ($ += c * xe),
      (l += c * Ve),
      (F += c * Ge),
      (ae += c * et),
      (fe += c * tt),
      (Ie += c * Qe),
      (c = b[11]),
      (Q += c * Me),
      (ie += c * Oe),
      (_e += c * Re),
      (oe += c * Fe),
      (be += c * qe),
      (le += c * Pe),
      (ve += c * Ue),
      (z += c * Se),
      (H += c * Ce),
      ($ += c * ze),
      (l += c * xe),
      (F += c * Ve),
      (ae += c * Ge),
      (fe += c * et),
      (Ie += c * tt),
      (He += c * Qe),
      (c = b[12]),
      (ie += c * Me),
      (_e += c * Oe),
      (oe += c * Re),
      (be += c * Fe),
      (le += c * qe),
      (ve += c * Pe),
      (z += c * Ue),
      (H += c * Se),
      ($ += c * Ce),
      (l += c * ze),
      (F += c * xe),
      (ae += c * Ve),
      (fe += c * Ge),
      (Ie += c * et),
      (He += c * tt),
      (ke += c * Qe),
      (c = b[13]),
      (_e += c * Me),
      (oe += c * Oe),
      (be += c * Re),
      (le += c * Fe),
      (ve += c * qe),
      (z += c * Pe),
      (H += c * Ue),
      ($ += c * Se),
      (l += c * Ce),
      (F += c * ze),
      (ae += c * xe),
      (fe += c * Ve),
      (Ie += c * Ge),
      (He += c * et),
      (ke += c * tt),
      (Le += c * Qe),
      (c = b[14]),
      (oe += c * Me),
      (be += c * Oe),
      (le += c * Re),
      (ve += c * Fe),
      (z += c * qe),
      (H += c * Pe),
      ($ += c * Ue),
      (l += c * Se),
      (F += c * Ce),
      (ae += c * ze),
      (fe += c * xe),
      (Ie += c * Ve),
      (He += c * Ge),
      (ke += c * et),
      (Le += c * tt),
      (yt += c * Qe),
      (c = b[15]),
      (be += c * Me),
      (le += c * Oe),
      (ve += c * Re),
      (z += c * Fe),
      (H += c * qe),
      ($ += c * Pe),
      (l += c * Ue),
      (F += c * Se),
      (ae += c * Ce),
      (fe += c * ze),
      (Ie += c * xe),
      (He += c * Ve),
      (ke += c * Ge),
      (Le += c * et),
      (yt += c * tt),
      (mt += c * Qe),
      (K += 38 * le),
      (G += 38 * ve),
      (se += 38 * z),
      (ue += 38 * H),
      (de += 38 * $),
      (x += 38 * l),
      (R += 38 * F),
      (te += 38 * ae),
      (X += 38 * fe),
      (V += 38 * Ie),
      (W += 38 * He),
      (Q += 38 * ke),
      (ie += 38 * Le),
      (_e += 38 * yt),
      (oe += 38 * mt),
      (w = 1),
      (c = K + w + 65535),
      (w = Math.floor(c / 65536)),
      (K = c - w * 65536),
      (c = G + w + 65535),
      (w = Math.floor(c / 65536)),
      (G = c - w * 65536),
      (c = se + w + 65535),
      (w = Math.floor(c / 65536)),
      (se = c - w * 65536),
      (c = ue + w + 65535),
      (w = Math.floor(c / 65536)),
      (ue = c - w * 65536),
      (c = de + w + 65535),
      (w = Math.floor(c / 65536)),
      (de = c - w * 65536),
      (c = x + w + 65535),
      (w = Math.floor(c / 65536)),
      (x = c - w * 65536),
      (c = R + w + 65535),
      (w = Math.floor(c / 65536)),
      (R = c - w * 65536),
      (c = te + w + 65535),
      (w = Math.floor(c / 65536)),
      (te = c - w * 65536),
      (c = X + w + 65535),
      (w = Math.floor(c / 65536)),
      (X = c - w * 65536),
      (c = V + w + 65535),
      (w = Math.floor(c / 65536)),
      (V = c - w * 65536),
      (c = W + w + 65535),
      (w = Math.floor(c / 65536)),
      (W = c - w * 65536),
      (c = Q + w + 65535),
      (w = Math.floor(c / 65536)),
      (Q = c - w * 65536),
      (c = ie + w + 65535),
      (w = Math.floor(c / 65536)),
      (ie = c - w * 65536),
      (c = _e + w + 65535),
      (w = Math.floor(c / 65536)),
      (_e = c - w * 65536),
      (c = oe + w + 65535),
      (w = Math.floor(c / 65536)),
      (oe = c - w * 65536),
      (c = be + w + 65535),
      (w = Math.floor(c / 65536)),
      (be = c - w * 65536),
      (K += w - 1 + 37 * (w - 1)),
      (w = 1),
      (c = K + w + 65535),
      (w = Math.floor(c / 65536)),
      (K = c - w * 65536),
      (c = G + w + 65535),
      (w = Math.floor(c / 65536)),
      (G = c - w * 65536),
      (c = se + w + 65535),
      (w = Math.floor(c / 65536)),
      (se = c - w * 65536),
      (c = ue + w + 65535),
      (w = Math.floor(c / 65536)),
      (ue = c - w * 65536),
      (c = de + w + 65535),
      (w = Math.floor(c / 65536)),
      (de = c - w * 65536),
      (c = x + w + 65535),
      (w = Math.floor(c / 65536)),
      (x = c - w * 65536),
      (c = R + w + 65535),
      (w = Math.floor(c / 65536)),
      (R = c - w * 65536),
      (c = te + w + 65535),
      (w = Math.floor(c / 65536)),
      (te = c - w * 65536),
      (c = X + w + 65535),
      (w = Math.floor(c / 65536)),
      (X = c - w * 65536),
      (c = V + w + 65535),
      (w = Math.floor(c / 65536)),
      (V = c - w * 65536),
      (c = W + w + 65535),
      (w = Math.floor(c / 65536)),
      (W = c - w * 65536),
      (c = Q + w + 65535),
      (w = Math.floor(c / 65536)),
      (Q = c - w * 65536),
      (c = ie + w + 65535),
      (w = Math.floor(c / 65536)),
      (ie = c - w * 65536),
      (c = _e + w + 65535),
      (w = Math.floor(c / 65536)),
      (_e = c - w * 65536),
      (c = oe + w + 65535),
      (w = Math.floor(c / 65536)),
      (oe = c - w * 65536),
      (c = be + w + 65535),
      (w = Math.floor(c / 65536)),
      (be = c - w * 65536),
      (K += w - 1 + 37 * (w - 1)),
      (v[0] = K),
      (v[1] = G),
      (v[2] = se),
      (v[3] = ue),
      (v[4] = de),
      (v[5] = x),
      (v[6] = R),
      (v[7] = te),
      (v[8] = X),
      (v[9] = V),
      (v[10] = W),
      (v[11] = Q),
      (v[12] = ie),
      (v[13] = _e),
      (v[14] = oe),
      (v[15] = be);
  }
  function T(v, b) {
    P(v, b, b);
  }
  function A(v, b) {
    const g = s();
    for (let c = 0; c < 16; c++) g[c] = b[c];
    for (let c = 253; c >= 0; c--) T(g, g), c !== 2 && c !== 4 && P(g, g, b);
    for (let c = 0; c < 16; c++) v[c] = g[c];
  }
  function q(v, b) {
    const g = new Uint8Array(32),
      c = new Float64Array(80),
      w = s(),
      K = s(),
      G = s(),
      se = s(),
      ue = s(),
      de = s();
    for (let X = 0; X < 31; X++) g[X] = v[X];
    (g[31] = (v[31] & 127) | 64), (g[0] &= 248), y(c, b);
    for (let X = 0; X < 16; X++) K[X] = c[X];
    w[0] = se[0] = 1;
    for (let X = 254; X >= 0; --X) {
      const V = (g[X >>> 3] >>> (X & 7)) & 1;
      f(w, K, V),
        f(G, se, V),
        E(ue, w, G),
        I(w, w, G),
        E(G, K, se),
        I(K, K, se),
        T(se, ue),
        T(de, w),
        P(w, G, w),
        P(G, K, ue),
        E(ue, w, G),
        I(w, w, G),
        T(K, w),
        I(G, se, de),
        P(w, G, u),
        E(w, w, se),
        P(G, G, w),
        P(w, se, de),
        P(se, K, c),
        T(K, ue),
        f(w, K, V),
        f(G, se, V);
    }
    for (let X = 0; X < 16; X++)
      (c[X + 16] = w[X]),
        (c[X + 32] = G[X]),
        (c[X + 48] = K[X]),
        (c[X + 64] = se[X]);
    const x = c.subarray(32),
      R = c.subarray(16);
    A(x, x), P(R, R, x);
    const te = new Uint8Array(32);
    return _(te, R), te;
  }
  i.scalarMult = q;
  function L(v) {
    return q(v, o);
  }
  i.scalarMultBase = L;
  function Y(v) {
    if (v.length !== i.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${i.SECRET_KEY_LENGTH} bytes`);
    const b = new Uint8Array(v);
    return { publicKey: L(b), secretKey: b };
  }
  i.generateKeyPairFromSeed = Y;
  function p(v) {
    const b = (0, e.randomBytes)(32, v),
      g = Y(b);
    return (0, t.wipe)(b), g;
  }
  i.generateKeyPair = p;
  function D(v, b, g = !1) {
    if (v.length !== i.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (b.length !== i.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const c = q(v, b);
    if (g) {
      let w = 0;
      for (let K = 0; K < c.length; K++) w |= c[K];
      if (w === 0) throw new Error("X25519: invalid shared key");
    }
    return c;
  }
  i.sharedKey = D;
})($u);
function Lu(i) {
  return globalThis.Buffer != null
    ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength)
    : i;
}
function ap(i = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? Lu(globalThis.Buffer.allocUnsafe(i))
    : new Uint8Array(i);
}
function du(i, e) {
  e || (e = i.reduce((o, u) => o + u.length, 0));
  const t = ap(e);
  let s = 0;
  for (const o of i) t.set(o, s), (s += o.length);
  return Lu(t);
}
function N_(i, e) {
  if (i.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s = 0; s < t.length; s++) t[s] = 255;
  for (var o = 0; o < i.length; o++) {
    var u = i.charAt(o),
      d = u.charCodeAt(0);
    if (t[d] !== 255) throw new TypeError(u + " is ambiguous");
    t[d] = o;
  }
  var f = i.length,
    _ = i.charAt(0),
    y = Math.log(f) / Math.log(256),
    E = Math.log(256) / Math.log(f);
  function I(A) {
    if (
      (A instanceof Uint8Array ||
        (ArrayBuffer.isView(A)
          ? (A = new Uint8Array(A.buffer, A.byteOffset, A.byteLength))
          : Array.isArray(A) && (A = Uint8Array.from(A))),
      !(A instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (A.length === 0) return "";
    for (var q = 0, L = 0, Y = 0, p = A.length; Y !== p && A[Y] === 0; )
      Y++, q++;
    for (var D = ((p - Y) * E + 1) >>> 0, v = new Uint8Array(D); Y !== p; ) {
      for (
        var b = A[Y], g = 0, c = D - 1;
        (b !== 0 || g < L) && c !== -1;
        c--, g++
      )
        (b += (256 * v[c]) >>> 0), (v[c] = b % f >>> 0), (b = (b / f) >>> 0);
      if (b !== 0) throw new Error("Non-zero carry");
      (L = g), Y++;
    }
    for (var w = D - L; w !== D && v[w] === 0; ) w++;
    for (var K = _.repeat(q); w < D; ++w) K += i.charAt(v[w]);
    return K;
  }
  function P(A) {
    if (typeof A != "string") throw new TypeError("Expected String");
    if (A.length === 0) return new Uint8Array();
    var q = 0;
    if (A[q] !== " ") {
      for (var L = 0, Y = 0; A[q] === _; ) L++, q++;
      for (
        var p = ((A.length - q) * y + 1) >>> 0, D = new Uint8Array(p);
        A[q];

      ) {
        var v = t[A.charCodeAt(q)];
        if (v === 255) return;
        for (var b = 0, g = p - 1; (v !== 0 || b < Y) && g !== -1; g--, b++)
          (v += (f * D[g]) >>> 0),
            (D[g] = v % 256 >>> 0),
            (v = (v / 256) >>> 0);
        if (v !== 0) throw new Error("Non-zero carry");
        (Y = b), q++;
      }
      if (A[q] !== " ") {
        for (var c = p - Y; c !== p && D[c] === 0; ) c++;
        for (var w = new Uint8Array(L + (p - c)), K = L; c !== p; )
          w[K++] = D[c++];
        return w;
      }
    }
  }
  function T(A) {
    var q = P(A);
    if (q) return q;
    throw new Error(`Non-${e} character`);
  }
  return { encode: I, decodeUnsafe: P, decode: T };
}
var R_ = N_,
  F_ = R_;
const U_ = (i) => {
    if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
      return i;
    if (i instanceof ArrayBuffer) return new Uint8Array(i);
    if (ArrayBuffer.isView(i))
      return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  $_ = (i) => new TextEncoder().encode(i),
  L_ = (i) => new TextDecoder().decode(i);
class j_ {
  constructor(e, t, s) {
    (this.name = e), (this.prefix = t), (this.baseEncode = s);
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class M_ {
  constructor(e, t, s) {
    if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = s);
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(e)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return cp(this, e);
  }
}
class q_ {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return cp(this, e);
  }
  decode(e) {
    const t = e[0],
      s = this.decoders[t];
    if (s) return s.decode(e);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        e
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const cp = (i, e) =>
  new q_({
    ...(i.decoders || { [i.prefix]: i }),
    ...(e.decoders || { [e.prefix]: e }),
  });
class B_ {
  constructor(e, t, s, o) {
    (this.name = e),
      (this.prefix = t),
      (this.baseEncode = s),
      (this.baseDecode = o),
      (this.encoder = new j_(e, t, s)),
      (this.decoder = new M_(e, t, o));
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const ua = ({ name: i, prefix: e, encode: t, decode: s }) => new B_(i, e, t, s),
  Ts = ({ prefix: i, name: e, alphabet: t }) => {
    const { encode: s, decode: o } = F_(t, e);
    return ua({ prefix: i, name: e, encode: s, decode: (u) => U_(o(u)) });
  },
  H_ = (i, e, t, s) => {
    const o = {};
    for (let E = 0; E < e.length; ++E) o[e[E]] = E;
    let u = i.length;
    for (; i[u - 1] === "="; ) --u;
    const d = new Uint8Array(((u * t) / 8) | 0);
    let f = 0,
      _ = 0,
      y = 0;
    for (let E = 0; E < u; ++E) {
      const I = o[i[E]];
      if (I === void 0) throw new SyntaxError(`Non-${s} character`);
      (_ = (_ << t) | I),
        (f += t),
        f >= 8 && ((f -= 8), (d[y++] = 255 & (_ >> f)));
    }
    if (f >= t || 255 & (_ << (8 - f)))
      throw new SyntaxError("Unexpected end of data");
    return d;
  },
  z_ = (i, e, t) => {
    const s = e[e.length - 1] === "=",
      o = (1 << t) - 1;
    let u = "",
      d = 0,
      f = 0;
    for (let _ = 0; _ < i.length; ++_)
      for (f = (f << 8) | i[_], d += 8; d > t; )
        (d -= t), (u += e[o & (f >> d)]);
    if ((d && (u += e[o & (f << (t - d))]), s))
      for (; (u.length * t) & 7; ) u += "=";
    return u;
  },
  Qt = ({ name: i, prefix: e, bitsPerChar: t, alphabet: s }) =>
    ua({
      prefix: e,
      name: i,
      encode(o) {
        return z_(o, s, t);
      },
      decode(o) {
        return H_(o, s, t, i);
      },
    }),
  K_ = ua({
    prefix: "\0",
    name: "identity",
    encode: (i) => L_(i),
    decode: (i) => $_(i),
  }),
  k_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, identity: K_ },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  V_ = Qt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
  W_ = Object.freeze(
    Object.defineProperty({ __proto__: null, base2: V_ }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  G_ = Qt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 }),
  J_ = Object.freeze(
    Object.defineProperty({ __proto__: null, base8: G_ }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  Y_ = Ts({ prefix: "9", name: "base10", alphabet: "0123456789" }),
  Q_ = Object.freeze(
    Object.defineProperty({ __proto__: null, base10: Y_ }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  X_ = Qt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  Z_ = Qt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  }),
  eb = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base16: X_, base16upper: Z_ },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  tb = Qt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  rb = Qt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  ib = Qt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  nb = Qt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  sb = Qt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  ob = Qt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  ab = Qt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  cb = Qt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  ub = Qt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  }),
  hb = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base32: tb,
        base32hex: sb,
        base32hexpad: ab,
        base32hexpadupper: cb,
        base32hexupper: ob,
        base32pad: ib,
        base32padupper: nb,
        base32upper: rb,
        base32z: ub,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  lb = Ts({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  fb = Ts({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  }),
  db = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base36: lb, base36upper: fb },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  pb = Ts({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  gb = Ts({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  }),
  yb = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base58btc: pb, base58flickr: gb },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  mb = Qt({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  vb = Qt({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  wb = Qt({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  _b = Qt({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  }),
  bb = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base64: mb,
        base64pad: vb,
        base64url: wb,
        base64urlpad: _b,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  up = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  Eb = up.reduce((i, e, t) => ((i[t] = e), i), []),
  Db = up.reduce((i, e, t) => ((i[e.codePointAt(0)] = t), i), []);
function Sb(i) {
  return i.reduce((e, t) => ((e += Eb[t]), e), "");
}
function Ib(i) {
  const e = [];
  for (const t of i) {
    const s = Db[t.codePointAt(0)];
    if (s === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
const Ob = ua({ prefix: "🚀", name: "base256emoji", encode: Sb, decode: Ib }),
  xb = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base256emoji: Ob },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
new TextEncoder();
new TextDecoder();
const hf = {
  ...k_,
  ...W_,
  ...J_,
  ...Q_,
  ...eb,
  ...hb,
  ...db,
  ...yb,
  ...bb,
  ...xb,
};
function hp(i, e, t, s) {
  return {
    name: i,
    prefix: e,
    encoder: { name: i, prefix: e, encode: t },
    decoder: { decode: s },
  };
}
const lf = hp(
    "utf8",
    "u",
    (i) => "u" + new TextDecoder("utf8").decode(i),
    (i) => new TextEncoder().encode(i.substring(1))
  ),
  Mc = hp(
    "ascii",
    "a",
    (i) => {
      let e = "a";
      for (let t = 0; t < i.length; t++) e += String.fromCharCode(i[t]);
      return e;
    },
    (i) => {
      i = i.substring(1);
      const e = ap(i.length);
      for (let t = 0; t < i.length; t++) e[t] = i.charCodeAt(t);
      return e;
    }
  ),
  lp = {
    utf8: lf,
    "utf-8": lf,
    hex: hf.base16,
    latin1: Mc,
    ascii: Mc,
    binary: Mc,
    ...hf,
  };
function Er(i, e = "utf8") {
  const t = lp[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? Lu(globalThis.Buffer.from(i, "utf-8"))
    : t.decoder.decode(`${t.prefix}${i}`);
}
function dr(i, e = "utf8") {
  const t = lp[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(i.buffer, i.byteOffset, i.byteLength).toString(
        "utf8"
      )
    : t.encoder.encode(i).substring(1);
}
var ff =
    (globalThis && globalThis.__spreadArray) ||
    function (i, e, t) {
      if (t || arguments.length === 2)
        for (var s = 0, o = e.length, u; s < o; s++)
          (u || !(s in e)) &&
            (u || (u = Array.prototype.slice.call(e, 0, s)), (u[s] = e[s]));
      return i.concat(u || Array.prototype.slice.call(e));
    },
  Pb = (function () {
    function i(e, t, s) {
      (this.name = e),
        (this.version = t),
        (this.os = s),
        (this.type = "browser");
    }
    return i;
  })(),
  Cb = (function () {
    function i(e) {
      (this.version = e),
        (this.type = "node"),
        (this.name = "node"),
        (this.os = process.platform);
    }
    return i;
  })(),
  Tb = (function () {
    function i(e, t, s, o) {
      (this.name = e),
        (this.version = t),
        (this.os = s),
        (this.bot = o),
        (this.type = "bot-device");
    }
    return i;
  })(),
  Ab = (function () {
    function i() {
      (this.type = "bot"),
        (this.bot = !0),
        (this.name = "bot"),
        (this.version = null),
        (this.os = null);
    }
    return i;
  })(),
  Nb = (function () {
    function i() {
      (this.type = "react-native"),
        (this.name = "react-native"),
        (this.version = null),
        (this.os = null);
    }
    return i;
  })(),
  Rb =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  Fb =
    /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  df = 3,
  Ub = [
    ["aol", /AOLShield\/([0-9\._]+)/],
    ["edge", /Edge\/([0-9\._]+)/],
    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["silk", /\bSilk\/([0-9._-]+)\b/],
    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
    [
      "chromium-webview",
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["fxios", /FxiOS\/([0-9\.]+)/],
    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      "pie",
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["ie", /MSIE\s(7\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["android", /Android\s([0-9\.]+)/],
    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["safari", /Version\/([0-9\._]+).*Safari/],
    ["facebook", /FB[AS]V\/([0-9\.]+)/],
    ["instagram", /Instagram\s([0-9\.]+)/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ["curl", /^curl\/([0-9\.]+)$/],
    ["searchbot", Rb],
  ],
  pf = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/],
  ];
function $b(i) {
  return i
    ? gf(i)
    : typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    ? new Nb()
    : typeof navigator < "u"
    ? gf(navigator.userAgent)
    : Mb();
}
function Lb(i) {
  return (
    i !== "" &&
    Ub.reduce(function (e, t) {
      var s = t[0],
        o = t[1];
      if (e) return e;
      var u = o.exec(i);
      return !!u && [s, u];
    }, !1)
  );
}
function gf(i) {
  var e = Lb(i);
  if (!e) return null;
  var t = e[0],
    s = e[1];
  if (t === "searchbot") return new Ab();
  var o = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
  o
    ? o.length < df && (o = ff(ff([], o, !0), qb(df - o.length), !0))
    : (o = []);
  var u = o.join("."),
    d = jb(i),
    f = Fb.exec(i);
  return f && f[1] ? new Tb(t, u, d, f[1]) : new Pb(t, u, d);
}
function jb(i) {
  for (var e = 0, t = pf.length; e < t; e++) {
    var s = pf[e],
      o = s[0],
      u = s[1],
      d = u.exec(i);
    if (d) return o;
  }
  return null;
}
function Mb() {
  var i = typeof process < "u" && process.version;
  return i ? new Cb(process.version.slice(1)) : null;
}
function qb(i) {
  for (var e = [], t = 0; t < i; t++) e.push("0");
  return e;
}
var me = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var pu =
  function (i, e) {
    return (
      (pu =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, s) {
            t.__proto__ = s;
          }) ||
        function (t, s) {
          for (var o in s) s.hasOwnProperty(o) && (t[o] = s[o]);
        }),
      pu(i, e)
    );
  };
function Bb(i, e) {
  pu(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var gu = function () {
  return (
    (gu =
      Object.assign ||
      function (e) {
        for (var t, s = 1, o = arguments.length; s < o; s++) {
          t = arguments[s];
          for (var u in t)
            Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
        }
        return e;
      }),
    gu.apply(this, arguments)
  );
};
function Hb(i, e) {
  var t = {};
  for (var s in i)
    Object.prototype.hasOwnProperty.call(i, s) &&
      e.indexOf(s) < 0 &&
      (t[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, s = Object.getOwnPropertySymbols(i); o < s.length; o++)
      e.indexOf(s[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(i, s[o]) &&
        (t[s[o]] = i[s[o]]);
  return t;
}
function zb(i, e, t, s) {
  var o = arguments.length,
    u =
      o < 3 ? e : s === null ? (s = Object.getOwnPropertyDescriptor(e, t)) : s,
    d;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    u = Reflect.decorate(i, e, t, s);
  else
    for (var f = i.length - 1; f >= 0; f--)
      (d = i[f]) && (u = (o < 3 ? d(u) : o > 3 ? d(e, t, u) : d(e, t)) || u);
  return o > 3 && u && Object.defineProperty(e, t, u), u;
}
function Kb(i, e) {
  return function (t, s) {
    e(t, s, i);
  };
}
function kb(i, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(i, e);
}
function Vb(i, e, t, s) {
  function o(u) {
    return u instanceof t
      ? u
      : new t(function (d) {
          d(u);
        });
  }
  return new (t || (t = Promise))(function (u, d) {
    function f(E) {
      try {
        y(s.next(E));
      } catch (I) {
        d(I);
      }
    }
    function _(E) {
      try {
        y(s.throw(E));
      } catch (I) {
        d(I);
      }
    }
    function y(E) {
      E.done ? u(E.value) : o(E.value).then(f, _);
    }
    y((s = s.apply(i, e || [])).next());
  });
}
function Wb(i, e) {
  var t = {
      label: 0,
      sent: function () {
        if (u[0] & 1) throw u[1];
        return u[1];
      },
      trys: [],
      ops: [],
    },
    s,
    o,
    u,
    d;
  return (
    (d = { next: f(0), throw: f(1), return: f(2) }),
    typeof Symbol == "function" &&
      (d[Symbol.iterator] = function () {
        return this;
      }),
    d
  );
  function f(y) {
    return function (E) {
      return _([y, E]);
    };
  }
  function _(y) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((s = 1),
          o &&
            (u =
              y[0] & 2
                ? o.return
                : y[0]
                ? o.throw || ((u = o.return) && u.call(o), 0)
                : o.next) &&
            !(u = u.call(o, y[1])).done)
        )
          return u;
        switch (((o = 0), u && (y = [y[0] & 2, u.value]), y[0])) {
          case 0:
          case 1:
            u = y;
            break;
          case 4:
            return t.label++, { value: y[1], done: !1 };
          case 5:
            t.label++, (o = y[1]), (y = [0]);
            continue;
          case 7:
            (y = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((u = t.trys),
              !(u = u.length > 0 && u[u.length - 1]) &&
                (y[0] === 6 || y[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (y[0] === 3 && (!u || (y[1] > u[0] && y[1] < u[3]))) {
              t.label = y[1];
              break;
            }
            if (y[0] === 6 && t.label < u[1]) {
              (t.label = u[1]), (u = y);
              break;
            }
            if (u && t.label < u[2]) {
              (t.label = u[2]), t.ops.push(y);
              break;
            }
            u[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        y = e.call(i, t);
      } catch (E) {
        (y = [6, E]), (o = 0);
      } finally {
        s = u = 0;
      }
    if (y[0] & 5) throw y[1];
    return { value: y[0] ? y[1] : void 0, done: !0 };
  }
}
function Gb(i, e, t, s) {
  s === void 0 && (s = t), (i[s] = e[t]);
}
function Jb(i, e) {
  for (var t in i) t !== "default" && !e.hasOwnProperty(t) && (e[t] = i[t]);
}
function yu(i) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && i[e],
    s = 0;
  if (t) return t.call(i);
  if (i && typeof i.length == "number")
    return {
      next: function () {
        return (
          i && s >= i.length && (i = void 0), { value: i && i[s++], done: !i }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function fp(i, e) {
  var t = typeof Symbol == "function" && i[Symbol.iterator];
  if (!t) return i;
  var s = t.call(i),
    o,
    u = [],
    d;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = s.next()).done; ) u.push(o.value);
  } catch (f) {
    d = { error: f };
  } finally {
    try {
      o && !o.done && (t = s.return) && t.call(s);
    } finally {
      if (d) throw d.error;
    }
  }
  return u;
}
function Yb() {
  for (var i = [], e = 0; e < arguments.length; e++)
    i = i.concat(fp(arguments[e]));
  return i;
}
function Qb() {
  for (var i = 0, e = 0, t = arguments.length; e < t; e++)
    i += arguments[e].length;
  for (var s = Array(i), o = 0, e = 0; e < t; e++)
    for (var u = arguments[e], d = 0, f = u.length; d < f; d++, o++)
      s[o] = u[d];
  return s;
}
function Os(i) {
  return this instanceof Os ? ((this.v = i), this) : new Os(i);
}
function Xb(i, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = t.apply(i, e || []),
    o,
    u = [];
  return (
    (o = {}),
    d("next"),
    d("throw"),
    d("return"),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function d(P) {
    s[P] &&
      (o[P] = function (T) {
        return new Promise(function (A, q) {
          u.push([P, T, A, q]) > 1 || f(P, T);
        });
      });
  }
  function f(P, T) {
    try {
      _(s[P](T));
    } catch (A) {
      I(u[0][3], A);
    }
  }
  function _(P) {
    P.value instanceof Os
      ? Promise.resolve(P.value.v).then(y, E)
      : I(u[0][2], P);
  }
  function y(P) {
    f("next", P);
  }
  function E(P) {
    f("throw", P);
  }
  function I(P, T) {
    P(T), u.shift(), u.length && f(u[0][0], u[0][1]);
  }
}
function Zb(i) {
  var e, t;
  return (
    (e = {}),
    s("next"),
    s("throw", function (o) {
      throw o;
    }),
    s("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function s(o, u) {
    e[o] = i[o]
      ? function (d) {
          return (t = !t)
            ? { value: Os(i[o](d)), done: o === "return" }
            : u
            ? u(d)
            : d;
        }
      : u;
  }
}
function eE(i) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = i[Symbol.asyncIterator],
    t;
  return e
    ? e.call(i)
    : ((i = typeof yu == "function" ? yu(i) : i[Symbol.iterator]()),
      (t = {}),
      s("next"),
      s("throw"),
      s("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function s(u) {
    t[u] =
      i[u] &&
      function (d) {
        return new Promise(function (f, _) {
          (d = i[u](d)), o(f, _, d.done, d.value);
        });
      };
  }
  function o(u, d, f, _) {
    Promise.resolve(_).then(function (y) {
      u({ value: y, done: f });
    }, d);
  }
}
function tE(i, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(i, "raw", { value: e })
      : (i.raw = e),
    i
  );
}
function rE(i) {
  if (i && i.__esModule) return i;
  var e = {};
  if (i != null)
    for (var t in i) Object.hasOwnProperty.call(i, t) && (e[t] = i[t]);
  return (e.default = i), e;
}
function iE(i) {
  return i && i.__esModule ? i : { default: i };
}
function nE(i, e) {
  if (!e.has(i))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(i);
}
function sE(i, e, t) {
  if (!e.has(i))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(i, t), t;
}
const oE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return gu;
        },
        __asyncDelegator: Zb,
        __asyncGenerator: Xb,
        __asyncValues: eE,
        __await: Os,
        __awaiter: Vb,
        __classPrivateFieldGet: nE,
        __classPrivateFieldSet: sE,
        __createBinding: Gb,
        __decorate: zb,
        __exportStar: Jb,
        __extends: Bb,
        __generator: Wb,
        __importDefault: iE,
        __importStar: rE,
        __makeTemplateObject: tE,
        __metadata: kb,
        __param: Kb,
        __read: fp,
        __rest: Hb,
        __spread: Yb,
        __spreadArrays: Qb,
        __values: yu,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  oi = Au(oE);
var qc = {},
  gs = {},
  yf;
function aE() {
  if (yf) return gs;
  (yf = 1),
    Object.defineProperty(gs, "__esModule", { value: !0 }),
    (gs.delay = void 0);
  function i(e) {
    return new Promise((t) => {
      setTimeout(() => {
        t(!0);
      }, e);
    });
  }
  return (gs.delay = i), gs;
}
var nn = {},
  Bc = {},
  sn = {},
  mf;
function cE() {
  return (
    mf ||
      ((mf = 1),
      Object.defineProperty(sn, "__esModule", { value: !0 }),
      (sn.ONE_THOUSAND = sn.ONE_HUNDRED = void 0),
      (sn.ONE_HUNDRED = 100),
      (sn.ONE_THOUSAND = 1e3)),
    sn
  );
}
var Hc = {},
  vf;
function uE() {
  return (
    vf ||
      ((vf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.ONE_YEAR =
            i.FOUR_WEEKS =
            i.THREE_WEEKS =
            i.TWO_WEEKS =
            i.ONE_WEEK =
            i.THIRTY_DAYS =
            i.SEVEN_DAYS =
            i.FIVE_DAYS =
            i.THREE_DAYS =
            i.ONE_DAY =
            i.TWENTY_FOUR_HOURS =
            i.TWELVE_HOURS =
            i.SIX_HOURS =
            i.THREE_HOURS =
            i.ONE_HOUR =
            i.SIXTY_MINUTES =
            i.THIRTY_MINUTES =
            i.TEN_MINUTES =
            i.FIVE_MINUTES =
            i.ONE_MINUTE =
            i.SIXTY_SECONDS =
            i.THIRTY_SECONDS =
            i.TEN_SECONDS =
            i.FIVE_SECONDS =
            i.ONE_SECOND =
              void 0),
          (i.ONE_SECOND = 1),
          (i.FIVE_SECONDS = 5),
          (i.TEN_SECONDS = 10),
          (i.THIRTY_SECONDS = 30),
          (i.SIXTY_SECONDS = 60),
          (i.ONE_MINUTE = i.SIXTY_SECONDS),
          (i.FIVE_MINUTES = i.ONE_MINUTE * 5),
          (i.TEN_MINUTES = i.ONE_MINUTE * 10),
          (i.THIRTY_MINUTES = i.ONE_MINUTE * 30),
          (i.SIXTY_MINUTES = i.ONE_MINUTE * 60),
          (i.ONE_HOUR = i.SIXTY_MINUTES),
          (i.THREE_HOURS = i.ONE_HOUR * 3),
          (i.SIX_HOURS = i.ONE_HOUR * 6),
          (i.TWELVE_HOURS = i.ONE_HOUR * 12),
          (i.TWENTY_FOUR_HOURS = i.ONE_HOUR * 24),
          (i.ONE_DAY = i.TWENTY_FOUR_HOURS),
          (i.THREE_DAYS = i.ONE_DAY * 3),
          (i.FIVE_DAYS = i.ONE_DAY * 5),
          (i.SEVEN_DAYS = i.ONE_DAY * 7),
          (i.THIRTY_DAYS = i.ONE_DAY * 30),
          (i.ONE_WEEK = i.SEVEN_DAYS),
          (i.TWO_WEEKS = i.ONE_WEEK * 2),
          (i.THREE_WEEKS = i.ONE_WEEK * 3),
          (i.FOUR_WEEKS = i.ONE_WEEK * 4),
          (i.ONE_YEAR = i.ONE_DAY * 365);
      })(Hc)),
    Hc
  );
}
var wf;
function dp() {
  return (
    wf ||
      ((wf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        const e = oi;
        e.__exportStar(cE(), i), e.__exportStar(uE(), i);
      })(Bc)),
    Bc
  );
}
var _f;
function hE() {
  if (_f) return nn;
  (_f = 1),
    Object.defineProperty(nn, "__esModule", { value: !0 }),
    (nn.fromMiliseconds = nn.toMiliseconds = void 0);
  const i = dp();
  function e(s) {
    return s * i.ONE_THOUSAND;
  }
  nn.toMiliseconds = e;
  function t(s) {
    return Math.floor(s / i.ONE_THOUSAND);
  }
  return (nn.fromMiliseconds = t), nn;
}
var bf;
function lE() {
  return (
    bf ||
      ((bf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        const e = oi;
        e.__exportStar(aE(), i), e.__exportStar(hE(), i);
      })(qc)),
    qc
  );
}
var $n = {},
  Ef;
function fE() {
  if (Ef) return $n;
  (Ef = 1),
    Object.defineProperty($n, "__esModule", { value: !0 }),
    ($n.Watch = void 0);
  class i {
    constructor() {
      this.timestamps = new Map();
    }
    start(t) {
      if (this.timestamps.has(t))
        throw new Error(`Watch already started for label: ${t}`);
      this.timestamps.set(t, { started: Date.now() });
    }
    stop(t) {
      const s = this.get(t);
      if (typeof s.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${t}`);
      const o = Date.now() - s.started;
      this.timestamps.set(t, { started: s.started, elapsed: o });
    }
    get(t) {
      const s = this.timestamps.get(t);
      if (typeof s > "u") throw new Error(`No timestamp found for label: ${t}`);
      return s;
    }
    elapsed(t) {
      const s = this.get(t);
      return s.elapsed || Date.now() - s.started;
    }
  }
  return ($n.Watch = i), ($n.default = i), $n;
}
var zc = {},
  ys = {},
  Df;
function dE() {
  if (Df) return ys;
  (Df = 1),
    Object.defineProperty(ys, "__esModule", { value: !0 }),
    (ys.IWatch = void 0);
  class i {}
  return (ys.IWatch = i), ys;
}
var Sf;
function pE() {
  return (
    Sf ||
      ((Sf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          oi.__exportStar(dE(), i);
      })(zc)),
    zc
  );
}
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  const e = oi;
  e.__exportStar(lE(), i),
    e.__exportStar(fE(), i),
    e.__exportStar(pE(), i),
    e.__exportStar(dp(), i);
})(me);
var lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.getLocalStorage =
  lt.getLocalStorageOrThrow =
  lt.getCrypto =
  lt.getCryptoOrThrow =
  lt.getLocation =
  lt.getLocationOrThrow =
  lt.getNavigator =
  lt.getNavigatorOrThrow =
  lt.getDocument =
  lt.getDocumentOrThrow =
  lt.getFromWindowOrThrow =
  lt.getFromWindow =
    void 0;
function un(i) {
  let e;
  return typeof window < "u" && typeof window[i] < "u" && (e = window[i]), e;
}
lt.getFromWindow = un;
function zn(i) {
  const e = un(i);
  if (!e) throw new Error(`${i} is not defined in Window`);
  return e;
}
lt.getFromWindowOrThrow = zn;
function gE() {
  return zn("document");
}
lt.getDocumentOrThrow = gE;
function yE() {
  return un("document");
}
lt.getDocument = yE;
function mE() {
  return zn("navigator");
}
lt.getNavigatorOrThrow = mE;
function vE() {
  return un("navigator");
}
lt.getNavigator = vE;
function wE() {
  return zn("location");
}
lt.getLocationOrThrow = wE;
function _E() {
  return un("location");
}
lt.getLocation = _E;
function bE() {
  return zn("crypto");
}
lt.getCryptoOrThrow = bE;
function EE() {
  return un("crypto");
}
lt.getCrypto = EE;
function DE() {
  return zn("localStorage");
}
lt.getLocalStorageOrThrow = DE;
function SE() {
  return un("localStorage");
}
lt.getLocalStorage = SE;
var ju = {};
Object.defineProperty(ju, "__esModule", { value: !0 });
ju.getWindowMetadata = void 0;
const If = lt;
function IE() {
  let i, e;
  try {
    (i = If.getDocumentOrThrow()), (e = If.getLocationOrThrow());
  } catch {
    return null;
  }
  function t() {
    const I = i.getElementsByTagName("link"),
      P = [];
    for (let T = 0; T < I.length; T++) {
      const A = I[T],
        q = A.getAttribute("rel");
      if (q && q.toLowerCase().indexOf("icon") > -1) {
        const L = A.getAttribute("href");
        if (L)
          if (
            L.toLowerCase().indexOf("https:") === -1 &&
            L.toLowerCase().indexOf("http:") === -1 &&
            L.indexOf("//") !== 0
          ) {
            let Y = e.protocol + "//" + e.host;
            if (L.indexOf("/") === 0) Y += L;
            else {
              const p = e.pathname.split("/");
              p.pop();
              const D = p.join("/");
              Y += D + "/" + L;
            }
            P.push(Y);
          } else if (L.indexOf("//") === 0) {
            const Y = e.protocol + L;
            P.push(Y);
          } else P.push(L);
      }
    }
    return P;
  }
  function s(...I) {
    const P = i.getElementsByTagName("meta");
    for (let T = 0; T < P.length; T++) {
      const A = P[T],
        q = ["itemprop", "property", "name"]
          .map((L) => A.getAttribute(L))
          .filter((L) => (L ? I.includes(L) : !1));
      if (q.length && q) {
        const L = A.getAttribute("content");
        if (L) return L;
      }
    }
    return "";
  }
  function o() {
    let I = s("name", "og:site_name", "og:title", "twitter:title");
    return I || (I = i.title), I;
  }
  function u() {
    return s(
      "description",
      "og:description",
      "twitter:description",
      "keywords"
    );
  }
  const d = o(),
    f = u(),
    _ = e.origin,
    y = t();
  return { description: f, url: _, icons: y, name: d };
}
ju.getWindowMetadata = IE;
var OE = {},
  Mu = (i) =>
    encodeURIComponent(i).replace(
      /[!'()*]/g,
      (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  pp = "%[a-f0-9]{2}",
  Of = new RegExp("(" + pp + ")|([^%]+?)", "gi"),
  xf = new RegExp("(" + pp + ")+", "gi");
function mu(i, e) {
  try {
    return [decodeURIComponent(i.join(""))];
  } catch {}
  if (i.length === 1) return i;
  e = e || 1;
  var t = i.slice(0, e),
    s = i.slice(e);
  return Array.prototype.concat.call([], mu(t), mu(s));
}
function xE(i) {
  try {
    return decodeURIComponent(i);
  } catch {
    for (var e = i.match(Of) || [], t = 1; t < e.length; t++)
      (i = mu(e, t).join("")), (e = i.match(Of) || []);
    return i;
  }
}
function PE(i) {
  for (var e = { "%FE%FF": "��", "%FF%FE": "��" }, t = xf.exec(i); t; ) {
    try {
      e[t[0]] = decodeURIComponent(t[0]);
    } catch {
      var s = xE(t[0]);
      s !== t[0] && (e[t[0]] = s);
    }
    t = xf.exec(i);
  }
  e["%C2"] = "�";
  for (var o = Object.keys(e), u = 0; u < o.length; u++) {
    var d = o[u];
    i = i.replace(new RegExp(d, "g"), e[d]);
  }
  return i;
}
var qu = function (i) {
    if (typeof i != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof i + "`"
      );
    try {
      return (i = i.replace(/\+/g, " ")), decodeURIComponent(i);
    } catch {
      return PE(i);
    }
  },
  Bu = (i, e) => {
    if (!(typeof i == "string" && typeof e == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "") return [i];
    const t = i.indexOf(e);
    return t === -1 ? [i] : [i.slice(0, t), i.slice(t + e.length)];
  },
  Hu = function (i, e) {
    for (
      var t = {}, s = Object.keys(i), o = Array.isArray(e), u = 0;
      u < s.length;
      u++
    ) {
      var d = s[u],
        f = i[d];
      (o ? e.indexOf(d) !== -1 : e(d, f, i)) && (t[d] = f);
    }
    return t;
  };
(function (i) {
  const e = Mu,
    t = qu,
    s = Bu,
    o = Hu,
    u = (p) => p == null,
    d = Symbol("encodeFragmentIdentifier");
  function f(p) {
    switch (p.arrayFormat) {
      case "index":
        return (D) => (v, b) => {
          const g = v.length;
          return b === void 0 ||
            (p.skipNull && b === null) ||
            (p.skipEmptyString && b === "")
            ? v
            : b === null
            ? [...v, [E(D, p), "[", g, "]"].join("")]
            : [...v, [E(D, p), "[", E(g, p), "]=", E(b, p)].join("")];
        };
      case "bracket":
        return (D) => (v, b) =>
          b === void 0 ||
          (p.skipNull && b === null) ||
          (p.skipEmptyString && b === "")
            ? v
            : b === null
            ? [...v, [E(D, p), "[]"].join("")]
            : [...v, [E(D, p), "[]=", E(b, p)].join("")];
      case "colon-list-separator":
        return (D) => (v, b) =>
          b === void 0 ||
          (p.skipNull && b === null) ||
          (p.skipEmptyString && b === "")
            ? v
            : b === null
            ? [...v, [E(D, p), ":list="].join("")]
            : [...v, [E(D, p), ":list=", E(b, p)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const D = p.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (v) => (b, g) =>
          g === void 0 ||
          (p.skipNull && g === null) ||
          (p.skipEmptyString && g === "")
            ? b
            : ((g = g === null ? "" : g),
              b.length === 0
                ? [[E(v, p), D, E(g, p)].join("")]
                : [[b, E(g, p)].join(p.arrayFormatSeparator)]);
      }
      default:
        return (D) => (v, b) =>
          b === void 0 ||
          (p.skipNull && b === null) ||
          (p.skipEmptyString && b === "")
            ? v
            : b === null
            ? [...v, E(D, p)]
            : [...v, [E(D, p), "=", E(b, p)].join("")];
    }
  }
  function _(p) {
    let D;
    switch (p.arrayFormat) {
      case "index":
        return (v, b, g) => {
          if (
            ((D = /\[(\d*)\]$/.exec(v)), (v = v.replace(/\[\d*\]$/, "")), !D)
          ) {
            g[v] = b;
            return;
          }
          g[v] === void 0 && (g[v] = {}), (g[v][D[1]] = b);
        };
      case "bracket":
        return (v, b, g) => {
          if (((D = /(\[\])$/.exec(v)), (v = v.replace(/\[\]$/, "")), !D)) {
            g[v] = b;
            return;
          }
          if (g[v] === void 0) {
            g[v] = [b];
            return;
          }
          g[v] = [].concat(g[v], b);
        };
      case "colon-list-separator":
        return (v, b, g) => {
          if (((D = /(:list)$/.exec(v)), (v = v.replace(/:list$/, "")), !D)) {
            g[v] = b;
            return;
          }
          if (g[v] === void 0) {
            g[v] = [b];
            return;
          }
          g[v] = [].concat(g[v], b);
        };
      case "comma":
      case "separator":
        return (v, b, g) => {
          const c = typeof b == "string" && b.includes(p.arrayFormatSeparator),
            w =
              typeof b == "string" &&
              !c &&
              I(b, p).includes(p.arrayFormatSeparator);
          b = w ? I(b, p) : b;
          const K =
            c || w
              ? b.split(p.arrayFormatSeparator).map((G) => I(G, p))
              : b === null
              ? b
              : I(b, p);
          g[v] = K;
        };
      case "bracket-separator":
        return (v, b, g) => {
          const c = /(\[\])$/.test(v);
          if (((v = v.replace(/\[\]$/, "")), !c)) {
            g[v] = b && I(b, p);
            return;
          }
          const w =
            b === null
              ? []
              : b.split(p.arrayFormatSeparator).map((K) => I(K, p));
          if (g[v] === void 0) {
            g[v] = w;
            return;
          }
          g[v] = [].concat(g[v], w);
        };
      default:
        return (v, b, g) => {
          if (g[v] === void 0) {
            g[v] = b;
            return;
          }
          g[v] = [].concat(g[v], b);
        };
    }
  }
  function y(p) {
    if (typeof p != "string" || p.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function E(p, D) {
    return D.encode ? (D.strict ? e(p) : encodeURIComponent(p)) : p;
  }
  function I(p, D) {
    return D.decode ? t(p) : p;
  }
  function P(p) {
    return Array.isArray(p)
      ? p.sort()
      : typeof p == "object"
      ? P(Object.keys(p))
          .sort((D, v) => Number(D) - Number(v))
          .map((D) => p[D])
      : p;
  }
  function T(p) {
    const D = p.indexOf("#");
    return D !== -1 && (p = p.slice(0, D)), p;
  }
  function A(p) {
    let D = "";
    const v = p.indexOf("#");
    return v !== -1 && (D = p.slice(v)), D;
  }
  function q(p) {
    p = T(p);
    const D = p.indexOf("?");
    return D === -1 ? "" : p.slice(D + 1);
  }
  function L(p, D) {
    return (
      D.parseNumbers &&
      !Number.isNaN(Number(p)) &&
      typeof p == "string" &&
      p.trim() !== ""
        ? (p = Number(p))
        : D.parseBooleans &&
          p !== null &&
          (p.toLowerCase() === "true" || p.toLowerCase() === "false") &&
          (p = p.toLowerCase() === "true"),
      p
    );
  }
  function Y(p, D) {
    (D = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      D
    )),
      y(D.arrayFormatSeparator);
    const v = _(D),
      b = Object.create(null);
    if (typeof p != "string" || ((p = p.trim().replace(/^[?#&]/, "")), !p))
      return b;
    for (const g of p.split("&")) {
      if (g === "") continue;
      let [c, w] = s(D.decode ? g.replace(/\+/g, " ") : g, "=");
      (w =
        w === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(D.arrayFormat)
          ? w
          : I(w, D)),
        v(I(c, D), w, b);
    }
    for (const g of Object.keys(b)) {
      const c = b[g];
      if (typeof c == "object" && c !== null)
        for (const w of Object.keys(c)) c[w] = L(c[w], D);
      else b[g] = L(c, D);
    }
    return D.sort === !1
      ? b
      : (D.sort === !0
          ? Object.keys(b).sort()
          : Object.keys(b).sort(D.sort)
        ).reduce((g, c) => {
          const w = b[c];
          return (
            w && typeof w == "object" && !Array.isArray(w)
              ? (g[c] = P(w))
              : (g[c] = w),
            g
          );
        }, Object.create(null));
  }
  (i.extract = q),
    (i.parse = Y),
    (i.stringify = (p, D) => {
      if (!p) return "";
      (D = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        D
      )),
        y(D.arrayFormatSeparator);
      const v = (w) =>
          (D.skipNull && u(p[w])) || (D.skipEmptyString && p[w] === ""),
        b = f(D),
        g = {};
      for (const w of Object.keys(p)) v(w) || (g[w] = p[w]);
      const c = Object.keys(g);
      return (
        D.sort !== !1 && c.sort(D.sort),
        c
          .map((w) => {
            const K = p[w];
            return K === void 0
              ? ""
              : K === null
              ? E(w, D)
              : Array.isArray(K)
              ? K.length === 0 && D.arrayFormat === "bracket-separator"
                ? E(w, D) + "[]"
                : K.reduce(b(w), []).join("&")
              : E(w, D) + "=" + E(K, D);
          })
          .filter((w) => w.length > 0)
          .join("&")
      );
    }),
    (i.parseUrl = (p, D) => {
      D = Object.assign({ decode: !0 }, D);
      const [v, b] = s(p, "#");
      return Object.assign(
        { url: v.split("?")[0] || "", query: Y(q(p), D) },
        D && D.parseFragmentIdentifier && b
          ? { fragmentIdentifier: I(b, D) }
          : {}
      );
    }),
    (i.stringifyUrl = (p, D) => {
      D = Object.assign({ encode: !0, strict: !0, [d]: !0 }, D);
      const v = T(p.url).split("?")[0] || "",
        b = i.extract(p.url),
        g = i.parse(b, { sort: !1 }),
        c = Object.assign(g, p.query);
      let w = i.stringify(c, D);
      w && (w = `?${w}`);
      let K = A(p.url);
      return (
        p.fragmentIdentifier &&
          (K = `#${D[d] ? E(p.fragmentIdentifier, D) : p.fragmentIdentifier}`),
        `${v}${w}${K}`
      );
    }),
    (i.pick = (p, D, v) => {
      v = Object.assign({ parseFragmentIdentifier: !0, [d]: !1 }, v);
      const { url: b, query: g, fragmentIdentifier: c } = i.parseUrl(p, v);
      return i.stringifyUrl(
        { url: b, query: o(g, D), fragmentIdentifier: c },
        v
      );
    }),
    (i.exclude = (p, D, v) => {
      const b = Array.isArray(D) ? (g) => !D.includes(g) : (g, c) => !D(g, c);
      return i.pick(p, b, v);
    });
})(OE);
const CE = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe",
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe",
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe",
  },
};
function TE(i, e = []) {
  const t = [];
  return (
    Object.keys(i).forEach((s) => {
      if (e.length && !e.includes(s)) return;
      const o = i[s];
      t.push(...o.accounts);
    }),
    t
  );
}
const AE = {
  INVALID_METHOD: { message: "Invalid method.", code: 1001 },
  INVALID_EVENT: { message: "Invalid event.", code: 1002 },
  INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
  INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
  INVALID_SESSION_SETTLE_REQUEST: {
    message: "Invalid session settle request.",
    code: 1005,
  },
  UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
  UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
  UNAUTHORIZED_UPDATE_REQUEST: {
    message: "Unauthorized update request.",
    code: 3003,
  },
  UNAUTHORIZED_EXTEND_REQUEST: {
    message: "Unauthorized extend request.",
    code: 3004,
  },
  USER_REJECTED: { message: "User rejected.", code: 5e3 },
  USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
  USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
  USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
  UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
  UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
  UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
  UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
  UNSUPPORTED_NAMESPACE_KEY: {
    message: "Unsupported namespace key.",
    code: 5104,
  },
  USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
  SESSION_SETTLEMENT_FAILED: {
    message: "Session settlement failed.",
    code: 7e3,
  },
  WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
};
function NE(i, e) {
  const { message: t, code: s } = AE[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function vu(i, e) {
  return Array.isArray(i) ? (typeof e < "u" && i.length ? i.every(e) : !0) : !1;
}
const RE =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  FE =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  UE = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function $E(i, e) {
  if (
    i === "__proto__" ||
    (i === "constructor" && e && typeof e == "object" && "prototype" in e)
  ) {
    LE(i);
    return;
  }
  return e;
}
function LE(i) {
  console.warn(`[destr] Dropping "${i}" key to prevent prototype pollution.`);
}
function Bo(i, e = {}) {
  if (typeof i != "string") return i;
  const t = i.trim();
  if (i[0] === '"' && i.endsWith('"') && !i.includes("\\"))
    return t.slice(1, -1);
  if (t.length <= 9) {
    const s = t.toLowerCase();
    if (s === "true") return !0;
    if (s === "false") return !1;
    if (s === "undefined") return;
    if (s === "null") return null;
    if (s === "nan") return Number.NaN;
    if (s === "infinity") return Number.POSITIVE_INFINITY;
    if (s === "-infinity") return Number.NEGATIVE_INFINITY;
  }
  if (!UE.test(i)) {
    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
    return i;
  }
  try {
    if (RE.test(i) || FE.test(i)) {
      if (e.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(i, $E);
    }
    return JSON.parse(i);
  } catch (s) {
    if (e.strict) throw s;
    return i;
  }
}
function jE(i) {
  return !i || typeof i.then != "function" ? Promise.resolve(i) : i;
}
function Gt(i, ...e) {
  try {
    return jE(i(...e));
  } catch (t) {
    return Promise.reject(t);
  }
}
function ME(i) {
  const e = typeof i;
  return i === null || (e !== "object" && e !== "function");
}
function qE(i) {
  const e = Object.getPrototypeOf(i);
  return !e || e.isPrototypeOf(Object);
}
function Wo(i) {
  if (ME(i)) return String(i);
  if (qE(i) || Array.isArray(i)) return JSON.stringify(i);
  if (typeof i.toJSON == "function") return Wo(i.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function gp() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const wu = "base64:";
function BE(i) {
  if (typeof i == "string") return i;
  gp();
  const e = Buffer.from(i).toString("base64");
  return wu + e;
}
function HE(i) {
  return typeof i != "string" || !i.startsWith(wu)
    ? i
    : (gp(), Buffer.from(i.slice(wu.length), "base64"));
}
function _r(i) {
  return i
    ? i
        .split("?")[0]
        .replace(/[/\\]/g, ":")
        .replace(/:+/g, ":")
        .replace(/^:|:$/g, "")
    : "";
}
function zE(...i) {
  return _r(i.join(":"));
}
function Ho(i) {
  return (i = _r(i)), i ? i + ":" : "";
}
const KE = "memory",
  kE = () => {
    const i = new Map();
    return {
      name: KE,
      options: {},
      hasItem(e) {
        return i.has(e);
      },
      getItem(e) {
        return i.get(e) ?? null;
      },
      getItemRaw(e) {
        return i.get(e) ?? null;
      },
      setItem(e, t) {
        i.set(e, t);
      },
      setItemRaw(e, t) {
        i.set(e, t);
      },
      removeItem(e) {
        i.delete(e);
      },
      getKeys() {
        return Array.from(i.keys());
      },
      clear() {
        i.clear();
      },
      dispose() {
        i.clear();
      },
    };
  };
function VE(i = {}) {
  const e = {
      mounts: { "": i.driver || kE() },
      mountpoints: [""],
      watching: !1,
      watchListeners: [],
      unwatch: {},
    },
    t = (y) => {
      for (const E of e.mountpoints)
        if (y.startsWith(E))
          return {
            base: E,
            relativeKey: y.slice(E.length),
            driver: e.mounts[E],
          };
      return { base: "", relativeKey: y, driver: e.mounts[""] };
    },
    s = (y, E) =>
      e.mountpoints
        .filter((I) => I.startsWith(y) || (E && y.startsWith(I)))
        .map((I) => ({
          relativeBase: y.length > I.length ? y.slice(I.length) : void 0,
          mountpoint: I,
          driver: e.mounts[I],
        })),
    o = (y, E) => {
      if (e.watching) {
        E = _r(E);
        for (const I of e.watchListeners) I(y, E);
      }
    },
    u = async () => {
      if (!e.watching) {
        e.watching = !0;
        for (const y in e.mounts) e.unwatch[y] = await Pf(e.mounts[y], o, y);
      }
    },
    d = async () => {
      if (e.watching) {
        for (const y in e.unwatch) await e.unwatch[y]();
        (e.unwatch = {}), (e.watching = !1);
      }
    },
    f = (y, E, I) => {
      const P = new Map(),
        T = (A) => {
          let q = P.get(A.base);
          return (
            q ||
              ((q = { driver: A.driver, base: A.base, items: [] }),
              P.set(A.base, q)),
            q
          );
        };
      for (const A of y) {
        const q = typeof A == "string",
          L = _r(q ? A : A.key),
          Y = q ? void 0 : A.value,
          p = q || !A.options ? E : { ...E, ...A.options },
          D = t(L);
        T(D).items.push({
          key: L,
          value: Y,
          relativeKey: D.relativeKey,
          options: p,
        });
      }
      return Promise.all([...P.values()].map((A) => I(A))).then((A) =>
        A.flat()
      );
    },
    _ = {
      hasItem(y, E = {}) {
        y = _r(y);
        const { relativeKey: I, driver: P } = t(y);
        return Gt(P.hasItem, I, E);
      },
      getItem(y, E = {}) {
        y = _r(y);
        const { relativeKey: I, driver: P } = t(y);
        return Gt(P.getItem, I, E).then((T) => Bo(T));
      },
      getItems(y, E) {
        return f(y, E, (I) =>
          I.driver.getItems
            ? Gt(
                I.driver.getItems,
                I.items.map((P) => ({
                  key: P.relativeKey,
                  options: P.options,
                })),
                E
              ).then((P) =>
                P.map((T) => ({ key: zE(I.base, T.key), value: Bo(T.value) }))
              )
            : Promise.all(
                I.items.map((P) =>
                  Gt(I.driver.getItem, P.relativeKey, P.options).then((T) => ({
                    key: P.key,
                    value: Bo(T),
                  }))
                )
              )
        );
      },
      getItemRaw(y, E = {}) {
        y = _r(y);
        const { relativeKey: I, driver: P } = t(y);
        return P.getItemRaw
          ? Gt(P.getItemRaw, I, E)
          : Gt(P.getItem, I, E).then((T) => HE(T));
      },
      async setItem(y, E, I = {}) {
        if (E === void 0) return _.removeItem(y);
        y = _r(y);
        const { relativeKey: P, driver: T } = t(y);
        T.setItem &&
          (await Gt(T.setItem, P, Wo(E), I), T.watch || o("update", y));
      },
      async setItems(y, E) {
        await f(y, E, async (I) => {
          if (I.driver.setItems)
            return Gt(
              I.driver.setItems,
              I.items.map((P) => ({
                key: P.relativeKey,
                value: Wo(P.value),
                options: P.options,
              })),
              E
            );
          I.driver.setItem &&
            (await Promise.all(
              I.items.map((P) =>
                Gt(I.driver.setItem, P.relativeKey, Wo(P.value), P.options)
              )
            ));
        });
      },
      async setItemRaw(y, E, I = {}) {
        if (E === void 0) return _.removeItem(y, I);
        y = _r(y);
        const { relativeKey: P, driver: T } = t(y);
        if (T.setItemRaw) await Gt(T.setItemRaw, P, E, I);
        else if (T.setItem) await Gt(T.setItem, P, BE(E), I);
        else return;
        T.watch || o("update", y);
      },
      async removeItem(y, E = {}) {
        typeof E == "boolean" && (E = { removeMeta: E }), (y = _r(y));
        const { relativeKey: I, driver: P } = t(y);
        P.removeItem &&
          (await Gt(P.removeItem, I, E),
          (E.removeMeta || E.removeMata) &&
            (await Gt(P.removeItem, I + "$", E)),
          P.watch || o("remove", y));
      },
      async getMeta(y, E = {}) {
        typeof E == "boolean" && (E = { nativeOnly: E }), (y = _r(y));
        const { relativeKey: I, driver: P } = t(y),
          T = Object.create(null);
        if (
          (P.getMeta && Object.assign(T, await Gt(P.getMeta, I, E)),
          !E.nativeOnly)
        ) {
          const A = await Gt(P.getItem, I + "$", E).then((q) => Bo(q));
          A &&
            typeof A == "object" &&
            (typeof A.atime == "string" && (A.atime = new Date(A.atime)),
            typeof A.mtime == "string" && (A.mtime = new Date(A.mtime)),
            Object.assign(T, A));
        }
        return T;
      },
      setMeta(y, E, I = {}) {
        return this.setItem(y + "$", E, I);
      },
      removeMeta(y, E = {}) {
        return this.removeItem(y + "$", E);
      },
      async getKeys(y, E = {}) {
        y = Ho(y);
        const I = s(y, !0);
        let P = [];
        const T = [];
        for (const A of I) {
          const L = (await Gt(A.driver.getKeys, A.relativeBase, E))
            .map((Y) => A.mountpoint + _r(Y))
            .filter((Y) => !P.some((p) => Y.startsWith(p)));
          T.push(...L),
            (P = [
              A.mountpoint,
              ...P.filter((Y) => !Y.startsWith(A.mountpoint)),
            ]);
        }
        return y
          ? T.filter((A) => A.startsWith(y) && !A.endsWith("$"))
          : T.filter((A) => !A.endsWith("$"));
      },
      async clear(y, E = {}) {
        (y = Ho(y)),
          await Promise.all(
            s(y, !1).map(async (I) => {
              if (I.driver.clear) return Gt(I.driver.clear, I.relativeBase, E);
              if (I.driver.removeItem) {
                const P = await I.driver.getKeys(I.relativeBase || "", E);
                return Promise.all(P.map((T) => I.driver.removeItem(T, E)));
              }
            })
          );
      },
      async dispose() {
        await Promise.all(Object.values(e.mounts).map((y) => Cf(y)));
      },
      async watch(y) {
        return (
          await u(),
          e.watchListeners.push(y),
          async () => {
            (e.watchListeners = e.watchListeners.filter((E) => E !== y)),
              e.watchListeners.length === 0 && (await d());
          }
        );
      },
      async unwatch() {
        (e.watchListeners = []), await d();
      },
      mount(y, E) {
        if (((y = Ho(y)), y && e.mounts[y]))
          throw new Error(`already mounted at ${y}`);
        return (
          y &&
            (e.mountpoints.push(y),
            e.mountpoints.sort((I, P) => P.length - I.length)),
          (e.mounts[y] = E),
          e.watching &&
            Promise.resolve(Pf(E, o, y))
              .then((I) => {
                e.unwatch[y] = I;
              })
              .catch(console.error),
          _
        );
      },
      async unmount(y, E = !0) {
        (y = Ho(y)),
          !(!y || !e.mounts[y]) &&
            (e.watching &&
              y in e.unwatch &&
              (e.unwatch[y](), delete e.unwatch[y]),
            E && (await Cf(e.mounts[y])),
            (e.mountpoints = e.mountpoints.filter((I) => I !== y)),
            delete e.mounts[y]);
      },
      getMount(y = "") {
        y = _r(y) + ":";
        const E = t(y);
        return { driver: E.driver, base: E.base };
      },
      getMounts(y = "", E = {}) {
        return (
          (y = _r(y)),
          s(y, E.parents).map((P) => ({ driver: P.driver, base: P.mountpoint }))
        );
      },
    };
  return _;
}
function Pf(i, e, t) {
  return i.watch ? i.watch((s, o) => e(s, t + o)) : () => {};
}
async function Cf(i) {
  typeof i.dispose == "function" && (await Gt(i.dispose));
}
function hn(i) {
  return new Promise((e, t) => {
    (i.oncomplete = i.onsuccess = () => e(i.result)),
      (i.onabort = i.onerror = () => t(i.error));
  });
}
function yp(i, e) {
  const t = indexedDB.open(i);
  t.onupgradeneeded = () => t.result.createObjectStore(e);
  const s = hn(t);
  return (o, u) => s.then((d) => u(d.transaction(e, o).objectStore(e)));
}
let Kc;
function As() {
  return Kc || (Kc = yp("keyval-store", "keyval")), Kc;
}
function Tf(i, e = As()) {
  return e("readonly", (t) => hn(t.get(i)));
}
function WE(i, e, t = As()) {
  return t("readwrite", (s) => (s.put(e, i), hn(s.transaction)));
}
function GE(i, e = As()) {
  return e("readwrite", (t) => (t.delete(i), hn(t.transaction)));
}
function JE(i = As()) {
  return i("readwrite", (e) => (e.clear(), hn(e.transaction)));
}
function YE(i, e) {
  return (
    (i.openCursor().onsuccess = function () {
      this.result && (e(this.result), this.result.continue());
    }),
    hn(i.transaction)
  );
}
function QE(i = As()) {
  return i("readonly", (e) => {
    if (e.getAllKeys) return hn(e.getAllKeys());
    const t = [];
    return YE(e, (s) => t.push(s.key)).then(() => t);
  });
}
const XE = (i) =>
    JSON.stringify(i, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    ),
  ZE = (i) => {
    const e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      t = i.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (s, o) =>
      typeof o == "string" && o.match(/^\d+n$/)
        ? BigInt(o.substring(0, o.length - 1))
        : o
    );
  };
function mp(i) {
  if (typeof i != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof i}`);
  try {
    return ZE(i);
  } catch {
    return i;
  }
}
function vp(i) {
  return typeof i == "string" ? i : XE(i) || "";
}
const e3 = "idb-keyval";
var t3 = (i = {}) => {
  const e = i.base && i.base.length > 0 ? `${i.base}:` : "",
    t = (o) => e + o;
  let s;
  return (
    i.dbName && i.storeName && (s = yp(i.dbName, i.storeName)),
    {
      name: e3,
      options: i,
      async hasItem(o) {
        return !(typeof (await Tf(t(o), s)) > "u");
      },
      async getItem(o) {
        return (await Tf(t(o), s)) ?? null;
      },
      setItem(o, u) {
        return WE(t(o), u, s);
      },
      removeItem(o) {
        return GE(t(o), s);
      },
      getKeys() {
        return QE(s);
      },
      clear() {
        return JE(s);
      },
    }
  );
};
const r3 = "WALLET_CONNECT_V2_INDEXED_DB",
  i3 = "keyvaluestorage";
let n3 = class {
  constructor() {
    this.indexedDb = VE({ driver: t3({ dbName: r3, storeName: i3 }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(
      (e) => [e.key, e.value]
    );
  }
  async getItem(e) {
    const t = await this.indexedDb.getItem(e);
    if (t !== null) return t;
  }
  async setItem(e, t) {
    await this.indexedDb.setItem(e, vp(t));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var kc =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Go = { exports: {} };
(function () {
  let i;
  function e() {}
  (i = e),
    (i.prototype.getItem = function (t) {
      return this.hasOwnProperty(t) ? String(this[t]) : null;
    }),
    (i.prototype.setItem = function (t, s) {
      this[t] = String(s);
    }),
    (i.prototype.removeItem = function (t) {
      delete this[t];
    }),
    (i.prototype.clear = function () {
      const t = this;
      Object.keys(t).forEach(function (s) {
        (t[s] = void 0), delete t[s];
      });
    }),
    (i.prototype.key = function (t) {
      return (t = t || 0), Object.keys(this)[t];
    }),
    i.prototype.__defineGetter__("length", function () {
      return Object.keys(this).length;
    }),
    typeof kc < "u" && kc.localStorage
      ? (Go.exports = kc.localStorage)
      : typeof window < "u" && window.localStorage
      ? (Go.exports = window.localStorage)
      : (Go.exports = new e());
})();
function s3(i) {
  var e;
  return [i[0], mp((e = i[1]) != null ? e : "")];
}
let o3 = class {
  constructor() {
    this.localStorage = Go.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(s3);
  }
  async getItem(e) {
    const t = this.localStorage.getItem(e);
    if (t !== null) return mp(t);
  }
  async setItem(e, t) {
    this.localStorage.setItem(e, vp(t));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
};
const a3 = "wc_storage_version",
  Af = 1,
  c3 = async (i, e, t) => {
    const s = a3,
      o = await e.getItem(s);
    if (o && o >= Af) {
      t(e);
      return;
    }
    const u = await i.getKeys();
    if (!u.length) {
      t(e);
      return;
    }
    const d = [];
    for (; u.length; ) {
      const f = u.shift();
      if (!f) continue;
      const _ = f.toLowerCase();
      if (
        _.includes("wc@") ||
        _.includes("walletconnect") ||
        _.includes("wc_") ||
        _.includes("wallet_connect")
      ) {
        const y = await i.getItem(f);
        await e.setItem(f, y), d.push(f);
      }
    }
    await e.setItem(s, Af), t(e), u3(i, d);
  },
  u3 = async (i, e) => {
    e.length &&
      e.forEach(async (t) => {
        await i.removeItem(t);
      });
  };
let h3 = class {
  constructor() {
    (this.initialized = !1),
      (this.setInitialized = (t) => {
        (this.storage = t), (this.initialized = !0);
      });
    const e = new o3();
    this.storage = e;
    try {
      const t = new n3();
      c3(e, t, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(e) {
    return await this.initialize(), this.storage.getItem(e);
  }
  async setItem(e, t) {
    return await this.initialize(), this.storage.setItem(e, t);
  }
  async removeItem(e) {
    return await this.initialize(), this.storage.removeItem(e);
  }
  async initialize() {
    this.initialized ||
      (await new Promise((e) => {
        const t = setInterval(() => {
          this.initialized && (clearInterval(t), e());
        }, 20);
      }));
  }
};
var Kn = {},
  ms = {},
  Vc = {},
  vs = {};
let ln = class {};
const l3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, IEvents: ln },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  f3 = Au(l3);
var Nf;
function d3() {
  if (Nf) return vs;
  (Nf = 1),
    Object.defineProperty(vs, "__esModule", { value: !0 }),
    (vs.IHeartBeat = void 0);
  const i = f3;
  class e extends i.IEvents {
    constructor(s) {
      super();
    }
  }
  return (vs.IHeartBeat = e), vs;
}
var Rf;
function wp() {
  return (
    Rf ||
      ((Rf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          oi.__exportStar(d3(), i);
      })(Vc)),
    Vc
  );
}
var Wc = {},
  on = {},
  Ff;
function p3() {
  if (Ff) return on;
  (Ff = 1),
    Object.defineProperty(on, "__esModule", { value: !0 }),
    (on.HEARTBEAT_EVENTS = on.HEARTBEAT_INTERVAL = void 0);
  const i = me;
  return (
    (on.HEARTBEAT_INTERVAL = i.FIVE_SECONDS),
    (on.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" }),
    on
  );
}
var Uf;
function _p() {
  return (
    Uf ||
      ((Uf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          oi.__exportStar(p3(), i);
      })(Wc)),
    Wc
  );
}
var $f;
function g3() {
  if ($f) return ms;
  ($f = 1),
    Object.defineProperty(ms, "__esModule", { value: !0 }),
    (ms.HeartBeat = void 0);
  const i = oi,
    e = Hr,
    t = me,
    s = wp(),
    o = _p();
  class u extends s.IHeartBeat {
    constructor(f) {
      super(f),
        (this.events = new e.EventEmitter()),
        (this.interval = o.HEARTBEAT_INTERVAL),
        (this.interval = f?.interval || o.HEARTBEAT_INTERVAL);
    }
    static init(f) {
      return i.__awaiter(this, void 0, void 0, function* () {
        const _ = new u(f);
        return yield _.init(), _;
      });
    }
    init() {
      return i.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(f, _) {
      this.events.on(f, _);
    }
    once(f, _) {
      this.events.once(f, _);
    }
    off(f, _) {
      this.events.off(f, _);
    }
    removeListener(f, _) {
      this.events.removeListener(f, _);
    }
    initialize() {
      return i.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(
          () => this.pulse(),
          t.toMiliseconds(this.interval)
        );
      });
    }
    pulse() {
      this.events.emit(o.HEARTBEAT_EVENTS.pulse);
    }
  }
  return (ms.HeartBeat = u), ms;
}
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  const e = oi;
  e.__exportStar(g3(), i), e.__exportStar(wp(), i), e.__exportStar(_p(), i);
})(Kn);
var Ye = {},
  Gc,
  Lf;
function y3() {
  if (Lf) return Gc;
  Lf = 1;
  function i(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return '"[Circular]"';
    }
  }
  Gc = e;
  function e(t, s, o) {
    var u = (o && o.stringify) || i,
      d = 1;
    if (typeof t == "object" && t !== null) {
      var f = s.length + d;
      if (f === 1) return t;
      var _ = new Array(f);
      _[0] = u(t);
      for (var y = 1; y < f; y++) _[y] = u(s[y]);
      return _.join(" ");
    }
    if (typeof t != "string") return t;
    var E = s.length;
    if (E === 0) return t;
    for (
      var I = "", P = 1 - d, T = -1, A = (t && t.length) || 0, q = 0;
      q < A;

    ) {
      if (t.charCodeAt(q) === 37 && q + 1 < A) {
        switch (((T = T > -1 ? T : 0), t.charCodeAt(q + 1))) {
          case 100:
          case 102:
            if (P >= E || s[P] == null) break;
            T < q && (I += t.slice(T, q)),
              (I += Number(s[P])),
              (T = q + 2),
              q++;
            break;
          case 105:
            if (P >= E || s[P] == null) break;
            T < q && (I += t.slice(T, q)),
              (I += Math.floor(Number(s[P]))),
              (T = q + 2),
              q++;
            break;
          case 79:
          case 111:
          case 106:
            if (P >= E || s[P] === void 0) break;
            T < q && (I += t.slice(T, q));
            var L = typeof s[P];
            if (L === "string") {
              (I += "'" + s[P] + "'"), (T = q + 2), q++;
              break;
            }
            if (L === "function") {
              (I += s[P].name || "<anonymous>"), (T = q + 2), q++;
              break;
            }
            (I += u(s[P])), (T = q + 2), q++;
            break;
          case 115:
            if (P >= E) break;
            T < q && (I += t.slice(T, q)),
              (I += String(s[P])),
              (T = q + 2),
              q++;
            break;
          case 37:
            T < q && (I += t.slice(T, q)), (I += "%"), (T = q + 2), q++, P--;
            break;
        }
        ++P;
      }
      ++q;
    }
    return T === -1 ? t : (T < A && (I += t.slice(T)), I);
  }
  return Gc;
}
var Jc, jf;
function m3() {
  if (jf) return Jc;
  jf = 1;
  const i = y3();
  Jc = o;
  const e = b().console || {},
    t = {
      mapHttpRequest: A,
      mapHttpResponse: A,
      wrapRequestSerializer: q,
      wrapResponseSerializer: q,
      wrapErrorSerializer: q,
      req: A,
      res: A,
      err: P,
    };
  function s(g, c) {
    return Array.isArray(g)
      ? g.filter(function (K) {
          return K !== "!stdSerializers.err";
        })
      : g === !0
      ? Object.keys(c)
      : !1;
  }
  function o(g) {
    (g = g || {}), (g.browser = g.browser || {});
    const c = g.browser.transmit;
    if (c && typeof c.send != "function")
      throw Error("pino: transmit option must have a send function");
    const w = g.browser.write || e;
    g.browser.write && (g.browser.asObject = !0);
    const K = g.serializers || {},
      G = s(g.browser.serialize, K);
    let se = g.browser.serialize;
    Array.isArray(g.browser.serialize) &&
      g.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
      (se = !1);
    const ue = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof w == "function" &&
      (w.error = w.fatal = w.warn = w.info = w.debug = w.trace = w),
      g.enabled === !1 && (g.level = "silent");
    const de = g.level || "info",
      x = Object.create(w);
    x.log || (x.log = L),
      Object.defineProperty(x, "levelVal", { get: te }),
      Object.defineProperty(x, "level", { get: X, set: V });
    const R = {
      transmit: c,
      serialize: G,
      asObject: g.browser.asObject,
      levels: ue,
      timestamp: T(g),
    };
    (x.levels = o.levels),
      (x.level = de),
      (x.setMaxListeners =
        x.getMaxListeners =
        x.emit =
        x.addListener =
        x.on =
        x.prependListener =
        x.once =
        x.prependOnceListener =
        x.removeListener =
        x.removeAllListeners =
        x.listeners =
        x.listenerCount =
        x.eventNames =
        x.write =
        x.flush =
          L),
      (x.serializers = K),
      (x._serialize = G),
      (x._stdErrSerialize = se),
      (x.child = W),
      c && (x._logEvent = I());
    function te() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function X() {
      return this._level;
    }
    function V(Q) {
      if (Q !== "silent" && !this.levels.values[Q])
        throw Error("unknown level " + Q);
      (this._level = Q),
        u(R, x, "error", "log"),
        u(R, x, "fatal", "error"),
        u(R, x, "warn", "error"),
        u(R, x, "info", "log"),
        u(R, x, "debug", "log"),
        u(R, x, "trace", "log");
    }
    function W(Q, ie) {
      if (!Q) throw new Error("missing bindings for child Pino");
      (ie = ie || {}), G && Q.serializers && (ie.serializers = Q.serializers);
      const _e = ie.serializers;
      if (G && _e) {
        var oe = Object.assign({}, K, _e),
          be = g.browser.serialize === !0 ? Object.keys(oe) : G;
        delete Q.serializers, _([Q], be, oe, this._stdErrSerialize);
      }
      function le(ve) {
        (this._childLevel = (ve._childLevel | 0) + 1),
          (this.error = y(ve, Q, "error")),
          (this.fatal = y(ve, Q, "fatal")),
          (this.warn = y(ve, Q, "warn")),
          (this.info = y(ve, Q, "info")),
          (this.debug = y(ve, Q, "debug")),
          (this.trace = y(ve, Q, "trace")),
          oe && ((this.serializers = oe), (this._serialize = be)),
          c && (this._logEvent = I([].concat(ve._logEvent.bindings, Q)));
      }
      return (le.prototype = this), new le(this);
    }
    return x;
  }
  (o.levels = {
    values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal",
    },
  }),
    (o.stdSerializers = t),
    (o.stdTimeFunctions = Object.assign(
      {},
      { nullTime: Y, epochTime: p, unixTime: D, isoTime: v }
    ));
  function u(g, c, w, K) {
    const G = Object.getPrototypeOf(c);
    (c[w] =
      c.levelVal > c.levels.values[w] ? L : G[w] ? G[w] : e[w] || e[K] || L),
      d(g, c, w);
  }
  function d(g, c, w) {
    (!g.transmit && c[w] === L) ||
      (c[w] = (function (K) {
        return function () {
          const se = g.timestamp(),
            ue = new Array(arguments.length),
            de =
              Object.getPrototypeOf && Object.getPrototypeOf(this) === e
                ? e
                : this;
          for (var x = 0; x < ue.length; x++) ue[x] = arguments[x];
          if (
            (g.serialize &&
              !g.asObject &&
              _(ue, this._serialize, this.serializers, this._stdErrSerialize),
            g.asObject ? K.call(de, f(this, w, ue, se)) : K.apply(de, ue),
            g.transmit)
          ) {
            const R = g.transmit.level || c.level,
              te = o.levels.values[R],
              X = o.levels.values[w];
            if (X < te) return;
            E(
              this,
              {
                ts: se,
                methodLevel: w,
                methodValue: X,
                transmitLevel: R,
                transmitValue: o.levels.values[g.transmit.level || c.level],
                send: g.transmit.send,
                val: c.levelVal,
              },
              ue
            );
          }
        };
      })(c[w]));
  }
  function f(g, c, w, K) {
    g._serialize && _(w, g._serialize, g.serializers, g._stdErrSerialize);
    const G = w.slice();
    let se = G[0];
    const ue = {};
    K && (ue.time = K), (ue.level = o.levels.values[c]);
    let de = (g._childLevel | 0) + 1;
    if ((de < 1 && (de = 1), se !== null && typeof se == "object")) {
      for (; de-- && typeof G[0] == "object"; ) Object.assign(ue, G.shift());
      se = G.length ? i(G.shift(), G) : void 0;
    } else typeof se == "string" && (se = i(G.shift(), G));
    return se !== void 0 && (ue.msg = se), ue;
  }
  function _(g, c, w, K) {
    for (const G in g)
      if (K && g[G] instanceof Error) g[G] = o.stdSerializers.err(g[G]);
      else if (typeof g[G] == "object" && !Array.isArray(g[G]))
        for (const se in g[G])
          c && c.indexOf(se) > -1 && se in w && (g[G][se] = w[se](g[G][se]));
  }
  function y(g, c, w) {
    return function () {
      const K = new Array(1 + arguments.length);
      K[0] = c;
      for (var G = 1; G < K.length; G++) K[G] = arguments[G - 1];
      return g[w].apply(this, K);
    };
  }
  function E(g, c, w) {
    const K = c.send,
      G = c.ts,
      se = c.methodLevel,
      ue = c.methodValue,
      de = c.val,
      x = g._logEvent.bindings;
    _(
      w,
      g._serialize || Object.keys(g.serializers),
      g.serializers,
      g._stdErrSerialize === void 0 ? !0 : g._stdErrSerialize
    ),
      (g._logEvent.ts = G),
      (g._logEvent.messages = w.filter(function (R) {
        return x.indexOf(R) === -1;
      })),
      (g._logEvent.level.label = se),
      (g._logEvent.level.value = ue),
      K(se, g._logEvent, de),
      (g._logEvent = I(x));
  }
  function I(g) {
    return {
      ts: 0,
      messages: [],
      bindings: g || [],
      level: { label: "", value: 0 },
    };
  }
  function P(g) {
    const c = { type: g.constructor.name, msg: g.message, stack: g.stack };
    for (const w in g) c[w] === void 0 && (c[w] = g[w]);
    return c;
  }
  function T(g) {
    return typeof g.timestamp == "function"
      ? g.timestamp
      : g.timestamp === !1
      ? Y
      : p;
  }
  function A() {
    return {};
  }
  function q(g) {
    return g;
  }
  function L() {}
  function Y() {
    return !1;
  }
  function p() {
    return Date.now();
  }
  function D() {
    return Math.round(Date.now() / 1e3);
  }
  function v() {
    return new Date(Date.now()).toISOString();
  }
  function b() {
    function g(c) {
      return typeof c < "u" && c;
    }
    try {
      return (
        typeof globalThis < "u" ||
          Object.defineProperty(Object.prototype, "globalThis", {
            get: function () {
              return (
                delete Object.prototype.globalThis, (this.globalThis = this)
              );
            },
            configurable: !0,
          }),
        globalThis
      );
    } catch {
      return g(self) || g(window) || g(this) || {};
    }
  }
  return Jc;
}
var an = {},
  Mf;
function bp() {
  return (
    Mf ||
      ((Mf = 1),
      Object.defineProperty(an, "__esModule", { value: !0 }),
      (an.PINO_CUSTOM_CONTEXT_KEY = an.PINO_LOGGER_DEFAULTS = void 0),
      (an.PINO_LOGGER_DEFAULTS = { level: "info" }),
      (an.PINO_CUSTOM_CONTEXT_KEY = "custom_context")),
    an
  );
}
var ur = {},
  qf;
function v3() {
  if (qf) return ur;
  (qf = 1),
    Object.defineProperty(ur, "__esModule", { value: !0 }),
    (ur.generateChildLogger =
      ur.formatChildLoggerContext =
      ur.getLoggerContext =
      ur.setBrowserLoggerContext =
      ur.getBrowserLoggerContext =
      ur.getDefaultLoggerOptions =
        void 0);
  const i = bp();
  function e(f) {
    return Object.assign(Object.assign({}, f), {
      level: f?.level || i.PINO_LOGGER_DEFAULTS.level,
    });
  }
  ur.getDefaultLoggerOptions = e;
  function t(f, _ = i.PINO_CUSTOM_CONTEXT_KEY) {
    return f[_] || "";
  }
  ur.getBrowserLoggerContext = t;
  function s(f, _, y = i.PINO_CUSTOM_CONTEXT_KEY) {
    return (f[y] = _), f;
  }
  ur.setBrowserLoggerContext = s;
  function o(f, _ = i.PINO_CUSTOM_CONTEXT_KEY) {
    let y = "";
    return (
      typeof f.bindings > "u"
        ? (y = t(f, _))
        : (y = f.bindings().context || ""),
      y
    );
  }
  ur.getLoggerContext = o;
  function u(f, _, y = i.PINO_CUSTOM_CONTEXT_KEY) {
    const E = o(f, y);
    return E.trim() ? `${E}/${_}` : _;
  }
  ur.formatChildLoggerContext = u;
  function d(f, _, y = i.PINO_CUSTOM_CONTEXT_KEY) {
    const E = u(f, _, y),
      I = f.child({ context: E });
    return s(I, E, y);
  }
  return (ur.generateChildLogger = d), ur;
}
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 }), (i.pino = void 0);
  const e = oi,
    t = e.__importDefault(m3());
  Object.defineProperty(i, "pino", {
    enumerable: !0,
    get: function () {
      return t.default;
    },
  }),
    e.__exportStar(bp(), i),
    e.__exportStar(v3(), i);
})(Ye);
class w3 extends ln {
  constructor(e) {
    super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
  }
}
let _3 = class extends ln {
    constructor(e, t) {
      super(), (this.core = e), (this.logger = t), (this.records = new Map());
    }
  },
  b3 = class {
    constructor(e, t) {
      (this.logger = e), (this.core = t);
    }
  },
  E3 = class extends ln {
    constructor(e, t) {
      super(), (this.relayer = e), (this.logger = t);
    }
  },
  D3 = class extends ln {
    constructor(e) {
      super();
    }
  },
  S3 = class {
    constructor(e, t, s, o) {
      (this.core = e), (this.logger = t), (this.name = s);
    }
  };
class I3 extends ln {
  constructor(e, t) {
    super(), (this.relayer = e), (this.logger = t);
  }
}
let O3 = class extends ln {
    constructor(e, t) {
      super(), (this.core = e), (this.logger = t);
    }
  },
  x3 = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  },
  P3 = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  },
  C3 = class {
    constructor(e) {
      (this.opts = e), (this.protocol = "wc"), (this.version = 2);
    }
  },
  T3 = class {
    constructor(e) {
      this.client = e;
    }
  };
const A3 = (i) =>
    JSON.stringify(i, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    ),
  N3 = (i) => {
    const e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      t = i.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (s, o) =>
      typeof o == "string" && o.match(/^\d+n$/)
        ? BigInt(o.substring(0, o.length - 1))
        : o
    );
  };
function R3(i) {
  if (typeof i != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof i}`);
  try {
    return N3(i);
  } catch {
    return i;
  }
}
function F3(i) {
  return typeof i == "string" ? i : A3(i) || "";
}
var zu = {},
  Ep = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = $e,
    t = Ar;
  (i.DIGEST_LENGTH = 64), (i.BLOCK_SIZE = 128);
  var s = (function () {
    function f() {
      (this.digestLength = i.DIGEST_LENGTH),
        (this.blockSize = i.BLOCK_SIZE),
        (this._stateHi = new Int32Array(8)),
        (this._stateLo = new Int32Array(8)),
        (this._tempHi = new Int32Array(16)),
        (this._tempLo = new Int32Array(16)),
        (this._buffer = new Uint8Array(256)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (f.prototype._initState = function () {
        (this._stateHi[0] = 1779033703),
          (this._stateHi[1] = 3144134277),
          (this._stateHi[2] = 1013904242),
          (this._stateHi[3] = 2773480762),
          (this._stateHi[4] = 1359893119),
          (this._stateHi[5] = 2600822924),
          (this._stateHi[6] = 528734635),
          (this._stateHi[7] = 1541459225),
          (this._stateLo[0] = 4089235720),
          (this._stateLo[1] = 2227873595),
          (this._stateLo[2] = 4271175723),
          (this._stateLo[3] = 1595750129),
          (this._stateLo[4] = 2917565137),
          (this._stateLo[5] = 725511199),
          (this._stateLo[6] = 4215389547),
          (this._stateLo[7] = 327033209);
      }),
      (f.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (f.prototype.clean = function () {
        t.wipe(this._buffer),
          t.wipe(this._tempHi),
          t.wipe(this._tempLo),
          this.reset();
      }),
      (f.prototype.update = function (_, y) {
        if ((y === void 0 && (y = _.length), this._finished))
          throw new Error("SHA512: can't update because hash was finished.");
        var E = 0;
        if (((this._bytesHashed += y), this._bufferLength > 0)) {
          for (; this._bufferLength < i.BLOCK_SIZE && y > 0; )
            (this._buffer[this._bufferLength++] = _[E++]), y--;
          this._bufferLength === this.blockSize &&
            (u(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              this.blockSize
            ),
            (this._bufferLength = 0));
        }
        for (
          y >= this.blockSize &&
          ((E = u(
            this._tempHi,
            this._tempLo,
            this._stateHi,
            this._stateLo,
            _,
            E,
            y
          )),
          (y %= this.blockSize));
          y > 0;

        )
          (this._buffer[this._bufferLength++] = _[E++]), y--;
        return this;
      }),
      (f.prototype.finish = function (_) {
        if (!this._finished) {
          var y = this._bytesHashed,
            E = this._bufferLength,
            I = (y / 536870912) | 0,
            P = y << 3,
            T = y % 128 < 112 ? 128 : 256;
          this._buffer[E] = 128;
          for (var A = E + 1; A < T - 8; A++) this._buffer[A] = 0;
          e.writeUint32BE(I, this._buffer, T - 8),
            e.writeUint32BE(P, this._buffer, T - 4),
            u(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              T
            ),
            (this._finished = !0);
        }
        for (var A = 0; A < this.digestLength / 8; A++)
          e.writeUint32BE(this._stateHi[A], _, A * 8),
            e.writeUint32BE(this._stateLo[A], _, A * 8 + 4);
        return this;
      }),
      (f.prototype.digest = function () {
        var _ = new Uint8Array(this.digestLength);
        return this.finish(_), _;
      }),
      (f.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (f.prototype.restoreState = function (_) {
        return (
          this._stateHi.set(_.stateHi),
          this._stateLo.set(_.stateLo),
          (this._bufferLength = _.bufferLength),
          _.buffer && this._buffer.set(_.buffer),
          (this._bytesHashed = _.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (f.prototype.cleanSavedState = function (_) {
        t.wipe(_.stateHi),
          t.wipe(_.stateLo),
          _.buffer && t.wipe(_.buffer),
          (_.bufferLength = 0),
          (_.bytesHashed = 0);
      }),
      f
    );
  })();
  i.SHA512 = s;
  var o = new Int32Array([
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ]);
  function u(f, _, y, E, I, P, T) {
    for (
      var A = y[0],
        q = y[1],
        L = y[2],
        Y = y[3],
        p = y[4],
        D = y[5],
        v = y[6],
        b = y[7],
        g = E[0],
        c = E[1],
        w = E[2],
        K = E[3],
        G = E[4],
        se = E[5],
        ue = E[6],
        de = E[7],
        x,
        R,
        te,
        X,
        V,
        W,
        Q,
        ie;
      T >= 128;

    ) {
      for (var _e = 0; _e < 16; _e++) {
        var oe = 8 * _e + P;
        (f[_e] = e.readUint32BE(I, oe)), (_[_e] = e.readUint32BE(I, oe + 4));
      }
      for (var _e = 0; _e < 80; _e++) {
        var be = A,
          le = q,
          ve = L,
          z = Y,
          H = p,
          $ = D,
          l = v,
          F = b,
          ae = g,
          fe = c,
          Ie = w,
          He = K,
          ke = G,
          Le = se,
          yt = ue,
          mt = de;
        if (
          ((x = b),
          (R = de),
          (V = R & 65535),
          (W = R >>> 16),
          (Q = x & 65535),
          (ie = x >>> 16),
          (x =
            ((p >>> 14) | (G << (32 - 14))) ^
            ((p >>> 18) | (G << (32 - 18))) ^
            ((G >>> (41 - 32)) | (p << (32 - (41 - 32))))),
          (R =
            ((G >>> 14) | (p << (32 - 14))) ^
            ((G >>> 18) | (p << (32 - 18))) ^
            ((p >>> (41 - 32)) | (G << (32 - (41 - 32))))),
          (V += R & 65535),
          (W += R >>> 16),
          (Q += x & 65535),
          (ie += x >>> 16),
          (x = (p & D) ^ (~p & v)),
          (R = (G & se) ^ (~G & ue)),
          (V += R & 65535),
          (W += R >>> 16),
          (Q += x & 65535),
          (ie += x >>> 16),
          (x = o[_e * 2]),
          (R = o[_e * 2 + 1]),
          (V += R & 65535),
          (W += R >>> 16),
          (Q += x & 65535),
          (ie += x >>> 16),
          (x = f[_e % 16]),
          (R = _[_e % 16]),
          (V += R & 65535),
          (W += R >>> 16),
          (Q += x & 65535),
          (ie += x >>> 16),
          (W += V >>> 16),
          (Q += W >>> 16),
          (ie += Q >>> 16),
          (te = (Q & 65535) | (ie << 16)),
          (X = (V & 65535) | (W << 16)),
          (x = te),
          (R = X),
          (V = R & 65535),
          (W = R >>> 16),
          (Q = x & 65535),
          (ie = x >>> 16),
          (x =
            ((A >>> 28) | (g << (32 - 28))) ^
            ((g >>> (34 - 32)) | (A << (32 - (34 - 32)))) ^
            ((g >>> (39 - 32)) | (A << (32 - (39 - 32))))),
          (R =
            ((g >>> 28) | (A << (32 - 28))) ^
            ((A >>> (34 - 32)) | (g << (32 - (34 - 32)))) ^
            ((A >>> (39 - 32)) | (g << (32 - (39 - 32))))),
          (V += R & 65535),
          (W += R >>> 16),
          (Q += x & 65535),
          (ie += x >>> 16),
          (x = (A & q) ^ (A & L) ^ (q & L)),
          (R = (g & c) ^ (g & w) ^ (c & w)),
          (V += R & 65535),
          (W += R >>> 16),
          (Q += x & 65535),
          (ie += x >>> 16),
          (W += V >>> 16),
          (Q += W >>> 16),
          (ie += Q >>> 16),
          (F = (Q & 65535) | (ie << 16)),
          (mt = (V & 65535) | (W << 16)),
          (x = z),
          (R = He),
          (V = R & 65535),
          (W = R >>> 16),
          (Q = x & 65535),
          (ie = x >>> 16),
          (x = te),
          (R = X),
          (V += R & 65535),
          (W += R >>> 16),
          (Q += x & 65535),
          (ie += x >>> 16),
          (W += V >>> 16),
          (Q += W >>> 16),
          (ie += Q >>> 16),
          (z = (Q & 65535) | (ie << 16)),
          (He = (V & 65535) | (W << 16)),
          (q = be),
          (L = le),
          (Y = ve),
          (p = z),
          (D = H),
          (v = $),
          (b = l),
          (A = F),
          (c = ae),
          (w = fe),
          (K = Ie),
          (G = He),
          (se = ke),
          (ue = Le),
          (de = yt),
          (g = mt),
          _e % 16 === 15)
        )
          for (var oe = 0; oe < 16; oe++)
            (x = f[oe]),
              (R = _[oe]),
              (V = R & 65535),
              (W = R >>> 16),
              (Q = x & 65535),
              (ie = x >>> 16),
              (x = f[(oe + 9) % 16]),
              (R = _[(oe + 9) % 16]),
              (V += R & 65535),
              (W += R >>> 16),
              (Q += x & 65535),
              (ie += x >>> 16),
              (te = f[(oe + 1) % 16]),
              (X = _[(oe + 1) % 16]),
              (x =
                ((te >>> 1) | (X << (32 - 1))) ^
                ((te >>> 8) | (X << (32 - 8))) ^
                (te >>> 7)),
              (R =
                ((X >>> 1) | (te << (32 - 1))) ^
                ((X >>> 8) | (te << (32 - 8))) ^
                ((X >>> 7) | (te << (32 - 7)))),
              (V += R & 65535),
              (W += R >>> 16),
              (Q += x & 65535),
              (ie += x >>> 16),
              (te = f[(oe + 14) % 16]),
              (X = _[(oe + 14) % 16]),
              (x =
                ((te >>> 19) | (X << (32 - 19))) ^
                ((X >>> (61 - 32)) | (te << (32 - (61 - 32)))) ^
                (te >>> 6)),
              (R =
                ((X >>> 19) | (te << (32 - 19))) ^
                ((te >>> (61 - 32)) | (X << (32 - (61 - 32)))) ^
                ((X >>> 6) | (te << (32 - 6)))),
              (V += R & 65535),
              (W += R >>> 16),
              (Q += x & 65535),
              (ie += x >>> 16),
              (W += V >>> 16),
              (Q += W >>> 16),
              (ie += Q >>> 16),
              (f[oe] = (Q & 65535) | (ie << 16)),
              (_[oe] = (V & 65535) | (W << 16));
      }
      (x = A),
        (R = g),
        (V = R & 65535),
        (W = R >>> 16),
        (Q = x & 65535),
        (ie = x >>> 16),
        (x = y[0]),
        (R = E[0]),
        (V += R & 65535),
        (W += R >>> 16),
        (Q += x & 65535),
        (ie += x >>> 16),
        (W += V >>> 16),
        (Q += W >>> 16),
        (ie += Q >>> 16),
        (y[0] = A = (Q & 65535) | (ie << 16)),
        (E[0] = g = (V & 65535) | (W << 16)),
        (x = q),
        (R = c),
        (V = R & 65535),
        (W = R >>> 16),
        (Q = x & 65535),
        (ie = x >>> 16),
        (x = y[1]),
        (R = E[1]),
        (V += R & 65535),
        (W += R >>> 16),
        (Q += x & 65535),
        (ie += x >>> 16),
        (W += V >>> 16),
        (Q += W >>> 16),
        (ie += Q >>> 16),
        (y[1] = q = (Q & 65535) | (ie << 16)),
        (E[1] = c = (V & 65535) | (W << 16)),
        (x = L),
        (R = w),
        (V = R & 65535),
        (W = R >>> 16),
        (Q = x & 65535),
        (ie = x >>> 16),
        (x = y[2]),
        (R = E[2]),
        (V += R & 65535),
        (W += R >>> 16),
        (Q += x & 65535),
        (ie += x >>> 16),
        (W += V >>> 16),
        (Q += W >>> 16),
        (ie += Q >>> 16),
        (y[2] = L = (Q & 65535) | (ie << 16)),
        (E[2] = w = (V & 65535) | (W << 16)),
        (x = Y),
        (R = K),
        (V = R & 65535),
        (W = R >>> 16),
        (Q = x & 65535),
        (ie = x >>> 16),
        (x = y[3]),
        (R = E[3]),
        (V += R & 65535),
        (W += R >>> 16),
        (Q += x & 65535),
        (ie += x >>> 16),
        (W += V >>> 16),
        (Q += W >>> 16),
        (ie += Q >>> 16),
        (y[3] = Y = (Q & 65535) | (ie << 16)),
        (E[3] = K = (V & 65535) | (W << 16)),
        (x = p),
        (R = G),
        (V = R & 65535),
        (W = R >>> 16),
        (Q = x & 65535),
        (ie = x >>> 16),
        (x = y[4]),
        (R = E[4]),
        (V += R & 65535),
        (W += R >>> 16),
        (Q += x & 65535),
        (ie += x >>> 16),
        (W += V >>> 16),
        (Q += W >>> 16),
        (ie += Q >>> 16),
        (y[4] = p = (Q & 65535) | (ie << 16)),
        (E[4] = G = (V & 65535) | (W << 16)),
        (x = D),
        (R = se),
        (V = R & 65535),
        (W = R >>> 16),
        (Q = x & 65535),
        (ie = x >>> 16),
        (x = y[5]),
        (R = E[5]),
        (V += R & 65535),
        (W += R >>> 16),
        (Q += x & 65535),
        (ie += x >>> 16),
        (W += V >>> 16),
        (Q += W >>> 16),
        (ie += Q >>> 16),
        (y[5] = D = (Q & 65535) | (ie << 16)),
        (E[5] = se = (V & 65535) | (W << 16)),
        (x = v),
        (R = ue),
        (V = R & 65535),
        (W = R >>> 16),
        (Q = x & 65535),
        (ie = x >>> 16),
        (x = y[6]),
        (R = E[6]),
        (V += R & 65535),
        (W += R >>> 16),
        (Q += x & 65535),
        (ie += x >>> 16),
        (W += V >>> 16),
        (Q += W >>> 16),
        (ie += Q >>> 16),
        (y[6] = v = (Q & 65535) | (ie << 16)),
        (E[6] = ue = (V & 65535) | (W << 16)),
        (x = b),
        (R = de),
        (V = R & 65535),
        (W = R >>> 16),
        (Q = x & 65535),
        (ie = x >>> 16),
        (x = y[7]),
        (R = E[7]),
        (V += R & 65535),
        (W += R >>> 16),
        (Q += x & 65535),
        (ie += x >>> 16),
        (W += V >>> 16),
        (Q += W >>> 16),
        (ie += Q >>> 16),
        (y[7] = b = (Q & 65535) | (ie << 16)),
        (E[7] = de = (V & 65535) | (W << 16)),
        (P += 128),
        (T -= 128);
    }
    return P;
  }
  function d(f) {
    var _ = new s();
    _.update(f);
    var y = _.digest();
    return _.clean(), y;
  }
  i.hash = d;
})(Ep);
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 }),
    (i.convertSecretKeyToX25519 =
      i.convertPublicKeyToX25519 =
      i.verify =
      i.sign =
      i.extractPublicKeyFromSecretKey =
      i.generateKeyPair =
      i.generateKeyPairFromSeed =
      i.SEED_LENGTH =
      i.SECRET_KEY_LENGTH =
      i.PUBLIC_KEY_LENGTH =
      i.SIGNATURE_LENGTH =
        void 0);
  const e = Hn,
    t = Ep,
    s = Ar;
  (i.SIGNATURE_LENGTH = 64),
    (i.PUBLIC_KEY_LENGTH = 32),
    (i.SECRET_KEY_LENGTH = 64),
    (i.SEED_LENGTH = 32);
  function o(z) {
    const H = new Float64Array(16);
    if (z) for (let $ = 0; $ < z.length; $++) H[$] = z[$];
    return H;
  }
  const u = new Uint8Array(32);
  u[0] = 9;
  const d = o(),
    f = o([1]),
    _ = o([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
      36039, 65139, 11119, 27886, 20995,
    ]),
    y = o([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
      6542, 64743, 22239, 55772, 9222,
    ]),
    E = o([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
      57905, 49316, 21502, 52590, 14035, 8553,
    ]),
    I = o([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214, 26214, 26214, 26214,
    ]),
    P = o([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
      11085, 57099, 20417, 9344, 11139,
    ]);
  function T(z, H) {
    for (let $ = 0; $ < 16; $++) z[$] = H[$] | 0;
  }
  function A(z) {
    let H = 1;
    for (let $ = 0; $ < 16; $++) {
      let l = z[$] + H + 65535;
      (H = Math.floor(l / 65536)), (z[$] = l - H * 65536);
    }
    z[0] += H - 1 + 37 * (H - 1);
  }
  function q(z, H, $) {
    const l = ~($ - 1);
    for (let F = 0; F < 16; F++) {
      const ae = l & (z[F] ^ H[F]);
      (z[F] ^= ae), (H[F] ^= ae);
    }
  }
  function L(z, H) {
    const $ = o(),
      l = o();
    for (let F = 0; F < 16; F++) l[F] = H[F];
    A(l), A(l), A(l);
    for (let F = 0; F < 2; F++) {
      $[0] = l[0] - 65517;
      for (let fe = 1; fe < 15; fe++)
        ($[fe] = l[fe] - 65535 - (($[fe - 1] >> 16) & 1)), ($[fe - 1] &= 65535);
      $[15] = l[15] - 32767 - (($[14] >> 16) & 1);
      const ae = ($[15] >> 16) & 1;
      ($[14] &= 65535), q(l, $, 1 - ae);
    }
    for (let F = 0; F < 16; F++)
      (z[2 * F] = l[F] & 255), (z[2 * F + 1] = l[F] >> 8);
  }
  function Y(z, H) {
    let $ = 0;
    for (let l = 0; l < 32; l++) $ |= z[l] ^ H[l];
    return (1 & (($ - 1) >>> 8)) - 1;
  }
  function p(z, H) {
    const $ = new Uint8Array(32),
      l = new Uint8Array(32);
    return L($, z), L(l, H), Y($, l);
  }
  function D(z) {
    const H = new Uint8Array(32);
    return L(H, z), H[0] & 1;
  }
  function v(z, H) {
    for (let $ = 0; $ < 16; $++) z[$] = H[2 * $] + (H[2 * $ + 1] << 8);
    z[15] &= 32767;
  }
  function b(z, H, $) {
    for (let l = 0; l < 16; l++) z[l] = H[l] + $[l];
  }
  function g(z, H, $) {
    for (let l = 0; l < 16; l++) z[l] = H[l] - $[l];
  }
  function c(z, H, $) {
    let l,
      F,
      ae = 0,
      fe = 0,
      Ie = 0,
      He = 0,
      ke = 0,
      Le = 0,
      yt = 0,
      mt = 0,
      Me = 0,
      Oe = 0,
      Re = 0,
      Fe = 0,
      qe = 0,
      Pe = 0,
      Ue = 0,
      Se = 0,
      Ce = 0,
      ze = 0,
      xe = 0,
      Ve = 0,
      Ge = 0,
      et = 0,
      tt = 0,
      Qe = 0,
      ir = 0,
      pr = 0,
      Xr = 0,
      nr = 0,
      ai = 0,
      xi = 0,
      zi = 0,
      St = $[0],
      vt = $[1],
      It = $[2],
      Ot = $[3],
      Et = $[4],
      wt = $[5],
      Lt = $[6],
      jt = $[7],
      xt = $[8],
      Mt = $[9],
      Pt = $[10],
      At = $[11],
      Ct = $[12],
      ht = $[13],
      qt = $[14],
      Bt = $[15];
    (l = H[0]),
      (ae += l * St),
      (fe += l * vt),
      (Ie += l * It),
      (He += l * Ot),
      (ke += l * Et),
      (Le += l * wt),
      (yt += l * Lt),
      (mt += l * jt),
      (Me += l * xt),
      (Oe += l * Mt),
      (Re += l * Pt),
      (Fe += l * At),
      (qe += l * Ct),
      (Pe += l * ht),
      (Ue += l * qt),
      (Se += l * Bt),
      (l = H[1]),
      (fe += l * St),
      (Ie += l * vt),
      (He += l * It),
      (ke += l * Ot),
      (Le += l * Et),
      (yt += l * wt),
      (mt += l * Lt),
      (Me += l * jt),
      (Oe += l * xt),
      (Re += l * Mt),
      (Fe += l * Pt),
      (qe += l * At),
      (Pe += l * Ct),
      (Ue += l * ht),
      (Se += l * qt),
      (Ce += l * Bt),
      (l = H[2]),
      (Ie += l * St),
      (He += l * vt),
      (ke += l * It),
      (Le += l * Ot),
      (yt += l * Et),
      (mt += l * wt),
      (Me += l * Lt),
      (Oe += l * jt),
      (Re += l * xt),
      (Fe += l * Mt),
      (qe += l * Pt),
      (Pe += l * At),
      (Ue += l * Ct),
      (Se += l * ht),
      (Ce += l * qt),
      (ze += l * Bt),
      (l = H[3]),
      (He += l * St),
      (ke += l * vt),
      (Le += l * It),
      (yt += l * Ot),
      (mt += l * Et),
      (Me += l * wt),
      (Oe += l * Lt),
      (Re += l * jt),
      (Fe += l * xt),
      (qe += l * Mt),
      (Pe += l * Pt),
      (Ue += l * At),
      (Se += l * Ct),
      (Ce += l * ht),
      (ze += l * qt),
      (xe += l * Bt),
      (l = H[4]),
      (ke += l * St),
      (Le += l * vt),
      (yt += l * It),
      (mt += l * Ot),
      (Me += l * Et),
      (Oe += l * wt),
      (Re += l * Lt),
      (Fe += l * jt),
      (qe += l * xt),
      (Pe += l * Mt),
      (Ue += l * Pt),
      (Se += l * At),
      (Ce += l * Ct),
      (ze += l * ht),
      (xe += l * qt),
      (Ve += l * Bt),
      (l = H[5]),
      (Le += l * St),
      (yt += l * vt),
      (mt += l * It),
      (Me += l * Ot),
      (Oe += l * Et),
      (Re += l * wt),
      (Fe += l * Lt),
      (qe += l * jt),
      (Pe += l * xt),
      (Ue += l * Mt),
      (Se += l * Pt),
      (Ce += l * At),
      (ze += l * Ct),
      (xe += l * ht),
      (Ve += l * qt),
      (Ge += l * Bt),
      (l = H[6]),
      (yt += l * St),
      (mt += l * vt),
      (Me += l * It),
      (Oe += l * Ot),
      (Re += l * Et),
      (Fe += l * wt),
      (qe += l * Lt),
      (Pe += l * jt),
      (Ue += l * xt),
      (Se += l * Mt),
      (Ce += l * Pt),
      (ze += l * At),
      (xe += l * Ct),
      (Ve += l * ht),
      (Ge += l * qt),
      (et += l * Bt),
      (l = H[7]),
      (mt += l * St),
      (Me += l * vt),
      (Oe += l * It),
      (Re += l * Ot),
      (Fe += l * Et),
      (qe += l * wt),
      (Pe += l * Lt),
      (Ue += l * jt),
      (Se += l * xt),
      (Ce += l * Mt),
      (ze += l * Pt),
      (xe += l * At),
      (Ve += l * Ct),
      (Ge += l * ht),
      (et += l * qt),
      (tt += l * Bt),
      (l = H[8]),
      (Me += l * St),
      (Oe += l * vt),
      (Re += l * It),
      (Fe += l * Ot),
      (qe += l * Et),
      (Pe += l * wt),
      (Ue += l * Lt),
      (Se += l * jt),
      (Ce += l * xt),
      (ze += l * Mt),
      (xe += l * Pt),
      (Ve += l * At),
      (Ge += l * Ct),
      (et += l * ht),
      (tt += l * qt),
      (Qe += l * Bt),
      (l = H[9]),
      (Oe += l * St),
      (Re += l * vt),
      (Fe += l * It),
      (qe += l * Ot),
      (Pe += l * Et),
      (Ue += l * wt),
      (Se += l * Lt),
      (Ce += l * jt),
      (ze += l * xt),
      (xe += l * Mt),
      (Ve += l * Pt),
      (Ge += l * At),
      (et += l * Ct),
      (tt += l * ht),
      (Qe += l * qt),
      (ir += l * Bt),
      (l = H[10]),
      (Re += l * St),
      (Fe += l * vt),
      (qe += l * It),
      (Pe += l * Ot),
      (Ue += l * Et),
      (Se += l * wt),
      (Ce += l * Lt),
      (ze += l * jt),
      (xe += l * xt),
      (Ve += l * Mt),
      (Ge += l * Pt),
      (et += l * At),
      (tt += l * Ct),
      (Qe += l * ht),
      (ir += l * qt),
      (pr += l * Bt),
      (l = H[11]),
      (Fe += l * St),
      (qe += l * vt),
      (Pe += l * It),
      (Ue += l * Ot),
      (Se += l * Et),
      (Ce += l * wt),
      (ze += l * Lt),
      (xe += l * jt),
      (Ve += l * xt),
      (Ge += l * Mt),
      (et += l * Pt),
      (tt += l * At),
      (Qe += l * Ct),
      (ir += l * ht),
      (pr += l * qt),
      (Xr += l * Bt),
      (l = H[12]),
      (qe += l * St),
      (Pe += l * vt),
      (Ue += l * It),
      (Se += l * Ot),
      (Ce += l * Et),
      (ze += l * wt),
      (xe += l * Lt),
      (Ve += l * jt),
      (Ge += l * xt),
      (et += l * Mt),
      (tt += l * Pt),
      (Qe += l * At),
      (ir += l * Ct),
      (pr += l * ht),
      (Xr += l * qt),
      (nr += l * Bt),
      (l = H[13]),
      (Pe += l * St),
      (Ue += l * vt),
      (Se += l * It),
      (Ce += l * Ot),
      (ze += l * Et),
      (xe += l * wt),
      (Ve += l * Lt),
      (Ge += l * jt),
      (et += l * xt),
      (tt += l * Mt),
      (Qe += l * Pt),
      (ir += l * At),
      (pr += l * Ct),
      (Xr += l * ht),
      (nr += l * qt),
      (ai += l * Bt),
      (l = H[14]),
      (Ue += l * St),
      (Se += l * vt),
      (Ce += l * It),
      (ze += l * Ot),
      (xe += l * Et),
      (Ve += l * wt),
      (Ge += l * Lt),
      (et += l * jt),
      (tt += l * xt),
      (Qe += l * Mt),
      (ir += l * Pt),
      (pr += l * At),
      (Xr += l * Ct),
      (nr += l * ht),
      (ai += l * qt),
      (xi += l * Bt),
      (l = H[15]),
      (Se += l * St),
      (Ce += l * vt),
      (ze += l * It),
      (xe += l * Ot),
      (Ve += l * Et),
      (Ge += l * wt),
      (et += l * Lt),
      (tt += l * jt),
      (Qe += l * xt),
      (ir += l * Mt),
      (pr += l * Pt),
      (Xr += l * At),
      (nr += l * Ct),
      (ai += l * ht),
      (xi += l * qt),
      (zi += l * Bt),
      (ae += 38 * Ce),
      (fe += 38 * ze),
      (Ie += 38 * xe),
      (He += 38 * Ve),
      (ke += 38 * Ge),
      (Le += 38 * et),
      (yt += 38 * tt),
      (mt += 38 * Qe),
      (Me += 38 * ir),
      (Oe += 38 * pr),
      (Re += 38 * Xr),
      (Fe += 38 * nr),
      (qe += 38 * ai),
      (Pe += 38 * xi),
      (Ue += 38 * zi),
      (F = 1),
      (l = ae + F + 65535),
      (F = Math.floor(l / 65536)),
      (ae = l - F * 65536),
      (l = fe + F + 65535),
      (F = Math.floor(l / 65536)),
      (fe = l - F * 65536),
      (l = Ie + F + 65535),
      (F = Math.floor(l / 65536)),
      (Ie = l - F * 65536),
      (l = He + F + 65535),
      (F = Math.floor(l / 65536)),
      (He = l - F * 65536),
      (l = ke + F + 65535),
      (F = Math.floor(l / 65536)),
      (ke = l - F * 65536),
      (l = Le + F + 65535),
      (F = Math.floor(l / 65536)),
      (Le = l - F * 65536),
      (l = yt + F + 65535),
      (F = Math.floor(l / 65536)),
      (yt = l - F * 65536),
      (l = mt + F + 65535),
      (F = Math.floor(l / 65536)),
      (mt = l - F * 65536),
      (l = Me + F + 65535),
      (F = Math.floor(l / 65536)),
      (Me = l - F * 65536),
      (l = Oe + F + 65535),
      (F = Math.floor(l / 65536)),
      (Oe = l - F * 65536),
      (l = Re + F + 65535),
      (F = Math.floor(l / 65536)),
      (Re = l - F * 65536),
      (l = Fe + F + 65535),
      (F = Math.floor(l / 65536)),
      (Fe = l - F * 65536),
      (l = qe + F + 65535),
      (F = Math.floor(l / 65536)),
      (qe = l - F * 65536),
      (l = Pe + F + 65535),
      (F = Math.floor(l / 65536)),
      (Pe = l - F * 65536),
      (l = Ue + F + 65535),
      (F = Math.floor(l / 65536)),
      (Ue = l - F * 65536),
      (l = Se + F + 65535),
      (F = Math.floor(l / 65536)),
      (Se = l - F * 65536),
      (ae += F - 1 + 37 * (F - 1)),
      (F = 1),
      (l = ae + F + 65535),
      (F = Math.floor(l / 65536)),
      (ae = l - F * 65536),
      (l = fe + F + 65535),
      (F = Math.floor(l / 65536)),
      (fe = l - F * 65536),
      (l = Ie + F + 65535),
      (F = Math.floor(l / 65536)),
      (Ie = l - F * 65536),
      (l = He + F + 65535),
      (F = Math.floor(l / 65536)),
      (He = l - F * 65536),
      (l = ke + F + 65535),
      (F = Math.floor(l / 65536)),
      (ke = l - F * 65536),
      (l = Le + F + 65535),
      (F = Math.floor(l / 65536)),
      (Le = l - F * 65536),
      (l = yt + F + 65535),
      (F = Math.floor(l / 65536)),
      (yt = l - F * 65536),
      (l = mt + F + 65535),
      (F = Math.floor(l / 65536)),
      (mt = l - F * 65536),
      (l = Me + F + 65535),
      (F = Math.floor(l / 65536)),
      (Me = l - F * 65536),
      (l = Oe + F + 65535),
      (F = Math.floor(l / 65536)),
      (Oe = l - F * 65536),
      (l = Re + F + 65535),
      (F = Math.floor(l / 65536)),
      (Re = l - F * 65536),
      (l = Fe + F + 65535),
      (F = Math.floor(l / 65536)),
      (Fe = l - F * 65536),
      (l = qe + F + 65535),
      (F = Math.floor(l / 65536)),
      (qe = l - F * 65536),
      (l = Pe + F + 65535),
      (F = Math.floor(l / 65536)),
      (Pe = l - F * 65536),
      (l = Ue + F + 65535),
      (F = Math.floor(l / 65536)),
      (Ue = l - F * 65536),
      (l = Se + F + 65535),
      (F = Math.floor(l / 65536)),
      (Se = l - F * 65536),
      (ae += F - 1 + 37 * (F - 1)),
      (z[0] = ae),
      (z[1] = fe),
      (z[2] = Ie),
      (z[3] = He),
      (z[4] = ke),
      (z[5] = Le),
      (z[6] = yt),
      (z[7] = mt),
      (z[8] = Me),
      (z[9] = Oe),
      (z[10] = Re),
      (z[11] = Fe),
      (z[12] = qe),
      (z[13] = Pe),
      (z[14] = Ue),
      (z[15] = Se);
  }
  function w(z, H) {
    c(z, H, H);
  }
  function K(z, H) {
    const $ = o();
    let l;
    for (l = 0; l < 16; l++) $[l] = H[l];
    for (l = 253; l >= 0; l--) w($, $), l !== 2 && l !== 4 && c($, $, H);
    for (l = 0; l < 16; l++) z[l] = $[l];
  }
  function G(z, H) {
    const $ = o();
    let l;
    for (l = 0; l < 16; l++) $[l] = H[l];
    for (l = 250; l >= 0; l--) w($, $), l !== 1 && c($, $, H);
    for (l = 0; l < 16; l++) z[l] = $[l];
  }
  function se(z, H) {
    const $ = o(),
      l = o(),
      F = o(),
      ae = o(),
      fe = o(),
      Ie = o(),
      He = o(),
      ke = o(),
      Le = o();
    g($, z[1], z[0]),
      g(Le, H[1], H[0]),
      c($, $, Le),
      b(l, z[0], z[1]),
      b(Le, H[0], H[1]),
      c(l, l, Le),
      c(F, z[3], H[3]),
      c(F, F, y),
      c(ae, z[2], H[2]),
      b(ae, ae, ae),
      g(fe, l, $),
      g(Ie, ae, F),
      b(He, ae, F),
      b(ke, l, $),
      c(z[0], fe, Ie),
      c(z[1], ke, He),
      c(z[2], He, Ie),
      c(z[3], fe, ke);
  }
  function ue(z, H, $) {
    for (let l = 0; l < 4; l++) q(z[l], H[l], $);
  }
  function de(z, H) {
    const $ = o(),
      l = o(),
      F = o();
    K(F, H[2]), c($, H[0], F), c(l, H[1], F), L(z, l), (z[31] ^= D($) << 7);
  }
  function x(z, H, $) {
    T(z[0], d), T(z[1], f), T(z[2], f), T(z[3], d);
    for (let l = 255; l >= 0; --l) {
      const F = ($[(l / 8) | 0] >> (l & 7)) & 1;
      ue(z, H, F), se(H, z), se(z, z), ue(z, H, F);
    }
  }
  function R(z, H) {
    const $ = [o(), o(), o(), o()];
    T($[0], E), T($[1], I), T($[2], f), c($[3], E, I), x(z, $, H);
  }
  function te(z) {
    if (z.length !== i.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${i.SEED_LENGTH} bytes`);
    const H = (0, t.hash)(z);
    (H[0] &= 248), (H[31] &= 127), (H[31] |= 64);
    const $ = new Uint8Array(32),
      l = [o(), o(), o(), o()];
    R(l, H), de($, l);
    const F = new Uint8Array(64);
    return F.set(z), F.set($, 32), { publicKey: $, secretKey: F };
  }
  i.generateKeyPairFromSeed = te;
  function X(z) {
    const H = (0, e.randomBytes)(32, z),
      $ = te(H);
    return (0, s.wipe)(H), $;
  }
  i.generateKeyPair = X;
  function V(z) {
    if (z.length !== i.SECRET_KEY_LENGTH)
      throw new Error(
        `ed25519: secret key must be ${i.SECRET_KEY_LENGTH} bytes`
      );
    return new Uint8Array(z.subarray(32));
  }
  i.extractPublicKeyFromSecretKey = V;
  const W = new Float64Array([
    237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  ]);
  function Q(z, H) {
    let $, l, F, ae;
    for (l = 63; l >= 32; --l) {
      for ($ = 0, F = l - 32, ae = l - 12; F < ae; ++F)
        (H[F] += $ - 16 * H[l] * W[F - (l - 32)]),
          ($ = Math.floor((H[F] + 128) / 256)),
          (H[F] -= $ * 256);
      (H[F] += $), (H[l] = 0);
    }
    for ($ = 0, F = 0; F < 32; F++)
      (H[F] += $ - (H[31] >> 4) * W[F]), ($ = H[F] >> 8), (H[F] &= 255);
    for (F = 0; F < 32; F++) H[F] -= $ * W[F];
    for (l = 0; l < 32; l++) (H[l + 1] += H[l] >> 8), (z[l] = H[l] & 255);
  }
  function ie(z) {
    const H = new Float64Array(64);
    for (let $ = 0; $ < 64; $++) H[$] = z[$];
    for (let $ = 0; $ < 64; $++) z[$] = 0;
    Q(z, H);
  }
  function _e(z, H) {
    const $ = new Float64Array(64),
      l = [o(), o(), o(), o()],
      F = (0, t.hash)(z.subarray(0, 32));
    (F[0] &= 248), (F[31] &= 127), (F[31] |= 64);
    const ae = new Uint8Array(64);
    ae.set(F.subarray(32), 32);
    const fe = new t.SHA512();
    fe.update(ae.subarray(32)), fe.update(H);
    const Ie = fe.digest();
    fe.clean(),
      ie(Ie),
      R(l, Ie),
      de(ae, l),
      fe.reset(),
      fe.update(ae.subarray(0, 32)),
      fe.update(z.subarray(32)),
      fe.update(H);
    const He = fe.digest();
    ie(He);
    for (let ke = 0; ke < 32; ke++) $[ke] = Ie[ke];
    for (let ke = 0; ke < 32; ke++)
      for (let Le = 0; Le < 32; Le++) $[ke + Le] += He[ke] * F[Le];
    return Q(ae.subarray(32), $), ae;
  }
  i.sign = _e;
  function oe(z, H) {
    const $ = o(),
      l = o(),
      F = o(),
      ae = o(),
      fe = o(),
      Ie = o(),
      He = o();
    return (
      T(z[2], f),
      v(z[1], H),
      w(F, z[1]),
      c(ae, F, _),
      g(F, F, z[2]),
      b(ae, z[2], ae),
      w(fe, ae),
      w(Ie, fe),
      c(He, Ie, fe),
      c($, He, F),
      c($, $, ae),
      G($, $),
      c($, $, F),
      c($, $, ae),
      c($, $, ae),
      c(z[0], $, ae),
      w(l, z[0]),
      c(l, l, ae),
      p(l, F) && c(z[0], z[0], P),
      w(l, z[0]),
      c(l, l, ae),
      p(l, F)
        ? -1
        : (D(z[0]) === H[31] >> 7 && g(z[0], d, z[0]), c(z[3], z[0], z[1]), 0)
    );
  }
  function be(z, H, $) {
    const l = new Uint8Array(32),
      F = [o(), o(), o(), o()],
      ae = [o(), o(), o(), o()];
    if ($.length !== i.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${i.SIGNATURE_LENGTH} bytes`);
    if (oe(ae, z)) return !1;
    const fe = new t.SHA512();
    fe.update($.subarray(0, 32)), fe.update(z), fe.update(H);
    const Ie = fe.digest();
    return (
      ie(Ie), x(F, ae, Ie), R(ae, $.subarray(32)), se(F, ae), de(l, F), !Y($, l)
    );
  }
  i.verify = be;
  function le(z) {
    let H = [o(), o(), o(), o()];
    if (oe(H, z)) throw new Error("Ed25519: invalid public key");
    let $ = o(),
      l = o(),
      F = H[1];
    b($, f, F), g(l, f, F), K(l, l), c($, $, l);
    let ae = new Uint8Array(32);
    return L(ae, $), ae;
  }
  i.convertPublicKeyToX25519 = le;
  function ve(z) {
    const H = (0, t.hash)(z.subarray(0, 32));
    (H[0] &= 248), (H[31] &= 127), (H[31] |= 64);
    const $ = new Uint8Array(H.subarray(0, 32));
    return (0, s.wipe)(H), $;
  }
  i.convertSecretKeyToX25519 = ve;
})(zu);
const U3 = "EdDSA",
  $3 = "JWT",
  Dp = ".",
  Sp = "base64url",
  L3 = "utf8",
  j3 = "utf8",
  M3 = ":",
  q3 = "did",
  B3 = "key",
  Bf = "base58btc",
  H3 = "z",
  z3 = "K36",
  K3 = 32,
  k3 = (i) =>
    JSON.stringify(i, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    );
function V3(i) {
  return typeof i == "string" ? i : k3(i) || "";
}
function Xo(i) {
  return dr(Er(V3(i), L3), Sp);
}
function Ip(i) {
  const e = Er(z3, Bf),
    t = H3 + dr(du([e, i]), Bf);
  return [q3, B3, t].join(M3);
}
function W3(i) {
  return dr(i, Sp);
}
function G3(i) {
  return Er([Xo(i.header), Xo(i.payload)].join(Dp), j3);
}
function J3(i) {
  return [Xo(i.header), Xo(i.payload), W3(i.signature)].join(Dp);
}
function Hf(i = Hn.randomBytes(K3)) {
  return zu.generateKeyPairFromSeed(i);
}
async function Y3(i, e, t, s, o = me.fromMiliseconds(Date.now())) {
  const u = { alg: U3, typ: $3 },
    d = Ip(s.publicKey),
    f = o + t,
    _ = { iss: d, sub: i, aud: e, iat: o, exp: f },
    y = G3({ header: u, payload: _ }),
    E = zu.sign(s.secretKey, y);
  return J3({ header: u, payload: _, signature: E });
}
var ft = {};
Object.defineProperty(ft, "__esModule", { value: !0 });
ft.getLocalStorage =
  ft.getLocalStorageOrThrow =
  ft.getCrypto =
  ft.getCryptoOrThrow =
  Op =
  ft.getLocation =
  ft.getLocationOrThrow =
  ku =
  ft.getNavigator =
  ft.getNavigatorOrThrow =
  Ku =
  ft.getDocument =
  ft.getDocumentOrThrow =
  ft.getFromWindowOrThrow =
  ft.getFromWindow =
    void 0;
function fn(i) {
  let e;
  return typeof window < "u" && typeof window[i] < "u" && (e = window[i]), e;
}
ft.getFromWindow = fn;
function kn(i) {
  const e = fn(i);
  if (!e) throw new Error(`${i} is not defined in Window`);
  return e;
}
ft.getFromWindowOrThrow = kn;
function Q3() {
  return kn("document");
}
ft.getDocumentOrThrow = Q3;
function X3() {
  return fn("document");
}
var Ku = (ft.getDocument = X3);
function Z3() {
  return kn("navigator");
}
ft.getNavigatorOrThrow = Z3;
function eD() {
  return fn("navigator");
}
var ku = (ft.getNavigator = eD);
function tD() {
  return kn("location");
}
ft.getLocationOrThrow = tD;
function rD() {
  return fn("location");
}
var Op = (ft.getLocation = rD);
function iD() {
  return kn("crypto");
}
ft.getCryptoOrThrow = iD;
function nD() {
  return fn("crypto");
}
ft.getCrypto = nD;
function sD() {
  return kn("localStorage");
}
ft.getLocalStorageOrThrow = sD;
function oD() {
  return fn("localStorage");
}
ft.getLocalStorage = oD;
var Vu = {};
Object.defineProperty(Vu, "__esModule", { value: !0 });
var xp = (Vu.getWindowMetadata = void 0);
const zf = ft;
function aD() {
  let i, e;
  try {
    (i = zf.getDocumentOrThrow()), (e = zf.getLocationOrThrow());
  } catch {
    return null;
  }
  function t() {
    const I = i.getElementsByTagName("link"),
      P = [];
    for (let T = 0; T < I.length; T++) {
      const A = I[T],
        q = A.getAttribute("rel");
      if (q && q.toLowerCase().indexOf("icon") > -1) {
        const L = A.getAttribute("href");
        if (L)
          if (
            L.toLowerCase().indexOf("https:") === -1 &&
            L.toLowerCase().indexOf("http:") === -1 &&
            L.indexOf("//") !== 0
          ) {
            let Y = e.protocol + "//" + e.host;
            if (L.indexOf("/") === 0) Y += L;
            else {
              const p = e.pathname.split("/");
              p.pop();
              const D = p.join("/");
              Y += D + "/" + L;
            }
            P.push(Y);
          } else if (L.indexOf("//") === 0) {
            const Y = e.protocol + L;
            P.push(Y);
          } else P.push(L);
      }
    }
    return P;
  }
  function s(...I) {
    const P = i.getElementsByTagName("meta");
    for (let T = 0; T < P.length; T++) {
      const A = P[T],
        q = ["itemprop", "property", "name"]
          .map((L) => A.getAttribute(L))
          .filter((L) => (L ? I.includes(L) : !1));
      if (q.length && q) {
        const L = A.getAttribute("content");
        if (L) return L;
      }
    }
    return "";
  }
  function o() {
    let I = s("name", "og:site_name", "og:title", "twitter:title");
    return I || (I = i.title), I;
  }
  function u() {
    return s(
      "description",
      "og:description",
      "twitter:description",
      "keywords"
    );
  }
  const d = o(),
    f = u(),
    _ = e.origin,
    y = t();
  return { description: f, url: _, icons: y, name: d };
}
xp = Vu.getWindowMetadata = aD;
var xs = {};
(function (i) {
  const e = Mu,
    t = qu,
    s = Bu,
    o = Hu,
    u = (p) => p == null,
    d = Symbol("encodeFragmentIdentifier");
  function f(p) {
    switch (p.arrayFormat) {
      case "index":
        return (D) => (v, b) => {
          const g = v.length;
          return b === void 0 ||
            (p.skipNull && b === null) ||
            (p.skipEmptyString && b === "")
            ? v
            : b === null
            ? [...v, [E(D, p), "[", g, "]"].join("")]
            : [...v, [E(D, p), "[", E(g, p), "]=", E(b, p)].join("")];
        };
      case "bracket":
        return (D) => (v, b) =>
          b === void 0 ||
          (p.skipNull && b === null) ||
          (p.skipEmptyString && b === "")
            ? v
            : b === null
            ? [...v, [E(D, p), "[]"].join("")]
            : [...v, [E(D, p), "[]=", E(b, p)].join("")];
      case "colon-list-separator":
        return (D) => (v, b) =>
          b === void 0 ||
          (p.skipNull && b === null) ||
          (p.skipEmptyString && b === "")
            ? v
            : b === null
            ? [...v, [E(D, p), ":list="].join("")]
            : [...v, [E(D, p), ":list=", E(b, p)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const D = p.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (v) => (b, g) =>
          g === void 0 ||
          (p.skipNull && g === null) ||
          (p.skipEmptyString && g === "")
            ? b
            : ((g = g === null ? "" : g),
              b.length === 0
                ? [[E(v, p), D, E(g, p)].join("")]
                : [[b, E(g, p)].join(p.arrayFormatSeparator)]);
      }
      default:
        return (D) => (v, b) =>
          b === void 0 ||
          (p.skipNull && b === null) ||
          (p.skipEmptyString && b === "")
            ? v
            : b === null
            ? [...v, E(D, p)]
            : [...v, [E(D, p), "=", E(b, p)].join("")];
    }
  }
  function _(p) {
    let D;
    switch (p.arrayFormat) {
      case "index":
        return (v, b, g) => {
          if (
            ((D = /\[(\d*)\]$/.exec(v)), (v = v.replace(/\[\d*\]$/, "")), !D)
          ) {
            g[v] = b;
            return;
          }
          g[v] === void 0 && (g[v] = {}), (g[v][D[1]] = b);
        };
      case "bracket":
        return (v, b, g) => {
          if (((D = /(\[\])$/.exec(v)), (v = v.replace(/\[\]$/, "")), !D)) {
            g[v] = b;
            return;
          }
          if (g[v] === void 0) {
            g[v] = [b];
            return;
          }
          g[v] = [].concat(g[v], b);
        };
      case "colon-list-separator":
        return (v, b, g) => {
          if (((D = /(:list)$/.exec(v)), (v = v.replace(/:list$/, "")), !D)) {
            g[v] = b;
            return;
          }
          if (g[v] === void 0) {
            g[v] = [b];
            return;
          }
          g[v] = [].concat(g[v], b);
        };
      case "comma":
      case "separator":
        return (v, b, g) => {
          const c = typeof b == "string" && b.includes(p.arrayFormatSeparator),
            w =
              typeof b == "string" &&
              !c &&
              I(b, p).includes(p.arrayFormatSeparator);
          b = w ? I(b, p) : b;
          const K =
            c || w
              ? b.split(p.arrayFormatSeparator).map((G) => I(G, p))
              : b === null
              ? b
              : I(b, p);
          g[v] = K;
        };
      case "bracket-separator":
        return (v, b, g) => {
          const c = /(\[\])$/.test(v);
          if (((v = v.replace(/\[\]$/, "")), !c)) {
            g[v] = b && I(b, p);
            return;
          }
          const w =
            b === null
              ? []
              : b.split(p.arrayFormatSeparator).map((K) => I(K, p));
          if (g[v] === void 0) {
            g[v] = w;
            return;
          }
          g[v] = [].concat(g[v], w);
        };
      default:
        return (v, b, g) => {
          if (g[v] === void 0) {
            g[v] = b;
            return;
          }
          g[v] = [].concat(g[v], b);
        };
    }
  }
  function y(p) {
    if (typeof p != "string" || p.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function E(p, D) {
    return D.encode ? (D.strict ? e(p) : encodeURIComponent(p)) : p;
  }
  function I(p, D) {
    return D.decode ? t(p) : p;
  }
  function P(p) {
    return Array.isArray(p)
      ? p.sort()
      : typeof p == "object"
      ? P(Object.keys(p))
          .sort((D, v) => Number(D) - Number(v))
          .map((D) => p[D])
      : p;
  }
  function T(p) {
    const D = p.indexOf("#");
    return D !== -1 && (p = p.slice(0, D)), p;
  }
  function A(p) {
    let D = "";
    const v = p.indexOf("#");
    return v !== -1 && (D = p.slice(v)), D;
  }
  function q(p) {
    p = T(p);
    const D = p.indexOf("?");
    return D === -1 ? "" : p.slice(D + 1);
  }
  function L(p, D) {
    return (
      D.parseNumbers &&
      !Number.isNaN(Number(p)) &&
      typeof p == "string" &&
      p.trim() !== ""
        ? (p = Number(p))
        : D.parseBooleans &&
          p !== null &&
          (p.toLowerCase() === "true" || p.toLowerCase() === "false") &&
          (p = p.toLowerCase() === "true"),
      p
    );
  }
  function Y(p, D) {
    (D = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      D
    )),
      y(D.arrayFormatSeparator);
    const v = _(D),
      b = Object.create(null);
    if (typeof p != "string" || ((p = p.trim().replace(/^[?#&]/, "")), !p))
      return b;
    for (const g of p.split("&")) {
      if (g === "") continue;
      let [c, w] = s(D.decode ? g.replace(/\+/g, " ") : g, "=");
      (w =
        w === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(D.arrayFormat)
          ? w
          : I(w, D)),
        v(I(c, D), w, b);
    }
    for (const g of Object.keys(b)) {
      const c = b[g];
      if (typeof c == "object" && c !== null)
        for (const w of Object.keys(c)) c[w] = L(c[w], D);
      else b[g] = L(c, D);
    }
    return D.sort === !1
      ? b
      : (D.sort === !0
          ? Object.keys(b).sort()
          : Object.keys(b).sort(D.sort)
        ).reduce((g, c) => {
          const w = b[c];
          return (
            w && typeof w == "object" && !Array.isArray(w)
              ? (g[c] = P(w))
              : (g[c] = w),
            g
          );
        }, Object.create(null));
  }
  (i.extract = q),
    (i.parse = Y),
    (i.stringify = (p, D) => {
      if (!p) return "";
      (D = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        D
      )),
        y(D.arrayFormatSeparator);
      const v = (w) =>
          (D.skipNull && u(p[w])) || (D.skipEmptyString && p[w] === ""),
        b = f(D),
        g = {};
      for (const w of Object.keys(p)) v(w) || (g[w] = p[w]);
      const c = Object.keys(g);
      return (
        D.sort !== !1 && c.sort(D.sort),
        c
          .map((w) => {
            const K = p[w];
            return K === void 0
              ? ""
              : K === null
              ? E(w, D)
              : Array.isArray(K)
              ? K.length === 0 && D.arrayFormat === "bracket-separator"
                ? E(w, D) + "[]"
                : K.reduce(b(w), []).join("&")
              : E(w, D) + "=" + E(K, D);
          })
          .filter((w) => w.length > 0)
          .join("&")
      );
    }),
    (i.parseUrl = (p, D) => {
      D = Object.assign({ decode: !0 }, D);
      const [v, b] = s(p, "#");
      return Object.assign(
        { url: v.split("?")[0] || "", query: Y(q(p), D) },
        D && D.parseFragmentIdentifier && b
          ? { fragmentIdentifier: I(b, D) }
          : {}
      );
    }),
    (i.stringifyUrl = (p, D) => {
      D = Object.assign({ encode: !0, strict: !0, [d]: !0 }, D);
      const v = T(p.url).split("?")[0] || "",
        b = i.extract(p.url),
        g = i.parse(b, { sort: !1 }),
        c = Object.assign(g, p.query);
      let w = i.stringify(c, D);
      w && (w = `?${w}`);
      let K = A(p.url);
      return (
        p.fragmentIdentifier &&
          (K = `#${D[d] ? E(p.fragmentIdentifier, D) : p.fragmentIdentifier}`),
        `${v}${w}${K}`
      );
    }),
    (i.pick = (p, D, v) => {
      v = Object.assign({ parseFragmentIdentifier: !0, [d]: !1 }, v);
      const { url: b, query: g, fragmentIdentifier: c } = i.parseUrl(p, v);
      return i.stringifyUrl(
        { url: b, query: o(g, D), fragmentIdentifier: c },
        v
      );
    }),
    (i.exclude = (p, D, v) => {
      const b = Array.isArray(D) ? (g) => !D.includes(g) : (g, c) => !D(g, c);
      return i.pick(p, b, v);
    });
})(xs);
function Pp(i, e) {
  return i.includes(":") ? [i] : e.chains || [];
}
const Cp = "base10",
  fr = "base16",
  _u = "base64pad",
  Wu = "utf8",
  Tp = 0,
  dn = 1,
  cD = 0,
  Kf = 1,
  bu = 12,
  Gu = 32;
function uD() {
  const i = $u.generateKeyPair();
  return { privateKey: dr(i.secretKey, fr), publicKey: dr(i.publicKey, fr) };
}
function Eu() {
  const i = Hn.randomBytes(Gu);
  return dr(i, fr);
}
function hD(i, e) {
  const t = $u.sharedKey(Er(i, fr), Er(e, fr), !0),
    s = new S_(ca.SHA256, t).expand(Gu);
  return dr(s, fr);
}
function lD(i) {
  const e = ca.hash(Er(i, fr));
  return dr(e, fr);
}
function qn(i) {
  const e = ca.hash(Er(i, Wu));
  return dr(e, fr);
}
function fD(i) {
  return Er(`${i}`, Cp);
}
function Ns(i) {
  return Number(dr(i, Cp));
}
function dD(i) {
  const e = fD(typeof i.type < "u" ? i.type : Tp);
  if (Ns(e) === dn && typeof i.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const t = typeof i.senderPublicKey < "u" ? Er(i.senderPublicKey, fr) : void 0,
    s = typeof i.iv < "u" ? Er(i.iv, fr) : Hn.randomBytes(bu),
    o = new Fu.ChaCha20Poly1305(Er(i.symKey, fr)).seal(s, Er(i.message, Wu));
  return gD({ type: e, sealed: o, iv: s, senderPublicKey: t });
}
function pD(i) {
  const e = new Fu.ChaCha20Poly1305(Er(i.symKey, fr)),
    { sealed: t, iv: s } = Zo(i.encoded),
    o = e.open(s, t);
  if (o === null) throw new Error("Failed to decrypt");
  return dr(o, Wu);
}
function gD(i) {
  if (Ns(i.type) === dn) {
    if (typeof i.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return dr(du([i.type, i.senderPublicKey, i.iv, i.sealed]), _u);
  }
  return dr(du([i.type, i.iv, i.sealed]), _u);
}
function Zo(i) {
  const e = Er(i, _u),
    t = e.slice(cD, Kf),
    s = Kf;
  if (Ns(t) === dn) {
    const f = s + Gu,
      _ = f + bu,
      y = e.slice(s, f),
      E = e.slice(f, _),
      I = e.slice(_);
    return { type: t, sealed: I, iv: E, senderPublicKey: y };
  }
  const o = s + bu,
    u = e.slice(s, o),
    d = e.slice(o);
  return { type: t, sealed: d, iv: u };
}
function yD(i, e) {
  const t = Zo(i);
  return Ap({
    type: Ns(t.type),
    senderPublicKey:
      typeof t.senderPublicKey < "u" ? dr(t.senderPublicKey, fr) : void 0,
    receiverPublicKey: e?.receiverPublicKey,
  });
}
function Ap(i) {
  const e = i?.type || Tp;
  if (e === dn) {
    if (typeof i?.senderPublicKey > "u")
      throw new Error("missing sender public key");
    if (typeof i?.receiverPublicKey > "u")
      throw new Error("missing receiver public key");
  }
  return {
    type: e,
    senderPublicKey: i?.senderPublicKey,
    receiverPublicKey: i?.receiverPublicKey,
  };
}
function kf(i) {
  return (
    i.type === dn &&
    typeof i.senderPublicKey == "string" &&
    typeof i.receiverPublicKey == "string"
  );
}
var mD = Object.defineProperty,
  Vf = Object.getOwnPropertySymbols,
  vD = Object.prototype.hasOwnProperty,
  wD = Object.prototype.propertyIsEnumerable,
  Wf = (i, e, t) =>
    e in i
      ? mD(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Gf = (i, e) => {
    for (var t in e || (e = {})) vD.call(e, t) && Wf(i, t, e[t]);
    if (Vf) for (var t of Vf(e)) wD.call(e, t) && Wf(i, t, e[t]);
    return i;
  };
const _D = "ReactNative",
  Tr = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown",
  },
  bD = "js";
function Ju() {
  return (
    typeof process < "u" &&
    typeof process.versions < "u" &&
    typeof process.versions.node < "u"
  );
}
function Vn() {
  return !Ku() && !!ku() && navigator.product === _D;
}
function Wn() {
  return !Ju() && !!ku() && !!Ku();
}
function Rs() {
  return Vn()
    ? Tr.reactNative
    : Ju()
    ? Tr.node
    : Wn()
    ? Tr.browser
    : Tr.unknown;
}
function ED() {
  var i;
  try {
    return Vn() &&
      typeof global < "u" &&
      typeof (global == null ? void 0 : global.Application) < "u"
      ? (i = global.Application) == null
        ? void 0
        : i.applicationId
      : void 0;
  } catch {
    return;
  }
}
function DD(i, e) {
  let t = xs.parse(i);
  return (t = Gf(Gf({}, t), e)), (i = xs.stringify(t)), i;
}
function SD() {
  return xp() || { name: "", description: "", url: "", icons: [""] };
}
function ID() {
  if (
    Rs() === Tr.reactNative &&
    typeof global < "u" &&
    typeof (global == null ? void 0 : global.Platform) < "u"
  ) {
    const { OS: t, Version: s } = global.Platform;
    return [t, s].join("-");
  }
  const i = $b();
  if (i === null) return "unknown";
  const e = i.os ? i.os.replace(" ", "").toLowerCase() : "unknown";
  return i.type === "browser"
    ? [e, i.name, i.version].join("-")
    : [e, i.version].join("-");
}
function OD() {
  var i;
  const e = Rs();
  return e === Tr.browser
    ? [e, ((i = Op()) == null ? void 0 : i.host) || "unknown"].join(":")
    : e;
}
function xD(i, e, t) {
  const s = ID(),
    o = OD();
  return [[i, e].join("-"), [bD, t].join("-"), s, o].join("/");
}
function PD({
  protocol: i,
  version: e,
  relayUrl: t,
  sdkVersion: s,
  auth: o,
  projectId: u,
  useOnCloseEvent: d,
  bundleId: f,
}) {
  const _ = t.split("?"),
    y = xD(i, e, s),
    E = {
      auth: o,
      ua: y,
      projectId: u,
      useOnCloseEvent: d || void 0,
      origin: f || void 0,
    },
    I = DD(_[1] || "", E);
  return _[0] + "?" + I;
}
function cn(i, e) {
  return i.filter((t) => e.includes(t)).length === i.length;
}
function Np(i) {
  return Object.fromEntries(i.entries());
}
function Rp(i) {
  return new Map(Object.entries(i));
}
function jn(i = me.FIVE_MINUTES, e) {
  const t = me.toMiliseconds(i || me.FIVE_MINUTES);
  let s, o, u;
  return {
    resolve: (d) => {
      u && s && (clearTimeout(u), s(d));
    },
    reject: (d) => {
      u && o && (clearTimeout(u), o(d));
    },
    done: () =>
      new Promise((d, f) => {
        (u = setTimeout(() => {
          f(new Error(e));
        }, t)),
          (s = d),
          (o = f);
      }),
  };
}
function Ps(i, e, t) {
  return new Promise(async (s, o) => {
    const u = setTimeout(() => o(new Error(t)), e);
    try {
      const d = await i;
      s(d);
    } catch (d) {
      o(d);
    }
    clearTimeout(u);
  });
}
function Fp(i, e) {
  if (typeof e == "string" && e.startsWith(`${i}:`)) return e;
  if (i.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (i.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${i}`);
}
function CD(i) {
  return Fp("topic", i);
}
function TD(i) {
  return Fp("id", i);
}
function Up(i) {
  const [e, t] = i.split(":"),
    s = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof t == "string") s.topic = t;
  else if (e === "id" && Number.isInteger(Number(t))) s.id = Number(t);
  else
    throw new Error(
      `Invalid target, expected id:number or topic:string, got ${e}:${t}`
    );
  return s;
}
function Cr(i, e) {
  return me.fromMiliseconds((e || Date.now()) + me.toMiliseconds(i));
}
function ji(i) {
  return Date.now() >= me.toMiliseconds(i);
}
function Ut(i, e) {
  return `${i}${e ? `:${e}` : ""}`;
}
async function AD({ id: i, topic: e, wcDeepLink: t }) {
  try {
    if (!t) return;
    let o = (typeof t == "string" ? JSON.parse(t) : t)?.href;
    if (typeof o != "string") return;
    o.endsWith("/") && (o = o.slice(0, -1));
    const u = `${o}/wc?requestId=${i}&sessionTopic=${e}`,
      d = Rs();
    d === Tr.browser
      ? u.startsWith("https://")
        ? window.open(u, "_blank", "noreferrer noopener")
        : window.open(u, "_self", "noreferrer noopener")
      : d === Tr.reactNative &&
        typeof (global == null ? void 0 : global.Linking) < "u" &&
        (await global.Linking.openURL(u));
  } catch (s) {
    console.error(s);
  }
}
async function ND(i, e) {
  try {
    return (await i.getItem(e)) || (Wn() ? localStorage.getItem(e) : void 0);
  } catch (t) {
    console.error(t);
  }
}
const RD = "irn";
function Du(i) {
  return i?.relay || { protocol: RD };
}
function Jo(i) {
  const e = CE[i];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${i}`);
  return e;
}
var FD = Object.defineProperty,
  UD = Object.defineProperties,
  $D = Object.getOwnPropertyDescriptors,
  Jf = Object.getOwnPropertySymbols,
  LD = Object.prototype.hasOwnProperty,
  jD = Object.prototype.propertyIsEnumerable,
  Yf = (i, e, t) =>
    e in i
      ? FD(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  MD = (i, e) => {
    for (var t in e || (e = {})) LD.call(e, t) && Yf(i, t, e[t]);
    if (Jf) for (var t of Jf(e)) jD.call(e, t) && Yf(i, t, e[t]);
    return i;
  },
  qD = (i, e) => UD(i, $D(e));
function BD(i, e = "-") {
  const t = {},
    s = "relay" + e;
  return (
    Object.keys(i).forEach((o) => {
      if (o.startsWith(s)) {
        const u = o.replace(s, ""),
          d = i[o];
        t[u] = d;
      }
    }),
    t
  );
}
function Qf(i) {
  (i = i.includes("wc://") ? i.replace("wc://", "") : i),
    (i = i.includes("wc:") ? i.replace("wc:", "") : i);
  const e = i.indexOf(":"),
    t = i.indexOf("?") !== -1 ? i.indexOf("?") : void 0,
    s = i.substring(0, e),
    o = i.substring(e + 1, t).split("@"),
    u = typeof t < "u" ? i.substring(t) : "",
    d = xs.parse(u);
  return {
    protocol: s,
    topic: HD(o[0]),
    version: parseInt(o[1], 10),
    symKey: d.symKey,
    relay: BD(d),
    expiryTimestamp: d.expiryTimestamp
      ? parseInt(d.expiryTimestamp, 10)
      : void 0,
  };
}
function HD(i) {
  return i.startsWith("//") ? i.substring(2) : i;
}
function zD(i, e = "-") {
  const t = "relay",
    s = {};
  return (
    Object.keys(i).forEach((o) => {
      const u = t + e + o;
      i[o] && (s[u] = i[o]);
    }),
    s
  );
}
function KD(i) {
  return (
    `${i.protocol}:${i.topic}@${i.version}?` +
    xs.stringify(
      qD(MD({ symKey: i.symKey }, zD(i.relay)), {
        expiryTimestamp: i.expiryTimestamp,
      })
    )
  );
}
function Gn(i) {
  const e = [];
  return (
    i.forEach((t) => {
      const [s, o] = t.split(":");
      e.push(`${s}:${o}`);
    }),
    e
  );
}
function kD(i) {
  const e = [];
  return (
    Object.values(i).forEach((t) => {
      e.push(...Gn(t.accounts));
    }),
    e
  );
}
function VD(i, e) {
  const t = [];
  return (
    Object.values(i).forEach((s) => {
      Gn(s.accounts).includes(e) && t.push(...s.methods);
    }),
    t
  );
}
function WD(i, e) {
  const t = [];
  return (
    Object.values(i).forEach((s) => {
      Gn(s.accounts).includes(e) && t.push(...s.events);
    }),
    t
  );
}
const GD = {
    INVALID_METHOD: { message: "Invalid method.", code: 1001 },
    INVALID_EVENT: { message: "Invalid event.", code: 1002 },
    INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
    INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005,
    },
    UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
    UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003,
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004,
    },
    USER_REJECTED: { message: "User rejected.", code: 5e3 },
    USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
    USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
    USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
    UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
    UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
    UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104,
    },
    USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3,
    },
    WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
  },
  JD = {
    NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
    NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
    RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
    RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
    MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
    EXPIRED: { message: "Expired.", code: 6 },
    UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
    MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9,
    },
  };
function ce(i, e) {
  const { message: t, code: s } = JD[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function $t(i, e) {
  const { message: t, code: s } = GD[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function Fs(i, e) {
  return Array.isArray(i) ? (typeof e < "u" && i.length ? i.every(e) : !0) : !1;
}
function ea(i) {
  return Object.getPrototypeOf(i) === Object.prototype && Object.keys(i).length;
}
function lr(i) {
  return typeof i > "u";
}
function Jt(i, e) {
  return e && lr(i) ? !0 : typeof i == "string" && !!i.trim().length;
}
function Yu(i, e) {
  return e && lr(i) ? !0 : typeof i == "number" && !isNaN(i);
}
function YD(i, e) {
  const { requiredNamespaces: t } = e,
    s = Object.keys(i.namespaces),
    o = Object.keys(t);
  let u = !0;
  return cn(o, s)
    ? (s.forEach((d) => {
        const { accounts: f, methods: _, events: y } = i.namespaces[d],
          E = Gn(f),
          I = t[d];
        (!cn(Pp(d, I), E) || !cn(I.methods, _) || !cn(I.events, y)) && (u = !1);
      }),
      u)
    : !1;
}
function ta(i) {
  return Jt(i, !1) && i.includes(":") ? i.split(":").length === 2 : !1;
}
function QD(i) {
  if (Jt(i, !1) && i.includes(":")) {
    const e = i.split(":");
    if (e.length === 3) {
      const t = e[0] + ":" + e[1];
      return !!e[2] && ta(t);
    }
  }
  return !1;
}
function XD(i) {
  if (Jt(i, !1))
    try {
      return typeof new URL(i) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function ZD(i) {
  var e;
  return (e = i?.proposer) == null ? void 0 : e.publicKey;
}
function eS(i) {
  return i?.topic;
}
function tS(i, e) {
  let t = null;
  return (
    Jt(i?.publicKey, !1) ||
      (t = ce(
        "MISSING_OR_INVALID",
        `${e} controller public key should be a string`
      )),
    t
  );
}
function Xf(i) {
  let e = !0;
  return Fs(i) ? i.length && (e = i.every((t) => Jt(t, !1))) : (e = !1), e;
}
function rS(i, e, t) {
  let s = null;
  return (
    Fs(e) && e.length
      ? e.forEach((o) => {
          s ||
            ta(o) ||
            (s = $t(
              "UNSUPPORTED_CHAINS",
              `${t}, chain ${o} should be a string and conform to "namespace:chainId" format`
            ));
        })
      : ta(i) ||
        (s = $t(
          "UNSUPPORTED_CHAINS",
          `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
        )),
    s
  );
}
function iS(i, e, t) {
  let s = null;
  return (
    Object.entries(i).forEach(([o, u]) => {
      if (s) return;
      const d = rS(o, Pp(o, u), `${e} ${t}`);
      d && (s = d);
    }),
    s
  );
}
function nS(i, e) {
  let t = null;
  return (
    Fs(i)
      ? i.forEach((s) => {
          t ||
            QD(s) ||
            (t = $t(
              "UNSUPPORTED_ACCOUNTS",
              `${e}, account ${s} should be a string and conform to "namespace:chainId:address" format`
            ));
        })
      : (t = $t(
          "UNSUPPORTED_ACCOUNTS",
          `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
        )),
    t
  );
}
function sS(i, e) {
  let t = null;
  return (
    Object.values(i).forEach((s) => {
      if (t) return;
      const o = nS(s?.accounts, `${e} namespace`);
      o && (t = o);
    }),
    t
  );
}
function oS(i, e) {
  let t = null;
  return (
    Xf(i?.methods)
      ? Xf(i?.events) ||
        (t = $t(
          "UNSUPPORTED_EVENTS",
          `${e}, events should be an array of strings or empty array for no events`
        ))
      : (t = $t(
          "UNSUPPORTED_METHODS",
          `${e}, methods should be an array of strings or empty array for no methods`
        )),
    t
  );
}
function $p(i, e) {
  let t = null;
  return (
    Object.values(i).forEach((s) => {
      if (t) return;
      const o = oS(s, `${e}, namespace`);
      o && (t = o);
    }),
    t
  );
}
function aS(i, e, t) {
  let s = null;
  if (i && ea(i)) {
    const o = $p(i, e);
    o && (s = o);
    const u = iS(i, e, t);
    u && (s = u);
  } else
    s = ce("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
  return s;
}
function Yc(i, e) {
  let t = null;
  if (i && ea(i)) {
    const s = $p(i, e);
    s && (t = s);
    const o = sS(i, e);
    o && (t = o);
  } else
    t = ce(
      "MISSING_OR_INVALID",
      `${e}, namespaces should be an object with data`
    );
  return t;
}
function Lp(i) {
  return Jt(i.protocol, !0);
}
function cS(i, e) {
  let t = !1;
  return (
    e && !i
      ? (t = !0)
      : i &&
        Fs(i) &&
        i.length &&
        i.forEach((s) => {
          t = Lp(s);
        }),
    t
  );
}
function uS(i) {
  return typeof i == "number";
}
function br(i) {
  return typeof i < "u" && typeof i !== null;
}
function hS(i) {
  return !(
    !i ||
    typeof i != "object" ||
    !i.code ||
    !Yu(i.code, !1) ||
    !i.message ||
    !Jt(i.message, !1)
  );
}
function lS(i) {
  return !(lr(i) || !Jt(i.method, !1));
}
function fS(i) {
  return !(
    lr(i) ||
    (lr(i.result) && lr(i.error)) ||
    !Yu(i.id, !1) ||
    !Jt(i.jsonrpc, !1)
  );
}
function dS(i) {
  return !(lr(i) || !Jt(i.name, !1));
}
function Zf(i, e) {
  return !(!ta(e) || !kD(i).includes(e));
}
function pS(i, e, t) {
  return Jt(t, !1) ? VD(i, e).includes(t) : !1;
}
function gS(i, e, t) {
  return Jt(t, !1) ? WD(i, e).includes(t) : !1;
}
function ed(i, e, t) {
  let s = null;
  const o = yS(i),
    u = mS(e),
    d = Object.keys(o),
    f = Object.keys(u),
    _ = td(Object.keys(i)),
    y = td(Object.keys(e)),
    E = _.filter((I) => !y.includes(I));
  return (
    E.length &&
      (s = ce(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${E.toString()}
      Received: ${Object.keys(e).toString()}`
      )),
    cn(d, f) ||
      (s = ce(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces chains don't satisfy required namespaces.
      Required: ${d.toString()}
      Approved: ${f.toString()}`
      )),
    Object.keys(e).forEach((I) => {
      if (!I.includes(":") || s) return;
      const P = Gn(e[I].accounts);
      P.includes(I) ||
        (s = ce(
          "NON_CONFORMING_NAMESPACES",
          `${t} namespaces accounts don't satisfy namespace accounts for ${I}
        Required: ${I}
        Approved: ${P.toString()}`
        ));
    }),
    d.forEach((I) => {
      s ||
        (cn(o[I].methods, u[I].methods)
          ? cn(o[I].events, u[I].events) ||
            (s = ce(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces events don't satisfy namespace events for ${I}`
            ))
          : (s = ce(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces methods don't satisfy namespace methods for ${I}`
            )));
    }),
    s
  );
}
function yS(i) {
  const e = {};
  return (
    Object.keys(i).forEach((t) => {
      var s;
      t.includes(":")
        ? (e[t] = i[t])
        : (s = i[t].chains) == null ||
          s.forEach((o) => {
            e[o] = { methods: i[t].methods, events: i[t].events };
          });
    }),
    e
  );
}
function td(i) {
  return [...new Set(i.map((e) => (e.includes(":") ? e.split(":")[0] : e)))];
}
function mS(i) {
  const e = {};
  return (
    Object.keys(i).forEach((t) => {
      t.includes(":")
        ? (e[t] = i[t])
        : Gn(i[t].accounts)?.forEach((o) => {
            e[o] = {
              accounts: i[t].accounts.filter((u) => u.includes(`${o}:`)),
              methods: i[t].methods,
              events: i[t].events,
            };
          });
    }),
    e
  );
}
function vS(i, e) {
  return Yu(i, !1) && i <= e.max && i >= e.min;
}
function rd() {
  const i = Rs();
  return new Promise((e) => {
    switch (i) {
      case Tr.browser:
        e(wS());
        break;
      case Tr.reactNative:
        e(_S());
        break;
      case Tr.node:
        e(bS());
        break;
      default:
        e(!0);
    }
  });
}
function wS() {
  return Wn() && navigator?.onLine;
}
async function _S() {
  return Vn() && typeof global < "u" && global != null && global.NetInfo
    ? (await (global == null ? void 0 : global.NetInfo.fetch()))?.isConnected
    : !0;
}
function bS() {
  return !0;
}
function ES(i) {
  switch (Rs()) {
    case Tr.browser:
      DS(i);
      break;
    case Tr.reactNative:
      SS(i);
      break;
  }
}
function DS(i) {
  !Vn() &&
    Wn() &&
    (window.addEventListener("online", () => i(!0)),
    window.addEventListener("offline", () => i(!1)));
}
function SS(i) {
  Vn() &&
    typeof global < "u" &&
    global != null &&
    global.NetInfo &&
    global?.NetInfo.addEventListener((e) => i(e?.isConnected));
}
const Qc = {};
let zo = class {
  static get(e) {
    return Qc[e];
  }
  static set(e, t) {
    Qc[e] = t;
  }
  static delete(e) {
    delete Qc[e];
  }
};
const IS = "PARSE_ERROR",
  OS = "INVALID_REQUEST",
  xS = "METHOD_NOT_FOUND",
  PS = "INVALID_PARAMS",
  jp = "INTERNAL_ERROR",
  Qu = "SERVER_ERROR",
  CS = [-32700, -32600, -32601, -32602, -32603],
  Is = {
    [IS]: { code: -32700, message: "Parse error" },
    [OS]: { code: -32600, message: "Invalid Request" },
    [xS]: { code: -32601, message: "Method not found" },
    [PS]: { code: -32602, message: "Invalid params" },
    [jp]: { code: -32603, message: "Internal error" },
    [Qu]: { code: -32e3, message: "Server error" },
  },
  Mp = Qu;
function TS(i) {
  return CS.includes(i);
}
function id(i) {
  return Object.keys(Is).includes(i) ? Is[i] : Is[Mp];
}
function AS(i) {
  const e = Object.values(Is).find((t) => t.code === i);
  return e || Is[Mp];
}
function qp(i, e, t) {
  return i.message.includes("getaddrinfo ENOTFOUND") ||
    i.message.includes("connect ECONNREFUSED")
    ? new Error(`Unavailable ${t} RPC url at ${e}`)
    : i;
}
var Bp = {},
  wi = {},
  nd;
function NS() {
  if (nd) return wi;
  (nd = 1),
    Object.defineProperty(wi, "__esModule", { value: !0 }),
    (wi.isBrowserCryptoAvailable =
      wi.getSubtleCrypto =
      wi.getBrowerCrypto =
        void 0);
  function i() {
    return (
      (Qr === null || Qr === void 0 ? void 0 : Qr.crypto) ||
      (Qr === null || Qr === void 0 ? void 0 : Qr.msCrypto) ||
      {}
    );
  }
  wi.getBrowerCrypto = i;
  function e() {
    const s = i();
    return s.subtle || s.webkitSubtle;
  }
  wi.getSubtleCrypto = e;
  function t() {
    return !!i() && !!e();
  }
  return (wi.isBrowserCryptoAvailable = t), wi;
}
var _i = {},
  sd;
function RS() {
  if (sd) return _i;
  (sd = 1),
    Object.defineProperty(_i, "__esModule", { value: !0 }),
    (_i.isBrowser = _i.isNode = _i.isReactNative = void 0);
  function i() {
    return (
      typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    );
  }
  _i.isReactNative = i;
  function e() {
    return (
      typeof process < "u" &&
      typeof process.versions < "u" &&
      typeof process.versions.node < "u"
    );
  }
  _i.isNode = e;
  function t() {
    return !i() && !e();
  }
  return (_i.isBrowser = t), _i;
}
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  const e = oi;
  e.__exportStar(NS(), i), e.__exportStar(RS(), i);
})(Bp);
function Xu(i = 3) {
  const e = Date.now() * Math.pow(10, i),
    t = Math.floor(Math.random() * Math.pow(10, i));
  return e + t;
}
function Hp(i = 6) {
  return BigInt(Xu(i));
}
function Bn(i, e, t) {
  return { id: t || Xu(), jsonrpc: "2.0", method: i, params: e };
}
function ha(i, e) {
  return { id: i, jsonrpc: "2.0", result: e };
}
function la(i, e, t) {
  return { id: i, jsonrpc: "2.0", error: FS(e, t) };
}
function FS(i, e) {
  return typeof i > "u"
    ? id(jp)
    : (typeof i == "string" &&
        (i = Object.assign(Object.assign({}, id(Qu)), { message: i })),
      typeof e < "u" && (i.data = e),
      TS(i.code) && (i = AS(i.code)),
      i);
}
class US {}
class $S extends US {
  constructor() {
    super();
  }
}
class LS extends $S {
  constructor(e) {
    super();
  }
}
const jS = "^https?:",
  MS = "^wss?:";
function qS(i) {
  const e = i.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length)) return e[0];
}
function zp(i, e) {
  const t = qS(i);
  return typeof t > "u" ? !1 : new RegExp(e).test(t);
}
function od(i) {
  return zp(i, jS);
}
function ad(i) {
  return zp(i, MS);
}
function BS(i) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(i);
}
function Kp(i) {
  return (
    typeof i == "object" && "id" in i && "jsonrpc" in i && i.jsonrpc === "2.0"
  );
}
function Zu(i) {
  return Kp(i) && "method" in i;
}
function fa(i) {
  return Kp(i) && (Si(i) || Yr(i));
}
function Si(i) {
  return "result" in i;
}
function Yr(i) {
  return "error" in i;
}
class Ii extends LS {
  constructor(e) {
    super(e),
      (this.events = new Hr.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(e)),
      this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async request(e, t) {
    return this.requestStrict(
      Bn(e.method, e.params || [], e.id || Hp().toString()),
      t
    );
  }
  async requestStrict(e, t) {
    return new Promise(async (s, o) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (u) {
          o(u);
        }
      this.events.on(`${e.id}`, (u) => {
        Yr(u) ? o(u.error) : s(u.result);
      });
      try {
        await this.connection.send(e, t);
      } catch (u) {
        o(u);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e),
      fa(e)
        ? this.events.emit(`${e.id}`, e)
        : this.events.emit("message", { type: e.method, data: e.params });
  }
  onClose(e) {
    e &&
      e.code === 3e3 &&
      this.events.emit(
        "error",
        new Error(
          `WebSocket connection closed abnormally with code: ${e.code} ${
            e.reason ? `(${e.reason})` : ""
          }`
        )
      ),
      this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    (this.connection === e && this.connection.connected) ||
      (this.connection.connected && this.close(),
      typeof e == "string" &&
        (await this.connection.open(e), (e = this.connection)),
      (this.connection = this.setConnection(e)),
      await this.connection.open(),
      this.registerEventListeners(),
      this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on("payload", (e) => this.onPayload(e)),
      this.connection.on("close", (e) => this.onClose(e)),
      this.connection.on("error", (e) => this.events.emit("error", e)),
      this.connection.on("register_error", (e) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
}
const HS = (i) =>
    JSON.stringify(i, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    ),
  zS = (i) => {
    const e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      t = i.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (s, o) =>
      typeof o == "string" && o.match(/^\d+n$/)
        ? BigInt(o.substring(0, o.length - 1))
        : o
    );
  };
function KS(i) {
  if (typeof i != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof i}`);
  try {
    return zS(i);
  } catch {
    return i;
  }
}
function kS(i) {
  return typeof i == "string" ? i : HS(i) || "";
}
const VS = () =>
    typeof WebSocket < "u"
      ? WebSocket
      : typeof global < "u" && typeof global.WebSocket < "u"
      ? global.WebSocket
      : typeof window < "u" && typeof window.WebSocket < "u"
      ? window.WebSocket
      : typeof self < "u" && typeof self.WebSocket < "u"
      ? self.WebSocket
      : require("ws"),
  WS = () =>
    typeof WebSocket < "u" ||
    (typeof global < "u" && typeof global.WebSocket < "u") ||
    (typeof window < "u" && typeof window.WebSocket < "u") ||
    (typeof self < "u" && typeof self.WebSocket < "u"),
  cd = (i) => i.split("?")[0],
  ud = 10,
  GS = VS();
let JS = class {
  constructor(e) {
    if (
      ((this.url = e),
      (this.events = new Hr.EventEmitter()),
      (this.registering = !1),
      !ad(e))
    )
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${e}`
      );
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      (this.socket.onclose = (s) => {
        this.onClose(s), e();
      }),
        this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(kS(e));
    } catch (t) {
      this.onError(e.id, t);
    }
  }
  register(e = this.url) {
    if (!ad(e))
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${e}`
      );
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= t ||
          this.events.listenerCount("open") >= t) &&
          this.events.setMaxListeners(t + 1),
        new Promise((s, o) => {
          this.events.once("register_error", (u) => {
            this.resetMaxListeners(), o(u);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.socket > "u"))
                return o(
                  new Error("WebSocket connection is missing or invalid")
                );
              s(this.socket);
            });
        })
      );
    }
    return (
      (this.url = e),
      (this.registering = !0),
      new Promise((t, s) => {
        const o = new URLSearchParams(e).get("origin"),
          u = Bp.isReactNative()
            ? { headers: { origin: o } }
            : { rejectUnauthorized: !BS(e) },
          d = new GS(e, [], u);
        WS()
          ? (d.onerror = (f) => {
              const _ = f;
              s(this.emitError(_.error));
            })
          : d.on("error", (f) => {
              s(this.emitError(f));
            }),
          (d.onopen = () => {
            this.onOpen(d), t(d);
          });
      })
    );
  }
  onOpen(e) {
    (e.onmessage = (t) => this.onPayload(t)),
      (e.onclose = (t) => this.onClose(t)),
      (this.socket = e),
      (this.registering = !1),
      this.events.emit("open");
  }
  onClose(e) {
    (this.socket = void 0),
      (this.registering = !1),
      this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? KS(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const s = this.parseError(t),
      o = s.message || s.toString(),
      u = la(e, o);
    this.events.emit("payload", u);
  }
  parseError(e, t = this.url) {
    return qp(e, cd(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > ud && this.events.setMaxListeners(ud);
  }
  emitError(e) {
    const t = this.parseError(
      new Error(
        e?.message || `WebSocket connection failed for host: ${cd(this.url)}`
      )
    );
    return this.events.emit("register_error", t), t;
  }
};
var ra = { exports: {} };
ra.exports;
(function (i, e) {
  var t = 200,
    s = "__lodash_hash_undefined__",
    o = 1,
    u = 2,
    d = 9007199254740991,
    f = "[object Arguments]",
    _ = "[object Array]",
    y = "[object AsyncFunction]",
    E = "[object Boolean]",
    I = "[object Date]",
    P = "[object Error]",
    T = "[object Function]",
    A = "[object GeneratorFunction]",
    q = "[object Map]",
    L = "[object Number]",
    Y = "[object Null]",
    p = "[object Object]",
    D = "[object Promise]",
    v = "[object Proxy]",
    b = "[object RegExp]",
    g = "[object Set]",
    c = "[object String]",
    w = "[object Symbol]",
    K = "[object Undefined]",
    G = "[object WeakMap]",
    se = "[object ArrayBuffer]",
    ue = "[object DataView]",
    de = "[object Float32Array]",
    x = "[object Float64Array]",
    R = "[object Int8Array]",
    te = "[object Int16Array]",
    X = "[object Int32Array]",
    V = "[object Uint8Array]",
    W = "[object Uint8ClampedArray]",
    Q = "[object Uint16Array]",
    ie = "[object Uint32Array]",
    _e = /[\\^$.*+?()[\]{}|]/g,
    oe = /^\[object .+?Constructor\]$/,
    be = /^(?:0|[1-9]\d*)$/,
    le = {};
  (le[de] =
    le[x] =
    le[R] =
    le[te] =
    le[X] =
    le[V] =
    le[W] =
    le[Q] =
    le[ie] =
      !0),
    (le[f] =
      le[_] =
      le[se] =
      le[E] =
      le[ue] =
      le[I] =
      le[P] =
      le[T] =
      le[q] =
      le[L] =
      le[p] =
      le[b] =
      le[g] =
      le[c] =
      le[G] =
        !1);
  var ve = typeof Qr == "object" && Qr && Qr.Object === Object && Qr,
    z = typeof self == "object" && self && self.Object === Object && self,
    H = ve || z || Function("return this")(),
    $ = e && !e.nodeType && e,
    l = $ && !0 && i && !i.nodeType && i,
    F = l && l.exports === $,
    ae = F && ve.process,
    fe = (function () {
      try {
        return ae && ae.binding && ae.binding("util");
      } catch {}
    })(),
    Ie = fe && fe.isTypedArray;
  function He(C, j) {
    for (
      var re = -1, pe = C == null ? 0 : C.length, at = 0, Ae = [];
      ++re < pe;

    ) {
      var pt = C[re];
      j(pt, re, C) && (Ae[at++] = pt);
    }
    return Ae;
  }
  function ke(C, j) {
    for (var re = -1, pe = j.length, at = C.length; ++re < pe; )
      C[at + re] = j[re];
    return C;
  }
  function Le(C, j) {
    for (var re = -1, pe = C == null ? 0 : C.length; ++re < pe; )
      if (j(C[re], re, C)) return !0;
    return !1;
  }
  function yt(C, j) {
    for (var re = -1, pe = Array(C); ++re < C; ) pe[re] = j(re);
    return pe;
  }
  function mt(C) {
    return function (j) {
      return C(j);
    };
  }
  function Me(C, j) {
    return C.has(j);
  }
  function Oe(C, j) {
    return C?.[j];
  }
  function Re(C) {
    var j = -1,
      re = Array(C.size);
    return (
      C.forEach(function (pe, at) {
        re[++j] = [at, pe];
      }),
      re
    );
  }
  function Fe(C, j) {
    return function (re) {
      return C(j(re));
    };
  }
  function qe(C) {
    var j = -1,
      re = Array(C.size);
    return (
      C.forEach(function (pe) {
        re[++j] = pe;
      }),
      re
    );
  }
  var Pe = Array.prototype,
    Ue = Function.prototype,
    Se = Object.prototype,
    Ce = H["__core-js_shared__"],
    ze = Ue.toString,
    xe = Se.hasOwnProperty,
    Ve = (function () {
      var C = /[^.]+$/.exec((Ce && Ce.keys && Ce.keys.IE_PROTO) || "");
      return C ? "Symbol(src)_1." + C : "";
    })(),
    Ge = Se.toString,
    et = RegExp(
      "^" +
        ze
          .call(xe)
          .replace(_e, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    tt = F ? H.Buffer : void 0,
    Qe = H.Symbol,
    ir = H.Uint8Array,
    pr = Se.propertyIsEnumerable,
    Xr = Pe.splice,
    nr = Qe ? Qe.toStringTag : void 0,
    ai = Object.getOwnPropertySymbols,
    xi = tt ? tt.isBuffer : void 0,
    zi = Fe(Object.keys, Object),
    St = Dr(H, "DataView"),
    vt = Dr(H, "Map"),
    It = Dr(H, "Promise"),
    Ot = Dr(H, "Set"),
    Et = Dr(H, "WeakMap"),
    wt = Dr(Object, "create"),
    Lt = ui(St),
    jt = ui(vt),
    xt = ui(It),
    Mt = ui(Ot),
    Pt = ui(Et),
    At = Qe ? Qe.prototype : void 0,
    Ct = At ? At.valueOf : void 0;
  function ht(C) {
    var j = -1,
      re = C == null ? 0 : C.length;
    for (this.clear(); ++j < re; ) {
      var pe = C[j];
      this.set(pe[0], pe[1]);
    }
  }
  function qt() {
    (this.__data__ = wt ? wt(null) : {}), (this.size = 0);
  }
  function Bt(C) {
    var j = this.has(C) && delete this.__data__[C];
    return (this.size -= j ? 1 : 0), j;
  }
  function ga(C) {
    var j = this.__data__;
    if (wt) {
      var re = j[C];
      return re === s ? void 0 : re;
    }
    return xe.call(j, C) ? j[C] : void 0;
  }
  function ya(C) {
    var j = this.__data__;
    return wt ? j[C] !== void 0 : xe.call(j, C);
  }
  function ma(C, j) {
    var re = this.__data__;
    return (
      (this.size += this.has(C) ? 0 : 1),
      (re[C] = wt && j === void 0 ? s : j),
      this
    );
  }
  (ht.prototype.clear = qt),
    (ht.prototype.delete = Bt),
    (ht.prototype.get = ga),
    (ht.prototype.has = ya),
    (ht.prototype.set = ma);
  function Nr(C) {
    var j = -1,
      re = C == null ? 0 : C.length;
    for (this.clear(); ++j < re; ) {
      var pe = C[j];
      this.set(pe[0], pe[1]);
    }
  }
  function va() {
    (this.__data__ = []), (this.size = 0);
  }
  function wa(C) {
    var j = this.__data__,
      re = Ki(j, C);
    if (re < 0) return !1;
    var pe = j.length - 1;
    return re == pe ? j.pop() : Xr.call(j, re, 1), --this.size, !0;
  }
  function _a(C) {
    var j = this.__data__,
      re = Ki(j, C);
    return re < 0 ? void 0 : j[re][1];
  }
  function ba(C) {
    return Ki(this.__data__, C) > -1;
  }
  function Ea(C, j) {
    var re = this.__data__,
      pe = Ki(re, C);
    return pe < 0 ? (++this.size, re.push([C, j])) : (re[pe][1] = j), this;
  }
  (Nr.prototype.clear = va),
    (Nr.prototype.delete = wa),
    (Nr.prototype.get = _a),
    (Nr.prototype.has = ba),
    (Nr.prototype.set = Ea);
  function ci(C) {
    var j = -1,
      re = C == null ? 0 : C.length;
    for (this.clear(); ++j < re; ) {
      var pe = C[j];
      this.set(pe[0], pe[1]);
    }
  }
  function yn() {
    (this.size = 0),
      (this.__data__ = {
        hash: new ht(),
        map: new (vt || Nr)(),
        string: new ht(),
      });
  }
  function Da(C) {
    var j = Pi(this, C).delete(C);
    return (this.size -= j ? 1 : 0), j;
  }
  function mn(C) {
    return Pi(this, C).get(C);
  }
  function Sa(C) {
    return Pi(this, C).has(C);
  }
  function Ia(C, j) {
    var re = Pi(this, C),
      pe = re.size;
    return re.set(C, j), (this.size += re.size == pe ? 0 : 1), this;
  }
  (ci.prototype.clear = yn),
    (ci.prototype.delete = Da),
    (ci.prototype.get = mn),
    (ci.prototype.has = Sa),
    (ci.prototype.set = Ia);
  function vn(C) {
    var j = -1,
      re = C == null ? 0 : C.length;
    for (this.__data__ = new ci(); ++j < re; ) this.add(C[j]);
  }
  function $s(C) {
    return this.__data__.set(C, s), this;
  }
  function Ls(C) {
    return this.__data__.has(C);
  }
  (vn.prototype.add = vn.prototype.push = $s), (vn.prototype.has = Ls);
  function zr(C) {
    var j = (this.__data__ = new Nr(C));
    this.size = j.size;
  }
  function Oa() {
    (this.__data__ = new Nr()), (this.size = 0);
  }
  function xa(C) {
    var j = this.__data__,
      re = j.delete(C);
    return (this.size = j.size), re;
  }
  function Pa(C) {
    return this.__data__.get(C);
  }
  function Ca(C) {
    return this.__data__.has(C);
  }
  function js(C, j) {
    var re = this.__data__;
    if (re instanceof Nr) {
      var pe = re.__data__;
      if (!vt || pe.length < t - 1)
        return pe.push([C, j]), (this.size = ++re.size), this;
      re = this.__data__ = new ci(pe);
    }
    return re.set(C, j), (this.size = re.size), this;
  }
  (zr.prototype.clear = Oa),
    (zr.prototype.delete = xa),
    (zr.prototype.get = Pa),
    (zr.prototype.has = Ca),
    (zr.prototype.set = js);
  function Ms(C, j) {
    var re = bn(C),
      pe = !re && Qs(C),
      at = !re && !pe && Xn(C),
      Ae = !re && !pe && !at && eo(C),
      pt = re || pe || at || Ae,
      Ht = pt ? yt(C.length, String) : [],
      Xe = Ht.length;
    for (var ct in C)
      (j || xe.call(C, ct)) &&
        !(
          pt &&
          (ct == "length" ||
            (at && (ct == "offset" || ct == "parent")) ||
            (Ae &&
              (ct == "buffer" || ct == "byteLength" || ct == "byteOffset")) ||
            Vs(ct, Xe))
        ) &&
        Ht.push(ct);
    return Ht;
  }
  function Ki(C, j) {
    for (var re = C.length; re--; ) if (Ys(C[re][0], j)) return re;
    return -1;
  }
  function Yn(C, j, re) {
    var pe = j(C);
    return bn(C) ? pe : ke(pe, re(C));
  }
  function ki(C) {
    return C == null
      ? C === void 0
        ? K
        : Y
      : nr && nr in Object(C)
      ? Ks(C)
      : Na(C);
  }
  function Qn(C) {
    return Wi(C) && ki(C) == f;
  }
  function Vi(C, j, re, pe, at) {
    return C === j
      ? !0
      : C == null || j == null || (!Wi(C) && !Wi(j))
      ? C !== C && j !== j
      : qs(C, j, re, pe, Vi, at);
  }
  function qs(C, j, re, pe, at, Ae) {
    var pt = bn(C),
      Ht = bn(j),
      Xe = pt ? _ : Zr(C),
      ct = Ht ? _ : Zr(j);
    (Xe = Xe == f ? p : Xe), (ct = ct == f ? p : ct);
    var Nt = Xe == p,
      gr = ct == p,
      zt = Xe == ct;
    if (zt && Xn(C)) {
      if (!Xn(j)) return !1;
      (pt = !0), (Nt = !1);
    }
    if (zt && !Nt)
      return (
        Ae || (Ae = new zr()),
        pt || eo(C) ? wn(C, j, re, pe, at, Ae) : Aa(C, j, Xe, re, pe, at, Ae)
      );
    if (!(re & o)) {
      var gt = Nt && xe.call(C, "__wrapped__"),
        sr = gr && xe.call(j, "__wrapped__");
      if (gt || sr) {
        var Kr = gt ? C.value() : C,
          Rr = sr ? j.value() : j;
        return Ae || (Ae = new zr()), at(Kr, Rr, re, pe, Ae);
      }
    }
    return zt ? (Ae || (Ae = new zr()), zs(C, j, re, pe, at, Ae)) : !1;
  }
  function Ta(C) {
    if (!Zs(C) || Gs(C)) return !1;
    var j = En(C) ? et : oe;
    return j.test(ui(C));
  }
  function Bs(C) {
    return Wi(C) && Xs(C.length) && !!le[ki(C)];
  }
  function Hs(C) {
    if (!Js(C)) return zi(C);
    var j = [];
    for (var re in Object(C))
      xe.call(C, re) && re != "constructor" && j.push(re);
    return j;
  }
  function wn(C, j, re, pe, at, Ae) {
    var pt = re & o,
      Ht = C.length,
      Xe = j.length;
    if (Ht != Xe && !(pt && Xe > Ht)) return !1;
    var ct = Ae.get(C);
    if (ct && Ae.get(j)) return ct == j;
    var Nt = -1,
      gr = !0,
      zt = re & u ? new vn() : void 0;
    for (Ae.set(C, j), Ae.set(j, C); ++Nt < Ht; ) {
      var gt = C[Nt],
        sr = j[Nt];
      if (pe) var Kr = pt ? pe(sr, gt, Nt, j, C, Ae) : pe(gt, sr, Nt, C, j, Ae);
      if (Kr !== void 0) {
        if (Kr) continue;
        gr = !1;
        break;
      }
      if (zt) {
        if (
          !Le(j, function (Rr, ei) {
            if (!Me(zt, ei) && (gt === Rr || at(gt, Rr, re, pe, Ae)))
              return zt.push(ei);
          })
        ) {
          gr = !1;
          break;
        }
      } else if (!(gt === sr || at(gt, sr, re, pe, Ae))) {
        gr = !1;
        break;
      }
    }
    return Ae.delete(C), Ae.delete(j), gr;
  }
  function Aa(C, j, re, pe, at, Ae, pt) {
    switch (re) {
      case ue:
        if (C.byteLength != j.byteLength || C.byteOffset != j.byteOffset)
          return !1;
        (C = C.buffer), (j = j.buffer);
      case se:
        return !(C.byteLength != j.byteLength || !Ae(new ir(C), new ir(j)));
      case E:
      case I:
      case L:
        return Ys(+C, +j);
      case P:
        return C.name == j.name && C.message == j.message;
      case b:
      case c:
        return C == j + "";
      case q:
        var Ht = Re;
      case g:
        var Xe = pe & o;
        if ((Ht || (Ht = qe), C.size != j.size && !Xe)) return !1;
        var ct = pt.get(C);
        if (ct) return ct == j;
        (pe |= u), pt.set(C, j);
        var Nt = wn(Ht(C), Ht(j), pe, at, Ae, pt);
        return pt.delete(C), Nt;
      case w:
        if (Ct) return Ct.call(C) == Ct.call(j);
    }
    return !1;
  }
  function zs(C, j, re, pe, at, Ae) {
    var pt = re & o,
      Ht = _n(C),
      Xe = Ht.length,
      ct = _n(j),
      Nt = ct.length;
    if (Xe != Nt && !pt) return !1;
    for (var gr = Xe; gr--; ) {
      var zt = Ht[gr];
      if (!(pt ? zt in j : xe.call(j, zt))) return !1;
    }
    var gt = Ae.get(C);
    if (gt && Ae.get(j)) return gt == j;
    var sr = !0;
    Ae.set(C, j), Ae.set(j, C);
    for (var Kr = pt; ++gr < Xe; ) {
      zt = Ht[gr];
      var Rr = C[zt],
        ei = j[zt];
      if (pe) var Zn = pt ? pe(ei, Rr, zt, j, C, Ae) : pe(Rr, ei, zt, C, j, Ae);
      if (!(Zn === void 0 ? Rr === ei || at(Rr, ei, re, pe, Ae) : Zn)) {
        sr = !1;
        break;
      }
      Kr || (Kr = zt == "constructor");
    }
    if (sr && !Kr) {
      var Gi = C.constructor,
        Vt = j.constructor;
      Gi != Vt &&
        "constructor" in C &&
        "constructor" in j &&
        !(
          typeof Gi == "function" &&
          Gi instanceof Gi &&
          typeof Vt == "function" &&
          Vt instanceof Vt
        ) &&
        (sr = !1);
    }
    return Ae.delete(C), Ae.delete(j), sr;
  }
  function _n(C) {
    return Yn(C, Ua, ks);
  }
  function Pi(C, j) {
    var re = C.__data__;
    return Ws(j) ? re[typeof j == "string" ? "string" : "hash"] : re.map;
  }
  function Dr(C, j) {
    var re = Oe(C, j);
    return Ta(re) ? re : void 0;
  }
  function Ks(C) {
    var j = xe.call(C, nr),
      re = C[nr];
    try {
      C[nr] = void 0;
      var pe = !0;
    } catch {}
    var at = Ge.call(C);
    return pe && (j ? (C[nr] = re) : delete C[nr]), at;
  }
  var ks = ai
      ? function (C) {
          return C == null
            ? []
            : ((C = Object(C)),
              He(ai(C), function (j) {
                return pr.call(C, j);
              }));
        }
      : ot,
    Zr = ki;
  ((St && Zr(new St(new ArrayBuffer(1))) != ue) ||
    (vt && Zr(new vt()) != q) ||
    (It && Zr(It.resolve()) != D) ||
    (Ot && Zr(new Ot()) != g) ||
    (Et && Zr(new Et()) != G)) &&
    (Zr = function (C) {
      var j = ki(C),
        re = j == p ? C.constructor : void 0,
        pe = re ? ui(re) : "";
      if (pe)
        switch (pe) {
          case Lt:
            return ue;
          case jt:
            return q;
          case xt:
            return D;
          case Mt:
            return g;
          case Pt:
            return G;
        }
      return j;
    });
  function Vs(C, j) {
    return (
      (j = j ?? d),
      !!j &&
        (typeof C == "number" || be.test(C)) &&
        C > -1 &&
        C % 1 == 0 &&
        C < j
    );
  }
  function Ws(C) {
    var j = typeof C;
    return j == "string" || j == "number" || j == "symbol" || j == "boolean"
      ? C !== "__proto__"
      : C === null;
  }
  function Gs(C) {
    return !!Ve && Ve in C;
  }
  function Js(C) {
    var j = C && C.constructor,
      re = (typeof j == "function" && j.prototype) || Se;
    return C === re;
  }
  function Na(C) {
    return Ge.call(C);
  }
  function ui(C) {
    if (C != null) {
      try {
        return ze.call(C);
      } catch {}
      try {
        return C + "";
      } catch {}
    }
    return "";
  }
  function Ys(C, j) {
    return C === j || (C !== C && j !== j);
  }
  var Qs = Qn(
      (function () {
        return arguments;
      })()
    )
      ? Qn
      : function (C) {
          return Wi(C) && xe.call(C, "callee") && !pr.call(C, "callee");
        },
    bn = Array.isArray;
  function Ra(C) {
    return C != null && Xs(C.length) && !En(C);
  }
  var Xn = xi || st;
  function Fa(C, j) {
    return Vi(C, j);
  }
  function En(C) {
    if (!Zs(C)) return !1;
    var j = ki(C);
    return j == T || j == A || j == y || j == v;
  }
  function Xs(C) {
    return typeof C == "number" && C > -1 && C % 1 == 0 && C <= d;
  }
  function Zs(C) {
    var j = typeof C;
    return C != null && (j == "object" || j == "function");
  }
  function Wi(C) {
    return C != null && typeof C == "object";
  }
  var eo = Ie ? mt(Ie) : Bs;
  function Ua(C) {
    return Ra(C) ? Ms(C) : Hs(C);
  }
  function ot() {
    return [];
  }
  function st() {
    return !1;
  }
  i.exports = Fa;
})(ra, ra.exports);
var YS = ra.exports;
const QS = Nu(YS);
function XS(i, e) {
  return (
    (e = e || {}),
    new Promise(function (t, s) {
      var o = new XMLHttpRequest(),
        u = [],
        d = [],
        f = {},
        _ = function () {
          return {
            ok: ((o.status / 100) | 0) == 2,
            statusText: o.statusText,
            status: o.status,
            url: o.responseURL,
            text: function () {
              return Promise.resolve(o.responseText);
            },
            json: function () {
              return Promise.resolve(o.responseText).then(JSON.parse);
            },
            blob: function () {
              return Promise.resolve(new Blob([o.response]));
            },
            clone: _,
            headers: {
              keys: function () {
                return u;
              },
              entries: function () {
                return d;
              },
              get: function (E) {
                return f[E.toLowerCase()];
              },
              has: function (E) {
                return E.toLowerCase() in f;
              },
            },
          };
        };
      for (var y in (o.open(e.method || "get", i, !0),
      (o.onload = function () {
        o
          .getAllResponseHeaders()
          .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (E, I, P) {
            u.push((I = I.toLowerCase())),
              d.push([I, P]),
              (f[I] = f[I] ? f[I] + "," + P : P);
          }),
          t(_());
      }),
      (o.onerror = s),
      (o.withCredentials = e.credentials == "include"),
      e.headers))
        o.setRequestHeader(y, e.headers[y]);
      o.send(e.body || null);
    })
  );
}
const ZS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: XS },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  hd = Au(ZS);
var e2 = self.fetch || (self.fetch = hd.default || hd);
const t2 = Nu(e2);
function r2(i, e) {
  if (i.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s = 0; s < t.length; s++) t[s] = 255;
  for (var o = 0; o < i.length; o++) {
    var u = i.charAt(o),
      d = u.charCodeAt(0);
    if (t[d] !== 255) throw new TypeError(u + " is ambiguous");
    t[d] = o;
  }
  var f = i.length,
    _ = i.charAt(0),
    y = Math.log(f) / Math.log(256),
    E = Math.log(256) / Math.log(f);
  function I(A) {
    if (
      (A instanceof Uint8Array ||
        (ArrayBuffer.isView(A)
          ? (A = new Uint8Array(A.buffer, A.byteOffset, A.byteLength))
          : Array.isArray(A) && (A = Uint8Array.from(A))),
      !(A instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (A.length === 0) return "";
    for (var q = 0, L = 0, Y = 0, p = A.length; Y !== p && A[Y] === 0; )
      Y++, q++;
    for (var D = ((p - Y) * E + 1) >>> 0, v = new Uint8Array(D); Y !== p; ) {
      for (
        var b = A[Y], g = 0, c = D - 1;
        (b !== 0 || g < L) && c !== -1;
        c--, g++
      )
        (b += (256 * v[c]) >>> 0), (v[c] = b % f >>> 0), (b = (b / f) >>> 0);
      if (b !== 0) throw new Error("Non-zero carry");
      (L = g), Y++;
    }
    for (var w = D - L; w !== D && v[w] === 0; ) w++;
    for (var K = _.repeat(q); w < D; ++w) K += i.charAt(v[w]);
    return K;
  }
  function P(A) {
    if (typeof A != "string") throw new TypeError("Expected String");
    if (A.length === 0) return new Uint8Array();
    var q = 0;
    if (A[q] !== " ") {
      for (var L = 0, Y = 0; A[q] === _; ) L++, q++;
      for (
        var p = ((A.length - q) * y + 1) >>> 0, D = new Uint8Array(p);
        A[q];

      ) {
        var v = t[A.charCodeAt(q)];
        if (v === 255) return;
        for (var b = 0, g = p - 1; (v !== 0 || b < Y) && g !== -1; g--, b++)
          (v += (f * D[g]) >>> 0),
            (D[g] = v % 256 >>> 0),
            (v = (v / 256) >>> 0);
        if (v !== 0) throw new Error("Non-zero carry");
        (Y = b), q++;
      }
      if (A[q] !== " ") {
        for (var c = p - Y; c !== p && D[c] === 0; ) c++;
        for (var w = new Uint8Array(L + (p - c)), K = L; c !== p; )
          w[K++] = D[c++];
        return w;
      }
    }
  }
  function T(A) {
    var q = P(A);
    if (q) return q;
    throw new Error(`Non-${e} character`);
  }
  return { encode: I, decodeUnsafe: P, decode: T };
}
var i2 = r2,
  n2 = i2;
const kp = (i) => {
    if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
      return i;
    if (i instanceof ArrayBuffer) return new Uint8Array(i);
    if (ArrayBuffer.isView(i))
      return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  s2 = (i) => new TextEncoder().encode(i),
  o2 = (i) => new TextDecoder().decode(i);
class a2 {
  constructor(e, t, s) {
    (this.name = e), (this.prefix = t), (this.baseEncode = s);
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class c2 {
  constructor(e, t, s) {
    if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = s);
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(e)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Vp(this, e);
  }
}
class u2 {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Vp(this, e);
  }
  decode(e) {
    const t = e[0],
      s = this.decoders[t];
    if (s) return s.decode(e);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        e
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const Vp = (i, e) =>
  new u2({
    ...(i.decoders || { [i.prefix]: i }),
    ...(e.decoders || { [e.prefix]: e }),
  });
class h2 {
  constructor(e, t, s, o) {
    (this.name = e),
      (this.prefix = t),
      (this.baseEncode = s),
      (this.baseDecode = o),
      (this.encoder = new a2(e, t, s)),
      (this.decoder = new c2(e, t, o));
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const da = ({ name: i, prefix: e, encode: t, decode: s }) => new h2(i, e, t, s),
  Us = ({ prefix: i, name: e, alphabet: t }) => {
    const { encode: s, decode: o } = n2(t, e);
    return da({ prefix: i, name: e, encode: s, decode: (u) => kp(o(u)) });
  },
  l2 = (i, e, t, s) => {
    const o = {};
    for (let E = 0; E < e.length; ++E) o[e[E]] = E;
    let u = i.length;
    for (; i[u - 1] === "="; ) --u;
    const d = new Uint8Array(((u * t) / 8) | 0);
    let f = 0,
      _ = 0,
      y = 0;
    for (let E = 0; E < u; ++E) {
      const I = o[i[E]];
      if (I === void 0) throw new SyntaxError(`Non-${s} character`);
      (_ = (_ << t) | I),
        (f += t),
        f >= 8 && ((f -= 8), (d[y++] = 255 & (_ >> f)));
    }
    if (f >= t || 255 & (_ << (8 - f)))
      throw new SyntaxError("Unexpected end of data");
    return d;
  },
  f2 = (i, e, t) => {
    const s = e[e.length - 1] === "=",
      o = (1 << t) - 1;
    let u = "",
      d = 0,
      f = 0;
    for (let _ = 0; _ < i.length; ++_)
      for (f = (f << 8) | i[_], d += 8; d > t; )
        (d -= t), (u += e[o & (f >> d)]);
    if ((d && (u += e[o & (f << (t - d))]), s))
      for (; (u.length * t) & 7; ) u += "=";
    return u;
  },
  Xt = ({ name: i, prefix: e, bitsPerChar: t, alphabet: s }) =>
    da({
      prefix: e,
      name: i,
      encode(o) {
        return f2(o, s, t);
      },
      decode(o) {
        return l2(o, s, t, i);
      },
    }),
  d2 = da({
    prefix: "\0",
    name: "identity",
    encode: (i) => o2(i),
    decode: (i) => s2(i),
  });
var p2 = Object.freeze({ __proto__: null, identity: d2 });
const g2 = Xt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var y2 = Object.freeze({ __proto__: null, base2: g2 });
const m2 = Xt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3,
});
var v2 = Object.freeze({ __proto__: null, base8: m2 });
const w2 = Us({ prefix: "9", name: "base10", alphabet: "0123456789" });
var _2 = Object.freeze({ __proto__: null, base10: w2 });
const b2 = Xt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  E2 = Xt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  });
var D2 = Object.freeze({ __proto__: null, base16: b2, base16upper: E2 });
const S2 = Xt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  I2 = Xt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  O2 = Xt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  x2 = Xt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  P2 = Xt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  C2 = Xt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  T2 = Xt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  A2 = Xt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  N2 = Xt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  });
var R2 = Object.freeze({
  __proto__: null,
  base32: S2,
  base32upper: I2,
  base32pad: O2,
  base32padupper: x2,
  base32hex: P2,
  base32hexupper: C2,
  base32hexpad: T2,
  base32hexpadupper: A2,
  base32z: N2,
});
const F2 = Us({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  U2 = Us({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
var $2 = Object.freeze({ __proto__: null, base36: F2, base36upper: U2 });
const L2 = Us({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  j2 = Us({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  });
var M2 = Object.freeze({ __proto__: null, base58btc: L2, base58flickr: j2 });
const q2 = Xt({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  B2 = Xt({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  H2 = Xt({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  z2 = Xt({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  });
var K2 = Object.freeze({
  __proto__: null,
  base64: q2,
  base64pad: B2,
  base64url: H2,
  base64urlpad: z2,
});
const Wp = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  k2 = Wp.reduce((i, e, t) => ((i[t] = e), i), []),
  V2 = Wp.reduce((i, e, t) => ((i[e.codePointAt(0)] = t), i), []);
function W2(i) {
  return i.reduce((e, t) => ((e += k2[t]), e), "");
}
function G2(i) {
  const e = [];
  for (const t of i) {
    const s = V2[t.codePointAt(0)];
    if (s === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
const J2 = da({ prefix: "🚀", name: "base256emoji", encode: W2, decode: G2 });
var Y2 = Object.freeze({ __proto__: null, base256emoji: J2 }),
  Q2 = Gp,
  ld = 128,
  X2 = 127,
  Z2 = ~X2,
  e6 = Math.pow(2, 31);
function Gp(i, e, t) {
  (e = e || []), (t = t || 0);
  for (var s = t; i >= e6; ) (e[t++] = (i & 255) | ld), (i /= 128);
  for (; i & Z2; ) (e[t++] = (i & 255) | ld), (i >>>= 7);
  return (e[t] = i | 0), (Gp.bytes = t - s + 1), e;
}
var t6 = Su,
  r6 = 128,
  fd = 127;
function Su(i, s) {
  var t = 0,
    s = s || 0,
    o = 0,
    u = s,
    d,
    f = i.length;
  do {
    if (u >= f)
      throw ((Su.bytes = 0), new RangeError("Could not decode varint"));
    (d = i[u++]),
      (t += o < 28 ? (d & fd) << o : (d & fd) * Math.pow(2, o)),
      (o += 7);
  } while (d >= r6);
  return (Su.bytes = u - s), t;
}
var i6 = Math.pow(2, 7),
  n6 = Math.pow(2, 14),
  s6 = Math.pow(2, 21),
  o6 = Math.pow(2, 28),
  a6 = Math.pow(2, 35),
  c6 = Math.pow(2, 42),
  u6 = Math.pow(2, 49),
  h6 = Math.pow(2, 56),
  l6 = Math.pow(2, 63),
  f6 = function (i) {
    return i < i6
      ? 1
      : i < n6
      ? 2
      : i < s6
      ? 3
      : i < o6
      ? 4
      : i < a6
      ? 5
      : i < c6
      ? 6
      : i < u6
      ? 7
      : i < h6
      ? 8
      : i < l6
      ? 9
      : 10;
  },
  d6 = { encode: Q2, decode: t6, encodingLength: f6 },
  Jp = d6;
const dd = (i, e, t = 0) => (Jp.encode(i, e, t), e),
  pd = (i) => Jp.encodingLength(i),
  Iu = (i, e) => {
    const t = e.byteLength,
      s = pd(i),
      o = s + pd(t),
      u = new Uint8Array(o + t);
    return dd(i, u, 0), dd(t, u, s), u.set(e, o), new p6(i, t, e, u);
  };
class p6 {
  constructor(e, t, s, o) {
    (this.code = e), (this.size = t), (this.digest = s), (this.bytes = o);
  }
}
const Yp = ({ name: i, code: e, encode: t }) => new g6(i, e, t);
class g6 {
  constructor(e, t, s) {
    (this.name = e), (this.code = t), (this.encode = s);
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array
        ? Iu(this.code, t)
        : t.then((s) => Iu(this.code, s));
    } else throw Error("Unknown type, must be binary type");
  }
}
const Qp = (i) => async (e) => new Uint8Array(await crypto.subtle.digest(i, e)),
  y6 = Yp({ name: "sha2-256", code: 18, encode: Qp("SHA-256") }),
  m6 = Yp({ name: "sha2-512", code: 19, encode: Qp("SHA-512") });
var v6 = Object.freeze({ __proto__: null, sha256: y6, sha512: m6 });
const Xp = 0,
  w6 = "identity",
  Zp = kp,
  _6 = (i) => Iu(Xp, Zp(i)),
  b6 = { code: Xp, name: w6, encode: Zp, digest: _6 };
var E6 = Object.freeze({ __proto__: null, identity: b6 });
new TextEncoder(), new TextDecoder();
const gd = {
  ...p2,
  ...y2,
  ...v2,
  ..._2,
  ...D2,
  ...R2,
  ...$2,
  ...M2,
  ...K2,
  ...Y2,
};
({ ...v6, ...E6 });
function eg(i) {
  return globalThis.Buffer != null
    ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength)
    : i;
}
function D6(i = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? eg(globalThis.Buffer.allocUnsafe(i))
    : new Uint8Array(i);
}
function tg(i, e, t, s) {
  return {
    name: i,
    prefix: e,
    encoder: { name: i, prefix: e, encode: t },
    decoder: { decode: s },
  };
}
const yd = tg(
    "utf8",
    "u",
    (i) => "u" + new TextDecoder("utf8").decode(i),
    (i) => new TextEncoder().encode(i.substring(1))
  ),
  Xc = tg(
    "ascii",
    "a",
    (i) => {
      let e = "a";
      for (let t = 0; t < i.length; t++) e += String.fromCharCode(i[t]);
      return e;
    },
    (i) => {
      i = i.substring(1);
      const e = D6(i.length);
      for (let t = 0; t < i.length; t++) e[t] = i.charCodeAt(t);
      return e;
    }
  ),
  S6 = {
    utf8: yd,
    "utf-8": yd,
    hex: gd.base16,
    latin1: Xc,
    ascii: Xc,
    binary: Xc,
    ...gd,
  };
function I6(i, e = "utf8") {
  const t = S6[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? eg(globalThis.Buffer.from(i, "utf-8"))
    : t.decoder.decode(`${t.prefix}${i}`);
}
const rg = "wc",
  O6 = 2,
  eh = "core",
  Mi = `${rg}@2:${eh}:`,
  x6 = { name: eh, logger: "error" },
  P6 = { database: ":memory:" },
  C6 = "crypto",
  md = "client_ed25519_seed",
  T6 = me.ONE_DAY,
  A6 = "keychain",
  N6 = "0.3",
  R6 = "messages",
  F6 = "0.3",
  U6 = me.SIX_HOURS,
  $6 = "publisher",
  ig = "irn",
  L6 = "error",
  ng = "wss://relay.walletconnect.com",
  vd = "wss://relay.walletconnect.org",
  j6 = "relayer",
  rr = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish",
  },
  M6 = "_subscription",
  bi = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error",
  },
  q6 = me.ONE_SECOND,
  B6 = "2.11.2",
  H6 = 1e4,
  z6 = "0.3",
  K6 = "WALLETCONNECT_CLIENT_ID",
  Jr = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed",
  },
  k6 = "subscription",
  V6 = "0.3",
  W6 = me.FIVE_SECONDS * 1e3,
  G6 = "pairing",
  J6 = "0.3",
  ws = {
    wc_pairingDelete: {
      req: { ttl: me.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: me.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: me.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: me.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_method: {
      req: { ttl: me.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: me.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  Es = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping",
  },
  si = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync",
  },
  Y6 = "history",
  Q6 = "0.3",
  X6 = "expirer",
  Br = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync",
  },
  Z6 = "0.3",
  Zc = "verify-api",
  Mn = "https://verify.walletconnect.com",
  Ou = "https://verify.walletconnect.org",
  eI = [Mn, Ou],
  tI = "echo",
  rI = "https://echo.walletconnect.com";
class iI {
  constructor(e, t) {
    (this.core = e),
      (this.logger = t),
      (this.keychain = new Map()),
      (this.name = A6),
      (this.version = N6),
      (this.initialized = !1),
      (this.storagePrefix = Mi),
      (this.init = async () => {
        if (!this.initialized) {
          const s = await this.getKeyChain();
          typeof s < "u" && (this.keychain = s), (this.initialized = !0);
        }
      }),
      (this.has = (s) => (this.isInitialized(), this.keychain.has(s))),
      (this.set = async (s, o) => {
        this.isInitialized(), this.keychain.set(s, o), await this.persist();
      }),
      (this.get = (s) => {
        this.isInitialized();
        const o = this.keychain.get(s);
        if (typeof o > "u") {
          const { message: u } = ce("NO_MATCHING_KEY", `${this.name}: ${s}`);
          throw new Error(u);
        }
        return o;
      }),
      (this.del = async (s) => {
        this.isInitialized(), this.keychain.delete(s), await this.persist();
      }),
      (this.core = e),
      (this.logger = Ye.generateChildLogger(t, this.name));
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Np(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Rp(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class nI {
  constructor(e, t, s) {
    (this.core = e),
      (this.logger = t),
      (this.name = C6),
      (this.initialized = !1),
      (this.init = async () => {
        this.initialized ||
          (await this.keychain.init(), (this.initialized = !0));
      }),
      (this.hasKeys = (o) => (this.isInitialized(), this.keychain.has(o))),
      (this.getClientId = async () => {
        this.isInitialized();
        const o = await this.getClientSeed(),
          u = Hf(o);
        return Ip(u.publicKey);
      }),
      (this.generateKeyPair = () => {
        this.isInitialized();
        const o = uD();
        return this.setPrivateKey(o.publicKey, o.privateKey);
      }),
      (this.signJWT = async (o) => {
        this.isInitialized();
        const u = await this.getClientSeed(),
          d = Hf(u),
          f = Eu();
        return await Y3(f, o, T6, d);
      }),
      (this.generateSharedKey = (o, u, d) => {
        this.isInitialized();
        const f = this.getPrivateKey(o),
          _ = hD(f, u);
        return this.setSymKey(_, d);
      }),
      (this.setSymKey = async (o, u) => {
        this.isInitialized();
        const d = u || lD(o);
        return await this.keychain.set(d, o), d;
      }),
      (this.deleteKeyPair = async (o) => {
        this.isInitialized(), await this.keychain.del(o);
      }),
      (this.deleteSymKey = async (o) => {
        this.isInitialized(), await this.keychain.del(o);
      }),
      (this.encode = async (o, u, d) => {
        this.isInitialized();
        const f = Ap(d),
          _ = F3(u);
        if (kf(f)) {
          const P = f.senderPublicKey,
            T = f.receiverPublicKey;
          o = await this.generateSharedKey(P, T);
        }
        const y = this.getSymKey(o),
          { type: E, senderPublicKey: I } = f;
        return dD({ type: E, symKey: y, message: _, senderPublicKey: I });
      }),
      (this.decode = async (o, u, d) => {
        this.isInitialized();
        const f = yD(u, d);
        if (kf(f)) {
          const _ = f.receiverPublicKey,
            y = f.senderPublicKey;
          o = await this.generateSharedKey(_, y);
        }
        try {
          const _ = this.getSymKey(o),
            y = pD({ symKey: _, encoded: u });
          return R3(y);
        } catch (_) {
          this.logger.error(
            `Failed to decode message from topic: '${o}', clientId: '${await this.getClientId()}'`
          ),
            this.logger.error(_);
        }
      }),
      (this.getPayloadType = (o) => {
        const u = Zo(o);
        return Ns(u.type);
      }),
      (this.getPayloadSenderPublicKey = (o) => {
        const u = Zo(o);
        return u.senderPublicKey ? dr(u.senderPublicKey, fr) : void 0;
      }),
      (this.core = e),
      (this.logger = Ye.generateChildLogger(t, this.name)),
      (this.keychain = s || new iI(this.core, this.logger));
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(md);
    } catch {
      (e = Eu()), await this.keychain.set(md, e);
    }
    return I6(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class sI extends b3 {
  constructor(e, t) {
    super(e, t),
      (this.logger = e),
      (this.core = t),
      (this.messages = new Map()),
      (this.name = R6),
      (this.version = F6),
      (this.initialized = !1),
      (this.storagePrefix = Mi),
      (this.init = async () => {
        if (!this.initialized) {
          this.logger.trace("Initialized");
          try {
            const s = await this.getRelayerMessages();
            typeof s < "u" && (this.messages = s),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                size: this.messages.size,
              });
          } catch (s) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(s);
          } finally {
            this.initialized = !0;
          }
        }
      }),
      (this.set = async (s, o) => {
        this.isInitialized();
        const u = qn(o);
        let d = this.messages.get(s);
        return (
          typeof d > "u" && (d = {}),
          typeof d[u] < "u" ||
            ((d[u] = o), this.messages.set(s, d), await this.persist()),
          u
        );
      }),
      (this.get = (s) => {
        this.isInitialized();
        let o = this.messages.get(s);
        return typeof o > "u" && (o = {}), o;
      }),
      (this.has = (s, o) => {
        this.isInitialized();
        const u = this.get(s),
          d = qn(o);
        return typeof u[d] < "u";
      }),
      (this.del = async (s) => {
        this.isInitialized(), this.messages.delete(s), await this.persist();
      }),
      (this.logger = Ye.generateChildLogger(e, this.name)),
      (this.core = t);
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Np(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Rp(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class oI extends E3 {
  constructor(e, t) {
    super(e, t),
      (this.relayer = e),
      (this.logger = t),
      (this.events = new Hr.EventEmitter()),
      (this.name = $6),
      (this.queue = new Map()),
      (this.publishTimeout = me.toMiliseconds(me.TEN_SECONDS * 2)),
      (this.needsTransportRestart = !1),
      (this.publish = async (s, o, u) => {
        var d;
        this.logger.debug("Publishing Payload"),
          this.logger.trace({
            type: "method",
            method: "publish",
            params: { topic: s, message: o, opts: u },
          });
        try {
          const f = u?.ttl || U6,
            _ = Du(u),
            y = u?.prompt || !1,
            E = u?.tag || 0,
            I = u?.id || Hp().toString(),
            P = {
              topic: s,
              message: o,
              opts: { ttl: f, relay: _, prompt: y, tag: E, id: I },
            },
            T = setTimeout(() => this.queue.set(I, P), this.publishTimeout);
          try {
            await await Ps(
              this.rpcPublish(s, o, f, _, y, E, I),
              this.publishTimeout,
              `Failed to publish payload, please try again. id:${I} tag:${E}`
            ),
              this.removeRequestFromQueue(I),
              this.relayer.events.emit(rr.publish, P);
          } catch (A) {
            if (
              (this.logger.debug("Publishing Payload stalled"),
              (this.needsTransportRestart = !0),
              (d = u?.internal) != null && d.throwOnFailedPublish)
            )
              throw (this.removeRequestFromQueue(I), A);
            return;
          } finally {
            clearTimeout(T);
          }
          this.logger.debug("Successfully Published Payload"),
            this.logger.trace({
              type: "method",
              method: "publish",
              params: { topic: s, message: o, opts: u },
            });
        } catch (f) {
          throw (
            (this.logger.debug("Failed to Publish Payload"),
            this.logger.error(f),
            f)
          );
        }
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.relayer = e),
      (this.logger = Ye.generateChildLogger(t, this.name)),
      this.registerEventListeners();
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  rpcPublish(e, t, s, o, u, d, f) {
    var _, y, E, I;
    const P = {
      method: Jo(o.protocol).publish,
      params: { topic: e, message: t, ttl: s, prompt: u, tag: d },
      id: f,
    };
    return (
      lr((_ = P.params) == null ? void 0 : _.prompt) &&
        ((y = P.params) == null || delete y.prompt),
      lr((E = P.params) == null ? void 0 : E.tag) &&
        ((I = P.params) == null || delete I.tag),
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "message", direction: "outgoing", request: P }),
      this.relayer.request(P)
    );
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: s, opts: o } = e;
      await this.publish(t, s, o);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Kn.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        (this.needsTransportRestart = !1),
          this.relayer.events.emit(rr.connection_stalled);
        return;
      }
      this.checkQueue();
    }),
      this.relayer.on(rr.message_ack, (e) => {
        this.removeRequestFromQueue(e.id.toString());
      });
  }
}
class aI {
  constructor() {
    (this.map = new Map()),
      (this.set = (e, t) => {
        const s = this.get(e);
        this.exists(e, t) || this.map.set(e, [...s, t]);
      }),
      (this.get = (e) => this.map.get(e) || []),
      (this.exists = (e, t) => this.get(e).includes(t)),
      (this.delete = (e, t) => {
        if (typeof t > "u") {
          this.map.delete(e);
          return;
        }
        if (!this.map.has(e)) return;
        const s = this.get(e);
        if (!this.exists(e, t)) return;
        const o = s.filter((u) => u !== t);
        if (!o.length) {
          this.map.delete(e);
          return;
        }
        this.map.set(e, o);
      }),
      (this.clear = () => {
        this.map.clear();
      });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var cI = Object.defineProperty,
  uI = Object.defineProperties,
  hI = Object.getOwnPropertyDescriptors,
  wd = Object.getOwnPropertySymbols,
  lI = Object.prototype.hasOwnProperty,
  fI = Object.prototype.propertyIsEnumerable,
  _d = (i, e, t) =>
    e in i
      ? cI(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  _s = (i, e) => {
    for (var t in e || (e = {})) lI.call(e, t) && _d(i, t, e[t]);
    if (wd) for (var t of wd(e)) fI.call(e, t) && _d(i, t, e[t]);
    return i;
  },
  eu = (i, e) => uI(i, hI(e));
class dI extends I3 {
  constructor(e, t) {
    super(e, t),
      (this.relayer = e),
      (this.logger = t),
      (this.subscriptions = new Map()),
      (this.topicMap = new aI()),
      (this.events = new Hr.EventEmitter()),
      (this.name = k6),
      (this.version = V6),
      (this.pending = new Map()),
      (this.cached = []),
      (this.initialized = !1),
      (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
      (this.pollingInterval = 20),
      (this.storagePrefix = Mi),
      (this.subscribeTimeout = 1e4),
      (this.restartInProgress = !1),
      (this.batchSubscribeTopicsLimit = 500),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          this.registerEventListeners(),
          (this.clientId = await this.relayer.core.crypto.getClientId()));
      }),
      (this.subscribe = async (s, o) => {
        await this.restartToComplete(),
          this.isInitialized(),
          this.logger.debug("Subscribing Topic"),
          this.logger.trace({
            type: "method",
            method: "subscribe",
            params: { topic: s, opts: o },
          });
        try {
          const u = Du(o),
            d = { topic: s, relay: u };
          this.pending.set(s, d);
          const f = await this.rpcSubscribe(s, u);
          return (
            this.onSubscribe(f, d),
            this.logger.debug("Successfully Subscribed Topic"),
            this.logger.trace({
              type: "method",
              method: "subscribe",
              params: { topic: s, opts: o },
            }),
            f
          );
        } catch (u) {
          throw (
            (this.logger.debug("Failed to Subscribe Topic"),
            this.logger.error(u),
            u)
          );
        }
      }),
      (this.unsubscribe = async (s, o) => {
        await this.restartToComplete(),
          this.isInitialized(),
          typeof o?.id < "u"
            ? await this.unsubscribeById(s, o.id, o)
            : await this.unsubscribeByTopic(s, o);
      }),
      (this.isSubscribed = async (s) => {
        if (this.topics.includes(s)) return !0;
        const o = `${this.pendingSubscriptionWatchLabel}_${s}`;
        return await new Promise((u, d) => {
          const f = new me.Watch();
          f.start(o);
          const _ = setInterval(() => {
            !this.pending.has(s) &&
              this.topics.includes(s) &&
              (clearInterval(_), f.stop(o), u(!0)),
              f.elapsed(o) >= W6 &&
                (clearInterval(_),
                f.stop(o),
                d(new Error("Subscription resolution timeout")));
          }, this.pollingInterval);
        }).catch(() => !1);
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.restart = async () => {
        (this.restartInProgress = !0),
          await this.restore(),
          await this.reset(),
          (this.restartInProgress = !1);
      }),
      (this.relayer = e),
      (this.logger = Ye.generateChildLogger(t, this.name)),
      (this.clientId = "");
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.relayer.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let s = !1;
    try {
      s = this.getSubscription(e).topic === t;
    } catch {}
    return s;
  }
  onEnable() {
    (this.cached = []), (this.initialized = !0);
  }
  onDisable() {
    (this.cached = this.values),
      this.subscriptions.clear(),
      this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const s = this.topicMap.get(e);
    await Promise.all(s.map(async (o) => await this.unsubscribeById(e, o, t)));
  }
  async unsubscribeById(e, t, s) {
    this.logger.debug("Unsubscribing Topic"),
      this.logger.trace({
        type: "method",
        method: "unsubscribe",
        params: { topic: e, id: t, opts: s },
      });
    try {
      const o = Du(s);
      await this.rpcUnsubscribe(e, t, o);
      const u = $t("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, u),
        this.logger.debug("Successfully Unsubscribed Topic"),
        this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: { topic: e, id: t, opts: s },
        });
    } catch (o) {
      throw (
        (this.logger.debug("Failed to Unsubscribe Topic"),
        this.logger.error(o),
        o)
      );
    }
  }
  async rpcSubscribe(e, t) {
    const s = { method: Jo(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      await await Ps(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
        this.relayer.events.emit(rr.connection_stalled);
    }
    return qn(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return;
    const t = e[0].relay,
      s = {
        method: Jo(t.protocol).batchSubscribe,
        params: { topics: e.map((o) => o.topic) },
      };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await Ps(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"),
        this.relayer.events.emit(rr.connection_stalled);
    }
  }
  rpcUnsubscribe(e, t, s) {
    const o = {
      method: Jo(s.protocol).unsubscribe,
      params: { topic: e, id: t },
    };
    return (
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: o }),
      this.relayer.request(o)
    );
  }
  onSubscribe(e, t) {
    this.setSubscription(e, eu(_s({}, t), { id: e })),
      this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length &&
      e.forEach((t) => {
        this.setSubscription(t.id, _s({}, t)), this.pending.delete(t.topic);
      });
  }
  async onUnsubscribe(e, t, s) {
    this.events.removeAllListeners(t),
      this.hasSubscription(t, e) && this.deleteSubscription(t, s),
      await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.subscriptions.has(e) ||
      (this.logger.debug("Setting subscription"),
      this.logger.trace({
        type: "method",
        method: "setSubscription",
        id: e,
        subscription: t,
      }),
      this.addSubscription(e, t));
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, _s({}, t)),
      this.topicMap.set(t.topic, e),
      this.events.emit(Jr.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"),
      this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: s } = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"),
      this.logger.trace({
        type: "method",
        method: "deleteSubscription",
        id: e,
        reason: t,
      });
    const s = this.getSubscription(e);
    this.subscriptions.delete(e),
      this.topicMap.delete(s.topic, e),
      this.events.emit(Jr.deleted, eu(_s({}, s), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Jr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(Jr.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size) {
        const { message: t } = ce("RESTORE_WILL_OVERRIDE", this.name);
        throw (
          (this.logger.error(t),
          this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
          new Error(t))
        );
      }
      (this.cached = e),
        this.logger.debug(
          `Successfully Restored subscriptions for ${this.name}`
        ),
        this.logger.trace({
          type: "method",
          method: "restore",
          subscriptions: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
        this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length) return;
    const t = await this.rpcBatchSubscribe(e);
    Fs(t) &&
      this.onBatchSubscribe(t.map((s, o) => eu(_s({}, e[o]), { id: s })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }),
      await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Kn.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }),
      this.relayer.on(rr.connect, async () => {
        await this.onConnect();
      }),
      this.relayer.on(rr.disconnect, () => {
        this.onDisconnect();
      }),
      this.events.on(Jr.created, async (e) => {
        const t = Jr.created;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          await this.persist();
      }),
      this.events.on(Jr.deleted, async (e) => {
        const t = Jr.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          await this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress &&
      (await new Promise((e) => {
        const t = setInterval(() => {
          this.restartInProgress || (clearInterval(t), e());
        }, this.pollingInterval);
      }));
  }
}
var pI = Object.defineProperty,
  bd = Object.getOwnPropertySymbols,
  gI = Object.prototype.hasOwnProperty,
  yI = Object.prototype.propertyIsEnumerable,
  Ed = (i, e, t) =>
    e in i
      ? pI(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  mI = (i, e) => {
    for (var t in e || (e = {})) gI.call(e, t) && Ed(i, t, e[t]);
    if (bd) for (var t of bd(e)) yI.call(e, t) && Ed(i, t, e[t]);
    return i;
  };
class vI extends D3 {
  constructor(e) {
    super(e),
      (this.protocol = "wc"),
      (this.version = 2),
      (this.events = new Hr.EventEmitter()),
      (this.name = j6),
      (this.transportExplicitlyClosed = !1),
      (this.initialized = !1),
      (this.connectionAttemptInProgress = !1),
      (this.connectionStatusPollingInterval = 20),
      (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
      (this.hasExperiencedNetworkDisruption = !1),
      (this.requestsInFlight = new Map()),
      (this.request = async (t) => {
        this.logger.debug("Publishing Request Payload");
        const s = t.id;
        try {
          await this.toEstablishConnection();
          const o = this.provider.request(t);
          return (
            this.requestsInFlight.set(s, { promise: o, request: t }), await o
          );
        } catch (o) {
          throw (
            (this.logger.debug("Failed to Publish Request"),
            this.logger.error(o),
            o)
          );
        } finally {
          this.requestsInFlight.delete(s);
        }
      }),
      (this.onPayloadHandler = (t) => {
        this.onProviderPayload(t);
      }),
      (this.onConnectHandler = () => {
        this.events.emit(rr.connect);
      }),
      (this.onDisconnectHandler = () => {
        this.onProviderDisconnect();
      }),
      (this.onProviderErrorHandler = (t) => {
        this.logger.error(t),
          this.events.emit(rr.error, t),
          this.logger.info("Fatal socket error received, closing transport"),
          this.transportClose();
      }),
      (this.registerProviderListeners = () => {
        this.provider.on(bi.payload, this.onPayloadHandler),
          this.provider.on(bi.connect, this.onConnectHandler),
          this.provider.on(bi.disconnect, this.onDisconnectHandler),
          this.provider.on(bi.error, this.onProviderErrorHandler);
      }),
      (this.core = e.core),
      (this.logger =
        typeof e.logger < "u" && typeof e.logger != "string"
          ? Ye.generateChildLogger(e.logger, this.name)
          : Ye.pino(Ye.getDefaultLoggerOptions({ level: e.logger || L6 }))),
      (this.messages = new sI(this.logger, e.core)),
      (this.subscriber = new dI(this, this.logger)),
      (this.publisher = new oI(this, this.logger)),
      (this.relayUrl = e?.relayUrl || ng),
      (this.projectId = e.projectId),
      (this.bundleId = ED()),
      (this.provider = {});
  }
  async init() {
    this.logger.trace("Initialized"),
      this.registerEventListeners(),
      await this.createProvider(),
      await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(
        `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${vd}...`
      ),
        await this.restartTransport(vd);
    }
    (this.initialized = !0),
      setTimeout(async () => {
        this.subscriber.topics.length === 0 &&
          (this.logger.info(
            "No topics subscribed to after init, closing transport"
          ),
          await this.transportClose(),
          (this.transportExplicitlyClosed = !1));
      }, H6);
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t, s) {
    this.isInitialized(),
      await this.publisher.publish(e, t, s),
      await this.recordMessageEvent({
        topic: e,
        message: t,
        publishedAt: Date.now(),
      });
  }
  async subscribe(e, t) {
    var s;
    this.isInitialized();
    let o =
      ((s = this.subscriber.topicMap.get(e)) == null ? void 0 : s[0]) || "";
    if (o) return o;
    let u;
    const d = (f) => {
      f.topic === e && (this.subscriber.off(Jr.created, d), u());
    };
    return (
      await Promise.all([
        new Promise((f) => {
          (u = f), this.subscriber.on(Jr.created, d);
        }),
        new Promise(async (f) => {
          (o = await this.subscriber.subscribe(e, t)), f();
        }),
      ]),
      o
    );
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportClose() {
    this.requestsInFlight.size > 0 &&
      (this.logger.debug(
        "Waiting for all in-flight requests to finish before closing transport..."
      ),
      this.requestsInFlight.forEach(async (e) => {
        await e.promise;
      })),
      (this.transportExplicitlyClosed = !0),
      this.hasExperiencedNetworkDisruption && this.connected
        ? await Ps(
            this.provider.disconnect(),
            1e3,
            "provider.disconnect()"
          ).catch(() => this.onProviderDisconnect())
        : this.connected && (await this.provider.disconnect());
  }
  async transportOpen(e) {
    if (
      ((this.transportExplicitlyClosed = !1),
      await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress)
    ) {
      e &&
        e !== this.relayUrl &&
        ((this.relayUrl = e),
        await this.transportClose(),
        await this.createProvider()),
        (this.connectionAttemptInProgress = !0);
      try {
        await Promise.all([
          new Promise((t) => {
            if (!this.initialized) return t();
            this.subscriber.once(Jr.resubscribed, () => {
              t();
            });
          }),
          new Promise(async (t, s) => {
            try {
              await Ps(
                this.provider.connect(),
                1e4,
                `Socket stalled when trying to connect to ${this.relayUrl}`
              );
            } catch (o) {
              s(o);
              return;
            }
            t();
          }),
        ]);
      } catch (t) {
        this.logger.error(t);
        const s = t;
        if (!this.isConnectionStalled(s.message)) throw t;
        this.provider.events.emit(bi.disconnect);
      } finally {
        (this.connectionAttemptInProgress = !1),
          (this.hasExperiencedNetworkDisruption = !1);
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress &&
        ((this.relayUrl = e || this.relayUrl),
        await this.transportClose(),
        await this.createProvider(),
        await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!(await rd()))
      throw new Error(
        "No internet connection detected. Please restart your network and try again."
      );
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    (this.provider = new Ii(
      new JS(
        PD({
          sdkVersion: B6,
          protocol: this.protocol,
          version: this.version,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
          auth: e,
          useOnCloseEvent: !0,
          bundleId: this.bundleId,
        })
      )
    )),
      this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: s } = e;
    await this.messages.set(t, s);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: s } = e;
    if (!s || s.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
    if (!(await this.subscriber.isSubscribed(t)))
      return (
        this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0
      );
    const o = this.messages.has(t, s);
    return o && this.logger.debug(`Ignoring duplicate message: ${s}`), o;
  }
  async onProviderPayload(e) {
    if (
      (this.logger.debug("Incoming Relay Payload"),
      this.logger.trace({ type: "payload", direction: "incoming", payload: e }),
      Zu(e))
    ) {
      if (!e.method.endsWith(M6)) return;
      const t = e.params,
        { topic: s, message: o, publishedAt: u } = t.data,
        d = { topic: s, message: o, publishedAt: u };
      this.logger.debug("Emitting Relayer Payload"),
        this.logger.trace(mI({ type: "event", event: t.id }, d)),
        this.events.emit(t.id, d),
        await this.acknowledgePayload(e),
        await this.onMessageEvent(d);
    } else fa(e) && this.events.emit(rr.message_ack, e);
  }
  async onMessageEvent(e) {
    (await this.shouldIgnoreMessageEvent(e)) ||
      (this.events.emit(rr.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = ha(e.id, !0);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(bi.payload, this.onPayloadHandler),
      this.provider.off(bi.connect, this.onConnectHandler),
      this.provider.off(bi.disconnect, this.onDisconnectHandler),
      this.provider.off(bi.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(rr.connection_stalled, () => {
      this.restartTransport().catch((t) => this.logger.error(t));
    });
    let e = await rd();
    ES(async (t) => {
      this.initialized &&
        e !== t &&
        ((e = t),
        t
          ? await this.restartTransport().catch((s) => this.logger.error(s))
          : ((this.hasExperiencedNetworkDisruption = !0),
            await this.transportClose().catch((s) => this.logger.error(s))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(rr.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed ||
      (this.logger.info("attemptToReconnect called. Connecting..."),
      setTimeout(async () => {
        await this.restartTransport().catch((e) => this.logger.error(e));
      }, me.toMiliseconds(q6)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
      if (this.connectionAttemptInProgress)
        return await new Promise((e) => {
          const t = setInterval(() => {
            this.connected && (clearInterval(t), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var wI = Object.defineProperty,
  Dd = Object.getOwnPropertySymbols,
  _I = Object.prototype.hasOwnProperty,
  bI = Object.prototype.propertyIsEnumerable,
  Sd = (i, e, t) =>
    e in i
      ? wI(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Id = (i, e) => {
    for (var t in e || (e = {})) _I.call(e, t) && Sd(i, t, e[t]);
    if (Dd) for (var t of Dd(e)) bI.call(e, t) && Sd(i, t, e[t]);
    return i;
  };
class pa extends S3 {
  constructor(e, t, s, o = Mi, u = void 0) {
    super(e, t, s, o),
      (this.core = e),
      (this.logger = t),
      (this.name = s),
      (this.map = new Map()),
      (this.version = z6),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Mi),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((d) => {
            this.getKey && d !== null && !lr(d)
              ? this.map.set(this.getKey(d), d)
              : ZD(d)
              ? this.map.set(d.id, d)
              : eS(d) && this.map.set(d.topic, d);
          }),
          (this.cached = []),
          (this.initialized = !0));
      }),
      (this.set = async (d, f) => {
        this.isInitialized(),
          this.map.has(d)
            ? await this.update(d, f)
            : (this.logger.debug("Setting value"),
              this.logger.trace({
                type: "method",
                method: "set",
                key: d,
                value: f,
              }),
              this.map.set(d, f),
              await this.persist());
      }),
      (this.get = (d) => (
        this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({ type: "method", method: "get", key: d }),
        this.getData(d)
      )),
      (this.getAll = (d) => (
        this.isInitialized(),
        d
          ? this.values.filter((f) =>
              Object.keys(d).every((_) => QS(f[_], d[_]))
            )
          : this.values
      )),
      (this.update = async (d, f) => {
        this.isInitialized(),
          this.logger.debug("Updating value"),
          this.logger.trace({
            type: "method",
            method: "update",
            key: d,
            update: f,
          });
        const _ = Id(Id({}, this.getData(d)), f);
        this.map.set(d, _), await this.persist();
      }),
      (this.delete = async (d, f) => {
        this.isInitialized(),
          this.map.has(d) &&
            (this.logger.debug("Deleting value"),
            this.logger.trace({
              type: "method",
              method: "delete",
              key: d,
              reason: f,
            }),
            this.map.delete(d),
            await this.persist());
      }),
      (this.logger = Ye.generateChildLogger(t, this.name)),
      (this.storagePrefix = o),
      (this.getKey = u);
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      const { message: s } = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw (this.logger.error(s), new Error(s));
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const { message: t } = ce("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored value for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          value: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`),
        this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class EI {
  constructor(e, t) {
    (this.core = e),
      (this.logger = t),
      (this.name = G6),
      (this.version = J6),
      (this.events = new Ru()),
      (this.initialized = !1),
      (this.storagePrefix = Mi),
      (this.ignoredPayloadTypes = [dn]),
      (this.registeredMethods = []),
      (this.init = async () => {
        this.initialized ||
          (await this.pairings.init(),
          await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          (this.initialized = !0),
          this.logger.trace("Initialized"));
      }),
      (this.register = ({ methods: s }) => {
        this.isInitialized(),
          (this.registeredMethods = [
            ...new Set([...this.registeredMethods, ...s]),
          ]);
      }),
      (this.create = async () => {
        this.isInitialized();
        const s = Eu(),
          o = await this.core.crypto.setSymKey(s),
          u = Cr(me.FIVE_MINUTES),
          d = { protocol: ig },
          f = { topic: o, expiry: u, relay: d, active: !1 },
          _ = KD({
            protocol: this.core.protocol,
            version: this.core.version,
            topic: o,
            symKey: s,
            relay: d,
            expiryTimestamp: u,
          });
        return (
          await this.pairings.set(o, f),
          await this.core.relayer.subscribe(o),
          this.core.expirer.set(o, u),
          { topic: o, uri: _ }
        );
      }),
      (this.pair = async (s) => {
        this.isInitialized(), this.isValidPair(s);
        const { topic: o, symKey: u, relay: d, expiryTimestamp: f } = Qf(s.uri);
        let _;
        if (
          this.pairings.keys.includes(o) &&
          ((_ = this.pairings.get(o)), _.active)
        )
          throw new Error(
            `Pairing already exists: ${o}. Please try again with a new connection URI.`
          );
        const y = f || Cr(me.FIVE_MINUTES),
          E = { topic: o, relay: d, expiry: y, active: !1 };
        return (
          await this.pairings.set(o, E),
          this.core.expirer.set(o, y),
          s.activatePairing && (await this.activate({ topic: o })),
          this.events.emit(Es.create, E),
          this.core.crypto.keychain.has(o) ||
            (await this.core.crypto.setSymKey(u, o),
            await this.core.relayer.subscribe(o, { relay: d })),
          E
        );
      }),
      (this.activate = async ({ topic: s }) => {
        this.isInitialized();
        const o = Cr(me.THIRTY_DAYS);
        await this.pairings.update(s, { active: !0, expiry: o }),
          this.core.expirer.set(s, o);
      }),
      (this.ping = async (s) => {
        this.isInitialized(), await this.isValidPing(s);
        const { topic: o } = s;
        if (this.pairings.keys.includes(o)) {
          const u = await this.sendRequest(o, "wc_pairingPing", {}),
            { done: d, resolve: f, reject: _ } = jn();
          this.events.once(Ut("pairing_ping", u), ({ error: y }) => {
            y ? _(y) : f();
          }),
            await d();
        }
      }),
      (this.updateExpiry = async ({ topic: s, expiry: o }) => {
        this.isInitialized(), await this.pairings.update(s, { expiry: o });
      }),
      (this.updateMetadata = async ({ topic: s, metadata: o }) => {
        this.isInitialized(),
          await this.pairings.update(s, { peerMetadata: o });
      }),
      (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
      (this.disconnect = async (s) => {
        this.isInitialized(), await this.isValidDisconnect(s);
        const { topic: o } = s;
        this.pairings.keys.includes(o) &&
          (await this.sendRequest(
            o,
            "wc_pairingDelete",
            $t("USER_DISCONNECTED")
          ),
          await this.deletePairing(o));
      }),
      (this.sendRequest = async (s, o, u) => {
        const d = Bn(o, u),
          f = await this.core.crypto.encode(s, d),
          _ = ws[o].req;
        return (
          this.core.history.set(s, d), this.core.relayer.publish(s, f, _), d.id
        );
      }),
      (this.sendResult = async (s, o, u) => {
        const d = ha(s, u),
          f = await this.core.crypto.encode(o, d),
          _ = await this.core.history.get(o, s),
          y = ws[_.request.method].res;
        await this.core.relayer.publish(o, f, y),
          await this.core.history.resolve(d);
      }),
      (this.sendError = async (s, o, u) => {
        const d = la(s, u),
          f = await this.core.crypto.encode(o, d),
          _ = await this.core.history.get(o, s),
          y = ws[_.request.method]
            ? ws[_.request.method].res
            : ws.unregistered_method.res;
        await this.core.relayer.publish(o, f, y),
          await this.core.history.resolve(d);
      }),
      (this.deletePairing = async (s, o) => {
        await this.core.relayer.unsubscribe(s),
          await Promise.all([
            this.pairings.delete(s, $t("USER_DISCONNECTED")),
            this.core.crypto.deleteSymKey(s),
            o ? Promise.resolve() : this.core.expirer.del(s),
          ]);
      }),
      (this.cleanup = async () => {
        const s = this.pairings.getAll().filter((o) => ji(o.expiry));
        await Promise.all(s.map((o) => this.deletePairing(o.topic)));
      }),
      (this.onRelayEventRequest = (s) => {
        const { topic: o, payload: u } = s;
        switch (u.method) {
          case "wc_pairingPing":
            return this.onPairingPingRequest(o, u);
          case "wc_pairingDelete":
            return this.onPairingDeleteRequest(o, u);
          default:
            return this.onUnknownRpcMethodRequest(o, u);
        }
      }),
      (this.onRelayEventResponse = async (s) => {
        const { topic: o, payload: u } = s,
          d = (await this.core.history.get(o, u.id)).request.method;
        switch (d) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(o, u);
          default:
            return this.onUnknownRpcMethodResponse(d);
        }
      }),
      (this.onPairingPingRequest = async (s, o) => {
        const { id: u } = o;
        try {
          this.isValidPing({ topic: s }),
            await this.sendResult(u, s, !0),
            this.events.emit(Es.ping, { id: u, topic: s });
        } catch (d) {
          await this.sendError(u, s, d), this.logger.error(d);
        }
      }),
      (this.onPairingPingResponse = (s, o) => {
        const { id: u } = o;
        setTimeout(() => {
          Si(o)
            ? this.events.emit(Ut("pairing_ping", u), {})
            : Yr(o) &&
              this.events.emit(Ut("pairing_ping", u), { error: o.error });
        }, 500);
      }),
      (this.onPairingDeleteRequest = async (s, o) => {
        const { id: u } = o;
        try {
          this.isValidDisconnect({ topic: s }),
            await this.deletePairing(s),
            this.events.emit(Es.delete, { id: u, topic: s });
        } catch (d) {
          await this.sendError(u, s, d), this.logger.error(d);
        }
      }),
      (this.onUnknownRpcMethodRequest = async (s, o) => {
        const { id: u, method: d } = o;
        try {
          if (this.registeredMethods.includes(d)) return;
          const f = $t("WC_METHOD_UNSUPPORTED", d);
          await this.sendError(u, s, f), this.logger.error(f);
        } catch (f) {
          await this.sendError(u, s, f), this.logger.error(f);
        }
      }),
      (this.onUnknownRpcMethodResponse = (s) => {
        this.registeredMethods.includes(s) ||
          this.logger.error($t("WC_METHOD_UNSUPPORTED", s));
      }),
      (this.isValidPair = (s) => {
        var o;
        if (!br(s)) {
          const { message: d } = ce(
            "MISSING_OR_INVALID",
            `pair() params: ${s}`
          );
          throw new Error(d);
        }
        if (!XD(s.uri)) {
          const { message: d } = ce(
            "MISSING_OR_INVALID",
            `pair() uri: ${s.uri}`
          );
          throw new Error(d);
        }
        const u = Qf(s.uri);
        if (!((o = u?.relay) != null && o.protocol)) {
          const { message: d } = ce(
            "MISSING_OR_INVALID",
            "pair() uri#relay-protocol"
          );
          throw new Error(d);
        }
        if (!(u != null && u.symKey)) {
          const { message: d } = ce("MISSING_OR_INVALID", "pair() uri#symKey");
          throw new Error(d);
        }
        if (
          u != null &&
          u.expiryTimestamp &&
          me.toMiliseconds(u?.expiryTimestamp) < Date.now()
        ) {
          const { message: d } = ce(
            "EXPIRED",
            "pair() URI has expired. Please try again with a new connection URI."
          );
          throw new Error(d);
        }
      }),
      (this.isValidPing = async (s) => {
        if (!br(s)) {
          const { message: u } = ce(
            "MISSING_OR_INVALID",
            `ping() params: ${s}`
          );
          throw new Error(u);
        }
        const { topic: o } = s;
        await this.isValidPairingTopic(o);
      }),
      (this.isValidDisconnect = async (s) => {
        if (!br(s)) {
          const { message: u } = ce(
            "MISSING_OR_INVALID",
            `disconnect() params: ${s}`
          );
          throw new Error(u);
        }
        const { topic: o } = s;
        await this.isValidPairingTopic(o);
      }),
      (this.isValidPairingTopic = async (s) => {
        if (!Jt(s, !1)) {
          const { message: o } = ce(
            "MISSING_OR_INVALID",
            `pairing topic should be a string: ${s}`
          );
          throw new Error(o);
        }
        if (!this.pairings.keys.includes(s)) {
          const { message: o } = ce(
            "NO_MATCHING_KEY",
            `pairing topic doesn't exist: ${s}`
          );
          throw new Error(o);
        }
        if (ji(this.pairings.get(s).expiry)) {
          await this.deletePairing(s);
          const { message: o } = ce("EXPIRED", `pairing topic: ${s}`);
          throw new Error(o);
        }
      }),
      (this.core = e),
      (this.logger = Ye.generateChildLogger(t, this.name)),
      (this.pairings = new pa(
        this.core,
        this.logger,
        this.name,
        this.storagePrefix
      ));
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(rr.message, async (e) => {
      const { topic: t, message: s } = e;
      if (
        !this.pairings.keys.includes(t) ||
        this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s))
      )
        return;
      const o = await this.core.crypto.decode(t, s);
      try {
        Zu(o)
          ? (this.core.history.set(t, o),
            this.onRelayEventRequest({ topic: t, payload: o }))
          : fa(o) &&
            (await this.core.history.resolve(o),
            await this.onRelayEventResponse({ topic: t, payload: o }),
            this.core.history.delete(t, o.id));
      } catch (u) {
        this.logger.error(u);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Br.expired, async (e) => {
      const { topic: t } = Up(e.target);
      t &&
        this.pairings.keys.includes(t) &&
        (await this.deletePairing(t, !0),
        this.events.emit(Es.expire, { topic: t }));
    });
  }
}
class DI extends _3 {
  constructor(e, t) {
    super(e, t),
      (this.core = e),
      (this.logger = t),
      (this.records = new Map()),
      (this.events = new Hr.EventEmitter()),
      (this.name = Y6),
      (this.version = Q6),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Mi),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((s) => this.records.set(s.id, s)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.set = (s, o, u) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Setting JSON-RPC request history record"),
          this.logger.trace({
            type: "method",
            method: "set",
            topic: s,
            request: o,
            chainId: u,
          }),
          this.records.has(o.id))
        )
          return;
        const d = {
          id: o.id,
          topic: s,
          request: { method: o.method, params: o.params || null },
          chainId: u,
          expiry: Cr(me.THIRTY_DAYS),
        };
        this.records.set(d.id, d), this.events.emit(si.created, d);
      }),
      (this.resolve = async (s) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Updating JSON-RPC response history record"),
          this.logger.trace({ type: "method", method: "update", response: s }),
          !this.records.has(s.id))
        )
          return;
        const o = await this.getRecord(s.id);
        typeof o.response > "u" &&
          ((o.response = Yr(s) ? { error: s.error } : { result: s.result }),
          this.records.set(o.id, o),
          this.events.emit(si.updated, o));
      }),
      (this.get = async (s, o) => (
        this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({ type: "method", method: "get", topic: s, id: o }),
        await this.getRecord(o)
      )),
      (this.delete = (s, o) => {
        this.isInitialized(),
          this.logger.debug("Deleting record"),
          this.logger.trace({ type: "method", method: "delete", id: o }),
          this.values.forEach((u) => {
            if (u.topic === s) {
              if (typeof o < "u" && u.id !== o) return;
              this.records.delete(u.id), this.events.emit(si.deleted, u);
            }
          });
      }),
      (this.exists = async (s, o) => (
        this.isInitialized(),
        this.records.has(o) ? (await this.getRecord(o)).topic === s : !1
      )),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.logger = Ye.generateChildLogger(t, this.name));
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return (
      this.values.forEach((t) => {
        if (typeof t.response < "u") return;
        const s = {
          topic: t.topic,
          request: Bn(t.request.method, t.request.params, t.id),
          chainId: t.chainId,
        };
        return e.push(s);
      }),
      e
    );
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: s } = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(si.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: t } = ce("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored records for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          records: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`),
        this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(si.created, (e) => {
      const t = si.created;
      this.logger.info(`Emitting ${t}`),
        this.logger.debug({ type: "event", event: t, record: e }),
        this.persist();
    }),
      this.events.on(si.updated, (e) => {
        const t = si.updated;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, record: e }),
          this.persist();
      }),
      this.events.on(si.deleted, (e) => {
        const t = si.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, record: e }),
          this.persist();
      }),
      this.core.heartbeat.on(Kn.HEARTBEAT_EVENTS.pulse, () => {
        this.cleanup();
      });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        me.toMiliseconds(e.expiry || 0) - Date.now() <= 0 &&
          (this.logger.info(`Deleting expired history log: ${e.id}`),
          this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class SI extends O3 {
  constructor(e, t) {
    super(e, t),
      (this.core = e),
      (this.logger = t),
      (this.expirations = new Map()),
      (this.events = new Hr.EventEmitter()),
      (this.name = X6),
      (this.version = Z6),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Mi),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((s) => this.expirations.set(s.target, s)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.has = (s) => {
        try {
          const o = this.formatTarget(s);
          return typeof this.getExpiration(o) < "u";
        } catch {
          return !1;
        }
      }),
      (this.set = (s, o) => {
        this.isInitialized();
        const u = this.formatTarget(s),
          d = { target: u, expiry: o };
        this.expirations.set(u, d),
          this.checkExpiry(u, d),
          this.events.emit(Br.created, { target: u, expiration: d });
      }),
      (this.get = (s) => {
        this.isInitialized();
        const o = this.formatTarget(s);
        return this.getExpiration(o);
      }),
      (this.del = (s) => {
        if ((this.isInitialized(), this.has(s))) {
          const o = this.formatTarget(s),
            u = this.getExpiration(o);
          this.expirations.delete(o),
            this.events.emit(Br.deleted, { target: o, expiration: u });
        }
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.logger = Ye.generateChildLogger(t, this.name));
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string") return CD(e);
    if (typeof e == "number") return TD(e);
    const { message: t } = ce("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Br.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: t } = ce("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored expirations for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          expirations: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`),
        this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: s } = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw (this.logger.error(s), new Error(s));
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: s } = t;
    me.toMiliseconds(s) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e),
      this.events.emit(Br.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected &&
      this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Kn.HEARTBEAT_EVENTS.pulse, () =>
      this.checkExpirations()
    ),
      this.events.on(Br.created, (e) => {
        const t = Br.created;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      }),
      this.events.on(Br.expired, (e) => {
        const t = Br.expired;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      }),
      this.events.on(Br.deleted, (e) => {
        const t = Br.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class II extends x3 {
  constructor(e, t) {
    super(e, t),
      (this.projectId = e),
      (this.logger = t),
      (this.name = Zc),
      (this.initialized = !1),
      (this.queue = []),
      (this.verifyDisabled = !1),
      (this.init = async (s) => {
        if (this.verifyDisabled || Vn() || !Wn()) return;
        const o = this.getVerifyUrl(s?.verifyUrl);
        this.verifyUrl !== o && this.removeIframe(), (this.verifyUrl = o);
        try {
          await this.createIframe();
        } catch (u) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
            this.logger.info(u);
        }
        if (!this.initialized) {
          this.removeIframe(), (this.verifyUrl = Ou);
          try {
            await this.createIframe();
          } catch (u) {
            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
              this.logger.info(u),
              (this.verifyDisabled = !0);
          }
        }
      }),
      (this.register = async (s) => {
        this.initialized
          ? this.sendPost(s.attestationId)
          : (this.addToQueue(s.attestationId), await this.init());
      }),
      (this.resolve = async (s) => {
        if (this.isDevEnv) return "";
        const o = this.getVerifyUrl(s?.verifyUrl);
        let u;
        try {
          u = await this.fetchAttestation(s.attestationId, o);
        } catch (d) {
          this.logger.info(
            `failed to resolve attestation: ${s.attestationId} from url: ${o}`
          ),
            this.logger.info(d),
            (u = await this.fetchAttestation(s.attestationId, Ou));
        }
        return u;
      }),
      (this.fetchAttestation = async (s, o) => {
        this.logger.info(`resolving attestation: ${s} from url: ${o}`);
        const u = this.startAbortTimer(me.ONE_SECOND * 2),
          d = await fetch(`${o}/attestation/${s}`, {
            signal: this.abortController.signal,
          });
        return clearTimeout(u), d.status === 200 ? await d.json() : void 0;
      }),
      (this.addToQueue = (s) => {
        this.queue.push(s);
      }),
      (this.processQueue = () => {
        this.queue.length !== 0 &&
          (this.queue.forEach((s) => this.sendPost(s)), (this.queue = []));
      }),
      (this.sendPost = (s) => {
        var o;
        try {
          if (!this.iframe) return;
          (o = this.iframe.contentWindow) == null || o.postMessage(s, "*"),
            this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`);
        } catch {}
      }),
      (this.createIframe = async () => {
        let s;
        const o = (u) => {
          u.data === "verify_ready" &&
            ((this.initialized = !0),
            this.processQueue(),
            window.removeEventListener("message", o),
            s());
        };
        await Promise.race([
          new Promise((u) => {
            if (document.getElementById(Zc)) return u();
            window.addEventListener("message", o);
            const d = document.createElement("iframe");
            (d.id = Zc),
              (d.src = `${this.verifyUrl}/${this.projectId}`),
              (d.style.display = "none"),
              document.body.append(d),
              (this.iframe = d),
              (s = u);
          }),
          new Promise((u, d) =>
            setTimeout(() => {
              window.removeEventListener("message", o),
                d("verify iframe load timeout");
            }, me.toMiliseconds(me.FIVE_SECONDS))
          ),
        ]);
      }),
      (this.removeIframe = () => {
        this.iframe &&
          (this.iframe.remove(),
          (this.iframe = void 0),
          (this.initialized = !1));
      }),
      (this.getVerifyUrl = (s) => {
        let o = s || Mn;
        return (
          eI.includes(o) ||
            (this.logger.info(
              `verify url: ${o}, not included in trusted list, assigning default: ${Mn}`
            ),
            (o = Mn)),
          o
        );
      }),
      (this.logger = Ye.generateChildLogger(t, this.name)),
      (this.verifyUrl = Mn),
      (this.abortController = new AbortController()),
      (this.isDevEnv = Ju() && {}.IS_VITEST);
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return (
      (this.abortController = new AbortController()),
      setTimeout(() => this.abortController.abort(), me.toMiliseconds(e))
    );
  }
}
class OI extends P3 {
  constructor(e, t) {
    super(e, t),
      (this.projectId = e),
      (this.logger = t),
      (this.context = tI),
      (this.registerDeviceToken = async (s) => {
        const {
            clientId: o,
            token: u,
            notificationType: d,
            enableEncrypted: f = !1,
          } = s,
          _ = `${rI}/${this.projectId}/clients`;
        await t2(_, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            client_id: o,
            type: d,
            token: u,
            always_raw: f,
          }),
        });
      }),
      (this.logger = Ye.generateChildLogger(t, this.context));
  }
}
var xI = Object.defineProperty,
  Od = Object.getOwnPropertySymbols,
  PI = Object.prototype.hasOwnProperty,
  CI = Object.prototype.propertyIsEnumerable,
  xd = (i, e, t) =>
    e in i
      ? xI(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Pd = (i, e) => {
    for (var t in e || (e = {})) PI.call(e, t) && xd(i, t, e[t]);
    if (Od) for (var t of Od(e)) CI.call(e, t) && xd(i, t, e[t]);
    return i;
  };
class th extends w3 {
  constructor(e) {
    super(e),
      (this.protocol = rg),
      (this.version = O6),
      (this.name = eh),
      (this.events = new Hr.EventEmitter()),
      (this.initialized = !1),
      (this.on = (s, o) => this.events.on(s, o)),
      (this.once = (s, o) => this.events.once(s, o)),
      (this.off = (s, o) => this.events.off(s, o)),
      (this.removeListener = (s, o) => this.events.removeListener(s, o)),
      (this.projectId = e?.projectId),
      (this.relayUrl = e?.relayUrl || ng),
      (this.customStoragePrefix =
        e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "");
    const t =
      typeof e?.logger < "u" && typeof e?.logger != "string"
        ? e.logger
        : Ye.pino(
            Ye.getDefaultLoggerOptions({ level: e?.logger || x6.logger })
          );
    (this.logger = Ye.generateChildLogger(t, this.name)),
      (this.heartbeat = new Kn.HeartBeat()),
      (this.crypto = new nI(this, this.logger, e?.keychain)),
      (this.history = new DI(this, this.logger)),
      (this.expirer = new SI(this, this.logger)),
      (this.storage =
        e != null && e.storage
          ? e.storage
          : new h3(Pd(Pd({}, P6), e?.storageOptions))),
      (this.relayer = new vI({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId,
      })),
      (this.pairing = new EI(this, this.logger)),
      (this.verify = new II(this.projectId || "", this.logger)),
      (this.echoClient = new OI(this.projectId || "", this.logger));
  }
  static async init(e) {
    const t = new th(e);
    await t.initialize();
    const s = await t.crypto.getClientId();
    return await t.storage.setItem(K6, s), t;
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || (await this.initialize());
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(),
        await this.history.init(),
        await this.expirer.init(),
        await this.relayer.init(),
        await this.heartbeat.init(),
        await this.pairing.init(),
        (this.initialized = !0),
        this.logger.info("Core Initialization Success");
    } catch (e) {
      throw (
        (this.logger.warn(
          `Core Initialization Failure at epoch ${Date.now()}`,
          e
        ),
        this.logger.error(e.message),
        e)
      );
    }
  }
}
const TI = th,
  sg = "wc",
  og = 2,
  ag = "client",
  rh = `${sg}@${og}:${ag}:`,
  tu = {
    name: ag,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com",
  },
  Cd = "WALLETCONNECT_DEEPLINK_CHOICE",
  AI = "proposal",
  cg = "Proposal expired",
  NI = "session",
  Ko = me.SEVEN_DAYS,
  RI = "engine",
  Ei = {
    wc_sessionPropose: {
      req: { ttl: me.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: me.FIVE_MINUTES, prompt: !1, tag: 1101 },
    },
    wc_sessionSettle: {
      req: { ttl: me.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: me.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: me.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: me.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: me.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: me.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: me.FIVE_MINUTES, prompt: !0, tag: 1108 },
      res: { ttl: me.FIVE_MINUTES, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: me.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: me.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: me.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: me.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: me.THIRTY_SECONDS, prompt: !1, tag: 1114 },
      res: { ttl: me.THIRTY_SECONDS, prompt: !1, tag: 1115 },
    },
  },
  ru = { min: me.FIVE_MINUTES, max: me.SEVEN_DAYS },
  Di = { idle: "IDLE", active: "ACTIVE" },
  FI = "request",
  UI = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var $I = Object.defineProperty,
  LI = Object.defineProperties,
  jI = Object.getOwnPropertyDescriptors,
  Td = Object.getOwnPropertySymbols,
  MI = Object.prototype.hasOwnProperty,
  qI = Object.prototype.propertyIsEnumerable,
  Ad = (i, e, t) =>
    e in i
      ? $I(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  hr = (i, e) => {
    for (var t in e || (e = {})) MI.call(e, t) && Ad(i, t, e[t]);
    if (Td) for (var t of Td(e)) qI.call(e, t) && Ad(i, t, e[t]);
    return i;
  },
  Ln = (i, e) => LI(i, jI(e));
class BI extends T3 {
  constructor(e) {
    super(e),
      (this.name = RI),
      (this.events = new Ru()),
      (this.initialized = !1),
      (this.ignoredPayloadTypes = [dn]),
      (this.requestQueue = { state: Di.idle, queue: [] }),
      (this.sessionRequestQueue = { state: Di.idle, queue: [] }),
      (this.requestQueueDelay = me.ONE_SECOND),
      (this.init = async () => {
        this.initialized ||
          (await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          this.registerPairingEvents(),
          this.client.core.pairing.register({ methods: Object.keys(Ei) }),
          (this.initialized = !0),
          setTimeout(() => {
            (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
              this.processSessionRequestQueue();
          }, me.toMiliseconds(this.requestQueueDelay)));
      }),
      (this.connect = async (t) => {
        await this.isInitialized();
        const s = Ln(hr({}, t), {
          requiredNamespaces: t.requiredNamespaces || {},
          optionalNamespaces: t.optionalNamespaces || {},
        });
        await this.isValidConnect(s);
        const {
          pairingTopic: o,
          requiredNamespaces: u,
          optionalNamespaces: d,
          sessionProperties: f,
          relays: _,
        } = s;
        let y = o,
          E,
          I = !1;
        if (
          (y && (I = this.client.core.pairing.pairings.get(y).active), !y || !I)
        ) {
          const { topic: v, uri: b } = await this.client.core.pairing.create();
          (y = v), (E = b);
        }
        const P = await this.client.core.crypto.generateKeyPair(),
          T = Ei.wc_sessionPropose.req.ttl || me.FIVE_MINUTES,
          A = Cr(T),
          q = hr(
            {
              requiredNamespaces: u,
              optionalNamespaces: d,
              relays: _ ?? [{ protocol: ig }],
              proposer: { publicKey: P, metadata: this.client.metadata },
              expiryTimestamp: A,
            },
            f && { sessionProperties: f }
          ),
          { reject: L, resolve: Y, done: p } = jn(T, cg);
        if (
          (this.events.once(
            Ut("session_connect"),
            async ({ error: v, session: b }) => {
              if (v) L(v);
              else if (b) {
                b.self.publicKey = P;
                const g = Ln(hr({}, b), {
                  requiredNamespaces: q.requiredNamespaces,
                  optionalNamespaces: q.optionalNamespaces,
                });
                await this.client.session.set(b.topic, g),
                  await this.setExpiry(b.topic, b.expiry),
                  y &&
                    (await this.client.core.pairing.updateMetadata({
                      topic: y,
                      metadata: b.peer.metadata,
                    })),
                  Y(g);
              }
            }
          ),
          !y)
        ) {
          const { message: v } = ce(
            "NO_MATCHING_KEY",
            `connect() pairing topic: ${y}`
          );
          throw new Error(v);
        }
        const D = await this.sendRequest({
          topic: y,
          method: "wc_sessionPropose",
          params: q,
          throwOnFailedPublish: !0,
        });
        return (
          await this.setProposal(D, hr({ id: D }, q)), { uri: E, approval: p }
        );
      }),
      (this.pair = async (t) => (
        await this.isInitialized(), await this.client.core.pairing.pair(t)
      )),
      (this.approve = async (t) => {
        await this.isInitialized(), await this.isValidApprove(t);
        const {
            id: s,
            relayProtocol: o,
            namespaces: u,
            sessionProperties: d,
          } = t,
          f = this.client.proposal.get(s);
        let {
          pairingTopic: _,
          proposer: y,
          requiredNamespaces: E,
          optionalNamespaces: I,
        } = f;
        _ = _ || "";
        const P = await this.client.core.crypto.generateKeyPair(),
          T = y.publicKey,
          A = await this.client.core.crypto.generateSharedKey(P, T);
        _ &&
          s &&
          (await this.client.core.pairing.updateMetadata({
            topic: _,
            metadata: y.metadata,
          }),
          await this.sendResult({
            id: s,
            topic: _,
            result: { relay: { protocol: o ?? "irn" }, responderPublicKey: P },
          }),
          await this.client.proposal.delete(s, $t("USER_DISCONNECTED")),
          await this.client.core.pairing.activate({ topic: _ }));
        const q = hr(
          {
            relay: { protocol: o ?? "irn" },
            namespaces: u,
            pairingTopic: _,
            controller: { publicKey: P, metadata: this.client.metadata },
            expiry: Cr(Ko),
          },
          d && { sessionProperties: d }
        );
        await this.client.core.relayer.subscribe(A);
        const L = Ln(hr({}, q), {
          topic: A,
          requiredNamespaces: E,
          optionalNamespaces: I,
          pairingTopic: _,
          acknowledged: !1,
          self: q.controller,
          peer: { publicKey: y.publicKey, metadata: y.metadata },
          controller: P,
        });
        await this.client.session.set(A, L);
        try {
          await this.sendRequest({
            topic: A,
            method: "wc_sessionSettle",
            params: q,
            throwOnFailedPublish: !0,
          });
        } catch (Y) {
          throw (
            (this.client.logger.error(Y),
            this.client.session.delete(A, $t("USER_DISCONNECTED")),
            await this.client.core.relayer.unsubscribe(A),
            Y)
          );
        }
        return (
          await this.setExpiry(A, Cr(Ko)),
          {
            topic: A,
            acknowledged: () =>
              new Promise((Y) =>
                setTimeout(() => Y(this.client.session.get(A)), 500)
              ),
          }
        );
      }),
      (this.reject = async (t) => {
        await this.isInitialized(), await this.isValidReject(t);
        const { id: s, reason: o } = t,
          { pairingTopic: u } = this.client.proposal.get(s);
        u &&
          (await this.sendError(s, u, o),
          await this.client.proposal.delete(s, $t("USER_DISCONNECTED")));
      }),
      (this.update = async (t) => {
        await this.isInitialized(), await this.isValidUpdate(t);
        const { topic: s, namespaces: o } = t,
          u = await this.sendRequest({
            topic: s,
            method: "wc_sessionUpdate",
            params: { namespaces: o },
          }),
          { done: d, resolve: f, reject: _ } = jn();
        return (
          this.events.once(Ut("session_update", u), ({ error: y }) => {
            y ? _(y) : f();
          }),
          await this.client.session.update(s, { namespaces: o }),
          { acknowledged: d }
        );
      }),
      (this.extend = async (t) => {
        await this.isInitialized(), await this.isValidExtend(t);
        const { topic: s } = t,
          o = await this.sendRequest({
            topic: s,
            method: "wc_sessionExtend",
            params: {},
          }),
          { done: u, resolve: d, reject: f } = jn();
        return (
          this.events.once(Ut("session_extend", o), ({ error: _ }) => {
            _ ? f(_) : d();
          }),
          await this.setExpiry(s, Cr(Ko)),
          { acknowledged: u }
        );
      }),
      (this.request = async (t) => {
        await this.isInitialized(), await this.isValidRequest(t);
        const {
            chainId: s,
            request: o,
            topic: u,
            expiry: d = Ei.wc_sessionRequest.req.ttl,
          } = t,
          f = Xu(),
          {
            done: _,
            resolve: y,
            reject: E,
          } = jn(d, "Request expired. Please try again.");
        return (
          this.events.once(
            Ut("session_request", f),
            ({ error: I, result: P }) => {
              I ? E(I) : y(P);
            }
          ),
          await Promise.all([
            new Promise(async (I) => {
              await this.sendRequest({
                clientRpcId: f,
                topic: u,
                method: "wc_sessionRequest",
                params: {
                  request: Ln(hr({}, o), { expiryTimestamp: Cr(d) }),
                  chainId: s,
                },
                expiry: d,
                throwOnFailedPublish: !0,
              }).catch((P) => E(P)),
                this.client.events.emit("session_request_sent", {
                  topic: u,
                  request: o,
                  chainId: s,
                  id: f,
                }),
                I();
            }),
            new Promise(async (I) => {
              const P = await ND(this.client.core.storage, Cd);
              AD({ id: f, topic: u, wcDeepLink: P }), I();
            }),
            _(),
          ]).then((I) => I[2])
        );
      }),
      (this.respond = async (t) => {
        await this.isInitialized(), await this.isValidRespond(t);
        const { topic: s, response: o } = t,
          { id: u } = o;
        Si(o)
          ? await this.sendResult({
              id: u,
              topic: s,
              result: o.result,
              throwOnFailedPublish: !0,
            })
          : Yr(o) && (await this.sendError(u, s, o.error)),
          this.cleanupAfterResponse(t);
      }),
      (this.ping = async (t) => {
        await this.isInitialized(), await this.isValidPing(t);
        const { topic: s } = t;
        if (this.client.session.keys.includes(s)) {
          const o = await this.sendRequest({
              topic: s,
              method: "wc_sessionPing",
              params: {},
            }),
            { done: u, resolve: d, reject: f } = jn();
          this.events.once(Ut("session_ping", o), ({ error: _ }) => {
            _ ? f(_) : d();
          }),
            await u();
        } else
          this.client.core.pairing.pairings.keys.includes(s) &&
            (await this.client.core.pairing.ping({ topic: s }));
      }),
      (this.emit = async (t) => {
        await this.isInitialized(), await this.isValidEmit(t);
        const { topic: s, event: o, chainId: u } = t;
        await this.sendRequest({
          topic: s,
          method: "wc_sessionEvent",
          params: { event: o, chainId: u },
        });
      }),
      (this.disconnect = async (t) => {
        await this.isInitialized(), await this.isValidDisconnect(t);
        const { topic: s } = t;
        if (this.client.session.keys.includes(s))
          await this.sendRequest({
            topic: s,
            method: "wc_sessionDelete",
            params: $t("USER_DISCONNECTED"),
            throwOnFailedPublish: !0,
          }),
            await this.deleteSession({ topic: s, emitEvent: !1 });
        else if (this.client.core.pairing.pairings.keys.includes(s))
          await this.client.core.pairing.disconnect({ topic: s });
        else {
          const { message: o } = ce(
            "MISMATCHED_TOPIC",
            `Session or pairing topic not found: ${s}`
          );
          throw new Error(o);
        }
      }),
      (this.find = (t) => (
        this.isInitialized(),
        this.client.session.getAll().filter((s) => YD(s, t))
      )),
      (this.getPendingSessionRequests = () =>
        this.client.pendingRequest.getAll()),
      (this.cleanupDuplicatePairings = async (t) => {
        if (t.pairingTopic)
          try {
            const s = this.client.core.pairing.pairings.get(t.pairingTopic),
              o = this.client.core.pairing.pairings.getAll().filter((u) => {
                var d, f;
                return (
                  ((d = u.peerMetadata) == null ? void 0 : d.url) &&
                  ((f = u.peerMetadata) == null ? void 0 : f.url) ===
                    t.peer.metadata.url &&
                  u.topic &&
                  u.topic !== s.topic
                );
              });
            if (o.length === 0) return;
            this.client.logger.info(
              `Cleaning up ${o.length} duplicate pairing(s)`
            ),
              await Promise.all(
                o.map((u) =>
                  this.client.core.pairing.disconnect({ topic: u.topic })
                )
              ),
              this.client.logger.info("Duplicate pairings clean up finished");
          } catch (s) {
            this.client.logger.error(s);
          }
      }),
      (this.deleteSession = async (t) => {
        const {
            topic: s,
            expirerHasDeleted: o = !1,
            emitEvent: u = !0,
            id: d = 0,
          } = t,
          { self: f } = this.client.session.get(s);
        await this.client.core.relayer.unsubscribe(s),
          await this.client.session.delete(s, $t("USER_DISCONNECTED")),
          this.client.core.crypto.keychain.has(f.publicKey) &&
            (await this.client.core.crypto.deleteKeyPair(f.publicKey)),
          this.client.core.crypto.keychain.has(s) &&
            (await this.client.core.crypto.deleteSymKey(s)),
          o || this.client.core.expirer.del(s),
          this.client.core.storage
            .removeItem(Cd)
            .catch((_) => this.client.logger.warn(_)),
          this.getPendingSessionRequests().forEach((_) => {
            _.topic === s &&
              this.deletePendingSessionRequest(_.id, $t("USER_DISCONNECTED"));
          }),
          u && this.client.events.emit("session_delete", { id: d, topic: s });
      }),
      (this.deleteProposal = async (t, s) => {
        await Promise.all([
          this.client.proposal.delete(t, $t("USER_DISCONNECTED")),
          s ? Promise.resolve() : this.client.core.expirer.del(t),
        ]);
      }),
      (this.deletePendingSessionRequest = async (t, s, o = !1) => {
        await Promise.all([
          this.client.pendingRequest.delete(t, s),
          o ? Promise.resolve() : this.client.core.expirer.del(t),
        ]),
          (this.sessionRequestQueue.queue =
            this.sessionRequestQueue.queue.filter((u) => u.id !== t)),
          o &&
            ((this.sessionRequestQueue.state = Di.idle),
            this.client.events.emit("session_request_expire", { id: t }));
      }),
      (this.setExpiry = async (t, s) => {
        this.client.session.keys.includes(t) &&
          (await this.client.session.update(t, { expiry: s })),
          this.client.core.expirer.set(t, s);
      }),
      (this.setProposal = async (t, s) => {
        await this.client.proposal.set(t, s),
          this.client.core.expirer.set(t, Cr(Ei.wc_sessionPropose.req.ttl));
      }),
      (this.setPendingSessionRequest = async (t) => {
        const { id: s, topic: o, params: u, verifyContext: d } = t,
          f = u.request.expiryTimestamp || Cr(Ei.wc_sessionRequest.req.ttl);
        await this.client.pendingRequest.set(s, {
          id: s,
          topic: o,
          params: u,
          verifyContext: d,
        }),
          f && this.client.core.expirer.set(s, f);
      }),
      (this.sendRequest = async (t) => {
        const {
            topic: s,
            method: o,
            params: u,
            expiry: d,
            relayRpcId: f,
            clientRpcId: _,
            throwOnFailedPublish: y,
          } = t,
          E = Bn(o, u, _);
        if (Wn() && UI.includes(o)) {
          const T = qn(JSON.stringify(E));
          this.client.core.verify.register({ attestationId: T });
        }
        const I = await this.client.core.crypto.encode(s, E),
          P = Ei[o].req;
        return (
          d && (P.ttl = d),
          f && (P.id = f),
          this.client.core.history.set(s, E),
          y
            ? ((P.internal = Ln(hr({}, P.internal), {
                throwOnFailedPublish: !0,
              })),
              await this.client.core.relayer.publish(s, I, P))
            : this.client.core.relayer
                .publish(s, I, P)
                .catch((T) => this.client.logger.error(T)),
          E.id
        );
      }),
      (this.sendResult = async (t) => {
        const { id: s, topic: o, result: u, throwOnFailedPublish: d } = t,
          f = ha(s, u),
          _ = await this.client.core.crypto.encode(o, f),
          y = await this.client.core.history.get(o, s),
          E = Ei[y.request.method].res;
        d
          ? ((E.internal = Ln(hr({}, E.internal), {
              throwOnFailedPublish: !0,
            })),
            await this.client.core.relayer.publish(o, _, E))
          : this.client.core.relayer
              .publish(o, _, E)
              .catch((I) => this.client.logger.error(I)),
          await this.client.core.history.resolve(f);
      }),
      (this.sendError = async (t, s, o) => {
        const u = la(t, o),
          d = await this.client.core.crypto.encode(s, u),
          f = await this.client.core.history.get(s, t),
          _ = Ei[f.request.method].res;
        this.client.core.relayer.publish(s, d, _),
          await this.client.core.history.resolve(u);
      }),
      (this.cleanup = async () => {
        const t = [],
          s = [];
        this.client.session.getAll().forEach((o) => {
          let u = !1;
          ji(o.expiry) && (u = !0),
            this.client.core.crypto.keychain.has(o.topic) || (u = !0),
            u && t.push(o.topic);
        }),
          this.client.proposal.getAll().forEach((o) => {
            ji(o.expiryTimestamp) && s.push(o.id);
          }),
          await Promise.all([
            ...t.map((o) => this.deleteSession({ topic: o })),
            ...s.map((o) => this.deleteProposal(o)),
          ]);
      }),
      (this.onRelayEventRequest = async (t) => {
        this.requestQueue.queue.push(t), await this.processRequestsQueue();
      }),
      (this.processRequestsQueue = async () => {
        if (this.requestQueue.state === Di.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (
          this.client.logger.info(
            `Request queue starting with ${this.requestQueue.queue.length} requests`
          );
          this.requestQueue.queue.length > 0;

        ) {
          this.requestQueue.state = Di.active;
          const t = this.requestQueue.queue.shift();
          if (t)
            try {
              this.processRequest(t),
                await new Promise((s) => setTimeout(s, 300));
            } catch (s) {
              this.client.logger.warn(s);
            }
        }
        this.requestQueue.state = Di.idle;
      }),
      (this.processRequest = (t) => {
        const { topic: s, payload: o } = t,
          u = o.method;
        switch (u) {
          case "wc_sessionPropose":
            return this.onSessionProposeRequest(s, o);
          case "wc_sessionSettle":
            return this.onSessionSettleRequest(s, o);
          case "wc_sessionUpdate":
            return this.onSessionUpdateRequest(s, o);
          case "wc_sessionExtend":
            return this.onSessionExtendRequest(s, o);
          case "wc_sessionPing":
            return this.onSessionPingRequest(s, o);
          case "wc_sessionDelete":
            return this.onSessionDeleteRequest(s, o);
          case "wc_sessionRequest":
            return this.onSessionRequest(s, o);
          case "wc_sessionEvent":
            return this.onSessionEventRequest(s, o);
          default:
            return this.client.logger.info(`Unsupported request method ${u}`);
        }
      }),
      (this.onRelayEventResponse = async (t) => {
        const { topic: s, payload: o } = t,
          u = (await this.client.core.history.get(s, o.id)).request.method;
        switch (u) {
          case "wc_sessionPropose":
            return this.onSessionProposeResponse(s, o);
          case "wc_sessionSettle":
            return this.onSessionSettleResponse(s, o);
          case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(s, o);
          case "wc_sessionExtend":
            return this.onSessionExtendResponse(s, o);
          case "wc_sessionPing":
            return this.onSessionPingResponse(s, o);
          case "wc_sessionRequest":
            return this.onSessionRequestResponse(s, o);
          default:
            return this.client.logger.info(`Unsupported response method ${u}`);
        }
      }),
      (this.onRelayEventUnknownPayload = (t) => {
        const { topic: s } = t,
          { message: o } = ce(
            "MISSING_OR_INVALID",
            `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`
          );
        throw new Error(o);
      }),
      (this.onSessionProposeRequest = async (t, s) => {
        const { params: o, id: u } = s;
        try {
          this.isValidConnect(hr({}, s.params));
          const d = o.expiryTimestamp || Cr(Ei.wc_sessionPropose.req.ttl),
            f = hr({ id: u, pairingTopic: t, expiryTimestamp: d }, o);
          await this.setProposal(u, f);
          const _ = qn(JSON.stringify(s)),
            y = await this.getVerifyContext(_, f.proposer.metadata);
          this.client.events.emit("session_proposal", {
            id: u,
            params: f,
            verifyContext: y,
          });
        } catch (d) {
          await this.sendError(u, t, d), this.client.logger.error(d);
        }
      }),
      (this.onSessionProposeResponse = async (t, s) => {
        const { id: o } = s;
        if (Si(s)) {
          const { result: u } = s;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            result: u,
          });
          const d = this.client.proposal.get(o);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            proposal: d,
          });
          const f = d.proposer.publicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            selfPublicKey: f,
          });
          const _ = u.responderPublicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            peerPublicKey: _,
          });
          const y = await this.client.core.crypto.generateSharedKey(f, _);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            sessionTopic: y,
          });
          const E = await this.client.core.relayer.subscribe(y);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            subscriptionId: E,
          }),
            await this.client.core.pairing.activate({ topic: t });
        } else
          Yr(s) &&
            (await this.client.proposal.delete(o, $t("USER_DISCONNECTED")),
            this.events.emit(Ut("session_connect"), { error: s.error }));
      }),
      (this.onSessionSettleRequest = async (t, s) => {
        const { id: o, params: u } = s;
        try {
          this.isValidSessionSettleRequest(u);
          const {
              relay: d,
              controller: f,
              expiry: _,
              namespaces: y,
              sessionProperties: E,
              pairingTopic: I,
            } = s.params,
            P = hr(
              {
                topic: t,
                relay: d,
                expiry: _,
                namespaces: y,
                acknowledged: !0,
                pairingTopic: I,
                requiredNamespaces: {},
                optionalNamespaces: {},
                controller: f.publicKey,
                self: { publicKey: "", metadata: this.client.metadata },
                peer: { publicKey: f.publicKey, metadata: f.metadata },
              },
              E && { sessionProperties: E }
            );
          await this.sendResult({ id: s.id, topic: t, result: !0 }),
            this.events.emit(Ut("session_connect"), { session: P }),
            this.cleanupDuplicatePairings(P);
        } catch (d) {
          await this.sendError(o, t, d), this.client.logger.error(d);
        }
      }),
      (this.onSessionSettleResponse = async (t, s) => {
        const { id: o } = s;
        Si(s)
          ? (await this.client.session.update(t, { acknowledged: !0 }),
            this.events.emit(Ut("session_approve", o), {}))
          : Yr(s) &&
            (await this.client.session.delete(t, $t("USER_DISCONNECTED")),
            this.events.emit(Ut("session_approve", o), { error: s.error }));
      }),
      (this.onSessionUpdateRequest = async (t, s) => {
        const { params: o, id: u } = s;
        try {
          const d = `${t}_session_update`,
            f = zo.get(d);
          if (f && this.isRequestOutOfSync(f, u)) {
            this.client.logger.info(`Discarding out of sync request - ${u}`);
            return;
          }
          this.isValidUpdate(hr({ topic: t }, o)),
            await this.client.session.update(t, { namespaces: o.namespaces }),
            await this.sendResult({ id: u, topic: t, result: !0 }),
            this.client.events.emit("session_update", {
              id: u,
              topic: t,
              params: o,
            }),
            zo.set(d, u);
        } catch (d) {
          await this.sendError(u, t, d), this.client.logger.error(d);
        }
      }),
      (this.isRequestOutOfSync = (t, s) =>
        parseInt(s.toString().slice(0, -3)) <=
        parseInt(t.toString().slice(0, -3))),
      (this.onSessionUpdateResponse = (t, s) => {
        const { id: o } = s;
        Si(s)
          ? this.events.emit(Ut("session_update", o), {})
          : Yr(s) &&
            this.events.emit(Ut("session_update", o), { error: s.error });
      }),
      (this.onSessionExtendRequest = async (t, s) => {
        const { id: o } = s;
        try {
          this.isValidExtend({ topic: t }),
            await this.setExpiry(t, Cr(Ko)),
            await this.sendResult({ id: o, topic: t, result: !0 }),
            this.client.events.emit("session_extend", { id: o, topic: t });
        } catch (u) {
          await this.sendError(o, t, u), this.client.logger.error(u);
        }
      }),
      (this.onSessionExtendResponse = (t, s) => {
        const { id: o } = s;
        Si(s)
          ? this.events.emit(Ut("session_extend", o), {})
          : Yr(s) &&
            this.events.emit(Ut("session_extend", o), { error: s.error });
      }),
      (this.onSessionPingRequest = async (t, s) => {
        const { id: o } = s;
        try {
          this.isValidPing({ topic: t }),
            await this.sendResult({ id: o, topic: t, result: !0 }),
            this.client.events.emit("session_ping", { id: o, topic: t });
        } catch (u) {
          await this.sendError(o, t, u), this.client.logger.error(u);
        }
      }),
      (this.onSessionPingResponse = (t, s) => {
        const { id: o } = s;
        setTimeout(() => {
          Si(s)
            ? this.events.emit(Ut("session_ping", o), {})
            : Yr(s) &&
              this.events.emit(Ut("session_ping", o), { error: s.error });
        }, 500);
      }),
      (this.onSessionDeleteRequest = async (t, s) => {
        const { id: o } = s;
        try {
          this.isValidDisconnect({ topic: t, reason: s.params }),
            await Promise.all([
              new Promise((u) => {
                this.client.core.relayer.once(rr.publish, async () => {
                  u(await this.deleteSession({ topic: t, id: o }));
                });
              }),
              this.sendResult({ id: o, topic: t, result: !0 }),
              this.cleanupPendingSentRequestsForTopic({
                topic: t,
                error: $t("USER_DISCONNECTED"),
              }),
            ]);
        } catch (u) {
          this.client.logger.error(u);
        }
      }),
      (this.onSessionRequest = async (t, s) => {
        const { id: o, params: u } = s;
        try {
          this.isValidRequest(hr({ topic: t }, u));
          const d = qn(JSON.stringify(Bn("wc_sessionRequest", u, o))),
            f = this.client.session.get(t),
            _ = await this.getVerifyContext(d, f.peer.metadata),
            y = { id: o, topic: t, params: u, verifyContext: _ };
          await this.setPendingSessionRequest(y),
            this.addSessionRequestToSessionRequestQueue(y),
            this.processSessionRequestQueue();
        } catch (d) {
          await this.sendError(o, t, d), this.client.logger.error(d);
        }
      }),
      (this.onSessionRequestResponse = (t, s) => {
        const { id: o } = s;
        Si(s)
          ? this.events.emit(Ut("session_request", o), { result: s.result })
          : Yr(s) &&
            this.events.emit(Ut("session_request", o), { error: s.error });
      }),
      (this.onSessionEventRequest = async (t, s) => {
        const { id: o, params: u } = s;
        try {
          const d = `${t}_session_event_${u.event.name}`,
            f = zo.get(d);
          if (f && this.isRequestOutOfSync(f, o)) {
            this.client.logger.info(`Discarding out of sync request - ${o}`);
            return;
          }
          this.isValidEmit(hr({ topic: t }, u)),
            this.client.events.emit("session_event", {
              id: o,
              topic: t,
              params: u,
            }),
            zo.set(d, o);
        } catch (d) {
          await this.sendError(o, t, d), this.client.logger.error(d);
        }
      }),
      (this.addSessionRequestToSessionRequestQueue = (t) => {
        this.sessionRequestQueue.queue.push(t);
      }),
      (this.cleanupAfterResponse = (t) => {
        this.deletePendingSessionRequest(t.response.id, {
          message: "fulfilled",
          code: 0,
        }),
          setTimeout(() => {
            (this.sessionRequestQueue.state = Di.idle),
              this.processSessionRequestQueue();
          }, me.toMiliseconds(this.requestQueueDelay));
      }),
      (this.cleanupPendingSentRequestsForTopic = ({ topic: t, error: s }) => {
        const o = this.client.core.history.pending;
        o.length > 0 &&
          o
            .filter(
              (u) => u.topic === t && u.request.method === "wc_sessionRequest"
            )
            .forEach((u) => {
              this.events.emit(Ut("session_request", u.request.id), {
                error: s,
              });
            });
      }),
      (this.processSessionRequestQueue = () => {
        if (this.sessionRequestQueue.state === Di.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const t = this.sessionRequestQueue.queue[0];
        if (!t) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          (this.sessionRequestQueue.state = Di.active),
            this.client.events.emit("session_request", t);
        } catch (s) {
          this.client.logger.error(s);
        }
      }),
      (this.onPairingCreated = (t) => {
        if (t.active) return;
        const s = this.client.proposal
          .getAll()
          .find((o) => o.pairingTopic === t.topic);
        s &&
          this.onSessionProposeRequest(
            t.topic,
            Bn(
              "wc_sessionPropose",
              {
                requiredNamespaces: s.requiredNamespaces,
                optionalNamespaces: s.optionalNamespaces,
                relays: s.relays,
                proposer: s.proposer,
                sessionProperties: s.sessionProperties,
              },
              s.id
            )
          );
      }),
      (this.isValidConnect = async (t) => {
        if (!br(t)) {
          const { message: _ } = ce(
            "MISSING_OR_INVALID",
            `connect() params: ${JSON.stringify(t)}`
          );
          throw new Error(_);
        }
        const {
          pairingTopic: s,
          requiredNamespaces: o,
          optionalNamespaces: u,
          sessionProperties: d,
          relays: f,
        } = t;
        if ((lr(s) || (await this.isValidPairingTopic(s)), !cS(f, !0))) {
          const { message: _ } = ce(
            "MISSING_OR_INVALID",
            `connect() relays: ${f}`
          );
          throw new Error(_);
        }
        !lr(o) &&
          ea(o) !== 0 &&
          this.validateNamespaces(o, "requiredNamespaces"),
          !lr(u) &&
            ea(u) !== 0 &&
            this.validateNamespaces(u, "optionalNamespaces"),
          lr(d) || this.validateSessionProps(d, "sessionProperties");
      }),
      (this.validateNamespaces = (t, s) => {
        const o = aS(t, "connect()", s);
        if (o) throw new Error(o.message);
      }),
      (this.isValidApprove = async (t) => {
        if (!br(t))
          throw new Error(
            ce("MISSING_OR_INVALID", `approve() params: ${t}`).message
          );
        const {
          id: s,
          namespaces: o,
          relayProtocol: u,
          sessionProperties: d,
        } = t;
        await this.isValidProposalId(s);
        const f = this.client.proposal.get(s),
          _ = Yc(o, "approve()");
        if (_) throw new Error(_.message);
        const y = ed(f.requiredNamespaces, o, "approve()");
        if (y) throw new Error(y.message);
        if (!Jt(u, !0)) {
          const { message: E } = ce(
            "MISSING_OR_INVALID",
            `approve() relayProtocol: ${u}`
          );
          throw new Error(E);
        }
        lr(d) || this.validateSessionProps(d, "sessionProperties");
      }),
      (this.isValidReject = async (t) => {
        if (!br(t)) {
          const { message: u } = ce(
            "MISSING_OR_INVALID",
            `reject() params: ${t}`
          );
          throw new Error(u);
        }
        const { id: s, reason: o } = t;
        if ((await this.isValidProposalId(s), !hS(o))) {
          const { message: u } = ce(
            "MISSING_OR_INVALID",
            `reject() reason: ${JSON.stringify(o)}`
          );
          throw new Error(u);
        }
      }),
      (this.isValidSessionSettleRequest = (t) => {
        if (!br(t)) {
          const { message: y } = ce(
            "MISSING_OR_INVALID",
            `onSessionSettleRequest() params: ${t}`
          );
          throw new Error(y);
        }
        const { relay: s, controller: o, namespaces: u, expiry: d } = t;
        if (!Lp(s)) {
          const { message: y } = ce(
            "MISSING_OR_INVALID",
            "onSessionSettleRequest() relay protocol should be a string"
          );
          throw new Error(y);
        }
        const f = tS(o, "onSessionSettleRequest()");
        if (f) throw new Error(f.message);
        const _ = Yc(u, "onSessionSettleRequest()");
        if (_) throw new Error(_.message);
        if (ji(d)) {
          const { message: y } = ce("EXPIRED", "onSessionSettleRequest()");
          throw new Error(y);
        }
      }),
      (this.isValidUpdate = async (t) => {
        if (!br(t)) {
          const { message: _ } = ce(
            "MISSING_OR_INVALID",
            `update() params: ${t}`
          );
          throw new Error(_);
        }
        const { topic: s, namespaces: o } = t;
        await this.isValidSessionTopic(s);
        const u = this.client.session.get(s),
          d = Yc(o, "update()");
        if (d) throw new Error(d.message);
        const f = ed(u.requiredNamespaces, o, "update()");
        if (f) throw new Error(f.message);
      }),
      (this.isValidExtend = async (t) => {
        if (!br(t)) {
          const { message: o } = ce(
            "MISSING_OR_INVALID",
            `extend() params: ${t}`
          );
          throw new Error(o);
        }
        const { topic: s } = t;
        await this.isValidSessionTopic(s);
      }),
      (this.isValidRequest = async (t) => {
        if (!br(t)) {
          const { message: _ } = ce(
            "MISSING_OR_INVALID",
            `request() params: ${t}`
          );
          throw new Error(_);
        }
        const { topic: s, request: o, chainId: u, expiry: d } = t;
        await this.isValidSessionTopic(s);
        const { namespaces: f } = this.client.session.get(s);
        if (!Zf(f, u)) {
          const { message: _ } = ce(
            "MISSING_OR_INVALID",
            `request() chainId: ${u}`
          );
          throw new Error(_);
        }
        if (!lS(o)) {
          const { message: _ } = ce(
            "MISSING_OR_INVALID",
            `request() ${JSON.stringify(o)}`
          );
          throw new Error(_);
        }
        if (!pS(f, u, o.method)) {
          const { message: _ } = ce(
            "MISSING_OR_INVALID",
            `request() method: ${o.method}`
          );
          throw new Error(_);
        }
        if (d && !vS(d, ru)) {
          const { message: _ } = ce(
            "MISSING_OR_INVALID",
            `request() expiry: ${d}. Expiry must be a number (in seconds) between ${ru.min} and ${ru.max}`
          );
          throw new Error(_);
        }
      }),
      (this.isValidRespond = async (t) => {
        var s;
        if (!br(t)) {
          const { message: d } = ce(
            "MISSING_OR_INVALID",
            `respond() params: ${t}`
          );
          throw new Error(d);
        }
        const { topic: o, response: u } = t;
        try {
          await this.isValidSessionTopic(o);
        } catch (d) {
          throw (
            ((s = t?.response) != null && s.id && this.cleanupAfterResponse(t),
            d)
          );
        }
        if (!fS(u)) {
          const { message: d } = ce(
            "MISSING_OR_INVALID",
            `respond() response: ${JSON.stringify(u)}`
          );
          throw new Error(d);
        }
      }),
      (this.isValidPing = async (t) => {
        if (!br(t)) {
          const { message: o } = ce(
            "MISSING_OR_INVALID",
            `ping() params: ${t}`
          );
          throw new Error(o);
        }
        const { topic: s } = t;
        await this.isValidSessionOrPairingTopic(s);
      }),
      (this.isValidEmit = async (t) => {
        if (!br(t)) {
          const { message: f } = ce(
            "MISSING_OR_INVALID",
            `emit() params: ${t}`
          );
          throw new Error(f);
        }
        const { topic: s, event: o, chainId: u } = t;
        await this.isValidSessionTopic(s);
        const { namespaces: d } = this.client.session.get(s);
        if (!Zf(d, u)) {
          const { message: f } = ce(
            "MISSING_OR_INVALID",
            `emit() chainId: ${u}`
          );
          throw new Error(f);
        }
        if (!dS(o)) {
          const { message: f } = ce(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(o)}`
          );
          throw new Error(f);
        }
        if (!gS(d, u, o.name)) {
          const { message: f } = ce(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(o)}`
          );
          throw new Error(f);
        }
      }),
      (this.isValidDisconnect = async (t) => {
        if (!br(t)) {
          const { message: o } = ce(
            "MISSING_OR_INVALID",
            `disconnect() params: ${t}`
          );
          throw new Error(o);
        }
        const { topic: s } = t;
        await this.isValidSessionOrPairingTopic(s);
      }),
      (this.getVerifyContext = async (t, s) => {
        const o = {
          verified: {
            verifyUrl: s.verifyUrl || Mn,
            validation: "UNKNOWN",
            origin: s.url || "",
          },
        };
        try {
          const u = await this.client.core.verify.resolve({
            attestationId: t,
            verifyUrl: s.verifyUrl,
          });
          u &&
            ((o.verified.origin = u.origin),
            (o.verified.isScam = u.isScam),
            (o.verified.validation =
              u.origin === new URL(s.url).origin ? "VALID" : "INVALID"));
        } catch (u) {
          this.client.logger.info(u);
        }
        return (
          this.client.logger.info(`Verify context: ${JSON.stringify(o)}`), o
        );
      }),
      (this.validateSessionProps = (t, s) => {
        Object.values(t).forEach((o) => {
          if (!Jt(o, !1)) {
            const { message: u } = ce(
              "MISSING_OR_INVALID",
              `${s} must be in Record<string, string> format. Received: ${JSON.stringify(
                o
              )}`
            );
            throw new Error(u);
          }
        });
      });
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = ce("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(rr.message, async (e) => {
      const { topic: t, message: s } = e;
      if (
        this.ignoredPayloadTypes.includes(
          this.client.core.crypto.getPayloadType(s)
        )
      )
        return;
      const o = await this.client.core.crypto.decode(t, s);
      try {
        Zu(o)
          ? (this.client.core.history.set(t, o),
            this.onRelayEventRequest({ topic: t, payload: o }))
          : fa(o)
          ? (await this.client.core.history.resolve(o),
            await this.onRelayEventResponse({ topic: t, payload: o }),
            this.client.core.history.delete(t, o.id))
          : this.onRelayEventUnknownPayload({ topic: t, payload: o });
      } catch (u) {
        this.client.logger.error(u);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Br.expired, async (e) => {
      const { topic: t, id: s } = Up(e.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, ce("EXPIRED"), !0);
      t
        ? this.client.session.keys.includes(t) &&
          (await this.deleteSession({ topic: t, expirerHasDeleted: !0 }),
          this.client.events.emit("session_expire", { topic: t }))
        : s &&
          (await this.deleteProposal(s, !0),
          this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Es.create, (e) =>
      this.onPairingCreated(e)
    );
  }
  isValidPairingTopic(e) {
    if (!Jt(e, !1)) {
      const { message: t } = ce(
        "MISSING_OR_INVALID",
        `pairing topic should be a string: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: t } = ce(
        "NO_MATCHING_KEY",
        `pairing topic doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (ji(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: t } = ce("EXPIRED", `pairing topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(e) {
    if (!Jt(e, !1)) {
      const { message: t } = ce(
        "MISSING_OR_INVALID",
        `session topic should be a string: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: t } = ce(
        "NO_MATCHING_KEY",
        `session topic doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (ji(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: t } = ce("EXPIRED", `session topic: ${e}`);
      throw new Error(t);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: t } = ce(
        "MISSING_OR_INVALID",
        `session topic does not exist in keychain: ${e}`
      );
      throw (await this.deleteSession({ topic: e }), new Error(t));
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (Jt(e, !1)) {
      const { message: t } = ce(
        "NO_MATCHING_KEY",
        `session or pairing topic doesn't exist: ${e}`
      );
      throw new Error(t);
    } else {
      const { message: t } = ce(
        "MISSING_OR_INVALID",
        `session or pairing topic should be a string: ${e}`
      );
      throw new Error(t);
    }
  }
  async isValidProposalId(e) {
    if (!uS(e)) {
      const { message: t } = ce(
        "MISSING_OR_INVALID",
        `proposal id should be a number: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: t } = ce(
        "NO_MATCHING_KEY",
        `proposal id doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (ji(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: t } = ce("EXPIRED", `proposal id: ${e}`);
      throw new Error(t);
    }
  }
}
class HI extends pa {
  constructor(e, t) {
    super(e, t, AI, rh), (this.core = e), (this.logger = t);
  }
}
let zI = class extends pa {
  constructor(e, t) {
    super(e, t, NI, rh), (this.core = e), (this.logger = t);
  }
};
class KI extends pa {
  constructor(e, t) {
    super(e, t, FI, rh, (s) => s.id), (this.core = e), (this.logger = t);
  }
}
let kI = class ug extends C3 {
  constructor(e) {
    super(e),
      (this.protocol = sg),
      (this.version = og),
      (this.name = tu.name),
      (this.events = new Hr.EventEmitter()),
      (this.on = (s, o) => this.events.on(s, o)),
      (this.once = (s, o) => this.events.once(s, o)),
      (this.off = (s, o) => this.events.off(s, o)),
      (this.removeListener = (s, o) => this.events.removeListener(s, o)),
      (this.removeAllListeners = (s) => this.events.removeAllListeners(s)),
      (this.connect = async (s) => {
        try {
          return await this.engine.connect(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.pair = async (s) => {
        try {
          return await this.engine.pair(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.approve = async (s) => {
        try {
          return await this.engine.approve(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.reject = async (s) => {
        try {
          return await this.engine.reject(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.update = async (s) => {
        try {
          return await this.engine.update(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.extend = async (s) => {
        try {
          return await this.engine.extend(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.request = async (s) => {
        try {
          return await this.engine.request(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.respond = async (s) => {
        try {
          return await this.engine.respond(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.ping = async (s) => {
        try {
          return await this.engine.ping(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.emit = async (s) => {
        try {
          return await this.engine.emit(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.disconnect = async (s) => {
        try {
          return await this.engine.disconnect(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.find = (s) => {
        try {
          return this.engine.find(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.getPendingSessionRequests = () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.name = e?.name || tu.name),
      (this.metadata = e?.metadata || SD());
    const t =
      typeof e?.logger < "u" && typeof e?.logger != "string"
        ? e.logger
        : Ye.pino(
            Ye.getDefaultLoggerOptions({ level: e?.logger || tu.logger })
          );
    (this.core = e?.core || new TI(e)),
      (this.logger = Ye.generateChildLogger(t, this.name)),
      (this.session = new zI(this.core, this.logger)),
      (this.proposal = new HI(this.core, this.logger)),
      (this.pendingRequest = new KI(this.core, this.logger)),
      (this.engine = new BI(this));
  }
  static async init(e) {
    const t = new ug(e);
    return await t.initialize(), t;
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(),
        await this.session.init(),
        await this.proposal.init(),
        await this.pendingRequest.init(),
        await this.engine.init(),
        this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
        this.logger.info("SignClient Initialization Success");
    } catch (e) {
      throw (
        (this.logger.info("SignClient Initialization Failure"),
        this.logger.error(e.message),
        e)
      );
    }
  }
};
var dt = {};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.getLocalStorage =
  dt.getLocalStorageOrThrow =
  dt.getCrypto =
  dt.getCryptoOrThrow =
  dt.getLocation =
  dt.getLocationOrThrow =
  dt.getNavigator =
  dt.getNavigatorOrThrow =
  dt.getDocument =
  dt.getDocumentOrThrow =
  dt.getFromWindowOrThrow =
  dt.getFromWindow =
    void 0;
function pn(i) {
  let e;
  return typeof window < "u" && typeof window[i] < "u" && (e = window[i]), e;
}
dt.getFromWindow = pn;
function Jn(i) {
  const e = pn(i);
  if (!e) throw new Error(`${i} is not defined in Window`);
  return e;
}
dt.getFromWindowOrThrow = Jn;
function VI() {
  return Jn("document");
}
dt.getDocumentOrThrow = VI;
function WI() {
  return pn("document");
}
dt.getDocument = WI;
function GI() {
  return Jn("navigator");
}
dt.getNavigatorOrThrow = GI;
function JI() {
  return pn("navigator");
}
dt.getNavigator = JI;
function YI() {
  return Jn("location");
}
dt.getLocationOrThrow = YI;
function QI() {
  return pn("location");
}
dt.getLocation = QI;
function XI() {
  return Jn("crypto");
}
dt.getCryptoOrThrow = XI;
function ZI() {
  return pn("crypto");
}
dt.getCrypto = ZI;
function e5() {
  return Jn("localStorage");
}
dt.getLocalStorageOrThrow = e5;
function t5() {
  return pn("localStorage");
}
dt.getLocalStorage = t5;
var ih = {};
Object.defineProperty(ih, "__esModule", { value: !0 });
ih.getWindowMetadata = void 0;
const Nd = dt;
function r5() {
  let i, e;
  try {
    (i = Nd.getDocumentOrThrow()), (e = Nd.getLocationOrThrow());
  } catch {
    return null;
  }
  function t() {
    const I = i.getElementsByTagName("link"),
      P = [];
    for (let T = 0; T < I.length; T++) {
      const A = I[T],
        q = A.getAttribute("rel");
      if (q && q.toLowerCase().indexOf("icon") > -1) {
        const L = A.getAttribute("href");
        if (L)
          if (
            L.toLowerCase().indexOf("https:") === -1 &&
            L.toLowerCase().indexOf("http:") === -1 &&
            L.indexOf("//") !== 0
          ) {
            let Y = e.protocol + "//" + e.host;
            if (L.indexOf("/") === 0) Y += L;
            else {
              const p = e.pathname.split("/");
              p.pop();
              const D = p.join("/");
              Y += D + "/" + L;
            }
            P.push(Y);
          } else if (L.indexOf("//") === 0) {
            const Y = e.protocol + L;
            P.push(Y);
          } else P.push(L);
      }
    }
    return P;
  }
  function s(...I) {
    const P = i.getElementsByTagName("meta");
    for (let T = 0; T < P.length; T++) {
      const A = P[T],
        q = ["itemprop", "property", "name"]
          .map((L) => A.getAttribute(L))
          .filter((L) => (L ? I.includes(L) : !1));
      if (q.length && q) {
        const L = A.getAttribute("content");
        if (L) return L;
      }
    }
    return "";
  }
  function o() {
    let I = s("name", "og:site_name", "og:title", "twitter:title");
    return I || (I = i.title), I;
  }
  function u() {
    return s(
      "description",
      "og:description",
      "twitter:description",
      "keywords"
    );
  }
  const d = o(),
    f = u(),
    _ = e.origin,
    y = t();
  return { description: f, url: _, icons: y, name: d };
}
ih.getWindowMetadata = r5;
var i5 = {};
(function (i) {
  const e = Mu,
    t = qu,
    s = Bu,
    o = Hu,
    u = (p) => p == null,
    d = Symbol("encodeFragmentIdentifier");
  function f(p) {
    switch (p.arrayFormat) {
      case "index":
        return (D) => (v, b) => {
          const g = v.length;
          return b === void 0 ||
            (p.skipNull && b === null) ||
            (p.skipEmptyString && b === "")
            ? v
            : b === null
            ? [...v, [E(D, p), "[", g, "]"].join("")]
            : [...v, [E(D, p), "[", E(g, p), "]=", E(b, p)].join("")];
        };
      case "bracket":
        return (D) => (v, b) =>
          b === void 0 ||
          (p.skipNull && b === null) ||
          (p.skipEmptyString && b === "")
            ? v
            : b === null
            ? [...v, [E(D, p), "[]"].join("")]
            : [...v, [E(D, p), "[]=", E(b, p)].join("")];
      case "colon-list-separator":
        return (D) => (v, b) =>
          b === void 0 ||
          (p.skipNull && b === null) ||
          (p.skipEmptyString && b === "")
            ? v
            : b === null
            ? [...v, [E(D, p), ":list="].join("")]
            : [...v, [E(D, p), ":list=", E(b, p)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const D = p.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (v) => (b, g) =>
          g === void 0 ||
          (p.skipNull && g === null) ||
          (p.skipEmptyString && g === "")
            ? b
            : ((g = g === null ? "" : g),
              b.length === 0
                ? [[E(v, p), D, E(g, p)].join("")]
                : [[b, E(g, p)].join(p.arrayFormatSeparator)]);
      }
      default:
        return (D) => (v, b) =>
          b === void 0 ||
          (p.skipNull && b === null) ||
          (p.skipEmptyString && b === "")
            ? v
            : b === null
            ? [...v, E(D, p)]
            : [...v, [E(D, p), "=", E(b, p)].join("")];
    }
  }
  function _(p) {
    let D;
    switch (p.arrayFormat) {
      case "index":
        return (v, b, g) => {
          if (
            ((D = /\[(\d*)\]$/.exec(v)), (v = v.replace(/\[\d*\]$/, "")), !D)
          ) {
            g[v] = b;
            return;
          }
          g[v] === void 0 && (g[v] = {}), (g[v][D[1]] = b);
        };
      case "bracket":
        return (v, b, g) => {
          if (((D = /(\[\])$/.exec(v)), (v = v.replace(/\[\]$/, "")), !D)) {
            g[v] = b;
            return;
          }
          if (g[v] === void 0) {
            g[v] = [b];
            return;
          }
          g[v] = [].concat(g[v], b);
        };
      case "colon-list-separator":
        return (v, b, g) => {
          if (((D = /(:list)$/.exec(v)), (v = v.replace(/:list$/, "")), !D)) {
            g[v] = b;
            return;
          }
          if (g[v] === void 0) {
            g[v] = [b];
            return;
          }
          g[v] = [].concat(g[v], b);
        };
      case "comma":
      case "separator":
        return (v, b, g) => {
          const c = typeof b == "string" && b.includes(p.arrayFormatSeparator),
            w =
              typeof b == "string" &&
              !c &&
              I(b, p).includes(p.arrayFormatSeparator);
          b = w ? I(b, p) : b;
          const K =
            c || w
              ? b.split(p.arrayFormatSeparator).map((G) => I(G, p))
              : b === null
              ? b
              : I(b, p);
          g[v] = K;
        };
      case "bracket-separator":
        return (v, b, g) => {
          const c = /(\[\])$/.test(v);
          if (((v = v.replace(/\[\]$/, "")), !c)) {
            g[v] = b && I(b, p);
            return;
          }
          const w =
            b === null
              ? []
              : b.split(p.arrayFormatSeparator).map((K) => I(K, p));
          if (g[v] === void 0) {
            g[v] = w;
            return;
          }
          g[v] = [].concat(g[v], w);
        };
      default:
        return (v, b, g) => {
          if (g[v] === void 0) {
            g[v] = b;
            return;
          }
          g[v] = [].concat(g[v], b);
        };
    }
  }
  function y(p) {
    if (typeof p != "string" || p.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function E(p, D) {
    return D.encode ? (D.strict ? e(p) : encodeURIComponent(p)) : p;
  }
  function I(p, D) {
    return D.decode ? t(p) : p;
  }
  function P(p) {
    return Array.isArray(p)
      ? p.sort()
      : typeof p == "object"
      ? P(Object.keys(p))
          .sort((D, v) => Number(D) - Number(v))
          .map((D) => p[D])
      : p;
  }
  function T(p) {
    const D = p.indexOf("#");
    return D !== -1 && (p = p.slice(0, D)), p;
  }
  function A(p) {
    let D = "";
    const v = p.indexOf("#");
    return v !== -1 && (D = p.slice(v)), D;
  }
  function q(p) {
    p = T(p);
    const D = p.indexOf("?");
    return D === -1 ? "" : p.slice(D + 1);
  }
  function L(p, D) {
    return (
      D.parseNumbers &&
      !Number.isNaN(Number(p)) &&
      typeof p == "string" &&
      p.trim() !== ""
        ? (p = Number(p))
        : D.parseBooleans &&
          p !== null &&
          (p.toLowerCase() === "true" || p.toLowerCase() === "false") &&
          (p = p.toLowerCase() === "true"),
      p
    );
  }
  function Y(p, D) {
    (D = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      D
    )),
      y(D.arrayFormatSeparator);
    const v = _(D),
      b = Object.create(null);
    if (typeof p != "string" || ((p = p.trim().replace(/^[?#&]/, "")), !p))
      return b;
    for (const g of p.split("&")) {
      if (g === "") continue;
      let [c, w] = s(D.decode ? g.replace(/\+/g, " ") : g, "=");
      (w =
        w === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(D.arrayFormat)
          ? w
          : I(w, D)),
        v(I(c, D), w, b);
    }
    for (const g of Object.keys(b)) {
      const c = b[g];
      if (typeof c == "object" && c !== null)
        for (const w of Object.keys(c)) c[w] = L(c[w], D);
      else b[g] = L(c, D);
    }
    return D.sort === !1
      ? b
      : (D.sort === !0
          ? Object.keys(b).sort()
          : Object.keys(b).sort(D.sort)
        ).reduce((g, c) => {
          const w = b[c];
          return (
            w && typeof w == "object" && !Array.isArray(w)
              ? (g[c] = P(w))
              : (g[c] = w),
            g
          );
        }, Object.create(null));
  }
  (i.extract = q),
    (i.parse = Y),
    (i.stringify = (p, D) => {
      if (!p) return "";
      (D = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        D
      )),
        y(D.arrayFormatSeparator);
      const v = (w) =>
          (D.skipNull && u(p[w])) || (D.skipEmptyString && p[w] === ""),
        b = f(D),
        g = {};
      for (const w of Object.keys(p)) v(w) || (g[w] = p[w]);
      const c = Object.keys(g);
      return (
        D.sort !== !1 && c.sort(D.sort),
        c
          .map((w) => {
            const K = p[w];
            return K === void 0
              ? ""
              : K === null
              ? E(w, D)
              : Array.isArray(K)
              ? K.length === 0 && D.arrayFormat === "bracket-separator"
                ? E(w, D) + "[]"
                : K.reduce(b(w), []).join("&")
              : E(w, D) + "=" + E(K, D);
          })
          .filter((w) => w.length > 0)
          .join("&")
      );
    }),
    (i.parseUrl = (p, D) => {
      D = Object.assign({ decode: !0 }, D);
      const [v, b] = s(p, "#");
      return Object.assign(
        { url: v.split("?")[0] || "", query: Y(q(p), D) },
        D && D.parseFragmentIdentifier && b
          ? { fragmentIdentifier: I(b, D) }
          : {}
      );
    }),
    (i.stringifyUrl = (p, D) => {
      D = Object.assign({ encode: !0, strict: !0, [d]: !0 }, D);
      const v = T(p.url).split("?")[0] || "",
        b = i.extract(p.url),
        g = i.parse(b, { sort: !1 }),
        c = Object.assign(g, p.query);
      let w = i.stringify(c, D);
      w && (w = `?${w}`);
      let K = A(p.url);
      return (
        p.fragmentIdentifier &&
          (K = `#${D[d] ? E(p.fragmentIdentifier, D) : p.fragmentIdentifier}`),
        `${v}${w}${K}`
      );
    }),
    (i.pick = (p, D, v) => {
      v = Object.assign({ parseFragmentIdentifier: !0, [d]: !1 }, v);
      const { url: b, query: g, fragmentIdentifier: c } = i.parseUrl(p, v);
      return i.stringifyUrl(
        { url: b, query: o(g, D), fragmentIdentifier: c },
        v
      );
    }),
    (i.exclude = (p, D, v) => {
      const b = Array.isArray(D) ? (g) => !D.includes(g) : (g, c) => !D(g, c);
      return i.pick(p, b, v);
    });
})(i5);
const n5 = ":";
function s5(i) {
  const [e, t] = i.split(n5);
  return { namespace: e, reference: t };
}
function iu(i = [], e = []) {
  return [...new Set([...i, ...e])];
}
function nh(i) {
  return i.includes(":");
}
function Ds(i) {
  return nh(i) ? i.split(":")[0] : i;
}
const o5 = {
  INVALID_METHOD: { message: "Invalid method.", code: 1001 },
  INVALID_EVENT: { message: "Invalid event.", code: 1002 },
  INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
  INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
  INVALID_SESSION_SETTLE_REQUEST: {
    message: "Invalid session settle request.",
    code: 1005,
  },
  UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
  UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
  UNAUTHORIZED_UPDATE_REQUEST: {
    message: "Unauthorized update request.",
    code: 3003,
  },
  UNAUTHORIZED_EXTEND_REQUEST: {
    message: "Unauthorized extend request.",
    code: 3004,
  },
  USER_REJECTED: { message: "User rejected.", code: 5e3 },
  USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
  USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
  USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
  UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
  UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
  UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
  UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
  UNSUPPORTED_NAMESPACE_KEY: {
    message: "Unsupported namespace key.",
    code: 5104,
  },
  USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
  SESSION_SETTLEMENT_FAILED: {
    message: "Session settlement failed.",
    code: 7e3,
  },
  WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
};
function Rd(i, e) {
  const { message: t, code: s } = o5[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function Fd(i, e) {
  return Array.isArray(i) ? (typeof e < "u" && i.length ? i.every(e) : !0) : !1;
}
function a5(i) {
  return Object.getPrototypeOf(i) === Object.prototype && Object.keys(i).length;
}
var xu = { exports: {} };
(function (i, e) {
  var t = typeof self < "u" ? self : Qr,
    s = (function () {
      function u() {
        (this.fetch = !1), (this.DOMException = t.DOMException);
      }
      return (u.prototype = t), new u();
    })();
  (function (u) {
    (function (d) {
      var f = {
        searchParams: "URLSearchParams" in u,
        iterable: "Symbol" in u && "iterator" in Symbol,
        blob:
          "FileReader" in u &&
          "Blob" in u &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in u,
        arrayBuffer: "ArrayBuffer" in u,
      };
      function _(x) {
        return x && DataView.prototype.isPrototypeOf(x);
      }
      if (f.arrayBuffer)
        var y = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          E =
            ArrayBuffer.isView ||
            function (x) {
              return x && y.indexOf(Object.prototype.toString.call(x)) > -1;
            };
      function I(x) {
        if (
          (typeof x != "string" && (x = String(x)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(x))
        )
          throw new TypeError("Invalid character in header field name");
        return x.toLowerCase();
      }
      function P(x) {
        return typeof x != "string" && (x = String(x)), x;
      }
      function T(x) {
        var R = {
          next: function () {
            var te = x.shift();
            return { done: te === void 0, value: te };
          },
        };
        return (
          f.iterable &&
            (R[Symbol.iterator] = function () {
              return R;
            }),
          R
        );
      }
      function A(x) {
        (this.map = {}),
          x instanceof A
            ? x.forEach(function (R, te) {
                this.append(te, R);
              }, this)
            : Array.isArray(x)
            ? x.forEach(function (R) {
                this.append(R[0], R[1]);
              }, this)
            : x &&
              Object.getOwnPropertyNames(x).forEach(function (R) {
                this.append(R, x[R]);
              }, this);
      }
      (A.prototype.append = function (x, R) {
        (x = I(x)), (R = P(R));
        var te = this.map[x];
        this.map[x] = te ? te + ", " + R : R;
      }),
        (A.prototype.delete = function (x) {
          delete this.map[I(x)];
        }),
        (A.prototype.get = function (x) {
          return (x = I(x)), this.has(x) ? this.map[x] : null;
        }),
        (A.prototype.has = function (x) {
          return this.map.hasOwnProperty(I(x));
        }),
        (A.prototype.set = function (x, R) {
          this.map[I(x)] = P(R);
        }),
        (A.prototype.forEach = function (x, R) {
          for (var te in this.map)
            this.map.hasOwnProperty(te) && x.call(R, this.map[te], te, this);
        }),
        (A.prototype.keys = function () {
          var x = [];
          return (
            this.forEach(function (R, te) {
              x.push(te);
            }),
            T(x)
          );
        }),
        (A.prototype.values = function () {
          var x = [];
          return (
            this.forEach(function (R) {
              x.push(R);
            }),
            T(x)
          );
        }),
        (A.prototype.entries = function () {
          var x = [];
          return (
            this.forEach(function (R, te) {
              x.push([te, R]);
            }),
            T(x)
          );
        }),
        f.iterable && (A.prototype[Symbol.iterator] = A.prototype.entries);
      function q(x) {
        if (x.bodyUsed) return Promise.reject(new TypeError("Already read"));
        x.bodyUsed = !0;
      }
      function L(x) {
        return new Promise(function (R, te) {
          (x.onload = function () {
            R(x.result);
          }),
            (x.onerror = function () {
              te(x.error);
            });
        });
      }
      function Y(x) {
        var R = new FileReader(),
          te = L(R);
        return R.readAsArrayBuffer(x), te;
      }
      function p(x) {
        var R = new FileReader(),
          te = L(R);
        return R.readAsText(x), te;
      }
      function D(x) {
        for (
          var R = new Uint8Array(x), te = new Array(R.length), X = 0;
          X < R.length;
          X++
        )
          te[X] = String.fromCharCode(R[X]);
        return te.join("");
      }
      function v(x) {
        if (x.slice) return x.slice(0);
        var R = new Uint8Array(x.byteLength);
        return R.set(new Uint8Array(x)), R.buffer;
      }
      function b() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (x) {
            (this._bodyInit = x),
              x
                ? typeof x == "string"
                  ? (this._bodyText = x)
                  : f.blob && Blob.prototype.isPrototypeOf(x)
                  ? (this._bodyBlob = x)
                  : f.formData && FormData.prototype.isPrototypeOf(x)
                  ? (this._bodyFormData = x)
                  : f.searchParams && URLSearchParams.prototype.isPrototypeOf(x)
                  ? (this._bodyText = x.toString())
                  : f.arrayBuffer && f.blob && _(x)
                  ? ((this._bodyArrayBuffer = v(x.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : f.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(x) || E(x))
                  ? (this._bodyArrayBuffer = v(x))
                  : (this._bodyText = x = Object.prototype.toString.call(x))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof x == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : f.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(x) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          f.blob &&
            ((this.blob = function () {
              var x = q(this);
              if (x) return x;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? q(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(Y);
            })),
          (this.text = function () {
            var x = q(this);
            if (x) return x;
            if (this._bodyBlob) return p(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(D(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          f.formData &&
            (this.formData = function () {
              return this.text().then(K);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function c(x) {
        var R = x.toUpperCase();
        return g.indexOf(R) > -1 ? R : x;
      }
      function w(x, R) {
        R = R || {};
        var te = R.body;
        if (x instanceof w) {
          if (x.bodyUsed) throw new TypeError("Already read");
          (this.url = x.url),
            (this.credentials = x.credentials),
            R.headers || (this.headers = new A(x.headers)),
            (this.method = x.method),
            (this.mode = x.mode),
            (this.signal = x.signal),
            !te &&
              x._bodyInit != null &&
              ((te = x._bodyInit), (x.bodyUsed = !0));
        } else this.url = String(x);
        if (
          ((this.credentials =
            R.credentials || this.credentials || "same-origin"),
          (R.headers || !this.headers) && (this.headers = new A(R.headers)),
          (this.method = c(R.method || this.method || "GET")),
          (this.mode = R.mode || this.mode || null),
          (this.signal = R.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && te)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(te);
      }
      w.prototype.clone = function () {
        return new w(this, { body: this._bodyInit });
      };
      function K(x) {
        var R = new FormData();
        return (
          x
            .trim()
            .split("&")
            .forEach(function (te) {
              if (te) {
                var X = te.split("="),
                  V = X.shift().replace(/\+/g, " "),
                  W = X.join("=").replace(/\+/g, " ");
                R.append(decodeURIComponent(V), decodeURIComponent(W));
              }
            }),
          R
        );
      }
      function G(x) {
        var R = new A(),
          te = x.replace(/\r?\n[\t ]+/g, " ");
        return (
          te.split(/\r?\n/).forEach(function (X) {
            var V = X.split(":"),
              W = V.shift().trim();
            if (W) {
              var Q = V.join(":").trim();
              R.append(W, Q);
            }
          }),
          R
        );
      }
      b.call(w.prototype);
      function se(x, R) {
        R || (R = {}),
          (this.type = "default"),
          (this.status = R.status === void 0 ? 200 : R.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in R ? R.statusText : "OK"),
          (this.headers = new A(R.headers)),
          (this.url = R.url || ""),
          this._initBody(x);
      }
      b.call(se.prototype),
        (se.prototype.clone = function () {
          return new se(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new A(this.headers),
            url: this.url,
          });
        }),
        (se.error = function () {
          var x = new se(null, { status: 0, statusText: "" });
          return (x.type = "error"), x;
        });
      var ue = [301, 302, 303, 307, 308];
      (se.redirect = function (x, R) {
        if (ue.indexOf(R) === -1) throw new RangeError("Invalid status code");
        return new se(null, { status: R, headers: { location: x } });
      }),
        (d.DOMException = u.DOMException);
      try {
        new d.DOMException();
      } catch {
        (d.DOMException = function (R, te) {
          (this.message = R), (this.name = te);
          var X = Error(R);
          this.stack = X.stack;
        }),
          (d.DOMException.prototype = Object.create(Error.prototype)),
          (d.DOMException.prototype.constructor = d.DOMException);
      }
      function de(x, R) {
        return new Promise(function (te, X) {
          var V = new w(x, R);
          if (V.signal && V.signal.aborted)
            return X(new d.DOMException("Aborted", "AbortError"));
          var W = new XMLHttpRequest();
          function Q() {
            W.abort();
          }
          (W.onload = function () {
            var ie = {
              status: W.status,
              statusText: W.statusText,
              headers: G(W.getAllResponseHeaders() || ""),
            };
            ie.url =
              "responseURL" in W
                ? W.responseURL
                : ie.headers.get("X-Request-URL");
            var _e = "response" in W ? W.response : W.responseText;
            te(new se(_e, ie));
          }),
            (W.onerror = function () {
              X(new TypeError("Network request failed"));
            }),
            (W.ontimeout = function () {
              X(new TypeError("Network request failed"));
            }),
            (W.onabort = function () {
              X(new d.DOMException("Aborted", "AbortError"));
            }),
            W.open(V.method, V.url, !0),
            V.credentials === "include"
              ? (W.withCredentials = !0)
              : V.credentials === "omit" && (W.withCredentials = !1),
            "responseType" in W && f.blob && (W.responseType = "blob"),
            V.headers.forEach(function (ie, _e) {
              W.setRequestHeader(_e, ie);
            }),
            V.signal &&
              (V.signal.addEventListener("abort", Q),
              (W.onreadystatechange = function () {
                W.readyState === 4 && V.signal.removeEventListener("abort", Q);
              })),
            W.send(typeof V._bodyInit > "u" ? null : V._bodyInit);
        });
      }
      return (
        (de.polyfill = !0),
        u.fetch ||
          ((u.fetch = de), (u.Headers = A), (u.Request = w), (u.Response = se)),
        (d.Headers = A),
        (d.Request = w),
        (d.Response = se),
        (d.fetch = de),
        Object.defineProperty(d, "__esModule", { value: !0 }),
        d
      );
    })({});
  })(s),
    (s.fetch.ponyfill = !0),
    delete s.fetch.polyfill;
  var o = s;
  (e = o.fetch),
    (e.default = o.fetch),
    (e.fetch = o.fetch),
    (e.Headers = o.Headers),
    (e.Request = o.Request),
    (e.Response = o.Response),
    (i.exports = e);
})(xu, xu.exports);
var c5 = xu.exports;
const Ud = Nu(c5),
  u5 = (i) =>
    JSON.stringify(i, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    ),
  h5 = (i) => {
    const e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      t = i.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (s, o) =>
      typeof o == "string" && o.match(/^\d+n$/)
        ? BigInt(o.substring(0, o.length - 1))
        : o
    );
  };
function l5(i) {
  if (typeof i != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof i}`);
  try {
    return h5(i);
  } catch {
    return i;
  }
}
function $d(i) {
  return typeof i == "string" ? i : u5(i) || "";
}
const f5 = { Accept: "application/json", "Content-Type": "application/json" },
  d5 = "POST",
  Ld = { headers: f5, method: d5 },
  jd = 10;
class Hi {
  constructor(e, t = !1) {
    if (
      ((this.url = e),
      (this.disableProviderPing = t),
      (this.events = new Hr.EventEmitter()),
      (this.isAvailable = !1),
      (this.registering = !1),
      !od(e))
    )
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${e}`
      );
    (this.url = e), (this.disableProviderPing = t);
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(e, t) {
    this.isAvailable || (await this.register());
    try {
      const s = $d(e),
        u = await (
          await Ud(this.url, Object.assign(Object.assign({}, Ld), { body: s }))
        ).json();
      this.onPayload({ data: u });
    } catch (s) {
      this.onError(e.id, s);
    }
  }
  async register(e = this.url) {
    if (!od(e))
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${e}`
      );
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= t ||
          this.events.listenerCount("open") >= t) &&
          this.events.setMaxListeners(t + 1),
        new Promise((s, o) => {
          this.events.once("register_error", (u) => {
            this.resetMaxListeners(), o(u);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.isAvailable > "u"))
                return o(new Error("HTTP connection is missing or invalid"));
              s();
            });
        })
      );
    }
    (this.url = e), (this.registering = !0);
    try {
      if (!this.disableProviderPing) {
        const t = $d({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await Ud(e, Object.assign(Object.assign({}, Ld), { body: t }));
      }
      this.onOpen();
    } catch (t) {
      const s = this.parseError(t);
      throw (this.events.emit("register_error", s), this.onClose(), s);
    }
  }
  onOpen() {
    (this.isAvailable = !0), (this.registering = !1), this.events.emit("open");
  }
  onClose() {
    (this.isAvailable = !1), (this.registering = !1), this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? l5(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const s = this.parseError(t),
      o = s.message || s.toString(),
      u = la(e, o);
    this.events.emit("payload", u);
  }
  parseError(e, t = this.url) {
    return qp(e, t, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > jd && this.events.setMaxListeners(jd);
  }
}
const Md = "error",
  p5 = "wss://relay.walletconnect.com",
  g5 = "wc",
  y5 = "universal_provider",
  qd = `${g5}@2:${y5}:`,
  m5 = "https://rpc.walletconnect.com/v1/",
  Oi = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var bs =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Pu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ (function (i, e) {
  (function () {
    var t,
      s = "4.17.21",
      o = 200,
      u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      d = "Expected a function",
      f = "Invalid `variable` option passed into `_.template`",
      _ = "__lodash_hash_undefined__",
      y = 500,
      E = "__lodash_placeholder__",
      I = 1,
      P = 2,
      T = 4,
      A = 1,
      q = 2,
      L = 1,
      Y = 2,
      p = 4,
      D = 8,
      v = 16,
      b = 32,
      g = 64,
      c = 128,
      w = 256,
      K = 512,
      G = 30,
      se = "...",
      ue = 800,
      de = 16,
      x = 1,
      R = 2,
      te = 3,
      X = 1 / 0,
      V = 9007199254740991,
      W = 17976931348623157e292,
      Q = 0 / 0,
      ie = 4294967295,
      _e = ie - 1,
      oe = ie >>> 1,
      be = [
        ["ary", c],
        ["bind", L],
        ["bindKey", Y],
        ["curry", D],
        ["curryRight", v],
        ["flip", K],
        ["partial", b],
        ["partialRight", g],
        ["rearg", w],
      ],
      le = "[object Arguments]",
      ve = "[object Array]",
      z = "[object AsyncFunction]",
      H = "[object Boolean]",
      $ = "[object Date]",
      l = "[object DOMException]",
      F = "[object Error]",
      ae = "[object Function]",
      fe = "[object GeneratorFunction]",
      Ie = "[object Map]",
      He = "[object Number]",
      ke = "[object Null]",
      Le = "[object Object]",
      yt = "[object Promise]",
      mt = "[object Proxy]",
      Me = "[object RegExp]",
      Oe = "[object Set]",
      Re = "[object String]",
      Fe = "[object Symbol]",
      qe = "[object Undefined]",
      Pe = "[object WeakMap]",
      Ue = "[object WeakSet]",
      Se = "[object ArrayBuffer]",
      Ce = "[object DataView]",
      ze = "[object Float32Array]",
      xe = "[object Float64Array]",
      Ve = "[object Int8Array]",
      Ge = "[object Int16Array]",
      et = "[object Int32Array]",
      tt = "[object Uint8Array]",
      Qe = "[object Uint8ClampedArray]",
      ir = "[object Uint16Array]",
      pr = "[object Uint32Array]",
      Xr = /\b__p \+= '';/g,
      nr = /\b(__p \+=) '' \+/g,
      ai = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      xi = /&(?:amp|lt|gt|quot|#39);/g,
      zi = /[&<>"']/g,
      St = RegExp(xi.source),
      vt = RegExp(zi.source),
      It = /<%-([\s\S]+?)%>/g,
      Ot = /<%([\s\S]+?)%>/g,
      Et = /<%=([\s\S]+?)%>/g,
      wt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Lt = /^\w*$/,
      jt =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      xt = /[\\^$.*+?()[\]{}|]/g,
      Mt = RegExp(xt.source),
      Pt = /^\s+/,
      At = /\s/,
      Ct = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      ht = /\{\n\/\* \[wrapped with (.+)\] \*/,
      qt = /,? & /,
      Bt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      ga = /[()=,{}\[\]\/\s]/,
      ya = /\\(\\)?/g,
      ma = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Nr = /\w*$/,
      va = /^[-+]0x[0-9a-f]+$/i,
      wa = /^0b[01]+$/i,
      _a = /^\[object .+?Constructor\]$/,
      ba = /^0o[0-7]+$/i,
      Ea = /^(?:0|[1-9]\d*)$/,
      ci = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      yn = /($^)/,
      Da = /['\n\r\u2028\u2029\\]/g,
      mn = "\\ud800-\\udfff",
      Sa = "\\u0300-\\u036f",
      Ia = "\\ufe20-\\ufe2f",
      vn = "\\u20d0-\\u20ff",
      $s = Sa + Ia + vn,
      Ls = "\\u2700-\\u27bf",
      zr = "a-z\\xdf-\\xf6\\xf8-\\xff",
      Oa = "\\xac\\xb1\\xd7\\xf7",
      xa = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      Pa = "\\u2000-\\u206f",
      Ca =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      js = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      Ms = "\\ufe0e\\ufe0f",
      Ki = Oa + xa + Pa + Ca,
      Yn = "['’]",
      ki = "[" + mn + "]",
      Qn = "[" + Ki + "]",
      Vi = "[" + $s + "]",
      qs = "\\d+",
      Ta = "[" + Ls + "]",
      Bs = "[" + zr + "]",
      Hs = "[^" + mn + Ki + qs + Ls + zr + js + "]",
      wn = "\\ud83c[\\udffb-\\udfff]",
      Aa = "(?:" + Vi + "|" + wn + ")",
      zs = "[^" + mn + "]",
      _n = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Pi = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      Dr = "[" + js + "]",
      Ks = "\\u200d",
      ks = "(?:" + Bs + "|" + Hs + ")",
      Zr = "(?:" + Dr + "|" + Hs + ")",
      Vs = "(?:" + Yn + "(?:d|ll|m|re|s|t|ve))?",
      Ws = "(?:" + Yn + "(?:D|LL|M|RE|S|T|VE))?",
      Gs = Aa + "?",
      Js = "[" + Ms + "]?",
      Na = "(?:" + Ks + "(?:" + [zs, _n, Pi].join("|") + ")" + Js + Gs + ")*",
      ui = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      Ys = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      Qs = Js + Gs + Na,
      bn = "(?:" + [Ta, _n, Pi].join("|") + ")" + Qs,
      Ra = "(?:" + [zs + Vi + "?", Vi, _n, Pi, ki].join("|") + ")",
      Xn = RegExp(Yn, "g"),
      Fa = RegExp(Vi, "g"),
      En = RegExp(wn + "(?=" + wn + ")|" + Ra + Qs, "g"),
      Xs = RegExp(
        [
          Dr + "?" + Bs + "+" + Vs + "(?=" + [Qn, Dr, "$"].join("|") + ")",
          Zr + "+" + Ws + "(?=" + [Qn, Dr + ks, "$"].join("|") + ")",
          Dr + "?" + ks + "+" + Vs,
          Dr + "+" + Ws,
          Ys,
          ui,
          qs,
          bn,
        ].join("|"),
        "g"
      ),
      Zs = RegExp("[" + Ks + mn + $s + Ms + "]"),
      Wi = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      eo = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      Ua = -1,
      ot = {};
    (ot[ze] =
      ot[xe] =
      ot[Ve] =
      ot[Ge] =
      ot[et] =
      ot[tt] =
      ot[Qe] =
      ot[ir] =
      ot[pr] =
        !0),
      (ot[le] =
        ot[ve] =
        ot[Se] =
        ot[H] =
        ot[Ce] =
        ot[$] =
        ot[F] =
        ot[ae] =
        ot[Ie] =
        ot[He] =
        ot[Le] =
        ot[Me] =
        ot[Oe] =
        ot[Re] =
        ot[Pe] =
          !1);
    var st = {};
    (st[le] =
      st[ve] =
      st[Se] =
      st[Ce] =
      st[H] =
      st[$] =
      st[ze] =
      st[xe] =
      st[Ve] =
      st[Ge] =
      st[et] =
      st[Ie] =
      st[He] =
      st[Le] =
      st[Me] =
      st[Oe] =
      st[Re] =
      st[Fe] =
      st[tt] =
      st[Qe] =
      st[ir] =
      st[pr] =
        !0),
      (st[F] = st[ae] = st[Pe] = !1);
    var C = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      j = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      re = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      pe = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      at = parseFloat,
      Ae = parseInt,
      pt = typeof bs == "object" && bs && bs.Object === Object && bs,
      Ht = typeof self == "object" && self && self.Object === Object && self,
      Xe = pt || Ht || Function("return this")(),
      ct = e && !e.nodeType && e,
      Nt = ct && !0 && i && !i.nodeType && i,
      gr = Nt && Nt.exports === ct,
      zt = gr && pt.process,
      gt = (function () {
        try {
          var M = Nt && Nt.require && Nt.require("util").types;
          return M || (zt && zt.binding && zt.binding("util"));
        } catch {}
      })(),
      sr = gt && gt.isArrayBuffer,
      Kr = gt && gt.isDate,
      Rr = gt && gt.isMap,
      ei = gt && gt.isRegExp,
      Zn = gt && gt.isSet,
      Gi = gt && gt.isTypedArray;
    function Vt(M, J, k) {
      switch (k.length) {
        case 0:
          return M.call(J);
        case 1:
          return M.call(J, k[0]);
        case 2:
          return M.call(J, k[0], k[1]);
        case 3:
          return M.call(J, k[0], k[1], k[2]);
      }
      return M.apply(J, k);
    }
    function fg(M, J, k, ge) {
      for (var Te = -1, rt = M == null ? 0 : M.length; ++Te < rt; ) {
        var Kt = M[Te];
        J(ge, Kt, k(Kt), M);
      }
      return ge;
    }
    function Fr(M, J) {
      for (
        var k = -1, ge = M == null ? 0 : M.length;
        ++k < ge && J(M[k], k, M) !== !1;

      );
      return M;
    }
    function dg(M, J) {
      for (var k = M == null ? 0 : M.length; k-- && J(M[k], k, M) !== !1; );
      return M;
    }
    function ah(M, J) {
      for (var k = -1, ge = M == null ? 0 : M.length; ++k < ge; )
        if (!J(M[k], k, M)) return !1;
      return !0;
    }
    function Ci(M, J) {
      for (
        var k = -1, ge = M == null ? 0 : M.length, Te = 0, rt = [];
        ++k < ge;

      ) {
        var Kt = M[k];
        J(Kt, k, M) && (rt[Te++] = Kt);
      }
      return rt;
    }
    function to(M, J) {
      var k = M == null ? 0 : M.length;
      return !!k && Dn(M, J, 0) > -1;
    }
    function $a(M, J, k) {
      for (var ge = -1, Te = M == null ? 0 : M.length; ++ge < Te; )
        if (k(J, M[ge])) return !0;
      return !1;
    }
    function _t(M, J) {
      for (
        var k = -1, ge = M == null ? 0 : M.length, Te = Array(ge);
        ++k < ge;

      )
        Te[k] = J(M[k], k, M);
      return Te;
    }
    function Ti(M, J) {
      for (var k = -1, ge = J.length, Te = M.length; ++k < ge; )
        M[Te + k] = J[k];
      return M;
    }
    function La(M, J, k, ge) {
      var Te = -1,
        rt = M == null ? 0 : M.length;
      for (ge && rt && (k = M[++Te]); ++Te < rt; ) k = J(k, M[Te], Te, M);
      return k;
    }
    function pg(M, J, k, ge) {
      var Te = M == null ? 0 : M.length;
      for (ge && Te && (k = M[--Te]); Te--; ) k = J(k, M[Te], Te, M);
      return k;
    }
    function ja(M, J) {
      for (var k = -1, ge = M == null ? 0 : M.length; ++k < ge; )
        if (J(M[k], k, M)) return !0;
      return !1;
    }
    var gg = Ma("length");
    function yg(M) {
      return M.split("");
    }
    function mg(M) {
      return M.match(Bt) || [];
    }
    function ch(M, J, k) {
      var ge;
      return (
        k(M, function (Te, rt, Kt) {
          if (J(Te, rt, Kt)) return (ge = rt), !1;
        }),
        ge
      );
    }
    function ro(M, J, k, ge) {
      for (var Te = M.length, rt = k + (ge ? 1 : -1); ge ? rt-- : ++rt < Te; )
        if (J(M[rt], rt, M)) return rt;
      return -1;
    }
    function Dn(M, J, k) {
      return J === J ? Cg(M, J, k) : ro(M, uh, k);
    }
    function vg(M, J, k, ge) {
      for (var Te = k - 1, rt = M.length; ++Te < rt; )
        if (ge(M[Te], J)) return Te;
      return -1;
    }
    function uh(M) {
      return M !== M;
    }
    function hh(M, J) {
      var k = M == null ? 0 : M.length;
      return k ? Ba(M, J) / k : Q;
    }
    function Ma(M) {
      return function (J) {
        return J == null ? t : J[M];
      };
    }
    function qa(M) {
      return function (J) {
        return M == null ? t : M[J];
      };
    }
    function lh(M, J, k, ge, Te) {
      return (
        Te(M, function (rt, Kt, ut) {
          k = ge ? ((ge = !1), rt) : J(k, rt, Kt, ut);
        }),
        k
      );
    }
    function wg(M, J) {
      var k = M.length;
      for (M.sort(J); k--; ) M[k] = M[k].value;
      return M;
    }
    function Ba(M, J) {
      for (var k, ge = -1, Te = M.length; ++ge < Te; ) {
        var rt = J(M[ge]);
        rt !== t && (k = k === t ? rt : k + rt);
      }
      return k;
    }
    function Ha(M, J) {
      for (var k = -1, ge = Array(M); ++k < M; ) ge[k] = J(k);
      return ge;
    }
    function _g(M, J) {
      return _t(J, function (k) {
        return [k, M[k]];
      });
    }
    function fh(M) {
      return M && M.slice(0, yh(M) + 1).replace(Pt, "");
    }
    function Sr(M) {
      return function (J) {
        return M(J);
      };
    }
    function za(M, J) {
      return _t(J, function (k) {
        return M[k];
      });
    }
    function es(M, J) {
      return M.has(J);
    }
    function dh(M, J) {
      for (var k = -1, ge = M.length; ++k < ge && Dn(J, M[k], 0) > -1; );
      return k;
    }
    function ph(M, J) {
      for (var k = M.length; k-- && Dn(J, M[k], 0) > -1; );
      return k;
    }
    function bg(M, J) {
      for (var k = M.length, ge = 0; k--; ) M[k] === J && ++ge;
      return ge;
    }
    var Eg = qa(C),
      Dg = qa(j);
    function Sg(M) {
      return "\\" + pe[M];
    }
    function Ig(M, J) {
      return M == null ? t : M[J];
    }
    function Sn(M) {
      return Zs.test(M);
    }
    function Og(M) {
      return Wi.test(M);
    }
    function xg(M) {
      for (var J, k = []; !(J = M.next()).done; ) k.push(J.value);
      return k;
    }
    function Ka(M) {
      var J = -1,
        k = Array(M.size);
      return (
        M.forEach(function (ge, Te) {
          k[++J] = [Te, ge];
        }),
        k
      );
    }
    function gh(M, J) {
      return function (k) {
        return M(J(k));
      };
    }
    function Ai(M, J) {
      for (var k = -1, ge = M.length, Te = 0, rt = []; ++k < ge; ) {
        var Kt = M[k];
        (Kt === J || Kt === E) && ((M[k] = E), (rt[Te++] = k));
      }
      return rt;
    }
    function io(M) {
      var J = -1,
        k = Array(M.size);
      return (
        M.forEach(function (ge) {
          k[++J] = ge;
        }),
        k
      );
    }
    function Pg(M) {
      var J = -1,
        k = Array(M.size);
      return (
        M.forEach(function (ge) {
          k[++J] = [ge, ge];
        }),
        k
      );
    }
    function Cg(M, J, k) {
      for (var ge = k - 1, Te = M.length; ++ge < Te; )
        if (M[ge] === J) return ge;
      return -1;
    }
    function Tg(M, J, k) {
      for (var ge = k + 1; ge--; ) if (M[ge] === J) return ge;
      return ge;
    }
    function In(M) {
      return Sn(M) ? Ng(M) : gg(M);
    }
    function kr(M) {
      return Sn(M) ? Rg(M) : yg(M);
    }
    function yh(M) {
      for (var J = M.length; J-- && At.test(M.charAt(J)); );
      return J;
    }
    var Ag = qa(re);
    function Ng(M) {
      for (var J = (En.lastIndex = 0); En.test(M); ) ++J;
      return J;
    }
    function Rg(M) {
      return M.match(En) || [];
    }
    function Fg(M) {
      return M.match(Xs) || [];
    }
    var Ug = function M(J) {
        J = J == null ? Xe : On.defaults(Xe.Object(), J, On.pick(Xe, eo));
        var k = J.Array,
          ge = J.Date,
          Te = J.Error,
          rt = J.Function,
          Kt = J.Math,
          ut = J.Object,
          ka = J.RegExp,
          $g = J.String,
          Ur = J.TypeError,
          no = k.prototype,
          Lg = rt.prototype,
          xn = ut.prototype,
          so = J["__core-js_shared__"],
          oo = Lg.toString,
          nt = xn.hasOwnProperty,
          jg = 0,
          mh = (function () {
            var r = /[^.]+$/.exec((so && so.keys && so.keys.IE_PROTO) || "");
            return r ? "Symbol(src)_1." + r : "";
          })(),
          ao = xn.toString,
          Mg = oo.call(ut),
          qg = Xe._,
          Bg = ka(
            "^" +
              oo
                .call(nt)
                .replace(xt, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          co = gr ? J.Buffer : t,
          Ni = J.Symbol,
          uo = J.Uint8Array,
          vh = co ? co.allocUnsafe : t,
          ho = gh(ut.getPrototypeOf, ut),
          wh = ut.create,
          _h = xn.propertyIsEnumerable,
          lo = no.splice,
          bh = Ni ? Ni.isConcatSpreadable : t,
          ts = Ni ? Ni.iterator : t,
          Ji = Ni ? Ni.toStringTag : t,
          fo = (function () {
            try {
              var r = en(ut, "defineProperty");
              return r({}, "", {}), r;
            } catch {}
          })(),
          Hg = J.clearTimeout !== Xe.clearTimeout && J.clearTimeout,
          zg = ge && ge.now !== Xe.Date.now && ge.now,
          Kg = J.setTimeout !== Xe.setTimeout && J.setTimeout,
          po = Kt.ceil,
          go = Kt.floor,
          Va = ut.getOwnPropertySymbols,
          kg = co ? co.isBuffer : t,
          Eh = J.isFinite,
          Vg = no.join,
          Wg = gh(ut.keys, ut),
          kt = Kt.max,
          Zt = Kt.min,
          Gg = ge.now,
          Jg = J.parseInt,
          Dh = Kt.random,
          Yg = no.reverse,
          Wa = en(J, "DataView"),
          rs = en(J, "Map"),
          Ga = en(J, "Promise"),
          Pn = en(J, "Set"),
          is = en(J, "WeakMap"),
          ns = en(ut, "create"),
          yo = is && new is(),
          Cn = {},
          Qg = tn(Wa),
          Xg = tn(rs),
          Zg = tn(Ga),
          e0 = tn(Pn),
          t0 = tn(is),
          mo = Ni ? Ni.prototype : t,
          ss = mo ? mo.valueOf : t,
          Sh = mo ? mo.toString : t;
        function S(r) {
          if (Tt(r) && !Ne(r) && !(r instanceof Je)) {
            if (r instanceof $r) return r;
            if (nt.call(r, "__wrapped__")) return Il(r);
          }
          return new $r(r);
        }
        var Tn = (function () {
          function r() {}
          return function (n) {
            if (!Dt(n)) return {};
            if (wh) return wh(n);
            r.prototype = n;
            var a = new r();
            return (r.prototype = t), a;
          };
        })();
        function vo() {}
        function $r(r, n) {
          (this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__chain__ = !!n),
            (this.__index__ = 0),
            (this.__values__ = t);
        }
        (S.templateSettings = {
          escape: It,
          evaluate: Ot,
          interpolate: Et,
          variable: "",
          imports: { _: S },
        }),
          (S.prototype = vo.prototype),
          (S.prototype.constructor = S),
          ($r.prototype = Tn(vo.prototype)),
          ($r.prototype.constructor = $r);
        function Je(r) {
          (this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = ie),
            (this.__views__ = []);
        }
        function r0() {
          var r = new Je(this.__wrapped__);
          return (
            (r.__actions__ = yr(this.__actions__)),
            (r.__dir__ = this.__dir__),
            (r.__filtered__ = this.__filtered__),
            (r.__iteratees__ = yr(this.__iteratees__)),
            (r.__takeCount__ = this.__takeCount__),
            (r.__views__ = yr(this.__views__)),
            r
          );
        }
        function i0() {
          if (this.__filtered__) {
            var r = new Je(this);
            (r.__dir__ = -1), (r.__filtered__ = !0);
          } else (r = this.clone()), (r.__dir__ *= -1);
          return r;
        }
        function n0() {
          var r = this.__wrapped__.value(),
            n = this.__dir__,
            a = Ne(r),
            h = n < 0,
            m = a ? r.length : 0,
            O = yy(0, m, this.__views__),
            N = O.start,
            U = O.end,
            B = U - N,
            Z = h ? U : N - 1,
            ee = this.__iteratees__,
            ne = ee.length,
            he = 0,
            ye = Zt(B, this.__takeCount__);
          if (!a || (!h && m == B && ye == B)) return Gh(r, this.__actions__);
          var Ee = [];
          e: for (; B-- && he < ye; ) {
            Z += n;
            for (var Be = -1, De = r[Z]; ++Be < ne; ) {
              var We = ee[Be],
                Ze = We.iteratee,
                xr = We.type,
                cr = Ze(De);
              if (xr == R) De = cr;
              else if (!cr) {
                if (xr == x) continue e;
                break e;
              }
            }
            Ee[he++] = De;
          }
          return Ee;
        }
        (Je.prototype = Tn(vo.prototype)), (Je.prototype.constructor = Je);
        function Yi(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.clear(); ++n < a; ) {
            var h = r[n];
            this.set(h[0], h[1]);
          }
        }
        function s0() {
          (this.__data__ = ns ? ns(null) : {}), (this.size = 0);
        }
        function o0(r) {
          var n = this.has(r) && delete this.__data__[r];
          return (this.size -= n ? 1 : 0), n;
        }
        function a0(r) {
          var n = this.__data__;
          if (ns) {
            var a = n[r];
            return a === _ ? t : a;
          }
          return nt.call(n, r) ? n[r] : t;
        }
        function c0(r) {
          var n = this.__data__;
          return ns ? n[r] !== t : nt.call(n, r);
        }
        function u0(r, n) {
          var a = this.__data__;
          return (
            (this.size += this.has(r) ? 0 : 1),
            (a[r] = ns && n === t ? _ : n),
            this
          );
        }
        (Yi.prototype.clear = s0),
          (Yi.prototype.delete = o0),
          (Yi.prototype.get = a0),
          (Yi.prototype.has = c0),
          (Yi.prototype.set = u0);
        function hi(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.clear(); ++n < a; ) {
            var h = r[n];
            this.set(h[0], h[1]);
          }
        }
        function h0() {
          (this.__data__ = []), (this.size = 0);
        }
        function l0(r) {
          var n = this.__data__,
            a = wo(n, r);
          if (a < 0) return !1;
          var h = n.length - 1;
          return a == h ? n.pop() : lo.call(n, a, 1), --this.size, !0;
        }
        function f0(r) {
          var n = this.__data__,
            a = wo(n, r);
          return a < 0 ? t : n[a][1];
        }
        function d0(r) {
          return wo(this.__data__, r) > -1;
        }
        function p0(r, n) {
          var a = this.__data__,
            h = wo(a, r);
          return h < 0 ? (++this.size, a.push([r, n])) : (a[h][1] = n), this;
        }
        (hi.prototype.clear = h0),
          (hi.prototype.delete = l0),
          (hi.prototype.get = f0),
          (hi.prototype.has = d0),
          (hi.prototype.set = p0);
        function li(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.clear(); ++n < a; ) {
            var h = r[n];
            this.set(h[0], h[1]);
          }
        }
        function g0() {
          (this.size = 0),
            (this.__data__ = {
              hash: new Yi(),
              map: new (rs || hi)(),
              string: new Yi(),
            });
        }
        function y0(r) {
          var n = Ao(this, r).delete(r);
          return (this.size -= n ? 1 : 0), n;
        }
        function m0(r) {
          return Ao(this, r).get(r);
        }
        function v0(r) {
          return Ao(this, r).has(r);
        }
        function w0(r, n) {
          var a = Ao(this, r),
            h = a.size;
          return a.set(r, n), (this.size += a.size == h ? 0 : 1), this;
        }
        (li.prototype.clear = g0),
          (li.prototype.delete = y0),
          (li.prototype.get = m0),
          (li.prototype.has = v0),
          (li.prototype.set = w0);
        function Qi(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.__data__ = new li(); ++n < a; ) this.add(r[n]);
        }
        function _0(r) {
          return this.__data__.set(r, _), this;
        }
        function b0(r) {
          return this.__data__.has(r);
        }
        (Qi.prototype.add = Qi.prototype.push = _0), (Qi.prototype.has = b0);
        function Vr(r) {
          var n = (this.__data__ = new hi(r));
          this.size = n.size;
        }
        function E0() {
          (this.__data__ = new hi()), (this.size = 0);
        }
        function D0(r) {
          var n = this.__data__,
            a = n.delete(r);
          return (this.size = n.size), a;
        }
        function S0(r) {
          return this.__data__.get(r);
        }
        function I0(r) {
          return this.__data__.has(r);
        }
        function O0(r, n) {
          var a = this.__data__;
          if (a instanceof hi) {
            var h = a.__data__;
            if (!rs || h.length < o - 1)
              return h.push([r, n]), (this.size = ++a.size), this;
            a = this.__data__ = new li(h);
          }
          return a.set(r, n), (this.size = a.size), this;
        }
        (Vr.prototype.clear = E0),
          (Vr.prototype.delete = D0),
          (Vr.prototype.get = S0),
          (Vr.prototype.has = I0),
          (Vr.prototype.set = O0);
        function Ih(r, n) {
          var a = Ne(r),
            h = !a && rn(r),
            m = !a && !h && Li(r),
            O = !a && !h && !m && Fn(r),
            N = a || h || m || O,
            U = N ? Ha(r.length, $g) : [],
            B = U.length;
          for (var Z in r)
            (n || nt.call(r, Z)) &&
              !(
                N &&
                (Z == "length" ||
                  (m && (Z == "offset" || Z == "parent")) ||
                  (O &&
                    (Z == "buffer" ||
                      Z == "byteLength" ||
                      Z == "byteOffset")) ||
                  gi(Z, B))
              ) &&
              U.push(Z);
          return U;
        }
        function Oh(r) {
          var n = r.length;
          return n ? r[sc(0, n - 1)] : t;
        }
        function x0(r, n) {
          return No(yr(r), Xi(n, 0, r.length));
        }
        function P0(r) {
          return No(yr(r));
        }
        function Ja(r, n, a) {
          ((a !== t && !Wr(r[n], a)) || (a === t && !(n in r))) && fi(r, n, a);
        }
        function os(r, n, a) {
          var h = r[n];
          (!(nt.call(r, n) && Wr(h, a)) || (a === t && !(n in r))) &&
            fi(r, n, a);
        }
        function wo(r, n) {
          for (var a = r.length; a--; ) if (Wr(r[a][0], n)) return a;
          return -1;
        }
        function C0(r, n, a, h) {
          return (
            Ri(r, function (m, O, N) {
              n(h, m, a(m), N);
            }),
            h
          );
        }
        function xh(r, n) {
          return r && ri(n, Wt(n), r);
        }
        function T0(r, n) {
          return r && ri(n, vr(n), r);
        }
        function fi(r, n, a) {
          n == "__proto__" && fo
            ? fo(r, n, {
                configurable: !0,
                enumerable: !0,
                value: a,
                writable: !0,
              })
            : (r[n] = a);
        }
        function Ya(r, n) {
          for (var a = -1, h = n.length, m = k(h), O = r == null; ++a < h; )
            m[a] = O ? t : Tc(r, n[a]);
          return m;
        }
        function Xi(r, n, a) {
          return (
            r === r &&
              (a !== t && (r = r <= a ? r : a),
              n !== t && (r = r >= n ? r : n)),
            r
          );
        }
        function Lr(r, n, a, h, m, O) {
          var N,
            U = n & I,
            B = n & P,
            Z = n & T;
          if ((a && (N = m ? a(r, h, m, O) : a(r)), N !== t)) return N;
          if (!Dt(r)) return r;
          var ee = Ne(r);
          if (ee) {
            if (((N = vy(r)), !U)) return yr(r, N);
          } else {
            var ne = er(r),
              he = ne == ae || ne == fe;
            if (Li(r)) return Qh(r, U);
            if (ne == Le || ne == le || (he && !m)) {
              if (((N = B || he ? {} : yl(r)), !U))
                return B ? ay(r, T0(N, r)) : oy(r, xh(N, r));
            } else {
              if (!st[ne]) return m ? r : {};
              N = wy(r, ne, U);
            }
          }
          O || (O = new Vr());
          var ye = O.get(r);
          if (ye) return ye;
          O.set(r, N),
            kl(r)
              ? r.forEach(function (De) {
                  N.add(Lr(De, n, a, De, r, O));
                })
              : zl(r) &&
                r.forEach(function (De, We) {
                  N.set(We, Lr(De, n, a, We, r, O));
                });
          var Ee = Z ? (B ? yc : gc) : B ? vr : Wt,
            Be = ee ? t : Ee(r);
          return (
            Fr(Be || r, function (De, We) {
              Be && ((We = De), (De = r[We])),
                os(N, We, Lr(De, n, a, We, r, O));
            }),
            N
          );
        }
        function A0(r) {
          var n = Wt(r);
          return function (a) {
            return Ph(a, r, n);
          };
        }
        function Ph(r, n, a) {
          var h = a.length;
          if (r == null) return !h;
          for (r = ut(r); h--; ) {
            var m = a[h],
              O = n[m],
              N = r[m];
            if ((N === t && !(m in r)) || !O(N)) return !1;
          }
          return !0;
        }
        function Ch(r, n, a) {
          if (typeof r != "function") throw new Ur(d);
          return ds(function () {
            r.apply(t, a);
          }, n);
        }
        function as(r, n, a, h) {
          var m = -1,
            O = to,
            N = !0,
            U = r.length,
            B = [],
            Z = n.length;
          if (!U) return B;
          a && (n = _t(n, Sr(a))),
            h
              ? ((O = $a), (N = !1))
              : n.length >= o && ((O = es), (N = !1), (n = new Qi(n)));
          e: for (; ++m < U; ) {
            var ee = r[m],
              ne = a == null ? ee : a(ee);
            if (((ee = h || ee !== 0 ? ee : 0), N && ne === ne)) {
              for (var he = Z; he--; ) if (n[he] === ne) continue e;
              B.push(ee);
            } else O(n, ne, h) || B.push(ee);
          }
          return B;
        }
        var Ri = rl(ti),
          Th = rl(Xa, !0);
        function N0(r, n) {
          var a = !0;
          return (
            Ri(r, function (h, m, O) {
              return (a = !!n(h, m, O)), a;
            }),
            a
          );
        }
        function _o(r, n, a) {
          for (var h = -1, m = r.length; ++h < m; ) {
            var O = r[h],
              N = n(O);
            if (N != null && (U === t ? N === N && !Or(N) : a(N, U)))
              var U = N,
                B = O;
          }
          return B;
        }
        function R0(r, n, a, h) {
          var m = r.length;
          for (
            a = je(a),
              a < 0 && (a = -a > m ? 0 : m + a),
              h = h === t || h > m ? m : je(h),
              h < 0 && (h += m),
              h = a > h ? 0 : Wl(h);
            a < h;

          )
            r[a++] = n;
          return r;
        }
        function Ah(r, n) {
          var a = [];
          return (
            Ri(r, function (h, m, O) {
              n(h, m, O) && a.push(h);
            }),
            a
          );
        }
        function Yt(r, n, a, h, m) {
          var O = -1,
            N = r.length;
          for (a || (a = by), m || (m = []); ++O < N; ) {
            var U = r[O];
            n > 0 && a(U)
              ? n > 1
                ? Yt(U, n - 1, a, h, m)
                : Ti(m, U)
              : h || (m[m.length] = U);
          }
          return m;
        }
        var Qa = il(),
          Nh = il(!0);
        function ti(r, n) {
          return r && Qa(r, n, Wt);
        }
        function Xa(r, n) {
          return r && Nh(r, n, Wt);
        }
        function bo(r, n) {
          return Ci(n, function (a) {
            return yi(r[a]);
          });
        }
        function Zi(r, n) {
          n = Ui(n, r);
          for (var a = 0, h = n.length; r != null && a < h; ) r = r[ii(n[a++])];
          return a && a == h ? r : t;
        }
        function Rh(r, n, a) {
          var h = n(r);
          return Ne(r) ? h : Ti(h, a(r));
        }
        function or(r) {
          return r == null
            ? r === t
              ? qe
              : ke
            : Ji && Ji in ut(r)
            ? gy(r)
            : Py(r);
        }
        function Za(r, n) {
          return r > n;
        }
        function F0(r, n) {
          return r != null && nt.call(r, n);
        }
        function U0(r, n) {
          return r != null && n in ut(r);
        }
        function $0(r, n, a) {
          return r >= Zt(n, a) && r < kt(n, a);
        }
        function ec(r, n, a) {
          for (
            var h = a ? $a : to,
              m = r[0].length,
              O = r.length,
              N = O,
              U = k(O),
              B = 1 / 0,
              Z = [];
            N--;

          ) {
            var ee = r[N];
            N && n && (ee = _t(ee, Sr(n))),
              (B = Zt(ee.length, B)),
              (U[N] =
                !a && (n || (m >= 120 && ee.length >= 120))
                  ? new Qi(N && ee)
                  : t);
          }
          ee = r[0];
          var ne = -1,
            he = U[0];
          e: for (; ++ne < m && Z.length < B; ) {
            var ye = ee[ne],
              Ee = n ? n(ye) : ye;
            if (
              ((ye = a || ye !== 0 ? ye : 0), !(he ? es(he, Ee) : h(Z, Ee, a)))
            ) {
              for (N = O; --N; ) {
                var Be = U[N];
                if (!(Be ? es(Be, Ee) : h(r[N], Ee, a))) continue e;
              }
              he && he.push(Ee), Z.push(ye);
            }
          }
          return Z;
        }
        function L0(r, n, a, h) {
          return (
            ti(r, function (m, O, N) {
              n(h, a(m), O, N);
            }),
            h
          );
        }
        function cs(r, n, a) {
          (n = Ui(n, r)), (r = _l(r, n));
          var h = r == null ? r : r[ii(Mr(n))];
          return h == null ? t : Vt(h, r, a);
        }
        function Fh(r) {
          return Tt(r) && or(r) == le;
        }
        function j0(r) {
          return Tt(r) && or(r) == Se;
        }
        function M0(r) {
          return Tt(r) && or(r) == $;
        }
        function us(r, n, a, h, m) {
          return r === n
            ? !0
            : r == null || n == null || (!Tt(r) && !Tt(n))
            ? r !== r && n !== n
            : q0(r, n, a, h, us, m);
        }
        function q0(r, n, a, h, m, O) {
          var N = Ne(r),
            U = Ne(n),
            B = N ? ve : er(r),
            Z = U ? ve : er(n);
          (B = B == le ? Le : B), (Z = Z == le ? Le : Z);
          var ee = B == Le,
            ne = Z == Le,
            he = B == Z;
          if (he && Li(r)) {
            if (!Li(n)) return !1;
            (N = !0), (ee = !1);
          }
          if (he && !ee)
            return (
              O || (O = new Vr()),
              N || Fn(r) ? dl(r, n, a, h, m, O) : dy(r, n, B, a, h, m, O)
            );
          if (!(a & A)) {
            var ye = ee && nt.call(r, "__wrapped__"),
              Ee = ne && nt.call(n, "__wrapped__");
            if (ye || Ee) {
              var Be = ye ? r.value() : r,
                De = Ee ? n.value() : n;
              return O || (O = new Vr()), m(Be, De, a, h, O);
            }
          }
          return he ? (O || (O = new Vr()), py(r, n, a, h, m, O)) : !1;
        }
        function B0(r) {
          return Tt(r) && er(r) == Ie;
        }
        function tc(r, n, a, h) {
          var m = a.length,
            O = m,
            N = !h;
          if (r == null) return !O;
          for (r = ut(r); m--; ) {
            var U = a[m];
            if (N && U[2] ? U[1] !== r[U[0]] : !(U[0] in r)) return !1;
          }
          for (; ++m < O; ) {
            U = a[m];
            var B = U[0],
              Z = r[B],
              ee = U[1];
            if (N && U[2]) {
              if (Z === t && !(B in r)) return !1;
            } else {
              var ne = new Vr();
              if (h) var he = h(Z, ee, B, r, n, ne);
              if (!(he === t ? us(ee, Z, A | q, h, ne) : he)) return !1;
            }
          }
          return !0;
        }
        function Uh(r) {
          if (!Dt(r) || Dy(r)) return !1;
          var n = yi(r) ? Bg : _a;
          return n.test(tn(r));
        }
        function H0(r) {
          return Tt(r) && or(r) == Me;
        }
        function z0(r) {
          return Tt(r) && er(r) == Oe;
        }
        function K0(r) {
          return Tt(r) && jo(r.length) && !!ot[or(r)];
        }
        function $h(r) {
          return typeof r == "function"
            ? r
            : r == null
            ? wr
            : typeof r == "object"
            ? Ne(r)
              ? Mh(r[0], r[1])
              : jh(r)
            : sf(r);
        }
        function rc(r) {
          if (!fs(r)) return Wg(r);
          var n = [];
          for (var a in ut(r)) nt.call(r, a) && a != "constructor" && n.push(a);
          return n;
        }
        function k0(r) {
          if (!Dt(r)) return xy(r);
          var n = fs(r),
            a = [];
          for (var h in r)
            (h == "constructor" && (n || !nt.call(r, h))) || a.push(h);
          return a;
        }
        function ic(r, n) {
          return r < n;
        }
        function Lh(r, n) {
          var a = -1,
            h = mr(r) ? k(r.length) : [];
          return (
            Ri(r, function (m, O, N) {
              h[++a] = n(m, O, N);
            }),
            h
          );
        }
        function jh(r) {
          var n = vc(r);
          return n.length == 1 && n[0][2]
            ? vl(n[0][0], n[0][1])
            : function (a) {
                return a === r || tc(a, r, n);
              };
        }
        function Mh(r, n) {
          return _c(r) && ml(n)
            ? vl(ii(r), n)
            : function (a) {
                var h = Tc(a, r);
                return h === t && h === n ? Ac(a, r) : us(n, h, A | q);
              };
        }
        function Eo(r, n, a, h, m) {
          r !== n &&
            Qa(
              n,
              function (O, N) {
                if ((m || (m = new Vr()), Dt(O))) V0(r, n, N, a, Eo, h, m);
                else {
                  var U = h ? h(Ec(r, N), O, N + "", r, n, m) : t;
                  U === t && (U = O), Ja(r, N, U);
                }
              },
              vr
            );
        }
        function V0(r, n, a, h, m, O, N) {
          var U = Ec(r, a),
            B = Ec(n, a),
            Z = N.get(B);
          if (Z) {
            Ja(r, a, Z);
            return;
          }
          var ee = O ? O(U, B, a + "", r, n, N) : t,
            ne = ee === t;
          if (ne) {
            var he = Ne(B),
              ye = !he && Li(B),
              Ee = !he && !ye && Fn(B);
            (ee = B),
              he || ye || Ee
                ? Ne(U)
                  ? (ee = U)
                  : Rt(U)
                  ? (ee = yr(U))
                  : ye
                  ? ((ne = !1), (ee = Qh(B, !0)))
                  : Ee
                  ? ((ne = !1), (ee = Xh(B, !0)))
                  : (ee = [])
                : ps(B) || rn(B)
                ? ((ee = U),
                  rn(U) ? (ee = Gl(U)) : (!Dt(U) || yi(U)) && (ee = yl(B)))
                : (ne = !1);
          }
          ne && (N.set(B, ee), m(ee, B, h, O, N), N.delete(B)), Ja(r, a, ee);
        }
        function qh(r, n) {
          var a = r.length;
          if (a) return (n += n < 0 ? a : 0), gi(n, a) ? r[n] : t;
        }
        function Bh(r, n, a) {
          n.length
            ? (n = _t(n, function (O) {
                return Ne(O)
                  ? function (N) {
                      return Zi(N, O.length === 1 ? O[0] : O);
                    }
                  : O;
              }))
            : (n = [wr]);
          var h = -1;
          n = _t(n, Sr(we()));
          var m = Lh(r, function (O, N, U) {
            var B = _t(n, function (Z) {
              return Z(O);
            });
            return { criteria: B, index: ++h, value: O };
          });
          return wg(m, function (O, N) {
            return sy(O, N, a);
          });
        }
        function W0(r, n) {
          return Hh(r, n, function (a, h) {
            return Ac(r, h);
          });
        }
        function Hh(r, n, a) {
          for (var h = -1, m = n.length, O = {}; ++h < m; ) {
            var N = n[h],
              U = Zi(r, N);
            a(U, N) && hs(O, Ui(N, r), U);
          }
          return O;
        }
        function G0(r) {
          return function (n) {
            return Zi(n, r);
          };
        }
        function nc(r, n, a, h) {
          var m = h ? vg : Dn,
            O = -1,
            N = n.length,
            U = r;
          for (r === n && (n = yr(n)), a && (U = _t(r, Sr(a))); ++O < N; )
            for (
              var B = 0, Z = n[O], ee = a ? a(Z) : Z;
              (B = m(U, ee, B, h)) > -1;

            )
              U !== r && lo.call(U, B, 1), lo.call(r, B, 1);
          return r;
        }
        function zh(r, n) {
          for (var a = r ? n.length : 0, h = a - 1; a--; ) {
            var m = n[a];
            if (a == h || m !== O) {
              var O = m;
              gi(m) ? lo.call(r, m, 1) : cc(r, m);
            }
          }
          return r;
        }
        function sc(r, n) {
          return r + go(Dh() * (n - r + 1));
        }
        function J0(r, n, a, h) {
          for (var m = -1, O = kt(po((n - r) / (a || 1)), 0), N = k(O); O--; )
            (N[h ? O : ++m] = r), (r += a);
          return N;
        }
        function oc(r, n) {
          var a = "";
          if (!r || n < 1 || n > V) return a;
          do n % 2 && (a += r), (n = go(n / 2)), n && (r += r);
          while (n);
          return a;
        }
        function Ke(r, n) {
          return Dc(wl(r, n, wr), r + "");
        }
        function Y0(r) {
          return Oh(Un(r));
        }
        function Q0(r, n) {
          var a = Un(r);
          return No(a, Xi(n, 0, a.length));
        }
        function hs(r, n, a, h) {
          if (!Dt(r)) return r;
          n = Ui(n, r);
          for (
            var m = -1, O = n.length, N = O - 1, U = r;
            U != null && ++m < O;

          ) {
            var B = ii(n[m]),
              Z = a;
            if (B === "__proto__" || B === "constructor" || B === "prototype")
              return r;
            if (m != N) {
              var ee = U[B];
              (Z = h ? h(ee, B, U) : t),
                Z === t && (Z = Dt(ee) ? ee : gi(n[m + 1]) ? [] : {});
            }
            os(U, B, Z), (U = U[B]);
          }
          return r;
        }
        var Kh = yo
            ? function (r, n) {
                return yo.set(r, n), r;
              }
            : wr,
          X0 = fo
            ? function (r, n) {
                return fo(r, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: Rc(n),
                  writable: !0,
                });
              }
            : wr;
        function Z0(r) {
          return No(Un(r));
        }
        function jr(r, n, a) {
          var h = -1,
            m = r.length;
          n < 0 && (n = -n > m ? 0 : m + n),
            (a = a > m ? m : a),
            a < 0 && (a += m),
            (m = n > a ? 0 : (a - n) >>> 0),
            (n >>>= 0);
          for (var O = k(m); ++h < m; ) O[h] = r[h + n];
          return O;
        }
        function ey(r, n) {
          var a;
          return (
            Ri(r, function (h, m, O) {
              return (a = n(h, m, O)), !a;
            }),
            !!a
          );
        }
        function Do(r, n, a) {
          var h = 0,
            m = r == null ? h : r.length;
          if (typeof n == "number" && n === n && m <= oe) {
            for (; h < m; ) {
              var O = (h + m) >>> 1,
                N = r[O];
              N !== null && !Or(N) && (a ? N <= n : N < n)
                ? (h = O + 1)
                : (m = O);
            }
            return m;
          }
          return ac(r, n, wr, a);
        }
        function ac(r, n, a, h) {
          var m = 0,
            O = r == null ? 0 : r.length;
          if (O === 0) return 0;
          n = a(n);
          for (
            var N = n !== n, U = n === null, B = Or(n), Z = n === t;
            m < O;

          ) {
            var ee = go((m + O) / 2),
              ne = a(r[ee]),
              he = ne !== t,
              ye = ne === null,
              Ee = ne === ne,
              Be = Or(ne);
            if (N) var De = h || Ee;
            else
              Z
                ? (De = Ee && (h || he))
                : U
                ? (De = Ee && he && (h || !ye))
                : B
                ? (De = Ee && he && !ye && (h || !Be))
                : ye || Be
                ? (De = !1)
                : (De = h ? ne <= n : ne < n);
            De ? (m = ee + 1) : (O = ee);
          }
          return Zt(O, _e);
        }
        function kh(r, n) {
          for (var a = -1, h = r.length, m = 0, O = []; ++a < h; ) {
            var N = r[a],
              U = n ? n(N) : N;
            if (!a || !Wr(U, B)) {
              var B = U;
              O[m++] = N === 0 ? 0 : N;
            }
          }
          return O;
        }
        function Vh(r) {
          return typeof r == "number" ? r : Or(r) ? Q : +r;
        }
        function Ir(r) {
          if (typeof r == "string") return r;
          if (Ne(r)) return _t(r, Ir) + "";
          if (Or(r)) return Sh ? Sh.call(r) : "";
          var n = r + "";
          return n == "0" && 1 / r == -X ? "-0" : n;
        }
        function Fi(r, n, a) {
          var h = -1,
            m = to,
            O = r.length,
            N = !0,
            U = [],
            B = U;
          if (a) (N = !1), (m = $a);
          else if (O >= o) {
            var Z = n ? null : ly(r);
            if (Z) return io(Z);
            (N = !1), (m = es), (B = new Qi());
          } else B = n ? [] : U;
          e: for (; ++h < O; ) {
            var ee = r[h],
              ne = n ? n(ee) : ee;
            if (((ee = a || ee !== 0 ? ee : 0), N && ne === ne)) {
              for (var he = B.length; he--; ) if (B[he] === ne) continue e;
              n && B.push(ne), U.push(ee);
            } else m(B, ne, a) || (B !== U && B.push(ne), U.push(ee));
          }
          return U;
        }
        function cc(r, n) {
          return (
            (n = Ui(n, r)), (r = _l(r, n)), r == null || delete r[ii(Mr(n))]
          );
        }
        function Wh(r, n, a, h) {
          return hs(r, n, a(Zi(r, n)), h);
        }
        function So(r, n, a, h) {
          for (
            var m = r.length, O = h ? m : -1;
            (h ? O-- : ++O < m) && n(r[O], O, r);

          );
          return a
            ? jr(r, h ? 0 : O, h ? O + 1 : m)
            : jr(r, h ? O + 1 : 0, h ? m : O);
        }
        function Gh(r, n) {
          var a = r;
          return (
            a instanceof Je && (a = a.value()),
            La(
              n,
              function (h, m) {
                return m.func.apply(m.thisArg, Ti([h], m.args));
              },
              a
            )
          );
        }
        function uc(r, n, a) {
          var h = r.length;
          if (h < 2) return h ? Fi(r[0]) : [];
          for (var m = -1, O = k(h); ++m < h; )
            for (var N = r[m], U = -1; ++U < h; )
              U != m && (O[m] = as(O[m] || N, r[U], n, a));
          return Fi(Yt(O, 1), n, a);
        }
        function Jh(r, n, a) {
          for (var h = -1, m = r.length, O = n.length, N = {}; ++h < m; ) {
            var U = h < O ? n[h] : t;
            a(N, r[h], U);
          }
          return N;
        }
        function hc(r) {
          return Rt(r) ? r : [];
        }
        function lc(r) {
          return typeof r == "function" ? r : wr;
        }
        function Ui(r, n) {
          return Ne(r) ? r : _c(r, n) ? [r] : Sl(it(r));
        }
        var ty = Ke;
        function $i(r, n, a) {
          var h = r.length;
          return (a = a === t ? h : a), !n && a >= h ? r : jr(r, n, a);
        }
        var Yh =
          Hg ||
          function (r) {
            return Xe.clearTimeout(r);
          };
        function Qh(r, n) {
          if (n) return r.slice();
          var a = r.length,
            h = vh ? vh(a) : new r.constructor(a);
          return r.copy(h), h;
        }
        function fc(r) {
          var n = new r.constructor(r.byteLength);
          return new uo(n).set(new uo(r)), n;
        }
        function ry(r, n) {
          var a = n ? fc(r.buffer) : r.buffer;
          return new r.constructor(a, r.byteOffset, r.byteLength);
        }
        function iy(r) {
          var n = new r.constructor(r.source, Nr.exec(r));
          return (n.lastIndex = r.lastIndex), n;
        }
        function ny(r) {
          return ss ? ut(ss.call(r)) : {};
        }
        function Xh(r, n) {
          var a = n ? fc(r.buffer) : r.buffer;
          return new r.constructor(a, r.byteOffset, r.length);
        }
        function Zh(r, n) {
          if (r !== n) {
            var a = r !== t,
              h = r === null,
              m = r === r,
              O = Or(r),
              N = n !== t,
              U = n === null,
              B = n === n,
              Z = Or(n);
            if (
              (!U && !Z && !O && r > n) ||
              (O && N && B && !U && !Z) ||
              (h && N && B) ||
              (!a && B) ||
              !m
            )
              return 1;
            if (
              (!h && !O && !Z && r < n) ||
              (Z && a && m && !h && !O) ||
              (U && a && m) ||
              (!N && m) ||
              !B
            )
              return -1;
          }
          return 0;
        }
        function sy(r, n, a) {
          for (
            var h = -1,
              m = r.criteria,
              O = n.criteria,
              N = m.length,
              U = a.length;
            ++h < N;

          ) {
            var B = Zh(m[h], O[h]);
            if (B) {
              if (h >= U) return B;
              var Z = a[h];
              return B * (Z == "desc" ? -1 : 1);
            }
          }
          return r.index - n.index;
        }
        function el(r, n, a, h) {
          for (
            var m = -1,
              O = r.length,
              N = a.length,
              U = -1,
              B = n.length,
              Z = kt(O - N, 0),
              ee = k(B + Z),
              ne = !h;
            ++U < B;

          )
            ee[U] = n[U];
          for (; ++m < N; ) (ne || m < O) && (ee[a[m]] = r[m]);
          for (; Z--; ) ee[U++] = r[m++];
          return ee;
        }
        function tl(r, n, a, h) {
          for (
            var m = -1,
              O = r.length,
              N = -1,
              U = a.length,
              B = -1,
              Z = n.length,
              ee = kt(O - U, 0),
              ne = k(ee + Z),
              he = !h;
            ++m < ee;

          )
            ne[m] = r[m];
          for (var ye = m; ++B < Z; ) ne[ye + B] = n[B];
          for (; ++N < U; ) (he || m < O) && (ne[ye + a[N]] = r[m++]);
          return ne;
        }
        function yr(r, n) {
          var a = -1,
            h = r.length;
          for (n || (n = k(h)); ++a < h; ) n[a] = r[a];
          return n;
        }
        function ri(r, n, a, h) {
          var m = !a;
          a || (a = {});
          for (var O = -1, N = n.length; ++O < N; ) {
            var U = n[O],
              B = h ? h(a[U], r[U], U, a, r) : t;
            B === t && (B = r[U]), m ? fi(a, U, B) : os(a, U, B);
          }
          return a;
        }
        function oy(r, n) {
          return ri(r, wc(r), n);
        }
        function ay(r, n) {
          return ri(r, pl(r), n);
        }
        function Io(r, n) {
          return function (a, h) {
            var m = Ne(a) ? fg : C0,
              O = n ? n() : {};
            return m(a, r, we(h, 2), O);
          };
        }
        function An(r) {
          return Ke(function (n, a) {
            var h = -1,
              m = a.length,
              O = m > 1 ? a[m - 1] : t,
              N = m > 2 ? a[2] : t;
            for (
              O = r.length > 3 && typeof O == "function" ? (m--, O) : t,
                N && ar(a[0], a[1], N) && ((O = m < 3 ? t : O), (m = 1)),
                n = ut(n);
              ++h < m;

            ) {
              var U = a[h];
              U && r(n, U, h, O);
            }
            return n;
          });
        }
        function rl(r, n) {
          return function (a, h) {
            if (a == null) return a;
            if (!mr(a)) return r(a, h);
            for (
              var m = a.length, O = n ? m : -1, N = ut(a);
              (n ? O-- : ++O < m) && h(N[O], O, N) !== !1;

            );
            return a;
          };
        }
        function il(r) {
          return function (n, a, h) {
            for (var m = -1, O = ut(n), N = h(n), U = N.length; U--; ) {
              var B = N[r ? U : ++m];
              if (a(O[B], B, O) === !1) break;
            }
            return n;
          };
        }
        function cy(r, n, a) {
          var h = n & L,
            m = ls(r);
          function O() {
            var N = this && this !== Xe && this instanceof O ? m : r;
            return N.apply(h ? a : this, arguments);
          }
          return O;
        }
        function nl(r) {
          return function (n) {
            n = it(n);
            var a = Sn(n) ? kr(n) : t,
              h = a ? a[0] : n.charAt(0),
              m = a ? $i(a, 1).join("") : n.slice(1);
            return h[r]() + m;
          };
        }
        function Nn(r) {
          return function (n) {
            return La(rf(tf(n).replace(Xn, "")), r, "");
          };
        }
        function ls(r) {
          return function () {
            var n = arguments;
            switch (n.length) {
              case 0:
                return new r();
              case 1:
                return new r(n[0]);
              case 2:
                return new r(n[0], n[1]);
              case 3:
                return new r(n[0], n[1], n[2]);
              case 4:
                return new r(n[0], n[1], n[2], n[3]);
              case 5:
                return new r(n[0], n[1], n[2], n[3], n[4]);
              case 6:
                return new r(n[0], n[1], n[2], n[3], n[4], n[5]);
              case 7:
                return new r(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
            }
            var a = Tn(r.prototype),
              h = r.apply(a, n);
            return Dt(h) ? h : a;
          };
        }
        function uy(r, n, a) {
          var h = ls(r);
          function m() {
            for (var O = arguments.length, N = k(O), U = O, B = Rn(m); U--; )
              N[U] = arguments[U];
            var Z = O < 3 && N[0] !== B && N[O - 1] !== B ? [] : Ai(N, B);
            if (((O -= Z.length), O < a))
              return ul(r, n, Oo, m.placeholder, t, N, Z, t, t, a - O);
            var ee = this && this !== Xe && this instanceof m ? h : r;
            return Vt(ee, this, N);
          }
          return m;
        }
        function sl(r) {
          return function (n, a, h) {
            var m = ut(n);
            if (!mr(n)) {
              var O = we(a, 3);
              (n = Wt(n)),
                (a = function (U) {
                  return O(m[U], U, m);
                });
            }
            var N = r(n, a, h);
            return N > -1 ? m[O ? n[N] : N] : t;
          };
        }
        function ol(r) {
          return pi(function (n) {
            var a = n.length,
              h = a,
              m = $r.prototype.thru;
            for (r && n.reverse(); h--; ) {
              var O = n[h];
              if (typeof O != "function") throw new Ur(d);
              if (m && !N && To(O) == "wrapper") var N = new $r([], !0);
            }
            for (h = N ? h : a; ++h < a; ) {
              O = n[h];
              var U = To(O),
                B = U == "wrapper" ? mc(O) : t;
              B &&
              bc(B[0]) &&
              B[1] == (c | D | b | w) &&
              !B[4].length &&
              B[9] == 1
                ? (N = N[To(B[0])].apply(N, B[3]))
                : (N = O.length == 1 && bc(O) ? N[U]() : N.thru(O));
            }
            return function () {
              var Z = arguments,
                ee = Z[0];
              if (N && Z.length == 1 && Ne(ee)) return N.plant(ee).value();
              for (var ne = 0, he = a ? n[ne].apply(this, Z) : ee; ++ne < a; )
                he = n[ne].call(this, he);
              return he;
            };
          });
        }
        function Oo(r, n, a, h, m, O, N, U, B, Z) {
          var ee = n & c,
            ne = n & L,
            he = n & Y,
            ye = n & (D | v),
            Ee = n & K,
            Be = he ? t : ls(r);
          function De() {
            for (var We = arguments.length, Ze = k(We), xr = We; xr--; )
              Ze[xr] = arguments[xr];
            if (ye)
              var cr = Rn(De),
                Pr = bg(Ze, cr);
            if (
              (h && (Ze = el(Ze, h, m, ye)),
              O && (Ze = tl(Ze, O, N, ye)),
              (We -= Pr),
              ye && We < Z)
            ) {
              var Ft = Ai(Ze, cr);
              return ul(r, n, Oo, De.placeholder, a, Ze, Ft, U, B, Z - We);
            }
            var Gr = ne ? a : this,
              vi = he ? Gr[r] : r;
            return (
              (We = Ze.length),
              U ? (Ze = Cy(Ze, U)) : Ee && We > 1 && Ze.reverse(),
              ee && B < We && (Ze.length = B),
              this && this !== Xe && this instanceof De && (vi = Be || ls(vi)),
              vi.apply(Gr, Ze)
            );
          }
          return De;
        }
        function al(r, n) {
          return function (a, h) {
            return L0(a, r, n(h), {});
          };
        }
        function xo(r, n) {
          return function (a, h) {
            var m;
            if (a === t && h === t) return n;
            if ((a !== t && (m = a), h !== t)) {
              if (m === t) return h;
              typeof a == "string" || typeof h == "string"
                ? ((a = Ir(a)), (h = Ir(h)))
                : ((a = Vh(a)), (h = Vh(h))),
                (m = r(a, h));
            }
            return m;
          };
        }
        function dc(r) {
          return pi(function (n) {
            return (
              (n = _t(n, Sr(we()))),
              Ke(function (a) {
                var h = this;
                return r(n, function (m) {
                  return Vt(m, h, a);
                });
              })
            );
          });
        }
        function Po(r, n) {
          n = n === t ? " " : Ir(n);
          var a = n.length;
          if (a < 2) return a ? oc(n, r) : n;
          var h = oc(n, po(r / In(n)));
          return Sn(n) ? $i(kr(h), 0, r).join("") : h.slice(0, r);
        }
        function hy(r, n, a, h) {
          var m = n & L,
            O = ls(r);
          function N() {
            for (
              var U = -1,
                B = arguments.length,
                Z = -1,
                ee = h.length,
                ne = k(ee + B),
                he = this && this !== Xe && this instanceof N ? O : r;
              ++Z < ee;

            )
              ne[Z] = h[Z];
            for (; B--; ) ne[Z++] = arguments[++U];
            return Vt(he, m ? a : this, ne);
          }
          return N;
        }
        function cl(r) {
          return function (n, a, h) {
            return (
              h && typeof h != "number" && ar(n, a, h) && (a = h = t),
              (n = mi(n)),
              a === t ? ((a = n), (n = 0)) : (a = mi(a)),
              (h = h === t ? (n < a ? 1 : -1) : mi(h)),
              J0(n, a, h, r)
            );
          };
        }
        function Co(r) {
          return function (n, a) {
            return (
              (typeof n == "string" && typeof a == "string") ||
                ((n = qr(n)), (a = qr(a))),
              r(n, a)
            );
          };
        }
        function ul(r, n, a, h, m, O, N, U, B, Z) {
          var ee = n & D,
            ne = ee ? N : t,
            he = ee ? t : N,
            ye = ee ? O : t,
            Ee = ee ? t : O;
          (n |= ee ? b : g), (n &= ~(ee ? g : b)), n & p || (n &= ~(L | Y));
          var Be = [r, n, m, ye, ne, Ee, he, U, B, Z],
            De = a.apply(t, Be);
          return bc(r) && bl(De, Be), (De.placeholder = h), El(De, r, n);
        }
        function pc(r) {
          var n = Kt[r];
          return function (a, h) {
            if (
              ((a = qr(a)), (h = h == null ? 0 : Zt(je(h), 292)), h && Eh(a))
            ) {
              var m = (it(a) + "e").split("e"),
                O = n(m[0] + "e" + (+m[1] + h));
              return (
                (m = (it(O) + "e").split("e")), +(m[0] + "e" + (+m[1] - h))
              );
            }
            return n(a);
          };
        }
        var ly =
          Pn && 1 / io(new Pn([, -0]))[1] == X
            ? function (r) {
                return new Pn(r);
              }
            : $c;
        function hl(r) {
          return function (n) {
            var a = er(n);
            return a == Ie ? Ka(n) : a == Oe ? Pg(n) : _g(n, r(n));
          };
        }
        function di(r, n, a, h, m, O, N, U) {
          var B = n & Y;
          if (!B && typeof r != "function") throw new Ur(d);
          var Z = h ? h.length : 0;
          if (
            (Z || ((n &= ~(b | g)), (h = m = t)),
            (N = N === t ? N : kt(je(N), 0)),
            (U = U === t ? U : je(U)),
            (Z -= m ? m.length : 0),
            n & g)
          ) {
            var ee = h,
              ne = m;
            h = m = t;
          }
          var he = B ? t : mc(r),
            ye = [r, n, a, h, m, ee, ne, O, N, U];
          if (
            (he && Oy(ye, he),
            (r = ye[0]),
            (n = ye[1]),
            (a = ye[2]),
            (h = ye[3]),
            (m = ye[4]),
            (U = ye[9] = ye[9] === t ? (B ? 0 : r.length) : kt(ye[9] - Z, 0)),
            !U && n & (D | v) && (n &= ~(D | v)),
            !n || n == L)
          )
            var Ee = cy(r, n, a);
          else
            n == D || n == v
              ? (Ee = uy(r, n, U))
              : (n == b || n == (L | b)) && !m.length
              ? (Ee = hy(r, n, a, h))
              : (Ee = Oo.apply(t, ye));
          var Be = he ? Kh : bl;
          return El(Be(Ee, ye), r, n);
        }
        function ll(r, n, a, h) {
          return r === t || (Wr(r, xn[a]) && !nt.call(h, a)) ? n : r;
        }
        function fl(r, n, a, h, m, O) {
          return (
            Dt(r) && Dt(n) && (O.set(n, r), Eo(r, n, t, fl, O), O.delete(n)), r
          );
        }
        function fy(r) {
          return ps(r) ? t : r;
        }
        function dl(r, n, a, h, m, O) {
          var N = a & A,
            U = r.length,
            B = n.length;
          if (U != B && !(N && B > U)) return !1;
          var Z = O.get(r),
            ee = O.get(n);
          if (Z && ee) return Z == n && ee == r;
          var ne = -1,
            he = !0,
            ye = a & q ? new Qi() : t;
          for (O.set(r, n), O.set(n, r); ++ne < U; ) {
            var Ee = r[ne],
              Be = n[ne];
            if (h) var De = N ? h(Be, Ee, ne, n, r, O) : h(Ee, Be, ne, r, n, O);
            if (De !== t) {
              if (De) continue;
              he = !1;
              break;
            }
            if (ye) {
              if (
                !ja(n, function (We, Ze) {
                  if (!es(ye, Ze) && (Ee === We || m(Ee, We, a, h, O)))
                    return ye.push(Ze);
                })
              ) {
                he = !1;
                break;
              }
            } else if (!(Ee === Be || m(Ee, Be, a, h, O))) {
              he = !1;
              break;
            }
          }
          return O.delete(r), O.delete(n), he;
        }
        function dy(r, n, a, h, m, O, N) {
          switch (a) {
            case Ce:
              if (r.byteLength != n.byteLength || r.byteOffset != n.byteOffset)
                return !1;
              (r = r.buffer), (n = n.buffer);
            case Se:
              return !(
                r.byteLength != n.byteLength || !O(new uo(r), new uo(n))
              );
            case H:
            case $:
            case He:
              return Wr(+r, +n);
            case F:
              return r.name == n.name && r.message == n.message;
            case Me:
            case Re:
              return r == n + "";
            case Ie:
              var U = Ka;
            case Oe:
              var B = h & A;
              if ((U || (U = io), r.size != n.size && !B)) return !1;
              var Z = N.get(r);
              if (Z) return Z == n;
              (h |= q), N.set(r, n);
              var ee = dl(U(r), U(n), h, m, O, N);
              return N.delete(r), ee;
            case Fe:
              if (ss) return ss.call(r) == ss.call(n);
          }
          return !1;
        }
        function py(r, n, a, h, m, O) {
          var N = a & A,
            U = gc(r),
            B = U.length,
            Z = gc(n),
            ee = Z.length;
          if (B != ee && !N) return !1;
          for (var ne = B; ne--; ) {
            var he = U[ne];
            if (!(N ? he in n : nt.call(n, he))) return !1;
          }
          var ye = O.get(r),
            Ee = O.get(n);
          if (ye && Ee) return ye == n && Ee == r;
          var Be = !0;
          O.set(r, n), O.set(n, r);
          for (var De = N; ++ne < B; ) {
            he = U[ne];
            var We = r[he],
              Ze = n[he];
            if (h) var xr = N ? h(Ze, We, he, n, r, O) : h(We, Ze, he, r, n, O);
            if (!(xr === t ? We === Ze || m(We, Ze, a, h, O) : xr)) {
              Be = !1;
              break;
            }
            De || (De = he == "constructor");
          }
          if (Be && !De) {
            var cr = r.constructor,
              Pr = n.constructor;
            cr != Pr &&
              "constructor" in r &&
              "constructor" in n &&
              !(
                typeof cr == "function" &&
                cr instanceof cr &&
                typeof Pr == "function" &&
                Pr instanceof Pr
              ) &&
              (Be = !1);
          }
          return O.delete(r), O.delete(n), Be;
        }
        function pi(r) {
          return Dc(wl(r, t, Pl), r + "");
        }
        function gc(r) {
          return Rh(r, Wt, wc);
        }
        function yc(r) {
          return Rh(r, vr, pl);
        }
        var mc = yo
          ? function (r) {
              return yo.get(r);
            }
          : $c;
        function To(r) {
          for (
            var n = r.name + "", a = Cn[n], h = nt.call(Cn, n) ? a.length : 0;
            h--;

          ) {
            var m = a[h],
              O = m.func;
            if (O == null || O == r) return m.name;
          }
          return n;
        }
        function Rn(r) {
          var n = nt.call(S, "placeholder") ? S : r;
          return n.placeholder;
        }
        function we() {
          var r = S.iteratee || Fc;
          return (
            (r = r === Fc ? $h : r),
            arguments.length ? r(arguments[0], arguments[1]) : r
          );
        }
        function Ao(r, n) {
          var a = r.__data__;
          return Ey(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
        }
        function vc(r) {
          for (var n = Wt(r), a = n.length; a--; ) {
            var h = n[a],
              m = r[h];
            n[a] = [h, m, ml(m)];
          }
          return n;
        }
        function en(r, n) {
          var a = Ig(r, n);
          return Uh(a) ? a : t;
        }
        function gy(r) {
          var n = nt.call(r, Ji),
            a = r[Ji];
          try {
            r[Ji] = t;
            var h = !0;
          } catch {}
          var m = ao.call(r);
          return h && (n ? (r[Ji] = a) : delete r[Ji]), m;
        }
        var wc = Va
            ? function (r) {
                return r == null
                  ? []
                  : ((r = ut(r)),
                    Ci(Va(r), function (n) {
                      return _h.call(r, n);
                    }));
              }
            : Lc,
          pl = Va
            ? function (r) {
                for (var n = []; r; ) Ti(n, wc(r)), (r = ho(r));
                return n;
              }
            : Lc,
          er = or;
        ((Wa && er(new Wa(new ArrayBuffer(1))) != Ce) ||
          (rs && er(new rs()) != Ie) ||
          (Ga && er(Ga.resolve()) != yt) ||
          (Pn && er(new Pn()) != Oe) ||
          (is && er(new is()) != Pe)) &&
          (er = function (r) {
            var n = or(r),
              a = n == Le ? r.constructor : t,
              h = a ? tn(a) : "";
            if (h)
              switch (h) {
                case Qg:
                  return Ce;
                case Xg:
                  return Ie;
                case Zg:
                  return yt;
                case e0:
                  return Oe;
                case t0:
                  return Pe;
              }
            return n;
          });
        function yy(r, n, a) {
          for (var h = -1, m = a.length; ++h < m; ) {
            var O = a[h],
              N = O.size;
            switch (O.type) {
              case "drop":
                r += N;
                break;
              case "dropRight":
                n -= N;
                break;
              case "take":
                n = Zt(n, r + N);
                break;
              case "takeRight":
                r = kt(r, n - N);
                break;
            }
          }
          return { start: r, end: n };
        }
        function my(r) {
          var n = r.match(ht);
          return n ? n[1].split(qt) : [];
        }
        function gl(r, n, a) {
          n = Ui(n, r);
          for (var h = -1, m = n.length, O = !1; ++h < m; ) {
            var N = ii(n[h]);
            if (!(O = r != null && a(r, N))) break;
            r = r[N];
          }
          return O || ++h != m
            ? O
            : ((m = r == null ? 0 : r.length),
              !!m && jo(m) && gi(N, m) && (Ne(r) || rn(r)));
        }
        function vy(r) {
          var n = r.length,
            a = new r.constructor(n);
          return (
            n &&
              typeof r[0] == "string" &&
              nt.call(r, "index") &&
              ((a.index = r.index), (a.input = r.input)),
            a
          );
        }
        function yl(r) {
          return typeof r.constructor == "function" && !fs(r) ? Tn(ho(r)) : {};
        }
        function wy(r, n, a) {
          var h = r.constructor;
          switch (n) {
            case Se:
              return fc(r);
            case H:
            case $:
              return new h(+r);
            case Ce:
              return ry(r, a);
            case ze:
            case xe:
            case Ve:
            case Ge:
            case et:
            case tt:
            case Qe:
            case ir:
            case pr:
              return Xh(r, a);
            case Ie:
              return new h();
            case He:
            case Re:
              return new h(r);
            case Me:
              return iy(r);
            case Oe:
              return new h();
            case Fe:
              return ny(r);
          }
        }
        function _y(r, n) {
          var a = n.length;
          if (!a) return r;
          var h = a - 1;
          return (
            (n[h] = (a > 1 ? "& " : "") + n[h]),
            (n = n.join(a > 2 ? ", " : " ")),
            r.replace(
              Ct,
              `{
/* [wrapped with ` +
                n +
                `] */
`
            )
          );
        }
        function by(r) {
          return Ne(r) || rn(r) || !!(bh && r && r[bh]);
        }
        function gi(r, n) {
          var a = typeof r;
          return (
            (n = n ?? V),
            !!n &&
              (a == "number" || (a != "symbol" && Ea.test(r))) &&
              r > -1 &&
              r % 1 == 0 &&
              r < n
          );
        }
        function ar(r, n, a) {
          if (!Dt(a)) return !1;
          var h = typeof n;
          return (
            h == "number" ? mr(a) && gi(n, a.length) : h == "string" && n in a
          )
            ? Wr(a[n], r)
            : !1;
        }
        function _c(r, n) {
          if (Ne(r)) return !1;
          var a = typeof r;
          return a == "number" ||
            a == "symbol" ||
            a == "boolean" ||
            r == null ||
            Or(r)
            ? !0
            : Lt.test(r) || !wt.test(r) || (n != null && r in ut(n));
        }
        function Ey(r) {
          var n = typeof r;
          return n == "string" ||
            n == "number" ||
            n == "symbol" ||
            n == "boolean"
            ? r !== "__proto__"
            : r === null;
        }
        function bc(r) {
          var n = To(r),
            a = S[n];
          if (typeof a != "function" || !(n in Je.prototype)) return !1;
          if (r === a) return !0;
          var h = mc(a);
          return !!h && r === h[0];
        }
        function Dy(r) {
          return !!mh && mh in r;
        }
        var Sy = so ? yi : jc;
        function fs(r) {
          var n = r && r.constructor,
            a = (typeof n == "function" && n.prototype) || xn;
          return r === a;
        }
        function ml(r) {
          return r === r && !Dt(r);
        }
        function vl(r, n) {
          return function (a) {
            return a == null ? !1 : a[r] === n && (n !== t || r in ut(a));
          };
        }
        function Iy(r) {
          var n = $o(r, function (h) {
              return a.size === y && a.clear(), h;
            }),
            a = n.cache;
          return n;
        }
        function Oy(r, n) {
          var a = r[1],
            h = n[1],
            m = a | h,
            O = m < (L | Y | c),
            N =
              (h == c && a == D) ||
              (h == c && a == w && r[7].length <= n[8]) ||
              (h == (c | w) && n[7].length <= n[8] && a == D);
          if (!(O || N)) return r;
          h & L && ((r[2] = n[2]), (m |= a & L ? 0 : p));
          var U = n[3];
          if (U) {
            var B = r[3];
            (r[3] = B ? el(B, U, n[4]) : U), (r[4] = B ? Ai(r[3], E) : n[4]);
          }
          return (
            (U = n[5]),
            U &&
              ((B = r[5]),
              (r[5] = B ? tl(B, U, n[6]) : U),
              (r[6] = B ? Ai(r[5], E) : n[6])),
            (U = n[7]),
            U && (r[7] = U),
            h & c && (r[8] = r[8] == null ? n[8] : Zt(r[8], n[8])),
            r[9] == null && (r[9] = n[9]),
            (r[0] = n[0]),
            (r[1] = m),
            r
          );
        }
        function xy(r) {
          var n = [];
          if (r != null) for (var a in ut(r)) n.push(a);
          return n;
        }
        function Py(r) {
          return ao.call(r);
        }
        function wl(r, n, a) {
          return (
            (n = kt(n === t ? r.length - 1 : n, 0)),
            function () {
              for (
                var h = arguments, m = -1, O = kt(h.length - n, 0), N = k(O);
                ++m < O;

              )
                N[m] = h[n + m];
              m = -1;
              for (var U = k(n + 1); ++m < n; ) U[m] = h[m];
              return (U[n] = a(N)), Vt(r, this, U);
            }
          );
        }
        function _l(r, n) {
          return n.length < 2 ? r : Zi(r, jr(n, 0, -1));
        }
        function Cy(r, n) {
          for (var a = r.length, h = Zt(n.length, a), m = yr(r); h--; ) {
            var O = n[h];
            r[h] = gi(O, a) ? m[O] : t;
          }
          return r;
        }
        function Ec(r, n) {
          if (
            !(n === "constructor" && typeof r[n] == "function") &&
            n != "__proto__"
          )
            return r[n];
        }
        var bl = Dl(Kh),
          ds =
            Kg ||
            function (r, n) {
              return Xe.setTimeout(r, n);
            },
          Dc = Dl(X0);
        function El(r, n, a) {
          var h = n + "";
          return Dc(r, _y(h, Ty(my(h), a)));
        }
        function Dl(r) {
          var n = 0,
            a = 0;
          return function () {
            var h = Gg(),
              m = de - (h - a);
            if (((a = h), m > 0)) {
              if (++n >= ue) return arguments[0];
            } else n = 0;
            return r.apply(t, arguments);
          };
        }
        function No(r, n) {
          var a = -1,
            h = r.length,
            m = h - 1;
          for (n = n === t ? h : n; ++a < n; ) {
            var O = sc(a, m),
              N = r[O];
            (r[O] = r[a]), (r[a] = N);
          }
          return (r.length = n), r;
        }
        var Sl = Iy(function (r) {
          var n = [];
          return (
            r.charCodeAt(0) === 46 && n.push(""),
            r.replace(jt, function (a, h, m, O) {
              n.push(m ? O.replace(ya, "$1") : h || a);
            }),
            n
          );
        });
        function ii(r) {
          if (typeof r == "string" || Or(r)) return r;
          var n = r + "";
          return n == "0" && 1 / r == -X ? "-0" : n;
        }
        function tn(r) {
          if (r != null) {
            try {
              return oo.call(r);
            } catch {}
            try {
              return r + "";
            } catch {}
          }
          return "";
        }
        function Ty(r, n) {
          return (
            Fr(be, function (a) {
              var h = "_." + a[0];
              n & a[1] && !to(r, h) && r.push(h);
            }),
            r.sort()
          );
        }
        function Il(r) {
          if (r instanceof Je) return r.clone();
          var n = new $r(r.__wrapped__, r.__chain__);
          return (
            (n.__actions__ = yr(r.__actions__)),
            (n.__index__ = r.__index__),
            (n.__values__ = r.__values__),
            n
          );
        }
        function Ay(r, n, a) {
          (a ? ar(r, n, a) : n === t) ? (n = 1) : (n = kt(je(n), 0));
          var h = r == null ? 0 : r.length;
          if (!h || n < 1) return [];
          for (var m = 0, O = 0, N = k(po(h / n)); m < h; )
            N[O++] = jr(r, m, (m += n));
          return N;
        }
        function Ny(r) {
          for (
            var n = -1, a = r == null ? 0 : r.length, h = 0, m = [];
            ++n < a;

          ) {
            var O = r[n];
            O && (m[h++] = O);
          }
          return m;
        }
        function Ry() {
          var r = arguments.length;
          if (!r) return [];
          for (var n = k(r - 1), a = arguments[0], h = r; h--; )
            n[h - 1] = arguments[h];
          return Ti(Ne(a) ? yr(a) : [a], Yt(n, 1));
        }
        var Fy = Ke(function (r, n) {
            return Rt(r) ? as(r, Yt(n, 1, Rt, !0)) : [];
          }),
          Uy = Ke(function (r, n) {
            var a = Mr(n);
            return (
              Rt(a) && (a = t), Rt(r) ? as(r, Yt(n, 1, Rt, !0), we(a, 2)) : []
            );
          }),
          $y = Ke(function (r, n) {
            var a = Mr(n);
            return Rt(a) && (a = t), Rt(r) ? as(r, Yt(n, 1, Rt, !0), t, a) : [];
          });
        function Ly(r, n, a) {
          var h = r == null ? 0 : r.length;
          return h
            ? ((n = a || n === t ? 1 : je(n)), jr(r, n < 0 ? 0 : n, h))
            : [];
        }
        function jy(r, n, a) {
          var h = r == null ? 0 : r.length;
          return h
            ? ((n = a || n === t ? 1 : je(n)),
              (n = h - n),
              jr(r, 0, n < 0 ? 0 : n))
            : [];
        }
        function My(r, n) {
          return r && r.length ? So(r, we(n, 3), !0, !0) : [];
        }
        function qy(r, n) {
          return r && r.length ? So(r, we(n, 3), !0) : [];
        }
        function By(r, n, a, h) {
          var m = r == null ? 0 : r.length;
          return m
            ? (a && typeof a != "number" && ar(r, n, a) && ((a = 0), (h = m)),
              R0(r, n, a, h))
            : [];
        }
        function Ol(r, n, a) {
          var h = r == null ? 0 : r.length;
          if (!h) return -1;
          var m = a == null ? 0 : je(a);
          return m < 0 && (m = kt(h + m, 0)), ro(r, we(n, 3), m);
        }
        function xl(r, n, a) {
          var h = r == null ? 0 : r.length;
          if (!h) return -1;
          var m = h - 1;
          return (
            a !== t && ((m = je(a)), (m = a < 0 ? kt(h + m, 0) : Zt(m, h - 1))),
            ro(r, we(n, 3), m, !0)
          );
        }
        function Pl(r) {
          var n = r == null ? 0 : r.length;
          return n ? Yt(r, 1) : [];
        }
        function Hy(r) {
          var n = r == null ? 0 : r.length;
          return n ? Yt(r, X) : [];
        }
        function zy(r, n) {
          var a = r == null ? 0 : r.length;
          return a ? ((n = n === t ? 1 : je(n)), Yt(r, n)) : [];
        }
        function Ky(r) {
          for (var n = -1, a = r == null ? 0 : r.length, h = {}; ++n < a; ) {
            var m = r[n];
            h[m[0]] = m[1];
          }
          return h;
        }
        function Cl(r) {
          return r && r.length ? r[0] : t;
        }
        function ky(r, n, a) {
          var h = r == null ? 0 : r.length;
          if (!h) return -1;
          var m = a == null ? 0 : je(a);
          return m < 0 && (m = kt(h + m, 0)), Dn(r, n, m);
        }
        function Vy(r) {
          var n = r == null ? 0 : r.length;
          return n ? jr(r, 0, -1) : [];
        }
        var Wy = Ke(function (r) {
            var n = _t(r, hc);
            return n.length && n[0] === r[0] ? ec(n) : [];
          }),
          Gy = Ke(function (r) {
            var n = Mr(r),
              a = _t(r, hc);
            return (
              n === Mr(a) ? (n = t) : a.pop(),
              a.length && a[0] === r[0] ? ec(a, we(n, 2)) : []
            );
          }),
          Jy = Ke(function (r) {
            var n = Mr(r),
              a = _t(r, hc);
            return (
              (n = typeof n == "function" ? n : t),
              n && a.pop(),
              a.length && a[0] === r[0] ? ec(a, t, n) : []
            );
          });
        function Yy(r, n) {
          return r == null ? "" : Vg.call(r, n);
        }
        function Mr(r) {
          var n = r == null ? 0 : r.length;
          return n ? r[n - 1] : t;
        }
        function Qy(r, n, a) {
          var h = r == null ? 0 : r.length;
          if (!h) return -1;
          var m = h;
          return (
            a !== t && ((m = je(a)), (m = m < 0 ? kt(h + m, 0) : Zt(m, h - 1))),
            n === n ? Tg(r, n, m) : ro(r, uh, m, !0)
          );
        }
        function Xy(r, n) {
          return r && r.length ? qh(r, je(n)) : t;
        }
        var Zy = Ke(Tl);
        function Tl(r, n) {
          return r && r.length && n && n.length ? nc(r, n) : r;
        }
        function e1(r, n, a) {
          return r && r.length && n && n.length ? nc(r, n, we(a, 2)) : r;
        }
        function t1(r, n, a) {
          return r && r.length && n && n.length ? nc(r, n, t, a) : r;
        }
        var r1 = pi(function (r, n) {
          var a = r == null ? 0 : r.length,
            h = Ya(r, n);
          return (
            zh(
              r,
              _t(n, function (m) {
                return gi(m, a) ? +m : m;
              }).sort(Zh)
            ),
            h
          );
        });
        function i1(r, n) {
          var a = [];
          if (!(r && r.length)) return a;
          var h = -1,
            m = [],
            O = r.length;
          for (n = we(n, 3); ++h < O; ) {
            var N = r[h];
            n(N, h, r) && (a.push(N), m.push(h));
          }
          return zh(r, m), a;
        }
        function Sc(r) {
          return r == null ? r : Yg.call(r);
        }
        function n1(r, n, a) {
          var h = r == null ? 0 : r.length;
          return h
            ? (a && typeof a != "number" && ar(r, n, a)
                ? ((n = 0), (a = h))
                : ((n = n == null ? 0 : je(n)), (a = a === t ? h : je(a))),
              jr(r, n, a))
            : [];
        }
        function s1(r, n) {
          return Do(r, n);
        }
        function o1(r, n, a) {
          return ac(r, n, we(a, 2));
        }
        function a1(r, n) {
          var a = r == null ? 0 : r.length;
          if (a) {
            var h = Do(r, n);
            if (h < a && Wr(r[h], n)) return h;
          }
          return -1;
        }
        function c1(r, n) {
          return Do(r, n, !0);
        }
        function u1(r, n, a) {
          return ac(r, n, we(a, 2), !0);
        }
        function h1(r, n) {
          var a = r == null ? 0 : r.length;
          if (a) {
            var h = Do(r, n, !0) - 1;
            if (Wr(r[h], n)) return h;
          }
          return -1;
        }
        function l1(r) {
          return r && r.length ? kh(r) : [];
        }
        function f1(r, n) {
          return r && r.length ? kh(r, we(n, 2)) : [];
        }
        function d1(r) {
          var n = r == null ? 0 : r.length;
          return n ? jr(r, 1, n) : [];
        }
        function p1(r, n, a) {
          return r && r.length
            ? ((n = a || n === t ? 1 : je(n)), jr(r, 0, n < 0 ? 0 : n))
            : [];
        }
        function g1(r, n, a) {
          var h = r == null ? 0 : r.length;
          return h
            ? ((n = a || n === t ? 1 : je(n)),
              (n = h - n),
              jr(r, n < 0 ? 0 : n, h))
            : [];
        }
        function y1(r, n) {
          return r && r.length ? So(r, we(n, 3), !1, !0) : [];
        }
        function m1(r, n) {
          return r && r.length ? So(r, we(n, 3)) : [];
        }
        var v1 = Ke(function (r) {
            return Fi(Yt(r, 1, Rt, !0));
          }),
          w1 = Ke(function (r) {
            var n = Mr(r);
            return Rt(n) && (n = t), Fi(Yt(r, 1, Rt, !0), we(n, 2));
          }),
          _1 = Ke(function (r) {
            var n = Mr(r);
            return (
              (n = typeof n == "function" ? n : t), Fi(Yt(r, 1, Rt, !0), t, n)
            );
          });
        function b1(r) {
          return r && r.length ? Fi(r) : [];
        }
        function E1(r, n) {
          return r && r.length ? Fi(r, we(n, 2)) : [];
        }
        function D1(r, n) {
          return (
            (n = typeof n == "function" ? n : t),
            r && r.length ? Fi(r, t, n) : []
          );
        }
        function Ic(r) {
          if (!(r && r.length)) return [];
          var n = 0;
          return (
            (r = Ci(r, function (a) {
              if (Rt(a)) return (n = kt(a.length, n)), !0;
            })),
            Ha(n, function (a) {
              return _t(r, Ma(a));
            })
          );
        }
        function Al(r, n) {
          if (!(r && r.length)) return [];
          var a = Ic(r);
          return n == null
            ? a
            : _t(a, function (h) {
                return Vt(n, t, h);
              });
        }
        var S1 = Ke(function (r, n) {
            return Rt(r) ? as(r, n) : [];
          }),
          I1 = Ke(function (r) {
            return uc(Ci(r, Rt));
          }),
          O1 = Ke(function (r) {
            var n = Mr(r);
            return Rt(n) && (n = t), uc(Ci(r, Rt), we(n, 2));
          }),
          x1 = Ke(function (r) {
            var n = Mr(r);
            return (n = typeof n == "function" ? n : t), uc(Ci(r, Rt), t, n);
          }),
          P1 = Ke(Ic);
        function C1(r, n) {
          return Jh(r || [], n || [], os);
        }
        function T1(r, n) {
          return Jh(r || [], n || [], hs);
        }
        var A1 = Ke(function (r) {
          var n = r.length,
            a = n > 1 ? r[n - 1] : t;
          return (a = typeof a == "function" ? (r.pop(), a) : t), Al(r, a);
        });
        function Nl(r) {
          var n = S(r);
          return (n.__chain__ = !0), n;
        }
        function N1(r, n) {
          return n(r), r;
        }
        function Ro(r, n) {
          return n(r);
        }
        var R1 = pi(function (r) {
          var n = r.length,
            a = n ? r[0] : 0,
            h = this.__wrapped__,
            m = function (O) {
              return Ya(O, r);
            };
          return n > 1 ||
            this.__actions__.length ||
            !(h instanceof Je) ||
            !gi(a)
            ? this.thru(m)
            : ((h = h.slice(a, +a + (n ? 1 : 0))),
              h.__actions__.push({ func: Ro, args: [m], thisArg: t }),
              new $r(h, this.__chain__).thru(function (O) {
                return n && !O.length && O.push(t), O;
              }));
        });
        function F1() {
          return Nl(this);
        }
        function U1() {
          return new $r(this.value(), this.__chain__);
        }
        function $1() {
          this.__values__ === t && (this.__values__ = Vl(this.value()));
          var r = this.__index__ >= this.__values__.length,
            n = r ? t : this.__values__[this.__index__++];
          return { done: r, value: n };
        }
        function L1() {
          return this;
        }
        function j1(r) {
          for (var n, a = this; a instanceof vo; ) {
            var h = Il(a);
            (h.__index__ = 0),
              (h.__values__ = t),
              n ? (m.__wrapped__ = h) : (n = h);
            var m = h;
            a = a.__wrapped__;
          }
          return (m.__wrapped__ = r), n;
        }
        function M1() {
          var r = this.__wrapped__;
          if (r instanceof Je) {
            var n = r;
            return (
              this.__actions__.length && (n = new Je(this)),
              (n = n.reverse()),
              n.__actions__.push({ func: Ro, args: [Sc], thisArg: t }),
              new $r(n, this.__chain__)
            );
          }
          return this.thru(Sc);
        }
        function q1() {
          return Gh(this.__wrapped__, this.__actions__);
        }
        var B1 = Io(function (r, n, a) {
          nt.call(r, a) ? ++r[a] : fi(r, a, 1);
        });
        function H1(r, n, a) {
          var h = Ne(r) ? ah : N0;
          return a && ar(r, n, a) && (n = t), h(r, we(n, 3));
        }
        function z1(r, n) {
          var a = Ne(r) ? Ci : Ah;
          return a(r, we(n, 3));
        }
        var K1 = sl(Ol),
          k1 = sl(xl);
        function V1(r, n) {
          return Yt(Fo(r, n), 1);
        }
        function W1(r, n) {
          return Yt(Fo(r, n), X);
        }
        function G1(r, n, a) {
          return (a = a === t ? 1 : je(a)), Yt(Fo(r, n), a);
        }
        function Rl(r, n) {
          var a = Ne(r) ? Fr : Ri;
          return a(r, we(n, 3));
        }
        function Fl(r, n) {
          var a = Ne(r) ? dg : Th;
          return a(r, we(n, 3));
        }
        var J1 = Io(function (r, n, a) {
          nt.call(r, a) ? r[a].push(n) : fi(r, a, [n]);
        });
        function Y1(r, n, a, h) {
          (r = mr(r) ? r : Un(r)), (a = a && !h ? je(a) : 0);
          var m = r.length;
          return (
            a < 0 && (a = kt(m + a, 0)),
            Mo(r) ? a <= m && r.indexOf(n, a) > -1 : !!m && Dn(r, n, a) > -1
          );
        }
        var Q1 = Ke(function (r, n, a) {
            var h = -1,
              m = typeof n == "function",
              O = mr(r) ? k(r.length) : [];
            return (
              Ri(r, function (N) {
                O[++h] = m ? Vt(n, N, a) : cs(N, n, a);
              }),
              O
            );
          }),
          X1 = Io(function (r, n, a) {
            fi(r, a, n);
          });
        function Fo(r, n) {
          var a = Ne(r) ? _t : Lh;
          return a(r, we(n, 3));
        }
        function Z1(r, n, a, h) {
          return r == null
            ? []
            : (Ne(n) || (n = n == null ? [] : [n]),
              (a = h ? t : a),
              Ne(a) || (a = a == null ? [] : [a]),
              Bh(r, n, a));
        }
        var em = Io(
          function (r, n, a) {
            r[a ? 0 : 1].push(n);
          },
          function () {
            return [[], []];
          }
        );
        function tm(r, n, a) {
          var h = Ne(r) ? La : lh,
            m = arguments.length < 3;
          return h(r, we(n, 4), a, m, Ri);
        }
        function rm(r, n, a) {
          var h = Ne(r) ? pg : lh,
            m = arguments.length < 3;
          return h(r, we(n, 4), a, m, Th);
        }
        function im(r, n) {
          var a = Ne(r) ? Ci : Ah;
          return a(r, Lo(we(n, 3)));
        }
        function nm(r) {
          var n = Ne(r) ? Oh : Y0;
          return n(r);
        }
        function sm(r, n, a) {
          (a ? ar(r, n, a) : n === t) ? (n = 1) : (n = je(n));
          var h = Ne(r) ? x0 : Q0;
          return h(r, n);
        }
        function om(r) {
          var n = Ne(r) ? P0 : Z0;
          return n(r);
        }
        function am(r) {
          if (r == null) return 0;
          if (mr(r)) return Mo(r) ? In(r) : r.length;
          var n = er(r);
          return n == Ie || n == Oe ? r.size : rc(r).length;
        }
        function cm(r, n, a) {
          var h = Ne(r) ? ja : ey;
          return a && ar(r, n, a) && (n = t), h(r, we(n, 3));
        }
        var um = Ke(function (r, n) {
            if (r == null) return [];
            var a = n.length;
            return (
              a > 1 && ar(r, n[0], n[1])
                ? (n = [])
                : a > 2 && ar(n[0], n[1], n[2]) && (n = [n[0]]),
              Bh(r, Yt(n, 1), [])
            );
          }),
          Uo =
            zg ||
            function () {
              return Xe.Date.now();
            };
        function hm(r, n) {
          if (typeof n != "function") throw new Ur(d);
          return (
            (r = je(r)),
            function () {
              if (--r < 1) return n.apply(this, arguments);
            }
          );
        }
        function Ul(r, n, a) {
          return (
            (n = a ? t : n),
            (n = r && n == null ? r.length : n),
            di(r, c, t, t, t, t, n)
          );
        }
        function $l(r, n) {
          var a;
          if (typeof n != "function") throw new Ur(d);
          return (
            (r = je(r)),
            function () {
              return (
                --r > 0 && (a = n.apply(this, arguments)), r <= 1 && (n = t), a
              );
            }
          );
        }
        var Oc = Ke(function (r, n, a) {
            var h = L;
            if (a.length) {
              var m = Ai(a, Rn(Oc));
              h |= b;
            }
            return di(r, h, n, a, m);
          }),
          Ll = Ke(function (r, n, a) {
            var h = L | Y;
            if (a.length) {
              var m = Ai(a, Rn(Ll));
              h |= b;
            }
            return di(n, h, r, a, m);
          });
        function jl(r, n, a) {
          n = a ? t : n;
          var h = di(r, D, t, t, t, t, t, n);
          return (h.placeholder = jl.placeholder), h;
        }
        function Ml(r, n, a) {
          n = a ? t : n;
          var h = di(r, v, t, t, t, t, t, n);
          return (h.placeholder = Ml.placeholder), h;
        }
        function ql(r, n, a) {
          var h,
            m,
            O,
            N,
            U,
            B,
            Z = 0,
            ee = !1,
            ne = !1,
            he = !0;
          if (typeof r != "function") throw new Ur(d);
          (n = qr(n) || 0),
            Dt(a) &&
              ((ee = !!a.leading),
              (ne = "maxWait" in a),
              (O = ne ? kt(qr(a.maxWait) || 0, n) : O),
              (he = "trailing" in a ? !!a.trailing : he));
          function ye(Ft) {
            var Gr = h,
              vi = m;
            return (h = m = t), (Z = Ft), (N = r.apply(vi, Gr)), N;
          }
          function Ee(Ft) {
            return (Z = Ft), (U = ds(We, n)), ee ? ye(Ft) : N;
          }
          function Be(Ft) {
            var Gr = Ft - B,
              vi = Ft - Z,
              of = n - Gr;
            return ne ? Zt(of, O - vi) : of;
          }
          function De(Ft) {
            var Gr = Ft - B,
              vi = Ft - Z;
            return B === t || Gr >= n || Gr < 0 || (ne && vi >= O);
          }
          function We() {
            var Ft = Uo();
            if (De(Ft)) return Ze(Ft);
            U = ds(We, Be(Ft));
          }
          function Ze(Ft) {
            return (U = t), he && h ? ye(Ft) : ((h = m = t), N);
          }
          function xr() {
            U !== t && Yh(U), (Z = 0), (h = B = m = U = t);
          }
          function cr() {
            return U === t ? N : Ze(Uo());
          }
          function Pr() {
            var Ft = Uo(),
              Gr = De(Ft);
            if (((h = arguments), (m = this), (B = Ft), Gr)) {
              if (U === t) return Ee(B);
              if (ne) return Yh(U), (U = ds(We, n)), ye(B);
            }
            return U === t && (U = ds(We, n)), N;
          }
          return (Pr.cancel = xr), (Pr.flush = cr), Pr;
        }
        var lm = Ke(function (r, n) {
            return Ch(r, 1, n);
          }),
          fm = Ke(function (r, n, a) {
            return Ch(r, qr(n) || 0, a);
          });
        function dm(r) {
          return di(r, K);
        }
        function $o(r, n) {
          if (typeof r != "function" || (n != null && typeof n != "function"))
            throw new Ur(d);
          var a = function () {
            var h = arguments,
              m = n ? n.apply(this, h) : h[0],
              O = a.cache;
            if (O.has(m)) return O.get(m);
            var N = r.apply(this, h);
            return (a.cache = O.set(m, N) || O), N;
          };
          return (a.cache = new ($o.Cache || li)()), a;
        }
        $o.Cache = li;
        function Lo(r) {
          if (typeof r != "function") throw new Ur(d);
          return function () {
            var n = arguments;
            switch (n.length) {
              case 0:
                return !r.call(this);
              case 1:
                return !r.call(this, n[0]);
              case 2:
                return !r.call(this, n[0], n[1]);
              case 3:
                return !r.call(this, n[0], n[1], n[2]);
            }
            return !r.apply(this, n);
          };
        }
        function pm(r) {
          return $l(2, r);
        }
        var gm = ty(function (r, n) {
            n =
              n.length == 1 && Ne(n[0])
                ? _t(n[0], Sr(we()))
                : _t(Yt(n, 1), Sr(we()));
            var a = n.length;
            return Ke(function (h) {
              for (var m = -1, O = Zt(h.length, a); ++m < O; )
                h[m] = n[m].call(this, h[m]);
              return Vt(r, this, h);
            });
          }),
          xc = Ke(function (r, n) {
            var a = Ai(n, Rn(xc));
            return di(r, b, t, n, a);
          }),
          Bl = Ke(function (r, n) {
            var a = Ai(n, Rn(Bl));
            return di(r, g, t, n, a);
          }),
          ym = pi(function (r, n) {
            return di(r, w, t, t, t, n);
          });
        function mm(r, n) {
          if (typeof r != "function") throw new Ur(d);
          return (n = n === t ? n : je(n)), Ke(r, n);
        }
        function vm(r, n) {
          if (typeof r != "function") throw new Ur(d);
          return (
            (n = n == null ? 0 : kt(je(n), 0)),
            Ke(function (a) {
              var h = a[n],
                m = $i(a, 0, n);
              return h && Ti(m, h), Vt(r, this, m);
            })
          );
        }
        function wm(r, n, a) {
          var h = !0,
            m = !0;
          if (typeof r != "function") throw new Ur(d);
          return (
            Dt(a) &&
              ((h = "leading" in a ? !!a.leading : h),
              (m = "trailing" in a ? !!a.trailing : m)),
            ql(r, n, { leading: h, maxWait: n, trailing: m })
          );
        }
        function _m(r) {
          return Ul(r, 1);
        }
        function bm(r, n) {
          return xc(lc(n), r);
        }
        function Em() {
          if (!arguments.length) return [];
          var r = arguments[0];
          return Ne(r) ? r : [r];
        }
        function Dm(r) {
          return Lr(r, T);
        }
        function Sm(r, n) {
          return (n = typeof n == "function" ? n : t), Lr(r, T, n);
        }
        function Im(r) {
          return Lr(r, I | T);
        }
        function Om(r, n) {
          return (n = typeof n == "function" ? n : t), Lr(r, I | T, n);
        }
        function xm(r, n) {
          return n == null || Ph(r, n, Wt(n));
        }
        function Wr(r, n) {
          return r === n || (r !== r && n !== n);
        }
        var Pm = Co(Za),
          Cm = Co(function (r, n) {
            return r >= n;
          }),
          rn = Fh(
            (function () {
              return arguments;
            })()
          )
            ? Fh
            : function (r) {
                return Tt(r) && nt.call(r, "callee") && !_h.call(r, "callee");
              },
          Ne = k.isArray,
          Tm = sr ? Sr(sr) : j0;
        function mr(r) {
          return r != null && jo(r.length) && !yi(r);
        }
        function Rt(r) {
          return Tt(r) && mr(r);
        }
        function Am(r) {
          return r === !0 || r === !1 || (Tt(r) && or(r) == H);
        }
        var Li = kg || jc,
          Nm = Kr ? Sr(Kr) : M0;
        function Rm(r) {
          return Tt(r) && r.nodeType === 1 && !ps(r);
        }
        function Fm(r) {
          if (r == null) return !0;
          if (
            mr(r) &&
            (Ne(r) ||
              typeof r == "string" ||
              typeof r.splice == "function" ||
              Li(r) ||
              Fn(r) ||
              rn(r))
          )
            return !r.length;
          var n = er(r);
          if (n == Ie || n == Oe) return !r.size;
          if (fs(r)) return !rc(r).length;
          for (var a in r) if (nt.call(r, a)) return !1;
          return !0;
        }
        function Um(r, n) {
          return us(r, n);
        }
        function $m(r, n, a) {
          a = typeof a == "function" ? a : t;
          var h = a ? a(r, n) : t;
          return h === t ? us(r, n, t, a) : !!h;
        }
        function Pc(r) {
          if (!Tt(r)) return !1;
          var n = or(r);
          return (
            n == F ||
            n == l ||
            (typeof r.message == "string" &&
              typeof r.name == "string" &&
              !ps(r))
          );
        }
        function Lm(r) {
          return typeof r == "number" && Eh(r);
        }
        function yi(r) {
          if (!Dt(r)) return !1;
          var n = or(r);
          return n == ae || n == fe || n == z || n == mt;
        }
        function Hl(r) {
          return typeof r == "number" && r == je(r);
        }
        function jo(r) {
          return typeof r == "number" && r > -1 && r % 1 == 0 && r <= V;
        }
        function Dt(r) {
          var n = typeof r;
          return r != null && (n == "object" || n == "function");
        }
        function Tt(r) {
          return r != null && typeof r == "object";
        }
        var zl = Rr ? Sr(Rr) : B0;
        function jm(r, n) {
          return r === n || tc(r, n, vc(n));
        }
        function Mm(r, n, a) {
          return (a = typeof a == "function" ? a : t), tc(r, n, vc(n), a);
        }
        function qm(r) {
          return Kl(r) && r != +r;
        }
        function Bm(r) {
          if (Sy(r)) throw new Te(u);
          return Uh(r);
        }
        function Hm(r) {
          return r === null;
        }
        function zm(r) {
          return r == null;
        }
        function Kl(r) {
          return typeof r == "number" || (Tt(r) && or(r) == He);
        }
        function ps(r) {
          if (!Tt(r) || or(r) != Le) return !1;
          var n = ho(r);
          if (n === null) return !0;
          var a = nt.call(n, "constructor") && n.constructor;
          return typeof a == "function" && a instanceof a && oo.call(a) == Mg;
        }
        var Cc = ei ? Sr(ei) : H0;
        function Km(r) {
          return Hl(r) && r >= -V && r <= V;
        }
        var kl = Zn ? Sr(Zn) : z0;
        function Mo(r) {
          return typeof r == "string" || (!Ne(r) && Tt(r) && or(r) == Re);
        }
        function Or(r) {
          return typeof r == "symbol" || (Tt(r) && or(r) == Fe);
        }
        var Fn = Gi ? Sr(Gi) : K0;
        function km(r) {
          return r === t;
        }
        function Vm(r) {
          return Tt(r) && er(r) == Pe;
        }
        function Wm(r) {
          return Tt(r) && or(r) == Ue;
        }
        var Gm = Co(ic),
          Jm = Co(function (r, n) {
            return r <= n;
          });
        function Vl(r) {
          if (!r) return [];
          if (mr(r)) return Mo(r) ? kr(r) : yr(r);
          if (ts && r[ts]) return xg(r[ts]());
          var n = er(r),
            a = n == Ie ? Ka : n == Oe ? io : Un;
          return a(r);
        }
        function mi(r) {
          if (!r) return r === 0 ? r : 0;
          if (((r = qr(r)), r === X || r === -X)) {
            var n = r < 0 ? -1 : 1;
            return n * W;
          }
          return r === r ? r : 0;
        }
        function je(r) {
          var n = mi(r),
            a = n % 1;
          return n === n ? (a ? n - a : n) : 0;
        }
        function Wl(r) {
          return r ? Xi(je(r), 0, ie) : 0;
        }
        function qr(r) {
          if (typeof r == "number") return r;
          if (Or(r)) return Q;
          if (Dt(r)) {
            var n = typeof r.valueOf == "function" ? r.valueOf() : r;
            r = Dt(n) ? n + "" : n;
          }
          if (typeof r != "string") return r === 0 ? r : +r;
          r = fh(r);
          var a = wa.test(r);
          return a || ba.test(r)
            ? Ae(r.slice(2), a ? 2 : 8)
            : va.test(r)
            ? Q
            : +r;
        }
        function Gl(r) {
          return ri(r, vr(r));
        }
        function Ym(r) {
          return r ? Xi(je(r), -V, V) : r === 0 ? r : 0;
        }
        function it(r) {
          return r == null ? "" : Ir(r);
        }
        var Qm = An(function (r, n) {
            if (fs(n) || mr(n)) {
              ri(n, Wt(n), r);
              return;
            }
            for (var a in n) nt.call(n, a) && os(r, a, n[a]);
          }),
          Jl = An(function (r, n) {
            ri(n, vr(n), r);
          }),
          qo = An(function (r, n, a, h) {
            ri(n, vr(n), r, h);
          }),
          Xm = An(function (r, n, a, h) {
            ri(n, Wt(n), r, h);
          }),
          Zm = pi(Ya);
        function ev(r, n) {
          var a = Tn(r);
          return n == null ? a : xh(a, n);
        }
        var tv = Ke(function (r, n) {
            r = ut(r);
            var a = -1,
              h = n.length,
              m = h > 2 ? n[2] : t;
            for (m && ar(n[0], n[1], m) && (h = 1); ++a < h; )
              for (var O = n[a], N = vr(O), U = -1, B = N.length; ++U < B; ) {
                var Z = N[U],
                  ee = r[Z];
                (ee === t || (Wr(ee, xn[Z]) && !nt.call(r, Z))) &&
                  (r[Z] = O[Z]);
              }
            return r;
          }),
          rv = Ke(function (r) {
            return r.push(t, fl), Vt(Yl, t, r);
          });
        function iv(r, n) {
          return ch(r, we(n, 3), ti);
        }
        function nv(r, n) {
          return ch(r, we(n, 3), Xa);
        }
        function sv(r, n) {
          return r == null ? r : Qa(r, we(n, 3), vr);
        }
        function ov(r, n) {
          return r == null ? r : Nh(r, we(n, 3), vr);
        }
        function av(r, n) {
          return r && ti(r, we(n, 3));
        }
        function cv(r, n) {
          return r && Xa(r, we(n, 3));
        }
        function uv(r) {
          return r == null ? [] : bo(r, Wt(r));
        }
        function hv(r) {
          return r == null ? [] : bo(r, vr(r));
        }
        function Tc(r, n, a) {
          var h = r == null ? t : Zi(r, n);
          return h === t ? a : h;
        }
        function lv(r, n) {
          return r != null && gl(r, n, F0);
        }
        function Ac(r, n) {
          return r != null && gl(r, n, U0);
        }
        var fv = al(function (r, n, a) {
            n != null && typeof n.toString != "function" && (n = ao.call(n)),
              (r[n] = a);
          }, Rc(wr)),
          dv = al(function (r, n, a) {
            n != null && typeof n.toString != "function" && (n = ao.call(n)),
              nt.call(r, n) ? r[n].push(a) : (r[n] = [a]);
          }, we),
          pv = Ke(cs);
        function Wt(r) {
          return mr(r) ? Ih(r) : rc(r);
        }
        function vr(r) {
          return mr(r) ? Ih(r, !0) : k0(r);
        }
        function gv(r, n) {
          var a = {};
          return (
            (n = we(n, 3)),
            ti(r, function (h, m, O) {
              fi(a, n(h, m, O), h);
            }),
            a
          );
        }
        function yv(r, n) {
          var a = {};
          return (
            (n = we(n, 3)),
            ti(r, function (h, m, O) {
              fi(a, m, n(h, m, O));
            }),
            a
          );
        }
        var mv = An(function (r, n, a) {
            Eo(r, n, a);
          }),
          Yl = An(function (r, n, a, h) {
            Eo(r, n, a, h);
          }),
          vv = pi(function (r, n) {
            var a = {};
            if (r == null) return a;
            var h = !1;
            (n = _t(n, function (O) {
              return (O = Ui(O, r)), h || (h = O.length > 1), O;
            })),
              ri(r, yc(r), a),
              h && (a = Lr(a, I | P | T, fy));
            for (var m = n.length; m--; ) cc(a, n[m]);
            return a;
          });
        function wv(r, n) {
          return Ql(r, Lo(we(n)));
        }
        var _v = pi(function (r, n) {
          return r == null ? {} : W0(r, n);
        });
        function Ql(r, n) {
          if (r == null) return {};
          var a = _t(yc(r), function (h) {
            return [h];
          });
          return (
            (n = we(n)),
            Hh(r, a, function (h, m) {
              return n(h, m[0]);
            })
          );
        }
        function bv(r, n, a) {
          n = Ui(n, r);
          var h = -1,
            m = n.length;
          for (m || ((m = 1), (r = t)); ++h < m; ) {
            var O = r == null ? t : r[ii(n[h])];
            O === t && ((h = m), (O = a)), (r = yi(O) ? O.call(r) : O);
          }
          return r;
        }
        function Ev(r, n, a) {
          return r == null ? r : hs(r, n, a);
        }
        function Dv(r, n, a, h) {
          return (
            (h = typeof h == "function" ? h : t), r == null ? r : hs(r, n, a, h)
          );
        }
        var Xl = hl(Wt),
          Zl = hl(vr);
        function Sv(r, n, a) {
          var h = Ne(r),
            m = h || Li(r) || Fn(r);
          if (((n = we(n, 4)), a == null)) {
            var O = r && r.constructor;
            m
              ? (a = h ? new O() : [])
              : Dt(r)
              ? (a = yi(O) ? Tn(ho(r)) : {})
              : (a = {});
          }
          return (
            (m ? Fr : ti)(r, function (N, U, B) {
              return n(a, N, U, B);
            }),
            a
          );
        }
        function Iv(r, n) {
          return r == null ? !0 : cc(r, n);
        }
        function Ov(r, n, a) {
          return r == null ? r : Wh(r, n, lc(a));
        }
        function xv(r, n, a, h) {
          return (
            (h = typeof h == "function" ? h : t),
            r == null ? r : Wh(r, n, lc(a), h)
          );
        }
        function Un(r) {
          return r == null ? [] : za(r, Wt(r));
        }
        function Pv(r) {
          return r == null ? [] : za(r, vr(r));
        }
        function Cv(r, n, a) {
          return (
            a === t && ((a = n), (n = t)),
            a !== t && ((a = qr(a)), (a = a === a ? a : 0)),
            n !== t && ((n = qr(n)), (n = n === n ? n : 0)),
            Xi(qr(r), n, a)
          );
        }
        function Tv(r, n, a) {
          return (
            (n = mi(n)),
            a === t ? ((a = n), (n = 0)) : (a = mi(a)),
            (r = qr(r)),
            $0(r, n, a)
          );
        }
        function Av(r, n, a) {
          if (
            (a && typeof a != "boolean" && ar(r, n, a) && (n = a = t),
            a === t &&
              (typeof n == "boolean"
                ? ((a = n), (n = t))
                : typeof r == "boolean" && ((a = r), (r = t))),
            r === t && n === t
              ? ((r = 0), (n = 1))
              : ((r = mi(r)), n === t ? ((n = r), (r = 0)) : (n = mi(n))),
            r > n)
          ) {
            var h = r;
            (r = n), (n = h);
          }
          if (a || r % 1 || n % 1) {
            var m = Dh();
            return Zt(r + m * (n - r + at("1e-" + ((m + "").length - 1))), n);
          }
          return sc(r, n);
        }
        var Nv = Nn(function (r, n, a) {
          return (n = n.toLowerCase()), r + (a ? ef(n) : n);
        });
        function ef(r) {
          return Nc(it(r).toLowerCase());
        }
        function tf(r) {
          return (r = it(r)), r && r.replace(ci, Eg).replace(Fa, "");
        }
        function Rv(r, n, a) {
          (r = it(r)), (n = Ir(n));
          var h = r.length;
          a = a === t ? h : Xi(je(a), 0, h);
          var m = a;
          return (a -= n.length), a >= 0 && r.slice(a, m) == n;
        }
        function Fv(r) {
          return (r = it(r)), r && vt.test(r) ? r.replace(zi, Dg) : r;
        }
        function Uv(r) {
          return (r = it(r)), r && Mt.test(r) ? r.replace(xt, "\\$&") : r;
        }
        var $v = Nn(function (r, n, a) {
            return r + (a ? "-" : "") + n.toLowerCase();
          }),
          Lv = Nn(function (r, n, a) {
            return r + (a ? " " : "") + n.toLowerCase();
          }),
          jv = nl("toLowerCase");
        function Mv(r, n, a) {
          (r = it(r)), (n = je(n));
          var h = n ? In(r) : 0;
          if (!n || h >= n) return r;
          var m = (n - h) / 2;
          return Po(go(m), a) + r + Po(po(m), a);
        }
        function qv(r, n, a) {
          (r = it(r)), (n = je(n));
          var h = n ? In(r) : 0;
          return n && h < n ? r + Po(n - h, a) : r;
        }
        function Bv(r, n, a) {
          (r = it(r)), (n = je(n));
          var h = n ? In(r) : 0;
          return n && h < n ? Po(n - h, a) + r : r;
        }
        function Hv(r, n, a) {
          return (
            a || n == null ? (n = 0) : n && (n = +n),
            Jg(it(r).replace(Pt, ""), n || 0)
          );
        }
        function zv(r, n, a) {
          return (
            (a ? ar(r, n, a) : n === t) ? (n = 1) : (n = je(n)), oc(it(r), n)
          );
        }
        function Kv() {
          var r = arguments,
            n = it(r[0]);
          return r.length < 3 ? n : n.replace(r[1], r[2]);
        }
        var kv = Nn(function (r, n, a) {
          return r + (a ? "_" : "") + n.toLowerCase();
        });
        function Vv(r, n, a) {
          return (
            a && typeof a != "number" && ar(r, n, a) && (n = a = t),
            (a = a === t ? ie : a >>> 0),
            a
              ? ((r = it(r)),
                r &&
                (typeof n == "string" || (n != null && !Cc(n))) &&
                ((n = Ir(n)), !n && Sn(r))
                  ? $i(kr(r), 0, a)
                  : r.split(n, a))
              : []
          );
        }
        var Wv = Nn(function (r, n, a) {
          return r + (a ? " " : "") + Nc(n);
        });
        function Gv(r, n, a) {
          return (
            (r = it(r)),
            (a = a == null ? 0 : Xi(je(a), 0, r.length)),
            (n = Ir(n)),
            r.slice(a, a + n.length) == n
          );
        }
        function Jv(r, n, a) {
          var h = S.templateSettings;
          a && ar(r, n, a) && (n = t), (r = it(r)), (n = qo({}, n, h, ll));
          var m = qo({}, n.imports, h.imports, ll),
            O = Wt(m),
            N = za(m, O),
            U,
            B,
            Z = 0,
            ee = n.interpolate || yn,
            ne = "__p += '",
            he = ka(
              (n.escape || yn).source +
                "|" +
                ee.source +
                "|" +
                (ee === Et ? ma : yn).source +
                "|" +
                (n.evaluate || yn).source +
                "|$",
              "g"
            ),
            ye =
              "//# sourceURL=" +
              (nt.call(n, "sourceURL")
                ? (n.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++Ua + "]") +
              `
`;
          r.replace(he, function (De, We, Ze, xr, cr, Pr) {
            return (
              Ze || (Ze = xr),
              (ne += r.slice(Z, Pr).replace(Da, Sg)),
              We &&
                ((U = !0),
                (ne +=
                  `' +
__e(` +
                  We +
                  `) +
'`)),
              cr &&
                ((B = !0),
                (ne +=
                  `';
` +
                  cr +
                  `;
__p += '`)),
              Ze &&
                (ne +=
                  `' +
((__t = (` +
                  Ze +
                  `)) == null ? '' : __t) +
'`),
              (Z = Pr + De.length),
              De
            );
          }),
            (ne += `';
`);
          var Ee = nt.call(n, "variable") && n.variable;
          if (!Ee)
            ne =
              `with (obj) {
` +
              ne +
              `
}
`;
          else if (ga.test(Ee)) throw new Te(f);
          (ne = (B ? ne.replace(Xr, "") : ne)
            .replace(nr, "$1")
            .replace(ai, "$1;")),
            (ne =
              "function(" +
              (Ee || "obj") +
              `) {
` +
              (Ee
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (U ? ", __e = _.escape" : "") +
              (B
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              ne +
              `return __p
}`);
          var Be = nf(function () {
            return rt(O, ye + "return " + ne).apply(t, N);
          });
          if (((Be.source = ne), Pc(Be))) throw Be;
          return Be;
        }
        function Yv(r) {
          return it(r).toLowerCase();
        }
        function Qv(r) {
          return it(r).toUpperCase();
        }
        function Xv(r, n, a) {
          if (((r = it(r)), r && (a || n === t))) return fh(r);
          if (!r || !(n = Ir(n))) return r;
          var h = kr(r),
            m = kr(n),
            O = dh(h, m),
            N = ph(h, m) + 1;
          return $i(h, O, N).join("");
        }
        function Zv(r, n, a) {
          if (((r = it(r)), r && (a || n === t))) return r.slice(0, yh(r) + 1);
          if (!r || !(n = Ir(n))) return r;
          var h = kr(r),
            m = ph(h, kr(n)) + 1;
          return $i(h, 0, m).join("");
        }
        function ew(r, n, a) {
          if (((r = it(r)), r && (a || n === t))) return r.replace(Pt, "");
          if (!r || !(n = Ir(n))) return r;
          var h = kr(r),
            m = dh(h, kr(n));
          return $i(h, m).join("");
        }
        function tw(r, n) {
          var a = G,
            h = se;
          if (Dt(n)) {
            var m = "separator" in n ? n.separator : m;
            (a = "length" in n ? je(n.length) : a),
              (h = "omission" in n ? Ir(n.omission) : h);
          }
          r = it(r);
          var O = r.length;
          if (Sn(r)) {
            var N = kr(r);
            O = N.length;
          }
          if (a >= O) return r;
          var U = a - In(h);
          if (U < 1) return h;
          var B = N ? $i(N, 0, U).join("") : r.slice(0, U);
          if (m === t) return B + h;
          if ((N && (U += B.length - U), Cc(m))) {
            if (r.slice(U).search(m)) {
              var Z,
                ee = B;
              for (
                m.global || (m = ka(m.source, it(Nr.exec(m)) + "g")),
                  m.lastIndex = 0;
                (Z = m.exec(ee));

              )
                var ne = Z.index;
              B = B.slice(0, ne === t ? U : ne);
            }
          } else if (r.indexOf(Ir(m), U) != U) {
            var he = B.lastIndexOf(m);
            he > -1 && (B = B.slice(0, he));
          }
          return B + h;
        }
        function rw(r) {
          return (r = it(r)), r && St.test(r) ? r.replace(xi, Ag) : r;
        }
        var iw = Nn(function (r, n, a) {
            return r + (a ? " " : "") + n.toUpperCase();
          }),
          Nc = nl("toUpperCase");
        function rf(r, n, a) {
          return (
            (r = it(r)),
            (n = a ? t : n),
            n === t ? (Og(r) ? Fg(r) : mg(r)) : r.match(n) || []
          );
        }
        var nf = Ke(function (r, n) {
            try {
              return Vt(r, t, n);
            } catch (a) {
              return Pc(a) ? a : new Te(a);
            }
          }),
          nw = pi(function (r, n) {
            return (
              Fr(n, function (a) {
                (a = ii(a)), fi(r, a, Oc(r[a], r));
              }),
              r
            );
          });
        function sw(r) {
          var n = r == null ? 0 : r.length,
            a = we();
          return (
            (r = n
              ? _t(r, function (h) {
                  if (typeof h[1] != "function") throw new Ur(d);
                  return [a(h[0]), h[1]];
                })
              : []),
            Ke(function (h) {
              for (var m = -1; ++m < n; ) {
                var O = r[m];
                if (Vt(O[0], this, h)) return Vt(O[1], this, h);
              }
            })
          );
        }
        function ow(r) {
          return A0(Lr(r, I));
        }
        function Rc(r) {
          return function () {
            return r;
          };
        }
        function aw(r, n) {
          return r == null || r !== r ? n : r;
        }
        var cw = ol(),
          uw = ol(!0);
        function wr(r) {
          return r;
        }
        function Fc(r) {
          return $h(typeof r == "function" ? r : Lr(r, I));
        }
        function hw(r) {
          return jh(Lr(r, I));
        }
        function lw(r, n) {
          return Mh(r, Lr(n, I));
        }
        var fw = Ke(function (r, n) {
            return function (a) {
              return cs(a, r, n);
            };
          }),
          dw = Ke(function (r, n) {
            return function (a) {
              return cs(r, a, n);
            };
          });
        function Uc(r, n, a) {
          var h = Wt(n),
            m = bo(n, h);
          a == null &&
            !(Dt(n) && (m.length || !h.length)) &&
            ((a = n), (n = r), (r = this), (m = bo(n, Wt(n))));
          var O = !(Dt(a) && "chain" in a) || !!a.chain,
            N = yi(r);
          return (
            Fr(m, function (U) {
              var B = n[U];
              (r[U] = B),
                N &&
                  (r.prototype[U] = function () {
                    var Z = this.__chain__;
                    if (O || Z) {
                      var ee = r(this.__wrapped__),
                        ne = (ee.__actions__ = yr(this.__actions__));
                      return (
                        ne.push({ func: B, args: arguments, thisArg: r }),
                        (ee.__chain__ = Z),
                        ee
                      );
                    }
                    return B.apply(r, Ti([this.value()], arguments));
                  });
            }),
            r
          );
        }
        function pw() {
          return Xe._ === this && (Xe._ = qg), this;
        }
        function $c() {}
        function gw(r) {
          return (
            (r = je(r)),
            Ke(function (n) {
              return qh(n, r);
            })
          );
        }
        var yw = dc(_t),
          mw = dc(ah),
          vw = dc(ja);
        function sf(r) {
          return _c(r) ? Ma(ii(r)) : G0(r);
        }
        function ww(r) {
          return function (n) {
            return r == null ? t : Zi(r, n);
          };
        }
        var _w = cl(),
          bw = cl(!0);
        function Lc() {
          return [];
        }
        function jc() {
          return !1;
        }
        function Ew() {
          return {};
        }
        function Dw() {
          return "";
        }
        function Sw() {
          return !0;
        }
        function Iw(r, n) {
          if (((r = je(r)), r < 1 || r > V)) return [];
          var a = ie,
            h = Zt(r, ie);
          (n = we(n)), (r -= ie);
          for (var m = Ha(h, n); ++a < r; ) n(a);
          return m;
        }
        function Ow(r) {
          return Ne(r) ? _t(r, ii) : Or(r) ? [r] : yr(Sl(it(r)));
        }
        function xw(r) {
          var n = ++jg;
          return it(r) + n;
        }
        var Pw = xo(function (r, n) {
            return r + n;
          }, 0),
          Cw = pc("ceil"),
          Tw = xo(function (r, n) {
            return r / n;
          }, 1),
          Aw = pc("floor");
        function Nw(r) {
          return r && r.length ? _o(r, wr, Za) : t;
        }
        function Rw(r, n) {
          return r && r.length ? _o(r, we(n, 2), Za) : t;
        }
        function Fw(r) {
          return hh(r, wr);
        }
        function Uw(r, n) {
          return hh(r, we(n, 2));
        }
        function $w(r) {
          return r && r.length ? _o(r, wr, ic) : t;
        }
        function Lw(r, n) {
          return r && r.length ? _o(r, we(n, 2), ic) : t;
        }
        var jw = xo(function (r, n) {
            return r * n;
          }, 1),
          Mw = pc("round"),
          qw = xo(function (r, n) {
            return r - n;
          }, 0);
        function Bw(r) {
          return r && r.length ? Ba(r, wr) : 0;
        }
        function Hw(r, n) {
          return r && r.length ? Ba(r, we(n, 2)) : 0;
        }
        return (
          (S.after = hm),
          (S.ary = Ul),
          (S.assign = Qm),
          (S.assignIn = Jl),
          (S.assignInWith = qo),
          (S.assignWith = Xm),
          (S.at = Zm),
          (S.before = $l),
          (S.bind = Oc),
          (S.bindAll = nw),
          (S.bindKey = Ll),
          (S.castArray = Em),
          (S.chain = Nl),
          (S.chunk = Ay),
          (S.compact = Ny),
          (S.concat = Ry),
          (S.cond = sw),
          (S.conforms = ow),
          (S.constant = Rc),
          (S.countBy = B1),
          (S.create = ev),
          (S.curry = jl),
          (S.curryRight = Ml),
          (S.debounce = ql),
          (S.defaults = tv),
          (S.defaultsDeep = rv),
          (S.defer = lm),
          (S.delay = fm),
          (S.difference = Fy),
          (S.differenceBy = Uy),
          (S.differenceWith = $y),
          (S.drop = Ly),
          (S.dropRight = jy),
          (S.dropRightWhile = My),
          (S.dropWhile = qy),
          (S.fill = By),
          (S.filter = z1),
          (S.flatMap = V1),
          (S.flatMapDeep = W1),
          (S.flatMapDepth = G1),
          (S.flatten = Pl),
          (S.flattenDeep = Hy),
          (S.flattenDepth = zy),
          (S.flip = dm),
          (S.flow = cw),
          (S.flowRight = uw),
          (S.fromPairs = Ky),
          (S.functions = uv),
          (S.functionsIn = hv),
          (S.groupBy = J1),
          (S.initial = Vy),
          (S.intersection = Wy),
          (S.intersectionBy = Gy),
          (S.intersectionWith = Jy),
          (S.invert = fv),
          (S.invertBy = dv),
          (S.invokeMap = Q1),
          (S.iteratee = Fc),
          (S.keyBy = X1),
          (S.keys = Wt),
          (S.keysIn = vr),
          (S.map = Fo),
          (S.mapKeys = gv),
          (S.mapValues = yv),
          (S.matches = hw),
          (S.matchesProperty = lw),
          (S.memoize = $o),
          (S.merge = mv),
          (S.mergeWith = Yl),
          (S.method = fw),
          (S.methodOf = dw),
          (S.mixin = Uc),
          (S.negate = Lo),
          (S.nthArg = gw),
          (S.omit = vv),
          (S.omitBy = wv),
          (S.once = pm),
          (S.orderBy = Z1),
          (S.over = yw),
          (S.overArgs = gm),
          (S.overEvery = mw),
          (S.overSome = vw),
          (S.partial = xc),
          (S.partialRight = Bl),
          (S.partition = em),
          (S.pick = _v),
          (S.pickBy = Ql),
          (S.property = sf),
          (S.propertyOf = ww),
          (S.pull = Zy),
          (S.pullAll = Tl),
          (S.pullAllBy = e1),
          (S.pullAllWith = t1),
          (S.pullAt = r1),
          (S.range = _w),
          (S.rangeRight = bw),
          (S.rearg = ym),
          (S.reject = im),
          (S.remove = i1),
          (S.rest = mm),
          (S.reverse = Sc),
          (S.sampleSize = sm),
          (S.set = Ev),
          (S.setWith = Dv),
          (S.shuffle = om),
          (S.slice = n1),
          (S.sortBy = um),
          (S.sortedUniq = l1),
          (S.sortedUniqBy = f1),
          (S.split = Vv),
          (S.spread = vm),
          (S.tail = d1),
          (S.take = p1),
          (S.takeRight = g1),
          (S.takeRightWhile = y1),
          (S.takeWhile = m1),
          (S.tap = N1),
          (S.throttle = wm),
          (S.thru = Ro),
          (S.toArray = Vl),
          (S.toPairs = Xl),
          (S.toPairsIn = Zl),
          (S.toPath = Ow),
          (S.toPlainObject = Gl),
          (S.transform = Sv),
          (S.unary = _m),
          (S.union = v1),
          (S.unionBy = w1),
          (S.unionWith = _1),
          (S.uniq = b1),
          (S.uniqBy = E1),
          (S.uniqWith = D1),
          (S.unset = Iv),
          (S.unzip = Ic),
          (S.unzipWith = Al),
          (S.update = Ov),
          (S.updateWith = xv),
          (S.values = Un),
          (S.valuesIn = Pv),
          (S.without = S1),
          (S.words = rf),
          (S.wrap = bm),
          (S.xor = I1),
          (S.xorBy = O1),
          (S.xorWith = x1),
          (S.zip = P1),
          (S.zipObject = C1),
          (S.zipObjectDeep = T1),
          (S.zipWith = A1),
          (S.entries = Xl),
          (S.entriesIn = Zl),
          (S.extend = Jl),
          (S.extendWith = qo),
          Uc(S, S),
          (S.add = Pw),
          (S.attempt = nf),
          (S.camelCase = Nv),
          (S.capitalize = ef),
          (S.ceil = Cw),
          (S.clamp = Cv),
          (S.clone = Dm),
          (S.cloneDeep = Im),
          (S.cloneDeepWith = Om),
          (S.cloneWith = Sm),
          (S.conformsTo = xm),
          (S.deburr = tf),
          (S.defaultTo = aw),
          (S.divide = Tw),
          (S.endsWith = Rv),
          (S.eq = Wr),
          (S.escape = Fv),
          (S.escapeRegExp = Uv),
          (S.every = H1),
          (S.find = K1),
          (S.findIndex = Ol),
          (S.findKey = iv),
          (S.findLast = k1),
          (S.findLastIndex = xl),
          (S.findLastKey = nv),
          (S.floor = Aw),
          (S.forEach = Rl),
          (S.forEachRight = Fl),
          (S.forIn = sv),
          (S.forInRight = ov),
          (S.forOwn = av),
          (S.forOwnRight = cv),
          (S.get = Tc),
          (S.gt = Pm),
          (S.gte = Cm),
          (S.has = lv),
          (S.hasIn = Ac),
          (S.head = Cl),
          (S.identity = wr),
          (S.includes = Y1),
          (S.indexOf = ky),
          (S.inRange = Tv),
          (S.invoke = pv),
          (S.isArguments = rn),
          (S.isArray = Ne),
          (S.isArrayBuffer = Tm),
          (S.isArrayLike = mr),
          (S.isArrayLikeObject = Rt),
          (S.isBoolean = Am),
          (S.isBuffer = Li),
          (S.isDate = Nm),
          (S.isElement = Rm),
          (S.isEmpty = Fm),
          (S.isEqual = Um),
          (S.isEqualWith = $m),
          (S.isError = Pc),
          (S.isFinite = Lm),
          (S.isFunction = yi),
          (S.isInteger = Hl),
          (S.isLength = jo),
          (S.isMap = zl),
          (S.isMatch = jm),
          (S.isMatchWith = Mm),
          (S.isNaN = qm),
          (S.isNative = Bm),
          (S.isNil = zm),
          (S.isNull = Hm),
          (S.isNumber = Kl),
          (S.isObject = Dt),
          (S.isObjectLike = Tt),
          (S.isPlainObject = ps),
          (S.isRegExp = Cc),
          (S.isSafeInteger = Km),
          (S.isSet = kl),
          (S.isString = Mo),
          (S.isSymbol = Or),
          (S.isTypedArray = Fn),
          (S.isUndefined = km),
          (S.isWeakMap = Vm),
          (S.isWeakSet = Wm),
          (S.join = Yy),
          (S.kebabCase = $v),
          (S.last = Mr),
          (S.lastIndexOf = Qy),
          (S.lowerCase = Lv),
          (S.lowerFirst = jv),
          (S.lt = Gm),
          (S.lte = Jm),
          (S.max = Nw),
          (S.maxBy = Rw),
          (S.mean = Fw),
          (S.meanBy = Uw),
          (S.min = $w),
          (S.minBy = Lw),
          (S.stubArray = Lc),
          (S.stubFalse = jc),
          (S.stubObject = Ew),
          (S.stubString = Dw),
          (S.stubTrue = Sw),
          (S.multiply = jw),
          (S.nth = Xy),
          (S.noConflict = pw),
          (S.noop = $c),
          (S.now = Uo),
          (S.pad = Mv),
          (S.padEnd = qv),
          (S.padStart = Bv),
          (S.parseInt = Hv),
          (S.random = Av),
          (S.reduce = tm),
          (S.reduceRight = rm),
          (S.repeat = zv),
          (S.replace = Kv),
          (S.result = bv),
          (S.round = Mw),
          (S.runInContext = M),
          (S.sample = nm),
          (S.size = am),
          (S.snakeCase = kv),
          (S.some = cm),
          (S.sortedIndex = s1),
          (S.sortedIndexBy = o1),
          (S.sortedIndexOf = a1),
          (S.sortedLastIndex = c1),
          (S.sortedLastIndexBy = u1),
          (S.sortedLastIndexOf = h1),
          (S.startCase = Wv),
          (S.startsWith = Gv),
          (S.subtract = qw),
          (S.sum = Bw),
          (S.sumBy = Hw),
          (S.template = Jv),
          (S.times = Iw),
          (S.toFinite = mi),
          (S.toInteger = je),
          (S.toLength = Wl),
          (S.toLower = Yv),
          (S.toNumber = qr),
          (S.toSafeInteger = Ym),
          (S.toString = it),
          (S.toUpper = Qv),
          (S.trim = Xv),
          (S.trimEnd = Zv),
          (S.trimStart = ew),
          (S.truncate = tw),
          (S.unescape = rw),
          (S.uniqueId = xw),
          (S.upperCase = iw),
          (S.upperFirst = Nc),
          (S.each = Rl),
          (S.eachRight = Fl),
          (S.first = Cl),
          Uc(
            S,
            (function () {
              var r = {};
              return (
                ti(S, function (n, a) {
                  nt.call(S.prototype, a) || (r[a] = n);
                }),
                r
              );
            })(),
            { chain: !1 }
          ),
          (S.VERSION = s),
          Fr(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (r) {
              S[r].placeholder = S;
            }
          ),
          Fr(["drop", "take"], function (r, n) {
            (Je.prototype[r] = function (a) {
              a = a === t ? 1 : kt(je(a), 0);
              var h = this.__filtered__ && !n ? new Je(this) : this.clone();
              return (
                h.__filtered__
                  ? (h.__takeCount__ = Zt(a, h.__takeCount__))
                  : h.__views__.push({
                      size: Zt(a, ie),
                      type: r + (h.__dir__ < 0 ? "Right" : ""),
                    }),
                h
              );
            }),
              (Je.prototype[r + "Right"] = function (a) {
                return this.reverse()[r](a).reverse();
              });
          }),
          Fr(["filter", "map", "takeWhile"], function (r, n) {
            var a = n + 1,
              h = a == x || a == te;
            Je.prototype[r] = function (m) {
              var O = this.clone();
              return (
                O.__iteratees__.push({ iteratee: we(m, 3), type: a }),
                (O.__filtered__ = O.__filtered__ || h),
                O
              );
            };
          }),
          Fr(["head", "last"], function (r, n) {
            var a = "take" + (n ? "Right" : "");
            Je.prototype[r] = function () {
              return this[a](1).value()[0];
            };
          }),
          Fr(["initial", "tail"], function (r, n) {
            var a = "drop" + (n ? "" : "Right");
            Je.prototype[r] = function () {
              return this.__filtered__ ? new Je(this) : this[a](1);
            };
          }),
          (Je.prototype.compact = function () {
            return this.filter(wr);
          }),
          (Je.prototype.find = function (r) {
            return this.filter(r).head();
          }),
          (Je.prototype.findLast = function (r) {
            return this.reverse().find(r);
          }),
          (Je.prototype.invokeMap = Ke(function (r, n) {
            return typeof r == "function"
              ? new Je(this)
              : this.map(function (a) {
                  return cs(a, r, n);
                });
          })),
          (Je.prototype.reject = function (r) {
            return this.filter(Lo(we(r)));
          }),
          (Je.prototype.slice = function (r, n) {
            r = je(r);
            var a = this;
            return a.__filtered__ && (r > 0 || n < 0)
              ? new Je(a)
              : (r < 0 ? (a = a.takeRight(-r)) : r && (a = a.drop(r)),
                n !== t &&
                  ((n = je(n)), (a = n < 0 ? a.dropRight(-n) : a.take(n - r))),
                a);
          }),
          (Je.prototype.takeRightWhile = function (r) {
            return this.reverse().takeWhile(r).reverse();
          }),
          (Je.prototype.toArray = function () {
            return this.take(ie);
          }),
          ti(Je.prototype, function (r, n) {
            var a = /^(?:filter|find|map|reject)|While$/.test(n),
              h = /^(?:head|last)$/.test(n),
              m = S[h ? "take" + (n == "last" ? "Right" : "") : n],
              O = h || /^find/.test(n);
            m &&
              (S.prototype[n] = function () {
                var N = this.__wrapped__,
                  U = h ? [1] : arguments,
                  B = N instanceof Je,
                  Z = U[0],
                  ee = B || Ne(N),
                  ne = function (We) {
                    var Ze = m.apply(S, Ti([We], U));
                    return h && he ? Ze[0] : Ze;
                  };
                ee &&
                  a &&
                  typeof Z == "function" &&
                  Z.length != 1 &&
                  (B = ee = !1);
                var he = this.__chain__,
                  ye = !!this.__actions__.length,
                  Ee = O && !he,
                  Be = B && !ye;
                if (!O && ee) {
                  N = Be ? N : new Je(this);
                  var De = r.apply(N, U);
                  return (
                    De.__actions__.push({ func: Ro, args: [ne], thisArg: t }),
                    new $r(De, he)
                  );
                }
                return Ee && Be
                  ? r.apply(this, U)
                  : ((De = this.thru(ne)),
                    Ee ? (h ? De.value()[0] : De.value()) : De);
              });
          }),
          Fr(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (r) {
              var n = no[r],
                a = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru",
                h = /^(?:pop|shift)$/.test(r);
              S.prototype[r] = function () {
                var m = arguments;
                if (h && !this.__chain__) {
                  var O = this.value();
                  return n.apply(Ne(O) ? O : [], m);
                }
                return this[a](function (N) {
                  return n.apply(Ne(N) ? N : [], m);
                });
              };
            }
          ),
          ti(Je.prototype, function (r, n) {
            var a = S[n];
            if (a) {
              var h = a.name + "";
              nt.call(Cn, h) || (Cn[h] = []), Cn[h].push({ name: n, func: a });
            }
          }),
          (Cn[Oo(t, Y).name] = [{ name: "wrapper", func: t }]),
          (Je.prototype.clone = r0),
          (Je.prototype.reverse = i0),
          (Je.prototype.value = n0),
          (S.prototype.at = R1),
          (S.prototype.chain = F1),
          (S.prototype.commit = U1),
          (S.prototype.next = $1),
          (S.prototype.plant = j1),
          (S.prototype.reverse = M1),
          (S.prototype.toJSON = S.prototype.valueOf = S.prototype.value = q1),
          (S.prototype.first = S.prototype.head),
          ts && (S.prototype[ts] = L1),
          S
        );
      },
      On = Ug();
    Nt ? (((Nt.exports = On)._ = On), (ct._ = On)) : (Xe._ = On);
  }.call(bs));
})(Pu, Pu.exports);
var v5 = Object.defineProperty,
  w5 = Object.defineProperties,
  _5 = Object.getOwnPropertyDescriptors,
  Bd = Object.getOwnPropertySymbols,
  b5 = Object.prototype.hasOwnProperty,
  E5 = Object.prototype.propertyIsEnumerable,
  Hd = (i, e, t) =>
    e in i
      ? v5(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  ko = (i, e) => {
    for (var t in e || (e = {})) b5.call(e, t) && Hd(i, t, e[t]);
    if (Bd) for (var t of Bd(e)) E5.call(e, t) && Hd(i, t, e[t]);
    return i;
  },
  D5 = (i, e) => w5(i, _5(e));
function qi(i, e, t) {
  var s;
  const o = s5(i);
  return (
    ((s = e.rpcMap) == null ? void 0 : s[o.reference]) ||
    `${m5}?chainId=${o.namespace}:${o.reference}&projectId=${t}`
  );
}
function gn(i) {
  return i.includes(":") ? i.split(":")[1] : i;
}
function hg(i) {
  return i.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function S5(i, e) {
  const t = Object.keys(e.namespaces).filter((o) => o.includes(i));
  if (!t.length) return [];
  const s = [];
  return (
    t.forEach((o) => {
      const u = e.namespaces[o].accounts;
      s.push(...u);
    }),
    s
  );
}
function zd(i = {}, e = {}) {
  const t = Kd(i),
    s = Kd(e);
  return Pu.exports.merge(t, s);
}
function Kd(i) {
  var e, t, s, o;
  const u = {};
  if (!a5(i)) return u;
  for (const [d, f] of Object.entries(i)) {
    const _ = nh(d) ? [d] : f.chains,
      y = f.methods || [],
      E = f.events || [],
      I = f.rpcMap || {},
      P = Ds(d);
    u[P] = D5(ko(ko({}, u[P]), f), {
      chains: iu(_, (e = u[P]) == null ? void 0 : e.chains),
      methods: iu(y, (t = u[P]) == null ? void 0 : t.methods),
      events: iu(E, (s = u[P]) == null ? void 0 : s.events),
      rpcMap: ko(ko({}, I), (o = u[P]) == null ? void 0 : o.rpcMap),
    });
  }
  return u;
}
function I5(i) {
  return i.includes(":") ? i.split(":")[2] : i;
}
function O5(i) {
  const e = {};
  for (const [t, s] of Object.entries(i)) {
    const o = s.methods || [],
      u = s.events || [],
      d = s.accounts || [],
      f = nh(t) ? [t] : s.chains ? s.chains : hg(s.accounts);
    e[t] = { chains: f, methods: o, events: u, accounts: d };
  }
  return e;
}
function nu(i) {
  return typeof i == "number"
    ? i
    : i.includes("0x")
    ? parseInt(i, 16)
    : ((i = i.includes(":") ? i.split(":")[1] : i),
      isNaN(Number(i)) ? i : Number(i));
}
const lg = {},
  bt = (i) => lg[i],
  su = (i, e) => {
    lg[i] = e;
  };
class x5 {
  constructor(e) {
    (this.name = "polkadot"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? e
          .filter((t) => t.split(":")[1] === this.chainId.toString())
          .map((t) => t.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = gn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || qi(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Ii(new Hi(s, bt("disableProviderPing")));
  }
}
class P5 {
  constructor(e) {
    (this.name = "eip155"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.httpProviders = this.createHttpProviders()),
      (this.chainId = parseInt(this.getDefaultChain()));
  }
  async request(e) {
    switch (e.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(e.request.method)
      ? await this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
      (this.chainId = parseInt(e)),
      this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  createHttpProvider(e, t) {
    const s =
      t || qi(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Ii(new Hi(s, bt("disableProviderPing")));
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = parseInt(gn(t));
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  getHttpProvider() {
    const e = this.chainId,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  async handleSwitchChain(e) {
    var t, s;
    let o = e.request.params
      ? (t = e.request.params[0]) == null
        ? void 0
        : t.chainId
      : "0x0";
    o = o.startsWith("0x") ? o : `0x${o}`;
    const u = parseInt(o, 16);
    if (this.isChainApproved(u)) this.setDefaultChain(`${u}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({
        topic: e.topic,
        request: { method: e.request.method, params: [{ chainId: o }] },
        chainId: (s = this.namespace.chains) == null ? void 0 : s[0],
      }),
        this.setDefaultChain(`${u}`);
    else
      throw new Error(
        `Failed to switch to chain 'eip155:${u}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
      );
    return null;
  }
  isChainApproved(e) {
    return this.namespace.chains.includes(`${this.name}:${e}`);
  }
}
class C5 {
  constructor(e) {
    (this.name = "solana"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = gn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || qi(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Ii(new Hi(s, bt("disableProviderPing")));
  }
}
class T5 {
  constructor(e) {
    (this.name = "cosmos"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(
        Oi.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = gn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || qi(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Ii(new Hi(s, bt("disableProviderPing")));
  }
}
class A5 {
  constructor(e) {
    (this.name = "cip34"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(
        Oi.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        const s = this.getCardanoRPCUrl(t),
          o = gn(t);
        e[o] = this.createHttpProvider(o, s);
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  getCardanoRPCUrl(e) {
    const t = this.namespace.rpcMap;
    if (t) return t[e];
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || this.getCardanoRPCUrl(e);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Ii(new Hi(s, bt("disableProviderPing")));
  }
}
class N5 {
  constructor(e) {
    (this.name = "elrond"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = gn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || qi(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Ii(new Hi(s, bt("disableProviderPing")));
  }
}
class R5 {
  constructor(e) {
    (this.name = "multiversx"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = gn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || qi(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Ii(new Hi(s, bt("disableProviderPing")));
  }
}
class F5 {
  constructor(e) {
    (this.name = "near"),
      (this.namespace = e.namespace),
      (this.events = bt("events")),
      (this.client = bt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (((this.chainId = e), !this.httpProviders[e])) {
      const s = t || qi(`${this.name}:${e}`, this.namespace);
      if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, s);
    }
    this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? e
          .filter((t) => t.split(":")[1] === this.chainId.toString())
          .map((t) => t.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        e[t] = this.createHttpProvider(
          t,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || qi(e, this.namespace);
    return typeof s > "u"
      ? void 0
      : new Ii(new Hi(s, bt("disableProviderPing")));
  }
}
var U5 = Object.defineProperty,
  $5 = Object.defineProperties,
  L5 = Object.getOwnPropertyDescriptors,
  kd = Object.getOwnPropertySymbols,
  j5 = Object.prototype.hasOwnProperty,
  M5 = Object.prototype.propertyIsEnumerable,
  Vd = (i, e, t) =>
    e in i
      ? U5(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Vo = (i, e) => {
    for (var t in e || (e = {})) j5.call(e, t) && Vd(i, t, e[t]);
    if (kd) for (var t of kd(e)) M5.call(e, t) && Vd(i, t, e[t]);
    return i;
  },
  ou = (i, e) => $5(i, L5(e));
class sh {
  constructor(e) {
    (this.events = new Ru()),
      (this.rpcProviders = {}),
      (this.shouldAbortPairingAttempt = !1),
      (this.maxPairingAttempts = 10),
      (this.disableProviderPing = !1),
      (this.providerOpts = e),
      (this.logger =
        typeof e?.logger < "u" && typeof e?.logger != "string"
          ? e.logger
          : Ye.pino(Ye.getDefaultLoggerOptions({ level: e?.logger || Md }))),
      (this.disableProviderPing = e?.disableProviderPing || !1);
  }
  static async init(e) {
    const t = new sh(e);
    return await t.initialize(), t;
  }
  async request(e, t, s) {
    const [o, u] = this.validateChain(t);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(o).request({
      request: Vo({}, e),
      chainId: `${o}:${u}`,
      topic: this.session.topic,
      expiry: s,
    });
  }
  sendAsync(e, t, s, o) {
    const u = new Date().getTime();
    this.request(e, s, o)
      .then((d) => t(null, ha(u, d)))
      .catch((d) => t(d, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return (
      this.session ||
        (await this.connect({
          namespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties,
        })),
      await this.requestAccounts()
    );
  }
  async disconnect() {
    var e;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({
      topic: (e = this.session) == null ? void 0 : e.topic,
      reason: Rd("USER_DISCONNECTED"),
    }),
      await this.cleanup();
  }
  async connect(e) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (
      (this.setNamespaces(e),
      await this.cleanupPendingPairings(),
      !e.skipPairing)
    )
      return await this.pair(e.pairingTopic);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(e) {
    this.shouldAbortPairingAttempt = !1;
    let t = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
      if (t >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: s, approval: o } = await this.client.connect({
        pairingTopic: e,
        requiredNamespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
      });
      s && ((this.uri = s), this.events.emit("display_uri", s)),
        await o()
          .then((u) => {
            this.session = u;
            const d = O5(u.namespaces);
            (this.namespaces = zd(this.namespaces, d)),
              this.persist("namespaces", this.namespaces);
          })
          .catch((u) => {
            if (u.message !== cg) throw u;
            t++;
          });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(e, t) {
    try {
      if (!this.session) return;
      const [s, o] = this.validateChain(e);
      this.getProvider(s).setDefaultChain(o, t);
    } catch (s) {
      if (!/Please call connect/.test(s.message)) throw s;
    }
  }
  async cleanupPendingPairings(e = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const t = this.client.pairing.getAll();
    if (Fd(t)) {
      for (const s of t)
        e.deletePairings
          ? this.client.core.expirer.set(s.topic, 0)
          : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
      this.logger.info(`Inactive pairings cleared: ${t.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (
      ((this.namespaces = await this.getFromStore("namespaces")),
      (this.optionalNamespaces =
        (await this.getFromStore("optionalNamespaces")) || {}),
      this.client.session.length)
    ) {
      const e = this.client.session.keys.length - 1;
      (this.session = this.client.session.get(this.client.session.keys[e])),
        this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"),
      await this.createClient(),
      await this.checkStorage(),
      this.registerEventListeners();
  }
  async createClient() {
    (this.client =
      this.providerOpts.client ||
      (await kI.init({
        logger: this.providerOpts.logger || Md,
        relayUrl: this.providerOpts.relayUrl || p5,
        projectId: this.providerOpts.projectId,
        metadata: this.providerOpts.metadata,
        storageOptions: this.providerOpts.storageOptions,
        storage: this.providerOpts.storage,
        name: this.providerOpts.name,
      }))),
      this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error(
        "Session not initialized. Please call connect() before enable()"
      );
    const e = [
      ...new Set(Object.keys(this.session.namespaces).map((t) => Ds(t))),
    ];
    su("client", this.client),
      su("events", this.events),
      su("disableProviderPing", this.disableProviderPing),
      e.forEach((t) => {
        if (!this.session) return;
        const s = S5(t, this.session),
          o = hg(s),
          u = zd(this.namespaces, this.optionalNamespaces),
          d = ou(Vo({}, u[t]), { accounts: s, chains: o });
        switch (t) {
          case "eip155":
            this.rpcProviders[t] = new P5({ namespace: d });
            break;
          case "solana":
            this.rpcProviders[t] = new C5({ namespace: d });
            break;
          case "cosmos":
            this.rpcProviders[t] = new T5({ namespace: d });
            break;
          case "polkadot":
            this.rpcProviders[t] = new x5({ namespace: d });
            break;
          case "cip34":
            this.rpcProviders[t] = new A5({ namespace: d });
            break;
          case "elrond":
            this.rpcProviders[t] = new N5({ namespace: d });
            break;
          case "multiversx":
            this.rpcProviders[t] = new R5({ namespace: d });
            break;
          case "near":
            this.rpcProviders[t] = new F5({ namespace: d });
            break;
        }
      });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e) => {
      this.events.emit("session_ping", e);
    }),
      this.client.on("session_event", (e) => {
        const { params: t } = e,
          { event: s } = t;
        if (s.name === "accountsChanged") {
          const o = s.data;
          o && Fd(o) && this.events.emit("accountsChanged", o.map(I5));
        } else if (s.name === "chainChanged") {
          const o = t.chainId,
            u = t.event.data,
            d = Ds(o),
            f = nu(o) !== nu(u) ? `${d}:${nu(u)}` : o;
          this.onChainChanged(f);
        } else this.events.emit(s.name, s.data);
        this.events.emit("session_event", e);
      }),
      this.client.on("session_update", ({ topic: e, params: t }) => {
        var s;
        const { namespaces: o } = t,
          u = (s = this.client) == null ? void 0 : s.session.get(e);
        (this.session = ou(Vo({}, u), { namespaces: o })),
          this.onSessionUpdate(),
          this.events.emit("session_update", { topic: e, params: t });
      }),
      this.client.on("session_delete", async (e) => {
        await this.cleanup(),
          this.events.emit("session_delete", e),
          this.events.emit(
            "disconnect",
            ou(Vo({}, Rd("USER_DISCONNECTED")), { data: e.topic })
          );
      }),
      this.on(Oi.DEFAULT_CHAIN_CHANGED, (e) => {
        this.onChainChanged(e, !0);
      });
  }
  getProvider(e) {
    if (!this.rpcProviders[e]) throw new Error(`Provider not found: ${e}`);
    return this.rpcProviders[e];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e) => {
      var t;
      this.getProvider(e).updateNamespace(
        (t = this.session) == null ? void 0 : t.namespaces[e]
      );
    });
  }
  setNamespaces(e) {
    const { namespaces: t, optionalNamespaces: s, sessionProperties: o } = e;
    t && Object.keys(t).length && (this.namespaces = t),
      s && Object.keys(s).length && (this.optionalNamespaces = s),
      (this.sessionProperties = o),
      this.persist("namespaces", t),
      this.persist("optionalNamespaces", s);
  }
  validateChain(e) {
    const [t, s] = e?.split(":") || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, s];
    if (
      t &&
      !Object.keys(this.namespaces || {})
        .map((d) => Ds(d))
        .includes(t)
    )
      throw new Error(
        `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
      );
    if (t && s) return [t, s];
    const o = Ds(Object.keys(this.namespaces)[0]),
      u = this.rpcProviders[o].getDefaultChain();
    return [o, u];
  }
  async requestAccounts() {
    const [e] = this.validateChain();
    return await this.getProvider(e).requestAccounts();
  }
  onChainChanged(e, t = !1) {
    if (!this.namespaces) return;
    const [s, o] = this.validateChain(e);
    o &&
      (t || this.getProvider(s).setDefaultChain(o),
      this.namespaces[s]
        ? (this.namespaces[s].defaultChain = o)
        : this.namespaces[`${s}:${o}`]
        ? (this.namespaces[`${s}:${o}`].defaultChain = o)
        : (this.namespaces[`${s}:${o}`] = { defaultChain: o }),
      this.persist("namespaces", this.namespaces),
      this.events.emit("chainChanged", o));
  }
  onConnect() {
    this.createProviders(),
      this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    (this.session = void 0),
      (this.namespaces = void 0),
      (this.optionalNamespaces = void 0),
      (this.sessionProperties = void 0),
      this.persist("namespaces", void 0),
      this.persist("optionalNamespaces", void 0),
      this.persist("sessionProperties", void 0),
      await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(e, t) {
    this.client.core.storage.setItem(`${qd}/${e}`, t);
  }
  async getFromStore(e) {
    return await this.client.core.storage.getItem(`${qd}/${e}`);
  }
}
const q5 = sh,
  B5 = "wc",
  H5 = "ethereum_provider",
  z5 = `${B5}@2:${H5}:`,
  K5 = "https://rpc.walletconnect.com/v1/",
  Cu = ["eth_sendTransaction", "personal_sign"],
  k5 = [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
  ],
  Tu = ["chainChanged", "accountsChanged"],
  V5 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var W5 = Object.defineProperty,
  G5 = Object.defineProperties,
  J5 = Object.getOwnPropertyDescriptors,
  Wd = Object.getOwnPropertySymbols,
  Y5 = Object.prototype.hasOwnProperty,
  Q5 = Object.prototype.propertyIsEnumerable,
  Gd = (i, e, t) =>
    e in i
      ? W5(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Ss = (i, e) => {
    for (var t in e || (e = {})) Y5.call(e, t) && Gd(i, t, e[t]);
    if (Wd) for (var t of Wd(e)) Q5.call(e, t) && Gd(i, t, e[t]);
    return i;
  },
  Jd = (i, e) => G5(i, J5(e));
function ia(i) {
  return Number(i[0].split(":")[1]);
}
function au(i) {
  return `0x${i.toString(16)}`;
}
function X5(i) {
  const {
    chains: e,
    optionalChains: t,
    methods: s,
    optionalMethods: o,
    events: u,
    optionalEvents: d,
    rpcMap: f,
  } = i;
  if (!vu(e)) throw new Error("Invalid chains");
  const _ = {
      chains: e,
      methods: s || Cu,
      events: u || Tu,
      rpcMap: Ss({}, e.length ? { [ia(e)]: f[ia(e)] } : {}),
    },
    y = u?.filter((T) => !Tu.includes(T)),
    E = s?.filter((T) => !Cu.includes(T));
  if (!t && !d && !o && !(y != null && y.length) && !(E != null && E.length))
    return { required: e.length ? _ : void 0 };
  const I = (y?.length && E?.length) || !t,
    P = {
      chains: [...new Set(I ? _.chains.concat(t || []) : t)],
      methods: [...new Set(_.methods.concat(o != null && o.length ? o : k5))],
      events: [...new Set(_.events.concat(d != null && d.length ? d : V5))],
      rpcMap: f,
    };
  return { required: e.length ? _ : void 0, optional: t.length ? P : void 0 };
}
class oh {
  constructor() {
    (this.events = new Hr.EventEmitter()),
      (this.namespace = "eip155"),
      (this.accounts = []),
      (this.chainId = 1),
      (this.STORAGE_KEY = z5),
      (this.on = (e, t) => (this.events.on(e, t), this)),
      (this.once = (e, t) => (this.events.once(e, t), this)),
      (this.removeListener = (e, t) => (
        this.events.removeListener(e, t), this
      )),
      (this.off = (e, t) => (this.events.off(e, t), this)),
      (this.parseAccount = (e) =>
        this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
      (this.signer = {}),
      (this.rpc = {});
  }
  static async init(e) {
    const t = new oh();
    return await t.initialize(e), t;
  }
  async request(e, t) {
    return await this.signer.request(e, this.formatChainId(this.chainId), t);
  }
  sendAsync(e, t, s) {
    this.signer.sendAsync(e, t, this.formatChainId(this.chainId), s);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return (
      this.session || (await this.connect()),
      await this.request({ method: "eth_requestAccounts" })
    );
  }
  async connect(e) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(e);
    const { required: t, optional: s } = X5(this.rpc);
    try {
      const o = await new Promise(async (d, f) => {
        var _;
        this.rpc.showQrModal &&
          ((_ = this.modal) == null ||
            _.subscribeModal((y) => {
              !y.open &&
                !this.signer.session &&
                (this.signer.abortPairingAttempt(),
                f(new Error("Connection request reset. Please try again.")));
            })),
          await this.signer
            .connect(
              Jd(
                Ss(
                  { namespaces: Ss({}, t && { [this.namespace]: t }) },
                  s && { optionalNamespaces: { [this.namespace]: s } }
                ),
                { pairingTopic: e?.pairingTopic }
              )
            )
            .then((y) => {
              d(y);
            })
            .catch((y) => {
              f(new Error(y.message));
            });
      });
      if (!o) return;
      const u = TE(o.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : u),
        this.setAccounts(u),
        this.events.emit("connect", { chainId: au(this.chainId) });
    } catch (o) {
      throw (this.signer.logger.error(o), o);
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && (await this.signer.disconnect()), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (e) => {
      const { params: t } = e,
        { event: s } = t;
      s.name === "accountsChanged"
        ? ((this.accounts = this.parseAccounts(s.data)),
          this.events.emit("accountsChanged", this.accounts))
        : s.name === "chainChanged"
        ? this.setChainId(this.formatChainId(s.data))
        : this.events.emit(s.name, s.data),
        this.events.emit("session_event", e);
    }),
      this.signer.on("chainChanged", (e) => {
        const t = parseInt(e);
        (this.chainId = t),
          this.events.emit("chainChanged", au(this.chainId)),
          this.persist();
      }),
      this.signer.on("session_update", (e) => {
        this.events.emit("session_update", e);
      }),
      this.signer.on("session_delete", (e) => {
        this.reset(),
          this.events.emit("session_delete", e),
          this.events.emit(
            "disconnect",
            Jd(Ss({}, NE("USER_DISCONNECTED")), {
              data: e.topic,
              name: "USER_DISCONNECTED",
            })
          );
      }),
      this.signer.on("display_uri", (e) => {
        var t, s;
        this.rpc.showQrModal &&
          ((t = this.modal) == null || t.closeModal(),
          (s = this.modal) == null || s.openModal({ uri: e })),
          this.events.emit("display_uri", e);
      });
  }
  switchEthereumChain(e) {
    this.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: e.toString(16) }],
    });
  }
  isCompatibleChainId(e) {
    return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(e) {
    return `${this.namespace}:${e}`;
  }
  parseChainId(e) {
    return Number(e.split(":")[1]);
  }
  setChainIds(e) {
    const t = e
      .filter((s) => this.isCompatibleChainId(s))
      .map((s) => this.parseChainId(s));
    t.length &&
      ((this.chainId = t[0]),
      this.events.emit("chainChanged", au(this.chainId)),
      this.persist());
  }
  setChainId(e) {
    if (this.isCompatibleChainId(e)) {
      const t = this.parseChainId(e);
      (this.chainId = t), this.switchEthereumChain(t);
    }
  }
  parseAccountId(e) {
    const [t, s, o] = e.split(":");
    return { chainId: `${t}:${s}`, address: o };
  }
  setAccounts(e) {
    (this.accounts = e
      .filter(
        (t) =>
          this.parseChainId(this.parseAccountId(t).chainId) === this.chainId
      )
      .map((t) => this.parseAccountId(t).address)),
      this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(e) {
    var t, s;
    const o = (t = e?.chains) != null ? t : [],
      u = (s = e?.optionalChains) != null ? s : [],
      d = o.concat(u);
    if (!d.length)
      throw new Error(
        "No chains specified in either `chains` or `optionalChains`"
      );
    const f = o.length ? e?.methods || Cu : [],
      _ = o.length ? e?.events || Tu : [],
      y = e?.optionalMethods || [],
      E = e?.optionalEvents || [],
      I = e?.rpcMap || this.buildRpcMap(d, e.projectId),
      P = e?.qrModalOptions || void 0;
    return {
      chains: o?.map((T) => this.formatChainId(T)),
      optionalChains: u.map((T) => this.formatChainId(T)),
      methods: f,
      events: _,
      optionalMethods: y,
      optionalEvents: E,
      rpcMap: I,
      showQrModal: !!(e != null && e.showQrModal),
      qrModalOptions: P,
      projectId: e.projectId,
      metadata: e.metadata,
    };
  }
  buildRpcMap(e, t) {
    const s = {};
    return (
      e.forEach((o) => {
        s[o] = this.getRpcUrl(o, t);
      }),
      s
    );
  }
  async initialize(e) {
    if (
      ((this.rpc = this.getRpcConfig(e)),
      (this.chainId = this.rpc.chains.length
        ? ia(this.rpc.chains)
        : ia(this.rpc.optionalChains)),
      (this.signer = await q5.init({
        projectId: this.rpc.projectId,
        metadata: this.rpc.metadata,
        disableProviderPing: e.disableProviderPing,
        relayUrl: e.relayUrl,
        storageOptions: e.storageOptions,
      })),
      this.registerEventListeners(),
      await this.loadPersistedSession(),
      this.rpc.showQrModal)
    ) {
      let t;
      try {
        const { WalletConnectModal: s } = await Kw(
          () => import("./index-6185e5bf.js").then((o) => o.i),
          [
            "assets/index-6185e5bf.js",
            "assets/index-80b9e8d9.js",
            "assets/index-bd2e65b4.css",
          ]
        );
        t = s;
      } catch {
        throw new Error(
          "To use QR modal, please install @walletconnect/modal package"
        );
      }
      if (t)
        try {
          this.modal = new t(
            Ss({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
          );
        } catch (s) {
          throw (
            (this.signer.logger.error(s),
            new Error("Could not generate WalletConnectModal Instance"))
          );
        }
    }
  }
  loadConnectOpts(e) {
    if (!e) return;
    const { chains: t, optionalChains: s, rpcMap: o } = e;
    t &&
      vu(t) &&
      ((this.rpc.chains = t.map((u) => this.formatChainId(u))),
      t.forEach((u) => {
        this.rpc.rpcMap[u] = o?.[u] || this.getRpcUrl(u);
      })),
      s &&
        vu(s) &&
        ((this.rpc.optionalChains = []),
        (this.rpc.optionalChains = s?.map((u) => this.formatChainId(u))),
        s.forEach((u) => {
          this.rpc.rpcMap[u] = o?.[u] || this.getRpcUrl(u);
        }));
  }
  getRpcUrl(e, t) {
    var s;
    return (
      ((s = this.rpc.rpcMap) == null ? void 0 : s[e]) ||
      `${K5}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
    );
  }
  async loadPersistedSession() {
    if (!this.session) return;
    const e = await this.signer.client.core.storage.getItem(
        `${this.STORAGE_KEY}/chainId`
      ),
      t = this.session.namespaces[`${this.namespace}:${e}`]
        ? this.session.namespaces[`${this.namespace}:${e}`]
        : this.session.namespaces[this.namespace];
    this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
      this.setAccounts(t?.accounts);
  }
  reset() {
    (this.chainId = 1), (this.accounts = []);
  }
  persist() {
    this.session &&
      this.signer.client.core.storage.setItem(
        `${this.STORAGE_KEY}/chainId`,
        this.chainId
      );
  }
  parseAccounts(e) {
    return typeof e == "string" || e instanceof String
      ? [this.parseAccount(e)]
      : e.map((t) => this.parseAccount(t));
  }
}
const mO = oh;
export {
  mO as EthereumProvider,
  V5 as OPTIONAL_EVENTS,
  k5 as OPTIONAL_METHODS,
  Tu as REQUIRED_EVENTS,
  Cu as REQUIRED_METHODS,
  oh as default,
};
