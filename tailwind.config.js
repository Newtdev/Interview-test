module.exports = {
	content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
	theme: {
		extend: {
			backgroundImage: {
				AuthCenterBg: "url('/src/assets/images/BackgoundImage.png')",
				HeroBg: "url('/src/assets/images/HeroBg.png')",
				DashboardBg: "url('/src/assets/images/BackgroundImage.png')",
				shinnyImage: "url('/src/assets/images/FooterBackground.png')",
				footerImage: "url('/src/assets/images/FooterImage2.png')",
				mobileBackground: "url('/src/assets/images/MobileBackground.png')",
				transparentImage: "url('/src/assets/images/SectionTwoImage.png')",
			},
			// 						background: linear-gradient(0deg, #D8D8D8, #D8D8D8),
			// linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75));
			colors: {
				primary: {
					dark: "#031074",
					DEFAULT: "#E16E4E",
					light: "#FFFAFF",
					lighter: "#E5E7F4",
					lightest: "#E6F2FF",
					footer: "#1D3484",
				},
				secondary: {
					dark: "#FF3800",
					DEFAULT: "#F8931F",
					light: "#fab362",
				},
				deepblack: {
					DEFAULT: "#00041D",
				},
				gray: {
					dark: "#6E7079",
					transparent: "#D8D8D8",

					DEFAULT: "#596067",
				},
			},

			// fontFamily: {
			// 	sans: ["Source sans", "sans-serif"],
			// },
		},
	},
	variants: {
		display: ["group-hover"],
	},
	plugins: [],
};
