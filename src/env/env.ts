const isDev = () => import.meta.env.DEV;

export const apiBaseUrl = isDev() ? "http://192.168.1.2:3000" : "https://api-ks-web-scraper.fly.dev";
