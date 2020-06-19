let temp = 0
basic.forever(function () {
    temp = input.temperature()
    basic.showString("" + (temp))
    if (temp < 19) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
