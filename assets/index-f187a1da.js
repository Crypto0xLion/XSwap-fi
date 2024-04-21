import {
  l as F,
  n as Vn,
  o as Hr,
  p as Ve,
  j as Ur,
  q as rh,
  k as Wr,
  r as ml,
  m as nh,
} from "./index-80b9e8d9.js";
function sh(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const s in n)
        if (s !== "default" && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(n, s);
          i &&
            Object.defineProperty(
              e,
              s,
              i.get ? i : { enumerable: !0, get: () => n[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
var Mo = {},
  $r = {},
  zn = {};
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.walletLogo = void 0;
const ih = (e, t) => {
  let r;
  switch (e) {
    case "standard":
      return (
        (r = t),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
      );
    case "circle":
      return (
        (r = t),
        `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`
      );
    case "text":
      return (
        (r = (0.1 * t).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
      );
    case "textWithLogo":
      return (
        (r = (0.25 * t).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
      );
    case "textLight":
      return (
        (r = (0.1 * t).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
      );
    case "textWithLogoLight":
      return (
        (r = (0.25 * t).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
      );
    default:
      return (
        (r = t),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
      );
  }
};
zn.walletLogo = ih;
var qn = {};
Object.defineProperty(qn, "__esModule", { value: !0 });
qn.LINK_API_URL = void 0;
qn.LINK_API_URL = "https://www.walletlink.org";
var P = {},
  Vr = {},
  ut = {};
Object.defineProperty(ut, "__esModule", { value: !0 });
ut.errorValues = ut.standardErrorCodes = void 0;
ut.standardErrorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603,
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
    unsupportedChain: 4902,
  },
};
ut.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message:
      "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object.",
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available.",
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s).",
  },
  "-32603": { standard: "JSON RPC 2.0", message: "Internal JSON-RPC error." },
  "-32000": { standard: "EIP-1474", message: "Invalid input." },
  "-32001": { standard: "EIP-1474", message: "Resource not found." },
  "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
  "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
  "-32004": { standard: "EIP-1474", message: "Method not supported." },
  "-32005": { standard: "EIP-1474", message: "Request limit exceeded." },
  4001: { standard: "EIP-1193", message: "User rejected the request." },
  4100: {
    standard: "EIP-1193",
    message:
      "The requested account and/or method has not been authorized by the user.",
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider.",
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains.",
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain.",
  },
  4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
};
var Gn = {},
  Jn = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.serialize =
      e.getErrorCode =
      e.isValidCode =
      e.getMessageFromCode =
      e.JSON_RPC_SERVER_ERROR_MESSAGE =
        void 0);
  const t = ut,
    r = "Unspecified error message.";
  e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function n(h, f = r) {
    if (h && Number.isInteger(h)) {
      const m = h.toString();
      if (d(t.errorValues, m)) return t.errorValues[m].message;
      if (c(h)) return e.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return f;
  }
  e.getMessageFromCode = n;
  function s(h) {
    if (!Number.isInteger(h)) return !1;
    const f = h.toString();
    return !!(t.errorValues[f] || c(h));
  }
  e.isValidCode = s;
  function i(h) {
    var f;
    if (typeof h == "number") return h;
    if (o(h)) return (f = h.code) !== null && f !== void 0 ? f : h.errorCode;
  }
  e.getErrorCode = i;
  function o(h) {
    return (
      typeof h == "object" &&
      h !== null &&
      (typeof h.code == "number" || typeof h.errorCode == "number")
    );
  }
  function a(h, { shouldIncludeStack: f = !1 } = {}) {
    const m = {};
    if (
      h &&
      typeof h == "object" &&
      !Array.isArray(h) &&
      d(h, "code") &&
      s(h.code)
    ) {
      const S = h;
      (m.code = S.code),
        S.message && typeof S.message == "string"
          ? ((m.message = S.message), d(S, "data") && (m.data = S.data))
          : ((m.message = n(m.code)), (m.data = { originalError: l(h) }));
    } else
      (m.code = t.standardErrorCodes.rpc.internal),
        (m.message = u(h, "message") ? h.message : r),
        (m.data = { originalError: l(h) });
    return f && (m.stack = u(h, "stack") ? h.stack : void 0), m;
  }
  e.serialize = a;
  function c(h) {
    return h >= -32099 && h <= -32e3;
  }
  function l(h) {
    return h && typeof h == "object" && !Array.isArray(h)
      ? Object.assign({}, h)
      : h;
  }
  function d(h, f) {
    return Object.prototype.hasOwnProperty.call(h, f);
  }
  function u(h, f) {
    return (
      typeof h == "object" && h !== null && f in h && typeof h[f] == "string"
    );
  }
})(Jn);
Object.defineProperty(Gn, "__esModule", { value: !0 });
Gn.standardErrors = void 0;
const we = ut,
  bl = Jn;
Gn.standardErrors = {
  rpc: {
    parse: (e) => Oe(we.standardErrorCodes.rpc.parse, e),
    invalidRequest: (e) => Oe(we.standardErrorCodes.rpc.invalidRequest, e),
    invalidParams: (e) => Oe(we.standardErrorCodes.rpc.invalidParams, e),
    methodNotFound: (e) => Oe(we.standardErrorCodes.rpc.methodNotFound, e),
    internal: (e) => Oe(we.standardErrorCodes.rpc.internal, e),
    server: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error(
          "Ethereum RPC Server errors must provide single object argument."
        );
      const { code: t } = e;
      if (!Number.isInteger(t) || t > -32005 || t < -32099)
        throw new Error(
          '"code" must be an integer such that: -32099 <= code <= -32005'
        );
      return Oe(t, e);
    },
    invalidInput: (e) => Oe(we.standardErrorCodes.rpc.invalidInput, e),
    resourceNotFound: (e) => Oe(we.standardErrorCodes.rpc.resourceNotFound, e),
    resourceUnavailable: (e) =>
      Oe(we.standardErrorCodes.rpc.resourceUnavailable, e),
    transactionRejected: (e) =>
      Oe(we.standardErrorCodes.rpc.transactionRejected, e),
    methodNotSupported: (e) =>
      Oe(we.standardErrorCodes.rpc.methodNotSupported, e),
    limitExceeded: (e) => Oe(we.standardErrorCodes.rpc.limitExceeded, e),
  },
  provider: {
    userRejectedRequest: (e) =>
      Gt(we.standardErrorCodes.provider.userRejectedRequest, e),
    unauthorized: (e) => Gt(we.standardErrorCodes.provider.unauthorized, e),
    unsupportedMethod: (e) =>
      Gt(we.standardErrorCodes.provider.unsupportedMethod, e),
    disconnected: (e) => Gt(we.standardErrorCodes.provider.disconnected, e),
    chainDisconnected: (e) =>
      Gt(we.standardErrorCodes.provider.chainDisconnected, e),
    unsupportedChain: (e) =>
      Gt(we.standardErrorCodes.provider.unsupportedChain, e),
    custom: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error(
          "Ethereum Provider custom errors must provide single object argument."
        );
      const { code: t, message: r, data: n } = e;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new wl(t, r, n);
    },
  },
};
function Oe(e, t) {
  const [r, n] = yl(t);
  return new vl(e, r || (0, bl.getMessageFromCode)(e), n);
}
function Gt(e, t) {
  const [r, n] = yl(t);
  return new wl(e, r || (0, bl.getMessageFromCode)(e), n);
}
function yl(e) {
  if (e) {
    if (typeof e == "string") return [e];
    if (typeof e == "object" && !Array.isArray(e)) {
      const { message: t, data: r } = e;
      if (t && typeof t != "string")
        throw new Error("Must specify string message.");
      return [t || void 0, r];
    }
  }
  return [];
}
let vl = class extends Error {
    constructor(t, r, n) {
      if (!Number.isInteger(t)) throw new Error('"code" must be an integer.');
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string.');
      super(r), (this.code = t), n !== void 0 && (this.data = n);
    }
  },
  wl = class extends vl {
    constructor(t, r, n) {
      if (!oh(t))
        throw new Error(
          '"code" must be an integer such that: 1000 <= code <= 4999'
        );
      super(t, r, n);
    }
  };
function oh(e) {
  return Number.isInteger(e) && e >= 1e3 && e <= 4999;
}
var Zn = {},
  _r = {};
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.isErrorResponse = void 0;
function ah(e) {
  return e.errorMessage !== void 0;
}
_r.isErrorResponse = ah;
var mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.LIB_VERSION = void 0;
mr.LIB_VERSION = "3.9.1";
Object.defineProperty(Zn, "__esModule", { value: !0 });
Zn.serializeError = void 0;
const ch = _r,
  lh = mr,
  uh = ut,
  dh = Jn;
function hh(e, t) {
  const r = (0, dh.serialize)(fh(e), { shouldIncludeStack: !0 }),
    n = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
  n.searchParams.set("version", lh.LIB_VERSION),
    n.searchParams.set("code", r.code.toString());
  const s = ph(r.data, t);
  return (
    s && n.searchParams.set("method", s),
    n.searchParams.set("message", r.message),
    Object.assign(Object.assign({}, r), { docUrl: n.href })
  );
}
Zn.serializeError = hh;
function fh(e) {
  return typeof e == "string"
    ? { message: e, code: uh.standardErrorCodes.rpc.internal }
    : (0, ch.isErrorResponse)(e)
    ? Object.assign(Object.assign({}, e), {
        message: e.errorMessage,
        code: e.errorCode,
        data: { method: e.method },
      })
    : e;
}
function ph(e, t) {
  const r = e?.method;
  if (r) return r;
  if (t !== void 0) {
    if (typeof t == "string") return t;
    if (Array.isArray(t)) {
      if (t.length > 0) return t[0].method;
    } else return t.method;
  }
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.standardErrors =
      e.standardErrorCodes =
      e.serializeError =
      e.getMessageFromCode =
      e.getErrorCode =
        void 0);
  const t = ut;
  Object.defineProperty(e, "standardErrorCodes", {
    enumerable: !0,
    get: function () {
      return t.standardErrorCodes;
    },
  });
  const r = Gn;
  Object.defineProperty(e, "standardErrors", {
    enumerable: !0,
    get: function () {
      return r.standardErrors;
    },
  });
  const n = Zn;
  Object.defineProperty(e, "serializeError", {
    enumerable: !0,
    get: function () {
      return n.serializeError;
    },
  });
  const s = Jn;
  Object.defineProperty(e, "getErrorCode", {
    enumerable: !0,
    get: function () {
      return s.getErrorCode;
    },
  }),
    Object.defineProperty(e, "getMessageFromCode", {
      enumerable: !0,
      get: function () {
        return s.getMessageFromCode;
      },
    });
})(Vr);
var _e = {};
Object.defineProperty(_e, "__esModule", { value: !0 });
_e.ProviderType =
  _e.RegExpString =
  _e.IntNumber =
  _e.BigIntString =
  _e.AddressString =
  _e.HexString =
  _e.OpaqueType =
    void 0;
function zr() {
  return (e) => e;
}
_e.OpaqueType = zr;
_e.HexString = zr();
_e.AddressString = zr();
_e.BigIntString = zr();
function gh(e) {
  return Math.floor(e);
}
_e.IntNumber = gh;
_e.RegExpString = zr();
var Ea;
(function (e) {
  (e.CoinbaseWallet = "CoinbaseWallet"),
    (e.MetaMask = "MetaMask"),
    (e.Unselected = "");
})(Ea || (_e.ProviderType = Ea = {}));
var _h =
  (F && F.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(P, "__esModule", { value: !0 });
P.isMobileWeb =
  P.getLocation =
  P.isInIFrame =
  P.createQrUrl =
  P.getFavicon =
  P.range =
  P.isBigNumber =
  P.ensureParsedJSONObject =
  P.ensureBN =
  P.ensureRegExpString =
  P.ensureIntNumber =
  P.ensureBuffer =
  P.ensureAddressString =
  P.ensureEvenLengthHexString =
  P.ensureHexString =
  P.isHexString =
  P.prepend0x =
  P.strip0x =
  P.has0xPrefix =
  P.hexStringFromIntNumber =
  P.intNumberFromHexString =
  P.bigIntStringFromBN =
  P.hexStringFromBuffer =
  P.hexStringToUint8Array =
  P.uint8ArrayToHex =
  P.randomBytesHex =
    void 0;
const _t = _h(Vn),
  Bt = Vr,
  De = _e,
  El = /^[0-9]*$/,
  Sl = /^[a-f0-9]*$/;
function mh(e) {
  return Rl(crypto.getRandomValues(new Uint8Array(e)));
}
P.randomBytesHex = mh;
function Rl(e) {
  return [...e].map((t) => t.toString(16).padStart(2, "0")).join("");
}
P.uint8ArrayToHex = Rl;
function bh(e) {
  return new Uint8Array(e.match(/.{1,2}/g).map((t) => parseInt(t, 16)));
}
P.hexStringToUint8Array = bh;
function yh(e, t = !1) {
  const r = e.toString("hex");
  return (0, De.HexString)(t ? `0x${r}` : r);
}
P.hexStringFromBuffer = yh;
function vh(e) {
  return (0, De.BigIntString)(e.toString(10));
}
P.bigIntStringFromBN = vh;
function wh(e) {
  return (0, De.IntNumber)(new _t.default(Gr(e, !1), 16).toNumber());
}
P.intNumberFromHexString = wh;
function Eh(e) {
  return (0, De.HexString)(`0x${new _t.default(e).toString(16)}`);
}
P.hexStringFromIntNumber = Eh;
function Lo(e) {
  return e.startsWith("0x") || e.startsWith("0X");
}
P.has0xPrefix = Lo;
function Kn(e) {
  return Lo(e) ? e.slice(2) : e;
}
P.strip0x = Kn;
function Cl(e) {
  return Lo(e) ? `0x${e.slice(2)}` : `0x${e}`;
}
P.prepend0x = Cl;
function qr(e) {
  if (typeof e != "string") return !1;
  const t = Kn(e).toLowerCase();
  return Sl.test(t);
}
P.isHexString = qr;
function kl(e, t = !1) {
  if (typeof e == "string") {
    const r = Kn(e).toLowerCase();
    if (Sl.test(r)) return (0, De.HexString)(t ? `0x${r}` : r);
  }
  throw Bt.standardErrors.rpc.invalidParams(
    `"${String(e)}" is not a hexadecimal string`
  );
}
P.ensureHexString = kl;
function Gr(e, t = !1) {
  let r = kl(e, !1);
  return (
    r.length % 2 === 1 && (r = (0, De.HexString)(`0${r}`)),
    t ? (0, De.HexString)(`0x${r}`) : r
  );
}
P.ensureEvenLengthHexString = Gr;
function Sh(e) {
  if (typeof e == "string") {
    const t = Kn(e).toLowerCase();
    if (qr(t) && t.length === 40) return (0, De.AddressString)(Cl(t));
  }
  throw Bt.standardErrors.rpc.invalidParams(
    `Invalid Ethereum address: ${String(e)}`
  );
}
P.ensureAddressString = Sh;
function Rh(e) {
  if (Buffer.isBuffer(e)) return e;
  if (typeof e == "string") {
    if (qr(e)) {
      const t = Gr(e, !1);
      return Buffer.from(t, "hex");
    }
    return Buffer.from(e, "utf8");
  }
  throw Bt.standardErrors.rpc.invalidParams(`Not binary data: ${String(e)}`);
}
P.ensureBuffer = Rh;
function Il(e) {
  if (typeof e == "number" && Number.isInteger(e)) return (0, De.IntNumber)(e);
  if (typeof e == "string") {
    if (El.test(e)) return (0, De.IntNumber)(Number(e));
    if (qr(e))
      return (0, De.IntNumber)(new _t.default(Gr(e, !1), 16).toNumber());
  }
  throw Bt.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`);
}
P.ensureIntNumber = Il;
function Ch(e) {
  if (e instanceof RegExp) return (0, De.RegExpString)(e.toString());
  throw Bt.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(e)}`);
}
P.ensureRegExpString = Ch;
function kh(e) {
  if (e !== null && (_t.default.isBN(e) || Al(e)))
    return new _t.default(e.toString(10), 10);
  if (typeof e == "number") return new _t.default(Il(e));
  if (typeof e == "string") {
    if (El.test(e)) return new _t.default(e, 10);
    if (qr(e)) return new _t.default(Gr(e, !1), 16);
  }
  throw Bt.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`);
}
P.ensureBN = kh;
function Ih(e) {
  if (typeof e == "string") return JSON.parse(e);
  if (typeof e == "object") return e;
  throw Bt.standardErrors.rpc.invalidParams(
    `Not a JSON string or an object: ${String(e)}`
  );
}
P.ensureParsedJSONObject = Ih;
function Al(e) {
  if (e == null || typeof e.constructor != "function") return !1;
  const { constructor: t } = e;
  return typeof t.config == "function" && typeof t.EUCLID == "number";
}
P.isBigNumber = Al;
function Ah(e, t) {
  return Array.from({ length: t - e }, (r, n) => e + n);
}
P.range = Ah;
function xh() {
  const e =
      document.querySelector('link[sizes="192x192"]') ||
      document.querySelector('link[sizes="180x180"]') ||
      document.querySelector('link[rel="icon"]') ||
      document.querySelector('link[rel="shortcut icon"]'),
    { protocol: t, host: r } = document.location,
    n = e ? e.getAttribute("href") : null;
  return !n || n.startsWith("javascript:") || n.startsWith("vbscript:")
    ? null
    : n.startsWith("http://") ||
      n.startsWith("https://") ||
      n.startsWith("data:")
    ? n
    : n.startsWith("//")
    ? t + n
    : `${t}//${r}${n}`;
}
P.getFavicon = xh;
function Th(e, t, r, n, s, i) {
  const o = n ? "parent-id" : "id",
    a = new URLSearchParams({
      [o]: e,
      secret: t,
      server: r,
      v: s,
      chainId: i.toString(),
    }).toString();
  return `${r}/#/link?${a}`;
}
P.createQrUrl = Th;
function xl() {
  try {
    return window.frameElement !== null;
  } catch {
    return !1;
  }
}
P.isInIFrame = xl;
function Nh() {
  try {
    return xl() && window.top ? window.top.location : window.location;
  } catch {
    return window.location;
  }
}
P.getLocation = Nh;
function Mh() {
  var e;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    (e = window?.navigator) === null || e === void 0 ? void 0 : e.userAgent
  );
}
P.isMobileWeb = Mh;
var Qn = {};
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.ScopedLocalStorage = void 0;
class Lh {
  constructor(t) {
    this.scope = t;
  }
  setItem(t, r) {
    localStorage.setItem(this.scopedKey(t), r);
  }
  getItem(t) {
    return localStorage.getItem(this.scopedKey(t));
  }
  removeItem(t) {
    localStorage.removeItem(this.scopedKey(t));
  }
  clear() {
    const t = this.scopedKey(""),
      r = [];
    for (let n = 0; n < localStorage.length; n++) {
      const s = localStorage.key(n);
      typeof s == "string" && s.startsWith(t) && r.push(s);
    }
    r.forEach((n) => localStorage.removeItem(n));
  }
  scopedKey(t) {
    return `${this.scope}:${t}`;
  }
}
Qn.ScopedLocalStorage = Lh;
var ar = {},
  Tl = { exports: {} };
(function (e) {
  var t = Object.prototype.hasOwnProperty,
    r = "~";
  function n() {}
  Object.create &&
    ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
  function s(c, l, d) {
    (this.fn = c), (this.context = l), (this.once = d || !1);
  }
  function i(c, l, d, u, h) {
    if (typeof d != "function")
      throw new TypeError("The listener must be a function");
    var f = new s(d, u || c, h),
      m = r ? r + l : l;
    return (
      c._events[m]
        ? c._events[m].fn
          ? (c._events[m] = [c._events[m], f])
          : c._events[m].push(f)
        : ((c._events[m] = f), c._eventsCount++),
      c
    );
  }
  function o(c, l) {
    --c._eventsCount === 0 ? (c._events = new n()) : delete c._events[l];
  }
  function a() {
    (this._events = new n()), (this._eventsCount = 0);
  }
  (a.prototype.eventNames = function () {
    var l = [],
      d,
      u;
    if (this._eventsCount === 0) return l;
    for (u in (d = this._events)) t.call(d, u) && l.push(r ? u.slice(1) : u);
    return Object.getOwnPropertySymbols
      ? l.concat(Object.getOwnPropertySymbols(d))
      : l;
  }),
    (a.prototype.listeners = function (l) {
      var d = r ? r + l : l,
        u = this._events[d];
      if (!u) return [];
      if (u.fn) return [u.fn];
      for (var h = 0, f = u.length, m = new Array(f); h < f; h++)
        m[h] = u[h].fn;
      return m;
    }),
    (a.prototype.listenerCount = function (l) {
      var d = r ? r + l : l,
        u = this._events[d];
      return u ? (u.fn ? 1 : u.length) : 0;
    }),
    (a.prototype.emit = function (l, d, u, h, f, m) {
      var S = r ? r + l : l;
      if (!this._events[S]) return !1;
      var y = this._events[S],
        p = arguments.length,
        b,
        v;
      if (y.fn) {
        switch ((y.once && this.removeListener(l, y.fn, void 0, !0), p)) {
          case 1:
            return y.fn.call(y.context), !0;
          case 2:
            return y.fn.call(y.context, d), !0;
          case 3:
            return y.fn.call(y.context, d, u), !0;
          case 4:
            return y.fn.call(y.context, d, u, h), !0;
          case 5:
            return y.fn.call(y.context, d, u, h, f), !0;
          case 6:
            return y.fn.call(y.context, d, u, h, f, m), !0;
        }
        for (v = 1, b = new Array(p - 1); v < p; v++) b[v - 1] = arguments[v];
        y.fn.apply(y.context, b);
      } else {
        var C = y.length,
          R;
        for (v = 0; v < C; v++)
          switch (
            (y[v].once && this.removeListener(l, y[v].fn, void 0, !0), p)
          ) {
            case 1:
              y[v].fn.call(y[v].context);
              break;
            case 2:
              y[v].fn.call(y[v].context, d);
              break;
            case 3:
              y[v].fn.call(y[v].context, d, u);
              break;
            case 4:
              y[v].fn.call(y[v].context, d, u, h);
              break;
            default:
              if (!b)
                for (R = 1, b = new Array(p - 1); R < p; R++)
                  b[R - 1] = arguments[R];
              y[v].fn.apply(y[v].context, b);
          }
      }
      return !0;
    }),
    (a.prototype.on = function (l, d, u) {
      return i(this, l, d, u, !1);
    }),
    (a.prototype.once = function (l, d, u) {
      return i(this, l, d, u, !0);
    }),
    (a.prototype.removeListener = function (l, d, u, h) {
      var f = r ? r + l : l;
      if (!this._events[f]) return this;
      if (!d) return o(this, f), this;
      var m = this._events[f];
      if (m.fn)
        m.fn === d && (!h || m.once) && (!u || m.context === u) && o(this, f);
      else {
        for (var S = 0, y = [], p = m.length; S < p; S++)
          (m[S].fn !== d || (h && !m[S].once) || (u && m[S].context !== u)) &&
            y.push(m[S]);
        y.length ? (this._events[f] = y.length === 1 ? y[0] : y) : o(this, f);
      }
      return this;
    }),
    (a.prototype.removeAllListeners = function (l) {
      var d;
      return (
        l
          ? ((d = r ? r + l : l), this._events[d] && o(this, d))
          : ((this._events = new n()), (this._eventsCount = 0)),
        this
      );
    }),
    (a.prototype.off = a.prototype.removeListener),
    (a.prototype.addListener = a.prototype.on),
    (a.prefixed = r),
    (a.EventEmitter = a),
    (e.exports = a);
})(Tl);
var Oh = Tl.exports,
  Jr = {},
  Zr = {},
  br = {};
Object.defineProperty(br, "__esModule", { value: !0 });
br.EVENTS = void 0;
br.EVENTS = {
  STARTED_CONNECTING: "walletlink_sdk.started.connecting",
  CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
  DISCONNECTED: "walletlink_sdk.disconnected",
  METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
  LINKED: "walletlink_sdk.linked",
  FAILURE: "walletlink_sdk.generic_failure",
  SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
  ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
  SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
  UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
  SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
  GENERAL_ERROR: "walletlink_sdk.general_error",
  WEB3_REQUEST: "walletlink_sdk.web3.request",
  WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
  WEB3_RESPONSE: "walletlink_sdk.web3.response",
  METHOD_NOT_IMPLEMENTED: "walletlink_sdk.method_not_implemented",
  UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered",
};
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.RelayAbstract =
  Be.APP_VERSION_KEY =
  Be.LOCAL_STORAGE_ADDRESSES_KEY =
  Be.WALLET_USER_NAME_KEY =
    void 0;
const Sa = Vr;
Be.WALLET_USER_NAME_KEY = "walletUsername";
Be.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
Be.APP_VERSION_KEY = "AppVersion";
class Ph {
  async makeEthereumJSONRPCRequest(t, r) {
    if (!r) throw new Error("Error: No jsonRpcUrl provided");
    return window
      .fetch(r, {
        method: "POST",
        body: JSON.stringify(t),
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      })
      .then((n) => n.json())
      .then((n) => {
        if (!n) throw Sa.standardErrors.rpc.parse({});
        const s = n,
          { error: i } = s;
        if (i) throw (0, Sa.serializeError)(i, t.method);
        return s;
      });
  }
}
Be.RelayAbstract = Ph;
var yr = {},
  Nl = { exports: {} },
  mo = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ (function (
  e,
  t
) {
  var r = Hr,
    n = r.Buffer;
  function s(o, a) {
    for (var c in o) a[c] = o[c];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
    ? (e.exports = r)
    : (s(r, t), (t.Buffer = i));
  function i(o, a, c) {
    return n(o, a, c);
  }
  (i.prototype = Object.create(n.prototype)),
    s(n, i),
    (i.from = function (o, a, c) {
      if (typeof o == "number")
        throw new TypeError("Argument must not be a number");
      return n(o, a, c);
    }),
    (i.alloc = function (o, a, c) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      var l = n(o);
      return (
        a !== void 0
          ? typeof c == "string"
            ? l.fill(a, c)
            : l.fill(a)
          : l.fill(0),
        l
      );
    }),
    (i.allocUnsafe = function (o) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      return n(o);
    }),
    (i.allocUnsafeSlow = function (o) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      return r.SlowBuffer(o);
    });
})(mo, mo.exports);
var Dt = mo.exports,
  Ml = Dt.Buffer;
function Yn(e, t) {
  (this._block = Ml.alloc(e)),
    (this._finalSize = t),
    (this._blockSize = e),
    (this._len = 0);
}
Yn.prototype.update = function (e, t) {
  typeof e == "string" && ((t = t || "utf8"), (e = Ml.from(e, t)));
  for (
    var r = this._block,
      n = this._blockSize,
      s = e.length,
      i = this._len,
      o = 0;
    o < s;

  ) {
    for (var a = i % n, c = Math.min(s - o, n - a), l = 0; l < c; l++)
      r[a + l] = e[o + l];
    (i += c), (o += c), i % n === 0 && this._update(r);
  }
  return (this._len += s), this;
};
Yn.prototype.digest = function (e) {
  var t = this._len % this._blockSize;
  (this._block[t] = 128),
    this._block.fill(0, t + 1),
    t >= this._finalSize && (this._update(this._block), this._block.fill(0));
  var r = this._len * 8;
  if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
  else {
    var n = (r & 4294967295) >>> 0,
      s = (r - n) / 4294967296;
    this._block.writeUInt32BE(s, this._blockSize - 8),
      this._block.writeUInt32BE(n, this._blockSize - 4);
  }
  this._update(this._block);
  var i = this._hash();
  return e ? i.toString(e) : i;
};
Yn.prototype._update = function () {
  throw new Error("_update must be implemented by subclass");
};
var vr = Yn,
  $h = Ve,
  Ll = vr,
  Bh = Dt.Buffer,
  Dh = [1518500249, 1859775393, -1894007588, -899497514],
  Fh = new Array(80);
function Kr() {
  this.init(), (this._w = Fh), Ll.call(this, 64, 56);
}
$h(Kr, Ll);
Kr.prototype.init = function () {
  return (
    (this._a = 1732584193),
    (this._b = 4023233417),
    (this._c = 2562383102),
    (this._d = 271733878),
    (this._e = 3285377520),
    this
  );
};
function jh(e) {
  return (e << 5) | (e >>> 27);
}
function Hh(e) {
  return (e << 30) | (e >>> 2);
}
function Uh(e, t, r, n) {
  return e === 0
    ? (t & r) | (~t & n)
    : e === 2
    ? (t & r) | (t & n) | (r & n)
    : t ^ r ^ n;
}
Kr.prototype._update = function (e) {
  for (
    var t = this._w,
      r = this._a | 0,
      n = this._b | 0,
      s = this._c | 0,
      i = this._d | 0,
      o = this._e | 0,
      a = 0;
    a < 16;
    ++a
  )
    t[a] = e.readInt32BE(a * 4);
  for (; a < 80; ++a) t[a] = t[a - 3] ^ t[a - 8] ^ t[a - 14] ^ t[a - 16];
  for (var c = 0; c < 80; ++c) {
    var l = ~~(c / 20),
      d = (jh(r) + Uh(l, n, s, i) + o + t[c] + Dh[l]) | 0;
    (o = i), (i = s), (s = Hh(n)), (n = r), (r = d);
  }
  (this._a = (r + this._a) | 0),
    (this._b = (n + this._b) | 0),
    (this._c = (s + this._c) | 0),
    (this._d = (i + this._d) | 0),
    (this._e = (o + this._e) | 0);
};
Kr.prototype._hash = function () {
  var e = Bh.allocUnsafe(20);
  return (
    e.writeInt32BE(this._a | 0, 0),
    e.writeInt32BE(this._b | 0, 4),
    e.writeInt32BE(this._c | 0, 8),
    e.writeInt32BE(this._d | 0, 12),
    e.writeInt32BE(this._e | 0, 16),
    e
  );
};
var Wh = Kr,
  Vh = Ve,
  Ol = vr,
  zh = Dt.Buffer,
  qh = [1518500249, 1859775393, -1894007588, -899497514],
  Gh = new Array(80);
function Qr() {
  this.init(), (this._w = Gh), Ol.call(this, 64, 56);
}
Vh(Qr, Ol);
Qr.prototype.init = function () {
  return (
    (this._a = 1732584193),
    (this._b = 4023233417),
    (this._c = 2562383102),
    (this._d = 271733878),
    (this._e = 3285377520),
    this
  );
};
function Jh(e) {
  return (e << 1) | (e >>> 31);
}
function Zh(e) {
  return (e << 5) | (e >>> 27);
}
function Kh(e) {
  return (e << 30) | (e >>> 2);
}
function Qh(e, t, r, n) {
  return e === 0
    ? (t & r) | (~t & n)
    : e === 2
    ? (t & r) | (t & n) | (r & n)
    : t ^ r ^ n;
}
Qr.prototype._update = function (e) {
  for (
    var t = this._w,
      r = this._a | 0,
      n = this._b | 0,
      s = this._c | 0,
      i = this._d | 0,
      o = this._e | 0,
      a = 0;
    a < 16;
    ++a
  )
    t[a] = e.readInt32BE(a * 4);
  for (; a < 80; ++a) t[a] = Jh(t[a - 3] ^ t[a - 8] ^ t[a - 14] ^ t[a - 16]);
  for (var c = 0; c < 80; ++c) {
    var l = ~~(c / 20),
      d = (Zh(r) + Qh(l, n, s, i) + o + t[c] + qh[l]) | 0;
    (o = i), (i = s), (s = Kh(n)), (n = r), (r = d);
  }
  (this._a = (r + this._a) | 0),
    (this._b = (n + this._b) | 0),
    (this._c = (s + this._c) | 0),
    (this._d = (i + this._d) | 0),
    (this._e = (o + this._e) | 0);
};
Qr.prototype._hash = function () {
  var e = zh.allocUnsafe(20);
  return (
    e.writeInt32BE(this._a | 0, 0),
    e.writeInt32BE(this._b | 0, 4),
    e.writeInt32BE(this._c | 0, 8),
    e.writeInt32BE(this._d | 0, 12),
    e.writeInt32BE(this._e | 0, 16),
    e
  );
};
var Yh = Qr,
  Xh = Ve,
  Pl = vr,
  ef = Dt.Buffer,
  tf = [
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
  ],
  rf = new Array(64);
function Yr() {
  this.init(), (this._w = rf), Pl.call(this, 64, 56);
}
Xh(Yr, Pl);
Yr.prototype.init = function () {
  return (
    (this._a = 1779033703),
    (this._b = 3144134277),
    (this._c = 1013904242),
    (this._d = 2773480762),
    (this._e = 1359893119),
    (this._f = 2600822924),
    (this._g = 528734635),
    (this._h = 1541459225),
    this
  );
};
function nf(e, t, r) {
  return r ^ (e & (t ^ r));
}
function sf(e, t, r) {
  return (e & t) | (r & (e | t));
}
function of(e) {
  return (
    ((e >>> 2) | (e << 30)) ^
    ((e >>> 13) | (e << 19)) ^
    ((e >>> 22) | (e << 10))
  );
}
function af(e) {
  return (
    ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7))
  );
}
function cf(e) {
  return ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3);
}
function lf(e) {
  return ((e >>> 17) | (e << 15)) ^ ((e >>> 19) | (e << 13)) ^ (e >>> 10);
}
Yr.prototype._update = function (e) {
  for (
    var t = this._w,
      r = this._a | 0,
      n = this._b | 0,
      s = this._c | 0,
      i = this._d | 0,
      o = this._e | 0,
      a = this._f | 0,
      c = this._g | 0,
      l = this._h | 0,
      d = 0;
    d < 16;
    ++d
  )
    t[d] = e.readInt32BE(d * 4);
  for (; d < 64; ++d)
    t[d] = (lf(t[d - 2]) + t[d - 7] + cf(t[d - 15]) + t[d - 16]) | 0;
  for (var u = 0; u < 64; ++u) {
    var h = (l + af(o) + nf(o, a, c) + tf[u] + t[u]) | 0,
      f = (of(r) + sf(r, n, s)) | 0;
    (l = c),
      (c = a),
      (a = o),
      (o = (i + h) | 0),
      (i = s),
      (s = n),
      (n = r),
      (r = (h + f) | 0);
  }
  (this._a = (r + this._a) | 0),
    (this._b = (n + this._b) | 0),
    (this._c = (s + this._c) | 0),
    (this._d = (i + this._d) | 0),
    (this._e = (o + this._e) | 0),
    (this._f = (a + this._f) | 0),
    (this._g = (c + this._g) | 0),
    (this._h = (l + this._h) | 0);
};
Yr.prototype._hash = function () {
  var e = ef.allocUnsafe(32);
  return (
    e.writeInt32BE(this._a, 0),
    e.writeInt32BE(this._b, 4),
    e.writeInt32BE(this._c, 8),
    e.writeInt32BE(this._d, 12),
    e.writeInt32BE(this._e, 16),
    e.writeInt32BE(this._f, 20),
    e.writeInt32BE(this._g, 24),
    e.writeInt32BE(this._h, 28),
    e
  );
};
var $l = Yr,
  uf = Ve,
  df = $l,
  hf = vr,
  ff = Dt.Buffer,
  pf = new Array(64);
function Xn() {
  this.init(), (this._w = pf), hf.call(this, 64, 56);
}
uf(Xn, df);
Xn.prototype.init = function () {
  return (
    (this._a = 3238371032),
    (this._b = 914150663),
    (this._c = 812702999),
    (this._d = 4144912697),
    (this._e = 4290775857),
    (this._f = 1750603025),
    (this._g = 1694076839),
    (this._h = 3204075428),
    this
  );
};
Xn.prototype._hash = function () {
  var e = ff.allocUnsafe(28);
  return (
    e.writeInt32BE(this._a, 0),
    e.writeInt32BE(this._b, 4),
    e.writeInt32BE(this._c, 8),
    e.writeInt32BE(this._d, 12),
    e.writeInt32BE(this._e, 16),
    e.writeInt32BE(this._f, 20),
    e.writeInt32BE(this._g, 24),
    e
  );
};
var gf = Xn,
  _f = Ve,
  Bl = vr,
  mf = Dt.Buffer,
  Ra = [
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
  ],
  bf = new Array(160);
function Xr() {
  this.init(), (this._w = bf), Bl.call(this, 128, 112);
}
_f(Xr, Bl);
Xr.prototype.init = function () {
  return (
    (this._ah = 1779033703),
    (this._bh = 3144134277),
    (this._ch = 1013904242),
    (this._dh = 2773480762),
    (this._eh = 1359893119),
    (this._fh = 2600822924),
    (this._gh = 528734635),
    (this._hh = 1541459225),
    (this._al = 4089235720),
    (this._bl = 2227873595),
    (this._cl = 4271175723),
    (this._dl = 1595750129),
    (this._el = 2917565137),
    (this._fl = 725511199),
    (this._gl = 4215389547),
    (this._hl = 327033209),
    this
  );
};
function Ca(e, t, r) {
  return r ^ (e & (t ^ r));
}
function ka(e, t, r) {
  return (e & t) | (r & (e | t));
}
function Ia(e, t) {
  return (
    ((e >>> 28) | (t << 4)) ^ ((t >>> 2) | (e << 30)) ^ ((t >>> 7) | (e << 25))
  );
}
function Aa(e, t) {
  return (
    ((e >>> 14) | (t << 18)) ^
    ((e >>> 18) | (t << 14)) ^
    ((t >>> 9) | (e << 23))
  );
}
function yf(e, t) {
  return ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ (e >>> 7);
}
function vf(e, t) {
  return (
    ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ ((e >>> 7) | (t << 25))
  );
}
function wf(e, t) {
  return ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ (e >>> 6);
}
function Ef(e, t) {
  return (
    ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ ((e >>> 6) | (t << 26))
  );
}
function be(e, t) {
  return e >>> 0 < t >>> 0 ? 1 : 0;
}
Xr.prototype._update = function (e) {
  for (
    var t = this._w,
      r = this._ah | 0,
      n = this._bh | 0,
      s = this._ch | 0,
      i = this._dh | 0,
      o = this._eh | 0,
      a = this._fh | 0,
      c = this._gh | 0,
      l = this._hh | 0,
      d = this._al | 0,
      u = this._bl | 0,
      h = this._cl | 0,
      f = this._dl | 0,
      m = this._el | 0,
      S = this._fl | 0,
      y = this._gl | 0,
      p = this._hl | 0,
      b = 0;
    b < 32;
    b += 2
  )
    (t[b] = e.readInt32BE(b * 4)), (t[b + 1] = e.readInt32BE(b * 4 + 4));
  for (; b < 160; b += 2) {
    var v = t[b - 30],
      C = t[b - 15 * 2 + 1],
      R = yf(v, C),
      I = vf(C, v);
    (v = t[b - 2 * 2]), (C = t[b - 2 * 2 + 1]);
    var j = wf(v, C),
      $ = Ef(C, v),
      N = t[b - 7 * 2],
      G = t[b - 7 * 2 + 1],
      le = t[b - 16 * 2],
      se = t[b - 16 * 2 + 1],
      T = (I + G) | 0,
      x = (R + N + be(T, I)) | 0;
    (T = (T + $) | 0),
      (x = (x + j + be(T, $)) | 0),
      (T = (T + se) | 0),
      (x = (x + le + be(T, se)) | 0),
      (t[b] = x),
      (t[b + 1] = T);
  }
  for (var O = 0; O < 160; O += 2) {
    (x = t[O]), (T = t[O + 1]);
    var D = ka(r, n, s),
      B = ka(d, u, h),
      L = Ia(r, d),
      H = Ia(d, r),
      J = Aa(o, m),
      W = Aa(m, o),
      Q = Ra[O],
      ie = Ra[O + 1],
      re = Ca(o, a, c),
      Ce = Ca(m, S, y),
      w = (p + W) | 0,
      E = (l + J + be(w, p)) | 0;
    (w = (w + Ce) | 0),
      (E = (E + re + be(w, Ce)) | 0),
      (w = (w + ie) | 0),
      (E = (E + Q + be(w, ie)) | 0),
      (w = (w + T) | 0),
      (E = (E + x + be(w, T)) | 0);
    var A = (H + B) | 0,
      U = (L + D + be(A, H)) | 0;
    (l = c),
      (p = y),
      (c = a),
      (y = S),
      (a = o),
      (S = m),
      (m = (f + w) | 0),
      (o = (i + E + be(m, f)) | 0),
      (i = s),
      (f = h),
      (s = n),
      (h = u),
      (n = r),
      (u = d),
      (d = (w + A) | 0),
      (r = (E + U + be(d, w)) | 0);
  }
  (this._al = (this._al + d) | 0),
    (this._bl = (this._bl + u) | 0),
    (this._cl = (this._cl + h) | 0),
    (this._dl = (this._dl + f) | 0),
    (this._el = (this._el + m) | 0),
    (this._fl = (this._fl + S) | 0),
    (this._gl = (this._gl + y) | 0),
    (this._hl = (this._hl + p) | 0),
    (this._ah = (this._ah + r + be(this._al, d)) | 0),
    (this._bh = (this._bh + n + be(this._bl, u)) | 0),
    (this._ch = (this._ch + s + be(this._cl, h)) | 0),
    (this._dh = (this._dh + i + be(this._dl, f)) | 0),
    (this._eh = (this._eh + o + be(this._el, m)) | 0),
    (this._fh = (this._fh + a + be(this._fl, S)) | 0),
    (this._gh = (this._gh + c + be(this._gl, y)) | 0),
    (this._hh = (this._hh + l + be(this._hl, p)) | 0);
};
Xr.prototype._hash = function () {
  var e = mf.allocUnsafe(64);
  function t(r, n, s) {
    e.writeInt32BE(r, s), e.writeInt32BE(n, s + 4);
  }
  return (
    t(this._ah, this._al, 0),
    t(this._bh, this._bl, 8),
    t(this._ch, this._cl, 16),
    t(this._dh, this._dl, 24),
    t(this._eh, this._el, 32),
    t(this._fh, this._fl, 40),
    t(this._gh, this._gl, 48),
    t(this._hh, this._hl, 56),
    e
  );
};
var Dl = Xr,
  Sf = Ve,
  Rf = Dl,
  Cf = vr,
  kf = Dt.Buffer,
  If = new Array(160);
function es() {
  this.init(), (this._w = If), Cf.call(this, 128, 112);
}
Sf(es, Rf);
es.prototype.init = function () {
  return (
    (this._ah = 3418070365),
    (this._bh = 1654270250),
    (this._ch = 2438529370),
    (this._dh = 355462360),
    (this._eh = 1731405415),
    (this._fh = 2394180231),
    (this._gh = 3675008525),
    (this._hh = 1203062813),
    (this._al = 3238371032),
    (this._bl = 914150663),
    (this._cl = 812702999),
    (this._dl = 4144912697),
    (this._el = 4290775857),
    (this._fl = 1750603025),
    (this._gl = 1694076839),
    (this._hl = 3204075428),
    this
  );
};
es.prototype._hash = function () {
  var e = kf.allocUnsafe(48);
  function t(r, n, s) {
    e.writeInt32BE(r, s), e.writeInt32BE(n, s + 4);
  }
  return (
    t(this._ah, this._al, 0),
    t(this._bh, this._bl, 8),
    t(this._ch, this._cl, 16),
    t(this._dh, this._dl, 24),
    t(this._eh, this._el, 32),
    t(this._fh, this._fl, 40),
    e
  );
};
var Af = es,
  Ft = (Nl.exports = function (t) {
    t = t.toLowerCase();
    var r = Ft[t];
    if (!r) throw new Error(t + " is not supported (we accept pull requests)");
    return new r();
  });
Ft.sha = Wh;
Ft.sha1 = Yh;
Ft.sha224 = gf;
Ft.sha256 = $l;
Ft.sha384 = Af;
Ft.sha512 = Dl;
var xf = Nl.exports;
Object.defineProperty(yr, "__esModule", { value: !0 });
yr.Session = void 0;
const xa = xf,
  Ta = P,
  Na = "session:id",
  Ma = "session:secret",
  La = "session:linked";
class Oo {
  constructor(t, r, n, s) {
    (this._storage = t),
      (this._id = r || (0, Ta.randomBytesHex)(16)),
      (this._secret = n || (0, Ta.randomBytesHex)(32)),
      (this._key = new xa.sha256()
        .update(`${this._id}, ${this._secret} WalletLink`)
        .digest("hex")),
      (this._linked = !!s);
  }
  static load(t) {
    const r = t.getItem(Na),
      n = t.getItem(La),
      s = t.getItem(Ma);
    return r && s ? new Oo(t, r, s, n === "1") : null;
  }
  static hash(t) {
    return new xa.sha256().update(t).digest("hex");
  }
  get id() {
    return this._id;
  }
  get secret() {
    return this._secret;
  }
  get key() {
    return this._key;
  }
  get linked() {
    return this._linked;
  }
  set linked(t) {
    (this._linked = t), this.persistLinked();
  }
  save() {
    return (
      this._storage.setItem(Na, this._id),
      this._storage.setItem(Ma, this._secret),
      this.persistLinked(),
      this
    );
  }
  persistLinked() {
    this._storage.setItem(La, this._linked ? "1" : "0");
  }
}
yr.Session = Oo;
var ts = {},
  rs = {};
Object.defineProperty(rs, "__esModule", { value: !0 });
rs.Cipher = void 0;
const bn = P;
class Tf {
  constructor(t) {
    this.secret = t;
  }
  async encrypt(t) {
    const r = this.secret;
    if (r.length !== 64) throw Error("secret must be 256 bits");
    const n = crypto.getRandomValues(new Uint8Array(12)),
      s = await crypto.subtle.importKey(
        "raw",
        (0, bn.hexStringToUint8Array)(r),
        { name: "aes-gcm" },
        !1,
        ["encrypt", "decrypt"]
      ),
      i = new TextEncoder(),
      o = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv: n },
        s,
        i.encode(t)
      ),
      a = 16,
      c = o.slice(o.byteLength - a),
      l = o.slice(0, o.byteLength - a),
      d = new Uint8Array(c),
      u = new Uint8Array(l),
      h = new Uint8Array([...n, ...d, ...u]);
    return (0, bn.uint8ArrayToHex)(h);
  }
  async decrypt(t) {
    const r = this.secret;
    if (r.length !== 64) throw Error("secret must be 256 bits");
    return new Promise((n, s) => {
      (async function () {
        const i = await crypto.subtle.importKey(
            "raw",
            (0, bn.hexStringToUint8Array)(r),
            { name: "aes-gcm" },
            !1,
            ["encrypt", "decrypt"]
          ),
          o = (0, bn.hexStringToUint8Array)(t),
          a = o.slice(0, 12),
          c = o.slice(12, 28),
          l = o.slice(28),
          d = new Uint8Array([...l, ...c]),
          u = { name: "AES-GCM", iv: new Uint8Array(a) };
        try {
          const h = await window.crypto.subtle.decrypt(u, i, d),
            f = new TextDecoder();
          n(f.decode(h));
        } catch (h) {
          s(h);
        }
      })();
    });
  }
}
rs.Cipher = Tf;
var ns = {};
Object.defineProperty(ns, "__esModule", { value: !0 });
ns.WalletLinkHTTP = void 0;
class Nf {
  constructor(t, r, n) {
    (this.linkAPIUrl = t), (this.sessionId = r);
    const s = `${r}:${n}`;
    this.auth = `Basic ${btoa(s)}`;
  }
  async markUnseenEventsAsSeen(t) {
    return Promise.all(
      t.map((r) =>
        fetch(`${this.linkAPIUrl}/events/${r.eventId}/seen`, {
          method: "POST",
          headers: { Authorization: this.auth },
        })
      )
    ).catch((r) => console.error("Unabled to mark event as failed:", r));
  }
  async fetchUnseenEvents() {
    var t;
    const r = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
      headers: { Authorization: this.auth },
    });
    if (r.ok) {
      const { events: n, error: s } = await r.json();
      if (s) throw new Error(`Check unseen events failed: ${s}`);
      const i =
        (t = n
          ?.filter((o) => o.event === "Web3Response")
          .map((o) => ({
            type: "Event",
            sessionId: this.sessionId,
            eventId: o.id,
            event: o.event,
            data: o.data,
          }))) !== null && t !== void 0
          ? t
          : [];
      return this.markUnseenEventsAsSeen(i), i;
    }
    throw new Error(`Check unseen events failed: ${r.status}`);
  }
}
ns.WalletLinkHTTP = Nf;
var cr = {};
Object.defineProperty(cr, "__esModule", { value: !0 });
cr.WalletLinkWebSocket = cr.ConnectionState = void 0;
var tr;
(function (e) {
  (e[(e.DISCONNECTED = 0)] = "DISCONNECTED"),
    (e[(e.CONNECTING = 1)] = "CONNECTING"),
    (e[(e.CONNECTED = 2)] = "CONNECTED");
})(tr || (cr.ConnectionState = tr = {}));
class Mf {
  setConnectionStateListener(t) {
    this.connectionStateListener = t;
  }
  setIncomingDataListener(t) {
    this.incomingDataListener = t;
  }
  constructor(t, r = WebSocket) {
    (this.WebSocketClass = r),
      (this.webSocket = null),
      (this.pendingData = []),
      (this.url = t.replace(/^http/, "ws"));
  }
  async connect() {
    if (this.webSocket) throw new Error("webSocket object is not null");
    return new Promise((t, r) => {
      var n;
      let s;
      try {
        this.webSocket = s = new this.WebSocketClass(this.url);
      } catch (i) {
        r(i);
        return;
      }
      (n = this.connectionStateListener) === null ||
        n === void 0 ||
        n.call(this, tr.CONNECTING),
        (s.onclose = (i) => {
          var o;
          this.clearWebSocket(),
            r(new Error(`websocket error ${i.code}: ${i.reason}`)),
            (o = this.connectionStateListener) === null ||
              o === void 0 ||
              o.call(this, tr.DISCONNECTED);
        }),
        (s.onopen = (i) => {
          var o;
          t(),
            (o = this.connectionStateListener) === null ||
              o === void 0 ||
              o.call(this, tr.CONNECTED),
            this.pendingData.length > 0 &&
              ([...this.pendingData].forEach((c) => this.sendData(c)),
              (this.pendingData = []));
        }),
        (s.onmessage = (i) => {
          var o, a;
          if (i.data === "h")
            (o = this.incomingDataListener) === null ||
              o === void 0 ||
              o.call(this, { type: "Heartbeat" });
          else
            try {
              const c = JSON.parse(i.data);
              (a = this.incomingDataListener) === null ||
                a === void 0 ||
                a.call(this, c);
            } catch {}
        });
    });
  }
  disconnect() {
    var t;
    const { webSocket: r } = this;
    if (r) {
      this.clearWebSocket(),
        (t = this.connectionStateListener) === null ||
          t === void 0 ||
          t.call(this, tr.DISCONNECTED),
        (this.connectionStateListener = void 0),
        (this.incomingDataListener = void 0);
      try {
        r.close();
      } catch {}
    }
  }
  sendData(t) {
    const { webSocket: r } = this;
    if (!r) {
      this.pendingData.push(t), this.connect();
      return;
    }
    r.send(t);
  }
  clearWebSocket() {
    const { webSocket: t } = this;
    t &&
      ((this.webSocket = null),
      (t.onclose = null),
      (t.onerror = null),
      (t.onmessage = null),
      (t.onopen = null));
  }
}
cr.WalletLinkWebSocket = Mf;
Object.defineProperty(ts, "__esModule", { value: !0 });
ts.WalletLinkConnection = void 0;
const Jt = _e,
  Lf = rs,
  Je = br,
  Oa = Be,
  Zt = yr,
  Of = ns,
  yn = cr,
  Pa = 1e4,
  Pf = 6e4;
class $f {
  constructor({
    session: t,
    linkAPIUrl: r,
    listener: n,
    diagnostic: s,
    WebSocketClass: i = WebSocket,
  }) {
    (this.destroyed = !1),
      (this.lastHeartbeatResponse = 0),
      (this.nextReqId = (0, Jt.IntNumber)(1)),
      (this._connected = !1),
      (this._linked = !1),
      (this.shouldFetchUnseenEventsOnConnect = !1),
      (this.requestResolutions = new Map()),
      (this.handleSessionMetadataUpdated = (a) => {
        if (!a) return;
        new Map([
          ["__destroyed", this.handleDestroyed],
          ["EthereumAddress", this.handleAccountUpdated],
          ["WalletUsername", this.handleWalletUsernameUpdated],
          ["AppVersion", this.handleAppVersionUpdated],
          [
            "ChainId",
            (l) => a.JsonRpcUrl && this.handleChainUpdated(l, a.JsonRpcUrl),
          ],
        ]).forEach((l, d) => {
          const u = a[d];
          u !== void 0 && l(u);
        });
      }),
      (this.handleDestroyed = (a) => {
        var c, l;
        a === "1" &&
          ((c = this.listener) === null || c === void 0 || c.resetAndReload(),
          (l = this.diagnostic) === null ||
            l === void 0 ||
            l.log(Je.EVENTS.METADATA_DESTROYED, {
              alreadyDestroyed: this.isDestroyed,
              sessionIdHash: Zt.Session.hash(this.session.id),
            }));
      }),
      (this.handleAccountUpdated = async (a) => {
        var c, l;
        try {
          const d = await this.cipher.decrypt(a);
          (c = this.listener) === null || c === void 0 || c.accountUpdated(d);
        } catch {
          (l = this.diagnostic) === null ||
            l === void 0 ||
            l.log(Je.EVENTS.GENERAL_ERROR, {
              message: "Had error decrypting",
              value: "selectedAddress",
            });
        }
      }),
      (this.handleMetadataUpdated = async (a, c) => {
        var l, d;
        try {
          const u = await this.cipher.decrypt(c);
          (l = this.listener) === null ||
            l === void 0 ||
            l.metadataUpdated(a, u);
        } catch {
          (d = this.diagnostic) === null ||
            d === void 0 ||
            d.log(Je.EVENTS.GENERAL_ERROR, {
              message: "Had error decrypting",
              value: a,
            });
        }
      }),
      (this.handleWalletUsernameUpdated = async (a) => {
        this.handleMetadataUpdated(Oa.WALLET_USER_NAME_KEY, a);
      }),
      (this.handleAppVersionUpdated = async (a) => {
        this.handleMetadataUpdated(Oa.APP_VERSION_KEY, a);
      }),
      (this.handleChainUpdated = async (a, c) => {
        var l, d;
        try {
          const u = await this.cipher.decrypt(a),
            h = await this.cipher.decrypt(c);
          (l = this.listener) === null || l === void 0 || l.chainUpdated(u, h);
        } catch {
          (d = this.diagnostic) === null ||
            d === void 0 ||
            d.log(Je.EVENTS.GENERAL_ERROR, {
              message: "Had error decrypting",
              value: "chainId|jsonRpcUrl",
            });
        }
      }),
      (this.session = t),
      (this.cipher = new Lf.Cipher(t.secret)),
      (this.diagnostic = s),
      (this.listener = n);
    const o = new yn.WalletLinkWebSocket(`${r}/rpc`, i);
    o.setConnectionStateListener(async (a) => {
      var c;
      (c = this.diagnostic) === null ||
        c === void 0 ||
        c.log(Je.EVENTS.CONNECTED_STATE_CHANGE, {
          state: a,
          sessionIdHash: Zt.Session.hash(t.id),
        });
      let l = !1;
      switch (a) {
        case yn.ConnectionState.DISCONNECTED:
          if (!this.destroyed) {
            const d = async () => {
              await new Promise((u) => setTimeout(u, 5e3)),
                this.destroyed ||
                  o.connect().catch(() => {
                    d();
                  });
            };
            d();
          }
          break;
        case yn.ConnectionState.CONNECTED:
          try {
            await this.authenticate(),
              this.sendIsLinked(),
              this.sendGetSessionConfig(),
              (l = !0);
          } catch {}
          this.updateLastHeartbeat(),
            setInterval(() => {
              this.heartbeat();
            }, Pa),
            this.shouldFetchUnseenEventsOnConnect &&
              this.fetchUnseenEventsAPI();
          break;
        case yn.ConnectionState.CONNECTING:
          break;
      }
      this.connected !== l && (this.connected = l);
    }),
      o.setIncomingDataListener((a) => {
        var c, l, d;
        switch (a.type) {
          case "Heartbeat":
            this.updateLastHeartbeat();
            return;
          case "IsLinkedOK":
          case "Linked": {
            const u = a.type === "IsLinkedOK" ? a.linked : void 0;
            (c = this.diagnostic) === null ||
              c === void 0 ||
              c.log(Je.EVENTS.LINKED, {
                sessionIdHash: Zt.Session.hash(t.id),
                linked: u,
                type: a.type,
                onlineGuests: a.onlineGuests,
              }),
              (this.linked = u || a.onlineGuests > 0);
            break;
          }
          case "GetSessionConfigOK":
          case "SessionConfigUpdated": {
            (l = this.diagnostic) === null ||
              l === void 0 ||
              l.log(Je.EVENTS.SESSION_CONFIG_RECEIVED, {
                sessionIdHash: Zt.Session.hash(t.id),
                metadata_keys:
                  a && a.metadata ? Object.keys(a.metadata) : void 0,
              }),
              this.handleSessionMetadataUpdated(a.metadata);
            break;
          }
          case "Event": {
            this.handleIncomingEvent(a);
            break;
          }
        }
        a.id !== void 0 &&
          ((d = this.requestResolutions.get(a.id)) === null ||
            d === void 0 ||
            d(a));
      }),
      (this.ws = o),
      (this.http = new Of.WalletLinkHTTP(r, t.id, t.key));
  }
  connect() {
    var t;
    if (this.destroyed) throw new Error("instance is destroyed");
    (t = this.diagnostic) === null ||
      t === void 0 ||
      t.log(Je.EVENTS.STARTED_CONNECTING, {
        sessionIdHash: Zt.Session.hash(this.session.id),
      }),
      this.ws.connect();
  }
  destroy() {
    var t;
    (this.destroyed = !0),
      this.ws.disconnect(),
      (t = this.diagnostic) === null ||
        t === void 0 ||
        t.log(Je.EVENTS.DISCONNECTED, {
          sessionIdHash: Zt.Session.hash(this.session.id),
        }),
      (this.listener = void 0);
  }
  get isDestroyed() {
    return this.destroyed;
  }
  get connected() {
    return this._connected;
  }
  set connected(t) {
    var r, n;
    (this._connected = t),
      t && ((r = this.onceConnected) === null || r === void 0 || r.call(this)),
      (n = this.listener) === null || n === void 0 || n.connectedUpdated(t);
  }
  setOnceConnected(t) {
    return new Promise((r) => {
      this.connected
        ? t().then(r)
        : (this.onceConnected = () => {
            t().then(r), (this.onceConnected = void 0);
          });
    });
  }
  get linked() {
    return this._linked;
  }
  set linked(t) {
    var r, n;
    (this._linked = t),
      t && ((r = this.onceLinked) === null || r === void 0 || r.call(this)),
      (n = this.listener) === null || n === void 0 || n.linkedUpdated(t);
  }
  setOnceLinked(t) {
    return new Promise((r) => {
      this.linked
        ? t().then(r)
        : (this.onceLinked = () => {
            t().then(r), (this.onceLinked = void 0);
          });
    });
  }
  async handleIncomingEvent(t) {
    var r, n;
    if (!(t.type !== "Event" || t.event !== "Web3Response"))
      try {
        const s = await this.cipher.decrypt(t.data),
          i = JSON.parse(s);
        if (i.type !== "WEB3_RESPONSE") return;
        (r = this.listener) === null ||
          r === void 0 ||
          r.handleWeb3ResponseMessage(i);
      } catch {
        (n = this.diagnostic) === null ||
          n === void 0 ||
          n.log(Je.EVENTS.GENERAL_ERROR, {
            message: "Had error decrypting",
            value: "incomingEvent",
          });
      }
  }
  async checkUnseenEvents() {
    if (!this.connected) {
      this.shouldFetchUnseenEventsOnConnect = !0;
      return;
    }
    await new Promise((t) => setTimeout(t, 250));
    try {
      await this.fetchUnseenEventsAPI();
    } catch (t) {
      console.error("Unable to check for unseen events", t);
    }
  }
  async fetchUnseenEventsAPI() {
    (this.shouldFetchUnseenEventsOnConnect = !1),
      (await this.http.fetchUnseenEvents()).forEach((r) =>
        this.handleIncomingEvent(r)
      );
  }
  async setSessionMetadata(t, r) {
    const n = {
      type: "SetSessionConfig",
      id: (0, Jt.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
      metadata: { [t]: r },
    };
    return this.setOnceConnected(async () => {
      const s = await this.makeRequest(n);
      if (s.type === "Fail")
        throw new Error(s.error || "failed to set session metadata");
    });
  }
  async publishEvent(t, r, n = !1) {
    const s = await this.cipher.encrypt(
        JSON.stringify(
          Object.assign(Object.assign({}, r), {
            origin: location.origin,
            relaySource: window.coinbaseWalletExtension
              ? "injected_sdk"
              : "sdk",
          })
        )
      ),
      i = {
        type: "PublishEvent",
        id: (0, Jt.IntNumber)(this.nextReqId++),
        sessionId: this.session.id,
        event: t,
        data: s,
        callWebhook: n,
      };
    return this.setOnceLinked(async () => {
      const o = await this.makeRequest(i);
      if (o.type === "Fail")
        throw new Error(o.error || "failed to publish event");
      return o.eventId;
    });
  }
  sendData(t) {
    this.ws.sendData(JSON.stringify(t));
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now();
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > Pa * 2) {
      this.ws.disconnect();
      return;
    }
    try {
      this.ws.sendData("h");
    } catch {}
  }
  async makeRequest(t, r = Pf) {
    const n = t.id;
    this.sendData(t);
    let s;
    return Promise.race([
      new Promise((i, o) => {
        s = window.setTimeout(() => {
          o(new Error(`request ${n} timed out`));
        }, r);
      }),
      new Promise((i) => {
        this.requestResolutions.set(n, (o) => {
          clearTimeout(s), i(o), this.requestResolutions.delete(n);
        });
      }),
    ]);
  }
  async authenticate() {
    const t = {
        type: "HostSession",
        id: (0, Jt.IntNumber)(this.nextReqId++),
        sessionId: this.session.id,
        sessionKey: this.session.key,
      },
      r = await this.makeRequest(t);
    if (r.type === "Fail") throw new Error(r.error || "failed to authentcate");
  }
  sendIsLinked() {
    const t = {
      type: "IsLinked",
      id: (0, Jt.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
    };
    this.sendData(t);
  }
  sendGetSessionConfig() {
    const t = {
      type: "GetSessionConfig",
      id: (0, Jt.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
    };
    this.sendData(t);
  }
}
ts.WalletLinkConnection = $f;
var en = {},
  tn = {},
  Po = {};
Object.defineProperty(Po, "__esModule", { value: !0 });
Po.default = (() =>
  '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}')();
var Bf =
  (F && F.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(tn, "__esModule", { value: !0 });
tn.injectCssReset = void 0;
const Df = Bf(Po);
function Ff() {
  const e = document.createElement("style");
  (e.type = "text/css"),
    e.appendChild(document.createTextNode(Df.default)),
    document.documentElement.appendChild(e);
}
tn.injectCssReset = Ff;
var ss = {},
  rn,
  ae,
  Fl,
  jl,
  Ct,
  $a,
  Hl,
  bo,
  Ul,
  Br = {},
  Wl = [],
  jf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  is = Array.isArray;
function lt(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function Vl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function yo(e, t, r) {
  var n,
    s,
    i,
    o = {};
  for (i in t)
    i == "key" ? (n = t[i]) : i == "ref" ? (s = t[i]) : (o[i] = t[i]);
  if (
    (arguments.length > 2 &&
      (o.children = arguments.length > 3 ? rn.call(arguments, 2) : r),
    typeof e == "function" && e.defaultProps != null)
  )
    for (i in e.defaultProps) o[i] === void 0 && (o[i] = e.defaultProps[i]);
  return Mr(e, o, n, s, null);
}
function Mr(e, t, r, n, s) {
  var i = {
    type: e,
    props: t,
    key: r,
    ref: n,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: s ?? ++Fl,
    __i: -1,
    __u: 0,
  };
  return s == null && ae.vnode != null && ae.vnode(i), i;
}
function Hf() {
  return { current: null };
}
function nn(e) {
  return e.children;
}
function Lr(e, t) {
  (this.props = e), (this.context = t);
}
function Lt(e, t) {
  if (t == null) return e.__ ? Lt(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? Lt(e) : null;
}
function zl(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return zl(e);
  }
}
function vo(e) {
  ((!e.__d && (e.__d = !0) && Ct.push(e) && !Bn.__r++) ||
    $a !== ae.debounceRendering) &&
    (($a = ae.debounceRendering) || Hl)(Bn);
}
function Bn() {
  var e, t, r, n, s, i, o, a, c;
  for (Ct.sort(bo); (e = Ct.shift()); )
    e.__d &&
      ((t = Ct.length),
      (n = void 0),
      (i = (s = (r = e).__v).__e),
      (a = []),
      (c = []),
      (o = r.__P) &&
        (((n = lt({}, s)).__v = s.__v + 1),
        ae.vnode && ae.vnode(n),
        $o(
          o,
          n,
          s,
          r.__n,
          o.ownerSVGElement !== void 0,
          32 & s.__u ? [i] : null,
          a,
          i ?? Lt(s),
          !!(32 & s.__u),
          c
        ),
        (n.__v = s.__v),
        (n.__.__k[n.__i] = n),
        Zl(a, n, c),
        n.__e != i && zl(n)),
      Ct.length > t && Ct.sort(bo));
  Bn.__r = 0;
}
function ql(e, t, r, n, s, i, o, a, c, l, d) {
  var u,
    h,
    f,
    m,
    S,
    y = (n && n.__k) || Wl,
    p = t.length;
  for (r.__d = c, Uf(r, t, y), c = r.__d, u = 0; u < p; u++)
    (f = r.__k[u]) != null &&
      typeof f != "boolean" &&
      typeof f != "function" &&
      ((h = f.__i === -1 ? Br : y[f.__i] || Br),
      (f.__i = u),
      $o(e, f, h, s, i, o, a, c, l, d),
      (m = f.__e),
      f.ref &&
        h.ref != f.ref &&
        (h.ref && Bo(h.ref, null, f), d.push(f.ref, f.__c || m, f)),
      S == null && m != null && (S = m),
      65536 & f.__u || h.__k === f.__k
        ? (m || h.__e != c || (c = Lt(h)), (c = Gl(f, c, e)))
        : typeof f.type == "function" && f.__d !== void 0
        ? (c = f.__d)
        : m && (c = m.nextSibling),
      (f.__d = void 0),
      (f.__u &= -196609));
  (r.__d = c), (r.__e = S);
}
function Uf(e, t, r) {
  var n,
    s,
    i,
    o,
    a,
    c = t.length,
    l = r.length,
    d = l,
    u = 0;
  for (e.__k = [], n = 0; n < c; n++)
    (o = n + u),
      (s = e.__k[n] =
        (s = t[n]) == null || typeof s == "boolean" || typeof s == "function"
          ? null
          : typeof s == "string" ||
            typeof s == "number" ||
            typeof s == "bigint" ||
            s.constructor == String
          ? Mr(null, s, null, null, null)
          : is(s)
          ? Mr(nn, { children: s }, null, null, null)
          : s.constructor === void 0 && s.__b > 0
          ? Mr(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v)
          : s) != null
        ? ((s.__ = e),
          (s.__b = e.__b + 1),
          (a = Wf(s, r, o, d)),
          (s.__i = a),
          (i = null),
          a !== -1 && (d--, (i = r[a]) && (i.__u |= 131072)),
          i == null || i.__v === null
            ? (a == -1 && u--, typeof s.type != "function" && (s.__u |= 65536))
            : a !== o &&
              (a === o + 1
                ? u++
                : a > o
                ? d > c - o
                  ? (u += a - o)
                  : u--
                : a < o
                ? a == o - 1 && (u = a - o)
                : (u = 0),
              a !== n + u && (s.__u |= 65536)))
        : (i = r[o]) &&
          i.key == null &&
          i.__e &&
          !(131072 & i.__u) &&
          (i.__e == e.__d && (e.__d = Lt(i)), wo(i, i, !1), (r[o] = null), d--);
  if (d)
    for (n = 0; n < l; n++)
      (i = r[n]) != null &&
        !(131072 & i.__u) &&
        (i.__e == e.__d && (e.__d = Lt(i)), wo(i, i));
}
function Gl(e, t, r) {
  var n, s;
  if (typeof e.type == "function") {
    for (n = e.__k, s = 0; n && s < n.length; s++)
      n[s] && ((n[s].__ = e), (t = Gl(n[s], t, r)));
    return t;
  }
  e.__e != t && (r.insertBefore(e.__e, t || null), (t = e.__e));
  do t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function Jl(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == "boolean" ||
      (is(e)
        ? e.some(function (r) {
            Jl(r, t);
          })
        : t.push(e)),
    t
  );
}
function Wf(e, t, r, n) {
  var s = e.key,
    i = e.type,
    o = r - 1,
    a = r + 1,
    c = t[r];
  if (c === null || (c && s == c.key && i === c.type && !(131072 & c.__u)))
    return r;
  if (n > (c != null && !(131072 & c.__u) ? 1 : 0))
    for (; o >= 0 || a < t.length; ) {
      if (o >= 0) {
        if ((c = t[o]) && !(131072 & c.__u) && s == c.key && i === c.type)
          return o;
        o--;
      }
      if (a < t.length) {
        if ((c = t[a]) && !(131072 & c.__u) && s == c.key && i === c.type)
          return a;
        a++;
      }
    }
  return -1;
}
function Ba(e, t, r) {
  t[0] === "-"
    ? e.setProperty(t, r ?? "")
    : (e[t] =
        r == null ? "" : typeof r != "number" || jf.test(t) ? r : r + "px");
}
function vn(e, t, r, n, s) {
  var i;
  e: if (t === "style")
    if (typeof r == "string") e.style.cssText = r;
    else {
      if ((typeof n == "string" && (e.style.cssText = n = ""), n))
        for (t in n) (r && t in r) || Ba(e.style, t, "");
      if (r) for (t in r) (n && r[t] === n[t]) || Ba(e.style, t, r[t]);
    }
  else if (t[0] === "o" && t[1] === "n")
    (i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
      (t =
        t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn"
          ? t.toLowerCase().slice(2)
          : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + i] = r),
      r
        ? n
          ? (r.u = n.u)
          : ((r.u = Date.now()), e.addEventListener(t, i ? Fa : Da, i))
        : e.removeEventListener(t, i ? Fa : Da, i);
  else {
    if (s) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      t !== "width" &&
      t !== "height" &&
      t !== "href" &&
      t !== "list" &&
      t !== "form" &&
      t !== "tabIndex" &&
      t !== "download" &&
      t !== "rowSpan" &&
      t !== "colSpan" &&
      t !== "role" &&
      t in e
    )
      try {
        e[t] = r ?? "";
        break e;
      } catch {}
    typeof r == "function" ||
      (r == null || (r === !1 && t[4] !== "-")
        ? e.removeAttribute(t)
        : e.setAttribute(t, r));
  }
}
function Da(e) {
  if (this.l) {
    var t = this.l[e.type + !1];
    if (e.t) {
      if (e.t <= t.u) return;
    } else e.t = Date.now();
    return t(ae.event ? ae.event(e) : e);
  }
}
function Fa(e) {
  if (this.l) return this.l[e.type + !0](ae.event ? ae.event(e) : e);
}
function $o(e, t, r, n, s, i, o, a, c, l) {
  var d,
    u,
    h,
    f,
    m,
    S,
    y,
    p,
    b,
    v,
    C,
    R,
    I,
    j,
    $,
    N = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && ((c = !!(32 & r.__u)), (i = [(a = t.__e = r.__e)])),
    (d = ae.__b) && d(t);
  e: if (typeof N == "function")
    try {
      if (
        ((p = t.props),
        (b = (d = N.contextType) && n[d.__c]),
        (v = d ? (b ? b.props.value : d.__) : n),
        r.__c
          ? (y = (u = t.__c = r.__c).__ = u.__E)
          : ("prototype" in N && N.prototype.render
              ? (t.__c = u = new N(p, v))
              : ((t.__c = u = new Lr(p, v)),
                (u.constructor = N),
                (u.render = zf)),
            b && b.sub(u),
            (u.props = p),
            u.state || (u.state = {}),
            (u.context = v),
            (u.__n = n),
            (h = u.__d = !0),
            (u.__h = []),
            (u._sb = [])),
        u.__s == null && (u.__s = u.state),
        N.getDerivedStateFromProps != null &&
          (u.__s == u.state && (u.__s = lt({}, u.__s)),
          lt(u.__s, N.getDerivedStateFromProps(p, u.__s))),
        (f = u.props),
        (m = u.state),
        (u.__v = t),
        h)
      )
        N.getDerivedStateFromProps == null &&
          u.componentWillMount != null &&
          u.componentWillMount(),
          u.componentDidMount != null && u.__h.push(u.componentDidMount);
      else {
        if (
          (N.getDerivedStateFromProps == null &&
            p !== f &&
            u.componentWillReceiveProps != null &&
            u.componentWillReceiveProps(p, v),
          !u.__e &&
            ((u.shouldComponentUpdate != null &&
              u.shouldComponentUpdate(p, u.__s, v) === !1) ||
              t.__v === r.__v))
        ) {
          for (
            t.__v !== r.__v && ((u.props = p), (u.state = u.__s), (u.__d = !1)),
              t.__e = r.__e,
              t.__k = r.__k,
              t.__k.forEach(function (G) {
                G && (G.__ = t);
              }),
              C = 0;
            C < u._sb.length;
            C++
          )
            u.__h.push(u._sb[C]);
          (u._sb = []), u.__h.length && o.push(u);
          break e;
        }
        u.componentWillUpdate != null && u.componentWillUpdate(p, u.__s, v),
          u.componentDidUpdate != null &&
            u.__h.push(function () {
              u.componentDidUpdate(f, m, S);
            });
      }
      if (
        ((u.context = v),
        (u.props = p),
        (u.__P = e),
        (u.__e = !1),
        (R = ae.__r),
        (I = 0),
        "prototype" in N && N.prototype.render)
      ) {
        for (
          u.state = u.__s,
            u.__d = !1,
            R && R(t),
            d = u.render(u.props, u.state, u.context),
            j = 0;
          j < u._sb.length;
          j++
        )
          u.__h.push(u._sb[j]);
        u._sb = [];
      } else
        do
          (u.__d = !1),
            R && R(t),
            (d = u.render(u.props, u.state, u.context)),
            (u.state = u.__s);
        while (u.__d && ++I < 25);
      (u.state = u.__s),
        u.getChildContext != null && (n = lt(lt({}, n), u.getChildContext())),
        h ||
          u.getSnapshotBeforeUpdate == null ||
          (S = u.getSnapshotBeforeUpdate(f, m)),
        ql(
          e,
          is(
            ($ =
              d != null && d.type === nn && d.key == null
                ? d.props.children
                : d)
          )
            ? $
            : [$],
          t,
          r,
          n,
          s,
          i,
          o,
          a,
          c,
          l
        ),
        (u.base = t.__e),
        (t.__u &= -161),
        u.__h.length && o.push(u),
        y && (u.__E = u.__ = null);
    } catch (G) {
      (t.__v = null),
        c || i != null
          ? ((t.__e = a), (t.__u |= c ? 160 : 32), (i[i.indexOf(a)] = null))
          : ((t.__e = r.__e), (t.__k = r.__k)),
        ae.__e(G, t, r);
    }
  else
    i == null && t.__v === r.__v
      ? ((t.__k = r.__k), (t.__e = r.__e))
      : (t.__e = Vf(r.__e, t, r, n, s, i, o, c, l));
  (d = ae.diffed) && d(t);
}
function Zl(e, t, r) {
  t.__d = void 0;
  for (var n = 0; n < r.length; n++) Bo(r[n], r[++n], r[++n]);
  ae.__c && ae.__c(t, e),
    e.some(function (s) {
      try {
        (e = s.__h),
          (s.__h = []),
          e.some(function (i) {
            i.call(s);
          });
      } catch (i) {
        ae.__e(i, s.__v);
      }
    });
}
function Vf(e, t, r, n, s, i, o, a, c) {
  var l,
    d,
    u,
    h,
    f,
    m,
    S,
    y = r.props,
    p = t.props,
    b = t.type;
  if ((b === "svg" && (s = !0), i != null)) {
    for (l = 0; l < i.length; l++)
      if (
        (f = i[l]) &&
        "setAttribute" in f == !!b &&
        (b ? f.localName === b : f.nodeType === 3)
      ) {
        (e = f), (i[l] = null);
        break;
      }
  }
  if (e == null) {
    if (b === null) return document.createTextNode(p);
    (e = s
      ? document.createElementNS("http://www.w3.org/2000/svg", b)
      : document.createElement(b, p.is && p)),
      (i = null),
      (a = !1);
  }
  if (b === null) y === p || (a && e.data === p) || (e.data = p);
  else {
    if (
      ((i = i && rn.call(e.childNodes)), (y = r.props || Br), !a && i != null)
    )
      for (y = {}, l = 0; l < e.attributes.length; l++)
        y[(f = e.attributes[l]).name] = f.value;
    for (l in y)
      (f = y[l]),
        l == "children" ||
          (l == "dangerouslySetInnerHTML"
            ? (u = f)
            : l === "key" || l in p || vn(e, l, null, f, s));
    for (l in p)
      (f = p[l]),
        l == "children"
          ? (h = f)
          : l == "dangerouslySetInnerHTML"
          ? (d = f)
          : l == "value"
          ? (m = f)
          : l == "checked"
          ? (S = f)
          : l === "key" ||
            (a && typeof f != "function") ||
            y[l] === f ||
            vn(e, l, f, y[l], s);
    if (d)
      a ||
        (u && (d.__html === u.__html || d.__html === e.innerHTML)) ||
        (e.innerHTML = d.__html),
        (t.__k = []);
    else if (
      (u && (e.innerHTML = ""),
      ql(
        e,
        is(h) ? h : [h],
        t,
        r,
        n,
        s && b !== "foreignObject",
        i,
        o,
        i ? i[0] : r.__k && Lt(r, 0),
        a,
        c
      ),
      i != null)
    )
      for (l = i.length; l--; ) i[l] != null && Vl(i[l]);
    a ||
      ((l = "value"),
      m !== void 0 &&
        (m !== e[l] ||
          (b === "progress" && !m) ||
          (b === "option" && m !== y[l])) &&
        vn(e, l, m, y[l], !1),
      (l = "checked"),
      S !== void 0 && S !== e[l] && vn(e, l, S, y[l], !1));
  }
  return e;
}
function Bo(e, t, r) {
  try {
    typeof e == "function" ? e(t) : (e.current = t);
  } catch (n) {
    ae.__e(n, r);
  }
}
function wo(e, t, r) {
  var n, s;
  if (
    (ae.unmount && ae.unmount(e),
    (n = e.ref) && ((n.current && n.current !== e.__e) || Bo(n, null, t)),
    (n = e.__c) != null)
  ) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (i) {
        ae.__e(i, t);
      }
    (n.base = n.__P = null), (e.__c = void 0);
  }
  if ((n = e.__k))
    for (s = 0; s < n.length; s++)
      n[s] && wo(n[s], t, r || typeof e.type != "function");
  r || e.__e == null || Vl(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function zf(e, t, r) {
  return this.constructor(e, r);
}
function Kl(e, t, r) {
  var n, s, i, o;
  ae.__ && ae.__(e, t),
    (s = (n = typeof r == "function") ? null : (r && r.__k) || t.__k),
    (i = []),
    (o = []),
    $o(
      t,
      (e = ((!n && r) || t).__k = yo(nn, null, [e])),
      s || Br,
      Br,
      t.ownerSVGElement !== void 0,
      !n && r ? [r] : s ? null : t.firstChild ? rn.call(t.childNodes) : null,
      i,
      !n && r ? r : s ? s.__e : t.firstChild,
      n,
      o
    ),
    Zl(i, e, o);
}
function Ql(e, t) {
  Kl(e, t, Ql);
}
function qf(e, t, r) {
  var n,
    s,
    i,
    o,
    a = lt({}, e.props);
  for (i in (e.type && e.type.defaultProps && (o = e.type.defaultProps), t))
    i == "key"
      ? (n = t[i])
      : i == "ref"
      ? (s = t[i])
      : (a[i] = t[i] === void 0 && o !== void 0 ? o[i] : t[i]);
  return (
    arguments.length > 2 &&
      (a.children = arguments.length > 3 ? rn.call(arguments, 2) : r),
    Mr(e.type, a, n || e.key, s || e.ref, null)
  );
}
function Gf(e, t) {
  var r = {
    __c: (t = "__cC" + Ul++),
    __: e,
    Consumer: function (n, s) {
      return n.children(s);
    },
    Provider: function (n) {
      var s, i;
      return (
        this.getChildContext ||
          ((s = []),
          ((i = {})[t] = this),
          (this.getChildContext = function () {
            return i;
          }),
          (this.shouldComponentUpdate = function (o) {
            this.props.value !== o.value &&
              s.some(function (a) {
                (a.__e = !0), vo(a);
              });
          }),
          (this.sub = function (o) {
            s.push(o);
            var a = o.componentWillUnmount;
            o.componentWillUnmount = function () {
              s.splice(s.indexOf(o), 1), a && a.call(o);
            };
          })),
        n.children
      );
    },
  };
  return (r.Provider.__ = r.Consumer.contextType = r);
}
(rn = Wl.slice),
  (ae = {
    __e: function (e, t, r, n) {
      for (var s, i, o; (t = t.__); )
        if ((s = t.__c) && !s.__)
          try {
            if (
              ((i = s.constructor) &&
                i.getDerivedStateFromError != null &&
                (s.setState(i.getDerivedStateFromError(e)), (o = s.__d)),
              s.componentDidCatch != null &&
                (s.componentDidCatch(e, n || {}), (o = s.__d)),
              o)
            )
              return (s.__E = s);
          } catch (a) {
            e = a;
          }
      throw e;
    },
  }),
  (Fl = 0),
  (jl = function (e) {
    return e != null && e.constructor == null;
  }),
  (Lr.prototype.setState = function (e, t) {
    var r;
    (r =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = lt({}, this.state))),
      typeof e == "function" && (e = e(lt({}, r), this.props)),
      e && lt(r, e),
      e != null && this.__v && (t && this._sb.push(t), vo(this));
  }),
  (Lr.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), vo(this));
  }),
  (Lr.prototype.render = nn),
  (Ct = []),
  (Hl =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (bo = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (Bn.__r = 0),
  (Ul = 0);
const Jf = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Component: Lr,
        Fragment: nn,
        cloneElement: qf,
        createContext: Gf,
        createElement: yo,
        createRef: Hf,
        h: yo,
        hydrate: Ql,
        get isValidElement() {
          return jl;
        },
        get options() {
          return ae;
        },
        render: Kl,
        toChildArray: Jl,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  xe = Ur(Jf);
var os = {};
const sn = Ur(rh);
var dt,
  oe,
  Di,
  ja,
  lr = 0,
  Yl = [],
  Ln = [],
  he = ae,
  Ha = he.__b,
  Ua = he.__r,
  Wa = he.diffed,
  Va = he.__c,
  za = he.unmount,
  qa = he.__;
function jt(e, t) {
  he.__h && he.__h(oe, e, lr || t), (lr = 0);
  var r = oe.__H || (oe.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: Ln }), r.__[e];
}
function Xl(e) {
  return (lr = 1), eu(ru, e);
}
function eu(e, t, r) {
  var n = jt(dt++, 2);
  if (
    ((n.t = e),
    !n.__c &&
      ((n.__ = [
        r ? r(t) : ru(void 0, t),
        function (a) {
          var c = n.__N ? n.__N[0] : n.__[0],
            l = n.t(c, a);
          c !== l && ((n.__N = [l, n.__[1]]), n.__c.setState({}));
        },
      ]),
      (n.__c = oe),
      !oe.u))
  ) {
    var s = function (a, c, l) {
      if (!n.__c.__H) return !0;
      var d = n.__c.__H.__.filter(function (h) {
        return !!h.__c;
      });
      if (
        d.every(function (h) {
          return !h.__N;
        })
      )
        return !i || i.call(this, a, c, l);
      var u = !1;
      return (
        d.forEach(function (h) {
          if (h.__N) {
            var f = h.__[0];
            (h.__ = h.__N), (h.__N = void 0), f !== h.__[0] && (u = !0);
          }
        }),
        !(!u && n.__c.props === a) && (!i || i.call(this, a, c, l))
      );
    };
    oe.u = !0;
    var i = oe.shouldComponentUpdate,
      o = oe.componentWillUpdate;
    (oe.componentWillUpdate = function (a, c, l) {
      if (this.__e) {
        var d = i;
        (i = void 0), s(a, c, l), (i = d);
      }
      o && o.call(this, a, c, l);
    }),
      (oe.shouldComponentUpdate = s);
  }
  return n.__N || n.__;
}
function Zf(e, t) {
  var r = jt(dt++, 3);
  !he.__s && Fo(r.__H, t) && ((r.__ = e), (r.i = t), oe.__H.__h.push(r));
}
function tu(e, t) {
  var r = jt(dt++, 4);
  !he.__s && Fo(r.__H, t) && ((r.__ = e), (r.i = t), oe.__h.push(r));
}
function Kf(e) {
  return (
    (lr = 5),
    Do(function () {
      return { current: e };
    }, [])
  );
}
function Qf(e, t, r) {
  (lr = 6),
    tu(
      function () {
        return typeof e == "function"
          ? (e(t()),
            function () {
              return e(null);
            })
          : e
          ? ((e.current = t()),
            function () {
              return (e.current = null);
            })
          : void 0;
      },
      r == null ? r : r.concat(e)
    );
}
function Do(e, t) {
  var r = jt(dt++, 7);
  return Fo(r.__H, t) ? ((r.__V = e()), (r.i = t), (r.__h = e), r.__V) : r.__;
}
function Yf(e, t) {
  return (
    (lr = 8),
    Do(function () {
      return e;
    }, t)
  );
}
function Xf(e) {
  var t = oe.context[e.__c],
    r = jt(dt++, 9);
  return (
    (r.c = e),
    t ? (r.__ == null && ((r.__ = !0), t.sub(oe)), t.props.value) : e.__
  );
}
function e0(e, t) {
  he.useDebugValue && he.useDebugValue(t ? t(e) : e);
}
function t0(e) {
  var t = jt(dt++, 10),
    r = Xl();
  return (
    (t.__ = e),
    oe.componentDidCatch ||
      (oe.componentDidCatch = function (n, s) {
        t.__ && t.__(n, s), r[1](n);
      }),
    [
      r[0],
      function () {
        r[1](void 0);
      },
    ]
  );
}
function r0() {
  var e = jt(dt++, 11);
  if (!e.__) {
    for (var t = oe.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function n0() {
  for (var e; (e = Yl.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(On), e.__H.__h.forEach(Eo), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), he.__e(t, e.__v);
      }
}
(he.__b = function (e) {
  (oe = null), Ha && Ha(e);
}),
  (he.__ = function (e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), qa && qa(e, t);
  }),
  (he.__r = function (e) {
    Ua && Ua(e), (dt = 0);
    var t = (oe = e.__c).__H;
    t &&
      (Di === oe
        ? ((t.__h = []),
          (oe.__h = []),
          t.__.forEach(function (r) {
            r.__N && (r.__ = r.__N), (r.__V = Ln), (r.__N = r.i = void 0);
          }))
        : (t.__h.forEach(On), t.__h.forEach(Eo), (t.__h = []), (dt = 0))),
      (Di = oe);
  }),
  (he.diffed = function (e) {
    Wa && Wa(e);
    var t = e.__c;
    t &&
      t.__H &&
      (t.__H.__h.length &&
        ((Yl.push(t) !== 1 && ja === he.requestAnimationFrame) ||
          ((ja = he.requestAnimationFrame) || s0)(n0)),
      t.__H.__.forEach(function (r) {
        r.i && (r.__H = r.i),
          r.__V !== Ln && (r.__ = r.__V),
          (r.i = void 0),
          (r.__V = Ln);
      })),
      (Di = oe = null);
  }),
  (he.__c = function (e, t) {
    t.some(function (r) {
      try {
        r.__h.forEach(On),
          (r.__h = r.__h.filter(function (n) {
            return !n.__ || Eo(n);
          }));
      } catch (n) {
        t.some(function (s) {
          s.__h && (s.__h = []);
        }),
          (t = []),
          he.__e(n, r.__v);
      }
    }),
      Va && Va(e, t);
  }),
  (he.unmount = function (e) {
    za && za(e);
    var t,
      r = e.__c;
    r &&
      r.__H &&
      (r.__H.__.forEach(function (n) {
        try {
          On(n);
        } catch (s) {
          t = s;
        }
      }),
      (r.__H = void 0),
      t && he.__e(t, r.__v));
  });
var Ga = typeof requestAnimationFrame == "function";
function s0(e) {
  var t,
    r = function () {
      clearTimeout(n), Ga && cancelAnimationFrame(t), setTimeout(e);
    },
    n = setTimeout(r, 100);
  Ga && (t = requestAnimationFrame(r));
}
function On(e) {
  var t = oe,
    r = e.__c;
  typeof r == "function" && ((e.__c = void 0), r()), (oe = t);
}
function Eo(e) {
  var t = oe;
  (e.__c = e.__()), (oe = t);
}
function Fo(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (r, n) {
      return r !== e[n];
    })
  );
}
function ru(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const i0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        useCallback: Yf,
        useContext: Xf,
        useDebugValue: e0,
        useEffect: Zf,
        useErrorBoundary: t0,
        useId: r0,
        useImperativeHandle: Qf,
        useLayoutEffect: tu,
        useMemo: Do,
        useReducer: eu,
        useRef: Kf,
        useState: Xl,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  as = Ur(i0);
var ur = {},
  cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.CloseIcon = void 0;
const Ja = xe;
function o0(e) {
  return (0, Ja.h)(
    "svg",
    Object.assign(
      {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, Ja.h)("path", {
      d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z",
    })
  );
}
cs.CloseIcon = o0;
var ls = {};
Object.defineProperty(ls, "__esModule", { value: !0 });
ls.CoinbaseWalletRound = void 0;
const wn = xe;
function a0(e) {
  return (0, wn.h)(
    "svg",
    Object.assign(
      {
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, wn.h)("circle", { cx: "14", cy: "14", r: "14", fill: "#0052FF" }),
    (0, wn.h)("path", {
      d: "M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z",
      fill: "white",
    }),
    (0, wn.h)("path", {
      d: "M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z",
      fill: "#0052FF",
    })
  );
}
ls.CoinbaseWalletRound = a0;
var us = {};
Object.defineProperty(us, "__esModule", { value: !0 });
us.QRCodeIcon = void 0;
const Ir = xe;
function c0(e) {
  return (0, Ir.h)(
    "svg",
    Object.assign(
      {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, Ir.h)("path", { d: "M3 3V8.99939L5 8.99996V5H9V3H3Z" }),
    (0, Ir.h)("path", { d: "M15 21L21 21V15.0006L19 15V19L15 19V21Z" }),
    (0, Ir.h)("path", { d: "M21 9H19V5H15.0006L15 3H21V9Z" }),
    (0, Ir.h)("path", { d: "M3 15V21H8.99939L8.99996 19H5L5 15H3Z" })
  );
}
us.QRCodeIcon = c0;
var ds = {};
function nu(e) {
  (this.mode = Me.MODE_8BIT_BYTE), (this.data = e), (this.parsedData = []);
  for (var t = 0, r = this.data.length; t < r; t++) {
    var n = [],
      s = this.data.charCodeAt(t);
    s > 65536
      ? ((n[0] = 240 | ((s & 1835008) >>> 18)),
        (n[1] = 128 | ((s & 258048) >>> 12)),
        (n[2] = 128 | ((s & 4032) >>> 6)),
        (n[3] = 128 | (s & 63)))
      : s > 2048
      ? ((n[0] = 224 | ((s & 61440) >>> 12)),
        (n[1] = 128 | ((s & 4032) >>> 6)),
        (n[2] = 128 | (s & 63)))
      : s > 128
      ? ((n[0] = 192 | ((s & 1984) >>> 6)), (n[1] = 128 | (s & 63)))
      : (n[0] = s),
      this.parsedData.push(n);
  }
  (this.parsedData = Array.prototype.concat.apply([], this.parsedData)),
    this.parsedData.length != this.data.length &&
      (this.parsedData.unshift(191),
      this.parsedData.unshift(187),
      this.parsedData.unshift(239));
}
nu.prototype = {
  getLength: function (e) {
    return this.parsedData.length;
  },
  write: function (e) {
    for (var t = 0, r = this.parsedData.length; t < r; t++)
      e.put(this.parsedData[t], 8);
  },
};
function et(e, t) {
  (this.typeNumber = e),
    (this.errorCorrectLevel = t),
    (this.modules = null),
    (this.moduleCount = 0),
    (this.dataCache = null),
    (this.dataList = []);
}
et.prototype = {
  addData: function (e) {
    var t = new nu(e);
    this.dataList.push(t), (this.dataCache = null);
  },
  isDark: function (e, t) {
    if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
      throw new Error(e + "," + t);
    return this.modules[e][t];
  },
  getModuleCount: function () {
    return this.moduleCount;
  },
  make: function () {
    this.makeImpl(!1, this.getBestMaskPattern());
  },
  makeImpl: function (e, t) {
    (this.moduleCount = this.typeNumber * 4 + 17),
      (this.modules = new Array(this.moduleCount));
    for (var r = 0; r < this.moduleCount; r++) {
      this.modules[r] = new Array(this.moduleCount);
      for (var n = 0; n < this.moduleCount; n++) this.modules[r][n] = null;
    }
    this.setupPositionProbePattern(0, 0),
      this.setupPositionProbePattern(this.moduleCount - 7, 0),
      this.setupPositionProbePattern(0, this.moduleCount - 7),
      this.setupPositionAdjustPattern(),
      this.setupTimingPattern(),
      this.setupTypeInfo(e, t),
      this.typeNumber >= 7 && this.setupTypeNumber(e),
      this.dataCache == null &&
        (this.dataCache = et.createData(
          this.typeNumber,
          this.errorCorrectLevel,
          this.dataList
        )),
      this.mapData(this.dataCache, t);
  },
  setupPositionProbePattern: function (e, t) {
    for (var r = -1; r <= 7; r++)
      if (!(e + r <= -1 || this.moduleCount <= e + r))
        for (var n = -1; n <= 7; n++)
          t + n <= -1 ||
            this.moduleCount <= t + n ||
            ((0 <= r && r <= 6 && (n == 0 || n == 6)) ||
            (0 <= n && n <= 6 && (r == 0 || r == 6)) ||
            (2 <= r && r <= 4 && 2 <= n && n <= 4)
              ? (this.modules[e + r][t + n] = !0)
              : (this.modules[e + r][t + n] = !1));
  },
  getBestMaskPattern: function () {
    for (var e = 0, t = 0, r = 0; r < 8; r++) {
      this.makeImpl(!0, r);
      var n = de.getLostPoint(this);
      (r == 0 || e > n) && ((e = n), (t = r));
    }
    return t;
  },
  createMovieClip: function (e, t, r) {
    var n = e.createEmptyMovieClip(t, r),
      s = 1;
    this.make();
    for (var i = 0; i < this.modules.length; i++)
      for (var o = i * s, a = 0; a < this.modules[i].length; a++) {
        var c = a * s,
          l = this.modules[i][a];
        l &&
          (n.beginFill(0, 100),
          n.moveTo(c, o),
          n.lineTo(c + s, o),
          n.lineTo(c + s, o + s),
          n.lineTo(c, o + s),
          n.endFill());
      }
    return n;
  },
  setupTimingPattern: function () {
    for (var e = 8; e < this.moduleCount - 8; e++)
      this.modules[e][6] == null && (this.modules[e][6] = e % 2 == 0);
    for (var t = 8; t < this.moduleCount - 8; t++)
      this.modules[6][t] == null && (this.modules[6][t] = t % 2 == 0);
  },
  setupPositionAdjustPattern: function () {
    for (
      var e = de.getPatternPosition(this.typeNumber), t = 0;
      t < e.length;
      t++
    )
      for (var r = 0; r < e.length; r++) {
        var n = e[t],
          s = e[r];
        if (this.modules[n][s] == null)
          for (var i = -2; i <= 2; i++)
            for (var o = -2; o <= 2; o++)
              i == -2 || i == 2 || o == -2 || o == 2 || (i == 0 && o == 0)
                ? (this.modules[n + i][s + o] = !0)
                : (this.modules[n + i][s + o] = !1);
      }
  },
  setupTypeNumber: function (e) {
    for (var t = de.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
      var n = !e && ((t >> r) & 1) == 1;
      this.modules[Math.floor(r / 3)][(r % 3) + this.moduleCount - 8 - 3] = n;
    }
    for (var r = 0; r < 18; r++) {
      var n = !e && ((t >> r) & 1) == 1;
      this.modules[(r % 3) + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n;
    }
  },
  setupTypeInfo: function (e, t) {
    for (
      var r = (this.errorCorrectLevel << 3) | t,
        n = de.getBCHTypeInfo(r),
        s = 0;
      s < 15;
      s++
    ) {
      var i = !e && ((n >> s) & 1) == 1;
      s < 6
        ? (this.modules[s][8] = i)
        : s < 8
        ? (this.modules[s + 1][8] = i)
        : (this.modules[this.moduleCount - 15 + s][8] = i);
    }
    for (var s = 0; s < 15; s++) {
      var i = !e && ((n >> s) & 1) == 1;
      s < 8
        ? (this.modules[8][this.moduleCount - s - 1] = i)
        : s < 9
        ? (this.modules[8][15 - s - 1 + 1] = i)
        : (this.modules[8][15 - s - 1] = i);
    }
    this.modules[this.moduleCount - 8][8] = !e;
  },
  mapData: function (e, t) {
    for (
      var r = -1,
        n = this.moduleCount - 1,
        s = 7,
        i = 0,
        o = this.moduleCount - 1;
      o > 0;
      o -= 2
    )
      for (o == 6 && o--; ; ) {
        for (var a = 0; a < 2; a++)
          if (this.modules[n][o - a] == null) {
            var c = !1;
            i < e.length && (c = ((e[i] >>> s) & 1) == 1);
            var l = de.getMask(t, n, o - a);
            l && (c = !c),
              (this.modules[n][o - a] = c),
              s--,
              s == -1 && (i++, (s = 7));
          }
        if (((n += r), n < 0 || this.moduleCount <= n)) {
          (n -= r), (r = -r);
          break;
        }
      }
  },
};
et.PAD0 = 236;
et.PAD1 = 17;
et.createData = function (e, t, r) {
  for (var n = Xe.getRSBlocks(e, t), s = new su(), i = 0; i < r.length; i++) {
    var o = r[i];
    s.put(o.mode, 4),
      s.put(o.getLength(), de.getLengthInBits(o.mode, e)),
      o.write(s);
  }
  for (var a = 0, i = 0; i < n.length; i++) a += n[i].dataCount;
  if (s.getLengthInBits() > a * 8)
    throw new Error(
      "code length overflow. (" + s.getLengthInBits() + ">" + a * 8 + ")"
    );
  for (
    s.getLengthInBits() + 4 <= a * 8 && s.put(0, 4);
    s.getLengthInBits() % 8 != 0;

  )
    s.putBit(!1);
  for (
    ;
    !(
      s.getLengthInBits() >= a * 8 ||
      (s.put(et.PAD0, 8), s.getLengthInBits() >= a * 8)
    );

  )
    s.put(et.PAD1, 8);
  return et.createBytes(s, n);
};
et.createBytes = function (e, t) {
  for (
    var r = 0,
      n = 0,
      s = 0,
      i = new Array(t.length),
      o = new Array(t.length),
      a = 0;
    a < t.length;
    a++
  ) {
    var c = t[a].dataCount,
      l = t[a].totalCount - c;
    (n = Math.max(n, c)), (s = Math.max(s, l)), (i[a] = new Array(c));
    for (var d = 0; d < i[a].length; d++) i[a][d] = 255 & e.buffer[d + r];
    r += c;
    var u = de.getErrorCorrectPolynomial(l),
      h = new rr(i[a], u.getLength() - 1),
      f = h.mod(u);
    o[a] = new Array(u.getLength() - 1);
    for (var d = 0; d < o[a].length; d++) {
      var m = d + f.getLength() - o[a].length;
      o[a][d] = m >= 0 ? f.get(m) : 0;
    }
  }
  for (var S = 0, d = 0; d < t.length; d++) S += t[d].totalCount;
  for (var y = new Array(S), p = 0, d = 0; d < n; d++)
    for (var a = 0; a < t.length; a++) d < i[a].length && (y[p++] = i[a][d]);
  for (var d = 0; d < s; d++)
    for (var a = 0; a < t.length; a++) d < o[a].length && (y[p++] = o[a][d]);
  return y;
};
var Me = {
    MODE_NUMBER: 1,
    MODE_ALPHA_NUM: 2,
    MODE_8BIT_BYTE: 4,
    MODE_KANJI: 8,
  },
  mt = { L: 1, M: 0, Q: 3, H: 2 },
  pt = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7,
  },
  de = {
    PATTERN_POSITION_TABLE: [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170],
    ],
    G15: 1335,
    G18: 7973,
    G15_MASK: 21522,
    getBCHTypeInfo: function (e) {
      for (var t = e << 10; de.getBCHDigit(t) - de.getBCHDigit(de.G15) >= 0; )
        t ^= de.G15 << (de.getBCHDigit(t) - de.getBCHDigit(de.G15));
      return ((e << 10) | t) ^ de.G15_MASK;
    },
    getBCHTypeNumber: function (e) {
      for (var t = e << 12; de.getBCHDigit(t) - de.getBCHDigit(de.G18) >= 0; )
        t ^= de.G18 << (de.getBCHDigit(t) - de.getBCHDigit(de.G18));
      return (e << 12) | t;
    },
    getBCHDigit: function (e) {
      for (var t = 0; e != 0; ) t++, (e >>>= 1);
      return t;
    },
    getPatternPosition: function (e) {
      return de.PATTERN_POSITION_TABLE[e - 1];
    },
    getMask: function (e, t, r) {
      switch (e) {
        case pt.PATTERN000:
          return (t + r) % 2 == 0;
        case pt.PATTERN001:
          return t % 2 == 0;
        case pt.PATTERN010:
          return r % 3 == 0;
        case pt.PATTERN011:
          return (t + r) % 3 == 0;
        case pt.PATTERN100:
          return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
        case pt.PATTERN101:
          return ((t * r) % 2) + ((t * r) % 3) == 0;
        case pt.PATTERN110:
          return (((t * r) % 2) + ((t * r) % 3)) % 2 == 0;
        case pt.PATTERN111:
          return (((t * r) % 3) + ((t + r) % 2)) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + e);
      }
    },
    getErrorCorrectPolynomial: function (e) {
      for (var t = new rr([1], 0), r = 0; r < e; r++)
        t = t.multiply(new rr([1, ve.gexp(r)], 0));
      return t;
    },
    getLengthInBits: function (e, t) {
      if (1 <= t && t < 10)
        switch (e) {
          case Me.MODE_NUMBER:
            return 10;
          case Me.MODE_ALPHA_NUM:
            return 9;
          case Me.MODE_8BIT_BYTE:
            return 8;
          case Me.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + e);
        }
      else if (t < 27)
        switch (e) {
          case Me.MODE_NUMBER:
            return 12;
          case Me.MODE_ALPHA_NUM:
            return 11;
          case Me.MODE_8BIT_BYTE:
            return 16;
          case Me.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + e);
        }
      else if (t < 41)
        switch (e) {
          case Me.MODE_NUMBER:
            return 14;
          case Me.MODE_ALPHA_NUM:
            return 13;
          case Me.MODE_8BIT_BYTE:
            return 16;
          case Me.MODE_KANJI:
            return 12;
          default:
            throw new Error("mode:" + e);
        }
      else throw new Error("type:" + t);
    },
    getLostPoint: function (e) {
      for (var t = e.getModuleCount(), r = 0, n = 0; n < t; n++)
        for (var s = 0; s < t; s++) {
          for (var i = 0, o = e.isDark(n, s), a = -1; a <= 1; a++)
            if (!(n + a < 0 || t <= n + a))
              for (var c = -1; c <= 1; c++)
                s + c < 0 ||
                  t <= s + c ||
                  (a == 0 && c == 0) ||
                  (o == e.isDark(n + a, s + c) && i++);
          i > 5 && (r += 3 + i - 5);
        }
      for (var n = 0; n < t - 1; n++)
        for (var s = 0; s < t - 1; s++) {
          var l = 0;
          e.isDark(n, s) && l++,
            e.isDark(n + 1, s) && l++,
            e.isDark(n, s + 1) && l++,
            e.isDark(n + 1, s + 1) && l++,
            (l == 0 || l == 4) && (r += 3);
        }
      for (var n = 0; n < t; n++)
        for (var s = 0; s < t - 6; s++)
          e.isDark(n, s) &&
            !e.isDark(n, s + 1) &&
            e.isDark(n, s + 2) &&
            e.isDark(n, s + 3) &&
            e.isDark(n, s + 4) &&
            !e.isDark(n, s + 5) &&
            e.isDark(n, s + 6) &&
            (r += 40);
      for (var s = 0; s < t; s++)
        for (var n = 0; n < t - 6; n++)
          e.isDark(n, s) &&
            !e.isDark(n + 1, s) &&
            e.isDark(n + 2, s) &&
            e.isDark(n + 3, s) &&
            e.isDark(n + 4, s) &&
            !e.isDark(n + 5, s) &&
            e.isDark(n + 6, s) &&
            (r += 40);
      for (var d = 0, s = 0; s < t; s++)
        for (var n = 0; n < t; n++) e.isDark(n, s) && d++;
      var u = Math.abs((100 * d) / t / t - 50) / 5;
      return (r += u * 10), r;
    },
  },
  ve = {
    glog: function (e) {
      if (e < 1) throw new Error("glog(" + e + ")");
      return ve.LOG_TABLE[e];
    },
    gexp: function (e) {
      for (; e < 0; ) e += 255;
      for (; e >= 256; ) e -= 255;
      return ve.EXP_TABLE[e];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256),
  };
for (var Ee = 0; Ee < 8; Ee++) ve.EXP_TABLE[Ee] = 1 << Ee;
for (var Ee = 8; Ee < 256; Ee++)
  ve.EXP_TABLE[Ee] =
    ve.EXP_TABLE[Ee - 4] ^
    ve.EXP_TABLE[Ee - 5] ^
    ve.EXP_TABLE[Ee - 6] ^
    ve.EXP_TABLE[Ee - 8];
for (var Ee = 0; Ee < 255; Ee++) ve.LOG_TABLE[ve.EXP_TABLE[Ee]] = Ee;
function rr(e, t) {
  if (e.length == null) throw new Error(e.length + "/" + t);
  for (var r = 0; r < e.length && e[r] == 0; ) r++;
  this.num = new Array(e.length - r + t);
  for (var n = 0; n < e.length - r; n++) this.num[n] = e[n + r];
}
rr.prototype = {
  get: function (e) {
    return this.num[e];
  },
  getLength: function () {
    return this.num.length;
  },
  multiply: function (e) {
    for (
      var t = new Array(this.getLength() + e.getLength() - 1), r = 0;
      r < this.getLength();
      r++
    )
      for (var n = 0; n < e.getLength(); n++)
        t[r + n] ^= ve.gexp(ve.glog(this.get(r)) + ve.glog(e.get(n)));
    return new rr(t, 0);
  },
  mod: function (e) {
    if (this.getLength() - e.getLength() < 0) return this;
    for (
      var t = ve.glog(this.get(0)) - ve.glog(e.get(0)),
        r = new Array(this.getLength()),
        n = 0;
      n < this.getLength();
      n++
    )
      r[n] = this.get(n);
    for (var n = 0; n < e.getLength(); n++)
      r[n] ^= ve.gexp(ve.glog(e.get(n)) + t);
    return new rr(r, 0).mod(e);
  },
};
function Xe(e, t) {
  (this.totalCount = e), (this.dataCount = t);
}
Xe.RS_BLOCK_TABLE = [
  [1, 26, 19],
  [1, 26, 16],
  [1, 26, 13],
  [1, 26, 9],
  [1, 44, 34],
  [1, 44, 28],
  [1, 44, 22],
  [1, 44, 16],
  [1, 70, 55],
  [1, 70, 44],
  [2, 35, 17],
  [2, 35, 13],
  [1, 100, 80],
  [2, 50, 32],
  [2, 50, 24],
  [4, 25, 9],
  [1, 134, 108],
  [2, 67, 43],
  [2, 33, 15, 2, 34, 16],
  [2, 33, 11, 2, 34, 12],
  [2, 86, 68],
  [4, 43, 27],
  [4, 43, 19],
  [4, 43, 15],
  [2, 98, 78],
  [4, 49, 31],
  [2, 32, 14, 4, 33, 15],
  [4, 39, 13, 1, 40, 14],
  [2, 121, 97],
  [2, 60, 38, 2, 61, 39],
  [4, 40, 18, 2, 41, 19],
  [4, 40, 14, 2, 41, 15],
  [2, 146, 116],
  [3, 58, 36, 2, 59, 37],
  [4, 36, 16, 4, 37, 17],
  [4, 36, 12, 4, 37, 13],
  [2, 86, 68, 2, 87, 69],
  [4, 69, 43, 1, 70, 44],
  [6, 43, 19, 2, 44, 20],
  [6, 43, 15, 2, 44, 16],
  [4, 101, 81],
  [1, 80, 50, 4, 81, 51],
  [4, 50, 22, 4, 51, 23],
  [3, 36, 12, 8, 37, 13],
  [2, 116, 92, 2, 117, 93],
  [6, 58, 36, 2, 59, 37],
  [4, 46, 20, 6, 47, 21],
  [7, 42, 14, 4, 43, 15],
  [4, 133, 107],
  [8, 59, 37, 1, 60, 38],
  [8, 44, 20, 4, 45, 21],
  [12, 33, 11, 4, 34, 12],
  [3, 145, 115, 1, 146, 116],
  [4, 64, 40, 5, 65, 41],
  [11, 36, 16, 5, 37, 17],
  [11, 36, 12, 5, 37, 13],
  [5, 109, 87, 1, 110, 88],
  [5, 65, 41, 5, 66, 42],
  [5, 54, 24, 7, 55, 25],
  [11, 36, 12],
  [5, 122, 98, 1, 123, 99],
  [7, 73, 45, 3, 74, 46],
  [15, 43, 19, 2, 44, 20],
  [3, 45, 15, 13, 46, 16],
  [1, 135, 107, 5, 136, 108],
  [10, 74, 46, 1, 75, 47],
  [1, 50, 22, 15, 51, 23],
  [2, 42, 14, 17, 43, 15],
  [5, 150, 120, 1, 151, 121],
  [9, 69, 43, 4, 70, 44],
  [17, 50, 22, 1, 51, 23],
  [2, 42, 14, 19, 43, 15],
  [3, 141, 113, 4, 142, 114],
  [3, 70, 44, 11, 71, 45],
  [17, 47, 21, 4, 48, 22],
  [9, 39, 13, 16, 40, 14],
  [3, 135, 107, 5, 136, 108],
  [3, 67, 41, 13, 68, 42],
  [15, 54, 24, 5, 55, 25],
  [15, 43, 15, 10, 44, 16],
  [4, 144, 116, 4, 145, 117],
  [17, 68, 42],
  [17, 50, 22, 6, 51, 23],
  [19, 46, 16, 6, 47, 17],
  [2, 139, 111, 7, 140, 112],
  [17, 74, 46],
  [7, 54, 24, 16, 55, 25],
  [34, 37, 13],
  [4, 151, 121, 5, 152, 122],
  [4, 75, 47, 14, 76, 48],
  [11, 54, 24, 14, 55, 25],
  [16, 45, 15, 14, 46, 16],
  [6, 147, 117, 4, 148, 118],
  [6, 73, 45, 14, 74, 46],
  [11, 54, 24, 16, 55, 25],
  [30, 46, 16, 2, 47, 17],
  [8, 132, 106, 4, 133, 107],
  [8, 75, 47, 13, 76, 48],
  [7, 54, 24, 22, 55, 25],
  [22, 45, 15, 13, 46, 16],
  [10, 142, 114, 2, 143, 115],
  [19, 74, 46, 4, 75, 47],
  [28, 50, 22, 6, 51, 23],
  [33, 46, 16, 4, 47, 17],
  [8, 152, 122, 4, 153, 123],
  [22, 73, 45, 3, 74, 46],
  [8, 53, 23, 26, 54, 24],
  [12, 45, 15, 28, 46, 16],
  [3, 147, 117, 10, 148, 118],
  [3, 73, 45, 23, 74, 46],
  [4, 54, 24, 31, 55, 25],
  [11, 45, 15, 31, 46, 16],
  [7, 146, 116, 7, 147, 117],
  [21, 73, 45, 7, 74, 46],
  [1, 53, 23, 37, 54, 24],
  [19, 45, 15, 26, 46, 16],
  [5, 145, 115, 10, 146, 116],
  [19, 75, 47, 10, 76, 48],
  [15, 54, 24, 25, 55, 25],
  [23, 45, 15, 25, 46, 16],
  [13, 145, 115, 3, 146, 116],
  [2, 74, 46, 29, 75, 47],
  [42, 54, 24, 1, 55, 25],
  [23, 45, 15, 28, 46, 16],
  [17, 145, 115],
  [10, 74, 46, 23, 75, 47],
  [10, 54, 24, 35, 55, 25],
  [19, 45, 15, 35, 46, 16],
  [17, 145, 115, 1, 146, 116],
  [14, 74, 46, 21, 75, 47],
  [29, 54, 24, 19, 55, 25],
  [11, 45, 15, 46, 46, 16],
  [13, 145, 115, 6, 146, 116],
  [14, 74, 46, 23, 75, 47],
  [44, 54, 24, 7, 55, 25],
  [59, 46, 16, 1, 47, 17],
  [12, 151, 121, 7, 152, 122],
  [12, 75, 47, 26, 76, 48],
  [39, 54, 24, 14, 55, 25],
  [22, 45, 15, 41, 46, 16],
  [6, 151, 121, 14, 152, 122],
  [6, 75, 47, 34, 76, 48],
  [46, 54, 24, 10, 55, 25],
  [2, 45, 15, 64, 46, 16],
  [17, 152, 122, 4, 153, 123],
  [29, 74, 46, 14, 75, 47],
  [49, 54, 24, 10, 55, 25],
  [24, 45, 15, 46, 46, 16],
  [4, 152, 122, 18, 153, 123],
  [13, 74, 46, 32, 75, 47],
  [48, 54, 24, 14, 55, 25],
  [42, 45, 15, 32, 46, 16],
  [20, 147, 117, 4, 148, 118],
  [40, 75, 47, 7, 76, 48],
  [43, 54, 24, 22, 55, 25],
  [10, 45, 15, 67, 46, 16],
  [19, 148, 118, 6, 149, 119],
  [18, 75, 47, 31, 76, 48],
  [34, 54, 24, 34, 55, 25],
  [20, 45, 15, 61, 46, 16],
];
Xe.getRSBlocks = function (e, t) {
  var r = Xe.getRsBlockTable(e, t);
  if (r == null)
    throw new Error(
      "bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t
    );
  for (var n = r.length / 3, s = [], i = 0; i < n; i++)
    for (
      var o = r[i * 3 + 0], a = r[i * 3 + 1], c = r[i * 3 + 2], l = 0;
      l < o;
      l++
    )
      s.push(new Xe(a, c));
  return s;
};
Xe.getRsBlockTable = function (e, t) {
  switch (t) {
    case mt.L:
      return Xe.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
    case mt.M:
      return Xe.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
    case mt.Q:
      return Xe.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
    case mt.H:
      return Xe.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
    default:
      return;
  }
};
function su() {
  (this.buffer = []), (this.length = 0);
}
su.prototype = {
  get: function (e) {
    var t = Math.floor(e / 8);
    return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
  },
  put: function (e, t) {
    for (var r = 0; r < t; r++) this.putBit(((e >>> (t - r - 1)) & 1) == 1);
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (e) {
    var t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0),
      e && (this.buffer[t] |= 128 >>> this.length % 8),
      this.length++;
  },
};
var Fi = [
  [17, 14, 11, 7],
  [32, 26, 20, 14],
  [53, 42, 32, 24],
  [78, 62, 46, 34],
  [106, 84, 60, 44],
  [134, 106, 74, 58],
  [154, 122, 86, 64],
  [192, 152, 108, 84],
  [230, 180, 130, 98],
  [271, 213, 151, 119],
  [321, 251, 177, 137],
  [367, 287, 203, 155],
  [425, 331, 241, 177],
  [458, 362, 258, 194],
  [520, 412, 292, 220],
  [586, 450, 322, 250],
  [644, 504, 364, 280],
  [718, 560, 394, 310],
  [792, 624, 442, 338],
  [858, 666, 482, 382],
  [929, 711, 509, 403],
  [1003, 779, 565, 439],
  [1091, 857, 611, 461],
  [1171, 911, 661, 511],
  [1273, 997, 715, 535],
  [1367, 1059, 751, 593],
  [1465, 1125, 805, 625],
  [1528, 1190, 868, 658],
  [1628, 1264, 908, 698],
  [1732, 1370, 982, 742],
  [1840, 1452, 1030, 790],
  [1952, 1538, 1112, 842],
  [2068, 1628, 1168, 898],
  [2188, 1722, 1228, 958],
  [2303, 1809, 1283, 983],
  [2431, 1911, 1351, 1051],
  [2563, 1989, 1423, 1093],
  [2699, 2099, 1499, 1139],
  [2809, 2213, 1579, 1219],
  [2953, 2331, 1663, 1273],
];
function iu(e) {
  if (
    ((this.options = {
      padding: 4,
      width: 256,
      height: 256,
      typeNumber: 4,
      color: "#000000",
      background: "#ffffff",
      ecl: "M",
      image: { svg: "", width: 0, height: 0 },
    }),
    typeof e == "string" && (e = { content: e }),
    e)
  )
    for (var t in e) this.options[t] = e[t];
  if (typeof this.options.content != "string")
    throw new Error("Expected 'content' as string!");
  if (this.options.content.length === 0)
    throw new Error("Expected 'content' to be non-empty!");
  if (!(this.options.padding >= 0))
    throw new Error("Expected 'padding' value to be non-negative!");
  if (!(this.options.width > 0) || !(this.options.height > 0))
    throw new Error(
      "Expected 'width' or 'height' value to be higher than zero!"
    );
  function r(c) {
    switch (c) {
      case "L":
        return mt.L;
      case "M":
        return mt.M;
      case "Q":
        return mt.Q;
      case "H":
        return mt.H;
      default:
        throw new Error("Unknwon error correction level: " + c);
    }
  }
  function n(c, l) {
    for (var d = s(c), u = 1, h = 0, f = 0, m = Fi.length; f <= m; f++) {
      var S = Fi[f];
      if (!S)
        throw new Error("Content too long: expected " + h + " but got " + d);
      switch (l) {
        case "L":
          h = S[0];
          break;
        case "M":
          h = S[1];
          break;
        case "Q":
          h = S[2];
          break;
        case "H":
          h = S[3];
          break;
        default:
          throw new Error("Unknwon error correction level: " + l);
      }
      if (d <= h) break;
      u++;
    }
    if (u > Fi.length) throw new Error("Content too long");
    return u;
  }
  function s(c) {
    var l = encodeURI(c)
      .toString()
      .replace(/\%[0-9a-fA-F]{2}/g, "a");
    return l.length + (l.length != c ? 3 : 0);
  }
  var i = this.options.content,
    o = n(i, this.options.ecl),
    a = r(this.options.ecl);
  (this.qrcode = new et(o, a)), this.qrcode.addData(i), this.qrcode.make();
}
iu.prototype.svg = function (e) {
  var t = this.options || {},
    r = this.qrcode.modules;
  typeof e > "u" && (e = { container: t.container || "svg" });
  for (
    var n = typeof t.pretty < "u" ? !!t.pretty : !0,
      s = n ? "  " : "",
      i = n
        ? `\r
`
        : "",
      o = t.width,
      a = t.height,
      c = r.length,
      l = o / (c + 2 * t.padding),
      d = a / (c + 2 * t.padding),
      u = typeof t.join < "u" ? !!t.join : !1,
      h = typeof t.swap < "u" ? !!t.swap : !1,
      f = typeof t.xmlDeclaration < "u" ? !!t.xmlDeclaration : !0,
      m = typeof t.predefined < "u" ? !!t.predefined : !1,
      S = m
        ? s +
          '<defs><path id="qrmodule" d="M0 0 h' +
          d +
          " v" +
          l +
          ' H0 z" style="fill:' +
          t.color +
          ';shape-rendering:crispEdges;" /></defs>' +
          i
        : "",
      y =
        s +
        '<rect x="0" y="0" width="' +
        o +
        '" height="' +
        a +
        '" style="fill:' +
        t.background +
        ';shape-rendering:crispEdges;"/>' +
        i,
      p = "",
      b = "",
      v = 0;
    v < c;
    v++
  )
    for (var C = 0; C < c; C++) {
      var R = r[C][v];
      if (R) {
        var I = C * l + t.padding * l,
          j = v * d + t.padding * d;
        if (h) {
          var $ = I;
          (I = j), (j = $);
        }
        if (u) {
          var N = l + I,
            G = d + j;
          (I = Number.isInteger(I) ? Number(I) : I.toFixed(2)),
            (j = Number.isInteger(j) ? Number(j) : j.toFixed(2)),
            (N = Number.isInteger(N) ? Number(N) : N.toFixed(2)),
            (G = Number.isInteger(G) ? Number(G) : G.toFixed(2)),
            (b +=
              "M" +
              I +
              "," +
              j +
              " V" +
              G +
              " H" +
              N +
              " V" +
              j +
              " H" +
              I +
              " Z ");
        } else
          m
            ? (p +=
                s +
                '<use x="' +
                I.toString() +
                '" y="' +
                j.toString() +
                '" href="#qrmodule" />' +
                i)
            : (p +=
                s +
                '<rect x="' +
                I.toString() +
                '" y="' +
                j.toString() +
                '" width="' +
                l +
                '" height="' +
                d +
                '" style="fill:' +
                t.color +
                ';shape-rendering:crispEdges;"/>' +
                i);
      }
    }
  u &&
    (p =
      s +
      '<path x="0" y="0" style="fill:' +
      t.color +
      ';shape-rendering:crispEdges;" d="' +
      b +
      '" />');
  let le = "";
  if (this.options.image !== void 0 && this.options.image.svg) {
    const T = (o * this.options.image.width) / 100,
      x = (a * this.options.image.height) / 100,
      O = o / 2 - T / 2,
      D = a / 2 - x / 2;
    (le += `<svg x="${O}" y="${D}" width="${T}" height="${x}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`),
      (le += this.options.image.svg + i),
      (le += "</svg>");
  }
  var se = "";
  switch (e.container) {
    case "svg":
      f && (se += '<?xml version="1.0" standalone="yes"?>' + i),
        (se +=
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
          o +
          '" height="' +
          a +
          '">' +
          i),
        (se += S + y + p),
        (se += le),
        (se += "</svg>");
      break;
    case "svg-viewbox":
      f && (se += '<?xml version="1.0" standalone="yes"?>' + i),
        (se +=
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' +
          o +
          " " +
          a +
          '">' +
          i),
        (se += S + y + p),
        (se += le),
        (se += "</svg>");
      break;
    case "g":
      (se += '<g width="' + o + '" height="' + a + '">' + i),
        (se += S + y + p),
        (se += le),
        (se += "</g>");
      break;
    default:
      se += (S + y + p + le).replace(/^\s+/, "");
      break;
  }
  return se;
};
var l0 = iu,
  u0 =
    (F && F.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(ds, "__esModule", { value: !0 });
ds.QRCode = void 0;
const d0 = xe,
  Za = as,
  h0 = u0(l0),
  f0 = (e) => {
    const [t, r] = (0, Za.useState)("");
    return (
      (0, Za.useEffect)(() => {
        var n, s;
        const i = new h0.default({
            content: e.content,
            background: e.bgColor || "#ffffff",
            color: e.fgColor || "#000000",
            container: "svg",
            ecl: "M",
            width: (n = e.width) !== null && n !== void 0 ? n : 256,
            height: (s = e.height) !== null && s !== void 0 ? s : 256,
            padding: 0,
            image: e.image,
          }),
          o = Buffer.from(i.svg(), "utf8").toString("base64");
        r(`data:image/svg+xml;base64,${o}`);
      }, [e.bgColor, e.content, e.fgColor, e.height, e.image, e.width]),
      t ? (0, d0.h)("img", { src: t, alt: "QR Code" }) : null
    );
  };
ds.QRCode = f0;
var hs = {},
  jo = {};
Object.defineProperty(jo, "__esModule", { value: !0 });
jo.default = (() =>
  ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}")();
var p0 =
  (F && F.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(hs, "__esModule", { value: !0 });
hs.Spinner = void 0;
const En = xe,
  g0 = p0(jo),
  _0 = (e) => {
    var t;
    const r = (t = e.size) !== null && t !== void 0 ? t : 64,
      n = e.color || "#000";
    return (0, En.h)(
      "div",
      { class: "-cbwsdk-spinner" },
      (0, En.h)("style", null, g0.default),
      (0, En.h)(
        "svg",
        {
          viewBox: "0 0 100 100",
          xmlns: "http://www.w3.org/2000/svg",
          style: { width: r, height: r },
        },
        (0, En.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: n } })
      )
    );
  };
hs.Spinner = _0;
var Ho = {};
Object.defineProperty(Ho, "__esModule", { value: !0 });
Ho.default = (() =>
  ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}")();
var ou =
  (F && F.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(ur, "__esModule", { value: !0 });
ur.CoinbaseWalletSteps = ur.ConnectContent = void 0;
const Mt = ou(sn),
  X = xe,
  m0 = P,
  b0 = mr,
  y0 = cs,
  v0 = ls,
  w0 = us,
  E0 = ds,
  S0 = hs,
  R0 = ou(Ho),
  ji = {
    title: "Coinbase Wallet app",
    description: "Connect with your self-custody wallet",
    steps: au,
  },
  C0 = (e) => (e === "light" ? "#FFFFFF" : "#0A0B0D");
function k0(e) {
  const { theme: t } = e,
    r = (0, m0.createQrUrl)(
      e.sessionId,
      e.sessionSecret,
      e.linkAPIUrl,
      e.isParentConnection,
      e.version,
      e.chainId
    ),
    n = ji.steps;
  return (0, X.h)(
    "div",
    {
      "data-testid": "connect-content",
      className: (0, Mt.default)("-cbwsdk-connect-content", t),
    },
    (0, X.h)("style", null, R0.default),
    (0, X.h)(
      "div",
      { className: "-cbwsdk-connect-content-header" },
      (0, X.h)(
        "h2",
        { className: (0, Mt.default)("-cbwsdk-connect-content-heading", t) },
        "Scan to connect with our mobile app"
      ),
      e.onCancel &&
        (0, X.h)(
          "button",
          {
            type: "button",
            className: "-cbwsdk-cancel-button",
            onClick: e.onCancel,
          },
          (0, X.h)(y0.CloseIcon, {
            fill: t === "light" ? "#0A0B0D" : "#FFFFFF",
          })
        )
    ),
    (0, X.h)(
      "div",
      { className: "-cbwsdk-connect-content-layout" },
      (0, X.h)(
        "div",
        { className: "-cbwsdk-connect-content-column-left" },
        (0, X.h)(I0, { title: ji.title, description: ji.description, theme: t })
      ),
      (0, X.h)(
        "div",
        { className: "-cbwsdk-connect-content-column-right" },
        (0, X.h)(
          "div",
          { className: "-cbwsdk-connect-content-qr-wrapper" },
          (0, X.h)(E0.QRCode, {
            content: r,
            width: 200,
            height: 200,
            fgColor: "#000",
            bgColor: "transparent",
          }),
          (0, X.h)("input", {
            type: "hidden",
            name: "cbw-cbwsdk-version",
            value: b0.LIB_VERSION,
          }),
          (0, X.h)("input", { type: "hidden", value: r })
        ),
        (0, X.h)(n, { theme: t }),
        !e.isConnected &&
          (0, X.h)(
            "div",
            {
              "data-testid": "connecting-spinner",
              className: (0, Mt.default)(
                "-cbwsdk-connect-content-qr-connecting",
                t
              ),
            },
            (0, X.h)(S0.Spinner, {
              size: 36,
              color: t === "dark" ? "#FFF" : "#000",
            }),
            (0, X.h)("p", null, "Connecting...")
          )
      )
    )
  );
}
ur.ConnectContent = k0;
function I0({ title: e, description: t, theme: r }) {
  return (0, X.h)(
    "div",
    { className: (0, Mt.default)("-cbwsdk-connect-item", r) },
    (0, X.h)("div", null, (0, X.h)(v0.CoinbaseWalletRound, null)),
    (0, X.h)(
      "div",
      { className: "-cbwsdk-connect-item-copy-wrapper" },
      (0, X.h)("h3", { className: "-cbwsdk-connect-item-title" }, e),
      (0, X.h)("p", { className: "-cbwsdk-connect-item-description" }, t)
    )
  );
}
function au({ theme: e }) {
  return (0, X.h)(
    "ol",
    { className: "-cbwsdk-wallet-steps" },
    (0, X.h)(
      "li",
      { className: (0, Mt.default)("-cbwsdk-wallet-steps-item", e) },
      (0, X.h)(
        "div",
        { className: "-cbwsdk-wallet-steps-item-wrapper" },
        "Open Coinbase Wallet app"
      )
    ),
    (0, X.h)(
      "li",
      { className: (0, Mt.default)("-cbwsdk-wallet-steps-item", e) },
      (0, X.h)(
        "div",
        { className: "-cbwsdk-wallet-steps-item-wrapper" },
        (0, X.h)("span", null, "Tap ", (0, X.h)("strong", null, "Scan"), " "),
        (0, X.h)(
          "span",
          {
            className: (0, Mt.default)(
              "-cbwsdk-wallet-steps-pad-left",
              "-cbwsdk-wallet-steps-icon",
              e
            ),
          },
          (0, X.h)(w0.QRCodeIcon, { fill: C0(e) })
        )
      )
    )
  );
}
ur.CoinbaseWalletSteps = au;
var fs = {},
  ps = {};
Object.defineProperty(ps, "__esModule", { value: !0 });
ps.ArrowLeftIcon = void 0;
const Ka = xe;
function A0(e) {
  return (0, Ka.h)(
    "svg",
    Object.assign(
      {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, Ka.h)("path", {
      d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z",
    })
  );
}
ps.ArrowLeftIcon = A0;
var gs = {};
Object.defineProperty(gs, "__esModule", { value: !0 });
gs.LaptopIcon = void 0;
const Hi = xe;
function x0(e) {
  return (0, Hi.h)(
    "svg",
    Object.assign(
      {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, Hi.h)("path", {
      d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z",
    }),
    (0, Hi.h)("path", {
      d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z",
    })
  );
}
gs.LaptopIcon = x0;
var _s = {};
Object.defineProperty(_s, "__esModule", { value: !0 });
_s.SafeIcon = void 0;
const Qa = xe;
function T0(e) {
  return (0, Qa.h)(
    "svg",
    Object.assign(
      {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, Qa.h)("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z",
    })
  );
}
_s.SafeIcon = T0;
var Uo = {};
Object.defineProperty(Uo, "__esModule", { value: !0 });
Uo.default = (() =>
  ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}")();
var cu =
  (F && F.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(fs, "__esModule", { value: !0 });
fs.TryExtensionContent = void 0;
const wt = cu(sn),
  ge = xe,
  Ui = as,
  N0 = ps,
  M0 = gs,
  L0 = _s,
  O0 = cu(Uo);
function P0({ theme: e }) {
  const [t, r] = (0, Ui.useState)(!1),
    n = (0, Ui.useCallback)(() => {
      window.open(
        "https://api.wallet.coinbase.com/rpc/v2/desktop/chrome",
        "_blank"
      );
    }, []),
    s = (0, Ui.useCallback)(() => {
      t ? window.location.reload() : (n(), r(!0));
    }, [n, t]);
  return (0, ge.h)(
    "div",
    { class: (0, wt.default)("-cbwsdk-try-extension", e) },
    (0, ge.h)("style", null, O0.default),
    (0, ge.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, ge.h)(
        "h3",
        { class: (0, wt.default)("-cbwsdk-try-extension-heading", e) },
        "Or try the Coinbase Wallet browser extension"
      ),
      (0, ge.h)(
        "div",
        { class: "-cbwsdk-try-extension-cta-wrapper" },
        (0, ge.h)(
          "button",
          {
            class: (0, wt.default)("-cbwsdk-try-extension-cta", e),
            onClick: s,
          },
          t ? "Refresh" : "Install"
        ),
        (0, ge.h)(
          "div",
          null,
          !t &&
            (0, ge.h)(N0.ArrowLeftIcon, {
              class: "-cbwsdk-try-extension-cta-icon",
              fill: e === "light" ? "#0052FF" : "#588AF5",
            })
        )
      )
    ),
    (0, ge.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, ge.h)(
        "ul",
        { class: "-cbwsdk-try-extension-list" },
        (0, ge.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, ge.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, ge.h)(
              "span",
              {
                class: (0, wt.default)(
                  "-cbwsdk-try-extension-list-item-icon",
                  e
                ),
              },
              (0, ge.h)(M0.LaptopIcon, {
                fill: e === "light" ? "#0A0B0D" : "#FFFFFF",
              })
            )
          ),
          (0, ge.h)(
            "div",
            {
              class: (0, wt.default)("-cbwsdk-try-extension-list-item-copy", e),
            },
            "Connect with dapps with just one click on your desktop browser"
          )
        ),
        (0, ge.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, ge.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, ge.h)(
              "span",
              {
                class: (0, wt.default)(
                  "-cbwsdk-try-extension-list-item-icon",
                  e
                ),
              },
              (0, ge.h)(L0.SafeIcon, {
                fill: e === "light" ? "#0A0B0D" : "#FFFFFF",
              })
            )
          ),
          (0, ge.h)(
            "div",
            {
              class: (0, wt.default)("-cbwsdk-try-extension-list-item-copy", e),
            },
            "Add an additional layer of security by using a supported Ledger hardware wallet"
          )
        )
      )
    )
  );
}
fs.TryExtensionContent = P0;
var Wo = {};
Object.defineProperty(Wo, "__esModule", { value: !0 });
Wo.default = (() =>
  ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}")();
var lu =
  (F && F.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(os, "__esModule", { value: !0 });
os.ConnectDialog = void 0;
const Wi = lu(sn),
  Et = xe,
  Vi = as,
  $0 = ur,
  B0 = fs,
  D0 = lu(Wo),
  F0 = (e) => {
    const { isOpen: t, darkMode: r } = e,
      [n, s] = (0, Vi.useState)(!t),
      [i, o] = (0, Vi.useState)(!t);
    (0, Vi.useEffect)(() => {
      const c = [
        window.setTimeout(() => {
          o(!t);
        }, 10),
      ];
      return (
        t
          ? s(!1)
          : c.push(
              window.setTimeout(() => {
                s(!0);
              }, 360)
            ),
        () => {
          c.forEach(window.clearTimeout);
        }
      );
    }, [t]);
    const a = r ? "dark" : "light";
    return (0, Et.h)(
      "div",
      {
        class: (0, Wi.default)(
          "-cbwsdk-connect-dialog-container",
          n && "-cbwsdk-connect-dialog-container-hidden"
        ),
      },
      (0, Et.h)("style", null, D0.default),
      (0, Et.h)("div", {
        class: (0, Wi.default)(
          "-cbwsdk-connect-dialog-backdrop",
          a,
          i && "-cbwsdk-connect-dialog-backdrop-hidden"
        ),
      }),
      (0, Et.h)(
        "div",
        { class: "-cbwsdk-connect-dialog" },
        (0, Et.h)(
          "div",
          {
            class: (0, Wi.default)(
              "-cbwsdk-connect-dialog-box",
              i && "-cbwsdk-connect-dialog-box-hidden"
            ),
          },
          e.connectDisabled
            ? null
            : (0, Et.h)($0.ConnectContent, {
                theme: a,
                version: e.version,
                sessionId: e.sessionId,
                sessionSecret: e.sessionSecret,
                linkAPIUrl: e.linkAPIUrl,
                isConnected: e.isConnected,
                isParentConnection: e.isParentConnection,
                chainId: e.chainId,
                onCancel: e.onCancel,
              }),
          (0, Et.h)(B0.TryExtensionContent, { theme: a })
        )
      )
    );
  };
os.ConnectDialog = F0;
Object.defineProperty(ss, "__esModule", { value: !0 });
ss.LinkFlow = void 0;
const zi = xe,
  j0 = os;
class H0 {
  constructor(t) {
    (this.connected = !1),
      (this.chainId = 1),
      (this.isOpen = !1),
      (this.onCancel = null),
      (this.root = null),
      (this.connectDisabled = !1),
      (this.darkMode = t.darkMode),
      (this.version = t.version),
      (this.sessionId = t.sessionId),
      (this.sessionSecret = t.sessionSecret),
      (this.linkAPIUrl = t.linkAPIUrl),
      (this.isParentConnection = t.isParentConnection);
  }
  attach(t) {
    (this.root = document.createElement("div")),
      (this.root.className = "-cbwsdk-link-flow-root"),
      t.appendChild(this.root),
      this.render();
  }
  setConnected(t) {
    this.connected !== t && ((this.connected = t), this.render());
  }
  setChainId(t) {
    this.chainId !== t && ((this.chainId = t), this.render());
  }
  detach() {
    var t;
    this.root &&
      ((0, zi.render)(null, this.root),
      (t = this.root.parentElement) === null ||
        t === void 0 ||
        t.removeChild(this.root));
  }
  setConnectDisabled(t) {
    this.connectDisabled = t;
  }
  open(t) {
    (this.isOpen = !0), (this.onCancel = t.onCancel), this.render();
  }
  close() {
    (this.isOpen = !1), (this.onCancel = null), this.render();
  }
  render() {
    this.root &&
      (0, zi.render)(
        (0, zi.h)(j0.ConnectDialog, {
          darkMode: this.darkMode,
          version: this.version,
          sessionId: this.sessionId,
          sessionSecret: this.sessionSecret,
          linkAPIUrl: this.linkAPIUrl,
          isOpen: this.isOpen,
          isConnected: this.connected,
          isParentConnection: this.isParentConnection,
          chainId: this.chainId,
          onCancel: this.onCancel,
          connectDisabled: this.connectDisabled,
        }),
        this.root
      );
  }
}
ss.LinkFlow = H0;
var Vo = {},
  zo = {};
Object.defineProperty(zo, "__esModule", { value: !0 });
zo.default = (() =>
  ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}")();
(function (e) {
  var t =
    (F && F.__importDefault) ||
    function (u) {
      return u && u.__esModule ? u : { default: u };
    };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.SnackbarInstance = e.SnackbarContainer = e.Snackbar = void 0);
  const r = t(sn),
    n = xe,
    s = as,
    i = t(zo),
    o =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
    a =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
  class c {
    constructor(h) {
      (this.items = new Map()),
        (this.nextItemKey = 0),
        (this.root = null),
        (this.darkMode = h.darkMode);
    }
    attach(h) {
      (this.root = document.createElement("div")),
        (this.root.className = "-cbwsdk-snackbar-root"),
        h.appendChild(this.root),
        this.render();
    }
    presentItem(h) {
      const f = this.nextItemKey++;
      return (
        this.items.set(f, h),
        this.render(),
        () => {
          this.items.delete(f), this.render();
        }
      );
    }
    clear() {
      this.items.clear(), this.render();
    }
    render() {
      this.root &&
        (0, n.render)(
          (0, n.h)(
            "div",
            null,
            (0, n.h)(
              e.SnackbarContainer,
              { darkMode: this.darkMode },
              Array.from(this.items.entries()).map(([h, f]) =>
                (0, n.h)(e.SnackbarInstance, Object.assign({}, f, { key: h }))
              )
            )
          ),
          this.root
        );
    }
  }
  e.Snackbar = c;
  const l = (u) =>
    (0, n.h)(
      "div",
      { class: (0, r.default)("-cbwsdk-snackbar-container") },
      (0, n.h)("style", null, i.default),
      (0, n.h)("div", { class: "-cbwsdk-snackbar" }, u.children)
    );
  e.SnackbarContainer = l;
  const d = ({ autoExpand: u, message: h, menuItems: f }) => {
    const [m, S] = (0, s.useState)(!0),
      [y, p] = (0, s.useState)(u ?? !1);
    (0, s.useEffect)(() => {
      const v = [
        window.setTimeout(() => {
          S(!1);
        }, 1),
        window.setTimeout(() => {
          p(!0);
        }, 1e4),
      ];
      return () => {
        v.forEach(window.clearTimeout);
      };
    });
    const b = () => {
      p(!y);
    };
    return (0, n.h)(
      "div",
      {
        class: (0, r.default)(
          "-cbwsdk-snackbar-instance",
          m && "-cbwsdk-snackbar-instance-hidden",
          y && "-cbwsdk-snackbar-instance-expanded"
        ),
      },
      (0, n.h)(
        "div",
        { class: "-cbwsdk-snackbar-instance-header", onClick: b },
        (0, n.h)("img", {
          src: o,
          class: "-cbwsdk-snackbar-instance-header-cblogo",
        }),
        " ",
        (0, n.h)(
          "div",
          { class: "-cbwsdk-snackbar-instance-header-message" },
          h
        ),
        (0, n.h)(
          "div",
          { class: "-gear-container" },
          !y &&
            (0, n.h)(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              (0, n.h)("circle", {
                cx: "12",
                cy: "12",
                r: "12",
                fill: "#F5F7F8",
              })
            ),
          (0, n.h)("img", { src: a, class: "-gear-icon", title: "Expand" })
        )
      ),
      f &&
        f.length > 0 &&
        (0, n.h)(
          "div",
          { class: "-cbwsdk-snackbar-instance-menu" },
          f.map((v, C) =>
            (0, n.h)(
              "div",
              {
                class: (0, r.default)(
                  "-cbwsdk-snackbar-instance-menu-item",
                  v.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"
                ),
                onClick: v.onClick,
                key: C,
              },
              (0, n.h)(
                "svg",
                {
                  width: v.svgWidth,
                  height: v.svgHeight,
                  viewBox: "0 0 10 11",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                (0, n.h)("path", {
                  "fill-rule": v.defaultFillRule,
                  "clip-rule": v.defaultClipRule,
                  d: v.path,
                  fill: "#AAAAAA",
                })
              ),
              (0, n.h)(
                "span",
                {
                  class: (0, r.default)(
                    "-cbwsdk-snackbar-instance-menu-item-info",
                    v.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                  ),
                },
                v.info
              )
            )
          )
        )
    );
  };
  e.SnackbarInstance = d;
})(Vo);
Object.defineProperty(en, "__esModule", { value: !0 });
en.WalletLinkRelayUI = void 0;
const U0 = tn,
  W0 = ss,
  V0 = Vo;
class z0 {
  constructor(t) {
    (this.standalone = null),
      (this.attached = !1),
      (this.snackbar = new V0.Snackbar({ darkMode: t.darkMode })),
      (this.linkFlow = new W0.LinkFlow({
        darkMode: t.darkMode,
        version: t.version,
        sessionId: t.session.id,
        sessionSecret: t.session.secret,
        linkAPIUrl: t.linkAPIUrl,
        isParentConnection: !1,
      }));
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    const t = document.documentElement,
      r = document.createElement("div");
    (r.className = "-cbwsdk-css-reset"),
      t.appendChild(r),
      this.linkFlow.attach(r),
      this.snackbar.attach(r),
      (this.attached = !0),
      (0, U0.injectCssReset)();
  }
  setConnected(t) {
    this.linkFlow.setConnected(t);
  }
  setChainId(t) {
    this.linkFlow.setChainId(t);
  }
  setConnectDisabled(t) {
    this.linkFlow.setConnectDisabled(t);
  }
  addEthereumChain() {}
  watchAsset() {}
  switchEthereumChain() {}
  requestEthereumAccounts(t) {
    this.linkFlow.open({ onCancel: t.onCancel });
  }
  hideRequestEthereumAccounts() {
    this.linkFlow.close();
  }
  signEthereumMessage() {}
  signEthereumTransaction() {}
  submitEthereumTransaction() {}
  ethereumAddressFromSignedMessage() {}
  showConnecting(t) {
    let r;
    return (
      t.isUnlinkedErrorState
        ? (r = {
            autoExpand: !0,
            message: "Connection lost",
            menuItems: [
              {
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: t.onResetConnection,
              },
            ],
          })
        : (r = {
            message: "Confirm on phone",
            menuItems: [
              {
                isRed: !0,
                info: "Cancel transaction",
                svgWidth: "11",
                svgHeight: "11",
                path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                defaultFillRule: "inherit",
                defaultClipRule: "inherit",
                onClick: t.onCancel,
              },
              {
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: t.onResetConnection,
              },
            ],
          }),
      this.snackbar.presentItem(r)
    );
  }
  reloadUI() {
    document.location.reload();
  }
  inlineAccountsResponse() {
    return !1;
  }
  inlineAddEthereumChain() {
    return !1;
  }
  inlineWatchAsset() {
    return !1;
  }
  inlineSwitchEthereumChain() {
    return !1;
  }
  setStandalone(t) {
    this.standalone = t;
  }
  isStandalone() {
    var t;
    return (t = this.standalone) !== null && t !== void 0 ? t : !1;
  }
}
en.WalletLinkRelayUI = z0;
Object.defineProperty(Zr, "__esModule", { value: !0 });
Zr.WalletLinkRelay = void 0;
const Kt = Vr,
  q0 = _e,
  ue = P,
  St = br,
  Ya = Be,
  gt = yr,
  G0 = ts,
  Rt = _r,
  J0 = en;
class at extends Ya.RelayAbstract {
  constructor(t) {
    var r;
    super(),
      (this.accountsCallback = null),
      (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
      (this.chainCallback = null),
      (this.dappDefaultChain = 1),
      (this.appName = ""),
      (this.appLogoUrl = null),
      (this.linkedUpdated = (o) => {
        var a;
        this.isLinked = o;
        const c = this.storage.getItem(Ya.LOCAL_STORAGE_ADDRESSES_KEY);
        if (
          (o && (this.session.linked = o), (this.isUnlinkedErrorState = !1), c)
        ) {
          const l = c.split(" "),
            d = this.storage.getItem("IsStandaloneSigning") === "true";
          if (l[0] !== "" && !o && this.session.linked && !d) {
            this.isUnlinkedErrorState = !0;
            const u = this.getSessionIdHash();
            (a = this.diagnostic) === null ||
              a === void 0 ||
              a.log(St.EVENTS.UNLINKED_ERROR_STATE, { sessionIdHash: u });
          }
        }
      }),
      (this.metadataUpdated = (o, a) => {
        this.storage.setItem(o, a);
      }),
      (this.chainUpdated = (o, a) => {
        (this.chainCallbackParams.chainId === o &&
          this.chainCallbackParams.jsonRpcUrl === a) ||
          ((this.chainCallbackParams = { chainId: o, jsonRpcUrl: a }),
          this.chainCallback && this.chainCallback(o, a));
      }),
      (this.accountUpdated = (o) => {
        this.accountsCallback && this.accountsCallback([o]),
          at.accountRequestCallbackIds.size > 0 &&
            (Array.from(at.accountRequestCallbackIds.values()).forEach((a) => {
              const c = {
                type: "WEB3_RESPONSE",
                id: a,
                response: { method: "requestEthereumAccounts", result: [o] },
              };
              this.invokeCallback(
                Object.assign(Object.assign({}, c), { id: a })
              );
            }),
            at.accountRequestCallbackIds.clear());
      }),
      (this.connectedUpdated = (o) => {
        this.ui.setConnected(o);
      }),
      (this.resetAndReload = this.resetAndReload.bind(this)),
      (this.linkAPIUrl = t.linkAPIUrl),
      (this.storage = t.storage),
      (this.options = t);
    const { session: n, ui: s, connection: i } = this.subscribe();
    (this._session = n),
      (this.connection = i),
      (this.relayEventManager = t.relayEventManager),
      (this.diagnostic = t.diagnosticLogger),
      (this._reloadOnDisconnect =
        (r = t.reloadOnDisconnect) !== null && r !== void 0 ? r : !0),
      (this.ui = s);
  }
  subscribe() {
    const t =
        gt.Session.load(this.storage) || new gt.Session(this.storage).save(),
      { linkAPIUrl: r, diagnostic: n } = this,
      s = new G0.WalletLinkConnection({
        session: t,
        linkAPIUrl: r,
        diagnostic: n,
        listener: this,
      }),
      { version: i, darkMode: o } = this.options,
      a = this.options.uiConstructor({
        linkAPIUrl: r,
        version: i,
        darkMode: o,
        session: t,
      });
    return s.connect(), { session: t, ui: a, connection: s };
  }
  attachUI() {
    this.ui.attach();
  }
  resetAndReload() {
    Promise.race([
      this.connection.setSessionMetadata("__destroyed", "1"),
      new Promise((t) => setTimeout(() => t(null), 1e3)),
    ])
      .then(() => {
        var t, r;
        const n = this.ui.isStandalone();
        (t = this.diagnostic) === null ||
          t === void 0 ||
          t.log(St.EVENTS.SESSION_STATE_CHANGE, {
            method: "relay::resetAndReload",
            sessionMetadataChange: "__destroyed, 1",
            sessionIdHash: this.getSessionIdHash(),
          }),
          this.connection.destroy();
        const s = gt.Session.load(this.storage);
        if (
          (s?.id === this._session.id
            ? this.storage.clear()
            : s &&
              ((r = this.diagnostic) === null ||
                r === void 0 ||
                r.log(St.EVENTS.SKIPPED_CLEARING_SESSION, {
                  sessionIdHash: this.getSessionIdHash(),
                  storedSessionIdHash: gt.Session.hash(s.id),
                })),
          this._reloadOnDisconnect)
        ) {
          this.ui.reloadUI();
          return;
        }
        this.accountsCallback && this.accountsCallback([], !0);
        const { session: i, ui: o, connection: a } = this.subscribe();
        (this._session = i),
          (this.connection = a),
          (this.ui = o),
          n && this.ui.setStandalone && this.ui.setStandalone(!0),
          this.attachUI();
      })
      .catch((t) => {
        var r;
        (r = this.diagnostic) === null ||
          r === void 0 ||
          r.log(St.EVENTS.FAILURE, {
            method: "relay::resetAndReload",
            message: `failed to reset and reload with ${t}`,
            sessionIdHash: this.getSessionIdHash(),
          });
      });
  }
  setAppInfo(t, r) {
    (this.appName = t), (this.appLogoUrl = r);
  }
  getStorageItem(t) {
    return this.storage.getItem(t);
  }
  get session() {
    return this._session;
  }
  setStorageItem(t, r) {
    this.storage.setItem(t, r);
  }
  signEthereumMessage(t, r, n, s) {
    return this.sendRequest({
      method: "signEthereumMessage",
      params: {
        message: (0, ue.hexStringFromBuffer)(t, !0),
        address: r,
        addPrefix: n,
        typedDataJson: s || null,
      },
    });
  }
  ethereumAddressFromSignedMessage(t, r, n) {
    return this.sendRequest({
      method: "ethereumAddressFromSignedMessage",
      params: {
        message: (0, ue.hexStringFromBuffer)(t, !0),
        signature: (0, ue.hexStringFromBuffer)(r, !0),
        addPrefix: n,
      },
    });
  }
  signEthereumTransaction(t) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: t.fromAddress,
        toAddress: t.toAddress,
        weiValue: (0, ue.bigIntStringFromBN)(t.weiValue),
        data: (0, ue.hexStringFromBuffer)(t.data, !0),
        nonce: t.nonce,
        gasPriceInWei: t.gasPriceInWei
          ? (0, ue.bigIntStringFromBN)(t.gasPriceInWei)
          : null,
        maxFeePerGas: t.gasPriceInWei
          ? (0, ue.bigIntStringFromBN)(t.gasPriceInWei)
          : null,
        maxPriorityFeePerGas: t.gasPriceInWei
          ? (0, ue.bigIntStringFromBN)(t.gasPriceInWei)
          : null,
        gasLimit: t.gasLimit ? (0, ue.bigIntStringFromBN)(t.gasLimit) : null,
        chainId: t.chainId,
        shouldSubmit: !1,
      },
    });
  }
  signAndSubmitEthereumTransaction(t) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: t.fromAddress,
        toAddress: t.toAddress,
        weiValue: (0, ue.bigIntStringFromBN)(t.weiValue),
        data: (0, ue.hexStringFromBuffer)(t.data, !0),
        nonce: t.nonce,
        gasPriceInWei: t.gasPriceInWei
          ? (0, ue.bigIntStringFromBN)(t.gasPriceInWei)
          : null,
        maxFeePerGas: t.maxFeePerGas
          ? (0, ue.bigIntStringFromBN)(t.maxFeePerGas)
          : null,
        maxPriorityFeePerGas: t.maxPriorityFeePerGas
          ? (0, ue.bigIntStringFromBN)(t.maxPriorityFeePerGas)
          : null,
        gasLimit: t.gasLimit ? (0, ue.bigIntStringFromBN)(t.gasLimit) : null,
        chainId: t.chainId,
        shouldSubmit: !0,
      },
    });
  }
  submitEthereumTransaction(t, r) {
    return this.sendRequest({
      method: "submitEthereumTransaction",
      params: {
        signedTransaction: (0, ue.hexStringFromBuffer)(t, !0),
        chainId: r,
      },
    });
  }
  scanQRCode(t) {
    return this.sendRequest({ method: "scanQRCode", params: { regExp: t } });
  }
  getQRCodeUrl() {
    return (0, ue.createQrUrl)(
      this._session.id,
      this._session.secret,
      this.linkAPIUrl,
      !1,
      this.options.version,
      this.dappDefaultChain
    );
  }
  genericRequest(t, r) {
    return this.sendRequest({
      method: "generic",
      params: { action: r, data: t },
    });
  }
  sendGenericMessage(t) {
    return this.sendRequest(t);
  }
  sendRequest(t) {
    let r = null;
    const n = (0, ue.randomBytesHex)(8),
      s = (o) => {
        this.publishWeb3RequestCanceledEvent(n),
          this.handleErrorResponse(n, t.method, o),
          r?.();
      };
    return {
      promise: new Promise((o, a) => {
        this.ui.isStandalone() ||
          (r = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: s,
            onResetConnection: this.resetAndReload,
          })),
          this.relayEventManager.callbacks.set(n, (c) => {
            if ((r?.(), (0, Rt.isErrorResponse)(c)))
              return a(new Error(c.errorMessage));
            o(c);
          }),
          this.ui.isStandalone()
            ? this.sendRequestStandalone(n, t)
            : this.publishWeb3RequestEvent(n, t);
      }),
      cancel: s,
    };
  }
  setConnectDisabled(t) {
    this.ui.setConnectDisabled(t);
  }
  setAccountsCallback(t) {
    this.accountsCallback = t;
  }
  setChainCallback(t) {
    this.chainCallback = t;
  }
  setDappDefaultChainCallback(t) {
    (this.dappDefaultChain = t),
      this.ui instanceof J0.WalletLinkRelayUI && this.ui.setChainId(t);
  }
  publishWeb3RequestEvent(t, r) {
    var n;
    const s = { type: "WEB3_REQUEST", id: t, request: r },
      i = gt.Session.load(this.storage);
    (n = this.diagnostic) === null ||
      n === void 0 ||
      n.log(St.EVENTS.WEB3_REQUEST, {
        eventId: s.id,
        method: `relay::${r.method}`,
        sessionIdHash: this.getSessionIdHash(),
        storedSessionIdHash: i ? gt.Session.hash(i.id) : "",
        isSessionMismatched: (i?.id !== this._session.id).toString(),
      }),
      this.publishEvent("Web3Request", s, !0)
        .then((o) => {
          var a;
          (a = this.diagnostic) === null ||
            a === void 0 ||
            a.log(St.EVENTS.WEB3_REQUEST_PUBLISHED, {
              eventId: s.id,
              method: `relay::${r.method}`,
              sessionIdHash: this.getSessionIdHash(),
              storedSessionIdHash: i ? gt.Session.hash(i.id) : "",
              isSessionMismatched: (i?.id !== this._session.id).toString(),
            });
        })
        .catch((o) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: s.id,
            response: { method: r.method, errorMessage: o.message },
          });
        });
  }
  publishWeb3RequestCanceledEvent(t) {
    const r = { type: "WEB3_REQUEST_CANCELED", id: t };
    this.publishEvent("Web3RequestCanceled", r, !1).then();
  }
  publishEvent(t, r, n) {
    return this.connection.publishEvent(t, r, n);
  }
  handleWeb3ResponseMessage(t) {
    var r;
    const { response: n } = t;
    if (
      ((r = this.diagnostic) === null ||
        r === void 0 ||
        r.log(St.EVENTS.WEB3_RESPONSE, {
          eventId: t.id,
          method: `relay::${n.method}`,
          sessionIdHash: this.getSessionIdHash(),
        }),
      n.method === "requestEthereumAccounts")
    ) {
      at.accountRequestCallbackIds.forEach((s) =>
        this.invokeCallback(Object.assign(Object.assign({}, t), { id: s }))
      ),
        at.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(t);
  }
  handleErrorResponse(t, r, n, s) {
    var i;
    const o =
      (i = n?.message) !== null && i !== void 0
        ? i
        : (0, Kt.getMessageFromCode)(s);
    this.handleWeb3ResponseMessage({
      type: "WEB3_RESPONSE",
      id: t,
      response: { method: r, errorMessage: o, errorCode: s },
    });
  }
  invokeCallback(t) {
    const r = this.relayEventManager.callbacks.get(t.id);
    r && (r(t.response), this.relayEventManager.callbacks.delete(t.id));
  }
  requestEthereumAccounts() {
    const t = {
        method: "requestEthereumAccounts",
        params: { appName: this.appName, appLogoUrl: this.appLogoUrl || null },
      },
      r = (0, ue.randomBytesHex)(8),
      n = (i) => {
        this.publishWeb3RequestCanceledEvent(r),
          this.handleErrorResponse(r, t.method, i);
      };
    return {
      promise: new Promise((i, o) => {
        if (
          (this.relayEventManager.callbacks.set(r, (a) => {
            if (
              (this.ui.hideRequestEthereumAccounts(),
              (0, Rt.isErrorResponse)(a))
            )
              return o(new Error(a.errorMessage));
            i(a);
          }),
          this.ui.inlineAccountsResponse())
        ) {
          const a = (c) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id: r,
              response: { method: "requestEthereumAccounts", result: c },
            });
          };
          this.ui.requestEthereumAccounts({ onCancel: n, onAccounts: a });
        } else {
          const a = Kt.standardErrors.provider.userRejectedRequest(
            "User denied account authorization"
          );
          this.ui.requestEthereumAccounts({ onCancel: () => n(a) });
        }
        at.accountRequestCallbackIds.add(r),
          !this.ui.inlineAccountsResponse() &&
            !this.ui.isStandalone() &&
            this.publishWeb3RequestEvent(r, t);
      }),
      cancel: n,
    };
  }
  selectProvider(t) {
    const r = { method: "selectProvider", params: { providerOptions: t } },
      n = (0, ue.randomBytesHex)(8),
      s = (o) => {
        this.publishWeb3RequestCanceledEvent(n),
          this.handleErrorResponse(n, r.method, o);
      },
      i = new Promise((o, a) => {
        this.relayEventManager.callbacks.set(n, (d) => {
          if ((0, Rt.isErrorResponse)(d)) return a(new Error(d.errorMessage));
          o(d);
        });
        const c = (d) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id: n,
              response: {
                method: "selectProvider",
                result: q0.ProviderType.Unselected,
              },
            });
          },
          l = (d) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id: n,
              response: { method: "selectProvider", result: d },
            });
          };
        this.ui.selectProvider &&
          this.ui.selectProvider({
            onApprove: l,
            onCancel: c,
            providerOptions: t,
          });
      });
    return { cancel: s, promise: i };
  }
  watchAsset(t, r, n, s, i, o) {
    const a = {
      method: "watchAsset",
      params: {
        type: t,
        options: { address: r, symbol: n, decimals: s, image: i },
        chainId: o,
      },
    };
    let c = null;
    const l = (0, ue.randomBytesHex)(8),
      d = (h) => {
        this.publishWeb3RequestCanceledEvent(l),
          this.handleErrorResponse(l, a.method, h),
          c?.();
      };
    this.ui.inlineWatchAsset() ||
      (c = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: d,
        onResetConnection: this.resetAndReload,
      }));
    const u = new Promise((h, f) => {
      this.relayEventManager.callbacks.set(l, (y) => {
        if ((c?.(), (0, Rt.isErrorResponse)(y)))
          return f(new Error(y.errorMessage));
        h(y);
      });
      const m = (y) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: l,
            response: { method: "watchAsset", result: !1 },
          });
        },
        S = () => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: l,
            response: { method: "watchAsset", result: !0 },
          });
        };
      this.ui.inlineWatchAsset() &&
        this.ui.watchAsset({
          onApprove: S,
          onCancel: m,
          type: t,
          address: r,
          symbol: n,
          decimals: s,
          image: i,
          chainId: o,
        }),
        !this.ui.inlineWatchAsset() &&
          !this.ui.isStandalone() &&
          this.publishWeb3RequestEvent(l, a);
    });
    return { cancel: d, promise: u };
  }
  addEthereumChain(t, r, n, s, i, o) {
    const a = {
      method: "addEthereumChain",
      params: {
        chainId: t,
        rpcUrls: r,
        blockExplorerUrls: s,
        chainName: i,
        iconUrls: n,
        nativeCurrency: o,
      },
    };
    let c = null;
    const l = (0, ue.randomBytesHex)(8),
      d = (h) => {
        this.publishWeb3RequestCanceledEvent(l),
          this.handleErrorResponse(l, a.method, h),
          c?.();
      };
    return (
      this.ui.inlineAddEthereumChain(t) ||
        (c = this.ui.showConnecting({
          isUnlinkedErrorState: this.isUnlinkedErrorState,
          onCancel: d,
          onResetConnection: this.resetAndReload,
        })),
      {
        promise: new Promise((h, f) => {
          this.relayEventManager.callbacks.set(l, (y) => {
            if ((c?.(), (0, Rt.isErrorResponse)(y)))
              return f(new Error(y.errorMessage));
            h(y);
          });
          const m = (y) => {
              this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: l,
                response: {
                  method: "addEthereumChain",
                  result: { isApproved: !1, rpcUrl: "" },
                },
              });
            },
            S = (y) => {
              this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: l,
                response: {
                  method: "addEthereumChain",
                  result: { isApproved: !0, rpcUrl: y },
                },
              });
            };
          this.ui.inlineAddEthereumChain(t) &&
            this.ui.addEthereumChain({
              onCancel: m,
              onApprove: S,
              chainId: a.params.chainId,
              rpcUrls: a.params.rpcUrls,
              blockExplorerUrls: a.params.blockExplorerUrls,
              chainName: a.params.chainName,
              iconUrls: a.params.iconUrls,
              nativeCurrency: a.params.nativeCurrency,
            }),
            !this.ui.inlineAddEthereumChain(t) &&
              !this.ui.isStandalone() &&
              this.publishWeb3RequestEvent(l, a);
        }),
        cancel: d,
      }
    );
  }
  switchEthereumChain(t, r) {
    const n = {
        method: "switchEthereumChain",
        params: Object.assign({ chainId: t }, { address: r }),
      },
      s = (0, ue.randomBytesHex)(8),
      i = (a) => {
        this.publishWeb3RequestCanceledEvent(s),
          this.handleErrorResponse(s, n.method, a);
      };
    return {
      promise: new Promise((a, c) => {
        this.relayEventManager.callbacks.set(s, (u) => {
          if ((0, Rt.isErrorResponse)(u) && u.errorCode)
            return c(
              Kt.standardErrors.provider.custom({
                code: u.errorCode,
                message:
                  "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
              })
            );
          if ((0, Rt.isErrorResponse)(u)) return c(new Error(u.errorMessage));
          a(u);
        });
        const l = (u) => {
            var h;
            if (u) {
              const f =
                (h = (0, Kt.getErrorCode)(u)) !== null && h !== void 0
                  ? h
                  : Kt.standardErrorCodes.provider.unsupportedChain;
              this.handleErrorResponse(
                s,
                "switchEthereumChain",
                u instanceof Error
                  ? u
                  : Kt.standardErrors.provider.unsupportedChain(t),
                f
              );
            } else
              this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: s,
                response: {
                  method: "switchEthereumChain",
                  result: { isApproved: !1, rpcUrl: "" },
                },
              });
          },
          d = (u) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id: s,
              response: {
                method: "switchEthereumChain",
                result: { isApproved: !0, rpcUrl: u },
              },
            });
          };
        this.ui.switchEthereumChain({
          onCancel: l,
          onApprove: d,
          chainId: n.params.chainId,
          address: n.params.address,
        }),
          !this.ui.inlineSwitchEthereumChain() &&
            !this.ui.isStandalone() &&
            this.publishWeb3RequestEvent(s, n);
      }),
      cancel: i,
    };
  }
  inlineAddEthereumChain(t) {
    return this.ui.inlineAddEthereumChain(t);
  }
  getSessionIdHash() {
    return gt.Session.hash(this._session.id);
  }
  sendRequestStandalone(t, r) {
    const n = (i) => {
        this.handleErrorResponse(t, r.method, i);
      },
      s = (i) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: t,
          response: i,
        });
      };
    switch (r.method) {
      case "signEthereumMessage":
        this.ui.signEthereumMessage({ request: r, onSuccess: s, onCancel: n });
        break;
      case "signEthereumTransaction":
        this.ui.signEthereumTransaction({
          request: r,
          onSuccess: s,
          onCancel: n,
        });
        break;
      case "submitEthereumTransaction":
        this.ui.submitEthereumTransaction({
          request: r,
          onSuccess: s,
          onCancel: n,
        });
        break;
      case "ethereumAddressFromSignedMessage":
        this.ui.ethereumAddressFromSignedMessage({ request: r, onSuccess: s });
        break;
      default:
        n();
        break;
    }
  }
}
Zr.WalletLinkRelay = at;
at.accountRequestCallbackIds = new Set();
var on = {},
  ms = {},
  uu = {};
(function (e) {
  var t =
      (F && F.__createBinding) ||
      (Object.create
        ? function (n, s, i, o) {
            o === void 0 && (o = i);
            var a = Object.getOwnPropertyDescriptor(s, i);
            (!a ||
              ("get" in a ? !s.__esModule : a.writable || a.configurable)) &&
              (a = {
                enumerable: !0,
                get: function () {
                  return s[i];
                },
              }),
              Object.defineProperty(n, o, a);
          }
        : function (n, s, i, o) {
            o === void 0 && (o = i), (n[o] = s[i]);
          }),
    r =
      (F && F.__exportStar) ||
      function (n, s) {
        for (var i in n)
          i !== "default" &&
            !Object.prototype.hasOwnProperty.call(s, i) &&
            t(s, n, i);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(Vo, e);
})(uu);
var qo = {};
Object.defineProperty(qo, "__esModule", { value: !0 });
qo.default = (() =>
  ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}")();
var du =
  (F && F.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(ms, "__esModule", { value: !0 });
ms.RedirectDialog = void 0;
const Z0 = du(sn),
  Ye = xe,
  K0 = tn,
  Q0 = uu,
  Y0 = du(qo);
class X0 {
  constructor() {
    this.root = null;
  }
  attach() {
    const t = document.documentElement;
    (this.root = document.createElement("div")),
      (this.root.className = "-cbwsdk-css-reset"),
      t.appendChild(this.root),
      (0, K0.injectCssReset)();
  }
  present(t) {
    this.render(t);
  }
  clear() {
    this.render(null);
  }
  render(t) {
    this.root &&
      ((0, Ye.render)(null, this.root),
      t &&
        (0, Ye.render)(
          (0, Ye.h)(
            ep,
            Object.assign({}, t, {
              onDismiss: () => {
                this.clear();
              },
            })
          ),
          this.root
        ));
  }
}
ms.RedirectDialog = X0;
const ep = ({
  title: e,
  buttonText: t,
  darkMode: r,
  onButtonClick: n,
  onDismiss: s,
}) => {
  const i = r ? "dark" : "light";
  return (0, Ye.h)(
    Q0.SnackbarContainer,
    { darkMode: r },
    (0, Ye.h)(
      "div",
      { class: "-cbwsdk-redirect-dialog" },
      (0, Ye.h)("style", null, Y0.default),
      (0, Ye.h)("div", {
        class: "-cbwsdk-redirect-dialog-backdrop",
        onClick: s,
      }),
      (0, Ye.h)(
        "div",
        { class: (0, Z0.default)("-cbwsdk-redirect-dialog-box", i) },
        (0, Ye.h)("p", null, e),
        (0, Ye.h)("button", { onClick: n }, t)
      )
    )
  );
};
Object.defineProperty(on, "__esModule", { value: !0 });
on.MobileRelayUI = void 0;
const tp = ms;
class rp {
  constructor(t) {
    (this.attached = !1),
      (this.darkMode = !1),
      (this.openedWindow = null),
      (this.redirectDialog = new tp.RedirectDialog()),
      (this.darkMode = t.darkMode);
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    this.redirectDialog.attach(), (this.attached = !0);
  }
  setConnected(t) {}
  closeOpenedWindow() {
    var t;
    (t = this.openedWindow) === null || t === void 0 || t.close(),
      (this.openedWindow = null);
  }
  redirectToCoinbaseWallet(t) {
    const r = new URL("https://go.cb-w.com/walletlink");
    r.searchParams.append("redirect_url", window.location.href),
      t && r.searchParams.append("wl_url", t),
      (this.openedWindow = window.open(r.href, "cbw-opener")),
      this.openedWindow && setTimeout(() => this.closeOpenedWindow(), 5e3);
  }
  openCoinbaseWalletDeeplink(t) {
    this.redirectDialog.present({
      title: "Redirecting to Coinbase Wallet...",
      buttonText: "Open",
      darkMode: this.darkMode,
      onButtonClick: () => {
        this.redirectToCoinbaseWallet(t);
      },
    }),
      setTimeout(() => {
        this.redirectToCoinbaseWallet(t);
      }, 99);
  }
  showConnecting(t) {
    return () => {
      this.closeOpenedWindow(), this.redirectDialog.clear();
    };
  }
  hideRequestEthereumAccounts() {
    this.closeOpenedWindow(), this.redirectDialog.clear();
  }
  requestEthereumAccounts() {}
  addEthereumChain() {}
  watchAsset() {}
  selectProvider() {}
  switchEthereumChain() {}
  signEthereumMessage() {}
  signEthereumTransaction() {}
  submitEthereumTransaction() {}
  ethereumAddressFromSignedMessage() {}
  reloadUI() {}
  setStandalone() {}
  setConnectDisabled() {}
  inlineAccountsResponse() {
    return !1;
  }
  inlineAddEthereumChain() {
    return !1;
  }
  inlineWatchAsset() {
    return !1;
  }
  inlineSwitchEthereumChain() {
    return !1;
  }
  isStandalone() {
    return !1;
  }
}
on.MobileRelayUI = rp;
Object.defineProperty(Jr, "__esModule", { value: !0 });
Jr.MobileRelay = void 0;
const np = P,
  sp = Zr,
  Xa = on;
class ip extends sp.WalletLinkRelay {
  constructor(t) {
    var r;
    super(t),
      (this._enableMobileWalletLink =
        (r = t.enableMobileWalletLink) !== null && r !== void 0 ? r : !1);
  }
  requestEthereumAccounts() {
    return this._enableMobileWalletLink
      ? super.requestEthereumAccounts()
      : {
          promise: new Promise(() => {
            const t = (0, np.getLocation)();
            t.href = `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(
              t.href
            )}`;
          }),
          cancel: () => {},
        };
  }
  publishWeb3RequestEvent(t, r) {
    if (
      (super.publishWeb3RequestEvent(t, r),
      !(this._enableMobileWalletLink && this.ui instanceof Xa.MobileRelayUI))
    )
      return;
    let n = !1;
    switch (r.method) {
      case "requestEthereumAccounts":
      case "connectAndSignIn":
        (n = !0), this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());
        break;
      case "switchEthereumChain":
        return;
      default:
        (n = !0), this.ui.openCoinbaseWalletDeeplink();
        break;
    }
    n &&
      window.addEventListener(
        "blur",
        () => {
          window.addEventListener(
            "focus",
            () => {
              this.connection.checkUnseenEvents();
            },
            { once: !0 }
          );
        },
        { once: !0 }
      );
  }
  handleWeb3ResponseMessage(t) {
    super.handleWeb3ResponseMessage(t),
      this._enableMobileWalletLink &&
        this.ui instanceof Xa.MobileRelayUI &&
        this.ui.closeOpenedWindow();
  }
  connectAndSignIn(t) {
    if (!this._enableMobileWalletLink)
      throw new Error(
        "connectAndSignIn is supported only when enableMobileWalletLink is on"
      );
    return this.sendRequest({
      method: "connectAndSignIn",
      params: {
        appName: this.appName,
        appLogoUrl: this.appLogoUrl,
        domain: window.location.hostname,
        aud: window.location.href,
        version: "1",
        type: "eip4361",
        nonce: t.nonce,
        iat: new Date().toISOString(),
        chainId: `eip155:${this.dappDefaultChain}`,
        statement: t.statement,
        resources: t.resources,
      },
    });
  }
}
Jr.MobileRelay = ip;
var So = { exports: {} },
  hu = Wr.EventEmitter,
  qi,
  ec;
function op() {
  if (ec) return qi;
  ec = 1;
  function e(m, S) {
    var y = Object.keys(m);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(m);
      S &&
        (p = p.filter(function (b) {
          return Object.getOwnPropertyDescriptor(m, b).enumerable;
        })),
        y.push.apply(y, p);
    }
    return y;
  }
  function t(m) {
    for (var S = 1; S < arguments.length; S++) {
      var y = arguments[S] != null ? arguments[S] : {};
      S % 2
        ? e(Object(y), !0).forEach(function (p) {
            r(m, p, y[p]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(y))
        : e(Object(y)).forEach(function (p) {
            Object.defineProperty(m, p, Object.getOwnPropertyDescriptor(y, p));
          });
    }
    return m;
  }
  function r(m, S, y) {
    return (
      (S = o(S)),
      S in m
        ? Object.defineProperty(m, S, {
            value: y,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (m[S] = y),
      m
    );
  }
  function n(m, S) {
    if (!(m instanceof S))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(m, S) {
    for (var y = 0; y < S.length; y++) {
      var p = S[y];
      (p.enumerable = p.enumerable || !1),
        (p.configurable = !0),
        "value" in p && (p.writable = !0),
        Object.defineProperty(m, o(p.key), p);
    }
  }
  function i(m, S, y) {
    return (
      S && s(m.prototype, S),
      y && s(m, y),
      Object.defineProperty(m, "prototype", { writable: !1 }),
      m
    );
  }
  function o(m) {
    var S = a(m, "string");
    return typeof S == "symbol" ? S : String(S);
  }
  function a(m, S) {
    if (typeof m != "object" || m === null) return m;
    var y = m[Symbol.toPrimitive];
    if (y !== void 0) {
      var p = y.call(m, S || "default");
      if (typeof p != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (S === "string" ? String : Number)(m);
  }
  var c = Hr,
    l = c.Buffer,
    d = ml,
    u = d.inspect,
    h = (u && u.custom) || "inspect";
  function f(m, S, y) {
    l.prototype.copy.call(m, S, y);
  }
  return (
    (qi = (function () {
      function m() {
        n(this, m), (this.head = null), (this.tail = null), (this.length = 0);
      }
      return (
        i(m, [
          {
            key: "push",
            value: function (y) {
              var p = { data: y, next: null };
              this.length > 0 ? (this.tail.next = p) : (this.head = p),
                (this.tail = p),
                ++this.length;
            },
          },
          {
            key: "unshift",
            value: function (y) {
              var p = { data: y, next: this.head };
              this.length === 0 && (this.tail = p),
                (this.head = p),
                ++this.length;
            },
          },
          {
            key: "shift",
            value: function () {
              if (this.length !== 0) {
                var y = this.head.data;
                return (
                  this.length === 1
                    ? (this.head = this.tail = null)
                    : (this.head = this.head.next),
                  --this.length,
                  y
                );
              }
            },
          },
          {
            key: "clear",
            value: function () {
              (this.head = this.tail = null), (this.length = 0);
            },
          },
          {
            key: "join",
            value: function (y) {
              if (this.length === 0) return "";
              for (var p = this.head, b = "" + p.data; (p = p.next); )
                b += y + p.data;
              return b;
            },
          },
          {
            key: "concat",
            value: function (y) {
              if (this.length === 0) return l.alloc(0);
              for (var p = l.allocUnsafe(y >>> 0), b = this.head, v = 0; b; )
                f(b.data, p, v), (v += b.data.length), (b = b.next);
              return p;
            },
          },
          {
            key: "consume",
            value: function (y, p) {
              var b;
              return (
                y < this.head.data.length
                  ? ((b = this.head.data.slice(0, y)),
                    (this.head.data = this.head.data.slice(y)))
                  : y === this.head.data.length
                  ? (b = this.shift())
                  : (b = p ? this._getString(y) : this._getBuffer(y)),
                b
              );
            },
          },
          {
            key: "first",
            value: function () {
              return this.head.data;
            },
          },
          {
            key: "_getString",
            value: function (y) {
              var p = this.head,
                b = 1,
                v = p.data;
              for (y -= v.length; (p = p.next); ) {
                var C = p.data,
                  R = y > C.length ? C.length : y;
                if (
                  (R === C.length ? (v += C) : (v += C.slice(0, y)),
                  (y -= R),
                  y === 0)
                ) {
                  R === C.length
                    ? (++b,
                      p.next
                        ? (this.head = p.next)
                        : (this.head = this.tail = null))
                    : ((this.head = p), (p.data = C.slice(R)));
                  break;
                }
                ++b;
              }
              return (this.length -= b), v;
            },
          },
          {
            key: "_getBuffer",
            value: function (y) {
              var p = l.allocUnsafe(y),
                b = this.head,
                v = 1;
              for (b.data.copy(p), y -= b.data.length; (b = b.next); ) {
                var C = b.data,
                  R = y > C.length ? C.length : y;
                if ((C.copy(p, p.length - y, 0, R), (y -= R), y === 0)) {
                  R === C.length
                    ? (++v,
                      b.next
                        ? (this.head = b.next)
                        : (this.head = this.tail = null))
                    : ((this.head = b), (b.data = C.slice(R)));
                  break;
                }
                ++v;
              }
              return (this.length -= v), p;
            },
          },
          {
            key: h,
            value: function (y, p) {
              return u(this, t(t({}, p), {}, { depth: 0, customInspect: !1 }));
            },
          },
        ]),
        m
      );
    })()),
    qi
  );
}
function ap(e, t) {
  var r = this,
    n = this._readableState && this._readableState.destroyed,
    s = this._writableState && this._writableState.destroyed;
  return n || s
    ? (t
        ? t(e)
        : e &&
          (this._writableState
            ? this._writableState.errorEmitted ||
              ((this._writableState.errorEmitted = !0),
              process.nextTick(Ro, this, e))
            : process.nextTick(Ro, this, e)),
      this)
    : (this._readableState && (this._readableState.destroyed = !0),
      this._writableState && (this._writableState.destroyed = !0),
      this._destroy(e || null, function (i) {
        !t && i
          ? r._writableState
            ? r._writableState.errorEmitted
              ? process.nextTick(Pn, r)
              : ((r._writableState.errorEmitted = !0),
                process.nextTick(tc, r, i))
            : process.nextTick(tc, r, i)
          : t
          ? (process.nextTick(Pn, r), t(i))
          : process.nextTick(Pn, r);
      }),
      this);
}
function tc(e, t) {
  Ro(e, t), Pn(e);
}
function Pn(e) {
  (e._writableState && !e._writableState.emitClose) ||
    (e._readableState && !e._readableState.emitClose) ||
    e.emit("close");
}
function cp() {
  this._readableState &&
    ((this._readableState.destroyed = !1),
    (this._readableState.reading = !1),
    (this._readableState.ended = !1),
    (this._readableState.endEmitted = !1)),
    this._writableState &&
      ((this._writableState.destroyed = !1),
      (this._writableState.ended = !1),
      (this._writableState.ending = !1),
      (this._writableState.finalCalled = !1),
      (this._writableState.prefinished = !1),
      (this._writableState.finished = !1),
      (this._writableState.errorEmitted = !1));
}
function Ro(e, t) {
  e.emit("error", t);
}
function lp(e, t) {
  var r = e._readableState,
    n = e._writableState;
  (r && r.autoDestroy) || (n && n.autoDestroy)
    ? e.destroy(t)
    : e.emit("error", t);
}
var fu = { destroy: ap, undestroy: cp, errorOrDestroy: lp },
  Ht = {};
function up(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var pu = {};
function je(e, t, r) {
  r || (r = Error);
  function n(i, o, a) {
    return typeof t == "string" ? t : t(i, o, a);
  }
  var s = (function (i) {
    up(o, i);
    function o(a, c, l) {
      return i.call(this, n(a, c, l)) || this;
    }
    return o;
  })(r);
  (s.prototype.name = r.name), (s.prototype.code = e), (pu[e] = s);
}
function rc(e, t) {
  if (Array.isArray(e)) {
    var r = e.length;
    return (
      (e = e.map(function (n) {
        return String(n);
      })),
      r > 2
        ? "one of "
            .concat(t, " ")
            .concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1]
        : r === 2
        ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
        : "of ".concat(t, " ").concat(e[0])
    );
  } else return "of ".concat(t, " ").concat(String(e));
}
function dp(e, t, r) {
  return e.substr(!r || r < 0 ? 0 : +r, t.length) === t;
}
function hp(e, t, r) {
  return (
    (r === void 0 || r > e.length) && (r = e.length),
    e.substring(r - t.length, r) === t
  );
}
function fp(e, t, r) {
  return (
    typeof r != "number" && (r = 0),
    r + t.length > e.length ? !1 : e.indexOf(t, r) !== -1
  );
}
je(
  "ERR_INVALID_OPT_VALUE",
  function (e, t) {
    return 'The value "' + t + '" is invalid for option "' + e + '"';
  },
  TypeError
);
je(
  "ERR_INVALID_ARG_TYPE",
  function (e, t, r) {
    var n;
    typeof t == "string" && dp(t, "not ")
      ? ((n = "must not be"), (t = t.replace(/^not /, "")))
      : (n = "must be");
    var s;
    if (hp(e, " argument"))
      s = "The ".concat(e, " ").concat(n, " ").concat(rc(t, "type"));
    else {
      var i = fp(e, ".") ? "property" : "argument";
      s = 'The "'
        .concat(e, '" ')
        .concat(i, " ")
        .concat(n, " ")
        .concat(rc(t, "type"));
    }
    return (s += ". Received type ".concat(typeof r)), s;
  },
  TypeError
);
je("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
je("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
  return "The " + e + " method is not implemented";
});
je("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
je("ERR_STREAM_DESTROYED", function (e) {
  return "Cannot call " + e + " after a stream was destroyed";
});
je("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
je("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
je("ERR_STREAM_WRITE_AFTER_END", "write after end");
je("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
je(
  "ERR_UNKNOWN_ENCODING",
  function (e) {
    return "Unknown encoding: " + e;
  },
  TypeError
);
je("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
Ht.codes = pu;
var pp = Ht.codes.ERR_INVALID_OPT_VALUE;
function gp(e, t, r) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
}
function _p(e, t, r, n) {
  var s = gp(t, n, r);
  if (s != null) {
    if (!(isFinite(s) && Math.floor(s) === s) || s < 0) {
      var i = n ? r : "highWaterMark";
      throw new pp(i, s);
    }
    return Math.floor(s);
  }
  return e.objectMode ? 16 : 16 * 1024;
}
var gu = { getHighWaterMark: _p },
  mp = bp;
function bp(e, t) {
  if (Gi("noDeprecation")) return e;
  var r = !1;
  function n() {
    if (!r) {
      if (Gi("throwDeprecation")) throw new Error(t);
      Gi("traceDeprecation") ? console.trace(t) : console.warn(t), (r = !0);
    }
    return e.apply(this, arguments);
  }
  return n;
}
function Gi(e) {
  try {
    if (!F.localStorage) return !1;
  } catch {
    return !1;
  }
  var t = F.localStorage[e];
  return t == null ? !1 : String(t).toLowerCase() === "true";
}
var Ji, nc;
function _u() {
  if (nc) return Ji;
  (nc = 1), (Ji = $);
  function e(w) {
    var E = this;
    (this.next = null),
      (this.entry = null),
      (this.finish = function () {
        Ce(E, w);
      });
  }
  var t;
  $.WritableState = I;
  var r = { deprecate: mp },
    n = hu,
    s = Hr.Buffer,
    i =
      (typeof F < "u"
        ? F
        : typeof window < "u"
        ? window
        : typeof self < "u"
        ? self
        : {}
      ).Uint8Array || function () {};
  function o(w) {
    return s.from(w);
  }
  function a(w) {
    return s.isBuffer(w) || w instanceof i;
  }
  var c = fu,
    l = gu,
    d = l.getHighWaterMark,
    u = Ht.codes,
    h = u.ERR_INVALID_ARG_TYPE,
    f = u.ERR_METHOD_NOT_IMPLEMENTED,
    m = u.ERR_MULTIPLE_CALLBACK,
    S = u.ERR_STREAM_CANNOT_PIPE,
    y = u.ERR_STREAM_DESTROYED,
    p = u.ERR_STREAM_NULL_VALUES,
    b = u.ERR_STREAM_WRITE_AFTER_END,
    v = u.ERR_UNKNOWN_ENCODING,
    C = c.errorOrDestroy;
  Ve($, n);
  function R() {}
  function I(w, E, A) {
    (t = t || dr()),
      (w = w || {}),
      typeof A != "boolean" && (A = E instanceof t),
      (this.objectMode = !!w.objectMode),
      A && (this.objectMode = this.objectMode || !!w.writableObjectMode),
      (this.highWaterMark = d(this, w, "writableHighWaterMark", A)),
      (this.finalCalled = !1),
      (this.needDrain = !1),
      (this.ending = !1),
      (this.ended = !1),
      (this.finished = !1),
      (this.destroyed = !1);
    var U = w.decodeStrings === !1;
    (this.decodeStrings = !U),
      (this.defaultEncoding = w.defaultEncoding || "utf8"),
      (this.length = 0),
      (this.writing = !1),
      (this.corked = 0),
      (this.sync = !0),
      (this.bufferProcessing = !1),
      (this.onwrite = function (Z) {
        D(E, Z);
      }),
      (this.writecb = null),
      (this.writelen = 0),
      (this.bufferedRequest = null),
      (this.lastBufferedRequest = null),
      (this.pendingcb = 0),
      (this.prefinished = !1),
      (this.errorEmitted = !1),
      (this.emitClose = w.emitClose !== !1),
      (this.autoDestroy = !!w.autoDestroy),
      (this.bufferedRequestCount = 0),
      (this.corkedRequestsFree = new e(this));
  }
  (I.prototype.getBuffer = function () {
    for (var E = this.bufferedRequest, A = []; E; ) A.push(E), (E = E.next);
    return A;
  }),
    (function () {
      try {
        Object.defineProperty(I.prototype, "buffer", {
          get: r.deprecate(
            function () {
              return this.getBuffer();
            },
            "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
            "DEP0003"
          ),
        });
      } catch {}
    })();
  var j;
  typeof Symbol == "function" &&
  Symbol.hasInstance &&
  typeof Function.prototype[Symbol.hasInstance] == "function"
    ? ((j = Function.prototype[Symbol.hasInstance]),
      Object.defineProperty($, Symbol.hasInstance, {
        value: function (E) {
          return j.call(this, E)
            ? !0
            : this !== $
            ? !1
            : E && E._writableState instanceof I;
        },
      }))
    : (j = function (E) {
        return E instanceof this;
      });
  function $(w) {
    t = t || dr();
    var E = this instanceof t;
    if (!E && !j.call($, this)) return new $(w);
    (this._writableState = new I(w, this, E)),
      (this.writable = !0),
      w &&
        (typeof w.write == "function" && (this._write = w.write),
        typeof w.writev == "function" && (this._writev = w.writev),
        typeof w.destroy == "function" && (this._destroy = w.destroy),
        typeof w.final == "function" && (this._final = w.final)),
      n.call(this);
  }
  $.prototype.pipe = function () {
    C(this, new S());
  };
  function N(w, E) {
    var A = new b();
    C(w, A), process.nextTick(E, A);
  }
  function G(w, E, A, U) {
    var Z;
    return (
      A === null
        ? (Z = new p())
        : typeof A != "string" &&
          !E.objectMode &&
          (Z = new h("chunk", ["string", "Buffer"], A)),
      Z ? (C(w, Z), process.nextTick(U, Z), !1) : !0
    );
  }
  ($.prototype.write = function (w, E, A) {
    var U = this._writableState,
      Z = !1,
      g = !U.objectMode && a(w);
    return (
      g && !s.isBuffer(w) && (w = o(w)),
      typeof E == "function" && ((A = E), (E = null)),
      g ? (E = "buffer") : E || (E = U.defaultEncoding),
      typeof A != "function" && (A = R),
      U.ending
        ? N(this, A)
        : (g || G(this, U, w, A)) &&
          (U.pendingcb++, (Z = se(this, U, g, w, E, A))),
      Z
    );
  }),
    ($.prototype.cork = function () {
      this._writableState.corked++;
    }),
    ($.prototype.uncork = function () {
      var w = this._writableState;
      w.corked &&
        (w.corked--,
        !w.writing &&
          !w.corked &&
          !w.bufferProcessing &&
          w.bufferedRequest &&
          H(this, w));
    }),
    ($.prototype.setDefaultEncoding = function (E) {
      if (
        (typeof E == "string" && (E = E.toLowerCase()),
        !(
          [
            "hex",
            "utf8",
            "utf-8",
            "ascii",
            "binary",
            "base64",
            "ucs2",
            "ucs-2",
            "utf16le",
            "utf-16le",
            "raw",
          ].indexOf((E + "").toLowerCase()) > -1
        ))
      )
        throw new v(E);
      return (this._writableState.defaultEncoding = E), this;
    }),
    Object.defineProperty($.prototype, "writableBuffer", {
      enumerable: !1,
      get: function () {
        return this._writableState && this._writableState.getBuffer();
      },
    });
  function le(w, E, A) {
    return (
      !w.objectMode &&
        w.decodeStrings !== !1 &&
        typeof E == "string" &&
        (E = s.from(E, A)),
      E
    );
  }
  Object.defineProperty($.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  function se(w, E, A, U, Z, g) {
    if (!A) {
      var _ = le(E, U, Z);
      U !== _ && ((A = !0), (Z = "buffer"), (U = _));
    }
    var k = E.objectMode ? 1 : U.length;
    E.length += k;
    var M = E.length < E.highWaterMark;
    if ((M || (E.needDrain = !0), E.writing || E.corked)) {
      var ce = E.lastBufferedRequest;
      (E.lastBufferedRequest = {
        chunk: U,
        encoding: Z,
        isBuf: A,
        callback: g,
        next: null,
      }),
        ce
          ? (ce.next = E.lastBufferedRequest)
          : (E.bufferedRequest = E.lastBufferedRequest),
        (E.bufferedRequestCount += 1);
    } else T(w, E, !1, k, U, Z, g);
    return M;
  }
  function T(w, E, A, U, Z, g, _) {
    (E.writelen = U),
      (E.writecb = _),
      (E.writing = !0),
      (E.sync = !0),
      E.destroyed
        ? E.onwrite(new y("write"))
        : A
        ? w._writev(Z, E.onwrite)
        : w._write(Z, g, E.onwrite),
      (E.sync = !1);
  }
  function x(w, E, A, U, Z) {
    --E.pendingcb,
      A
        ? (process.nextTick(Z, U),
          process.nextTick(ie, w, E),
          (w._writableState.errorEmitted = !0),
          C(w, U))
        : (Z(U), (w._writableState.errorEmitted = !0), C(w, U), ie(w, E));
  }
  function O(w) {
    (w.writing = !1),
      (w.writecb = null),
      (w.length -= w.writelen),
      (w.writelen = 0);
  }
  function D(w, E) {
    var A = w._writableState,
      U = A.sync,
      Z = A.writecb;
    if (typeof Z != "function") throw new m();
    if ((O(A), E)) x(w, A, U, E, Z);
    else {
      var g = J(A) || w.destroyed;
      !g && !A.corked && !A.bufferProcessing && A.bufferedRequest && H(w, A),
        U ? process.nextTick(B, w, A, g, Z) : B(w, A, g, Z);
    }
  }
  function B(w, E, A, U) {
    A || L(w, E), E.pendingcb--, U(), ie(w, E);
  }
  function L(w, E) {
    E.length === 0 && E.needDrain && ((E.needDrain = !1), w.emit("drain"));
  }
  function H(w, E) {
    E.bufferProcessing = !0;
    var A = E.bufferedRequest;
    if (w._writev && A && A.next) {
      var U = E.bufferedRequestCount,
        Z = new Array(U),
        g = E.corkedRequestsFree;
      g.entry = A;
      for (var _ = 0, k = !0; A; )
        (Z[_] = A), A.isBuf || (k = !1), (A = A.next), (_ += 1);
      (Z.allBuffers = k),
        T(w, E, !0, E.length, Z, "", g.finish),
        E.pendingcb++,
        (E.lastBufferedRequest = null),
        g.next
          ? ((E.corkedRequestsFree = g.next), (g.next = null))
          : (E.corkedRequestsFree = new e(E)),
        (E.bufferedRequestCount = 0);
    } else {
      for (; A; ) {
        var M = A.chunk,
          ce = A.encoding,
          q = A.callback,
          ne = E.objectMode ? 1 : M.length;
        if (
          (T(w, E, !1, ne, M, ce, q),
          (A = A.next),
          E.bufferedRequestCount--,
          E.writing)
        )
          break;
      }
      A === null && (E.lastBufferedRequest = null);
    }
    (E.bufferedRequest = A), (E.bufferProcessing = !1);
  }
  ($.prototype._write = function (w, E, A) {
    A(new f("_write()"));
  }),
    ($.prototype._writev = null),
    ($.prototype.end = function (w, E, A) {
      var U = this._writableState;
      return (
        typeof w == "function"
          ? ((A = w), (w = null), (E = null))
          : typeof E == "function" && ((A = E), (E = null)),
        w != null && this.write(w, E),
        U.corked && ((U.corked = 1), this.uncork()),
        U.ending || re(this, U, A),
        this
      );
    }),
    Object.defineProperty($.prototype, "writableLength", {
      enumerable: !1,
      get: function () {
        return this._writableState.length;
      },
    });
  function J(w) {
    return (
      w.ending &&
      w.length === 0 &&
      w.bufferedRequest === null &&
      !w.finished &&
      !w.writing
    );
  }
  function W(w, E) {
    w._final(function (A) {
      E.pendingcb--,
        A && C(w, A),
        (E.prefinished = !0),
        w.emit("prefinish"),
        ie(w, E);
    });
  }
  function Q(w, E) {
    !E.prefinished &&
      !E.finalCalled &&
      (typeof w._final == "function" && !E.destroyed
        ? (E.pendingcb++, (E.finalCalled = !0), process.nextTick(W, w, E))
        : ((E.prefinished = !0), w.emit("prefinish")));
  }
  function ie(w, E) {
    var A = J(E);
    if (
      A &&
      (Q(w, E),
      E.pendingcb === 0 && ((E.finished = !0), w.emit("finish"), E.autoDestroy))
    ) {
      var U = w._readableState;
      (!U || (U.autoDestroy && U.endEmitted)) && w.destroy();
    }
    return A;
  }
  function re(w, E, A) {
    (E.ending = !0),
      ie(w, E),
      A && (E.finished ? process.nextTick(A) : w.once("finish", A)),
      (E.ended = !0),
      (w.writable = !1);
  }
  function Ce(w, E, A) {
    var U = w.entry;
    for (w.entry = null; U; ) {
      var Z = U.callback;
      E.pendingcb--, Z(A), (U = U.next);
    }
    E.corkedRequestsFree.next = w;
  }
  return (
    Object.defineProperty($.prototype, "destroyed", {
      enumerable: !1,
      get: function () {
        return this._writableState === void 0
          ? !1
          : this._writableState.destroyed;
      },
      set: function (E) {
        this._writableState && (this._writableState.destroyed = E);
      },
    }),
    ($.prototype.destroy = c.destroy),
    ($.prototype._undestroy = c.undestroy),
    ($.prototype._destroy = function (w, E) {
      E(w);
    }),
    Ji
  );
}
var Zi, sc;
function dr() {
  if (sc) return Zi;
  sc = 1;
  var e =
    Object.keys ||
    function (l) {
      var d = [];
      for (var u in l) d.push(u);
      return d;
    };
  Zi = o;
  var t = bu(),
    r = _u();
  Ve(o, t);
  for (var n = e(r.prototype), s = 0; s < n.length; s++) {
    var i = n[s];
    o.prototype[i] || (o.prototype[i] = r.prototype[i]);
  }
  function o(l) {
    if (!(this instanceof o)) return new o(l);
    t.call(this, l),
      r.call(this, l),
      (this.allowHalfOpen = !0),
      l &&
        (l.readable === !1 && (this.readable = !1),
        l.writable === !1 && (this.writable = !1),
        l.allowHalfOpen === !1 &&
          ((this.allowHalfOpen = !1), this.once("end", a)));
  }
  Object.defineProperty(o.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  }),
    Object.defineProperty(o.prototype, "writableBuffer", {
      enumerable: !1,
      get: function () {
        return this._writableState && this._writableState.getBuffer();
      },
    }),
    Object.defineProperty(o.prototype, "writableLength", {
      enumerable: !1,
      get: function () {
        return this._writableState.length;
      },
    });
  function a() {
    this._writableState.ended || process.nextTick(c, this);
  }
  function c(l) {
    l.end();
  }
  return (
    Object.defineProperty(o.prototype, "destroyed", {
      enumerable: !1,
      get: function () {
        return this._readableState === void 0 || this._writableState === void 0
          ? !1
          : this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function (d) {
        this._readableState === void 0 ||
          this._writableState === void 0 ||
          ((this._readableState.destroyed = d),
          (this._writableState.destroyed = d));
      },
    }),
    Zi
  );
}
var Ki = {},
  Sn = { exports: {} },
  ic;
function yp() {
  return (
    ic ||
      ((ic = 1),
      (function (e, t) {
        var r = Hr,
          n = r.Buffer;
        function s(o, a) {
          for (var c in o) a[c] = o[c];
        }
        n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
          ? (e.exports = r)
          : (s(r, t), (t.Buffer = i));
        function i(o, a, c) {
          return n(o, a, c);
        }
        s(n, i),
          (i.from = function (o, a, c) {
            if (typeof o == "number")
              throw new TypeError("Argument must not be a number");
            return n(o, a, c);
          }),
          (i.alloc = function (o, a, c) {
            if (typeof o != "number")
              throw new TypeError("Argument must be a number");
            var l = n(o);
            return (
              a !== void 0
                ? typeof c == "string"
                  ? l.fill(a, c)
                  : l.fill(a)
                : l.fill(0),
              l
            );
          }),
          (i.allocUnsafe = function (o) {
            if (typeof o != "number")
              throw new TypeError("Argument must be a number");
            return n(o);
          }),
          (i.allocUnsafeSlow = function (o) {
            if (typeof o != "number")
              throw new TypeError("Argument must be a number");
            return r.SlowBuffer(o);
          });
      })(Sn, Sn.exports)),
    Sn.exports
  );
}
var oc;
function ac() {
  if (oc) return Ki;
  oc = 1;
  var e = yp().Buffer,
    t =
      e.isEncoding ||
      function (p) {
        switch (((p = "" + p), p && p.toLowerCase())) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return !0;
          default:
            return !1;
        }
      };
  function r(p) {
    if (!p) return "utf8";
    for (var b; ; )
      switch (p) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return p;
        default:
          if (b) return;
          (p = ("" + p).toLowerCase()), (b = !0);
      }
  }
  function n(p) {
    var b = r(p);
    if (typeof b != "string" && (e.isEncoding === t || !t(p)))
      throw new Error("Unknown encoding: " + p);
    return b || p;
  }
  Ki.StringDecoder = s;
  function s(p) {
    this.encoding = n(p);
    var b;
    switch (this.encoding) {
      case "utf16le":
        (this.text = u), (this.end = h), (b = 4);
        break;
      case "utf8":
        (this.fillLast = c), (b = 4);
        break;
      case "base64":
        (this.text = f), (this.end = m), (b = 3);
        break;
      default:
        (this.write = S), (this.end = y);
        return;
    }
    (this.lastNeed = 0),
      (this.lastTotal = 0),
      (this.lastChar = e.allocUnsafe(b));
  }
  (s.prototype.write = function (p) {
    if (p.length === 0) return "";
    var b, v;
    if (this.lastNeed) {
      if (((b = this.fillLast(p)), b === void 0)) return "";
      (v = this.lastNeed), (this.lastNeed = 0);
    } else v = 0;
    return v < p.length ? (b ? b + this.text(p, v) : this.text(p, v)) : b || "";
  }),
    (s.prototype.end = d),
    (s.prototype.text = l),
    (s.prototype.fillLast = function (p) {
      if (this.lastNeed <= p.length)
        return (
          p.copy(
            this.lastChar,
            this.lastTotal - this.lastNeed,
            0,
            this.lastNeed
          ),
          this.lastChar.toString(this.encoding, 0, this.lastTotal)
        );
      p.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, p.length),
        (this.lastNeed -= p.length);
    });
  function i(p) {
    return p <= 127
      ? 0
      : p >> 5 === 6
      ? 2
      : p >> 4 === 14
      ? 3
      : p >> 3 === 30
      ? 4
      : p >> 6 === 2
      ? -1
      : -2;
  }
  function o(p, b, v) {
    var C = b.length - 1;
    if (C < v) return 0;
    var R = i(b[C]);
    return R >= 0
      ? (R > 0 && (p.lastNeed = R - 1), R)
      : --C < v || R === -2
      ? 0
      : ((R = i(b[C])),
        R >= 0
          ? (R > 0 && (p.lastNeed = R - 2), R)
          : --C < v || R === -2
          ? 0
          : ((R = i(b[C])),
            R >= 0
              ? (R > 0 && (R === 2 ? (R = 0) : (p.lastNeed = R - 3)), R)
              : 0));
  }
  function a(p, b, v) {
    if ((b[0] & 192) !== 128) return (p.lastNeed = 0), "�";
    if (p.lastNeed > 1 && b.length > 1) {
      if ((b[1] & 192) !== 128) return (p.lastNeed = 1), "�";
      if (p.lastNeed > 2 && b.length > 2 && (b[2] & 192) !== 128)
        return (p.lastNeed = 2), "�";
    }
  }
  function c(p) {
    var b = this.lastTotal - this.lastNeed,
      v = a(this, p);
    if (v !== void 0) return v;
    if (this.lastNeed <= p.length)
      return (
        p.copy(this.lastChar, b, 0, this.lastNeed),
        this.lastChar.toString(this.encoding, 0, this.lastTotal)
      );
    p.copy(this.lastChar, b, 0, p.length), (this.lastNeed -= p.length);
  }
  function l(p, b) {
    var v = o(this, p, b);
    if (!this.lastNeed) return p.toString("utf8", b);
    this.lastTotal = v;
    var C = p.length - (v - this.lastNeed);
    return p.copy(this.lastChar, 0, C), p.toString("utf8", b, C);
  }
  function d(p) {
    var b = p && p.length ? this.write(p) : "";
    return this.lastNeed ? b + "�" : b;
  }
  function u(p, b) {
    if ((p.length - b) % 2 === 0) {
      var v = p.toString("utf16le", b);
      if (v) {
        var C = v.charCodeAt(v.length - 1);
        if (C >= 55296 && C <= 56319)
          return (
            (this.lastNeed = 2),
            (this.lastTotal = 4),
            (this.lastChar[0] = p[p.length - 2]),
            (this.lastChar[1] = p[p.length - 1]),
            v.slice(0, -1)
          );
      }
      return v;
    }
    return (
      (this.lastNeed = 1),
      (this.lastTotal = 2),
      (this.lastChar[0] = p[p.length - 1]),
      p.toString("utf16le", b, p.length - 1)
    );
  }
  function h(p) {
    var b = p && p.length ? this.write(p) : "";
    if (this.lastNeed) {
      var v = this.lastTotal - this.lastNeed;
      return b + this.lastChar.toString("utf16le", 0, v);
    }
    return b;
  }
  function f(p, b) {
    var v = (p.length - b) % 3;
    return v === 0
      ? p.toString("base64", b)
      : ((this.lastNeed = 3 - v),
        (this.lastTotal = 3),
        v === 1
          ? (this.lastChar[0] = p[p.length - 1])
          : ((this.lastChar[0] = p[p.length - 2]),
            (this.lastChar[1] = p[p.length - 1])),
        p.toString("base64", b, p.length - v));
  }
  function m(p) {
    var b = p && p.length ? this.write(p) : "";
    return this.lastNeed
      ? b + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
      : b;
  }
  function S(p) {
    return p.toString(this.encoding);
  }
  function y(p) {
    return p && p.length ? this.write(p) : "";
  }
  return Ki;
}
var cc = Ht.codes.ERR_STREAM_PREMATURE_CLOSE;
function vp(e) {
  var t = !1;
  return function () {
    if (!t) {
      t = !0;
      for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++)
        n[s] = arguments[s];
      e.apply(this, n);
    }
  };
}
function wp() {}
function Ep(e) {
  return e.setHeader && typeof e.abort == "function";
}
function mu(e, t, r) {
  if (typeof t == "function") return mu(e, null, t);
  t || (t = {}), (r = vp(r || wp));
  var n = t.readable || (t.readable !== !1 && e.readable),
    s = t.writable || (t.writable !== !1 && e.writable),
    i = function () {
      e.writable || a();
    },
    o = e._writableState && e._writableState.finished,
    a = function () {
      (s = !1), (o = !0), n || r.call(e);
    },
    c = e._readableState && e._readableState.endEmitted,
    l = function () {
      (n = !1), (c = !0), s || r.call(e);
    },
    d = function (m) {
      r.call(e, m);
    },
    u = function () {
      var m;
      if (n && !c)
        return (
          (!e._readableState || !e._readableState.ended) && (m = new cc()),
          r.call(e, m)
        );
      if (s && !o)
        return (
          (!e._writableState || !e._writableState.ended) && (m = new cc()),
          r.call(e, m)
        );
    },
    h = function () {
      e.req.on("finish", a);
    };
  return (
    Ep(e)
      ? (e.on("complete", a),
        e.on("abort", u),
        e.req ? h() : e.on("request", h))
      : s && !e._writableState && (e.on("end", i), e.on("close", i)),
    e.on("end", l),
    e.on("finish", a),
    t.error !== !1 && e.on("error", d),
    e.on("close", u),
    function () {
      e.removeListener("complete", a),
        e.removeListener("abort", u),
        e.removeListener("request", h),
        e.req && e.req.removeListener("finish", a),
        e.removeListener("end", i),
        e.removeListener("close", i),
        e.removeListener("finish", a),
        e.removeListener("end", l),
        e.removeListener("error", d),
        e.removeListener("close", u);
    }
  );
}
var Go = mu,
  Qi,
  lc;
function Sp() {
  if (lc) return Qi;
  lc = 1;
  var e;
  function t(v, C, R) {
    return (
      (C = r(C)),
      C in v
        ? Object.defineProperty(v, C, {
            value: R,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (v[C] = R),
      v
    );
  }
  function r(v) {
    var C = n(v, "string");
    return typeof C == "symbol" ? C : String(C);
  }
  function n(v, C) {
    if (typeof v != "object" || v === null) return v;
    var R = v[Symbol.toPrimitive];
    if (R !== void 0) {
      var I = R.call(v, C || "default");
      if (typeof I != "object") return I;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (C === "string" ? String : Number)(v);
  }
  var s = Go,
    i = Symbol("lastResolve"),
    o = Symbol("lastReject"),
    a = Symbol("error"),
    c = Symbol("ended"),
    l = Symbol("lastPromise"),
    d = Symbol("handlePromise"),
    u = Symbol("stream");
  function h(v, C) {
    return { value: v, done: C };
  }
  function f(v) {
    var C = v[i];
    if (C !== null) {
      var R = v[u].read();
      R !== null && ((v[l] = null), (v[i] = null), (v[o] = null), C(h(R, !1)));
    }
  }
  function m(v) {
    process.nextTick(f, v);
  }
  function S(v, C) {
    return function (R, I) {
      v.then(function () {
        if (C[c]) {
          R(h(void 0, !0));
          return;
        }
        C[d](R, I);
      }, I);
    };
  }
  var y = Object.getPrototypeOf(function () {}),
    p = Object.setPrototypeOf(
      ((e = {
        get stream() {
          return this[u];
        },
        next: function () {
          var C = this,
            R = this[a];
          if (R !== null) return Promise.reject(R);
          if (this[c]) return Promise.resolve(h(void 0, !0));
          if (this[u].destroyed)
            return new Promise(function (N, G) {
              process.nextTick(function () {
                C[a] ? G(C[a]) : N(h(void 0, !0));
              });
            });
          var I = this[l],
            j;
          if (I) j = new Promise(S(I, this));
          else {
            var $ = this[u].read();
            if ($ !== null) return Promise.resolve(h($, !1));
            j = new Promise(this[d]);
          }
          return (this[l] = j), j;
        },
      }),
      t(e, Symbol.asyncIterator, function () {
        return this;
      }),
      t(e, "return", function () {
        var C = this;
        return new Promise(function (R, I) {
          C[u].destroy(null, function (j) {
            if (j) {
              I(j);
              return;
            }
            R(h(void 0, !0));
          });
        });
      }),
      e),
      y
    ),
    b = function (C) {
      var R,
        I = Object.create(
          p,
          ((R = {}),
          t(R, u, { value: C, writable: !0 }),
          t(R, i, { value: null, writable: !0 }),
          t(R, o, { value: null, writable: !0 }),
          t(R, a, { value: null, writable: !0 }),
          t(R, c, { value: C._readableState.endEmitted, writable: !0 }),
          t(R, d, {
            value: function ($, N) {
              var G = I[u].read();
              G
                ? ((I[l] = null), (I[i] = null), (I[o] = null), $(h(G, !1)))
                : ((I[i] = $), (I[o] = N));
            },
            writable: !0,
          }),
          R)
        );
      return (
        (I[l] = null),
        s(C, function (j) {
          if (j && j.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var $ = I[o];
            $ !== null && ((I[l] = null), (I[i] = null), (I[o] = null), $(j)),
              (I[a] = j);
            return;
          }
          var N = I[i];
          N !== null &&
            ((I[l] = null), (I[i] = null), (I[o] = null), N(h(void 0, !0))),
            (I[c] = !0);
        }),
        C.on("readable", m.bind(null, I)),
        I
      );
    };
  return (Qi = b), Qi;
}
var Yi, uc;
function Rp() {
  return (
    uc ||
      ((uc = 1),
      (Yi = function () {
        throw new Error("Readable.from is not available in the browser");
      })),
    Yi
  );
}
var Xi, dc;
function bu() {
  if (dc) return Xi;
  (dc = 1), (Xi = N);
  var e;
  (N.ReadableState = $), Wr.EventEmitter;
  var t = function (_, k) {
      return _.listeners(k).length;
    },
    r = hu,
    n = Hr.Buffer,
    s =
      (typeof F < "u"
        ? F
        : typeof window < "u"
        ? window
        : typeof self < "u"
        ? self
        : {}
      ).Uint8Array || function () {};
  function i(g) {
    return n.from(g);
  }
  function o(g) {
    return n.isBuffer(g) || g instanceof s;
  }
  var a = ml,
    c;
  a && a.debuglog ? (c = a.debuglog("stream")) : (c = function () {});
  var l = op(),
    d = fu,
    u = gu,
    h = u.getHighWaterMark,
    f = Ht.codes,
    m = f.ERR_INVALID_ARG_TYPE,
    S = f.ERR_STREAM_PUSH_AFTER_EOF,
    y = f.ERR_METHOD_NOT_IMPLEMENTED,
    p = f.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
    b,
    v,
    C;
  Ve(N, r);
  var R = d.errorOrDestroy,
    I = ["error", "close", "destroy", "pause", "resume"];
  function j(g, _, k) {
    if (typeof g.prependListener == "function") return g.prependListener(_, k);
    !g._events || !g._events[_]
      ? g.on(_, k)
      : Array.isArray(g._events[_])
      ? g._events[_].unshift(k)
      : (g._events[_] = [k, g._events[_]]);
  }
  function $(g, _, k) {
    (e = e || dr()),
      (g = g || {}),
      typeof k != "boolean" && (k = _ instanceof e),
      (this.objectMode = !!g.objectMode),
      k && (this.objectMode = this.objectMode || !!g.readableObjectMode),
      (this.highWaterMark = h(this, g, "readableHighWaterMark", k)),
      (this.buffer = new l()),
      (this.length = 0),
      (this.pipes = null),
      (this.pipesCount = 0),
      (this.flowing = null),
      (this.ended = !1),
      (this.endEmitted = !1),
      (this.reading = !1),
      (this.sync = !0),
      (this.needReadable = !1),
      (this.emittedReadable = !1),
      (this.readableListening = !1),
      (this.resumeScheduled = !1),
      (this.paused = !0),
      (this.emitClose = g.emitClose !== !1),
      (this.autoDestroy = !!g.autoDestroy),
      (this.destroyed = !1),
      (this.defaultEncoding = g.defaultEncoding || "utf8"),
      (this.awaitDrain = 0),
      (this.readingMore = !1),
      (this.decoder = null),
      (this.encoding = null),
      g.encoding &&
        (b || (b = ac().StringDecoder),
        (this.decoder = new b(g.encoding)),
        (this.encoding = g.encoding));
  }
  function N(g) {
    if (((e = e || dr()), !(this instanceof N))) return new N(g);
    var _ = this instanceof e;
    (this._readableState = new $(g, this, _)),
      (this.readable = !0),
      g &&
        (typeof g.read == "function" && (this._read = g.read),
        typeof g.destroy == "function" && (this._destroy = g.destroy)),
      r.call(this);
  }
  Object.defineProperty(N.prototype, "destroyed", {
    enumerable: !1,
    get: function () {
      return this._readableState === void 0
        ? !1
        : this._readableState.destroyed;
    },
    set: function (_) {
      this._readableState && (this._readableState.destroyed = _);
    },
  }),
    (N.prototype.destroy = d.destroy),
    (N.prototype._undestroy = d.undestroy),
    (N.prototype._destroy = function (g, _) {
      _(g);
    }),
    (N.prototype.push = function (g, _) {
      var k = this._readableState,
        M;
      return (
        k.objectMode
          ? (M = !0)
          : typeof g == "string" &&
            ((_ = _ || k.defaultEncoding),
            _ !== k.encoding && ((g = n.from(g, _)), (_ = "")),
            (M = !0)),
        G(this, g, _, !1, M)
      );
    }),
    (N.prototype.unshift = function (g) {
      return G(this, g, null, !0, !1);
    });
  function G(g, _, k, M, ce) {
    c("readableAddChunk", _);
    var q = g._readableState;
    if (_ === null) (q.reading = !1), D(g, q);
    else {
      var ne;
      if ((ce || (ne = se(q, _)), ne)) R(g, ne);
      else if (q.objectMode || (_ && _.length > 0))
        if (
          (typeof _ != "string" &&
            !q.objectMode &&
            Object.getPrototypeOf(_) !== n.prototype &&
            (_ = i(_)),
          M)
        )
          q.endEmitted ? R(g, new p()) : le(g, q, _, !0);
        else if (q.ended) R(g, new S());
        else {
          if (q.destroyed) return !1;
          (q.reading = !1),
            q.decoder && !k
              ? ((_ = q.decoder.write(_)),
                q.objectMode || _.length !== 0 ? le(g, q, _, !1) : H(g, q))
              : le(g, q, _, !1);
        }
      else M || ((q.reading = !1), H(g, q));
    }
    return !q.ended && (q.length < q.highWaterMark || q.length === 0);
  }
  function le(g, _, k, M) {
    _.flowing && _.length === 0 && !_.sync
      ? ((_.awaitDrain = 0), g.emit("data", k))
      : ((_.length += _.objectMode ? 1 : k.length),
        M ? _.buffer.unshift(k) : _.buffer.push(k),
        _.needReadable && B(g)),
      H(g, _);
  }
  function se(g, _) {
    var k;
    return (
      !o(_) &&
        typeof _ != "string" &&
        _ !== void 0 &&
        !g.objectMode &&
        (k = new m("chunk", ["string", "Buffer", "Uint8Array"], _)),
      k
    );
  }
  (N.prototype.isPaused = function () {
    return this._readableState.flowing === !1;
  }),
    (N.prototype.setEncoding = function (g) {
      b || (b = ac().StringDecoder);
      var _ = new b(g);
      (this._readableState.decoder = _),
        (this._readableState.encoding = this._readableState.decoder.encoding);
      for (var k = this._readableState.buffer.head, M = ""; k !== null; )
        (M += _.write(k.data)), (k = k.next);
      return (
        this._readableState.buffer.clear(),
        M !== "" && this._readableState.buffer.push(M),
        (this._readableState.length = M.length),
        this
      );
    });
  var T = 1073741824;
  function x(g) {
    return (
      g >= T
        ? (g = T)
        : (g--,
          (g |= g >>> 1),
          (g |= g >>> 2),
          (g |= g >>> 4),
          (g |= g >>> 8),
          (g |= g >>> 16),
          g++),
      g
    );
  }
  function O(g, _) {
    return g <= 0 || (_.length === 0 && _.ended)
      ? 0
      : _.objectMode
      ? 1
      : g !== g
      ? _.flowing && _.length
        ? _.buffer.head.data.length
        : _.length
      : (g > _.highWaterMark && (_.highWaterMark = x(g)),
        g <= _.length ? g : _.ended ? _.length : ((_.needReadable = !0), 0));
  }
  N.prototype.read = function (g) {
    c("read", g), (g = parseInt(g, 10));
    var _ = this._readableState,
      k = g;
    if (
      (g !== 0 && (_.emittedReadable = !1),
      g === 0 &&
        _.needReadable &&
        ((_.highWaterMark !== 0 ? _.length >= _.highWaterMark : _.length > 0) ||
          _.ended))
    )
      return (
        c("read: emitReadable", _.length, _.ended),
        _.length === 0 && _.ended ? A(this) : B(this),
        null
      );
    if (((g = O(g, _)), g === 0 && _.ended))
      return _.length === 0 && A(this), null;
    var M = _.needReadable;
    c("need readable", M),
      (_.length === 0 || _.length - g < _.highWaterMark) &&
        ((M = !0), c("length less than watermark", M)),
      _.ended || _.reading
        ? ((M = !1), c("reading or ended", M))
        : M &&
          (c("do read"),
          (_.reading = !0),
          (_.sync = !0),
          _.length === 0 && (_.needReadable = !0),
          this._read(_.highWaterMark),
          (_.sync = !1),
          _.reading || (g = O(k, _)));
    var ce;
    return (
      g > 0 ? (ce = E(g, _)) : (ce = null),
      ce === null
        ? ((_.needReadable = _.length <= _.highWaterMark), (g = 0))
        : ((_.length -= g), (_.awaitDrain = 0)),
      _.length === 0 &&
        (_.ended || (_.needReadable = !0), k !== g && _.ended && A(this)),
      ce !== null && this.emit("data", ce),
      ce
    );
  };
  function D(g, _) {
    if ((c("onEofChunk"), !_.ended)) {
      if (_.decoder) {
        var k = _.decoder.end();
        k &&
          k.length &&
          (_.buffer.push(k), (_.length += _.objectMode ? 1 : k.length));
      }
      (_.ended = !0),
        _.sync
          ? B(g)
          : ((_.needReadable = !1),
            _.emittedReadable || ((_.emittedReadable = !0), L(g)));
    }
  }
  function B(g) {
    var _ = g._readableState;
    c("emitReadable", _.needReadable, _.emittedReadable),
      (_.needReadable = !1),
      _.emittedReadable ||
        (c("emitReadable", _.flowing),
        (_.emittedReadable = !0),
        process.nextTick(L, g));
  }
  function L(g) {
    var _ = g._readableState;
    c("emitReadable_", _.destroyed, _.length, _.ended),
      !_.destroyed &&
        (_.length || _.ended) &&
        (g.emit("readable"), (_.emittedReadable = !1)),
      (_.needReadable = !_.flowing && !_.ended && _.length <= _.highWaterMark),
      w(g);
  }
  function H(g, _) {
    _.readingMore || ((_.readingMore = !0), process.nextTick(J, g, _));
  }
  function J(g, _) {
    for (
      ;
      !_.reading &&
      !_.ended &&
      (_.length < _.highWaterMark || (_.flowing && _.length === 0));

    ) {
      var k = _.length;
      if ((c("maybeReadMore read 0"), g.read(0), k === _.length)) break;
    }
    _.readingMore = !1;
  }
  (N.prototype._read = function (g) {
    R(this, new y("_read()"));
  }),
    (N.prototype.pipe = function (g, _) {
      var k = this,
        M = this._readableState;
      switch (M.pipesCount) {
        case 0:
          M.pipes = g;
          break;
        case 1:
          M.pipes = [M.pipes, g];
          break;
        default:
          M.pipes.push(g);
          break;
      }
      (M.pipesCount += 1), c("pipe count=%d opts=%j", M.pipesCount, _);
      var ce =
          (!_ || _.end !== !1) && g !== process.stdout && g !== process.stderr,
        q = ce ? nt : ft;
      M.endEmitted ? process.nextTick(q) : k.once("end", q), g.on("unpipe", ne);
      function ne(st, Ge) {
        c("onunpipe"),
          st === k &&
            Ge &&
            Ge.hasUnpiped === !1 &&
            ((Ge.hasUnpiped = !0), mn());
      }
      function nt() {
        c("onend"), g.end();
      }
      var vt = W(k);
      g.on("drain", vt);
      var Cr = !1;
      function mn() {
        c("cleanup"),
          g.removeListener("close", zt),
          g.removeListener("finish", qt),
          g.removeListener("drain", vt),
          g.removeListener("error", Vt),
          g.removeListener("unpipe", ne),
          k.removeListener("end", nt),
          k.removeListener("end", ft),
          k.removeListener("data", kr),
          (Cr = !0),
          M.awaitDrain &&
            (!g._writableState || g._writableState.needDrain) &&
            vt();
      }
      k.on("data", kr);
      function kr(st) {
        c("ondata");
        var Ge = g.write(st);
        c("dest.write", Ge),
          Ge === !1 &&
            (((M.pipesCount === 1 && M.pipes === g) ||
              (M.pipesCount > 1 && Z(M.pipes, g) !== -1)) &&
              !Cr &&
              (c("false write response, pause", M.awaitDrain), M.awaitDrain++),
            k.pause());
      }
      function Vt(st) {
        c("onerror", st),
          ft(),
          g.removeListener("error", Vt),
          t(g, "error") === 0 && R(g, st);
      }
      j(g, "error", Vt);
      function zt() {
        g.removeListener("finish", qt), ft();
      }
      g.once("close", zt);
      function qt() {
        c("onfinish"), g.removeListener("close", zt), ft();
      }
      g.once("finish", qt);
      function ft() {
        c("unpipe"), k.unpipe(g);
      }
      return g.emit("pipe", k), M.flowing || (c("pipe resume"), k.resume()), g;
    });
  function W(g) {
    return function () {
      var k = g._readableState;
      c("pipeOnDrain", k.awaitDrain),
        k.awaitDrain && k.awaitDrain--,
        k.awaitDrain === 0 && t(g, "data") && ((k.flowing = !0), w(g));
    };
  }
  (N.prototype.unpipe = function (g) {
    var _ = this._readableState,
      k = { hasUnpiped: !1 };
    if (_.pipesCount === 0) return this;
    if (_.pipesCount === 1)
      return g && g !== _.pipes
        ? this
        : (g || (g = _.pipes),
          (_.pipes = null),
          (_.pipesCount = 0),
          (_.flowing = !1),
          g && g.emit("unpipe", this, k),
          this);
    if (!g) {
      var M = _.pipes,
        ce = _.pipesCount;
      (_.pipes = null), (_.pipesCount = 0), (_.flowing = !1);
      for (var q = 0; q < ce; q++)
        M[q].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    var ne = Z(_.pipes, g);
    return ne === -1
      ? this
      : (_.pipes.splice(ne, 1),
        (_.pipesCount -= 1),
        _.pipesCount === 1 && (_.pipes = _.pipes[0]),
        g.emit("unpipe", this, k),
        this);
  }),
    (N.prototype.on = function (g, _) {
      var k = r.prototype.on.call(this, g, _),
        M = this._readableState;
      return (
        g === "data"
          ? ((M.readableListening = this.listenerCount("readable") > 0),
            M.flowing !== !1 && this.resume())
          : g === "readable" &&
            !M.endEmitted &&
            !M.readableListening &&
            ((M.readableListening = M.needReadable = !0),
            (M.flowing = !1),
            (M.emittedReadable = !1),
            c("on readable", M.length, M.reading),
            M.length ? B(this) : M.reading || process.nextTick(ie, this)),
        k
      );
    }),
    (N.prototype.addListener = N.prototype.on),
    (N.prototype.removeListener = function (g, _) {
      var k = r.prototype.removeListener.call(this, g, _);
      return g === "readable" && process.nextTick(Q, this), k;
    }),
    (N.prototype.removeAllListeners = function (g) {
      var _ = r.prototype.removeAllListeners.apply(this, arguments);
      return (g === "readable" || g === void 0) && process.nextTick(Q, this), _;
    });
  function Q(g) {
    var _ = g._readableState;
    (_.readableListening = g.listenerCount("readable") > 0),
      _.resumeScheduled && !_.paused
        ? (_.flowing = !0)
        : g.listenerCount("data") > 0 && g.resume();
  }
  function ie(g) {
    c("readable nexttick read 0"), g.read(0);
  }
  N.prototype.resume = function () {
    var g = this._readableState;
    return (
      g.flowing ||
        (c("resume"), (g.flowing = !g.readableListening), re(this, g)),
      (g.paused = !1),
      this
    );
  };
  function re(g, _) {
    _.resumeScheduled || ((_.resumeScheduled = !0), process.nextTick(Ce, g, _));
  }
  function Ce(g, _) {
    c("resume", _.reading),
      _.reading || g.read(0),
      (_.resumeScheduled = !1),
      g.emit("resume"),
      w(g),
      _.flowing && !_.reading && g.read(0);
  }
  N.prototype.pause = function () {
    return (
      c("call pause flowing=%j", this._readableState.flowing),
      this._readableState.flowing !== !1 &&
        (c("pause"), (this._readableState.flowing = !1), this.emit("pause")),
      (this._readableState.paused = !0),
      this
    );
  };
  function w(g) {
    var _ = g._readableState;
    for (c("flow", _.flowing); _.flowing && g.read() !== null; );
  }
  (N.prototype.wrap = function (g) {
    var _ = this,
      k = this._readableState,
      M = !1;
    g.on("end", function () {
      if ((c("wrapped end"), k.decoder && !k.ended)) {
        var ne = k.decoder.end();
        ne && ne.length && _.push(ne);
      }
      _.push(null);
    }),
      g.on("data", function (ne) {
        if (
          (c("wrapped data"),
          k.decoder && (ne = k.decoder.write(ne)),
          !(k.objectMode && ne == null) &&
            !(!k.objectMode && (!ne || !ne.length)))
        ) {
          var nt = _.push(ne);
          nt || ((M = !0), g.pause());
        }
      });
    for (var ce in g)
      this[ce] === void 0 &&
        typeof g[ce] == "function" &&
        (this[ce] = (function (nt) {
          return function () {
            return g[nt].apply(g, arguments);
          };
        })(ce));
    for (var q = 0; q < I.length; q++) g.on(I[q], this.emit.bind(this, I[q]));
    return (
      (this._read = function (ne) {
        c("wrapped _read", ne), M && ((M = !1), g.resume());
      }),
      this
    );
  }),
    typeof Symbol == "function" &&
      (N.prototype[Symbol.asyncIterator] = function () {
        return v === void 0 && (v = Sp()), v(this);
      }),
    Object.defineProperty(N.prototype, "readableHighWaterMark", {
      enumerable: !1,
      get: function () {
        return this._readableState.highWaterMark;
      },
    }),
    Object.defineProperty(N.prototype, "readableBuffer", {
      enumerable: !1,
      get: function () {
        return this._readableState && this._readableState.buffer;
      },
    }),
    Object.defineProperty(N.prototype, "readableFlowing", {
      enumerable: !1,
      get: function () {
        return this._readableState.flowing;
      },
      set: function (_) {
        this._readableState && (this._readableState.flowing = _);
      },
    }),
    (N._fromList = E),
    Object.defineProperty(N.prototype, "readableLength", {
      enumerable: !1,
      get: function () {
        return this._readableState.length;
      },
    });
  function E(g, _) {
    if (_.length === 0) return null;
    var k;
    return (
      _.objectMode
        ? (k = _.buffer.shift())
        : !g || g >= _.length
        ? (_.decoder
            ? (k = _.buffer.join(""))
            : _.buffer.length === 1
            ? (k = _.buffer.first())
            : (k = _.buffer.concat(_.length)),
          _.buffer.clear())
        : (k = _.buffer.consume(g, _.decoder)),
      k
    );
  }
  function A(g) {
    var _ = g._readableState;
    c("endReadable", _.endEmitted),
      _.endEmitted || ((_.ended = !0), process.nextTick(U, _, g));
  }
  function U(g, _) {
    if (
      (c("endReadableNT", g.endEmitted, g.length),
      !g.endEmitted &&
        g.length === 0 &&
        ((g.endEmitted = !0), (_.readable = !1), _.emit("end"), g.autoDestroy))
    ) {
      var k = _._writableState;
      (!k || (k.autoDestroy && k.finished)) && _.destroy();
    }
  }
  typeof Symbol == "function" &&
    (N.from = function (g, _) {
      return C === void 0 && (C = Rp()), C(N, g, _);
    });
  function Z(g, _) {
    for (var k = 0, M = g.length; k < M; k++) if (g[k] === _) return k;
    return -1;
  }
  return Xi;
}
var yu = ht,
  bs = Ht.codes,
  Cp = bs.ERR_METHOD_NOT_IMPLEMENTED,
  kp = bs.ERR_MULTIPLE_CALLBACK,
  Ip = bs.ERR_TRANSFORM_ALREADY_TRANSFORMING,
  Ap = bs.ERR_TRANSFORM_WITH_LENGTH_0,
  ys = dr();
Ve(ht, ys);
function xp(e, t) {
  var r = this._transformState;
  r.transforming = !1;
  var n = r.writecb;
  if (n === null) return this.emit("error", new kp());
  (r.writechunk = null), (r.writecb = null), t != null && this.push(t), n(e);
  var s = this._readableState;
  (s.reading = !1),
    (s.needReadable || s.length < s.highWaterMark) &&
      this._read(s.highWaterMark);
}
function ht(e) {
  if (!(this instanceof ht)) return new ht(e);
  ys.call(this, e),
    (this._transformState = {
      afterTransform: xp.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null,
    }),
    (this._readableState.needReadable = !0),
    (this._readableState.sync = !1),
    e &&
      (typeof e.transform == "function" && (this._transform = e.transform),
      typeof e.flush == "function" && (this._flush = e.flush)),
    this.on("prefinish", Tp);
}
function Tp() {
  var e = this;
  typeof this._flush == "function" && !this._readableState.destroyed
    ? this._flush(function (t, r) {
        hc(e, t, r);
      })
    : hc(this, null, null);
}
ht.prototype.push = function (e, t) {
  return (
    (this._transformState.needTransform = !1),
    ys.prototype.push.call(this, e, t)
  );
};
ht.prototype._transform = function (e, t, r) {
  r(new Cp("_transform()"));
};
ht.prototype._write = function (e, t, r) {
  var n = this._transformState;
  if (
    ((n.writecb = r),
    (n.writechunk = e),
    (n.writeencoding = t),
    !n.transforming)
  ) {
    var s = this._readableState;
    (n.needTransform || s.needReadable || s.length < s.highWaterMark) &&
      this._read(s.highWaterMark);
  }
};
ht.prototype._read = function (e) {
  var t = this._transformState;
  t.writechunk !== null && !t.transforming
    ? ((t.transforming = !0),
      this._transform(t.writechunk, t.writeencoding, t.afterTransform))
    : (t.needTransform = !0);
};
ht.prototype._destroy = function (e, t) {
  ys.prototype._destroy.call(this, e, function (r) {
    t(r);
  });
};
function hc(e, t, r) {
  if (t) return e.emit("error", t);
  if ((r != null && e.push(r), e._writableState.length)) throw new Ap();
  if (e._transformState.transforming) throw new Ip();
  return e.push(null);
}
var Np = Dr,
  vu = yu;
Ve(Dr, vu);
function Dr(e) {
  if (!(this instanceof Dr)) return new Dr(e);
  vu.call(this, e);
}
Dr.prototype._transform = function (e, t, r) {
  r(null, e);
};
var eo;
function Mp(e) {
  var t = !1;
  return function () {
    t || ((t = !0), e.apply(void 0, arguments));
  };
}
var wu = Ht.codes,
  Lp = wu.ERR_MISSING_ARGS,
  Op = wu.ERR_STREAM_DESTROYED;
function fc(e) {
  if (e) throw e;
}
function Pp(e) {
  return e.setHeader && typeof e.abort == "function";
}
function $p(e, t, r, n) {
  n = Mp(n);
  var s = !1;
  e.on("close", function () {
    s = !0;
  }),
    eo === void 0 && (eo = Go),
    eo(e, { readable: t, writable: r }, function (o) {
      if (o) return n(o);
      (s = !0), n();
    });
  var i = !1;
  return function (o) {
    if (!s && !i) {
      if (((i = !0), Pp(e))) return e.abort();
      if (typeof e.destroy == "function") return e.destroy();
      n(o || new Op("pipe"));
    }
  };
}
function pc(e) {
  e();
}
function Bp(e, t) {
  return e.pipe(t);
}
function Dp(e) {
  return !e.length || typeof e[e.length - 1] != "function" ? fc : e.pop();
}
function Fp() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Dp(t);
  if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
    throw new Lp("streams");
  var s,
    i = t.map(function (o, a) {
      var c = a < t.length - 1,
        l = a > 0;
      return $p(o, c, l, function (d) {
        s || (s = d), d && i.forEach(pc), !c && (i.forEach(pc), n(s));
      });
    });
  return t.reduce(Bp);
}
var jp = Fp;
(function (e, t) {
  (t = e.exports = bu()),
    (t.Stream = t),
    (t.Readable = t),
    (t.Writable = _u()),
    (t.Duplex = dr()),
    (t.Transform = yu),
    (t.PassThrough = Np),
    (t.finished = Go),
    (t.pipeline = jp);
})(So, So.exports);
var Eu = So.exports;
const { Transform: Hp } = Eu;
var Up = (e) =>
  class Su extends Hp {
    constructor(r, n, s, i, o) {
      super(o),
        (this._rate = r),
        (this._capacity = n),
        (this._delimitedSuffix = s),
        (this._hashBitLength = i),
        (this._options = o),
        (this._state = new e()),
        this._state.initialize(r, n),
        (this._finalized = !1);
    }
    _transform(r, n, s) {
      let i = null;
      try {
        this.update(r, n);
      } catch (o) {
        i = o;
      }
      s(i);
    }
    _flush(r) {
      let n = null;
      try {
        this.push(this.digest());
      } catch (s) {
        n = s;
      }
      r(n);
    }
    update(r, n) {
      if (!Buffer.isBuffer(r) && typeof r != "string")
        throw new TypeError("Data must be a string or a buffer");
      if (this._finalized) throw new Error("Digest already called");
      return (
        Buffer.isBuffer(r) || (r = Buffer.from(r, n)),
        this._state.absorb(r),
        this
      );
    }
    digest(r) {
      if (this._finalized) throw new Error("Digest already called");
      (this._finalized = !0),
        this._delimitedSuffix &&
          this._state.absorbLastFewBits(this._delimitedSuffix);
      let n = this._state.squeeze(this._hashBitLength / 8);
      return r !== void 0 && (n = n.toString(r)), this._resetState(), n;
    }
    _resetState() {
      return this._state.initialize(this._rate, this._capacity), this;
    }
    _clone() {
      const r = new Su(
        this._rate,
        this._capacity,
        this._delimitedSuffix,
        this._hashBitLength,
        this._options
      );
      return this._state.copy(r._state), (r._finalized = this._finalized), r;
    }
  };
const { Transform: Wp } = Eu;
var Vp = (e) =>
  class Ru extends Wp {
    constructor(r, n, s, i) {
      super(i),
        (this._rate = r),
        (this._capacity = n),
        (this._delimitedSuffix = s),
        (this._options = i),
        (this._state = new e()),
        this._state.initialize(r, n),
        (this._finalized = !1);
    }
    _transform(r, n, s) {
      let i = null;
      try {
        this.update(r, n);
      } catch (o) {
        i = o;
      }
      s(i);
    }
    _flush() {}
    _read(r) {
      this.push(this.squeeze(r));
    }
    update(r, n) {
      if (!Buffer.isBuffer(r) && typeof r != "string")
        throw new TypeError("Data must be a string or a buffer");
      if (this._finalized) throw new Error("Squeeze already called");
      return (
        Buffer.isBuffer(r) || (r = Buffer.from(r, n)),
        this._state.absorb(r),
        this
      );
    }
    squeeze(r, n) {
      this._finalized ||
        ((this._finalized = !0),
        this._state.absorbLastFewBits(this._delimitedSuffix));
      let s = this._state.squeeze(r);
      return n !== void 0 && (s = s.toString(n)), s;
    }
    _resetState() {
      return this._state.initialize(this._rate, this._capacity), this;
    }
    _clone() {
      const r = new Ru(
        this._rate,
        this._capacity,
        this._delimitedSuffix,
        this._options
      );
      return this._state.copy(r._state), (r._finalized = this._finalized), r;
    }
  };
const zp = Up,
  qp = Vp;
var Gp = function (e) {
    const t = zp(e),
      r = qp(e);
    return function (n, s) {
      switch (typeof n == "string" ? n.toLowerCase() : n) {
        case "keccak224":
          return new t(1152, 448, null, 224, s);
        case "keccak256":
          return new t(1088, 512, null, 256, s);
        case "keccak384":
          return new t(832, 768, null, 384, s);
        case "keccak512":
          return new t(576, 1024, null, 512, s);
        case "sha3-224":
          return new t(1152, 448, 6, 224, s);
        case "sha3-256":
          return new t(1088, 512, 6, 256, s);
        case "sha3-384":
          return new t(832, 768, 6, 384, s);
        case "sha3-512":
          return new t(576, 1024, 6, 512, s);
        case "shake128":
          return new r(1344, 256, 31, s);
        case "shake256":
          return new r(1088, 512, 31, s);
        default:
          throw new Error("Invald algorithm: " + n);
      }
    };
  },
  Cu = {};
const gc = [
  1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
  2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0,
  2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
  2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0,
  2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649,
  0, 2147516424, 2147483648,
];
Cu.p1600 = function (e) {
  for (let t = 0; t < 24; ++t) {
    const r = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
      n = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
      s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
      i = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
      o = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
      a = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
      c = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
      l = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
      d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
      u = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
    let h = d ^ ((s << 1) | (i >>> 31)),
      f = u ^ ((i << 1) | (s >>> 31));
    const m = e[0] ^ h,
      S = e[1] ^ f,
      y = e[10] ^ h,
      p = e[11] ^ f,
      b = e[20] ^ h,
      v = e[21] ^ f,
      C = e[30] ^ h,
      R = e[31] ^ f,
      I = e[40] ^ h,
      j = e[41] ^ f;
    (h = r ^ ((o << 1) | (a >>> 31))), (f = n ^ ((a << 1) | (o >>> 31)));
    const $ = e[2] ^ h,
      N = e[3] ^ f,
      G = e[12] ^ h,
      le = e[13] ^ f,
      se = e[22] ^ h,
      T = e[23] ^ f,
      x = e[32] ^ h,
      O = e[33] ^ f,
      D = e[42] ^ h,
      B = e[43] ^ f;
    (h = s ^ ((c << 1) | (l >>> 31))), (f = i ^ ((l << 1) | (c >>> 31)));
    const L = e[4] ^ h,
      H = e[5] ^ f,
      J = e[14] ^ h,
      W = e[15] ^ f,
      Q = e[24] ^ h,
      ie = e[25] ^ f,
      re = e[34] ^ h,
      Ce = e[35] ^ f,
      w = e[44] ^ h,
      E = e[45] ^ f;
    (h = o ^ ((d << 1) | (u >>> 31))), (f = a ^ ((u << 1) | (d >>> 31)));
    const A = e[6] ^ h,
      U = e[7] ^ f,
      Z = e[16] ^ h,
      g = e[17] ^ f,
      _ = e[26] ^ h,
      k = e[27] ^ f,
      M = e[36] ^ h,
      ce = e[37] ^ f,
      q = e[46] ^ h,
      ne = e[47] ^ f;
    (h = c ^ ((r << 1) | (n >>> 31))), (f = l ^ ((n << 1) | (r >>> 31)));
    const nt = e[8] ^ h,
      vt = e[9] ^ f,
      Cr = e[18] ^ h,
      mn = e[19] ^ f,
      kr = e[28] ^ h,
      Vt = e[29] ^ f,
      zt = e[38] ^ h,
      qt = e[39] ^ f,
      ft = e[48] ^ h,
      st = e[49] ^ f,
      Ge = m,
      Ws = S,
      Vs = (p << 4) | (y >>> 28),
      zs = (y << 4) | (p >>> 28),
      qs = (b << 3) | (v >>> 29),
      Gs = (v << 3) | (b >>> 29),
      Js = (R << 9) | (C >>> 23),
      Zs = (C << 9) | (R >>> 23),
      Ks = (I << 18) | (j >>> 14),
      Qs = (j << 18) | (I >>> 14),
      Ys = ($ << 1) | (N >>> 31),
      Xs = (N << 1) | ($ >>> 31),
      ei = (le << 12) | (G >>> 20),
      ti = (G << 12) | (le >>> 20),
      ri = (se << 10) | (T >>> 22),
      ni = (T << 10) | (se >>> 22),
      si = (O << 13) | (x >>> 19),
      ii = (x << 13) | (O >>> 19),
      oi = (D << 2) | (B >>> 30),
      ai = (B << 2) | (D >>> 30),
      ci = (H << 30) | (L >>> 2),
      li = (L << 30) | (H >>> 2),
      ui = (J << 6) | (W >>> 26),
      di = (W << 6) | (J >>> 26),
      hi = (ie << 11) | (Q >>> 21),
      fi = (Q << 11) | (ie >>> 21),
      pi = (re << 15) | (Ce >>> 17),
      gi = (Ce << 15) | (re >>> 17),
      _i = (E << 29) | (w >>> 3),
      mi = (w << 29) | (E >>> 3),
      bi = (A << 28) | (U >>> 4),
      yi = (U << 28) | (A >>> 4),
      vi = (g << 23) | (Z >>> 9),
      wi = (Z << 23) | (g >>> 9),
      Ei = (_ << 25) | (k >>> 7),
      Si = (k << 25) | (_ >>> 7),
      Ri = (M << 21) | (ce >>> 11),
      Ci = (ce << 21) | (M >>> 11),
      ki = (ne << 24) | (q >>> 8),
      Ii = (q << 24) | (ne >>> 8),
      Ai = (nt << 27) | (vt >>> 5),
      xi = (vt << 27) | (nt >>> 5),
      Ti = (Cr << 20) | (mn >>> 12),
      Ni = (mn << 20) | (Cr >>> 12),
      Mi = (Vt << 7) | (kr >>> 25),
      Li = (kr << 7) | (Vt >>> 25),
      Oi = (zt << 8) | (qt >>> 24),
      Pi = (qt << 8) | (zt >>> 24),
      $i = (ft << 14) | (st >>> 18),
      Bi = (st << 14) | (ft >>> 18);
    (e[0] = Ge ^ (~ei & hi)),
      (e[1] = Ws ^ (~ti & fi)),
      (e[10] = bi ^ (~Ti & qs)),
      (e[11] = yi ^ (~Ni & Gs)),
      (e[20] = Ys ^ (~ui & Ei)),
      (e[21] = Xs ^ (~di & Si)),
      (e[30] = Ai ^ (~Vs & ri)),
      (e[31] = xi ^ (~zs & ni)),
      (e[40] = ci ^ (~vi & Mi)),
      (e[41] = li ^ (~wi & Li)),
      (e[2] = ei ^ (~hi & Ri)),
      (e[3] = ti ^ (~fi & Ci)),
      (e[12] = Ti ^ (~qs & si)),
      (e[13] = Ni ^ (~Gs & ii)),
      (e[22] = ui ^ (~Ei & Oi)),
      (e[23] = di ^ (~Si & Pi)),
      (e[32] = Vs ^ (~ri & pi)),
      (e[33] = zs ^ (~ni & gi)),
      (e[42] = vi ^ (~Mi & Js)),
      (e[43] = wi ^ (~Li & Zs)),
      (e[4] = hi ^ (~Ri & $i)),
      (e[5] = fi ^ (~Ci & Bi)),
      (e[14] = qs ^ (~si & _i)),
      (e[15] = Gs ^ (~ii & mi)),
      (e[24] = Ei ^ (~Oi & Ks)),
      (e[25] = Si ^ (~Pi & Qs)),
      (e[34] = ri ^ (~pi & ki)),
      (e[35] = ni ^ (~gi & Ii)),
      (e[44] = Mi ^ (~Js & oi)),
      (e[45] = Li ^ (~Zs & ai)),
      (e[6] = Ri ^ (~$i & Ge)),
      (e[7] = Ci ^ (~Bi & Ws)),
      (e[16] = si ^ (~_i & bi)),
      (e[17] = ii ^ (~mi & yi)),
      (e[26] = Oi ^ (~Ks & Ys)),
      (e[27] = Pi ^ (~Qs & Xs)),
      (e[36] = pi ^ (~ki & Ai)),
      (e[37] = gi ^ (~Ii & xi)),
      (e[46] = Js ^ (~oi & ci)),
      (e[47] = Zs ^ (~ai & li)),
      (e[8] = $i ^ (~Ge & ei)),
      (e[9] = Bi ^ (~Ws & ti)),
      (e[18] = _i ^ (~bi & Ti)),
      (e[19] = mi ^ (~yi & Ni)),
      (e[28] = Ks ^ (~Ys & ui)),
      (e[29] = Qs ^ (~Xs & di)),
      (e[38] = ki ^ (~Ai & Vs)),
      (e[39] = Ii ^ (~xi & zs)),
      (e[48] = oi ^ (~ci & vi)),
      (e[49] = ai ^ (~li & wi)),
      (e[0] ^= gc[t * 2]),
      (e[1] ^= gc[t * 2 + 1]);
  }
};
const Dn = Cu;
function wr() {
  (this.state = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]),
    (this.blockSize = null),
    (this.count = 0),
    (this.squeezing = !1);
}
wr.prototype.initialize = function (e, t) {
  for (let r = 0; r < 50; ++r) this.state[r] = 0;
  (this.blockSize = e / 8), (this.count = 0), (this.squeezing = !1);
};
wr.prototype.absorb = function (e) {
  for (let t = 0; t < e.length; ++t)
    (this.state[~~(this.count / 4)] ^= e[t] << (8 * (this.count % 4))),
      (this.count += 1),
      this.count === this.blockSize && (Dn.p1600(this.state), (this.count = 0));
};
wr.prototype.absorbLastFewBits = function (e) {
  (this.state[~~(this.count / 4)] ^= e << (8 * (this.count % 4))),
    e & 128 && this.count === this.blockSize - 1 && Dn.p1600(this.state),
    (this.state[~~((this.blockSize - 1) / 4)] ^=
      128 << (8 * ((this.blockSize - 1) % 4))),
    Dn.p1600(this.state),
    (this.count = 0),
    (this.squeezing = !0);
};
wr.prototype.squeeze = function (e) {
  this.squeezing || this.absorbLastFewBits(1);
  const t = Buffer.alloc(e);
  for (let r = 0; r < e; ++r)
    (t[r] = (this.state[~~(this.count / 4)] >>> (8 * (this.count % 4))) & 255),
      (this.count += 1),
      this.count === this.blockSize && (Dn.p1600(this.state), (this.count = 0));
  return t;
};
wr.prototype.copy = function (e) {
  for (let t = 0; t < 50; ++t) e.state[t] = this.state[t];
  (e.blockSize = this.blockSize),
    (e.count = this.count),
    (e.squeezing = this.squeezing);
};
var Jp = wr,
  Zp = Gp(Jp);
const Kp = Zp,
  Qp = Vn;
function ku(e) {
  return Buffer.allocUnsafe(e).fill(0);
}
function Iu(e, t, r) {
  const n = ku(t);
  return (
    (e = vs(e)),
    r
      ? e.length < t
        ? (e.copy(n), n)
        : e.slice(0, t)
      : e.length < t
      ? (e.copy(n, t - e.length), n)
      : e.slice(-t)
  );
}
function Yp(e, t) {
  return Iu(e, t, !0);
}
function vs(e) {
  if (!Buffer.isBuffer(e))
    if (Array.isArray(e)) e = Buffer.from(e);
    else if (typeof e == "string")
      Au(e) ? (e = Buffer.from(t1(xu(e)), "hex")) : (e = Buffer.from(e));
    else if (typeof e == "number") e = intToBuffer(e);
    else if (e == null) e = Buffer.allocUnsafe(0);
    else if (Qp.isBN(e)) e = e.toArrayLike(Buffer);
    else if (e.toArray) e = Buffer.from(e.toArray());
    else throw new Error("invalid type");
  return e;
}
function Xp(e) {
  return (e = vs(e)), "0x" + e.toString("hex");
}
function e1(e, t) {
  return (
    (e = vs(e)),
    t || (t = 256),
    Kp("keccak" + t)
      .update(e)
      .digest()
  );
}
function t1(e) {
  return e.length % 2 ? "0" + e : e;
}
function Au(e) {
  return typeof e == "string" && e.match(/^0x[0-9A-Fa-f]*$/);
}
function xu(e) {
  return typeof e == "string" && e.startsWith("0x") ? e.slice(2) : e;
}
var Tu = {
  zeros: ku,
  setLength: Iu,
  setLengthRight: Yp,
  isHexString: Au,
  stripHexPrefix: xu,
  toBuffer: vs,
  bufferToHex: Xp,
  keccak: e1,
};
const Ot = Tu,
  xt = Vn;
function Nu(e) {
  return e.startsWith("int[")
    ? "int256" + e.slice(3)
    : e === "int"
    ? "int256"
    : e.startsWith("uint[")
    ? "uint256" + e.slice(4)
    : e === "uint"
    ? "uint256"
    : e.startsWith("fixed[")
    ? "fixed128x128" + e.slice(5)
    : e === "fixed"
    ? "fixed128x128"
    : e.startsWith("ufixed[")
    ? "ufixed128x128" + e.slice(6)
    : e === "ufixed"
    ? "ufixed128x128"
    : e;
}
function nr(e) {
  return parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
}
function _c(e) {
  var t = /^\D+(\d+)x(\d+)$/.exec(e);
  return [parseInt(t[1], 10), parseInt(t[2], 10)];
}
function Mu(e) {
  var t = e.match(/(.*)\[(.*?)\]$/);
  return t ? (t[2] === "" ? "dynamic" : parseInt(t[2], 10)) : null;
}
function kt(e) {
  var t = typeof e;
  if (t === "string")
    return Ot.isHexString(e) ? new xt(Ot.stripHexPrefix(e), 16) : new xt(e, 10);
  if (t === "number") return new xt(e);
  if (e.toArray) return e;
  throw new Error("Argument is not a number");
}
function Qe(e, t) {
  var r, n, s, i;
  if (e === "address") return Qe("uint160", kt(t));
  if (e === "bool") return Qe("uint8", t ? 1 : 0);
  if (e === "string") return Qe("bytes", new Buffer(t, "utf8"));
  if (n1(e)) {
    if (typeof t.length > "u") throw new Error("Not an array?");
    if (((r = Mu(e)), r !== "dynamic" && r !== 0 && t.length > r))
      throw new Error("Elements exceed array size: " + r);
    (s = []),
      (e = e.slice(0, e.lastIndexOf("["))),
      typeof t == "string" && (t = JSON.parse(t));
    for (i in t) s.push(Qe(e, t[i]));
    if (r === "dynamic") {
      var o = Qe("uint256", t.length);
      s.unshift(o);
    }
    return Buffer.concat(s);
  } else {
    if (e === "bytes")
      return (
        (t = new Buffer(t)),
        (s = Buffer.concat([Qe("uint256", t.length), t])),
        t.length % 32 !== 0 &&
          (s = Buffer.concat([s, Ot.zeros(32 - (t.length % 32))])),
        s
      );
    if (e.startsWith("bytes")) {
      if (((r = nr(e)), r < 1 || r > 32))
        throw new Error("Invalid bytes<N> width: " + r);
      return Ot.setLengthRight(t, 32);
    } else if (e.startsWith("uint")) {
      if (((r = nr(e)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid uint<N> width: " + r);
      if (((n = kt(t)), n.bitLength() > r))
        throw new Error(
          "Supplied uint exceeds width: " + r + " vs " + n.bitLength()
        );
      if (n < 0) throw new Error("Supplied uint is negative");
      return n.toArrayLike(Buffer, "be", 32);
    } else if (e.startsWith("int")) {
      if (((r = nr(e)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid int<N> width: " + r);
      if (((n = kt(t)), n.bitLength() > r))
        throw new Error(
          "Supplied int exceeds width: " + r + " vs " + n.bitLength()
        );
      return n.toTwos(256).toArrayLike(Buffer, "be", 32);
    } else if (e.startsWith("ufixed")) {
      if (((r = _c(e)), (n = kt(t)), n < 0))
        throw new Error("Supplied ufixed is negative");
      return Qe("uint256", n.mul(new xt(2).pow(new xt(r[1]))));
    } else if (e.startsWith("fixed"))
      return (r = _c(e)), Qe("int256", kt(t).mul(new xt(2).pow(new xt(r[1]))));
  }
  throw new Error("Unsupported or invalid type: " + e);
}
function r1(e) {
  return e === "string" || e === "bytes" || Mu(e) === "dynamic";
}
function n1(e) {
  return e.lastIndexOf("]") === e.length - 1;
}
function s1(e, t) {
  var r = [],
    n = [],
    s = 32 * e.length;
  for (var i in e) {
    var o = Nu(e[i]),
      a = t[i],
      c = Qe(o, a);
    r1(o) ? (r.push(Qe("uint256", s)), n.push(c), (s += c.length)) : r.push(c);
  }
  return Buffer.concat(r.concat(n));
}
function Lu(e, t) {
  if (e.length !== t.length)
    throw new Error("Number of types are not matching the values");
  for (var r, n, s = [], i = 0; i < e.length; i++) {
    var o = Nu(e[i]),
      a = t[i];
    if (o === "bytes") s.push(a);
    else if (o === "string") s.push(new Buffer(a, "utf8"));
    else if (o === "bool") s.push(new Buffer(a ? "01" : "00", "hex"));
    else if (o === "address") s.push(Ot.setLength(a, 20));
    else if (o.startsWith("bytes")) {
      if (((r = nr(o)), r < 1 || r > 32))
        throw new Error("Invalid bytes<N> width: " + r);
      s.push(Ot.setLengthRight(a, r));
    } else if (o.startsWith("uint")) {
      if (((r = nr(o)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid uint<N> width: " + r);
      if (((n = kt(a)), n.bitLength() > r))
        throw new Error(
          "Supplied uint exceeds width: " + r + " vs " + n.bitLength()
        );
      s.push(n.toArrayLike(Buffer, "be", r / 8));
    } else if (o.startsWith("int")) {
      if (((r = nr(o)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid int<N> width: " + r);
      if (((n = kt(a)), n.bitLength() > r))
        throw new Error(
          "Supplied int exceeds width: " + r + " vs " + n.bitLength()
        );
      s.push(n.toTwos(r).toArrayLike(Buffer, "be", r / 8));
    } else throw new Error("Unsupported or invalid type: " + o);
  }
  return Buffer.concat(s);
}
function i1(e, t) {
  return Ot.keccak(Lu(e, t));
}
var o1 = { rawEncode: s1, solidityPack: Lu, soliditySHA3: i1 };
const Ue = Tu,
  Or = o1,
  Ou = {
    type: "object",
    properties: {
      types: {
        type: "object",
        additionalProperties: {
          type: "array",
          items: {
            type: "object",
            properties: { name: { type: "string" }, type: { type: "string" } },
            required: ["name", "type"],
          },
        },
      },
      primaryType: { type: "string" },
      domain: { type: "object" },
      message: { type: "object" },
    },
    required: ["types", "primaryType", "domain", "message"],
  },
  to = {
    encodeData(e, t, r, n = !0) {
      const s = ["bytes32"],
        i = [this.hashType(e, r)];
      if (n) {
        const o = (a, c, l) => {
          if (r[c] !== void 0)
            return [
              "bytes32",
              l == null
                ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                : Ue.keccak(this.encodeData(c, l, r, n)),
            ];
          if (l === void 0)
            throw new Error(`missing value for field ${a} of type ${c}`);
          if (c === "bytes") return ["bytes32", Ue.keccak(l)];
          if (c === "string")
            return (
              typeof l == "string" && (l = Buffer.from(l, "utf8")),
              ["bytes32", Ue.keccak(l)]
            );
          if (c.lastIndexOf("]") === c.length - 1) {
            const d = c.slice(0, c.lastIndexOf("[")),
              u = l.map((h) => o(a, d, h));
            return [
              "bytes32",
              Ue.keccak(
                Or.rawEncode(
                  u.map(([h]) => h),
                  u.map(([, h]) => h)
                )
              ),
            ];
          }
          return [c, l];
        };
        for (const a of r[e]) {
          const [c, l] = o(a.name, a.type, t[a.name]);
          s.push(c), i.push(l);
        }
      } else
        for (const o of r[e]) {
          let a = t[o.name];
          if (a !== void 0)
            if (o.type === "bytes")
              s.push("bytes32"), (a = Ue.keccak(a)), i.push(a);
            else if (o.type === "string")
              s.push("bytes32"),
                typeof a == "string" && (a = Buffer.from(a, "utf8")),
                (a = Ue.keccak(a)),
                i.push(a);
            else if (r[o.type] !== void 0)
              s.push("bytes32"),
                (a = Ue.keccak(this.encodeData(o.type, a, r, n))),
                i.push(a);
            else {
              if (o.type.lastIndexOf("]") === o.type.length - 1)
                throw new Error("Arrays currently unimplemented in encodeData");
              s.push(o.type), i.push(a);
            }
        }
      return Or.rawEncode(s, i);
    },
    encodeType(e, t) {
      let r = "",
        n = this.findTypeDependencies(e, t).filter((s) => s !== e);
      n = [e].concat(n.sort());
      for (const s of n) {
        if (!t[s]) throw new Error("No type definition specified: " + s);
        r +=
          s +
          "(" +
          t[s].map(({ name: o, type: a }) => a + " " + o).join(",") +
          ")";
      }
      return r;
    },
    findTypeDependencies(e, t, r = []) {
      if (((e = e.match(/^\w*/)[0]), r.includes(e) || t[e] === void 0))
        return r;
      r.push(e);
      for (const n of t[e])
        for (const s of this.findTypeDependencies(n.type, t, r))
          !r.includes(s) && r.push(s);
      return r;
    },
    hashStruct(e, t, r, n = !0) {
      return Ue.keccak(this.encodeData(e, t, r, n));
    },
    hashType(e, t) {
      return Ue.keccak(this.encodeType(e, t));
    },
    sanitizeData(e) {
      const t = {};
      for (const r in Ou.properties) e[r] && (t[r] = e[r]);
      return (
        t.types && (t.types = Object.assign({ EIP712Domain: [] }, t.types)), t
      );
    },
    hash(e, t = !0) {
      const r = this.sanitizeData(e),
        n = [Buffer.from("1901", "hex")];
      return (
        n.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)),
        r.primaryType !== "EIP712Domain" &&
          n.push(this.hashStruct(r.primaryType, r.message, r.types, t)),
        Ue.keccak(Buffer.concat(n))
      );
    },
  };
var a1 = {
  TYPED_MESSAGE_SCHEMA: Ou,
  TypedDataUtils: to,
  hashForSignTypedDataLegacy: function (e) {
    return c1(e.data);
  },
  hashForSignTypedData_v3: function (e) {
    return to.hash(e.data, !1);
  },
  hashForSignTypedData_v4: function (e) {
    return to.hash(e.data);
  },
};
function c1(e) {
  const t = new Error("Expect argument to be non-empty array");
  if (typeof e != "object" || !e.length) throw t;
  const r = e.map(function (i) {
      return i.type === "bytes" ? Ue.toBuffer(i.value) : i.value;
    }),
    n = e.map(function (i) {
      return i.type;
    }),
    s = e.map(function (i) {
      if (!i.name) throw t;
      return i.type + " " + i.name;
    });
  return Or.soliditySHA3(
    ["bytes32", "bytes32"],
    [
      Or.soliditySHA3(new Array(e.length).fill("string"), s),
      Or.soliditySHA3(n, r),
    ]
  );
}
var hr = {};
Object.defineProperty(hr, "__esModule", { value: !0 });
hr.filterFromParam = hr.FilterPolyfill = void 0;
const er = _e,
  ke = P,
  l1 = 5 * 60 * 1e3,
  It = { jsonrpc: "2.0", id: 0 };
class u1 {
  constructor(t) {
    (this.logFilters = new Map()),
      (this.blockFilters = new Set()),
      (this.pendingTransactionFilters = new Set()),
      (this.cursors = new Map()),
      (this.timeouts = new Map()),
      (this.nextFilterId = (0, er.IntNumber)(1)),
      (this.REQUEST_THROTTLE_INTERVAL = 1e3),
      (this.lastFetchTimestamp = new Date(0)),
      (this.resolvers = []),
      (this.provider = t);
  }
  async newFilter(t) {
    const r = Pu(t),
      n = this.makeFilterId(),
      s = await this.setInitialCursorPosition(n, r.fromBlock);
    return (
      console.info(
        `Installing new log filter(${n}):`,
        r,
        "initial cursor position:",
        s
      ),
      this.logFilters.set(n, r),
      this.setFilterTimeout(n),
      (0, ke.hexStringFromIntNumber)(n)
    );
  }
  async newBlockFilter() {
    const t = this.makeFilterId(),
      r = await this.setInitialCursorPosition(t, "latest");
    return (
      console.info(
        `Installing new block filter (${t}) with initial cursor position:`,
        r
      ),
      this.blockFilters.add(t),
      this.setFilterTimeout(t),
      (0, ke.hexStringFromIntNumber)(t)
    );
  }
  async newPendingTransactionFilter() {
    const t = this.makeFilterId(),
      r = await this.setInitialCursorPosition(t, "latest");
    return (
      console.info(
        `Installing new block filter (${t}) with initial cursor position:`,
        r
      ),
      this.pendingTransactionFilters.add(t),
      this.setFilterTimeout(t),
      (0, ke.hexStringFromIntNumber)(t)
    );
  }
  uninstallFilter(t) {
    const r = (0, ke.intNumberFromHexString)(t);
    return console.info(`Uninstalling filter (${r})`), this.deleteFilter(r), !0;
  }
  getFilterChanges(t) {
    const r = (0, ke.intNumberFromHexString)(t);
    return (
      this.timeouts.has(r) && this.setFilterTimeout(r),
      this.logFilters.has(r)
        ? this.getLogFilterChanges(r)
        : this.blockFilters.has(r)
        ? this.getBlockFilterChanges(r)
        : this.pendingTransactionFilters.has(r)
        ? this.getPendingTransactionFilterChanges(r)
        : Promise.resolve(Rn())
    );
  }
  async getFilterLogs(t) {
    const r = (0, ke.intNumberFromHexString)(t),
      n = this.logFilters.get(r);
    return n
      ? this.sendAsyncPromise(
          Object.assign(Object.assign({}, It), {
            method: "eth_getLogs",
            params: [mc(n)],
          })
        )
      : Rn();
  }
  makeFilterId() {
    return (0, er.IntNumber)(++this.nextFilterId);
  }
  sendAsyncPromise(t) {
    return new Promise((r, n) => {
      this.provider.sendAsync(t, (s, i) => {
        if (s) return n(s);
        if (Array.isArray(i) || i == null)
          return n(
            new Error(`unexpected response received: ${JSON.stringify(i)}`)
          );
        r(i);
      });
    });
  }
  deleteFilter(t) {
    console.info(`Deleting filter (${t})`),
      this.logFilters.delete(t),
      this.blockFilters.delete(t),
      this.pendingTransactionFilters.delete(t),
      this.cursors.delete(t),
      this.timeouts.delete(t);
  }
  async getLogFilterChanges(t) {
    const r = this.logFilters.get(t),
      n = this.cursors.get(t);
    if (!n || !r) return Rn();
    const s = await this.getCurrentBlockHeight(),
      i = r.toBlock === "latest" ? s : r.toBlock;
    if (n > s || n > Number(r.toBlock)) return Cn();
    console.info(`Fetching logs from ${n} to ${i} for filter ${t}`);
    const o = await this.sendAsyncPromise(
      Object.assign(Object.assign({}, It), {
        method: "eth_getLogs",
        params: [
          mc(Object.assign(Object.assign({}, r), { fromBlock: n, toBlock: i })),
        ],
      })
    );
    if (Array.isArray(o.result)) {
      const a = o.result.map((l) =>
          (0, ke.intNumberFromHexString)(l.blockNumber || "0x0")
        ),
        c = Math.max(...a);
      if (c && c > n) {
        const l = (0, er.IntNumber)(c + 1);
        console.info(
          `Moving cursor position for filter (${t}) from ${n} to ${l}`
        ),
          this.cursors.set(t, l);
      }
    }
    return o;
  }
  async getBlockFilterChanges(t) {
    const r = this.cursors.get(t);
    if (!r) return Rn();
    const n = await this.getCurrentBlockHeight();
    if (r > n) return Cn();
    console.info(`Fetching blocks from ${r} to ${n} for filter (${t})`);
    const s = (
        await Promise.all(
          (0, ke.range)(r, n + 1).map((o) =>
            this.getBlockHashByNumber((0, er.IntNumber)(o))
          )
        )
      ).filter((o) => !!o),
      i = (0, er.IntNumber)(r + s.length);
    return (
      console.info(
        `Moving cursor position for filter (${t}) from ${r} to ${i}`
      ),
      this.cursors.set(t, i),
      Object.assign(Object.assign({}, It), { result: s })
    );
  }
  async getPendingTransactionFilterChanges(t) {
    return Promise.resolve(Cn());
  }
  async setInitialCursorPosition(t, r) {
    const n = await this.getCurrentBlockHeight(),
      s = typeof r == "number" && r > n ? r : n;
    return this.cursors.set(t, s), s;
  }
  setFilterTimeout(t) {
    const r = this.timeouts.get(t);
    r && window.clearTimeout(r);
    const n = window.setTimeout(() => {
      console.info(`Filter (${t}) timed out`), this.deleteFilter(t);
    }, l1);
    this.timeouts.set(t, n);
  }
  async getCurrentBlockHeight() {
    const t = new Date();
    if (
      t.getTime() - this.lastFetchTimestamp.getTime() >
      this.REQUEST_THROTTLE_INTERVAL
    ) {
      this.lastFetchTimestamp = t;
      const r = await this._getCurrentBlockHeight();
      (this.currentBlockHeight = r),
        this.resolvers.forEach((n) => n(r)),
        (this.resolvers = []);
    }
    return this.currentBlockHeight
      ? this.currentBlockHeight
      : new Promise((r) => this.resolvers.push(r));
  }
  async _getCurrentBlockHeight() {
    const { result: t } = await this.sendAsyncPromise(
      Object.assign(Object.assign({}, It), {
        method: "eth_blockNumber",
        params: [],
      })
    );
    return (0, ke.intNumberFromHexString)((0, ke.ensureHexString)(t));
  }
  async getBlockHashByNumber(t) {
    const r = await this.sendAsyncPromise(
      Object.assign(Object.assign({}, It), {
        method: "eth_getBlockByNumber",
        params: [(0, ke.hexStringFromIntNumber)(t), !1],
      })
    );
    return r.result && typeof r.result.hash == "string"
      ? (0, ke.ensureHexString)(r.result.hash)
      : null;
  }
}
hr.FilterPolyfill = u1;
function Pu(e) {
  return {
    fromBlock: bc(e.fromBlock),
    toBlock: bc(e.toBlock),
    addresses:
      e.address === void 0
        ? null
        : Array.isArray(e.address)
        ? e.address
        : [e.address],
    topics: e.topics || [],
  };
}
hr.filterFromParam = Pu;
function mc(e) {
  const t = {
    fromBlock: yc(e.fromBlock),
    toBlock: yc(e.toBlock),
    topics: e.topics,
  };
  return e.addresses !== null && (t.address = e.addresses), t;
}
function bc(e) {
  if (e === void 0 || e === "latest" || e === "pending") return "latest";
  if (e === "earliest") return (0, er.IntNumber)(0);
  if ((0, ke.isHexString)(e)) return (0, ke.intNumberFromHexString)(e);
  throw new Error(`Invalid block option: ${String(e)}`);
}
function yc(e) {
  return e === "latest" ? e : (0, ke.hexStringFromIntNumber)(e);
}
function Rn() {
  return Object.assign(Object.assign({}, It), {
    error: { code: -32e3, message: "filter not found" },
  });
}
function Cn() {
  return Object.assign(Object.assign({}, It), { result: [] });
}
var ws = {},
  $u = {},
  Es = {},
  Jo = d1;
function d1(e) {
  e = e || {};
  var t = e.max || Number.MAX_SAFE_INTEGER,
    r = typeof e.start < "u" ? e.start : Math.floor(Math.random() * t);
  return function () {
    return (r = r % t), r++;
  };
}
const vc = (e, t) =>
  function () {
    const r = t.promiseModule,
      n = new Array(arguments.length);
    for (let s = 0; s < arguments.length; s++) n[s] = arguments[s];
    return new r((s, i) => {
      t.errorFirst
        ? n.push(function (o, a) {
            if (t.multiArgs) {
              const c = new Array(arguments.length - 1);
              for (let l = 1; l < arguments.length; l++)
                c[l - 1] = arguments[l];
              o ? (c.unshift(o), i(c)) : s(c);
            } else o ? i(o) : s(a);
          })
        : n.push(function (o) {
            if (t.multiArgs) {
              const a = new Array(arguments.length - 1);
              for (let c = 0; c < arguments.length; c++) a[c] = arguments[c];
              s(a);
            } else s(o);
          }),
        e.apply(this, n);
    });
  };
var h1 = (e, t) => {
    t = Object.assign(
      { exclude: [/.+(Sync|Stream)$/], errorFirst: !0, promiseModule: Promise },
      t
    );
    const r = (s) => {
      const i = (o) => (typeof o == "string" ? s === o : o.test(s));
      return t.include ? t.include.some(i) : !t.exclude.some(i);
    };
    let n;
    typeof e == "function"
      ? (n = function () {
          return t.excludeMain
            ? e.apply(this, arguments)
            : vc(e, t).apply(this, arguments);
        })
      : (n = Object.create(Object.getPrototypeOf(e)));
    for (const s in e) {
      const i = e[s];
      n[s] = typeof i == "function" && r(s) ? vc(i, t) : i;
    }
    return n;
  },
  an = {},
  Zo = {};
Object.defineProperty(Zo, "__esModule", { value: !0 });
const f1 = Wr;
function wc(e, t, r) {
  try {
    Reflect.apply(e, t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function p1(e) {
  const t = e.length,
    r = new Array(t);
  for (let n = 0; n < t; n += 1) r[n] = e[n];
  return r;
}
let g1 = class extends f1.EventEmitter {
  emit(t, ...r) {
    let n = t === "error";
    const s = this._events;
    if (s !== void 0) n = n && s.error === void 0;
    else if (!n) return !1;
    if (n) {
      let o;
      if ((r.length > 0 && ([o] = r), o instanceof Error)) throw o;
      const a = new Error(`Unhandled error.${o ? ` (${o.message})` : ""}`);
      throw ((a.context = o), a);
    }
    const i = s[t];
    if (i === void 0) return !1;
    if (typeof i == "function") wc(i, this, r);
    else {
      const o = i.length,
        a = p1(i);
      for (let c = 0; c < o; c += 1) wc(a[c], this, r);
    }
    return !0;
  }
};
Zo.default = g1;
var _1 =
  (F && F.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(an, "__esModule", { value: !0 });
an.BaseBlockTracker = void 0;
const m1 = _1(Zo),
  b1 = 1e3,
  y1 = (e, t) => e + t,
  Ec = ["sync", "latest"];
class v1 extends m1.default {
  constructor(t) {
    super(),
      (this._blockResetDuration = t.blockResetDuration || 20 * b1),
      (this._usePastBlocks = t.usePastBlocks || !1),
      (this._currentBlock = null),
      (this._isRunning = !1),
      (this._onNewListener = this._onNewListener.bind(this)),
      (this._onRemoveListener = this._onRemoveListener.bind(this)),
      (this._resetCurrentBlock = this._resetCurrentBlock.bind(this)),
      this._setupInternalEvents();
  }
  async destroy() {
    this._cancelBlockResetTimeout(),
      await this._maybeEnd(),
      super.removeAllListeners();
  }
  isRunning() {
    return this._isRunning;
  }
  getCurrentBlock() {
    return this._currentBlock;
  }
  async getLatestBlock() {
    return this._currentBlock
      ? this._currentBlock
      : await new Promise((r) => this.once("latest", r));
  }
  removeAllListeners(t) {
    return (
      t ? super.removeAllListeners(t) : super.removeAllListeners(),
      this._setupInternalEvents(),
      this._onRemoveListener(),
      this
    );
  }
  _setupInternalEvents() {
    this.removeListener("newListener", this._onNewListener),
      this.removeListener("removeListener", this._onRemoveListener),
      this.on("newListener", this._onNewListener),
      this.on("removeListener", this._onRemoveListener);
  }
  _onNewListener(t) {
    Ec.includes(t) && this._maybeStart();
  }
  _onRemoveListener() {
    this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
  }
  async _maybeStart() {
    this._isRunning ||
      ((this._isRunning = !0),
      this._cancelBlockResetTimeout(),
      await this._start(),
      this.emit("_started"));
  }
  async _maybeEnd() {
    this._isRunning &&
      ((this._isRunning = !1),
      this._setupBlockResetTimeout(),
      await this._end(),
      this.emit("_ended"));
  }
  _getBlockTrackerEventCount() {
    return Ec.map((t) => this.listenerCount(t)).reduce(y1);
  }
  _shouldUseNewBlock(t) {
    const r = this._currentBlock;
    if (!r) return !0;
    const n = Sc(t),
      s = Sc(r);
    return (this._usePastBlocks && n < s) || n > s;
  }
  _newPotentialLatest(t) {
    this._shouldUseNewBlock(t) && this._setCurrentBlock(t);
  }
  _setCurrentBlock(t) {
    const r = this._currentBlock;
    (this._currentBlock = t),
      this.emit("latest", t),
      this.emit("sync", { oldBlock: r, newBlock: t });
  }
  _setupBlockResetTimeout() {
    this._cancelBlockResetTimeout(),
      (this._blockResetTimeout = setTimeout(
        this._resetCurrentBlock,
        this._blockResetDuration
      )),
      this._blockResetTimeout.unref && this._blockResetTimeout.unref();
  }
  _cancelBlockResetTimeout() {
    this._blockResetTimeout && clearTimeout(this._blockResetTimeout);
  }
  _resetCurrentBlock() {
    this._currentBlock = null;
  }
}
an.BaseBlockTracker = v1;
function Sc(e) {
  return Number.parseInt(e, 16);
}
var Bu = {},
  Du = {},
  Se = {};
class Fu extends TypeError {
  constructor(t, r) {
    let n;
    const { message: s, explanation: i, ...o } = t,
      { path: a } = t,
      c = a.length === 0 ? s : `At path: ${a.join(".")} -- ${s}`;
    super(i ?? c),
      i != null && (this.cause = c),
      Object.assign(this, o),
      (this.name = this.constructor.name),
      (this.failures = () => n ?? (n = [t, ...r()]));
  }
}
function w1(e) {
  return Fe(e) && typeof e[Symbol.iterator] == "function";
}
function Fe(e) {
  return typeof e == "object" && e != null;
}
function Rc(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function me(e) {
  return typeof e == "symbol"
    ? e.toString()
    : typeof e == "string"
    ? JSON.stringify(e)
    : `${e}`;
}
function E1(e) {
  const { done: t, value: r } = e.next();
  return t ? void 0 : r;
}
function S1(e, t, r, n) {
  if (e === !0) return;
  e === !1 ? (e = {}) : typeof e == "string" && (e = { message: e });
  const { path: s, branch: i } = t,
    { type: o } = r,
    {
      refinement: a,
      message: c = `Expected a value of type \`${o}\`${
        a ? ` with refinement \`${a}\`` : ""
      }, but received: \`${me(n)}\``,
    } = e;
  return {
    value: n,
    type: o,
    refinement: a,
    key: s[s.length - 1],
    path: s,
    branch: i,
    ...e,
    message: c,
  };
}
function* Co(e, t, r, n) {
  w1(e) || (e = [e]);
  for (const s of e) {
    const i = S1(s, t, r, n);
    i && (yield i);
  }
}
function* Ko(e, t, r = {}) {
  const { path: n = [], branch: s = [e], coerce: i = !1, mask: o = !1 } = r,
    a = { path: n, branch: s };
  if (
    i &&
    ((e = t.coercer(e, a)),
    o && t.type !== "type" && Fe(t.schema) && Fe(e) && !Array.isArray(e))
  )
    for (const l in e) t.schema[l] === void 0 && delete e[l];
  let c = "valid";
  for (const l of t.validator(e, a))
    (l.explanation = r.message), (c = "not_valid"), yield [l, void 0];
  for (let [l, d, u] of t.entries(e, a)) {
    const h = Ko(d, u, {
      path: l === void 0 ? n : [...n, l],
      branch: l === void 0 ? s : [...s, d],
      coerce: i,
      mask: o,
      message: r.message,
    });
    for (const f of h)
      f[0]
        ? ((c = f[0].refinement != null ? "not_refined" : "not_valid"),
          yield [f[0], void 0])
        : i &&
          ((d = f[1]),
          l === void 0
            ? (e = d)
            : e instanceof Map
            ? e.set(l, d)
            : e instanceof Set
            ? e.add(d)
            : Fe(e) && (d !== void 0 || l in e) && (e[l] = d));
  }
  if (c !== "not_valid")
    for (const l of t.refiner(e, a))
      (l.explanation = r.message), (c = "not_refined"), yield [l, void 0];
  c === "valid" && (yield [void 0, e]);
}
class pe {
  constructor(t) {
    const {
      type: r,
      schema: n,
      validator: s,
      refiner: i,
      coercer: o = (c) => c,
      entries: a = function* () {},
    } = t;
    (this.type = r),
      (this.schema = n),
      (this.entries = a),
      (this.coercer = o),
      s
        ? (this.validator = (c, l) => {
            const d = s(c, l);
            return Co(d, l, this, c);
          })
        : (this.validator = () => []),
      i
        ? (this.refiner = (c, l) => {
            const d = i(c, l);
            return Co(d, l, this, c);
          })
        : (this.refiner = () => []);
  }
  assert(t, r) {
    return ju(t, this, r);
  }
  create(t, r) {
    return Hu(t, this, r);
  }
  is(t) {
    return Qo(t, this);
  }
  mask(t, r) {
    return Uu(t, this, r);
  }
  validate(t, r = {}) {
    return Er(t, this, r);
  }
}
function ju(e, t, r) {
  const n = Er(e, t, { message: r });
  if (n[0]) throw n[0];
}
function Hu(e, t, r) {
  const n = Er(e, t, { coerce: !0, message: r });
  if (n[0]) throw n[0];
  return n[1];
}
function Uu(e, t, r) {
  const n = Er(e, t, { coerce: !0, mask: !0, message: r });
  if (n[0]) throw n[0];
  return n[1];
}
function Qo(e, t) {
  return !Er(e, t)[0];
}
function Er(e, t, r = {}) {
  const n = Ko(e, t, r),
    s = E1(n);
  return s[0]
    ? [
        new Fu(s[0], function* () {
          for (const o of n) o[0] && (yield o[0]);
        }),
        void 0,
      ]
    : [void 0, s[1]];
}
function R1(...e) {
  const t = e[0].type === "type",
    r = e.map((s) => s.schema),
    n = Object.assign({}, ...r);
  return t ? ln(n) : cn(n);
}
function Te(e, t) {
  return new pe({ type: e, schema: null, validator: t });
}
function C1(e, t) {
  return new pe({
    ...e,
    refiner: (r, n) => r === void 0 || e.refiner(r, n),
    validator(r, n) {
      return r === void 0 ? !0 : (t(r, n), e.validator(r, n));
    },
  });
}
function k1(e) {
  return new pe({
    type: "dynamic",
    schema: null,
    *entries(t, r) {
      yield* e(t, r).entries(t, r);
    },
    validator(t, r) {
      return e(t, r).validator(t, r);
    },
    coercer(t, r) {
      return e(t, r).coercer(t, r);
    },
    refiner(t, r) {
      return e(t, r).refiner(t, r);
    },
  });
}
function I1(e) {
  let t;
  return new pe({
    type: "lazy",
    schema: null,
    *entries(r, n) {
      t ?? (t = e()), yield* t.entries(r, n);
    },
    validator(r, n) {
      return t ?? (t = e()), t.validator(r, n);
    },
    coercer(r, n) {
      return t ?? (t = e()), t.coercer(r, n);
    },
    refiner(r, n) {
      return t ?? (t = e()), t.refiner(r, n);
    },
  });
}
function A1(e, t) {
  const { schema: r } = e,
    n = { ...r };
  for (const s of t) delete n[s];
  switch (e.type) {
    case "type":
      return ln(n);
    default:
      return cn(n);
  }
}
function x1(e) {
  const t = e instanceof pe,
    r = t ? { ...e.schema } : { ...e };
  for (const n in r) r[n] = Wu(r[n]);
  return t && e.type === "type" ? ln(r) : cn(r);
}
function T1(e, t) {
  const { schema: r } = e,
    n = {};
  for (const s of t) n[s] = r[s];
  switch (e.type) {
    case "type":
      return ln(n);
    default:
      return cn(n);
  }
}
function N1(e, t) {
  return (
    console.warn(
      "superstruct@0.11 - The `struct` helper has been renamed to `define`."
    ),
    Te(e, t)
  );
}
function M1() {
  return Te("any", () => !0);
}
function L1(e) {
  return new pe({
    type: "array",
    schema: e,
    *entries(t) {
      if (e && Array.isArray(t))
        for (const [r, n] of t.entries()) yield [r, n, e];
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
    validator(t) {
      return (
        Array.isArray(t) || `Expected an array value, but received: ${me(t)}`
      );
    },
  });
}
function O1() {
  return Te("bigint", (e) => typeof e == "bigint");
}
function P1() {
  return Te("boolean", (e) => typeof e == "boolean");
}
function $1() {
  return Te(
    "date",
    (e) =>
      (e instanceof Date && !isNaN(e.getTime())) ||
      `Expected a valid \`Date\` object, but received: ${me(e)}`
  );
}
function B1(e) {
  const t = {},
    r = e.map((n) => me(n)).join();
  for (const n of e) t[n] = n;
  return new pe({
    type: "enums",
    schema: t,
    validator(n) {
      return (
        e.includes(n) || `Expected one of \`${r}\`, but received: ${me(n)}`
      );
    },
  });
}
function D1() {
  return Te(
    "func",
    (e) =>
      typeof e == "function" || `Expected a function, but received: ${me(e)}`
  );
}
function F1(e) {
  return Te(
    "instance",
    (t) =>
      t instanceof e ||
      `Expected a \`${e.name}\` instance, but received: ${me(t)}`
  );
}
function j1() {
  return Te(
    "integer",
    (e) =>
      (typeof e == "number" && !isNaN(e) && Number.isInteger(e)) ||
      `Expected an integer, but received: ${me(e)}`
  );
}
function H1(e) {
  return new pe({
    type: "intersection",
    schema: null,
    *entries(t, r) {
      for (const n of e) yield* n.entries(t, r);
    },
    *validator(t, r) {
      for (const n of e) yield* n.validator(t, r);
    },
    *refiner(t, r) {
      for (const n of e) yield* n.refiner(t, r);
    },
  });
}
function U1(e) {
  const t = me(e),
    r = typeof e;
  return new pe({
    type: "literal",
    schema: r === "string" || r === "number" || r === "boolean" ? e : null,
    validator(n) {
      return n === e || `Expected the literal \`${t}\`, but received: ${me(n)}`;
    },
  });
}
function W1(e, t) {
  return new pe({
    type: "map",
    schema: null,
    *entries(r) {
      if (e && t && r instanceof Map)
        for (const [n, s] of r.entries()) yield [n, n, e], yield [n, s, t];
    },
    coercer(r) {
      return r instanceof Map ? new Map(r) : r;
    },
    validator(r) {
      return (
        r instanceof Map || `Expected a \`Map\` object, but received: ${me(r)}`
      );
    },
  });
}
function Yo() {
  return Te("never", () => !1);
}
function V1(e) {
  return new pe({
    ...e,
    validator: (t, r) => t === null || e.validator(t, r),
    refiner: (t, r) => t === null || e.refiner(t, r),
  });
}
function z1() {
  return Te(
    "number",
    (e) =>
      (typeof e == "number" && !isNaN(e)) ||
      `Expected a number, but received: ${me(e)}`
  );
}
function cn(e) {
  const t = e ? Object.keys(e) : [],
    r = Yo();
  return new pe({
    type: "object",
    schema: e || null,
    *entries(n) {
      if (e && Fe(n)) {
        const s = new Set(Object.keys(n));
        for (const i of t) s.delete(i), yield [i, n[i], e[i]];
        for (const i of s) yield [i, n[i], r];
      }
    },
    validator(n) {
      return Fe(n) || `Expected an object, but received: ${me(n)}`;
    },
    coercer(n) {
      return Fe(n) ? { ...n } : n;
    },
  });
}
function Wu(e) {
  return new pe({
    ...e,
    validator: (t, r) => t === void 0 || e.validator(t, r),
    refiner: (t, r) => t === void 0 || e.refiner(t, r),
  });
}
function q1(e, t) {
  return new pe({
    type: "record",
    schema: null,
    *entries(r) {
      if (Fe(r))
        for (const n in r) {
          const s = r[n];
          yield [n, n, e], yield [n, s, t];
        }
    },
    validator(r) {
      return Fe(r) || `Expected an object, but received: ${me(r)}`;
    },
  });
}
function G1() {
  return Te("regexp", (e) => e instanceof RegExp);
}
function J1(e) {
  return new pe({
    type: "set",
    schema: null,
    *entries(t) {
      if (e && t instanceof Set) for (const r of t) yield [r, r, e];
    },
    coercer(t) {
      return t instanceof Set ? new Set(t) : t;
    },
    validator(t) {
      return (
        t instanceof Set || `Expected a \`Set\` object, but received: ${me(t)}`
      );
    },
  });
}
function Vu() {
  return Te(
    "string",
    (e) => typeof e == "string" || `Expected a string, but received: ${me(e)}`
  );
}
function Z1(e) {
  const t = Yo();
  return new pe({
    type: "tuple",
    schema: null,
    *entries(r) {
      if (Array.isArray(r)) {
        const n = Math.max(e.length, r.length);
        for (let s = 0; s < n; s++) yield [s, r[s], e[s] || t];
      }
    },
    validator(r) {
      return Array.isArray(r) || `Expected an array, but received: ${me(r)}`;
    },
  });
}
function ln(e) {
  const t = Object.keys(e);
  return new pe({
    type: "type",
    schema: e,
    *entries(r) {
      if (Fe(r)) for (const n of t) yield [n, r[n], e[n]];
    },
    validator(r) {
      return Fe(r) || `Expected an object, but received: ${me(r)}`;
    },
    coercer(r) {
      return Fe(r) ? { ...r } : r;
    },
  });
}
function K1(e) {
  const t = e.map((r) => r.type).join(" | ");
  return new pe({
    type: "union",
    schema: null,
    coercer(r) {
      for (const n of e) {
        const [s, i] = n.validate(r, { coerce: !0 });
        if (!s) return i;
      }
      return r;
    },
    validator(r, n) {
      const s = [];
      for (const i of e) {
        const [...o] = Ko(r, i, n),
          [a] = o;
        if (a[0]) for (const [c] of o) c && s.push(c);
        else return [];
      }
      return [
        `Expected the value to satisfy a union of \`${t}\`, but received: ${me(
          r
        )}`,
        ...s,
      ];
    },
  });
}
function zu() {
  return Te("unknown", () => !0);
}
function Xo(e, t, r) {
  return new pe({
    ...e,
    coercer: (n, s) => (Qo(n, t) ? e.coercer(r(n, s), s) : e.coercer(n, s)),
  });
}
function Q1(e, t, r = {}) {
  return Xo(e, zu(), (n) => {
    const s = typeof t == "function" ? t() : t;
    if (n === void 0) return s;
    if (!r.strict && Rc(n) && Rc(s)) {
      const i = { ...n };
      let o = !1;
      for (const a in s) i[a] === void 0 && ((i[a] = s[a]), (o = !0));
      if (o) return i;
    }
    return n;
  });
}
function Y1(e) {
  return Xo(e, Vu(), (t) => t.trim());
}
function X1(e) {
  return Ut(e, "empty", (t) => {
    const r = qu(t);
    return (
      r === 0 ||
      `Expected an empty ${e.type} but received one with a size of \`${r}\``
    );
  });
}
function qu(e) {
  return e instanceof Map || e instanceof Set ? e.size : e.length;
}
function eg(e, t, r = {}) {
  const { exclusive: n } = r;
  return Ut(e, "max", (s) =>
    n
      ? s < t
      : s <= t ||
        `Expected a ${e.type} less than ${
          n ? "" : "or equal to "
        }${t} but received \`${s}\``
  );
}
function tg(e, t, r = {}) {
  const { exclusive: n } = r;
  return Ut(e, "min", (s) =>
    n
      ? s > t
      : s >= t ||
        `Expected a ${e.type} greater than ${
          n ? "" : "or equal to "
        }${t} but received \`${s}\``
  );
}
function rg(e) {
  return Ut(
    e,
    "nonempty",
    (t) =>
      qu(t) > 0 || `Expected a nonempty ${e.type} but received an empty one`
  );
}
function ng(e, t) {
  return Ut(
    e,
    "pattern",
    (r) =>
      t.test(r) ||
      `Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`
  );
}
function sg(e, t, r = t) {
  const n = `Expected a ${e.type}`,
    s = t === r ? `of \`${t}\`` : `between \`${t}\` and \`${r}\``;
  return Ut(e, "size", (i) => {
    if (typeof i == "number" || i instanceof Date)
      return (t <= i && i <= r) || `${n} ${s} but received \`${i}\``;
    if (i instanceof Map || i instanceof Set) {
      const { size: o } = i;
      return (
        (t <= o && o <= r) ||
        `${n} with a size ${s} but received one with a size of \`${o}\``
      );
    } else {
      const { length: o } = i;
      return (
        (t <= o && o <= r) ||
        `${n} with a length ${s} but received one with a length of \`${o}\``
      );
    }
  });
}
function Ut(e, t, r) {
  return new pe({
    ...e,
    *refiner(n, s) {
      yield* e.refiner(n, s);
      const i = r(n, s),
        o = Co(i, s, e, n);
      for (const a of o) yield { ...a, refinement: t };
    },
  });
}
const ig = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Struct: pe,
        StructError: Fu,
        any: M1,
        array: L1,
        assert: ju,
        assign: R1,
        bigint: O1,
        boolean: P1,
        coerce: Xo,
        create: Hu,
        date: $1,
        defaulted: Q1,
        define: Te,
        deprecated: C1,
        dynamic: k1,
        empty: X1,
        enums: B1,
        func: D1,
        instance: F1,
        integer: j1,
        intersection: H1,
        is: Qo,
        lazy: I1,
        literal: U1,
        map: W1,
        mask: Uu,
        max: eg,
        min: tg,
        never: Yo,
        nonempty: rg,
        nullable: V1,
        number: z1,
        object: cn,
        omit: A1,
        optional: Wu,
        partial: x1,
        pattern: ng,
        pick: T1,
        record: q1,
        refine: Ut,
        regexp: G1,
        set: J1,
        size: sg,
        string: Vu,
        struct: N1,
        trimmed: Y1,
        tuple: Z1,
        type: ln,
        union: K1,
        unknown: zu,
        validate: Er,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Wt = Ur(ig);
Object.defineProperty(Se, "__esModule", { value: !0 });
Se.assertExhaustive = Se.assertStruct = Se.assert = Se.AssertionError = void 0;
const og = Wt;
function ag(e) {
  return typeof e == "object" && e !== null && "message" in e;
}
function cg(e) {
  var t, r;
  return (
    typeof ((r =
      (t = e?.prototype) === null || t === void 0 ? void 0 : t.constructor) ===
      null || r === void 0
      ? void 0
      : r.name) == "string"
  );
}
function lg(e) {
  const t = ag(e) ? e.message : String(e);
  return t.endsWith(".") ? t.slice(0, -1) : t;
}
function Gu(e, t) {
  return cg(e) ? new e({ message: t }) : e({ message: t });
}
class ea extends Error {
  constructor(t) {
    super(t.message), (this.code = "ERR_ASSERTION");
  }
}
Se.AssertionError = ea;
function ug(e, t = "Assertion failed.", r = ea) {
  if (!e) throw t instanceof Error ? t : Gu(r, t);
}
Se.assert = ug;
function dg(e, t, r = "Assertion failed", n = ea) {
  try {
    (0, og.assert)(e, t);
  } catch (s) {
    throw Gu(n, `${r}: ${lg(s)}.`);
  }
}
Se.assertStruct = dg;
function hg(e) {
  throw new Error(
    "Invalid branch reached. Should be detected during compilation."
  );
}
Se.assertExhaustive = hg;
var un = {};
Object.defineProperty(un, "__esModule", { value: !0 });
un.base64 = void 0;
const fg = Wt,
  pg = Se,
  gg = (e, t = {}) => {
    var r, n;
    const s = (r = t.paddingRequired) !== null && r !== void 0 ? r : !1,
      i = (n = t.characterSet) !== null && n !== void 0 ? n : "base64";
    let o;
    i === "base64"
      ? (o = String.raw`[A-Za-z0-9+\/]`)
      : ((0, pg.assert)(i === "base64url"), (o = String.raw`[-_A-Za-z0-9]`));
    let a;
    return (
      s
        ? (a = new RegExp(`^(?:${o}{4})*(?:${o}{3}=|${o}{2}==)?$`, "u"))
        : (a = new RegExp(
            `^(?:${o}{4})*(?:${o}{2,3}|${o}{3}=|${o}{2}==)?$`,
            "u"
          )),
      (0, fg.pattern)(e, a)
    );
  };
un.base64 = gg;
var ee = {},
  dn = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.remove0x =
      e.add0x =
      e.assertIsStrictHexString =
      e.assertIsHexString =
      e.isStrictHexString =
      e.isHexString =
      e.StrictHexStruct =
      e.HexStruct =
        void 0);
  const t = Wt,
    r = Se;
  (e.HexStruct = (0, t.pattern)((0, t.string)(), /^(?:0x)?[0-9a-f]+$/iu)),
    (e.StrictHexStruct = (0, t.pattern)((0, t.string)(), /^0x[0-9a-f]+$/iu));
  function n(l) {
    return (0, t.is)(l, e.HexStruct);
  }
  e.isHexString = n;
  function s(l) {
    return (0, t.is)(l, e.StrictHexStruct);
  }
  e.isStrictHexString = s;
  function i(l) {
    (0, r.assert)(n(l), "Value must be a hexadecimal string.");
  }
  e.assertIsHexString = i;
  function o(l) {
    (0, r.assert)(
      s(l),
      'Value must be a hexadecimal string, starting with "0x".'
    );
  }
  e.assertIsStrictHexString = o;
  function a(l) {
    return l.startsWith("0x")
      ? l
      : l.startsWith("0X")
      ? `0x${l.substring(2)}`
      : `0x${l}`;
  }
  e.add0x = a;
  function c(l) {
    return l.startsWith("0x") || l.startsWith("0X") ? l.substring(2) : l;
  }
  e.remove0x = c;
})(dn);
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.createDataView =
  ee.concatBytes =
  ee.valueToBytes =
  ee.stringToBytes =
  ee.numberToBytes =
  ee.signedBigIntToBytes =
  ee.bigIntToBytes =
  ee.hexToBytes =
  ee.bytesToString =
  ee.bytesToNumber =
  ee.bytesToSignedBigInt =
  ee.bytesToBigInt =
  ee.bytesToHex =
  ee.assertIsBytes =
  ee.isBytes =
    void 0;
const Le = Se,
  ko = dn,
  Cc = 48,
  kc = 58,
  Ic = 87;
function _g() {
  const e = [];
  return () => {
    if (e.length === 0)
      for (let t = 0; t < 256; t++) e.push(t.toString(16).padStart(2, "0"));
    return e;
  };
}
const mg = _g();
function ta(e) {
  return e instanceof Uint8Array;
}
ee.isBytes = ta;
function Sr(e) {
  (0, Le.assert)(ta(e), "Value must be a Uint8Array.");
}
ee.assertIsBytes = Sr;
function Ju(e) {
  if ((Sr(e), e.length === 0)) return "0x";
  const t = mg(),
    r = new Array(e.length);
  for (let n = 0; n < e.length; n++) r[n] = t[e[n]];
  return (0, ko.add0x)(r.join(""));
}
ee.bytesToHex = Ju;
function Zu(e) {
  Sr(e);
  const t = Ju(e);
  return BigInt(t);
}
ee.bytesToBigInt = Zu;
function bg(e) {
  Sr(e);
  let t = BigInt(0);
  for (const r of e) t = (t << BigInt(8)) + BigInt(r);
  return BigInt.asIntN(e.length * 8, t);
}
ee.bytesToSignedBigInt = bg;
function yg(e) {
  Sr(e);
  const t = Zu(e);
  return (
    (0, Le.assert)(
      t <= BigInt(Number.MAX_SAFE_INTEGER),
      "Number is not a safe integer. Use `bytesToBigInt` instead."
    ),
    Number(t)
  );
}
ee.bytesToNumber = yg;
function vg(e) {
  return Sr(e), new TextDecoder().decode(e);
}
ee.bytesToString = vg;
function Ss(e) {
  var t;
  if (
    ((t = e?.toLowerCase) === null || t === void 0 ? void 0 : t.call(e)) ===
    "0x"
  )
    return new Uint8Array();
  (0, ko.assertIsHexString)(e);
  const r = (0, ko.remove0x)(e).toLowerCase(),
    n = r.length % 2 === 0 ? r : `0${r}`,
    s = new Uint8Array(n.length / 2);
  for (let i = 0; i < s.length; i++) {
    const o = n.charCodeAt(i * 2),
      a = n.charCodeAt(i * 2 + 1),
      c = o - (o < kc ? Cc : Ic),
      l = a - (a < kc ? Cc : Ic);
    s[i] = c * 16 + l;
  }
  return s;
}
ee.hexToBytes = Ss;
function Ku(e) {
  (0, Le.assert)(typeof e == "bigint", "Value must be a bigint."),
    (0, Le.assert)(e >= BigInt(0), "Value must be a non-negative bigint.");
  const t = e.toString(16);
  return Ss(t);
}
ee.bigIntToBytes = Ku;
function wg(e, t) {
  (0, Le.assert)(t > 0);
  const r = e >> BigInt(31);
  return !(((~e & r) + (e & ~r)) >> BigInt(t * 8 + -1));
}
function Eg(e, t) {
  (0, Le.assert)(typeof e == "bigint", "Value must be a bigint."),
    (0, Le.assert)(typeof t == "number", "Byte length must be a number."),
    (0, Le.assert)(t > 0, "Byte length must be greater than 0."),
    (0, Le.assert)(
      wg(e, t),
      "Byte length is too small to represent the given value."
    );
  let r = e;
  const n = new Uint8Array(t);
  for (let s = 0; s < n.length; s++)
    (n[s] = Number(BigInt.asUintN(8, r))), (r >>= BigInt(8));
  return n.reverse();
}
ee.signedBigIntToBytes = Eg;
function Qu(e) {
  (0, Le.assert)(typeof e == "number", "Value must be a number."),
    (0, Le.assert)(e >= 0, "Value must be a non-negative number."),
    (0, Le.assert)(
      Number.isSafeInteger(e),
      "Value is not a safe integer. Use `bigIntToBytes` instead."
    );
  const t = e.toString(16);
  return Ss(t);
}
ee.numberToBytes = Qu;
function Yu(e) {
  return (
    (0, Le.assert)(typeof e == "string", "Value must be a string."),
    new TextEncoder().encode(e)
  );
}
ee.stringToBytes = Yu;
function Xu(e) {
  if (typeof e == "bigint") return Ku(e);
  if (typeof e == "number") return Qu(e);
  if (typeof e == "string") return e.startsWith("0x") ? Ss(e) : Yu(e);
  if (ta(e)) return e;
  throw new TypeError(`Unsupported value type: "${typeof e}".`);
}
ee.valueToBytes = Xu;
function Sg(e) {
  const t = new Array(e.length);
  let r = 0;
  for (let s = 0; s < e.length; s++) {
    const i = Xu(e[s]);
    (t[s] = i), (r += i.length);
  }
  const n = new Uint8Array(r);
  for (let s = 0, i = 0; s < t.length; s++) n.set(t[s], i), (i += t[s].length);
  return n;
}
ee.concatBytes = Sg;
function Rg(e) {
  if (typeof Buffer < "u" && e instanceof Buffer) {
    const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
    return new DataView(t);
  }
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
ee.createDataView = Rg;
var Rs = {};
Object.defineProperty(Rs, "__esModule", { value: !0 });
Rs.ChecksumStruct = void 0;
const Ac = Wt,
  Cg = un;
Rs.ChecksumStruct = (0, Ac.size)(
  (0, Cg.base64)((0, Ac.string)(), { paddingRequired: !0 }),
  44,
  44
);
var tt = {};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.createHex = tt.createBytes = tt.createBigInt = tt.createNumber = void 0;
const fe = Wt,
  kg = Se,
  ed = ee,
  Cs = dn,
  td = (0, fe.union)([
    (0, fe.number)(),
    (0, fe.bigint)(),
    (0, fe.string)(),
    Cs.StrictHexStruct,
  ]),
  Ig = (0, fe.coerce)((0, fe.number)(), td, Number),
  Ag = (0, fe.coerce)((0, fe.bigint)(), td, BigInt);
(0, fe.union)([Cs.StrictHexStruct, (0, fe.instance)(Uint8Array)]);
const xg = (0, fe.coerce)(
    (0, fe.instance)(Uint8Array),
    (0, fe.union)([Cs.StrictHexStruct]),
    ed.hexToBytes
  ),
  Tg = (0, fe.coerce)(
    Cs.StrictHexStruct,
    (0, fe.instance)(Uint8Array),
    ed.bytesToHex
  );
function Ng(e) {
  try {
    const t = (0, fe.create)(e, Ig);
    return (
      (0, kg.assert)(
        Number.isFinite(t),
        `Expected a number-like value, got "${e}".`
      ),
      t
    );
  } catch (t) {
    throw t instanceof fe.StructError
      ? new Error(`Expected a number-like value, got "${e}".`)
      : t;
  }
}
tt.createNumber = Ng;
function Mg(e) {
  try {
    return (0, fe.create)(e, Ag);
  } catch (t) {
    throw t instanceof fe.StructError
      ? new Error(`Expected a number-like value, got "${String(t.value)}".`)
      : t;
  }
}
tt.createBigInt = Mg;
function Lg(e) {
  if (typeof e == "string" && e.toLowerCase() === "0x") return new Uint8Array();
  try {
    return (0, fe.create)(e, xg);
  } catch (t) {
    throw t instanceof fe.StructError
      ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`)
      : t;
  }
}
tt.createBytes = Lg;
function Og(e) {
  if (
    (e instanceof Uint8Array && e.length === 0) ||
    (typeof e == "string" && e.toLowerCase() === "0x")
  )
    return "0x";
  try {
    return (0, fe.create)(e, Tg);
  } catch (t) {
    throw t instanceof fe.StructError
      ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`)
      : t;
  }
}
tt.createHex = Og;
var fr = {},
  rd =
    (F && F.__classPrivateFieldSet) ||
    function (e, t, r, n, s) {
      if (n === "m") throw new TypeError("Private method is not writable");
      if (n === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof t == "function" ? e !== t || !s : !t.has(e))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it"
        );
      return n === "a" ? s.call(e, r) : s ? (s.value = r) : t.set(e, r), r;
    },
  Ie =
    (F && F.__classPrivateFieldGet) ||
    function (e, t, r, n) {
      if (r === "a" && !n)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof t == "function" ? e !== t || !n : !t.has(e))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
    },
  He,
  Ze;
Object.defineProperty(fr, "__esModule", { value: !0 });
fr.FrozenSet = fr.FrozenMap = void 0;
class ra {
  constructor(t) {
    He.set(this, void 0), rd(this, He, new Map(t), "f"), Object.freeze(this);
  }
  get size() {
    return Ie(this, He, "f").size;
  }
  [((He = new WeakMap()), Symbol.iterator)]() {
    return Ie(this, He, "f")[Symbol.iterator]();
  }
  entries() {
    return Ie(this, He, "f").entries();
  }
  forEach(t, r) {
    return Ie(this, He, "f").forEach((n, s, i) => t.call(r, n, s, this));
  }
  get(t) {
    return Ie(this, He, "f").get(t);
  }
  has(t) {
    return Ie(this, He, "f").has(t);
  }
  keys() {
    return Ie(this, He, "f").keys();
  }
  values() {
    return Ie(this, He, "f").values();
  }
  toString() {
    return `FrozenMap(${this.size}) {${
      this.size > 0
        ? ` ${[...this.entries()]
            .map(([t, r]) => `${String(t)} => ${String(r)}`)
            .join(", ")} `
        : ""
    }}`;
  }
}
fr.FrozenMap = ra;
class na {
  constructor(t) {
    Ze.set(this, void 0), rd(this, Ze, new Set(t), "f"), Object.freeze(this);
  }
  get size() {
    return Ie(this, Ze, "f").size;
  }
  [((Ze = new WeakMap()), Symbol.iterator)]() {
    return Ie(this, Ze, "f")[Symbol.iterator]();
  }
  entries() {
    return Ie(this, Ze, "f").entries();
  }
  forEach(t, r) {
    return Ie(this, Ze, "f").forEach((n, s, i) => t.call(r, n, s, this));
  }
  has(t) {
    return Ie(this, Ze, "f").has(t);
  }
  keys() {
    return Ie(this, Ze, "f").keys();
  }
  values() {
    return Ie(this, Ze, "f").values();
  }
  toString() {
    return `FrozenSet(${this.size}) {${
      this.size > 0
        ? ` ${[...this.values()].map((t) => String(t)).join(", ")} `
        : ""
    }}`;
  }
}
fr.FrozenSet = na;
Object.freeze(ra);
Object.freeze(ra.prototype);
Object.freeze(na);
Object.freeze(na.prototype);
var nd = {};
Object.defineProperty(nd, "__esModule", { value: !0 });
var sd = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.getJsonRpcIdValidator =
      e.assertIsJsonRpcError =
      e.isJsonRpcError =
      e.assertIsJsonRpcFailure =
      e.isJsonRpcFailure =
      e.assertIsJsonRpcSuccess =
      e.isJsonRpcSuccess =
      e.assertIsJsonRpcResponse =
      e.isJsonRpcResponse =
      e.assertIsPendingJsonRpcResponse =
      e.isPendingJsonRpcResponse =
      e.JsonRpcResponseStruct =
      e.JsonRpcFailureStruct =
      e.JsonRpcSuccessStruct =
      e.PendingJsonRpcResponseStruct =
      e.assertIsJsonRpcRequest =
      e.isJsonRpcRequest =
      e.assertIsJsonRpcNotification =
      e.isJsonRpcNotification =
      e.JsonRpcNotificationStruct =
      e.JsonRpcRequestStruct =
      e.JsonRpcParamsStruct =
      e.JsonRpcErrorStruct =
      e.JsonRpcIdStruct =
      e.JsonRpcVersionStruct =
      e.jsonrpc2 =
      e.getJsonSize =
      e.isValidJson =
      e.JsonStruct =
      e.UnsafeJsonStruct =
        void 0);
  const t = Wt,
    r = Se,
    n = () =>
      (0, t.define)(
        "finite number",
        (R) => (0, t.is)(R, (0, t.number)()) && Number.isFinite(R)
      );
  (e.UnsafeJsonStruct = (0, t.union)([
    (0, t.literal)(null),
    (0, t.boolean)(),
    n(),
    (0, t.string)(),
    (0, t.array)((0, t.lazy)(() => e.UnsafeJsonStruct)),
    (0, t.record)(
      (0, t.string)(),
      (0, t.lazy)(() => e.UnsafeJsonStruct)
    ),
  ])),
    (e.JsonStruct = (0, t.define)("Json", (R, I) => {
      function j($, N) {
        const le = [...N.validator($, I)];
        return le.length > 0 ? le : !0;
      }
      try {
        const $ = j(R, e.UnsafeJsonStruct);
        return $ !== !0
          ? $
          : j(JSON.parse(JSON.stringify(R)), e.UnsafeJsonStruct);
      } catch ($) {
        return $ instanceof RangeError ? "Circular reference detected" : !1;
      }
    }));
  function s(R) {
    return (0, t.is)(R, e.JsonStruct);
  }
  e.isValidJson = s;
  function i(R) {
    (0, r.assertStruct)(R, e.JsonStruct, "Invalid JSON value");
    const I = JSON.stringify(R);
    return new TextEncoder().encode(I).byteLength;
  }
  (e.getJsonSize = i),
    (e.jsonrpc2 = "2.0"),
    (e.JsonRpcVersionStruct = (0, t.literal)(e.jsonrpc2)),
    (e.JsonRpcIdStruct = (0, t.nullable)(
      (0, t.union)([(0, t.number)(), (0, t.string)()])
    )),
    (e.JsonRpcErrorStruct = (0, t.object)({
      code: (0, t.integer)(),
      message: (0, t.string)(),
      data: (0, t.optional)(e.JsonStruct),
      stack: (0, t.optional)((0, t.string)()),
    })),
    (e.JsonRpcParamsStruct = (0, t.optional)(
      (0, t.union)([
        (0, t.record)((0, t.string)(), e.JsonStruct),
        (0, t.array)(e.JsonStruct),
      ])
    )),
    (e.JsonRpcRequestStruct = (0, t.object)({
      id: e.JsonRpcIdStruct,
      jsonrpc: e.JsonRpcVersionStruct,
      method: (0, t.string)(),
      params: e.JsonRpcParamsStruct,
    })),
    (e.JsonRpcNotificationStruct = (0, t.omit)(e.JsonRpcRequestStruct, ["id"]));
  function o(R) {
    return (0, t.is)(R, e.JsonRpcNotificationStruct);
  }
  e.isJsonRpcNotification = o;
  function a(R, I) {
    (0, r.assertStruct)(
      R,
      e.JsonRpcNotificationStruct,
      "Invalid JSON-RPC notification",
      I
    );
  }
  e.assertIsJsonRpcNotification = a;
  function c(R) {
    return (0, t.is)(R, e.JsonRpcRequestStruct);
  }
  e.isJsonRpcRequest = c;
  function l(R, I) {
    (0, r.assertStruct)(
      R,
      e.JsonRpcRequestStruct,
      "Invalid JSON-RPC request",
      I
    );
  }
  (e.assertIsJsonRpcRequest = l),
    (e.PendingJsonRpcResponseStruct = (0, t.object)({
      id: e.JsonRpcIdStruct,
      jsonrpc: e.JsonRpcVersionStruct,
      result: (0, t.optional)((0, t.unknown)()),
      error: (0, t.optional)(e.JsonRpcErrorStruct),
    })),
    (e.JsonRpcSuccessStruct = (0, t.object)({
      id: e.JsonRpcIdStruct,
      jsonrpc: e.JsonRpcVersionStruct,
      result: e.JsonStruct,
    })),
    (e.JsonRpcFailureStruct = (0, t.object)({
      id: e.JsonRpcIdStruct,
      jsonrpc: e.JsonRpcVersionStruct,
      error: e.JsonRpcErrorStruct,
    })),
    (e.JsonRpcResponseStruct = (0, t.union)([
      e.JsonRpcSuccessStruct,
      e.JsonRpcFailureStruct,
    ]));
  function d(R) {
    return (0, t.is)(R, e.PendingJsonRpcResponseStruct);
  }
  e.isPendingJsonRpcResponse = d;
  function u(R, I) {
    (0, r.assertStruct)(
      R,
      e.PendingJsonRpcResponseStruct,
      "Invalid pending JSON-RPC response",
      I
    );
  }
  e.assertIsPendingJsonRpcResponse = u;
  function h(R) {
    return (0, t.is)(R, e.JsonRpcResponseStruct);
  }
  e.isJsonRpcResponse = h;
  function f(R, I) {
    (0, r.assertStruct)(
      R,
      e.JsonRpcResponseStruct,
      "Invalid JSON-RPC response",
      I
    );
  }
  e.assertIsJsonRpcResponse = f;
  function m(R) {
    return (0, t.is)(R, e.JsonRpcSuccessStruct);
  }
  e.isJsonRpcSuccess = m;
  function S(R, I) {
    (0, r.assertStruct)(
      R,
      e.JsonRpcSuccessStruct,
      "Invalid JSON-RPC success response",
      I
    );
  }
  e.assertIsJsonRpcSuccess = S;
  function y(R) {
    return (0, t.is)(R, e.JsonRpcFailureStruct);
  }
  e.isJsonRpcFailure = y;
  function p(R, I) {
    (0, r.assertStruct)(
      R,
      e.JsonRpcFailureStruct,
      "Invalid JSON-RPC failure response",
      I
    );
  }
  e.assertIsJsonRpcFailure = p;
  function b(R) {
    return (0, t.is)(R, e.JsonRpcErrorStruct);
  }
  e.isJsonRpcError = b;
  function v(R, I) {
    (0, r.assertStruct)(R, e.JsonRpcErrorStruct, "Invalid JSON-RPC error", I);
  }
  e.assertIsJsonRpcError = v;
  function C(R) {
    const {
      permitEmptyString: I,
      permitFractions: j,
      permitNull: $,
    } = Object.assign(
      { permitEmptyString: !0, permitFractions: !1, permitNull: !0 },
      R
    );
    return (G) =>
      !!(
        (typeof G == "number" && (j || Number.isInteger(G))) ||
        (typeof G == "string" && (I || G.length > 0)) ||
        ($ && G === null)
      );
  }
  e.getJsonRpcIdValidator = C;
})(sd);
var id = {};
Object.defineProperty(id, "__esModule", { value: !0 });
var pr = {},
  Io = { exports: {} },
  ro,
  xc;
function Pg() {
  if (xc) return ro;
  xc = 1;
  var e = 1e3,
    t = e * 60,
    r = t * 60,
    n = r * 24,
    s = n * 7,
    i = n * 365.25;
  ro = function (d, u) {
    u = u || {};
    var h = typeof d;
    if (h === "string" && d.length > 0) return o(d);
    if (h === "number" && isFinite(d)) return u.long ? c(d) : a(d);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(d)
    );
  };
  function o(d) {
    if (((d = String(d)), !(d.length > 100))) {
      var u =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          d
        );
      if (u) {
        var h = parseFloat(u[1]),
          f = (u[2] || "ms").toLowerCase();
        switch (f) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return h * i;
          case "weeks":
          case "week":
          case "w":
            return h * s;
          case "days":
          case "day":
          case "d":
            return h * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return h * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return h * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return h * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return h;
          default:
            return;
        }
      }
    }
  }
  function a(d) {
    var u = Math.abs(d);
    return u >= n
      ? Math.round(d / n) + "d"
      : u >= r
      ? Math.round(d / r) + "h"
      : u >= t
      ? Math.round(d / t) + "m"
      : u >= e
      ? Math.round(d / e) + "s"
      : d + "ms";
  }
  function c(d) {
    var u = Math.abs(d);
    return u >= n
      ? l(d, u, n, "day")
      : u >= r
      ? l(d, u, r, "hour")
      : u >= t
      ? l(d, u, t, "minute")
      : u >= e
      ? l(d, u, e, "second")
      : d + " ms";
  }
  function l(d, u, h, f) {
    var m = u >= h * 1.5;
    return Math.round(d / h) + " " + f + (m ? "s" : "");
  }
  return ro;
}
function $g(e) {
  (r.debug = r),
    (r.default = r),
    (r.coerce = c),
    (r.disable = i),
    (r.enable = s),
    (r.enabled = o),
    (r.humanize = Pg()),
    (r.destroy = l),
    Object.keys(e).forEach((d) => {
      r[d] = e[d];
    }),
    (r.names = []),
    (r.skips = []),
    (r.formatters = {});
  function t(d) {
    let u = 0;
    for (let h = 0; h < d.length; h++)
      (u = (u << 5) - u + d.charCodeAt(h)), (u |= 0);
    return r.colors[Math.abs(u) % r.colors.length];
  }
  r.selectColor = t;
  function r(d) {
    let u,
      h = null,
      f,
      m;
    function S(...y) {
      if (!S.enabled) return;
      const p = S,
        b = Number(new Date()),
        v = b - (u || b);
      (p.diff = v),
        (p.prev = u),
        (p.curr = b),
        (u = b),
        (y[0] = r.coerce(y[0])),
        typeof y[0] != "string" && y.unshift("%O");
      let C = 0;
      (y[0] = y[0].replace(/%([a-zA-Z%])/g, (I, j) => {
        if (I === "%%") return "%";
        C++;
        const $ = r.formatters[j];
        if (typeof $ == "function") {
          const N = y[C];
          (I = $.call(p, N)), y.splice(C, 1), C--;
        }
        return I;
      })),
        r.formatArgs.call(p, y),
        (p.log || r.log).apply(p, y);
    }
    return (
      (S.namespace = d),
      (S.useColors = r.useColors()),
      (S.color = r.selectColor(d)),
      (S.extend = n),
      (S.destroy = r.destroy),
      Object.defineProperty(S, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () =>
          h !== null
            ? h
            : (f !== r.namespaces && ((f = r.namespaces), (m = r.enabled(d))),
              m),
        set: (y) => {
          h = y;
        },
      }),
      typeof r.init == "function" && r.init(S),
      S
    );
  }
  function n(d, u) {
    const h = r(this.namespace + (typeof u > "u" ? ":" : u) + d);
    return (h.log = this.log), h;
  }
  function s(d) {
    r.save(d), (r.namespaces = d), (r.names = []), (r.skips = []);
    let u;
    const h = (typeof d == "string" ? d : "").split(/[\s,]+/),
      f = h.length;
    for (u = 0; u < f; u++)
      h[u] &&
        ((d = h[u].replace(/\*/g, ".*?")),
        d[0] === "-"
          ? r.skips.push(new RegExp("^" + d.slice(1) + "$"))
          : r.names.push(new RegExp("^" + d + "$")));
  }
  function i() {
    const d = [...r.names.map(a), ...r.skips.map(a).map((u) => "-" + u)].join(
      ","
    );
    return r.enable(""), d;
  }
  function o(d) {
    if (d[d.length - 1] === "*") return !0;
    let u, h;
    for (u = 0, h = r.skips.length; u < h; u++)
      if (r.skips[u].test(d)) return !1;
    for (u = 0, h = r.names.length; u < h; u++)
      if (r.names[u].test(d)) return !0;
    return !1;
  }
  function a(d) {
    return d
      .toString()
      .substring(2, d.toString().length - 2)
      .replace(/\.\*\?$/, "*");
  }
  function c(d) {
    return d instanceof Error ? d.stack || d.message : d;
  }
  function l() {
    console.warn(
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
  }
  return r.enable(r.load()), r;
}
var Bg = $g;
(function (e, t) {
  (t.formatArgs = n),
    (t.save = s),
    (t.load = i),
    (t.useColors = r),
    (t.storage = o()),
    (t.destroy = (() => {
      let c = !1;
      return () => {
        c ||
          ((c = !0),
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
          ));
      };
    })()),
    (t.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33",
    ]);
  function r() {
    return typeof window < "u" &&
      window.process &&
      (window.process.type === "renderer" || window.process.__nwjs)
      ? !0
      : typeof navigator < "u" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ? !1
      : (typeof document < "u" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window < "u" &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  function n(c) {
    if (
      ((c[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        c[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        e.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    const l = "color: " + this.color;
    c.splice(1, 0, l, "color: inherit");
    let d = 0,
      u = 0;
    c[0].replace(/%[a-zA-Z%]/g, (h) => {
      h !== "%%" && (d++, h === "%c" && (u = d));
    }),
      c.splice(u, 0, l);
  }
  t.log = console.debug || console.log || (() => {});
  function s(c) {
    try {
      c ? t.storage.setItem("debug", c) : t.storage.removeItem("debug");
    } catch {}
  }
  function i() {
    let c;
    try {
      c = t.storage.getItem("debug");
    } catch {}
    return !c && typeof process < "u" && "env" in process && (c = {}.DEBUG), c;
  }
  function o() {
    try {
      return localStorage;
    } catch {}
  }
  e.exports = Bg(t);
  const { formatters: a } = e.exports;
  a.j = function (c) {
    try {
      return JSON.stringify(c);
    } catch (l) {
      return "[UnexpectedJSONParseError]: " + l.message;
    }
  };
})(Io, Io.exports);
var Dg = Io.exports,
  Fg =
    (F && F.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(pr, "__esModule", { value: !0 });
pr.createModuleLogger = pr.createProjectLogger = void 0;
const jg = Fg(Dg),
  Hg = (0, jg.default)("metamask");
function Ug(e) {
  return Hg.extend(e);
}
pr.createProjectLogger = Ug;
function Wg(e, t) {
  return e.extend(t);
}
pr.createModuleLogger = Wg;
var od = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.calculateNumberSize =
      e.calculateStringSize =
      e.isASCII =
      e.isPlainObject =
      e.ESCAPE_CHARACTERS_REGEXP =
      e.JsonSize =
      e.hasProperty =
      e.isObject =
      e.isNullOrUndefined =
      e.isNonEmptyArray =
        void 0);
  function t(l) {
    return Array.isArray(l) && l.length > 0;
  }
  e.isNonEmptyArray = t;
  function r(l) {
    return l == null;
  }
  e.isNullOrUndefined = r;
  function n(l) {
    return !!l && typeof l == "object" && !Array.isArray(l);
  }
  e.isObject = n;
  const s = (l, d) => Object.hasOwnProperty.call(l, d);
  (e.hasProperty = s),
    (function (l) {
      (l[(l.Null = 4)] = "Null"),
        (l[(l.Comma = 1)] = "Comma"),
        (l[(l.Wrapper = 1)] = "Wrapper"),
        (l[(l.True = 4)] = "True"),
        (l[(l.False = 5)] = "False"),
        (l[(l.Quote = 1)] = "Quote"),
        (l[(l.Colon = 1)] = "Colon"),
        (l[(l.Date = 24)] = "Date");
    })(e.JsonSize || (e.JsonSize = {})),
    (e.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu);
  function i(l) {
    if (typeof l != "object" || l === null) return !1;
    try {
      let d = l;
      for (; Object.getPrototypeOf(d) !== null; ) d = Object.getPrototypeOf(d);
      return Object.getPrototypeOf(l) === d;
    } catch {
      return !1;
    }
  }
  e.isPlainObject = i;
  function o(l) {
    return l.charCodeAt(0) <= 127;
  }
  e.isASCII = o;
  function a(l) {
    var d;
    return (
      l.split("").reduce((h, f) => (o(f) ? h + 1 : h + 2), 0) +
      ((d = l.match(e.ESCAPE_CHARACTERS_REGEXP)) !== null && d !== void 0
        ? d
        : []
      ).length
    );
  }
  e.calculateStringSize = a;
  function c(l) {
    return l.toString().length;
  }
  e.calculateNumberSize = c;
})(od);
var rt = {};
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.hexToBigInt = rt.hexToNumber = rt.bigIntToHex = rt.numberToHex = void 0;
const sr = Se,
  Fr = dn,
  Vg = (e) => (
    (0, sr.assert)(typeof e == "number", "Value must be a number."),
    (0, sr.assert)(e >= 0, "Value must be a non-negative number."),
    (0, sr.assert)(
      Number.isSafeInteger(e),
      "Value is not a safe integer. Use `bigIntToHex` instead."
    ),
    (0, Fr.add0x)(e.toString(16))
  );
rt.numberToHex = Vg;
const zg = (e) => (
  (0, sr.assert)(typeof e == "bigint", "Value must be a bigint."),
  (0, sr.assert)(e >= 0, "Value must be a non-negative bigint."),
  (0, Fr.add0x)(e.toString(16))
);
rt.bigIntToHex = zg;
const qg = (e) => {
  (0, Fr.assertIsHexString)(e);
  const t = parseInt(e, 16);
  return (
    (0, sr.assert)(
      Number.isSafeInteger(t),
      "Value is not a safe integer. Use `hexToBigInt` instead."
    ),
    t
  );
};
rt.hexToNumber = qg;
const Gg = (e) => ((0, Fr.assertIsHexString)(e), BigInt((0, Fr.add0x)(e)));
rt.hexToBigInt = Gg;
var ad = {};
Object.defineProperty(ad, "__esModule", { value: !0 });
var cd = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.timeSince = e.inMilliseconds = e.Duration = void 0),
    (function (i) {
      (i[(i.Millisecond = 1)] = "Millisecond"),
        (i[(i.Second = 1e3)] = "Second"),
        (i[(i.Minute = 6e4)] = "Minute"),
        (i[(i.Hour = 36e5)] = "Hour"),
        (i[(i.Day = 864e5)] = "Day"),
        (i[(i.Week = 6048e5)] = "Week"),
        (i[(i.Year = 31536e6)] = "Year");
    })(e.Duration || (e.Duration = {}));
  const t = (i) => Number.isInteger(i) && i >= 0,
    r = (i, o) => {
      if (!t(i))
        throw new Error(
          `"${o}" must be a non-negative integer. Received: "${i}".`
        );
    };
  function n(i, o) {
    return r(i, "count"), i * o;
  }
  e.inMilliseconds = n;
  function s(i) {
    return r(i, "timestamp"), Date.now() - i;
  }
  e.timeSince = s;
})(cd);
var ld = {};
Object.defineProperty(ld, "__esModule", { value: !0 });
var ud = {},
  Ao = { exports: {} };
const Jg = "2.0.0",
  dd = 256,
  Zg = Number.MAX_SAFE_INTEGER || 9007199254740991,
  Kg = 16,
  Qg = dd - 6,
  Yg = [
    "major",
    "premajor",
    "minor",
    "preminor",
    "patch",
    "prepatch",
    "prerelease",
  ];
var ks = {
  MAX_LENGTH: dd,
  MAX_SAFE_COMPONENT_LENGTH: Kg,
  MAX_SAFE_BUILD_LENGTH: Qg,
  MAX_SAFE_INTEGER: Zg,
  RELEASE_TYPES: Yg,
  SEMVER_SPEC_VERSION: Jg,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2,
};
const Xg =
  typeof process == "object" &&
  process.env &&
  {}.NODE_DEBUG &&
  /\bsemver\b/i.test({}.NODE_DEBUG)
    ? (...e) => console.error("SEMVER", ...e)
    : () => {};
var Is = Xg;
(function (e, t) {
  const {
      MAX_SAFE_COMPONENT_LENGTH: r,
      MAX_SAFE_BUILD_LENGTH: n,
      MAX_LENGTH: s,
    } = ks,
    i = Is;
  t = e.exports = {};
  const o = (t.re = []),
    a = (t.safeRe = []),
    c = (t.src = []),
    l = (t.t = {});
  let d = 0;
  const u = "[a-zA-Z0-9-]",
    h = [
      ["\\s", 1],
      ["\\d", s],
      [u, n],
    ],
    f = (S) => {
      for (const [y, p] of h)
        S = S.split(`${y}*`)
          .join(`${y}{0,${p}}`)
          .split(`${y}+`)
          .join(`${y}{1,${p}}`);
      return S;
    },
    m = (S, y, p) => {
      const b = f(y),
        v = d++;
      i(S, v, y),
        (l[S] = v),
        (c[v] = y),
        (o[v] = new RegExp(y, p ? "g" : void 0)),
        (a[v] = new RegExp(b, p ? "g" : void 0));
    };
  m("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
    m("NUMERICIDENTIFIERLOOSE", "\\d+"),
    m("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${u}*`),
    m(
      "MAINVERSION",
      `(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})\\.(${
        c[l.NUMERICIDENTIFIER]
      })`
    ),
    m(
      "MAINVERSIONLOOSE",
      `(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${
        c[l.NUMERICIDENTIFIERLOOSE]
      })`
    ),
    m(
      "PRERELEASEIDENTIFIER",
      `(?:${c[l.NUMERICIDENTIFIER]}|${c[l.NONNUMERICIDENTIFIER]})`
    ),
    m(
      "PRERELEASEIDENTIFIERLOOSE",
      `(?:${c[l.NUMERICIDENTIFIERLOOSE]}|${c[l.NONNUMERICIDENTIFIER]})`
    ),
    m(
      "PRERELEASE",
      `(?:-(${c[l.PRERELEASEIDENTIFIER]}(?:\\.${c[l.PRERELEASEIDENTIFIER]})*))`
    ),
    m(
      "PRERELEASELOOSE",
      `(?:-?(${c[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${
        c[l.PRERELEASEIDENTIFIERLOOSE]
      })*))`
    ),
    m("BUILDIDENTIFIER", `${u}+`),
    m(
      "BUILD",
      `(?:\\+(${c[l.BUILDIDENTIFIER]}(?:\\.${c[l.BUILDIDENTIFIER]})*))`
    ),
    m("FULLPLAIN", `v?${c[l.MAINVERSION]}${c[l.PRERELEASE]}?${c[l.BUILD]}?`),
    m("FULL", `^${c[l.FULLPLAIN]}$`),
    m(
      "LOOSEPLAIN",
      `[v=\\s]*${c[l.MAINVERSIONLOOSE]}${c[l.PRERELEASELOOSE]}?${c[l.BUILD]}?`
    ),
    m("LOOSE", `^${c[l.LOOSEPLAIN]}$`),
    m("GTLT", "((?:<|>)?=?)"),
    m("XRANGEIDENTIFIERLOOSE", `${c[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
    m("XRANGEIDENTIFIER", `${c[l.NUMERICIDENTIFIER]}|x|X|\\*`),
    m(
      "XRANGEPLAIN",
      `[v=\\s]*(${c[l.XRANGEIDENTIFIER]})(?:\\.(${
        c[l.XRANGEIDENTIFIER]
      })(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:${c[l.PRERELEASE]})?${
        c[l.BUILD]
      }?)?)?`
    ),
    m(
      "XRANGEPLAINLOOSE",
      `[v=\\s]*(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
        c[l.XRANGEIDENTIFIERLOOSE]
      })(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:${c[l.PRERELEASELOOSE]})?${
        c[l.BUILD]
      }?)?)?`
    ),
    m("XRANGE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAIN]}$`),
    m("XRANGELOOSE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAINLOOSE]}$`),
    m(
      "COERCEPLAIN",
      `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`
    ),
    m("COERCE", `${c[l.COERCEPLAIN]}(?:$|[^\\d])`),
    m(
      "COERCEFULL",
      c[l.COERCEPLAIN] + `(?:${c[l.PRERELEASE]})?(?:${c[l.BUILD]})?(?:$|[^\\d])`
    ),
    m("COERCERTL", c[l.COERCE], !0),
    m("COERCERTLFULL", c[l.COERCEFULL], !0),
    m("LONETILDE", "(?:~>?)"),
    m("TILDETRIM", `(\\s*)${c[l.LONETILDE]}\\s+`, !0),
    (t.tildeTrimReplace = "$1~"),
    m("TILDE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAIN]}$`),
    m("TILDELOOSE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAINLOOSE]}$`),
    m("LONECARET", "(?:\\^)"),
    m("CARETTRIM", `(\\s*)${c[l.LONECARET]}\\s+`, !0),
    (t.caretTrimReplace = "$1^"),
    m("CARET", `^${c[l.LONECARET]}${c[l.XRANGEPLAIN]}$`),
    m("CARETLOOSE", `^${c[l.LONECARET]}${c[l.XRANGEPLAINLOOSE]}$`),
    m("COMPARATORLOOSE", `^${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]})$|^$`),
    m("COMPARATOR", `^${c[l.GTLT]}\\s*(${c[l.FULLPLAIN]})$|^$`),
    m(
      "COMPARATORTRIM",
      `(\\s*)${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]}|${c[l.XRANGEPLAIN]})`,
      !0
    ),
    (t.comparatorTrimReplace = "$1$2$3"),
    m(
      "HYPHENRANGE",
      `^\\s*(${c[l.XRANGEPLAIN]})\\s+-\\s+(${c[l.XRANGEPLAIN]})\\s*$`
    ),
    m(
      "HYPHENRANGELOOSE",
      `^\\s*(${c[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[l.XRANGEPLAINLOOSE]})\\s*$`
    ),
    m("STAR", "(<|>)?=?\\s*\\*"),
    m("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
    m("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Ao, Ao.exports);
var hn = Ao.exports;
const e_ = Object.freeze({ loose: !0 }),
  t_ = Object.freeze({}),
  r_ = (e) => (e ? (typeof e != "object" ? e_ : e) : t_);
var sa = r_;
const Tc = /^[0-9]+$/,
  hd = (e, t) => {
    const r = Tc.test(e),
      n = Tc.test(t);
    return (
      r && n && ((e = +e), (t = +t)),
      e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
    );
  },
  n_ = (e, t) => hd(t, e);
var fd = { compareIdentifiers: hd, rcompareIdentifiers: n_ };
const kn = Is,
  { MAX_LENGTH: Nc, MAX_SAFE_INTEGER: In } = ks,
  { safeRe: Mc, t: Lc } = hn,
  s_ = sa,
  { compareIdentifiers: Qt } = fd;
let i_ = class Ke {
  constructor(t, r) {
    if (((r = s_(r)), t instanceof Ke)) {
      if (
        t.loose === !!r.loose &&
        t.includePrerelease === !!r.includePrerelease
      )
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError(
        `Invalid version. Must be a string. Got type "${typeof t}".`
      );
    if (t.length > Nc)
      throw new TypeError(`version is longer than ${Nc} characters`);
    kn("SemVer", t, r),
      (this.options = r),
      (this.loose = !!r.loose),
      (this.includePrerelease = !!r.includePrerelease);
    const n = t.trim().match(r.loose ? Mc[Lc.LOOSE] : Mc[Lc.FULL]);
    if (!n) throw new TypeError(`Invalid Version: ${t}`);
    if (
      ((this.raw = t),
      (this.major = +n[1]),
      (this.minor = +n[2]),
      (this.patch = +n[3]),
      this.major > In || this.major < 0)
    )
      throw new TypeError("Invalid major version");
    if (this.minor > In || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > In || this.patch < 0)
      throw new TypeError("Invalid patch version");
    n[4]
      ? (this.prerelease = n[4].split(".").map((s) => {
          if (/^[0-9]+$/.test(s)) {
            const i = +s;
            if (i >= 0 && i < In) return i;
          }
          return s;
        }))
      : (this.prerelease = []),
      (this.build = n[5] ? n[5].split(".") : []),
      this.format();
  }
  format() {
    return (
      (this.version = `${this.major}.${this.minor}.${this.patch}`),
      this.prerelease.length &&
        (this.version += `-${this.prerelease.join(".")}`),
      this.version
    );
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if (
      (kn("SemVer.compare", this.version, this.options, t), !(t instanceof Ke))
    ) {
      if (typeof t == "string" && t === this.version) return 0;
      t = new Ke(t, this.options);
    }
    return t.version === this.version
      ? 0
      : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return (
      t instanceof Ke || (t = new Ke(t, this.options)),
      Qt(this.major, t.major) ||
        Qt(this.minor, t.minor) ||
        Qt(this.patch, t.patch)
    );
  }
  comparePre(t) {
    if (
      (t instanceof Ke || (t = new Ke(t, this.options)),
      this.prerelease.length && !t.prerelease.length)
    )
      return -1;
    if (!this.prerelease.length && t.prerelease.length) return 1;
    if (!this.prerelease.length && !t.prerelease.length) return 0;
    let r = 0;
    do {
      const n = this.prerelease[r],
        s = t.prerelease[r];
      if ((kn("prerelease compare", r, n, s), n === void 0 && s === void 0))
        return 0;
      if (s === void 0) return 1;
      if (n === void 0) return -1;
      if (n === s) continue;
      return Qt(n, s);
    } while (++r);
  }
  compareBuild(t) {
    t instanceof Ke || (t = new Ke(t, this.options));
    let r = 0;
    do {
      const n = this.build[r],
        s = t.build[r];
      if ((kn("prerelease compare", r, n, s), n === void 0 && s === void 0))
        return 0;
      if (s === void 0) return 1;
      if (n === void 0) return -1;
      if (n === s) continue;
      return Qt(n, s);
    } while (++r);
  }
  inc(t, r, n) {
    switch (t) {
      case "premajor":
        (this.prerelease.length = 0),
          (this.patch = 0),
          (this.minor = 0),
          this.major++,
          this.inc("pre", r, n);
        break;
      case "preminor":
        (this.prerelease.length = 0),
          (this.patch = 0),
          this.minor++,
          this.inc("pre", r, n);
        break;
      case "prepatch":
        (this.prerelease.length = 0),
          this.inc("patch", r, n),
          this.inc("pre", r, n);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r, n),
          this.inc("pre", r, n);
        break;
      case "major":
        (this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0) &&
          this.major++,
          (this.minor = 0),
          (this.patch = 0),
          (this.prerelease = []);
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++,
          (this.patch = 0),
          (this.prerelease = []);
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, (this.prerelease = []);
        break;
      case "pre": {
        const s = Number(n) ? 1 : 0;
        if (!r && n === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0) this.prerelease = [s];
        else {
          let i = this.prerelease.length;
          for (; --i >= 0; )
            typeof this.prerelease[i] == "number" &&
              (this.prerelease[i]++, (i = -2));
          if (i === -1) {
            if (r === this.prerelease.join(".") && n === !1)
              throw new Error(
                "invalid increment argument: identifier already exists"
              );
            this.prerelease.push(s);
          }
        }
        if (r) {
          let i = [r, s];
          n === !1 && (i = [r]),
            Qt(this.prerelease[0], r) === 0
              ? isNaN(this.prerelease[1]) && (this.prerelease = i)
              : (this.prerelease = i);
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${t}`);
    }
    return (
      (this.raw = this.format()),
      this.build.length && (this.raw += `+${this.build.join(".")}`),
      this
    );
  }
};
var Ae = i_;
const Oc = Ae,
  o_ = (e, t, r = !1) => {
    if (e instanceof Oc) return e;
    try {
      return new Oc(e, t);
    } catch (n) {
      if (!r) return null;
      throw n;
    }
  };
var Rr = o_;
const a_ = Rr,
  c_ = (e, t) => {
    const r = a_(e, t);
    return r ? r.version : null;
  };
var l_ = c_;
const u_ = Rr,
  d_ = (e, t) => {
    const r = u_(e.trim().replace(/^[=v]+/, ""), t);
    return r ? r.version : null;
  };
var h_ = d_;
const Pc = Ae,
  f_ = (e, t, r, n, s) => {
    typeof r == "string" && ((s = n), (n = r), (r = void 0));
    try {
      return new Pc(e instanceof Pc ? e.version : e, r).inc(t, n, s).version;
    } catch {
      return null;
    }
  };
var p_ = f_;
const $c = Rr,
  g_ = (e, t) => {
    const r = $c(e, null, !0),
      n = $c(t, null, !0),
      s = r.compare(n);
    if (s === 0) return null;
    const i = s > 0,
      o = i ? r : n,
      a = i ? n : r,
      c = !!o.prerelease.length;
    if (!!a.prerelease.length && !c)
      return !a.patch && !a.minor
        ? "major"
        : o.patch
        ? "patch"
        : o.minor
        ? "minor"
        : "major";
    const d = c ? "pre" : "";
    return r.major !== n.major
      ? d + "major"
      : r.minor !== n.minor
      ? d + "minor"
      : r.patch !== n.patch
      ? d + "patch"
      : "prerelease";
  };
var __ = g_;
const m_ = Ae,
  b_ = (e, t) => new m_(e, t).major;
var y_ = b_;
const v_ = Ae,
  w_ = (e, t) => new v_(e, t).minor;
var E_ = w_;
const S_ = Ae,
  R_ = (e, t) => new S_(e, t).patch;
var C_ = R_;
const k_ = Rr,
  I_ = (e, t) => {
    const r = k_(e, t);
    return r && r.prerelease.length ? r.prerelease : null;
  };
var A_ = I_;
const Bc = Ae,
  x_ = (e, t, r) => new Bc(e, r).compare(new Bc(t, r));
var ze = x_;
const T_ = ze,
  N_ = (e, t, r) => T_(t, e, r);
var M_ = N_;
const L_ = ze,
  O_ = (e, t) => L_(e, t, !0);
var P_ = O_;
const Dc = Ae,
  $_ = (e, t, r) => {
    const n = new Dc(e, r),
      s = new Dc(t, r);
    return n.compare(s) || n.compareBuild(s);
  };
var ia = $_;
const B_ = ia,
  D_ = (e, t) => e.sort((r, n) => B_(r, n, t));
var F_ = D_;
const j_ = ia,
  H_ = (e, t) => e.sort((r, n) => j_(n, r, t));
var U_ = H_;
const W_ = ze,
  V_ = (e, t, r) => W_(e, t, r) > 0;
var As = V_;
const z_ = ze,
  q_ = (e, t, r) => z_(e, t, r) < 0;
var oa = q_;
const G_ = ze,
  J_ = (e, t, r) => G_(e, t, r) === 0;
var pd = J_;
const Z_ = ze,
  K_ = (e, t, r) => Z_(e, t, r) !== 0;
var gd = K_;
const Q_ = ze,
  Y_ = (e, t, r) => Q_(e, t, r) >= 0;
var aa = Y_;
const X_ = ze,
  em = (e, t, r) => X_(e, t, r) <= 0;
var ca = em;
const tm = pd,
  rm = gd,
  nm = As,
  sm = aa,
  im = oa,
  om = ca,
  am = (e, t, r, n) => {
    switch (t) {
      case "===":
        return (
          typeof e == "object" && (e = e.version),
          typeof r == "object" && (r = r.version),
          e === r
        );
      case "!==":
        return (
          typeof e == "object" && (e = e.version),
          typeof r == "object" && (r = r.version),
          e !== r
        );
      case "":
      case "=":
      case "==":
        return tm(e, r, n);
      case "!=":
        return rm(e, r, n);
      case ">":
        return nm(e, r, n);
      case ">=":
        return sm(e, r, n);
      case "<":
        return im(e, r, n);
      case "<=":
        return om(e, r, n);
      default:
        throw new TypeError(`Invalid operator: ${t}`);
    }
  };
var _d = am;
const cm = Ae,
  lm = Rr,
  { safeRe: An, t: xn } = hn,
  um = (e, t) => {
    if (e instanceof cm) return e;
    if ((typeof e == "number" && (e = String(e)), typeof e != "string"))
      return null;
    t = t || {};
    let r = null;
    if (!t.rtl)
      r = e.match(t.includePrerelease ? An[xn.COERCEFULL] : An[xn.COERCE]);
    else {
      const c = t.includePrerelease ? An[xn.COERCERTLFULL] : An[xn.COERCERTL];
      let l;
      for (; (l = c.exec(e)) && (!r || r.index + r[0].length !== e.length); )
        (!r || l.index + l[0].length !== r.index + r[0].length) && (r = l),
          (c.lastIndex = l.index + l[1].length + l[2].length);
      c.lastIndex = -1;
    }
    if (r === null) return null;
    const n = r[2],
      s = r[3] || "0",
      i = r[4] || "0",
      o = t.includePrerelease && r[5] ? `-${r[5]}` : "",
      a = t.includePrerelease && r[6] ? `+${r[6]}` : "";
    return lm(`${n}.${s}.${i}${o}${a}`, t);
  };
var dm = um,
  no,
  Fc;
function hm() {
  return (
    Fc ||
      ((Fc = 1),
      (no = function (e) {
        e.prototype[Symbol.iterator] = function* () {
          for (let t = this.head; t; t = t.next) yield t.value;
        };
      })),
    no
  );
}
var fm = te;
te.Node = Pt;
te.create = te;
function te(e) {
  var t = this;
  if (
    (t instanceof te || (t = new te()),
    (t.tail = null),
    (t.head = null),
    (t.length = 0),
    e && typeof e.forEach == "function")
  )
    e.forEach(function (s) {
      t.push(s);
    });
  else if (arguments.length > 0)
    for (var r = 0, n = arguments.length; r < n; r++) t.push(arguments[r]);
  return t;
}
te.prototype.removeNode = function (e) {
  if (e.list !== this)
    throw new Error("removing node which does not belong to this list");
  var t = e.next,
    r = e.prev;
  return (
    t && (t.prev = r),
    r && (r.next = t),
    e === this.head && (this.head = t),
    e === this.tail && (this.tail = r),
    e.list.length--,
    (e.next = null),
    (e.prev = null),
    (e.list = null),
    t
  );
};
te.prototype.unshiftNode = function (e) {
  if (e !== this.head) {
    e.list && e.list.removeNode(e);
    var t = this.head;
    (e.list = this),
      (e.next = t),
      t && (t.prev = e),
      (this.head = e),
      this.tail || (this.tail = e),
      this.length++;
  }
};
te.prototype.pushNode = function (e) {
  if (e !== this.tail) {
    e.list && e.list.removeNode(e);
    var t = this.tail;
    (e.list = this),
      (e.prev = t),
      t && (t.next = e),
      (this.tail = e),
      this.head || (this.head = e),
      this.length++;
  }
};
te.prototype.push = function () {
  for (var e = 0, t = arguments.length; e < t; e++) gm(this, arguments[e]);
  return this.length;
};
te.prototype.unshift = function () {
  for (var e = 0, t = arguments.length; e < t; e++) _m(this, arguments[e]);
  return this.length;
};
te.prototype.pop = function () {
  if (this.tail) {
    var e = this.tail.value;
    return (
      (this.tail = this.tail.prev),
      this.tail ? (this.tail.next = null) : (this.head = null),
      this.length--,
      e
    );
  }
};
te.prototype.shift = function () {
  if (this.head) {
    var e = this.head.value;
    return (
      (this.head = this.head.next),
      this.head ? (this.head.prev = null) : (this.tail = null),
      this.length--,
      e
    );
  }
};
te.prototype.forEach = function (e, t) {
  t = t || this;
  for (var r = this.head, n = 0; r !== null; n++)
    e.call(t, r.value, n, this), (r = r.next);
};
te.prototype.forEachReverse = function (e, t) {
  t = t || this;
  for (var r = this.tail, n = this.length - 1; r !== null; n--)
    e.call(t, r.value, n, this), (r = r.prev);
};
te.prototype.get = function (e) {
  for (var t = 0, r = this.head; r !== null && t < e; t++) r = r.next;
  if (t === e && r !== null) return r.value;
};
te.prototype.getReverse = function (e) {
  for (var t = 0, r = this.tail; r !== null && t < e; t++) r = r.prev;
  if (t === e && r !== null) return r.value;
};
te.prototype.map = function (e, t) {
  t = t || this;
  for (var r = new te(), n = this.head; n !== null; )
    r.push(e.call(t, n.value, this)), (n = n.next);
  return r;
};
te.prototype.mapReverse = function (e, t) {
  t = t || this;
  for (var r = new te(), n = this.tail; n !== null; )
    r.push(e.call(t, n.value, this)), (n = n.prev);
  return r;
};
te.prototype.reduce = function (e, t) {
  var r,
    n = this.head;
  if (arguments.length > 1) r = t;
  else if (this.head) (n = this.head.next), (r = this.head.value);
  else throw new TypeError("Reduce of empty list with no initial value");
  for (var s = 0; n !== null; s++) (r = e(r, n.value, s)), (n = n.next);
  return r;
};
te.prototype.reduceReverse = function (e, t) {
  var r,
    n = this.tail;
  if (arguments.length > 1) r = t;
  else if (this.tail) (n = this.tail.prev), (r = this.tail.value);
  else throw new TypeError("Reduce of empty list with no initial value");
  for (var s = this.length - 1; n !== null; s--)
    (r = e(r, n.value, s)), (n = n.prev);
  return r;
};
te.prototype.toArray = function () {
  for (var e = new Array(this.length), t = 0, r = this.head; r !== null; t++)
    (e[t] = r.value), (r = r.next);
  return e;
};
te.prototype.toArrayReverse = function () {
  for (var e = new Array(this.length), t = 0, r = this.tail; r !== null; t++)
    (e[t] = r.value), (r = r.prev);
  return e;
};
te.prototype.slice = function (e, t) {
  (t = t || this.length),
    t < 0 && (t += this.length),
    (e = e || 0),
    e < 0 && (e += this.length);
  var r = new te();
  if (t < e || t < 0) return r;
  e < 0 && (e = 0), t > this.length && (t = this.length);
  for (var n = 0, s = this.head; s !== null && n < e; n++) s = s.next;
  for (; s !== null && n < t; n++, s = s.next) r.push(s.value);
  return r;
};
te.prototype.sliceReverse = function (e, t) {
  (t = t || this.length),
    t < 0 && (t += this.length),
    (e = e || 0),
    e < 0 && (e += this.length);
  var r = new te();
  if (t < e || t < 0) return r;
  e < 0 && (e = 0), t > this.length && (t = this.length);
  for (var n = this.length, s = this.tail; s !== null && n > t; n--) s = s.prev;
  for (; s !== null && n > e; n--, s = s.prev) r.push(s.value);
  return r;
};
te.prototype.splice = function (e, t, ...r) {
  e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
  for (var n = 0, s = this.head; s !== null && n < e; n++) s = s.next;
  for (var i = [], n = 0; s && n < t; n++)
    i.push(s.value), (s = this.removeNode(s));
  s === null && (s = this.tail),
    s !== this.head && s !== this.tail && (s = s.prev);
  for (var n = 0; n < r.length; n++) s = pm(this, s, r[n]);
  return i;
};
te.prototype.reverse = function () {
  for (var e = this.head, t = this.tail, r = e; r !== null; r = r.prev) {
    var n = r.prev;
    (r.prev = r.next), (r.next = n);
  }
  return (this.head = t), (this.tail = e), this;
};
function pm(e, t, r) {
  var n = t === e.head ? new Pt(r, null, t, e) : new Pt(r, t, t.next, e);
  return (
    n.next === null && (e.tail = n),
    n.prev === null && (e.head = n),
    e.length++,
    n
  );
}
function gm(e, t) {
  (e.tail = new Pt(t, e.tail, null, e)),
    e.head || (e.head = e.tail),
    e.length++;
}
function _m(e, t) {
  (e.head = new Pt(t, null, e.head, e)),
    e.tail || (e.tail = e.head),
    e.length++;
}
function Pt(e, t, r, n) {
  if (!(this instanceof Pt)) return new Pt(e, t, r, n);
  (this.list = n),
    (this.value = e),
    t ? ((t.next = this), (this.prev = t)) : (this.prev = null),
    r ? ((r.prev = this), (this.next = r)) : (this.next = null);
}
try {
  hm()(te);
} catch {}
const mm = fm,
  At = Symbol("max"),
  ct = Symbol("length"),
  Yt = Symbol("lengthCalculator"),
  Pr = Symbol("allowStale"),
  Tt = Symbol("maxAge"),
  it = Symbol("dispose"),
  jc = Symbol("noDisposeOnSet"),
  ye = Symbol("lruList"),
  We = Symbol("cache"),
  md = Symbol("updateAgeOnGet"),
  so = () => 1;
class bm {
  constructor(t) {
    if (
      (typeof t == "number" && (t = { max: t }),
      t || (t = {}),
      t.max && (typeof t.max != "number" || t.max < 0))
    )
      throw new TypeError("max must be a non-negative number");
    this[At] = t.max || 1 / 0;
    const r = t.length || so;
    if (
      ((this[Yt] = typeof r != "function" ? so : r),
      (this[Pr] = t.stale || !1),
      t.maxAge && typeof t.maxAge != "number")
    )
      throw new TypeError("maxAge must be a number");
    (this[Tt] = t.maxAge || 0),
      (this[it] = t.dispose),
      (this[jc] = t.noDisposeOnSet || !1),
      (this[md] = t.updateAgeOnGet || !1),
      this.reset();
  }
  set max(t) {
    if (typeof t != "number" || t < 0)
      throw new TypeError("max must be a non-negative number");
    (this[At] = t || 1 / 0), Ar(this);
  }
  get max() {
    return this[At];
  }
  set allowStale(t) {
    this[Pr] = !!t;
  }
  get allowStale() {
    return this[Pr];
  }
  set maxAge(t) {
    if (typeof t != "number")
      throw new TypeError("maxAge must be a non-negative number");
    (this[Tt] = t), Ar(this);
  }
  get maxAge() {
    return this[Tt];
  }
  set lengthCalculator(t) {
    typeof t != "function" && (t = so),
      t !== this[Yt] &&
        ((this[Yt] = t),
        (this[ct] = 0),
        this[ye].forEach((r) => {
          (r.length = this[Yt](r.value, r.key)), (this[ct] += r.length);
        })),
      Ar(this);
  }
  get lengthCalculator() {
    return this[Yt];
  }
  get length() {
    return this[ct];
  }
  get itemCount() {
    return this[ye].length;
  }
  rforEach(t, r) {
    r = r || this;
    for (let n = this[ye].tail; n !== null; ) {
      const s = n.prev;
      Hc(this, t, n, r), (n = s);
    }
  }
  forEach(t, r) {
    r = r || this;
    for (let n = this[ye].head; n !== null; ) {
      const s = n.next;
      Hc(this, t, n, r), (n = s);
    }
  }
  keys() {
    return this[ye].toArray().map((t) => t.key);
  }
  values() {
    return this[ye].toArray().map((t) => t.value);
  }
  reset() {
    this[it] &&
      this[ye] &&
      this[ye].length &&
      this[ye].forEach((t) => this[it](t.key, t.value)),
      (this[We] = new Map()),
      (this[ye] = new mm()),
      (this[ct] = 0);
  }
  dump() {
    return this[ye]
      .map((t) =>
        Fn(this, t) ? !1 : { k: t.key, v: t.value, e: t.now + (t.maxAge || 0) }
      )
      .toArray()
      .filter((t) => t);
  }
  dumpLru() {
    return this[ye];
  }
  set(t, r, n) {
    if (((n = n || this[Tt]), n && typeof n != "number"))
      throw new TypeError("maxAge must be a number");
    const s = n ? Date.now() : 0,
      i = this[Yt](r, t);
    if (this[We].has(t)) {
      if (i > this[At]) return ir(this, this[We].get(t)), !1;
      const c = this[We].get(t).value;
      return (
        this[it] && (this[jc] || this[it](t, c.value)),
        (c.now = s),
        (c.maxAge = n),
        (c.value = r),
        (this[ct] += i - c.length),
        (c.length = i),
        this.get(t),
        Ar(this),
        !0
      );
    }
    const o = new ym(t, r, i, s, n);
    return o.length > this[At]
      ? (this[it] && this[it](t, r), !1)
      : ((this[ct] += o.length),
        this[ye].unshift(o),
        this[We].set(t, this[ye].head),
        Ar(this),
        !0);
  }
  has(t) {
    if (!this[We].has(t)) return !1;
    const r = this[We].get(t).value;
    return !Fn(this, r);
  }
  get(t) {
    return io(this, t, !0);
  }
  peek(t) {
    return io(this, t, !1);
  }
  pop() {
    const t = this[ye].tail;
    return t ? (ir(this, t), t.value) : null;
  }
  del(t) {
    ir(this, this[We].get(t));
  }
  load(t) {
    this.reset();
    const r = Date.now();
    for (let n = t.length - 1; n >= 0; n--) {
      const s = t[n],
        i = s.e || 0;
      if (i === 0) this.set(s.k, s.v);
      else {
        const o = i - r;
        o > 0 && this.set(s.k, s.v, o);
      }
    }
  }
  prune() {
    this[We].forEach((t, r) => io(this, r, !1));
  }
}
const io = (e, t, r) => {
    const n = e[We].get(t);
    if (n) {
      const s = n.value;
      if (Fn(e, s)) {
        if ((ir(e, n), !e[Pr])) return;
      } else r && (e[md] && (n.value.now = Date.now()), e[ye].unshiftNode(n));
      return s.value;
    }
  },
  Fn = (e, t) => {
    if (!t || (!t.maxAge && !e[Tt])) return !1;
    const r = Date.now() - t.now;
    return t.maxAge ? r > t.maxAge : e[Tt] && r > e[Tt];
  },
  Ar = (e) => {
    if (e[ct] > e[At])
      for (let t = e[ye].tail; e[ct] > e[At] && t !== null; ) {
        const r = t.prev;
        ir(e, t), (t = r);
      }
  },
  ir = (e, t) => {
    if (t) {
      const r = t.value;
      e[it] && e[it](r.key, r.value),
        (e[ct] -= r.length),
        e[We].delete(r.key),
        e[ye].removeNode(t);
    }
  };
class ym {
  constructor(t, r, n, s, i) {
    (this.key = t),
      (this.value = r),
      (this.length = n),
      (this.now = s),
      (this.maxAge = i || 0);
  }
}
const Hc = (e, t, r, n) => {
  let s = r.value;
  Fn(e, s) && (ir(e, r), e[Pr] || (s = void 0)),
    s && t.call(n, s.value, s.key, e);
};
var vm = bm,
  oo,
  Uc;
function qe() {
  if (Uc) return oo;
  Uc = 1;
  class e {
    constructor(x, O) {
      if (((O = n(O)), x instanceof e))
        return x.loose === !!O.loose &&
          x.includePrerelease === !!O.includePrerelease
          ? x
          : new e(x.raw, O);
      if (x instanceof s)
        return (this.raw = x.value), (this.set = [[x]]), this.format(), this;
      if (
        ((this.options = O),
        (this.loose = !!O.loose),
        (this.includePrerelease = !!O.includePrerelease),
        (this.raw = x.trim().split(/\s+/).join(" ")),
        (this.set = this.raw
          .split("||")
          .map((D) => this.parseRange(D.trim()))
          .filter((D) => D.length)),
        !this.set.length)
      )
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const D = this.set[0];
        if (
          ((this.set = this.set.filter((B) => !m(B[0]))), this.set.length === 0)
        )
          this.set = [D];
        else if (this.set.length > 1) {
          for (const B of this.set)
            if (B.length === 1 && S(B[0])) {
              this.set = [B];
              break;
            }
        }
      }
      this.format();
    }
    format() {
      return (
        (this.range = this.set
          .map((x) => x.join(" ").trim())
          .join("||")
          .trim()),
        this.range
      );
    }
    toString() {
      return this.range;
    }
    parseRange(x) {
      const D =
          ((this.options.includePrerelease && h) | (this.options.loose && f)) +
          ":" +
          x,
        B = r.get(D);
      if (B) return B;
      const L = this.options.loose,
        H = L ? a[c.HYPHENRANGELOOSE] : a[c.HYPHENRANGE];
      (x = x.replace(H, le(this.options.includePrerelease))),
        i("hyphen replace", x),
        (x = x.replace(a[c.COMPARATORTRIM], l)),
        i("comparator trim", x),
        (x = x.replace(a[c.TILDETRIM], d)),
        i("tilde trim", x),
        (x = x.replace(a[c.CARETTRIM], u)),
        i("caret trim", x);
      let J = x
        .split(" ")
        .map((re) => p(re, this.options))
        .join(" ")
        .split(/\s+/)
        .map((re) => G(re, this.options));
      L &&
        (J = J.filter(
          (re) => (
            i("loose invalid filter", re, this.options),
            !!re.match(a[c.COMPARATORLOOSE])
          )
        )),
        i("range list", J);
      const W = new Map(),
        Q = J.map((re) => new s(re, this.options));
      for (const re of Q) {
        if (m(re)) return [re];
        W.set(re.value, re);
      }
      W.size > 1 && W.has("") && W.delete("");
      const ie = [...W.values()];
      return r.set(D, ie), ie;
    }
    intersects(x, O) {
      if (!(x instanceof e)) throw new TypeError("a Range is required");
      return this.set.some(
        (D) =>
          y(D, O) &&
          x.set.some(
            (B) => y(B, O) && D.every((L) => B.every((H) => L.intersects(H, O)))
          )
      );
    }
    test(x) {
      if (!x) return !1;
      if (typeof x == "string")
        try {
          x = new o(x, this.options);
        } catch {
          return !1;
        }
      for (let O = 0; O < this.set.length; O++)
        if (se(this.set[O], x, this.options)) return !0;
      return !1;
    }
  }
  oo = e;
  const t = vm,
    r = new t({ max: 1e3 }),
    n = sa,
    s = xs(),
    i = Is,
    o = Ae,
    {
      safeRe: a,
      t: c,
      comparatorTrimReplace: l,
      tildeTrimReplace: d,
      caretTrimReplace: u,
    } = hn,
    { FLAG_INCLUDE_PRERELEASE: h, FLAG_LOOSE: f } = ks,
    m = (T) => T.value === "<0.0.0-0",
    S = (T) => T.value === "",
    y = (T, x) => {
      let O = !0;
      const D = T.slice();
      let B = D.pop();
      for (; O && D.length; )
        (O = D.every((L) => B.intersects(L, x))), (B = D.pop());
      return O;
    },
    p = (T, x) => (
      i("comp", T, x),
      (T = R(T, x)),
      i("caret", T),
      (T = v(T, x)),
      i("tildes", T),
      (T = j(T, x)),
      i("xrange", T),
      (T = N(T, x)),
      i("stars", T),
      T
    ),
    b = (T) => !T || T.toLowerCase() === "x" || T === "*",
    v = (T, x) =>
      T.trim()
        .split(/\s+/)
        .map((O) => C(O, x))
        .join(" "),
    C = (T, x) => {
      const O = x.loose ? a[c.TILDELOOSE] : a[c.TILDE];
      return T.replace(O, (D, B, L, H, J) => {
        i("tilde", T, D, B, L, H, J);
        let W;
        return (
          b(B)
            ? (W = "")
            : b(L)
            ? (W = `>=${B}.0.0 <${+B + 1}.0.0-0`)
            : b(H)
            ? (W = `>=${B}.${L}.0 <${B}.${+L + 1}.0-0`)
            : J
            ? (i("replaceTilde pr", J),
              (W = `>=${B}.${L}.${H}-${J} <${B}.${+L + 1}.0-0`))
            : (W = `>=${B}.${L}.${H} <${B}.${+L + 1}.0-0`),
          i("tilde return", W),
          W
        );
      });
    },
    R = (T, x) =>
      T.trim()
        .split(/\s+/)
        .map((O) => I(O, x))
        .join(" "),
    I = (T, x) => {
      i("caret", T, x);
      const O = x.loose ? a[c.CARETLOOSE] : a[c.CARET],
        D = x.includePrerelease ? "-0" : "";
      return T.replace(O, (B, L, H, J, W) => {
        i("caret", T, B, L, H, J, W);
        let Q;
        return (
          b(L)
            ? (Q = "")
            : b(H)
            ? (Q = `>=${L}.0.0${D} <${+L + 1}.0.0-0`)
            : b(J)
            ? L === "0"
              ? (Q = `>=${L}.${H}.0${D} <${L}.${+H + 1}.0-0`)
              : (Q = `>=${L}.${H}.0${D} <${+L + 1}.0.0-0`)
            : W
            ? (i("replaceCaret pr", W),
              L === "0"
                ? H === "0"
                  ? (Q = `>=${L}.${H}.${J}-${W} <${L}.${H}.${+J + 1}-0`)
                  : (Q = `>=${L}.${H}.${J}-${W} <${L}.${+H + 1}.0-0`)
                : (Q = `>=${L}.${H}.${J}-${W} <${+L + 1}.0.0-0`))
            : (i("no pr"),
              L === "0"
                ? H === "0"
                  ? (Q = `>=${L}.${H}.${J}${D} <${L}.${H}.${+J + 1}-0`)
                  : (Q = `>=${L}.${H}.${J}${D} <${L}.${+H + 1}.0-0`)
                : (Q = `>=${L}.${H}.${J} <${+L + 1}.0.0-0`)),
          i("caret return", Q),
          Q
        );
      });
    },
    j = (T, x) => (
      i("replaceXRanges", T, x),
      T.split(/\s+/)
        .map((O) => $(O, x))
        .join(" ")
    ),
    $ = (T, x) => {
      T = T.trim();
      const O = x.loose ? a[c.XRANGELOOSE] : a[c.XRANGE];
      return T.replace(O, (D, B, L, H, J, W) => {
        i("xRange", T, D, B, L, H, J, W);
        const Q = b(L),
          ie = Q || b(H),
          re = ie || b(J),
          Ce = re;
        return (
          B === "=" && Ce && (B = ""),
          (W = x.includePrerelease ? "-0" : ""),
          Q
            ? B === ">" || B === "<"
              ? (D = "<0.0.0-0")
              : (D = "*")
            : B && Ce
            ? (ie && (H = 0),
              (J = 0),
              B === ">"
                ? ((B = ">="),
                  ie
                    ? ((L = +L + 1), (H = 0), (J = 0))
                    : ((H = +H + 1), (J = 0)))
                : B === "<=" && ((B = "<"), ie ? (L = +L + 1) : (H = +H + 1)),
              B === "<" && (W = "-0"),
              (D = `${B + L}.${H}.${J}${W}`))
            : ie
            ? (D = `>=${L}.0.0${W} <${+L + 1}.0.0-0`)
            : re && (D = `>=${L}.${H}.0${W} <${L}.${+H + 1}.0-0`),
          i("xRange return", D),
          D
        );
      });
    },
    N = (T, x) => (i("replaceStars", T, x), T.trim().replace(a[c.STAR], "")),
    G = (T, x) => (
      i("replaceGTE0", T, x),
      T.trim().replace(a[x.includePrerelease ? c.GTE0PRE : c.GTE0], "")
    ),
    le = (T) => (x, O, D, B, L, H, J, W, Q, ie, re, Ce, w) => (
      b(D)
        ? (O = "")
        : b(B)
        ? (O = `>=${D}.0.0${T ? "-0" : ""}`)
        : b(L)
        ? (O = `>=${D}.${B}.0${T ? "-0" : ""}`)
        : H
        ? (O = `>=${O}`)
        : (O = `>=${O}${T ? "-0" : ""}`),
      b(Q)
        ? (W = "")
        : b(ie)
        ? (W = `<${+Q + 1}.0.0-0`)
        : b(re)
        ? (W = `<${Q}.${+ie + 1}.0-0`)
        : Ce
        ? (W = `<=${Q}.${ie}.${re}-${Ce}`)
        : T
        ? (W = `<${Q}.${ie}.${+re + 1}-0`)
        : (W = `<=${W}`),
      `${O} ${W}`.trim()
    ),
    se = (T, x, O) => {
      for (let D = 0; D < T.length; D++) if (!T[D].test(x)) return !1;
      if (x.prerelease.length && !O.includePrerelease) {
        for (let D = 0; D < T.length; D++)
          if (
            (i(T[D].semver),
            T[D].semver !== s.ANY && T[D].semver.prerelease.length > 0)
          ) {
            const B = T[D].semver;
            if (
              B.major === x.major &&
              B.minor === x.minor &&
              B.patch === x.patch
            )
              return !0;
          }
        return !1;
      }
      return !0;
    };
  return oo;
}
var ao, Wc;
function xs() {
  if (Wc) return ao;
  Wc = 1;
  const e = Symbol("SemVer ANY");
  class t {
    static get ANY() {
      return e;
    }
    constructor(d, u) {
      if (((u = r(u)), d instanceof t)) {
        if (d.loose === !!u.loose) return d;
        d = d.value;
      }
      (d = d.trim().split(/\s+/).join(" ")),
        o("comparator", d, u),
        (this.options = u),
        (this.loose = !!u.loose),
        this.parse(d),
        this.semver === e
          ? (this.value = "")
          : (this.value = this.operator + this.semver.version),
        o("comp", this);
    }
    parse(d) {
      const u = this.options.loose ? n[s.COMPARATORLOOSE] : n[s.COMPARATOR],
        h = d.match(u);
      if (!h) throw new TypeError(`Invalid comparator: ${d}`);
      (this.operator = h[1] !== void 0 ? h[1] : ""),
        this.operator === "=" && (this.operator = ""),
        h[2]
          ? (this.semver = new a(h[2], this.options.loose))
          : (this.semver = e);
    }
    toString() {
      return this.value;
    }
    test(d) {
      if (
        (o("Comparator.test", d, this.options.loose),
        this.semver === e || d === e)
      )
        return !0;
      if (typeof d == "string")
        try {
          d = new a(d, this.options);
        } catch {
          return !1;
        }
      return i(d, this.operator, this.semver, this.options);
    }
    intersects(d, u) {
      if (!(d instanceof t)) throw new TypeError("a Comparator is required");
      return this.operator === ""
        ? this.value === ""
          ? !0
          : new c(d.value, u).test(this.value)
        : d.operator === ""
        ? d.value === ""
          ? !0
          : new c(this.value, u).test(d.semver)
        : ((u = r(u)),
          (u.includePrerelease &&
            (this.value === "<0.0.0-0" || d.value === "<0.0.0-0")) ||
          (!u.includePrerelease &&
            (this.value.startsWith("<0.0.0") || d.value.startsWith("<0.0.0")))
            ? !1
            : !!(
                (this.operator.startsWith(">") && d.operator.startsWith(">")) ||
                (this.operator.startsWith("<") && d.operator.startsWith("<")) ||
                (this.semver.version === d.semver.version &&
                  this.operator.includes("=") &&
                  d.operator.includes("=")) ||
                (i(this.semver, "<", d.semver, u) &&
                  this.operator.startsWith(">") &&
                  d.operator.startsWith("<")) ||
                (i(this.semver, ">", d.semver, u) &&
                  this.operator.startsWith("<") &&
                  d.operator.startsWith(">"))
              ));
    }
  }
  ao = t;
  const r = sa,
    { safeRe: n, t: s } = hn,
    i = _d,
    o = Is,
    a = Ae,
    c = qe();
  return ao;
}
const wm = qe(),
  Em = (e, t, r) => {
    try {
      t = new wm(t, r);
    } catch {
      return !1;
    }
    return t.test(e);
  };
var Ts = Em;
const Sm = qe(),
  Rm = (e, t) =>
    new Sm(e, t).set.map((r) =>
      r
        .map((n) => n.value)
        .join(" ")
        .trim()
        .split(" ")
    );
var Cm = Rm;
const km = Ae,
  Im = qe(),
  Am = (e, t, r) => {
    let n = null,
      s = null,
      i = null;
    try {
      i = new Im(t, r);
    } catch {
      return null;
    }
    return (
      e.forEach((o) => {
        i.test(o) &&
          (!n || s.compare(o) === -1) &&
          ((n = o), (s = new km(n, r)));
      }),
      n
    );
  };
var xm = Am;
const Tm = Ae,
  Nm = qe(),
  Mm = (e, t, r) => {
    let n = null,
      s = null,
      i = null;
    try {
      i = new Nm(t, r);
    } catch {
      return null;
    }
    return (
      e.forEach((o) => {
        i.test(o) &&
          (!n || s.compare(o) === 1) &&
          ((n = o), (s = new Tm(n, r)));
      }),
      n
    );
  };
var Lm = Mm;
const co = Ae,
  Om = qe(),
  Vc = As,
  Pm = (e, t) => {
    e = new Om(e, t);
    let r = new co("0.0.0");
    if (e.test(r) || ((r = new co("0.0.0-0")), e.test(r))) return r;
    r = null;
    for (let n = 0; n < e.set.length; ++n) {
      const s = e.set[n];
      let i = null;
      s.forEach((o) => {
        const a = new co(o.semver.version);
        switch (o.operator) {
          case ">":
            a.prerelease.length === 0 ? a.patch++ : a.prerelease.push(0),
              (a.raw = a.format());
          case "":
          case ">=":
            (!i || Vc(a, i)) && (i = a);
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error(`Unexpected operation: ${o.operator}`);
        }
      }),
        i && (!r || Vc(r, i)) && (r = i);
    }
    return r && e.test(r) ? r : null;
  };
var $m = Pm;
const Bm = qe(),
  Dm = (e, t) => {
    try {
      return new Bm(e, t).range || "*";
    } catch {
      return null;
    }
  };
var Fm = Dm;
const jm = Ae,
  bd = xs(),
  { ANY: Hm } = bd,
  Um = qe(),
  Wm = Ts,
  zc = As,
  qc = oa,
  Vm = ca,
  zm = aa,
  qm = (e, t, r, n) => {
    (e = new jm(e, n)), (t = new Um(t, n));
    let s, i, o, a, c;
    switch (r) {
      case ">":
        (s = zc), (i = Vm), (o = qc), (a = ">"), (c = ">=");
        break;
      case "<":
        (s = qc), (i = zm), (o = zc), (a = "<"), (c = "<=");
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (Wm(e, t, n)) return !1;
    for (let l = 0; l < t.set.length; ++l) {
      const d = t.set[l];
      let u = null,
        h = null;
      if (
        (d.forEach((f) => {
          f.semver === Hm && (f = new bd(">=0.0.0")),
            (u = u || f),
            (h = h || f),
            s(f.semver, u.semver, n)
              ? (u = f)
              : o(f.semver, h.semver, n) && (h = f);
        }),
        u.operator === a ||
          u.operator === c ||
          ((!h.operator || h.operator === a) && i(e, h.semver)))
      )
        return !1;
      if (h.operator === c && o(e, h.semver)) return !1;
    }
    return !0;
  };
var la = qm;
const Gm = la,
  Jm = (e, t, r) => Gm(e, t, ">", r);
var Zm = Jm;
const Km = la,
  Qm = (e, t, r) => Km(e, t, "<", r);
var Ym = Qm;
const Gc = qe(),
  Xm = (e, t, r) => (
    (e = new Gc(e, r)), (t = new Gc(t, r)), e.intersects(t, r)
  );
var eb = Xm;
const tb = Ts,
  rb = ze;
var nb = (e, t, r) => {
  const n = [];
  let s = null,
    i = null;
  const o = e.sort((d, u) => rb(d, u, r));
  for (const d of o)
    tb(d, t, r)
      ? ((i = d), s || (s = d))
      : (i && n.push([s, i]), (i = null), (s = null));
  s && n.push([s, null]);
  const a = [];
  for (const [d, u] of n)
    d === u
      ? a.push(d)
      : !u && d === o[0]
      ? a.push("*")
      : u
      ? d === o[0]
        ? a.push(`<=${u}`)
        : a.push(`${d} - ${u}`)
      : a.push(`>=${d}`);
  const c = a.join(" || "),
    l = typeof t.raw == "string" ? t.raw : String(t);
  return c.length < l.length ? c : t;
};
const Jc = qe(),
  ua = xs(),
  { ANY: lo } = ua,
  xr = Ts,
  da = ze,
  sb = (e, t, r = {}) => {
    if (e === t) return !0;
    (e = new Jc(e, r)), (t = new Jc(t, r));
    let n = !1;
    e: for (const s of e.set) {
      for (const i of t.set) {
        const o = ob(s, i, r);
        if (((n = n || o !== null), o)) continue e;
      }
      if (n) return !1;
    }
    return !0;
  },
  ib = [new ua(">=0.0.0-0")],
  Zc = [new ua(">=0.0.0")],
  ob = (e, t, r) => {
    if (e === t) return !0;
    if (e.length === 1 && e[0].semver === lo) {
      if (t.length === 1 && t[0].semver === lo) return !0;
      r.includePrerelease ? (e = ib) : (e = Zc);
    }
    if (t.length === 1 && t[0].semver === lo) {
      if (r.includePrerelease) return !0;
      t = Zc;
    }
    const n = new Set();
    let s, i;
    for (const f of e)
      f.operator === ">" || f.operator === ">="
        ? (s = Kc(s, f, r))
        : f.operator === "<" || f.operator === "<="
        ? (i = Qc(i, f, r))
        : n.add(f.semver);
    if (n.size > 1) return null;
    let o;
    if (s && i) {
      if (((o = da(s.semver, i.semver, r)), o > 0)) return null;
      if (o === 0 && (s.operator !== ">=" || i.operator !== "<=")) return null;
    }
    for (const f of n) {
      if ((s && !xr(f, String(s), r)) || (i && !xr(f, String(i), r)))
        return null;
      for (const m of t) if (!xr(f, String(m), r)) return !1;
      return !0;
    }
    let a,
      c,
      l,
      d,
      u =
        i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1,
      h =
        s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : !1;
    u &&
      u.prerelease.length === 1 &&
      i.operator === "<" &&
      u.prerelease[0] === 0 &&
      (u = !1);
    for (const f of t) {
      if (
        ((d = d || f.operator === ">" || f.operator === ">="),
        (l = l || f.operator === "<" || f.operator === "<="),
        s)
      ) {
        if (
          (h &&
            f.semver.prerelease &&
            f.semver.prerelease.length &&
            f.semver.major === h.major &&
            f.semver.minor === h.minor &&
            f.semver.patch === h.patch &&
            (h = !1),
          f.operator === ">" || f.operator === ">=")
        ) {
          if (((a = Kc(s, f, r)), a === f && a !== s)) return !1;
        } else if (s.operator === ">=" && !xr(s.semver, String(f), r))
          return !1;
      }
      if (i) {
        if (
          (u &&
            f.semver.prerelease &&
            f.semver.prerelease.length &&
            f.semver.major === u.major &&
            f.semver.minor === u.minor &&
            f.semver.patch === u.patch &&
            (u = !1),
          f.operator === "<" || f.operator === "<=")
        ) {
          if (((c = Qc(i, f, r)), c === f && c !== i)) return !1;
        } else if (i.operator === "<=" && !xr(i.semver, String(f), r))
          return !1;
      }
      if (!f.operator && (i || s) && o !== 0) return !1;
    }
    return !((s && l && !i && o !== 0) || (i && d && !s && o !== 0) || h || u);
  },
  Kc = (e, t, r) => {
    if (!e) return t;
    const n = da(e.semver, t.semver, r);
    return n > 0
      ? e
      : n < 0 || (t.operator === ">" && e.operator === ">=")
      ? t
      : e;
  },
  Qc = (e, t, r) => {
    if (!e) return t;
    const n = da(e.semver, t.semver, r);
    return n < 0
      ? e
      : n > 0 || (t.operator === "<" && e.operator === "<=")
      ? t
      : e;
  };
var ab = sb;
const uo = hn,
  Yc = ks,
  cb = Ae,
  Xc = fd,
  lb = Rr,
  ub = l_,
  db = h_,
  hb = p_,
  fb = __,
  pb = y_,
  gb = E_,
  _b = C_,
  mb = A_,
  bb = ze,
  yb = M_,
  vb = P_,
  wb = ia,
  Eb = F_,
  Sb = U_,
  Rb = As,
  Cb = oa,
  kb = pd,
  Ib = gd,
  Ab = aa,
  xb = ca,
  Tb = _d,
  Nb = dm,
  Mb = xs(),
  Lb = qe(),
  Ob = Ts,
  Pb = Cm,
  $b = xm,
  Bb = Lm,
  Db = $m,
  Fb = Fm,
  jb = la,
  Hb = Zm,
  Ub = Ym,
  Wb = eb,
  Vb = nb,
  zb = ab;
var qb = {
  parse: lb,
  valid: ub,
  clean: db,
  inc: hb,
  diff: fb,
  major: pb,
  minor: gb,
  patch: _b,
  prerelease: mb,
  compare: bb,
  rcompare: yb,
  compareLoose: vb,
  compareBuild: wb,
  sort: Eb,
  rsort: Sb,
  gt: Rb,
  lt: Cb,
  eq: kb,
  neq: Ib,
  gte: Ab,
  lte: xb,
  cmp: Tb,
  coerce: Nb,
  Comparator: Mb,
  Range: Lb,
  satisfies: Ob,
  toComparators: Pb,
  maxSatisfying: $b,
  minSatisfying: Bb,
  minVersion: Db,
  validRange: Fb,
  outside: jb,
  gtr: Hb,
  ltr: Ub,
  intersects: Wb,
  simplifyRange: Vb,
  subset: zb,
  SemVer: cb,
  re: uo.re,
  src: uo.src,
  tokens: uo.t,
  SEMVER_SPEC_VERSION: Yc.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: Yc.RELEASE_TYPES,
  compareIdentifiers: Xc.compareIdentifiers,
  rcompareIdentifiers: Xc.rcompareIdentifiers,
};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.satisfiesVersionRange =
      e.gtRange =
      e.gtVersion =
      e.assertIsSemVerRange =
      e.assertIsSemVerVersion =
      e.isValidSemVerRange =
      e.isValidSemVerVersion =
      e.VersionRangeStruct =
      e.VersionStruct =
        void 0);
  const t = qb,
    r = Wt,
    n = Se;
  (e.VersionStruct = (0, r.refine)((0, r.string)(), "Version", (u) =>
    (0, t.valid)(u) === null ? `Expected SemVer version, got "${u}"` : !0
  )),
    (e.VersionRangeStruct = (0, r.refine)(
      (0, r.string)(),
      "Version range",
      (u) =>
        (0, t.validRange)(u) === null ? `Expected SemVer range, got "${u}"` : !0
    ));
  function s(u) {
    return (0, r.is)(u, e.VersionStruct);
  }
  e.isValidSemVerVersion = s;
  function i(u) {
    return (0, r.is)(u, e.VersionRangeStruct);
  }
  e.isValidSemVerRange = i;
  function o(u) {
    (0, n.assertStruct)(u, e.VersionStruct);
  }
  e.assertIsSemVerVersion = o;
  function a(u) {
    (0, n.assertStruct)(u, e.VersionRangeStruct);
  }
  e.assertIsSemVerRange = a;
  function c(u, h) {
    return (0, t.gt)(u, h);
  }
  e.gtVersion = c;
  function l(u, h) {
    return (0, t.gtr)(u, h);
  }
  e.gtRange = l;
  function d(u, h) {
    return (0, t.satisfies)(u, h, { includePrerelease: !0 });
  }
  e.satisfiesVersionRange = d;
})(ud);
(function (e) {
  var t =
      (F && F.__createBinding) ||
      (Object.create
        ? function (n, s, i, o) {
            o === void 0 && (o = i);
            var a = Object.getOwnPropertyDescriptor(s, i);
            (!a ||
              ("get" in a ? !s.__esModule : a.writable || a.configurable)) &&
              (a = {
                enumerable: !0,
                get: function () {
                  return s[i];
                },
              }),
              Object.defineProperty(n, o, a);
          }
        : function (n, s, i, o) {
            o === void 0 && (o = i), (n[o] = s[i]);
          }),
    r =
      (F && F.__exportStar) ||
      function (n, s) {
        for (var i in n)
          i !== "default" &&
            !Object.prototype.hasOwnProperty.call(s, i) &&
            t(s, n, i);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    r(Se, e),
    r(un, e),
    r(ee, e),
    r(Rs, e),
    r(tt, e),
    r(fr, e),
    r(nd, e),
    r(dn, e),
    r(sd, e),
    r(id, e),
    r(pr, e),
    r(od, e),
    r(rt, e),
    r(ad, e),
    r(cd, e),
    r(ld, e),
    r(ud, e);
})(Du);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.createModuleLogger = e.projectLogger = void 0);
  const t = Du;
  Object.defineProperty(e, "createModuleLogger", {
    enumerable: !0,
    get: function () {
      return t.createModuleLogger;
    },
  }),
    (e.projectLogger = (0, t.createProjectLogger)("eth-block-tracker"));
})(Bu);
var yd =
  (F && F.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Es, "__esModule", { value: !0 });
Es.PollingBlockTracker = void 0;
const Gb = yd(Jo),
  Jb = yd(h1),
  Zb = an,
  el = Bu,
  tl = (0, el.createModuleLogger)(el.projectLogger, "polling-block-tracker"),
  Kb = (0, Gb.default)(),
  Qb = 1e3;
class Yb extends Zb.BaseBlockTracker {
  constructor(t = {}) {
    var r;
    if (!t.provider)
      throw new Error("PollingBlockTracker - no provider specified.");
    super(
      Object.assign(Object.assign({}, t), {
        blockResetDuration:
          (r = t.blockResetDuration) !== null && r !== void 0
            ? r
            : t.pollingInterval,
      })
    ),
      (this._provider = t.provider),
      (this._pollingInterval = t.pollingInterval || 20 * Qb),
      (this._retryTimeout = t.retryTimeout || this._pollingInterval / 10),
      (this._keepEventLoopActive =
        t.keepEventLoopActive === void 0 ? !0 : t.keepEventLoopActive),
      (this._setSkipCacheFlag = t.setSkipCacheFlag || !1);
  }
  async checkForLatestBlock() {
    return await this._updateLatestBlock(), await this.getLatestBlock();
  }
  async _start() {
    this._synchronize();
  }
  async _end() {}
  async _synchronize() {
    for (var t; this._isRunning; )
      try {
        await this._updateLatestBlock();
        const r = rl(this._pollingInterval, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await r;
      } catch (r) {
        const n =
          new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${(t = r.stack) !== null && t !== void 0 ? t : r}`);
        try {
          this.emit("error", n);
        } catch {
          console.error(n);
        }
        const s = rl(this._retryTimeout, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await s;
      }
  }
  async _updateLatestBlock() {
    const t = await this._fetchLatestBlock();
    this._newPotentialLatest(t);
  }
  async _fetchLatestBlock() {
    const t = {
      jsonrpc: "2.0",
      id: Kb(),
      method: "eth_blockNumber",
      params: [],
    };
    this._setSkipCacheFlag && (t.skipCache = !0), tl("Making request", t);
    const r = await (0, Jb.default)((n) => this._provider.sendAsync(t, n))();
    if ((tl("Got response", r), r.error))
      throw new Error(`PollingBlockTracker - encountered error fetching block:
${r.error.message}`);
    return r.result;
  }
}
Es.PollingBlockTracker = Yb;
function rl(e, t) {
  return new Promise((r) => {
    const n = setTimeout(r, e);
    n.unref && t && n.unref();
  });
}
var Ns = {},
  Xb =
    (F && F.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Ns, "__esModule", { value: !0 });
Ns.SubscribeBlockTracker = void 0;
const ey = Xb(Jo),
  ty = an,
  ry = (0, ey.default)();
class ny extends ty.BaseBlockTracker {
  constructor(t = {}) {
    if (!t.provider)
      throw new Error("SubscribeBlockTracker - no provider specified.");
    super(t), (this._provider = t.provider), (this._subscriptionId = null);
  }
  async checkForLatestBlock() {
    return await this.getLatestBlock();
  }
  async _start() {
    if (this._subscriptionId === void 0 || this._subscriptionId === null)
      try {
        const t = await this._call("eth_blockNumber");
        (this._subscriptionId = await this._call("eth_subscribe", "newHeads")),
          this._provider.on("data", this._handleSubData.bind(this)),
          this._newPotentialLatest(t);
      } catch (t) {
        this.emit("error", t);
      }
  }
  async _end() {
    if (this._subscriptionId !== null && this._subscriptionId !== void 0)
      try {
        await this._call("eth_unsubscribe", this._subscriptionId),
          (this._subscriptionId = null);
      } catch (t) {
        this.emit("error", t);
      }
  }
  _call(t, ...r) {
    return new Promise((n, s) => {
      this._provider.sendAsync(
        { id: ry(), method: t, params: r, jsonrpc: "2.0" },
        (i, o) => {
          i ? s(i) : n(o.result);
        }
      );
    });
  }
  _handleSubData(t, r) {
    var n;
    r.method === "eth_subscription" &&
      ((n = r.params) === null || n === void 0 ? void 0 : n.subscription) ===
        this._subscriptionId &&
      this._newPotentialLatest(r.params.result.number);
  }
}
Ns.SubscribeBlockTracker = ny;
(function (e) {
  var t =
      (F && F.__createBinding) ||
      (Object.create
        ? function (n, s, i, o) {
            o === void 0 && (o = i),
              Object.defineProperty(n, o, {
                enumerable: !0,
                get: function () {
                  return s[i];
                },
              });
          }
        : function (n, s, i, o) {
            o === void 0 && (o = i), (n[o] = s[i]);
          }),
    r =
      (F && F.__exportStar) ||
      function (n, s) {
        for (var i in n)
          i !== "default" &&
            !Object.prototype.hasOwnProperty.call(s, i) &&
            t(s, n, i);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(Es, e), r(Ns, e);
})($u);
var Ms = {};
Object.defineProperty(Ms, "__esModule", { value: !0 });
const sy = Wr;
function nl(e, t, r) {
  try {
    Reflect.apply(e, t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function iy(e) {
  const t = e.length,
    r = new Array(t);
  for (let n = 0; n < t; n += 1) r[n] = e[n];
  return r;
}
let oy = class extends sy.EventEmitter {
  emit(t, ...r) {
    let n = t === "error";
    const s = this._events;
    if (s !== void 0) n = n && s.error === void 0;
    else if (!n) return !1;
    if (n) {
      let o;
      if ((r.length > 0 && ([o] = r), o instanceof Error)) throw o;
      const a = new Error(`Unhandled error.${o ? ` (${o.message})` : ""}`);
      throw ((a.context = o), a);
    }
    const i = s[t];
    if (i === void 0) return !1;
    if (typeof i == "function") nl(i, this, r);
    else {
      const o = i.length,
        a = iy(i);
      for (let c = 0; c < o; c += 1) nl(a[c], this, r);
    }
    return !0;
  }
};
Ms.default = oy;
var ha = {},
  Ls = {},
  fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.getUniqueId = void 0;
const vd = 4294967295;
let ho = Math.floor(Math.random() * vd);
function ay() {
  return (ho = (ho + 1) % vd), ho;
}
fn.getUniqueId = ay;
Object.defineProperty(Ls, "__esModule", { value: !0 });
Ls.createIdRemapMiddleware = void 0;
const cy = fn;
function ly() {
  return (e, t, r, n) => {
    const s = e.id,
      i = cy.getUniqueId();
    (e.id = i),
      (t.id = i),
      r((o) => {
        (e.id = s), (t.id = s), o();
      });
  };
}
Ls.createIdRemapMiddleware = ly;
var Os = {};
Object.defineProperty(Os, "__esModule", { value: !0 });
Os.createAsyncMiddleware = void 0;
function uy(e) {
  return async (t, r, n, s) => {
    let i;
    const o = new Promise((d) => {
      i = d;
    });
    let a = null,
      c = !1;
    const l = async () => {
      (c = !0),
        n((d) => {
          (a = d), i();
        }),
        await o;
    };
    try {
      await e(t, r, l), c ? (await o, a(null)) : s(null);
    } catch (d) {
      a ? a(d) : s(d);
    }
  };
}
Os.createAsyncMiddleware = uy;
var Ps = {};
Object.defineProperty(Ps, "__esModule", { value: !0 });
Ps.createScaffoldMiddleware = void 0;
function dy(e) {
  return (t, r, n, s) => {
    const i = e[t.method];
    return i === void 0
      ? n()
      : typeof i == "function"
      ? i(t, r, n, s)
      : ((r.result = i), s());
  };
}
Ps.createScaffoldMiddleware = dy;
var pn = {},
  fa = {};
Object.defineProperty(fa, "__esModule", { value: !0 });
const hy = Wr;
function sl(e, t, r) {
  try {
    Reflect.apply(e, t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function fy(e) {
  const t = e.length,
    r = new Array(t);
  for (let n = 0; n < t; n += 1) r[n] = e[n];
  return r;
}
let py = class extends hy.EventEmitter {
  emit(t, ...r) {
    let n = t === "error";
    const s = this._events;
    if (s !== void 0) n = n && s.error === void 0;
    else if (!n) return !1;
    if (n) {
      let o;
      if ((r.length > 0 && ([o] = r), o instanceof Error)) throw o;
      const a = new Error(`Unhandled error.${o ? ` (${o.message})` : ""}`);
      throw ((a.context = o), a);
    }
    const i = s[t];
    if (i === void 0) return !1;
    if (typeof i == "function") sl(i, this, r);
    else {
      const o = i.length,
        a = fy(i);
      for (let c = 0; c < o; c += 1) sl(a[c], this, r);
    }
    return !0;
  }
};
fa.default = py;
var wd = {},
  bt = {},
  gy = jr;
jr.default = jr;
jr.stable = Rd;
jr.stableStringify = Rd;
var jn = "[...]",
  Ed = "[Circular]",
  $t = [],
  Nt = [];
function Sd() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER,
  };
}
function jr(e, t, r, n) {
  typeof n > "u" && (n = Sd()), xo(e, "", 0, [], void 0, 0, n);
  var s;
  try {
    Nt.length === 0
      ? (s = JSON.stringify(e, t, r))
      : (s = JSON.stringify(e, Cd(t), r));
  } catch {
    return JSON.stringify(
      "[unable to serialize, circular reference is too complex to analyze]"
    );
  } finally {
    for (; $t.length !== 0; ) {
      var i = $t.pop();
      i.length === 4
        ? Object.defineProperty(i[0], i[1], i[3])
        : (i[0][i[1]] = i[2]);
    }
  }
  return s;
}
function or(e, t, r, n) {
  var s = Object.getOwnPropertyDescriptor(n, r);
  s.get !== void 0
    ? s.configurable
      ? (Object.defineProperty(n, r, { value: e }), $t.push([n, r, t, s]))
      : Nt.push([t, r, e])
    : ((n[r] = e), $t.push([n, r, t]));
}
function xo(e, t, r, n, s, i, o) {
  i += 1;
  var a;
  if (typeof e == "object" && e !== null) {
    for (a = 0; a < n.length; a++)
      if (n[a] === e) {
        or(Ed, e, t, s);
        return;
      }
    if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      or(jn, e, t, s);
      return;
    }
    if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
      or(jn, e, t, s);
      return;
    }
    if ((n.push(e), Array.isArray(e)))
      for (a = 0; a < e.length; a++) xo(e[a], a, a, n, e, i, o);
    else {
      var c = Object.keys(e);
      for (a = 0; a < c.length; a++) {
        var l = c[a];
        xo(e[l], l, a, n, e, i, o);
      }
    }
    n.pop();
  }
}
function _y(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Rd(e, t, r, n) {
  typeof n > "u" && (n = Sd());
  var s = To(e, "", 0, [], void 0, 0, n) || e,
    i;
  try {
    Nt.length === 0
      ? (i = JSON.stringify(s, t, r))
      : (i = JSON.stringify(s, Cd(t), r));
  } catch {
    return JSON.stringify(
      "[unable to serialize, circular reference is too complex to analyze]"
    );
  } finally {
    for (; $t.length !== 0; ) {
      var o = $t.pop();
      o.length === 4
        ? Object.defineProperty(o[0], o[1], o[3])
        : (o[0][o[1]] = o[2]);
    }
  }
  return i;
}
function To(e, t, r, n, s, i, o) {
  i += 1;
  var a;
  if (typeof e == "object" && e !== null) {
    for (a = 0; a < n.length; a++)
      if (n[a] === e) {
        or(Ed, e, t, s);
        return;
      }
    try {
      if (typeof e.toJSON == "function") return;
    } catch {
      return;
    }
    if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      or(jn, e, t, s);
      return;
    }
    if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
      or(jn, e, t, s);
      return;
    }
    if ((n.push(e), Array.isArray(e)))
      for (a = 0; a < e.length; a++) To(e[a], a, a, n, e, i, o);
    else {
      var c = {},
        l = Object.keys(e).sort(_y);
      for (a = 0; a < l.length; a++) {
        var d = l[a];
        To(e[d], d, a, n, e, i, o), (c[d] = e[d]);
      }
      if (typeof s < "u") $t.push([s, t, e]), (s[t] = c);
      else return c;
    }
    n.pop();
  }
}
function Cd(e) {
  return (
    (e =
      typeof e < "u"
        ? e
        : function (t, r) {
            return r;
          }),
    function (t, r) {
      if (Nt.length > 0)
        for (var n = 0; n < Nt.length; n++) {
          var s = Nt[n];
          if (s[1] === t && s[0] === r) {
            (r = s[2]), Nt.splice(n, 1);
            break;
          }
        }
      return e.call(this, t, r);
    }
  );
}
Object.defineProperty(bt, "__esModule", { value: !0 });
bt.EthereumProviderError = bt.EthereumRpcError = void 0;
const my = gy;
class kd extends Error {
  constructor(t, r, n) {
    if (!Number.isInteger(t)) throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), (this.code = t), n !== void 0 && (this.data = n);
  }
  serialize() {
    const t = { code: this.code, message: this.message };
    return (
      this.data !== void 0 && (t.data = this.data),
      this.stack && (t.stack = this.stack),
      t
    );
  }
  toString() {
    return my.default(this.serialize(), vy, 2);
  }
}
bt.EthereumRpcError = kd;
class by extends kd {
  constructor(t, r, n) {
    if (!yy(t))
      throw new Error(
        '"code" must be an integer such that: 1000 <= code <= 4999'
      );
    super(t, r, n);
  }
}
bt.EthereumProviderError = by;
function yy(e) {
  return Number.isInteger(e) && e >= 1e3 && e <= 4999;
}
function vy(e, t) {
  if (t !== "[Circular]") return t;
}
var pa = {},
  yt = {};
Object.defineProperty(yt, "__esModule", { value: !0 });
yt.errorValues = yt.errorCodes = void 0;
yt.errorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603,
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
  },
};
yt.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message:
      "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object.",
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available.",
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s).",
  },
  "-32603": { standard: "JSON RPC 2.0", message: "Internal JSON-RPC error." },
  "-32000": { standard: "EIP-1474", message: "Invalid input." },
  "-32001": { standard: "EIP-1474", message: "Resource not found." },
  "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
  "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
  "-32004": { standard: "EIP-1474", message: "Method not supported." },
  "-32005": { standard: "EIP-1474", message: "Request limit exceeded." },
  4001: { standard: "EIP-1193", message: "User rejected the request." },
  4100: {
    standard: "EIP-1193",
    message:
      "The requested account and/or method has not been authorized by the user.",
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider.",
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains.",
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain.",
  },
};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.serializeError =
      e.isValidCode =
      e.getMessageFromCode =
      e.JSON_RPC_SERVER_ERROR_MESSAGE =
        void 0);
  const t = yt,
    r = bt,
    n = t.errorCodes.rpc.internal,
    s = "Unspecified error message. This is a bug, please report it.",
    i = { code: n, message: o(n) };
  e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function o(h, f = s) {
    if (Number.isInteger(h)) {
      const m = h.toString();
      if (u(t.errorValues, m)) return t.errorValues[m].message;
      if (l(h)) return e.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return f;
  }
  e.getMessageFromCode = o;
  function a(h) {
    if (!Number.isInteger(h)) return !1;
    const f = h.toString();
    return !!(t.errorValues[f] || l(h));
  }
  e.isValidCode = a;
  function c(h, { fallbackError: f = i, shouldIncludeStack: m = !1 } = {}) {
    var S, y;
    if (!f || !Number.isInteger(f.code) || typeof f.message != "string")
      throw new Error(
        "Must provide fallback error with integer number code and string message."
      );
    if (h instanceof r.EthereumRpcError) return h.serialize();
    const p = {};
    if (
      h &&
      typeof h == "object" &&
      !Array.isArray(h) &&
      u(h, "code") &&
      a(h.code)
    ) {
      const v = h;
      (p.code = v.code),
        v.message && typeof v.message == "string"
          ? ((p.message = v.message), u(v, "data") && (p.data = v.data))
          : ((p.message = o(p.code)), (p.data = { originalError: d(h) }));
    } else {
      p.code = f.code;
      const v = (S = h) === null || S === void 0 ? void 0 : S.message;
      (p.message = v && typeof v == "string" ? v : f.message),
        (p.data = { originalError: d(h) });
    }
    const b = (y = h) === null || y === void 0 ? void 0 : y.stack;
    return m && h && b && typeof b == "string" && (p.stack = b), p;
  }
  e.serializeError = c;
  function l(h) {
    return h >= -32099 && h <= -32e3;
  }
  function d(h) {
    return h && typeof h == "object" && !Array.isArray(h)
      ? Object.assign({}, h)
      : h;
  }
  function u(h, f) {
    return Object.prototype.hasOwnProperty.call(h, f);
  }
})(pa);
var $s = {};
Object.defineProperty($s, "__esModule", { value: !0 });
$s.ethErrors = void 0;
const ga = bt,
  Id = pa,
  Re = yt;
$s.ethErrors = {
  rpc: {
    parse: (e) => Pe(Re.errorCodes.rpc.parse, e),
    invalidRequest: (e) => Pe(Re.errorCodes.rpc.invalidRequest, e),
    invalidParams: (e) => Pe(Re.errorCodes.rpc.invalidParams, e),
    methodNotFound: (e) => Pe(Re.errorCodes.rpc.methodNotFound, e),
    internal: (e) => Pe(Re.errorCodes.rpc.internal, e),
    server: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error(
          "Ethereum RPC Server errors must provide single object argument."
        );
      const { code: t } = e;
      if (!Number.isInteger(t) || t > -32005 || t < -32099)
        throw new Error(
          '"code" must be an integer such that: -32099 <= code <= -32005'
        );
      return Pe(t, e);
    },
    invalidInput: (e) => Pe(Re.errorCodes.rpc.invalidInput, e),
    resourceNotFound: (e) => Pe(Re.errorCodes.rpc.resourceNotFound, e),
    resourceUnavailable: (e) => Pe(Re.errorCodes.rpc.resourceUnavailable, e),
    transactionRejected: (e) => Pe(Re.errorCodes.rpc.transactionRejected, e),
    methodNotSupported: (e) => Pe(Re.errorCodes.rpc.methodNotSupported, e),
    limitExceeded: (e) => Pe(Re.errorCodes.rpc.limitExceeded, e),
  },
  provider: {
    userRejectedRequest: (e) =>
      Tr(Re.errorCodes.provider.userRejectedRequest, e),
    unauthorized: (e) => Tr(Re.errorCodes.provider.unauthorized, e),
    unsupportedMethod: (e) => Tr(Re.errorCodes.provider.unsupportedMethod, e),
    disconnected: (e) => Tr(Re.errorCodes.provider.disconnected, e),
    chainDisconnected: (e) => Tr(Re.errorCodes.provider.chainDisconnected, e),
    custom: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error(
          "Ethereum Provider custom errors must provide single object argument."
        );
      const { code: t, message: r, data: n } = e;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new ga.EthereumProviderError(t, r, n);
    },
  },
};
function Pe(e, t) {
  const [r, n] = Ad(t);
  return new ga.EthereumRpcError(e, r || Id.getMessageFromCode(e), n);
}
function Tr(e, t) {
  const [r, n] = Ad(t);
  return new ga.EthereumProviderError(e, r || Id.getMessageFromCode(e), n);
}
function Ad(e) {
  if (e) {
    if (typeof e == "string") return [e];
    if (typeof e == "object" && !Array.isArray(e)) {
      const { message: t, data: r } = e;
      if (t && typeof t != "string")
        throw new Error("Must specify string message.");
      return [t || void 0, r];
    }
  }
  return [];
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.getMessageFromCode =
      e.serializeError =
      e.EthereumProviderError =
      e.EthereumRpcError =
      e.ethErrors =
      e.errorCodes =
        void 0);
  const t = bt;
  Object.defineProperty(e, "EthereumRpcError", {
    enumerable: !0,
    get: function () {
      return t.EthereumRpcError;
    },
  }),
    Object.defineProperty(e, "EthereumProviderError", {
      enumerable: !0,
      get: function () {
        return t.EthereumProviderError;
      },
    });
  const r = pa;
  Object.defineProperty(e, "serializeError", {
    enumerable: !0,
    get: function () {
      return r.serializeError;
    },
  }),
    Object.defineProperty(e, "getMessageFromCode", {
      enumerable: !0,
      get: function () {
        return r.getMessageFromCode;
      },
    });
  const n = $s;
  Object.defineProperty(e, "ethErrors", {
    enumerable: !0,
    get: function () {
      return n.ethErrors;
    },
  });
  const s = yt;
  Object.defineProperty(e, "errorCodes", {
    enumerable: !0,
    get: function () {
      return s.errorCodes;
    },
  });
})(wd);
var wy =
  (F && F.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(pn, "__esModule", { value: !0 });
pn.JsonRpcEngine = void 0;
const Ey = wy(fa),
  $e = wd;
class ot extends Ey.default {
  constructor() {
    super(), (this._middleware = []);
  }
  push(t) {
    this._middleware.push(t);
  }
  handle(t, r) {
    if (r && typeof r != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(t)
      ? r
        ? this._handleBatch(t, r)
        : this._handleBatch(t)
      : r
      ? this._handle(t, r)
      : this._promiseHandle(t);
  }
  asMiddleware() {
    return async (t, r, n, s) => {
      try {
        const [i, o, a] = await ot._runAllMiddleware(t, r, this._middleware);
        return o
          ? (await ot._runReturnHandlers(a), s(i))
          : n(async (c) => {
              try {
                await ot._runReturnHandlers(a);
              } catch (l) {
                return c(l);
              }
              return c();
            });
      } catch (i) {
        return s(i);
      }
    };
  }
  async _handleBatch(t, r) {
    try {
      const n = await Promise.all(t.map(this._promiseHandle.bind(this)));
      return r ? r(null, n) : n;
    } catch (n) {
      if (r) return r(n);
      throw n;
    }
  }
  _promiseHandle(t) {
    return new Promise((r) => {
      this._handle(t, (n, s) => {
        r(s);
      });
    });
  }
  async _handle(t, r) {
    if (!t || Array.isArray(t) || typeof t != "object") {
      const o = new $e.EthereumRpcError(
        $e.errorCodes.rpc.invalidRequest,
        `Requests must be plain objects. Received: ${typeof t}`,
        { request: t }
      );
      return r(o, { id: void 0, jsonrpc: "2.0", error: o });
    }
    if (typeof t.method != "string") {
      const o = new $e.EthereumRpcError(
        $e.errorCodes.rpc.invalidRequest,
        `Must specify a string method. Received: ${typeof t.method}`,
        { request: t }
      );
      return r(o, { id: t.id, jsonrpc: "2.0", error: o });
    }
    const n = Object.assign({}, t),
      s = { id: n.id, jsonrpc: n.jsonrpc };
    let i = null;
    try {
      await this._processRequest(n, s);
    } catch (o) {
      i = o;
    }
    return (
      i && (delete s.result, s.error || (s.error = $e.serializeError(i))),
      r(i, s)
    );
  }
  async _processRequest(t, r) {
    const [n, s, i] = await ot._runAllMiddleware(t, r, this._middleware);
    if ((ot._checkForCompletion(t, r, s), await ot._runReturnHandlers(i), n))
      throw n;
  }
  static async _runAllMiddleware(t, r, n) {
    const s = [];
    let i = null,
      o = !1;
    for (const a of n)
      if ((([i, o] = await ot._runMiddleware(t, r, a, s)), o)) break;
    return [i, o, s.reverse()];
  }
  static _runMiddleware(t, r, n, s) {
    return new Promise((i) => {
      const o = (c) => {
          const l = c || r.error;
          l && (r.error = $e.serializeError(l)), i([l, !0]);
        },
        a = (c) => {
          r.error
            ? o(r.error)
            : (c &&
                (typeof c != "function" &&
                  o(
                    new $e.EthereumRpcError(
                      $e.errorCodes.rpc.internal,
                      `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof c}" for request:
${fo(t)}`,
                      { request: t }
                    )
                  ),
                s.push(c)),
              i([null, !1]));
        };
      try {
        n(t, r, a, o);
      } catch (c) {
        o(c);
      }
    });
  }
  static async _runReturnHandlers(t) {
    for (const r of t)
      await new Promise((n, s) => {
        r((i) => (i ? s(i) : n()));
      });
  }
  static _checkForCompletion(t, r, n) {
    if (!("result" in r) && !("error" in r))
      throw new $e.EthereumRpcError(
        $e.errorCodes.rpc.internal,
        `JsonRpcEngine: Response has no error or result for request:
${fo(t)}`,
        { request: t }
      );
    if (!n)
      throw new $e.EthereumRpcError(
        $e.errorCodes.rpc.internal,
        `JsonRpcEngine: Nothing ended request:
${fo(t)}`,
        { request: t }
      );
  }
}
pn.JsonRpcEngine = ot;
function fo(e) {
  return JSON.stringify(e, null, 2);
}
var Bs = {};
Object.defineProperty(Bs, "__esModule", { value: !0 });
Bs.mergeMiddleware = void 0;
const Sy = pn;
function Ry(e) {
  const t = new Sy.JsonRpcEngine();
  return e.forEach((r) => t.push(r)), t.asMiddleware();
}
Bs.mergeMiddleware = Ry;
(function (e) {
  var t =
      (F && F.__createBinding) ||
      (Object.create
        ? function (n, s, i, o) {
            o === void 0 && (o = i),
              Object.defineProperty(n, o, {
                enumerable: !0,
                get: function () {
                  return s[i];
                },
              });
          }
        : function (n, s, i, o) {
            o === void 0 && (o = i), (n[o] = s[i]);
          }),
    r =
      (F && F.__exportStar) ||
      function (n, s) {
        for (var i in n)
          i !== "default" &&
            !Object.prototype.hasOwnProperty.call(s, i) &&
            t(s, n, i);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    r(Ls, e),
    r(Os, e),
    r(Ps, e),
    r(fn, e),
    r(pn, e),
    r(Bs, e);
})(ha);
var xd = {},
  _a = {},
  No = function (e, t) {
    return (
      (No =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (r[s] = n[s]);
        }),
      No(e, t)
    );
  };
function Td(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  No(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Hn = function () {
  return (
    (Hn =
      Object.assign ||
      function (t) {
        for (var r, n = 1, s = arguments.length; n < s; n++) {
          r = arguments[n];
          for (var i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }),
    Hn.apply(this, arguments)
  );
};
function Nd(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      t.indexOf(n[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[s]) &&
        (r[n[s]] = e[n[s]]);
  return r;
}
function Md(e, t, r, n) {
  var s = arguments.length,
    i =
      s < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, t, r, n);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (o = e[a]) && (i = (s < 3 ? o(i) : s > 3 ? o(t, r, i) : o(t, r)) || i);
  return s > 3 && i && Object.defineProperty(t, r, i), i;
}
function Ld(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function Cy(e, t, r, n, s, i) {
  function o(p) {
    if (p !== void 0 && typeof p != "function")
      throw new TypeError("Function expected");
    return p;
  }
  for (
    var a = n.kind,
      c = a === "getter" ? "get" : a === "setter" ? "set" : "value",
      l = !t && e ? (n.static ? e : e.prototype) : null,
      d = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}),
      u,
      h = !1,
      f = r.length - 1;
    f >= 0;
    f--
  ) {
    var m = {};
    for (var S in n) m[S] = S === "access" ? {} : n[S];
    for (var S in n.access) m.access[S] = n.access[S];
    m.addInitializer = function (p) {
      if (h)
        throw new TypeError(
          "Cannot add initializers after decoration has completed"
        );
      i.push(o(p || null));
    };
    var y = (0, r[f])(a === "accessor" ? { get: d.get, set: d.set } : d[c], m);
    if (a === "accessor") {
      if (y === void 0) continue;
      if (y === null || typeof y != "object")
        throw new TypeError("Object expected");
      (u = o(y.get)) && (d.get = u),
        (u = o(y.set)) && (d.set = u),
        (u = o(y.init)) && s.unshift(u);
    } else (u = o(y)) && (a === "field" ? s.unshift(u) : (d[c] = u));
  }
  l && Object.defineProperty(l, n.name, d), (h = !0);
}
function ky(e, t, r) {
  for (var n = arguments.length > 2, s = 0; s < t.length; s++)
    r = n ? t[s].call(e, r) : t[s].call(e);
  return n ? r : void 0;
}
function Iy(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Ay(e, t, r) {
  return (
    typeof t == "symbol" &&
      (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", {
      configurable: !0,
      value: r ? "".concat(r, " ", t) : t,
    })
  );
}
function Od(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Pd(e, t, r, n) {
  function s(i) {
    return i instanceof r
      ? i
      : new r(function (o) {
          o(i);
        });
  }
  return new (r || (r = Promise))(function (i, o) {
    function a(d) {
      try {
        l(n.next(d));
      } catch (u) {
        o(u);
      }
    }
    function c(d) {
      try {
        l(n.throw(d));
      } catch (u) {
        o(u);
      }
    }
    function l(d) {
      d.done ? i(d.value) : s(d.value).then(a, c);
    }
    l((n = n.apply(e, t || [])).next());
  });
}
function $d(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    n,
    s,
    i,
    o;
  return (
    (o = { next: a(0), throw: a(1), return: a(2) }),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function a(l) {
    return function (d) {
      return c([l, d]);
    };
  }
  function c(l) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && ((o = 0), l[0] && (r = 0)), r; )
      try {
        if (
          ((n = 1),
          s &&
            (i =
              l[0] & 2
                ? s.return
                : l[0]
                ? s.throw || ((i = s.return) && i.call(s), 0)
                : s.next) &&
            !(i = i.call(s, l[1])).done)
        )
          return i;
        switch (((s = 0), i && (l = [l[0] & 2, i.value]), l[0])) {
          case 0:
          case 1:
            i = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, (s = l[1]), (l = [0]);
            continue;
          case 7:
            (l = r.ops.pop()), r.trys.pop();
            continue;
          default:
            if (
              ((i = r.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (l[0] === 6 || l[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!i || (l[1] > i[0] && l[1] < i[3]))) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < i[1]) {
              (r.label = i[1]), (i = l);
              break;
            }
            if (i && r.label < i[2]) {
              (r.label = i[2]), r.ops.push(l);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = t.call(e, r);
      } catch (d) {
        (l = [6, d]), (s = 0);
      } finally {
        n = i = 0;
      }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var Ds = Object.create
  ? function (e, t, r, n) {
      n === void 0 && (n = r);
      var s = Object.getOwnPropertyDescriptor(t, r);
      (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) &&
        (s = {
          enumerable: !0,
          get: function () {
            return t[r];
          },
        }),
        Object.defineProperty(e, n, s);
    }
  : function (e, t, r, n) {
      n === void 0 && (n = r), (e[n] = t[r]);
    };
function Bd(e, t) {
  for (var r in e)
    r !== "default" &&
      !Object.prototype.hasOwnProperty.call(t, r) &&
      Ds(t, e, r);
}
function Un(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    r = t && e[t],
    n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function ma(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    s,
    i = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = n.next()).done; ) i.push(s.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function Dd() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(ma(arguments[t]));
  return e;
}
function Fd() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var n = Array(e), s = 0, t = 0; t < r; t++)
    for (var i = arguments[t], o = 0, a = i.length; o < a; o++, s++)
      n[s] = i[o];
  return n;
}
function jd(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = t.length, i; n < s; n++)
      (i || !(n in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function gr(e) {
  return this instanceof gr ? ((this.v = e), this) : new gr(e);
}
function Hd(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    s,
    i = [];
  return (
    (s = {}),
    o("next"),
    o("throw"),
    o("return"),
    (s[Symbol.asyncIterator] = function () {
      return this;
    }),
    s
  );
  function o(h) {
    n[h] &&
      (s[h] = function (f) {
        return new Promise(function (m, S) {
          i.push([h, f, m, S]) > 1 || a(h, f);
        });
      });
  }
  function a(h, f) {
    try {
      c(n[h](f));
    } catch (m) {
      u(i[0][3], m);
    }
  }
  function c(h) {
    h.value instanceof gr
      ? Promise.resolve(h.value.v).then(l, d)
      : u(i[0][2], h);
  }
  function l(h) {
    a("next", h);
  }
  function d(h) {
    a("throw", h);
  }
  function u(h, f) {
    h(f), i.shift(), i.length && a(i[0][0], i[0][1]);
  }
}
function Ud(e) {
  var t, r;
  return (
    (t = {}),
    n("next"),
    n("throw", function (s) {
      throw s;
    }),
    n("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function n(s, i) {
    t[s] = e[s]
      ? function (o) {
          return (r = !r) ? { value: gr(e[s](o)), done: !1 } : i ? i(o) : o;
        }
      : i;
  }
}
function Wd(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof Un == "function" ? Un(e) : e[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(i) {
    r[i] =
      e[i] &&
      function (o) {
        return new Promise(function (a, c) {
          (o = e[i](o)), s(a, c, o.done, o.value);
        });
      };
  }
  function s(i, o, a, c) {
    Promise.resolve(c).then(function (l) {
      i({ value: l, done: a });
    }, o);
  }
}
function Vd(e, t) {
  return (
    Object.defineProperty
      ? Object.defineProperty(e, "raw", { value: t })
      : (e.raw = t),
    e
  );
}
var xy = Object.create
  ? function (e, t) {
      Object.defineProperty(e, "default", { enumerable: !0, value: t });
    }
  : function (e, t) {
      e.default = t;
    };
function zd(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" &&
        Object.prototype.hasOwnProperty.call(e, r) &&
        Ds(t, e, r);
  return xy(t, e), t;
}
function qd(e) {
  return e && e.__esModule ? e : { default: e };
}
function Gd(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it"
    );
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Jd(e, t, r, n, s) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !s : !t.has(e))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it"
    );
  return n === "a" ? s.call(e, r) : s ? (s.value = r) : t.set(e, r), r;
}
function Zd(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Kd(e, t, r) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function")
      throw new TypeError("Object expected.");
    var n;
    if (r) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      n = t[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      n = t[Symbol.dispose];
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    e.stack.push({ value: t, dispose: n, async: r });
  } else r && e.stack.push({ async: !0 });
  return t;
}
var Ty =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return (
          (n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n
        );
      };
function Qd(e) {
  function t(n) {
    (e.error = e.hasError
      ? new Ty(n, e.error, "An error was suppressed during disposal.")
      : n),
      (e.hasError = !0);
  }
  function r() {
    for (; e.stack.length; ) {
      var n = e.stack.pop();
      try {
        var s = n.dispose && n.dispose.call(n.value);
        if (n.async)
          return Promise.resolve(s).then(r, function (i) {
            return t(i), r();
          });
      } catch (i) {
        t(i);
      }
    }
    if (e.hasError) throw e.error;
  }
  return r();
}
const Ny = {
    __extends: Td,
    __assign: Hn,
    __rest: Nd,
    __decorate: Md,
    __param: Ld,
    __metadata: Od,
    __awaiter: Pd,
    __generator: $d,
    __createBinding: Ds,
    __exportStar: Bd,
    __values: Un,
    __read: ma,
    __spread: Dd,
    __spreadArrays: Fd,
    __spreadArray: jd,
    __await: gr,
    __asyncGenerator: Hd,
    __asyncDelegator: Ud,
    __asyncValues: Wd,
    __makeTemplateObject: Vd,
    __importStar: zd,
    __importDefault: qd,
    __classPrivateFieldGet: Gd,
    __classPrivateFieldSet: Jd,
    __classPrivateFieldIn: Zd,
    __addDisposableResource: Kd,
    __disposeResources: Qd,
  },
  My = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Kd,
        get __assign() {
          return Hn;
        },
        __asyncDelegator: Ud,
        __asyncGenerator: Hd,
        __asyncValues: Wd,
        __await: gr,
        __awaiter: Pd,
        __classPrivateFieldGet: Gd,
        __classPrivateFieldIn: Zd,
        __classPrivateFieldSet: Jd,
        __createBinding: Ds,
        __decorate: Md,
        __disposeResources: Qd,
        __esDecorate: Cy,
        __exportStar: Bd,
        __extends: Td,
        __generator: $d,
        __importDefault: qd,
        __importStar: zd,
        __makeTemplateObject: Vd,
        __metadata: Od,
        __param: Ld,
        __propKey: Iy,
        __read: ma,
        __rest: Nd,
        __runInitializers: ky,
        __setFunctionName: Ay,
        __spread: Dd,
        __spreadArray: jd,
        __spreadArrays: Fd,
        __values: Un,
        default: Ny,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ba = Ur(My);
var Fs = {};
Object.defineProperty(Fs, "__esModule", { value: !0 });
var il = ba,
  Ly = (function () {
    function e(t) {
      if (((this._maxConcurrency = t), (this._queue = []), t <= 0))
        throw new Error("semaphore must be initialized to a positive value");
      this._value = t;
    }
    return (
      (e.prototype.acquire = function () {
        var t = this,
          r = this.isLocked(),
          n = new Promise(function (s) {
            return t._queue.push(s);
          });
        return r || this._dispatch(), n;
      }),
      (e.prototype.runExclusive = function (t) {
        return il.__awaiter(this, void 0, void 0, function () {
          var r, n, s;
          return il.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, this.acquire()];
              case 1:
                (r = i.sent()), (n = r[0]), (s = r[1]), (i.label = 2);
              case 2:
                return i.trys.push([2, , 4, 5]), [4, t(n)];
              case 3:
                return [2, i.sent()];
              case 4:
                return s(), [7];
              case 5:
                return [2];
            }
          });
        });
      }),
      (e.prototype.isLocked = function () {
        return this._value <= 0;
      }),
      (e.prototype.release = function () {
        if (this._maxConcurrency > 1)
          throw new Error(
            "this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead"
          );
        if (this._currentReleaser) {
          var t = this._currentReleaser;
          (this._currentReleaser = void 0), t();
        }
      }),
      (e.prototype._dispatch = function () {
        var t = this,
          r = this._queue.shift();
        if (r) {
          var n = !1;
          (this._currentReleaser = function () {
            n || ((n = !0), t._value++, t._dispatch());
          }),
            r([this._value--, this._currentReleaser]);
        }
      }),
      e
    );
  })();
Fs.default = Ly;
Object.defineProperty(_a, "__esModule", { value: !0 });
var ol = ba,
  Oy = Fs,
  Py = (function () {
    function e() {
      this._semaphore = new Oy.default(1);
    }
    return (
      (e.prototype.acquire = function () {
        return ol.__awaiter(this, void 0, void 0, function () {
          var t, r;
          return ol.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this._semaphore.acquire()];
              case 1:
                return (t = n.sent()), (r = t[1]), [2, r];
            }
          });
        });
      }),
      (e.prototype.runExclusive = function (t) {
        return this._semaphore.runExclusive(function () {
          return t();
        });
      }),
      (e.prototype.isLocked = function () {
        return this._semaphore.isLocked();
      }),
      (e.prototype.release = function () {
        this._semaphore.release();
      }),
      e
    );
  })();
_a.default = Py;
var js = {};
Object.defineProperty(js, "__esModule", { value: !0 });
js.withTimeout = void 0;
var Tn = ba;
function $y(e, t, r) {
  var n = this;
  return (
    r === void 0 && (r = new Error("timeout")),
    {
      acquire: function () {
        return new Promise(function (s, i) {
          return Tn.__awaiter(n, void 0, void 0, function () {
            var o, a, c;
            return Tn.__generator(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    (o = !1),
                    setTimeout(function () {
                      (o = !0), i(r);
                    }, t),
                    [4, e.acquire()]
                  );
                case 1:
                  return (
                    (a = l.sent()),
                    o ? ((c = Array.isArray(a) ? a[1] : a), c()) : s(a),
                    [2]
                  );
              }
            });
          });
        });
      },
      runExclusive: function (s) {
        return Tn.__awaiter(this, void 0, void 0, function () {
          var i, o;
          return Tn.__generator(this, function (a) {
            switch (a.label) {
              case 0:
                (i = function () {}), (a.label = 1);
              case 1:
                return a.trys.push([1, , 7, 8]), [4, this.acquire()];
              case 2:
                return (
                  (o = a.sent()),
                  Array.isArray(o) ? ((i = o[1]), [4, s(o[0])]) : [3, 4]
                );
              case 3:
                return [2, a.sent()];
              case 4:
                return (i = o), [4, s()];
              case 5:
                return [2, a.sent()];
              case 6:
                return [3, 8];
              case 7:
                return i(), [7];
              case 8:
                return [2];
            }
          });
        });
      },
      release: function () {
        e.release();
      },
      isLocked: function () {
        return e.isLocked();
      },
    }
  );
}
js.withTimeout = $y;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.withTimeout = e.Semaphore = e.Mutex = void 0);
  var t = _a;
  Object.defineProperty(e, "Mutex", {
    enumerable: !0,
    get: function () {
      return t.default;
    },
  });
  var r = Fs;
  Object.defineProperty(e, "Semaphore", {
    enumerable: !0,
    get: function () {
      return r.default;
    },
  });
  var n = js;
  Object.defineProperty(e, "withTimeout", {
    enumerable: !0,
    get: function () {
      return n.withTimeout;
    },
  });
})(xd);
var By = Fy,
  Dy = Object.prototype.hasOwnProperty;
function Fy() {
  for (var e = {}, t = 0; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r) Dy.call(r, n) && (e[n] = r[n]);
  }
  return e;
}
const jy = By,
  Hy = Jo();
var Uy = V;
function V(e) {
  const t = this;
  t.currentProvider = e;
}
V.prototype.getBalance = gn(2, "eth_getBalance");
V.prototype.getCode = gn(2, "eth_getCode");
V.prototype.getTransactionCount = gn(2, "eth_getTransactionCount");
V.prototype.getStorageAt = gn(3, "eth_getStorageAt");
V.prototype.call = gn(2, "eth_call");
V.prototype.protocolVersion = K("eth_protocolVersion");
V.prototype.syncing = K("eth_syncing");
V.prototype.coinbase = K("eth_coinbase");
V.prototype.mining = K("eth_mining");
V.prototype.hashrate = K("eth_hashrate");
V.prototype.gasPrice = K("eth_gasPrice");
V.prototype.accounts = K("eth_accounts");
V.prototype.blockNumber = K("eth_blockNumber");
V.prototype.getBlockTransactionCountByHash = K(
  "eth_getBlockTransactionCountByHash"
);
V.prototype.getBlockTransactionCountByNumber = K(
  "eth_getBlockTransactionCountByNumber"
);
V.prototype.getUncleCountByBlockHash = K("eth_getUncleCountByBlockHash");
V.prototype.getUncleCountByBlockNumber = K("eth_getUncleCountByBlockNumber");
V.prototype.sign = K("eth_sign");
V.prototype.sendTransaction = K("eth_sendTransaction");
V.prototype.sendRawTransaction = K("eth_sendRawTransaction");
V.prototype.estimateGas = K("eth_estimateGas");
V.prototype.getBlockByHash = K("eth_getBlockByHash");
V.prototype.getBlockByNumber = K("eth_getBlockByNumber");
V.prototype.getTransactionByHash = K("eth_getTransactionByHash");
V.prototype.getTransactionByBlockHashAndIndex = K(
  "eth_getTransactionByBlockHashAndIndex"
);
V.prototype.getTransactionByBlockNumberAndIndex = K(
  "eth_getTransactionByBlockNumberAndIndex"
);
V.prototype.getTransactionReceipt = K("eth_getTransactionReceipt");
V.prototype.getUncleByBlockHashAndIndex = K("eth_getUncleByBlockHashAndIndex");
V.prototype.getUncleByBlockNumberAndIndex = K(
  "eth_getUncleByBlockNumberAndIndex"
);
V.prototype.getCompilers = K("eth_getCompilers");
V.prototype.compileLLL = K("eth_compileLLL");
V.prototype.compileSolidity = K("eth_compileSolidity");
V.prototype.compileSerpent = K("eth_compileSerpent");
V.prototype.newFilter = K("eth_newFilter");
V.prototype.newBlockFilter = K("eth_newBlockFilter");
V.prototype.newPendingTransactionFilter = K("eth_newPendingTransactionFilter");
V.prototype.uninstallFilter = K("eth_uninstallFilter");
V.prototype.getFilterChanges = K("eth_getFilterChanges");
V.prototype.getFilterLogs = K("eth_getFilterLogs");
V.prototype.getLogs = K("eth_getLogs");
V.prototype.getWork = K("eth_getWork");
V.prototype.submitWork = K("eth_submitWork");
V.prototype.submitHashrate = K("eth_submitHashrate");
V.prototype.sendAsync = function (e, t) {
  this.currentProvider.sendAsync(Wy(e), function (n, s) {
    if (
      (!n &&
        s.error &&
        (n = new Error("EthQuery - RPC Error - " + s.error.message)),
      n)
    )
      return t(n);
    t(null, s.result);
  });
};
function K(e) {
  return function () {
    const t = this;
    var r = [].slice.call(arguments),
      n = r.pop();
    t.sendAsync({ method: e, params: r }, n);
  };
}
function gn(e, t) {
  return function () {
    const r = this;
    var n = [].slice.call(arguments),
      s = n.pop();
    n.length < e && n.push("latest"), r.sendAsync({ method: t, params: n }, s);
  };
}
function Wy(e) {
  return jy({ id: Hy(), jsonrpc: "2.0", params: [] }, e);
}
const al = (e, t, r, n) =>
    function (...s) {
      const i = t.promiseModule;
      return new i((o, a) => {
        t.multiArgs
          ? s.push((...l) => {
              t.errorFirst ? (l[0] ? a(l) : (l.shift(), o(l))) : o(l);
            })
          : t.errorFirst
          ? s.push((l, d) => {
              l ? a(l) : o(d);
            })
          : s.push(o),
          Reflect.apply(e, this === r ? n : this, s);
      });
    },
  cl = new WeakMap();
var Vy = (e, t) => {
  t = {
    exclude: [/.+(?:Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise,
    ...t,
  };
  const r = typeof e;
  if (!(e !== null && (r === "object" || r === "function")))
    throw new TypeError(
      `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${
        e === null ? "null" : r
      }\``
    );
  const n = (o, a) => {
      let c = cl.get(o);
      if ((c || ((c = {}), cl.set(o, c)), a in c)) return c[a];
      const l = (m) =>
          typeof m == "string" || typeof a == "symbol" ? a === m : m.test(a),
        d = Reflect.getOwnPropertyDescriptor(o, a),
        u = d === void 0 || d.writable || d.configurable,
        f = (t.include ? t.include.some(l) : !t.exclude.some(l)) && u;
      return (c[a] = f), f;
    },
    s = new WeakMap(),
    i = new Proxy(e, {
      apply(o, a, c) {
        const l = s.get(o);
        if (l) return Reflect.apply(l, a, c);
        const d = t.excludeMain ? o : al(o, t, i, o);
        return s.set(o, d), Reflect.apply(d, a, c);
      },
      get(o, a) {
        const c = o[a];
        if (!n(o, a) || c === Function.prototype[a]) return c;
        const l = s.get(c);
        if (l) return l;
        if (typeof c == "function") {
          const d = al(c, t, i, o);
          return s.set(c, d), d;
        }
        return c;
      },
    });
  return i;
};
const zy = Ms.default;
let qy = class extends zy {
  constructor() {
    super(), (this.updates = []);
  }
  async initialize() {}
  async update() {
    throw new Error("BaseFilter - no update method specified");
  }
  addResults(t) {
    (this.updates = this.updates.concat(t)),
      t.forEach((r) => this.emit("update", r));
  }
  addInitialResults(t) {}
  getChangesAndClear() {
    const t = this.updates;
    return (this.updates = []), t;
  }
};
var ya = qy;
const Gy = ya;
let Jy = class extends Gy {
  constructor() {
    super(), (this.allResults = []);
  }
  async update() {
    throw new Error("BaseFilterWithHistory - no update method specified");
  }
  addResults(t) {
    (this.allResults = this.allResults.concat(t)), super.addResults(t);
  }
  addInitialResults(t) {
    (this.allResults = this.allResults.concat(t)), super.addInitialResults(t);
  }
  getAllResults() {
    return this.allResults;
  }
};
var Zy = Jy,
  _n = {
    minBlockRef: Ky,
    maxBlockRef: Qy,
    sortBlockRefs: va,
    bnToHex: Yy,
    blockRefIsNumber: Xy,
    hexToInt: Wn,
    incrementHexInt: ev,
    intToHex: Yd,
    unsafeRandomBytes: tv,
  };
function Ky(...e) {
  return va(e)[0];
}
function Qy(...e) {
  const t = va(e);
  return t[t.length - 1];
}
function va(e) {
  return e.sort((t, r) =>
    t === "latest" || r === "earliest"
      ? 1
      : r === "latest" || t === "earliest"
      ? -1
      : Wn(t) - Wn(r)
  );
}
function Yy(e) {
  return "0x" + e.toString(16);
}
function Xy(e) {
  return e && !["earliest", "latest", "pending"].includes(e);
}
function Wn(e) {
  return e == null ? e : Number.parseInt(e, 16);
}
function ev(e) {
  if (e == null) return e;
  const t = Wn(e);
  return Yd(t + 1);
}
function Yd(e) {
  if (e == null) return e;
  let t = e.toString(16);
  return t.length % 2 && (t = "0" + t), "0x" + t;
}
function tv(e) {
  let t = "0x";
  for (let r = 0; r < e; r++) (t += ll()), (t += ll());
  return t;
}
function ll() {
  return Math.floor(Math.random() * 16).toString(16);
}
const rv = Uy,
  nv = Vy,
  sv = Zy,
  {
    bnToHex: mw,
    hexToInt: Nn,
    incrementHexInt: iv,
    minBlockRef: ov,
    blockRefIsNumber: av,
  } = _n;
let cv = class extends sv {
  constructor({ provider: t, params: r }) {
    super(),
      (this.type = "log"),
      (this.ethQuery = new rv(t)),
      (this.params = Object.assign(
        { fromBlock: "latest", toBlock: "latest", address: void 0, topics: [] },
        r
      )),
      this.params.address &&
        (Array.isArray(this.params.address) ||
          (this.params.address = [this.params.address]),
        (this.params.address = this.params.address.map((n) =>
          n.toLowerCase()
        )));
  }
  async initialize({ currentBlock: t }) {
    let r = this.params.fromBlock;
    ["latest", "pending"].includes(r) && (r = t),
      r === "earliest" && (r = "0x0"),
      (this.params.fromBlock = r);
    const n = ov(this.params.toBlock, t),
      s = Object.assign({}, this.params, { toBlock: n }),
      i = await this._fetchLogs(s);
    this.addInitialResults(i);
  }
  async update({ oldBlock: t, newBlock: r }) {
    const n = r;
    let s;
    t ? (s = iv(t)) : (s = r);
    const i = Object.assign({}, this.params, { fromBlock: s, toBlock: n }),
      a = (await this._fetchLogs(i)).filter((c) => this.matchLog(c));
    this.addResults(a);
  }
  async _fetchLogs(t) {
    return await nv((n) => this.ethQuery.getLogs(t, n))();
  }
  matchLog(t) {
    if (
      Nn(this.params.fromBlock) >= Nn(t.blockNumber) ||
      (av(this.params.toBlock) && Nn(this.params.toBlock) <= Nn(t.blockNumber))
    )
      return !1;
    const r = t.address && t.address.toLowerCase();
    return this.params.address && r && !this.params.address.includes(r)
      ? !1
      : this.params.topics.every((s, i) => {
          let o = t.topics[i];
          if (!o) return !1;
          o = o.toLowerCase();
          let a = Array.isArray(s) ? s : [s];
          return a.includes(null)
            ? !0
            : ((a = a.map((d) => d.toLowerCase())), a.includes(o));
        });
  }
};
var lv = cv,
  wa = uv;
async function uv({ provider: e, fromBlock: t, toBlock: r }) {
  t || (t = r);
  const n = ul(t),
    i = ul(r) - n + 1,
    o = Array(i)
      .fill()
      .map((c, l) => n + l)
      .map(dv);
  let a = await Promise.all(
    o.map((c) => fv(e, "eth_getBlockByNumber", [c, !1]))
  );
  return (a = a.filter((c) => c !== null)), a;
}
function ul(e) {
  return e == null ? e : Number.parseInt(e, 16);
}
function dv(e) {
  return e == null ? e : "0x" + e.toString(16);
}
function hv(e, t) {
  return new Promise((r, n) => {
    e.sendAsync(t, (s, i) => {
      s
        ? n(s)
        : i.error
        ? n(i.error)
        : i.result
        ? r(i.result)
        : n(new Error("Result was empty"));
    });
  });
}
async function fv(e, t, r) {
  for (let n = 0; n < 3; n++)
    try {
      return await hv(e, { id: 1, jsonrpc: "2.0", method: t, params: r });
    } catch (s) {
      console.error(`provider.sendAsync failed: ${s.stack || s.message || s}`);
    }
  return null;
}
const pv = ya,
  gv = wa,
  { incrementHexInt: _v } = _n;
let mv = class extends pv {
  constructor({ provider: t, params: r }) {
    super(), (this.type = "block"), (this.provider = t);
  }
  async update({ oldBlock: t, newBlock: r }) {
    const n = r,
      s = _v(t),
      o = (await gv({ provider: this.provider, fromBlock: s, toBlock: n })).map(
        (a) => a.hash
      );
    this.addResults(o);
  }
};
var bv = mv;
const yv = ya,
  vv = wa,
  { incrementHexInt: wv } = _n;
let Ev = class extends yv {
  constructor({ provider: t }) {
    super(), (this.type = "tx"), (this.provider = t);
  }
  async update({ oldBlock: t }) {
    const r = t,
      n = wv(t),
      s = await vv({ provider: this.provider, fromBlock: n, toBlock: r }),
      i = [];
    for (const o of s) i.push(...o.transactions);
    this.addResults(i);
  }
};
var Sv = Ev;
const Rv = xd.Mutex,
  { createAsyncMiddleware: Cv, createScaffoldMiddleware: kv } = ha,
  Iv = lv,
  Av = bv,
  xv = Sv,
  { intToHex: Xd, hexToInt: po } = _n;
var Tv = Nv;
function Nv({ blockTracker: e, provider: t }) {
  let r = 0,
    n = {};
  const s = new Rv(),
    i = Mv({ mutex: s }),
    o = kv({
      eth_newFilter: i(go(c)),
      eth_newBlockFilter: i(go(l)),
      eth_newPendingTransactionFilter: i(go(d)),
      eth_uninstallFilter: i($n(f)),
      eth_getFilterChanges: i($n(u)),
      eth_getFilterLogs: i($n(h)),
    }),
    a = async ({ oldBlock: b, newBlock: v }) => {
      if (n.length === 0) return;
      const C = await s.acquire();
      try {
        await Promise.all(
          Xt(n).map(async (R) => {
            try {
              await R.update({ oldBlock: b, newBlock: v });
            } catch (I) {
              console.error(I);
            }
          })
        );
      } catch (R) {
        console.error(R);
      }
      C();
    };
  return (
    (o.newLogFilter = c),
    (o.newBlockFilter = l),
    (o.newPendingTransactionFilter = d),
    (o.uninstallFilter = f),
    (o.getFilterChanges = u),
    (o.getFilterLogs = h),
    (o.destroy = () => {
      y();
    }),
    o
  );
  async function c(b) {
    const v = new Iv({ provider: t, params: b });
    return await m(v), v;
  }
  async function l() {
    const b = new Av({ provider: t });
    return await m(b), b;
  }
  async function d() {
    const b = new xv({ provider: t });
    return await m(b), b;
  }
  async function u(b) {
    const v = po(b),
      C = n[v];
    if (!C) throw new Error(`No filter for index "${v}"`);
    return C.getChangesAndClear();
  }
  async function h(b) {
    const v = po(b),
      C = n[v];
    if (!C) throw new Error(`No filter for index "${v}"`);
    let R = [];
    return C.type === "log" && (R = C.getAllResults()), R;
  }
  async function f(b) {
    const v = po(b),
      R = !!n[v];
    return R && (await S(v)), R;
  }
  async function m(b) {
    const v = Xt(n).length,
      C = await e.getLatestBlock();
    await b.initialize({ currentBlock: C }),
      r++,
      (n[r] = b),
      (b.id = r),
      (b.idHex = Xd(r));
    const R = Xt(n).length;
    return p({ prevFilterCount: v, newFilterCount: R }), r;
  }
  async function S(b) {
    const v = Xt(n).length;
    delete n[b];
    const C = Xt(n).length;
    p({ prevFilterCount: v, newFilterCount: C });
  }
  async function y() {
    const b = Xt(n).length;
    (n = {}), p({ prevFilterCount: b, newFilterCount: 0 });
  }
  function p({ prevFilterCount: b, newFilterCount: v }) {
    if (b === 0 && v > 0) {
      e.on("sync", a);
      return;
    }
    if (b > 0 && v === 0) {
      e.removeListener("sync", a);
      return;
    }
  }
}
function go(e) {
  return $n(async (...t) => {
    const r = await e(...t);
    return Xd(r.id);
  });
}
function $n(e) {
  return Cv(async (t, r) => {
    const n = await e.apply(null, t.params);
    r.result = n;
  });
}
function Mv({ mutex: e }) {
  return (t) => async (r, n, s, i) => {
    (await e.acquire())(), t(r, n, s, i);
  };
}
function Xt(e, t) {
  const r = [];
  for (let n in e) r.push(e[n]);
  return r;
}
const Lv = Ms.default,
  { createAsyncMiddleware: dl, createScaffoldMiddleware: Ov } = ha,
  Pv = Tv,
  { unsafeRandomBytes: $v, incrementHexInt: Bv } = _n,
  Dv = wa;
var Fv = jv;
function jv({ blockTracker: e, provider: t }) {
  const r = {},
    n = Pv({ blockTracker: e, provider: t });
  let s = !1;
  const i = new Lv(),
    o = Ov({ eth_subscribe: dl(a), eth_unsubscribe: dl(c) });
  return (o.destroy = d), { events: i, middleware: o };
  async function a(u, h) {
    if (s)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const f = u.params[0],
      m = $v(16);
    let S;
    switch (f) {
      case "newHeads":
        S = y({ subId: m });
        break;
      case "logs":
        const b = u.params[1],
          v = await n.newLogFilter(b);
        S = p({ subId: m, filter: v });
        break;
      default:
        throw new Error(
          `SubscriptionManager - unsupported subscription type "${f}"`
        );
    }
    (r[m] = S), (h.result = m);
    return;
    function y({ subId: b }) {
      const v = {
        type: f,
        destroy: async () => {
          e.removeListener("sync", v.update);
        },
        update: async ({ oldBlock: C, newBlock: R }) => {
          const I = R,
            j = Bv(C);
          (await Dv({ provider: t, fromBlock: j, toBlock: I }))
            .map(Hv)
            .filter((G) => G !== null)
            .forEach((G) => {
              l(b, G);
            });
        },
      };
      return e.on("sync", v.update), v;
    }
    function p({ subId: b, filter: v }) {
      return (
        v.on("update", (R) => l(b, R)),
        { type: f, destroy: async () => await n.uninstallFilter(v.idHex) }
      );
    }
  }
  async function c(u, h) {
    if (s)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const f = u.params[0],
      m = r[f];
    if (!m) {
      h.result = !1;
      return;
    }
    delete r[f], await m.destroy(), (h.result = !0);
  }
  function l(u, h) {
    i.emit("notification", {
      jsonrpc: "2.0",
      method: "eth_subscription",
      params: { subscription: u, result: h },
    });
  }
  function d() {
    i.removeAllListeners();
    for (const u in r) r[u].destroy(), delete r[u];
    s = !0;
  }
}
function Hv(e) {
  return e == null
    ? null
    : {
        hash: e.hash,
        parentHash: e.parentHash,
        sha3Uncles: e.sha3Uncles,
        miner: e.miner,
        stateRoot: e.stateRoot,
        transactionsRoot: e.transactionsRoot,
        receiptsRoot: e.receiptsRoot,
        logsBloom: e.logsBloom,
        difficulty: e.difficulty,
        number: e.number,
        gasLimit: e.gasLimit,
        gasUsed: e.gasUsed,
        nonce: e.nonce,
        mixHash: e.mixHash,
        timestamp: e.timestamp,
        extraData: e.extraData,
      };
}
Object.defineProperty(ws, "__esModule", { value: !0 });
ws.SubscriptionManager = void 0;
const Uv = $u,
  Wv = Fv,
  hl = () => {};
class Vv {
  constructor(t) {
    const r = new Uv.PollingBlockTracker({
        provider: t,
        pollingInterval: 15e3,
        setSkipCacheFlag: !0,
      }),
      { events: n, middleware: s } = Wv({ blockTracker: r, provider: t });
    (this.events = n), (this.subscriptionMiddleware = s);
  }
  async handleRequest(t) {
    const r = {};
    return await this.subscriptionMiddleware(t, r, hl, hl), r;
  }
  destroy() {
    this.subscriptionMiddleware.destroy();
  }
}
ws.SubscriptionManager = Vv;
var eh =
  (F && F.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(ar, "__esModule", { value: !0 });
ar.CoinbaseWalletProvider = void 0;
const zv = eh(Vn),
  qv = Oh,
  Y = Vr,
  z = P,
  Gv = Jr,
  fl = Be,
  Mn = yr,
  Ne = _r,
  _o = eh(a1),
  Nr = br,
  Jv = hr,
  Zv = ws,
  pl = "DefaultChainId",
  gl = "DefaultJsonRpcUrl";
class Kv extends qv.EventEmitter {
  constructor(t) {
    var r, n;
    super(),
      (this._filterPolyfill = new Jv.FilterPolyfill(this)),
      (this._subscriptionManager = new Zv.SubscriptionManager(this)),
      (this._relay = null),
      (this._addresses = []),
      (this.hasMadeFirstChainChangedEmission = !1),
      (this.setProviderInfo = this.setProviderInfo.bind(this)),
      (this.updateProviderInfo = this.updateProviderInfo.bind(this)),
      (this.getChainId = this.getChainId.bind(this)),
      (this.setAppInfo = this.setAppInfo.bind(this)),
      (this.enable = this.enable.bind(this)),
      (this.close = this.close.bind(this)),
      (this.send = this.send.bind(this)),
      (this.sendAsync = this.sendAsync.bind(this)),
      (this.request = this.request.bind(this)),
      (this._setAddresses = this._setAddresses.bind(this)),
      (this.scanQRCode = this.scanQRCode.bind(this)),
      (this.genericRequest = this.genericRequest.bind(this)),
      (this._chainIdFromOpts = t.chainId),
      (this._jsonRpcUrlFromOpts = t.jsonRpcUrl),
      (this._overrideIsMetaMask = t.overrideIsMetaMask),
      (this._relayProvider = t.relayProvider),
      (this._storage = t.storage),
      (this._relayEventManager = t.relayEventManager),
      (this.diagnostic = t.diagnosticLogger),
      (this.reloadOnDisconnect = !0),
      (this.isCoinbaseWallet =
        (r = t.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0),
      (this.isCoinbaseBrowser =
        (n = t.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1),
      (this.qrUrl = t.qrUrl);
    const s = this.getChainId(),
      i = (0, z.prepend0x)(s.toString(16));
    this.emit("connect", { chainIdStr: i });
    const o = this._storage.getItem(fl.LOCAL_STORAGE_ADDRESSES_KEY);
    if (o) {
      const a = o.split(" ");
      a[0] !== "" &&
        ((this._addresses = a.map((c) => (0, z.ensureAddressString)(c))),
        this.emit("accountsChanged", a));
    }
    this._subscriptionManager.events.on("notification", (a) => {
      this.emit("message", { type: a.method, data: a.params });
    }),
      this._isAuthorized() && this.initializeRelay(),
      window.addEventListener("message", (a) => {
        var c;
        if (
          !(a.origin !== location.origin || a.source !== window) &&
          a.data.type === "walletLinkMessage" &&
          a.data.data.action === "dappChainSwitched"
        ) {
          const l = a.data.data.chainId,
            d =
              (c = a.data.data.jsonRpcUrl) !== null && c !== void 0
                ? c
                : this.jsonRpcUrl;
          this.updateProviderInfo(d, Number(l));
        }
      });
  }
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  get networkVersion() {
    return this.getChainId().toString(10);
  }
  get chainId() {
    return (0, z.prepend0x)(this.getChainId().toString(16));
  }
  get isWalletLink() {
    return !0;
  }
  get isMetaMask() {
    return this._overrideIsMetaMask;
  }
  get host() {
    return this.jsonRpcUrl;
  }
  get connected() {
    return !0;
  }
  isConnected() {
    return !0;
  }
  get jsonRpcUrl() {
    var t;
    return (t = this._storage.getItem(gl)) !== null && t !== void 0
      ? t
      : this._jsonRpcUrlFromOpts;
  }
  set jsonRpcUrl(t) {
    this._storage.setItem(gl, t);
  }
  disableReloadOnDisconnect() {
    this.reloadOnDisconnect = !1;
  }
  setProviderInfo(t, r) {
    this.isCoinbaseBrowser ||
      ((this._chainIdFromOpts = r), (this._jsonRpcUrlFromOpts = t)),
      this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
  }
  updateProviderInfo(t, r) {
    this.jsonRpcUrl = t;
    const n = this.getChainId();
    this._storage.setItem(pl, r.toString(10)),
      ((0, z.ensureIntNumber)(r) !== n ||
        !this.hasMadeFirstChainChangedEmission) &&
        (this.emit("chainChanged", this.getChainId()),
        (this.hasMadeFirstChainChangedEmission = !0));
  }
  async watchAsset(t, r, n, s, i, o) {
    const c = await (
      await this.initializeRelay()
    ).watchAsset(t, r, n, s, i, o?.toString()).promise;
    return (0, Ne.isErrorResponse)(c) ? !1 : !!c.result;
  }
  async addEthereumChain(t, r, n, s, i, o) {
    var a, c;
    if ((0, z.ensureIntNumber)(t) === this.getChainId()) return !1;
    const l = await this.initializeRelay(),
      d = l.inlineAddEthereumChain(t.toString());
    !this._isAuthorized() && !d && (await l.requestEthereumAccounts().promise);
    const u = await l.addEthereumChain(t.toString(), r, i, n, s, o).promise;
    return (0, Ne.isErrorResponse)(u)
      ? !1
      : (((a = u.result) === null || a === void 0 ? void 0 : a.isApproved) ===
          !0 && this.updateProviderInfo(r[0], t),
        ((c = u.result) === null || c === void 0 ? void 0 : c.isApproved) ===
          !0);
  }
  async switchEthereumChain(t) {
    const n = await (
      await this.initializeRelay()
    ).switchEthereumChain(t.toString(10), this.selectedAddress || void 0)
      .promise;
    if ((0, Ne.isErrorResponse)(n)) {
      if (!n.errorCode) return;
      throw n.errorCode === Y.standardErrorCodes.provider.unsupportedChain
        ? Y.standardErrors.provider.unsupportedChain()
        : Y.standardErrors.provider.custom({
            message: n.errorMessage,
            code: n.errorCode,
          });
    }
    const s = n.result;
    s.isApproved && s.rpcUrl.length > 0 && this.updateProviderInfo(s.rpcUrl, t);
  }
  setAppInfo(t, r) {
    this.initializeRelay().then((n) => n.setAppInfo(t, r));
  }
  async enable() {
    var t;
    return (
      (t = this.diagnostic) === null ||
        t === void 0 ||
        t.log(Nr.EVENTS.ETH_ACCOUNTS_STATE, {
          method: "provider::enable",
          addresses_length: this._addresses.length,
          sessionIdHash: this._relay
            ? Mn.Session.hash(this._relay.session.id)
            : void 0,
        }),
      this._isAuthorized()
        ? [...this._addresses]
        : await this.send("eth_requestAccounts")
    );
  }
  async close() {
    (await this.initializeRelay()).resetAndReload();
  }
  send(t, r) {
    try {
      const n = this._send(t, r);
      if (n instanceof Promise)
        return n.catch((s) => {
          throw (0, Y.serializeError)(s, t);
        });
    } catch (n) {
      throw (0, Y.serializeError)(n, t);
    }
  }
  _send(t, r) {
    if (typeof t == "string") {
      const s = t,
        i = Array.isArray(r) ? r : r !== void 0 ? [r] : [],
        o = { jsonrpc: "2.0", id: 0, method: s, params: i };
      return this._sendRequestAsync(o).then((a) => a.result);
    }
    if (typeof r == "function") {
      const s = t,
        i = r;
      return this._sendAsync(s, i);
    }
    if (Array.isArray(t)) return t.map((i) => this._sendRequest(i));
    const n = t;
    return this._sendRequest(n);
  }
  async sendAsync(t, r) {
    try {
      return this._sendAsync(t, r).catch((n) => {
        throw (0, Y.serializeError)(n, t);
      });
    } catch (n) {
      return Promise.reject((0, Y.serializeError)(n, t));
    }
  }
  async _sendAsync(t, r) {
    if (typeof r != "function") throw new Error("callback is required");
    if (Array.isArray(t)) {
      const s = r;
      this._sendMultipleRequestsAsync(t)
        .then((i) => s(null, i))
        .catch((i) => s(i, null));
      return;
    }
    const n = r;
    return this._sendRequestAsync(t)
      .then((s) => n(null, s))
      .catch((s) => n(s, null));
  }
  async request(t) {
    try {
      return this._request(t).catch((r) => {
        throw (0, Y.serializeError)(r, t.method);
      });
    } catch (r) {
      return Promise.reject((0, Y.serializeError)(r, t.method));
    }
  }
  async _request(t) {
    if (!t || typeof t != "object" || Array.isArray(t))
      throw Y.standardErrors.rpc.invalidRequest({
        message: "Expected a single, non-array, object argument.",
        data: t,
      });
    const { method: r, params: n } = t;
    if (typeof r != "string" || r.length === 0)
      throw Y.standardErrors.rpc.invalidRequest({
        message: "'args.method' must be a non-empty string.",
        data: t,
      });
    if (
      n !== void 0 &&
      !Array.isArray(n) &&
      (typeof n != "object" || n === null)
    )
      throw Y.standardErrors.rpc.invalidRequest({
        message: "'args.params' must be an object or array if provided.",
        data: t,
      });
    const s = n === void 0 ? [] : n,
      i = this._relayEventManager.makeRequestId();
    return (
      await this._sendRequestAsync({
        method: r,
        params: s,
        jsonrpc: "2.0",
        id: i,
      })
    ).result;
  }
  async scanQRCode(t) {
    const n = await (
      await this.initializeRelay()
    ).scanQRCode((0, z.ensureRegExpString)(t)).promise;
    if ((0, Ne.isErrorResponse)(n))
      throw (0, Y.serializeError)(n.errorMessage, "scanQRCode");
    if (typeof n.result != "string")
      throw (0, Y.serializeError)("result was not a string", "scanQRCode");
    return n.result;
  }
  async genericRequest(t, r) {
    const s = await (await this.initializeRelay()).genericRequest(t, r).promise;
    if ((0, Ne.isErrorResponse)(s))
      throw (0, Y.serializeError)(s.errorMessage, "generic");
    if (typeof s.result != "string")
      throw (0, Y.serializeError)("result was not a string", "generic");
    return s.result;
  }
  async connectAndSignIn(t) {
    var r;
    (r = this.diagnostic) === null ||
      r === void 0 ||
      r.log(Nr.EVENTS.ETH_ACCOUNTS_STATE, {
        method: "provider::connectAndSignIn",
        sessionIdHash: this._relay
          ? Mn.Session.hash(this._relay.session.id)
          : void 0,
      });
    let n;
    try {
      const i = await this.initializeRelay();
      if (!(i instanceof Gv.MobileRelay))
        throw new Error("connectAndSignIn is only supported on mobile");
      if (
        ((n = await i.connectAndSignIn(t).promise), (0, Ne.isErrorResponse)(n))
      )
        throw new Error(n.errorMessage);
    } catch (i) {
      throw typeof i.message == "string" &&
        i.message.match(/(denied|rejected)/i)
        ? Y.standardErrors.provider.userRejectedRequest(
            "User denied account authorization"
          )
        : i;
    }
    if (!n.result) throw new Error("accounts received is empty");
    const { accounts: s } = n.result;
    return (
      this._setAddresses(s),
      this.isCoinbaseBrowser ||
        (await this.switchEthereumChain(this.getChainId())),
      n.result
    );
  }
  async selectProvider(t) {
    const n = await (await this.initializeRelay()).selectProvider(t).promise;
    if ((0, Ne.isErrorResponse)(n))
      throw (0, Y.serializeError)(n.errorMessage, "selectProvider");
    if (typeof n.result != "string")
      throw (0, Y.serializeError)("result was not a string", "selectProvider");
    return n.result;
  }
  supportsSubscriptions() {
    return !1;
  }
  subscribe() {
    throw new Error("Subscriptions are not supported");
  }
  unsubscribe() {
    throw new Error("Subscriptions are not supported");
  }
  disconnect() {
    return !0;
  }
  _sendRequest(t) {
    const r = { jsonrpc: "2.0", id: t.id },
      { method: n } = t;
    if (((r.result = this._handleSynchronousMethods(t)), r.result === void 0))
      throw new Error(
        `Coinbase Wallet does not support calling ${n} synchronously without a callback. Please provide a callback parameter to call ${n} asynchronously.`
      );
    return r;
  }
  _setAddresses(t, r) {
    if (!Array.isArray(t)) throw new Error("addresses is not an array");
    const n = t.map((s) => (0, z.ensureAddressString)(s));
    JSON.stringify(n) !== JSON.stringify(this._addresses) &&
      ((this._addresses = n),
      this.emit("accountsChanged", this._addresses),
      this._storage.setItem(fl.LOCAL_STORAGE_ADDRESSES_KEY, n.join(" ")));
  }
  _sendRequestAsync(t) {
    return new Promise((r, n) => {
      try {
        const s = this._handleSynchronousMethods(t);
        if (s !== void 0) return r({ jsonrpc: "2.0", id: t.id, result: s });
        const i = this._handleAsynchronousFilterMethods(t);
        if (i !== void 0) {
          i.then((a) =>
            r(Object.assign(Object.assign({}, a), { id: t.id }))
          ).catch((a) => n(a));
          return;
        }
        const o = this._handleSubscriptionMethods(t);
        if (o !== void 0) {
          o.then((a) =>
            r({ jsonrpc: "2.0", id: t.id, result: a.result })
          ).catch((a) => n(a));
          return;
        }
      } catch (s) {
        return n(s);
      }
      this._handleAsynchronousMethods(t)
        .then((s) => s && r(Object.assign(Object.assign({}, s), { id: t.id })))
        .catch((s) => n(s));
    });
  }
  _sendMultipleRequestsAsync(t) {
    return Promise.all(t.map((r) => this._sendRequestAsync(r)));
  }
  _handleSynchronousMethods(t) {
    const { method: r } = t,
      n = t.params || [];
    switch (r) {
      case "eth_accounts":
        return this._eth_accounts();
      case "eth_coinbase":
        return this._eth_coinbase();
      case "eth_uninstallFilter":
        return this._eth_uninstallFilter(n);
      case "net_version":
        return this._net_version();
      case "eth_chainId":
        return this._eth_chainId();
      default:
        return;
    }
  }
  async _handleAsynchronousMethods(t) {
    const { method: r } = t,
      n = t.params || [];
    switch (r) {
      case "eth_requestAccounts":
        return this._eth_requestAccounts();
      case "eth_sign":
        return this._eth_sign(n);
      case "eth_ecRecover":
        return this._eth_ecRecover(n);
      case "personal_sign":
        return this._personal_sign(n);
      case "personal_ecRecover":
        return this._personal_ecRecover(n);
      case "eth_signTransaction":
        return this._eth_signTransaction(n);
      case "eth_sendRawTransaction":
        return this._eth_sendRawTransaction(n);
      case "eth_sendTransaction":
        return this._eth_sendTransaction(n);
      case "eth_signTypedData_v1":
        return this._eth_signTypedData_v1(n);
      case "eth_signTypedData_v2":
        return this._throwUnsupportedMethodError();
      case "eth_signTypedData_v3":
        return this._eth_signTypedData_v3(n);
      case "eth_signTypedData_v4":
      case "eth_signTypedData":
        return this._eth_signTypedData_v4(n);
      case "cbWallet_arbitrary":
        return this._cbwallet_arbitrary(n);
      case "wallet_addEthereumChain":
        return this._wallet_addEthereumChain(n);
      case "wallet_switchEthereumChain":
        return this._wallet_switchEthereumChain(n);
      case "wallet_watchAsset":
        return this._wallet_watchAsset(n);
    }
    return (await this.initializeRelay())
      .makeEthereumJSONRPCRequest(t, this.jsonRpcUrl)
      .catch((i) => {
        var o;
        throw (
          ((i.code === Y.standardErrorCodes.rpc.methodNotFound ||
            i.code === Y.standardErrorCodes.rpc.methodNotSupported) &&
            ((o = this.diagnostic) === null ||
              o === void 0 ||
              o.log(Nr.EVENTS.METHOD_NOT_IMPLEMENTED, {
                method: t.method,
                sessionIdHash: this._relay
                  ? Mn.Session.hash(this._relay.session.id)
                  : void 0,
              })),
          i)
        );
      });
  }
  _handleAsynchronousFilterMethods(t) {
    const { method: r } = t,
      n = t.params || [];
    switch (r) {
      case "eth_newFilter":
        return this._eth_newFilter(n);
      case "eth_newBlockFilter":
        return this._eth_newBlockFilter();
      case "eth_newPendingTransactionFilter":
        return this._eth_newPendingTransactionFilter();
      case "eth_getFilterChanges":
        return this._eth_getFilterChanges(n);
      case "eth_getFilterLogs":
        return this._eth_getFilterLogs(n);
    }
  }
  _handleSubscriptionMethods(t) {
    switch (t.method) {
      case "eth_subscribe":
      case "eth_unsubscribe":
        return this._subscriptionManager.handleRequest(t);
    }
  }
  _isKnownAddress(t) {
    try {
      const r = (0, z.ensureAddressString)(t);
      return this._addresses
        .map((s) => (0, z.ensureAddressString)(s))
        .includes(r);
    } catch {}
    return !1;
  }
  _ensureKnownAddress(t) {
    var r;
    if (!this._isKnownAddress(t))
      throw (
        ((r = this.diagnostic) === null ||
          r === void 0 ||
          r.log(Nr.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED),
        new Error("Unknown Ethereum address"))
      );
  }
  _prepareTransactionParams(t) {
    const r = t.from
      ? (0, z.ensureAddressString)(t.from)
      : this.selectedAddress;
    if (!r) throw new Error("Ethereum address is unavailable");
    this._ensureKnownAddress(r);
    const n = t.to ? (0, z.ensureAddressString)(t.to) : null,
      s = t.value != null ? (0, z.ensureBN)(t.value) : new zv.default(0),
      i = t.data ? (0, z.ensureBuffer)(t.data) : Buffer.alloc(0),
      o = t.nonce != null ? (0, z.ensureIntNumber)(t.nonce) : null,
      a = t.gasPrice != null ? (0, z.ensureBN)(t.gasPrice) : null,
      c = t.maxFeePerGas != null ? (0, z.ensureBN)(t.maxFeePerGas) : null,
      l =
        t.maxPriorityFeePerGas != null
          ? (0, z.ensureBN)(t.maxPriorityFeePerGas)
          : null,
      d = t.gas != null ? (0, z.ensureBN)(t.gas) : null,
      u = t.chainId ? (0, z.ensureIntNumber)(t.chainId) : this.getChainId();
    return {
      fromAddress: r,
      toAddress: n,
      weiValue: s,
      data: i,
      nonce: o,
      gasPriceInWei: a,
      maxFeePerGas: c,
      maxPriorityFeePerGas: l,
      gasLimit: d,
      chainId: u,
    };
  }
  _isAuthorized() {
    return this._addresses.length > 0;
  }
  _requireAuthorization() {
    if (!this._isAuthorized()) throw Y.standardErrors.provider.unauthorized({});
  }
  _throwUnsupportedMethodError() {
    throw Y.standardErrors.provider.unsupportedMethod({});
  }
  async _signEthereumMessage(t, r, n, s) {
    this._ensureKnownAddress(r);
    try {
      const o = await (
        await this.initializeRelay()
      ).signEthereumMessage(t, r, n, s).promise;
      if ((0, Ne.isErrorResponse)(o)) throw new Error(o.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: o.result };
    } catch (i) {
      throw typeof i.message == "string" &&
        i.message.match(/(denied|rejected)/i)
        ? Y.standardErrors.provider.userRejectedRequest(
            "User denied message signature"
          )
        : i;
    }
  }
  async _ethereumAddressFromSignedMessage(t, r, n) {
    const i = await (
      await this.initializeRelay()
    ).ethereumAddressFromSignedMessage(t, r, n).promise;
    if ((0, Ne.isErrorResponse)(i)) throw new Error(i.errorMessage);
    return { jsonrpc: "2.0", id: 0, result: i.result };
  }
  _eth_accounts() {
    return [...this._addresses];
  }
  _eth_coinbase() {
    return this.selectedAddress || null;
  }
  _net_version() {
    return this.getChainId().toString(10);
  }
  _eth_chainId() {
    return (0, z.hexStringFromIntNumber)(this.getChainId());
  }
  getChainId() {
    const t = this._storage.getItem(pl);
    if (!t) return (0, z.ensureIntNumber)(this._chainIdFromOpts);
    const r = parseInt(t, 10);
    return (0, z.ensureIntNumber)(r);
  }
  async _eth_requestAccounts() {
    var t;
    if (
      ((t = this.diagnostic) === null ||
        t === void 0 ||
        t.log(Nr.EVENTS.ETH_ACCOUNTS_STATE, {
          method: "provider::_eth_requestAccounts",
          addresses_length: this._addresses.length,
          sessionIdHash: this._relay
            ? Mn.Session.hash(this._relay.session.id)
            : void 0,
        }),
      this._isAuthorized())
    )
      return Promise.resolve({
        jsonrpc: "2.0",
        id: 0,
        result: this._addresses,
      });
    let r;
    try {
      if (
        ((r = await (await this.initializeRelay()).requestEthereumAccounts()
          .promise),
        (0, Ne.isErrorResponse)(r))
      )
        throw new Error(r.errorMessage);
    } catch (n) {
      throw typeof n.message == "string" &&
        n.message.match(/(denied|rejected)/i)
        ? Y.standardErrors.provider.userRejectedRequest(
            "User denied account authorization"
          )
        : n;
    }
    if (!r.result) throw new Error("accounts received is empty");
    return (
      this._setAddresses(r.result),
      this.isCoinbaseBrowser ||
        (await this.switchEthereumChain(this.getChainId())),
      { jsonrpc: "2.0", id: 0, result: this._addresses }
    );
  }
  _eth_sign(t) {
    this._requireAuthorization();
    const r = (0, z.ensureAddressString)(t[0]),
      n = (0, z.ensureBuffer)(t[1]);
    return this._signEthereumMessage(n, r, !1);
  }
  _eth_ecRecover(t) {
    const r = (0, z.ensureBuffer)(t[0]),
      n = (0, z.ensureBuffer)(t[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !1);
  }
  _personal_sign(t) {
    this._requireAuthorization();
    const r = (0, z.ensureBuffer)(t[0]),
      n = (0, z.ensureAddressString)(t[1]);
    return this._signEthereumMessage(r, n, !0);
  }
  _personal_ecRecover(t) {
    const r = (0, z.ensureBuffer)(t[0]),
      n = (0, z.ensureBuffer)(t[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !0);
  }
  async _eth_signTransaction(t) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(t[0] || {});
    try {
      const s = await (await this.initializeRelay()).signEthereumTransaction(r)
        .promise;
      if ((0, Ne.isErrorResponse)(s)) throw new Error(s.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: s.result };
    } catch (n) {
      throw typeof n.message == "string" &&
        n.message.match(/(denied|rejected)/i)
        ? Y.standardErrors.provider.userRejectedRequest(
            "User denied transaction signature"
          )
        : n;
    }
  }
  async _eth_sendRawTransaction(t) {
    const r = (0, z.ensureBuffer)(t[0]),
      s = await (
        await this.initializeRelay()
      ).submitEthereumTransaction(r, this.getChainId()).promise;
    if ((0, Ne.isErrorResponse)(s)) throw new Error(s.errorMessage);
    return { jsonrpc: "2.0", id: 0, result: s.result };
  }
  async _eth_sendTransaction(t) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(t[0] || {});
    try {
      const s = await (
        await this.initializeRelay()
      ).signAndSubmitEthereumTransaction(r).promise;
      if ((0, Ne.isErrorResponse)(s)) throw new Error(s.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: s.result };
    } catch (n) {
      throw typeof n.message == "string" &&
        n.message.match(/(denied|rejected)/i)
        ? Y.standardErrors.provider.userRejectedRequest(
            "User denied transaction signature"
          )
        : n;
    }
  }
  async _eth_signTypedData_v1(t) {
    this._requireAuthorization();
    const r = (0, z.ensureParsedJSONObject)(t[0]),
      n = (0, z.ensureAddressString)(t[1]);
    this._ensureKnownAddress(n);
    const s = _o.default.hashForSignTypedDataLegacy({ data: r }),
      i = JSON.stringify(r, null, 2);
    return this._signEthereumMessage(s, n, !1, i);
  }
  async _eth_signTypedData_v3(t) {
    this._requireAuthorization();
    const r = (0, z.ensureAddressString)(t[0]),
      n = (0, z.ensureParsedJSONObject)(t[1]);
    this._ensureKnownAddress(r);
    const s = _o.default.hashForSignTypedData_v3({ data: n }),
      i = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(s, r, !1, i);
  }
  async _eth_signTypedData_v4(t) {
    this._requireAuthorization();
    const r = (0, z.ensureAddressString)(t[0]),
      n = (0, z.ensureParsedJSONObject)(t[1]);
    this._ensureKnownAddress(r);
    const s = _o.default.hashForSignTypedData_v4({ data: n }),
      i = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(s, r, !1, i);
  }
  async _cbwallet_arbitrary(t) {
    const r = t[0],
      n = t[1];
    if (typeof n != "string") throw new Error("parameter must be a string");
    if (typeof r != "object" || r === null)
      throw new Error("parameter must be an object");
    return { jsonrpc: "2.0", id: 0, result: await this.genericRequest(r, n) };
  }
  async _wallet_addEthereumChain(t) {
    var r, n, s, i;
    const o = t[0];
    if (((r = o.rpcUrls) === null || r === void 0 ? void 0 : r.length) === 0)
      return {
        jsonrpc: "2.0",
        id: 0,
        error: { code: 2, message: "please pass in at least 1 rpcUrl" },
      };
    if (!o.chainName || o.chainName.trim() === "")
      throw Y.standardErrors.rpc.invalidParams("chainName is a required field");
    if (!o.nativeCurrency)
      throw Y.standardErrors.rpc.invalidParams(
        "nativeCurrency is a required field"
      );
    const a = parseInt(o.chainId, 16);
    return (await this.addEthereumChain(
      a,
      (n = o.rpcUrls) !== null && n !== void 0 ? n : [],
      (s = o.blockExplorerUrls) !== null && s !== void 0 ? s : [],
      o.chainName,
      (i = o.iconUrls) !== null && i !== void 0 ? i : [],
      o.nativeCurrency
    ))
      ? { jsonrpc: "2.0", id: 0, result: null }
      : {
          jsonrpc: "2.0",
          id: 0,
          error: { code: 2, message: "unable to add ethereum chain" },
        };
  }
  async _wallet_switchEthereumChain(t) {
    const r = t[0];
    return (
      await this.switchEthereumChain(parseInt(r.chainId, 16)),
      { jsonrpc: "2.0", id: 0, result: null }
    );
  }
  async _wallet_watchAsset(t) {
    const r = Array.isArray(t) ? t[0] : t;
    if (!r.type) throw Y.standardErrors.rpc.invalidParams("Type is required");
    if (r?.type !== "ERC20")
      throw Y.standardErrors.rpc.invalidParams(
        `Asset of type '${r.type}' is not supported`
      );
    if (!r?.options)
      throw Y.standardErrors.rpc.invalidParams("Options are required");
    if (!r?.options.address)
      throw Y.standardErrors.rpc.invalidParams("Address is required");
    const n = this.getChainId(),
      { address: s, symbol: i, image: o, decimals: a } = r.options;
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this.watchAsset(r.type, s, i, a, o, n),
    };
  }
  _eth_uninstallFilter(t) {
    const r = (0, z.ensureHexString)(t[0]);
    return this._filterPolyfill.uninstallFilter(r);
  }
  async _eth_newFilter(t) {
    const r = t[0];
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this._filterPolyfill.newFilter(r),
    };
  }
  async _eth_newBlockFilter() {
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this._filterPolyfill.newBlockFilter(),
    };
  }
  async _eth_newPendingTransactionFilter() {
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this._filterPolyfill.newPendingTransactionFilter(),
    };
  }
  _eth_getFilterChanges(t) {
    const r = (0, z.ensureHexString)(t[0]);
    return this._filterPolyfill.getFilterChanges(r);
  }
  _eth_getFilterLogs(t) {
    const r = (0, z.ensureHexString)(t[0]);
    return this._filterPolyfill.getFilterLogs(r);
  }
  initializeRelay() {
    return this._relay
      ? Promise.resolve(this._relay)
      : this._relayProvider().then(
          (t) => (
            t.setAccountsCallback((r, n) => this._setAddresses(r, n)),
            t.setChainCallback((r, n) => {
              this.updateProviderInfo(n, parseInt(r, 10));
            }),
            t.setDappDefaultChainCallback(this._chainIdFromOpts),
            (this._relay = t),
            t
          )
        );
  }
}
ar.CoinbaseWalletProvider = Kv;
var Hs = {};
Object.defineProperty(Hs, "__esModule", { value: !0 });
Hs.RelayEventManager = void 0;
const Qv = P;
class Yv {
  constructor() {
    (this._nextRequestId = 0), (this.callbacks = new Map());
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const t = this._nextRequestId,
      r = (0, Qv.prepend0x)(t.toString(16));
    return this.callbacks.get(r) && this.callbacks.delete(r), t;
  }
}
Hs.RelayEventManager = Yv;
Object.defineProperty($r, "__esModule", { value: !0 });
$r.CoinbaseWalletSDK = void 0;
const Xv = zn,
  ew = qn,
  _l = P,
  tw = Qn,
  rw = ar,
  nw = Jr,
  sw = on,
  iw = Hs,
  ow = en,
  aw = Zr,
  th = mr;
class Us {
  constructor(t) {
    var r, n, s;
    (this._appName = ""),
      (this._appLogoUrl = null),
      (this._relay = null),
      (this._relayEventManager = null);
    const i = t.linkAPIUrl || ew.LINK_API_URL;
    typeof t.overrideIsMetaMask > "u"
      ? (this._overrideIsMetaMask = !1)
      : (this._overrideIsMetaMask = t.overrideIsMetaMask),
      (this._overrideIsCoinbaseWallet =
        (r = t.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0),
      (this._overrideIsCoinbaseBrowser =
        (n = t.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1),
      (this._diagnosticLogger = t.diagnosticLogger),
      (this._reloadOnDisconnect =
        (s = t.reloadOnDisconnect) !== null && s !== void 0 ? s : !0);
    const o = new URL(i),
      a = `${o.protocol}//${o.host}`;
    if (
      ((this._storage = new tw.ScopedLocalStorage(`-walletlink:${a}`)),
      this._storage.setItem("version", Us.VERSION),
      this.walletExtension || this.coinbaseBrowser)
    )
      return;
    this._relayEventManager = new iw.RelayEventManager();
    const c = (0, _l.isMobileWeb)(),
      l =
        t.uiConstructor ||
        ((u) => (c ? new sw.MobileRelayUI(u) : new ow.WalletLinkRelayUI(u))),
      d = {
        linkAPIUrl: i,
        version: th.LIB_VERSION,
        darkMode: !!t.darkMode,
        uiConstructor: l,
        storage: this._storage,
        relayEventManager: this._relayEventManager,
        diagnosticLogger: this._diagnosticLogger,
        reloadOnDisconnect: this._reloadOnDisconnect,
        enableMobileWalletLink: t.enableMobileWalletLink,
      };
    (this._relay = c ? new nw.MobileRelay(d) : new aw.WalletLinkRelay(d)),
      this.setAppInfo(t.appName, t.appLogoUrl),
      !t.headlessMode && this._relay.attachUI();
  }
  makeWeb3Provider(t = "", r = 1) {
    const n = this.walletExtension;
    if (n)
      return (
        this.isCipherProvider(n) || n.setProviderInfo(t, r),
        this._reloadOnDisconnect === !1 &&
          typeof n.disableReloadOnDisconnect == "function" &&
          n.disableReloadOnDisconnect(),
        n
      );
    const s = this.coinbaseBrowser;
    if (s) return s;
    const i = this._relay;
    if (!i || !this._relayEventManager || !this._storage)
      throw new Error("Relay not initialized, should never happen");
    return (
      t || i.setConnectDisabled(!0),
      new rw.CoinbaseWalletProvider({
        relayProvider: () => Promise.resolve(i),
        relayEventManager: this._relayEventManager,
        storage: this._storage,
        jsonRpcUrl: t,
        chainId: r,
        qrUrl: this.getQrUrl(),
        diagnosticLogger: this._diagnosticLogger,
        overrideIsMetaMask: this._overrideIsMetaMask,
        overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
        overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser,
      })
    );
  }
  setAppInfo(t, r) {
    var n;
    (this._appName = t || "DApp"),
      (this._appLogoUrl = r || (0, _l.getFavicon)());
    const s = this.walletExtension;
    s
      ? this.isCipherProvider(s) ||
        s.setAppInfo(this._appName, this._appLogoUrl)
      : (n = this._relay) === null ||
        n === void 0 ||
        n.setAppInfo(this._appName, this._appLogoUrl);
  }
  disconnect() {
    var t;
    const r = this === null || this === void 0 ? void 0 : this.walletExtension;
    r
      ? r.close()
      : (t = this._relay) === null || t === void 0 || t.resetAndReload();
  }
  getQrUrl() {
    var t, r;
    return (r =
      (t = this._relay) === null || t === void 0
        ? void 0
        : t.getQRCodeUrl()) !== null && r !== void 0
      ? r
      : null;
  }
  getCoinbaseWalletLogo(t, r = 240) {
    return (0, Xv.walletLogo)(t, r);
  }
  get walletExtension() {
    var t;
    return (t = window.coinbaseWalletExtension) !== null && t !== void 0
      ? t
      : window.walletLinkExtension;
  }
  get coinbaseBrowser() {
    var t, r;
    try {
      const n =
        (t = window.ethereum) !== null && t !== void 0
          ? t
          : (r = window.top) === null || r === void 0
          ? void 0
          : r.ethereum;
      return n && "isCoinbaseBrowser" in n && n.isCoinbaseBrowser ? n : void 0;
    } catch {
      return;
    }
  }
  isCipherProvider(t) {
    return typeof t.isCipher == "boolean" && t.isCipher;
  }
}
$r.CoinbaseWalletSDK = Us;
Us.VERSION = th.LIB_VERSION;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.CoinbaseWalletProvider = e.CoinbaseWalletSDK = void 0);
  const t = $r,
    r = ar;
  var n = $r;
  Object.defineProperty(e, "CoinbaseWalletSDK", {
    enumerable: !0,
    get: function () {
      return n.CoinbaseWalletSDK;
    },
  });
  var s = ar;
  Object.defineProperty(e, "CoinbaseWalletProvider", {
    enumerable: !0,
    get: function () {
      return s.CoinbaseWalletProvider;
    },
  }),
    (e.default = t.CoinbaseWalletSDK),
    typeof window < "u" &&
      ((window.CoinbaseWalletSDK = t.CoinbaseWalletSDK),
      (window.CoinbaseWalletProvider = r.CoinbaseWalletProvider),
      (window.WalletLink = t.CoinbaseWalletSDK),
      (window.WalletLinkProvider = r.CoinbaseWalletProvider));
})(Mo);
const cw = nh(Mo),
  ww = sh({ __proto__: null, default: cw }, [Mo]);
export { ww as i };
