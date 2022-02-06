const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const isBack = process.env.back
const isDegraded = process.env.issueTitle.includes("has degraded performance")
const isDown = process.env.issueTitle.includes("is down")
let params = {
    embeds: [
        {
            "description": process.env.issueTitle.replace("is down", "est down").replace("has degraded performance", "prend plus de temps que d'habitude pour répondre").replace("performance has improved", "a retrouvé la forme").replace("is back up", "est de retour"),
            "color": isBack ? 0x57f287 : (isDegraded ? 0xfee75c :0xed4245),
		}
    ]
}
fetch(process.env.discordUrl, {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
}).then(res => {
    console.log(res);
}) 
