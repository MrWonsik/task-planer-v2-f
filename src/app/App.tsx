import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { useState } from 'react';
import { ThemeProvider as JssThemeProvider } from 'react-jss';
import Planner from '../components/Planner';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { jssTheme, muiTheme } from './Theme';

function App() {

  const [theme, setTheme] = useState({ mui: muiTheme(), jss: jssTheme()});

  return (
    <ThemeProvider theme={theme.mui}>
      <JssThemeProvider theme={theme.jss}>
        <Planner />
        <ThemeSwitcher setTheme={setTheme} />
      </JssThemeProvider>
    </ThemeProvider>
  );
}

export default App;
