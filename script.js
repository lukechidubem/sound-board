'use strict';

const sounds = [
  'mixkitAngry',
  'mixkitClasic',
  'mixkitCrowd',
  'mixkitFlock',
  'mixkitSmall',
  'mixkitWoosh',
];

sounds.forEach(function (sound) {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSound();

    document.getElementById(sound).play();
  });

  document.querySelector('.buttons').appendChild(btn);
});

function stopSound() {
  sounds.forEach(song => {
    const sound = document.getElementById(song);

    sound.pause();
    sound.currentTime = 0;
  });
}
