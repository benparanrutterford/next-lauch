import './App.css';
import { LaunchList } from './components/LaunchList';

function App() {
  return (
    <div className="App">
      <title className="App-title"> next-launch </title>
      <LaunchList></LaunchList>
      <footer className="App-footer"> Data by RocketLaunch.Live </footer>
    </div>
  );
}

export default App;
