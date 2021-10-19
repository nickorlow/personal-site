import InfoCardProps from "../../types/InfoCardProps";

const WebsiteProject: InfoCardProps = {
    title: "personal-site (this website)",
    description: "As a primairly backend guy, I wrote my last website as a JSON file (imatating a webAPI). Feedback showed that that was a bad idea so I made this pretty neat site (in my opinion). If you like it, feel free to use it yourself! The backend is run in a homemade datacenter (a few Dell Poweredges on a rack) running on Kubernetes.",
    listTitle: "Technologies & Resources used",
    list:["React", "Typescript", "Bootstrap", "Icons8", "Docker", "Kubernetes"],
    link: "https://github.com/nickorlow/personal-site",
    linkTitle: "GitHub Repo"
}

const CavCashProject: InfoCardProps = {
    title: "cavcash",
    description: "CavCash started as a project in 2017 as a way to pay with flashdrives. After recruiting a few friends to help me, we build ourselves into a PayPal competitor but shutdown due to funding. I continued to re-write the platform as a cryptocurrency.",
    listTitle: "Technologies Used",
    list: ["C#", ".NET 5", "MSSQL", "mongoDB", "Kubernetes", "Docker", "nginx", "Azure DevOps", "React", "Cloudflare"],
    link: "https://cavcash.com",
    linkTitle: "Project Website"
}

const XenMapProject: InfoCardProps = {
    title: "xenmap",
    description: "I wanted to use an old iPad as a HUD in my car similar to tesla and it needed a map to complete it. I made this widget to show your current location as a XenHTML widget.",
    listTitle: "Technologies Used",
    list: ["HTML", "JavaScript", "CSS", "XenHTML Framework", "XenInfo API"],
    link: "https://github.com/nickorlow/MapXenHTML",
    linkTitle: "GitHub Repo"
}

const SPONODEProject: InfoCardProps = {
    title: "sponode",
    description: "App for Android & macOS that added songs people sent you to a playlist. Made so we could have a jukebox type setup during track workouts.",
    listTitle: "Technologies Used",
    list: ["Java", "Apple Script", "Spotify API", "node.js"],
    link: "https://github.com/nickorlow/sponode",
    linkTitle: "GitHub Repo"
}

export const AllProjects: InfoCardProps[] = [WebsiteProject, CavCashProject, XenMapProject, SPONODEProject];

