import logo from './logo.svg';
import './App.css';
import { LaunchItem } from './components/LaunchItem';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LaunchItem 
          launchName='GLHF' 
          launchDate='' 
          rocketName='' 
          launchProvider='' 
          launchSite='' 
        />
      </header>
    </div>
  );
}

export default App;
