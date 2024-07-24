enum RadioMessage {
    message1 = 49434,
    check_plant_wetness = 9373,
    happy = 4585,
    sad = 2621,
    need_water = 18906,
    check_humidity = 20801,
    check_light = 55679
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.check_plant_wetness)
})
radio.onReceivedMessage(RadioMessage.happy, function () {
    music.setVolume(255)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Happy)
})
radio.onReceivedMessage(RadioMessage.sad, function () {
    music.setVolume(255)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    music.stopMelody(MelodyStopOptions.All)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.check_humidity)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendMessage(RadioMessage.check_light)
})
radio.onReceivedMessage(RadioMessage.need_water, function () {
    music.setVolume(255)
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        . . . . .
        # . # . #
        `)
    music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 190), music.PlaybackMode.LoopingInBackground)
})
radio.setGroup(99)
basic.showIcon(IconNames.Heart)
