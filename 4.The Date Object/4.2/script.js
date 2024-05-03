let now = new Date()
let x = (1000 * 60 * 60) * 80000; // 1000 miliseconds * 60 seconds * 60 minutes 

let futur = new Date(
  now.getTime() + x
)

console.log(futur.toString());