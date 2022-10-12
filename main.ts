input.onButtonPressed(Button.A, function () {
    count = 0
    while (count <= 4) {
        led.plot(count, 0)
        basic.pause(1000)
        basic.clearScreen()
        count += 1
    }
})
input.onButtonPressed(Button.B, function () {
    count = 0
    while (count <= 4) {
        led.plot(0, count)
        basic.pause(1000)
        basic.clearScreen()
        count += 1
    }
})
let count = 0
basic.showString("2D07 HAZEL")
