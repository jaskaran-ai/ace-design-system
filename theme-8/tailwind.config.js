/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0E7490", hover: "#0E5A78", active: "#0A4A62", light: "#22D3EE", lighter: "#67E8F9" },
        accent: { DEFAULT: "#CA8A04", hover: "#B07602", active: "#966400" },
        bg: { DEFAULT: "#EFF7FA", subtle: "#F2F9FB" },
        surface: { DEFAULT: "#FFFFFF", border: "#C8DDE6", subtle: "#DCEAF0" },
        text: { DEFAULT: "#0A1F2E", heading: "#06141E", body: "#3A5A6A", muted: "#4A6A7A", faint: "#5A7A8A", lighter: "#8AAAB8" },
        success: { bg: "#D0EBF5", border: "#A8D0E6" },
        warning: { bg: "#F5EDE0", border: "#E8D8B8" },
        error: { bg: "#F0EAF2", border: "#D8D0E0", icon: "#5A2E6A" },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: { card: '16px', btn: '12px', pill: '999px' },
      boxShadow: {
        btn: '0 1px 2px rgba(0,0,0,.05)',
        'btn-hover': '0 4px 12px rgba(14,116,144,.25)',
        card: '0 1px 3px rgba(0,0,0,.04)',
        'card-hover': '0 8px 24px rgba(14,116,144,.08)',
      },
    },
  },
  plugins: [],
}
