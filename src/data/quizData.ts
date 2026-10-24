import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Apakah maksud bersuci (taharah) dari segi istilah syarak?",
    options: [
      "Mandi menggunakan sabun wangi dan menyikat rambut.",
      "Menghilangkan najis atau mengangkat hadas yang menghalang sah solat.",
      "Memakai pakaian yang mahal dan berwarna putih semata-mata.",
      "Mencuci tangan sebelum dan selepas menikmati makanan."
    ],
    correctAnswer: 1,
    explanation: "Taharah dari segi syarak bermaksud menghilangkan najis atau mengangkat hadas yang menghalang daripada sah solat dan ibadah lain yang disyaratkan bersuci.",
    category: "maksud"
  },
  {
    id: 2,
    question: "Antara berikut, yang manakah merupakan contoh air mutlak yang sah digunakan untuk bersuci?",
    options: [
      "Air kopi dan teh panas.",
      "Air mawar yang wangi harum.",
      "Air paip, air hujan dan air sungai.",
      "Air sabun yang berbuih tebal."
    ],
    correctAnswer: 2,
    explanation: "Air mutlak ialah air yang suci lagi menyucikan, seperti air paip/telaga, air hujan, air sungai, air laut, air embun, air mata air dan air salji.",
    category: "maksud"
  },
  {
    id: 3,
    question: "Apakah yang dimaksudkan dengan Najis Mukhaffafah?",
    options: [
      "Najis berat seperti anjing dan babi.",
      "Air kencing bayi lelaki berumur 2 tahun ke bawah yang hanya minum susu ibu.",
      "Semua jenis darah dan muntah manusia.",
      "Kotoran habuk dan pensel di atas meja."
    ],
    correctAnswer: 1,
    explanation: "Najis Mukhaffafah ialah air kencing bayi lelaki yang berumur 2 tahun ke bawah yang belum makan atau minum apa-apa selain susu ibunya.",
    category: "mukhaffafah"
  },
  {
    id: 4,
    question: "Bagaimanakah kaedah yang betul untuk menyucikan Najis Mukhaffafah?",
    options: [
      "Membasuh sebanyak 7 kali dengan salah satunya air bercampur tanah.",
      "Mandi wajib dengan meratakan air ke seluruh anggota badan.",
      "Lap air kencing hingga hilang zatnya, kemudian renjiskan air mutlak hingga rata.",
      "Cukup dengan menyembur minyak wangi ke tempat najis tersebut."
    ],
    correctAnswer: 2,
    explanation: "Kaedah menyucikan najis mukhaffafah ialah dilap atau dikeringkan terlebih dahulu sehingga hilang ain najis, kemudian direnjiskan air mutlak ke atasnya.",
    category: "mukhaffafah"
  },
  {
    id: 5,
    question: "Manakah antara berikut tergolong dalam kategori Najis Mutawassitah?",
    options: [
      "Air liur anjing basah.",
      "Darah luka, nanah, bangkai dan air kencing orang dewasa.",
      "Debu tanah yang berterbangan di udara.",
      "Air kencing bayi lelaki 4 bulan yang hanya menyusu susu ibu."
    ],
    correctAnswer: 1,
    explanation: "Darah luka, nanah, bangkai dan air kencing biasa tergolong dalam Najis Mutawassitah (najis sederhana).",
    category: "mutawassitah"
  },
  {
    id: 6,
    question: "Apakah 3 sifat najis mutawassitah yang WAJIB dihilangkan semasa membasuh?",
    options: [
      "Bentuk, berat dan kelajuan.",
      "Warna, bau dan rasa.",
      "Suhu, jenama dan ketebalan.",
      "Kilauan, corak dan kelembapan."
    ],
    correctAnswer: 1,
    explanation: "Semasa menyucikan najis mutawassitah, tempat terkena najis hendaklah dibasuh dengan air mutlak sehingga hilang tiga sifatnya iaitu WARNA, BAU dan RASA.",
    category: "mutawassitah"
  },
  {
    id: 7,
    question: "Najis Mughallazah merujuk kepada:",
    options: [
      "Anjing, babi serta keturunan kedua-duanya atau salah satu daripadanya.",
      "Percikan minyak gorengan pada baju.",
      "Air kencing bayi perempuan yang berusia 1 tahun.",
      "Kucing peliharaan yang basah bulunya."
    ],
    correctAnswer: 0,
    explanation: "Menurut Mazhab Syafi'i, Najis Mughallazah (najis berat) ialah anjing dan babi serta segala keturunan daripadanya.",
    category: "mughallazah"
  },
  {
    id: 8,
    question: "Berapakah bilangan basuhan dan syarat khusus dalam kaedah SERTU bagi najis mughallazah?",
    options: [
      "3 kali basuhan dengan air sabun wangi.",
      "5 kali basuhan dengan air panas menggelegak.",
      "7 kali basuhan dengan air mutlak, salah satu daripadanya air bercampur tanah suci.",
      "1 kali basuhan dengan air mutlak sahaja."
    ],
    correctAnswer: 2,
    explanation: "Kaedah sertu memerlukan 7 kali basuhan dengan air mutlak, di mana salah satu basuhan (lazimnya basuhan pertama) dicampur dengan tanah yang suci.",
    category: "mughallazah"
  },
  {
    id: 9,
    question: "Apakah perbezaan utama antara 'Menyucikan Najis' dengan 'Mengangkat Hadas'?",
    options: [
      "Menyucikan najis ialah membersihkan kotoran zahir, manakala mengangkat hadas melibatkan wuduk atau mandi wajib bagi menyucikan diri daripada hadas.",
      "Menyucikan najis tidak menggunakan air, manakala hadas guna air tanah.",
      "Tiada apa-apa perbezaan, kedua-duanya istilah yang sama maksud.",
      "Mengangkat hadas hanya untuk kanak-kanak, menyucikan najis untuk orang dewasa."
    ],
    correctAnswer: 0,
    explanation: "Najis ialah kekotoran zahir pada badan, pakaian atau tempat. Manakala hadas ialah keadaan rohani/hukmi yang diangkat melalui wuduk (hadas kecil) atau mandi wajib (hadas besar).",
    category: "amali"
  },
  {
    id: 10,
    question: "Ahmad terjatuh ketika berlari dan kain seluarnya terkena percikan lumpur parit yang berbau busuk tahi. Apakah tindakan yang betul?",
    options: [
      "Biarkan kering lalu terus memakai seluar itu untuk solat Zohor.",
      "Kira sebagai najis mughallazah dan sertu seluar 7 kali basuhan dengan tanah.",
      "Cukup lap dengan tisu kering tanpa basuh dengan air.",
      "Basuh seluar dengan mengalirkan air mutlak hingga hilang bau busuk, warna dan kesan najis."
    ],
    correctAnswer: 3,
    explanation: "Kotoran tahi atau parit bernajis adalah najis mutawassitah. Seluar perlu dibasuh dengan air mutlak yang mengalir sehingga hilang zat, warna dan bau sebelum sah dipakai bersolat.",
    category: "situasi"
  }
];
