// Cek data + penilaian tanpa browser. Jalankan: node cek.js  (keluar 1 kalau ada yang salah)
const fs = require('fs'), vm = require('vm');
const ctx = vm.createContext({});
// hanya bagian penilaian dari script.js (sebelum bagian kuis yang butuh DOM)
vm.runInContext(fs.readFileSync('data.js', 'utf8') + fs.readFileSync('script.js', 'utf8').split('// ---------- kuis')[0] +
  ';globalThis.T = {DATA, benar, norm, kunci, LAGU: typeof LAGU === "undefined" ? [] : LAGU}', ctx);
const {DATA, benar, norm, kunci} = ctx.T, salah = [];
const cek = (ok, pesan) => ok || salah.push(pesan);

cek(new Set(DATA.map(q => q.id)).size === DATA.length, 'id soal ganda');
for (const q of DATA) {
  cek(q.masks.includes(q.target), `${q.id}: target bukan salah satu masks`);
  cek(fs.existsSync(q.gambar), `${q.id}: gambar ${q.gambar} tidak ada`);
  for (const m of q.masks) cek([m.x, m.y, m.w, m.h].every(Number.isFinite) && m.x >= 0 && m.y >= 0 && m.w > 0 && m.h > 0 && m.x + m.w <= 100.5 && m.y + m.h <= 100.5, `${q.id}: koordinat penutup di luar gambar`);
  cek(q.penjelasan_pocketbook && q.sumber_kedua.isi && q.sumber_kedua.rujukan, `${q.id}: sumber kosong`);
  cek(!q.sumber_kedua.url || /^https:\/\/(www\.ncbi\.nlm\.nih\.gov|pmc\.ncbi\.nlm\.nih\.gov)\//.test(q.sumber_kedua.url), `${q.id}: url sumber bukan https NCBI`);
  for (const k of [q.jawaban, ...q.alias]) cek(benar(k, q), `${q.id}: kunci sendiri ditolak: ${k}`);
  // di gambar yang sama, jawaban struktur lain tidak boleh diterima
  for (const o of DATA) if (o.gambar === q.gambar && o.target !== q.target)
    for (const k of kunci(o)) cek(!benar(k, q) || kunci(q).includes(k) && o.jawaban === q.jawaban, `${q.id}: menerima jawaban ${o.id}: "${k}"`);
}
// masukan aneh tidak boleh melempar error atau dianggap benar
for (const s of ['', '   ', '???', 'constructor', 'toString', '__proto__', 'hasOwnProperty', '<img src=x onerror=alert(1)>', 'é'.repeat(5000), '\u0000', '𝓪𝓫𝓬', 'a'.repeat(20000)])
  for (const q of [DATA[0], DATA[60], DATA[121]]) {
    try { cek(benar(s, q) === false, `masukan aneh diterima: ${JSON.stringify(s.slice(0, 30))}`); }
    catch (e) { salah.push(`error pada ${JSON.stringify(s.slice(0, 30))}: ${e.message}`); }
  }
cek(norm('toString constructor') === 'tostring constructor', 'norm merusak kata seperti "constructor"');

// HTML dan aset harus selalu sepasang: ketiga aset memakai ?v= yang sama
const v = [...fs.readFileSync('index.html', 'utf8').matchAll(/(?:style\.css|data\.js|script\.js)\?v=(\d+)/g)].map(m => m[1]);
cek(v.length === 3 && new Set(v).size === 1, 'index.html: ?v= pada style.css, data.js, script.js harus ada dan sama');

console.log(salah.length ? salah.join('\n') : `OK: ${DATA.length} soal`);
process.exit(salah.length ? 1 : 0);
