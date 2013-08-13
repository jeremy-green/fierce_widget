(function(window) {

	Fierce = {
		name: 'fierce',
		go: function(options) {
			/**
			 * @todo make the height and width work
			 */
			if(options.width) {
				w = ((options.width < 150) ? 150 : options.width) + "px";
			} else {
				//w = "100%";
				w = "250px";
			}
			//h = ((options.height < 100) ? 100 : options.height || 300) + "px";
			pub = options.publication || "markets";
			var s = document.createElement("script");
			/**
			 * @todo would have been nice to get this as json
			 */
			s.src = "http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20xml%20WHERE%20url=%22http://www." + this.name + pub + ".com/feed%22&format=json&callback=Fierce._handle";
			document.getElementsByTagName("head")[0].appendChild(s);
			this._construct();
		},
		__isIE: function () {
			var o = navigator.userAgent;
			return o.match(/MSIE\s([^;]*)/) || false;
		},
		_construct: function() {
			//append in the script location
			document.write("<div id=\"fierce-widget\"></div>");
			//append after the script location
			//var div = document.createElement("div");
			//div.id = "fierce-widget";
			//document.getElementsByTagName("body")[0].appendChild(div);
			//document.body.appendChild(div);
			this._style();
		},
		_style: function() {
			/**
			 * @todo turn this into an external stylesheet
			 */
			var q = document.createElement("style");
			q.type = "text/css";
			var s = "#fierce-widget{width:"+w+";background:#f5f5f5;padding:5px;border:2px solid #000099;position:relative;overflow:hidden;font: 13px/1.231 arial,sans-serif;}";
			s += ".fierce-widget-logo{margin:2.5px 0;}";
			s += ".fierce-widget-list{list-style:none;padding:0;margin:0;border:1px solid #676767;}";
			s += ".fierce-widget-list li{padding:5px;margin:2.5 0;border-bottom:1px solid #676767;background:#ffffff;}";
			s += ".fierce-widget-list li:last-child{border:none;}"
			s += ".fierce-widget-list li:hover{background:#f5f5f5;}";
			s += ".fierce-widget-list li a{color:#000099;text-decoration:none;}";
			s += ".fierce-widget-list li a:hover{text-decoration:underline;}";
			//s += "#fierce-widget input[type=text]{width:245px;}";
			s += "#fierce-widget input{width:"+w+";margin:5px 0 0;display:block;}";
			//s was already passed and exists
			if(this.__isIE()) {
				q.styleSheet.cssText = s;
			} else {
				var t = document.createDocumentFragment();
				t.appendChild(document.createTextNode(s));
				q.appendChild(t);
			}
			function p() {
				document.getElementsByTagName("head")[0].appendChild(q);
			}
			if(!this.__isIE()) {
				p();
			} else {
				window.attachEvent("onload", function () {
					p();
                })
			}
		},
		_handle: function(data) {
			var items = data.query.results.rss.channel.item;
			var html = "<a href=\"http://www.fierce"+pub+".com\"><img border=\"0\" class=\"fierce-widget-logo\" src=\"http://static.fiercemarkets.com/public/logos/sister-sites/fierce"+pub+".png\" /></a>";
			html += "<ul class=\"fierce-widget-list\">";
			var len = items.length;
			for(var i=0; i<len; i++) {
				var obj = items[i];
				html += "<li><a href=\"" + obj.link + "\">" + obj.title + "</a></li>\r\n";
			}
			html += "</ul>";
			var signup = "<form action=\"http://www.fierce"+pub+".com/signup\" method=\"post\">";
			signup += "<input type=\"email\" placeholder=\"Email Address\" required /><input type=\"image\" src=\"fierce-sign-me-up-button.png\" />"
			signup += "</form>";
			html += signup;
			var div = document.getElementById("fierce-widget");
			div.innerHTML = html;
		}
	};

	window.Fierce = Fierce;

})(window);