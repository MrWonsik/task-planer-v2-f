import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { ThemeProvider as JssThemeProvider } from 'react-jss';
import Planner from './components/Planner';
import { defaultJssTheme, muiTheme } from './Theme';

function App() {

  return (
    <ThemeProvider theme={muiTheme}>
      <JssThemeProvider theme={defaultJssTheme}>
        <Planner />
      </JssThemeProvider>
    </ThemeProvider>
  );
}

export default App;
