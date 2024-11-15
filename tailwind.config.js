/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poiret': ["Poiret"],
        'aleo-italic': ["Aleo-Thin_Italic"]
      },
      order:{
        '0': '0',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        '25': '25',
      },
      transformOrigin:{
        'top-left': 'top left'
      },
      keyframes: {
        "panel-1": {

          '20%, 100%': { transform: 'rotateY(-90deg)', opacity: '0%'},
        },
        "panel-2":{
          '0%':{transform: ' rotateY(90deg)', opacity: '0%',},
          '20%': {transform: 'rotateY(0deg)', opacity: '100%'},
          '40%, 100%': {transform: 'rotateX(90deg) translateY(350px) translateZ(-350px)', opacity: '0%', visibility: "hidden"}
        },
        "panel-3":{
          '0%, 20%' : {transform: 'rotateX(-90deg) translateY(-350px) translateZ(-350px)',opacity: '0%', visibility: "hidden"},
          '40%': {transform: 'rotateX(0deg)', opacity: '100%'},
          '60%, 100%': {transform: 'rotateY(-90deg)', opacity: '0%'}
        },
        "panel-4":{
          "0%, 40%":{transform: 'rotateY(90deg)', opacity: '0%', visibility:'hidden'},
          "60%": {transform: 'rotateY(0deg)', opacity: '100%'},
          '80%, 100%': { transform: 'rotateX(90deg)', opacity: '0%'},
        },
        "panel-5":{
          '0%, 60%':{transform: 'rotateX(-90deg) translateY(-350px) translateZ(-350px)',opacity: '0%', visibility: "hidden"},
          '80%, 100%': {transform: 'rotateX(0deg)', opacity: '100%'},
        },
        "panel-6":{
          "0%, 80%" : {transform: "translateX(-50vw)", visibility: 'hidden'},
          "100%" : {}
        },

        "links":{
          "0%, 80%" : {transform: "translateX(50vw)", visibility: 'hidden'},
          "100%" : {}
        },
        "scroll-watcher" :{
          to: {
            scale: "1 1",
          }
        }
      },
      animation: {
        "panel-1": 'panel-1 linear',
        "panel-2": 'panel-2 linear',
        "panel-3" : 'panel-3 linear',
        "panel-4" : 'panel-4 linear',
        "panel-5" : 'panel-5 linear',
        "panel-6" : 'panel-6 linear',
        "links" : 'links linear',
        "scroll-watcher": "scroll-watcher linear"
      },
    }
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms"),
    require('@tailwindcss/forms')
  ],
}

