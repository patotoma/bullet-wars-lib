'use strict';

var settings = {
  fps: 1000/25, // 25 updates per second
  roundTime: 12*60*1000, // 12 minutes in millis
  socketioJwtAuthTimeout: 120*60*1000,
  // 2 minutes in millis to send the authentication message
  // auth timeout is used mainly on login page before authenticated connection is established
  // it prevents afk players stucked on login page from taking too much traffic
  entities: {
    player: {
      width: 20,
      height: 46,
    },
    bullet: {
      width: 18,
      height: 16,
    },
  },
  weapons: {
    pistol: {
      fireDelay: 25,
      maxAmmo: -1,
    },
    rifle: {
      fireDelay: 1,
      maxAmmo: 30,
    },
    shotgun: {
      fireDelay: 25,
      maxAmmo: 7,
    },
  },
};

module.exports = settings;
