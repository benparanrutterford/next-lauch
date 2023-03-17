import { useEffect, useState } from "react";
import { LaunchItem } from "../LaunchItem";
import "./style.css";

export const LaunchList = () => {
    const [json, setJson] = useState({} as any);
        
        useEffect(() => {
        
        const fetchJson = async () => {
            const response = await fetch('https://fdo.rocketlaunch.live/json/launches/next/5');

            const fetchedJson = await response.json();
            
            const cleanJson = fetchedJson.result.map((orig: any) => {
                return {
                    cleanLaunchName: orig.name,
                    cleanLaunchRocket: orig.vehicle.name,
                    cleanCompany: orig.provider.name,
                    cleanLaunchPad: orig.pad.name,
                    cleanLaunchSite: orig.pad.location.name,
                    cleanLaunchDate: orig.t0,
                };
            });   
                   
        setJson(cleanJson);

        }

        fetchJson();

    }, []);

    return <div className= "launches">
        <div className= "launch1">
            <LaunchItem 
            launchName= {json[0]?.cleanLaunchName}
            launchDate= {json[0]?.cleanLaunchDate}
            rocketName= {json[0]?.cleanLaunchRocket}
            launchProvider= {json[0]?.cleanCompany}
            launchSite= {json[0]?.cleanLaunchSite}
            />
        </div>
        <div className="launch2">
            <LaunchItem
                launchName={json[1]?.cleanLaunchName}
                launchDate={json[1]?.cleanLaunchDate}
                rocketName={json[1]?.cleanLaunchRocket}
                launchProvider={json[1]?.cleanCompany}
                launchSite={json[1]?.cleanLaunchSite}
            />
        </div>
        <div className="launch3">
            <LaunchItem
                launchName={json[2]?.cleanLaunchName}
                launchDate={json[2]?.cleanLaunchDate}
                rocketName={json[2]?.cleanLaunchRocket}
                launchProvider={json[2]?.cleanCompany}
                launchSite={json[2]?.cleanLaunchSite}
            />
        </div>
        <div className="launch4">
            <LaunchItem
                launchName={json[3]?.cleanLaunchName}
                launchDate={json[3]?.cleanLaunchDate}
                rocketName={json[3]?.cleanLaunchRocket}
                launchProvider={json[3]?.cleanCompany}
                launchSite={json[3]?.cleanLaunchSite}
            />
        </div>
        <div className="launch5">
            <LaunchItem
                launchName={json[4]?.cleanLaunchName}
                launchDate={json[4]?.cleanLaunchDate}
                rocketName={json[4]?.cleanLaunchRocket}
                launchProvider={json[4]?.cleanCompany}
                launchSite={json[4]?.cleanLaunchSite}
            />
        </div>
    </div>
};
