# Kalkulator Finansial — Gemah Ripah Indonesia Syariah

9 kalkulator (Check-Up, KPR, Pendidikan, Pensiun, Warisan, Haji, Zakat & Wakaf, Investasi, Asuransi).
Formula dipindahkan persis dari `src/pages/FinancialCalculator.tsx` project personal-wealthplanner (tidak diubah).

## Jalankan
    npm install
    npm run dev        # lokal
    npm run build      # hasil di dist/ (siap deploy ke Vercel/Netlify)

## Yang perlu diganti
`src/config.ts` → `WHATSAPP_NUMBER` (nomor konsultasi), nama brand, label CTA, disclaimer.

## Cetak PDF
Tombol "Cetak PDF" memakai dialog cetak browser → pilih "Save as PDF".
