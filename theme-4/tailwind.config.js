/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#2D6A4F", hover: "#1B5037", active: "#0F3A24", light: "#4A9A6A", lighter: "#6BB888" },
        accent: { DEFAULT: "#C9962A", hover: "#B07602", active: "#966400" },
        bg: { DEFAULT: "#F2F5F1", subtle: "#F7FAF5" },
        surface: { DEFAULT: "#FFFFFF", border: "#C8DCC8", subtle: "#DCE8DC" },
        text: { DEFAULT: "#0F1F15", heading: "#0A1A10", body: "#3A5A42", muted: "#4A6A52", faint: "#5A7A62", lighter: "#8AA898" },
        success: { bg: "#E0F0E0", border: "#C0D8C0" },
        warning: { bg: "#F5EDE0", border: "#E8D8B8" },
        error: { bg: "#EDEEE2", border: "#D0D8C8", icon: "#5C3A22" },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: { card: '16px', btn: '12px', pill: '999px' },
      boxShadow: {
        btn: '0 1px 2px rgba(0,0,0,.05)',
        'btn-hover': '0 4px 12px rgba(45,106,79,.25)',
        card: '0 1px 3px rgba(0,0,0,.04)',
        'card-hover': '0 8px 24px rgba(45,106,79,.08)',
      },
    },
  },
  plugins: [],
}
