enum RadioMessage {
    message1 = 49434,
    check_plant_wetness = 9373,
    happy = 4585,
    sad = 2621
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.check_plant_wetness)
})
radio.onReceivedMessage(RadioMessage.happy, function () {
    music.setVolume(127)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Happy)
})
radio.onReceivedMessage(RadioMessage.sad, function () {
    music.setVolume(127)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Sad)
})
radio.setGroup(91407)
