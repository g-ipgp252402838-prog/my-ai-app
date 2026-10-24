export const INTRO_CONTENT = {
  title: "Jom Kenali Mari Bersuci",
  subtitle: "Pendidikan Islam Tahun 4 • Bidang Fiqh (Taharah)",
  definition: {
    bahasa: "Bersih dan suci daripada sebarang kekotoran.",
    syarak: "Menghilangkan najis atau mengangkat hadas yang menghalang daripada sah solat dan ibadah yang disyaratkan bersuci.",
  },
  dalil: {
    surah: "Surah Al-Baqarah, Ayat 222",
    terjemahan: "Sesungguhnya Allah mengasihi orang-orang yang sentiasa bertaubat dan mengasihi orang-orang yang sentiasa menyucikan diri.",
    arab: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ",
  },
  kepentingan: [
    {
      title: "Ibadah Diterima Allah SWT",
      desc: "Menjadi syarat sah solat, tawaf dan memegang mushaf Al-Quran.",
      icon: "Sparkles",
    },
    {
      title: "Kesihatan & Kebersihan Diri",
      desc: "Menghindarkan badan daripada kuman, penyakit berjangkit dan bau yang kurang menyenangkan.",
      icon: "Heart",
    },
    {
      title: "Ketenangan Jiwa & Disukai Rakan",
      desc: "Melahirkan peribadi Muslim yang kemas, harum, berdisiplin dan disenangi orang sekeliling.",
      icon: "Smile",
    },
    {
      title: "Mendapat Ganjaran & Kasih Sayang Allah",
      desc: "Kebersihan adalah sebahagian daripada tuntutan iman yang amat mulia.",
      icon: "Award",
    },
  ],
  objektif: [
    "Menyatakan pengertian bersuci dan hukumnya mengikut syarak.",
    "Mengenal pasti dan membezakan 3 kategori najis: Mukhaffafah, Mutawassitah dan Mughallazah.",
    "Mengaplikasikan kaedah menyucikan setiap jenis najis dengan langkah yang betul.",
    "Mempraktikkan amalan bersuci dan menjaga kebersihan dalam kehidupan harian.",
  ],
};

export const AIR_MUTLAK_LIST = [
  { name: "Air Paip / Telaga", desc: "Air bawah tanah atau bekalan terawat yang suci lagi menyucikan.", emoji: "🚰" },
  { name: "Air Hujan", desc: "Air yang turun dari langit, bersih dan belum tercemar.", emoji: "🌧️" },
  { name: "Air Sungai", desc: "Air tawar yang mengalir di alur sungai semula jadi.", emoji: "🏞️" },
  { name: "Air Laut", desc: "Air masin yang suci airnya dan halal bangkainya.", emoji: "🌊" },
  { name: "Air Mata Air", desc: "Air yang memancar keluar dari perut bumi.", emoji: "🫧" },
  { name: "Air Embun", desc: "Titisan air sejuk yang terbentuk pada waktu malam/pagi.", emoji: "💧" },
  { name: "Air Salji / Ais", desc: "Air yang beku atau cair daripada salji.", emoji: "❄️" },
];

export const PERBEZAAN_BERSUCI = [
  {
    kategori: "Membersihkan Kotoran Biasa",
    contoh: "Habuk bilik darjah, percikan dakwat pen, tanah atau lumpur bersih.",
    hukum: "Tidak membatalkan solat jika bersih, tetapi sunat dibersihkan agar kemas.",
    kaedah: "Cukup dicuci dengan sabun atau dibilas air seperti biasa.",
  },
  {
    kategori: "Menyucikan Najis",
    contoh: "Air kencing, tahi, darah luka, nanah, najis anjing/babi.",
    hukum: "Wajib disucikan kerana menghalang sah solat dan ibadah.",
    kaedah: "Perlu kaedah khusus mengikut kategori (renjis / basuh hilang bau warna rasa / sertu 7 kali).",
  },
  {
    kategori: "Menghilangkan Hadas",
    contoh: "Hadas kecil (buang air, kentut), Hadas besar (haid, mimpi basah/janabah).",
    hukum: "Wajib dihilangkan sebelum menunaikan solat atau tawaf.",
    kaedah: "Hadas kecil dengan Berwuduk; Hadas besar dengan Mandi Wajib. (Bukan menyucikan najis luaran semata-mata).",
  },
];

export const TIGA_JENIS_NAJIS = {
  mukhaffafah: {
    id: "mukhaffafah",
    nama: "Najis Mukhaffafah (Ringan)",
    maksud: "Najis ringan yang diringankan syarak kaedah penyuciannya.",
    contoh: "Air kencing bayi lelaki yang berumur 2 tahun ke bawah yang hanya menyusu susu ibu sahaja.",
    syaratPenting: [
      "Bayi lelaki (bukan bayi perempuan).",
      "Berumur 2 tahun ke bawah (hijrah).",
      "Belum makan atau minum apa-apa selain susu ibunya (kecuali ubat atau kurma tahnik).",
    ],
    kaedah: [
      "1. Lap atau keringkan air kencing tersebut hingga hilang ainnya.",
      "2. Renjiskan air mutlak ke atas kawasan terkena najis sehingga merata.",
      "3. Keringkan kawasan tersebut dengan kain bersih.",
    ],
    catatan: "Jika bayi perempuan atau sudah makan bubur/susu formula, hukumnya bertukar menjadi Najis Mutawassitah!",
    warnaBadge: "bg-pink-100 text-pink-700 border-pink-300",
  },
  mutawassitah: {
    id: "mutawassitah",
    nama: "Najis Mutawassitah (Sederhana)",
    maksud: "Najis sederhana iaitu najis selain daripada Mukhaffafah dan Mughallazah.",
    contoh: "Darah luka, nanah, bangkai binatang (selain ikan & belalang), tahi, muntah, serta air kencing manusia biasa.",
    syaratPenting: [
      "Najis 'Ainiyah: Najis yang kelihatan warna, bau atau rasanya.",
      "Najis Hukmiyah: Najis yang telah kering dan tiada lagi kesan zatnya tetapi hukum najis masih ada.",
    ],
    kaedah: [
      "1. Buang dan bersihkan zat (ain) najis terlebih dahulu.",
      "2. Basuh dan alirkan air mutlak ke tempat yang terkena najis.",
      "3. Basuh sehingga hilang bau, warna dan rasanya mengikut kemampuan.",
    ],
    catatan: "Jika warna atau bau masih sukar dihilangkan selepas dibasuh bersungguh-sungguh, ia dimaafkan (dima'fu).",
    warnaBadge: "bg-rose-100 text-rose-700 border-rose-300",
  },
  mughallazah: {
    id: "mughallazah",
    nama: "Najis Mughallazah (Berat)",
    maksud: "Najis berat yang memerlukan kaedah penyucian khusus (Sertu).",
    contoh: "Anjing, babi serta keturunan daripada kedua-duanya atau salah satu daripadanya (Mazhab Syafi'i).",
    syaratPenting: [
      "Air liur, bulu basah, peluh, darah, dan kotoran anjing atau babi.",
      "Menyentuh ketika salah satu atau kedua-duanya dalam keadaan basah/lembap.",
    ],
    kaedah: [
      "1. Hilangkan zat (ain) najis terlebih dahulu.",
      "2. Basuh sebanyak 7 kali basuhan dengan air mutlak yang mengalir.",
      "3. Salah satu daripada 7 basuhan tersebut mestilah air yang bercampur tanah suci sehingga keruh (lazimnya basuhan pertama atau awal).",
      "4. Enam basuhan lagi menggunakan air mutlak yang bersih.",
    ],
    catatan: "Perhatian penting: Menyucikan najis mughallazah dinamakan 'Sertu', manakala 'Samak' adalah menyucikan kulit haiwan selain anjing dan babi.",
    warnaBadge: "bg-purple-100 text-purple-700 border-purple-300",
  },
};

export const SITUASI_HARIAN_LIST = [
  {
    id: 1,
    title: "Situasi 1: Adik Bayi Kencing",
    scenario: "Baju kurung Sarah terkena percikan air kencing adik lelakinya yang baru berusia 6 bulan dan hanya minum susu ibu.",
    options: [
      { text: "Lap air kencing hingga kering, lalu renjiskan air mutlak ke tempat tersebut.", isCorrect: true, feedback: "Tepat sekali! Ini adalah Najis Mukhaffafah kerana bayi lelaki bawah 2 tahun yang hanya menyusu susu ibu. Cukup dilap dan direnjis air mutlak." },
      { text: "Mesti basuh 7 kali dengan salah satunya air tanah.", isCorrect: false, feedback: "Kurang tepat. 7 basuhan air tanah adalah untuk Najis Mughallazah (anjing/babi), bukan najis bayi." },
      { text: "Biarkan sahaja sehingga kering tanpa buat apa-apa.", isCorrect: false, feedback: "Tidak boleh! Najis mesti disucikan agar pakaian sah dipakai untuk solat." },
    ],
  },
  {
    id: 2,
    title: "Situasi 2: Lutut Berdarah di Padang",
    scenario: "Seluar sukan Haris terkena titisan darah daripada luka di lututnya selepas terjatuh semasa bermain bola di padang sekolah.",
    options: [
      { text: "Renjiskan sedikit air sahaja tanpa membuang darah.", isCorrect: false, feedback: "Salah. Merenjis hanya untuk air kencing bayi lelaki mukhaffafah. Darah adalah najis mutawassitah." },
      { text: "Buang kesan darah, alirkan air mutlak hingga hilang warna, bau dan rasanya.", isCorrect: true, feedback: "Tahniah, jawapan tepat! Darah ialah Najis Mutawassitah, wajib dibasuh dengan air mutlak hingga hilang zat dan sifatnya." },
      { text: "Gosok dengan tanah kering sahaja.", isCorrect: false, feedback: "Tidak tepat. Tanah hanya digunakan dalam basuhan sertu najis mughallazah atau tayamum." },
    ],
  },
  {
    id: 3,
    title: "Situasi 3: Terpijak Air Liur Anjing Basah",
    scenario: "Ketika berjalan ke masjid selepas hujan, kasut Luqman dijilat oleh anjing basah yang lalu di tepi jalan.",
    options: [
      { text: "Cukup lap kasut dengan tisu basah berbau wangi.", isCorrect: false, feedback: "Tidak memadai! Tisu basah tidak dapat menyucikan najis mughallazah mengikut syarak." },
      { text: "Lakukan kaedah Sertu: basuh 7 kali dengan air mutlak, satu daripadanya air bercampur tanah suci.", isCorrect: true, feedback: "Cemerlang! Anjing dan air liurnya tergolong dalam Najis Mughallazah yang wajib disertu 7 kali basuhan." },
      { text: "Renjiskan air paip sekali sahaja.", isCorrect: false, feedback: "Salah. Najis berat memerlukan kaedah sertu yang lengkap 7 kali basuhan." },
    ],
  },
  {
    id: 4,
    title: "Situasi 4: Papan Meja Berhabuk dan Kotoran Pensel",
    scenario: "Meja belajar Amira di kelas kotor kerana habuk pemadam, serpihan pensel dan debu.",
    options: [
      { text: "Ini najis berat yang wajib disertu dengan air tanah.", isCorrect: false, feedback: "Bukan najis! Habuk dan pensel hanyalah kotoran biasa, bukan najis." },
      { text: "Ini kotoran biasa: lap dan bersihkan dengan kain lembap atau sabun agar kemas.", isCorrect: true, feedback: "Betul sekali! Habuk bukan najis dan tidak membatalkan solat, tetapi sunat dibersihkan demi kebersihan." },
      { text: "Wajib ambil wuduk sebelum menyentuh meja tersebut.", isCorrect: false, feedback: "Tidak perlu wuduk untuk membersihkan kotoran biasa." },
    ],
  },
];

export const AMALI_DEMO_LIST = [
  {
    id: "utama",
    title: "Video Pembelajaran: Mari Bersuci Tahun 4 (Pendidikan Islam)",
    badge: "Video Utama",
    youtubeEmbedId: "GYTe1OtjwBY",
    youtubeUrl: "https://www.youtube.com/watch?v=GYTe1OtjwBY",
    desc: "Video rasmi pembelajaran Mari Bersuci bagi mata pelajaran Pendidikan Islam Tahun 4. Tonton penerangan lengkap tentang konsep bersuci, jenis najis dan kaedah penyucian.",
    langkah: [
      "Langkah 1: Tonton video pembelajaran dengan teliti dan dengar penerangan ustaz/ustazah.",
      "Langkah 2: Kenal pasti perbezaan antara ketiga-tiga jenis najis yang diterangkan dalam video.",
      "Langkah 3: Amati kaedah amali merenjis, membasuh dan sertu 7 kali basuhan.",
      "Langkah 4: Jawab 3 soalan refleksi kendiri di sebelah untuk mengukuhkan kefahaman.",
    ],
    refleksi: [
      "Apakah perkara utama yang anda pelajari daripada video Mari Bersuci ini?",
      "Bagaimanakah cara menyucikan najis yang ditunjukkan dalam video tersebut?",
      "Mengapakah kebersihan dan kesucian amat penting sebelum kita menunaikan solat?",
    ],
  },
  {
    id: "mukhaffafah",
    title: "Amali 1: Kaedah Menyucikan Najis Mukhaffafah",
    badge: "Najis Ringan",
    youtubeEmbedId: "GYTe1OtjwBY",
    youtubeUrl: "https://www.youtube.com/watch?v=GYTe1OtjwBY",
    desc: "Panduan amali menyucikan percikan air kencing bayi lelaki berumur 2 tahun ke bawah yang belum makan selain susu ibu.",
    langkah: [
      "Langkah 1: Sediakan kain atau tisu bersih. Lap dan keringkan air kencing tersebut hingga hilang zatnya.",
      "Langkah 2: Ambil air mutlak bersih menggunakan tapak tangan atau penyembur.",
      "Langkah 3: Renjiskan air mutlak ke seluruh permukaan yang terkena najis sehingga basah merata.",
      "Langkah 4: Keringkan semula dengan kain yang suci.",
    ],
    refleksi: [
      "Mengapakah air kencing bayi perempuan tidak boleh disucikan dengan hanya merenjis air?",
      "Apakah syarat umur dan makanan bagi bayi lelaki tersebut?",
      "Adakah air mutlak perlu dialirkan sehingga bertakung?",
    ],
  },
  {
    id: "mutawassitah",
    title: "Amali 2: Kaedah Menyucikan Najis Mutawassitah",
    badge: "Najis Sederhana",
    youtubeEmbedId: "k6KjYjGg9cQ",
    youtubeUrl: "https://www.youtube.com/watch?v=k6KjYjGg9cQ",
    desc: "Demonstrasi praktikal menyucikan pakaian atau lantai yang terkena najis sederhana seperti darah, air kencing biasa atau muntah.",
    langkah: [
      "Langkah 1: Buang zat najis terlebih dahulu (gunakan tisu atau penyodok jika perlu).",
      "Langkah 2: Alirkan air mutlak ke atas kawasan tersebut dari atas ke bawah.",
      "Langkah 3: Gosok perlahan-lahan untuk memastikan hilang tiga sifat najis: WARNA, BAU dan RASA.",
      "Langkah 4: Perah dan jemur pakaian di tempat yang bersih.",
    ],
    refleksi: [
      "Apakah yang perlu dilakukan sekiranya kesan warna darah masih ada selepas dibasuh bersungguh-sungguh?",
      "Mengapakah air mutlak mesti dialirkan ke atas najis, bukan merendam najis dalam sebaldi air?",
      "Sebutkan 3 contoh lain bagi najis mutawassitah.",
    ],
  },
  {
    id: "mughallazah",
    title: "Amali 3: Kaedah Sertu Najis Mughallazah (7 Basuhan)",
    badge: "Najis Berat",
    youtubeEmbedId: "Wv0c_b1N-mI",
    youtubeUrl: "https://www.youtube.com/watch?v=Wv0c_b1N-mI",
    desc: "Panduan tertib melakukan kaedah sertu bagi menyucikan sesuatu yang terkena anjing atau babi mengikut Mazhab Syafi'i.",
    langkah: [
      "Langkah 1: Bersihkan dan buang zat najis mughallazah terlebih dahulu.",
      "Langkah 2: Sediakan tanah suci yang bebas daripada najis, campurkan ke dalam air mutlak hingga air menjadi keruh.",
      "Langkah 3: Basuhan pertama: Basuh kawasan najis dengan air tanah yang keruh tersebut.",
      "Langkah 4: Basuhan ke-2 hingga ke-7: Basuh kawasan tersebut sebanyak 6 kali lagi dengan air mutlak yang bersih dan jernih.",
    ],
    refleksi: [
      "Apakah perbezaan istilah antara 'Sertu' dan 'Samak'?",
      "Berapakah jumlah keseluruhan basuhan yang disyariatkan?",
      "Apakah jenis tanah yang boleh digunakan untuk basuhan sertu?",
    ],
  },
  {
    id: "importance",
    title: "Amali 4: Kebersihan & Kesucian Gaya Hidup Muslim",
    badge: "Adab & Kesihatan",
    youtubeEmbedId: "G0H9w1r7f54",
    youtubeUrl: "https://www.youtube.com/watch?v=G0H9w1r7f54",
    desc: "Video penghayatan tentang adab kebersihan diri, mencuci tangan sebelum makan, memotong kuku, dan menjaga kebersihan tandas serta masjid.",
    langkah: [
      "Adab 1: Membaca doa masuk tandas dan melangkah dengan kaki kiri.",
      "Adab 2: Beristinja' dengan sempurna menggunakan air mutlak atau benda kesat.",
      "Adab 3: Membasuh tangan dengan sabun selepas selesai bersuci.",
      "Adab 4: Menjaga kebersihan pakaian solat agar sentiasa wangi dan suci.",
    ],
    refleksi: [
      "Bagaimanakah amalan bersuci membina disiplin diri murid seharian?",
      "Mengapakah Rasulullah SAW bersabda bahawa kebersihan itu sebahagian daripada iman?",
      "Apakah akibat mengabaikan istinja' yang sempurna?",
    ],
  },
];
