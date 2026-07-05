/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#312E81", hover: "#26245E", active: "#1A1860", light: "#5B5BAE", lighter: "#8080CC" },
        accent: { DEFAULT: "#C2410C", hover: "#9A3408", active: "#7A2806" },
        bg: { DEFAULT: "#F0F0F8", subtle: "#F5F5FA" },
        surface: { DEFAULT: "#FFFFFF", border: "#D5D5E5", subtle: "#DCE0EC" },
        text: { DEFAULT: "#12122E", heading: "#0E0E22", body: "#3E3E5E", muted: "#4E4E6E", faint: "#5E5E7E", lighter: "#8A8AAB" },
        success: { bg: "#E0E0F0", border: "#C0C0E0" },
        warning: { bg: "#F0E8E0", border: "#D8C8B8" },
        error: { bg: "#EDE8F0", border: "#D0D0E0", icon: "#4A2E5E" },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: { card: '16px', btn: '12px', pill: '999px' },
      boxShadow: {
        btn: '0 1px 2px rgba(0,0,0,.05)',
        'btn-hover': '0 4px 12px rgba(49,46,129,.25)',
        card: '0 1px 3px rgba(0,0,0,.04)',
        'card-hover': '0 8px 24px rgba(49,46,129,.08)',
      },
    },
  },
  plugins: [],
}
