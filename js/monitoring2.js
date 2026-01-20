	/*Page load time*/
	window.logInfo = {};  //统计页面加载时间
	window.logInfo.openTime = performance.timing.navigationStart;
	window.logInfo.whiteScreenTime = +new Date() - window.logInfo.openTime;
	document.addEventListener('DOMContentLoaded',function (event) {
	  window.logInfo.readyTime = +new Date() - window.logInfo.openTime;
	});
	window.onload = function () {
	  window.logInfo.allloadTime = +new Date() - window.logInfo.openTime;
	  window.logInfo.nowTime = new Date().getTime();
	  var timname = {
	    whiteScreenTime: 'White Screen Time',
	    readyTime: 'Ready Time',
	    allloadTime: 'Total Load Time',
	    mobile: 'Device',
	    nowTime: 'Time',
	  };
	  var logStr = '';
      console.info("Frontend Monitoring:")
	  for (var i in timname) {
	    console.info(timname[i] + ':' + window.logInfo[i] + 'ms');
	    if (i === 'mobile') {
	      logStr += '&' + i + '=' + window.logInfo[i];
	    } else {
	      logStr += '&' + i + '=' + window.logInfo[i];
	    }

	  }
	  /*(new Image()).src = '/action?' + logStr;*/
	};
	/*User device statistics*/
	window.logInfo.mobile = mobileType();
	function mobileType() {
	  var u = navigator.userAgent, app = navigator.appVersion;
	  var type =  {// Mobile device browser info
	    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // iOS
	    iPad: u.indexOf('iPad') > -1, // iPad
	    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // Android
	    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // iPhone
	    trident: u.indexOf('Trident') > -1, // IE
	    presto: u.indexOf('Presto') > -1, // Opera
	    webKit: u.indexOf('AppleWebKit') > -1, // WebKit
	    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // Firefox
	    mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/), // Mobile
	    webApp: u.indexOf('Safari') == -1 // Web app
	  };
	  var lists = Object.keys(type);
	  for(var i = 0; i < lists.length; i++) {
	    if(type[lists[i]]) {
	      return lists[i];
	    }
	  }  
	}
	/*Error statistics*/
	window.onload = function () {
        window.logInfo.allloadTime = +new Date() - window.logInfo.openTime;
        window.logInfo.nowTime = new Date().getTime();
        var timname = {
            whiteScreenTime: 'White Screen Time',
            readyTime: 'Ready Time',
            allloadTime: 'Total Load Time',
            mobile: 'Device',
            nowTime: 'Time',
        };
        var logStr = '';
        console.info("Frontend Monitoring:")
        for (var i in timname) {
            console.info(timname[i] + ':' + window.logInfo[i] + 'ms');
            if (i === 'mobile') {
                logStr += '&' + i + '=' + window.logInfo[i];
            } else {
                logStr += '&' + i + '=' + window.logInfo[i];
            }

        }
       /* (new Image()).src = '/action?' + logStr;*/
    };
      
    var defaults = {
        msg:'',  // Error message
        url:'',  // Error URL
        line:'', // Error line
        col:'',  // Error column
        nowTime: '',// Time
    };
    window.onerror = function(msg,url,line,col,error) {
        col = col || (window.event && window.event.errorCharacter) || 0;

        defaults.url = url;
        defaults.line = line;
        defaults.col =  col;
        defaults.nowTime = new Date().getTime();

        if (error && error.stack){
            // Use stack if available
            defaults.msg = error.stack.toString();

        }else if (arguments.callee){
            // Try to get stack via callee
            var ext = [];
            var fn = arguments.callee.caller;
            var floor = 3;
            while (fn && (--floor>0)) {
                ext.push(fn.toString());
                if (fn  === fn.caller) {
                    break;
                }
                fn = fn.caller;
            }
            ext = ext.join(",");
            defaults.msg = error.stack.toString();
        }
        var str = ''
        for(var i in defaults) {
            // console.log(i,defaults[i]);
            if(defaults[i] === null || defaults[i] === undefined) {
                defaults[i] = 'null'; 
            }
            str += '&'+ i + '=' + defaults[i].toString();
        }
        srt = str.replace('&', '').replace('\n','').replace(/\s/g, '');
        /*(new Image()).src = '/error?' + srt;*/
    }