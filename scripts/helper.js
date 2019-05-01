class Helper {

  playPauseAndUpdate(song) {
    const totalTime = player.this.currentlyPlaying.getDuration();
    player.playPause(song);
    $('#time-control .total-time').text( totalTime );
  };
}

const helper = new Helper();
