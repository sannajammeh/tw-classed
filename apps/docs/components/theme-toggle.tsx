import useHydrated from "hooks/hydrated";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { IconButton } from "./ui";
const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const hydrated = useHydrated();

  return (
    <IconButton
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {hydrated ? (
        resolvedTheme === "dark" ? (
          <FiSun size="1.25rem" />
        ) : (
          <FiMoon size="1.25rem" />
        )
      ) : (
        <FiSun size="1.25rem" />
      )}
    </IconButton>
  );
};

export default ThemeToggle;
