import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollHash(): null {
  const location = useLocation();
  const hash: string = location.hash; // explicitly type hash as string

  useEffect(() => {
    if (hash) {
      const element = document.querySelector<HTMLElement>(hash);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return null;
}