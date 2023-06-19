"use strict";
window.addEventListener('DOMContentLoaded', function() {
  var leaderInput = document.getElementById('leaderInput');
  var flagContainer = document.getElementById('flagContainer');

  leaderInput.addEventListener('change', function() {
    var leaderName = leaderInput.value.trim().toLowerCase();
    var flagURL = '';

    switch (leaderName) {
      case 'biden':
        flagURL = 'assets/imgs/flags/biden.png';
        break;
      case 'scholz':
        flagURL = 'assets/imgs/flags/scholz.png';
        break;
      case 'meloni':
        flagURL = 'assets/imgs/flags/meloni.png';
        break;
      case 'trudeau':
        flagURL = 'assets/imgs/flags/trudeau.png';
        break;
      case 'macron':
        flagURL = 'assets/imgs/flags/macron.png';
        break;
      case 'sunak':
        flagURL = 'assets/imgs/flags/sunak.png';
        break;
      case 'kisida':
        flagURL = 'assets/imgs/flags/kisida.png';
        break;
      case 'zelensky':
        flagURL = 'assets/imgs/flags/zelensky.png';
        break;
      default:
        flagURL = 'assets/imgs/flags/eu.png';
        break;
    }

    flagContainer.style.backgroundImage = 'url(' + flagURL + ')';
  });
});
