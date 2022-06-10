module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px"
        // => @media (min-width: 1536px) { ... }
      },
      animation: {
        // For error message icons
        error: "pulse 0.4s 4",
        // For the shopping menu icon
        halfspin: "halfspin 0.5s 1",
        otherhalfspin: "otherhalfspin 0.5s 1",

        // Used for profile and shopping bag icons
        slowbounce: "bounce 1.2s infinite",
        // Used to show the menu fade in
        fadein: "fadein 1 cubic-bezier(0,-0.01,1,1) 1",
        shoppingBagfadein: "fadein 1s cubic-bezier(0,-0.01,1,1) 1",
        movetitle: "movetitle 1s 1",
        moveBox: "moveBox 1s 1",
        movedescription: "movedescription 2s 1",
        productCardFadeIn: "fadein 1s cubic-bezier(.05,.99,1,-0.23) 1",
        bottomButton: "bottomButton 2s 1",
        changeGradient: "changeGradient 3s 1",
        border: "border 3s 1",
        addToBag: "border 0.4s 2",
        alreadyDone: "alreadyDone 0.6s 2"
      },
      keyframes: {
        bottomButton: {
          "0%, 25%": {
            backgroundImage:
              "linear-gradient(to bottom, rgba(255, 99, 71, 0),rgba(255, 99, 71, 0),rgba(255, 99, 71, 0))"
          },
          "26%, 50%": {
            backgroundImage:
              "linear-gradient(to bottom, white,rgba(255, 99, 71, 0),rgba(255, 99, 71, 0))"
          },
          "51%, 75%": {
            backgroundImage:
              "linear-gradient(to bottom, white,white, rgba(255, 99, 71, 0))"
          },
          "76%, 100%": {
            backgroundImage: "linear-gradient(to bottom, white,white, white)"
          }
        },
        halfspin: {
          "0%, 20%": { transform: "rotate(180deg)" },
          "21%, 40%": { transform: "rotate(135deg)" },
          "40%, 60%": { transform: "rotate(90deg)" },
          "61%, 80%": { transform: "rotate(45deg)" },
          "81%, 100%": { transform: "rotate(0deg)" }
        },
        otherhalfspin: {
          "0%, 20%": { transform: "rotate(180deg)" },
          "21%, 40%": { transform: "rotate(225deg)" },
          "40%, 60%": { transform: "rotate(270deg)" },
          "61%, 80%": { transform: "rotate(315deg)" },
          "81%, 100%": { transform: "rotate(360deg)" }
        },
        fadein: {
          "0%": { opacity: 0 },
          "1%, 10%": { opacity: 0.1 },
          "11%, 20%": { opacity: 0.2 },
          "21%, 30%": { opacity: 0.3 },
          "31%, 40%": { opacity: 0.4 },
          "41%, 50%": { opacity: 0.5 },
          "51%, 60%": { opacity: 0.6 },
          "61%, 70%": { opacity: 0.7 },
          "71%, 80%": { opacity: 0.8 },
          "81%, 90%": { opacity: 0.9 },
          "91%, 100%": { opacity: 1 }
        },

        movetitle: {
          "0%": { paddingTop: 0 },
          "1%, 10%": { paddingTop: "0.5rem", paddingbottom: "0.25rem" },
          "11%, 20%": { paddingTop: "1rem", paddingbottom: "0.5rem" },
          "21%, 30%": { paddingTop: "1.5rem", paddingbottom: "0.75rem" },
          "31%, 40%": { paddingTop: "2rem", paddingbottom: "1rem" },
          "41%, 50%": { paddingTop: "2.5rem", paddingbottom: "1.25rem" },
          "51%, 60%": { paddingTop: "3rem", paddingbottom: "1.5rem" },
          "61%, 70%": { paddingTop: "3.5rem", paddingbottom: "1.75rem" },
          "71%, 80%": { paddingTop: "4rem", paddingbottom: "2rem" },
          "81%, 90%": { paddingTop: "4.5rem", paddingbottom: "2.25rem" },
          "91%, 100%": { paddingTop: "5rem", paddingbottom: "2.5rem" }
        },

        moveBox: {
          "0%": { marginTop: 0, paddingBottom: 0 },
          "1%, 10%": { marginTop: "0.2rem", paddingBottom: "0.2rem" },
          "11%, 20%": { marginTop: "0.4rem", paddingBottom: "0.4rem" },
          "21%, 30%": { marginTop: "0.6rem", paddingBottom: "0.6rem" },
          "31%, 40%": { marginTop: "0.8rem", paddingBottom: "0.8rem" },
          "41%, 50%": { marginTop: "1rem", paddingBottom: "1rem" },
          "51%, 60%": { marginTop: "1.2rem", paddingBottom: "1.2rem" },
          "61%, 70%": { marginTop: "1.4rem", paddingBottom: "1.4rem" },
          "71%, 80%": { marginTop: "1.6rem", paddingBottom: "1.6rem" },
          "81%, 90%": { marginTop: "1.8rem", paddingBottom: "1.8rem" },
          "91%, 100%": { marginTop: "2rem", paddingBottom: "2rem" }
        },
        border: {
          "0%, 12.5%": {
            borderStyle: "dotted none none none;"
          },
          "12.5%, 25%": {
            borderStyle: "solid none none none;"
          },
          "25%, 37.5%": {
            borderStyle: "solid dotted none none;"
          },
          "37.5%, 50%": {
            borderStyle: "solid solid none none;"
          },
          "50%, 62.5%": {
            borderStyle: "solid solid dotted none;"
          },
          "62.5%, 75%": {
            borderStyle: "solid solid solid none;"
          },
          "75%, 87.5%": {
            borderStyle: "solid solid solid dotted;"
          },
          "87.5%, 90%": {
            borderStyle: "solid solid solid solid;"
          },
          "90%, 94%": {
            borderStyle: "solid solid solid solid;"
          },
          "94%, 99%": {
            borderStyle: "solid solid solid solid;"
          },
          "99%, 100%": {
            borderStyle: "solid solid solid solid;"
          }
        },
        alreadyDone: {
          "0%, 12.5%": {
            backgroundImage:
              "linear-gradient(to bottom, rgba(153, 27, 27) , white, white ,white,)"
          },
          "12.5%, 25%": {
            backgroundImage:
              "linear-gradient(to bottom, rgba(153, 27, 27) , rgba(153, 27, 27), white ,white, white )"
          },
          "25%, 37.5%": {
            backgroundImage:
              "linear-gradient(to bottom, rgba(153, 27, 27) , rgba(153, 27, 27), rgba(153, 27, 27) ,white, white ,white, white, white)"
          },
          "37.5%, 50%": {
            backgroundImage:
              "linear-gradient(to bottom, rgba(153, 27, 27) , rgba(153, 27, 27), rgba(153, 27, 27) ,rgba(153, 27, 27), white)"
          },
          "50%, 62.5%": {
            backgroundImage:
              "linear-gradient(to bottom, rgba(153, 27, 27) , rgba(153, 27, 27), rgba(153, 27, 27) ,rgba(153, 27, 27), rgba(153, 27, 27) )"
          },
          "62.5%, 75%": {
            backgroundImage:
              "linear-gradient(to bottom, white , rgba(153, 27, 27), rgba(153, 27, 27) ,rgba(153, 27, 27), rgba(153, 27, 27))"
          },
          "75%, 87.5%": {
            backgroundImage:
              "linear-gradient(to bottom, white , white, rgba(153, 27, 27) ,rgba(153, 27, 27), rgba(153, 27, 27))"
          },
          "87.5%, 90%": {
            backgroundImage:
              "linear-gradient(to bottom, white , white, white ,rgba(153, 27, 27), rgba(153, 27, 27))"
          },
          "90%, 98%": {
            backgroundImage:
              "linear-gradient(to bottom, white , white, white , white , rgba(153, 27, 27))"
          },

          "99%, 100%": {
            backgroundImage:
              "linear-gradient(to bottom, white , white, white, white,white, white)"
          }
        },
        movedescription: {
          "0%, 50%": { display: "hidden" },

          "51%, 60%": { paddingTop: "1rem" },
          "61%, 70%": { paddingTop: "2rem", paddingbottom: "1rem" },
          "71%, 80%": { paddingTop: "3rem", paddingbottom: "1.5rem" },
          "81%, 90%": { paddingTop: "4rem", paddingbottom: "2rem" },
          "91%, 100%": { paddingTop: "5rem", paddingbottom: "2.5rem" }
        },
        changeGradient: {
          "1%, 20%": {
            backgroundImage: "linear-gradient(to right, #f472b6 , white, white)"
          },
          "21%, 40%": {
            backgroundImage:
              "linear-gradient(to right, #f472b6 , #6ee7b7, white)"
          },
          "41%, 60%": {
            backgroundImage:
              "linear-gradient(to right, #f472b6 , #6ee7b7, #60a5fa)"
          },
          "61%, 80%": {
            backgroundImage:
              "linear-gradient(to right, white, #6ee7b7, #60a5fa)"
          },

          "81%, 99%": {
            backgroundImage: "linear-gradient(to right, white , white, #60a5fa)"
          },
          "100%": {
            backgroundColor: "white"
          }
        }
      }
    }
  },
  variants: {
    animation: ["hover", "focus", "group-hover", "group-focus"],
    gradientColorStops: ["group-hover", "hover", "focus"],
    button: ["focus"],
    fontSize: ["hover", "group-hover"],
    visibility: ["hover", "focus", "group-hover"]
  },
  plugins: []
};
