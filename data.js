// data.js: semua soal. Tambah bab baru cukup dengan menambah isi M dan pemanggilan soal() di bawah.
// Koordinat dalam PERSEN terhadap ukuran gambar. Rapikan lewat index.html?edit=1.

// M: semua penutup label per gambar (kotak label pocket book + teks cetak yang membocorkan jawaban).
const M = {
  'p04-topografi-ren': [
    {x:25.3, y:17.9, w:12.9, h:5.7}, // 0 Fascia renalis
    {x:39.8, y:30.6, w:16.8, h:8.7}, // 1 Glandula suprarenalis dextra
    {x:81.4, y:39.9, w:16.4, h:8.7}, // 2 Glandula suprarenalis sinistra
    {x:37.6, y:46.0, w:13.3, h:5.5}, // 3 Capsula fibrosa
    {x:42.8, y:54.0, w:8.9, h:12.9}, // 4 Capsula adiposa perirenale
    {x:40.9, y:78.8, w:10.8, h:5.6}, // 5 Ren dextra
    {x:87.4, y:81.2, w:11.4, h:5.6}, // 6 Ren sinistra
    {x:1.8, y:91.9, w:25.6, h:5.4},  // 7 Capsula adiposum pararenale
    {x:61.3, y:18.2, w:8.6, h:2.8},  // 8 Right adrenal gland (cetak)
    {x:71.4, y:18.2, w:8.2, h:2.8},  // 9 Left adrenal gland (cetak)
    {x:15.9, y:53.3, w:3.2, h:4.4},  // 10 Renal fascia (cetak)
    {x:21.7, y:52.4, w:6, h:2.5},    // 11 Renal capsule (cetak)
    {x:23, y:55, w:3.5, h:2.5},      // 12 Kidney (cetak)
    {x:4, y:69.4, w:6.4, h:2.5},     // 13 Perinephric fat (cetak)
    {x:4, y:75.1, w:6.4, h:2.5},     // 14 Paranephric fat (cetak)
  ],
  'p04-fascia-kadaver': [
    {x:37.1, y:11.6, w:20.6, h:11.8}, // 0 Fascia renalis
    {x:33.2, y:61.8, w:21.6, h:11.6}, // 1 Capsula fibrosa
    {x:38.1, y:86.9, w:36.1, h:11.6}, // 2 Capsula adiposa perirenale
  ],
  'p06-vasa-renalis': [
    {x:27.4, y:4.6, w:13.1, h:5.2},  // 0 A. renalis sinistra
    {x:11.4, y:12.1, w:13.0, h:5.2}, // 1 A. renalis dextra
    {x:40.9, y:12.9, w:12.9, h:5.2}, // 2 V. renalis sinistra
    {x:85.9, y:86.0, w:12.9, h:5.2}, // 3 V. renalis sinistra (kadaver)
    {x:4.8, y:88.5, w:12.8, h:5.2},  // 4 V. renalis dextra
    {x:1.8, y:44.3, w:8.6, h:5.6},   // 5 A. renalis dextra (cetak)
    {x:48.8, y:40.3, w:8.6, h:6.3},  // 6 A./V. renalis sinistra (cetak)
    {x:48.8, y:31.8, w:10.6, h:3.6}, // 7 v. renalis sinistra (cetak)
  ],
  'p07-otot': [
    {x:1.3, y:16.9, w:11.5, h:10.5},  // 0 M. Quadratus lumborum
    {x:88.3, y:41.1, w:11.4, h:10.6}, // 1 M. Quadratus lumborum (kanan)
    {x:48.2, y:48.3, w:12.5, h:10.5}, // 2 M. Transversus abdominis
    {x:1.8, y:50.3, w:12.4, h:6.3},   // 3 M. Psoas major
    {x:47.2, y:65.2, w:12.4, h:6.4},  // 4 M. Psoas major (kanan)
  ],
  'p07-origo-aponeurosis': [
    {x:79.2, y:76.3, w:18.5, h:8.5}, // 0 Aponeurotic origin of transversus abdominis
    {x:1, y:3.5, w:53.5, h:9},       // 1 Judul gambar
  ],
  'p08-nervus': [
    {x:8.1, y:46.9, w:12.4, h:5.1},  // 0 N. Subcostalis
    {x:2.0, y:61.6, w:16.2, h:5.1},  // 1 N. Iliohypogastricus
    {x:5.4, y:73.0, w:12.4, h:5.1},  // 2 N. Ilioinguinalis
    {x:59, y:18, w:3.8, h:2.2},      // 3 Subcostal (foto)
    {x:63.4, y:19.6, w:5.2, h:2.2},  // 4 Iliohypogastric (foto)
    {x:69, y:16, w:4.6, h:2.2},      // 5 Ilioinguinal (foto)
    {x:58.8, y:52.6, w:7.4, h:2.4},  // 6 Subcostal nerve (cetak)
    {x:88.6, y:55, w:9.8, h:2.5},    // 7 Iliohypogastric nerve (cetak)
    {x:87.6, y:59.3, w:8.4, h:2.5},  // 8 Ilio-inguinal nerve (cetak)
  ],
  'p08-ureter': [
    {x:46.4, y:40.7, w:7.6, h:11.6}, // 0 Ureter
  ],
  'p09-vasa-gonadal': [
    {x:51.9, y:14.6, w:20.7, h:5.6}, // 0 A. Ovarica/testicularis
    {x:24.4, y:92.9, w:26.9, h:5.6}, // 1 V. Ovarica/testicularis sinistra
    {x:1.2, y:24.3, w:7.6, h:7},     // 2 A./V. testicularis/ovarica dextra (cetak)
    {x:1, y:34, w:7.8, h:5},         // 3 Rr. ureterici (cetak)
    {x:40, y:26.3, w:7.6, h:6.6},    // 4 V./A. testicularis/ovarica sinistra (cetak)
    {x:58, y:86, w:10.8, h:7.6},     // 5 V. testicularis/ovarica dextra (skema)
    {x:69.4, y:86, w:10.8, h:7.6},   // 6 V. testicularis/ovarica sinistra (skema)
  ],
  'p10-eksternal-ren': [
    {x:0.4, y:19.6, w:14.2, h:7.4},  // 0 A. Renalis
    {x:0.7, y:33.2, w:13.7, h:7.4},  // 1 V. Renalis
    {x:2.8, y:49.7, w:15.6, h:7.4},  // 2 Hilum renis
    {x:2.8, y:64.3, w:9.5, h:7.3},   // 3 Ureter
    {x:73.3, y:78.3, w:26.3, h:7.4}, // 4 Capsula fibrosa renis
    {x:57.8, y:0.8, w:12, h:4.4},    // 5 Ren sinistra (teks)
  ],
  'p11-internal-ren': [
    {x:71.0, y:7.3, w:15.2, h:6.7},  // 0 Cortex renis
    {x:6.1, y:19.0, w:16.4, h:6.7},  // 1 Medulla renis
    {x:73.1, y:26.3, w:15.7, h:6.7}, // 2 Sinus renalis
    {x:6.1, y:44.2, w:16.1, h:6.7},  // 3 Pelvis renalis
    {x:75.5, y:50.7, w:17.0, h:6.7}, // 4 Papilla renalis
    {x:0.5, y:62.4, w:27.7, h:6.7},  // 5 Calices renales majores
    {x:75.1, y:62.9, w:16.6, h:6.7}, // 6 Pyramis renis
    {x:0.5, y:76.7, w:27.8, h:6.7},  // 7 Calices renales minores
    {x:72.6, y:77.0, w:26.9, h:6.7}, // 8 Basis pyramidis renalis
    {x:73.4, y:91.0, w:21.6, h:6.7}, // 9 Columnae renales
  ],
};

// R: rujukan sumber kedua (semua sudah dibuka dan dicek).
const SP = ' StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing.';
const R = {
  ginjal:   {rujukan: 'Garza FA, Leslie SW. Anatomy, Abdomen and Pelvis: Kidneys.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK482385/'},
  perinef:  {rujukan: 'Mitreski G, Sutherland T. Radiological diagnosis of perinephric pathology: pictorial essay 2015. Insights Imaging. 2017;8(1):155-169.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5265200/'},
  adrenal:  {rujukan: 'Megha R, Wehrle CJ, Kashyap S, Leslie SW. Anatomy, Abdomen and Pelvis: Adrenal Glands (Suprarenal Glands).' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK482264/'},
  arteri:   {rujukan: 'Leslie SW, Sajjad H. Anatomy, Abdomen and Pelvis, Renal Artery.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK459158/'},
  arteriPB: {rujukan: 'Wright N, Burns B. Anatomy, Abdomen and Pelvis, Posterior Abdominal Wall Arteries.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK532972/'},
  vena:     {rujukan: 'Bowdino CS, Owens J, Shaw PM. Anatomy, Abdomen and Pelvis, Renal Veins.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK538298/'},
  psoas:    {rujukan: 'Siccardi MA, Tariq MA, Valle C. Anatomy, Bony Pelvis and Lower Limb: Psoas Major.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK535418/'},
  ql:       {rujukan: 'Bordoni B, Sina RE, Varacallo MA. Anatomy, Abdomen and Pelvis, Quadratus Lumborum.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK535407/'},
  dinding:  {rujukan: 'Flynn W, Vickerton P. Anatomy, Abdomen and Pelvis: Abdominal Wall.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK551649/'},
  saraf:    {rujukan: 'Kudzinskas A, Cunha B. Anatomy, Anterolateral Abdominal Wall Nerves.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK556034/'},
  ureter:   {rujukan: 'Lescay HA, Jiang J, Leslie SW, Tuma F. Anatomy, Abdomen and Pelvis Ureter.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK532980/'},
  testis:   {rujukan: 'Tiwana M, Leslie S. Anatomy, Abdomen and Pelvis: Testes.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK470201/'},
};

const DATA = [];
// soal(bab, gambar, halaman, indeks penutup yang ditanya, jawaban, alias, penjelasan pocket book, isi sumber kedua, rujukan)
function soal(bab, gambar, halaman, i, jawaban, alias, penjelasan_pocketbook, isi, ref) {
  DATA.push({
    id: bab.toLowerCase().replace(/\W+/g, '') + '-' + String(DATA.length + 1).padStart(2, '0'),
    bab, gambar: 'images/' + gambar + '.webp', masks: M[gambar], target: M[gambar][i],
    jawaban, alias, penjelasan_pocketbook, halaman, sumber_kedua: {isi, ...ref},
  });
}

const A1 = 'Anatomy 1';
const LAPISAN = 'Lapisan yang membungkus ginjal dari profundus ke superficial: capsula fibrosa → capsula adiposa perirenale → fascia renalis (fascia Gerota = lamina anterior, tipis; fascia Zuckerkandl = lamina posterior, tebal) → corpus adiposum pararenale.';
let g;

// ---------- hlm. 4: Topography of Ren Sinister and Dexter in situ ----------
g = 'p04-topografi-ren';
soal(A1, g, 4, 5, 'Ren dextra', ['ren dexter', 'ginjal kanan', 'right kidney', 'ren dextrum'],
  'A: Ren dexter and sinister (Topography of Ren Sinister and Dexter in situ).',
  'Ginjal terletak retroperitoneal setinggi processus transversus T12-L3; ginjal kanan biasanya sedikit lebih rendah karena terdesak hepar. Ginjal kanan berhubungan dengan hepar, duodenum pars descendens, dan colon ascendens.', R.ginjal);
soal(A1, g, 4, 6, 'Ren sinistra', ['ren sinister', 'ginjal kiri', 'left kidney', 'ren sinistrum'],
  'A: Ren dexter and sinister (Topography of Ren Sinister and Dexter in situ).',
  'Ginjal terletak retroperitoneal setinggi processus transversus T12-L3; ginjal kiri biasanya sedikit lebih tinggi daripada kanan. Ginjal kiri berhubungan dengan colon descendens, cauda pancreatis, dan lien.', R.ginjal);
soal(A1, g, 4, 0, 'Fascia renalis', ['renal fascia', 'fasia renalis', 'fasia renal', 'fascia gerota', 'gerota fascia'],
  'B: Fascia renalis. ' + LAPISAN,
  'Fascia renalis anterior disebut fascia Gerota dan yang posterior disebut fascia Zuckerkandl; lemak perinefrik berada di antara kapsul ginjal dan fascia ini.', R.ginjal);
soal(A1, g, 4, 3, 'Capsula fibrosa', ['capsula fibrosa renis', 'kapsula fibrosa', 'kapsul fibrosa', 'renal capsule', 'fibrous capsule', 'kapsul ginjal'],
  'Capsula fibrosa: lapisan paling profundus. ' + LAPISAN,
  'Tiap ginjal dibungkus langsung oleh kapsul dua lapis, yang kemudian dikelilingi lemak perinefrik.', R.ginjal);
soal(A1, g, 4, 4, 'Capsula adiposa perirenale', ['capsula adiposa', 'capsula adiposa perirenalis', 'kapsula adiposa', 'perirenal fat', 'perinephric fat', 'lemak perirenal', 'lemak perinefrik', 'corpus adiposum perirenale'],
  'Capsula adiposa perirenale: lemak di antara capsula fibrosa dan fascia renalis. ' + LAPISAN,
  'Ruang perinefrik (di antara dua lembar fascia renalis) berisi ginjal, glandula suprarenalis, ureter proksimal, dan lemak yang dilintasi septa penghubung dari kapsul ginjal ke fascia renalis.', R.perinef);
soal(A1, g, 4, 7, 'Corpus adiposum pararenale', ['capsula adiposum pararenale', 'capsula adiposa pararenale', 'corpus adiposum pararenalis', 'pararenal fat', 'paranephric fat', 'lemak pararenal', 'lemak paranefrik'],
  'Corpus adiposum pararenale: lapisan paling superficial, di luar fascia renalis (pada gambar tertulis "Capsula adiposum pararenale"). ' + LAPISAN,
  'Ruang pararenal posterior terletak di antara fascia Zuckerkandl dan fascia transversalis dan hanya berisi lemak.', R.perinef);
soal(A1, g, 4, 1, 'Glandula suprarenalis dextra', ['gl suprarenalis dextra', 'glandula adrenal dextra', 'right adrenal gland', 'right suprarenal gland', 'kelenjar adrenal kanan', 'kelenjar suprarenal kanan', 'adrenal kanan', 'suprarenal kanan'],
  'C: Glandula suprarenalis. Pada gambar kotak ini berkode Ca; di tabel hlm. 4 tertulis Ca = sinistra dan Cb = dextra (kode di tabel dan gambar tertukar). Superior pole ginjal berkontak dengan suprarenal gland (hlm. 10).',
  'Glandula suprarenalis kanan berbentuk piramid, terletak di sisi superior ginjal di dalam fascia renalis, di bawah hepar, di belakang vena cava inferior, dan di depan diafragma.', R.adrenal);
soal(A1, g, 4, 2, 'Glandula suprarenalis sinistra', ['gl suprarenalis sinistra', 'glandula adrenal sinistra', 'left adrenal gland', 'left suprarenal gland', 'kelenjar adrenal kiri', 'kelenjar suprarenal kiri', 'adrenal kiri', 'suprarenal kiri'],
  'C: Glandula suprarenalis. Pada gambar kotak ini berkode Cb; di tabel hlm. 4 tertulis Ca = sinistra dan Cb = dextra (kode di tabel dan gambar tertukar). Superior pole ginjal berkontak dengan suprarenal gland (hlm. 10).',
  'Glandula suprarenalis kiri berbentuk bulan sabit (semilunar), terletak di sisi superior ginjal di dalam fascia renalis, medial dari lien, lateral dari aorta, dan di atas vasa lienalis.', R.adrenal);

g = 'p04-fascia-kadaver';
soal(A1, g, 4, 0, 'Fascia renalis', ['renal fascia', 'fasia renalis', 'fasia renal', 'fascia gerota', 'gerota fascia'],
  'B: Fascia renalis (pada gambar tertulis "Fasica renalis"). ' + LAPISAN,
  'Fascia renalis membungkus ginjal bersama lemak perinefrik; lembar anteriornya disebut fascia Gerota dan lembar posteriornya fascia Zuckerkandl.', R.ginjal);
soal(A1, g, 4, 1, 'Capsula fibrosa', ['capsula fibrosa renis', 'kapsula fibrosa', 'kapsul fibrosa', 'renal capsule', 'fibrous capsule', 'kapsul ginjal'],
  'Capsula fibrosa: lapisan paling profundus, melekat pada permukaan ginjal. ' + LAPISAN,
  'Tiap ginjal dibungkus langsung oleh kapsul dua lapis, yang kemudian dikelilingi lemak perinefrik.', R.ginjal);
soal(A1, g, 4, 2, 'Capsula adiposa perirenale', ['capsula adiposa', 'capsula adiposa perirenalis', 'kapsula adiposa', 'perirenal fat', 'perinephric fat', 'lemak perirenal', 'lemak perinefrik', 'corpus adiposum perirenale'],
  'Capsula adiposa perirenale: lemak di antara capsula fibrosa dan fascia renalis. ' + LAPISAN,
  'Lemak perinefrik mengelilingi kapsul ginjal, paling tebal di tepi ginjal, dan meluas masuk ke sinus renalis.', R.ginjal);

// ---------- hlm. 6: Arteri & Vena Renalis ----------
g = 'p06-vasa-renalis';
soal(A1, g, 6, 1, 'A. renalis dextra', ['arteri renalis dextra', 'arteria renalis dextra', 'right renal artery', 'arteri renalis kanan', 'arteri ginjal kanan'],
  'D: Arteri renalis; Da: A. renalis dextra. The renal artery is a branch of the abdominal aorta (hlm. 10). Arteri renalis berada di posterior vena (hlm. 23).',
  'A. renalis dextra lebih panjang dan sedikit lebih rendah daripada yang kiri, serta berjalan di belakang vena cava inferior.', R.arteriPB);
soal(A1, g, 6, 0, 'A. renalis sinistra', ['arteri renalis sinistra', 'arteria renalis sinistra', 'left renal artery', 'arteri renalis kiri', 'arteri ginjal kiri'],
  'D: Arteri renalis; Db: A. renalis sinistra. The renal artery is a branch of the abdominal aorta (hlm. 10). Arteri renalis berada di posterior vena (hlm. 23).',
  'Aa. renales keluar dari sisi lateral aorta setinggi kira-kira discus L1/L2, tepat di bawah pangkal a. mesenterica superior, dan terletak posterior terhadap v. renalis.', R.arteri);
soal(A1, g, 6, 2, 'V. renalis sinistra', ['vena renalis sinistra', 'left renal vein', 'vena renalis kiri', 'vena ginjal kiri'],
  'E: Vena renalis; Ea: V. renalis sinistra.',
  'V. renalis sinistra jauh lebih panjang (± 8,5 cm) daripada yang kanan, melintas di anterior aorta dan di inferior a. mesenterica superior, serta menerima v. suprarenalis sinistra dan v. gonadalis sinistra.', R.vena);
soal(A1, g, 6, 4, 'V. renalis dextra', ['vena renalis dextra', 'right renal vein', 'vena renalis kanan', 'vena ginjal kanan'],
  'E: Vena renalis; Eb: V. renalis dextra.',
  'V. renalis dextra pendek (± 2-2,5 cm) dibandingkan yang kiri (± 8,5 cm); di hilum, vena terletak anterior dan inferior terhadap arteri.', R.vena);
soal(A1, g, 6, 3, 'V. renalis sinistra', ['vena renalis sinistra', 'left renal vein', 'vena renalis kiri', 'vena ginjal kiri'],
  'E: Vena renalis; Ea: V. renalis sinistra (pada foto kadaver, struktur berlabel LRV).',
  'V. renalis sinistra melintas di anterior aorta, di inferior a. mesenterica superior; penjepitan vena di tempat ini dikenal sebagai nutcracker syndrome.', R.vena);

// ---------- hlm. 7: Muscles of the Renal System ----------
g = 'p07-otot';
soal(A1, g, 7, 3, 'M. psoas major', ['musculus psoas major', 'psoas major', 'psoas major muscle', 'psoas mayor', 'm psoas mayor'],
  'F: Muscles of the Renal System; Fa: M. psoas major. Proyeksi ginjal ke dinding posterior abdomen: diaphragm, M. psoas major, M. quadratus lumborum, M. transversus abdominis (hlm. 5).',
  'M. psoas major berorigo di vertebra thoracalis bawah dan lumbalis beserta discusnya, bergabung dengan m. iliacus menjadi iliopsoas, dan berinsersi di trochanter minor sebagai fleksor utama panggul; ginjal, vasa renalis, dan ureter termasuk struktur yang berhubungan dengannya.', R.psoas);
soal(A1, g, 7, 0, 'M. quadratus lumborum', ['musculus quadratus lumborum', 'quadratus lumborum', 'quadratus lumborum muscle', 'm kuadratus lumborum'],
  'F: Muscles of the Renal System; Fb: M. quadratus lumborum. Proyeksi ginjal ke dinding posterior abdomen: diaphragm, M. psoas major, M. quadratus lumborum, M. transversus abdominis (hlm. 5).',
  'M. quadratus lumborum adalah otot pipih segi empat dari labium internum crista iliaca dan lig. iliolumbale ke costa XII dan processus transversus L1-L4; dipersarafi n. subcostalis, n. iliohypogastricus, dan n. ilioinguinalis.', R.ql);
soal(A1, g, 7, 2, 'M. transversus abdominis', ['musculus transversus abdominis', 'transversus abdominis', 'transversus abdominis muscle', 'm transversus abdominus'],
  'F: Muscles of the Renal System; Fc: M. transversus abdominis. Proyeksi ginjal ke dinding posterior abdomen: diaphragm, M. psoas major, M. quadratus lumborum, M. transversus abdominis (hlm. 5).',
  'M. transversus abdominis adalah otot anterolateral paling dalam; berorigo di cartilago costalis 5-10, fascia lumbalis, crista iliaca, dan bagian lateral lig. inguinale, dengan serabut berjalan melintang.', R.dinding);
soal(A1, g, 7, 4, 'M. psoas major', ['musculus psoas major', 'psoas major', 'psoas major muscle', 'psoas mayor', 'm psoas mayor'],
  'F: Muscles of the Renal System; Fa: M. psoas major (tampak lateral).',
  'Pleksus lumbalis terletak di antara lapisan dalam dan superfisial m. psoas major; otot ini dipersarafi rami anteriores L1-L4.', R.psoas);
soal(A1, g, 7, 1, 'M. quadratus lumborum', ['musculus quadratus lumborum', 'quadratus lumborum', 'quadratus lumborum muscle', 'm kuadratus lumborum'],
  'F: Muscles of the Renal System; Fb: M. quadratus lumborum (tampak lateral).',
  'Polus inferior ginjal terletak di anterior bagian lateral m. quadratus lumborum; lig. arcuatum laterale melintas di atas otot ini.', R.ql);

g = 'p07-origo-aponeurosis';
soal(A1, g, 7, 0, 'Origo aponeurosis M. transversus abdominis', ['origo aponeurosis musculus transversus abdominis', 'origo aponeurosis transversus abdominis', 'aponeurosis m transversus abdominis', 'aponeurosis transversus abdominis', 'aponeurotic origin of transversus abdominis', 'origo aponeurotik m transversus abdominis'],
  'F: Muscles of the Renal System; Fd: Origo aponeurosis M. transversus abdominis.',
  'Salah satu origo m. transversus abdominis adalah fascia lumbalis; serabutnya berjalan melintang lalu menjadi aponeurosis yang ikut membentuk vagina m. recti abdominis.', R.dinding);

// ---------- hlm. 8: Nerves of the Renal System, Ureter ----------
g = 'p08-nervus';
soal(A1, g, 8, 0, 'N. subcostalis', ['nervus subcostalis', 'subcostal nerve', 'saraf subkostal', 'n subkostalis', 'n subcostal'],
  'G: Nerves of the Renal System; Ga: N. subcostalis.',
  'Ramus ventralis T12 berlanjut sebagai n. subcostalis yang berjalan di bawah costa terbawah dan ikut mempersarafi otot serta kulit dinding abdomen.', R.saraf);
soal(A1, g, 8, 1, 'N. iliohypogastricus', ['nervus iliohypogastricus', 'iliohypogastric nerve', 'n iliohipogastrikus', 'n illiohypogastricus', 'n iliohypogastric'],
  'G: Nerves of the Renal System; Gb: N. iliohypogastricus (pada gambar tertulis "N. Illiohypogastricus").',
  'N. iliohypogastricus berasal dari cabang superior ramus ventralis L1, menyilang m. quadratus lumborum, menembus m. transversus abdominis di atas crista iliaca, lalu menembus m. obliquus internus.', R.saraf);
soal(A1, g, 8, 2, 'N. ilioinguinalis', ['nervus ilioinguinalis', 'ilioinguinal nerve', 'n ilioinguinal', 'n illioinguinal', 'n illioinguinalis'],
  'G: Nerves of the Renal System; Gc: N. ilioinguinal (pada gambar tertulis "N. Illioinguinal").',
  'N. ilioinguinalis berasal dari ramus ventralis L1, menembus m. obliquus internus, masuk canalis inguinalis, dan berjalan bersama funiculus spermaticus.', R.saraf);

g = 'p08-ureter';
soal(A1, g, 8, 0, 'Ureter', ['ureter dextra', 'ureter sinistra', 'ureter dexter', 'ureter sinister'],
  'H: Ureter (Topography of Ureter in situ). 3 constriction sites: ureteropelvic junction, ureterovesical junction, crossover at common iliac arteries. "Water under the bridge": (F) A. uterina, (M) vas deferens (hlm. 9).',
  'Ureter panjangnya ± 26 cm, retroperitoneal, di anterior m. psoas; vasa gonadalis menyilang di anteriornya, lalu ureter menyilang vasa iliaca di tepi pelvis dan berjalan di bawah a. uterina ("water under the bridge").', R.ureter);

// ---------- hlm. 9: Blood Vessels of Ureter ----------
g = 'p09-vasa-gonadal';
soal(A1, g, 9, 0, 'A. ovarica / A. testicularis', ['a ovarica', 'a testicularis', 'a ovarica testicularis', 'a testicularis ovarica', 'arteri gonadalis', 'a gonadalis', 'ovarian artery', 'testicular artery', 'gonadal artery'],
  'I: Blood Vessels of Ureter; Ia: A. ovarica; Ic: A. testicularis (satu kotak label: "A. Ovarica/testicularis").',
  'A. testicularis keluar dari sisi anterolateral aorta abdominalis tepat di bawah a. renalis, berjalan retroperitoneal, dan menyilang di depan ureter sebelum masuk anulus inguinalis profundus.', R.testis);
soal(A1, g, 9, 1, 'V. ovarica sinistra / V. testicularis sinistra', ['v ovarica sinistra', 'v testicularis sinistra', 'v ovarica testicularis sinistra', 'v testicularis ovarica sinistra', 'v gonadalis sinistra', 'left ovarian vein', 'left testicular vein', 'left gonadal vein', 'vena gonadal kiri'],
  'I: Blood Vessels of Ureter; Ib: V. ovarica sinistra; Id: V. testicularis sinistra (satu kotak label: "V. Ovarica/testicularis sinistra").',
  'V. gonadalis sinistra bermuara ke sisi inferior v. renalis sinistra; v. gonadalis dextra hanya pada sekitar 6% orang bermuara ke v. renalis dextra.', R.vena);

// ---------- hlm. 10: External Structure of the Ren ----------
g = 'p10-eksternal-ren';
soal(A1, g, 10, 5, 'Ren sinistra', ['ren sinister', 'ginjal kiri', 'left kidney'],
  'J: External Structure of the Ren; Jb: Ren sinistra. Differentiating the left and right kidney: posterior surface flatter; anterior surface concave; superior pole in contact with the suprarenal gland.',
  'Hilum berada di tepi medial ginjal; ginjal kiri biasanya terletak sedikit lebih tinggi daripada ginjal kanan dan berhubungan dengan lien, cauda pancreatis, dan colon descendens.', R.ginjal);
soal(A1, g, 10, 0, 'A. renalis', ['arteri renalis', 'arteria renalis', 'renal artery', 'arteri ginjal'],
  'Je: A/V renalis. The renal artery is a branch of the abdominal aorta; blood flow from the renal artery will drain into the nephrons. Urutan di hilum anterior-posterior: renal vein, renal artery, renal pelvis → ureter; superior-inferior: renal artery, renal vein, renal pelvis → ureter.',
  'A. renalis terletak di posterior v. renalis dan masuk hilum di anterior pelvis renalis.', R.arteri);
soal(A1, g, 10, 1, 'V. renalis', ['vena renalis', 'renal vein', 'vena ginjal'],
  'Je: A/V renalis. Urutan di hilum anterior-posterior: renal vein, renal artery, renal pelvis → ureter; superior-inferior: renal artery, renal vein, renal pelvis → ureter.',
  'Di hilum, v. renalis terletak anterior dan inferior terhadap a. renalis.', R.vena);
soal(A1, g, 10, 2, 'Hilum renis', ['hilum renale', 'hilus renalis', 'hilus renis', 'hilum renalis', 'renal hilum', 'hilum ginjal', 'hilus ginjal'],
  'Jd: Hilum renis. Order from anterior-posterior: 1. renal vein, 2. renal artery, 3. renal pelvis → ureter. Order from superior-inferior: 1. renal artery, 2. renal vein, 3. renal pelvis → ureter.',
  'Hilum terletak di tepi medial ginjal, tempat arteri masuk serta vena dan pelvis renalis keluar dari sinus renalis; v. renalis di anterior a. renalis, dan pelvis renalis di posterior keduanya.', R.ginjal);
soal(A1, g, 10, 3, 'Ureter', ['ureter sinistra', 'ureter sinister'],
  'Jf: Ureter. Di hilum, renal pelvis → ureter terletak paling posterior dan paling inferior.',
  'Ureter panjangnya ± 26 cm, terletak retroperitoneal, dan turun di anterior m. psoas.', R.ureter);
soal(A1, g, 10, 4, 'Capsula fibrosa renis', ['capsula fibrosa', 'kapsula fibrosa', 'kapsul fibrosa', 'renal capsule', 'fibrous capsule', 'kapsul ginjal'],
  'Ja: Capsula fibrosa renis. Lapisan paling profundus yang membungkus ginjal (hlm. 4).',
  'Tiap ginjal dibungkus langsung oleh kapsul dua lapis, yang kemudian dikelilingi lemak perinefrik.', R.ginjal);

// ---------- hlm. 11: Internal Structure of the Ren ----------
g = 'p11-internal-ren';
soal(A1, g, 11, 0, 'Cortex renis', ['cortex renalis', 'korteks renalis', 'korteks ginjal', 'renal cortex', 'cortex'],
  'K: Internal Structure of the Ren; Ka: Cortex renis.',
  'Cortex adalah bagian luar parenkim ginjal yang mengelilingi medulla dan sinus renalis.', R.ginjal);
soal(A1, g, 11, 1, 'Medulla renis', ['medulla renalis', 'medula renalis', 'medula ginjal', 'renal medulla', 'medulla'],
  'K: Internal Structure of the Ren; Kb: Medulla renis.',
  'Medulla terletak di antara cortex dan sinus renalis dan tersusun atas pyramides renales.', R.ginjal);
soal(A1, g, 11, 6, 'Pyramis renis', ['pyramis renalis', 'pyramides renales', 'piramida renalis', 'piramid ginjal', 'renal pyramid', 'pyramis'],
  'Kc: Pyramis renis, terdiri atas: 1. basis pyramidis renalis, 2. papilla renalis.',
  'Satu pyramis beserta cortex di atasnya membentuk satu lobus renalis (sekitar 9 per ginjal).', R.ginjal);
soal(A1, g, 11, 8, 'Basis pyramidis renalis', ['basis pyramidis', 'basis pyramis renalis', 'basis piramid', 'base of renal pyramid', 'basis pyramidis renis'],
  'Kc: Pyramis renis: 1. Basis pyramidis renalis.',
  'Aa. arcuatae berjalan di sepanjang basis pyramides renales.', R.ginjal);
soal(A1, g, 11, 4, 'Papilla renalis', ['papilla renis', 'papila renalis', 'papila ginjal', 'renal papilla'],
  'Kc: Pyramis renis: 2. Papilla renalis. Also called the sinus (not to be mistaken with the renal sinus).',
  'Papilla adalah apex pyramis (area cribrosa) yang menonjol ke dalam calyx minor dan mengalirkan urin dari lobus tersebut ke dalamnya.', R.ginjal);
soal(A1, g, 11, 9, 'Columnae renales', ['columna renalis', 'kolumna renalis', 'renal columns', 'renal column', 'columna bertini', 'kolumna bertini', 'columns of bertin'],
  'K: Internal Structure of the Ren; Kd: Columnae renales.',
  'Columnae renales (kolumna Bertin, septa kortikal) adalah jaringan cortex yang menjorok ke dalam ke arah sinus renalis.', R.ginjal);
soal(A1, g, 11, 7, 'Calices renales minores', ['calyces renales minores', 'calyx minor', 'calix minor', 'calices minores', 'kaliks minor', 'minor calyces', 'minor calyx'],
  'K: Internal Structure of the Ren; Ke: Calices renales minores.',
  'Sebagian besar ginjal memiliki 7-9 calyces minores; dua sampai tiga di antaranya bergabung membentuk satu calyx major.', R.ginjal);
soal(A1, g, 11, 5, 'Calices renales majores', ['calyces renales majores', 'calyx major', 'calix major', 'calices majores', 'kaliks mayor', 'major calyces', 'major calyx'],
  'K: Internal Structure of the Ren; Kf: Calices renales majores.',
  'Biasanya terdapat 2-3 calyces majores yang bersatu membentuk pelvis renalis.', R.ginjal);
soal(A1, g, 11, 3, 'Pelvis renalis', ['pelvis renis', 'pelvis ginjal', 'renal pelvis', 'pyelum'],
  'K: Internal Structure of the Ren; Kg: Pelvis renalis. Di hilum, renal pelvis → ureter terletak paling posterior (hlm. 10).',
  'Pelvis renalis adalah ujung superior ureter yang menerima calyces majores.', R.ginjal);
soal(A1, g, 11, 2, 'Sinus renalis', ['sinus renis', 'sinus ginjal', 'renal sinus'],
  'K: Internal Structure of the Ren; Kh: Sinus renalis. Jangan tertukar dengan papilla renalis yang juga disebut "sinus".',
  'Sinus renalis adalah ruang di hilum tempat vena dan pelvis renalis keluar; berisi perluasan lemak perinefrik.', R.ginjal);
