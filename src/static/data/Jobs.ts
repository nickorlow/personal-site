import Job from "../../types/Job";
import VrboImage from "../images/vrbo-logo-min.png";
import CavImage from "../images/cavcash-logo-min.png";
import ChicksImage from "../images/chicks-logo.png";
import CompImage from "../images/compwallet-logo.png";
import THDImage from "../images/homdepot-logo.png";

const VrboJob: Job = {
    title: "Data Science Intern",
    company: "Vrbo, a part of Expedia Group",
    uri: "https://vrbo.com",
    timespan: "August 2019 - January 2021",
    items: [
        "Worked on Natural Language Processing chatbot",
        "Worked with team to identify dataset patterns",
        "Helped reduce wait times",
        "Reduced offsite booking attempts"
    ],
    image: VrboImage
}

const CavCashJob: Job = {
    title: "CEO & Software Engineer",
    company: "CavCash",
    timespan: "May 2017 - April 2021",
    items: [
        "Founded the company",
        "Wrote a C# webAPI",
        "Managed mongoDB and MSSQL databases",
        "Deployed and maintained k8s clusters on bare metal on in-house datacenter",
    ],
    image: CavImage
}

const ChicksJob: Job = {
    title: "Software Engineer",
    company: "Chicks Gold",
    uri: "https://chicksgold.com",
    timespan: "April 2021 - October 2021",
    items: [
        "Added features & bugfixes to .NET 5 API",
        "Added features & bugfixes to Aurelia website",
        "Worked with team to create new feature & bug tickets",
        "Deployed code to k8s cluster"
    ],
    image: ChicksImage
}

const CompWalletJob: Job = {
    title: "Chief Technology Officer",
    company: "Casino CompWallet",
    timespan: "October 2021 - Present",
    items: [
        "Architected & built in-house advertising platform",
        "Work on Ruby-On-Rails API",
        "Updated a React Native mobile app used with ~15,000 users"
    ],
    image: CompImage
}

const HomeDepotJob: Job = {
    title: "Software Engineering Intern",
    company: "The Home Depot",
    uri: "https://homedepot.com",
    timespan: "May 2022 - August 2022",
    items: [
        "Developed functionality using React.js, Node.js, and Github CI/CD Pipelines for internal tooling saving 500+ engineering hours annually",
        "Optimized automotive section of HomeDepot website. Removed unnecessary code, reducing Javascript sent to clients by ~10%"
    ],
    image: THDImage
}

export const AllJobs: Job[] = [HomeDepotJob, CompWalletJob, CavCashJob, ChicksJob, VrboJob];

