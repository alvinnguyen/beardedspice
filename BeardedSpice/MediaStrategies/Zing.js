//
//  Zing.plist
//  BeardedSpice
//
//  Created by Alvin Nguyen on 05/30/17.
//
BSStrategy = {
  version: 2,
  displayName: "Zing MP3",
  accepts: {
    method: "predicateOnTab",
    format: "%K LIKE[c] '*mp3.zing.vn/*'",
    args: ["URL"]
  },
  toggle: function(){ document.querySelector('.paused').click(); },
  previous: function(){ document.querySelector('.zp-button-prev').click(); },
  next: function(){ document.querySelector('.zp-button-next').click(); },
  pause: function(){ document.querySelector('.paused').click(); },
  trackInfo: function () {
    return {
        'image': document.querySelector('.pthumb').getAttribute('src'),
        'track':  document.querySelector('.fn-song.fn-current .fn-name').innerText,
        'artist': document.querySelector('.fn-song.fn-current h4 a').innerText
    };
  }
}
