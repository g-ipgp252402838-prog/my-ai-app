import { GameItem, GameScenario, StepItem } from '../types';

export const GAME_STAGE_1_ITEMS: GameItem[] = [
  {
    id: "item-1",
    name: "Air kencing bayi lelaki 7 bulan (susu ibu sahaja)",
    category: "mukhaffafah",
    description: "Bayi lelaki bawah 2 tahun yang belum makan makanan pejal.",
    iconName: "Baby",
  },
  {
    id: "item-2",
    name: "Darah luka di lutut",
    category: "mutawassitah",
    description: "Darah yang mengalir keluar daripada badan manusia.",
    iconName: "Droplet",
  },
  {
    id: "item-3",
    name: "Air liur anjing basah",
    category: "mughallazah",
    description: "Jilatan atau cecair daripada anjing mengikut Mazhab Syafi'i.",
    iconName: "ShieldAlert",
  },
  {
    id: "item-4",
    name: "Muntah makanan",
    category: "mutawassitah",
    description: "Cecair perut yang keluar semula melalui mulut.",
    iconName: "AlertCircle",
  },
  {
    id: "item-5",
    name: "Kotoran babi hutan",
    category: "mughallazah",
    description: "Najis berat daripada haiwan babi dan keturunannya.",
    iconName: "XCircle",
  },
  {
    id: "item-6",
    name: "Air kencing kanak-kanak umur 5 tahun",
    category: "mutawassitah",
    description: "Bukan mukhaffafah kerana sudah melebihi 2 tahun dan makan pelbagai makanan.",
    iconName: "HelpCircle",
  },
];

export const GAME_STAGE_2_SCENARIOS: GameScenario[] = [
  {
    id: 1,
    scenario: "Baju Melayu Adam terkena percikan air kencing adik lelakinya yang baru berumur 4 bulan (hanya minum susu ibu).",
    question: "Apakah tindakan Adam untuk menyucikan bajunya dengan pantas dan tepat?",
    options: [
      { text: "Lap air kencing hingga kering, kemudian renjiskan air mutlak ke kawasan najis.", isCorrect: true, feedback: "Syabas! Kaedah menyucikan najis mukhaffafah adalah lap ain najis dan renjis air mutlak." },
      { text: "Mesti direndam dalam air sabun selama 2 hari.", isCorrect: false, feedback: "Tidak perlu direndam berhari-hari. Syarak memberi keringanan dengan merenjis air mutlak." },
      { text: "Basuh 7 kali basuhan dengan air tanah.", isCorrect: false, feedback: "Salah. 7 basuhan air tanah hanya untuk najis mughallazah." },
    ],
  },
  {
    id: 2,
    scenario: "Pinggan di dapur dijilat oleh anjing liar yang masuk secara tidak sengaja.",
    question: "Bagaimanakah cara menyucikan pinggan tersebut mengikut kaedah Sertu?",
    options: [
      { text: "Basuh dengan air paip sekali sahaja bersama sabun pencuci pinggan.", isCorrect: false, feedback: "Belum mencukupi syarat fiqh. Sabun biasa tidak menggantikan basuhan air tanah." },
      { text: "Basuh 7 kali dengan air mutlak, satu daripadanya air bercampur tanah suci.", isCorrect: true, feedback: "Tepat sekali! Pinggan wajib disertu dengan 7 kali basuhan dan 1 daripadanya air tanah suci." },
      { text: "Buang pinggan itu terus ke dalam tong sampah.", isCorrect: false, feedback: "Membazir. Islam mengajar kaedah sertu yang menyucikan perkakas." },
    ],
  },
  {
    id: 3,
    scenario: "Tikar sejadah di surau terkena muntah seorang murid yang pening kepala.",
    question: "Apakah kaedah yang sah untuk menyucikan tikar sejadah tersebut?",
    options: [
      { text: "Buang muntah, alirkan air mutlak hingga hilang bau, warna dan rasa.", isCorrect: true, feedback: "Hebat! Muntah ialah najis mutawassitah, wajib dibasuh hingga hilang ketiga-tiga sifat najis." },
      { text: "Renjis sedikit air seperti najis mukhaffafah.", isCorrect: false, feedback: "Tidak sah. Muntah adalah najis mutawassitah, bukan mukhaffafah." },
      { text: "Sapu bedak wangi di atas muntah tanpa membasuhnya.", isCorrect: false, feedback: "Kesan najis masih ada dan haram bersolat di atasnya." },
    ],
  },
  {
    id: 4,
    scenario: "Tangan Siti terkena dakwat pen biru ketika menulis nota Pendidikan Islam.",
    question: "Adakah tangan Siti bernajis dan bagaimana cara membersihkannya?",
    options: [
      { text: "Dakwat ialah najis mughallazah, mesti disertu air tanah.", isCorrect: false, feedback: "Salah sama sekali. Dakwat bukan najis!" },
      { text: "Bukan najis, hanya kotoran biasa. Cuci tangan dengan sabun dan air paip.", isCorrect: true, feedback: "Bagus! Dakwat hanyalah kotoran biasa, suci dan tidak membatalkan solat jika tiada lapisan tebal menghalang air." },
      { text: "Wajib mandi wajib dengan segera.", isCorrect: false, feedback: "Tidak perlu mandi wajib untuk kotoran pensel/dakwat." },
    ],
  },
];

export const GAME_STAGE_3_SERTU_STEPS: StepItem[] = [
  { id: 101, order: 1, text: "Langkah 1: Buang Zat Najis", subtext: "Hilangkan ain najis seperti air liur atau kekotoran anjing/babi terlebih dahulu." },
  { id: 102, order: 2, text: "Langkah 2: Sediakan Air Tanah Suci", subtext: "Campurkan tanah yang suci dan bersih ke dalam air mutlak sehingga air menjadi keruh." },
  { id: 103, order: 3, text: "Langkah 3: Basuhan Pertama dengan Air Tanah", subtext: "Basuh bahagian yang terkena najis dengan air campuran tanah suci tersebut." },
  { id: 104, order: 4, text: "Langkah 4: Enam Basuhan Air Mutlak", subtext: "Bilas bahagian tersebut sebanyak 6 kali lagi dengan air mutlak yang bersih hingga genap 7 basuhan." },
];
