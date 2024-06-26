import { useProps } from "@/contexts/PropsContext";

export default function SelectThemeButton({ theme }: { theme: string }) {
  const { selectedTheme, setSelectedTheme } = useProps();
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        name={theme}
        id={theme}
        value={theme}
        checked={selectedTheme === theme}
        onChange={(e) => {
          setSelectedTheme(e.target.value);
        }}
      />
      <label className="form-check-label" htmlFor="darkTheme">
        {theme} mode
      </label>
    </div>
  );
}
