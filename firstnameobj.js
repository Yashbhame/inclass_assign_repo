const people = [{
    firstName : "Sanket",
    age : 25,
    gender : "male"
},{
    firstName : "Rishi",
    age : 21,
    gender : "male"
},{
    firstName : "Riya",
    age : 21,
    gender : "female"
},{
    firstName : "Yash",
    age : 21,
    gender : "male"
}]


for(let i = 0; i < people.length; i++)
    {
    if(people[i]["gender"] === "male")
    {
        console.log(people[i]["firstName"])
    }
}