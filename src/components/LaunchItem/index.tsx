import "./style.css";

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
            <p>
            N/A
            </p>
        </div>
    </div>
};
