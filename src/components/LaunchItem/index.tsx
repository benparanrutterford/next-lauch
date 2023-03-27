import "./style.css";

type LaunchItemProps = {
    launchName: string;
    launchDate: string;
    rocketName: string;
    launchProvider: string;
    launchSite: string;
    launchPad: string;
};

export const LaunchItem = (props: LaunchItemProps) => {
    const launchDate = new Date(props.launchDate).toLocaleString();

    return <div className="launchitem">
        
        <div className="launch">
            <header className="launchname"> {props.launchName}  </header>
            <br />
            <text className="launchinfo">
                Rocket: {props.rocketName} <br /> <br /> 
                Company: {props.launchProvider} <br /> <br /> 
                Launch Site: {props.launchPad}  {props.launchSite} <br /> <br /> 
                Launch Date: {launchDate} <br /> <br /> 
            </text>
        </div>
        
        <div className="rocketimage">
            <p>
            N/A
            </p>
        </div>
    </div>
};
