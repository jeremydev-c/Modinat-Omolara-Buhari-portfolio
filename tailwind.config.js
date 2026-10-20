/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: token("paper"),
        surface: token("surface"),
        ink: { DEFAULT: token("ink"), 2: token("ink-2"), 3: token("ink-3") },
        rule: token("rule"),
        amber: token("amber"),
        claret: token("claret"),
        band: { DEFAULT: token("band"), ink: token("band-ink") },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "fig-xl": ["clamp(3.4rem, 10.5vw, 10rem)", { lineHeight: "0.88", letterSpacing: "-0.02em" }],
        "fig-lg": ["clamp(2.6rem, 6.5vw, 6.25rem)", { lineHeight: "0.92", letterSpacing: "-0.015em" }],
        "fig-md": ["clamp(2rem, 4.2vw, 3.75rem)", { lineHeight: "0.98", letterSpacing: "-0.01em" }],
        "fig-sm": ["clamp(1.5rem, 2.6vw, 2.25rem)", { lineHeight: "1.05" }],
      },
      maxWidth: { page: "86rem" },
    },
  },
  plugins: [],
};
