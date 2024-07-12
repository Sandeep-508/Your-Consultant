/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['14px', '20px'],
      sm: ['16px', '25px'],
      md: ['18px', '24px'],
      base: ['16px', '24px'],
      lg: ['52px', '62px'],
      xl: ['60px', '77px'],
      '2xl': ['20px', '28px'],
      'lmd': ['29px', '37px'],
      '3xl': ['36px', '47px'],
      "nm": ["40px", "52px"],
    },
    extend: {
      fontFamily: {
        sans: ['HelveticaNeue', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        'primary': "#ECEEFF",
        "text-red": "#F77B0B",
        "footer-bg": "#003E92",
        "blue-clr": "#9800B0",
        "fault-box": "#003E9233",
        "fault-box-hover": "#003E92",
        "getSecBg": "#F5FAFF",
        "letGoBg": "#FFFFFF26",
        "bookSecBg": "#F2F8FF",
        "bgTargetBox": "#FFFFFF1F",
        "hoverTargetBox": "#003E92B2",
        "white-150": "rgba(255, 255, 255, 0.15) "
      },
      backgroundImage: {
        'linear-grad': 'linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%)',
        "hoverGradient": "radial-gradient(circle at 74.2% 50.9%, rgb(14, 72, 222) 5.2%, rgb(3, 22, 65) 75.3%)",
        "whiteGradient": "linear-gradient(115deg, #ffffff, #ffe2fb)"
      },
      screens: {
        "sm": "320px",
        "xsm": "576px",
        "md": "768px",
        "lg": "992px",
        "xl": "1200px",
        "xxl": "1400px",
        "wide": "1440px",
      },
      padding: {
        "lg": "160px",
        "md": "80px",
        "sm": "60px",
        "lmd": "106px",
        "xl": "186px",
        "xxl": "202px",
        "footerPy": "96px",
      },
      gap: {
        "md": "17px"
      },
      height: {
        "lg": "524px",
        "sm": "72px",
      },
      boxShadow: {
        "sliderComp": "0px 2px 48px 0px #00000014",
        "scrollBoxShadow": "1px 0px 10px 3px #9800B0"
      }
    },
  },
  plugins: [],
}
