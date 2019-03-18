// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"]

 function destructivelyAppendDriver(name) {
        drivers.push('Ralph')
 }

function destructivelyPrependDriver(name) {
        drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(name) {
        drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
        drivers.shift()
}


function appendDriver(name) {
     let driversCopy = drivers.slice()
     driversCopy.push(name)
     return driverscopy
}

function prependDriver(name) {
     let driversCopy2 = drivers.slice()
     driversCopy2.unshift(name)
     return driverscopy2
}

