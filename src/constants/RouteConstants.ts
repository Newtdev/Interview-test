export const RoutePaths = {
	HOME: "/",
	SOLUTIONS: "/solutions",
	PRICING: "/pricing",
	PRICING_IN: "/pricing/1",
	COMPANY: "/company",
	RESOURCES: "/resources",
	BLOG: "/blog",
	AUTH: "/auth",
	CALCULATION: "/meeting/cost-calculator",
	FAQ: "/meeting/frequently/asked/questions",
	SIGN_IN: `${process.env.REACT_APP_AUTH_URL}/auth/sign-in`,
	SIGN_UP: `${process.env.REACT_APP_AUTH_URL}/auth/sign-up`,
};

export enum SubdomainEnum {
  ADMIN = "admin",
  APP = "app",
}
