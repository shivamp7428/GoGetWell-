import React, { useEffect } from 'react';
import useThemeStore from '../store/themeStore'; // Custom store
import themes from '../themes'; // Themes configurations

const themeNames = {
  base: 'Default Theme',
  theme1: 'Organ Transplant',
  theme2: 'Cosmetic Surgery',
};

const Themes = () => {
  const { currentTheme, setTheme } = useThemeStore();

  // Apply theme globally when theme changes
  useEffect(() => {
    // Dynamically update the body class for the selected theme
    document.body.className = currentTheme;
    // Apply the body's background color based on the theme
    if (currentTheme) {
      const theme = themes[currentTheme];
      document.body.style.backgroundColor = theme.colors.primary;
    }
  }, [currentTheme]);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Choose a Theme</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(themes).map(([key, theme]) => (
          <div
            key={key}
            className="rounded-xl border shadow-md p-4 transition-all"
            style={{
              backgroundColor: currentTheme === key ? theme.colors.primary : theme.colors.background,
              color: theme.colors.text,
              borderColor: currentTheme === key ? theme.colors.primary : '#ccc',
              borderWidth: currentTheme === key ? '2px' : '1px',
            }}
          >
            <h2 className={theme.typography.heading} >
              {themeNames[key]}
            </h2>
            <p className={theme.typography.body}>
              A sample preview of {themeNames[key]} theme.
            </p>
            <button
              onClick={() => setTheme(key)}
              className="mt-4 px-4 py-2 rounded border text-white transition-all"
              style={{
                backgroundColor: currentTheme === key ? theme.colors.primary : theme.colors.secondary,
                color: theme.colors.text, // Update text color based on theme
                opacity: currentTheme === key ? 1 : 0.8,
              }}
            >
              {currentTheme === key ? 'Selected' : 'Apply Theme'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Themes;
