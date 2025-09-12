import { ALLOWED_ORIGINS } from "./constants.js";

export const corsOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  origin: function (origin: any, callback: any) {
    if (ALLOWED_ORIGINS.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
