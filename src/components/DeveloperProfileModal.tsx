import React, { useState } from 'react';
import { DeveloperProfile } from '../types';
import { RibbonBow } from './RibbonIcons';
import { X, Save, Edit3, User, GraduationCap, Building2, Quote, FileText } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  profile: DeveloperProfile;
  onSave: (newProfile: DeveloperProfile) => void;
}

export function DeveloperProfileModal({ isOpen, onClose, profile, onSave }: Props) {
  const [formData, setFormData] = useState<DeveloperProfile>(profile);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-2 border-pink-200 overflow-hidden animate-gentle-float">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 p-5 border-b border-pink-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <RibbonBow className="w-8 h-8" />
            <div>
              <h3 className="font-display text-lg font-bold text-pink-900">Sunting Maklumat Pembangun Laman</h3>
              <p className="text-xs text-pink-600">Sesuai untuk EDUP6023 Tugasan 3: Penghasilan Produk</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-pink-700 hover:bg-pink-200/60 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Avatar Preview */}
          <div className="flex items-center gap-4 p-3 bg-pink-50/60 rounded-2xl border border-pink-100">
            <div className="w-16 h-16 rounded-full border-2 border-pink-400 overflow-hidden shrink-0 shadow-xs">
              <img
                src={formData.avatarUrl || "/assets/aistudio/image_104bd941.png"}
                alt="Avatar Pembangun"
                className="w-full h-full object-cover object-[center_20%]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/aistudio/image_104bd941.png';
                }}
              />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-pink-900 block">Gambar Profil Semasa</span>
              <p className="text-[11px] text-pink-700/80">Foto rasmi pembangun (A'liah Hasanah).</p>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, avatarUrl: '/assets/aistudio/image_104bd941.png' })}
                className="text-[11px] font-bold text-pink-600 hover:text-pink-800 underline cursor-pointer"
              >
                Gunakan Foto Rasmi Saya
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-pink-900 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-pink-500" /> Nama Penuh
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="A'LIAH HASANAH BT JAMALUDDIN - 2026242440271"
              className="w-full px-3.5 py-2 text-sm bg-pink-50/40 border border-pink-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-pink-900 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-pink-500" /> Program / Unit
              </label>
              <input
                type="text"
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                placeholder="PISMP ( C10 )"
                className="w-full px-3.5 py-2 text-sm bg-pink-50/40 border border-pink-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-pink-900 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-pink-500" /> Institusi
              </label>
              <input
                type="text"
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                placeholder="IPG KAMPUS IPOH"
                className="w-full px-3.5 py-2 text-sm bg-pink-50/40 border border-pink-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-pink-900 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-pink-500" /> Penerangan Diri / Peranan
            </label>
            <textarea
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Penerangan ringkas tentang objektif anda dalam menghasilkan laman pembelajaran interaktif ini..."
              className="w-full px-3.5 py-2 text-sm bg-pink-50/40 border border-pink-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-pink-900 flex items-center gap-1.5">
              <Quote className="w-3.5 h-3.5 text-pink-500" /> Motto Pendidikan
            </label>
            <input
              type="text"
              value={formData.motto}
              onChange={(e) => setFormData({ ...formData, motto: e.target.value })}
              placeholder="Contoh: Mendidik Hati, Menyucikan Jiwa, Menggapai Redha Ilahi."
              className="w-full px-3.5 py-2 text-sm bg-pink-50/40 border border-pink-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Buttons */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-pink-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 rounded-xl transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-xl shadow-md shadow-pink-200 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" /> Simpan Maklumat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
