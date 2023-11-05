var skins = {
    dark: {
        style: "text-align: left; background: linear-gradient(#1f1f1f, #2f2f2f); border-radius: 10px; position: relative; user-select: none;",
        radioflocolor: "#cccccc",
        volume: {backgroundcolor: "#484848", barbackgroundcolor: "#ffffff"},
        play: {
            style: "background: linear-gradient(#bfbfbf, #5f5f5f); border-radius: 50%; margin: 10px 0 0 15px; cursor: pointer;",
            width: 60,
            height: 60,
            polygon: {points: "20,10 50,30 20,50", style: "fill: #ffffff"},
            rect: {width: "30", height: "30", x: "15", y: "15", style: "fill: #ffffff"}
        }
    },
    light: {
        style: "text-align: left; background: linear-gradient(#dfdfdf, #c4c4c4); border-radius: 10px; position: relative; user-select: none;",
        radioflocolor: "#828282",
        volume: {backgroundcolor: "#828282", barbackgroundcolor: "#ffffff"},
        play: {
            style: "background: linear-gradient(#828282, #5f5f5f); border-radius: 50%; margin: 10px 0 0 15px; cursor: pointer;",
            width: 60,
            height: 60,
            polygon: {points: "20,10 50,30 20,50", style: "fill: #ffffff"},
            rect: {width: "30", height: "30", x: "15", y: "15", style: "fill: #ffffff"}
        }
    },
    "windows-light": {
        style: "text-align: left; background: #e7f0f9; border: 1px solid #b7bbc7; border-radius: 10px; position: relative; user-select: none;",
        radioflocolor: "#173c94",
        volume: {backgroundcolor: "#5f91c9", barbackgroundcolor: "#173c94"},
        play: {
            style: "background: linear-gradient(#173c94, #49cbfa); border-radius: 50%; margin: 10px 0 0 15px; cursor: pointer;",
            width: 60,
            height: 60,
            polygon: {points: "20,10 50,30 20,50", style: "fill: #ffffff"},
            rect: {width: "30", height: "30", x: "15", y: "15", style: "fill: #ffffff"}
        }
    },
    "windows-dark": {
        style: "text-align: left; background: #3f4143; border-radius: 10px; position: relative; user-select: none;",
        radioflocolor: "#fafafa",
        volume: {backgroundcolor: "#2e3043", barbackgroundcolor: "#5885c3"},
        play: {
            style: "background: linear-gradient(#173c94, #81a3d1); border-radius: 50%; margin: 10px 0 0 15px; cursor: pointer;",
            width: 60,
            height: 60,
            polygon: {points: "20,10 50,30 20,50", style: "fill: #ffffff"},
            rect: {width: "30", height: "30", x: "15", y: "15", style: "fill: #ffffff"}
        }
    },
    winamp: {
        style: "text-align: left; background: linear-gradient(#38385a, #2b2a3f); border: 1px solid #62616d; border-radius: 10px; position: relative; user-select: none;",
        radioflocolor: "#fafafa",
        volume: {backgroundcolor: "#d2601d", barbackgroundcolor: "#adb8bf"},
        play: {
            style: "background: linear-gradient(#c6d2db, #aeb6c6); border-radius: 50%; margin: 10px 0 0 15px; cursor: pointer;",
            width: 60,
            height: 60,
            polygon: {points: "20,10 50,30 20,50", style: "fill: #4a5264"},
            rect: {width: "30", height: "30", x: "15", y: "15", style: "fill: #4a5264"}
        }
    }
};

radioFloPlayer = {
    embed: function (e) {
        var t = document.createElement("style");
        t.type = "text/css";
        t.innerHTML = ".marquee { animation: marquee " + parseInt(e.width) / 100 * 2 + "s linear infinite; } @keyframes marquee { 0% { text-indent: " + (parseInt(e.width) / 10 - 10) + "em } 100% { text-indent: -" + parseInt(e.width) / 10 + "em } }";

        document.getElementsByTagName("head")[0].appendChild(t);

        var o = document.getElementById(e.elementId);
        var r = skins[e.skin];
        var i = document.createElement("audio");

        i.autoplay = e.autoplay || !1;
        i.src = e.url;
        i.volume = e.volume;
        o.appendChild(i);

        var n = document.createElement("div");
        n.setAttribute("style", r.style), n.style.width = e.width + "px" || "250px", n.style.height = "80px", n.addEventListener("contextmenu", function (e) {
            e.preventDefault()
        });
        var a = document.createElement("a");
        a.setAttribute("style", "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; font-size: 8px; position: absolute; bottom: 4px; right: 15px; text-decoration: none; color: " + r.radioflocolor + "; font-family: Helvetica, sans-serif;");
        var l = document.createTextNode("");
        a.appendChild(l), a.href = "https://shoutstream.co.uk/", a.target = "_blank", n.appendChild(a);
        var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        s.setAttribute("style", r.play.style), s.setAttribute("width", r.play.width + "px"), s.setAttribute("height", r.play.height + "px"), s.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), n.appendChild(s);
        var d = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        d.setAttribute("points", r.play.polygon.points), d.setAttribute("style", r.play.polygon.style), s.appendChild(d);
        var p = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        p.setAttribute("width", r.play.rect.width + "px"), p.setAttribute("height", r.play.rect.height + "px"), p.setAttribute("x", r.play.rect.x + "px"), p.setAttribute("y", r.play.rect.y + "px"), p.setAttribute("style", r.play.rect.style), p.style.display = "none", s.appendChild(p);
        var f = document.createElement("div");
        for (event of (f.setAttribute("style", "box-sizing: content-box; background-color: #ffffff; position: absolute; right: 15px; top: 15px; opacity: 0.8; border-radius: 5px; font-size: 11px; font-family: Helvetica, sans-serif; overflow: hidden; white-space: nowrap; cursor: default;"), f.style.width = e.width - r.play.width - 70 + "px" || "250px", f.style.padding = "7px 10px", f.style.height = "14px", f.innerHTML = e.autoplay ? "Loading..." : "Listen to " + e["station-name"], n.appendChild(f), s.addEventListener("click", function (e) {
            0 == i.paused ? i.pause() : i.play()
        }), i.addEventListener("playing", function (t) {
            p.style.display = "block", d.style.display = "none", f.className = "marquee", f.innerHTML = "You're tuned into " + e["station-name"]
        }), ["suspend", "pause"])) i.addEventListener(event, function (e) {
            d.style.display = "block", p.style.display = "none", f.className = "", f.innerHTML = "Paused..."
        });
        var c = document.createElement("div");
        c.setAttribute("style", "position: absolute; bottom: 18px; right: 15px; cursor: pointer; height: 10px; background-color: " + r.volume.backgroundcolor + "; border-radius: 5px;"), c.className = "volume", c.style.width = e.width - r.play.width - 50 + "px" || "250px", c.innerHTML = '<span style="display:block; height:10px; position:absolute; top:0; left:0; background-color: ' + r.volume.barbackgroundcolor + '; z-index:10; width: 90%; border-radius: 5px;" class="volumeBar"></span>', n.appendChild(c);

        var u = function (e, t) {
            var o, r = document.getElementsByClassName("volume");
            t ? o = 100 * t : o = 100 * (e - r[0].getBoundingClientRect().left) / r[0].offsetWidth;
            o > 100 && (o = 100);
            o < 0 && (o = 0);
            document.getElementsByClassName("volumeBar")[0].style.width = o + "%";
            i.volume = o / 100;
        };

        var g = !1;

        c.addEventListener("mousedown", function (e) {
            g = !0, i.muted = !1;u(e.pageX)
        }), c.addEventListener("mouseup", function (e) {
            g && (g = !1, u(e.pageX))
        }), c.addEventListener("mousemove", function (e) {
            g && u(e.pageX)
        }), o.parentNode.insertBefore(n, o.nextSibling)
    }
};