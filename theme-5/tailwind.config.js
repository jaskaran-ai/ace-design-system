/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#B91C1C", hover: "#991B1B", active: "#7F1D1D", light: "#D94A4A", lighter: "#E87070" },
        accent: { DEFAULT: "#475569", hover: "#334155", active: "#1E293B" },
        bg: { DEFAULT: "#F5F3F4", subtle: "#FAF8F9" },
        surface: { DEFAULT: "#FFFFFF", border: "#D8D0D0", subtle: "#E2DCDC" },
        text: { DEFAULT: "#1F1212", heading: "#1A0E0E", body: "#4A3A3A", muted: "#5A4A4A", faint: "#6A5A5A", lighter: "#8A7A7A" },
        success: { bg: "#F0E0E0", border: "#D8C0C0" },
        warning: { bg: "#F0E8E8", border: "#D8D0D8" },
        error: { bg: "#EDE8E8", border: "#D8C8C8", icon: "#5C2222" },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: { card: '16px', btn: '12px', pill: '999px' },
      boxShadow: {
        btn: '0 1px 2px rgba(0,0,0,.05)',
        'btn-hover': '0 4px 12px rgba(185,28,28,.25)',
        card: '0 1px 3px rgba(0,0,0,.04)',
        'card-hover': '0 8px 24px rgba(185,28,28,.08)',
      },
    },
  },
  plugins: [],
}
