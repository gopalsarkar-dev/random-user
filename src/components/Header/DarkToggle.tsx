"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";

import { MoonStar, Sun } from "lucide-react";

const DarkToggle = () => {
  const { theme, setTheme } = useTheme();

  const darkToggelFnc = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Button variant={"outline"} size={"icon"} onClick={darkToggelFnc}>
        <Sun className="rotate-0 scale-100 transition-all duration-300 ease-in-out dark:-rotate-90 dark:scale-0" />
        <MoonStar className="absolute rotate-90 scale-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100" />
      </Button>
    </>
  );
};

export default DarkToggle;
