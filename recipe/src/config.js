const config = {
	isDev: process.env.NODE_ENV === 'development',
	isProd: process.env.NODE_ENV === 'production',
	NASAPIKey: process.env.REACT_APP_NASA_API_KEY,
};

export default config;
