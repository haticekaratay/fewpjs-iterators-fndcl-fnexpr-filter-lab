function findMatching(arrayDrivers,name) {
   return arrayDrivers.filter(driverName => driverName.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(arrayDrivers,name){
    return arrayDrivers.filter(driverName => driverName[0] == name[0])
}

function matchName(arrayDrivers,name){
    return arrayDrivers.filter(driverObject => driverObject.name == name)
}