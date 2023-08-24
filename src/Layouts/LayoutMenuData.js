import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isApps, setIsApps] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);

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


    

    // Pages
    const [isProfile, setIsProfile] = useState(false);
    

    // Charts
    const [isApex, setIsApex] = useState(false);

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
        
        if (iscurrentState !== 'Pages') {
            setIsPages(false);
        }
       

        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (iscurrentState !== 'Charts') {
            setIsCharts(false);
        }


        if (iscurrentState === 'Todo') {
            history("/apps-todo");
            document.body.classList.add('twocolumn-panel');
        }

    }, [
        history,
        iscurrentState,
        isDashboard,
        isApps,
        isPages,
        isForms,
        isTables,
        isCharts,
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
            id: "apps",
            label: "Apps",
            icon: "ri-apps-2-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsApps(!isApps);
                setIscurrentState('Apps');
                updateIconSidebar(e);
            },
            stateVariables: isApps,
            subItems: [
                {
                    id: "calendar",
                    label: "Calendar",
                    link: "/apps-calendar",
                    parentId: "apps",
                },
                {
                    id: "chat",
                    label: "Chat",
                    link: "/apps-chat",
                    parentId: "apps",
                },
                {
                    id: "mailbox",
                    label: "Email",
                    link: "/#",
                    parentId: "apps",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setEmail(!isEmail);
                    },
                    stateVariables: isEmail,
                    childItems: [
                        {
                            id: 1,
                            label: "Mailbox",
                            link: "/apps-mailbox",
                            parentId: "apps"
                        },
                        {
                            id: 2,
                            label: "Email Templates",
                            link: "/#",
                            parentId: "apps",
                            isChildItem: true,
                            stateVariables: isSubEmail,
                            click: function (e) {
                                e.preventDefault();
                                setSubEmail(!isSubEmail);
                            },
                            childItems: [
                                { id: 2, label: "Basic Action", link: "/apps-email-basic", parentId: "apps" },
                                { id: 3, label: "Ecommerce Action", link: "/apps-email-ecommerce", parentId: "apps" },
                            ],
                        },
                    ]
                },
                {
                    id: "appsecommerce",
                    label: "Ecommerce",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsEcommerce(!isEcommerce);
                    },
                    parentId: "apps",
                    stateVariables: isEcommerce,
                    childItems: [
                        { id: 1, label: "Products", link: "/apps-ecommerce-products", parentId: "apps" },
                        { id: 2, label: "Product Details", link: "/apps-ecommerce-product-details", parentId: "apps" },
                        { id: 3, label: "Create Product", link: "/apps-ecommerce-add-product", parentId: "apps" },
                        { id: 4, label: "Orders", link: "/apps-ecommerce-orders", parentId: "apps" },
                        { id: 5, label: "Order Details", link: "/apps-ecommerce-order-details", parentId: "apps" },
                        { id: 6, label: "Customers", link: "/apps-ecommerce-customers", parentId: "apps" },
                        { id: 7, label: "Shopping Cart", link: "/apps-ecommerce-cart", parentId: "apps" },
                        { id: 8, label: "Checkout", link: "/apps-ecommerce-checkout", parentId: "apps" },
                        { id: 9, label: "Sellers", link: "/apps-ecommerce-sellers", parentId: "apps" },
                        { id: 10, label: "Seller Details", link: "/apps-ecommerce-seller-details", parentId: "apps" },
                    ]
                },
                {
                    id: "appsprojects",
                    label: "Projects",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsProjects(!isProjects);
                    },
                    parentId: "apps",
                    stateVariables: isProjects,
                    childItems: [
                        { id: 1, label: "List", link: "/apps-projects-list", parentId: "apps", },
                        { id: 2, label: "Overview", link: "/apps-projects-overview", parentId: "apps", },
                        { id: 3, label: "Create Project", link: "/apps-projects-create", parentId: "apps", },
                    ]
                },
                {
                    id: "tasks",
                    label: "Tasks",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsTasks(!isTasks);
                    },
                    parentId: "apps",
                    stateVariables: isTasks,
                    childItems: [
                        { id: 1, label: "List View", link: "/apps-tasks-list-view", parentId: "apps", },
                        { id: 2, label: "Task Details", link: "/apps-tasks-details", parentId: "apps", },
                    ]
                },
                {
                    id: "appscrm",
                    label: "CRM",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsCRM(!isCRM);
                    },
                    parentId: "apps",
                    stateVariables: isCRM,
                    childItems: [
                        { id: 1, label: "Contacts", link: "/apps-crm-contacts" },
                        { id: 2, label: "Companies", link: "/apps-crm-companies" },
                        { id: 3, label: "Deals", link: "/apps-crm-deals" },
                        { id: 4, label: "Leads", link: "/apps-crm-leads" },
                    ]
                },
                {
                    id: "appscrypto",
                    label: "Crypto",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsCrypto(!isCrypto);
                    },
                    parentId: "apps",
                    stateVariables: isCrypto,
                    childItems: [
                        { id: 1, label: "Transactions", link: "/apps-crypto-transactions" },
                        { id: 2, label: "Buy & Sell", link: "/apps-crypto-buy-sell" },
                        { id: 3, label: "Orders", link: "/apps-crypto-orders" },
                        { id: 4, label: "My Wallet", link: "/apps-crypto-wallet" },
                        { id: 5, label: "ICO List", link: "/apps-crypto-ico" },
                        { id: 6, label: "KYC Application", link: "/apps-crypto-kyc" },
                    ]
                },
                {
                    id: "invoices",
                    label: "Invoices",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsInvoices(!isInvoices);
                    },
                    parentId: "apps",
                    stateVariables: isInvoices,
                    childItems: [
                        { id: 1, label: "List View", link: "/apps-invoices-list" },
                        { id: 2, label: "Details", link: "/apps-invoices-details" },
                        { id: 3, label: "Create Invoice", link: "/apps-invoices-create" },
                    ]
                },
                {
                    id: "supportTickets",
                    label: "Support Tickets",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsSupportTickets(!isSupportTickets);
                    },
                    parentId: "apps",
                    stateVariables: isSupportTickets,
                    childItems: [
                        { id: 1, label: "List View", link: "/apps-tickets-list" },
                        { id: 2, label: "Ticket Details", link: "/apps-tickets-details" },
                    ]
                },
                {
                    id: "NFTMarketplace",
                    label: "NFT Marketplace",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsNFTMarketplace(!isNFTMarketplace);
                    },
                    parentId: "apps",
                    stateVariables: isNFTMarketplace,
                    childItems: [
                        { id: 1, label: "Marketplace", link: "/apps-nft-marketplace" },
                        { id: 2, label: "Explore Now", link: "/apps-nft-explore" },
                        { id: 3, label: "Live Auction", link: "/apps-nft-auction" },
                        { id: 4, label: "Item Details", link: "/apps-nft-item-details" },
                        { id: 5, label: "Collections", link: "/apps-nft-collections" },
                        { id: 6, label: "Creators", link: "/apps-nft-creators" },
                        { id: 7, label: "Ranking", link: "/apps-nft-ranking" },
                        { id: 8, label: "Wallet Connect", link: "/apps-nft-wallet" },
                        { id: 9, label: "Create NFT", link: "/apps-nft-create" },
                    ]
                },
                {
                    id: "filemanager",
                    label: "File Manager",
                    link: "/apps-file-manager",
                    parentId: "apps",
                },
                {
                    id: "todo",
                    label: "To Do",
                    link: "/apps-todo",
                    parentId: "apps",
                },
                {
                    id: "job",
                    label: "Jobs",
                    link: "/#",
                    parentId: "apps",
                    badgeName: "New",
                    badgeColor: "success",
                    isChildItem: true,
                    click: function (e) {
                      e.preventDefault();
                      setIsJobs(!isJobs);
                    },
                    stateVariables: isJobs,
                    childItems: [

                      {
                        id: 2,
                        label: "Job Lists",
                        link: "/#",
                        parentId: "apps",
                        isChildItem: true,
                        stateVariables: isJobList,
                        click: function (e) {
                          e.preventDefault();
                          setIsJobList(!isJobList);
                        },
                        childItems: [
                          {
                            id: 1,
                            label: "List",
                            link: "/apps-job-lists",
                            parentId: "apps",
                          },
                          {
                            id: 2,
                            label: "Grid",
                            link: "/apps-job-grid-lists",
                            parentId: "apps",
                          },
                          {
                            id: 3,
                            label: "Overview",
                            link: "/apps-job-details",
                            parentId: "apps",
                          },
                        ],
                      },
                      {
                        id: 3,
                        label: "Candidate Lists",
                        link: "/#",
                        parentId: "apps",
                        isChildItem: true,
                        stateVariables: isCandidateList,
                        click: function (e) {
                          e.preventDefault();
                          setIsCandidateList(!isCandidateList);
                        },
                        childItems: [
                          {
                            id: 1,
                            label: "List View",
                            link: "/apps-job-candidate-lists",
                            parentId: "apps",
                          },
                          {
                            id: 2,
                            label: "Grid View",
                            link: "/apps-job-candidate-grid",
                            parentId: "apps",
                          },
                        ],
                      },
                      {
                        id: 4,
                        label: "Application",
                        link: "/apps-job-application",
                        parentId: "apps",
                      },
                      {
                        id: 5,
                        label: "New Job",
                        link: "/apps-job-new",
                        parentId: "apps",
                      },
                      {
                        id: 6,
                        label: "Companies List",
                        link: "/apps-job-companies-lists",
                        parentId: "apps",
                      },
                      {
                        id: 7,
                        label: "Job Categories",
                        link: "/apps-job-categories",
                        parentId: "apps",
                      },
                    ],
                },
                {
                    id: "apikey",
                    label: "API Key",
                    link: "/apps-api-key",
                    parentId: "apps",
                    badgeName: "New",
                    badgeColor: "success"
                },
            ],
        },
        {
            label: "pages",
            isHeader: true,
        },
        {
            id: "pages",
            label: "Pages",
            icon: "ri-pages-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsPages(!isPages);
                setIscurrentState('Pages');
                updateIconSidebar(e);
            },
            stateVariables: isPages,
            subItems: [
                {
                    id: "starter",
                    label: "Starter",
                    link: "/pages-starter",
                    parentId: "pages",
                },
                {
                    id: "profile",
                    label: "Profile",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsProfile(!isProfile);
                    },
                    parentId: "pages",
                    stateVariables: isProfile,
                    childItems: [
                        { id: 1, label: "Simple Page", link: "/pages-profile", parentId: "pages" },
                        { id: 2, label: "Settings", link: "/pages-profile-settings", parentId: "pages" },
                    ]
                },
                { id: "team", label: "Team", link: "/pages-team", parentId: "pages" },
                { id: "timeline", label: "Timeline", link: "/pages-timeline", parentId: "pages" },
                { id: "faqs", label: "FAQs", link: "/pages-faqs", parentId: "pages" },
                { id: "pricing", label: "Pricing", link: "/pages-pricing", parentId: "pages" },
                { id: "gallery", label: "Gallery", link: "/pages-gallery", parentId: "pages" },
                { id: "maintenance", label: "Maintenance", link: "/pages-maintenance", parentId: "pages" },
                { id: "comingSoon", label: "Coming Soon", link: "/pages-coming-soon", parentId: "pages" },
                { id: "sitemap", label: "Sitemap", link: "/pages-sitemap", parentId: "pages" },
                { id: "searchResults", label: "Search Results", link: "/pages-search-results", parentId: "pages" },
                { id: "PrivecyPolicy", label: "Privacy Policy", link: "/pages-privacy-policy", parentId: "pages",  badgeColor: "success",badgeName: "New", },
                { id: "TermsCondition", label: "Terms Condition", link: "/pages-terms-condition", parentId: "pages", badgeColor: "success",badgeName: "New", },
            ],
        },

        {
            label: "Components",
            isHeader: true,
        },

        {
            id: "forms",
            label: "Forms",
            icon: "ri-file-list-3-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsForms(!isForms);
                setIscurrentState('Forms');
                updateIconSidebar(e);
            },
            stateVariables: isForms,
            subItems: [
                { id: "basicelements", label: "Basic Elements", link: "/forms-elements", parentId: "forms" },
                { id: "formselect", label: "Form Select", link: "/forms-select", parentId: "forms" },
                { id: "checkboxsradios", label: "Checkboxs & Radios", link: "/forms-checkboxes-radios", parentId: "forms" },
                { id: "pickers", label: "Pickers", link: "/forms-pickers", parentId: "forms" },
                { id: "inputmasks", label: "Input Masks", link: "/forms-masks", parentId: "forms" },
                { id: "advanced", label: "Advanced", link: "/forms-advanced", parentId: "forms" },
                { id: "rangeslider", label: "Range Slider", link: "/forms-range-sliders", parentId: "forms" },
                { id: "validation", label: "Validation", link: "/forms-validation", parentId: "forms" },
                { id: "wizard", label: "Wizard", link: "/forms-wizard", parentId: "forms" },
                { id: "editors", label: "Editors", link: "/forms-editors", parentId: "forms" },
                { id: "fileuploads", label: "File Uploads", link: "/forms-file-uploads", parentId: "forms" },
                { id: "formlayouts", label: "Form Layouts", link: "/forms-layouts", parentId: "forms" },
                { id: "select2", label: "Select2", link: "/forms-select2", parentId: "forms" },
            ],
        },
        {
            id: "tables",
            label: "Tables",
            icon: "ri-layout-grid-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsTables(!isTables);
                setIscurrentState('Tables');
                updateIconSidebar(e);
            },
            stateVariables: isTables,
            subItems: [
                { id: "basictables", label: "Basic Tables", link: "/tables-basic", parentId: "tables" },
                { id: "gridjs", label: "Grid Js", link: "/tables-gridjs", parentId: "tables" },
                { id: "listjs", label: "List Js", link: "/tables-listjs", parentId: "tables" },
                { id: "datatables", label: "Datatables", link: "/tables-datatables", parentId: "tables" },
            ],
        },
        {
            id: "charts",
            label: "Charts",
            icon: "ri-pie-chart-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsCharts(!isCharts);
                setIscurrentState('Charts');
                updateIconSidebar(e);
            },
            stateVariables: isCharts,
            subItems: [
                {
                    id: "apexcharts",
                    label: "Apexcharts",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsApex(!isApex);
                    },
                    stateVariables: isApex,
                    childItems: [
                        { id: 1, label: "Line", link: "/charts-apex-line" },
                        { id: 2, label: "Area", link: "/charts-apex-area" },
                        { id: 3, label: "Column", link: "/charts-apex-column" },
                        { id: 4, label: "Bar", link: "/charts-apex-bar" },
                        { id: 5, label: "Mixed", link: "/charts-apex-mixed" },
                        { id: 6, label: "Timeline", link: "/charts-apex-timeline" },
                        { id: 7, label: "Candlstick", link: "/charts-apex-candlestick" },
                        { id: 8, label: "Boxplot", link: "/charts-apex-boxplot" },
                        { id: 9, label: "Bubble", link: "/charts-apex-bubble" },
                        { id: 10, label: "Scatter", link: "/charts-apex-scatter" },
                        { id: 11, label: "Heatmap", link: "/charts-apex-heatmap" },
                        { id: 12, label: "Treemap", link: "/charts-apex-treemap" },
                        { id: 13, label: "Pie", link: "/charts-apex-pie" },
                        { id: 14, label: "Radialbar", link: "/charts-apex-radialbar" },
                        { id: 15, label: "Radar", link: "/charts-apex-radar" },
                        { id: 16, label: "Polar Area", link: "/charts-apex-polar" },
                    ]
                },
                { id: "chartjs", label: "Chartjs", link: "/charts-chartjs", parentId: "charts" },
                { id: "echarts", label: "Echarts", link: "/charts-echarts", parentId: "charts" },

            ],
        },
  


    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;