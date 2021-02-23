input.onButtonPressed(Button.A, function () {
    control.reset()
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    control.reset()
})
let Mail = 0
radio.setGroup(117)
basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P0)) {
        Mail += 1
        basic.showNumber(Mail)
        basic.pause(500)
        radio.sendNumber(Mail)
    } else {
        basic.showNumber(Mail)
        basic.pause(100)
    }
})
