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
    // eslint-disable-next-line react/react-in-jsx-scope
    <div>
      <h1>Planner</h1>
      <Planner />
    </div>
  );
}

export default App;
