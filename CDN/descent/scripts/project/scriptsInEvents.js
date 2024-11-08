"use strict";

(()=>{var e=function(e){var n=RegExp("[?&]"+e+"=([^&]*)").exec(window.location.search);return n&&decodeURIComponent(n[1].replace(/\+/g," "))},n="kids"===e("tag"),o=new(function(){function e(){var e=this;this.queue=[],this.init=function(n){return void 0===n&&(n={}),new Promise((function(o,t){e.enqueue("init",n,o,t)}))},this.rewardedBreak=function(){return new Promise((function(e){e(!1)}))},this.noArguments=function(n){return function(){e.enqueue(n)}},this.oneArgument=function(n){return function(o){e.enqueue(n,o)}},this.handleAutoResolvePromise=function(){return new Promise((function(e){e()}))},this.handleAutoResolvePromiseObj=function(){return new Promise((function(e){e()}))},this.throwNotLoaded=function(){console.debug("PokiSDK is not loaded yet. Not all methods are available.")}}return e.prototype.enqueue=function(e,o,t,i){var r={fn:e,options:o,resolveFn:t,rejectFn:i};n?i&&i():this.queue.push(r)},e.prototype.dequeue=function(){for(var e=function(){var e=n.queue.shift(),o=e,t=o.fn,i=o.options;"function"==typeof window.PokiSDK[t]?(null==e?void 0:e.resolveFn)||(null==e?void 0:e.rejectFn)?window.PokiSDK[t](i).then((function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];"function"==typeof e.resolveFn&&e.resolveFn.apply(e,n)})).catch((function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];"function"==typeof e.rejectFn&&e.rejectFn.apply(e,n)})):void 0!==(null==e?void 0:e.fn)&&window.PokiSDK[t](i):console.error("Cannot execute "+e.fn)},n=this;this.queue.length>0;)e()},e}());window.PokiSDK={init:o.init,initWithVideoHB:o.init,customEvent:o.throwNotLoaded,commercialBreak:o.handleAutoResolvePromise,rewardedBreak:o.rewardedBreak,displayAd:o.throwNotLoaded,destroyAd:o.throwNotLoaded,getLeaderboard:o.handleAutoResolvePromiseObj},["disableProgrammatic","gameLoadingStart","gameLoadingFinished","gameInteractive","roundStart","roundEnd","muteAd"].forEach((function(e){window.PokiSDK[e]=o.noArguments(e)})),["setDebug","gameplayStart","gameplayStop","gameLoadingProgress","happyTime","setPlayerAge","togglePlayerAdvertisingConsent","toggleNonPersonalized","setConsentString","logError","sendHighscore","setDebugTouchOverlayController"].forEach((function(e){window.PokiSDK[e]=o.oneArgument(e)}));var t,i=((t=window.pokiSDKVersion)||(t=e("ab")||"v2.172.0"),"/poki-sdk-"+(n?"kids":"core")+"-"+t+".js"),r=document.createElement("script");r.setAttribute("src",i),r.setAttribute("type","text/javascript"),r.onload=function(){return o.dequeue()},document.head.appendChild(r)})();



{
	const scriptsInEvents = {

		async Loader_Event2_Act3(runtime, localVars)
		{
			// don't sent Up and Down keys to the parent page
			window.addEventListener('keydown', ev => {
			    if (['ArrowDown', 'ArrowUp', ' '].includes(ev.key)) {
			        ev.preventDefault();
			    }
			});
			window.addEventListener('wheel', ev => ev.preventDefault(), { passive: false });
			
			
			
			PokiSDK.init().then(
			    () => {
			        console.log("Poki SDK successfully initialized");
			        // your code to continue to game
					localVars.pokiInitialized=1;
					PokiSDK.gameLoadingStart();
			
			
			        
				//PokiSDK.setDebug(true);
			
			
			    }   
			).catch(
			    () => {
			        console.log("Initialized, but the user likely has adblock");
			        // your code to continue to game
					localVars.pokiInitialized=1;
					PokiSDK.gameLoadingStart();
			    }   
			);
			
		},

		async Loader_Event2_Act4(runtime, localVars)
		{
			// Site lock to poki.com
			
			 // const _0x1918 = ['top', 'indexOf', 'aHR0cHM6Ly9wb2tpLmNvbS9zaXRlbG9jaw==', 'hostname', 'length', 'location', 'LnBva2ktZ2RuLmNvbQ==', 'href']; (function (_0x4a02b5, _0x5c0c3d) { const _0x56a85d = function (_0x375c0e) { while (--_0x375c0e) { _0x4a02b5.push(_0x4a02b5.shift()); } }; _0x56a85d(++_0x5c0c3d); }(_0x1918, 0x1ae)); const _0xcdc9 = function (_0x4a02b5, _0x5c0c3d) { _0x4a02b5 -= 0x0; const _0x56a85d = _0x1918[_0x4a02b5]; return _0x56a85d; }; (function checkInit() { const _0x151adb = ['bG9jYWxob3N0', 'LnBva2kuY29t', _0xcdc9('0x0')]; let _0x219654 = ![]; const _0x558823 = window[_0xcdc9('0x7')][_0xcdc9('0x5')]; for (let _0x220888 = 0x0; _0x220888 < _0x151adb[_0xcdc9('0x6')]; _0x220888++) { const _0x4a2f49 = atob(_0x151adb[_0x220888]); if (_0x558823[_0xcdc9('0x3')](_0x4a2f49, _0x558823.length - _0x4a2f49.length) !== -0x1) { _0x219654 = !![]; break; } } if (!_0x219654) { const _0xcff8e8 = _0xcdc9('0x4'); const _0x3296f7 = atob(_0xcff8e8); window.location[_0xcdc9('0x1')] = _0x3296f7; window[_0xcdc9('0x2')][_0xcdc9('0x7')] !== window[_0xcdc9('0x7')] && (window[_0xcdc9('0x2')][_0xcdc9('0x7')] = window[_0xcdc9('0x7')]); } }());
			
			
		},

		async Common_Event28_Act1(runtime, localVars)
		{
			PokiSDK.gameplayStart();
		},

		async Common_Event30_Act1(runtime, localVars)
		{
			PokiSDK.gameplayStop();
		},

		async Common_Event31_Act1(runtime, localVars)
		{
			PokiSDK.happyTime(localVars.value); 
			// scale is 0.0 to 1.0
		},

		async Common_Event32_Act5(runtime, localVars)
		{
			PokiSDK.commercialBreak().then(
			    () => {
			        console.log("Commercial break finished");
			
			       runtime.callFunction("PokiEndBreak");
				  }
			);
		},

		async Common_Event33_Act6(runtime, localVars)
		{
			
			PokiSDK.rewardedBreak().then(
			    (success) => {
			        if(success) {
			          // video was displayed, give reward
			        }
			        else {
			          localVars.callbackFunction="";
			        }
					
			        console.log("Rewarded break finished");
			       runtime.callFunction("PokiEndBreak");
			    }
			);
			
		},

		async Common_Event42_Act1(runtime, localVars)
		{
			//var GameFrame= document.getElementById('contentiframe');
			if (document.hasFocus()) {
			 //console.log("Focused");
			 localVars.isPaused=0
			 }
			else {
			 //console.log("Not Focused")
			 localVars.isPaused=1
			
			}
			
		}

	};
	
	self.C3.ScriptsInEvents = scriptsInEvents;
}
