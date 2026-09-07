"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "dark" | "light";
const ThemeCtx = createContext<{ theme: Theme }>({ theme: "dark" });
export function useTheme() { return useContext(ThemeCtx); }

const readSiteTheme = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

/**
 * The homepage used to own its own theme (its own toggle, its own
 * "evo-theme" key). The site-wide TopNav is now the only toggle, so this
 * follows the site theme instead and mirrors it onto data-evo-theme, which
 * every rule in evo.css and the film variant selection already key off.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const sync = () => setTheme(readSiteTheme());
    sync();
    // TopNav writes data-theme from its own mount effect, which may run
    // after this one — observing the attribute avoids racing it, and also
    // covers the toggle without depending on the themeChange event.
    const mo = new MutationObserver(sync);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    window.addEventListener("themeChange", sync);
    return () => {
      mo.disconnect();
      window.removeEventListener("themeChange", sync);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-evo-theme", theme);
    const w = window as unknown as { __evo?: Record<string, unknown> };
    w.__evo = { ...w.__evo, theme };
  }, [theme]);

  return <ThemeCtx.Provider value={{ theme }}>{children}</ThemeCtx.Provider>;
}
