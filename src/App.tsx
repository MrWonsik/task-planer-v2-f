import { createUseStyles } from 'react-jss';
import Planner from './components/Planner';

const useStyles = createUseStyles({
  '@global': {
    body: {
      backgroundColor: "lightgray"
    },
  }
})


function App() {
  useStyles()

  return (
    <Planner />
  );
}

export default App;
