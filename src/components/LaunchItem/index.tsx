import "./style.css";

type LaunchItemProps = {
    launchName: string;
    launchDate: string;
    rocketName: string;
    launchProvider: string;
    launchSite: string;
};

export const LaunchItem = (props: LaunchItemProps) => {
    return <div className="hello">
        Hello, World!
        {props.launchName}
    </div>
};
