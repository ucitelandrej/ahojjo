input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("F F E D E F G G ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 C5 B A G G A F ", 120), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showString("its")
    basic.showNumber(input.temperature())
    basic.showString("c")
    basic.clearScreen()
})
basic.forever(function () {
	
})
