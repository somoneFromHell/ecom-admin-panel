import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isApps, setIsApps] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);

    // Apps
    const [isEmail, setEmail] = useState(false);
    const [isSubEmail, setSubEmail] = useState(false);
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
    const [isTasks, setIsTasks] = useState(false);
    const [isCRM, setIsCRM] = useState(false);
    const [isCrypto, setIsCrypto] = useState(false);
    const [isInvoices, setIsInvoices] = useState(false);
    const [isSupportTickets, setIsSupportTickets] = useState(false);
    const [isNFTMarketplace, setIsNFTMarketplace] = useState(false);
    const [isJobs, setIsJobs] = useState(false);
    const [isJobList, setIsJobList] = useState(false);
    const [isCandidateList, setIsCandidateList] = useState(false);
    const [isUserMaster, setIsUserMaster] = useState(false);
    const [isSettings,setIsSettings] = useState(false)


    

    // Pages
    const [isProfile, setIsProfile] = useState(false);
    

    // Multi Level
   
    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }

        if (iscurrentState !== 'Apps') {
            setIsApps(false);
        }

        if(iscurrentState !== 'user-master'){
            setIsUserMaster(false)
        }
        


        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }



        if (iscurrentState === 'Todo') {
            history("/apps-todo");
            document.body.classList.add('twocolumn-panel');
        }
        if(isSettings === 'settings'){
            setIsSettings(false)
        }

    }, [
        history,
        iscurrentState,
        isDashboard,
        isUserMaster,
        isApps,
        isForms,
        isTables,
    ]);

    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },

        {
            id: "dashboard",
            label: "Dashboards",
            icon: "ri-dashboard-2-line",
            link: "/#",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
            subItems: [
                
                {
                    id: "ecommerce",
                    label: "Ecommerce",
                    link: "/dashboard",
                    parentId: "dashboard",
                }
            ],
        },
        {
            id: "user-master",
            label: "user-master",
            icon: "ri-user-2-line",
            link: "/#",
            stateVariables: isUserMaster,
            click: function (e) {
                e.preventDefault();
                setIsUserMaster(!isUserMaster);
                setIscurrentState('user-master');
                updateIconSidebar(e);
            },
            subItems: [
                
                {
                    id: "users",
                    label: "users",
                    link: "/user",
                    parentId: "user-master",
                },
                {
                    id: "roles",
                    label: "roles",
                    link: "/role",
                    parentId: "user-master",
                },
                {
                    id: "rights",
                    label: "rights",
                    link: "/rights",
                    parentId: "user-master",
                }
            ],
        },
        {
            id: "settings",
            label: "settings",
            icon: "ri-settings-2-line",
            link: "/#",
            stateVariables: isSettings,
            click: function (e) {
                e.preventDefault();
                setIsSettings(!isSettings);
                setIscurrentState('settings');
                updateIconSidebar(e);
            },
            subItems: [  
                {
                    id: "email-setting",
                    label: "email-setting",
                    link: "/email-setting",
                    parentId: "settings",
                }
            ],
        }


    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;