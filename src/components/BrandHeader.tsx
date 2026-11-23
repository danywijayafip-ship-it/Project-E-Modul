import React, { useState } from 'react';
import { ArrowLeft, Menu, Upload, X } from 'lucide-react';
import { BrandLogos } from './BrandLogos';

interface BrandHeaderProps {
  activeView: 'home' | 'upload' | 'module';
  onNavigate: (view: 'home' | 'upload', sectionId?: string) => void;
}

export function BrandHeader({ activeView, onNavigate }: BrandHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (sectionId?: string) => {
    setMobileOpen(false);
    onNavigate('home', sectionId);
  };

  if (activeView === 'upload' || activeView === 'module') {
    return (
      <header className="sticky top-0 z-40 border-b border-[#E3E6F0] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3.5 text-left transition-opacity hover:opacity-90 cursor-pointer"
          >
            <BrandLogos size="md" tone="light" />
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-[#2438C9] sm:text-xl">
                Project E-Modul TEP
              </span>
              <span className="text-xs font-medium text-[#4A5160]">
                Teknologi Pendidikan · Universitas Negeri Malang
              </span>
            </div>
          </button>

          <div className="flex items-center gap-3">
            {activeView === 'module' && (
              <button
                type="button"
                onClick={() => onNavigate('upload')}
                className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#F2A93B] px-4 py-2 text-sm font-bold text-[#14181F] transition-colors hover:bg-[#f5b95b] cursor-pointer whitespace-nowrap"
              >
                <Upload className="h-4 w-4" />
                Unggah E-Modul
              </button>
            )}
            <button
              type="button"
              onClick={() =>
                onNavigate('home', activeView === 'module' ? 'katalog' : undefined)
              }
              className="inline-flex items-center gap-2 rounded-lg border border-[#D4D8E6] bg-white px-4 py-2 text-sm font-semibold text-[#14181F] transition-colors hover:border-[#2438C9] hover:text-[#2438C9] cursor-pointer whitespace-nowrap"
            >
              <ArrowLeft className="h-4 w-4" />
              {activeView === 'module' ? 'Kembali ke Katalog' : 'Kembali ke Portofolio'}
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#14181F]/95 text-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-5 py-3.5 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => handleLinkClick()}
          className="flex items-center gap-3.5 text-left transition-opacity hover:opacity-90 cursor-pointer"
        >
          <BrandLogos size="md" tone="dark" />
          <div className="flex flex-col">
            <span className="font-display text-base font-bold tracking-tight text-white sm:text-lg whitespace-nowrap">
              Project E-Modul TEP 2026
            </span>
            <span className="text-xs font-medium text-[#A9B2C8] whitespace-nowrap">
              Teknologi Pendidikan · Universitas Negeri Malang
            </span>
          </div>
        </button>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-7 lg:flex"
        >
          <button
            type="button"
            onClick={() => handleLinkClick('tentang')}
            className="text-sm font-medium text-[#D6DCEB] transition-colors hover:text-[#F2A93B] cursor-pointer whitespace-nowrap"
          >
            Tentang
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('katalog')}
            className="text-sm font-medium text-[#D6DCEB] transition-colors hover:text-[#F2A93B] cursor-pointer whitespace-nowrap"
          >
            Katalog E-Modul
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('tim')}
            className="text-sm font-medium text-[#D6DCEB] transition-colors hover:text-[#F2A93B] cursor-pointer whitespace-nowrap"
          >
            Tim Pengampu
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('unggah')}
            className="text-sm font-medium text-[#F2A93B] transition-colors hover:text-white cursor-pointer whitespace-nowrap"
          >
            Ketentuan Unggah
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('upload')}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#F2A93B] px-4 py-2.5 text-sm font-bold text-[#14181F] transition-colors hover:bg-[#f5b95b] cursor-pointer whitespace-nowrap"
          >
            <Upload className="h-4 w-4" />
            Unggah E-Modul
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#14181F] px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => handleLinkClick('tentang')}
              className="py-2 text-left text-sm font-medium text-[#D6DCEB] hover:text-[#F2A93B] cursor-pointer"
            >
              Tentang Program
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('katalog')}
              className="py-2 text-left text-sm font-medium text-[#D6DCEB] hover:text-[#F2A93B] cursor-pointer"
            >
              Katalog E-Modul
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('tim')}
              className="py-2 text-left text-sm font-medium text-[#D6DCEB] hover:text-[#F2A93B] cursor-pointer"
            >
              Tim Pengampu
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onNavigate('upload');
              }}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#F2A93B] px-4 py-3 text-sm font-bold text-[#14181F] cursor-pointer"
            >
              <Upload className="h-4 w-4" />
              Unggah E-Modul
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
