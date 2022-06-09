module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        wHero: "500px",
        wHeroMobile: "261px",
        wText:'590px',
        heroPWidth: '55%',
        heroMobileWidth: '520px',
        75:"90%"
      },

      height: {
        hHero: "500px",
        hHeroMobile: "261px",
      },
      backgroundColor: {
        bgGray: "#E5E5E5",
      },
      color: {
        fontColor1: "#828282",
       
      },
      fontSize: {
        heroMobileFont:['24px',{lineHeight:''}],
        heroXLFont:['50px',{lineHeight:'78px'}],
        sectionFont:['36px',{lineHeight:''}],
        heroPMobileFont:['14px', {lineHeight:''}],
        heroPXLFont:['18px', {lineHeight:'27px'}],
        homeProfileFont:['28px', {lineHeight:'33.31px'}]
      },

  
    },
  },
  plugins: [],
};
