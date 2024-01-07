// Convert decimal number to binary
function toBinary (v: number): any {
    if (v == 1) {
        return "1"
    }
    if (v == 0) {
        return "0"
    }
    return "" + toBinary(Math.floor(v / 2)) + v % 2
}
// show time in BCD code
function time_bcd (hour: number, minutes: number) {
    hourdes = Math.trunc(hour / 10)
    hourjed = hour - hourdes * 10
    mindes = Math.trunc(minutes / 10)
    minjed = minutes - mindes * 10
    hourdesbin = zleva(toBinary(hourdes))
    hourjedbin = zleva(toBinary(hourjed))
    mindesbin = zleva(toBinary(mindes))
    minjedbin = zleva(toBinary(minjed))
    sloupec(minjedbin, 4)
    sloupec(mindesbin, 3)
    sloupec(hourjedbin, 1)
    sloupec(hourdesbin, 0)
}
// Add zeros from left if necessary
function zleva (co: string) {
    pom = co
    while (pom.length < 5) {
        pom = "0" + pom
    }
    return pom
}
// show binary number as column on led matrix
// max number is 31
function sloupec (co: string, col: number) {
    for (let i = 0; i <= 4; i++) {
        pom2 = co.substr(i, 1)
        if (pom2 == "1") {
            led.plot(col, i)
        } else {
            led.unplot(col, i)
        }
    }
}
/**
 * seconds
 */
/**
 * User guide:
 * 
 * 1. connect micro:bit device
 * 
 * 2. set variables "hodiny", "minuty" and "sekundy" to some very close future time
 * 
 * 3. wait until current time correspods to variables setting
 * 
 * 4. upload programm to device
 */
let sekundy = 0
let minuty = 0
let hodiny = 0
let pom2 = ""
let pom = ""
let minjedbin = ""
let mindesbin = ""
let hourjedbin = ""
let hourdesbin = ""
let minjed = 0
let mindes = 0
let hourjed = 0
let hourdes = 0
basic.clearScreen()
let ds = DS1302.create(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
basic.forever(function () {
    hodiny = ds.getHour()
    minuty = ds.getMinute()
    sekundy = ds.getSecond()
    time_bcd(hodiny, minuty)
    if (sekundy % 2 == 0) {
        led.plot(2, 0)
    } else {
        led.unplot(2, 0)
    }
})
