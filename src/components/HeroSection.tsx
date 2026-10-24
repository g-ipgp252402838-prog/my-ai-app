import React, { useState } from 'react';
import { DeveloperProfile, SectionId } from '../types';
import { RibbonBow, SparkleIcon, CleanStarIcon, FlowerSticker, HeartSticker } from './RibbonIcons';
import { ArrowRight, BookOpen, Gamepad2, UserCheck, Edit3, Sparkles, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (section: SectionId) => void;
  studentName: string;
  onUpdateStudentName: (name: string) => void;
  developerProfile: DeveloperProfile;
  onOpenProfileModal: () => void;
}

export function HeroSection({
  onNavigate,
  studentName,
  onUpdateStudentName,
  developerProfile,
  onOpenProfileModal,
}: Props) {
  const [tempName, setTempName] = useState(studentName);
  const [nameSavedNotice, setNameSavedNotice] = useState(false);

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      onUpdateStudentName(tempName.trim());
      setNameSavedNotice(true);
      setTimeout(() => setNameSavedNotice(false), 3000);
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16">
      {/* Floating Decorative Elements */}
      <div className="absolute top-8 left-8 opacity-60 pointer-events-none hidden md:block">
        <RibbonBow className="w-16 h-16 animate-gentle-sway text-pink-400" />
      </div>
      <div className="absolute top-16 right-10 opacity-60 pointer-events-none hidden md:block">
        <FlowerSticker className="w-12 h-12 animate-gentle-float" />
      </div>
      <div className="absolute bottom-12 left-12 opacity-50 pointer-events-none">
        <HeartSticker className="w-10 h-10 animate-gentle-float text-pink-400" />
      </div>
      <div className="absolute bottom-20 right-16 opacity-60 pointer-events-none">
        <SparkleIcon className="w-8 h-8 text-rose-400 animate-sparkle" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Course & Subject Metadata */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4 text-xs font-bold text-pink-800">
          <span className="px-4 py-1.5 bg-white/90 border-2 border-pink-200 rounded-full shadow-xs flex items-center gap-1.5">
            <FlowerSticker className="w-4 h-4" />
            <span>EDUP6023 · TUGASAN 3: PENGHASILAN PRODUK</span>
          </span>
          <span className="hidden sm:inline text-pink-300">·</span>
          <span className="px-4 py-1.5 bg-gradient-to-r from-pink-100 to-rose-100 border-2 border-pink-200 rounded-full text-pink-900 flex items-center gap-1.5 font-bold shadow-xs">
            <RibbonBow className="w-4 h-4 text-pink-500" />
            <span>PENDIDIKAN ISLAM TAHUN 4 (BIDANG FIQH)</span>
          </span>
        </div>

        {/* Hero Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <RibbonBow className="w-10 h-10 text-pink-500 animate-gentle-sway shrink-0" />
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent drop-shadow-sm">
              MARI BERSUCI
            </h1>
            <RibbonBow className="w-10 h-10 text-pink-500 animate-gentle-sway shrink-0" />
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <SparkleIcon className="w-4 h-4 text-pink-400 animate-sparkle" />
            <p className="font-display text-base sm:text-xl text-rose-800 font-bold tracking-wide">
              🎀 Dunia Pembelajaran Interaktif Coquette Pink Ribbon 🎀
            </p>
            <SparkleIcon className="w-4 h-4 text-pink-400 animate-sparkle" />
          </div>

          {/* Slogan */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-6 py-2.5 bg-white/95 border-2 border-pink-300 rounded-full shadow-md animate-pulse-glow mb-6">
            <Sparkles className="w-5 h-5 text-pink-500 shrink-0 animate-sparkle" />
            <span className="font-display text-sm sm:text-base font-extrabold text-pink-950 tracking-wider">
              "Bersih Diri, Suci Hati, Ibadah Diberkati"
            </span>
            <Sparkles className="w-5 h-5 text-pink-500 shrink-0 animate-sparkle" />
          </div>

          <p className="text-sm sm:text-base text-pink-950 max-w-2xl mx-auto leading-relaxed font-semibold bg-white/60 p-2.5 rounded-2xl border border-pink-100">
            Selamat datang ke alam pembelajaran suci yang ceria dan comel! Mari terokai kaedah bersuci mengikut syarak bersama watak-watak cilik soleh dan solehah.
          </p>
        </div>

        {/* 2-Column Split: Hero Image & Student Name Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto mb-16">
          {/* Left Column: Hero Image with Scalloped Coquette Frame */}
          <div className="lg:col-span-7">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 rounded-3xl blur-md opacity-50 group-hover:opacity-75 transition duration-500" />
              <div className="relative bg-white p-3.5 rounded-3xl border-3 border-pink-300 shadow-2xl overflow-hidden">
                <div className="relative">
                  <img
                    src="/src/assets/images/hero_mari_bersuci_1792824920410.jpg"
                    alt="Murid Muslim bergembira belajar Mari Bersuci"
                    className="w-full h-auto aspect-16/9 object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  {/* Decorative corner ribbons */}
                  <div className="absolute -top-2 -left-2">
                    <RibbonBow className="w-10 h-10 text-pink-500" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <RibbonBow className="w-10 h-10 text-pink-500" />
                  </div>
                </div>

                <div className="p-3 bg-gradient-to-r from-pink-50 via-white to-pink-50 border-t-2 border-pink-200 rounded-b-xl flex items-center justify-between text-xs text-pink-900 font-bold mt-1">
                  <span className="flex items-center gap-1.5">
                    <FlowerSticker className="w-4 h-4" /> Taharah KSSR Semakan Tahun 4
                  </span>
                  <span className="px-2.5 py-0.5 bg-rose-500 text-white rounded-full text-[11px] shadow-2xs">
                    100% Interaktif & Lengkap
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Student Welcome & Quick Actions */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Student Name Card */}
            <div className="coquette-card p-6 relative">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-pink-950">
                    Daftar Nama Murid
                  </h3>
                  <span className="text-[10px] text-pink-600 font-bold uppercase tracking-wider">
                    Lencana & Sijil Khas Anda
                  </span>
                </div>
              </div>
              <p className="text-xs text-pink-900/80 mb-3 font-medium">
                Masukkan nama penuh anda supaya sijil digital pencapaian dijana khas untuk anda!
              </p>

              <form onSubmit={handleSaveName} className="space-y-2.5">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  placeholder="Nama Penuh Anda (cth: Nur Alya Batrisyia)"
                  className="w-full px-4 py-2.5 text-sm bg-pink-50/70 border-2 border-pink-200 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all font-semibold"
                />
                <div className="flex items-center justify-between gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 rounded-2xl shadow-md shadow-pink-200 cursor-pointer transition-all active:scale-98"
                  >
                    Simpan Nama Murid
                  </button>
                  {nameSavedNotice && (
                    <span className="text-xs text-emerald-600 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Disimpan!
                    </span>
                  )}
                </div>
              </form>

              {studentName && (
                <div className="mt-3 p-3 bg-pink-100/70 border-2 border-pink-200 rounded-2xl flex items-center gap-2 text-xs text-pink-950 font-bold">
                  <HeartSticker className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>
                    Salam kembali, <strong className="text-rose-600 underline">{studentName}</strong>! Selamat beramal.
                  </span>
                </div>
              )}
            </div>

            {/* Quick Navigation Action Buttons */}
            <div className="coquette-card p-6 space-y-3">
              <h4 className="font-display text-sm font-bold text-pink-950 flex items-center gap-1.5">
                <RibbonBow className="w-4 h-4 text-pink-500" />
                <span>Pilih Destinasi Pembelajaran:</span>
              </h4>
              <button
                onClick={() => onNavigate('pembelajaran')}
                className="w-full py-3 px-5 text-sm font-extrabold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 rounded-2xl shadow-md shadow-pink-200 flex items-center justify-between group transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Jom Mula Belajar!
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('permainan')}
                className="w-full py-3 px-5 text-sm font-extrabold text-pink-900 bg-white hover:bg-pink-100 border-2 border-pink-300 rounded-2xl shadow-xs flex items-center justify-between group transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4 text-pink-600" /> Teroka Misi Permainan Ribbon
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Quick Cards: Apa, Mengapa, Apa yang dipelajari with Sticker Emblems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          <div className="coquette-card p-6 relative">
            <div className="absolute -top-3 right-4">
              <FlowerSticker className="w-7 h-7" />
            </div>
            <div className="w-11 h-11 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-3 shadow-2xs">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-display text-base font-bold text-pink-950 mb-2">
              1. Apakah Maksud Bersuci?
            </h3>
            <p className="text-xs text-pink-900/90 leading-relaxed font-medium">
              Taharah bermaksud membersihkan diri, pakaian dan tempat daripada najis serta mengangkat hadas
              supaya ibadah seperti solat sah di sisi Allah SWT.
            </p>
          </div>

          <div className="coquette-card p-6 relative">
            <div className="absolute -top-3 right-4">
              <HeartSticker className="w-7 h-7" />
            </div>
            <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-3 shadow-2xs">
              <CleanStarIcon className="w-6 h-6" />
            </div>
            <h3 className="font-display text-base font-bold text-pink-950 mb-2">
              2. Mengapakah Perlu Bersuci?
            </h3>
            <p className="text-xs text-pink-900/90 leading-relaxed font-medium">
              Kerana Allah SWT mencintai hamba-Nya yang sentiasa suci. Kebersihan memelihara kesihatan badan,
              memberikan ketenangan jiwa dan menyempurnakan rukun ibadah.
            </p>
          </div>

          <div className="coquette-card p-6 relative">
            <div className="absolute -top-3 right-4">
              <RibbonBow className="w-7 h-7 text-pink-500" />
            </div>
            <div className="w-11 h-11 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3 shadow-2xs">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-display text-base font-bold text-pink-950 mb-2">
              3. Apakah Yang Dipelajari?
            </h3>
            <p className="text-xs text-pink-900/90 leading-relaxed font-medium">
              Mengenali 3 jenis najis (Mukhaffafah, Mutawassitah, Mughallazah), kaedah sertu dengan air tanah,
              simulasi amali video, dan kuiz interaktif bersijil!
            </p>
          </div>
        </div>

        {/* Developer Profile Card (Kenali Pembangun Laman) with Scalloped Coquette Frame */}
        <div className="max-w-4xl mx-auto coquette-card p-6 sm:p-8 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-5 py-1 border-2 border-pink-300 rounded-full flex items-center gap-2 shadow-sm">
            <RibbonBow className="w-5 h-5 text-pink-500" />
            <span className="font-display text-xs font-extrabold text-pink-900 uppercase tracking-widest">
              Kenali Pembangun Laman
            </span>
            <RibbonBow className="w-5 h-5 text-pink-500" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-3">
            {/* Scalloped Avatar Frame for User's Uploaded Photo */}
            <div className="relative shrink-0">
              <div className="w-32 h-32 rounded-full border-4 border-pink-400 p-1.5 bg-gradient-to-tr from-pink-200 via-white to-pink-200 shadow-lg flex items-center justify-center overflow-hidden">
                <img
                  src={developerProfile.avatarUrl || "/assets/aistudio/image_a1a98d1c.png"}
                  alt={developerProfile.name}
                  className="w-full h-full object-cover object-[center_22%] rounded-full hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/aistudio/image_a1a98d1c.png';
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-1">
                <RibbonBow className="w-8 h-8 text-pink-600 animate-gentle-sway" />
              </div>
              <div className="absolute -top-1 -left-1">
                <SparkleIcon className="w-5 h-5 text-amber-400 animate-sparkle" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="font-display text-xl font-extrabold text-pink-950">
                  {developerProfile.name || "[NAMA PENUH]"}
                </h4>
                <button
                  onClick={onOpenProfileModal}
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-extrabold text-pink-700 hover:text-pink-900 bg-pink-100 hover:bg-pink-200 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer self-center sm:self-auto shadow-2xs border border-pink-200"
                >
                  <Edit3 className="w-3.5 h-3.5" /> Sunting Maklumat
                </button>
              </div>

              <div className="inline-block px-3 py-1 bg-pink-100/80 rounded-xl text-xs font-bold text-rose-800 border border-pink-200">
                {developerProfile.program || "[PROGRAM / UNIT]"} · {developerProfile.institution || "[INSTITUSI]"}
              </div>

              <p className="text-xs text-pink-950 leading-relaxed font-medium pt-1">
                {developerProfile.description || "[PENERANGAN DIRI] — Pembangun produk pembelajaran digital interaktif Mari Bersuci Tahun 4 berteraskan kurikulum Pendidikan Islam KSSR Semakan."}
              </p>

              <div className="pt-2">
                <span className="text-xs italic text-pink-900 bg-pink-50 px-3.5 py-1.5 rounded-xl border border-pink-200 inline-block font-semibold shadow-2xs">
                  "{developerProfile.motto || "[MOTTO PENDIDIKAN] — Bersih Diri, Suci Rohani, Ibadah Diberkati Ilahi."}"
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
