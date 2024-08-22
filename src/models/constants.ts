import { ApiStatus } from "./api-status.model";

export type Theme = "dark" | "light";

export const initialApiStatus: ApiStatus = {
  active: false,
  scrapingIntervalInMinutes: 0,
  uptime: {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
};
