import React, { useState } from 'react';
import { DeveloperProfile, SectionId, UserProgress } from '../types';
import { RibbonBow, SparkleIcon, CleanStarIcon, FlowerSticker, HeartSticker } from './RibbonIcons';
import {
  Award,
  Printer,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  Gamepad2,
  HelpCircle,
  Sparkles,
  Lock,
  Unlock,
  ShieldCheck,
} from 'lucide-react';

interface Props {
  progress: UserProgress;
  developerProfile: DeveloperProfile;
  onUpdateStudentName: (name: string) => void;
  onResetAllProgress: () => void;
  onNavigate: (section: SectionId) => void;
}

export function CertificateSection({
  progress,
  developerProfile,
  onUpdateStudentName,
  onResetAllProgress,
  onNavigate,
}: Props) {
  const [editingName, setEditingName] = useState(progress.studentName || '');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const modulesCompleted =
    progress.completedModules.modulA &&
    progress.completedModules.modulB &&
    progress.completedModules.modulC &&
    progress.completedModules.modulD;

  const gamesCompleted =
    progress.gameScores.stage1Completed &&
    progress.gameScores.stage2Completed &&
    progress.gameScores.stage3Completed;

  const quizPassed =
    progress.quizResult.completed && progress.quizResult.percentage >= 80;

  const isEligible = modulesCompleted && gamesCompleted && quizPassed;

  const currentDate = new Date().toLocaleDateString('ms-MY', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const handlePrint = () => {
    window.print();
  };

  const handleSaveStudentName = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingName.trim()) {
      onUpdateStudentName(editingName.trim());
    }
  };

  return (
    <section id="sijil" className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-extrabold text-pink-700 uppercase tracking-widest bg-white/90 px-4 py-1.5 rounded-full border-2 border-pink-200 shadow-xs">
            <RibbonBow className="w-4 h-4 text-pink-500" />
            <span>Pengiktirafan Pembelajaran EDUP6023</span>
            <RibbonBow className="w-4 h-4 text-pink-500" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-pink-950 mb-2 drop-shadow-2xs">
            Sijil Digital Pencapaian Saya
          </h2>
          <p className="text-sm sm:text-base text-pink-950 font-semibold bg-white/70 p-2 rounded-2xl max-w-2xl mx-auto border border-pink-100">
            Lengkapkan modul pembelajaran, permainan Misi Ribbon Suci dan capai markah kuiz sekurang-kurangnya 80% untuk membuka sijil rasmi anda!
          </p>
        </div>

        {/* PREREQUISITES CHECKLIST */}
        {!isEligible && (
          <div className="coquette-card p-6 sm:p-8 mb-12">
            <div className="flex items-center gap-2.5 mb-4 text-pink-950">
              <Lock className="w-6 h-6 text-rose-500" />
              <h3 className="font-display text-xl font-extrabold">
                Syarat Membuka Sijil Digital
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-pink-900 font-bold mb-6">
              Sila lengkapkan aktiviti-aktiviti di bawah untuk membuka dan menjana sijil digital anda:
            </p>

            <div className="space-y-4">
              {/* Requirement 1: Modules */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border-2 border-pink-200 shadow-2xs">
                <div className="flex items-center gap-3">
                  {modulesCompleted ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-rose-400 shrink-0" />
                  )}
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-pink-950">
                      1. Lengkapkan Semua 4 Modul Sudut Pembelajaran
                    </h4>
                    <p className="text-[11px] text-pink-800 font-semibold">
                      Modul A, Modul B, Modul C dan Modul D
                    </p>
                  </div>
                </div>
                {!modulesCompleted && (
                  <button
                    onClick={() => onNavigate('pembelajaran')}
                    className="px-4 py-2 text-xs font-extrabold text-pink-900 bg-pink-100 border border-pink-300 rounded-xl hover:bg-pink-200 transition-colors cursor-pointer shadow-2xs"
                  >
                    Buka Modul
                  </button>
                )}
              </div>

              {/* Requirement 2: Games */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border-2 border-pink-200 shadow-2xs">
                <div className="flex items-center gap-3">
                  {gamesCompleted ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-rose-400 shrink-0" />
                  )}
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-pink-950">
                      2. Selesaikan Semua 3 Peringkat Permainan Ribbon Suci
                    </h4>
                    <p className="text-[11px] text-pink-800 font-semibold">
                      Padankan najis, misi situasi dan susun urutan sertu
                    </p>
                  </div>
                </div>
                {!gamesCompleted && (
                  <button
                    onClick={() => onNavigate('permainan')}
                    className="px-4 py-2 text-xs font-extrabold text-pink-900 bg-pink-100 border border-pink-300 rounded-xl hover:bg-pink-200 transition-colors cursor-pointer shadow-2xs"
                  >
                    Main Sekarang
                  </button>
                )}
              </div>

              {/* Requirement 3: Quiz */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border-2 border-pink-200 shadow-2xs">
                <div className="flex items-center gap-3">
                  {quizPassed ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-rose-400 shrink-0" />
                  )}
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-pink-950">
                      3. Jawab Kuiz Pengukuhan dengan Markah $\ge$ 80%
                    </h4>
                    <p className="text-[11px] text-pink-800 font-semibold">
                      Markah semasa: {progress.quizResult.percentage}% ({progress.quizResult.score}/10)
                    </p>
                  </div>
                </div>
                {!quizPassed && (
                  <button
                    onClick={() => onNavigate('kuiz')}
                    className="px-4 py-2 text-xs font-extrabold text-pink-900 bg-pink-100 border border-pink-300 rounded-xl hover:bg-pink-200 transition-colors cursor-pointer shadow-2xs"
                  >
                    Buka Kuiz
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* UNLOCKED CERTIFICATE PREVIEW & PRINT SECTION */}
        {isEligible && (
          <div className="space-y-8 animate-fadeIn">
            {/* Student Name Editor Bar */}
            <div className="coquette-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Unlock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-base font-extrabold text-pink-950">
                    Sijil Pencapaian Anda Telah Dibuka!
                  </h4>
                  <p className="text-xs text-pink-800 font-semibold">
                    Sahkan nama murid yang akan dipaparkan pada sijil:
                  </p>
                </div>
              </div>

              <form onSubmit={handleSaveStudentName} className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  placeholder="Nama Penuh Murid"
                  className="px-4 py-2 text-xs bg-pink-50 border-2 border-pink-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-pink-400 font-bold"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-extrabold text-white bg-pink-600 hover:bg-pink-700 rounded-xl cursor-pointer"
                >
                  Kemas Kini
                </button>
              </form>

              <button
                onClick={handlePrint}
                className="px-6 py-2.5 text-xs font-extrabold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 rounded-2xl shadow-lg shadow-pink-200 flex items-center gap-2 cursor-pointer transition-all active:scale-95 hover:scale-102"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak / Simpan PDF</span>
              </button>
            </div>

            {/* THE PRINTABLE CERTIFICATE CONTAINER (A4 Landscape) */}
            <div
              id="certificate-print-area"
              className="bg-white p-8 sm:p-14 rounded-3xl border-8 border-double border-pink-400 shadow-2xl relative overflow-hidden text-center"
            >
              {/* Corner Ribbon Bows and Flower Stickers */}
              <div className="absolute top-4 left-4 flex items-center gap-1">
                <RibbonBow className="w-12 h-12 text-pink-500" />
                <FlowerSticker className="w-6 h-6" />
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-1">
                <FlowerSticker className="w-6 h-6" />
                <RibbonBow className="w-12 h-12 text-pink-500" />
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-1">
                <RibbonBow className="w-10 h-10 text-pink-400" />
                <HeartSticker className="w-5 h-5" />
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-1">
                <HeartSticker className="w-5 h-5" />
                <RibbonBow className="w-10 h-10 text-pink-400" />
              </div>

              {/* Watermark Ribbon Emblem in Center */}
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-3 border-pink-300 shadow-lg p-1 bg-white">
                <img
                  src="/src/assets/images/ribbon_badge_award_1792824921254.jpg"
                  alt="Badge Pencapaian"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1 mb-6">
                <span className="text-xs font-black tracking-widest text-pink-600 uppercase">
                  EDUP6023 · PENGHASILAN PRODUK PEMBELAJARAN
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-black text-pink-950 tracking-wider">
                  SIJIL PENCAPAIAN
                </h2>
                <p className="font-display text-base sm:text-lg font-extrabold text-rose-700">
                  MISI MARI BERSUCI TAHUN 4
                </p>
              </div>

              <p className="text-xs sm:text-sm text-pink-900 mb-2 italic font-semibold">
                Dengan ini diperakui bahawa
              </p>

              {/* Student Name Display */}
              <div className="my-4 pb-2 border-b-3 border-pink-400 inline-block min-w-[320px] max-w-lg">
                <h3 className="font-display text-2xl sm:text-4xl font-black text-pink-950">
                  {progress.studentName || editingName || "[NAMA MURID]"}
                </h3>
              </div>

              {/* Achievement Text */}
              <p className="text-xs sm:text-sm text-pink-950 max-w-2xl mx-auto leading-relaxed mb-6 font-bold">
                Telah berjaya menyempurnakan kesemua modul pembelajaran fiqh taharah, menamatkan permainan Misi Ribbon Suci
                dan memperoleh keputusan cemerlang <strong className="text-rose-600 underline">{progress.quizResult.percentage}%</strong> dalam
                Kuiz Pengukuhan Mari Bersuci Pendidikan Islam Tahun 4.
              </p>

              {/* Metadata Row: Date & Scores */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-pink-900 font-extrabold mb-8">
                <span>Tarikh: <strong>{currentDate}</strong></span>
                <span>·</span>
                <span>Markah Kuiz: <strong>{progress.quizResult.score}/10 ({progress.quizResult.percentage}%)</strong></span>
                <span>·</span>
                <span className="flex items-center gap-1 text-emerald-700">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Status: <strong>LULUS CEMERLANG</strong></span>
                </span>
              </div>

              {/* Signatures Row */}
              <div className="grid grid-cols-2 gap-10 max-w-lg mx-auto pt-4 border-t-2 border-pink-200">
                <div className="text-center">
                  <div className="h-10 border-b-2 border-pink-300 mb-1" />
                  <span className="font-display text-xs font-black text-pink-950 block">
                    {developerProfile.name || "[NAMA GURU / PEMBANGUN]"}
                  </span>
                  <span className="text-[10px] text-pink-700 font-semibold">
                    Guru Pembimbing / Pembangun Modul
                  </span>
                </div>

                <div className="text-center">
                  <div className="h-10 border-b-2 border-pink-300 mb-1" />
                  <span className="font-display text-xs font-black text-pink-950 block">
                    {developerProfile.institution || "[JAWATAN / INSTITUSI]"}
                  </span>
                  <span className="text-[10px] text-pink-700 font-semibold">
                    Institusi Pendidikan
                  </span>
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-8 text-[10px] text-pink-600 italic font-semibold">
                * Sijil ini adalah sijil pencapaian pembelajaran digital tidak rasmi bagi tujuan pengukuhan motivasi murid dan bukti pembelajaran EDUP6023.
              </div>
            </div>
          </div>
        )}

        {/* PROGRESS RESET SECTION */}
        <div className="mt-16 text-center pt-8 border-t-2 border-pink-200">
          {!showResetConfirm ? (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="text-xs text-pink-700 hover:text-rose-800 font-extrabold inline-flex items-center gap-1.5 cursor-pointer underline"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Set Semula Semua Kemajuan Pembelajaran
            </button>
          ) : (
            <div className="p-5 bg-rose-50 border-2 border-rose-300 rounded-2xl max-w-md mx-auto space-y-2 animate-fadeIn shadow-sm">
              <p className="text-xs text-rose-950 font-extrabold">
                Adakah anda pasti mahu mengosongkan rekod modul, skor permainan dan markah kuiz?
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-4 py-1.5 text-xs font-extrabold text-slate-700 bg-white border border-slate-300 rounded-xl"
                >
                  Batal
                </button>
                <button
                  onClick={() => {
                    onResetAllProgress();
                    setShowResetConfirm(false);
                  }}
                  className="px-4 py-1.5 text-xs font-extrabold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-xs"
                >
                  Ya, Set Semula
                </button>
              </div>
            </div>
          )}
          <p className="text-[11px] text-pink-800 font-semibold mt-2">
            Data kemajuan disimpan dalam memori pelayar peranti anda (localStorage).
          </p>
        </div>
      </div>
    </section>
  );
}
