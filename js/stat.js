'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_SHADOW = '#ffffff';
var GAP = 10;
var FONT_GAP = 15;
var TEXT_GAP = 50;
var TEXT_COLOR = '#000000';
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_COLOR = 'rgba(255, 0, 0, 1)';
var BAR_COLOR_ALL = 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 40%)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_SHADOW);

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP * 2 + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 2 + FONT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = TEXT_COLOR;
    var time = times[i];
    var names = players[i];
    ctx.fillText(Math.floor(time), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + TEXT_GAP) * i, CLOUD_HEIGHT + CLOUD_Y - FONT_GAP - GAP * 3 - ((BAR_HEIGHT * times[i]) / maxTime));
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + TEXT_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    if (names === 'Вы') {
      ctx.fillStyle = BAR_COLOR;
      ctx.fillRect(CLOUD_X + (BAR_WIDTH + TEXT_GAP) * i + BAR_WIDTH, CLOUD_HEIGHT + CLOUD_Y - FONT_GAP - GAP * 2 - ((BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    } else {
      ctx.fillStyle = BAR_COLOR_ALL;
      ctx.fillRect(CLOUD_X + (BAR_WIDTH + TEXT_GAP) * i + BAR_WIDTH, CLOUD_HEIGHT + CLOUD_Y - FONT_GAP - GAP * 2 - ((BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    }
  }
};


