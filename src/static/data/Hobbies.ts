import InfoCardProps from "../../types/InfoCardProps";

const RunningHobby: InfoCardProps = {
    title: "Running",
    description: "I started running cross country in 7th grade after wanting to beat my friend in the mile. I kept running all the way through to my senior year of high school. I made varsity my sophomore year. Today, I just run with friends casually along with other physical activity like lifting, biking, and kayaking.",
    listTitle: "Personal Records",
    list:["1600 - 4:34", "3200 - 10:11", "5K XC - 16:42"],
    link: "https://tx.milesplit.com/athletes/7325388-nicholas-orlowsky/stats",
    linkTitle: "Milesplit Profile",
    listClassName: "col-12"
}

const Lifting: InfoCardProps = {
    title: "Lifting",
    description: "Began lifting when I got into college.",
    listTitle: "Personal Records",
    list:["Bench - 235lbs", "Squat - 345lbs"],
    listClassName: "col-12"
}

const VideogameHobby: InfoCardProps = {
    title: "Video Games",
    description: "Video games are what got me interested in programming in the first place. I tend to play them a lot less now in favor of programming though, I'll occasionally sink a couple hours into a game.",
    listTitle: "Favorites",
    list: ["Galaga", "Clone Hero", "Minecraft"]
}

export const AllHobbies: InfoCardProps[] = [RunningHobby, Lifting];

