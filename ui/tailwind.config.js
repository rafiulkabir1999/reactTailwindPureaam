module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screen:{
        sm:'480px',
        md:'768px',
        lg:'976px',
        xl:'1440px'
      },
      width: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
      },
      boxShadow: {
        '3xl': '10px 0px 10px 0px rgba(0,0,0,0.03)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'button-product':'#103158'
      },
    },
   
  },
  plugins: [],

 
}