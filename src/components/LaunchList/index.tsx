import { useEffect, useState } from "react";
import { LaunchItem } from "../LaunchItem";
import "./style.css";

export const LaunchList = () => {
    const [json, setJson] = useState([] as any);
        
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
        {json.map((launch: any) => 
            <LaunchItem
                launchName={launch.cleanLaunchName}
                launchDate={launch.cleanLaunchDate}
                rocketName={launch.cleanLaunchRocket}
                launchProvider={launch.cleanCompany}
                launchSite={launch.cleanLaunchSite}
                launchPad={launch.cleanLaunchPad}
            />
        )}
    </div>
};
