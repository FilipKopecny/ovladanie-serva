input.onButtonPressed(Button.A, function () {
    if (uhol > 0) {
        uhol += -10
    }
})
input.onButtonPressed(Button.AB, function () {
    uhol = 90
})
input.onButtonPressed(Button.B, function () {
    if (uhol < 180) {
        uhol += 10
    }
})
let uhol = 0
uhol = 90
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P16, uhol)
    basic.showNumber(Math.round(pins.map(
    uhol,
    0,
    180,
    0,
    9
    )))
})
