import React, { useState } from 'react';
import { SectionId } from '../types';
import { RibbonBow, SparkleIcon, FlowerSticker } from './RibbonIcons';
import { Menu, X, Award, BookOpen, Video, Gamepad2, HelpCircle, Home, Sparkles, MapPin, Volume2, VolumeX, Music } from 'lucide-react';
import { PAGES_CONFIG } from './PageNavigationFooter';
import { bgmInstance } from '../utils/bgmAudio';

interface Props {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  progressPercent: number;
}

export function Navbar({ activeSection, onNavigate, progressPercent }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBgmActive, setIsBgmActive] = useState(false);

  const handleToggleBgm = () => {
    const active = bgmInstance.toggleMute();
    setIsBgmActive(active);
  };

  const navItems: { id: SectionId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Halaman Utama', icon: <Home className="w-4 h-4" /> },
    { id: 'pengenalan', label: 'Pengenalan', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'pembelajaran', label: 'Modul Belajar', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'amali', label: 'Video & Amali', icon: <Video className="w-4 h-4" /> },
    { id: 'permainan', label: 'Permainan', icon: <Gamepad2 className="w-4 h-4" /> },
    { id: 'kuiz', label: 'Kuiz', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'sijil', label: 'Sijil Pencapaian', icon: <Award className="w-4 h-4" /> },
  ];

  const handleNavClick = (id: SectionId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const currentPage = PAGES_CONFIG.find((p) => p.id === activeSection) || PAGES_CONFIG[0];
  const currentPageIndex = PAGES_CONFIG.findIndex((p) => p.id === activeSection);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-pink-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Zone 1: Brand Wordmark with Ribbon */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left cursor-pointer shrink-0"
          >
            <div className="relative">
              <RibbonBow className="w-8 h-8 text-pink-500 group-hover:scale-110 transition-transform animate-gentle-sway" />
              <div className="absolute -top-1 -right-1">
                <SparkleIcon className="w-3.5 h-3.5 text-pink-400 animate-sparkle" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-extrabold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent whitespace-nowrap">
                Mari Bersuci
              </span>
              <span className="text-[10px] text-pink-700 font-extrabold tracking-wider uppercase -mt-1 hidden sm:inline">
                Tahun 4 · EDUP6023
              </span>
            </div>
          </button>

          {/* Zone 2: Multi-Page Navigation Tabs (Google Sites Style) */}
          <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2 text-xs font-semibold text-pink-800">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap text-xs ${
                    isActive
                      ? 'bg-rose-500 text-white shadow-md shadow-pink-200 font-black ring-2 ring-rose-300 scale-102'
                      : 'hover:bg-pink-100 hover:text-pink-950 text-pink-800 font-extrabold'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-pink-500'}>{item.icon}</span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: BGM, Progress & Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* BGM Audio Toggle Button */}
            <button
              onClick={handleToggleBgm}
              title={isBgmActive ? "Senyapkan Muzik Latar (Mute BGM)" : "Mainkan Muzik Latar Mesra Kanak-kanak (Unmute BGM)"}
              aria-label={isBgmActive ? "Senyapkan Muzik Latar" : "Mainkan Muzik Latar"}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-black rounded-full border-2 transition-all cursor-pointer shadow-xs active:scale-95 hover:scale-105 ${
                isBgmActive
                  ? 'bg-rose-100 border-rose-400 text-rose-700 shadow-pink-200 ring-2 ring-rose-200'
                  : 'bg-white border-pink-300 text-pink-600 hover:bg-pink-50 hover:text-pink-800'
              }`}
            >
              {isBgmActive ? (
                <>
                  <Volume2 className="w-4 h-4 text-rose-600 animate-pulse" />
                  <span className="hidden md:inline font-extrabold">BGM: Hidup</span>
                  <span className="md:hidden font-extrabold">BGM</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-pink-400" />
                  <span className="hidden md:inline font-extrabold">BGM: Senyap</span>
                  <span className="md:hidden font-extrabold">BGM</span>
                </>
              )}
            </button>

            {/* Progress Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 bg-pink-50 border-2 border-pink-200 rounded-full text-xs text-pink-950 font-black shadow-2xs">
              <span>Kemajuan:</span>
              <span className="tabular-nums text-pink-600 font-black">{progressPercent}%</span>
              <div className="w-16 h-2.5 bg-pink-100 rounded-full overflow-hidden border border-pink-200">
                <div
                  className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Sijil Button Shortcut */}
            <button
              onClick={() => handleNavClick('sijil')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-black rounded-full shadow-md transition-all active:scale-95 cursor-pointer hover:scale-102 ${
                activeSection === 'sijil'
                  ? 'bg-rose-600 text-white ring-2 ring-rose-300'
                  : 'text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 shadow-pink-200'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Sijil Saya</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-2xl text-pink-800 hover:bg-pink-100 transition-colors cursor-pointer border border-pink-200"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Google Sites Style Breadcrumb Banner */}
      <div className="bg-gradient-to-r from-pink-100/90 via-white/95 to-pink-100/90 py-1.5 px-4 border-t border-pink-100 flex items-center justify-between text-xs">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-pink-900">
            <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>Halaman Semasa:</span>
            <span className="font-extrabold text-rose-700 bg-white px-2.5 py-0.5 rounded-md border border-pink-200 shadow-2xs">
              {currentPage.title}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-pink-700 font-bold text-[11px]">
            <span>Halaman {currentPageIndex + 1} / 7</span>
            <span>·</span>
            <span>Gaya Google Sites (Halaman Berasingan)</span>
          </div>
        </div>
      </div>

      {/* Thin Progress line underneath header */}
      <div className="w-full h-1 bg-pink-100">
        <div
          className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-md border-b-2 border-pink-200 px-4 pt-3 pb-5 space-y-1.5 shadow-xl animate-fadeIn">
          {/* Mobile Top Row: BGM & Kemajuan */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-pink-50 rounded-2xl mb-3 border border-pink-200">
            <button
              onClick={handleToggleBgm}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-black rounded-full border transition-all cursor-pointer shadow-xs ${
                isBgmActive
                  ? 'bg-rose-500 text-white border-rose-600 ring-2 ring-rose-300'
                  : 'bg-white text-pink-700 border-pink-300 hover:bg-pink-100'
              }`}
            >
              {isBgmActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span>BGM: Hidup 🎵</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-pink-400" />
                  <span>BGM: Senyap 🔇</span>
                </>
              )}
            </button>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-pink-700">Kemajuan</span>
              <span className="text-xs font-black text-rose-600 tabular-nums">{progressPercent}% Lengkap</span>
            </div>
          </div>
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-extrabold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-rose-500 text-white font-black shadow-sm'
                    : 'text-pink-950 hover:bg-pink-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={isActive ? 'text-white' : 'text-pink-500'}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-rose-700 text-white' : 'bg-pink-100 text-pink-700'}`}>
                  Halaman {idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
