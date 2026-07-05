/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#334155", hover: "#1E293B", active: "#0F172A", light: "#10B981", lighter: "#34D399" },
        accent: { DEFAULT: "#059669", hover: "#047857", active: "#03624A" },
        bg: { DEFAULT: "#F4F5F8", subtle: "#F7F8FB" },
        surface: { DEFAULT: "#FFFFFF", border: "#D5D8E0", subtle: "#E2E5EC" },
        text: { DEFAULT: "#1A1F2E", heading: "#10141E", body: "#3A4A5A", muted: "#4A5A6A", faint: "#5A6A7A", lighter: "#8A9AAB" },
        success: { bg: "#E2E5EC", border: "#C0C5D2" },
        warning: { bg: "#E8F0EC", border: "#D0E0D8" },
        error: { bg: "#EDEEF2", border: "#D8D0E0", icon: "#5A2E4A" },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: { card: '16px', btn: '12px', pill: '999px' },
      boxShadow: {
        btn: '0 1px 2px rgba(0,0,0,.05)',
        'btn-hover': '0 4px 12px rgba(51,65,85,.25)',
        card: '0 1px 3px rgba(0,0,0,.04)',
        'card-hover': '0 8px 24px rgba(51,65,85,.08)',
      },
    },
  },
  plugins: [],
}
