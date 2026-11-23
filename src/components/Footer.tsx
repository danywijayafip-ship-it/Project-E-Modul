import React from 'react';
import { BrandLogos } from './BrandLogos';

interface FooterProps {
  onScrollTop: () => void;
}

export function Footer({ onScrollTop }: FooterProps) {
  return (
    <footer className="bg-[#14181F] text-[#C9CEDD]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-8 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <div className="flex items-center gap-4">
          <BrandLogos size="sm" tone="dark" />
          <div className="text-sm leading-snug">
            <p className="font-semibold text-white">
              © 2026 Project E-Modul · Mata Kuliah Bahan Pembelajaran
            </p>
            <p className="text-xs text-[#A9B2C8]">
              Program Studi S1 Teknologi Pendidikan · Universitas Negeri Malang
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onScrollTop}
          className="text-sm font-semibold text-[#F2A93B] transition-colors hover:text-white cursor-pointer"
        >
          Kembali ke atas ↑
        </button>
      </div>
    </footer>
  );
}
