import { useTheme } from "@/components/theme-context";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<Button variant="outline" size="icon" onClick={toggleTheme}>
			<Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />
			<Moon className="h-[1.2rem] w-[1.2rem] hidden dark:block" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
