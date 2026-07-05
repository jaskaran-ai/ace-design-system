/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#6B3A7A", hover: "#522C5E", active: "#3D2047", light: "#9D6BAA", lighter: "#B88FC5" },
        accent: { DEFAULT: "#5C8A4F", hover: "#4A7A3D", active: "#3A6A2D" },
        bg: { DEFAULT: "#F3EFF4", subtle: "#F8F5FA" },
        surface: { DEFAULT: "#FFFFFF", border: "#D8D0DC", subtle: "#E2DCE8" },
        text: { DEFAULT: "#1F1024", heading: "#1A0E1E", body: "#4A3D52", muted: "#5A4D63", faint: "#6A5C72", lighter: "#8A7B92" },
        success: { bg: "#E8DFF0", border: "#D0C0DC" },
        warning: { bg: "#F0EDE0", border: "#DCE8C8" },
        error: { bg: "#EDEAF2", border: "#D8D0E0", icon: "#5C2237" },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: { card: '16px', btn: '12px', pill: '999px' },
      boxShadow: {
        btn: '0 1px 2px rgba(0,0,0,.05)',
        'btn-hover': '0 4px 12px rgba(107,58,122,.25)',
        card: '0 1px 3px rgba(0,0,0,.04)',
        'card-hover': '0 8px 24px rgba(107,58,122,.08)',
      },
    },
  },
  plugins: [],
}
