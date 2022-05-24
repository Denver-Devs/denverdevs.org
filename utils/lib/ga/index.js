export const pageview = (url) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

export const event = ({ action, params }) => {
  if (process.env.NODE_ENV === "development") {
    params.debug_mode = true;
  }
  window.gtag("event", action, params);
};
