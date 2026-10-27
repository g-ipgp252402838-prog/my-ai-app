import React, { useState } from 'react';
import { AMALI_DEMO_LIST } from '../data/learningData';
import { SectionId, UserProgress } from '../types';
import { RibbonBow, SparkleIcon, WaterDropIcon, FlowerSticker, HeartSticker } from './RibbonIcons';
import {
  Video,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  BookOpen,
} from 'lucide-react';

interface Props {
  progress: UserProgress;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
  onNavigate: (section: SectionId) => void;
}

export function AmaliSection({ progress, onUpdateProgress, onNavigate }: Props) {
  const [sertuCount, setSertuCount] = useState(0);
  const [sertuFinished, setSertuFinished] = useState(false);
  const [reflectionAnswers, setReflectionAnswers] = useState<Record<string, Record<number, boolean>>>({});
  const [expandedDetails, setExpandedDetails] = useState<Record<string, boolean>>({
    mukhaffafah: true, // Default open first card for discovery
  });

  const handleMarkCompleted = (demoId: string) => {
    onUpdateProgress((prev) => ({
      ...prev,
      completedAmali: {
        ...prev.completedAmali,
        [demoId]: true,
      },
    }));
  };

  const handleSertuRinse = () => {
    if (sertuCount < 7) {
      const next = sertuCount + 1;
      setSertuCount(next);
      if (next === 7) {
        setSertuFinished(true);
        handleMarkCompleted('mughallazah');
      }
    }
  };

  const handleResetSertu = () => {
    setSertuCount(0);
    setSertuFinished(false);
  };

  const toggleReflection = (demoId: string, qIdx: number) => {
    setReflectionAnswers((prev) => ({
      ...prev,
      [demoId]: {
        ...(prev[demoId] || {}),
        [qIdx]: !(prev[demoId]?.[qIdx]),
      },
    }));
  };

  const toggleDetails = (demoId: string) => {
    setExpandedDetails((prev) => ({
      ...prev,
      [demoId]: !prev[demoId],
    }));
  };

  const completedCount = AMALI_DEMO_LIST.filter(
    (demo) => progress.completedAmali[demo.id as keyof typeof progress.completedAmali]
  ).length;

  return (
    <section id="amali" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-extrabold text-pink-700 uppercase tracking-widest bg-white/90 px-4 py-1.5 rounded-full border-2 border-pink-200 shadow-xs">
            <RibbonBow className="w-4 h-4 text-pink-500" />
            <span>Pendidikan Islam Tahun 4 · Aplikasi Amali</span>
            <RibbonBow className="w-4 h-4 text-pink-500" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-pink-950 mb-3 drop-shadow-2xs">
            🎀 Video Pembelajaran dan Amali
          </h2>
          <p className="text-sm sm:text-base text-pink-950 font-semibold bg-white/70 p-2 rounded-2xl max-w-2xl mx-auto border border-pink-100">
            Tonton video panduan amali bagi setiap kategori najis di bawah, fahami tatacara bersuci mengikut syarak, dan lengkapkan semakan tontonan anda.
          </p>

          {/* Quick Progress Indicator */}
          <div className="inline-flex items-center gap-3 mt-4 px-5 py-2 bg-pink-100/80 rounded-full border-2 border-pink-200 text-xs font-black text-pink-900 shadow-xs">
            <Video className="w-4 h-4 text-rose-500" />
            <span>Kemajuan Amali Video:</span>
            <span className="text-rose-600 tabular-nums">{completedCount} / {AMALI_DEMO_LIST.length} Selesai</span>
            <div className="w-20 h-2.5 bg-white rounded-full overflow-hidden border border-pink-300">
              <div
                className="h-full bg-gradient-to-r from-pink-400 to-rose-500 rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / AMALI_DEMO_LIST.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* 4 DISTINCT CARDS ARRANGED IN SEQUENCE 1 TO 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {AMALI_DEMO_LIST.map((demo) => {
            const isCompleted = !!progress.completedAmali[demo.id as keyof typeof progress.completedAmali];
            const isExpanded = !!expandedDetails[demo.id];

            return (
              <div
                key={demo.id}
                className="coquette-card p-6 sm:p-7 flex flex-col justify-between border-2 border-pink-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative top ribbon badge */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex flex-col">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-pink-100 text-pink-900 border border-pink-300 w-fit mb-1.5 shadow-2xs">
                      <RibbonBow className="w-3.5 h-3.5 text-pink-600" />
                      <span>{demo.categoryTitle}</span>
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-black text-pink-950 leading-snug">
                      {demo.activityTitle}
                    </h3>
                  </div>

                  {isCompleted ? (
                    <span className="shrink-0 flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Selesai
                    </span>
                  ) : (
                    <span className="shrink-0 text-[11px] font-extrabold text-pink-700 bg-white/80 px-2.5 py-1 rounded-full border border-pink-200">
                      Amali {demo.number}
                    </span>
                  )}
                </div>

                {/* Brief Description */}
                <p className="text-xs text-pink-900/90 font-medium leading-relaxed mb-3">
                  {demo.desc}
                </p>

                {/* YouTube Responsive Video Container */}
                <div className="relative aspect-16/9 bg-slate-900 rounded-2xl overflow-hidden shadow-lg border-3 border-pink-300 my-2 group">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${demo.youtubeEmbedId}?rel=0&modestbranding=1`}
                    title={demo.activityTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Video Playback Fallback and Completion Actions */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 pb-2 border-b border-pink-100 text-xs">
                  <a
                    href={demo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-pink-50 text-rose-700 font-extrabold rounded-xl border border-pink-300 transition-all hover:scale-102 shadow-2xs"
                  >
                    <span>Tonton di YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => handleMarkCompleted(demo.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-extrabold text-xs transition-all cursor-pointer shadow-xs ${
                      isCompleted
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 text-white shadow-pink-200 active:scale-95 hover:scale-102'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isCompleted ? 'Telah Diselesaikan ✓' : 'Tandakan Selesai Tontonan'}</span>
                  </button>
                </div>

                {/* Collapsible Steps and Self-Reflection Details */}
                <div className="mt-3">
                  <button
                    onClick={() => toggleDetails(demo.id)}
                    className="w-full flex items-center justify-between py-2 text-xs font-black text-pink-900 hover:text-pink-700 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-rose-500" />
                      <span>Ringkasan Langkah Amali & 3 Refleksi Kendiri</span>
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-pink-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-pink-600" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="pt-2 space-y-3.5 animate-fadeIn">
                      {/* Langkah-langkah */}
                      <div className="p-3.5 bg-pink-50/70 rounded-2xl border border-pink-200 space-y-2">
                        <span className="text-[11px] font-black text-rose-900 uppercase tracking-wider block">
                          📋 Panduan Langkah Bersuci:
                        </span>
                        {demo.langkah.map((stepText, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-2 bg-white rounded-xl border border-pink-100 text-[11px] text-pink-950 font-semibold leading-relaxed"
                          >
                            {stepText}
                          </div>
                        ))}
                      </div>

                      {/* 3 Reflection Questions */}
                      <div className="p-3.5 bg-white rounded-2xl border-2 border-pink-100 space-y-2">
                        <span className="text-[11px] font-black text-rose-900 flex items-center gap-1 uppercase tracking-wider">
                          <HelpCircle className="w-3.5 h-3.5 text-rose-500" />
                          <span>3 Soalan Refleksi Kendiri:</span>
                        </span>
                        {demo.refleksi.map((qText, qIdx) => {
                          const isChecked = !!reflectionAnswers[demo.id]?.[qIdx];
                          return (
                            <div
                              key={qIdx}
                              onClick={() => toggleReflection(demo.id, qIdx)}
                              className={`p-2.5 rounded-xl border text-[11px] cursor-pointer transition-all flex items-start gap-2 ${
                                isChecked
                                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold'
                                  : 'bg-pink-50/40 border-pink-100 text-pink-950 hover:bg-pink-100/50 font-medium'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => {}}
                                className="mt-0.5 rounded text-pink-600 focus:ring-pink-400"
                              />
                              <span className="leading-snug">{qText}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE AMALI SIMULATOR: SERTU 7 BASUHAN */}
        <div className="max-w-4xl mx-auto coquette-card p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="px-3.5 py-1 bg-purple-100 text-purple-800 text-xs font-extrabold rounded-full border border-purple-200">
              Simulasi Interaktif Sertu
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-pink-950 mt-2 mb-1">
              Alat Pembilang Amali 7 Basuhan Sertu
            </h3>
            <p className="text-xs sm:text-sm text-pink-950 font-medium">
              Tekan butang basuhan untuk melakukan 1 kali air bercampur tanah suci dan 6 kali air mutlak hingga bersih sempurna!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Visual Basin Simulator */}
            <div className="p-6 bg-white rounded-3xl border-3 border-pink-300 text-center flex flex-col items-center justify-center shadow-md">
              <div className="w-40 h-40 rounded-full border-4 border-pink-400 relative overflow-hidden flex items-center justify-center shadow-inner mb-4">
                {/* Simulated Water Liquid */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    sertuCount === 0
                      ? 'bg-rose-100 opacity-60'
                      : sertuCount === 1
                      ? 'bg-amber-800/60'
                      : sertuCount < 7
                      ? 'bg-sky-200'
                      : 'bg-sky-400'
                  }`}
                />
                {/* Content Icon & Label */}
                <div className="relative z-10 font-display font-black text-pink-950 flex flex-col items-center">
                  {sertuCount === 0 ? (
                    <span className="text-xs text-rose-700 font-extrabold">Bekas Bernajis</span>
                  ) : sertuCount === 1 ? (
                    <span className="text-xs text-white font-extrabold bg-amber-900/80 px-2 py-1 rounded-lg">1: Air Tanah</span>
                  ) : sertuCount < 7 ? (
                    <span className="text-xs text-sky-950 font-extrabold bg-white/80 px-2 py-1 rounded-lg">{sertuCount}: Air Mutlak</span>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Sparkles className="w-8 h-8 text-amber-300 animate-sparkle" />
                      <span className="text-xs text-white font-extrabold bg-emerald-600/90 px-3 py-1 rounded-lg mt-1">Suci 100%!</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-xs text-pink-950 font-extrabold">
                Basuhan Semasa: <span className="text-lg text-rose-600 font-black">{sertuCount}</span> / 7
              </div>
            </div>

            {/* Controls & Explanation */}
            <div className="space-y-4">
              <div className="p-4 bg-pink-50 rounded-2xl border-2 border-pink-200 text-xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold text-white ${sertuCount >= 1 ? 'bg-amber-700' : 'bg-slate-300'}`}>
                    1
                  </span>
                  <span className="font-extrabold text-pink-950">Basuhan Pertama: Air bercampur tanah suci (air keruh).</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold text-white ${sertuCount >= 7 ? 'bg-emerald-600' : sertuCount >= 2 ? 'bg-sky-500' : 'bg-slate-300'}`}>
                    6
                  </span>
                  <span className="font-extrabold text-pink-950">Basuhan ke-2 hingga ke-7: Enam kali air mutlak yang bersih.</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  disabled={sertuCount >= 7}
                  onClick={handleSertuRinse}
                  className="flex-1 py-3.5 px-4 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl shadow-md shadow-pink-200 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
                >
                  <WaterDropIcon className="w-5 h-5 text-white" />
                  <span>
                    {sertuCount === 0
                      ? 'Mulakan Basuhan 1 (Air Tanah)'
                      : sertuCount < 7
                      ? `Lakukan Basuhan ke-${sertuCount + 1} (Air Mutlak)`
                      : 'Tahniah! Lengkap 7 Basuhan'}
                  </span>
                </button>

                <button
                  onClick={handleResetSertu}
                  className="p-3.5 bg-pink-100 hover:bg-pink-200 text-pink-800 rounded-2xl transition-colors cursor-pointer border border-pink-200 shadow-2xs"
                  title="Ulang Semula Simulasi"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>

              {sertuFinished && (
                <div className="p-3.5 bg-emerald-100 text-emerald-950 rounded-2xl text-xs font-extrabold flex items-center gap-2 border border-emerald-300 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Alhamdulillah! Anda telah berjaya menyempurnakan kaedah sertu 7 basuhan.</span>
                </div>
              )}
            </div>
          </div>

          {/* Jump to Game */}
          <div className="text-center pt-8 border-t-2 border-pink-200 mt-6">
            <button
              onClick={() => onNavigate('permainan')}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-extrabold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 rounded-full shadow-lg shadow-pink-200 transition-all cursor-pointer hover:scale-102"
            >
              <span>Jom Teruskan ke Permainan "Misi Ribbon Suci"</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
