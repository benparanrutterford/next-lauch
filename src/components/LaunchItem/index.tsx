import "./style.css";
import falcon9 from './falcon9.png';

type LaunchItemProps = {
    launchName: string;
    launchDate: string;
    rocketName: string;
    launchProvider: string;
    launchSite: string;
};

export const LaunchItem = (props: LaunchItemProps) => {
    return <div className="launchitem">
        
        <div className="launch">
            <header className="launchname"> {props.launchName}  </header>
            <br />
            <text className="launchinfo">
                Rocket: {props.rocketName} <br /> <br /> 
                Company: {props.launchProvider} <br /> <br /> 
                Launch Site: {props.launchSite} <br /> <br /> 
                Launch Date: {props.launchDate} <br /> <br /> 
            </text>
        </div>
        
        <div className="rocketimage">
            <img src={falcon9} alt= "Falcon 9" className="falcon9"></img>
        </div>

    </div>
};
