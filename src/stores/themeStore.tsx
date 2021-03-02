import _ from 'lodash';

export type TTheme = 'light' | 'dark';

export const createThemeStore = () => {
  return {
    theme: null as TTheme,
    updateTheme(theme: TTheme) {
      this.theme = theme;
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    toggleTheme() {
      if (!this.theme) {
        this.theme = 'dark';
      } else {
        if (this.theme === 'light') {
          this.theme = 'dark';
        } else {
          this.theme = 'light';
        }
      }

      this.updateTheme(this.theme);
    }
  };
}

export type TThemeStore = ReturnType<typeof createThemeStore>;
