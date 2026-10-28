import React from "react";
import { MessageCircle } from "lucide-react";
import { FinancialCalculator, CalculatorDetail } from "./pages/FinancialCalculator";
import { setLastResult } from "./lib/resultStore";
import { BRAND, TAGLINE, CTA_LABEL, DISCLAIMER, waLink } from "./config";

export function App() {
  const [id, setId] = React.useState<string | null>(null);
  const open = (next: string | null) => { setId(next); window.scrollTo({ top: 0 }); };
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header className="no-print" style={{ background: "rgb(var(--c-surface))", borderBottom: "1px solid rgb(var(--c-border))" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <button type="button" onClick={() => open(null)} style={{ border: 0, background: "transparent", cursor: "pointer", textAlign: "left", padding: 0 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: "rgb(var(--c-accent-text))", letterSpacing: "-.02em" }}>{BRAND}</div>
            <div style={{ fontSize: 11, color: "rgb(var(--c-muted))" }}>{TAGLINE}</div>
          </button>
          <a href={waLink(`Assalamu'alaikum, saya ingin konsultasi keuangan syariah dengan ${BRAND}.`)} target="_blank" rel="noopener noreferrer"
             style={{ display: "inline-flex", alignItems: "center", gap: 7, borderRadius: 10, padding: "9px 14px", fontSize: 13, fontWeight: 700, textDecoration: "none", background: "rgb(var(--c-accent))", color: "rgb(var(--c-accent-ink))" }}>
            <MessageCircle size={15} /> {CTA_LABEL}
          </a>
        </div>
      </header>

      <main style={{ flex: 1, width: "100%", maxWidth: 1200, margin: "0 auto", padding: "24px 20px 40px", boxSizing: "border-box" }}>
        {id === null
          ? <FinancialCalculator onOpen={(x) => open(x)} />
          : <CalculatorDetail key={id} id={id} onBack={() => open(null)} onSaveResult={setLastResult} onNavigate={() => {}} />}
      </main>

      <footer className="no-print" style={{ borderTop: "1px solid rgb(var(--c-border))", padding: "16px 20px", fontSize: 11.5, lineHeight: 1.5, color: "rgb(var(--c-muted))", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>{DISCLAIMER}</div>
        <div style={{ marginTop: 6 }}>© {new Date().getFullYear()} {BRAND}</div>
      </footer>
    </div>
  );
}
