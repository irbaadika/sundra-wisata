/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#00BF63",
          70: "#005F31",
        },
        neutral: {
          60: "#878787",
          70: "#606060",
          80: "#383838",
        },
        titleColor: "#0F2137",
        subtitleColor: "#474747",
      },
      fontSize: {
        bold: {
          boldheading1: { fontSize: "64px", fontWeight: 700 },
          heading2: ["48px", { fontWeight: 700 }],
          heading3: ["40px", { fontWeight: 700 }],
          heading4: ["32px", { fontWeight: 700 }],
          heading5: ["24px", { fontWeight: 700 }],
          heading6: ["18px", { fontWeight: 700 }],
          bodyLarge: ["16px", { fontWeight: 700 }],
          bodySmall: ["14px", { fontWeight: 700 }],
          bodyMedium: ["12px", { fontWeight: 700 }],
        },
        semiBold: {
          heading1: ["64px", { fontWeight: 600 }],
          heading2: ["48px", { fontWeight: 600 }],
          heading3: ["40px", { fontWeight: 600 }],
          heading4: ["32px", { fontWeight: 600 }],
          heading5: ["24px", { fontWeight: 600 }],
          heading6: ["18px", { fontWeight: 600 }],
          bodyLarge: ["16px", { fontWeight: 600 }],
          bodySmall: ["14px", { fontWeight: 600 }],
          bodyMedium: ["12px", { fontWeight: 600 }],
        },
        medium: {
          heading1: ["64px", { fontWeight: 500 }],
          heading2: ["48px", { fontWeight: 500 }],
          heading3: ["40px", { fontWeight: 500 }],
          heading4: ["32px", { fontWeight: 500 }],
          heading5: ["24px", { fontWeight: 500 }],
          heading6: ["18px", { fontWeight: 500 }],
          bodyLarge: ["16px", { fontWeight: 500 }],
          bodySmall: ["14px", { fontWeight: 500 }],
          bodyMedium: ["12px", { fontWeight: 500 }],
        },
        regular: {
          heading1: ["64px", { fontWeight: 400 }],
          heading2: ["48px", { fontWeight: 400 }],
          heading3: ["40px", { fontWeight: 400 }],
          heading4: ["32px", { fontWeight: 400 }],
          heading5: ["24px", { fontWeight: 400 }],
          heading6: ["18px", { fontWeight: 400 }],
          bodyLarge: ["16px", { fontWeight: 400 }],
          bodySmall: ["14px", { fontWeight: 400 }],
          bodyMedium: ["12px", { fontWeight: 400 }],
        },
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
