import React from 'react';
import { SectionId } from '../types';
import { RibbonBow, SparkleIcon } from './RibbonIcons';

interface Props {
  onNavigate: (section: SectionId) => void;
}

export function Footer({ onNavigate }: Props) {
  return (
    <footer className="bg-white/85 backdrop-blur-xs border-t border-pink-200 py-12 text-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-pink-200/80">
          {/* Brand Info */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <RibbonBow className="w-10 h-10 text-pink-500 animate-gentle-sway" />
            <div>
              <div className="flex items-center justify-center md:justify-start gap-1.5">
                <h4 className="font-display text-xl font-extrabold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent">
                  Mari Bersuci Tahun 4
                </h4>
              </div>
              <p className="text-xs text-pink-800 font-bold">
                Laman Pembelajaran Interaktif · EDUP6023 Tugasan 3: Penghasilan Produk
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-pink-800">
            <button onClick={() => onNavigate('home')} className="hover:text-pink-600 cursor-pointer">
              Home
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('pengenalan')} className="hover:text-pink-600 cursor-pointer">
              Pengenalan
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('pembelajaran')} className="hover:text-pink-600 cursor-pointer">
              Sudut Pembelajaran
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('amali')} className="hover:text-pink-600 cursor-pointer">
              Video Amali
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('permainan')} className="hover:text-pink-600 cursor-pointer">
              Permainan
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('kuiz')} className="hover:text-pink-600 cursor-pointer">
              Kuiz
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('sijil')} className="hover:text-pink-600 cursor-pointer">
              Sijil Saya
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pink-700/80">
          <p>
            © {new Date().getFullYear()} Mari Bersuci Tahun 4. Dibangunkan untuk tujuan pengajaran dan pembelajaran Pendidikan Islam Sekolah Rendah.
          </p>
          <div className="flex items-center gap-1.5 font-medium text-pink-800">
            <SparkleIcon className="w-3.5 h-3.5 text-pink-400" />
            <span>"Kebersihan itu sebahagian daripada iman"</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
