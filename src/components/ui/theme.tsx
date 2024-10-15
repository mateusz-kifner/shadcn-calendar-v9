"use client";

import { Button } from "./button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useColorScheme, { colorSchemes } from "@/components/ui/useColorScheme";
import { useId } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import useTheme from "./useTheme";

function ThemeToggle() {
  const { setTheme } = useTheme();
  const { setColorScheme } = useColorScheme();
  const uuid = useId();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="dark:-rotate-90 size-5 rotate-0 scale-100 transition-all dark:scale-0" />
          <MoonIcon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {colorSchemes.map((color, index) => (
          <DropdownMenuItem
            key={`${uuid}:${index}`}
            onClick={() => setColorScheme?.(color)}
          >
            {color}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme?.("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme?.("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { ThemeToggle };
