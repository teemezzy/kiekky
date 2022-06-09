module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        wHero: "500px",
        wHeroMobile: "200px",
      },

      height: {
        hHero: "500px",
        hHeroMobile: "200px",
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
        heroPMobileFont:['14px', {lineHeight:''}],
        heroPXLFont:['18px', {lineHeight:'27px'}],
      }
    },
  },
  plugins: [],
};
