import './App.css';
import { LaunchItem } from './components/LaunchItem';

function App() {
  return (
    <div className="App">
      <title className="App-title"> next-launch </title>
        <LaunchItem 
          launchName='GLHF' 
          launchDate='07/04/1999' 
          rocketName='Falcon 9' 
          launchProvider='Space X' 
          launchSite='Cape Canaveral' 
        />
    </div>
  );
}

export default App;
