import React, { useState } from 'react';
import { AMALI_DEMO_LIST } from '../data/learningData';
import { SectionId, UserProgress } from '../types';
import { RibbonBow, SparkleIcon, WaterDropIcon, FlowerSticker, HeartSticker } from './RibbonIcons';
import {
  Video,
  Play,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

interface Props {
  progress: UserProgress;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
  onNavigate: (section: SectionId) => void;
}

export function AmaliSection({ progress, onUpdateProgress, onNavigate }: Props) {
  const [selectedDemoIndex, setSelectedDemoIndex] = useState(0);
  const [sertuCount, setSertuCount] = useState(0);
  const [sertuFinished, setSertuFinished] = useState(false);
  const [reflectionAnswers, setReflectionAnswers] = useState<Record<string, Record<number, boolean>>>({});

  const currentDemo = AMALI_DEMO_LIST[selectedDemoIndex];

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
            Video Pembelajaran & Demonstrasi Amali
          </h2>
          <p className="text-sm sm:text-base text-pink-950 font-semibold bg-white/70 p-2 rounded-2xl max-w-2xl mx-auto border border-pink-100">
            Jom lihat dan amalkan cara menyucikan najis dengan betul melalui video pilihan anda, simulasi sertu dan soalan refleksi kendiri.
          </p>
        </div>

        {/* Demo Selector Tabs with Thumbnail Preview Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-8">
          {AMALI_DEMO_LIST.map((demo, idx) => {
            const isSelected = selectedDemoIndex === idx;
            const isCompleted = progress.completedAmali[demo.id as keyof typeof progress.completedAmali];
            return (
              <button
                key={demo.id}
                onClick={() => setSelectedDemoIndex(idx)}
                className={`p-4 rounded-3xl text-left border-2 transition-all cursor-pointer flex flex-col justify-between shadow-xs hover:scale-102 ${
                  isSelected
                    ? 'bg-gradient-to-br from-pink-100 via-white to-pink-100 border-pink-400 shadow-md ring-3 ring-pink-300'
                    : 'bg-white/90 border-pink-200 hover:bg-pink-50/90'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-800 border border-pink-200">
                    {demo.badge}
                  </span>
                  {isCompleted && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                </div>
                <h4 className="font-display text-xs sm:text-sm font-extrabold text-pink-950 line-clamp-2">
                  {demo.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Main Demo Player & Description Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Video Embed Player */}
          <div className="lg:col-span-7 coquette-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-extrabold text-pink-800 flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-pink-600" /> Paparan Video Pembelajaran
                </span>
                <span className="text-[11px] text-pink-700 font-extrabold bg-pink-100 px-3 py-0.5 rounded-full border border-pink-200">
                  Tahun 4 Fiqh
                </span>
              </div>

              {/* YouTube Responsive Video Container with Ribbon Border */}
              <div className="relative aspect-16/9 bg-slate-900 rounded-2xl overflow-hidden shadow-lg border-3 border-pink-300 mb-4">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${currentDemo.youtubeEmbedId}?rel=0&modestbranding=1`}
                  title={currentDemo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="flex items-center justify-between text-xs text-pink-900 font-semibold bg-pink-50/70 p-2.5 rounded-xl border border-pink-200">
                <span>Jika video tidak dimainkan di peranti anda:</span>
                <a
                  href={currentDemo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 font-bold inline-flex items-center gap-1 underline"
                >
                  Buka di YouTube <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Mark Finished Button */}
            <div className="mt-6 pt-4 border-t-2 border-pink-100 flex items-center justify-between">
              <span className="text-xs text-pink-800 font-bold">
                Telah tonton dan fahami kaedah ini?
              </span>
              <button
                onClick={() => handleMarkCompleted(currentDemo.id)}
                className="px-5 py-2.5 text-xs font-extrabold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer hover:scale-102"
              >
                <CheckCircle2 className="w-4 h-4" /> Tandakan Selesai Tontonan
              </button>
            </div>
          </div>

          {/* Right Column: Step Explanations & 3 Reflection Questions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Steps summary card */}
            <div className="coquette-card p-6">
              <h4 className="font-display text-sm font-extrabold text-pink-950 mb-2 flex items-center gap-2">
                <RibbonBow className="w-5 h-5 text-pink-500" />
                Ringkasan Langkah Amali:
              </h4>
              <p className="text-xs text-pink-900/90 mb-3 font-semibold leading-relaxed">
                {currentDemo.desc}
              </p>
              <div className="space-y-2">
                {currentDemo.langkah.map((l, lIdx) => (
                  <div key={lIdx} className="p-3 bg-white/90 rounded-2xl border-2 border-pink-100 text-xs text-pink-950 leading-relaxed font-bold shadow-2xs">
                    {l}
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Reflection Questions Card */}
            <div className="coquette-card p-6">
              <h4 className="font-display text-sm font-extrabold text-pink-950 mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-rose-500" />
                3 Soalan Refleksi Kendiri:
              </h4>
              <p className="text-xs text-pink-800 font-semibold mb-3">
                Uji pemikiran kritis anda berdasarkan video yang telah ditonton:
              </p>
              <div className="space-y-2.5">
                {currentDemo.refleksi.map((q, qIdx) => {
                  const isChecked = reflectionAnswers[currentDemo.id]?.[qIdx];
                  return (
                    <div
                      key={qIdx}
                      onClick={() => toggleReflection(currentDemo.id, qIdx)}
                      className={`p-3.5 rounded-2xl border-2 text-xs cursor-pointer transition-all flex items-start gap-2.5 ${
                        isChecked
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-extrabold shadow-2xs'
                          : 'bg-white/90 border-pink-100 text-pink-950 hover:border-pink-300 font-semibold'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={!!isChecked}
                        onChange={() => {}}
                        className="mt-0.5 rounded-md text-pink-600 focus:ring-pink-400"
                      />
                      <span className="leading-relaxed">{q}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE AMALI SIMULATOR: SERTU 7 BASUHAN WITH ILLUSTRATION */}
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
            {/* Visual Basin Simulator with Guide Image */}
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
