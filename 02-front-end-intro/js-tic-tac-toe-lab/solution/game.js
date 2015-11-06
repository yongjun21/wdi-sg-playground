'use strict';

var player = true;
var boardStateA = [[null, null, null],
                  [null, null, null],
                  [null, null, null]];
var boardStateB = [[null, null, null],
                  [null, null, null],
                  [null, null, null]];

function winner (arr) {
  for (var i = 0; i < 3; i++) {
    if (arr[i][0] && arr[i][1] && arr[i][2]) return true;
    if (arr[0][i] && arr[1][i] && arr[2][i]) return true;
  }
  if (arr[0][0] && arr[1][1] && arr[2][2]) return true;
  if (arr[0][2] && arr[1][1] && arr[2][0]) return true;
  return false;
}

var body = document.querySelector('body');
var title = document.querySelector('h1');

var listener = function (event) {
  console.log(event);
  var tile = event.target;
  if (tile.classList[0] !== 'tile') return;
  if (tile.textContent) return;
  tile.textContent = player ? 'X' : 'O';
  var r = parseInt(tile.classList[1][1], 10) - 1;
  var c = parseInt(tile.classList[2][1], 10) - 1;
  boardStateA[r][c] = player;
  boardStateB[r][c] = !player;
  console.log(boardStateA);
  if (winner(boardStateA)) {
    title.textContent = 'Player One Wins';
    body.removeEventListener('click', listener);
  } else if (winner(boardStateB)) {
    title.textContent = 'Player Two Wins';
    body.removeEventListener('click', listener);
  }
  player = !player;
};

body.addEventListener('click', listener);
