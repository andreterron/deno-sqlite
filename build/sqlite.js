// TODO: Remove this once https://github.com/denoland/deno/issues/3521
//       is fixed/ addressed.

function decodeHex(hex) {
  let bytes = new Uint8Array(hex.length/2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i/2] = parseInt(hex.substr(i,2),16);
  }
  return bytes;
}

const { instance } = await WebAssembly.instantiate(decodeHex(wasmHex));
export default instance.exports;