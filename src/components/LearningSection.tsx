import React, { useState } from 'react';
import {
  AIR_MUTLAK_LIST,
  PERBEZAAN_BERSUCI,
  TIGA_JENIS_NAJIS,
  SITUASI_HARIAN_LIST,
} from '../data/learningData';
import { SectionId, UserProgress } from '../types';
import { RibbonBow, WaterDropIcon, SparkleIcon, CleanStarIcon, FlowerSticker, HeartSticker } from './RibbonIcons';
import {
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Layers,
  HelpCircle,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

interface Props {
  progress: UserProgress;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
  onNavigate: (section: SectionId) => void;
}

export function LearningSection({ progress, onUpdateProgress, onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState<'modulA' | 'modulB' | 'modulC' | 'modulD'>('modulA');
  const [selectedNajis, setSelectedNajis] = useState<'mukhaffafah' | 'mutawassitah' | 'mughallazah'>('mukhaffafah');
  const [stepCategory, setStepCategory] = useState<'mukhaffafah' | 'mutawassitah' | 'mughallazah'>('mukhaffafah');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Situasi states
  const [situationAnswers, setSituationAnswers] = useState<Record<number, number>>({});
  const [situationFeedback, setSituationFeedback] = useState<Record<number, { isCorrect: boolean; feedback: string }>>({});

  const handleCompleteModule = (moduleId: 'modulA' | 'modulB' | 'modulC' | 'modulD') => {
    onUpdateProgress((prev) => ({
      ...prev,
      completedModules: {
        ...prev.completedModules,
        [moduleId]: true,
      },
    }));
  };

  const handleSelectSituationOption = (sitId: number, optIdx: number, isCorrect: boolean, feedback: string) => {
    setSituationAnswers((prev) => ({ ...prev, [sitId]: optIdx }));
    setSituationFeedback((prev) => ({ ...prev, [sitId]: { isCorrect, feedback } }));

    const updatedAnswers = { ...situationAnswers, [sitId]: optIdx };
    const allAnswered = SITUASI_HARIAN_LIST.every((s) => updatedAnswers[s.id] !== undefined);
    if (allAnswered) {
      handleCompleteModule('modulD');
    }
  };

  const currentNajisData = TIGA_JENIS_NAJIS[selectedNajis];

  const stepsData = {
    mukhaffafah: [
      { step: 1, title: "Langkah 1: Lap Ain Najis", desc: "Gunakan kain bersih atau tisu untuk menyerap dan mengeringkan air kencing bayi lelaki tersebut sehingga hilang zatnya.", icon: "🧻" },
      { step: 2, title: "Langkah 2: Renjiskan Air Mutlak", desc: "Ambil sedikit air mutlak dan renjiskan ke atas kawasan najis tersebut sehingga terkena merata pada seluruh bahagian najis.", icon: "💦" },
      { step: 3, title: "Langkah 3: Keringkan Semula", desc: "Lap semula dengan kain bersih yang suci. Pakaian atau tempat kini kembali suci dan sah untuk ibadah solat.", icon: "✨" },
    ],
    mutawassitah: [
      { step: 1, title: "Langkah 1: Buang Ain Najis", desc: "Buang dan bersihkan bahan najis (contohnya darah luka atau tahi) dengan kain atau tisu sehingga tiada lagi ketulan najis.", icon: "🗑️" },
      { step: 2, title: "Langkah 2: Alirkan Air Mutlak", desc: "Basuh tempat yang terkena najis dengan mengalirkan air mutlak bersih dari arah atas ke bawah.", icon: "🚰" },
      { step: 3, title: "Langkah 3: Hilangkan 3 Sifat", desc: "Pastikan basuhan menghilangkan ketiga-tiga sifat najis: WARNA, BAU dan RASA (jika masih ada kesan sukar tanggal selepas dibasuh, ia dimaafkan).", icon: "🫧" },
    ],
    mughallazah: [
      { step: 1, title: "Langkah 1: Buang Zat Najis", desc: "Buang dan bersihkan terlebih dahulu ain atau cecair najis anjing/babi yang mengenai perkakas atau anggota badan.", icon: "🧼" },
      { step: 2, title: "Langkah 2: Sediakan Air Tanah Suci", desc: "Sediakan tanah yang suci daripada najis, campurkan ke dalam bekas air mutlak hingga air berubah menjadi keruh.", icon: "🥣" },
      { step: 3, title: "Langkah 3: Basuhan 1 (Air Tanah)", desc: "Basuh bahagian terkena najis dengan air tanah yang keruh tersebut hingga merata.", icon: "🤎" },
      { step: 4, title: "Langkah 4: Enam Basuhan Air Mutlak", desc: "Bilas kawasan tersebut dengan air mutlak yang bersih sebanyak 6 kali lagi sehingga genap 7 basuhan keseluruhannya.", icon: "🌊" },
    ],
  };

  return (
    <section id="pembelajaran" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-extrabold text-pink-700 uppercase tracking-widest bg-white/90 px-4 py-1.5 rounded-full border-2 border-pink-200 shadow-xs">
            <RibbonBow className="w-4 h-4 text-pink-500" />
            <span>Pusat Pembelajaran Utama</span>
            <RibbonBow className="w-4 h-4 text-pink-500" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-pink-950 mb-3 drop-shadow-2xs">
            Sudut Pembelajaran Mari Bersuci
          </h2>
          <p className="text-sm sm:text-base text-pink-950 font-semibold bg-white/70 p-2 rounded-2xl max-w-2xl mx-auto border border-pink-100">
            Terokai 4 modul interaktif lengkap dengan nota ringkas, ilustrasi ramah kanak-kanak, perbezaan hukum dan latihan situasi harian.
          </p>
        </div>

        {/* 4 Modules Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {[
            { id: 'modulA', label: 'Modul A: Maksud & 7 Jenis Air', isCompleted: progress.completedModules.modulA },
            { id: 'modulB', label: 'Modul B: 3 Jenis Najis', isCompleted: progress.completedModules.modulB },
            { id: 'modulC', label: 'Modul C: Urutan Langkah Amali', isCompleted: progress.completedModules.modulC },
            { id: 'modulD', label: 'Modul D: Situasi Harian', isCompleted: progress.completedModules.modulD },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer whitespace-nowrap shadow-sm hover:scale-102 ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white shadow-md shadow-pink-200 ring-3 ring-pink-300'
                    : 'bg-white/90 text-pink-900 hover:bg-pink-100/90 border-2 border-pink-200'
                }`}
              >
                <span>{tab.label}</span>
                {tab.isCompleted && (
                  <CheckCircle2 className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-500'}`} />
                )}
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT */}

        {/* MODUL A */}
        {activeTab === 'modulA' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Banner Modul A with Custom Artwork */}
            <div className="coquette-card p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <span className="px-3.5 py-1 bg-pink-100 text-pink-800 text-xs font-extrabold rounded-full border border-pink-200">
                  🌸 Modul A: Asas Taharah
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-pink-950">
                  Pengenalan Taharah & 7 Jenis Air Mutlak
                </h3>
                <p className="text-xs sm:text-sm text-pink-950 leading-relaxed font-semibold">
                  Dalam Islam, hanya <strong>Air Mutlak</strong> yang sah digunakan untuk bersuci daripada najis dan mengangkat hadas.
                  Air mutlak ialah air yang kekal dengan sifat asal kejadiannya, suci lagi menyucikan.
                </p>
              </div>
              <div className="w-full md:w-auto shrink-0 flex items-center justify-center p-2 bg-gradient-to-tr from-pink-200 via-white to-pink-100 rounded-2xl border-2 border-pink-300 shadow-md">
                <img
                  src="/src/assets/images/amali_alat_bersuci_1792824921738.jpg"
                  alt="Alat bersuci air paip dan tuala"
                  className="w-56 h-40 object-cover rounded-xl shadow-xs"
                />
              </div>
            </div>

            {/* 7 Jenis Air Mutlak Grid */}
            <div>
              <div className="text-center mb-5">
                <h4 className="font-display text-xl font-extrabold text-pink-950">
                  7 Sumber Air Mutlak yang Suci Lagi Menyucikan
                </h4>
                <p className="text-xs text-pink-800 font-semibold">Air semula jadi yang boleh dibuat basuhan najis dan wuduk</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {AIR_MUTLAK_LIST.map((air, i) => (
                  <div
                    key={i}
                    className="coquette-card p-4 hover:border-pink-400 text-center flex flex-col items-center justify-center transition-all group"
                  >
                    <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">{air.emoji}</span>
                    <h5 className="font-display text-xs sm:text-sm font-bold text-pink-950 mb-1">
                      {air.name}
                    </h5>
                    <p className="text-[11px] text-pink-900/80 leading-snug font-medium">
                      {air.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Perbezaan: Kotoran vs Najis vs Hadas */}
            <div className="coquette-card p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-6 h-6 text-pink-500" />
                <h4 className="font-display text-xl font-extrabold text-pink-950">
                  Perbezaan Antara Kotoran Biasa, Najis dan Hadas
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {PERBEZAAN_BERSUCI.map((item, idx) => (
                  <div key={idx} className="p-5 bg-white/90 rounded-2xl border-2 border-pink-200 shadow-2xs flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 text-xs font-extrabold rounded-xl border border-pink-200 mb-2.5">
                        {item.kategori}
                      </span>
                      <div className="space-y-2 text-xs">
                        <div>
                          <strong className="text-pink-950 block font-bold">Contoh:</strong>
                          <span className="text-pink-900 font-medium">{item.contoh}</span>
                        </div>
                        <div>
                          <strong className="text-pink-950 block font-bold">Hukum Solat:</strong>
                          <span className="text-pink-900 font-medium">{item.hukum}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t-2 border-pink-100 text-xs">
                      <strong className="text-rose-700 block font-bold">Cara Penyucian:</strong>
                      <span className="text-pink-950 font-bold">{item.kaedah}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Finish Modul A */}
            <div className="p-5 bg-white/90 rounded-2xl border-2 border-pink-300 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-pink-950 font-extrabold">
                <SparkleIcon className="w-5 h-5 text-pink-500" />
                <span>Adakah anda telah memahami konsep asas bersuci dan jenis-jenis air?</span>
              </div>
              <button
                onClick={() => {
                  handleCompleteModule('modulA');
                  setActiveTab('modulB');
                }}
                className="px-6 py-3 text-xs font-extrabold text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-xl shadow-md shadow-pink-200 cursor-pointer transition-all flex items-center gap-2 shrink-0 hover:scale-102"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Saya Faham, Teruskan ke Modul B</span>
              </button>
            </div>
          </div>
        )}

        {/* MODUL B */}
        {activeTab === 'modulB' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Spotlight Illustration Card for Modul B */}
            <div className="coquette-card p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs font-bold rounded-full border border-pink-200">
                  🎀 Modul B: Klasifikasi Fiqh
                </span>
                <h3 className="font-display text-2xl font-extrabold text-pink-950">
                  Kenali Tiga Jenis Najis dalam Islam
                </h3>
                <p className="text-xs sm:text-sm text-pink-950 font-medium leading-relaxed">
                  Najis dibahagikan kepada tiga tahap kesukaran penyucian mengikut syariat Islam: <strong>Mukhaffafah</strong> (ringan), <strong>Mutawassitah</strong> (sederhana) dan <strong>Mughallazah</strong> (berat).
                </p>
              </div>
              <div className="shrink-0 p-1 bg-gradient-to-r from-pink-200 to-rose-200 rounded-2xl border-2 border-pink-300 shadow-md">
                <img
                  src="/src/assets/images/modul_tiga_najis_1792827637793.jpg"
                  alt="Ilustrasi Tiga Kaedah Penyucian Najis"
                  className="w-52 h-36 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* 3 Categories Tab */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { id: 'mukhaffafah', label: '1. Najis Mukhaffafah (Ringan)' },
                { id: 'mutawassitah', label: '2. Najis Mutawassitah (Sederhana)' },
                { id: 'mughallazah', label: '3. Najis Mughallazah (Berat)' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedNajis(item.id as any)}
                  className={`px-5 py-2.5 text-xs sm:text-sm font-extrabold rounded-2xl transition-all cursor-pointer shadow-xs ${
                    selectedNajis === item.id
                      ? 'bg-rose-500 text-white shadow-md shadow-pink-200 ring-3 ring-rose-300'
                      : 'bg-white/90 text-pink-900 hover:bg-pink-100 border-2 border-pink-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Selected Najis Details Card */}
            <div className="coquette-card p-6 sm:p-8 relative">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b-2 border-pink-100">
                <div className="flex items-center gap-2">
                  <RibbonBow className="w-7 h-7 text-pink-500" />
                  <h3 className="font-display text-2xl font-extrabold text-pink-950">
                    {currentNajisData.nama}
                  </h3>
                </div>
                <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold border-2 ${currentNajisData.warnaBadge}`}>
                  Kategori Fiqh Tahun 4
                </span>
              </div>

              {/* Definition & Examples */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="p-4 bg-pink-50/80 rounded-2xl border-2 border-pink-200">
                    <span className="text-xs font-extrabold text-pink-700 uppercase tracking-wide block mb-1">
                      Maksud Najis:
                    </span>
                    <p className="text-sm font-bold text-pink-950">
                      {currentNajisData.maksud}
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border-2 border-pink-200 shadow-2xs">
                    <span className="text-xs font-extrabold text-rose-700 uppercase tracking-wide block mb-1">
                      Contoh Tepat:
                    </span>
                    <p className="text-xs sm:text-sm text-pink-950 font-bold leading-relaxed">
                      {currentNajisData.contoh}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-amber-50 rounded-2xl border-2 border-amber-200">
                    <span className="text-xs font-extrabold text-amber-900 uppercase tracking-wide block mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600" /> Syarat & Keterangan Penting:
                    </span>
                    <ul className="space-y-1.5 text-xs text-amber-950 font-bold">
                      {currentNajisData.syaratPenting.map((syarat, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-1.5">
                          <span className="text-amber-500 font-extrabold">•</span>
                          <span>{syarat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 bg-pink-100/80 rounded-2xl text-xs text-pink-950 font-bold italic border border-pink-200">
                    💡 {currentNajisData.catatan}
                  </div>
                </div>
              </div>

              {/* Steps to Purify */}
              <div className="p-5 bg-gradient-to-r from-pink-50 via-white to-pink-50 rounded-2xl border-2 border-pink-300 mb-6">
                <h4 className="font-display text-sm font-extrabold text-pink-950 mb-3 flex items-center gap-1.5">
                  <CleanStarIcon className="w-5 h-5 text-pink-500" />
                  Kaedah Menyucikan {currentNajisData.nama}:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentNajisData.kaedah.map((step, idx) => (
                    <div key={idx} className="p-3.5 bg-white rounded-xl border-2 border-pink-200 text-xs text-pink-950 leading-relaxed font-bold shadow-2xs">
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Modul B button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <span className="text-xs text-pink-800 font-bold">
                  Sila pastikan anda membaca ketiga-tiga jenis najis di atas!
                </span>
                <button
                  onClick={() => {
                    handleCompleteModule('modulB');
                    setActiveTab('modulC');
                  }}
                  className="px-6 py-3 text-xs font-extrabold text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-xl shadow-md shadow-pink-200 cursor-pointer transition-all flex items-center gap-2 hover:scale-102"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Tandakan Modul B Selesai & Teruskan</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODUL C */}
        {activeTab === 'modulC' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Sub-selector for Stepper */}
            <div className="text-center max-w-xl mx-auto space-y-3">
              <h3 className="font-display text-2xl font-extrabold text-pink-950">
                Simulasi Urutan Langkah Demi Langkah
              </h3>
              <p className="text-xs text-pink-900 font-semibold">
                Pilih kategori najis untuk melihat urutan langkah amali penyucian secara animasi interaktif:
              </p>
              <div className="flex justify-center gap-2">
                {(['mukhaffafah', 'mutawassitah', 'mughallazah'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setStepCategory(cat);
                      setActiveStepIndex(0);
                    }}
                    className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                      stepCategory === cat
                        ? 'bg-rose-500 text-white shadow-md'
                        : 'bg-white/90 text-pink-800 border-2 border-pink-200 hover:bg-pink-50'
                    }`}
                  >
                    {cat === 'mukhaffafah' ? 'Mukhaffafah' : cat === 'mutawassitah' ? 'Mutawassitah' : 'Mughallazah (Sertu)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Stepper Card */}
            <div className="max-w-3xl mx-auto coquette-card p-6 sm:p-8">
              {/* Progress Bar of Steps */}
              <div className="flex items-center justify-between mb-8 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1.5 bg-pink-200 z-0" />
                {stepsData[stepCategory].map((s, idx) => {
                  const isDone = idx < activeStepIndex;
                  const isCurrent = idx === activeStepIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveStepIndex(idx)}
                      className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-sm transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-rose-500 text-white ring-4 ring-pink-300 shadow-lg scale-110'
                          : isDone
                          ? 'bg-pink-500 text-white'
                          : 'bg-white text-pink-600 border-3 border-pink-300'
                      }`}
                    >
                      {s.step}
                    </button>
                  );
                })}
              </div>

              {/* Active Step Content with Icon Stamp */}
              {(() => {
                const step = stepsData[stepCategory][activeStepIndex];
                return (
                  <div className="text-center py-8 px-6 bg-gradient-to-b from-pink-50 via-white to-pink-50 rounded-2xl border-2 border-pink-200 mb-8 relative">
                    <span className="text-4xl mb-3 block animate-gentle-sway">{step.icon}</span>
                    <span className="px-4 py-1 bg-pink-100 text-pink-800 text-xs font-extrabold rounded-full mb-3 inline-block border border-pink-200">
                      Langkah {step.step} daripada {stepsData[stepCategory].length}
                    </span>
                    <h4 className="font-display text-2xl font-extrabold text-pink-950 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-sm text-pink-950 max-w-lg mx-auto leading-relaxed font-semibold">
                      {step.desc}
                    </p>
                  </div>
                );
              })()}

              {/* Stepper Controls */}
              <div className="flex items-center justify-between gap-3">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2.5 text-xs font-bold text-pink-800 bg-pink-100 hover:bg-pink-200 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Sebelumnya
                </button>

                <span className="text-xs text-pink-700 font-extrabold">
                  {activeStepIndex + 1} / {stepsData[stepCategory].length}
                </span>

                {activeStepIndex < stepsData[stepCategory].length - 1 ? (
                  <button
                    onClick={() => setActiveStepIndex((prev) => prev + 1)}
                    className="px-6 py-2.5 text-xs font-extrabold text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-xl shadow-md transition-all flex items-center gap-1 cursor-pointer hover:scale-102"
                  >
                    Seterusnya <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleCompleteModule('modulC');
                      setActiveTab('modulD');
                    }}
                    className="px-6 py-2.5 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all flex items-center gap-1 cursor-pointer hover:scale-102"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Lengkapkan Modul C
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* MODUL D */}
        {activeTab === 'modulD' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="px-3.5 py-1 bg-pink-100 text-pink-800 text-xs font-extrabold rounded-full border border-pink-200">
                Modul D: Latihan Aplikasi Fiqh Harian
              </span>
              <h3 className="font-display text-2xl font-extrabold text-pink-950 mt-2 mb-2">
                Kenal Pasti Tindakan Penyucian yang Betul
              </h3>
              <p className="text-xs text-pink-900 font-semibold">
                Pilih tindakan yang tepat bagi setiap situasi harian berikut untuk melengkapkan modul ini.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {SITUASI_HARIAN_LIST.map((sit) => {
                const chosenIdx = situationAnswers[sit.id];
                const feedback = situationFeedback[sit.id];

                return (
                  <div key={sit.id} className="coquette-card p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-extrabold text-pink-800 flex items-center gap-1.5">
                          <FlowerSticker className="w-4 h-4" />
                          <span>{sit.title}</span>
                        </span>
                        {feedback && (
                          <span className={`text-xs font-extrabold flex items-center gap-1 ${feedback.isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {feedback.isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                            {feedback.isCorrect ? 'Tepat' : 'Cuba Lagi'}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-pink-950 font-bold mb-4 p-3.5 bg-pink-50/80 rounded-2xl border-2 border-pink-100 leading-relaxed">
                        {sit.scenario}
                      </p>

                      <div className="space-y-2.5 mb-3">
                        {sit.options.map((opt, optIdx) => {
                          const isSelected = chosenIdx === optIdx;
                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectSituationOption(sit.id, optIdx, opt.isCorrect, opt.feedback)}
                              className={`w-full text-left p-3.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border-2 ${
                                isSelected
                                  ? opt.isCorrect
                                    ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-xs'
                                    : 'bg-rose-50 border-rose-400 text-rose-950 shadow-xs'
                                  : 'bg-white border-pink-200 hover:border-pink-400 text-pink-950'
                              }`}
                            >
                              <div className="flex items-start gap-2.5">
                                <span className="w-5 h-5 rounded-full bg-pink-100 text-pink-800 flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5">
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <span>{opt.text}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {feedback && (
                      <div className={`p-3.5 rounded-2xl text-xs mt-2 font-bold ${feedback.isCorrect ? 'bg-emerald-100 text-emerald-950 border border-emerald-300' : 'bg-rose-100 text-rose-950 border border-rose-300'}`}>
                        {feedback.feedback}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Completion Banner */}
            <div className="text-center pt-4">
              <button
                onClick={() => {
                  handleCompleteModule('modulD');
                  onNavigate('amali');
                }}
                className="px-8 py-3.5 text-sm font-extrabold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 rounded-full shadow-lg shadow-pink-200 transition-all cursor-pointer inline-flex items-center gap-2 hover:scale-102"
              >
                <span>Tandakan Semua Modul Selesai & Teroka Video Amali</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
