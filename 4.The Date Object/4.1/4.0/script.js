let dateActuelle = new Date();

let options = {
    "anchorage":{timeZone: "America/Anchorage"},
    "atlantic":{timeZone: "Atlantic/Reykjavik"},
    "moscow":{timeZone: "Europe/Moscow"}
};

console.log(dateActuelle.toLocaleString("en-US", options.anchorage));
console.log(dateActuelle.toLocaleString("en-US", options.atlantic));
console.log(dateActuelle.toLocaleString("en-US", options.moscow));
