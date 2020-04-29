// // https://jsfiddle.net/uqranwxy/
//
// var v = new Vivus('my-dog', {
//   type: 'oneByOne',
//   duration: 200,
//   start: 'manual',
//   animTimingFunction: Vivus.EASE,
//   forceRender: false,
// })
//
// v.play()
//
// function easeOutBounce (x) {
// 	var base = -Math.cos(x * (0.5 * Math.PI)) + 1;
// 	var rate = Math.pow(base,1.5);
// 	var rateR = Math.pow(1 - x, 2);
// 	var progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI) )) + 1;
// 	return (1- rateR) + (progress * rateR);
// }

var timing,
	timingProps = {
		type: 'delayed',
		duration: 150,
		start: 'autostart',
		pathTimingFunction: Vivus.LINEAR,
		animTimingFunction: Vivus.LINEAR
	};

function timingTest (buttonEl, property, type) {
	var activeSibling = buttonEl.parentNode.querySelector('button.active');
	activeSibling.classList.remove('active');
	buttonEl.classList.add('active');

	timingProps.type = (property === 'type') ? type : timingProps.type;
	timingProps.pathTimingFunction = (property === 'path') ? Vivus[type] : timingProps.pathTimingFunction;
	timingProps.animTimingFunction = (property === 'anim') ? Vivus[type] : timingProps.animTimingFunction;

	timing && timing.stop().destroy();
	timing = new Vivus('timing-example', timingProps);
}

var hi = new Vivus('my-dog', {type: 'oneByOne',  duration: 200,  start: 'autostart', forceRender: false},
	function () {
		if (window.console) {
			console.log('Animation finished. [log triggered from callback]');
		}
	}),
	// obt1 = new Vivus('my-dog', {
  //   type: 'oneByOne',
  //   duration: 200,
  //   start: 'manual',
  //   animTimingFunction: Vivus.EASE,
  //   forceRender: false,
  // }),
	viv2 = new Vivus('family', {type: 'sync', duration: 150, animTimingFunction: Vivus.EASE}),
	bear = new Vivus('teddy', {type: 'delayed', duration: 300, animTimingFunction: Vivus.EASE}),
	perc = new Vivus('percy', {type: 'oneByOne', duration: 150}),
	flow = new Vivus('flowers', {type: 'oneByOne', duration: 150}),
	tig = new Vivus('tiger', {type: 'delayed', duration: 150}),
	pir = new Vivus('pirate', {type: 'delayed', duration: 150}),
	viv3 = new Vivus('gamer', {type: 'sync', duration: 150}),
	cam = new Vivus('camera', {type: 'sync', duration: 150, animTimingFunction: Vivus.EASE_OUT_BOUNCE}),
	viv4 = new Vivus('games', {type: 'scenario-sync', duration: 20, forceRender: false}),
	lud = new Vivus('ludo', {type: 'scenario-sync', duration: 20, forceRender: false}),
	choc = new Vivus('chocolate', {type: 'scenario-sync', duration: 20, forceRender: false});
