const apiBaseUrl = (() => (import.meta.env.DEV ? "http://192.168.1.2:3000" : "https://api-ks-web-scraper.fly.dev"))();

export default apiBaseUrl;
