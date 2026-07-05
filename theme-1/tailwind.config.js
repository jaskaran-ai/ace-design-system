/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#007D6E", hover: "#005A4E", active: "#003D36", light: "#2FB39B", lighter: "#5FD3BB" },
        accent: { DEFAULT: "#A85A18", hover: "#8F4C14", active: "#7A3F10" },
        bg: { DEFAULT: "#F4F2EE", subtle: "#FBFAF8" },
        surface: { DEFAULT: "#FFFFFF", border: "#E0E5E2", subtle: "#E8EEEC" },
        text: { DEFAULT: "#0D1F1C", heading: "#0A1714", body: "#4A5754", muted: "#5A6663", faint: "#6A736F", lighter: "#8A938F" },
        success: { bg: "#E8F5F2", border: "#C7E7DF" },
        warning: { bg: "#FDF4EC", border: "#F5E0C9" },
        error: { bg: "#F7F0F4", border: "#E8D5DF", icon: "#7A2E4A" },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: { card: '16px', btn: '12px', pill: '999px' },
      boxShadow: {
        btn: '0 1px 2px rgba(0,0,0,.05)',
        'btn-hover': '0 4px 12px rgba(0,125,110,.25)',
        card: '0 1px 3px rgba(0,0,0,.04)',
        'card-hover': '0 8px 24px rgba(0,125,110,.08)',
      },
    },
  },
  plugins: [],
}
