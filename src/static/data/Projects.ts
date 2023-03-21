import InfoCardProps from "../../types/InfoCardProps";
import ProjectCardProps from "../../types/ProjectCardProps";

const WebsiteProject: ProjectCardProps = {
    title: "Personal Site",
    description: "As a primarily backend guy, I wrote my last website as a JSON file (imitating a webAPI). Feedback showed that that was a bad idea so I made this pretty neat site (in my opinion). If you like it, feel free to use it yourself! The backend is run in a homemade datacenter (a few Dell Poweredges on a rack) running on Kubernetes.",
    shortDescription: "My personal website.",
    techUsed:["React", "Typescript", "Bootstrap", "NWS", "Docker", "Kubernetes"],
    link: "https://github.com/nickorlow/personal-site",
    linkTitle: "GitHub Repo",
    imageUrl: ""
}

const RoomyProject: ProjectCardProps = {
    title: "Roomy Sentry",
    description: "Built software to monitor the presence of a person based on sniffing the wi-fi packets of their mobile devices. Practically used in order to tell if my roommate is home.",
    shortDescription: "Find out when your roommate is home",
    techUsed: ["C#", ".NET 6", "NoSQL", "Docker", "nginx", "React Native", "Cloudflare"],
    link: "https://github.com/nickorlow/roomy-sentry",
    linkTitle: "Github Repo",
    imageUrl: ""
}

const CavCashProject: ProjectCardProps = {
    title: "CavCash",
    description: "CavCash started as a project in 2017 as a way to pay with flashdrives. After recruiting a few friends to help me, we build ourselves into a PayPal competitor but shutdown due to funding. I continued to re-write the platform as a cryptocurrency.",
    shortDescription: "Like Venmo, but better",
    techUsed: ["C#", "Kubernetes", "mongoDB", "MSSQL", "Docker", "nginx", "Azure DevOps", "React", "Cloudflare"],
    link: "https://cavcash.com",
    linkTitle: "Project Website",
    imageUrl: ""
}

const XenMapProject: ProjectCardProps = {
    title: "XenMap",
    description: "I wanted to use an old iPad as a HUD in my car similar to tesla and it needed a map to complete it. I made this widget to show your current location as a XenHTML widget.",
    shortDescription: "Your live location as an iPhone wallpaper",
    techUsed: ["HTML", "JavaScript", "CSS", "XenHTML Framework", "XenInfo API"],
    link: "https://github.com/nickorlow/MapXenHTML",
    linkTitle: "GitHub Repo",
    imageUrl: ""
}

const SPONODEProject: ProjectCardProps = {
    title: "SPONODE",
    description: "App for Android & macOS that added songs people sent you to a playlist. Made so we could have a jukebox type setup during track workouts.",
    shortDescription: "Spotify queue management via iMessage",
    techUsed: ["Java", "Apple Script", "Spotify API", "node.js"],
    link: "https://github.com/nickorlow/sponode",
    linkTitle: "GitHub Repo",
    imageUrl: ""
}

const NWSProject: ProjectCardProps = {
    title: "Nick Web Services",
    description: "Nick Web Services is a cloud hosting provider that I created. It was originally one server I got from goodwill in a garage, but now it's 4 servers across 2 states (PA & TX).",
    shortDescription: "My own cloud provider",
    techUsed: ["Kubernetes", "Rancher", "C#"],
    link: "https://nws.nickorlow.com",
    linkTitle: "Project Website",
    imageUrl: ""
}

const Mahantongo: ProjectCardProps = {
    title: "Mahantongo",
    description: "I'm one of the members of the Community Team that runs some UT Computer Science community Discord servers. Currently, a Discord bot called Carlbot provides us a star-board, which is a specific channel where messages that 5 or more people react to with a star emoji get posted. It's supposed to be a collection of the funniest and best messages sent on the server. One of the things our server members have wanted is the addition of more '*-board' channels where you can create multiple star-board like channels but with custom emojis. \n\n I wrote this bot in Rust using Serenity to interact with the Discord API and it helped me gain a better understanding of Rust. It is hosted on NWS.",
    shortDescription: "A Discord bot to show off the best (or worst) of your server.",
    link: "https://github.com/nickorlow/mahantongo",
    linkTitle: "Github Repo",
    techUsed: ["Discord API", "Rust"],
    imageUrl: ""
}

export const AllProjects: ProjectCardProps[] = [WebsiteProject, NWSProject, Mahantongo, RoomyProject, XenMapProject, CavCashProject, SPONODEProject];

