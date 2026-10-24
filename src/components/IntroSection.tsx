import React from 'react';
import { INTRO_CONTENT } from '../data/learningData';
import { SectionId } from '../types';
import { RibbonBow, SparkleIcon, FlowerSticker, HeartSticker } from './RibbonIcons';
import { Heart, Sparkles, Smile, Award, ArrowRight, CheckCircle, BookOpen } from 'lucide-react';

interface Props {
  onNavigate: (section: SectionId) => void;
}

export function IntroSection({ onNavigate }: Props) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-pink-600" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-rose-600" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-pink-600" />;
      default:
        return <Award className="w-5 h-5 text-rose-600" />;
    }
  };

  return (
    <section id="pengenalan" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2 text-pink-700 text-xs font-extrabold uppercase tracking-widest bg-white/90 px-4 py-1.5 rounded-full border-2 border-pink-200 shadow-xs">
            <RibbonBow className="w-4 h-4 text-pink-500" />
            <span>Pendidikan Islam Tahun 4 · Bidang Fiqh</span>
            <RibbonBow className="w-4 h-4 text-pink-500" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-pink-950 mb-3 drop-shadow-2xs">
            {INTRO_CONTENT.title}
          </h2>

          <p className="text-sm sm:text-base text-pink-950 font-semibold bg-white/70 p-2 rounded-2xl max-w-2xl mx-auto border border-pink-100">
            Mari fahami asas kesucian diri sebelum mempelajari kaedah menyucikan pelbagai jenis najis mengikut syarak.
          </p>
        </div>

        {/* Feature Spotlight: 3D Illustration of Muslim Student Washing Hands */}
        <div className="coquette-card p-6 sm:p-8 mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Illustrated Artwork */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-2xl overflow-hidden border-3 border-pink-300 shadow-md">
                <img
                  src="/src/assets/images/intro_wuduk_kebersihan_1792827637206.jpg"
                  alt="Murid perempuan Muslim mencuci tangan dengan air bersih"
                  className="w-full h-auto aspect-4/3 object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <RibbonBow className="w-8 h-8 text-pink-500" />
                </div>
                <div className="absolute bottom-2 right-2 bg-white/90 px-3 py-1 rounded-full text-[10px] font-extrabold text-pink-900 border border-pink-200 shadow-xs">
                  🌸 Bersih & Suci
                </div>
              </div>
            </div>

            {/* Right: Definition from Bahasa and Syarak */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-pink-950">
                  Pengertian Bersuci (Taharah)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 bg-white rounded-2xl border-2 border-pink-200 shadow-xs">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <FlowerSticker className="w-4 h-4" />
                    <span className="text-xs font-extrabold text-pink-700 uppercase tracking-wider">
                      Dari Segi Bahasa:
                    </span>
                  </div>
                  <p className="text-sm font-bold text-pink-950">
                    "{INTRO_CONTENT.definition.bahasa}"
                  </p>
                </div>

                <div className="p-4 bg-white rounded-2xl border-2 border-pink-200 shadow-xs">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <HeartSticker className="w-4 h-4" />
                    <span className="text-xs font-extrabold text-rose-700 uppercase tracking-wider">
                      Dari Segi Syarak:
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-pink-950 leading-relaxed">
                    "{INTRO_CONTENT.definition.syarak}"
                  </p>
                </div>
              </div>

              {/* Dalil Naqli Surah Al-Baqarah */}
              <div className="p-5 bg-gradient-to-r from-pink-50 via-white to-pink-50 rounded-2xl border-2 border-pink-300 shadow-xs text-center">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-0.5 bg-rose-500 text-white rounded-full text-[11px] font-extrabold shadow-2xs">
                    Dalil Al-Quran
                  </span>
                  <span className="text-xs font-bold text-rose-700">
                    [{INTRO_CONTENT.dalil.surah}]
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-serif text-pink-950 leading-loose mb-2" dir="rtl">
                  {INTRO_CONTENT.dalil.arab}
                </p>
                <p className="text-xs text-pink-900 leading-relaxed font-semibold">
                  "{INTRO_CONTENT.dalil.terjemahan}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Kepentingan Bersuci Grid with Coquette Cards */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h3 className="font-display text-2xl font-extrabold text-pink-950">
              Kepentingan Bersuci dalam Kehidupan Muslim
            </h3>
            <p className="text-xs text-pink-800 font-semibold">Empat hikmah besar mengamalkan kebersihan dan kesucian rohani & jasmani</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INTRO_CONTENT.kepentingan.map((item, idx) => (
              <div
                key={idx}
                className="coquette-card p-5 hover:border-pink-400 transition-all group relative"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-100 to-rose-100 group-hover:from-pink-200 group-hover:to-rose-200 flex items-center justify-center mb-3 transition-colors shadow-2xs">
                  {getIcon(item.icon)}
                </div>
                <h4 className="font-display text-sm font-extrabold text-pink-950 mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-pink-900/90 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Objektif Pembelajaran Card */}
        <div className="max-w-4xl mx-auto coquette-card p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <RibbonBow className="w-6 h-6 text-pink-500" />
            <h3 className="font-display text-xl font-extrabold text-pink-950">
              Objektif Pembelajaran Unit Ini:
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
            {INTRO_CONTENT.objektif.map((obj, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 bg-white/90 rounded-2xl border-2 border-pink-200 shadow-2xs">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs text-pink-950 font-bold leading-relaxed">
                  {obj}
                </span>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('pembelajaran')}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-extrabold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 rounded-full shadow-lg shadow-pink-200 transition-all cursor-pointer group hover:scale-102"
            >
              <span>Teruskan ke Sudut Pembelajaran</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
