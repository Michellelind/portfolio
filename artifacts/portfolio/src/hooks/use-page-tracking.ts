import { useEffect } from "react";
import { useLocation } from "wouter";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

export function usePageTracking() {
  const [location] = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: location,
      page_title: document.title,
    });
  }, [location]);
}
