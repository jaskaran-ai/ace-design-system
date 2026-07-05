/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#BE185D", hover: "#9D174B", active: "#831843", light: "#D94A8A", lighter: "#E870A8" },
        accent: { DEFAULT: "#0F766E", hover: "#0A5A54", active: "#064A44" },
        bg: { DEFAULT: "#FBF1F5", subtle: "#FDF6F9" },
        surface: { DEFAULT: "#FFFFFF", border: "#D8C8D2", subtle: "#ECDCE4" },
        text: { DEFAULT: "#1F0F16", heading: "#1A0C12", body: "#4A2D3A", muted: "#5A3D4A", faint: "#6A4A58", lighter: "#8A6A78" },
        success: { bg: "#F0DCE6", border: "#D8B8C8" },
        warning: { bg: "#F0E8E0", border: "#C8E0D8" },
        error: { bg: "#EDE0E8", border: "#D8C0D0", icon: "#831843" },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: { card: '16px', btn: '12px', pill: '999px' },
      boxShadow: {
        btn: '0 1px 2px rgba(0,0,0,.05)',
        'btn-hover': '0 4px 12px rgba(190,24,93,.25)',
        card: '0 1px 3px rgba(0,0,0,.04)',
        'card-hover': '0 8px 24px rgba(190,24,93,.08)',
      },
    },
  },
  plugins: [],
}
