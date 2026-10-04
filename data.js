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
  'p12-vesica-eksternal': [
    {x:4.5, y:51.5, w:15.5, h:10}, // 0 Apex vesicae
    {x:19.5, y:78, w:28, h:6.5}, // 1 Corpus vesicae
    {x:80, y:51.5, w:16, h:10.5}, // 2 Fundus vesicae
    {x:80, y:64, w:16, h:10}, // 3 Cervix vesicae
  ],
  'p13-trigonum-kadaver': [
    {x:38.9, y:4.9, w:24.5, h:6}, // 0 M. detrusor vesicae
    {x:67.9, y:15, w:29, h:6}, // 1 Ostium ureteris
    {x:1.4, y:25.3, w:29, h:6}, // 2 Plica interureterica
    {x:75.4, y:76.6, w:23.2, h:6}, // 3 Trigonum vesicae
    {x:4.9, y:79.2, w:19.7, h:6}, // 4 Uvula vesicae
    {x:1.5, y:90.3, w:31.6, h:6}, // 5 Ostium urethrae internum
  ],
  'p13-trigonum-atlas': [
    {x:36, y:0, w:14.2, h:9.6}, // 0 Plica interureterica
    {x:4.5, y:25.6, w:14.3, h:8.5}, // 1 Ostium ureteris kiri gambar
    {x:84.4, y:25.6, w:14.3, h:8.5}, // 2 Ostium ureteris kanan gambar
    {x:83.8, y:37.7, w:16.2, h:12.6}, // 3 Trigonum vesicae
    {x:23.5, y:71.6, w:14.9, h:14.4}, // 4 Ostium urethrae internum mit Uvula vesicae
    {x:0.5, y:57, w:17.5, h:7.5}, // 5 Tunica muscularis = M. detrusor vesicae (cetak)
  ],
  'p14-plica-laparoskopi': [
    {x:30.2, y:5.7, w:43.1, h:5.8}, // 0 Median umbilical plica
    {x:53.3, y:25.1, w:41.5, h:5.3}, // 1 Medial umbilical plica
    {x:41, y:83.1, w:30.2, h:6}, // 2 Urinary bladder
    {x:2.3, y:22.9, w:42.9, h:5.8}, // 3 Lateral umbilical plica
  ],
  'p14-plica-atlas': [
    {x:26.9, y:1.2, w:46.9, h:6.8}, // 0 Plica umbilicalis mediana
    {x:57.5, y:10, w:42, h:6.2}, // 1 Plica umbilicalis medialis
    {x:73.5, y:71.5, w:25.8, h:6.3}, // 2 Vesica urinaria
  ],
  'p15-vesicalis-superior': [
    {x:40.3, y:23.2, w:17.9, h:12.2}, // 0 Aa. vesicales superior
  ],
  'p15-vesicalis': [
    {x:21, y:34.8, w:20.5, h:6.3}, // 0 Aa. vesicales superior (kiri)
    {x:2.6, y:85.6, w:22.2, h:6.4}, // 1 A. vesicalis inferior (kiri)
    {x:56, y:3, w:20.4, h:6.4}, // 2 Aa. vesicales superior (kanan)
    {x:53.2, y:66.7, w:22.2, h:6.4}, // 3 A. vesicalis inferior (kanan)
  ],
  'p16-urethra-feminina': [
    {x:42.2, y:49.8, w:15.4, h:14}, // 0 Ostium externum urethrae femininae
  ],
  'p17-urethra-feminina-kadaver': [
    {x:0.3, y:43, w:15.2, h:13.2}, // 0 Pars intramuralis
    {x:1.3, y:62.5, w:15.2, h:13.5}, // 1 Pars membranacea
    {x:83.8, y:56.3, w:15.3, h:13.5}, // 2 Sphincter internus urethrae femininae
    {x:47.5, y:78.5, w:10.5, h:7.5}, // 3 urethra feminina (tulisan tangan)
  ],
  'p18-sphincter-feminina': [
    {x:78, y:41.5, w:21.5, h:9.5}, // 0 Ostium internum urethrae femininae
    {x:76, y:54.5, w:12.5, h:9.5}, // 1 Uretra pars intramuralis
    {x:72.8, y:72, w:18.3, h:10}, // 2 Pars membranacea
    {x:2.5, y:56, w:20.5, h:9.5}, // 3 Sphincter internus
    {x:4, y:69.5, w:21.5, h:10.5}, // 4 Sphincter externus
    {x:45, y:37.5, w:6.5, h:7}, // 5 saluran uretra
  ],
  'p19-urethra-masculina': [
    {x:52.9, y:6, w:15.6, h:12.8}, // 0 Pars intramuralis
    {x:52.9, y:22, w:15.5, h:8.5}, // 1 Pars prostatica
    {x:52.9, y:32.4, w:15.6, h:14.4}, // 2 Pars membranacea
    {x:52.9, y:46.6, w:15.5, h:8.5}, // 3 Pars spongiosa
    {x:52.9, y:68.6, w:15.5, h:8.5}, // 4 Fossa navicularis
    {x:52.9, y:83.5, w:15.6, h:11}, // 5 Ostium externum
  ],
  'p20-penampang-penis': [
    {x:12.9, y:2.3, w:14.3, h:8.7}, // 0 Corpus cavernosum
    {x:11.9, y:88.1, w:14.4, h:8.7}, // 1 Pars spongiosa urethrae
    {x:30, y:88.1, w:14.3, h:8.7}, // 2 Corpus spongiosum
    {x:49.6, y:48.2, w:10.4, h:5}, // 3 Corpus spongiosum, bulbus penis (cetak)
    {x:73.6, y:51.4, w:8.8, h:5}, // 4 Urethra, pars spongiosa (cetak)
  ],
  'p21-sphincter-masculina': [
    {x:4, y:59.5, w:18, h:7.5}, // 0 Sphincter internus
    {x:7, y:76.5, w:19.5, h:7}, // 1 Sphincter externus
  ],
  'p22-foto-polos': [
    {x:31.4, y:1.7, w:20, h:6.3}, // 0 Foto Polos Abdomen
    {x:13.5, y:27, w:4.2, h:2.6}, // 1 Kidney (kiri gambar)
    {x:37.2, y:40.2, w:3.6, h:2.6}, // 2 Psoas
    {x:33.5, y:23.2, w:4.2, h:2.6}, // 3 Kidney (kanan gambar)
    {x:47.8, y:21.1, w:3.6, h:1.8}, // 4 Kontur ginjal
    {x:50.6, y:28.1, w:3.6, h:1.8}, // 5 Kontur psoas
    {x:76.8, y:74.2, w:2.6, h:1.9}, // 6 Ginjal (CT)
    {x:81, y:90, w:2.8, h:2}, // 7 psoas (CT)
  ],
  'p22-ivu-serial': [
    {x:3, y:5.1, w:70.2, h:7.1}, // 0 Intravenous Urography
  ],
  'p23-ct-abdomen': [
    {x:45.7, y:1.1, w:13.2, h:5.8}, // 0 Abdominal aorta
    {x:79.5, y:37.7, w:12.1, h:5.8}, // 1 Left renal vein
    {x:77.7, y:44.7, w:13.3, h:5.8}, // 2 Left renal artery
    {x:78.1, y:53.6, w:9.4, h:9.6}, // 3 Inferior vena cava
    {x:0.6, y:52.6, w:4.8, h:2.2}, // 4 Kelenjar adrenal (kiri gambar)
    {x:76, y:19.4, w:3.3, h:2.2}, // 5 Fasia renal
    {x:76.1, y:26.1, w:4.8, h:2.2}, // 6 Lemak perirenal
    {x:37.3, y:53.7, w:4.8, h:2.1}, // 7 Kelenjar adrenal (kanan gambar)
    {x:24.4, y:4.9, w:11.6, h:5.8}, // 8 Abdominal CT
  ],
  'p23-ct-vasa-calyx': [
    {x:79.3, y:3.7, w:11.7, h:6.2}, // 0 Minor calyx
    {x:87.5, y:15, w:11.7, h:6.2}, // 1 Major calyx
    {x:11, y:41.7, w:3.2, h:3.3}, // 2 Vena
    {x:24, y:62.3, w:3.7, h:3.3}, // 3 Arteri
  ],
  'p24-ivu-vesica': [
    {x:3.5, y:39.5, w:33, h:5.5}, // 0 Urinary bladder
  ],
  'p24-kontur': [
    {x:3.3, y:24, w:6.4, h:3.7}, // 0 Kontur ginjal
    {x:8.6, y:40.3, w:6.5, h:3.8}, // 1 Kontur psoas
  ],
  'p25-ct-urografi': [
    {x:37.8, y:73, w:21.8, h:6.2}, // 0 Urinary bladder
  ],
  'p26-sistografi': [
    {x:46, y:48, w:6, h:6}, // 0 penanda di vesica urinaria (tanpa label di gambar)
  ],
  'p26-ruptur-ekstra': [
    {x:3.4, y:24.9, w:96.6, h:13.3}, // 0 Keterangan: kontras keluar
  ],
  'p26-ruptur-intra': [
    {x:14.3, y:0, w:74.3, h:13.5}, // 0 Keterangan: intraperitoneal
  ],
  'p27-uretrografi': [
    {x:33, y:86.5, w:7.5, h:13.5}, // 0 Fossa navicularis and meatus (cetak)
    {x:58, y:53.5, w:2.4, h:5.6}, // 1 p
    {x:78, y:71.5, w:2.4, h:5.6}, // 2 b
    {x:84.7, y:46.5, w:2.8, h:5}, // 3 m
    {x:85.7, y:32, w:3, h:5.4}, // 4 pr
    {x:85.3, y:14.2, w:2.6, h:5.2}, // 5 B
    {x:16.5, y:33, w:8.5, h:10}, // 6 Posterior urethra (cetak)
    {x:33.3, y:35, w:7.5, h:16}, // 7 Anterior urethra: Bulbar urethra (cetak)
    {x:34, y:64.5, w:7, h:7}, // 8 Pendulous urethra (cetak)
  ],
  'p27-ruptur-uretra': [
    {x:0, y:61.1, w:48, h:11.2}, // 0 Ruptur total
    {x:83.1, y:81.5, w:12.9, h:5.9}, // 1 Ruptur parsial
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
  buli:     {rujukan: 'Shermadou ES, Rahman S, Leslie SW. Anatomy, Abdomen and Pelvis: Bladder.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK531465/'},
  prostat:  {rujukan: 'Singh O, Bolla SR. Anatomy, Abdomen and Pelvis, Prostate.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK540987/'},
  hickling: {rujukan: 'Hickling DR, Sun TT, Wu XR. Anatomy and Physiology of the Urinary Tract: Relation to Host Defense and Microbial Infection. Microbiol Spectr. 2015;3(4).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4566164/'},
  detrusor: {rujukan: 'Sam P, Nassereddin A, LaGrange CA. Anatomy, Abdomen and Pelvis: Bladder Detrusor Muscle.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK482181/'},
  umbilikal:{rujukan: 'Chesnut GT, Rentea RM, Leslie SW. Urinary Diversions and Neobladders.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK560483/'},
  iliaka:   {rujukan: 'Zaunbrecher N, Arbor TC, Samra NS. Anatomy, Abdomen and Pelvis: Internal Iliac Arteries.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK537311/'},
  vulva:    {rujukan: 'Nguyen JD, Fakoya AO, Duong H. Anatomy, Abdomen and Pelvis: Female External Genitalia.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK547703/'},
  sfingter: {rujukan: 'Sam P, Jiang J, Leslie SW, LaGrange CA. Anatomy, Abdomen and Pelvis, Sphincter Urethrae.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK482438/'},
  uretraM:  {rujukan: 'Stoddard N, Leslie SW. Histology, Male Urethra.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK542238/'},
  penis:    {rujukan: 'Sam P, LaGrange CA. Anatomy, Abdomen and Pelvis, Penis.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK482236/'},
  fotoPolos:{rujukan: 'James B, Kelly B. The Abdominal Radiograph. Ulster Med J. 2013;82(3):179-187.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3913410/'},
  ivp:      {rujukan: 'Mehta SR, Annamaraju P. Intravenous Pyelogram.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK559034/'},
  ctu:      {rujukan: 'Cellina M, Cè M, Rossini N, et al. Computed Tomography Urography: State of the Art and Beyond. Tomography. 2023;9(3):909-930.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10204399/'},
  aorta:    {rujukan: 'Tran CT, Wu CY, Bordes SJ, Lui F. Anatomy, Abdomen and Pelvis: Abdominal Aorta.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK525964/'},
  traumaBuli:{rujukan: 'Bladder Trauma.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK557875/'},
  traumaUretra:{rujukan: 'Tullington JE, Blecker N. Lower Genitourinary Trauma.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK557527/'},
  testis:   {rujukan: 'Tiwana M, Leslie S. Anatomy, Abdomen and Pelvis: Testes.' + SP, url: 'https://www.ncbi.nlm.nih.gov/books/NBK470201/'},
};

const DATA = [];
// soal(bab, gambar, halaman, indeks penutup yang ditanya, jawaban, alias, penjelasan pocket book, isi sumber kedua, rujukan)
// tanya (opsional): pertanyaan pengganti untuk soal jenis pemeriksaan/kelainan.
function soal(bab, gambar, halaman, i, jawaban, alias, penjelasan_pocketbook, isi, ref, tanya) {
  DATA.push({
    id: bab.toLowerCase().replace(/\W+/g, '') + '-' + String(DATA.length + 1).padStart(2, '0'),
    bab, gambar: 'images/' + gambar + '.webp', masks: M[gambar], target: M[gambar][i],
    jawaban, alias, penjelasan_pocketbook, halaman, sumber_kedua: {isi, ...ref}, tanya,
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

// =====================================================================
// ANATOMY 2 (hlm. 12-21): vesica urinaria dan urethra
// =====================================================================
const A2 = 'Anatomy 2';
const BULI = ['vesica urinaria', 'urinary bladder', 'kandung kemih', 'buli', 'buli buli', 'bladder', 'vesika urinaria'];

g = 'p12-vesica-eksternal';
soal(A2, g, 12, 0, 'Apex vesicae', ['apex vesicae urinariae', 'apeks vesika', 'apex buli', 'apex of bladder', 'bladder apex', 'apeks kandung kemih'],
  'M: Apex Vesicae (External Structure of Vesica Urinaria). Permukaan vesica urinaria: superior, 2 inferolateral, posterior.',
  'Apex (dome) adalah bagian anterosuperior vesica urinaria yang mengarah ke dinding abdomen.', R.buli);
soal(A2, g, 12, 1, 'Corpus vesicae', ['corpus vesicae urinariae', 'korpus vesika', 'badan kandung kemih', 'body of bladder', 'bladder body'],
  'N: Corpus Vesicae (External Structure of Vesica Urinaria).',
  'Corpus (body) adalah bagian vesica urinaria yang terletak di antara apex dan fundus.', R.buli);
soal(A2, g, 12, 2, 'Fundus vesicae', ['fundus vesicae urinariae', 'fundus vesika', 'basis vesicae', 'fundus of bladder', 'base of bladder', 'bladder base', 'bladder fundus'],
  'O: Fundus Vesicae. Struktur di posterior fundus vesicae: perempuan = anterior wall of vagina; laki-laki = rectum.',
  'Fundus (base) adalah bagian posteroinferior vesica urinaria; di belakangnya terdapat rectum pada laki-laki dan dinding anterior vagina pada perempuan.', R.buli);
soal(A2, g, 12, 3, 'Cervix vesicae', ['cervix vesicae urinariae', 'collum vesicae', 'serviks vesika', 'leher kandung kemih', 'bladder neck', 'neck of bladder'],
  'P: Cervix Vesicae. Otot sirkular pada cervix vesicae: internal urethral sphincter / m. sphincter urethrae internus. Organ di dekat cervix vesicae laki-laki: prostate.',
  'Neck adalah bagian vesica urinaria yang menyempit dan berlanjut ke urethra.', R.buli);

g = 'p13-trigonum-kadaver';
soal(A2, g, 13, 3, 'Trigonum vesicae', ['trigonum vesicae lieutaud', 'trigonum lieutaud', 'trigonum vesika', 'trigone', 'bladder trigone', 'trigone of bladder', 'trigonum'],
  'Q: Trigonum Vesicae (Lieutaud) (Internal Structure of Vesica Urinaria).',
  'Trigonum adalah daerah otot polos berbentuk segitiga di antara kedua ostium ureteris dan ostium urethrae internum.', R.hickling);
soal(A2, g, 13, 1, 'Ostium ureteris', ['ostium ureter', 'ostium ureteris dextra', 'ostium ureteris sinistra', 'ureteric orifice', 'ureteral orifice', 'muara ureter', 'orificium ureteris'],
  'R: Ostium Ureteris (Internal Structure of Vesica Urinaria).',
  'Ureter berjalan miring menembus dinding vesica urinaria sepanjang 1,5-2 cm sebelum bermuara di ostium ureteris.', R.hickling);
soal(A2, g, 13, 5, 'Ostium urethrae internum', ['ostium internum urethrae', 'ostium uretra internum', 'internal urethral orifice', 'internal urethral meatus', 'orificium urethrae internum', 'muara uretra interna'],
  'S: Ostium Internum Urethrae (pada gambar tertulis "Ostium Urethrae Internum").',
  'Ostium urethrae internum (internal urethral meatus) menjadi salah satu sudut trigonum, bersama kedua ostium ureteris.', R.hickling);
soal(A2, g, 13, 2, 'Plica interureterica', ['plica interureterika', 'interureteric fold', 'interureteric crest', 'interureteric ridge', 'torus interuretericus', 'lipatan interureterika'],
  'T: Plica Interureterica (Internal Structure of Vesica Urinaria).',
  'Penebalan otot di antara kedua ostium ureteris membentuk interureteric crest.', R.hickling);
soal(A2, g, 13, 4, 'Uvula vesicae', ['uvula vesika', 'uvula of bladder', 'uvula vesicae urinariae', 'uvula buli'],
  'U: Uvula Vesicae. Catatan pocket book: uvula vesicae di gambar atas tidak terlalu terlihat.',
  'Sumber ini tidak membahas uvula vesicae secara khusus; yang dibahas adalah trigonum, daerah segitiga di antara kedua ostium ureteris dan ostium urethrae internum, tempat uvula berada menurut gambar pocket book.', R.hickling);
soal(A2, g, 13, 0, 'M. detrusor vesicae', ['musculus detrusor vesicae', 'm detrusor', 'detrusor', 'detrusor muscle', 'otot detrusor', 'tunica muscularis vesicae'],
  'V: M. Detrusor Vesicae (Internal Structure of Vesica Urinaria).',
  'Dinding vesica urinaria terutama dibentuk m. detrusor, yang berkontraksi saat berkemih dan di inferior berlanjut menjadi sphincter urethrae internus.', R.detrusor);

g = 'p13-trigonum-atlas';
soal(A2, g, 13, 3, 'Trigonum vesicae', ['trigonum vesicae lieutaud', 'trigonum lieutaud', 'trigonum vesika', 'trigone', 'bladder trigone', 'trigone of bladder', 'trigonum', 'fundus vesicae urinariae trigonum vesicae'],
  'Q: Trigonum Vesicae (Lieutaud). Pada gambar kotak ini bertuliskan "Fundus vesicae urinariae, Trigonum vesicae" dan berkode Q.',
  'Trigonum adalah daerah otot polos berbentuk segitiga di antara kedua ostium ureteris dan ostium urethrae internum.', R.hickling);
soal(A2, g, 13, 1, 'Ostium ureteris', ['ostium ureter', 'ostium ureteris dextra', 'ostium ureteris sinistra', 'ureteric orifice', 'ureteral orifice', 'muara ureter', 'orificium ureteris'],
  'R: Ostium Ureteris (kode R pada gambar, kanan dan kiri).',
  'Ureter berjalan miring menembus dinding vesica urinaria sepanjang 1,5-2 cm sebelum bermuara di ostium ureteris.', R.hickling);
soal(A2, g, 13, 0, 'Plica interureterica', ['plica interureterika', 'interureteric fold', 'interureteric crest', 'interureteric ridge', 'torus interuretericus', 'lipatan interureterika'],
  'T: Plica Interureterica (kode T pada gambar).',
  'Penebalan otot di antara kedua ostium ureteris membentuk interureteric crest.', R.hickling);
soal(A2, g, 13, 4, 'Ostium urethrae internum dan uvula vesicae', ['ostium urethrae internum', 'ostium internum urethrae', 'uvula vesicae', 'ostium urethrae internum mit uvula vesicae', 'ostium urethrae internum uvula vesicae', 'internal urethral orifice', 'uvula of bladder'],
  'S: Ostium Internum Urethrae; U: Uvula Vesicae. Pada gambar satu kotak berkode "S, U" bertuliskan "Ostium urethrae internum mit Uvula vesicae"; menjawab salah satunya dianggap benar.',
  'Ostium urethrae internum (internal urethral meatus) menjadi salah satu sudut trigonum, bersama kedua ostium ureteris.', R.hickling);

g = 'p14-plica-laparoskopi';
soal(A2, g, 14, 0, 'Plica umbilicalis mediana', ['median umbilical plica', 'median umbilical fold', 'plica umbilikalis mediana', 'lipatan umbilikalis mediana'],
  'W: Plica Umbilicalis Mediana. Struktur di bawah lipatan ini adalah ligamentum umbilicale medianum (median umbilical ligament), sisa urachus embrional.',
  'Kubah vesica urinaria tertambat ke umbilicus oleh ligamentum umbilicale medianum, sisa urachus fetal.', R.umbilikal);
soal(A2, g, 14, 1, 'Plica umbilicalis medialis', ['medial umbilical plica', 'medial umbilical fold', 'plica umbilikalis medialis', 'lipatan umbilikalis medialis'],
  'X: Plica Umbilicalis Medialis. Struktur di bawah lipatan ini adalah ligamentum umbilicale mediale (medial umbilical ligament), sisa arteri umbilicalis.',
  'Di kedua sisi ligamentum umbilicale medianum terdapat ligamentum umbilicale mediale, sisa a. umbilicalis yang mengalami obliterasi.', R.umbilikal);
soal(A2, g, 14, 2, 'Vesica urinaria', BULI,
  'L: Vesica Urinaria. Permukaan vesica urinaria: superior, 2 inferolateral, posterior.',
  'Vesica urinaria memiliki empat bagian: apex, corpus, fundus, dan neck; apex mengarah ke dinding abdomen anterior.', R.buli);

g = 'p14-plica-atlas';
soal(A2, g, 14, 0, 'Plica umbilicalis mediana', ['median umbilical plica', 'median umbilical fold', 'plica umbilikalis mediana', 'lipatan umbilikalis mediana'],
  'W: Plica Umbilicalis Mediana. Struktur di bawah lipatan ini adalah ligamentum umbilicale medianum (median umbilical ligament), sisa urachus embrional.',
  'Urachus menjadi ligamentum umbilicale medianum, yang menghubungkan apex vesica urinaria dengan umbilicus.', R.buli);
soal(A2, g, 14, 1, 'Plica umbilicalis medialis', ['medial umbilical plica', 'medial umbilical fold', 'plica umbilikalis medialis', 'lipatan umbilikalis medialis'],
  'X: Plica Umbilicalis Medialis. Struktur di bawah lipatan ini adalah ligamentum umbilicale mediale (medial umbilical ligament), sisa arteri umbilicalis.',
  'Bagian a. umbilicalis yang tidak lagi paten menjadi ligamentum umbilicale mediale.', R.iliaka);
soal(A2, g, 14, 2, 'Vesica urinaria', BULI,
  'L: Vesica Urinaria. Permukaan vesica urinaria: superior, 2 inferolateral, posterior.',
  'Vesica urinaria memiliki empat bagian: apex, corpus, fundus, dan neck; apex mengarah ke dinding abdomen anterior.', R.buli);

const VS = ['aa vesicales superiores', 'a vesicalis superior', 'arteri vesikalis superior', 'superior vesical artery', 'superior vesical arteries', 'a vesicales superior'];
const VI = ['aa vesicales inferior', 'aa vesicales inferiores', 'a vesicales inferior', 'arteri vesikalis inferior', 'inferior vesical artery'];
const VS_PB = 'Y: Aa. Vesicales superior. Cabang arteri umbilicalis; memperdarahi bagian superior vesica urinaria (ureter, urinary bladder, ductus deferens, dan seminal gland).';
const VI_PB = 'Z: Aa. Vesicales inferior (pada gambar tertulis "A. Vesicales Inferior"). Cabang arteri iliaca interna; memperdarahi bagian posterior dan inferolateral vesica urinaria (juga base area, fundus vesicae, dan cervix vesicae). Pada pelvis perempuan dapat digantikan A. vaginalis.';
g = 'p15-vesicalis-superior';
soal(A2, g, 15, 0, 'Aa. vesicales superior', VS, VS_PB,
  'A. umbilicalis, salah satu cabang pertama divisi anterior a. iliaca interna, memberi a. vesicalis superior yang memperdarahi permukaan superior vesica urinaria.', R.iliaka);
g = 'p15-vesicalis';
soal(A2, g, 15, 0, 'Aa. vesicales superior', VS, VS_PB,
  'Bagian atas vesica urinaria terutama diperdarahi a. vesicalis superior.', R.detrusor);
soal(A2, g, 15, 1, 'A. vesicalis inferior', VI, VI_PB,
  'A. vesicalis inferior adalah cabang divisi anterior a. iliaca interna, biasanya hanya ada pada laki-laki, dan memperdarahi bagian inferior vesica urinaria.', R.iliaka);
soal(A2, g, 15, 2, 'Aa. vesicales superior', VS, VS_PB,
  'A. umbilicalis, salah satu cabang pertama divisi anterior a. iliaca interna, memberi a. vesicalis superior yang memperdarahi permukaan superior vesica urinaria.', R.iliaka);
soal(A2, g, 15, 3, 'A. vesicalis inferior', VI, VI_PB,
  'Bagian bawah vesica urinaria diperdarahi a. vaginalis pada perempuan dan a. vesicalis inferior pada laki-laki.', R.detrusor);

g = 'p16-urethra-feminina';
soal(A2, g, 16, 0, 'Ostium externum urethrae femininae', ['ostium externum urethrae feminine', 'ostium externum urethrae feminiae', 'ostium urethrae externum', 'ostium externum urethrae', 'ostium uretra eksternum', 'external urethral orifice', 'external urethral meatus', 'meatus urethra externus', 'orificium urethrae externum'],
  'AAb: Ostium externum urethrae feminine. Muara ini terletak di vestibulum vaginae (di antara 2 labia). AAa: dinding posterior urethra femina berdekatan dengan vaginal opening.',
  'Urethra perempuan bermuara di vestibulum vulvae, di posterior clitoris dan di anterior introitus vaginae.', R.vulva);

const SI_F = 'Sphincter internus urethra perempuan terletak di cervix vesicae dan mengelilingi pars intramuralis urethrae feminine; tersusun atas otot polos.';
const SE_F = 'Sphincter externus urethra perempuan terletak di spatium profundum perinei (deep perineal pouch) dan mengelilingi pars membranacea urethrae femininae; tersusun atas otot rangka.';
g = 'p17-urethra-feminina-kadaver';
soal(A2, g, 17, 0, 'Pars intramuralis urethrae femininae', ['pars intramuralis', 'pars intramuralis femininae', 'pars intramuralis urethrae', 'pars intramuralis urethrae feminine', 'uretra pars intramuralis', 'urethra pars intramuralis', 'intramural part of urethra'],
  SI_F + ' (hlm. 18; label gambar: "Pars Intramuralis Femininae").',
  'Urethra perempuan panjangnya 3,8-5,1 cm dan berjalan miring dari leher vesica urinaria ke meatus externus di sepanjang dinding anterior vagina.', R.hickling);
soal(A2, g, 17, 1, 'Pars membranacea urethrae femininae', ['pars membranacea', 'pars membranacea femininae', 'pars membranacea urethrae', 'pars membranasea', 'uretra pars membranacea', 'urethra pars membranacea', 'membranous urethra'],
  SE_F + ' (hlm. 18; label gambar: "Pars Membranacea Femininae").',
  'Sphincter externus perempuan adalah otot lurik di deep perineal pouch dengan tiga bagian: sphincter sirkular, compressor urethrae, dan sphincter urethrovaginalis.', R.sfingter);
soal(A2, g, 17, 2, 'Sphincter internus urethrae femininae', ['sphincter internus', 'sphincter internus urethrae', 'sphincter internus urethrae feminine', 'm sphincter urethrae internus', 'sfingter uretra interna', 'sfingter internus', 'internal urethral sphincter'],
  SI_F + ' (hlm. 18).',
  'Otot polos di sekitar leher vesica urinaria membentuk sphincter internus yang involunter; pada perempuan kurang berkembang.', R.hickling);

g = 'p18-sphincter-feminina';
soal(A2, g, 18, 0, 'Ostium internum urethrae femininae', ['ostium internum urethrae', 'ostium urethrae internum', 'ostium internum urethrae feminine', 'ostium uretra internum', 'internal urethral orifice', 'internal urethral meatus'],
  'S: Ostium Internum Urethrae (hlm. 13); pada gambar hlm. 18 tertulis "Ostium internum urethrae femininae".',
  'Ostium urethrae internum (internal urethral meatus) menjadi salah satu sudut trigonum, bersama kedua ostium ureteris.', R.hickling);
soal(A2, g, 18, 1, 'Pars intramuralis urethrae femininae', ['pars intramuralis', 'pars intramuralis femininae', 'pars intramuralis urethrae', 'pars intramuralis urethrae feminine', 'uretra pars intramuralis', 'urethra pars intramuralis', 'intramural part of urethra'],
  SI_F,
  'Urethra perempuan panjangnya 3,8-5,1 cm dan berjalan miring dari leher vesica urinaria ke meatus externus di sepanjang dinding anterior vagina.', R.hickling);
soal(A2, g, 18, 2, 'Pars membranacea urethrae femininae', ['pars membranacea', 'pars membranacea femininae', 'pars membranacea urethrae', 'pars membranacea urethra femininae', 'pars membranasea', 'uretra pars membranacea', 'urethra pars membranacea', 'membranous urethra'],
  SE_F,
  'Otot lurik sphincter externus menyelubungi dua pertiga distal urethra perempuan.', R.hickling);
soal(A2, g, 18, 3, 'Sphincter internus urethrae femininae', ['sphincter internus', 'sphincter internus urethrae', 'sphincter internus urethrae feminine', 'm sphincter urethrae internus', 'sfingter uretra interna', 'sfingter internus', 'internal urethral sphincter'],
  SI_F,
  'Sphincter internus tersusun atas otot polos dan bekerja involunter.', R.sfingter);
soal(A2, g, 18, 4, 'Sphincter externus urethrae femininae', ['sphincter externus', 'sphincter externus urethrae', 'sphincter externus urethrae feminine', 'm sphincter urethrae externus', 'sfingter uretra eksterna', 'sfingter eksternus', 'external urethral sphincter'],
  SE_F,
  'Sphincter externus perempuan adalah otot lurik di deep perineal pouch dengan tiga bagian: sphincter sirkular, compressor urethrae, dan sphincter urethrovaginalis.', R.sfingter);

g = 'p19-urethra-masculina';
soal(A2, g, 19, 0, 'Pars intramuralis urethrae masculinae', ['pars intramuralis', 'pars intramuralis urethrae', 'pars intramurals urethrae masculine', 'pars intramuralis urethrae masculine', 'pars intramuscular urethrae maculinea', 'pars preprostatica', 'uretra pars intramuralis', 'preprostatic urethra', 'intramural urethra'],
  'BBa: Pars intramurals urethrae masculine (pada gambar tertulis "Pars Intramuscular Urethrae Maculinea"). Sphincter internus urethrae masculinae mengelilingi bagian ini (hlm. 21).',
  'Urethra laki-laki terdiri atas empat bagian; bagian preprostatik (0,5-1,5 cm) terbentang dari vesica urinaria sampai prostat.', R.uretraM);
soal(A2, g, 19, 1, 'Pars prostatica urethrae', ['pars prostatica', 'pars prostatica urethrae masculinae', 'uretra pars prostatika', 'urethra pars prostatica', 'pars prostatika', 'prostatic urethra'],
  'BBb: Pars prostatica urethrae (Urethra Masculina).',
  'Pars prostatica panjangnya 3-4 cm dan umumnya merupakan bagian urethra yang paling lebar.', R.uretraM);
soal(A2, g, 19, 2, 'Pars membranacea urethrae masculinae', ['pars membranacea', 'pars membranacea urethrae', 'pars membranacea urethrae masculine', 'pars membranacea urethrae maculinea', 'pars membranasea', 'uretra pars membranasea', 'urethra pars membranacea', 'membranous urethra'],
  'BBc: Pars membranacea urethrae masculine (pada gambar tertulis "Maculinea"). Sphincter externus urethrae masculinae mengelilingi bagian ini (hlm. 21).',
  'Pars membranacea panjangnya 1-1,5 cm, terbentang dari prostat sampai bulbus penis.', R.uretraM);
soal(A2, g, 19, 3, 'Pars spongiosa urethrae', ['pars spongiosa', 'pars spongiosa urethrae masculinae', 'uretra pars spongiosa', 'urethra pars spongiosa', 'spongy urethra', 'penile urethra', 'pars cavernosa urethrae'],
  'BBd: Pars spongiosa urethrae (Urethra Masculina).',
  'Pars spongiosa panjangnya sekitar 15 cm dan berjalan di dalam corpus spongiosum.', R.uretraM);
soal(A2, g, 19, 4, 'Fossa navicularis urethrae', ['fossa navicularis', 'fossa navikularis', 'navicular fossa', 'naviculare fossa'],
  'BBe: Fossa navicularis urethrae (Urethra Masculina).',
  'Pars spongiosa melebar di dalam glans penis sebagai fossa navicularis.', R.uretraM);
soal(A2, g, 19, 5, 'Ostium externum urethrae masculinae', ['ostium externum urethrae', 'ostium urethrae externum', 'ostium uretra eksternum', 'external urethral orifice', 'external urethral meatus', 'meatus urethra externus', 'orificium urethrae externum'],
  'BBf: Ostium externum urethrae masculinae (Urethra Masculina).',
  'Urethra penis melebar di fossa navicularis lalu berakhir di meatus urethrae externus.', R.hickling);

g = 'p20-penampang-penis';
soal(A2, g, 20, 0, 'Corpus cavernosum', ['corpus cavernosum penis', 'corpora cavernosa', 'korpus kavernosum', 'corpus kavernosum'],
  'Label pada gambar penampang penis hlm. 20: "Corpus Cavernosum". Pocket book tidak memberi keterangan teks untuk struktur ini.',
  'Sepasang corpora cavernosa terletak di dorsal dan dibungkus tunica albuginea.', R.penis);
soal(A2, g, 20, 2, 'Corpus spongiosum', ['corpus spongiosum penis', 'korpus spongiosum'],
  'Label pada gambar penampang penis hlm. 20: "Corpus Spongiosum". Pocket book tidak memberi keterangan teks untuk struktur ini.',
  'Corpus spongiosum tunggal terletak di ventral dan dilalui urethra pars spongiosa.', R.penis);
soal(A2, g, 20, 1, 'Pars spongiosa urethrae', ['pars spongiosa', 'pars spongiosa urethrae masculinae', 'uretra pars spongiosa', 'urethra pars spongiosa', 'spongy urethra', 'penile urethra', 'urethra'],
  'BBd: Pars spongiosa urethrae (pada penampang penis hlm. 20, di dalam corpus spongiosum).',
  'Urethra pars spongiosa berjalan di dalam corpus spongiosum.', R.penis);

g = 'p21-sphincter-masculina';
soal(A2, g, 21, 0, 'Sphincter internus urethrae masculinae', ['sphincter internus', 'sphincter internus urethrae', 'sphincter internus urethrae masculina', 'spinchter internus urethrae masculinae', 'm sphincter urethrae internus', 'sfingter uretra interna', 'sfingter internus', 'internal urethral sphincter'],
  'Sphincter internus urethrae masculinae terletak di cervix vesicae dan mengelilingi pars intramuralis urethrae masculine.',
  'Sphincter internus adalah otot polos di ostium urethrae internum (leher vesica urinaria), involunter; pada laki-laki juga mencegah ejakulasi retrograd.', R.sfingter);
soal(A2, g, 21, 1, 'Sphincter externus urethrae masculinae', ['sphincter externus', 'sphincter externus urethrae', 'sphincter externus urethrae masculina', 'spinchter externus urethrae masculinae', 'm sphincter urethrae externus', 'sfingter uretra eksterna', 'sfingter eksternus', 'external urethral sphincter', 'rhabdosphincter'],
  'Sphincter externus urethrae masculinae terletak di spatium profundum perinei (deep perineal pouch) dan mengelilingi pars membranacea urethrae.',
  'Sphincter externus (rhabdosphincter) adalah otot lurik sirkular yang volunter, setinggi urethra pars membranacea di deep perineal pouch.', R.sfingter);

// =====================================================================
// RADIOLOGY 1 (hlm. 22-23): foto polos, intravenous urography, CT
// =====================================================================
const R1 = 'Radiology 1';
const T_PERIKSA = 'Pemeriksaan radiologi apa ini? (judul bertanda ?)';
const GINJAL = ['ginjal', 'ren', 'kidney', 'ginjal kanan', 'ren dextra', 'right kidney'];
const PSOAS = ['m psoas major', 'psoas major', 'psoas', 'm psoas', 'otot psoas', 'kontur psoas', 'psoas mayor'];
const CC_PB = 'CC: Intravenous Urography. Kalau foto polos, kontur struktur tidak bisa terlihat jelas; dengan kontras organ jadi putih, bisa dipakai untuk melihat anatomi dan fungsi ureter.';

g = 'p22-foto-polos';
soal(R1, g, 22, 0, 'Foto polos abdomen', ['foto polos', 'bno', 'foto bno', 'kub', 'plain abdominal radiograph', 'abdominal radiograph', 'plain abdominal x ray', 'rontgen abdomen', 'foto polos abdomen bno'],
  CC_PB + ' Judul gambar: "Foto Polos Abdomen".',
  'KUB adalah varian foto abdomen AP supine yang dioptimalkan untuk traktus urinarius.', R.fotoPolos, T_PERIKSA);
soal(R1, g, 22, 1, 'Ginjal (ren)', GINJAL,
  'Label gambar foto polos abdomen: "Kidney". ' + CC_PB,
  'Pada foto ini pembaca perlu mengenali kontur tiap ginjal dan mencari batu, lalu menelusuri ureter di sepanjang ujung processus transversus lumbalis sampai vesica urinaria.', R.fotoPolos);
soal(R1, g, 22, 2, 'M. psoas major', PSOAS,
  'Label gambar foto polos abdomen: "Psoas". ' + CC_PB,
  'Sumbu panjang ginjal sejajar dengan sepertiga atas m. psoas major sisi yang sama.', R.ivp);
soal(R1, g, 22, 6, 'Ginjal (ren)', GINJAL,
  'Label gambar CT pembanding di hlm. 22: "Ginjal". Imaging principle: makin putih = dense, makin padat (hlm. 23).',
  'Ginjal terletak retroperitoneal setinggi processus transversus T12-L3.', R.ginjal);
soal(R1, g, 22, 7, 'M. psoas major', PSOAS,
  'Label gambar CT pembanding di hlm. 22: "psoas".',
  'Polus inferior ginjal terletak di atas m. psoas dan bagian lateral m. quadratus lumborum.', R.ginjal);

g = 'p22-ivu-serial';
soal(R1, g, 22, 0, 'Intravenous urography', ['intravenous urography ivu', 'ivu', 'ivp', 'intravenous pyelography', 'intravenous pyelogram', 'bno ivp', 'urografi intravena', 'pielografi intravena'],
  CC_PB + ' Lihat jalannya kontras: lancar atau tidak dari renal ke bladder, ada obstruksi/sumbatan atau tidak.',
  'Intravenous pyelogram/urography adalah pencitraan sinar-X traktus urinarius setelah kontras beriodium disuntikkan intravena; foto diambil serial, dan kolom kontras yang statis menunjukkan obstruksi.', R.ivp, T_PERIKSA);

g = 'p23-ct-abdomen';
soal(R1, g, 23, 8, 'CT abdomen', ['abdominal ct', 'ct scan abdomen', 'ct', 'ct scan', 'urography ct', 'ct urography', 'ct urografi', 'computed tomography abdomen'],
  'DD: Urography CT (judul gambar: "Abdominal CT"). CT urography bisa diberi kontras agar organ tampak lebih putih. Imaging principle: makin putih = dense, makin padat.',
  'CT urography adalah CT abdomen multifase yang dioptimalkan untuk ginjal, ureter, dan vesica urinaria, termasuk fase ekskresi setelah kontras.', R.ctu, T_PERIKSA);
soal(R1, g, 23, 0, 'Aorta abdominalis', ['abdominal aorta', 'aorta', 'aorta abdominal', 'pars abdominalis aortae'],
  'Label gambar CT hlm. 23: "Abdominal aorta". The renal artery is a branch of the abdominal aorta (hlm. 10).',
  'Aorta abdominalis terletak sedikit di kiri depan vertebra lumbalis, dengan vena cava inferior di sebelah kanannya.', R.aorta);
soal(R1, g, 23, 3, 'Vena cava inferior', ['inferior vena cava', 'v cava inferior', 'ivc', 'vci', 'vena kava inferior'],
  'Label gambar CT hlm. 23: "Inferior Vena Cava".',
  'Vena cava inferior terletak di sebelah kanan aorta; v. renalis sinistra melintas di depan aorta untuk mencapainya.', R.ginjal);
soal(R1, g, 23, 1, 'V. renalis sinistra', ['left renal vein', 'vena renalis sinistra', 'vena renalis kiri', 'vena ginjal kiri', 'lrv'],
  'Label gambar CT hlm. 23: "Left Renal Vein". Arteri renalis berada di posterior vena.',
  'V. renalis sinistra yang lebih panjang melintas di belakang a. mesenterica superior dan di depan aorta menuju vena cava inferior.', R.ginjal);
soal(R1, g, 23, 2, 'A. renalis sinistra', ['left renal artery', 'arteri renalis sinistra', 'arteri renalis kiri', 'arteri ginjal kiri'],
  'Label gambar CT hlm. 23: "Left Renal Artery". Arteri renalis berada di posterior vena.',
  'Aa. renales keluar setinggi kira-kira L1/L2 dan berjalan di posterior v. renalis serta di anterior pelvis renalis.', R.arteri);
soal(R1, g, 23, 4, 'Glandula suprarenalis', ['kelenjar adrenal', 'glandula adrenal', 'adrenal', 'adrenal gland', 'suprarenal gland', 'kelenjar suprarenal', 'gl suprarenalis', 'glandula suprarenalis dextra'],
  'Label gambar CT koronal hlm. 23: "Kelenjar adrenal". Superior pole ginjal berkontak dengan suprarenal gland (hlm. 10).',
  'Kedua glandula suprarenalis terletak di sisi superior ginjal di dalam fascia renalis.', R.adrenal);
soal(R1, g, 23, 5, 'Fascia renalis', ['fasia renal', 'fasia renalis', 'renal fascia', 'fascia gerota', 'gerota fascia'],
  'Label gambar CT hlm. 23: "Fasia renal". Fascia Gerota: lamina anterior (tipis); fascia Zuckerkandl: lamina posterior (tebal) (hlm. 4).',
  'Fascia renalis anterior disebut fascia Gerota dan yang posterior disebut fascia Zuckerkandl.', R.ginjal);
soal(R1, g, 23, 6, 'Lemak perirenal (capsula adiposa perirenale)', ['lemak perirenal', 'capsula adiposa perirenale', 'capsula adiposa', 'perirenal fat', 'perinephric fat', 'lemak perinefrik'],
  'Label gambar CT hlm. 23: "Lemak perirenal". Capsula adiposa perirenale terletak di antara capsula fibrosa dan fascia renalis (hlm. 4).',
  'Ruang perinefrik (di antara dua lembar fascia renalis) berisi ginjal, glandula suprarenalis, ureter proksimal, dan lemak.', R.perinef);

g = 'p23-ct-vasa-calyx';
soal(R1, g, 23, 2, 'V. renalis', ['vena renalis', 'vena', 'renal vein', 'vena ginjal'],
  'Label gambar CT hlm. 23: "Vena" (panah hijau). Arteri renalis berada di posterior vena.',
  'Di hilum, v. renalis terletak anterior terhadap a. renalis, dan pelvis renalis di posterior keduanya.', R.ginjal);
soal(R1, g, 23, 3, 'A. renalis', ['arteri renalis', 'arteri', 'renal artery', 'arteri ginjal'],
  'Label gambar CT hlm. 23: "Arteri" (panah cokelat). Arteri renalis berada di posterior vena.',
  'Aa. renales berjalan di posterior v. renalis; yang kanan lewat di belakang vena cava inferior.', R.arteri);
soal(R1, g, 23, 0, 'Calyx minor', ['minor calyx', 'calices renales minores', 'calyx renalis minor', 'kaliks minor', 'calix minor', 'calices minores'],
  'Label gambar CT urography hlm. 23: "Minor calyx". Ke: Calices renales minores (hlm. 11).',
  'Sebagian besar ginjal memiliki 7-9 calyces minores; dua sampai tiga di antaranya bergabung membentuk satu calyx major.', R.ginjal);
soal(R1, g, 23, 1, 'Calyx major', ['major calyx', 'calices renales majores', 'calyx renalis major', 'kaliks mayor', 'calix major', 'calices majores'],
  'Label gambar CT urography hlm. 23: "Major calyx". Kf: Calices renales majores (hlm. 11).',
  'Pada fase ekskresi CT urography, calyces dan pelvis renalis terisi urin berkontras.', R.ctu);

// =====================================================================
// RADIOLOGY 2 (hlm. 24-27): IVU, CT urografi, sistografi, uretrosistografi
// =====================================================================
const R2 = 'Radiology 2';
const T_KELAINAN = 'Kelainan apa yang tampak? (keterangan gambar bertanda ?)';
const BULI_R = ['vesica urinaria', 'kandung kemih', 'buli', 'buli buli', 'bladder', 'vesika urinaria'];

g = 'p24-kontur';
soal(R2, g, 24, 0, 'Kontur ginjal', ['ginjal', 'ren', 'kidney', 'kontur ren', 'renal outline', 'bayangan ginjal'],
  'EE: Intravenous Urography. Label gambar hlm. 24: "Kontur ginjal"; pada sisi lain tertulis kontur tidak bisa terlihat.',
  'Pada foto abdomen pembaca perlu mengenali kontur tiap ginjal dan mencari batu.', R.fotoPolos);
soal(R2, g, 24, 1, 'Kontur psoas', ['psoas', 'm psoas major', 'psoas major', 'm psoas', 'psoas line', 'garis psoas', 'bayangan psoas'],
  'EE: Intravenous Urography. Label gambar hlm. 24: "Kontur psoas".',
  'Sumbu panjang ginjal sejajar dengan sepertiga atas m. psoas major sisi yang sama.', R.ivp);
g = 'p24-ivu-vesica';
soal(R2, g, 24, 0, 'Urinary bladder (vesica urinaria)', BULI_R.concat('urinary bladder'),
  'EE: Intravenous Urography. Iodine contrast is injected intravenously; X-Ray is taken. Label gambar: "Urinary Bladder".',
  'Pada intravenous pyelogram, kontras disaring ke sistem pengumpul; setelah foto nefrografik dan KUB 5 menit, dibuat foto pielografik dan foto vesica urinaria.', R.ivp);

g = 'p25-ct-urografi';
soal(R2, g, 25, 0, 'Urinary bladder (vesica urinaria)', BULI_R.concat('urinary bladder'),
  'FF: Urography CT. Label gambar hlm. 25: "Urinary Bladder". CT urography bisa diberi kontras agar organ tampak lebih putih (hlm. 23).',
  'Tujuan fase ekskresi CT urography adalah mengopasitaskan sistem pengumpul, ureter, dan vesica urinaria.', R.ctu);

g = 'p26-sistografi';
soal(R2, g, 26, 0, 'Urinary bladder (vesica urinaria)', BULI_R.concat('urinary bladder'),
  'GGa: Urinary Bladder (Cystography). Kontras dimasukkan lewat foley catheter langsung ke bladder; biasanya untuk memeriksa trauma; organ tampak radiopaque.',
  'Pada sistografi, kontras larut air dialirkan ke vesica urinaria melalui kateter Foley dengan gravitasi, minimal 300 mL pada dewasa.', R.traumaBuli);
g = 'p26-ruptur-ekstra';
soal(R2, g, 26, 0, 'Ruptur buli ekstraperitoneal', ['ruptur vesica urinaria ekstraperitoneal', 'ruptur ekstraperitoneal', 'ruptur buli extraperitoneal', 'extraperitoneal bladder rupture', 'extraperitoneal rupture', 'ekstraperitoneal', 'ruptur kandung kemih ekstraperitoneal'],
  'GG: Cystography. Top right image is extraperitoneal bladder rupture. Keterangan gambar: kontrasnya keluar, biasanya karena fraktur yang membuat laserasi.',
  'Ruptur ekstraperitoneal memperlihatkan kontras di sekitar basis vesica urinaria berbentuk seperti nyala api, dan menyertai fraktur pelvis pada 80-90% kasus.', R.traumaBuli, T_KELAINAN);
g = 'p26-ruptur-intra';
soal(R2, g, 26, 0, 'Ruptur buli intraperitoneal', ['ruptur vesica urinaria intraperitoneal', 'ruptur intraperitoneal', 'intraperitoneal bladder rupture', 'intraperitoneal rupture', 'intraperitoneal', 'ruptur kandung kemih intraperitoneal'],
  'GG: Cystography. Bottom left image is intraperitoneal bladder rupture. Keterangan gambar: kontrasnya keluar ke rongga pelvis di atas (intraperitoneal).',
  'Ruptur intraperitoneal, biasanya di kubah vesica urinaria, memperlihatkan kontras yang menggambarkan lengkung usus dan mengalir di sepanjang lipatan mesenterium serta paracolic gutter.', R.traumaBuli, T_KELAINAN);

const HH = 'HH: Urethrocystography. Untuk memeriksa trauma urethra; kontras dimasukkan lewat foley catheter lalu difoto X-Ray; hanya pada laki-laki karena urethra perempuan terlalu pendek. ';
g = 'p27-uretrografi';
soal(R2, g, 27, 0, 'Fossa navicularis', ['naviculare fossa', 'navicular fossa', 'fossa navicularis urethrae', 'fossa navikularis', 'fossa navicularis and meatus'],
  HH + 'HHa: Naviculare fossa. The end of the catheter only reaches this area.',
  'Pada retrograde urethrogram, kateter Foley 6-8 Fr ditempatkan di fossa navicularis dengan balon berisi 2-3 mL, lalu disuntikkan sekitar 30 mL kontras beriodium.', R.traumaUretra);
soal(R2, g, 27, 1, 'Urethra pars penile (pars spongiosa)', ['urethra pars penile', 'urethra pars penile penoscrotal', 'pars penile', 'pars spongiosa', 'pars spongiosa urethrae', 'penile urethra', 'pendulous urethra', 'uretra pars penil', 'urethra pars pendulosa', 'pars pendulosa'],
  HH + 'HHb: Urethra pars penile/penoscrotal. Seen as section p in the image.',
  'Cedera urethra anterior mengenai urethra pars bulbosa dan pars penile.', R.traumaUretra);
soal(R2, g, 27, 2, 'Urethra pars bulbosa', ['pars bulbosa', 'bulbar urethra', 'uretra pars bulbosa', 'pars bulbosa urethrae', 'urethra bulbosa'],
  HH + 'HHc: Urethra pars bulbosa. Seen as section b in the image.',
  'Cedera urethra anterior mengenai urethra pars bulbosa dan pars penile.', R.traumaUretra);
soal(R2, g, 27, 3, 'Urethra pars membranacea', ['pars membranacea', 'pars membranacea urethrae', 'membranous urethra', 'uretra pars membranasea', 'pars membranasea'],
  HH + 'HHd: Urethra pars membranacea. Seen as section m in the picture.',
  'Cedera urethra posterior mengenai urethra pars prostatica dan pars membranacea.', R.traumaUretra);
soal(R2, g, 27, 4, 'Urethra pars prostatica', ['pars prostatica', 'pars prostatica urethrae', 'prostatic urethra', 'uretra pars prostatika', 'pars prostatika'],
  HH + 'HHe: Urethra pars prostatica. Seen as section pr in the image.',
  'Cedera urethra posterior mengenai urethra pars prostatica dan pars membranacea.', R.traumaUretra);
soal(R2, g, 27, 5, 'Urinary bladder (vesica urinaria)', BULI_R.concat('urinary bladder'),
  HH + 'HHf: Urinary bladder. Seen as section B in image.',
  'Pada robekan parsial urethra kontras masih mencapai vesica urinaria; pada robekan komplet vesica urinaria tidak terisi.', R.traumaUretra);

g = 'p27-ruptur-uretra';
soal(R2, g, 27, 0, 'Ruptur uretra total', ['ruptur total', 'ruptur urethra total', 'ruptur uretra komplet', 'ruptur komplet', 'complete urethral rupture', 'complete tear', 'ruptur total uretra'],
  HH + 'Keterangan gambar a: ruptur total (kontrasnya tidak bisa sampai buli/kandung kemih).',
  'Robekan komplet memperlihatkan ekstravasasi kontras tanpa pengisian vesica urinaria.', R.traumaUretra, T_KELAINAN);
soal(R2, g, 27, 1, 'Ruptur uretra parsial', ['ruptur parsial', 'ruptur urethra parsial', 'ruptur uretra inkomplet', 'partial urethral rupture', 'partial tear', 'ruptur parsial uretra'],
  HH + 'Keterangan gambar b: ruptur parsial.',
  'Robekan parsial memperlihatkan ekstravasasi kontras, tetapi kontras masih mencapai vesica urinaria.', R.traumaUretra, T_KELAINAN);
