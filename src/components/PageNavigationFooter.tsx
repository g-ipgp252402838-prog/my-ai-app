import React from 'react';
import { SectionId } from '../types';
import { RibbonBow, FlowerSticker } from './RibbonIcons';
import { ChevronLeft, ChevronRight, Home, Sparkles, BookOpen, Video, Gamepad2, HelpCircle, Award } from 'lucide-react';

interface Props {
  currentSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

export const PAGES_CONFIG: {
  id: SectionId;
  title: string;
  shortLabel: string;
  iconName: string;
  desc: string;
}[] = [
  {
    id: 'home',
    title: 'Halaman Utama',
    shortLabel: 'Utama',
    iconName: 'Home',
    desc: 'Selamat datang ke dunia pembelajaran Mari Bersuci',
  },
  {
    id: 'pengenalan',
    title: 'Pengenalan Mari Bersuci',
    shortLabel: 'Pengenalan',
    iconName: 'Sparkles',
    desc: 'Pengertian, dalil al-Quran & hikmah bersuci',
  },
  {
    id: 'pembelajaran',
    title: 'Modul Pembelajaran Fiqh',
    shortLabel: 'Modul Belajar',
    iconName: 'BookOpen',
    desc: '4 Modul interaktif jenis najis & kaedah bersuci',
  },
  {
    id: 'amali',
    title: 'Video & Demonstrasi Amali',
    shortLabel: 'Video & Amali',
    iconName: 'Video',
    desc: 'Video amali & simulasi pembilang 7 basuhan sertu',
  },
  {
    id: 'permainan',
    title: 'Permainan Interaktif Ribbon',
    shortLabel: 'Permainan',
    iconName: 'Gamepad2',
    desc: 'Misi Ribbon Suci: Padankan, pilih & susun langkah',
  },
  {
    id: 'kuiz',
    title: 'Kuiz Pengukuhan DSKP',
    shortLabel: 'Kuiz',
    iconName: 'HelpCircle',
    desc: '10 soalan pemarkahan kendiri & pengukuhan ilmu',
  },
  {
    id: 'sijil',
    title: 'Sijil Digital Pencapaian',
    shortLabel: 'Sijil Saya',
    iconName: 'Award',
    desc: 'Jana dan cetak sijil pencapaian rasmi anda',
  },
];

export function PageNavigationFooter({ currentSection, onNavigate }: Props) {
  const currentIndex = PAGES_CONFIG.findIndex((p) => p.id === currentSection);
  const prevPage = currentIndex > 0 ? PAGES_CONFIG[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGES_CONFIG.length - 1 ? PAGES_CONFIG[currentIndex + 1] : null;
  const currentPage = PAGES_CONFIG[currentIndex] || PAGES_CONFIG[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Google Sites Style Page Bar */}
      <div className="coquette-card p-4 sm:p-6 bg-white/95 border-2 border-pink-300 shadow-lg">
        {/* Top Breadcrumb & Page Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-4 mb-4 border-b-2 border-pink-100 gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <RibbonBow className="w-5 h-5 text-pink-500" />
            <span className="text-xs font-black text-pink-700 uppercase tracking-widest">
              Navigasi Halaman Google Sites:
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-extrabold text-pink-900 bg-pink-100/80 px-3.5 py-1 rounded-full border border-pink-200">
            <FlowerSticker className="w-3.5 h-3.5" />
            <span>Halaman {currentIndex + 1} daripada {PAGES_CONFIG.length}</span>
            <span>·</span>
            <span className="text-rose-700">{currentPage.title}</span>
          </div>
        </div>

        {/* Buttons Row: Sebelumnya & Seterusnya */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Previous Page Button */}
          {prevPage ? (
            <button
              onClick={() => onNavigate(prevPage.id)}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white hover:bg-pink-50 border-2 border-pink-300 text-pink-950 font-extrabold text-xs sm:text-sm shadow-xs flex items-center justify-center sm:justify-start gap-2.5 transition-all cursor-pointer hover:-translate-x-1"
            >
              <ChevronLeft className="w-5 h-5 text-pink-600 shrink-0" />
              <div className="text-left">
                <span className="block text-[10px] text-pink-600 font-bold uppercase tracking-wider">
                  Halaman Sebelumnya
                </span>
                <span className="block font-black">{prevPage.title}</span>
              </div>
            </button>
          ) : (
            <div className="hidden sm:block text-xs text-pink-400 font-bold italic px-3">
              (Ini ialah Halaman Pertama)
            </div>
          )}

          {/* Quick Page Jump Dots / Selector */}
          <div className="flex items-center gap-1.5 py-1">
            {PAGES_CONFIG.map((p, idx) => {
              const isCurrent = p.id === currentSection;
              return (
                <button
                  key={p.id}
                  onClick={() => onNavigate(p.id)}
                  title={`Pergi ke: ${p.title}`}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-black transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-rose-500 text-white ring-3 ring-pink-300 shadow-sm scale-110'
                      : 'bg-pink-100 hover:bg-pink-200 text-pink-800'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Next Page Button */}
          {nextPage ? (
            <button
              onClick={() => onNavigate(nextPage.id)}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-pink-200 flex items-center justify-center sm:justify-end gap-2.5 transition-all cursor-pointer hover:translate-x-1"
            >
              <div className="text-right">
                <span className="block text-[10px] text-pink-100 font-bold uppercase tracking-wider">
                  Halaman Seterusnya
                </span>
                <span className="block font-black">{nextPage.title}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-white shrink-0" />
            </button>
          ) : (
            <button
              onClick={() => onNavigate('home')}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Kembali ke Halaman Utama</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
