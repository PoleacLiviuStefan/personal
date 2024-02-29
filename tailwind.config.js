module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'oldStandard': 'Old Standard TT, serif',
        'roboto': 'Roboto, sans-serif',
        'robotoMono':"Roboto Mono, monospace",
        'montSerrat':"Montserrat, sans-serif",
        'libre':"Libre Baskerville, serif",
        'garamond': "EB Garamond, serif",
        'fastHand': "Fasthand, cursive",
        'cursive':"Cookie, cursive",
        'dafoe': "Mr Dafoe, cursive",
        'norican' : "Norican, cursive",
        'oswald' : "Oswald, sans-serif",
        'merriweather' : "Merriweather Sans, sans-serif",
        'jakarta': "Plus Jakarta Sans, sans-serif",
        'kanit' : "Kanit, sans-serif"
      },
      backgroundImage:{
        'underLine': "url('/public/Images/underLine.svg')",
        'sol':"url('/public/Images/SOL.svg')",
        'sal':"url('/public/Images/SAL.svg')",
      }
    },
    keyframes:{
      clickAppear: {
        '0%' : {
          opacity:"0%",

        },

        '20%':{
          opacity:"0%"
        },
        '32%':{
          opacity:"100%"
        },
        '40%':{
          opacity:"0%"
        },
        '68%':{
          opacity:"0%"
        },
        '70%' : {
          opacity:"100%",
        },
        '78%':{
          opacity:"0%"
        },
        '83%' : {
          opacity:"0%",
        },
        '85%' : {
          opacity:"100%",
        },
        '93%' : {
          opacity: '0'
        }
      },
      infiniteSlider:{
        '0%':{
          marginLeft:"0"
        },
        '100%':{
          marginLeft:"-101%"
        }
      },
      appear:{
        '0%':{
          opacity:"0"
        },
        '100%':{
          opacity:"100%"
        }
      },
      disappear:{
        '0%':{
          opacity:"100%"
        },
        '100%':{
          opacity:"0"
        }
      },
      appearDissappear:{
        '0%':{
          opacity:"0"
        },
        '50%':{
          opacity:"100%"
        },
        '100%':{
          opacity:"0"
        }
      },
      showAnswer:{
        '0%':{
          height:"4rem"
        },
        '100%':{
          height:"14rem"
        }
      },
      showAnswerReverse:{
        '0%':{
          height:"15rem"
        },
        '100%':{
          height:"4rem"
        }
      },
      showAnswerMobile:{
        '0%':{
          height:"3.3rem"
        },
        '100%':{
          height:"13rem"
        }
      },
      showAnswerMobileReverse:{
        '0%':{
          height:"13rem"
        },
        '100%':{
          height:"3.3rem"
        }
      },
      rotateArrow:{
        '0%':{
          rotate:"0deg"
        },
        '100%':{
          rotate:"90deg"
        }
      },
      rotateArrowReverse:{
        '0%':{
          rotate:"90deg"
        },
        '100%':{
          rotate:"0deg"
        }
      },
      selectOption:{
        '0%':{
          backgroundColor:"#FFFFFFF",
          color:"black"
        },
        '100%':{
          backgroundColor:"#323B4B",
          color:"white"
        }
      },
      selectOptionReverse:{
        '0%':{
          backgroundColor:"#323B4B",
          color:"white"
        },
        '100%':{
          backgroundColor:"#FFFFFF",
          color:"black"
        }
      },
        centerOption:{
        '0%':{
          backgroundColor:"#323B4B",
          
        },
        '100%':{
          backgroundColor:"#FFFFFF",
          
        }
      },
      centerOptionReverse:{
        '0%':{
          backgroundColor:"#FFFFFF",
          
        },
        '100%':{
          backgroundColor:"#323B4B",
         
        }
      },
      expand:{
        '0%':{
          scale:"1"
          
        },
        '100%':{
          scale:"1.2"
         
        }
      },
      expandReverse:{
        '0%':{
          scale:"1.2"
          
        },
        '100%':{
          scale:"1"
         
        }
      },
      transformColor:{
        '0%':{
          backgroundColor:"white"
          
        },
        '100%':{
          backgroundColor:"black"
         
        }
      },
      logoLoadingAnim:{
        '0%':{
          scale:"1.2"
          
        },
      
        '100%':{
          scale:"1"
         
        }
      },
      slideNavbar:{
        '0%':{
          top:"-10rem"
          
        },
    
        '100%':{
          top:"0"
         
        }
      },
      slideUnderLine:{
        '0%':{
          width:"0"
          
        },
    
        '100%':{
          width:"100%"
         
        }
      },
      unselectedBtn:{
        '0%':{
          color:"black"
        },
        '100%':{
          color:"#D1D5DB"
        }
      },
      unselectedBtnReverse:{
        '0%':{
          color:"#D1D5DB"
        },
        '100%':{
          color:"black"
        }
      },
      expandMenu:{
        '0%':{
          height:"0rem",
        },
        '100%':{
          height:"15rem"
        }
      },
      expandMenuReverse:{
        '0%':{
          height:"15rem"
        },
        '100%':{
          height:"0rem"
        }
      },
      animateLastTwo:{
        '0%':{
          marginTop:"-5rem"
        },
        '100%':{
          marginTop:"-1rem"
        }
      },
      animateFirstTow:{
        '0%':{
          marginBottom:"-5rem"
        },
        '100%':{
          marginBottom:"-1rem"
        }
      },
      animateBackgroundWhite:{
        '0%':{
          backgroundColor:"#1A1A1A"
        },
        '100%':{
          backgroundColor:"#F2F2F7"
        }
      },
      animateBackgroundBlack:{
        '0%':{
          backgroundColor:"#F2F2F7"
        },
        '100%':{
          backgroundColor:"#1A1A1A"
        }
      },
      contactBtn:{
        '0%':{
          backgroundColor:"linear-gradient(90deg, rgba(107,52,255,1) 0%, rgba(178,52,255,1) 100%)"
        },
        '100%':{
          backgroundColor:"linear-gradient(90deg, rgba(107,52,255,1) 0%, rgba(178,52,255,1) 17%)"
        }
      },
      phoneAnim:{
        '0%':{
          color:"#6C35FF"
        },
        '100%':{
          color:"8d63ff"
        }
      },
      hoverSocialIcon:{
        '0%':{
          marginTop:"0"
        },
        '100%':{
          marginTop:"-.5rem"
        }
      },
      hoverSocialIconReverse:{
        '0%':{
          marginTop:"-.5rem"
        },
        '100%':{
          marginTop:"0"
        }
      },
      topLine:{
        '0%':{
          top:"0.3rem",
          rotate:"0deg"
        },
        '100%':{
          top:"0.6rem",
          rotate:"45deg"
        }
      },
      bottomLine:{
        '0%':{
          top:"0.9rem",
          rotate:"0deg"
        },
        '100%':{
          top:"0.35rem",
          rotate:"-45deg"
        }
      },
      topLineReverse:{
        '0%':{
      
          top:"0.6rem",
          rotate:"45deg"
        },
        '100%':{
          top:"0.3rem",
          rotate:"0deg"
        }
      },
      bottomLineReverse:{
        '0%':{
        
          top:"0.35rem",
          rotate:"-45deg"
        },
        '100%':{
          top:"0.9rem",
          rotate:"0deg"
        }
      },
      hoverContactBtn:{
        '0%':{
        
          scale:"1"
        },
        '100%':{
          boxShadow:"4px 4px 50px -3px rgba(107,52,255,0.45) ",
          scale:"1.1"
        }
      },
      reverseHoverContactBtn:{
        '0%':{
          boxShadow:"4px 4px 50px -3px rgba(107,52,255,0.45) ",
          scale:"1.1"
          
        },
        '100%':{
          scale:"1"
        }
      },
      StepCrossed:{
        '0%':{
         scale:"1"
          
        },
        '100%':{
          scale:"1.1"
        }
      },
      StepCrossedReverse:{
        '0%':{
         scale:"1.1"
          
        },
        '100%':{
          scale:"1"
        }
      },
      StepCrossedReverse:{
        '0%':{
         scale:"1.1"
          
        },
        '100%':{
          scale:"1"
        }
      },
      mouseTouchDown:{
        '0%':{
         top:"0",
        opacity:"100%"
        },
        '100%':{
          top:"2.5rem",
          opacity:"30%"
        }
      },
      TouchUp:{
        '0%':{
         top:"2.5rem",
        opacity:"100%"
        },
        '100%':{
          top:"0",
          opacity:"30%"
        }
      },
       clickIconsTutorial: {
        '0%' : {
          opacity:"0%",
          top:"0",
          right:"0",

        },
        '10%':{
          opacity:"100%",
          right:"0",
          top:"0"
        },
        '30%':{
          right:'13rem',
          opacity:"100%"
        },
        '40%':{
          right:"13rem",
          opacity:"100%"
        },
        '45%':{
          opacity:"0%"
        },
        '50%' : {
          opacity:"0%",
          top:"0",
          right:"0",

        },
        '60%':{
          opacity:"100%",
          right:"0",
          top:"0"
        },
        '80%':{
          right:'10rem'
        },
        '90%':{
          right:"10rem"
        },
        '95%':{
          opacity:"0%"
        },
        '100%':{
          right:'0'
        }

      },

    }
  },
  plugins: [],
}