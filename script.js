const $ = id => document.getElementById(id);
const BAB = ['Anatomy 1', 'Anatomy 2', 'Radiology 1', 'Radiology 2'];

// ---------- penilaian ----------
// Singkatan dan padanan disamakan: "Arteri renalis" = "A. renalis" = "renal artery" (lewat alias).
const SAMA = {arteri: 'a', arteria: 'a', artery: 'a', aa: 'a', vena: 'v', vein: 'v', vv: 'v',
  musculus: 'm', muskulus: 'm', muscle: 'm', otot: 'm', nervus: 'n', nerve: 'n', saraf: 'n',
  glandula: 'gl', kelenjar: 'gl', gland: 'gl'};
const norm = s => s.toLowerCase().normalize('NFD').replace(/[^a-z0-9\s]/g, ' ')
  .split(/\s+/).filter(Boolean).map(k => SAMA[k] || k).join(' ');

function jarak(a, b) { // Levenshtein
  let baris = Array.from({length: b.length + 1}, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const baru = [i];
    for (let j = 1; j <= b.length; j++)
      baru[j] = Math.min(baris[j] + 1, baru[j - 1] + 1, baris[j - 1] + (a[i - 1] !== b[j - 1]));
    baris = baru;
  }
  return baris[b.length];
}
const kunci = q => [q.jawaban, ...q.alias].map(norm);
const terdekat = (teks, q) => Math.min(...kunci(q).map(k => jarak(teks, k)));

function benar(input, q) {
  const teks = norm(input), d = terdekat(teks, q);
  if (d === 0) return true;
  const batas = teks.length < 6 ? 0 : teks.length < 12 ? 1 : 2; // toleransi salah ketik
  if (d > batas) return false;
  // salah ketik tidak boleh sama dekat/lebih dekat ke jawaban soal lain ("V. renalis" bukan "A. renalis")
  // kunci yang juga dimiliki soal ini (struktur sama di gambar lain) tidak dihitung sebagai "jawaban lain"
  const milik = new Set(kunci(q));
  return !DATA.some(o => kunci(o).some(k => !milik.has(k) && jarak(teks, k) <= d));
}

// ---------- kuis ----------
let antrean = [], no = 0, jawabku = [], keliru = []; // jawabku[i] = {input, ok} untuk soal ke-i
const skor = () => jawabku.filter(j => j && j.ok).length;

function kotak(m, kelas) {
  const el = document.createElement('div');
  el.className = 'tutup ' + (kelas || '');
  el.style.cssText = `left:${m.x}%;top:${m.y}%;width:${m.w}%;height:${m.h}%`;
  return el;
}
function tampil(nama) {
  for (const s of ['mulai', 'kuis', 'akhir', 'edit']) $(s).hidden = s !== nama;
}
function mulai(soal) {
  antrean = soal; no = 0; jawabku = [];
  tampil('kuis'); soalBerikut();
}
function soalBerikut() {
  if (no >= antrean.length) return selesai();
  const q = antrean[no], p = $('panggung');
  p.querySelectorAll('.tutup').forEach(e => e.remove());
  $('gambar').src = q.gambar;
  for (const m of q.masks) p.append(kotak(m, m === q.target ? 'target' : ''));
  $('tanya').textContent = q.tanya || 'Struktur apa yang ditunjuk tanda ?';
  $('umpan').textContent = '';
  $('jawab').value = ''; $('jawab').disabled = $('periksa').disabled = false;
  $('sebelum').disabled = no === 0;
  $('lanjut').textContent = no === antrean.length - 1 ? 'Selesai' : 'Berikutnya';
  p.querySelector('.target').scrollIntoView({block: 'nearest', inline: 'center'});
  if (jawabku[no]) umpan(); // soal yang sudah dijawab: tampilkan lagi koreksinya
  else { $('status').textContent = `Soal ${no + 1}/${antrean.length} · Skor ${skor()}`; $('jawab').focus({preventScroll: true}); }
}
function teks(tag, isi, induk) {
  const el = document.createElement(tag); el.textContent = isi; induk.append(el); return el;
}
function periksa(e) {
  e.preventDefault();
  const input = $('jawab').value.trim();
  jawabku[no] = {input, ok: benar(input, antrean[no])};
  umpan();
  $('lanjut').focus();
}
function umpan() {
  const q = antrean[no], {input, ok} = jawabku[no], u = $('umpan');
  u.textContent = ''; u.className = ok ? 'benar' : 'keliru';
  $('jawab').value = input; $('jawab').disabled = $('periksa').disabled = true;
  $('panggung').querySelector('.target').classList.add('buka'); // buka label struktur itu
  if (ok) {
    teks('p', `Benar: ${q.jawaban}`, u).className = 'vonis';
  } else {
    teks('p', 'Belum tepat', u).className = 'vonis';
    teks('p', `Jawabanmu: ${input}`, u);
    teks('p', `Jawaban yang benar: ${q.jawaban}`, u).style.fontWeight = 700;
    const a = teks('div', '', u); a.className = 'sumber';
    teks('h3', `Pocket Book hlm. ${q.halaman}`, a);
    teks('p', q.penjelasan_pocketbook, a);
    const b = teks('div', '', u), s = q.sumber_kedua; b.className = 'sumber';
    teks('h3', 'Sumber kedua', b);
    teks('p', s.isi, b);
    const c = teks('cite', s.rujukan + ' ', b);
    if (s.url) { const l = teks('a', s.url, c); l.href = s.url; l.target = '_blank'; l.rel = 'noopener'; }
  }
  $('status').textContent = `Soal ${no + 1}/${antrean.length} · Skor ${skor()}`;
}
function selesai() {
  tampil('akhir');
  $('status').textContent = '';
  $('skorAkhir').textContent = `Skor akhir: ${skor()} dari ${antrean.length}`;
  $('salah').textContent = '';
  keliru = antrean.filter((q, i) => !(jawabku[i] && jawabku[i].ok)); // salah + dilewati
  antrean.forEach((q, i) => { if (keliru.includes(q)) teks('li', `${q.jawaban} (hlm. ${q.halaman})${jawabku[i] ? '' : ', belum dijawab'}`, $('salah')); });
  $('ulangi').hidden = !keliru.length;
  if (!keliru.length) teks('li', 'Semua benar.', $('salah')).style.listStyle = 'none';
}

// ---------- mode edit (?edit=1) ----------
function modeEdit() {
  tampil('edit');
  const p = $('panggungEdit'), pilih = $('pilihGambar');
  const gambar = [...new Map(DATA.map(q => [q.gambar, q.masks]))];
  gambar.forEach(([g], i) => pilih.add(new Option(g, i)));
  const pct = (n, total) => +(n / total * 100).toFixed(1);
  const tulis = () => {
    const r = p.getBoundingClientRect();
    $('koordinat').value = [...p.querySelectorAll('.tutup')].map((el, i) => {
      const k = el.getBoundingClientRect();
      return `    {x:${pct(k.left - r.left, r.width)}, y:${pct(k.top - r.top, r.height)}, w:${pct(k.width, r.width)}, h:${pct(k.height, r.height)}}, // ${i}`;
    }).join('\n');
  };
  const pasang = (m, i) => {
    const el = kotak(m); el.textContent = i; p.append(el);
    el.onpointerdown = e => {
      const k = el.getBoundingClientRect();
      if (e.clientX > k.right - 18 && e.clientY > k.bottom - 18) return; // sudut = ubah ukuran (bawaan CSS resize)
      const r = p.getBoundingClientRect(), dx = e.clientX - k.left, dy = e.clientY - k.top;
      el.setPointerCapture(e.pointerId);
      el.onpointermove = g => {
        el.style.left = pct(g.clientX - dx - r.left, r.width) + '%';
        el.style.top = pct(g.clientY - dy - r.top, r.height) + '%';
      };
      el.onpointerup = () => { el.onpointermove = null; tulis(); };
    };
  };
  const muat = () => {
    p.querySelectorAll('.tutup').forEach(e => e.remove());
    const [g, masks] = gambar[pilih.value];
    $('gambarEdit').src = g;
    $('gambarEdit').onload = () => { masks.forEach(pasang); tulis(); };
  };
  pilih.onchange = muat;
  $('tambah').onclick = () => { pasang({x: 45, y: 45, w: 10, h: 5}, p.querySelectorAll('.tutup').length); tulis(); };
  document.addEventListener('pointerup', tulis); // menangkap selesai-ubah-ukuran
  muat();
}

// ---------- musik latar: file lokal di folder musik/ (tambah lagu = tambah nama file di LAGU) ----------
const LAGU = ['musik/lagu1.mp3', 'musik/lagu2.mp3'];
let lagu = 0;
const audio = $('audio');
audio.src = LAGU[0]; // preload="none": file baru diunduh saat tombol ditekan
audio.onplay = audio.onpause = () => $('musik').textContent = audio.paused ? 'Putar musik' : 'Jeda musik';
// play() gagal = file belum ada atau format tidak didukung (AbortError = dijeda saat memuat, abaikan)
const putar = () => audio.play().catch(e => { if (e.name !== 'AbortError') $('musik').textContent = `File ${LAGU[lagu]} belum ada`; });
audio.onended = () => { lagu = (lagu + 1) % LAGU.length; audio.src = LAGU[lagu]; putar(); };
$('musik').onclick = () => audio.paused ? putar() : audio.pause();

// ---------- awal ----------
for (const b of [...BAB, 'Semua']) {
  const soal = b === 'Semua' ? DATA : DATA.filter(q => q.bab === b);
  const t = teks('button', b, $('bab'));
  teks('small', soal.length ? `${soal.length} soal` : 'belum tersedia', t);
  t.disabled = !soal.length;
  t.onclick = () => mulai(soal);
}
$('form').onsubmit = periksa;
$('lanjut').onclick = () => { no++; soalBerikut(); };
$('sebelum').onclick = () => { no--; soalBerikut(); };
$('ulangi').onclick = () => mulai(keliru);
$('kembali').onclick = () => { $('status').textContent = ''; tampil('mulai'); };
if (new URLSearchParams(location.search).has('edit')) modeEdit();
