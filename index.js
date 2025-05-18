// console.log(new Date().getHours())

// console.log(typeof new Date().getFullYear())

const user = {
    username: "user",
    password: "Ritesh@7767",
    firstname: "ritesh",
    lastname: "gupta",
    require: function(){
        return this.username && this.password && this.firstname && this.lastname
    }
}

// if (user.require()) console.log("clicked")
// else console.log("not clicked")
// console.log(user.require())

// console.log(typeof new Date().getDate())
// console.log(new Date().getMonth())

// let date = "2024-05-05"

// console.log(date.substring(8))

let names = ["ritesh", "vivek", "rinky", "ritu"]

let result = names.find(ele => ele == "riteshh")
console.log(result)