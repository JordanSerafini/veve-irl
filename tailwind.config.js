
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      borderWidth: {
        '0.5': '0.5px',
        '1': '1px',
      },

      backgroundColor: ['active'],

      width: {
        '0.5/10': '5%',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '4.5/10': '45%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
        '10/10': '100%',
      },
      height: {
        '0.5/10': '5%',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '4.5/10': '45%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
        '10/10': '100%',
      },
      fontSize: {
        'xxs': '.5rem',
        'xxxs': '.4rem',
      },
      colors: {
        'noir': '#1E0F1C',
        'rouge': '#A7001E',
        'main': '#E2E9C0',
        'vert': '#7AA95C',
        'marron': '#955149',
        'text': '#050315',
        'bgMain': '#FBFBFE',
        "secondary-light": "#eeedff",
        "primary-new": "#a9a8c1",
        "secondary-light-2": "#ebeaff",
        "secondary-dark": "#c7c6e5",
        "bg-lightgray": "#EAEEEF",
        "bg-gray": "#9EABB3",
        "bg-1": '#7A8990',
        "bg-2": '#E6F0F7',
        "bg-3": '#F2F7FA',
        "green": "#2a9134",
        "gray-1": "#f2f2f2",
        "gray": "#e7e7e7",
        "blue-2": '#7395AE',
        "blue-2-light":'#E4F2F9',
        "blue-1": '#557A95',
        'grayblue':"#2d3748",
        'greyBG': '#F0F0F0',
        'greyBG-2': '#D3D3D3 ',
        'green-4': '#9fe855',
        'green-5': '#00561b',
      },

      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2F27CE",

          "secondary": "#DEDCFF",

          "accent": "#433BFF",
          
          "neutral": "#028a0f", // Green

          "base-100": "#DEDCFF",

          "info": "#ca5310", //orange

          "success": "#00ff00",

          "warning": "#bf0603",

          "error": "#ff0000",
        },
      },
    ],
  },
  
  // eslint-disable-next-line no-undef
  plugins: [],
}
