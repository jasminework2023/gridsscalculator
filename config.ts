// ====== EDIT DI SINI ======
export const BRAND = "Gemah Ripah Indonesia Syariah";
export const TAGLINE = "Kalkulator Finansial Syariah";
// Nomor WhatsApp konsultasi, format internasional tanpa + dan tanpa spasi. GANTI sebelum deploy.
export const WHATSAPP_NUMBER = "6281234567890";
export const CTA_LABEL = "Konsultasi Gratis";
export const DISCLAIMER = "Hasil simulasi bersifat edukatif dan estimasi, bukan nasihat keuangan, fatwa, maupun penawaran produk. Konsultasikan rencana keuanganmu dengan perencana keuangan syariah.";
export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
