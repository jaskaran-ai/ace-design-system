/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#1B5E9C", hover: "#154A7A", active: "#0E3A60", light: "#4A8FB8", lighter: "#7AB5D8" },
        accent: { DEFAULT: "#D9534F", hover: "#C94541", active: "#A83A37" },
        bg: { DEFAULT: "#EEF1F4", subtle: "#F7F8FB" },
        surface: { DEFAULT: "#FFFFFF", border: "#D5D8E0", subtle: "#E2E5EC" },
        text: { DEFAULT: "#0E1F2E", heading: "#0A1520", body: "#3E5566", muted: "#52677A", faint: "#62768A", lighter: "#8A9AAB" },
        success: { bg: "#E8EFF4", border: "#C3D5E8" },
        warning: { bg: "#FCEEEA", border: "#F0CFC8" },
        error: { bg: "#F0EAF2", border: "#D8D0E0", icon: "#8B2E3A" },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: { card: '16px', btn: '12px', pill: '999px' },
      boxShadow: {
        btn: '0 1px 2px rgba(0,0,0,.05)',
        'btn-hover': '0 4px 12px rgba(27,94,156,.25)',
        card: '0 1px 3px rgba(0,0,0,.04)',
        'card-hover': '0 8px 24px rgba(27,94,156,.08)',
      },
    },
  },
  plugins: [],
}
