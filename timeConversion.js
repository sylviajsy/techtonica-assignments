function timeConversion(s) {
    // string slice for both the hour and back
        // convert str to number
    let hour = s.slice(0,2)
    let convertedHour = Number(hour)
    let back = s.slice(s.length - 2)
    let upperCasedBack = back.toUpperCase()
    // check the hour slice
        // if 12, replace with 00 (with regex?)
    if (convertedHour === 12) {
        // s = s.replace('12','00')
        convertedHour = 0
    }
    // check back string for pm/am
    if (upperCasedBack === "PM") {
        // if pm, add 12 to the hour string
        // math
        convertedHour += 12
    }
    // convert number to str
    convertedHour = String(convertedHour)
    if (convertedHour.length === 1) {
        convertedHour = "0" + convertedHour
    }
    s = s.replace(hour, convertedHour)
    // return hour string + middle
        // s = s.replace(back, "") , or use slice
    console.log(s.replace(back,""))
    return s.replace(back,"")
}