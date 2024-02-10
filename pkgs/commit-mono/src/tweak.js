var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// opentype.min.js
var require_opentype_min = __commonJS({
  "opentype.min.js"(exports2, module2) {
    var opentype2 = (() => {
      var Wt = Object.defineProperty;
      var Co = Object.getOwnPropertyDescriptor;
      var Lo = Object.getOwnPropertyNames;
      var Ro = Object.prototype.hasOwnProperty;
      var jt = ((e2) => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e2, { get: (t, n) => (typeof require != "undefined" ? require : t)[n] }) : e2)(function(e2) {
        if (typeof require != "undefined")
          return require.apply(this, arguments);
        throw Error('Dynamic require of "' + e2 + '" is not supported');
      });
      var Eo = (e2, t) => {
        for (var n in t)
          Wt(e2, n, { get: t[n], enumerable: true });
      }, wo = (e2, t, n, s) => {
        if (t && typeof t == "object" || typeof t == "function")
          for (let o of Lo(t))
            !Ro.call(e2, o) && o !== n && Wt(e2, o, { get: () => t[o], enumerable: !(s = Co(t, o)) || s.enumerable });
        return e2;
      };
      var Do = (e2) => wo(Wt({}, "__esModule", { value: true }), e2);
      var xc = {};
      Eo(xc, { BoundingBox: () => je, Font: () => Fn, Glyph: () => Be, Path: () => le, _parse: () => x, load: () => gc, loadSync: () => yc, parse: () => Un });
      var Yt = 0, Rn = -3;
      function We() {
        this.table = new Uint16Array(16), this.trans = new Uint16Array(288);
      }
      function Io(e2, t) {
        this.source = e2, this.sourceIndex = 0, this.tag = 0, this.bitcount = 0, this.dest = t, this.destLen = 0, this.ltree = new We(), this.dtree = new We();
      }
      var En = new We(), wn = new We(), Zt = new Uint8Array(30), $t = new Uint16Array(30), Dn = new Uint8Array(30), In = new Uint16Array(30), Ao = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), On = new We(), he = new Uint8Array(288 + 32);
      function An(e2, t, n, s) {
        var o, r;
        for (o = 0; o < n; ++o)
          e2[o] = 0;
        for (o = 0; o < 30 - n; ++o)
          e2[o + n] = o / n | 0;
        for (r = s, o = 0; o < 30; ++o)
          t[o] = r, r += 1 << e2[o];
      }
      function Mo(e2, t) {
        var n;
        for (n = 0; n < 7; ++n)
          e2.table[n] = 0;
        for (e2.table[7] = 24, e2.table[8] = 152, e2.table[9] = 112, n = 0; n < 24; ++n)
          e2.trans[n] = 256 + n;
        for (n = 0; n < 144; ++n)
          e2.trans[24 + n] = n;
        for (n = 0; n < 8; ++n)
          e2.trans[24 + 144 + n] = 280 + n;
        for (n = 0; n < 112; ++n)
          e2.trans[24 + 144 + 8 + n] = 144 + n;
        for (n = 0; n < 5; ++n)
          t.table[n] = 0;
        for (t.table[5] = 32, n = 0; n < 32; ++n)
          t.trans[n] = n;
      }
      var Cn = new Uint16Array(16);
      function qt(e2, t, n, s) {
        var o, r;
        for (o = 0; o < 16; ++o)
          e2.table[o] = 0;
        for (o = 0; o < s; ++o)
          e2.table[t[n + o]]++;
        for (e2.table[0] = 0, r = 0, o = 0; o < 16; ++o)
          Cn[o] = r, r += e2.table[o];
        for (o = 0; o < s; ++o)
          t[n + o] && (e2.trans[Cn[t[n + o]]++] = o);
      }
      function Po(e2) {
        e2.bitcount-- || (e2.tag = e2.source[e2.sourceIndex++], e2.bitcount = 7);
        var t = e2.tag & 1;
        return e2.tag >>>= 1, t;
      }
      function de(e2, t, n) {
        if (!t)
          return n;
        for (; e2.bitcount < 24; )
          e2.tag |= e2.source[e2.sourceIndex++] << e2.bitcount, e2.bitcount += 8;
        var s = e2.tag & 65535 >>> 16 - t;
        return e2.tag >>>= t, e2.bitcount -= t, s + n;
      }
      function Xt(e2, t) {
        for (; e2.bitcount < 24; )
          e2.tag |= e2.source[e2.sourceIndex++] << e2.bitcount, e2.bitcount += 8;
        var n = 0, s = 0, o = 0, r = e2.tag;
        do
          s = 2 * s + (r & 1), r >>>= 1, ++o, n += t.table[o], s -= t.table[o];
        while (s >= 0);
        return e2.tag = r, e2.bitcount -= o, t.trans[n + s];
      }
      function Bo(e2, t, n) {
        var s, o, r, i, a, c;
        for (s = de(e2, 5, 257), o = de(e2, 5, 1), r = de(e2, 4, 4), i = 0; i < 19; ++i)
          he[i] = 0;
        for (i = 0; i < r; ++i) {
          var l = de(e2, 3, 0);
          he[Ao[i]] = l;
        }
        for (qt(On, he, 0, 19), a = 0; a < s + o; ) {
          var u = Xt(e2, On);
          switch (u) {
            case 16:
              var p = he[a - 1];
              for (c = de(e2, 2, 3); c; --c)
                he[a++] = p;
              break;
            case 17:
              for (c = de(e2, 3, 3); c; --c)
                he[a++] = 0;
              break;
            case 18:
              for (c = de(e2, 7, 11); c; --c)
                he[a++] = 0;
              break;
            default:
              he[a++] = u;
              break;
          }
        }
        qt(t, he, 0, s), qt(n, he, s, o);
      }
      function Ln(e2, t, n) {
        for (; ; ) {
          var s = Xt(e2, t);
          if (s === 256)
            return Yt;
          if (s < 256)
            e2.dest[e2.destLen++] = s;
          else {
            var o, r, i, a;
            for (s -= 257, o = de(e2, Zt[s], $t[s]), r = Xt(e2, n), i = e2.destLen - de(e2, Dn[r], In[r]), a = i; a < i + o; ++a)
              e2.dest[e2.destLen++] = e2.dest[a];
          }
        }
      }
      function Go(e2) {
        for (var t, n, s; e2.bitcount > 8; )
          e2.sourceIndex--, e2.bitcount -= 8;
        if (t = e2.source[e2.sourceIndex + 1], t = 256 * t + e2.source[e2.sourceIndex], n = e2.source[e2.sourceIndex + 3], n = 256 * n + e2.source[e2.sourceIndex + 2], t !== (~n & 65535))
          return Rn;
        for (e2.sourceIndex += 4, s = t; s; --s)
          e2.dest[e2.destLen++] = e2.source[e2.sourceIndex++];
        return e2.bitcount = 0, Yt;
      }
      function Mn(e2, t) {
        var n = new Io(e2, t), s, o, r;
        do {
          switch (s = Po(n), o = de(n, 2, 0), o) {
            case 0:
              r = Go(n);
              break;
            case 1:
              r = Ln(n, En, wn);
              break;
            case 2:
              Bo(n, n.ltree, n.dtree), r = Ln(n, n.ltree, n.dtree);
              break;
            default:
              r = Rn;
          }
          if (r !== Yt)
            throw new Error("Data error");
        } while (!s);
        return n.destLen < n.dest.length ? typeof n.dest.slice == "function" ? n.dest.slice(0, n.destLen) : n.dest.subarray(0, n.destLen) : n.dest;
      }
      Mo(En, wn);
      An(Zt, $t, 4, 3);
      An(Dn, In, 2, 1);
      Zt[28] = 0;
      $t[28] = 258;
      function Ae(e2, t, n, s, o) {
        return Math.pow(1 - o, 3) * e2 + 3 * Math.pow(1 - o, 2) * o * t + 3 * (1 - o) * Math.pow(o, 2) * n + Math.pow(o, 3) * s;
      }
      function Le() {
        this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN;
      }
      Le.prototype.isEmpty = function() {
        return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2);
      };
      Le.prototype.addPoint = function(e2, t) {
        typeof e2 == "number" && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = e2, this.x2 = e2), e2 < this.x1 && (this.x1 = e2), e2 > this.x2 && (this.x2 = e2)), typeof t == "number" && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = t, this.y2 = t), t < this.y1 && (this.y1 = t), t > this.y2 && (this.y2 = t));
      };
      Le.prototype.addX = function(e2) {
        this.addPoint(e2, null);
      };
      Le.prototype.addY = function(e2) {
        this.addPoint(null, e2);
      };
      Le.prototype.addBezier = function(e2, t, n, s, o, r, i, a) {
        let c = [e2, t], l = [n, s], u = [o, r], p = [i, a];
        this.addPoint(e2, t), this.addPoint(i, a);
        for (let f = 0; f <= 1; f++) {
          let h = 6 * c[f] - 12 * l[f] + 6 * u[f], m = -3 * c[f] + 9 * l[f] - 9 * u[f] + 3 * p[f], b = 3 * l[f] - 3 * c[f];
          if (m === 0) {
            if (h === 0)
              continue;
            let L = -b / h;
            0 < L && L < 1 && (f === 0 && this.addX(Ae(c[f], l[f], u[f], p[f], L)), f === 1 && this.addY(Ae(c[f], l[f], u[f], p[f], L)));
            continue;
          }
          let y = Math.pow(h, 2) - 4 * b * m;
          if (y < 0)
            continue;
          let O = (-h + Math.sqrt(y)) / (2 * m);
          0 < O && O < 1 && (f === 0 && this.addX(Ae(c[f], l[f], u[f], p[f], O)), f === 1 && this.addY(Ae(c[f], l[f], u[f], p[f], O)));
          let k = (-h - Math.sqrt(y)) / (2 * m);
          0 < k && k < 1 && (f === 0 && this.addX(Ae(c[f], l[f], u[f], p[f], k)), f === 1 && this.addY(Ae(c[f], l[f], u[f], p[f], k)));
        }
      };
      Le.prototype.addQuad = function(e2, t, n, s, o, r) {
        let i = e2 + 0.6666666666666666 * (n - e2), a = t + 2 / 3 * (s - t), c = i + 1 / 3 * (o - e2), l = a + 1 / 3 * (r - t);
        this.addBezier(e2, t, i, a, c, l, o, r);
      };
      var je = Le;
      function j() {
        this.commands = [], this.fill = "black", this.stroke = null, this.strokeWidth = 1;
      }
      function lt(e2, t) {
        return +(Math.round(e2 + "e+" + t) + "e-" + t);
      }
      function Pn(e2) {
        let t = [[]];
        for (let n = 0; n < e2.length; n += 1) {
          let s = t[t.length - 1], o = e2[n], r = s[0], i = s[1], a = s[s.length - 1];
          s.push(o), o.type === "Z" ? (r && i && a && r.type === "M" && i.type === "L" && a.type === "L" && a.x === r.x && a.y === r.y && (s.shift(), s[0].type = "M"), n + 1 < e2.length && t.push([])) : o.type === "L" && a && a.x === o.x && a.y === o.y && s.pop();
        }
        return e2 = [].concat.apply([], t), e2;
      }
      function No(e2) {
        return Object.assign({}, { decimalPlaces: 2, optimize: true, flipY: true, flipYBase: void 0, scale: 1, x: 0, y: 0 }, e2);
      }
      function Ho(e2) {
        return parseInt(e2) === e2 && (e2 = { decimalPlaces: e2, flipY: false }), Object.assign({}, { decimalPlaces: 2, optimize: true, flipY: true, flipYBase: void 0 }, e2);
      }
      j.prototype.fromSVG = function(e2, t = {}) {
        typeof SVGPathElement != "undefined" && e2 instanceof SVGPathElement && (e2 = e2.getAttribute("d")), t = No(t), this.commands = [];
        let n = "0123456789", s = "MmLlQqCcZzHhVv", o = "SsTtAa", r = "-+", i = {}, a = [""], c = false;
        function l(m) {
          return m.filter((b) => b.length).map((b) => {
            let y = parseFloat(b);
            return (t.decimalPlaces || t.decimalPlaces === 0) && (y = lt(y, t.decimalPlaces)), y;
          });
        }
        function u(m) {
          if (!this.commands.length)
            return m;
          let b = this.commands[this.commands.length - 1];
          for (let y = 0; y < m.length; y++)
            m[y] += b[y & 1 ? "y" : "x"];
          return m;
        }
        function p() {
          if (i.type === void 0)
            return;
          let m = i.type.toUpperCase(), b = m !== "Z" && i.type.toUpperCase() !== i.type, y = l(a);
          if (a = [""], !y.length && m !== "Z")
            return;
          b && m !== "H" && m !== "V" && (y = u.apply(this, [y]));
          let O = this.commands.length && this.commands[this.commands.length - 1].x || 0, k = this.commands.length && this.commands[this.commands.length - 1].y || 0;
          switch (m) {
            case "M":
              this.moveTo(...y);
              break;
            case "L":
              this.lineTo(...y);
              break;
            case "V":
              for (let L = 0; L < y.length; L++) {
                let D = 0;
                b && (D = this.commands.length && this.commands[this.commands.length - 1].y || 0), this.lineTo(O, y[L] + D);
              }
              break;
            case "H":
              for (let L = 0; L < y.length; L++) {
                let D = 0;
                b && (D = this.commands.length && this.commands[this.commands.length - 1].x || 0), this.lineTo(y[L] + D, k);
              }
              break;
            case "C":
              this.bezierCurveTo(...y);
              break;
            case "Q":
              this.quadraticCurveTo(...y);
              break;
            case "Z":
              (this.commands.length < 1 || this.commands[this.commands.length - 1].type !== "Z") && this.close();
              break;
          }
          if (this.commands.length)
            for (let L in this.commands[this.commands.length - 1])
              this.commands[this.commands.length - 1][L] === void 0 && (this.commands[this.commands.length - 1][L] = 0);
        }
        for (let m = 0; m < e2.length; m++) {
          let b = e2.charAt(m), y = a[a.length - 1];
          if (n.indexOf(b) > -1)
            a[a.length - 1] += b;
          else if (r.indexOf(b) > -1)
            if (!i.type && !this.commands.length && (i.type = "L"), b === "-")
              !i.type || y.indexOf("-") > 0 ? c = true : y.length ? a.push("-") : a[a.length - 1] = b;
            else if (!i.type || y.length > 0)
              c = true;
            else
              continue;
          else if (s.indexOf(b) > -1)
            i.type ? (p.apply(this), i = { type: b }) : i.type = b;
          else {
            if (o.indexOf(b) > -1)
              throw new Error("Unsupported path command: " + b + ". Currently supported commands are " + s.split("").join(", ") + ".");
            ` ,	
\r\f\v`.indexOf(b) > -1 ? a.push("") : b === "." ? !i.type || y.indexOf(b) > -1 ? c = true : a[a.length - 1] += b : c = true;
          }
          if (c)
            throw new Error("Unexpected character: " + b + " at offset " + m);
        }
        p.apply(this), t.optimize && (this.commands = Pn(this.commands));
        let f = t.flipY, h = t.flipYBase;
        if (f === true && t.flipYBase === void 0) {
          let m = this.getBoundingBox();
          h = m.y1 + m.y2;
        }
        for (let m in this.commands) {
          let b = this.commands[m];
          for (let y in b)
            ["x", "x1", "x2"].includes(y) ? this.commands[m][y] = t.x + b[y] * t.scale : ["y", "y1", "y2"].includes(y) && (this.commands[m][y] = t.y + (f ? h - b[y] : b[y]) * t.scale);
        }
        return this;
      };
      j.fromSVG = function(e2, t) {
        return new j().fromSVG(e2, t);
      };
      j.prototype.moveTo = function(e2, t) {
        this.commands.push({ type: "M", x: e2, y: t });
      };
      j.prototype.lineTo = function(e2, t) {
        this.commands.push({ type: "L", x: e2, y: t });
      };
      j.prototype.curveTo = j.prototype.bezierCurveTo = function(e2, t, n, s, o, r) {
        this.commands.push({ type: "C", x1: e2, y1: t, x2: n, y2: s, x: o, y: r });
      };
      j.prototype.quadTo = j.prototype.quadraticCurveTo = function(e2, t, n, s) {
        this.commands.push({ type: "Q", x1: e2, y1: t, x: n, y: s });
      };
      j.prototype.close = j.prototype.closePath = function() {
        this.commands.push({ type: "Z" });
      };
      j.prototype.extend = function(e2) {
        if (e2.commands)
          e2 = e2.commands;
        else if (e2 instanceof je) {
          let t = e2;
          this.moveTo(t.x1, t.y1), this.lineTo(t.x2, t.y1), this.lineTo(t.x2, t.y2), this.lineTo(t.x1, t.y2), this.close();
          return;
        }
        Array.prototype.push.apply(this.commands, e2);
      };
      j.prototype.getBoundingBox = function() {
        let e2 = new je(), t = 0, n = 0, s = 0, o = 0;
        for (let r = 0; r < this.commands.length; r++) {
          let i = this.commands[r];
          switch (i.type) {
            case "M":
              e2.addPoint(i.x, i.y), t = s = i.x, n = o = i.y;
              break;
            case "L":
              e2.addPoint(i.x, i.y), s = i.x, o = i.y;
              break;
            case "Q":
              e2.addQuad(s, o, i.x1, i.y1, i.x, i.y), s = i.x, o = i.y;
              break;
            case "C":
              e2.addBezier(s, o, i.x1, i.y1, i.x2, i.y2, i.x, i.y), s = i.x, o = i.y;
              break;
            case "Z":
              s = t, o = n;
              break;
            default:
              throw new Error("Unexpected path command " + i.type);
          }
        }
        return e2.isEmpty() && e2.addPoint(0, 0), e2;
      };
      j.prototype.draw = function(e2) {
        e2.beginPath();
        for (let t = 0; t < this.commands.length; t += 1) {
          let n = this.commands[t];
          n.type === "M" ? e2.moveTo(n.x, n.y) : n.type === "L" ? e2.lineTo(n.x, n.y) : n.type === "C" ? e2.bezierCurveTo(n.x1, n.y1, n.x2, n.y2, n.x, n.y) : n.type === "Q" ? e2.quadraticCurveTo(n.x1, n.y1, n.x, n.y) : n.type === "Z" && e2.closePath();
        }
        this.fill && (e2.fillStyle = this.fill, e2.fill()), this.stroke && (e2.strokeStyle = this.stroke, e2.lineWidth = this.strokeWidth, e2.stroke());
      };
      j.prototype.toPathData = function(e2) {
        e2 = Ho(e2);
        function t(a) {
          return Math.round(a) === lt(a, e2.decimalPlaces) ? "" + lt(a, e2.decimalPlaces) : lt(a, e2.decimalPlaces).toFixed(e2.decimalPlaces);
        }
        function n() {
          let a = "";
          for (let c = 0; c < arguments.length; c += 1) {
            let l = arguments[c];
            l >= 0 && c > 0 && (a += " "), a += t(l);
          }
          return a;
        }
        let s = this.commands;
        e2.optimize && (s = JSON.parse(JSON.stringify(this.commands)), s = Pn(s));
        let o = e2.flipY, r = e2.flipYBase;
        if (o === true && r === void 0) {
          let a = new j();
          a.extend(s);
          let c = a.getBoundingBox();
          r = c.y1 + c.y2;
        }
        let i = "";
        for (let a = 0; a < s.length; a += 1) {
          let c = s[a];
          c.type === "M" ? i += "M" + n(c.x, o ? r - c.y : c.y) : c.type === "L" ? i += "L" + n(c.x, o ? r - c.y : c.y) : c.type === "C" ? i += "C" + n(c.x1, o ? r - c.y1 : c.y1, c.x2, o ? r - c.y2 : c.y2, c.x, o ? r - c.y : c.y) : c.type === "Q" ? i += "Q" + n(c.x1, o ? r - c.y1 : c.y1, c.x, o ? r - c.y : c.y) : c.type === "Z" && (i += "Z");
        }
        return i;
      };
      j.prototype.toSVG = function(e2, t) {
        t || (t = this.toPathData(e2));
        let n = '<path d="';
        return n += t, n += '"', this.fill !== void 0 && this.fill !== "black" && (this.fill === null ? n += ' fill="none"' : n += ' fill="' + this.fill + '"'), this.stroke && (n += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"'), n += "/>", n;
      };
      j.prototype.toDOMElement = function(e2, t) {
        t || (t = this.toPathData(e2));
        let n = t, s = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return s.setAttribute("d", n), this.fill !== void 0 && this.fill !== "black" && (this.fill === null ? s.setAttribute("fill", "none") : s.setAttribute("fill", this.fill)), this.stroke && (s.setAttribute("stroke", this.stroke), s.setAttribute("stroke-width", this.strokeWidth)), s;
      };
      var le = j;
      function Gn(e2) {
        throw new Error(e2);
      }
      function Bn(e2, t) {
        e2 || Gn(t);
      }
      var S = { fail: Gn, argument: Bn, assert: Bn };
      var Nn = 32768, Hn = 2147483648, Vo = -32768, zo = 32768 - 1 + 1 / 65536, Te = {}, v = {}, U = {};
      function ce(e2) {
        return function() {
          return e2;
        };
      }
      v.BYTE = function(e2) {
        return S.argument(e2 >= 0 && e2 <= 255, "Byte value should be between 0 and 255."), [e2];
      };
      U.BYTE = ce(1);
      v.CHAR = function(e2) {
        return [e2.charCodeAt(0)];
      };
      U.CHAR = ce(1);
      v.CHARARRAY = function(e2) {
        typeof e2 == "undefined" && (e2 = "", console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));
        let t = [];
        for (let n = 0; n < e2.length; n += 1)
          t[n] = e2.charCodeAt(n);
        return t;
      };
      U.CHARARRAY = function(e2) {
        return typeof e2 == "undefined" ? 0 : e2.length;
      };
      v.USHORT = function(e2) {
        return [e2 >> 8 & 255, e2 & 255];
      };
      U.USHORT = ce(2);
      v.SHORT = function(e2) {
        return e2 >= Nn && (e2 = -(2 * Nn - e2)), [e2 >> 8 & 255, e2 & 255];
      };
      U.SHORT = ce(2);
      v.UINT24 = function(e2) {
        return [e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255];
      };
      U.UINT24 = ce(3);
      v.ULONG = function(e2) {
        return [e2 >> 24 & 255, e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255];
      };
      U.ULONG = ce(4);
      v.LONG = function(e2) {
        return e2 >= Hn && (e2 = -(2 * Hn - e2)), [e2 >> 24 & 255, e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255];
      };
      U.LONG = ce(4);
      v.FLOAT = function(e2) {
        if (e2 > zo || e2 < Vo)
          throw new Error(`Value ${e2} is outside the range of representable values in 16.16 format`);
        let t = Math.round(e2 * 65536) << 0;
        return v.ULONG(t);
      };
      U.FLOAT = U.ULONG;
      v.FIXED = v.ULONG;
      U.FIXED = U.ULONG;
      v.FWORD = v.SHORT;
      U.FWORD = U.SHORT;
      v.UFWORD = v.USHORT;
      U.UFWORD = U.USHORT;
      v.F2DOT14 = function(e2) {
        return v.USHORT(e2 * 16384);
      };
      U.F2DOT14 = U.USHORT;
      v.LONGDATETIME = function(e2) {
        return [0, 0, 0, 0, e2 >> 24 & 255, e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255];
      };
      U.LONGDATETIME = ce(8);
      v.TAG = function(e2) {
        return S.argument(e2.length === 4, "Tag should be exactly 4 ASCII characters."), [e2.charCodeAt(0), e2.charCodeAt(1), e2.charCodeAt(2), e2.charCodeAt(3)];
      };
      U.TAG = ce(4);
      v.Card8 = v.BYTE;
      U.Card8 = U.BYTE;
      v.Card16 = v.USHORT;
      U.Card16 = U.USHORT;
      v.OffSize = v.BYTE;
      U.OffSize = U.BYTE;
      v.SID = v.USHORT;
      U.SID = U.USHORT;
      v.NUMBER = function(e2) {
        return e2 >= -107 && e2 <= 107 ? [e2 + 139] : e2 >= 108 && e2 <= 1131 ? (e2 = e2 - 108, [(e2 >> 8) + 247, e2 & 255]) : e2 >= -1131 && e2 <= -108 ? (e2 = -e2 - 108, [(e2 >> 8) + 251, e2 & 255]) : e2 >= -32768 && e2 <= 32767 ? v.NUMBER16(e2) : v.NUMBER32(e2);
      };
      U.NUMBER = function(e2) {
        return v.NUMBER(e2).length;
      };
      v.NUMBER16 = function(e2) {
        return [28, e2 >> 8 & 255, e2 & 255];
      };
      U.NUMBER16 = ce(3);
      v.NUMBER32 = function(e2) {
        return [29, e2 >> 24 & 255, e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255];
      };
      U.NUMBER32 = ce(5);
      v.REAL = function(e2) {
        let t = e2.toString(), n = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);
        if (n) {
          let r = parseFloat("1e" + ((n[2] ? +n[2] : 0) + n[1].length));
          t = (Math.round(e2 * r) / r).toString();
        }
        let s = "";
        for (let r = 0, i = t.length; r < i; r += 1) {
          let a = t[r];
          a === "e" ? s += t[++r] === "-" ? "c" : "b" : a === "." ? s += "a" : a === "-" ? s += "e" : s += a;
        }
        s += s.length & 1 ? "f" : "ff";
        let o = [30];
        for (let r = 0, i = s.length; r < i; r += 2)
          o.push(parseInt(s.substr(r, 2), 16));
        return o;
      };
      U.REAL = function(e2) {
        return v.REAL(e2).length;
      };
      v.NAME = v.CHARARRAY;
      U.NAME = U.CHARARRAY;
      v.STRING = v.CHARARRAY;
      U.STRING = U.CHARARRAY;
      Te.UTF8 = function(e2, t, n) {
        let s = [], o = n;
        for (let r = 0; r < o; r++, t += 1)
          s[r] = e2.getUint8(t);
        return String.fromCharCode.apply(null, s);
      };
      Te.UTF16 = function(e2, t, n) {
        let s = [], o = n / 2;
        for (let r = 0; r < o; r++, t += 2)
          s[r] = e2.getUint16(t);
        return String.fromCharCode.apply(null, s);
      };
      v.UTF16 = function(e2) {
        let t = [];
        for (let n = 0; n < e2.length; n += 1) {
          let s = e2.charCodeAt(n);
          t[t.length] = s >> 8 & 255, t[t.length] = s & 255;
        }
        return t;
      };
      U.UTF16 = function(e2) {
        return e2.length * 2;
      };
      var Kt = { "x-mac-croatian": "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\u0160\u2122\xB4\xA8\u2260\u017D\xD8\u221E\xB1\u2264\u2265\u2206\xB5\u2202\u2211\u220F\u0161\u222B\xAA\xBA\u03A9\u017E\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u0106\xAB\u010C\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u0110\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\uF8FF\xA9\u2044\u20AC\u2039\u203A\xC6\xBB\u2013\xB7\u201A\u201E\u2030\xC2\u0107\xC1\u010D\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u0111\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u03C0\xCB\u02DA\xB8\xCA\xE6\u02C7", "x-mac-cyrillic": "\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042A\u042B\u042C\u042D\u042E\u042F\u2020\xB0\u0490\xA3\xA7\u2022\xB6\u0406\xAE\xA9\u2122\u0402\u0452\u2260\u0403\u0453\u221E\xB1\u2264\u2265\u0456\xB5\u0491\u0408\u0404\u0454\u0407\u0457\u0409\u0459\u040A\u045A\u0458\u0405\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\u040B\u045B\u040C\u045C\u0455\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u201E\u040E\u045E\u040F\u045F\u2116\u0401\u0451\u044F\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043A\u043B\u043C\u043D\u043E\u043F\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044A\u044B\u044C\u044D\u044E", "x-mac-gaelic": "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u1E02\xB1\u2264\u2265\u1E03\u010A\u010B\u1E0A\u1E0B\u1E1E\u1E1F\u0120\u0121\u1E40\xE6\xF8\u1E41\u1E56\u1E57\u027C\u0192\u017F\u1E60\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\u1E61\u1E9B\xFF\u0178\u1E6A\u20AC\u2039\u203A\u0176\u0177\u1E6B\xB7\u1EF2\u1EF3\u204A\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u2663\xD2\xDA\xDB\xD9\u0131\xDD\xFD\u0174\u0175\u1E84\u1E85\u1E80\u1E81\u1E82\u1E83", "x-mac-greek": "\xC4\xB9\xB2\xC9\xB3\xD6\xDC\u0385\xE0\xE2\xE4\u0384\xA8\xE7\xE9\xE8\xEA\xEB\xA3\u2122\xEE\xEF\u2022\xBD\u2030\xF4\xF6\xA6\u20AC\xF9\xFB\xFC\u2020\u0393\u0394\u0398\u039B\u039E\u03A0\xDF\xAE\xA9\u03A3\u03AA\xA7\u2260\xB0\xB7\u0391\xB1\u2264\u2265\xA5\u0392\u0395\u0396\u0397\u0399\u039A\u039C\u03A6\u03AB\u03A8\u03A9\u03AC\u039D\xAC\u039F\u03A1\u2248\u03A4\xAB\xBB\u2026\xA0\u03A5\u03A7\u0386\u0388\u0153\u2013\u2015\u201C\u201D\u2018\u2019\xF7\u0389\u038A\u038C\u038E\u03AD\u03AE\u03AF\u03CC\u038F\u03CD\u03B1\u03B2\u03C8\u03B4\u03B5\u03C6\u03B3\u03B7\u03B9\u03BE\u03BA\u03BB\u03BC\u03BD\u03BF\u03C0\u03CE\u03C1\u03C3\u03C4\u03B8\u03C9\u03C2\u03C7\u03C5\u03B6\u03CA\u03CB\u0390\u03B0\xAD", "x-mac-icelandic": "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\xDD\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\xD0\xF0\xDE\xFE\xFD\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7", "x-mac-inuit": "\u1403\u1404\u1405\u1406\u140A\u140B\u1431\u1432\u1433\u1434\u1438\u1439\u1449\u144E\u144F\u1450\u1451\u1455\u1456\u1466\u146D\u146E\u146F\u1470\u1472\u1473\u1483\u148B\u148C\u148D\u148E\u1490\u1491\xB0\u14A1\u14A5\u14A6\u2022\xB6\u14A7\xAE\xA9\u2122\u14A8\u14AA\u14AB\u14BB\u14C2\u14C3\u14C4\u14C5\u14C7\u14C8\u14D0\u14EF\u14F0\u14F1\u14F2\u14F4\u14F5\u1505\u14D5\u14D6\u14D7\u14D8\u14DA\u14DB\u14EA\u1528\u1529\u152A\u152B\u152D\u2026\xA0\u152E\u153E\u1555\u1556\u1557\u2013\u2014\u201C\u201D\u2018\u2019\u1558\u1559\u155A\u155D\u1546\u1547\u1548\u1549\u154B\u154C\u1550\u157F\u1580\u1581\u1582\u1583\u1584\u1585\u158F\u1590\u1591\u1592\u1593\u1594\u1595\u1671\u1672\u1673\u1674\u1675\u1676\u1596\u15A0\u15A1\u15A2\u15A3\u15A4\u15A5\u15A6\u157C\u0141\u0142", "x-mac-ce": "\xC4\u0100\u0101\xC9\u0104\xD6\xDC\xE1\u0105\u010C\xE4\u010D\u0106\u0107\xE9\u0179\u017A\u010E\xED\u010F\u0112\u0113\u0116\xF3\u0117\xF4\xF6\xF5\xFA\u011A\u011B\xFC\u2020\xB0\u0118\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\u0119\xA8\u2260\u0123\u012E\u012F\u012A\u2264\u2265\u012B\u0136\u2202\u2211\u0142\u013B\u013C\u013D\u013E\u0139\u013A\u0145\u0146\u0143\xAC\u221A\u0144\u0147\u2206\xAB\xBB\u2026\xA0\u0148\u0150\xD5\u0151\u014C\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\u014D\u0154\u0155\u0158\u2039\u203A\u0159\u0156\u0157\u0160\u201A\u201E\u0161\u015A\u015B\xC1\u0164\u0165\xCD\u017D\u017E\u016A\xD3\xD4\u016B\u016E\xDA\u016F\u0170\u0171\u0172\u0173\xDD\xFD\u0137\u017B\u0141\u017C\u0122\u02C7", macintosh: "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\u2039\u203A\uFB01\uFB02\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7", "x-mac-romanian": "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\u0102\u0218\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\u0103\u0219\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\u2039\u203A\u021A\u021B\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7", "x-mac-turkish": "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u011E\u011F\u0130\u0131\u015E\u015F\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\uF8A0\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7" };
      Te.MACSTRING = function(e2, t, n, s) {
        let o = Kt[s];
        if (o === void 0)
          return;
        let r = "";
        for (let i = 0; i < n; i++) {
          let a = e2.getUint8(t + i);
          a <= 127 ? r += String.fromCharCode(a) : r += o[a & 127];
        }
        return r;
      };
      var ct = typeof WeakMap == "function" && /* @__PURE__ */ new WeakMap(), ut, _o = function(e2) {
        if (!ut) {
          ut = {};
          for (let o in Kt)
            ut[o] = new String(o);
        }
        let t = ut[e2];
        if (t === void 0)
          return;
        if (ct) {
          let o = ct.get(t);
          if (o !== void 0)
            return o;
        }
        let n = Kt[e2];
        if (n === void 0)
          return;
        let s = {};
        for (let o = 0; o < n.length; o++)
          s[n.charCodeAt(o)] = o + 128;
        return ct && ct.set(t, s), s;
      };
      v.MACSTRING = function(e2, t) {
        let n = _o(t);
        if (n === void 0)
          return;
        let s = [];
        for (let o = 0; o < e2.length; o++) {
          let r = e2.charCodeAt(o);
          if (r >= 128 && (r = n[r], r === void 0))
            return;
          s[o] = r;
        }
        return s;
      };
      U.MACSTRING = function(e2, t) {
        let n = v.MACSTRING(e2, t);
        return n !== void 0 ? n.length : 0;
      };
      function Qt(e2) {
        return e2 >= -128 && e2 <= 127;
      }
      function Wo(e2, t, n) {
        let s = 0, o = e2.length;
        for (; t < o && s < 64 && e2[t] === 0; )
          ++t, ++s;
        return n.push(128 | s - 1), t;
      }
      function jo(e2, t, n) {
        let s = 0, o = e2.length, r = t;
        for (; r < o && s < 64; ) {
          let i = e2[r];
          if (!Qt(i) || i === 0 && r + 1 < o && e2[r + 1] === 0)
            break;
          ++r, ++s;
        }
        n.push(s - 1);
        for (let i = t; i < r; ++i)
          n.push(e2[i] + 256 & 255);
        return r;
      }
      function qo(e2, t, n) {
        let s = 0, o = e2.length, r = t;
        for (; r < o && s < 64; ) {
          let i = e2[r];
          if (i === 0 || Qt(i) && r + 1 < o && Qt(e2[r + 1]))
            break;
          ++r, ++s;
        }
        n.push(64 | s - 1);
        for (let i = t; i < r; ++i) {
          let a = e2[i];
          n.push(a + 65536 >> 8 & 255, a + 256 & 255);
        }
        return r;
      }
      v.VARDELTAS = function(e2) {
        let t = 0, n = [];
        for (; t < e2.length; ) {
          let s = e2[t];
          s === 0 ? t = Wo(e2, t, n) : s >= -128 && s <= 127 ? t = jo(e2, t, n) : t = qo(e2, t, n);
        }
        return n;
      };
      v.INDEX = function(e2) {
        let t = 1, n = [t], s = [];
        for (let a = 0; a < e2.length; a += 1) {
          let c = v.OBJECT(e2[a]);
          Array.prototype.push.apply(s, c), t += c.length, n.push(t);
        }
        if (s.length === 0)
          return [0, 0];
        let o = [], r = 1 + Math.floor(Math.log(t) / Math.log(2)) / 8 | 0, i = [void 0, v.BYTE, v.USHORT, v.UINT24, v.ULONG][r];
        for (let a = 0; a < n.length; a += 1) {
          let c = i(n[a]);
          Array.prototype.push.apply(o, c);
        }
        return Array.prototype.concat(v.Card16(e2.length), v.OffSize(r), o, s);
      };
      U.INDEX = function(e2) {
        return v.INDEX(e2).length;
      };
      v.DICT = function(e2) {
        let t = [], n = Object.keys(e2), s = n.length;
        for (let o = 0; o < s; o += 1) {
          let r = parseInt(n[o], 0), i = e2[r], a = v.OPERAND(i.value, i.type), c = v.OPERATOR(r);
          for (let l = 0; l < a.length; l++)
            t.push(a[l]);
          for (let l = 0; l < c.length; l++)
            t.push(c[l]);
        }
        return t;
      };
      U.DICT = function(e2) {
        return v.DICT(e2).length;
      };
      v.OPERATOR = function(e2) {
        return e2 < 1200 ? [e2] : [12, e2 - 1200];
      };
      v.OPERAND = function(e2, t) {
        let n = [];
        if (Array.isArray(t))
          for (let s = 0; s < t.length; s += 1) {
            S.argument(e2.length === t.length, "Not enough arguments given for type" + t);
            let o = v.OPERAND(e2[s], t[s]);
            for (let r = 0; r < o.length; r++)
              n.push(o[r]);
          }
        else if (t === "SID") {
          let s = v.NUMBER(e2);
          for (let o = 0; o < s.length; o++)
            n.push(s[o]);
        } else if (t === "offset") {
          let s = v.NUMBER32(e2);
          for (let o = 0; o < s.length; o++)
            n.push(s[o]);
        } else if (t === "number") {
          let s = v.NUMBER(e2);
          for (let o = 0; o < s.length; o++)
            n.push(s[o]);
        } else if (t === "real") {
          let s = v.REAL(e2);
          for (let o = 0; o < s.length; o++)
            n.push(s[o]);
        } else
          throw new Error("Unknown operand type " + t);
        return n;
      };
      v.OP = v.BYTE;
      U.OP = U.BYTE;
      var pt = typeof WeakMap == "function" && /* @__PURE__ */ new WeakMap();
      v.CHARSTRING = function(e2) {
        if (pt) {
          let s = pt.get(e2);
          if (s !== void 0)
            return s;
        }
        let t = [], n = e2.length;
        for (let s = 0; s < n; s += 1) {
          let o = e2[s], r = v[o.type](o.value);
          for (let i = 0; i < r.length; i++)
            t.push(r[i]);
        }
        return pt && pt.set(e2, t), t;
      };
      U.CHARSTRING = function(e2) {
        return v.CHARSTRING(e2).length;
      };
      v.OBJECT = function(e2) {
        let t = v[e2.type];
        return S.argument(t !== void 0, "No encoding function for type " + e2.type), t(e2.value);
      };
      U.OBJECT = function(e2) {
        let t = U[e2.type];
        return S.argument(t !== void 0, "No sizeOf function for type " + e2.type), t(e2.value);
      };
      v.TABLE = function(e2) {
        let t = [], n = (e2.fields || []).length, s = [], o = [];
        for (let r = 0; r < n; r += 1) {
          let i = e2.fields[r], a = v[i.type];
          S.argument(a !== void 0, "No encoding function for field type " + i.type + " (" + i.name + ")");
          let c = e2[i.name];
          c === void 0 && (c = i.value);
          let l = a(c);
          if (i.type === "TABLE")
            c.fields !== null && (o.push(t.length), s.push(l)), t.push(0, 0);
          else
            for (let u = 0; u < l.length; u++)
              t.push(l[u]);
        }
        for (let r = 0; r < s.length; r += 1) {
          let i = o[r], a = t.length;
          S.argument(a < 65536, "Table " + e2.tableName + " too big."), t[i] = a >> 8, t[i + 1] = a & 255;
          for (let c = 0; c < s[r].length; c++)
            t.push(s[r][c]);
        }
        return t;
      };
      U.TABLE = function(e2) {
        let t = 0, n = (e2.fields || []).length;
        for (let s = 0; s < n; s += 1) {
          let o = e2.fields[s], r = U[o.type];
          S.argument(r !== void 0, "No sizeOf function for field type " + o.type + " (" + o.name + ")");
          let i = e2[o.name];
          i === void 0 && (i = o.value), t += r(i), o.type === "TABLE" && (t += 2);
        }
        return t;
      };
      v.RECORD = v.TABLE;
      U.RECORD = U.TABLE;
      v.LITERAL = function(e2) {
        return e2;
      };
      U.LITERAL = function(e2) {
        return e2.length;
      };
      function V(e2, t, n) {
        if (t && t.length)
          for (let s = 0; s < t.length; s += 1) {
            let o = t[s];
            this[o.name] = o.value;
          }
        if (this.tableName = e2, this.fields = t, n) {
          let s = Object.keys(n);
          for (let o = 0; o < s.length; o += 1) {
            let r = s[o], i = n[r];
            this[r] !== void 0 && (this[r] = i);
          }
        }
      }
      V.prototype.encode = function() {
        return v.TABLE(this);
      };
      V.prototype.sizeOf = function() {
        return U.TABLE(this);
      };
      function Me(e2, t, n) {
        n === void 0 && (n = t.length);
        let s = new Array(t.length + 1);
        s[0] = { name: e2 + "Count", type: "USHORT", value: n };
        for (let o = 0; o < t.length; o++)
          s[o + 1] = { name: e2 + o, type: "USHORT", value: t[o] };
        return s;
      }
      function Jt(e2, t, n) {
        let s = t.length, o = new Array(s + 1);
        o[0] = { name: e2 + "Count", type: "USHORT", value: s };
        for (let r = 0; r < s; r++)
          o[r + 1] = { name: e2 + r, type: "TABLE", value: n(t[r], r) };
        return o;
      }
      function Pe(e2, t, n) {
        let s = t.length, o = [];
        o[0] = { name: e2 + "Count", type: "USHORT", value: s };
        for (let r = 0; r < s; r++)
          o = o.concat(n(t[r], r));
        return o;
      }
      function ft(e2) {
        e2.format === 1 ? V.call(this, "coverageTable", [{ name: "coverageFormat", type: "USHORT", value: 1 }].concat(Me("glyph", e2.glyphs))) : e2.format === 2 ? V.call(this, "coverageTable", [{ name: "coverageFormat", type: "USHORT", value: 2 }].concat(Pe("rangeRecord", e2.ranges, function(t, n) {
          return [{ name: "startGlyphID" + n, type: "USHORT", value: t.start }, { name: "endGlyphID" + n, type: "USHORT", value: t.end }, { name: "startCoverageIndex" + n, type: "USHORT", value: t.index }];
        }))) : S.assert(false, "Coverage format must be 1 or 2.");
      }
      ft.prototype = Object.create(V.prototype);
      ft.prototype.constructor = ft;
      function ht(e2) {
        V.call(this, "scriptListTable", Pe("scriptRecord", e2, function(t, n) {
          let s = t.script, o = s.defaultLangSys;
          return S.assert(!!o, "Unable to write GSUB: script " + t.tag + " has no default language system."), [{ name: "scriptTag" + n, type: "TAG", value: t.tag }, { name: "script" + n, type: "TABLE", value: new V("scriptTable", [{ name: "defaultLangSys", type: "TABLE", value: new V("defaultLangSys", [{ name: "lookupOrder", type: "USHORT", value: 0 }, { name: "reqFeatureIndex", type: "USHORT", value: o.reqFeatureIndex }].concat(Me("featureIndex", o.featureIndexes))) }].concat(Pe("langSys", s.langSysRecords, function(r, i) {
            let a = r.langSys;
            return [{ name: "langSysTag" + i, type: "TAG", value: r.tag }, { name: "langSys" + i, type: "TABLE", value: new V("langSys", [{ name: "lookupOrder", type: "USHORT", value: 0 }, { name: "reqFeatureIndex", type: "USHORT", value: a.reqFeatureIndex }].concat(Me("featureIndex", a.featureIndexes))) }];
          }))) }];
        }));
      }
      ht.prototype = Object.create(V.prototype);
      ht.prototype.constructor = ht;
      function dt(e2) {
        V.call(this, "featureListTable", Pe("featureRecord", e2, function(t, n) {
          let s = t.feature;
          return [{ name: "featureTag" + n, type: "TAG", value: t.tag }, { name: "feature" + n, type: "TABLE", value: new V("featureTable", [{ name: "featureParams", type: "USHORT", value: s.featureParams }].concat(Me("lookupListIndex", s.lookupListIndexes))) }];
        }));
      }
      dt.prototype = Object.create(V.prototype);
      dt.prototype.constructor = dt;
      function mt(e2, t) {
        V.call(this, "lookupListTable", Jt("lookup", e2, function(n) {
          let s = t[n.lookupType];
          return S.assert(!!s, "Unable to write GSUB lookup type " + n.lookupType + " tables."), new V("lookupTable", [{ name: "lookupType", type: "USHORT", value: n.lookupType }, { name: "lookupFlag", type: "USHORT", value: n.lookupFlag }].concat(Jt("subtable", n.subtables, s)));
        }));
      }
      mt.prototype = Object.create(V.prototype);
      mt.prototype.constructor = mt;
      function gt(e2) {
        e2.format === 1 ? V.call(this, "classDefTable", [{ name: "classFormat", type: "USHORT", value: 1 }, { name: "startGlyphID", type: "USHORT", value: e2.startGlyph }].concat(Me("glyph", e2.classes))) : e2.format === 2 ? V.call(this, "classDefTable", [{ name: "classFormat", type: "USHORT", value: 2 }].concat(Pe("rangeRecord", e2.ranges, function(t, n) {
          return [{ name: "startGlyphID" + n, type: "USHORT", value: t.start }, { name: "endGlyphID" + n, type: "USHORT", value: t.end }, { name: "class" + n, type: "USHORT", value: t.classId }];
        }))) : S.assert(false, "Class format must be 1 or 2.");
      }
      gt.prototype = Object.create(V.prototype);
      gt.prototype.constructor = gt;
      var g = { Table: V, Record: V, Coverage: ft, ClassDef: gt, ScriptList: ht, FeatureList: dt, LookupList: mt, ushortList: Me, tableList: Jt, recordList: Pe };
      function Vn(e2, t) {
        return e2.getUint8(t);
      }
      function yt(e2, t) {
        return e2.getUint16(t, false);
      }
      function Xo(e2, t) {
        return e2.getInt16(t, false);
      }
      function Wn(e2, t) {
        return (e2.getUint16(t) << 8) + e2.getUint8(t + 2);
      }
      function en(e2, t) {
        return e2.getUint32(t, false);
      }
      function jn(e2, t) {
        let n = e2.getInt16(t, false), s = e2.getUint16(t + 2, false);
        return n + s / 65535;
      }
      function Yo(e2, t) {
        let n = "";
        for (let s = t; s < t + 4; s += 1)
          n += String.fromCharCode(e2.getInt8(s));
        return n;
      }
      function Zo(e2, t, n) {
        let s = 0;
        for (let o = 0; o < n; o += 1)
          s <<= 8, s += e2.getUint8(t + o);
        return s;
      }
      function $o(e2, t, n) {
        let s = [];
        for (let o = t; o < n; o += 1)
          s.push(e2.getUint8(o));
        return s;
      }
      function Ko(e2) {
        let t = "";
        for (let n = 0; n < e2.length; n += 1)
          t += String.fromCharCode(e2[n]);
        return t;
      }
      var Qo = { byte: 1, uShort: 2, short: 2, uInt24: 3, uLong: 4, fixed: 4, longDateTime: 8, tag: 4 }, zn = { LONG_WORDS: 32768, WORD_DELTA_COUNT_MASK: 32767 };
      function d(e2, t) {
        this.data = e2, this.offset = t, this.relativeOffset = 0;
      }
      d.prototype.parseByte = function() {
        let e2 = this.data.getUint8(this.offset + this.relativeOffset);
        return this.relativeOffset += 1, e2;
      };
      d.prototype.parseChar = function() {
        let e2 = this.data.getInt8(this.offset + this.relativeOffset);
        return this.relativeOffset += 1, e2;
      };
      d.prototype.parseCard8 = d.prototype.parseByte;
      d.prototype.parseUShort = function() {
        let e2 = this.data.getUint16(this.offset + this.relativeOffset);
        return this.relativeOffset += 2, e2;
      };
      d.prototype.parseCard16 = d.prototype.parseUShort;
      d.prototype.parseSID = d.prototype.parseUShort;
      d.prototype.parseOffset16 = d.prototype.parseUShort;
      d.prototype.parseShort = function() {
        let e2 = this.data.getInt16(this.offset + this.relativeOffset);
        return this.relativeOffset += 2, e2;
      };
      d.prototype.parseF2Dot14 = function() {
        let e2 = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
        return this.relativeOffset += 2, e2;
      };
      d.prototype.parseUInt24 = function() {
        let e2 = Wn(this.data, this.offset + this.relativeOffset);
        return this.relativeOffset += 3, e2;
      };
      d.prototype.parseULong = function() {
        let e2 = en(this.data, this.offset + this.relativeOffset);
        return this.relativeOffset += 4, e2;
      };
      d.prototype.parseOffset32 = d.prototype.parseULong;
      d.prototype.parseFixed = function() {
        let e2 = jn(this.data, this.offset + this.relativeOffset);
        return this.relativeOffset += 4, e2;
      };
      d.prototype.parseString = function(e2) {
        let t = this.data, n = this.offset + this.relativeOffset, s = "";
        this.relativeOffset += e2;
        for (let o = 0; o < e2; o++)
          s += String.fromCharCode(t.getUint8(n + o));
        return s;
      };
      d.prototype.parseTag = function() {
        return this.parseString(4);
      };
      d.prototype.parseLongDateTime = function() {
        let e2 = en(this.data, this.offset + this.relativeOffset + 4);
        return e2 -= 2082844800, this.relativeOffset += 8, e2;
      };
      d.prototype.parseVersion = function(e2) {
        let t = yt(this.data, this.offset + this.relativeOffset), n = yt(this.data, this.offset + this.relativeOffset + 2);
        return this.relativeOffset += 4, e2 === void 0 && (e2 = 4096), t + n / e2 / 10;
      };
      d.prototype.skip = function(e2, t) {
        t === void 0 && (t = 1), this.relativeOffset += Qo[e2] * t;
      };
      d.prototype.parseULongList = function(e2) {
        e2 === void 0 && (e2 = this.parseULong());
        let t = new Array(e2), n = this.data, s = this.offset + this.relativeOffset;
        for (let o = 0; o < e2; o++)
          t[o] = n.getUint32(s), s += 4;
        return this.relativeOffset += e2 * 4, t;
      };
      d.prototype.parseOffset16List = d.prototype.parseUShortList = function(e2) {
        e2 === void 0 && (e2 = this.parseUShort());
        let t = new Array(e2), n = this.data, s = this.offset + this.relativeOffset;
        for (let o = 0; o < e2; o++)
          t[o] = n.getUint16(s), s += 2;
        return this.relativeOffset += e2 * 2, t;
      };
      d.prototype.parseShortList = function(e2) {
        let t = new Array(e2), n = this.data, s = this.offset + this.relativeOffset;
        for (let o = 0; o < e2; o++)
          t[o] = n.getInt16(s), s += 2;
        return this.relativeOffset += e2 * 2, t;
      };
      d.prototype.parseByteList = function(e2) {
        let t = new Array(e2), n = this.data, s = this.offset + this.relativeOffset;
        for (let o = 0; o < e2; o++)
          t[o] = n.getUint8(s++);
        return this.relativeOffset += e2, t;
      };
      d.prototype.parseList = function(e2, t) {
        t || (t = e2, e2 = this.parseUShort());
        let n = new Array(e2);
        for (let s = 0; s < e2; s++)
          n[s] = t.call(this);
        return n;
      };
      d.prototype.parseList32 = function(e2, t) {
        t || (t = e2, e2 = this.parseULong());
        let n = new Array(e2);
        for (let s = 0; s < e2; s++)
          n[s] = t.call(this);
        return n;
      };
      d.prototype.parseRecordList = function(e2, t) {
        t || (t = e2, e2 = this.parseUShort());
        let n = new Array(e2), s = Object.keys(t);
        for (let o = 0; o < e2; o++) {
          let r = {};
          for (let i = 0; i < s.length; i++) {
            let a = s[i], c = t[a];
            r[a] = c.call(this);
          }
          n[o] = r;
        }
        return n;
      };
      d.prototype.parseRecordList32 = function(e2, t) {
        t || (t = e2, e2 = this.parseULong());
        let n = new Array(e2), s = Object.keys(t);
        for (let o = 0; o < e2; o++) {
          let r = {};
          for (let i = 0; i < s.length; i++) {
            let a = s[i], c = t[a];
            r[a] = c.call(this);
          }
          n[o] = r;
        }
        return n;
      };
      d.prototype.parseStruct = function(e2) {
        if (typeof e2 == "function")
          return e2.call(this);
        {
          let t = Object.keys(e2), n = {};
          for (let s = 0; s < t.length; s++) {
            let o = t[s], r = e2[o];
            n[o] = r.call(this);
          }
          return n;
        }
      };
      d.prototype.parseValueRecord = function(e2) {
        if (e2 === void 0 && (e2 = this.parseUShort()), e2 === 0)
          return;
        let t = {};
        return e2 & 1 && (t.xPlacement = this.parseShort()), e2 & 2 && (t.yPlacement = this.parseShort()), e2 & 4 && (t.xAdvance = this.parseShort()), e2 & 8 && (t.yAdvance = this.parseShort()), e2 & 16 && (t.xPlaDevice = void 0, this.parseShort()), e2 & 32 && (t.yPlaDevice = void 0, this.parseShort()), e2 & 64 && (t.xAdvDevice = void 0, this.parseShort()), e2 & 128 && (t.yAdvDevice = void 0, this.parseShort()), t;
      };
      d.prototype.parseValueRecordList = function() {
        let e2 = this.parseUShort(), t = this.parseUShort(), n = new Array(t);
        for (let s = 0; s < t; s++)
          n[s] = this.parseValueRecord(e2);
        return n;
      };
      d.prototype.parsePointer = function(e2) {
        let t = this.parseOffset16();
        if (t > 0)
          return new d(this.data, this.offset + t).parseStruct(e2);
      };
      d.prototype.parsePointer32 = function(e2) {
        let t = this.parseOffset32();
        if (t > 0)
          return new d(this.data, this.offset + t).parseStruct(e2);
      };
      d.prototype.parseListOfLists = function(e2) {
        let t = this.parseOffset16List(), n = t.length, s = this.relativeOffset, o = new Array(n);
        for (let r = 0; r < n; r++) {
          let i = t[r];
          if (i === 0) {
            o[r] = void 0;
            continue;
          }
          if (this.relativeOffset = i, e2) {
            let a = this.parseOffset16List(), c = new Array(a.length);
            for (let l = 0; l < a.length; l++)
              this.relativeOffset = i + a[l], c[l] = e2.call(this);
            o[r] = c;
          } else
            o[r] = this.parseUShortList();
        }
        return this.relativeOffset = s, o;
      };
      d.prototype.parseCoverage = function() {
        let e2 = this.offset + this.relativeOffset, t = this.parseUShort(), n = this.parseUShort();
        if (t === 1)
          return { format: 1, glyphs: this.parseUShortList(n) };
        if (t === 2) {
          let s = new Array(n);
          for (let o = 0; o < n; o++)
            s[o] = { start: this.parseUShort(), end: this.parseUShort(), index: this.parseUShort() };
          return { format: 2, ranges: s };
        }
        throw new Error("0x" + e2.toString(16) + ": Coverage format must be 1 or 2.");
      };
      d.prototype.parseClassDef = function() {
        let e2 = this.offset + this.relativeOffset, t = this.parseUShort();
        return t === 1 ? { format: 1, startGlyph: this.parseUShort(), classes: this.parseUShortList() } : t === 2 ? { format: 2, ranges: this.parseRecordList({ start: d.uShort, end: d.uShort, classId: d.uShort }) } : (console.warn(`0x${e2.toString(16)}: This font file uses an invalid ClassDef format of ${t}. It might be corrupted and should be reacquired if it doesn't display as intended.`), { format: t });
      };
      d.list = function(e2, t) {
        return function() {
          return this.parseList(e2, t);
        };
      };
      d.list32 = function(e2, t) {
        return function() {
          return this.parseList32(e2, t);
        };
      };
      d.recordList = function(e2, t) {
        return function() {
          return this.parseRecordList(e2, t);
        };
      };
      d.recordList32 = function(e2, t) {
        return function() {
          return this.parseRecordList32(e2, t);
        };
      };
      d.pointer = function(e2) {
        return function() {
          return this.parsePointer(e2);
        };
      };
      d.pointer32 = function(e2) {
        return function() {
          return this.parsePointer32(e2);
        };
      };
      d.tag = d.prototype.parseTag;
      d.byte = d.prototype.parseByte;
      d.uShort = d.offset16 = d.prototype.parseUShort;
      d.uShortList = d.prototype.parseUShortList;
      d.uInt24 = d.prototype.parseUInt24;
      d.uLong = d.offset32 = d.prototype.parseULong;
      d.uLongList = d.prototype.parseULongList;
      d.fixed = d.prototype.parseFixed;
      d.f2Dot14 = d.prototype.parseF2Dot14;
      d.struct = d.prototype.parseStruct;
      d.coverage = d.prototype.parseCoverage;
      d.classDef = d.prototype.parseClassDef;
      var _n = { reserved: d.uShort, reqFeatureIndex: d.uShort, featureIndexes: d.uShortList };
      d.prototype.parseScriptList = function() {
        return this.parsePointer(d.recordList({ tag: d.tag, script: d.pointer({ defaultLangSys: d.pointer(_n), langSysRecords: d.recordList({ tag: d.tag, langSys: d.pointer(_n) }) }) })) || [];
      };
      d.prototype.parseFeatureList = function() {
        return this.parsePointer(d.recordList({ tag: d.tag, feature: d.pointer({ featureParams: d.offset16, lookupListIndexes: d.uShortList }) })) || [];
      };
      d.prototype.parseLookupList = function(e2) {
        return this.parsePointer(d.list(d.pointer(function() {
          let t = this.parseUShort();
          S.argument(1 <= t && t <= 9, "GPOS/GSUB lookup type " + t + " unknown.");
          let n = this.parseUShort(), s = n & 16;
          return { lookupType: t, lookupFlag: n, subtables: this.parseList(d.pointer(e2[t])), markFilteringSet: s ? this.parseUShort() : void 0 };
        }))) || [];
      };
      d.prototype.parseFeatureVariationsList = function() {
        return this.parsePointer32(function() {
          let e2 = this.parseUShort(), t = this.parseUShort();
          return S.argument(e2 === 1 && t < 1, "GPOS/GSUB feature variations table unknown."), this.parseRecordList32({ conditionSetOffset: d.offset32, featureTableSubstitutionOffset: d.offset32 });
        }) || [];
      };
      d.prototype.parseVariationStore = function() {
        let e2 = this.relativeOffset, t = this.parseUShort(), n = { itemVariationStore: this.parseItemVariationStore() };
        return this.relativeOffset = e2 + t + 2, n;
      };
      d.prototype.parseItemVariationStore = function() {
        let e2 = this.relativeOffset, t = { format: this.parseUShort(), variationRegions: [], itemVariationSubtables: [] }, n = this.parseOffset32(), s = this.parseUShort(), o = this.parseULongList(s);
        this.relativeOffset = e2 + n, t.variationRegions = this.parseVariationRegionList();
        for (let r = 0; r < s; r++) {
          let i = o[r];
          this.relativeOffset = e2 + i, t.itemVariationSubtables.push(this.parseItemVariationSubtable());
        }
        return t;
      };
      d.prototype.parseVariationRegionList = function() {
        let e2 = this.parseUShort(), t = this.parseUShort();
        return this.parseRecordList(t, { regionAxes: d.recordList(e2, { startCoord: d.f2Dot14, peakCoord: d.f2Dot14, endCoord: d.f2Dot14 }) });
      };
      d.prototype.parseItemVariationSubtable = function() {
        let e2 = this.parseUShort(), t = this.parseUShort();
        return { regionIndexes: this.parseUShortList(), deltaSets: this.parseDeltaSets(e2, t) };
      };
      d.prototype.parseDeltaSets = function(e2, t) {
        let n = [], s = t & zn.LONG_WORDS, o = t & zn.WORD_DELTA_COUNT_MASK, r = (s ? this.parseULong : this.parseUShort).bind(this), i = (s ? this.parseUShort : this.parseByte).bind(this);
        for (let a = 0; a < e2; a++) {
          let c = a < o ? r : i;
          n.push(c());
        }
        return n;
      };
      var x = { getByte: Vn, getCard8: Vn, getUShort: yt, getCard16: yt, getShort: Xo, getUInt24: Wn, getULong: en, getFixed: jn, getTag: Yo, getOffset: Zo, getBytes: $o, bytesToString: Ko, Parser: d };
      function Jo(e2, t) {
        t.parseUShort(), e2.length = t.parseULong(), e2.language = t.parseULong();
        let n;
        e2.groupCount = n = t.parseULong(), e2.glyphIndexMap = {};
        for (let s = 0; s < n; s += 1) {
          let o = t.parseULong(), r = t.parseULong(), i = t.parseULong();
          for (let a = o; a <= r; a += 1)
            e2.glyphIndexMap[a] = i, i++;
        }
      }
      function er(e2, t, n, s, o) {
        e2.length = t.parseUShort(), e2.language = t.parseUShort();
        let r;
        e2.segCount = r = t.parseUShort() >> 1, t.skip("uShort", 3), e2.glyphIndexMap = {};
        let i = new x.Parser(n, s + o + 14), a = new x.Parser(n, s + o + 16 + r * 2), c = new x.Parser(n, s + o + 16 + r * 4), l = new x.Parser(n, s + o + 16 + r * 6), u = s + o + 16 + r * 8;
        for (let p = 0; p < r - 1; p += 1) {
          let f, h = i.parseUShort(), m = a.parseUShort(), b = c.parseShort(), y = l.parseUShort();
          for (let O = m; O <= h; O += 1)
            y !== 0 ? (u = l.offset + l.relativeOffset - 2, u += y, u += (O - m) * 2, f = x.getUShort(n, u), f !== 0 && (f = f + b & 65535)) : f = O + b & 65535, e2.glyphIndexMap[O] = f;
        }
      }
      function tr(e2, t) {
        let n = {};
        t.skip("uLong");
        let s = t.parseULong();
        for (let o = 0; o < s; o += 1) {
          let r = t.parseUInt24(), i = { varSelector: r }, a = t.parseOffset32(), c = t.parseOffset32(), l = t.relativeOffset;
          a && (t.relativeOffset = a, i.defaultUVS = t.parseStruct({ ranges: function() {
            return t.parseRecordList32({ startUnicodeValue: t.parseUInt24, additionalCount: t.parseByte });
          } })), c && (t.relativeOffset = c, i.nonDefaultUVS = t.parseStruct({ uvsMappings: function() {
            let u = {}, p = t.parseRecordList32({ unicodeValue: t.parseUInt24, glyphID: t.parseUShort });
            for (let f = 0; f < p.length; f += 1)
              u[p[f].unicodeValue] = p[f];
            return u;
          } })), n[r] = i, t.relativeOffset = l;
        }
        e2.varSelectorList = n;
      }
      function nr(e2, t) {
        let n = {};
        n.version = x.getUShort(e2, t), S.argument(n.version === 0, "cmap table version should be 0."), n.numTables = x.getUShort(e2, t + 2);
        let s = null, o = -1, r = -1;
        for (let a = n.numTables - 1; a >= 0; a -= 1) {
          let c = x.getUShort(e2, t + 4 + a * 8), l = x.getUShort(e2, t + 4 + a * 8 + 2);
          if (c === 3 && (l === 0 || l === 1 || l === 10) || c === 0 && (l === 0 || l === 1 || l === 2 || l === 3 || l === 4)) {
            if (r = x.getULong(e2, t + 4 + a * 8 + 4), s)
              break;
          } else
            c === 0 && l === 5 && (o = x.getULong(e2, t + 4 + a * 8 + 4), s = new x.Parser(e2, t + o), s.parseUShort() !== 14 && (o = -1, s = null));
        }
        if (r === -1)
          throw new Error("No valid cmap sub-tables found.");
        let i = new x.Parser(e2, t + r);
        if (n.format = i.parseUShort(), n.format === 12)
          Jo(n, i);
        else if (n.format === 4)
          er(n, i, e2, t, r);
        else
          throw new Error("Only format 4, 12 and 14 cmap tables are supported (found format " + n.format + ").");
        return s && tr(n, s), n;
      }
      function sr(e2, t, n) {
        e2.segments.push({ end: t, start: t, delta: -(t - n), offset: 0, glyphIndex: n });
      }
      function or(e2) {
        e2.segments.push({ end: 65535, start: 65535, delta: 1, offset: 0 });
      }
      function rr(e2) {
        let t = true, n;
        for (n = e2.length - 1; n > 0; n -= 1)
          if (e2.get(n).unicode > 65535) {
            console.log("Adding CMAP format 12 (needed!)"), t = false;
            break;
          }
        let s = [{ name: "version", type: "USHORT", value: 0 }, { name: "numTables", type: "USHORT", value: t ? 1 : 2 }, { name: "platformID", type: "USHORT", value: 3 }, { name: "encodingID", type: "USHORT", value: 1 }, { name: "offset", type: "ULONG", value: t ? 12 : 12 + 8 }];
        t || (s = s.concat([{ name: "cmap12PlatformID", type: "USHORT", value: 3 }, { name: "cmap12EncodingID", type: "USHORT", value: 10 }, { name: "cmap12Offset", type: "ULONG", value: 0 }])), s = s.concat([{ name: "format", type: "USHORT", value: 4 }, { name: "cmap4Length", type: "USHORT", value: 0 }, { name: "language", type: "USHORT", value: 0 }, { name: "segCountX2", type: "USHORT", value: 0 }, { name: "searchRange", type: "USHORT", value: 0 }, { name: "entrySelector", type: "USHORT", value: 0 }, { name: "rangeShift", type: "USHORT", value: 0 }]);
        let o = new g.Table("cmap", s);
        for (o.segments = [], n = 0; n < e2.length; n += 1) {
          let h = e2.get(n);
          for (let m = 0; m < h.unicodes.length; m += 1)
            sr(o, h.unicodes[m], n);
          o.segments = o.segments.sort(function(m, b) {
            return m.start - b.start;
          });
        }
        or(o);
        let r = o.segments.length, i = 0, a = [], c = [], l = [], u = [], p = [], f = [];
        for (n = 0; n < r; n += 1) {
          let h = o.segments[n];
          h.end <= 65535 && h.start <= 65535 ? (a = a.concat({ name: "end_" + n, type: "USHORT", value: h.end }), c = c.concat({ name: "start_" + n, type: "USHORT", value: h.start }), l = l.concat({ name: "idDelta_" + n, type: "SHORT", value: h.delta }), u = u.concat({ name: "idRangeOffset_" + n, type: "USHORT", value: h.offset }), h.glyphId !== void 0 && (p = p.concat({ name: "glyph_" + n, type: "USHORT", value: h.glyphId }))) : i += 1, !t && h.glyphIndex !== void 0 && (f = f.concat({ name: "cmap12Start_" + n, type: "ULONG", value: h.start }), f = f.concat({ name: "cmap12End_" + n, type: "ULONG", value: h.end }), f = f.concat({ name: "cmap12Glyph_" + n, type: "ULONG", value: h.glyphIndex }));
        }
        if (o.segCountX2 = (r - i) * 2, o.searchRange = Math.pow(2, Math.floor(Math.log(r - i) / Math.log(2))) * 2, o.entrySelector = Math.log(o.searchRange / 2) / Math.log(2), o.rangeShift = o.segCountX2 - o.searchRange, o.fields = o.fields.concat(a), o.fields.push({ name: "reservedPad", type: "USHORT", value: 0 }), o.fields = o.fields.concat(c), o.fields = o.fields.concat(l), o.fields = o.fields.concat(u), o.fields = o.fields.concat(p), o.cmap4Length = 14 + a.length * 2 + 2 + c.length * 2 + l.length * 2 + u.length * 2 + p.length * 2, !t) {
          let h = 16 + f.length * 4;
          o.cmap12Offset = 12 + 2 * 2 + 4 + o.cmap4Length, o.fields = o.fields.concat([{ name: "cmap12Format", type: "USHORT", value: 12 }, { name: "cmap12Reserved", type: "USHORT", value: 0 }, { name: "cmap12Length", type: "ULONG", value: h }, { name: "cmap12Language", type: "ULONG", value: 0 }, { name: "cmap12nGroups", type: "ULONG", value: f.length / 3 }]), o.fields = o.fields.concat(f);
        }
        return o;
      }
      var xt = { parse: nr, make: rr };
      var qe = [".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash", "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash", "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe", "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth", "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar", "degree", "thorn", "threequarters", "twosuperior", "registered", "minus", "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex", "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute", "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve", "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave", "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis", "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex", "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave", "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde", "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute", "ydieresis", "zcaron", "exclamsmall", "Hungarumlautsmall", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "266 ff", "onedotenleader", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle", "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash", "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall", "001.000", "001.001", "001.002", "001.003", "Black", "Bold", "Book", "Light", "Medium", "Regular", "Roman", "Semibold"], qn = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "", "endash", "dagger", "daggerdbl", "periodcentered", "", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "", "questiondown", "", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "", "ring", "cedilla", "", "hungarumlaut", "ogonek", "caron", "emdash", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AE", "", "ordfeminine", "", "", "", "", "Lslash", "Oslash", "OE", "ordmasculine", "", "", "", "", "", "ae", "", "", "", "dotlessi", "", "", "lslash", "oslash", "oe", "germandbls"], Xn = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "", "", "isuperior", "", "", "lsuperior", "msuperior", "nsuperior", "osuperior", "", "", "rsuperior", "ssuperior", "tsuperior", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdownsmall", "centoldstyle", "Lslashsmall", "", "", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "", "Dotaccentsmall", "", "", "Macronsmall", "", "", "figuredash", "hypheninferior", "", "", "Ogoneksmall", "Ringsmall", "Cedillasmall", "", "", "", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"], ke = [".notdef", ".null", "nonmarkingreturn", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "Adieresis", "Aring", "Ccedilla", "Eacute", "Ntilde", "Odieresis", "Udieresis", "aacute", "agrave", "acircumflex", "adieresis", "atilde", "aring", "ccedilla", "eacute", "egrave", "ecircumflex", "edieresis", "iacute", "igrave", "icircumflex", "idieresis", "ntilde", "oacute", "ograve", "ocircumflex", "odieresis", "otilde", "uacute", "ugrave", "ucircumflex", "udieresis", "dagger", "degree", "cent", "sterling", "section", "bullet", "paragraph", "germandbls", "registered", "copyright", "trademark", "acute", "dieresis", "notequal", "AE", "Oslash", "infinity", "plusminus", "lessequal", "greaterequal", "yen", "mu", "partialdiff", "summation", "product", "pi", "integral", "ordfeminine", "ordmasculine", "Omega", "ae", "oslash", "questiondown", "exclamdown", "logicalnot", "radical", "florin", "approxequal", "Delta", "guillemotleft", "guillemotright", "ellipsis", "nonbreakingspace", "Agrave", "Atilde", "Otilde", "OE", "oe", "endash", "emdash", "quotedblleft", "quotedblright", "quoteleft", "quoteright", "divide", "lozenge", "ydieresis", "Ydieresis", "fraction", "currency", "guilsinglleft", "guilsinglright", "fi", "fl", "daggerdbl", "periodcentered", "quotesinglbase", "quotedblbase", "perthousand", "Acircumflex", "Ecircumflex", "Aacute", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Oacute", "Ocircumflex", "apple", "Ograve", "Uacute", "Ucircumflex", "Ugrave", "dotlessi", "circumflex", "tilde", "macron", "breve", "dotaccent", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "Lslash", "lslash", "Scaron", "scaron", "Zcaron", "zcaron", "brokenbar", "Eth", "eth", "Yacute", "yacute", "Thorn", "thorn", "minus", "multiply", "onesuperior", "twosuperior", "threesuperior", "onehalf", "onequarter", "threequarters", "franc", "Gbreve", "gbreve", "Idotaccent", "Scedilla", "scedilla", "Cacute", "cacute", "Ccaron", "ccaron", "dcroat"];
      function tn(e2) {
        this.font = e2;
      }
      tn.prototype.charToGlyphIndex = function(e2) {
        let t = e2.codePointAt(0), n = this.font.glyphs;
        if (n)
          for (let s = 0; s < n.length; s += 1) {
            let o = n.get(s);
            for (let r = 0; r < o.unicodes.length; r += 1)
              if (o.unicodes[r] === t)
                return s;
          }
        return null;
      };
      function nn(e2) {
        this.cmap = e2;
      }
      nn.prototype.charToGlyphIndex = function(e2) {
        return this.cmap.glyphIndexMap[e2.codePointAt(0)] || 0;
      };
      function Xe(e2, t) {
        this.encoding = e2, this.charset = t;
      }
      Xe.prototype.charToGlyphIndex = function(e2) {
        let t = e2.codePointAt(0), n = this.encoding[t];
        return this.charset.indexOf(n);
      };
      function bt(e2) {
        switch (e2.version) {
          case 1:
            this.names = ke.slice();
            break;
          case 2:
            this.names = new Array(e2.numberOfGlyphs);
            for (let t = 0; t < e2.numberOfGlyphs; t++)
              e2.glyphNameIndex[t] < ke.length ? this.names[t] = ke[e2.glyphNameIndex[t]] : this.names[t] = e2.names[e2.glyphNameIndex[t] - ke.length];
            break;
          case 2.5:
            this.names = new Array(e2.numberOfGlyphs);
            for (let t = 0; t < e2.numberOfGlyphs; t++)
              this.names[t] = ke[t + e2.glyphNameIndex[t]];
            break;
          case 3:
            this.names = [];
            break;
          default:
            this.names = [];
            break;
        }
      }
      bt.prototype.nameToGlyphIndex = function(e2) {
        return this.names.indexOf(e2);
      };
      bt.prototype.glyphIndexToName = function(e2) {
        return this.names[e2];
      };
      function ir(e2) {
        let t, n = e2.tables.cmap.glyphIndexMap, s = Object.keys(n);
        for (let o = 0; o < s.length; o += 1) {
          let r = s[o], i = n[r];
          t = e2.glyphs.get(i), t.addUnicode(parseInt(r));
        }
        for (let o = 0; o < e2.glyphs.length; o += 1)
          t = e2.glyphs.get(o), e2.cffEncoding ? e2.isCIDFont ? t.name = "gid" + o : t.name = e2.cffEncoding.charset[o] : e2.glyphNames.names && (t.name = e2.glyphNames.glyphIndexToName(o));
      }
      function ar(e2) {
        e2._IndexToUnicodeMap = {};
        let t = e2.tables.cmap.glyphIndexMap, n = Object.keys(t);
        for (let s = 0; s < n.length; s += 1) {
          let o = n[s], r = t[o];
          e2._IndexToUnicodeMap[r] === void 0 ? e2._IndexToUnicodeMap[r] = { unicodes: [parseInt(o)] } : e2._IndexToUnicodeMap[r].unicodes.push(parseInt(o));
        }
      }
      function Yn(e2, t) {
        t.lowMemory ? ar(e2) : ir(e2);
      }
      function lr(e2, t, n, s, o) {
        e2.beginPath(), e2.moveTo(t, n), e2.lineTo(s, o), e2.stroke();
      }
      var Fe = { line: lr };
      function cr(e2, t) {
        let n = t || new le();
        return { configurable: true, get: function() {
          return typeof n == "function" && (n = n()), n;
        }, set: function(s) {
          n = s;
        } };
      }
      function Q(e2) {
        this.bindConstructorValues(e2);
      }
      Q.prototype.bindConstructorValues = function(e2) {
        if (this.index = e2.index || 0, e2.name === ".notdef" ? e2.unicode = void 0 : e2.name === ".null" && (e2.unicode = 0), e2.unicode === 0 && e2.name !== ".null")
          throw new Error('The unicode value "0" is reserved for the glyph name ".null" and cannot be used by any other glyph.');
        this.name = e2.name || null, this.unicode = e2.unicode, this.unicodes = e2.unicodes || (e2.unicode !== void 0 ? [e2.unicode] : []), "xMin" in e2 && (this.xMin = e2.xMin), "yMin" in e2 && (this.yMin = e2.yMin), "xMax" in e2 && (this.xMax = e2.xMax), "yMax" in e2 && (this.yMax = e2.yMax), "advanceWidth" in e2 && (this.advanceWidth = e2.advanceWidth), "leftSideBearing" in e2 && (this.leftSideBearing = e2.leftSideBearing), Object.defineProperty(this, "path", cr(this, e2.path));
      };
      Q.prototype.addUnicode = function(e2) {
        this.unicodes.length === 0 && (this.unicode = e2), this.unicodes.push(e2);
      };
      Q.prototype.getBoundingBox = function() {
        return this.path.getBoundingBox();
      };
      Q.prototype.getPath = function(e2, t, n, s, o) {
        e2 = e2 !== void 0 ? e2 : 0, t = t !== void 0 ? t : 0, n = n !== void 0 ? n : 72;
        let r, i;
        s || (s = {});
        let a = s.xScale, c = s.yScale;
        if (s.hinting && o && o.hinting && (i = this.path && o.hinting.exec(this, n)), i)
          r = o.hinting.getCommands(i), e2 = Math.round(e2), t = Math.round(t), a = c = 1;
        else {
          r = this.path.commands;
          let u = 1 / (this.path.unitsPerEm || 1e3) * n;
          a === void 0 && (a = u), c === void 0 && (c = u);
        }
        let l = new le();
        for (let u = 0; u < r.length; u += 1) {
          let p = r[u];
          p.type === "M" ? l.moveTo(e2 + p.x * a, t + -p.y * c) : p.type === "L" ? l.lineTo(e2 + p.x * a, t + -p.y * c) : p.type === "Q" ? l.quadraticCurveTo(e2 + p.x1 * a, t + -p.y1 * c, e2 + p.x * a, t + -p.y * c) : p.type === "C" ? l.curveTo(e2 + p.x1 * a, t + -p.y1 * c, e2 + p.x2 * a, t + -p.y2 * c, e2 + p.x * a, t + -p.y * c) : p.type === "Z" && l.closePath();
        }
        return l;
      };
      Q.prototype.getContours = function() {
        if (this.points === void 0)
          return [];
        let e2 = [], t = [];
        for (let n = 0; n < this.points.length; n += 1) {
          let s = this.points[n];
          t.push(s), s.lastPointOfContour && (e2.push(t), t = []);
        }
        return S.argument(t.length === 0, "There are still points left in the current contour."), e2;
      };
      Q.prototype.getMetrics = function() {
        let e2 = this.path.commands, t = [], n = [];
        for (let o = 0; o < e2.length; o += 1) {
          let r = e2[o];
          r.type !== "Z" && (t.push(r.x), n.push(r.y)), (r.type === "Q" || r.type === "C") && (t.push(r.x1), n.push(r.y1)), r.type === "C" && (t.push(r.x2), n.push(r.y2));
        }
        let s = { xMin: Math.min.apply(null, t), yMin: Math.min.apply(null, n), xMax: Math.max.apply(null, t), yMax: Math.max.apply(null, n), leftSideBearing: this.leftSideBearing };
        return isFinite(s.xMin) || (s.xMin = 0), isFinite(s.xMax) || (s.xMax = this.advanceWidth), isFinite(s.yMin) || (s.yMin = 0), isFinite(s.yMax) || (s.yMax = 0), s.rightSideBearing = this.advanceWidth - s.leftSideBearing - (s.xMax - s.xMin), s;
      };
      Q.prototype.draw = function(e2, t, n, s, o) {
        this.getPath(t, n, s, o).draw(e2);
      };
      Q.prototype.drawPoints = function(e2, t, n, s) {
        function o(l, u, p, f) {
          e2.beginPath();
          for (let h = 0; h < l.length; h += 1)
            e2.moveTo(u + l[h].x * f, p + l[h].y * f), e2.arc(u + l[h].x * f, p + l[h].y * f, 2, 0, Math.PI * 2, false);
          e2.closePath(), e2.fill();
        }
        t = t !== void 0 ? t : 0, n = n !== void 0 ? n : 0, s = s !== void 0 ? s : 24;
        let r = 1 / this.path.unitsPerEm * s, i = [], a = [], c = this.path;
        for (let l = 0; l < c.commands.length; l += 1) {
          let u = c.commands[l];
          u.x !== void 0 && i.push({ x: u.x, y: -u.y }), u.x1 !== void 0 && a.push({ x: u.x1, y: -u.y1 }), u.x2 !== void 0 && a.push({ x: u.x2, y: -u.y2 });
        }
        e2.fillStyle = "blue", o(i, t, n, r), e2.fillStyle = "red", o(a, t, n, r);
      };
      Q.prototype.drawMetrics = function(e2, t, n, s) {
        let o;
        t = t !== void 0 ? t : 0, n = n !== void 0 ? n : 0, s = s !== void 0 ? s : 24, o = 1 / this.path.unitsPerEm * s, e2.lineWidth = 1, e2.strokeStyle = "black", Fe.line(e2, t, -1e4, t, 1e4), Fe.line(e2, -1e4, n, 1e4, n);
        let r = this.xMin || 0, i = this.yMin || 0, a = this.xMax || 0, c = this.yMax || 0, l = this.advanceWidth || 0;
        e2.strokeStyle = "blue", Fe.line(e2, t + r * o, -1e4, t + r * o, 1e4), Fe.line(e2, t + a * o, -1e4, t + a * o, 1e4), Fe.line(e2, -1e4, n + -i * o, 1e4, n + -i * o), Fe.line(e2, -1e4, n + -c * o, 1e4, n + -c * o), e2.strokeStyle = "green", Fe.line(e2, t + l * o, -1e4, t + l * o, 1e4);
      };
      Q.prototype.toPathData = function(e2) {
        return this.path.toPathData(e2);
      };
      Q.prototype.fromSVG = function(e2, t = {}) {
        return this.path.fromSVG(e2, t);
      };
      Q.prototype.toSVG = function(e2) {
        return this.path.toSVG(e2, this.toPathData.apply(this, [e2]));
      };
      Q.prototype.toDOMElement = function(e2) {
        return this.path.toDOMElement(e2);
      };
      var Be = Q;
      function St(e2, t, n) {
        Object.defineProperty(e2, t, { get: function() {
          return e2.path, e2[n];
        }, set: function(s) {
          e2[n] = s;
        }, enumerable: true, configurable: true });
      }
      function sn(e2, t) {
        if (this.font = e2, this.glyphs = {}, Array.isArray(t))
          for (let n = 0; n < t.length; n++) {
            let s = t[n];
            s.path.unitsPerEm = e2.unitsPerEm, this.glyphs[n] = s;
          }
        this.length = t && t.length || 0;
      }
      sn.prototype.get = function(e2) {
        if (this.glyphs[e2] === void 0) {
          this.font._push(e2), typeof this.glyphs[e2] == "function" && (this.glyphs[e2] = this.glyphs[e2]());
          let t = this.glyphs[e2], n = this.font._IndexToUnicodeMap[e2];
          if (n)
            for (let s = 0; s < n.unicodes.length; s++)
              t.addUnicode(n.unicodes[s]);
          this.font.cffEncoding ? this.font.isCIDFont ? t.name = "gid" + e2 : t.name = this.font.cffEncoding.charset[e2] : this.font.glyphNames.names && (t.name = this.font.glyphNames.glyphIndexToName(e2)), this.glyphs[e2].advanceWidth = this.font._hmtxTableData[e2].advanceWidth, this.glyphs[e2].leftSideBearing = this.font._hmtxTableData[e2].leftSideBearing;
        } else
          typeof this.glyphs[e2] == "function" && (this.glyphs[e2] = this.glyphs[e2]());
        return this.glyphs[e2];
      };
      sn.prototype.push = function(e2, t) {
        this.glyphs[e2] = t, this.length++;
      };
      function ur(e2, t) {
        return new Be({ index: t, font: e2 });
      }
      function pr(e2, t, n, s, o, r) {
        return function() {
          let i = new Be({ index: t, font: e2 });
          return i.path = function() {
            n(i, s, o);
            let a = r(e2.glyphs, i);
            return a.unitsPerEm = e2.unitsPerEm, a;
          }, St(i, "xMin", "_xMin"), St(i, "xMax", "_xMax"), St(i, "yMin", "_yMin"), St(i, "yMax", "_yMax"), i;
        };
      }
      function fr(e2, t, n, s, o) {
        return function() {
          let r = new Be({ index: t, font: e2 });
          return r.path = function() {
            let i = n(e2, r, s, o);
            return i.unitsPerEm = e2.unitsPerEm, i;
          }, r;
        };
      }
      var J = { GlyphSet: sn, glyphLoader: ur, ttfGlyphLoader: pr, cffGlyphLoader: fr };
      function Jn(e2, t) {
        if (e2 === t)
          return true;
        if (Array.isArray(e2) && Array.isArray(t)) {
          if (e2.length !== t.length)
            return false;
          for (let n = 0; n < e2.length; n += 1)
            if (!Jn(e2[n], t[n]))
              return false;
          return true;
        } else
          return false;
      }
      function vt(e2) {
        let t;
        return e2.length < 1240 ? t = 107 : e2.length < 33900 ? t = 1131 : t = 32768, t;
      }
      function me(e2, t, n, s) {
        let o = [], r = [], i = s > 1 ? x.getULong(e2, t) : x.getCard16(e2, t), a = s > 1 ? 4 : 2, c, l;
        if (i !== 0) {
          let u = x.getByte(e2, t + a);
          c = t + (i + 1) * u + a;
          let p = t + a + 1;
          for (let f = 0; f < i + 1; f += 1)
            o.push(x.getOffset(e2, p, u)), p += u;
          l = c + o[i];
        } else
          l = t + a;
        for (let u = 0; u < o.length - 1; u += 1) {
          let p = x.getBytes(e2, c + o[u], c + o[u + 1]);
          n && (p = n(p, e2, t, s)), r.push(p);
        }
        return { objects: r, startOffset: t, endOffset: l };
      }
      function hr(e2, t, n) {
        let s = [], o = n > 1 ? x.getULong(e2, t) : x.getCard16(e2, t), r = n > 1 ? 4 : 2, i, a;
        if (o !== 0) {
          let c = x.getByte(e2, t + r);
          i = t + (o + 1) * c + r;
          let l = t + r + 1;
          for (let u = 0; u < o + 1; u += 1)
            s.push(x.getOffset(e2, l, c)), l += c;
          a = i + s[o];
        } else
          a = t + r;
        return { offsets: s, startOffset: t, endOffset: a };
      }
      function dr(e2, t, n, s, o, r) {
        let i = r > 1 ? x.getULong(n, s) : x.getCard16(n, s), a = r > 1 ? 4 : 2, c = 0;
        if (i !== 0) {
          let u = x.getByte(n, s + a);
          c = s + (i + 1) * u + a;
        }
        let l = x.getBytes(n, c + t[e2], c + t[e2 + 1]);
        return o && (l = o(l)), l;
      }
      function mr(e2) {
        let t = "", s = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"];
        for (; ; ) {
          let o = e2.parseByte(), r = o >> 4, i = o & 15;
          if (r === 15 || (t += s[r], i === 15))
            break;
          t += s[i];
        }
        return parseFloat(t);
      }
      function gr(e2, t) {
        let n, s, o, r;
        if (t === 28)
          return n = e2.parseByte(), s = e2.parseByte(), n << 8 | s;
        if (t === 29)
          return n = e2.parseByte(), s = e2.parseByte(), o = e2.parseByte(), r = e2.parseByte(), n << 24 | s << 16 | o << 8 | r;
        if (t === 30)
          return mr(e2);
        if (t >= 32 && t <= 246)
          return t - 139;
        if (t >= 247 && t <= 250)
          return n = e2.parseByte(), (t - 247) * 256 + n + 108;
        if (t >= 251 && t <= 254)
          return n = e2.parseByte(), -(t - 251) * 256 - n - 108;
        throw new Error("Invalid b0 " + t);
      }
      function yr(e2) {
        let t = {};
        for (let n = 0; n < e2.length; n += 1) {
          let s = e2[n][0], o = e2[n][1], r;
          if (o.length === 1 ? r = o[0] : r = o, Object.prototype.hasOwnProperty.call(t, s) && !isNaN(t[s]))
            throw new Error("Object " + t + " already has key " + s);
          t[s] = r;
        }
        return t;
      }
      function rn(e2, t, n, s) {
        t = t !== void 0 ? t : 0;
        let o = new x.Parser(e2, t), r = [], i = [];
        n = n !== void 0 ? n : e2.byteLength;
        let a = s < 2 ? 22 : 28;
        for (; o.relativeOffset < n; ) {
          let c = o.parseByte();
          if (c < a) {
            if (c === 12 && (c = 1200 + o.parseByte()), s > 1 && c === 23) {
              Ur(i);
              continue;
            }
            r.push([c, i]), i = [];
          } else
            i.push(gr(o, c, s));
        }
        return yr(r);
      }
      function Ye(e2, t) {
        return t <= 390 ? t = qe[t] : e2 ? t = e2[t - 391] : t = void 0, t;
      }
      function an(e2, t, n) {
        let s = {}, o;
        for (let r = 0; r < t.length; r += 1) {
          let i = t[r];
          if (Array.isArray(i.type)) {
            let a = [];
            a.length = i.type.length;
            for (let c = 0; c < i.type.length; c++)
              o = e2[i.op] !== void 0 ? e2[i.op][c] : void 0, o === void 0 && (o = i.value !== void 0 && i.value[c] !== void 0 ? i.value[c] : null), i.type[c] === "SID" && (o = Ye(n, o)), a[c] = o;
            s[i.name] = a;
          } else
            o = e2[i.op], o === void 0 && (o = i.value !== void 0 ? i.value : null), i.type === "SID" && (o = Ye(n, o)), s[i.name] = o;
        }
        return s;
      }
      function xr(e2, t) {
        let n = {};
        if (n.formatMajor = x.getCard8(e2, t), n.formatMinor = x.getCard8(e2, t + 1), n.formatMajor > 2)
          throw new Error(`Unsupported CFF table version ${n.formatMajor}.${n.formatMinor}`);
        return n.size = x.getCard8(e2, t + 2), n.formatMajor < 2 ? (n.offsetSize = x.getCard8(e2, t + 3), n.startOffset = t, n.endOffset = t + 4) : (n.topDictLength = x.getCard16(e2, t + 3), n.endOffset = t + 8), n;
      }
      var es = [{ name: "version", op: 0, type: "SID" }, { name: "notice", op: 1, type: "SID" }, { name: "copyright", op: 1200, type: "SID" }, { name: "fullName", op: 2, type: "SID" }, { name: "familyName", op: 3, type: "SID" }, { name: "weight", op: 4, type: "SID" }, { name: "isFixedPitch", op: 1201, type: "number", value: 0 }, { name: "italicAngle", op: 1202, type: "number", value: 0 }, { name: "underlinePosition", op: 1203, type: "number", value: -100 }, { name: "underlineThickness", op: 1204, type: "number", value: 50 }, { name: "paintType", op: 1205, type: "number", value: 0 }, { name: "charstringType", op: 1206, type: "number", value: 2 }, { name: "fontMatrix", op: 1207, type: ["real", "real", "real", "real", "real", "real"], value: [1e-3, 0, 0, 1e-3, 0, 0] }, { name: "uniqueId", op: 13, type: "number" }, { name: "fontBBox", op: 5, type: ["number", "number", "number", "number"], value: [0, 0, 0, 0] }, { name: "strokeWidth", op: 1208, type: "number", value: 0 }, { name: "xuid", op: 14, type: [], value: null }, { name: "charset", op: 15, type: "offset", value: 0 }, { name: "encoding", op: 16, type: "offset", value: 0 }, { name: "charStrings", op: 17, type: "offset", value: 0 }, { name: "private", op: 18, type: ["number", "offset"], value: [0, 0] }, { name: "ros", op: 1230, type: ["SID", "SID", "number"] }, { name: "cidFontVersion", op: 1231, type: "number", value: 0 }, { name: "cidFontRevision", op: 1232, type: "number", value: 0 }, { name: "cidFontType", op: 1233, type: "number", value: 0 }, { name: "cidCount", op: 1234, type: "number", value: 8720 }, { name: "uidBase", op: 1235, type: "number" }, { name: "fdArray", op: 1236, type: "offset" }, { name: "fdSelect", op: 1237, type: "offset" }, { name: "fontName", op: 1238, type: "SID" }], ts = [{ name: "fontMatrix", op: 1207, type: ["real", "real", "real", "real", "real", "real"], value: [1e-3, 0, 0, 1e-3, 0, 0] }, { name: "charStrings", op: 17, type: "offset" }, { name: "fdArray", op: 1236, type: "offset" }, { name: "fdSelect", op: 1237, type: "offset" }, { name: "vstore", op: 24, type: "offset" }], ns = [{ name: "subrs", op: 19, type: "offset", value: 0 }, { name: "defaultWidthX", op: 20, type: "number", value: 0 }, { name: "nominalWidthX", op: 21, type: "number", value: 0 }], ss = [{ name: "blueValues", op: 6, type: "delta" }, { name: "otherBlues", op: 7, type: "delta" }, { name: "familyBlues", op: 7, type: "delta" }, { name: "familyBlues", op: 8, type: "delta" }, { name: "familyOtherBlues", op: 9, type: "delta" }, { name: "blueScale", op: 1209, type: "number", value: 0.039625 }, { name: "blueShift", op: 1210, type: "number", value: 7 }, { name: "blueFuzz", op: 1211, type: "number", value: 1 }, { name: "stdHW", op: 10, type: "number" }, { name: "stdVW", op: 11, type: "number" }, { name: "stemSnapH", op: 1212, type: "number" }, { name: "stemSnapV", op: 1213, type: "number" }, { name: "languageGroup", op: 1217, type: "number", value: 0 }, { name: "expansionFactor", op: 1218, type: "number", value: 0.06 }, { name: "vsindex", op: 22, type: "number", value: 0 }, { name: "subrs", op: 19, type: "offset" }], br = [{ name: "private", op: 18, type: ["number", "offset"], value: [0, 0] }];
      function Sr(e2, t, n, s) {
        let o = rn(e2, t, e2.byteLength, s);
        return an(o, s > 1 ? ts : es, n);
      }
      function ln(e2, t, n, s, o) {
        let r = rn(e2, t, n, o);
        return an(r, o > 1 ? ss : ns, s);
      }
      function vr(e2, t, n) {
        let s = rn(e2, t, void 0, n);
        return an(s, br);
      }
      function Tr(e2, t, n) {
        let s = [];
        for (let o = 0; o < n.length; o++) {
          let r = new DataView(new Uint8Array(n[o]).buffer), i = vr(r, 0, 2), a = i.private[0], c = i.private[1];
          if (a !== 0 && c !== 0) {
            let l = ln(e2, c + t, a, [], 2);
            if (l.subrs) {
              let u = c + l.subrs, p = me(e2, u + t, void 0, 2);
              i._subrs = p.objects, i._subrsBias = vt(i._subrs);
            }
            i._privateDict = l;
          }
          s.push(i);
        }
        return s;
      }
      function on(e2, t, n, s, o) {
        let r = [];
        for (let i = 0; i < n.length; i += 1) {
          let a = new DataView(new Uint8Array(n[i]).buffer), c = Sr(a, 0, s, o);
          c._subrs = [], c._subrsBias = 0, c._defaultWidthX = 0, c._nominalWidthX = 0;
          let l = o < 2 ? c.private[0] : 0, u = o < 2 ? c.private[1] : 0;
          if (l !== 0 && u !== 0) {
            let p = ln(e2, u + t, l, s, o);
            if (c._defaultWidthX = p.defaultWidthX, c._nominalWidthX = p.nominalWidthX, p.subrs !== 0) {
              let f = u + p.subrs, h = me(e2, f + t, void 0, o);
              c._subrs = h.objects, c._subrsBias = vt(c._subrs);
            }
            c._privateDict = p;
          }
          r.push(c);
        }
        return r;
      }
      function kr(e2, t, n, s) {
        let o, r, i = new x.Parser(e2, t);
        n -= 1;
        let a = [".notdef"], c = i.parseCard8();
        if (c === 0)
          for (let l = 0; l < n; l += 1)
            o = i.parseSID(), a.push(Ye(s, o) || o);
        else if (c === 1)
          for (; a.length <= n; ) {
            o = i.parseSID(), r = i.parseCard8();
            for (let l = 0; l <= r; l += 1)
              a.push(Ye(s, o) || o), o += 1;
          }
        else if (c === 2)
          for (; a.length <= n; ) {
            o = i.parseSID(), r = i.parseCard16();
            for (let l = 0; l <= r; l += 1)
              a.push(Ye(s, o) || o), o += 1;
          }
        else
          throw new Error("Unknown charset format " + c);
        return a;
      }
      function Fr(e2, t, n) {
        let s, o = {}, r = new x.Parser(e2, t), i = r.parseCard8();
        if (i === 0) {
          let a = r.parseCard8();
          for (let c = 0; c < a; c += 1)
            s = r.parseCard8(), o[s] = c;
        } else if (i === 1) {
          let a = r.parseCard8();
          s = 1;
          for (let c = 0; c < a; c += 1) {
            let l = r.parseCard8(), u = r.parseCard8();
            for (let p = l; p <= l + u; p += 1)
              o[p] = s, s += 1;
          }
        } else
          throw new Error("Unknown encoding format " + i);
        return new Xe(o, n);
      }
      function Ur(e2) {
        let t = e2.pop();
        for (; e2.length > t; )
          e2.pop();
      }
      function Zn(e2, t, n, s) {
        let o, r, i, a, c = new le(), l = [], u = 0, p = false, f = false, h = 0, m = 0, b, y, O, k, L = 0, D = [], w = e2.tables.cff2 || e2.tables.cff;
        if (O = w.topDict._defaultWidthX, k = w.topDict._nominalWidthX, e2.isCIDFont || s > 1) {
          let I = w.topDict._fdSelect ? w.topDict._fdSelect[t.index] : 0, P = w.topDict._fdArray[I];
          b = P._subrs, y = P._subrsBias, s > 1 ? (D = w.topDict._vstore.itemVariationStore.itemVariationSubtables, L = P._privateDict.vsindex) : (O = P._defaultWidthX, k = P._nominalWidthX);
        } else
          b = w.topDict._subrs, y = w.topDict._subrsBias;
        let H = O;
        function X(I, P) {
          f && c.closePath(), c.moveTo(I, P), f = true;
        }
        function q() {
          let I;
          I = (l.length & 1) !== 0, I && !p && (H = l.shift() + k), u += l.length >> 1, l.length = 0, p = true;
        }
        function E(I) {
          let P, F, R, C, re, ve, Y, ne, Z, $, _, K, W = 0;
          for (; W < I.length; ) {
            let G = I[W];
            switch (W += 1, G) {
              case 1:
                q();
                break;
              case 3:
                q();
                break;
              case 4:
                l.length > 1 && !p && (H = l.shift() + k, p = true), m += l.pop(), X(h, m);
                break;
              case 5:
                for (; l.length > 0; )
                  h += l.shift(), m += l.shift(), c.lineTo(h, m);
                break;
              case 6:
                for (; l.length > 0 && (h += l.shift(), c.lineTo(h, m), l.length !== 0); )
                  m += l.shift(), c.lineTo(h, m);
                break;
              case 7:
                for (; l.length > 0 && (m += l.shift(), c.lineTo(h, m), l.length !== 0); )
                  h += l.shift(), c.lineTo(h, m);
                break;
              case 8:
                for (; l.length > 0; )
                  o = h + l.shift(), r = m + l.shift(), i = o + l.shift(), a = r + l.shift(), h = i + l.shift(), m = a + l.shift(), c.curveTo(o, r, i, a, h, m);
                break;
              case 10:
                re = l.pop() + y, ve = b[re], ve && E(ve);
                break;
              case 11:
                if (s > 1) {
                  console.error("CFF CharString operator return (11) is not supported in CFF2");
                  break;
                }
                return;
              case 12:
                switch (G = I[W], W += 1, G) {
                  case 35:
                    o = h + l.shift(), r = m + l.shift(), i = o + l.shift(), a = r + l.shift(), Y = i + l.shift(), ne = a + l.shift(), Z = Y + l.shift(), $ = ne + l.shift(), _ = Z + l.shift(), K = $ + l.shift(), h = _ + l.shift(), m = K + l.shift(), l.shift(), c.curveTo(o, r, i, a, Y, ne), c.curveTo(Z, $, _, K, h, m);
                    break;
                  case 34:
                    o = h + l.shift(), r = m, i = o + l.shift(), a = r + l.shift(), Y = i + l.shift(), ne = a, Z = Y + l.shift(), $ = a, _ = Z + l.shift(), K = m, h = _ + l.shift(), c.curveTo(o, r, i, a, Y, ne), c.curveTo(Z, $, _, K, h, m);
                    break;
                  case 36:
                    o = h + l.shift(), r = m + l.shift(), i = o + l.shift(), a = r + l.shift(), Y = i + l.shift(), ne = a, Z = Y + l.shift(), $ = a, _ = Z + l.shift(), K = $ + l.shift(), h = _ + l.shift(), c.curveTo(o, r, i, a, Y, ne), c.curveTo(Z, $, _, K, h, m);
                    break;
                  case 37:
                    o = h + l.shift(), r = m + l.shift(), i = o + l.shift(), a = r + l.shift(), Y = i + l.shift(), ne = a + l.shift(), Z = Y + l.shift(), $ = ne + l.shift(), _ = Z + l.shift(), K = $ + l.shift(), Math.abs(_ - h) > Math.abs(K - m) ? h = _ + l.shift() : m = K + l.shift(), c.curveTo(o, r, i, a, Y, ne), c.curveTo(Z, $, _, K, h, m);
                    break;
                  default:
                    console.log("Glyph " + t.index + ": unknown operator 1200" + G), l.length = 0;
                }
                break;
              case 14:
                if (s > 1) {
                  console.error("CFF CharString operator endchar (14) is not supported in CFF2");
                  break;
                }
                l.length > 0 && !p && (H = l.shift() + k, p = true), f && (c.closePath(), f = false);
                break;
              case 15:
                if (s < 2) {
                  console.error("CFF2 CharString operator vsindex (15) is not supported in CFF");
                  break;
                }
                L = l.pop();
                break;
              case 16:
                if (s < 2) {
                  console.error("CFF2 CharString operator blend (16) is not supported in CFF");
                  break;
                }
                var ze = D[L], we = l.pop(), at = we * ze.regionIndexes.length, De = l.length - at, _e = De - we;
                for (let ie = 0; ie < we; ie++) {
                  var B = l[_e + ie];
                  for (let ae = 0; ae < we.length; ae++)
                    B += 1 * l[De++];
                  l[_e + ie] = B;
                }
                for (; at--; )
                  l.pop();
                break;
              case 18:
                q();
                break;
              case 19:
              case 20:
                q(), W += u + 7 >> 3;
                break;
              case 21:
                l.length > 2 && !p && (H = l.shift() + k, p = true), m += l.pop(), h += l.pop(), X(h, m);
                break;
              case 22:
                l.length > 1 && !p && (H = l.shift() + k, p = true), h += l.pop(), X(h, m);
                break;
              case 23:
                q();
                break;
              case 24:
                for (; l.length > 2; )
                  o = h + l.shift(), r = m + l.shift(), i = o + l.shift(), a = r + l.shift(), h = i + l.shift(), m = a + l.shift(), c.curveTo(o, r, i, a, h, m);
                h += l.shift(), m += l.shift(), c.lineTo(h, m);
                break;
              case 25:
                for (; l.length > 6; )
                  h += l.shift(), m += l.shift(), c.lineTo(h, m);
                o = h + l.shift(), r = m + l.shift(), i = o + l.shift(), a = r + l.shift(), h = i + l.shift(), m = a + l.shift(), c.curveTo(o, r, i, a, h, m);
                break;
              case 26:
                for (l.length & 1 && (h += l.shift()); l.length > 0; )
                  o = h, r = m + l.shift(), i = o + l.shift(), a = r + l.shift(), h = i, m = a + l.shift(), c.curveTo(o, r, i, a, h, m);
                break;
              case 27:
                for (l.length & 1 && (m += l.shift()); l.length > 0; )
                  o = h + l.shift(), r = m, i = o + l.shift(), a = r + l.shift(), h = i + l.shift(), m = a, c.curveTo(o, r, i, a, h, m);
                break;
              case 28:
                P = I[W], F = I[W + 1], l.push((P << 24 | F << 16) >> 16), W += 2;
                break;
              case 29:
                re = l.pop() + e2.gsubrsBias, ve = e2.gsubrs[re], ve && E(ve);
                break;
              case 30:
                for (; l.length > 0 && (o = h, r = m + l.shift(), i = o + l.shift(), a = r + l.shift(), h = i + l.shift(), m = a + (l.length === 1 ? l.shift() : 0), c.curveTo(o, r, i, a, h, m), l.length !== 0); )
                  o = h + l.shift(), r = m, i = o + l.shift(), a = r + l.shift(), m = a + l.shift(), h = i + (l.length === 1 ? l.shift() : 0), c.curveTo(o, r, i, a, h, m);
                break;
              case 31:
                for (; l.length > 0 && (o = h + l.shift(), r = m, i = o + l.shift(), a = r + l.shift(), m = a + l.shift(), h = i + (l.length === 1 ? l.shift() : 0), c.curveTo(o, r, i, a, h, m), l.length !== 0); )
                  o = h, r = m + l.shift(), i = o + l.shift(), a = r + l.shift(), h = i + l.shift(), m = a + (l.length === 1 ? l.shift() : 0), c.curveTo(o, r, i, a, h, m);
                break;
              default:
                G < 32 ? console.log("Glyph " + t.index + ": unknown operator " + G) : G < 247 ? l.push(G - 139) : G < 251 ? (P = I[W], W += 1, l.push((G - 247) * 256 + P + 108)) : G < 255 ? (P = I[W], W += 1, l.push(-(G - 251) * 256 - P - 108)) : (P = I[W], F = I[W + 1], R = I[W + 2], C = I[W + 3], W += 4, l.push((P << 24 | F << 16 | R << 8 | C) / 65536));
            }
          }
        }
        return E(n), p && (t.advanceWidth = H), c;
      }
      function $n(e2, t, n, s, o) {
        let r = [], i, a = new x.Parser(e2, t), c = a.parseCard8();
        if (c === 0)
          for (let l = 0; l < n; l++) {
            if (i = a.parseCard8(), i >= s)
              throw new Error("CFF table CID Font FDSelect has bad FD index value " + i + " (FD count " + s + ")");
            r.push(i);
          }
        else if (c === 3 || o > 1 && c === 4) {
          let l = c === 4 ? a.parseULong() : a.parseCard16(), u = c === 4 ? a.parseULong() : a.parseCard16();
          if (u !== 0)
            throw new Error(`CFF Table CID Font FDSelect format ${c} range has bad initial GID ${u}`);
          let p;
          for (let f = 0; f < l; f++) {
            if (i = c === 4 ? a.parseUShort() : a.parseCard8(), p = c === 4 ? a.parseULong() : a.parseCard16(), i >= s)
              throw new Error("CFF table CID Font FDSelect has bad FD index value " + i + " (FD count " + s + ")");
            if (p > n)
              throw new Error(`CFF Table CID Font FDSelect format ${o} range has bad GID ${p}`);
            for (; u < p; u++)
              r.push(i);
            u = p;
          }
          if (p !== n)
            throw new Error("CFF Table CID Font FDSelect format 3 range has bad final (Sentinal) GID " + p);
        } else
          throw new Error("CFF Table CID Font FDSelect table has unsupported format " + c);
        return r;
      }
      function Or(e2, t, n, s) {
        let o, r = xr(e2, t);
        r.formatMajor === 2 ? o = n.tables.cff2 = {} : o = n.tables.cff = {};
        let i = r.formatMajor > 1 ? null : me(e2, r.endOffset, x.bytesToString), a = r.formatMajor > 1 ? null : me(e2, i.endOffset), c = r.formatMajor > 1 ? null : me(e2, a.endOffset, x.bytesToString), l = me(e2, r.formatMajor > 1 ? t + r.size + r.topDictLength : c.endOffset, void 0, r.formatMajor);
        n.gsubrs = l.objects, n.gsubrsBias = vt(n.gsubrs);
        let u;
        if (r.formatMajor > 1) {
          let f = t + r.size, h = x.getBytes(e2, f, f + r.topDictLength);
          u = on(e2, 0, [h], void 0, r.formatMajor)[0];
        } else {
          let f = on(e2, t, a.objects, c.objects, r.formatMajor);
          if (f.length !== 1)
            throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + f.length);
          u = f[0];
        }
        if (o.topDict = u, u._privateDict && (n.defaultWidthX = u._privateDict.defaultWidthX, n.nominalWidthX = u._privateDict.nominalWidthX), r.formatMajor < 2 && u.ros[0] !== void 0 && u.ros[1] !== void 0 && (n.isCIDFont = true), r.formatMajor > 1) {
          let f = u.fdArray, h = u.fdSelect;
          if (!f)
            throw new Error("This is a CFF2 font, but FDArray information is missing");
          let m = me(e2, t + f, null, r.formatMajor), b = Tr(e2, t, m.objects);
          u._fdArray = b, h && (u._fdSelect = $n(e2, t + h, n.numGlyphs, b.length, r.formatMajor));
        } else if (n.isCIDFont) {
          let f = u.fdArray, h = u.fdSelect;
          if (f === 0 || h === 0)
            throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");
          f += t;
          let m = me(e2, f), b = on(e2, t, m.objects, c.objects, r.formatMajor);
          u._fdArray = b, h += t, u._fdSelect = $n(e2, h, n.numGlyphs, b.length, r.formatMajor);
        }
        if (r.formatMajor < 2) {
          let f = t + u.private[1], h = ln(e2, f, u.private[0], c.objects, r.formatMajor);
          if (n.defaultWidthX = h.defaultWidthX, n.nominalWidthX = h.nominalWidthX, h.subrs !== 0) {
            let m = f + h.subrs, b = me(e2, m);
            n.subrs = b.objects, n.subrsBias = vt(n.subrs);
          } else
            n.subrs = [], n.subrsBias = 0;
        }
        let p;
        if (s.lowMemory ? (p = hr(e2, t + u.charStrings, r.formatMajor), n.nGlyphs = p.offsets.length - (r.formatMajor > 1 ? 1 : 0)) : (p = me(e2, t + u.charStrings, null, r.formatMajor), n.nGlyphs = p.objects.length), r.formatMajor > 1 && n.tables.maxp && n.nGlyphs !== n.tables.maxp.numGlyphs && console.error(`Glyph count in the CFF2 table (${n.nGlyphs}) must correspond to the glyph count in the maxp table (${n.tables.maxp.numGlyphs})`), r.formatMajor < 2) {
          let f = kr(e2, t + u.charset, n.nGlyphs, c.objects);
          u.encoding === 0 ? n.cffEncoding = new Xe(qn, f) : u.encoding === 1 ? n.cffEncoding = new Xe(Xn, f) : n.cffEncoding = Fr(e2, t + u.encoding, f), n.encoding = n.encoding || n.cffEncoding;
        }
        if (n.glyphs = new J.GlyphSet(n), s.lowMemory)
          n._push = function(f) {
            let h = dr(f, p.offsets, e2, t + u.charStrings, void 0, r.formatMajor);
            n.glyphs.push(f, J.cffGlyphLoader(n, f, Zn, h, r.formatMajor));
          };
        else
          for (let f = 0; f < n.nGlyphs; f += 1) {
            let h = p.objects[f];
            n.glyphs.push(f, J.cffGlyphLoader(n, f, Zn, h, r.formatMajor));
          }
        if (u.vstore) {
          let f = new x.Parser(e2, t + u.vstore);
          u._vstore = f.parseVariationStore();
        }
      }
      function os(e2, t) {
        let n, s = qe.indexOf(e2);
        return s >= 0 && (n = s), s = t.indexOf(e2), s >= 0 ? n = s + qe.length : (n = qe.length + t.length, t.push(e2)), n;
      }
      function Cr() {
        return new g.Record("Header", [{ name: "major", type: "Card8", value: 1 }, { name: "minor", type: "Card8", value: 0 }, { name: "hdrSize", type: "Card8", value: 4 }, { name: "major", type: "Card8", value: 1 }]);
      }
      function Lr(e2) {
        let t = new g.Record("Name INDEX", [{ name: "names", type: "INDEX", value: [] }]);
        t.names = [];
        for (let n = 0; n < e2.length; n += 1)
          t.names.push({ name: "name_" + n, type: "NAME", value: e2[n] });
        return t;
      }
      function rs(e2, t, n) {
        let s = {};
        for (let o = 0; o < e2.length; o += 1) {
          let r = e2[o], i = t[r.name];
          i !== void 0 && !Jn(i, r.value) && (r.type === "SID" && (i = os(i, n)), s[r.op] = { name: r.name, type: r.type, value: i });
        }
        return s;
      }
      function Kn(e2, t, n) {
        let s = new g.Record("Top DICT", [{ name: "dict", type: "DICT", value: {} }]);
        return s.dict = rs(n > 1 ? ts : es, e2, t), s;
      }
      function Qn(e2) {
        let t = new g.Record("Top DICT INDEX", [{ name: "topDicts", type: "INDEX", value: [] }]);
        return t.topDicts = [{ name: "topDict_0", type: "TABLE", value: e2 }], t;
      }
      function Rr(e2) {
        let t = new g.Record("String INDEX", [{ name: "strings", type: "INDEX", value: [] }]);
        t.strings = [];
        for (let n = 0; n < e2.length; n += 1)
          t.strings.push({ name: "string_" + n, type: "STRING", value: e2[n] });
        return t;
      }
      function Er() {
        return new g.Record("Global Subr INDEX", [{ name: "subrs", type: "INDEX", value: [] }]);
      }
      function wr(e2, t) {
        let n = new g.Record("Charsets", [{ name: "format", type: "Card8", value: 0 }]);
        for (let s = 0; s < e2.length; s += 1) {
          let o = e2[s], r = os(o, t);
          n.fields.push({ name: "glyph_" + s, type: "SID", value: r });
        }
        return n;
      }
      function Dr(e2, t) {
        let n = [], s = e2.path;
        t < 2 && n.push({ name: "width", type: "NUMBER", value: e2.advanceWidth });
        let o = 0, r = 0;
        for (let i = 0; i < s.commands.length; i += 1) {
          let a, c, l = s.commands[i];
          if (l.type === "Q") {
            let u = 0.3333333333333333, p = 2 / 3;
            l = { type: "C", x: l.x, y: l.y, x1: Math.round(u * o + p * l.x1), y1: Math.round(u * r + p * l.y1), x2: Math.round(u * l.x + p * l.x1), y2: Math.round(u * l.y + p * l.y1) };
          }
          if (l.type === "M")
            a = Math.round(l.x - o), c = Math.round(l.y - r), n.push({ name: "dx", type: "NUMBER", value: a }), n.push({ name: "dy", type: "NUMBER", value: c }), n.push({ name: "rmoveto", type: "OP", value: 21 }), o = Math.round(l.x), r = Math.round(l.y);
          else if (l.type === "L")
            a = Math.round(l.x - o), c = Math.round(l.y - r), n.push({ name: "dx", type: "NUMBER", value: a }), n.push({ name: "dy", type: "NUMBER", value: c }), n.push({ name: "rlineto", type: "OP", value: 5 }), o = Math.round(l.x), r = Math.round(l.y);
          else if (l.type === "C") {
            let u = Math.round(l.x1 - o), p = Math.round(l.y1 - r), f = Math.round(l.x2 - l.x1), h = Math.round(l.y2 - l.y1);
            a = Math.round(l.x - l.x2), c = Math.round(l.y - l.y2), n.push({ name: "dx1", type: "NUMBER", value: u }), n.push({ name: "dy1", type: "NUMBER", value: p }), n.push({ name: "dx2", type: "NUMBER", value: f }), n.push({ name: "dy2", type: "NUMBER", value: h }), n.push({ name: "dx", type: "NUMBER", value: a }), n.push({ name: "dy", type: "NUMBER", value: c }), n.push({ name: "rrcurveto", type: "OP", value: 8 }), o = Math.round(l.x), r = Math.round(l.y);
          }
        }
        return t < 2 && n.push({ name: "endchar", type: "OP", value: 14 }), n;
      }
      function Ir(e2, t) {
        let n = new g.Record("CharStrings INDEX", [{ name: "charStrings", type: "INDEX", value: [] }]);
        for (let s = 0; s < e2.length; s += 1) {
          let o = e2.get(s), r = Dr(o, t);
          n.charStrings.push({ name: o.name, type: "CHARSTRING", value: r });
        }
        return n;
      }
      function Ar(e2, t, n) {
        let s = new g.Record("Private DICT", [{ name: "dict", type: "DICT", value: {} }]);
        return s.dict = rs(n > 1 ? ss : ns, e2, t), s;
      }
      function Mr(e2, t) {
        let s = new g.Table("CFF ", [{ name: "header", type: "RECORD" }, { name: "nameIndex", type: "RECORD" }, { name: "topDictIndex", type: "RECORD" }, { name: "stringIndex", type: "RECORD" }, { name: "globalSubrIndex", type: "RECORD" }, { name: "charsets", type: "RECORD" }, { name: "charStringsIndex", type: "RECORD" }, { name: "privateDict", type: "RECORD" }]), o = 1 / t.unitsPerEm, r = { version: t.version, fullName: t.fullName, familyName: t.familyName, weight: t.weightName, fontBBox: t.fontBBox || [0, 0, 0, 0], fontMatrix: [o, 0, 0, o, 0, 0], charset: 999, encoding: 0, charStrings: 999, private: [0, 999] }, i = {}, a = [], c;
        for (let f = 1; f < e2.length; f += 1)
          c = e2.get(f), a.push(c.name);
        let l = [];
        s.header = Cr(), s.nameIndex = Lr([t.postScriptName]);
        let u = Kn(r, l);
        s.topDictIndex = Qn(u), s.globalSubrIndex = Er(), s.charsets = wr(a, l), s.charStringsIndex = Ir(e2, 1), s.privateDict = Ar(i, l), s.stringIndex = Rr(l);
        let p = s.header.sizeOf() + s.nameIndex.sizeOf() + s.topDictIndex.sizeOf() + s.stringIndex.sizeOf() + s.globalSubrIndex.sizeOf();
        return r.charset = p, r.encoding = 0, r.charStrings = r.charset + s.charsets.sizeOf(), r.private[1] = r.charStrings + s.charStringsIndex.sizeOf(), u = Kn(r, l), s.topDictIndex = Qn(u), s;
      }
      var Ze = { parse: Or, make: Mr };
      function Pr(e2, t) {
        let n = {}, s = new x.Parser(e2, t);
        return n.version = s.parseVersion(), n.fontRevision = Math.round(s.parseFixed() * 1e3) / 1e3, n.checkSumAdjustment = s.parseULong(), n.magicNumber = s.parseULong(), S.argument(n.magicNumber === 1594834165, "Font header has wrong magic number."), n.flags = s.parseUShort(), n.unitsPerEm = s.parseUShort(), n.created = s.parseLongDateTime(), n.modified = s.parseLongDateTime(), n.xMin = s.parseShort(), n.yMin = s.parseShort(), n.xMax = s.parseShort(), n.yMax = s.parseShort(), n.macStyle = s.parseUShort(), n.lowestRecPPEM = s.parseUShort(), n.fontDirectionHint = s.parseShort(), n.indexToLocFormat = s.parseShort(), n.glyphDataFormat = s.parseShort(), n;
      }
      function Br(e2) {
        let t = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3) + 2082844800, n = t;
        return e2.createdTimestamp && (n = e2.createdTimestamp + 2082844800), new g.Table("head", [{ name: "version", type: "FIXED", value: 65536 }, { name: "fontRevision", type: "FIXED", value: 65536 }, { name: "checkSumAdjustment", type: "ULONG", value: 0 }, { name: "magicNumber", type: "ULONG", value: 1594834165 }, { name: "flags", type: "USHORT", value: 0 }, { name: "unitsPerEm", type: "USHORT", value: 1e3 }, { name: "created", type: "LONGDATETIME", value: n }, { name: "modified", type: "LONGDATETIME", value: t }, { name: "xMin", type: "SHORT", value: 0 }, { name: "yMin", type: "SHORT", value: 0 }, { name: "xMax", type: "SHORT", value: 0 }, { name: "yMax", type: "SHORT", value: 0 }, { name: "macStyle", type: "USHORT", value: 0 }, { name: "lowestRecPPEM", type: "USHORT", value: 0 }, { name: "fontDirectionHint", type: "SHORT", value: 2 }, { name: "indexToLocFormat", type: "SHORT", value: 0 }, { name: "glyphDataFormat", type: "SHORT", value: 0 }], e2);
      }
      var Tt = { parse: Pr, make: Br };
      function Gr(e2, t) {
        let n = {}, s = new x.Parser(e2, t);
        return n.version = s.parseVersion(), n.ascender = s.parseShort(), n.descender = s.parseShort(), n.lineGap = s.parseShort(), n.advanceWidthMax = s.parseUShort(), n.minLeftSideBearing = s.parseShort(), n.minRightSideBearing = s.parseShort(), n.xMaxExtent = s.parseShort(), n.caretSlopeRise = s.parseShort(), n.caretSlopeRun = s.parseShort(), n.caretOffset = s.parseShort(), s.relativeOffset += 8, n.metricDataFormat = s.parseShort(), n.numberOfHMetrics = s.parseUShort(), n;
      }
      function Nr(e2) {
        return new g.Table("hhea", [{ name: "version", type: "FIXED", value: 65536 }, { name: "ascender", type: "FWORD", value: 0 }, { name: "descender", type: "FWORD", value: 0 }, { name: "lineGap", type: "FWORD", value: 0 }, { name: "advanceWidthMax", type: "UFWORD", value: 0 }, { name: "minLeftSideBearing", type: "FWORD", value: 0 }, { name: "minRightSideBearing", type: "FWORD", value: 0 }, { name: "xMaxExtent", type: "FWORD", value: 0 }, { name: "caretSlopeRise", type: "SHORT", value: 1 }, { name: "caretSlopeRun", type: "SHORT", value: 0 }, { name: "caretOffset", type: "SHORT", value: 0 }, { name: "reserved1", type: "SHORT", value: 0 }, { name: "reserved2", type: "SHORT", value: 0 }, { name: "reserved3", type: "SHORT", value: 0 }, { name: "reserved4", type: "SHORT", value: 0 }, { name: "metricDataFormat", type: "SHORT", value: 0 }, { name: "numberOfHMetrics", type: "USHORT", value: 0 }], e2);
      }
      var kt = { parse: Gr, make: Nr };
      function Hr(e2, t, n, s, o) {
        let r, i, a = new x.Parser(e2, t);
        for (let c = 0; c < s; c += 1) {
          c < n && (r = a.parseUShort(), i = a.parseShort());
          let l = o.get(c);
          l.advanceWidth = r, l.leftSideBearing = i;
        }
      }
      function Vr(e2, t, n, s, o) {
        e2._hmtxTableData = {};
        let r, i, a = new x.Parser(t, n);
        for (let c = 0; c < o; c += 1)
          c < s && (r = a.parseUShort(), i = a.parseShort()), e2._hmtxTableData[c] = { advanceWidth: r, leftSideBearing: i };
      }
      function zr(e2, t, n, s, o, r, i) {
        i.lowMemory ? Vr(e2, t, n, s, o) : Hr(t, n, s, o, r);
      }
      function _r(e2) {
        let t = new g.Table("hmtx", []);
        for (let n = 0; n < e2.length; n += 1) {
          let s = e2.get(n), o = s.advanceWidth || 0, r = s.leftSideBearing || 0;
          t.fields.push({ name: "advanceWidth_" + n, type: "USHORT", value: o }), t.fields.push({ name: "leftSideBearing_" + n, type: "SHORT", value: r });
        }
        return t;
      }
      var Ft = { parse: zr, make: _r };
      function Wr(e2) {
        let t = new g.Table("ltag", [{ name: "version", type: "ULONG", value: 1 }, { name: "flags", type: "ULONG", value: 0 }, { name: "numTags", type: "ULONG", value: e2.length }]), n = "", s = 12 + e2.length * 4;
        for (let o = 0; o < e2.length; ++o) {
          let r = n.indexOf(e2[o]);
          r < 0 && (r = n.length, n += e2[o]), t.fields.push({ name: "offset " + o, type: "USHORT", value: s + r }), t.fields.push({ name: "length " + o, type: "USHORT", value: e2[o].length });
        }
        return t.fields.push({ name: "stringPool", type: "CHARARRAY", value: n }), t;
      }
      function jr(e2, t) {
        let n = new x.Parser(e2, t), s = n.parseULong();
        S.argument(s === 1, "Unsupported ltag table version."), n.skip("uLong", 1);
        let o = n.parseULong(), r = [];
        for (let i = 0; i < o; i++) {
          let a = "", c = t + n.parseUShort(), l = n.parseUShort();
          for (let u = c; u < c + l; ++u)
            a += String.fromCharCode(e2.getInt8(u));
          r.push(a);
        }
        return r;
      }
      var Ut = { make: Wr, parse: jr };
      function qr(e2, t) {
        let n = {}, s = new x.Parser(e2, t);
        return n.version = s.parseVersion(), n.numGlyphs = s.parseUShort(), n.version === 1 && (n.maxPoints = s.parseUShort(), n.maxContours = s.parseUShort(), n.maxCompositePoints = s.parseUShort(), n.maxCompositeContours = s.parseUShort(), n.maxZones = s.parseUShort(), n.maxTwilightPoints = s.parseUShort(), n.maxStorage = s.parseUShort(), n.maxFunctionDefs = s.parseUShort(), n.maxInstructionDefs = s.parseUShort(), n.maxStackElements = s.parseUShort(), n.maxSizeOfInstructions = s.parseUShort(), n.maxComponentElements = s.parseUShort(), n.maxComponentDepth = s.parseUShort()), n;
      }
      function Xr(e2) {
        return new g.Table("maxp", [{ name: "version", type: "FIXED", value: 20480 }, { name: "numGlyphs", type: "USHORT", value: e2 }]);
      }
      var Ot = { parse: qr, make: Xr };
      var ls = ["copyright", "fontFamily", "fontSubfamily", "uniqueID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "manufacturerURL", "designerURL", "license", "licenseURL", "reserved", "preferredFamily", "preferredSubfamily", "compatibleFullName", "sampleText", "postScriptFindFontName", "wwsFamily", "wwsSubfamily"], cs = { 0: "en", 1: "fr", 2: "de", 3: "it", 4: "nl", 5: "sv", 6: "es", 7: "da", 8: "pt", 9: "no", 10: "he", 11: "ja", 12: "ar", 13: "fi", 14: "el", 15: "is", 16: "mt", 17: "tr", 18: "hr", 19: "zh-Hant", 20: "ur", 21: "hi", 22: "th", 23: "ko", 24: "lt", 25: "pl", 26: "hu", 27: "es", 28: "lv", 29: "se", 30: "fo", 31: "fa", 32: "ru", 33: "zh", 34: "nl-BE", 35: "ga", 36: "sq", 37: "ro", 38: "cz", 39: "sk", 40: "si", 41: "yi", 42: "sr", 43: "mk", 44: "bg", 45: "uk", 46: "be", 47: "uz", 48: "kk", 49: "az-Cyrl", 50: "az-Arab", 51: "hy", 52: "ka", 53: "mo", 54: "ky", 55: "tg", 56: "tk", 57: "mn-CN", 58: "mn", 59: "ps", 60: "ks", 61: "ku", 62: "sd", 63: "bo", 64: "ne", 65: "sa", 66: "mr", 67: "bn", 68: "as", 69: "gu", 70: "pa", 71: "or", 72: "ml", 73: "kn", 74: "ta", 75: "te", 76: "si", 77: "my", 78: "km", 79: "lo", 80: "vi", 81: "id", 82: "tl", 83: "ms", 84: "ms-Arab", 85: "am", 86: "ti", 87: "om", 88: "so", 89: "sw", 90: "rw", 91: "rn", 92: "ny", 93: "mg", 94: "eo", 128: "cy", 129: "eu", 130: "ca", 131: "la", 132: "qu", 133: "gn", 134: "ay", 135: "tt", 136: "ug", 137: "dz", 138: "jv", 139: "su", 140: "gl", 141: "af", 142: "br", 143: "iu", 144: "gd", 145: "gv", 146: "ga", 147: "to", 148: "el-polyton", 149: "kl", 150: "az", 151: "nn" }, Yr = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 5, 11: 1, 12: 4, 13: 0, 14: 6, 15: 0, 16: 0, 17: 0, 18: 0, 19: 2, 20: 4, 21: 9, 22: 21, 23: 3, 24: 29, 25: 29, 26: 29, 27: 29, 28: 29, 29: 0, 30: 0, 31: 4, 32: 7, 33: 25, 34: 0, 35: 0, 36: 0, 37: 0, 38: 29, 39: 29, 40: 0, 41: 5, 42: 7, 43: 7, 44: 7, 45: 7, 46: 7, 47: 7, 48: 7, 49: 7, 50: 4, 51: 24, 52: 23, 53: 7, 54: 7, 55: 7, 56: 7, 57: 27, 58: 7, 59: 4, 60: 4, 61: 4, 62: 4, 63: 26, 64: 9, 65: 9, 66: 9, 67: 13, 68: 13, 69: 11, 70: 10, 71: 12, 72: 17, 73: 16, 74: 14, 75: 15, 76: 18, 77: 19, 78: 20, 79: 22, 80: 30, 81: 0, 82: 0, 83: 0, 84: 4, 85: 28, 86: 28, 87: 28, 88: 0, 89: 0, 90: 0, 91: 0, 92: 0, 93: 0, 94: 0, 128: 0, 129: 0, 130: 0, 131: 0, 132: 0, 133: 0, 134: 0, 135: 7, 136: 4, 137: 26, 138: 0, 139: 0, 140: 0, 141: 0, 142: 0, 143: 28, 144: 0, 145: 0, 146: 0, 147: 0, 148: 6, 149: 0, 150: 0, 151: 0 }, us = { 1078: "af", 1052: "sq", 1156: "gsw", 1118: "am", 5121: "ar-DZ", 15361: "ar-BH", 3073: "ar", 2049: "ar-IQ", 11265: "ar-JO", 13313: "ar-KW", 12289: "ar-LB", 4097: "ar-LY", 6145: "ary", 8193: "ar-OM", 16385: "ar-QA", 1025: "ar-SA", 10241: "ar-SY", 7169: "aeb", 14337: "ar-AE", 9217: "ar-YE", 1067: "hy", 1101: "as", 2092: "az-Cyrl", 1068: "az", 1133: "ba", 1069: "eu", 1059: "be", 2117: "bn", 1093: "bn-IN", 8218: "bs-Cyrl", 5146: "bs", 1150: "br", 1026: "bg", 1027: "ca", 3076: "zh-HK", 5124: "zh-MO", 2052: "zh", 4100: "zh-SG", 1028: "zh-TW", 1155: "co", 1050: "hr", 4122: "hr-BA", 1029: "cs", 1030: "da", 1164: "prs", 1125: "dv", 2067: "nl-BE", 1043: "nl", 3081: "en-AU", 10249: "en-BZ", 4105: "en-CA", 9225: "en-029", 16393: "en-IN", 6153: "en-IE", 8201: "en-JM", 17417: "en-MY", 5129: "en-NZ", 13321: "en-PH", 18441: "en-SG", 7177: "en-ZA", 11273: "en-TT", 2057: "en-GB", 1033: "en", 12297: "en-ZW", 1061: "et", 1080: "fo", 1124: "fil", 1035: "fi", 2060: "fr-BE", 3084: "fr-CA", 1036: "fr", 5132: "fr-LU", 6156: "fr-MC", 4108: "fr-CH", 1122: "fy", 1110: "gl", 1079: "ka", 3079: "de-AT", 1031: "de", 5127: "de-LI", 4103: "de-LU", 2055: "de-CH", 1032: "el", 1135: "kl", 1095: "gu", 1128: "ha", 1037: "he", 1081: "hi", 1038: "hu", 1039: "is", 1136: "ig", 1057: "id", 1117: "iu", 2141: "iu-Latn", 2108: "ga", 1076: "xh", 1077: "zu", 1040: "it", 2064: "it-CH", 1041: "ja", 1099: "kn", 1087: "kk", 1107: "km", 1158: "quc", 1159: "rw", 1089: "sw", 1111: "kok", 1042: "ko", 1088: "ky", 1108: "lo", 1062: "lv", 1063: "lt", 2094: "dsb", 1134: "lb", 1071: "mk", 2110: "ms-BN", 1086: "ms", 1100: "ml", 1082: "mt", 1153: "mi", 1146: "arn", 1102: "mr", 1148: "moh", 1104: "mn", 2128: "mn-CN", 1121: "ne", 1044: "nb", 2068: "nn", 1154: "oc", 1096: "or", 1123: "ps", 1045: "pl", 1046: "pt", 2070: "pt-PT", 1094: "pa", 1131: "qu-BO", 2155: "qu-EC", 3179: "qu", 1048: "ro", 1047: "rm", 1049: "ru", 9275: "smn", 4155: "smj-NO", 5179: "smj", 3131: "se-FI", 1083: "se", 2107: "se-SE", 8251: "sms", 6203: "sma-NO", 7227: "sms", 1103: "sa", 7194: "sr-Cyrl-BA", 3098: "sr", 6170: "sr-Latn-BA", 2074: "sr-Latn", 1132: "nso", 1074: "tn", 1115: "si", 1051: "sk", 1060: "sl", 11274: "es-AR", 16394: "es-BO", 13322: "es-CL", 9226: "es-CO", 5130: "es-CR", 7178: "es-DO", 12298: "es-EC", 17418: "es-SV", 4106: "es-GT", 18442: "es-HN", 2058: "es-MX", 19466: "es-NI", 6154: "es-PA", 15370: "es-PY", 10250: "es-PE", 20490: "es-PR", 3082: "es", 1034: "es", 21514: "es-US", 14346: "es-UY", 8202: "es-VE", 2077: "sv-FI", 1053: "sv", 1114: "syr", 1064: "tg", 2143: "tzm", 1097: "ta", 1092: "tt", 1098: "te", 1054: "th", 1105: "bo", 1055: "tr", 1090: "tk", 1152: "ug", 1058: "uk", 1070: "hsb", 1056: "ur", 2115: "uz-Cyrl", 1091: "uz", 1066: "vi", 1106: "cy", 1160: "wo", 1157: "sah", 1144: "ii", 1130: "yo" };
      function Zr(e2, t, n) {
        switch (e2) {
          case 0:
            if (t === 65535)
              return "und";
            if (n)
              return n[t];
            break;
          case 1:
            return cs[t];
          case 3:
            return us[t];
        }
      }
      var cn = "utf-16", $r = { 0: "macintosh", 1: "x-mac-japanese", 2: "x-mac-chinesetrad", 3: "x-mac-korean", 6: "x-mac-greek", 7: "x-mac-cyrillic", 9: "x-mac-devanagai", 10: "x-mac-gurmukhi", 11: "x-mac-gujarati", 12: "x-mac-oriya", 13: "x-mac-bengali", 14: "x-mac-tamil", 15: "x-mac-telugu", 16: "x-mac-kannada", 17: "x-mac-malayalam", 18: "x-mac-sinhalese", 19: "x-mac-burmese", 20: "x-mac-khmer", 21: "x-mac-thai", 22: "x-mac-lao", 23: "x-mac-georgian", 24: "x-mac-armenian", 25: "x-mac-chinesesimp", 26: "x-mac-tibetan", 27: "x-mac-mongolian", 28: "x-mac-ethiopic", 29: "x-mac-ce", 30: "x-mac-vietnamese", 31: "x-mac-extarabic" }, Kr = { 15: "x-mac-icelandic", 17: "x-mac-turkish", 18: "x-mac-croatian", 24: "x-mac-ce", 25: "x-mac-ce", 26: "x-mac-ce", 27: "x-mac-ce", 28: "x-mac-ce", 30: "x-mac-icelandic", 37: "x-mac-romanian", 38: "x-mac-ce", 39: "x-mac-ce", 40: "x-mac-ce", 143: "x-mac-inuit", 146: "x-mac-gaelic" };
      function ps(e2, t, n) {
        switch (e2) {
          case 0:
            return cn;
          case 1:
            return Kr[n] || $r[t];
          case 3:
            if (t === 1 || t === 10)
              return cn;
            break;
        }
      }
      var fs2 = { 0: "unicode", 1: "macintosh", 2: "reserved", 3: "windows" };
      function Qr(e2) {
        return fs2[e2];
      }
      function Jr(e2, t, n) {
        let s = {}, o = new x.Parser(e2, t), r = o.parseUShort(), i = o.parseUShort(), a = o.offset + o.parseUShort();
        for (let c = 0; c < i; c++) {
          let l = o.parseUShort(), u = o.parseUShort(), p = o.parseUShort(), f = o.parseUShort(), h = ls[f] || f, m = o.parseUShort(), b = o.parseUShort(), y = Zr(l, p, n), O = ps(l, u, p), k = Qr(l);
          if (O !== void 0 && y !== void 0 && k !== void 0) {
            let L;
            if (O === cn ? L = Te.UTF16(e2, a + b, m) : L = Te.MACSTRING(e2, a + b, m, O), L) {
              let D = s[k];
              D === void 0 && (D = s[k] = {});
              let w = D[h];
              w === void 0 && (w = D[h] = {}), w[y] = L;
            }
          }
        }
        return r === 1 && o.parseUShort(), s;
      }
      function Ct(e2) {
        let t = {};
        for (let n in e2)
          t[e2[n]] = parseInt(n);
        return t;
      }
      function is(e2, t, n, s, o, r) {
        return new g.Record("NameRecord", [{ name: "platformID", type: "USHORT", value: e2 }, { name: "encodingID", type: "USHORT", value: t }, { name: "languageID", type: "USHORT", value: n }, { name: "nameID", type: "USHORT", value: s }, { name: "length", type: "USHORT", value: o }, { name: "offset", type: "USHORT", value: r }]);
      }
      function ei(e2, t) {
        let n = e2.length, s = t.length - n + 1;
        e:
          for (let o = 0; o < s; o++)
            for (; o < s; o++) {
              for (let r = 0; r < n; r++)
                if (t[o + r] !== e2[r])
                  continue e;
              return o;
            }
        return -1;
      }
      function as(e2, t) {
        let n = ei(e2, t);
        if (n < 0) {
          n = t.length;
          let s = 0, o = e2.length;
          for (; s < o; ++s)
            t.push(e2[s]);
        }
        return n;
      }
      function ti(e2, t) {
        let n = Ct(fs2), s = Ct(cs), o = Ct(us), r = [], i = [];
        for (let c in e2) {
          let l, u = [], p = {}, f = Ct(ls), h = n[c];
          for (let m in e2[c]) {
            let b = f[m];
            if (b === void 0 && (b = m), l = parseInt(b), isNaN(l))
              throw new Error('Name table entry "' + m + '" does not exist, see nameTableNames for complete list.');
            p[l] = e2[c][m], u.push(l);
          }
          for (let m = 0; m < u.length; m++) {
            l = u[m];
            let b = p[l];
            for (let y in b) {
              let O = b[y];
              if (h === 1 || h === 0) {
                let k = s[y], L = Yr[k], D = ps(h, L, k), w = v.MACSTRING(O, D);
                if (h === 0 && (k = t.indexOf(y), k < 0 && (k = t.length, t.push(y)), L = 4, w = v.UTF16(O)), w !== void 0) {
                  let H = as(w, i);
                  r.push(is(h, L, k, l, w.length, H));
                }
              }
              if (h === 3) {
                let k = o[y];
                if (k !== void 0) {
                  let L = v.UTF16(O), D = as(L, i);
                  r.push(is(3, 1, k, l, L.length, D));
                }
              }
            }
          }
        }
        r.sort(function(c, l) {
          return c.platformID - l.platformID || c.encodingID - l.encodingID || c.languageID - l.languageID || c.nameID - l.nameID;
        });
        let a = new g.Table("name", [{ name: "format", type: "USHORT", value: 0 }, { name: "count", type: "USHORT", value: r.length }, { name: "stringOffset", type: "USHORT", value: 6 + r.length * 12 }]);
        for (let c = 0; c < r.length; c++)
          a.fields.push({ name: "record_" + c, type: "RECORD", value: r[c] });
        return a.fields.push({ name: "strings", type: "LITERAL", value: i }), a;
      }
      var Lt = { parse: Jr, make: ti };
      var un = [{ begin: 0, end: 127 }, { begin: 128, end: 255 }, { begin: 256, end: 383 }, { begin: 384, end: 591 }, { begin: 592, end: 687 }, { begin: 688, end: 767 }, { begin: 768, end: 879 }, { begin: 880, end: 1023 }, { begin: 11392, end: 11519 }, { begin: 1024, end: 1279 }, { begin: 1328, end: 1423 }, { begin: 1424, end: 1535 }, { begin: 42240, end: 42559 }, { begin: 1536, end: 1791 }, { begin: 1984, end: 2047 }, { begin: 2304, end: 2431 }, { begin: 2432, end: 2559 }, { begin: 2560, end: 2687 }, { begin: 2688, end: 2815 }, { begin: 2816, end: 2943 }, { begin: 2944, end: 3071 }, { begin: 3072, end: 3199 }, { begin: 3200, end: 3327 }, { begin: 3328, end: 3455 }, { begin: 3584, end: 3711 }, { begin: 3712, end: 3839 }, { begin: 4256, end: 4351 }, { begin: 6912, end: 7039 }, { begin: 4352, end: 4607 }, { begin: 7680, end: 7935 }, { begin: 7936, end: 8191 }, { begin: 8192, end: 8303 }, { begin: 8304, end: 8351 }, { begin: 8352, end: 8399 }, { begin: 8400, end: 8447 }, { begin: 8448, end: 8527 }, { begin: 8528, end: 8591 }, { begin: 8592, end: 8703 }, { begin: 8704, end: 8959 }, { begin: 8960, end: 9215 }, { begin: 9216, end: 9279 }, { begin: 9280, end: 9311 }, { begin: 9312, end: 9471 }, { begin: 9472, end: 9599 }, { begin: 9600, end: 9631 }, { begin: 9632, end: 9727 }, { begin: 9728, end: 9983 }, { begin: 9984, end: 10175 }, { begin: 12288, end: 12351 }, { begin: 12352, end: 12447 }, { begin: 12448, end: 12543 }, { begin: 12544, end: 12591 }, { begin: 12592, end: 12687 }, { begin: 43072, end: 43135 }, { begin: 12800, end: 13055 }, { begin: 13056, end: 13311 }, { begin: 44032, end: 55215 }, { begin: 55296, end: 57343 }, { begin: 67840, end: 67871 }, { begin: 19968, end: 40959 }, { begin: 57344, end: 63743 }, { begin: 12736, end: 12783 }, { begin: 64256, end: 64335 }, { begin: 64336, end: 65023 }, { begin: 65056, end: 65071 }, { begin: 65040, end: 65055 }, { begin: 65104, end: 65135 }, { begin: 65136, end: 65279 }, { begin: 65280, end: 65519 }, { begin: 65520, end: 65535 }, { begin: 3840, end: 4095 }, { begin: 1792, end: 1871 }, { begin: 1920, end: 1983 }, { begin: 3456, end: 3583 }, { begin: 4096, end: 4255 }, { begin: 4608, end: 4991 }, { begin: 5024, end: 5119 }, { begin: 5120, end: 5759 }, { begin: 5760, end: 5791 }, { begin: 5792, end: 5887 }, { begin: 6016, end: 6143 }, { begin: 6144, end: 6319 }, { begin: 10240, end: 10495 }, { begin: 40960, end: 42127 }, { begin: 5888, end: 5919 }, { begin: 66304, end: 66351 }, { begin: 66352, end: 66383 }, { begin: 66560, end: 66639 }, { begin: 118784, end: 119039 }, { begin: 119808, end: 120831 }, { begin: 1044480, end: 1048573 }, { begin: 65024, end: 65039 }, { begin: 917504, end: 917631 }, { begin: 6400, end: 6479 }, { begin: 6480, end: 6527 }, { begin: 6528, end: 6623 }, { begin: 6656, end: 6687 }, { begin: 11264, end: 11359 }, { begin: 11568, end: 11647 }, { begin: 19904, end: 19967 }, { begin: 43008, end: 43055 }, { begin: 65536, end: 65663 }, { begin: 65856, end: 65935 }, { begin: 66432, end: 66463 }, { begin: 66464, end: 66527 }, { begin: 66640, end: 66687 }, { begin: 66688, end: 66735 }, { begin: 67584, end: 67647 }, { begin: 68096, end: 68191 }, { begin: 119552, end: 119647 }, { begin: 73728, end: 74751 }, { begin: 119648, end: 119679 }, { begin: 7040, end: 7103 }, { begin: 7168, end: 7247 }, { begin: 7248, end: 7295 }, { begin: 43136, end: 43231 }, { begin: 43264, end: 43311 }, { begin: 43312, end: 43359 }, { begin: 43520, end: 43615 }, { begin: 65936, end: 65999 }, { begin: 66e3, end: 66047 }, { begin: 66208, end: 66271 }, { begin: 127024, end: 127135 }];
      function ni(e2) {
        for (let t = 0; t < un.length; t += 1) {
          let n = un[t];
          if (e2 >= n.begin && e2 < n.end)
            return t;
        }
        return -1;
      }
      function si(e2, t) {
        let n = {}, s = new x.Parser(e2, t);
        n.version = s.parseUShort(), n.xAvgCharWidth = s.parseShort(), n.usWeightClass = s.parseUShort(), n.usWidthClass = s.parseUShort(), n.fsType = s.parseUShort(), n.ySubscriptXSize = s.parseShort(), n.ySubscriptYSize = s.parseShort(), n.ySubscriptXOffset = s.parseShort(), n.ySubscriptYOffset = s.parseShort(), n.ySuperscriptXSize = s.parseShort(), n.ySuperscriptYSize = s.parseShort(), n.ySuperscriptXOffset = s.parseShort(), n.ySuperscriptYOffset = s.parseShort(), n.yStrikeoutSize = s.parseShort(), n.yStrikeoutPosition = s.parseShort(), n.sFamilyClass = s.parseShort(), n.panose = [];
        for (let o = 0; o < 10; o++)
          n.panose[o] = s.parseByte();
        return n.ulUnicodeRange1 = s.parseULong(), n.ulUnicodeRange2 = s.parseULong(), n.ulUnicodeRange3 = s.parseULong(), n.ulUnicodeRange4 = s.parseULong(), n.achVendID = String.fromCharCode(s.parseByte(), s.parseByte(), s.parseByte(), s.parseByte()), n.fsSelection = s.parseUShort(), n.usFirstCharIndex = s.parseUShort(), n.usLastCharIndex = s.parseUShort(), n.sTypoAscender = s.parseShort(), n.sTypoDescender = s.parseShort(), n.sTypoLineGap = s.parseShort(), n.usWinAscent = s.parseUShort(), n.usWinDescent = s.parseUShort(), n.version >= 1 && (n.ulCodePageRange1 = s.parseULong(), n.ulCodePageRange2 = s.parseULong()), n.version >= 2 && (n.sxHeight = s.parseShort(), n.sCapHeight = s.parseShort(), n.usDefaultChar = s.parseUShort(), n.usBreakChar = s.parseUShort(), n.usMaxContent = s.parseUShort()), n;
      }
      function oi(e2) {
        return new g.Table("OS/2", [{ name: "version", type: "USHORT", value: 3 }, { name: "xAvgCharWidth", type: "SHORT", value: 0 }, { name: "usWeightClass", type: "USHORT", value: 0 }, { name: "usWidthClass", type: "USHORT", value: 0 }, { name: "fsType", type: "USHORT", value: 0 }, { name: "ySubscriptXSize", type: "SHORT", value: 650 }, { name: "ySubscriptYSize", type: "SHORT", value: 699 }, { name: "ySubscriptXOffset", type: "SHORT", value: 0 }, { name: "ySubscriptYOffset", type: "SHORT", value: 140 }, { name: "ySuperscriptXSize", type: "SHORT", value: 650 }, { name: "ySuperscriptYSize", type: "SHORT", value: 699 }, { name: "ySuperscriptXOffset", type: "SHORT", value: 0 }, { name: "ySuperscriptYOffset", type: "SHORT", value: 479 }, { name: "yStrikeoutSize", type: "SHORT", value: 49 }, { name: "yStrikeoutPosition", type: "SHORT", value: 258 }, { name: "sFamilyClass", type: "SHORT", value: 0 }, { name: "bFamilyType", type: "BYTE", value: 0 }, { name: "bSerifStyle", type: "BYTE", value: 0 }, { name: "bWeight", type: "BYTE", value: 0 }, { name: "bProportion", type: "BYTE", value: 0 }, { name: "bContrast", type: "BYTE", value: 0 }, { name: "bStrokeVariation", type: "BYTE", value: 0 }, { name: "bArmStyle", type: "BYTE", value: 0 }, { name: "bLetterform", type: "BYTE", value: 0 }, { name: "bMidline", type: "BYTE", value: 0 }, { name: "bXHeight", type: "BYTE", value: 0 }, { name: "ulUnicodeRange1", type: "ULONG", value: 0 }, { name: "ulUnicodeRange2", type: "ULONG", value: 0 }, { name: "ulUnicodeRange3", type: "ULONG", value: 0 }, { name: "ulUnicodeRange4", type: "ULONG", value: 0 }, { name: "achVendID", type: "CHARARRAY", value: "XXXX" }, { name: "fsSelection", type: "USHORT", value: 0 }, { name: "usFirstCharIndex", type: "USHORT", value: 0 }, { name: "usLastCharIndex", type: "USHORT", value: 0 }, { name: "sTypoAscender", type: "SHORT", value: 0 }, { name: "sTypoDescender", type: "SHORT", value: 0 }, { name: "sTypoLineGap", type: "SHORT", value: 0 }, { name: "usWinAscent", type: "USHORT", value: 0 }, { name: "usWinDescent", type: "USHORT", value: 0 }, { name: "ulCodePageRange1", type: "ULONG", value: 0 }, { name: "ulCodePageRange2", type: "ULONG", value: 0 }, { name: "sxHeight", type: "SHORT", value: 0 }, { name: "sCapHeight", type: "SHORT", value: 0 }, { name: "usDefaultChar", type: "USHORT", value: 0 }, { name: "usBreakChar", type: "USHORT", value: 0 }, { name: "usMaxContext", type: "USHORT", value: 0 }], e2);
      }
      var $e = { parse: si, make: oi, unicodeRanges: un, getUnicodeRange: ni };
      function ri(e2, t) {
        let n = {}, s = new x.Parser(e2, t);
        switch (n.version = s.parseVersion(), n.italicAngle = s.parseFixed(), n.underlinePosition = s.parseShort(), n.underlineThickness = s.parseShort(), n.isFixedPitch = s.parseULong(), n.minMemType42 = s.parseULong(), n.maxMemType42 = s.parseULong(), n.minMemType1 = s.parseULong(), n.maxMemType1 = s.parseULong(), n.version) {
          case 1:
            n.names = ke.slice();
            break;
          case 2:
            n.numberOfGlyphs = s.parseUShort(), n.glyphNameIndex = new Array(n.numberOfGlyphs);
            for (let o = 0; o < n.numberOfGlyphs; o++)
              n.glyphNameIndex[o] = s.parseUShort();
            n.names = [];
            for (let o = 0; o < n.numberOfGlyphs; o++)
              if (n.glyphNameIndex[o] >= ke.length) {
                let r = s.parseChar();
                n.names.push(s.parseString(r));
              }
            break;
          case 2.5:
            n.numberOfGlyphs = s.parseUShort(), n.offset = new Array(n.numberOfGlyphs);
            for (let o = 0; o < n.numberOfGlyphs; o++)
              n.offset[o] = s.parseChar();
            break;
        }
        return n;
      }
      function ii(e2) {
        let { italicAngle: t = 0, underlinePosition: n = 0, underlineThickness: s = 0, isFixedPitch: o = 0, minMemType42: r = 0, maxMemType42: i = 0, minMemType1: a = 0, maxMemType1: c = 0 } = e2 || {};
        return new g.Table("post", [{ name: "version", type: "FIXED", value: 196608 }, { name: "italicAngle", type: "FIXED", value: t }, { name: "underlinePosition", type: "FWORD", value: n }, { name: "underlineThickness", type: "FWORD", value: s }, { name: "isFixedPitch", type: "ULONG", value: o }, { name: "minMemType42", type: "ULONG", value: r }, { name: "maxMemType42", type: "ULONG", value: i }, { name: "minMemType1", type: "ULONG", value: a }, { name: "maxMemType1", type: "ULONG", value: c }]);
      }
      var Rt = { parse: ri, make: ii };
      var ue = new Array(9);
      ue[1] = function() {
        let t = this.offset + this.relativeOffset, n = this.parseUShort();
        if (n === 1)
          return { substFormat: 1, coverage: this.parsePointer(d.coverage), deltaGlyphId: this.parseShort() };
        if (n === 2)
          return { substFormat: 2, coverage: this.parsePointer(d.coverage), substitute: this.parseOffset16List() };
        S.assert(false, "0x" + t.toString(16) + ": lookup type 1 format must be 1 or 2.");
      };
      ue[2] = function() {
        let t = this.parseUShort();
        return S.argument(t === 1, "GSUB Multiple Substitution Subtable identifier-format must be 1"), { substFormat: t, coverage: this.parsePointer(d.coverage), sequences: this.parseListOfLists() };
      };
      ue[3] = function() {
        let t = this.parseUShort();
        return S.argument(t === 1, "GSUB Alternate Substitution Subtable identifier-format must be 1"), { substFormat: t, coverage: this.parsePointer(d.coverage), alternateSets: this.parseListOfLists() };
      };
      ue[4] = function() {
        let t = this.parseUShort();
        return S.argument(t === 1, "GSUB ligature table identifier-format must be 1"), { substFormat: t, coverage: this.parsePointer(d.coverage), ligatureSets: this.parseListOfLists(function() {
          return { ligGlyph: this.parseUShort(), components: this.parseUShortList(this.parseUShort() - 1) };
        }) };
      };
      var Ge = { sequenceIndex: d.uShort, lookupListIndex: d.uShort };
      ue[5] = function() {
        let t = this.offset + this.relativeOffset, n = this.parseUShort();
        if (n === 1)
          return { substFormat: n, coverage: this.parsePointer(d.coverage), ruleSets: this.parseListOfLists(function() {
            let s = this.parseUShort(), o = this.parseUShort();
            return { input: this.parseUShortList(s - 1), lookupRecords: this.parseRecordList(o, Ge) };
          }) };
        if (n === 2)
          return { substFormat: n, coverage: this.parsePointer(d.coverage), classDef: this.parsePointer(d.classDef), classSets: this.parseListOfLists(function() {
            let s = this.parseUShort(), o = this.parseUShort();
            return { classes: this.parseUShortList(s - 1), lookupRecords: this.parseRecordList(o, Ge) };
          }) };
        if (n === 3) {
          let s = this.parseUShort(), o = this.parseUShort();
          return { substFormat: n, coverages: this.parseList(s, d.pointer(d.coverage)), lookupRecords: this.parseRecordList(o, Ge) };
        }
        S.assert(false, "0x" + t.toString(16) + ": lookup type 5 format must be 1, 2 or 3.");
      };
      ue[6] = function() {
        let t = this.offset + this.relativeOffset, n = this.parseUShort();
        if (n === 1)
          return { substFormat: 1, coverage: this.parsePointer(d.coverage), chainRuleSets: this.parseListOfLists(function() {
            return { backtrack: this.parseUShortList(), input: this.parseUShortList(this.parseShort() - 1), lookahead: this.parseUShortList(), lookupRecords: this.parseRecordList(Ge) };
          }) };
        if (n === 2)
          return { substFormat: 2, coverage: this.parsePointer(d.coverage), backtrackClassDef: this.parsePointer(d.classDef), inputClassDef: this.parsePointer(d.classDef), lookaheadClassDef: this.parsePointer(d.classDef), chainClassSet: this.parseListOfLists(function() {
            return { backtrack: this.parseUShortList(), input: this.parseUShortList(this.parseShort() - 1), lookahead: this.parseUShortList(), lookupRecords: this.parseRecordList(Ge) };
          }) };
        if (n === 3)
          return { substFormat: 3, backtrackCoverage: this.parseList(d.pointer(d.coverage)), inputCoverage: this.parseList(d.pointer(d.coverage)), lookaheadCoverage: this.parseList(d.pointer(d.coverage)), lookupRecords: this.parseRecordList(Ge) };
        S.assert(false, "0x" + t.toString(16) + ": lookup type 6 format must be 1, 2 or 3.");
      };
      ue[7] = function() {
        let t = this.parseUShort();
        S.argument(t === 1, "GSUB Extension Substitution subtable identifier-format must be 1");
        let n = this.parseUShort(), s = new d(this.data, this.offset + this.parseULong());
        return { substFormat: 1, lookupType: n, extension: ue[n].call(s) };
      };
      ue[8] = function() {
        let t = this.parseUShort();
        return S.argument(t === 1, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"), { substFormat: t, coverage: this.parsePointer(d.coverage), backtrackCoverage: this.parseList(d.pointer(d.coverage)), lookaheadCoverage: this.parseList(d.pointer(d.coverage)), substitutes: this.parseUShortList() };
      };
      function ai(e2, t) {
        t = t || 0;
        let n = new d(e2, t), s = n.parseVersion(1);
        return S.argument(s === 1 || s === 1.1, "Unsupported GSUB table version."), s === 1 ? { version: s, scripts: n.parseScriptList(), features: n.parseFeatureList(), lookups: n.parseLookupList(ue) } : { version: s, scripts: n.parseScriptList(), features: n.parseFeatureList(), lookups: n.parseLookupList(ue), variations: n.parseFeatureVariationsList() };
      }
      var Re = new Array(9);
      Re[1] = function(t) {
        if (t.substFormat === 1)
          return new g.Table("substitutionTable", [{ name: "substFormat", type: "USHORT", value: 1 }, { name: "coverage", type: "TABLE", value: new g.Coverage(t.coverage) }, { name: "deltaGlyphID", type: "SHORT", value: t.deltaGlyphId }]);
        if (t.substFormat === 2)
          return new g.Table("substitutionTable", [{ name: "substFormat", type: "USHORT", value: 2 }, { name: "coverage", type: "TABLE", value: new g.Coverage(t.coverage) }].concat(g.ushortList("substitute", t.substitute)));
        S.fail("Lookup type 1 substFormat must be 1 or 2.");
      };
      Re[2] = function(t) {
        return S.assert(t.substFormat === 1, "Lookup type 2 substFormat must be 1."), new g.Table("substitutionTable", [{ name: "substFormat", type: "USHORT", value: 1 }, { name: "coverage", type: "TABLE", value: new g.Coverage(t.coverage) }].concat(g.tableList("seqSet", t.sequences, function(n) {
          return new g.Table("sequenceSetTable", g.ushortList("sequence", n));
        })));
      };
      Re[3] = function(t) {
        return S.assert(t.substFormat === 1, "Lookup type 3 substFormat must be 1."), new g.Table("substitutionTable", [{ name: "substFormat", type: "USHORT", value: 1 }, { name: "coverage", type: "TABLE", value: new g.Coverage(t.coverage) }].concat(g.tableList("altSet", t.alternateSets, function(n) {
          return new g.Table("alternateSetTable", g.ushortList("alternate", n));
        })));
      };
      Re[4] = function(t) {
        return S.assert(t.substFormat === 1, "Lookup type 4 substFormat must be 1."), new g.Table("substitutionTable", [{ name: "substFormat", type: "USHORT", value: 1 }, { name: "coverage", type: "TABLE", value: new g.Coverage(t.coverage) }].concat(g.tableList("ligSet", t.ligatureSets, function(n) {
          return new g.Table("ligatureSetTable", g.tableList("ligature", n, function(s) {
            return new g.Table("ligatureTable", [{ name: "ligGlyph", type: "USHORT", value: s.ligGlyph }].concat(g.ushortList("component", s.components, s.components.length + 1)));
          }));
        })));
      };
      Re[5] = function(t) {
        if (t.substFormat === 1)
          return new g.Table("contextualSubstitutionTable", [{ name: "substFormat", type: "USHORT", value: t.substFormat }, { name: "coverage", type: "TABLE", value: new g.Coverage(t.coverage) }].concat(g.tableList("sequenceRuleSet", t.ruleSets, function(n) {
            return n ? new g.Table("sequenceRuleSetTable", g.tableList("sequenceRule", n, function(s) {
              let o = g.ushortList("seqLookup", [], s.lookupRecords.length).concat(g.ushortList("inputSequence", s.input, s.input.length + 1));
              [o[0], o[1]] = [o[1], o[0]];
              for (let r = 0; r < s.lookupRecords.length; r++) {
                let i = s.lookupRecords[r];
                o = o.concat({ name: "sequenceIndex" + r, type: "USHORT", value: i.sequenceIndex }).concat({ name: "lookupListIndex" + r, type: "USHORT", value: i.lookupListIndex });
              }
              return new g.Table("sequenceRuleTable", o);
            })) : new g.Table("NULL", null);
          })));
        if (t.substFormat === 2)
          return new g.Table("contextualSubstitutionTable", [{ name: "substFormat", type: "USHORT", value: t.substFormat }, { name: "coverage", type: "TABLE", value: new g.Coverage(t.coverage) }, { name: "classDef", type: "TABLE", value: new g.ClassDef(t.classDef) }].concat(g.tableList("classSeqRuleSet", t.classSets, function(n) {
            return n ? new g.Table("classSeqRuleSetTable", g.tableList("classSeqRule", n, function(s) {
              let o = g.ushortList("classes", s.classes, s.classes.length + 1).concat(g.ushortList("seqLookupCount", [], s.lookupRecords.length));
              for (let r = 0; r < s.lookupRecords.length; r++) {
                let i = s.lookupRecords[r];
                o = o.concat({ name: "sequenceIndex" + r, type: "USHORT", value: i.sequenceIndex }).concat({ name: "lookupListIndex" + r, type: "USHORT", value: i.lookupListIndex });
              }
              return new g.Table("classSeqRuleTable", o);
            })) : new g.Table("NULL", null);
          })));
        if (t.substFormat === 3) {
          let n = [{ name: "substFormat", type: "USHORT", value: t.substFormat }];
          n.push({ name: "inputGlyphCount", type: "USHORT", value: t.coverages.length }), n.push({ name: "substitutionCount", type: "USHORT", value: t.lookupRecords.length });
          for (let o = 0; o < t.coverages.length; o++) {
            let r = t.coverages[o];
            n.push({ name: "inputCoverage" + o, type: "TABLE", value: new g.Coverage(r) });
          }
          for (let o = 0; o < t.lookupRecords.length; o++) {
            let r = t.lookupRecords[o];
            n = n.concat({ name: "sequenceIndex" + o, type: "USHORT", value: r.sequenceIndex }).concat({ name: "lookupListIndex" + o, type: "USHORT", value: r.lookupListIndex });
          }
          return new g.Table("contextualSubstitutionTable", n);
        }
        S.assert(false, "lookup type 5 format must be 1, 2 or 3.");
      };
      Re[6] = function(t) {
        if (t.substFormat === 1)
          return new g.Table("chainContextTable", [{ name: "substFormat", type: "USHORT", value: t.substFormat }, { name: "coverage", type: "TABLE", value: new g.Coverage(t.coverage) }].concat(g.tableList("chainRuleSet", t.chainRuleSets, function(s) {
            return new g.Table("chainRuleSetTable", g.tableList("chainRule", s, function(o) {
              let r = g.ushortList("backtrackGlyph", o.backtrack, o.backtrack.length).concat(g.ushortList("inputGlyph", o.input, o.input.length + 1)).concat(g.ushortList("lookaheadGlyph", o.lookahead, o.lookahead.length)).concat(g.ushortList("substitution", [], o.lookupRecords.length));
              for (let i = 0; i < o.lookupRecords.length; i++) {
                let a = o.lookupRecords[i];
                r = r.concat({ name: "sequenceIndex" + i, type: "USHORT", value: a.sequenceIndex }).concat({ name: "lookupListIndex" + i, type: "USHORT", value: a.lookupListIndex });
              }
              return new g.Table("chainRuleTable", r);
            }));
          })));
        if (t.substFormat === 2)
          S.assert(false, "lookup type 6 format 2 is not yet supported.");
        else if (t.substFormat === 3) {
          let n = [{ name: "substFormat", type: "USHORT", value: t.substFormat }];
          n.push({ name: "backtrackGlyphCount", type: "USHORT", value: t.backtrackCoverage.length });
          for (let o = 0; o < t.backtrackCoverage.length; o++) {
            let r = t.backtrackCoverage[o];
            n.push({ name: "backtrackCoverage" + o, type: "TABLE", value: new g.Coverage(r) });
          }
          n.push({ name: "inputGlyphCount", type: "USHORT", value: t.inputCoverage.length });
          for (let o = 0; o < t.inputCoverage.length; o++) {
            let r = t.inputCoverage[o];
            n.push({ name: "inputCoverage" + o, type: "TABLE", value: new g.Coverage(r) });
          }
          n.push({ name: "lookaheadGlyphCount", type: "USHORT", value: t.lookaheadCoverage.length });
          for (let o = 0; o < t.lookaheadCoverage.length; o++) {
            let r = t.lookaheadCoverage[o];
            n.push({ name: "lookaheadCoverage" + o, type: "TABLE", value: new g.Coverage(r) });
          }
          n.push({ name: "substitutionCount", type: "USHORT", value: t.lookupRecords.length });
          for (let o = 0; o < t.lookupRecords.length; o++) {
            let r = t.lookupRecords[o];
            n = n.concat({ name: "sequenceIndex" + o, type: "USHORT", value: r.sequenceIndex }).concat({ name: "lookupListIndex" + o, type: "USHORT", value: r.lookupListIndex });
          }
          return new g.Table("chainContextTable", n);
        }
        S.assert(false, "lookup type 6 format must be 1, 2 or 3.");
      };
      function li(e2) {
        return new g.Table("GSUB", [{ name: "version", type: "ULONG", value: 65536 }, { name: "scripts", type: "TABLE", value: new g.ScriptList(e2.scripts) }, { name: "features", type: "TABLE", value: new g.FeatureList(e2.features) }, { name: "lookups", type: "TABLE", value: new g.LookupList(e2.lookups, Re) }]);
      }
      var Et = { parse: ai, make: li };
      function ci(e2, t) {
        let n = new x.Parser(e2, t), s = n.parseULong();
        S.argument(s === 1, "Unsupported META table version."), n.parseULong(), n.parseULong();
        let o = n.parseULong(), r = {};
        for (let i = 0; i < o; i++) {
          let a = n.parseTag(), c = n.parseULong(), l = n.parseULong();
          if (a === "appl" || a === "bild")
            continue;
          let u = Te.UTF8(e2, t + c, l);
          r[a] = u;
        }
        return r;
      }
      function ui(e2) {
        let t = Object.keys(e2).length, n = "", s = 16 + t * 12, o = new g.Table("meta", [{ name: "version", type: "ULONG", value: 1 }, { name: "flags", type: "ULONG", value: 0 }, { name: "offset", type: "ULONG", value: s }, { name: "numTags", type: "ULONG", value: t }]);
        for (let r in e2) {
          let i = n.length;
          n += e2[r], o.fields.push({ name: "tag " + r, type: "TAG", value: r }), o.fields.push({ name: "offset " + r, type: "ULONG", value: s + i }), o.fields.push({ name: "length " + r, type: "ULONG", value: e2[r].length });
        }
        return o.fields.push({ name: "stringPool", type: "CHARARRAY", value: n }), o;
      }
      var wt = { parse: ci, make: ui };
      function pi(e2, t) {
        let n = new d(e2, t), s = n.parseUShort();
        S.argument(s === 0, "Only COLRv0 supported.");
        let o = n.parseUShort(), r = n.parseOffset32(), i = n.parseOffset32(), a = n.parseUShort();
        n.relativeOffset = r;
        let c = n.parseRecordList(o, { glyphID: d.uShort, firstLayerIndex: d.uShort, numLayers: d.uShort });
        n.relativeOffset = i;
        let l = n.parseRecordList(a, { glyphID: d.uShort, paletteIndex: d.uShort });
        return { version: s, baseGlyphRecords: c, layerRecords: l };
      }
      function fi({ version: e2 = 0, baseGlyphRecords: t = [], layerRecords: n = [] }) {
        S.argument(e2 === 0, "Only COLRv0 supported.");
        let s = 14, o = s + t.length * 6;
        return new g.Table("COLR", [{ name: "version", type: "USHORT", value: e2 }, { name: "numBaseGlyphRecords", type: "USHORT", value: t.length }, { name: "baseGlyphRecordsOffset", type: "ULONG", value: s }, { name: "layerRecordsOffset", type: "ULONG", value: o }, { name: "numLayerRecords", type: "USHORT", value: n.length }, ...t.map((r, i) => [{ name: "glyphID_" + i, type: "USHORT", value: r.glyphID }, { name: "firstLayerIndex_" + i, type: "USHORT", value: r.firstLayerIndex }, { name: "numLayers_" + i, type: "USHORT", value: r.numLayers }]).flat(), ...n.map((r, i) => [{ name: "LayerGlyphID_" + i, type: "USHORT", value: r.glyphID }, { name: "paletteIndex_" + i, type: "USHORT", value: r.paletteIndex }]).flat()]);
      }
      var Dt = { parse: pi, make: fi };
      function hi(e2, t) {
        let n = new d(e2, t), s = n.parseShort(), o = n.parseShort(), r = n.parseShort(), i = n.parseShort(), a = n.parseOffset32(), c = n.parseUShortList(r);
        n.relativeOffset = a;
        let l = n.parseULongList(i);
        return { version: s, numPaletteEntries: o, colorRecords: l, colorRecordIndices: c };
      }
      function di({ version: e2 = 0, numPaletteEntries: t = 0, colorRecords: n = [], colorRecordIndices: s = [0] }) {
        return S.argument(e2 === 0, "Only CPALv0 are supported."), S.argument(n.length, "No colorRecords given."), S.argument(s.length, "No colorRecordIndices given."), s.length > 1 && S.argument(t, "Can't infer numPaletteEntries on multiple colorRecordIndices"), new g.Table("CPAL", [{ name: "version", type: "USHORT", value: e2 }, { name: "numPaletteEntries", type: "USHORT", value: t || n.length }, { name: "numPalettes", type: "USHORT", value: s.length }, { name: "numColorRecords", type: "USHORT", value: n.length }, { name: "colorRecordsArrayOffset", type: "ULONG", value: 12 + 2 * s.length }, ...s.map((o, r) => ({ name: "colorRecordIndices_" + r, type: "USHORT", value: o })), ...n.map((o, r) => ({ name: "colorRecords_" + r, type: "ULONG", value: o }))]);
      }
      var It = { parse: hi, make: di };
      function hs() {
        return typeof window != "undefined";
      }
      function Ne(e2, t) {
        if (!e2)
          throw t;
      }
      function At(e2, t) {
        let n = e2.length;
        if (n !== t.length)
          return false;
        for (let s = 0; s < n; s++)
          if (e2[s] !== t[s])
            return false;
        return true;
      }
      function ds(e2, t) {
        let n = Object.values(e2), s = Object.values(t), o = Object.values(e2), r = Object.values(t);
        return At(n, s) && At(o, r);
      }
      function ms(e2, t) {
        let n = 256;
        for (let s in t) {
          for (let o in t[s]) {
            let r = parseInt(o);
            if (!(!r || r < 256)) {
              if (ds(t[s][o], e2))
                return r;
              n <= r && (n = r + 1);
            }
          }
          t[s][n] = e2;
        }
        return n;
      }
      function mi(e2, t, n) {
        let s = ms(t.name, n);
        return [{ name: "tag_" + e2, type: "TAG", value: t.tag }, { name: "minValue_" + e2, type: "FIXED", value: t.minValue << 16 }, { name: "defaultValue_" + e2, type: "FIXED", value: t.defaultValue << 16 }, { name: "maxValue_" + e2, type: "FIXED", value: t.maxValue << 16 }, { name: "flags_" + e2, type: "USHORT", value: 0 }, { name: "nameID_" + e2, type: "USHORT", value: s }];
      }
      function gi(e2, t, n) {
        let s = {}, o = new x.Parser(e2, t);
        return s.tag = o.parseTag(), s.minValue = o.parseFixed(), s.defaultValue = o.parseFixed(), s.maxValue = o.parseFixed(), o.skip("uShort", 1), s.name = (n.macintosh || n.windows || n.unicode)[o.parseUShort()] || {}, s;
      }
      function yi(e2, t, n, s) {
        let o = ms(t.name, s), r = [{ name: "nameID_" + e2, type: "USHORT", value: o }, { name: "flags_" + e2, type: "USHORT", value: 0 }];
        for (let i = 0; i < n.length; ++i) {
          let a = n[i].tag;
          r.push({ name: "axis_" + e2 + " " + a, type: "FIXED", value: t.coordinates[a] << 16 });
        }
        return r;
      }
      function xi(e2, t, n, s) {
        let o = {}, r = new x.Parser(e2, t);
        o.name = (s.macintosh || s.windows || s.unicode)[r.parseUShort()] || {}, r.skip("uShort", 1), o.coordinates = {};
        for (let i = 0; i < n.length; ++i)
          o.coordinates[n[i].tag] = r.parseFixed();
        return o;
      }
      function bi(e2, t) {
        let n = new g.Table("fvar", [{ name: "version", type: "ULONG", value: 65536 }, { name: "offsetToData", type: "USHORT", value: 0 }, { name: "countSizePairs", type: "USHORT", value: 2 }, { name: "axisCount", type: "USHORT", value: e2.axes.length }, { name: "axisSize", type: "USHORT", value: 20 }, { name: "instanceCount", type: "USHORT", value: e2.instances.length }, { name: "instanceSize", type: "USHORT", value: 4 + e2.axes.length * 4 }]);
        n.offsetToData = n.sizeOf();
        for (let s = 0; s < e2.axes.length; s++)
          n.fields = n.fields.concat(mi(s, e2.axes[s], t));
        for (let s = 0; s < e2.instances.length; s++)
          n.fields = n.fields.concat(yi(s, e2.instances[s], e2.axes, t));
        return n;
      }
      function Si(e2, t, n) {
        let s = new x.Parser(e2, t), o = s.parseULong();
        S.argument(o === 65536, "Unsupported fvar table version.");
        let r = s.parseOffset16();
        s.skip("uShort", 1);
        let i = s.parseUShort(), a = s.parseUShort(), c = s.parseUShort(), l = s.parseUShort(), u = [];
        for (let h = 0; h < i; h++)
          u.push(gi(e2, t + r + h * a, n));
        let p = [], f = t + r + i * a;
        for (let h = 0; h < c; h++)
          p.push(xi(e2, f + h * l, u, n));
        return { axes: u, instances: p };
      }
      var Mt = { make: bi, parse: Si };
      var vi = { tag: d.tag, nameID: d.uShort, ordering: d.uShort }, Ke = new Array(5);
      Ke[1] = function() {
        return { axisIndex: this.parseUShort(), flags: this.parseUShort(), valueNameID: this.parseUShort(), value: this.parseFixed() };
      };
      Ke[2] = function() {
        return { axisIndex: this.parseUShort(), flags: this.parseUShort(), valueNameID: this.parseUShort(), nominalValue: this.parseFixed(), rangeMinValue: this.parseFixed(), rangeMaxValue: this.parseFixed() };
      };
      Ke[3] = function() {
        return { axisIndex: this.parseUShort(), flags: this.parseUShort(), valueNameID: this.parseUShort(), value: this.parseFixed(), linkedValue: this.parseFixed() };
      };
      Ke[4] = function() {
        let t = this.parseUShort();
        return { flags: this.parseUShort(), valueNameID: this.parseUShort(), axisValues: this.parseList(t, function() {
          return { axisIndex: this.parseUShort(), value: this.parseFixed() };
        }) };
      };
      function Ti() {
        let e2 = this.parseUShort(), t = Ke[e2], n = { format: e2 };
        return t === void 0 ? (console.warn(`Unknown axis value table format ${e2}`), n) : Object.assign(n, this.parseStruct(t.bind(this)));
      }
      function ki(e2, t, n) {
        t || (t = 0);
        let s = new x.Parser(e2, t), o = s.parseUShort(), r = s.parseUShort();
        o !== 1 && console.warn(`Unsupported STAT table version ${o}.${r}`);
        let i = [o, r], a = s.parseUShort(), c = s.parseUShort(), l = s.parseOffset32(), u = s.parseUShort(), p = s.parseOffset32(), f = o > 1 || r > 0 ? s.parseUShort() : void 0;
        n !== void 0 && S.argument(c >= n.axes.length, "STAT axis count must be greater than or equal to fvar axis count"), u > 0 && S.argument(c >= 0, "STAT axis count must be greater than 0 if STAT axis value count is greater than 0");
        let h = [];
        for (let y = 0; y < c; y++)
          s.offset = t + l, s.relativeOffset = y * a, h.push(s.parseStruct(vi));
        s.offset = t, s.relativeOffset = p;
        let m = s.parseUShortList(u), b = [];
        for (let y = 0; y < u; y++)
          s.offset = t + p, s.relativeOffset = m[y], b.push(Ti.apply(s));
        return { version: i, axes: h, values: b, elidedFallbackNameID: f };
      }
      var Qe = new Array(5);
      Qe[1] = function(t, n) {
        return [{ name: `format${t}`, type: "USHORT", value: 1 }, { name: `axisIndex${t}`, type: "USHORT", value: n.axisIndex }, { name: `flags${t}`, type: "USHORT", value: n.flags }, { name: `valueNameID${t}`, type: "USHORT", value: n.valueNameID }, { name: `value${t}`, type: "FLOAT", value: n.value }];
      };
      Qe[2] = function(t, n) {
        return [{ name: `format${t}`, type: "USHORT", value: 2 }, { name: `axisIndex${t}`, type: "USHORT", value: n.axisIndex }, { name: `flags${t}`, type: "USHORT", value: n.flags }, { name: `valueNameID${t}`, type: "USHORT", value: n.valueNameID }, { name: `nominalValue${t}`, type: "FLOAT", value: n.nominalValue }, { name: `rangeMinValue${t}`, type: "FLOAT", value: n.rangeMinValue }, { name: `rangeMaxValue${t}`, type: "FLOAT", value: n.rangeMaxValue }];
      };
      Qe[3] = function(t, n) {
        return [{ name: `format${t}`, type: "USHORT", value: 3 }, { name: `axisIndex${t}`, type: "USHORT", value: n.axisIndex }, { name: `flags${t}`, type: "USHORT", value: n.flags }, { name: `valueNameID${t}`, type: "USHORT", value: n.valueNameID }, { name: `value${t}`, type: "FLOAT", value: n.value }, { name: `linkedValue${t}`, type: "FLOAT", value: n.linkedValue }];
      };
      Qe[4] = function(t, n) {
        let s = [{ name: `format${t}`, type: "USHORT", value: 4 }, { name: `axisCount${t}`, type: "USHORT", value: n.axisValues.length }, { name: `flags${t}`, type: "USHORT", value: n.flags }, { name: `valueNameID${t}`, type: "USHORT", value: n.valueNameID }];
        for (let o = 0; o < n.axisValues.length; o++)
          s = s.concat([{ name: `format${t}axisIndex${o}`, type: "USHORT", value: n.axisValues[o].axisIndex }, { name: `format${t}value${o}`, type: "FLOAT", value: n.axisValues[o].value }]);
        return s;
      };
      function Fi(e2, t) {
        return new g.Record("axisRecord_" + e2, [{ name: "axisTag_" + e2, type: "TAG", value: t.tag }, { name: "axisNameID_" + e2, type: "USHORT", value: t.nameID }, { name: "axisOrdering_" + e2, type: "USHORT", value: t.ordering }]);
      }
      function Ui(e2, t) {
        let n = t.format, s = Qe[n];
        S.argument(s !== void 0, `Unknown axis value table format ${n}`);
        let o = s(e2, t);
        return new g.Table("axisValueTable_" + e2, o);
      }
      function Oi(e2) {
        let t = new g.Table("STAT", [{ name: "majorVersion", type: "USHORT", value: 1 }, { name: "minorVersion", type: "USHORT", value: 2 }, { name: "designAxisSize", type: "USHORT", value: 8 }, { name: "designAxisCount", type: "USHORT", value: e2.axes.length }, { name: "designAxesOffset", type: "ULONG", value: 0 }, { name: "axisValueCount", type: "USHORT", value: e2.values.length }, { name: "offsetToAxisValueOffsets", type: "ULONG", value: 0 }, { name: "elidedFallbackNameID", type: "USHORT", value: e2.elidedFallbackNameID }]);
        t.designAxesOffset = t.offsetToAxisValueOffsets = t.sizeOf();
        for (let r = 0; r < e2.axes.length; r++) {
          let i = Fi(r, e2.axes[r]);
          t.offsetToAxisValueOffsets += i.sizeOf(), t.fields = t.fields.concat(i.fields);
        }
        let n = [], s = [], o = e2.values.length * 2;
        for (let r = 0; r < e2.values.length; r++) {
          let i = Ui(r, e2.values[r]);
          n.push({ name: "offset_" + r, type: "USHORT", value: o }), o += i.sizeOf(), s = s.concat(i.fields);
        }
        return t.fields = t.fields.concat(n), t.fields = t.fields.concat(s), t;
      }
      var Pt = { make: Oi, parse: ki };
      function Ci(e2, t) {
        return new g.Record("axisValueMap_" + e2, [{ name: "fromCoordinate_" + e2, type: "F2DOT14", value: t.fromCoordinate }, { name: "toCoordinate_" + e2, type: "F2DOT14", value: t.toCoordinate }]);
      }
      function Li(e2, t) {
        let n = new g.Record("segmentMap_" + e2, [{ name: "positionMapCount_" + e2, type: "USHORT", value: t.axisValueMaps.length }]), s = [];
        for (let o = 0; o < t.axisValueMaps.length; o++) {
          let r = Ci(`${e2}_${o}`, t.axisValueMaps[o]);
          s = s.concat(r.fields);
        }
        return n.fields = n.fields.concat(s), n;
      }
      function Ri(e2, t) {
        S.argument(e2.axisSegmentMaps.length === t.axes.length, "avar axis count must correspond to fvar axis count");
        let n = new g.Table("avar", [{ name: "majorVersion", type: "USHORT", value: 1 }, { name: "minorVersion", type: "USHORT", value: 0 }, { name: "reserved", type: "USHORT", value: 0 }, { name: "axisCount", type: "USHORT", value: e2.axisSegmentMaps.length }]);
        for (let s = 0; s < e2.axisSegmentMaps.length; s++) {
          let o = Li(s, e2.axisSegmentMaps[s]);
          n.fields = n.fields.concat(o.fields);
        }
        return n;
      }
      function Ei(e2, t, n) {
        t || (t = 0);
        let s = new d(e2, t), o = s.parseUShort(), r = s.parseUShort();
        o !== 1 && console.warn(`Unsupported avar table version ${o}.${r}`), s.skip("uShort", 1);
        let i = s.parseUShort();
        S.argument(i === n.axes.length, "avar axis count must correspond to fvar axis count");
        let a = [];
        for (let c = 0; c < i; c++) {
          let l = [], u = s.parseUShort();
          for (let p = 0; p < u; p++) {
            let f = s.parseF2Dot14(), h = s.parseF2Dot14();
            l.push({ fromCoordinate: f, toCoordinate: h });
          }
          a.push({ axisValueMaps: l });
        }
        return { version: [o, r], axisSegmentMaps: a };
      }
      var Bt = { make: Ri, parse: Ei };
      function wi(e2, t) {
        let n = {}, s = new x.Parser(e2, t);
        n.version = s.parseUShort(), S.argument(n.version <= 1, "Unsupported gasp table version."), n.numRanges = s.parseUShort(), n.gaspRanges = [];
        for (let o = 0; o < n.numRanges; o++)
          n.gaspRanges[o] = { rangeMaxPPEM: s.parseUShort(), rangeGaspBehavior: s.parseUShort() };
        return n;
      }
      function Di(e2) {
        let t = new g.Table("gasp", [{ name: "version", type: "USHORT", value: 1 }, { name: "numRanges", type: "USHORT", value: e2.numRanges }]);
        for (let n in e2.numRanges)
          t.fields.push({ name: "rangeMaxPPEM", type: "USHORT", value: e2.numRanges[n].rangeMaxPPEM }), t.fields.push({ name: "rangeGaspBehavior", type: "USHORT", value: e2.numRanges[n].rangeGaspBehavior });
        return t;
      }
      var Gt = { parse: wi, make: Di };
      function gs(e2) {
        return Math.log(e2) / Math.log(2) | 0;
      }
      function pn(e2) {
        for (; e2.length % 4 !== 0; )
          e2.push(0);
        let t = 0;
        for (let n = 0; n < e2.length; n += 4)
          t += (e2[n] << 24) + (e2[n + 1] << 16) + (e2[n + 2] << 8) + e2[n + 3];
        return t %= Math.pow(2, 32), t;
      }
      function ys(e2, t, n, s) {
        return new g.Record("Table Record", [{ name: "tag", type: "TAG", value: e2 !== void 0 ? e2 : "" }, { name: "checkSum", type: "ULONG", value: t !== void 0 ? t : 0 }, { name: "offset", type: "ULONG", value: n !== void 0 ? n : 0 }, { name: "length", type: "ULONG", value: s !== void 0 ? s : 0 }]);
      }
      function bs(e2) {
        let t = new g.Table("sfnt", [{ name: "version", type: "TAG", value: "OTTO" }, { name: "numTables", type: "USHORT", value: 0 }, { name: "searchRange", type: "USHORT", value: 0 }, { name: "entrySelector", type: "USHORT", value: 0 }, { name: "rangeShift", type: "USHORT", value: 0 }]);
        t.tables = e2, t.numTables = e2.length;
        let n = Math.pow(2, gs(t.numTables));
        t.searchRange = 16 * n, t.entrySelector = gs(n), t.rangeShift = t.numTables * 16 - t.searchRange;
        let s = [], o = [], r = t.sizeOf() + ys().sizeOf() * t.numTables;
        for (; r % 4 !== 0; )
          r += 1, o.push({ name: "padding", type: "BYTE", value: 0 });
        for (let i = 0; i < e2.length; i += 1) {
          let a = e2[i];
          S.argument(a.tableName.length === 4, "Table name" + a.tableName + " is invalid.");
          let c = a.sizeOf(), l = ys(a.tableName, pn(a.encode()), r, c);
          for (s.push({ name: l.tag + " Table Record", type: "RECORD", value: l }), o.push({ name: a.tableName + " table", type: "RECORD", value: a }), r += c, S.argument(!isNaN(r), "Something went wrong calculating the offset."); r % 4 !== 0; )
            r += 1, o.push({ name: "padding", type: "BYTE", value: 0 });
        }
        return s.sort(function(i, a) {
          return i.value.tag > a.value.tag ? 1 : -1;
        }), t.fields = t.fields.concat(s), t.fields = t.fields.concat(o), t;
      }
      function xs(e2, t, n) {
        for (let s = 0; s < t.length; s += 1) {
          let o = e2.charToGlyphIndex(t[s]);
          if (o > 0)
            return e2.glyphs.get(o).getMetrics();
        }
        return n;
      }
      function Ii(e2) {
        let t = 0;
        for (let n = 0; n < e2.length; n += 1)
          t += e2[n];
        return t / e2.length;
      }
      function Ai(e2) {
        let t = [], n = [], s = [], o = [], r = [], i = [], a = [], c, l = 0, u = 0, p = 0, f = 0, h = 0;
        for (let B = 0; B < e2.glyphs.length; B += 1) {
          let G = e2.glyphs.get(B), ie = G.unicode | 0;
          if (isNaN(G.advanceWidth))
            throw new Error("Glyph " + G.name + " (" + B + "): advanceWidth is not a number.");
          (c > ie || c === void 0) && ie > 0 && (c = ie), l < ie && (l = ie);
          let ae = $e.getUnicodeRange(ie);
          if (ae < 32)
            u |= 1 << ae;
          else if (ae < 64)
            p |= 1 << ae - 32;
          else if (ae < 96)
            f |= 1 << ae - 64;
          else if (ae < 123)
            h |= 1 << ae - 96;
          else
            throw new Error("Unicode ranges bits > 123 are reserved for internal usage");
          if (G.name === ".notdef")
            continue;
          let Ie = G.getMetrics();
          t.push(Ie.xMin), n.push(Ie.yMin), s.push(Ie.xMax), o.push(Ie.yMax), i.push(Ie.leftSideBearing), a.push(Ie.rightSideBearing), r.push(G.advanceWidth);
        }
        let m = { xMin: Math.min.apply(null, t), yMin: Math.min.apply(null, n), xMax: Math.max.apply(null, s), yMax: Math.max.apply(null, o), advanceWidthMax: Math.max.apply(null, r), advanceWidthAvg: Ii(r), minLeftSideBearing: Math.min.apply(null, i), maxLeftSideBearing: Math.max.apply(null, i), minRightSideBearing: Math.min.apply(null, a) };
        m.ascender = e2.ascender, m.descender = e2.descender;
        let b = Tt.make({ flags: 3, unitsPerEm: e2.unitsPerEm, xMin: m.xMin, yMin: m.yMin, xMax: m.xMax, yMax: m.yMax, lowestRecPPEM: 3, createdTimestamp: e2.createdTimestamp }), y = kt.make({ ascender: m.ascender, descender: m.descender, advanceWidthMax: m.advanceWidthMax, minLeftSideBearing: m.minLeftSideBearing, minRightSideBearing: m.minRightSideBearing, xMaxExtent: m.maxLeftSideBearing + (m.xMax - m.xMin), numberOfHMetrics: e2.glyphs.length }), O = Ot.make(e2.glyphs.length), k = $e.make(Object.assign({ xAvgCharWidth: Math.round(m.advanceWidthAvg), usFirstCharIndex: c, usLastCharIndex: l, ulUnicodeRange1: u, ulUnicodeRange2: p, ulUnicodeRange3: f, ulUnicodeRange4: h, sTypoAscender: m.ascender, sTypoDescender: m.descender, sTypoLineGap: 0, usWinAscent: m.yMax, usWinDescent: Math.abs(m.yMin), ulCodePageRange1: 1, sxHeight: xs(e2, "xyvw", { yMax: Math.round(m.ascender / 2) }).yMax, sCapHeight: xs(e2, "HIKLEFJMNTZBDPRAGOQSUVWXY", m).yMax, usDefaultChar: e2.hasChar(" ") ? 32 : 0, usBreakChar: e2.hasChar(" ") ? 32 : 0 }, e2.tables.os2)), L = Ft.make(e2.glyphs), D = xt.make(e2.glyphs), w = e2.getEnglishName("fontFamily"), H = e2.getEnglishName("fontSubfamily"), X = w + " " + H, q = e2.getEnglishName("postScriptName");
        q || (q = w.replace(/\s/g, "") + "-" + H);
        let E = {};
        for (let B in e2.names)
          E[B] = e2.names[B];
        E.unicode = E.unicode || {}, E.macintosh = E.macintosh || {}, E.windows = E.windows || {};
        let I = e2.names.unicode || {}, P = e2.names.macintosh || {}, F = e2.names.windows || {};
        for (let B in ["unicode", "macintosh", "windows"])
          E[B] = E[B] || {}, E[B].uniqueID || (E.unicode.uniqueID = { en: e2.getEnglishName("manufacturer") + ":" + X }), E[B].postScriptName || (E.unicode.postScriptName = { en: q });
        E.unicode.preferredFamily || (E.unicode.preferredFamily = I.fontFamily || P.fontFamily || F.fontFamily), E.macintosh.preferredFamily || (E.macintosh.preferredFamily = P.fontFamily || I.fontFamily || F.fontFamily), E.windows.preferredFamily || (E.windows.preferredFamily = F.fontFamily || I.fontFamily || P.fontFamily), E.unicode.preferredSubfamily || (E.unicode.preferredSubfamily = I.fontSubfamily || P.fontSubfamily || F.fontSubfamily), E.macintosh.preferredSubfamily || (E.macintosh.preferredSubfamily = P.fontSubfamily || I.fontSubfamily || F.fontSubfamily), E.windows.preferredSubfamily || (E.windows.preferredSubfamily = F.fontSubfamily || I.fontSubfamily || P.fontSubfamily);
        let R = e2.tables.fvar ? Mt.make(e2.tables.fvar, e2.names) : void 0, C = e2.tables.gasp ? Gt.make(e2.tables.gasp) : void 0, re = [], ve = Lt.make(E, re), Y = re.length > 0 ? Ut.make(re) : void 0, ne = Rt.make(e2.tables.post), Z = Ze.make(e2.glyphs, { version: e2.getEnglishName("version"), fullName: X, familyName: w, weightName: H, postScriptName: q, unitsPerEm: e2.unitsPerEm, fontBBox: [0, m.yMin, m.ascender, m.advanceWidthMax] }), $ = e2.metas && Object.keys(e2.metas).length > 0 ? wt.make(e2.metas) : void 0, _ = [b, y, O, k, ve, D, ne, Z, L];
        Y && _.push(Y);
        let K = { gsub: Et, cpal: It, colr: Dt, stat: Pt, avar: Bt }, W = { avar: [e2.tables.fvar] };
        R && _.push(R);
        for (let B in K) {
          let G = e2.tables[B];
          G && _.push(K[B].make.call(e2, G, ...W[B] || []));
        }
        $ && _.push($), C && _.push(C);
        let ze = bs(_), we = ze.encode(), at = pn(we), De = ze.fields, _e = false;
        for (let B = 0; B < De.length; B += 1)
          if (De[B].name === "head table") {
            De[B].value.checkSumAdjustment = 2981146554 - at, _e = true;
            break;
          }
        if (!_e)
          throw new Error("Could not find head table with checkSum to adjust.");
        return ze;
      }
      var Ss = { make: bs, fontToTable: Ai, computeCheckSum: pn };
      function fn(e2, t) {
        let n = 0, s = e2.length - 1;
        for (; n <= s; ) {
          let o = n + s >>> 1, r = e2[o].tag;
          if (r === t)
            return o;
          r < t ? n = o + 1 : s = o - 1;
        }
        return -n - 1;
      }
      function vs(e2, t) {
        let n = 0, s = e2.length - 1;
        for (; n <= s; ) {
          let o = n + s >>> 1, r = e2[o];
          if (r === t)
            return o;
          r < t ? n = o + 1 : s = o - 1;
        }
        return -n - 1;
      }
      function Ts(e2, t) {
        let n, s = 0, o = e2.length - 1;
        for (; s <= o; ) {
          let r = s + o >>> 1;
          n = e2[r];
          let i = n.start;
          if (i === t)
            return n;
          i < t ? s = r + 1 : o = r - 1;
        }
        if (s > 0)
          return n = e2[s - 1], t > n.end ? 0 : n;
      }
      function ks(e2, t) {
        this.font = e2, this.tableName = t;
      }
      ks.prototype = { searchTag: fn, binSearch: vs, getTable: function(e2) {
        let t = this.font.tables[this.tableName];
        return !t && e2 && (t = this.font.tables[this.tableName] = this.createDefaultTable()), t;
      }, getScriptNames: function() {
        let e2 = this.getTable();
        return e2 ? e2.scripts.map(function(t) {
          return t.tag;
        }) : [];
      }, getDefaultScriptName: function() {
        let e2 = this.getTable();
        if (!e2)
          return;
        let t = false;
        for (let n = 0; n < e2.scripts.length; n++) {
          let s = e2.scripts[n].tag;
          if (s === "DFLT")
            return s;
          s === "latn" && (t = true);
        }
        if (t)
          return "latn";
      }, getScriptTable: function(e2, t) {
        let n = this.getTable(t);
        if (n) {
          e2 = e2 || "DFLT";
          let s = n.scripts, o = fn(n.scripts, e2);
          if (o >= 0)
            return s[o].script;
          if (t) {
            let r = { tag: e2, script: { defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] }, langSysRecords: [] } };
            return s.splice(-1 - o, 0, r), r.script;
          }
        }
      }, getLangSysTable: function(e2, t, n) {
        let s = this.getScriptTable(e2, n);
        if (s) {
          if (!t || t === "dflt" || t === "DFLT")
            return s.defaultLangSys;
          let o = fn(s.langSysRecords, t);
          if (o >= 0)
            return s.langSysRecords[o].langSys;
          if (n) {
            let r = { tag: t, langSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] } };
            return s.langSysRecords.splice(-1 - o, 0, r), r.langSys;
          }
        }
      }, getFeatureTable: function(e2, t, n, s) {
        let o = this.getLangSysTable(e2, t, s);
        if (o) {
          let r, i = o.featureIndexes, a = this.font.tables[this.tableName].features;
          for (let c = 0; c < i.length; c++)
            if (r = a[i[c]], r.tag === n)
              return r.feature;
          if (s) {
            let c = a.length;
            return S.assert(c === 0 || n >= a[c - 1].tag, "Features must be added in alphabetical order."), r = { tag: n, feature: { params: 0, lookupListIndexes: [] } }, a.push(r), i.push(c), r.feature;
          }
        }
      }, getLookupTables: function(e2, t, n, s, o) {
        let r = this.getFeatureTable(e2, t, n, o), i = [];
        if (r) {
          let a, c = r.lookupListIndexes, l = this.font.tables[this.tableName].lookups;
          for (let u = 0; u < c.length; u++)
            a = l[c[u]], a.lookupType === s && i.push(a);
          if (i.length === 0 && o) {
            a = { lookupType: s, lookupFlag: 0, subtables: [], markFilteringSet: void 0 };
            let u = l.length;
            return l.push(a), c.push(u), [a];
          }
        }
        return i;
      }, getGlyphClass: function(e2, t) {
        switch (e2.format) {
          case 1:
            return e2.startGlyph <= t && t < e2.startGlyph + e2.classes.length ? e2.classes[t - e2.startGlyph] : 0;
          case 2: {
            let n = Ts(e2.ranges, t);
            return n ? n.classId : 0;
          }
        }
      }, getCoverageIndex: function(e2, t) {
        switch (e2.format) {
          case 1: {
            let n = vs(e2.glyphs, t);
            return n >= 0 ? n : -1;
          }
          case 2: {
            let n = Ts(e2.ranges, t);
            return n ? n.index + t - n.start : -1;
          }
        }
      }, expandCoverage: function(e2) {
        if (e2.format === 1)
          return e2.glyphs;
        {
          let t = [], n = e2.ranges;
          for (let s = 0; s < n.length; s++) {
            let o = n[s], r = o.start, i = o.end;
            for (let a = r; a <= i; a++)
              t.push(a);
          }
          return t;
        }
      } };
      var He = ks;
      function Je(e2) {
        He.call(this, e2, "gpos");
      }
      Je.prototype = He.prototype;
      Je.prototype.init = function() {
        let e2 = this.getDefaultScriptName();
        this.defaultKerningTables = this.getKerningTables(e2);
      };
      Je.prototype.getKerningValue = function(e2, t, n) {
        for (let s = 0; s < e2.length; s++) {
          let o = e2[s].subtables;
          for (let r = 0; r < o.length; r++) {
            let i = o[r], a = this.getCoverageIndex(i.coverage, t);
            if (!(a < 0))
              switch (i.posFormat) {
                case 1: {
                  let c = i.pairSets[a];
                  for (let l = 0; l < c.length; l++) {
                    let u = c[l];
                    if (u.secondGlyph === n)
                      return u.value1 && u.value1.xAdvance || 0;
                  }
                  break;
                }
                case 2: {
                  let c = this.getGlyphClass(i.classDef1, t), l = this.getGlyphClass(i.classDef2, n), u = i.classRecords[c][l];
                  return u.value1 && u.value1.xAdvance || 0;
                }
              }
          }
        }
        return 0;
      };
      Je.prototype.getKerningTables = function(e2, t) {
        if (this.font.tables.gpos)
          return this.getLookupTables(e2, t, "kern", 2);
      };
      var Fs = Je;
      function ee(e2) {
        He.call(this, e2, "gsub");
      }
      function hn(e2, t, n) {
        let s = e2.subtables;
        for (let o = 0; o < s.length; o++) {
          let r = s[o];
          if (r.substFormat === t)
            return r;
        }
        if (n)
          return s.push(n), n;
      }
      ee.prototype = He.prototype;
      ee.prototype.createDefaultTable = function() {
        return { version: 1, scripts: [{ tag: "DFLT", script: { defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] }, langSysRecords: [] } }], features: [], lookups: [] };
      };
      ee.prototype.getSingle = function(e2, t, n) {
        let s = [], o = this.getLookupTables(t, n, e2, 1);
        for (let r = 0; r < o.length; r++) {
          let i = o[r].subtables;
          for (let a = 0; a < i.length; a++) {
            let c = i[a], l = this.expandCoverage(c.coverage), u;
            if (c.substFormat === 1) {
              let p = c.deltaGlyphId;
              for (u = 0; u < l.length; u++) {
                let f = l[u];
                s.push({ sub: f, by: f + p });
              }
            } else {
              let p = c.substitute;
              for (u = 0; u < l.length; u++)
                s.push({ sub: l[u], by: p[u] });
            }
          }
        }
        return s;
      };
      ee.prototype.getMultiple = function(e2, t, n) {
        let s = [], o = this.getLookupTables(t, n, e2, 2);
        for (let r = 0; r < o.length; r++) {
          let i = o[r].subtables;
          for (let a = 0; a < i.length; a++) {
            let c = i[a], l = this.expandCoverage(c.coverage), u;
            for (u = 0; u < l.length; u++) {
              let p = l[u], f = c.sequences[u];
              s.push({ sub: p, by: f });
            }
          }
        }
        return s;
      };
      ee.prototype.getAlternates = function(e2, t, n) {
        let s = [], o = this.getLookupTables(t, n, e2, 3);
        for (let r = 0; r < o.length; r++) {
          let i = o[r].subtables;
          for (let a = 0; a < i.length; a++) {
            let c = i[a], l = this.expandCoverage(c.coverage), u = c.alternateSets;
            for (let p = 0; p < l.length; p++)
              s.push({ sub: l[p], by: u[p] });
          }
        }
        return s;
      };
      ee.prototype.getLigatures = function(e2, t, n) {
        let s = [], o = this.getLookupTables(t, n, e2, 4);
        for (let r = 0; r < o.length; r++) {
          let i = o[r].subtables;
          for (let a = 0; a < i.length; a++) {
            let c = i[a], l = this.expandCoverage(c.coverage), u = c.ligatureSets;
            for (let p = 0; p < l.length; p++) {
              let f = l[p], h = u[p];
              for (let m = 0; m < h.length; m++) {
                let b = h[m];
                s.push({ sub: [f].concat(b.components), by: b.ligGlyph });
              }
            }
          }
        }
        return s;
      };
      ee.prototype.addSingle = function(e2, t, n, s) {
        let o = this.getLookupTables(n, s, e2, 1, true)[0], r = hn(o, 2, { substFormat: 2, coverage: { format: 1, glyphs: [] }, substitute: [] });
        S.assert(r.coverage.format === 1, "Single: unable to modify coverage table format " + r.coverage.format);
        let i = t.sub, a = this.binSearch(r.coverage.glyphs, i);
        a < 0 && (a = -1 - a, r.coverage.glyphs.splice(a, 0, i), r.substitute.splice(a, 0, 0)), r.substitute[a] = t.by;
      };
      ee.prototype.addMultiple = function(e2, t, n, s) {
        S.assert(t.by instanceof Array && t.by.length > 1, 'Multiple: "by" must be an array of two or more ids');
        let o = this.getLookupTables(n, s, e2, 2, true)[0], r = hn(o, 1, { substFormat: 1, coverage: { format: 1, glyphs: [] }, sequences: [] });
        S.assert(r.coverage.format === 1, "Multiple: unable to modify coverage table format " + r.coverage.format);
        let i = t.sub, a = this.binSearch(r.coverage.glyphs, i);
        a < 0 && (a = -1 - a, r.coverage.glyphs.splice(a, 0, i), r.sequences.splice(a, 0, 0)), r.sequences[a] = t.by;
      };
      ee.prototype.addAlternate = function(e2, t, n, s) {
        let o = this.getLookupTables(n, s, e2, 3, true)[0], r = hn(o, 1, { substFormat: 1, coverage: { format: 1, glyphs: [] }, alternateSets: [] });
        S.assert(r.coverage.format === 1, "Alternate: unable to modify coverage table format " + r.coverage.format);
        let i = t.sub, a = this.binSearch(r.coverage.glyphs, i);
        a < 0 && (a = -1 - a, r.coverage.glyphs.splice(a, 0, i), r.alternateSets.splice(a, 0, 0)), r.alternateSets[a] = t.by;
      };
      ee.prototype.addLigature = function(e2, t, n, s) {
        let o = this.getLookupTables(n, s, e2, 4, true)[0], r = o.subtables[0];
        r || (r = { substFormat: 1, coverage: { format: 1, glyphs: [] }, ligatureSets: [] }, o.subtables[0] = r), S.assert(r.coverage.format === 1, "Ligature: unable to modify coverage table format " + r.coverage.format);
        let i = t.sub[0], a = t.sub.slice(1), c = { ligGlyph: t.by, components: a }, l = this.binSearch(r.coverage.glyphs, i);
        if (l >= 0) {
          let u = r.ligatureSets[l];
          for (let p = 0; p < u.length; p++)
            if (At(u[p].components, a))
              return;
          u.push(c);
        } else
          l = -1 - l, r.coverage.glyphs.splice(l, 0, i), r.ligatureSets.splice(l, 0, [c]);
      };
      ee.prototype.getFeature = function(e2, t, n) {
        if (/ss\d\d/.test(e2))
          return this.getSingle(e2, t, n);
        switch (e2) {
          case "aalt":
          case "salt":
            return this.getSingle(e2, t, n).concat(this.getAlternates(e2, t, n));
          case "dlig":
          case "liga":
          case "rlig":
            return this.getLigatures(e2, t, n);
          case "ccmp":
            return this.getMultiple(e2, t, n).concat(this.getLigatures(e2, t, n));
          case "stch":
            return this.getMultiple(e2, t, n);
        }
      };
      ee.prototype.add = function(e2, t, n, s) {
        if (/ss\d\d/.test(e2))
          return this.addSingle(e2, t, n, s);
        switch (e2) {
          case "aalt":
          case "salt":
            return typeof t.by == "number" ? this.addSingle(e2, t, n, s) : this.addAlternate(e2, t, n, s);
          case "dlig":
          case "liga":
          case "rlig":
            return this.addLigature(e2, t, n, s);
          case "ccmp":
            return t.by instanceof Array ? this.addMultiple(e2, t, n, s) : this.addLigature(e2, t, n, s);
        }
      };
      var Us = ee;
      function Os(e2, t, n, s, o) {
        let r;
        return (t & s) > 0 ? (r = e2.parseByte(), t & o || (r = -r), r = n + r) : (t & o) > 0 ? r = n : r = n + e2.parseShort(), r;
      }
      function Cs(e2, t, n) {
        let s = new x.Parser(t, n);
        e2.numberOfContours = s.parseShort(), e2._xMin = s.parseShort(), e2._yMin = s.parseShort(), e2._xMax = s.parseShort(), e2._yMax = s.parseShort();
        let o, r;
        if (e2.numberOfContours > 0) {
          let i = e2.endPointIndices = [];
          for (let c = 0; c < e2.numberOfContours; c += 1)
            i.push(s.parseUShort());
          e2.instructionLength = s.parseUShort(), e2.instructions = [];
          for (let c = 0; c < e2.instructionLength; c += 1)
            e2.instructions.push(s.parseByte());
          let a = i[i.length - 1] + 1;
          o = [];
          for (let c = 0; c < a; c += 1)
            if (r = s.parseByte(), o.push(r), (r & 8) > 0) {
              let l = s.parseByte();
              for (let u = 0; u < l; u += 1)
                o.push(r), c += 1;
            }
          if (S.argument(o.length === a, "Bad flags."), i.length > 0) {
            let c = [], l;
            if (a > 0) {
              for (let f = 0; f < a; f += 1)
                r = o[f], l = {}, l.onCurve = !!(r & 1), l.lastPointOfContour = i.indexOf(f) >= 0, c.push(l);
              let u = 0;
              for (let f = 0; f < a; f += 1)
                r = o[f], l = c[f], l.x = Os(s, r, u, 2, 16), u = l.x;
              let p = 0;
              for (let f = 0; f < a; f += 1)
                r = o[f], l = c[f], l.y = Os(s, r, p, 4, 32), p = l.y;
            }
            e2.points = c;
          } else
            e2.points = [];
        } else if (e2.numberOfContours === 0)
          e2.points = [];
        else {
          e2.isComposite = true, e2.points = [], e2.components = [];
          let i = true;
          for (; i; ) {
            o = s.parseUShort();
            let a = { glyphIndex: s.parseUShort(), xScale: 1, scale01: 0, scale10: 0, yScale: 1, dx: 0, dy: 0 };
            (o & 1) > 0 ? (o & 2) > 0 ? (a.dx = s.parseShort(), a.dy = s.parseShort()) : a.matchedPoints = [s.parseUShort(), s.parseUShort()] : (o & 2) > 0 ? (a.dx = s.parseChar(), a.dy = s.parseChar()) : a.matchedPoints = [s.parseByte(), s.parseByte()], (o & 8) > 0 ? a.xScale = a.yScale = s.parseF2Dot14() : (o & 64) > 0 ? (a.xScale = s.parseF2Dot14(), a.yScale = s.parseF2Dot14()) : (o & 128) > 0 && (a.xScale = s.parseF2Dot14(), a.scale01 = s.parseF2Dot14(), a.scale10 = s.parseF2Dot14(), a.yScale = s.parseF2Dot14()), e2.components.push(a), i = !!(o & 32);
          }
          if (o & 256) {
            e2.instructionLength = s.parseUShort(), e2.instructions = [];
            for (let a = 0; a < e2.instructionLength; a += 1)
              e2.instructions.push(s.parseByte());
          }
        }
      }
      function dn(e2, t) {
        let n = [];
        for (let s = 0; s < e2.length; s += 1) {
          let o = e2[s], r = { x: t.xScale * o.x + t.scale01 * o.y + t.dx, y: t.scale10 * o.x + t.yScale * o.y + t.dy, onCurve: o.onCurve, lastPointOfContour: o.lastPointOfContour };
          n.push(r);
        }
        return n;
      }
      function Mi(e2) {
        let t = [], n = [];
        for (let s = 0; s < e2.length; s += 1) {
          let o = e2[s];
          n.push(o), o.lastPointOfContour && (t.push(n), n = []);
        }
        return S.argument(n.length === 0, "There are still points left in the current contour."), t;
      }
      function Ls(e2) {
        let t = new le();
        if (!e2)
          return t;
        let n = Mi(e2);
        for (let s = 0; s < n.length; ++s) {
          let o = n[s], r = o[o.length - 1], i = o[0];
          if (r.onCurve)
            t.moveTo(r.x, r.y);
          else if (i.onCurve)
            t.moveTo(i.x, i.y);
          else {
            let a = { x: (r.x + i.x) * 0.5, y: (r.y + i.y) * 0.5 };
            t.moveTo(a.x, a.y);
          }
          for (let a = 0; a < o.length; ++a)
            if (r = i, i = o[(a + 1) % o.length], r.onCurve)
              t.lineTo(r.x, r.y);
            else {
              let c = i;
              i.onCurve || (c = { x: (r.x + i.x) * 0.5, y: (r.y + i.y) * 0.5 }), t.quadraticCurveTo(r.x, r.y, c.x, c.y);
            }
          t.closePath();
        }
        return t;
      }
      function Rs(e2, t) {
        if (t.isComposite)
          for (let n = 0; n < t.components.length; n += 1) {
            let s = t.components[n], o = e2.get(s.glyphIndex);
            if (o.getPath(), o.points) {
              let r;
              if (s.matchedPoints === void 0)
                r = dn(o.points, s);
              else {
                if (s.matchedPoints[0] > t.points.length - 1 || s.matchedPoints[1] > o.points.length - 1)
                  throw Error("Matched points out of range in " + t.name);
                let i = t.points[s.matchedPoints[0]], a = o.points[s.matchedPoints[1]], c = { xScale: s.xScale, scale01: s.scale01, scale10: s.scale10, yScale: s.yScale, dx: 0, dy: 0 };
                a = dn([a], c)[0], c.dx = i.x - a.x, c.dy = i.y - a.y, r = dn(o.points, c);
              }
              t.points = t.points.concat(r);
            }
          }
        return Ls(t.points);
      }
      function Pi(e2, t, n, s) {
        let o = new J.GlyphSet(s);
        for (let r = 0; r < n.length - 1; r += 1) {
          let i = n[r], a = n[r + 1];
          i !== a ? o.push(r, J.ttfGlyphLoader(s, r, Cs, e2, t + i, Rs)) : o.push(r, J.glyphLoader(s, r));
        }
        return o;
      }
      function Bi(e2, t, n, s) {
        let o = new J.GlyphSet(s);
        return s._push = function(r) {
          let i = n[r], a = n[r + 1];
          i !== a ? o.push(r, J.ttfGlyphLoader(s, r, Cs, e2, t + i, Rs)) : o.push(r, J.glyphLoader(s, r));
        }, o;
      }
      function Gi(e2, t, n, s, o) {
        return o.lowMemory ? Bi(e2, t, n, s) : Pi(e2, t, n, s);
      }
      var Nt = { getPath: Ls, parse: Gi };
      var js, Ee, qs, xn;
      function Xs(e2) {
        this.font = e2, this.getCommands = function(t) {
          return Nt.getPath(t).commands;
        }, this._fpgmState = this._prepState = void 0, this._errorState = 0;
      }
      function Ni(e2) {
        return e2;
      }
      function Ys(e2) {
        return Math.sign(e2) * Math.round(Math.abs(e2));
      }
      function Hi(e2) {
        return Math.sign(e2) * Math.round(Math.abs(e2 * 2)) / 2;
      }
      function Vi(e2) {
        return Math.sign(e2) * (Math.round(Math.abs(e2) + 0.5) - 0.5);
      }
      function zi(e2) {
        return Math.sign(e2) * Math.ceil(Math.abs(e2));
      }
      function _i(e2) {
        return Math.sign(e2) * Math.floor(Math.abs(e2));
      }
      var Zs = function(e2) {
        let t = this.srPeriod, n = this.srPhase, s = this.srThreshold, o = 1;
        return e2 < 0 && (e2 = -e2, o = -1), e2 += s - n, e2 = Math.trunc(e2 / t) * t, e2 += n, e2 < 0 ? n * o : e2 * o;
      }, ge = { x: 1, y: 0, axis: "x", distance: function(e2, t, n, s) {
        return (n ? e2.xo : e2.x) - (s ? t.xo : t.x);
      }, interpolate: function(e2, t, n, s) {
        let o, r, i, a, c, l, u;
        if (!s || s === this) {
          if (o = e2.xo - t.xo, r = e2.xo - n.xo, c = t.x - t.xo, l = n.x - n.xo, i = Math.abs(o), a = Math.abs(r), u = i + a, u === 0) {
            e2.x = e2.xo + (c + l) / 2;
            return;
          }
          e2.x = e2.xo + (c * a + l * i) / u;
          return;
        }
        if (o = s.distance(e2, t, true, true), r = s.distance(e2, n, true, true), c = s.distance(t, t, false, true), l = s.distance(n, n, false, true), i = Math.abs(o), a = Math.abs(r), u = i + a, u === 0) {
          ge.setRelative(e2, e2, (c + l) / 2, s, true);
          return;
        }
        ge.setRelative(e2, e2, (c * a + l * i) / u, s, true);
      }, normalSlope: Number.NEGATIVE_INFINITY, setRelative: function(e2, t, n, s, o) {
        if (!s || s === this) {
          e2.x = (o ? t.xo : t.x) + n;
          return;
        }
        let r = o ? t.xo : t.x, i = o ? t.yo : t.y, a = r + n * s.x, c = i + n * s.y;
        e2.x = a + (e2.y - c) / s.normalSlope;
      }, slope: 0, touch: function(e2) {
        e2.xTouched = true;
      }, touched: function(e2) {
        return e2.xTouched;
      }, untouch: function(e2) {
        e2.xTouched = false;
      } }, xe = { x: 0, y: 1, axis: "y", distance: function(e2, t, n, s) {
        return (n ? e2.yo : e2.y) - (s ? t.yo : t.y);
      }, interpolate: function(e2, t, n, s) {
        let o, r, i, a, c, l, u;
        if (!s || s === this) {
          if (o = e2.yo - t.yo, r = e2.yo - n.yo, c = t.y - t.yo, l = n.y - n.yo, i = Math.abs(o), a = Math.abs(r), u = i + a, u === 0) {
            e2.y = e2.yo + (c + l) / 2;
            return;
          }
          e2.y = e2.yo + (c * a + l * i) / u;
          return;
        }
        if (o = s.distance(e2, t, true, true), r = s.distance(e2, n, true, true), c = s.distance(t, t, false, true), l = s.distance(n, n, false, true), i = Math.abs(o), a = Math.abs(r), u = i + a, u === 0) {
          xe.setRelative(e2, e2, (c + l) / 2, s, true);
          return;
        }
        xe.setRelative(e2, e2, (c * a + l * i) / u, s, true);
      }, normalSlope: 0, setRelative: function(e2, t, n, s, o) {
        if (!s || s === this) {
          e2.y = (o ? t.yo : t.y) + n;
          return;
        }
        let r = o ? t.xo : t.x, i = o ? t.yo : t.y, a = r + n * s.x, c = i + n * s.y;
        e2.y = c + s.normalSlope * (e2.x - a);
      }, slope: Number.POSITIVE_INFINITY, touch: function(e2) {
        e2.yTouched = true;
      }, touched: function(e2) {
        return e2.yTouched;
      }, untouch: function(e2) {
        e2.yTouched = false;
      } };
      Object.freeze(ge);
      Object.freeze(xe);
      function tt(e2, t) {
        this.x = e2, this.y = t, this.axis = void 0, this.slope = t / e2, this.normalSlope = -e2 / t, Object.freeze(this);
      }
      tt.prototype.distance = function(e2, t, n, s) {
        return this.x * ge.distance(e2, t, n, s) + this.y * xe.distance(e2, t, n, s);
      };
      tt.prototype.interpolate = function(e2, t, n, s) {
        let o, r, i, a, c, l, u;
        if (i = s.distance(e2, t, true, true), a = s.distance(e2, n, true, true), o = s.distance(t, t, false, true), r = s.distance(n, n, false, true), c = Math.abs(i), l = Math.abs(a), u = c + l, u === 0) {
          this.setRelative(e2, e2, (o + r) / 2, s, true);
          return;
        }
        this.setRelative(e2, e2, (o * l + r * c) / u, s, true);
      };
      tt.prototype.setRelative = function(e2, t, n, s, o) {
        s = s || this;
        let r = o ? t.xo : t.x, i = o ? t.yo : t.y, a = r + n * s.x, c = i + n * s.y, l = s.normalSlope, u = this.slope, p = e2.x, f = e2.y;
        e2.x = (u * p - l * a + c - f) / (u - l), e2.y = u * (e2.x - p) + f;
      };
      tt.prototype.touch = function(e2) {
        e2.xTouched = true, e2.yTouched = true;
      };
      function nt(e2, t) {
        let n = Math.sqrt(e2 * e2 + t * t);
        return e2 /= n, t /= n, e2 === 1 && t === 0 ? ge : e2 === 0 && t === 1 ? xe : new tt(e2, t);
      }
      function be(e2, t, n, s) {
        this.x = this.xo = Math.round(e2 * 64) / 64, this.y = this.yo = Math.round(t * 64) / 64, this.lastPointOfContour = n, this.onCurve = s, this.prevPointOnContour = void 0, this.nextPointOnContour = void 0, this.xTouched = false, this.yTouched = false, Object.preventExtensions(this);
      }
      be.prototype.nextTouched = function(e2) {
        let t = this.nextPointOnContour;
        for (; !e2.touched(t) && t !== this; )
          t = t.nextPointOnContour;
        return t;
      };
      be.prototype.prevTouched = function(e2) {
        let t = this.prevPointOnContour;
        for (; !e2.touched(t) && t !== this; )
          t = t.prevPointOnContour;
        return t;
      };
      var et = Object.freeze(new be(0, 0)), Wi = { cvCutIn: 17 / 16, deltaBase: 9, deltaShift: 0.125, loop: 1, minDis: 1, autoFlip: true };
      function Ce(e2, t) {
        switch (this.env = e2, this.stack = [], this.prog = t, e2) {
          case "glyf":
            this.zp0 = this.zp1 = this.zp2 = 1, this.rp0 = this.rp1 = this.rp2 = 0;
          case "prep":
            this.fv = this.pv = this.dpv = ge, this.round = Ys;
        }
      }
      Xs.prototype.exec = function(e2, t) {
        if (typeof t != "number")
          throw new Error("Point size is not a number!");
        if (this._errorState > 2)
          return;
        let n = this.font, s = this._prepState;
        if (!s || s.ppem !== t) {
          let o = this._fpgmState;
          if (!o) {
            Ce.prototype = Wi, o = this._fpgmState = new Ce("fpgm", n.tables.fpgm), o.funcs = [], o.font = n, exports2.DEBUG && (console.log("---EXEC FPGM---"), o.step = -1);
            try {
              Ee(o);
            } catch (i) {
              console.log("Hinting error in FPGM:" + i), this._errorState = 3;
              return;
            }
          }
          Ce.prototype = o, s = this._prepState = new Ce("prep", n.tables.prep), s.ppem = t;
          let r = n.tables.cvt;
          if (r) {
            let i = s.cvt = new Array(r.length), a = t / n.unitsPerEm;
            for (let c = 0; c < r.length; c++)
              i[c] = r[c] * a;
          } else
            s.cvt = [];
          exports2.DEBUG && (console.log("---EXEC PREP---"), s.step = -1);
          try {
            Ee(s);
          } catch (i) {
            this._errorState < 2 && console.log("Hinting error in PREP:" + i), this._errorState = 2;
          }
        }
        if (!(this._errorState > 1))
          try {
            return qs(e2, s);
          } catch (o) {
            this._errorState < 1 && (console.log("Hinting error:" + o), console.log("Note: further hinting errors are silenced")), this._errorState = 1;
            return;
          }
      };
      qs = function(e2, t) {
        let n = t.ppem / t.font.unitsPerEm, s = n, o = e2.components, r, i, a;
        if (Ce.prototype = t, !o)
          a = new Ce("glyf", e2.instructions), exports2.DEBUG && (console.log("---EXEC GLYPH---"), a.step = -1), xn(e2, a, n, s), i = a.gZone;
        else {
          let c = t.font;
          i = [], r = [];
          for (let l = 0; l < o.length; l++) {
            let u = o[l], p = c.glyphs.get(u.glyphIndex);
            a = new Ce("glyf", p.instructions), exports2.DEBUG && (console.log("---EXEC COMP " + l + "---"), a.step = -1), xn(p, a, n, s);
            let f = Math.round(u.dx * n), h = Math.round(u.dy * s), m = a.gZone, b = a.contours;
            for (let O = 0; O < m.length; O++) {
              let k = m[O];
              k.xTouched = k.yTouched = false, k.xo = k.x = k.x + f, k.yo = k.y = k.y + h;
            }
            let y = i.length;
            i.push.apply(i, m);
            for (let O = 0; O < b.length; O++)
              r.push(b[O] + y);
          }
          e2.instructions && !a.inhibitGridFit && (a = new Ce("glyf", e2.instructions), a.gZone = a.z0 = a.z1 = a.z2 = i, a.contours = r, i.push(new be(0, 0), new be(Math.round(e2.advanceWidth * n), 0)), exports2.DEBUG && (console.log("---EXEC COMPOSITE---"), a.step = -1), Ee(a), i.length -= 2);
        }
        return i;
      };
      xn = function(e2, t, n, s) {
        let o = e2.points || [], r = o.length, i = t.gZone = t.z0 = t.z1 = t.z2 = [], a = t.contours = [], c;
        for (let p = 0; p < r; p++)
          c = o[p], i[p] = new be(c.x * n, c.y * s, c.lastPointOfContour, c.onCurve);
        let l, u;
        for (let p = 0; p < r; p++)
          c = i[p], l || (l = c, a.push(p)), c.lastPointOfContour ? (c.nextPointOnContour = l, l.prevPointOnContour = c, l = void 0) : (u = i[p + 1], c.nextPointOnContour = u, u.prevPointOnContour = c);
        if (!t.inhibitGridFit) {
          if (exports2.DEBUG) {
            console.log("PROCESSING GLYPH", t.stack);
            for (let p = 0; p < r; p++)
              console.log(p, i[p].x, i[p].y);
          }
          if (i.push(new be(0, 0), new be(Math.round(e2.advanceWidth * n), 0)), Ee(t), i.length -= 2, exports2.DEBUG) {
            console.log("FINISHED GLYPH", t.stack);
            for (let p = 0; p < r; p++)
              console.log(p, i[p].x, i[p].y);
          }
        }
      };
      Ee = function(e2) {
        let t = e2.prog;
        if (!t)
          return;
        let n = t.length, s;
        for (e2.ip = 0; e2.ip < n; e2.ip++) {
          if (exports2.DEBUG && e2.step++, s = js[t[e2.ip]], !s)
            throw new Error("unknown instruction: 0x" + Number(t[e2.ip]).toString(16));
          s(e2);
        }
      };
      function Vt(e2) {
        let t = e2.tZone = new Array(e2.gZone.length);
        for (let n = 0; n < t.length; n++)
          t[n] = new be(0, 0);
      }
      function $s(e2, t) {
        let n = e2.prog, s = e2.ip, o = 1, r;
        do
          if (r = n[++s], r === 88)
            o++;
          else if (r === 89)
            o--;
          else if (r === 64)
            s += n[s + 1] + 1;
          else if (r === 65)
            s += 2 * n[s + 1] + 1;
          else if (r >= 176 && r <= 183)
            s += r - 176 + 1;
          else if (r >= 184 && r <= 191)
            s += (r - 184 + 1) * 2;
          else if (t && o === 1 && r === 27)
            break;
        while (o > 0);
        e2.ip = s;
      }
      function Es(e2, t) {
        exports2.DEBUG && console.log(t.step, "SVTCA[" + e2.axis + "]"), t.fv = t.pv = t.dpv = e2;
      }
      function ws(e2, t) {
        exports2.DEBUG && console.log(t.step, "SPVTCA[" + e2.axis + "]"), t.pv = t.dpv = e2;
      }
      function Ds(e2, t) {
        exports2.DEBUG && console.log(t.step, "SFVTCA[" + e2.axis + "]"), t.fv = e2;
      }
      function Is(e2, t) {
        let n = t.stack, s = n.pop(), o = n.pop(), r = t.z2[s], i = t.z1[o];
        exports2.DEBUG && console.log("SPVTL[" + e2 + "]", s, o);
        let a, c;
        e2 ? (a = r.y - i.y, c = i.x - r.x) : (a = i.x - r.x, c = i.y - r.y), t.pv = t.dpv = nt(a, c);
      }
      function As(e2, t) {
        let n = t.stack, s = n.pop(), o = n.pop(), r = t.z2[s], i = t.z1[o];
        exports2.DEBUG && console.log("SFVTL[" + e2 + "]", s, o);
        let a, c;
        e2 ? (a = r.y - i.y, c = i.x - r.x) : (a = i.x - r.x, c = i.y - r.y), t.fv = nt(a, c);
      }
      function ji(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "SPVFS[]", n, s), e2.pv = e2.dpv = nt(s, n);
      }
      function qi(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "SPVFS[]", n, s), e2.fv = nt(s, n);
      }
      function Xi(e2) {
        let t = e2.stack, n = e2.pv;
        exports2.DEBUG && console.log(e2.step, "GPV[]"), t.push(n.x * 16384), t.push(n.y * 16384);
      }
      function Yi(e2) {
        let t = e2.stack, n = e2.fv;
        exports2.DEBUG && console.log(e2.step, "GFV[]"), t.push(n.x * 16384), t.push(n.y * 16384);
      }
      function Zi(e2) {
        e2.fv = e2.pv, exports2.DEBUG && console.log(e2.step, "SFVTPV[]");
      }
      function $i(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop(), o = t.pop(), r = t.pop(), i = t.pop(), a = e2.z0, c = e2.z1, l = a[n], u = a[s], p = c[o], f = c[r], h = e2.z2[i];
        exports2.DEBUG && console.log("ISECT[], ", n, s, o, r, i);
        let m = l.x, b = l.y, y = u.x, O = u.y, k = p.x, L = p.y, D = f.x, w = f.y, H = (m - y) * (L - w) - (b - O) * (k - D), X = m * O - b * y, q = k * w - L * D;
        h.x = (X * (k - D) - q * (m - y)) / H, h.y = (X * (L - w) - q * (b - O)) / H;
      }
      function Ki(e2) {
        e2.rp0 = e2.stack.pop(), exports2.DEBUG && console.log(e2.step, "SRP0[]", e2.rp0);
      }
      function Qi(e2) {
        e2.rp1 = e2.stack.pop(), exports2.DEBUG && console.log(e2.step, "SRP1[]", e2.rp1);
      }
      function Ji(e2) {
        e2.rp2 = e2.stack.pop(), exports2.DEBUG && console.log(e2.step, "SRP2[]", e2.rp2);
      }
      function ea(e2) {
        let t = e2.stack.pop();
        switch (exports2.DEBUG && console.log(e2.step, "SZP0[]", t), e2.zp0 = t, t) {
          case 0:
            e2.tZone || Vt(e2), e2.z0 = e2.tZone;
            break;
          case 1:
            e2.z0 = e2.gZone;
            break;
          default:
            throw new Error("Invalid zone pointer");
        }
      }
      function ta(e2) {
        let t = e2.stack.pop();
        switch (exports2.DEBUG && console.log(e2.step, "SZP1[]", t), e2.zp1 = t, t) {
          case 0:
            e2.tZone || Vt(e2), e2.z1 = e2.tZone;
            break;
          case 1:
            e2.z1 = e2.gZone;
            break;
          default:
            throw new Error("Invalid zone pointer");
        }
      }
      function na(e2) {
        let t = e2.stack.pop();
        switch (exports2.DEBUG && console.log(e2.step, "SZP2[]", t), e2.zp2 = t, t) {
          case 0:
            e2.tZone || Vt(e2), e2.z2 = e2.tZone;
            break;
          case 1:
            e2.z2 = e2.gZone;
            break;
          default:
            throw new Error("Invalid zone pointer");
        }
      }
      function sa(e2) {
        let t = e2.stack.pop();
        switch (exports2.DEBUG && console.log(e2.step, "SZPS[]", t), e2.zp0 = e2.zp1 = e2.zp2 = t, t) {
          case 0:
            e2.tZone || Vt(e2), e2.z0 = e2.z1 = e2.z2 = e2.tZone;
            break;
          case 1:
            e2.z0 = e2.z1 = e2.z2 = e2.gZone;
            break;
          default:
            throw new Error("Invalid zone pointer");
        }
      }
      function oa(e2) {
        e2.loop = e2.stack.pop(), exports2.DEBUG && console.log(e2.step, "SLOOP[]", e2.loop);
      }
      function ra(e2) {
        exports2.DEBUG && console.log(e2.step, "RTG[]"), e2.round = Ys;
      }
      function ia(e2) {
        exports2.DEBUG && console.log(e2.step, "RTHG[]"), e2.round = Vi;
      }
      function aa(e2) {
        let t = e2.stack.pop();
        exports2.DEBUG && console.log(e2.step, "SMD[]", t), e2.minDis = t / 64;
      }
      function la(e2) {
        exports2.DEBUG && console.log(e2.step, "ELSE[]"), $s(e2, false);
      }
      function ca(e2) {
        let t = e2.stack.pop();
        exports2.DEBUG && console.log(e2.step, "JMPR[]", t), e2.ip += t - 1;
      }
      function ua(e2) {
        let t = e2.stack.pop();
        exports2.DEBUG && console.log(e2.step, "SCVTCI[]", t), e2.cvCutIn = t / 64;
      }
      function pa(e2) {
        let t = e2.stack;
        exports2.DEBUG && console.log(e2.step, "DUP[]"), t.push(t[t.length - 1]);
      }
      function mn(e2) {
        exports2.DEBUG && console.log(e2.step, "POP[]"), e2.stack.pop();
      }
      function fa(e2) {
        exports2.DEBUG && console.log(e2.step, "CLEAR[]"), e2.stack.length = 0;
      }
      function ha(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "SWAP[]"), t.push(n), t.push(s);
      }
      function da(e2) {
        let t = e2.stack;
        exports2.DEBUG && console.log(e2.step, "DEPTH[]"), t.push(t.length);
      }
      function ma(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "LOOPCALL[]", n, s);
        let o = e2.ip, r = e2.prog;
        e2.prog = e2.funcs[n];
        for (let i = 0; i < s; i++)
          Ee(e2), exports2.DEBUG && console.log(++e2.step, i + 1 < s ? "next loopcall" : "done loopcall", i);
        e2.ip = o, e2.prog = r;
      }
      function ga(e2) {
        let t = e2.stack.pop();
        exports2.DEBUG && console.log(e2.step, "CALL[]", t);
        let n = e2.ip, s = e2.prog;
        e2.prog = e2.funcs[t], Ee(e2), e2.ip = n, e2.prog = s, exports2.DEBUG && console.log(++e2.step, "returning from", t);
      }
      function ya(e2) {
        let t = e2.stack, n = t.pop();
        exports2.DEBUG && console.log(e2.step, "CINDEX[]", n), t.push(t[t.length - n]);
      }
      function xa(e2) {
        let t = e2.stack, n = t.pop();
        exports2.DEBUG && console.log(e2.step, "MINDEX[]", n), t.push(t.splice(t.length - n, 1)[0]);
      }
      function ba(e2) {
        if (e2.env !== "fpgm")
          throw new Error("FDEF not allowed here");
        let t = e2.stack, n = e2.prog, s = e2.ip, o = t.pop(), r = s;
        for (exports2.DEBUG && console.log(e2.step, "FDEF[]", o); n[++s] !== 45; )
          ;
        e2.ip = s, e2.funcs[o] = n.slice(r + 1, s);
      }
      function Ms(e2, t) {
        let n = t.stack.pop(), s = t.z0[n], o = t.fv, r = t.pv;
        exports2.DEBUG && console.log(t.step, "MDAP[" + e2 + "]", n);
        let i = r.distance(s, et);
        e2 && (i = t.round(i)), o.setRelative(s, et, i, r), o.touch(s), t.rp0 = t.rp1 = n;
      }
      function Ps(e2, t) {
        let n = t.z2, s = n.length - 2, o, r, i;
        exports2.DEBUG && console.log(t.step, "IUP[" + e2.axis + "]");
        for (let a = 0; a < s; a++)
          o = n[a], !e2.touched(o) && (r = o.prevTouched(e2), r !== o && (i = o.nextTouched(e2), r === i && e2.setRelative(o, o, e2.distance(r, r, false, true), e2, true), e2.interpolate(o, r, i, e2)));
      }
      function Bs(e2, t) {
        let n = t.stack, s = e2 ? t.rp1 : t.rp2, o = (e2 ? t.z0 : t.z1)[s], r = t.fv, i = t.pv, a = t.loop, c = t.z2;
        for (; a--; ) {
          let l = n.pop(), u = c[l], p = i.distance(o, o, false, true);
          r.setRelative(u, u, p, i), r.touch(u), exports2.DEBUG && console.log(t.step, (t.loop > 1 ? "loop " + (t.loop - a) + ": " : "") + "SHP[" + (e2 ? "rp1" : "rp2") + "]", l);
        }
        t.loop = 1;
      }
      function Gs(e2, t) {
        let n = t.stack, s = e2 ? t.rp1 : t.rp2, o = (e2 ? t.z0 : t.z1)[s], r = t.fv, i = t.pv, a = n.pop(), c = t.z2[t.contours[a]], l = c;
        exports2.DEBUG && console.log(t.step, "SHC[" + e2 + "]", a);
        let u = i.distance(o, o, false, true);
        do
          l !== o && r.setRelative(l, l, u, i), l = l.nextPointOnContour;
        while (l !== c);
      }
      function Ns(e2, t) {
        let n = t.stack, s = e2 ? t.rp1 : t.rp2, o = (e2 ? t.z0 : t.z1)[s], r = t.fv, i = t.pv, a = n.pop();
        exports2.DEBUG && console.log(t.step, "SHZ[" + e2 + "]", a);
        let c;
        switch (a) {
          case 0:
            c = t.tZone;
            break;
          case 1:
            c = t.gZone;
            break;
          default:
            throw new Error("Invalid zone");
        }
        let l, u = i.distance(o, o, false, true), p = c.length - 2;
        for (let f = 0; f < p; f++)
          l = c[f], r.setRelative(l, l, u, i);
      }
      function Sa(e2) {
        let t = e2.stack, n = e2.loop, s = e2.fv, o = t.pop() / 64, r = e2.z2;
        for (; n--; ) {
          let i = t.pop(), a = r[i];
          exports2.DEBUG && console.log(e2.step, (e2.loop > 1 ? "loop " + (e2.loop - n) + ": " : "") + "SHPIX[]", i, o), s.setRelative(a, a, o), s.touch(a);
        }
        e2.loop = 1;
      }
      function va(e2) {
        let t = e2.stack, n = e2.rp1, s = e2.rp2, o = e2.loop, r = e2.z0[n], i = e2.z1[s], a = e2.fv, c = e2.dpv, l = e2.z2;
        for (; o--; ) {
          let u = t.pop(), p = l[u];
          exports2.DEBUG && console.log(e2.step, (e2.loop > 1 ? "loop " + (e2.loop - o) + ": " : "") + "IP[]", u, n, "<->", s), a.interpolate(p, r, i, c), a.touch(p);
        }
        e2.loop = 1;
      }
      function Hs(e2, t) {
        let n = t.stack, s = n.pop() / 64, o = n.pop(), r = t.z1[o], i = t.z0[t.rp0], a = t.fv, c = t.pv;
        a.setRelative(r, i, s, c), a.touch(r), exports2.DEBUG && console.log(t.step, "MSIRP[" + e2 + "]", s, o), t.rp1 = t.rp0, t.rp2 = o, e2 && (t.rp0 = o);
      }
      function Ta(e2) {
        let t = e2.stack, n = e2.rp0, s = e2.z0[n], o = e2.loop, r = e2.fv, i = e2.pv, a = e2.z1;
        for (; o--; ) {
          let c = t.pop(), l = a[c];
          exports2.DEBUG && console.log(e2.step, (e2.loop > 1 ? "loop " + (e2.loop - o) + ": " : "") + "ALIGNRP[]", c), r.setRelative(l, s, 0, i), r.touch(l);
        }
        e2.loop = 1;
      }
      function ka(e2) {
        exports2.DEBUG && console.log(e2.step, "RTDG[]"), e2.round = Hi;
      }
      function Vs(e2, t) {
        let n = t.stack, s = n.pop(), o = n.pop(), r = t.z0[o], i = t.fv, a = t.pv, c = t.cvt[s];
        exports2.DEBUG && console.log(t.step, "MIAP[" + e2 + "]", s, "(", c, ")", o);
        let l = a.distance(r, et);
        e2 && (Math.abs(l - c) < t.cvCutIn && (l = c), l = t.round(l)), i.setRelative(r, et, l, a), t.zp0 === 0 && (r.xo = r.x, r.yo = r.y), i.touch(r), t.rp0 = t.rp1 = o;
      }
      function Fa(e2) {
        let t = e2.prog, n = e2.ip, s = e2.stack, o = t[++n];
        exports2.DEBUG && console.log(e2.step, "NPUSHB[]", o);
        for (let r = 0; r < o; r++)
          s.push(t[++n]);
        e2.ip = n;
      }
      function Ua(e2) {
        let t = e2.ip, n = e2.prog, s = e2.stack, o = n[++t];
        exports2.DEBUG && console.log(e2.step, "NPUSHW[]", o);
        for (let r = 0; r < o; r++) {
          let i = n[++t] << 8 | n[++t];
          i & 32768 && (i = -((i ^ 65535) + 1)), s.push(i);
        }
        e2.ip = t;
      }
      function Oa(e2) {
        let t = e2.stack, n = e2.store;
        n || (n = e2.store = []);
        let s = t.pop(), o = t.pop();
        exports2.DEBUG && console.log(e2.step, "WS", s, o), n[o] = s;
      }
      function Ca(e2) {
        let t = e2.stack, n = e2.store, s = t.pop();
        exports2.DEBUG && console.log(e2.step, "RS", s);
        let o = n && n[s] || 0;
        t.push(o);
      }
      function La(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "WCVTP", n, s), e2.cvt[s] = n / 64;
      }
      function Ra(e2) {
        let t = e2.stack, n = t.pop();
        exports2.DEBUG && console.log(e2.step, "RCVT", n), t.push(e2.cvt[n] * 64);
      }
      function zs(e2, t) {
        let n = t.stack, s = n.pop(), o = t.z2[s];
        exports2.DEBUG && console.log(t.step, "GC[" + e2 + "]", s), n.push(t.dpv.distance(o, et, e2, false) * 64);
      }
      function _s(e2, t) {
        let n = t.stack, s = n.pop(), o = n.pop(), r = t.z1[s], i = t.z0[o], a = t.dpv.distance(i, r, e2, e2);
        exports2.DEBUG && console.log(t.step, "MD[" + e2 + "]", s, o, "->", a), t.stack.push(Math.round(a * 64));
      }
      function Ea(e2) {
        exports2.DEBUG && console.log(e2.step, "MPPEM[]"), e2.stack.push(e2.ppem);
      }
      function wa(e2) {
        exports2.DEBUG && console.log(e2.step, "FLIPON[]"), e2.autoFlip = true;
      }
      function Da(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "LT[]", n, s), t.push(s < n ? 1 : 0);
      }
      function Ia(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "LTEQ[]", n, s), t.push(s <= n ? 1 : 0);
      }
      function Aa(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "GT[]", n, s), t.push(s > n ? 1 : 0);
      }
      function Ma(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "GTEQ[]", n, s), t.push(s >= n ? 1 : 0);
      }
      function Pa(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "EQ[]", n, s), t.push(n === s ? 1 : 0);
      }
      function Ba(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "NEQ[]", n, s), t.push(n !== s ? 1 : 0);
      }
      function Ga(e2) {
        let t = e2.stack, n = t.pop();
        exports2.DEBUG && console.log(e2.step, "ODD[]", n), t.push(Math.trunc(n) & 1 ? 1 : 0);
      }
      function Na(e2) {
        let t = e2.stack, n = t.pop();
        exports2.DEBUG && console.log(e2.step, "EVEN[]", n), t.push(Math.trunc(n) & 1 ? 0 : 1);
      }
      function Ha(e2) {
        let t = e2.stack.pop(), n;
        exports2.DEBUG && console.log(e2.step, "IF[]", t), t || ($s(e2, true), exports2.DEBUG && console.log(e2.step, n === 27 ? "ELSE[]" : "EIF[]"));
      }
      function Va(e2) {
        exports2.DEBUG && console.log(e2.step, "EIF[]");
      }
      function za(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "AND[]", n, s), t.push(n && s ? 1 : 0);
      }
      function _a(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "OR[]", n, s), t.push(n || s ? 1 : 0);
      }
      function Wa(e2) {
        let t = e2.stack, n = t.pop();
        exports2.DEBUG && console.log(e2.step, "NOT[]", n), t.push(n ? 0 : 1);
      }
      function gn(e2, t) {
        let n = t.stack, s = n.pop(), o = t.fv, r = t.pv, i = t.ppem, a = t.deltaBase + (e2 - 1) * 16, c = t.deltaShift, l = t.z0;
        exports2.DEBUG && console.log(t.step, "DELTAP[" + e2 + "]", s, n);
        for (let u = 0; u < s; u++) {
          let p = n.pop(), f = n.pop();
          if (a + ((f & 240) >> 4) !== i)
            continue;
          let m = (f & 15) - 8;
          m >= 0 && m++, exports2.DEBUG && console.log(t.step, "DELTAPFIX", p, "by", m * c);
          let b = l[p];
          o.setRelative(b, b, m * c, r);
        }
      }
      function ja(e2) {
        let n = e2.stack.pop();
        exports2.DEBUG && console.log(e2.step, "SDB[]", n), e2.deltaBase = n;
      }
      function qa(e2) {
        let n = e2.stack.pop();
        exports2.DEBUG && console.log(e2.step, "SDS[]", n), e2.deltaShift = Math.pow(0.5, n);
      }
      function Xa(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "ADD[]", n, s), t.push(s + n);
      }
      function Ya(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "SUB[]", n, s), t.push(s - n);
      }
      function Za(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "DIV[]", n, s), t.push(s * 64 / n);
      }
      function $a(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "MUL[]", n, s), t.push(s * n / 64);
      }
      function Ka(e2) {
        let t = e2.stack, n = t.pop();
        exports2.DEBUG && console.log(e2.step, "ABS[]", n), t.push(Math.abs(n));
      }
      function Qa(e2) {
        let t = e2.stack, n = t.pop();
        exports2.DEBUG && console.log(e2.step, "NEG[]", n), t.push(-n);
      }
      function Ja(e2) {
        let t = e2.stack, n = t.pop();
        exports2.DEBUG && console.log(e2.step, "FLOOR[]", n), t.push(Math.floor(n / 64) * 64);
      }
      function el(e2) {
        let t = e2.stack, n = t.pop();
        exports2.DEBUG && console.log(e2.step, "CEILING[]", n), t.push(Math.ceil(n / 64) * 64);
      }
      function Ht(e2, t) {
        let n = t.stack, s = n.pop();
        exports2.DEBUG && console.log(t.step, "ROUND[]"), n.push(t.round(s / 64) * 64);
      }
      function tl(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "WCVTF[]", n, s), e2.cvt[s] = n * e2.ppem / e2.font.unitsPerEm;
      }
      function yn(e2, t) {
        let n = t.stack, s = n.pop(), o = t.ppem, r = t.deltaBase + (e2 - 1) * 16, i = t.deltaShift;
        exports2.DEBUG && console.log(t.step, "DELTAC[" + e2 + "]", s, n);
        for (let a = 0; a < s; a++) {
          let c = n.pop(), l = n.pop();
          if (r + ((l & 240) >> 4) !== o)
            continue;
          let p = (l & 15) - 8;
          p >= 0 && p++;
          let f = p * i;
          exports2.DEBUG && console.log(t.step, "DELTACFIX", c, "by", f), t.cvt[c] += f;
        }
      }
      function nl(e2) {
        let t = e2.stack.pop();
        exports2.DEBUG && console.log(e2.step, "SROUND[]", t), e2.round = Zs;
        let n;
        switch (t & 192) {
          case 0:
            n = 0.5;
            break;
          case 64:
            n = 1;
            break;
          case 128:
            n = 2;
            break;
          default:
            throw new Error("invalid SROUND value");
        }
        switch (e2.srPeriod = n, t & 48) {
          case 0:
            e2.srPhase = 0;
            break;
          case 16:
            e2.srPhase = 0.25 * n;
            break;
          case 32:
            e2.srPhase = 0.5 * n;
            break;
          case 48:
            e2.srPhase = 0.75 * n;
            break;
          default:
            throw new Error("invalid SROUND value");
        }
        t &= 15, t === 0 ? e2.srThreshold = 0 : e2.srThreshold = (t / 8 - 0.5) * n;
      }
      function sl(e2) {
        let t = e2.stack.pop();
        exports2.DEBUG && console.log(e2.step, "S45ROUND[]", t), e2.round = Zs;
        let n;
        switch (t & 192) {
          case 0:
            n = Math.sqrt(2) / 2;
            break;
          case 64:
            n = Math.sqrt(2);
            break;
          case 128:
            n = 2 * Math.sqrt(2);
            break;
          default:
            throw new Error("invalid S45ROUND value");
        }
        switch (e2.srPeriod = n, t & 48) {
          case 0:
            e2.srPhase = 0;
            break;
          case 16:
            e2.srPhase = 0.25 * n;
            break;
          case 32:
            e2.srPhase = 0.5 * n;
            break;
          case 48:
            e2.srPhase = 0.75 * n;
            break;
          default:
            throw new Error("invalid S45ROUND value");
        }
        t &= 15, t === 0 ? e2.srThreshold = 0 : e2.srThreshold = (t / 8 - 0.5) * n;
      }
      function ol(e2) {
        exports2.DEBUG && console.log(e2.step, "ROFF[]"), e2.round = Ni;
      }
      function rl(e2) {
        exports2.DEBUG && console.log(e2.step, "RUTG[]"), e2.round = zi;
      }
      function il(e2) {
        exports2.DEBUG && console.log(e2.step, "RDTG[]"), e2.round = _i;
      }
      function al(e2) {
        let t = e2.stack.pop();
        exports2.DEBUG && console.log(e2.step, "SCANCTRL[]", t);
      }
      function Ws(e2, t) {
        let n = t.stack, s = n.pop(), o = n.pop(), r = t.z2[s], i = t.z1[o];
        exports2.DEBUG && console.log(t.step, "SDPVTL[" + e2 + "]", s, o);
        let a, c;
        e2 ? (a = r.y - i.y, c = i.x - r.x) : (a = i.x - r.x, c = i.y - r.y), t.dpv = nt(a, c);
      }
      function ll(e2) {
        let t = e2.stack, n = t.pop(), s = 0;
        exports2.DEBUG && console.log(e2.step, "GETINFO[]", n), n & 1 && (s = 35), n & 32 && (s |= 4096), t.push(s);
      }
      function cl(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop(), o = t.pop();
        exports2.DEBUG && console.log(e2.step, "ROLL[]"), t.push(s), t.push(n), t.push(o);
      }
      function ul(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "MAX[]", n, s), t.push(Math.max(s, n));
      }
      function pl(e2) {
        let t = e2.stack, n = t.pop(), s = t.pop();
        exports2.DEBUG && console.log(e2.step, "MIN[]", n, s), t.push(Math.min(s, n));
      }
      function fl(e2) {
        let t = e2.stack.pop();
        exports2.DEBUG && console.log(e2.step, "SCANTYPE[]", t);
      }
      function hl(e2) {
        let t = e2.stack.pop(), n = e2.stack.pop();
        switch (exports2.DEBUG && console.log(e2.step, "INSTCTRL[]", t, n), t) {
          case 1:
            e2.inhibitGridFit = !!n;
            return;
          case 2:
            e2.ignoreCvt = !!n;
            return;
          default:
            throw new Error("invalid INSTCTRL[] selector");
        }
      }
      function Ue(e2, t) {
        let n = t.stack, s = t.prog, o = t.ip;
        exports2.DEBUG && console.log(t.step, "PUSHB[" + e2 + "]");
        for (let r = 0; r < e2; r++)
          n.push(s[++o]);
        t.ip = o;
      }
      function Oe(e2, t) {
        let n = t.ip, s = t.prog, o = t.stack;
        exports2.DEBUG && console.log(t.ip, "PUSHW[" + e2 + "]");
        for (let r = 0; r < e2; r++) {
          let i = s[++n] << 8 | s[++n];
          i & 32768 && (i = -((i ^ 65535) + 1)), o.push(i);
        }
        t.ip = n;
      }
      function T(e2, t, n, s, o, r) {
        let i = r.stack, a = e2 && i.pop(), c = i.pop(), l = r.rp0, u = r.z0[l], p = r.z1[c], f = r.minDis, h = r.fv, m = r.dpv, b, y, O, k;
        y = b = m.distance(p, u, true, true), O = y >= 0 ? 1 : -1, y = Math.abs(y), e2 && (k = r.cvt[a], s && Math.abs(y - k) < r.cvCutIn && (y = k)), n && y < f && (y = f), s && (y = r.round(y)), h.setRelative(p, u, O * y, m), h.touch(p), exports2.DEBUG && console.log(r.step, (e2 ? "MIRP[" : "MDRP[") + (t ? "M" : "m") + (n ? ">" : "_") + (s ? "R" : "_") + (o === 0 ? "Gr" : o === 1 ? "Bl" : o === 2 ? "Wh" : "") + "]", e2 ? a + "(" + r.cvt[a] + "," + k + ")" : "", c, "(d =", b, "->", O * y, ")"), r.rp1 = r.rp0, r.rp2 = c, t && (r.rp0 = c);
      }
      js = [Es.bind(void 0, xe), Es.bind(void 0, ge), ws.bind(void 0, xe), ws.bind(void 0, ge), Ds.bind(void 0, xe), Ds.bind(void 0, ge), Is.bind(void 0, 0), Is.bind(void 0, 1), As.bind(void 0, 0), As.bind(void 0, 1), ji, qi, Xi, Yi, Zi, $i, Ki, Qi, Ji, ea, ta, na, sa, oa, ra, ia, aa, la, ca, ua, void 0, void 0, pa, mn, fa, ha, da, ya, xa, void 0, void 0, void 0, ma, ga, ba, void 0, Ms.bind(void 0, 0), Ms.bind(void 0, 1), Ps.bind(void 0, xe), Ps.bind(void 0, ge), Bs.bind(void 0, 0), Bs.bind(void 0, 1), Gs.bind(void 0, 0), Gs.bind(void 0, 1), Ns.bind(void 0, 0), Ns.bind(void 0, 1), Sa, va, Hs.bind(void 0, 0), Hs.bind(void 0, 1), Ta, ka, Vs.bind(void 0, 0), Vs.bind(void 0, 1), Fa, Ua, Oa, Ca, La, Ra, zs.bind(void 0, 0), zs.bind(void 0, 1), void 0, _s.bind(void 0, 0), _s.bind(void 0, 1), Ea, void 0, wa, void 0, void 0, Da, Ia, Aa, Ma, Pa, Ba, Ga, Na, Ha, Va, za, _a, Wa, gn.bind(void 0, 1), ja, qa, Xa, Ya, Za, $a, Ka, Qa, Ja, el, Ht.bind(void 0, 0), Ht.bind(void 0, 1), Ht.bind(void 0, 2), Ht.bind(void 0, 3), void 0, void 0, void 0, void 0, tl, gn.bind(void 0, 2), gn.bind(void 0, 3), yn.bind(void 0, 1), yn.bind(void 0, 2), yn.bind(void 0, 3), nl, sl, void 0, void 0, ol, void 0, rl, il, mn, mn, void 0, void 0, void 0, void 0, void 0, al, Ws.bind(void 0, 0), Ws.bind(void 0, 1), ll, void 0, cl, ul, pl, fl, hl, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, Ue.bind(void 0, 1), Ue.bind(void 0, 2), Ue.bind(void 0, 3), Ue.bind(void 0, 4), Ue.bind(void 0, 5), Ue.bind(void 0, 6), Ue.bind(void 0, 7), Ue.bind(void 0, 8), Oe.bind(void 0, 1), Oe.bind(void 0, 2), Oe.bind(void 0, 3), Oe.bind(void 0, 4), Oe.bind(void 0, 5), Oe.bind(void 0, 6), Oe.bind(void 0, 7), Oe.bind(void 0, 8), T.bind(void 0, 0, 0, 0, 0, 0), T.bind(void 0, 0, 0, 0, 0, 1), T.bind(void 0, 0, 0, 0, 0, 2), T.bind(void 0, 0, 0, 0, 0, 3), T.bind(void 0, 0, 0, 0, 1, 0), T.bind(void 0, 0, 0, 0, 1, 1), T.bind(void 0, 0, 0, 0, 1, 2), T.bind(void 0, 0, 0, 0, 1, 3), T.bind(void 0, 0, 0, 1, 0, 0), T.bind(void 0, 0, 0, 1, 0, 1), T.bind(void 0, 0, 0, 1, 0, 2), T.bind(void 0, 0, 0, 1, 0, 3), T.bind(void 0, 0, 0, 1, 1, 0), T.bind(void 0, 0, 0, 1, 1, 1), T.bind(void 0, 0, 0, 1, 1, 2), T.bind(void 0, 0, 0, 1, 1, 3), T.bind(void 0, 0, 1, 0, 0, 0), T.bind(void 0, 0, 1, 0, 0, 1), T.bind(void 0, 0, 1, 0, 0, 2), T.bind(void 0, 0, 1, 0, 0, 3), T.bind(void 0, 0, 1, 0, 1, 0), T.bind(void 0, 0, 1, 0, 1, 1), T.bind(void 0, 0, 1, 0, 1, 2), T.bind(void 0, 0, 1, 0, 1, 3), T.bind(void 0, 0, 1, 1, 0, 0), T.bind(void 0, 0, 1, 1, 0, 1), T.bind(void 0, 0, 1, 1, 0, 2), T.bind(void 0, 0, 1, 1, 0, 3), T.bind(void 0, 0, 1, 1, 1, 0), T.bind(void 0, 0, 1, 1, 1, 1), T.bind(void 0, 0, 1, 1, 1, 2), T.bind(void 0, 0, 1, 1, 1, 3), T.bind(void 0, 1, 0, 0, 0, 0), T.bind(void 0, 1, 0, 0, 0, 1), T.bind(void 0, 1, 0, 0, 0, 2), T.bind(void 0, 1, 0, 0, 0, 3), T.bind(void 0, 1, 0, 0, 1, 0), T.bind(void 0, 1, 0, 0, 1, 1), T.bind(void 0, 1, 0, 0, 1, 2), T.bind(void 0, 1, 0, 0, 1, 3), T.bind(void 0, 1, 0, 1, 0, 0), T.bind(void 0, 1, 0, 1, 0, 1), T.bind(void 0, 1, 0, 1, 0, 2), T.bind(void 0, 1, 0, 1, 0, 3), T.bind(void 0, 1, 0, 1, 1, 0), T.bind(void 0, 1, 0, 1, 1, 1), T.bind(void 0, 1, 0, 1, 1, 2), T.bind(void 0, 1, 0, 1, 1, 3), T.bind(void 0, 1, 1, 0, 0, 0), T.bind(void 0, 1, 1, 0, 0, 1), T.bind(void 0, 1, 1, 0, 0, 2), T.bind(void 0, 1, 1, 0, 0, 3), T.bind(void 0, 1, 1, 0, 1, 0), T.bind(void 0, 1, 1, 0, 1, 1), T.bind(void 0, 1, 1, 0, 1, 2), T.bind(void 0, 1, 1, 0, 1, 3), T.bind(void 0, 1, 1, 1, 0, 0), T.bind(void 0, 1, 1, 1, 0, 1), T.bind(void 0, 1, 1, 1, 0, 2), T.bind(void 0, 1, 1, 1, 0, 3), T.bind(void 0, 1, 1, 1, 1, 0), T.bind(void 0, 1, 1, 1, 1, 1), T.bind(void 0, 1, 1, 1, 1, 2), T.bind(void 0, 1, 1, 1, 1, 3)];
      var Ks = Xs;
      function Ve(e2) {
        this.char = e2, this.state = {}, this.activeState = null;
      }
      function bn(e2, t, n) {
        this.contextName = n, this.startIndex = e2, this.endOffset = t;
      }
      function dl(e2, t, n) {
        this.contextName = e2, this.openRange = null, this.ranges = [], this.checkStart = t, this.checkEnd = n;
      }
      function z(e2, t) {
        this.context = e2, this.index = t, this.length = e2.length, this.current = e2[t], this.backtrack = e2.slice(0, t), this.lookahead = e2.slice(t + 1);
      }
      function zt(e2) {
        this.eventId = e2, this.subscribers = [];
      }
      function ml(e2) {
        let t = ["start", "end", "next", "newToken", "contextStart", "contextEnd", "insertToken", "removeToken", "removeRange", "replaceToken", "replaceRange", "composeRUD", "updateContextsRanges"];
        for (let s = 0; s < t.length; s++) {
          let o = t[s];
          Object.defineProperty(this.events, o, { value: new zt(o) });
        }
        if (e2)
          for (let s = 0; s < t.length; s++) {
            let o = t[s], r = e2[o];
            typeof r == "function" && this.events[o].subscribe(r);
          }
        let n = ["insertToken", "removeToken", "removeRange", "replaceToken", "replaceRange", "composeRUD"];
        for (let s = 0; s < n.length; s++) {
          let o = n[s];
          this.events[o].subscribe(this.updateContextsRanges);
        }
      }
      function N(e2) {
        this.tokens = [], this.registeredContexts = {}, this.contextCheckers = [], this.events = {}, this.registeredModifiers = [], ml.call(this, e2);
      }
      Ve.prototype.setState = function(e2, t) {
        return this.state[e2] = t, this.activeState = { key: e2, value: this.state[e2] }, this.activeState;
      };
      Ve.prototype.getState = function(e2) {
        return this.state[e2] || null;
      };
      N.prototype.inboundIndex = function(e2) {
        return e2 >= 0 && e2 < this.tokens.length;
      };
      N.prototype.composeRUD = function(e2) {
        let n = e2.map((o) => this[o[0]].apply(this, o.slice(1).concat(true))), s = (o) => typeof o == "object" && Object.prototype.hasOwnProperty.call(o, "FAIL");
        if (n.every(s))
          return { FAIL: "composeRUD: one or more operations hasn't completed successfully", report: n.filter(s) };
        this.dispatch("composeRUD", [n.filter((o) => !s(o))]);
      };
      N.prototype.replaceRange = function(e2, t, n, s) {
        t = t !== null ? t : this.tokens.length;
        let o = n.every((r) => r instanceof Ve);
        if (!isNaN(e2) && this.inboundIndex(e2) && o) {
          let r = this.tokens.splice.apply(this.tokens, [e2, t].concat(n));
          return s || this.dispatch("replaceToken", [e2, t, n]), [r, n];
        } else
          return { FAIL: "replaceRange: invalid tokens or startIndex." };
      };
      N.prototype.replaceToken = function(e2, t, n) {
        if (!isNaN(e2) && this.inboundIndex(e2) && t instanceof Ve) {
          let s = this.tokens.splice(e2, 1, t);
          return n || this.dispatch("replaceToken", [e2, t]), [s[0], t];
        } else
          return { FAIL: "replaceToken: invalid token or index." };
      };
      N.prototype.removeRange = function(e2, t, n) {
        t = isNaN(t) ? this.tokens.length : t;
        let s = this.tokens.splice(e2, t);
        return n || this.dispatch("removeRange", [s, e2, t]), s;
      };
      N.prototype.removeToken = function(e2, t) {
        if (!isNaN(e2) && this.inboundIndex(e2)) {
          let n = this.tokens.splice(e2, 1);
          return t || this.dispatch("removeToken", [n, e2]), n;
        } else
          return { FAIL: "removeToken: invalid token index." };
      };
      N.prototype.insertToken = function(e2, t, n) {
        return e2.every((o) => o instanceof Ve) ? (this.tokens.splice.apply(this.tokens, [t, 0].concat(e2)), n || this.dispatch("insertToken", [e2, t]), e2) : { FAIL: "insertToken: invalid token(s)." };
      };
      N.prototype.registerModifier = function(e2, t, n) {
        this.events.newToken.subscribe(function(s, o) {
          let r = [s, o], i = t === null || t.apply(this, r) === true, a = [s, o];
          if (i) {
            let c = n.apply(this, a);
            s.setState(e2, c);
          }
        }), this.registeredModifiers.push(e2);
      };
      zt.prototype.subscribe = function(e2) {
        return typeof e2 == "function" ? this.subscribers.push(e2) - 1 : { FAIL: `invalid '${this.eventId}' event handler` };
      };
      zt.prototype.unsubscribe = function(e2) {
        this.subscribers.splice(e2, 1);
      };
      z.prototype.setCurrentIndex = function(e2) {
        this.index = e2, this.current = this.context[e2], this.backtrack = this.context.slice(0, e2), this.lookahead = this.context.slice(e2 + 1);
      };
      z.prototype.get = function(e2) {
        switch (true) {
          case e2 === 0:
            return this.current;
          case (e2 < 0 && Math.abs(e2) <= this.backtrack.length):
            return this.backtrack.slice(e2)[0];
          case (e2 > 0 && e2 <= this.lookahead.length):
            return this.lookahead[e2 - 1];
          default:
            return null;
        }
      };
      N.prototype.rangeToText = function(e2) {
        if (e2 instanceof bn)
          return this.getRangeTokens(e2).map((t) => t.char).join("");
      };
      N.prototype.getText = function() {
        return this.tokens.map((e2) => e2.char).join("");
      };
      N.prototype.getContext = function(e2) {
        let t = this.registeredContexts[e2];
        return t || null;
      };
      N.prototype.on = function(e2, t) {
        let n = this.events[e2];
        return n ? n.subscribe(t) : null;
      };
      N.prototype.dispatch = function(e2, t) {
        let n = this.events[e2];
        if (n instanceof zt)
          for (let s = 0; s < n.subscribers.length; s++)
            n.subscribers[s].apply(this, t || []);
      };
      N.prototype.registerContextChecker = function(e2, t, n) {
        if (this.getContext(e2))
          return { FAIL: `context name '${e2}' is already registered.` };
        if (typeof t != "function")
          return { FAIL: "missing context start check." };
        if (typeof n != "function")
          return { FAIL: "missing context end check." };
        let s = new dl(e2, t, n);
        return this.registeredContexts[e2] = s, this.contextCheckers.push(s), s;
      };
      N.prototype.getRangeTokens = function(e2) {
        let t = e2.startIndex + e2.endOffset;
        return [].concat(this.tokens.slice(e2.startIndex, t));
      };
      N.prototype.getContextRanges = function(e2) {
        let t = this.getContext(e2);
        return t ? t.ranges : { FAIL: `context checker '${e2}' is not registered.` };
      };
      N.prototype.resetContextsRanges = function() {
        let e2 = this.registeredContexts;
        for (let t in e2)
          if (Object.prototype.hasOwnProperty.call(e2, t)) {
            let n = e2[t];
            n.ranges = [];
          }
      };
      N.prototype.updateContextsRanges = function() {
        this.resetContextsRanges();
        let e2 = this.tokens.map((t) => t.char);
        for (let t = 0; t < e2.length; t++) {
          let n = new z(e2, t);
          this.runContextCheck(n);
        }
        this.dispatch("updateContextsRanges", [this.registeredContexts]);
      };
      N.prototype.setEndOffset = function(e2, t) {
        let n = this.getContext(t).openRange.startIndex, s = new bn(n, e2, t), o = this.getContext(t).ranges;
        return s.rangeId = `${t}.${o.length}`, o.push(s), this.getContext(t).openRange = null, s;
      };
      N.prototype.runContextCheck = function(e2) {
        let t = e2.index;
        for (let n = 0; n < this.contextCheckers.length; n++) {
          let s = this.contextCheckers[n], o = s.contextName, r = this.getContext(o).openRange;
          if (!r && s.checkStart(e2) && (r = new bn(t, null, o), this.getContext(o).openRange = r, this.dispatch("contextStart", [o, t])), r && s.checkEnd(e2)) {
            let i = t - r.startIndex + 1, a = this.setEndOffset(i, o);
            this.dispatch("contextEnd", [o, a]);
          }
        }
      };
      N.prototype.tokenize = function(e2) {
        this.tokens = [], this.resetContextsRanges();
        let t = Array.from(e2);
        this.dispatch("start");
        for (let n = 0; n < t.length; n++) {
          let s = t[n], o = new z(t, n);
          this.dispatch("next", [o]), this.runContextCheck(o);
          let r = new Ve(s);
          this.tokens.push(r), this.dispatch("newToken", [r, o]);
        }
        return this.dispatch("end", [this.tokens]), this.tokens;
      };
      var Qs = N;
      function ye(e2) {
        return /[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(e2);
      }
      function Sn(e2) {
        return /[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(e2);
      }
      function pe(e2) {
        return /[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(e2);
      }
      function st(e2) {
        return /[\u0E00-\u0E7F]/.test(e2);
      }
      function ot(e2) {
        return /[A-z]/.test(e2);
      }
      function Js(e2) {
        return /\s/.test(e2);
      }
      function te(e2) {
        this.font = e2, this.features = {};
      }
      function Se(e2) {
        this.id = e2.id, this.tag = e2.tag, this.substitution = e2.substitution;
      }
      function rt(e2, t) {
        if (!e2)
          return -1;
        switch (t.format) {
          case 1:
            return t.glyphs.indexOf(e2);
          case 2: {
            let n = t.ranges;
            for (let s = 0; s < n.length; s++) {
              let o = n[s];
              if (e2 >= o.start && e2 <= o.end) {
                let r = e2 - o.start;
                return o.index + r;
              }
            }
            break;
          }
          default:
            return -1;
        }
        return -1;
      }
      function gl(e2, t) {
        return rt(e2, t.coverage) === -1 ? null : e2 + t.deltaGlyphId;
      }
      function yl(e2, t) {
        let n = rt(e2, t.coverage);
        return n === -1 ? null : t.substitute[n];
      }
      function vn(e2, t) {
        let n = [];
        for (let s = 0; s < e2.length; s++) {
          let o = e2[s], r = t.current;
          r = Array.isArray(r) ? r[0] : r;
          let i = rt(r, o);
          i !== -1 && n.push(i);
        }
        return n.length !== e2.length ? -1 : n;
      }
      function xl(e2, t) {
        let n = t.inputCoverage.length + t.lookaheadCoverage.length + t.backtrackCoverage.length;
        if (e2.context.length < n)
          return [];
        let s = vn(t.inputCoverage, e2);
        if (s === -1)
          return [];
        let o = t.inputCoverage.length - 1;
        if (e2.lookahead.length < t.lookaheadCoverage.length)
          return [];
        let r = e2.lookahead.slice(o);
        for (; r.length && pe(r[0].char); )
          r.shift();
        let i = new z(r, 0), a = vn(t.lookaheadCoverage, i), c = [].concat(e2.backtrack);
        for (c.reverse(); c.length && pe(c[0].char); )
          c.shift();
        if (c.length < t.backtrackCoverage.length)
          return [];
        let l = new z(c, 0), u = vn(t.backtrackCoverage, l), p = s.length === t.inputCoverage.length && a.length === t.lookaheadCoverage.length && u.length === t.backtrackCoverage.length, f = [];
        if (p)
          for (let h = 0; h < t.lookupRecords.length; h++) {
            let b = t.lookupRecords[h].lookupListIndex, y = this.getLookupByIndex(b);
            for (let O = 0; O < y.subtables.length; O++) {
              let k = y.subtables[O], L, D = this.getSubstitutionType(y, k);
              if (D === "71" ? (D = this.getSubstitutionType(k, k.extension), L = this.getLookupMethod(k, k.extension), k = k.extension) : L = this.getLookupMethod(y, k), D === "12")
                for (let w = 0; w < s.length; w++) {
                  let H = e2.get(w), X = L(H);
                  X && f.push(X);
                }
              else
                throw new Error(`Substitution type ${D} is not supported in chaining substitution`);
            }
          }
        return f;
      }
      function bl(e2, t) {
        let n = e2.current, s = rt(n, t.coverage);
        if (s === -1)
          return null;
        let o, r = t.ligatureSets[s];
        for (let i = 0; i < r.length; i++) {
          o = r[i];
          for (let a = 0; a < o.components.length; a++) {
            let c = e2.lookahead[a], l = o.components[a];
            if (c !== l)
              break;
            if (a === o.components.length - 1)
              return o;
          }
        }
        return null;
      }
      function Sl(e2, t) {
        let n = rt(e2, t.coverage);
        return n === -1 ? null : t.sequences[n];
      }
      te.prototype.getDefaultScriptFeaturesIndexes = function() {
        let e2 = this.font.tables.gsub.scripts;
        for (let t = 0; t < e2.length; t++) {
          let n = e2[t];
          if (n.tag === "DFLT")
            return n.script.defaultLangSys.featureIndexes;
        }
        return [];
      };
      te.prototype.getScriptFeaturesIndexes = function(e2) {
        if (!this.font.tables.gsub)
          return [];
        if (!e2)
          return this.getDefaultScriptFeaturesIndexes();
        let n = this.font.tables.gsub.scripts;
        for (let s = 0; s < n.length; s++) {
          let o = n[s];
          if (o.tag === e2 && o.script.defaultLangSys)
            return o.script.defaultLangSys.featureIndexes;
          {
            let r = o.langSysRecords;
            if (r)
              for (let i = 0; i < r.length; i++) {
                let a = r[i];
                if (a.tag === e2)
                  return a.langSys.featureIndexes;
              }
          }
        }
        return this.getDefaultScriptFeaturesIndexes();
      };
      te.prototype.mapTagsToFeatures = function(e2, t) {
        let n = {};
        for (let s = 0; s < e2.length; s++) {
          let o = e2[s].tag, r = e2[s].feature;
          n[o] = r;
        }
        this.features[t].tags = n;
      };
      te.prototype.getScriptFeatures = function(e2) {
        let t = this.features[e2];
        if (Object.prototype.hasOwnProperty.call(this.features, e2))
          return t;
        let n = this.getScriptFeaturesIndexes(e2);
        if (!n)
          return null;
        let s = this.font.tables.gsub;
        return t = n.map((o) => s.features[o]), this.features[e2] = t, this.mapTagsToFeatures(t, e2), t;
      };
      te.prototype.getSubstitutionType = function(e2, t) {
        let n = e2.lookupType.toString(), s = t.substFormat.toString();
        return n + s;
      };
      te.prototype.getLookupMethod = function(e2, t) {
        switch (this.getSubstitutionType(e2, t)) {
          case "11":
            return (s) => gl.apply(this, [s, t]);
          case "12":
            return (s) => yl.apply(this, [s, t]);
          case "63":
            return (s) => xl.apply(this, [s, t]);
          case "41":
            return (s) => bl.apply(this, [s, t]);
          case "21":
            return (s) => Sl.apply(this, [s, t]);
          default:
            throw new Error(`lookupType: ${e2.lookupType} - substFormat: ${t.substFormat} is not yet supported`);
        }
      };
      te.prototype.lookupFeature = function(e2) {
        let t = e2.contextParams, n = t.index, s = this.getFeature({ tag: e2.tag, script: e2.script });
        if (!s)
          return new Error(`font '${(this.font.names.unicode || this.font.names.windows || this.font.names.macintosh).fullName.en}' doesn't support feature '${e2.tag}' for script '${e2.script}'.`);
        let o = this.getFeatureLookups(s), r = [].concat(t.context);
        for (let i = 0; i < o.length; i++) {
          let a = o[i], c = this.getLookupSubtables(a);
          for (let l = 0; l < c.length; l++) {
            let u = c[l], p = this.getSubstitutionType(a, u), f;
            p === "71" ? (p = this.getSubstitutionType(u, u.extension), f = this.getLookupMethod(u, u.extension), u = u.extension) : f = this.getLookupMethod(a, u);
            let h;
            switch (p) {
              case "11":
                h = f(t.current), h && r.splice(n, 1, new Se({ id: 11, tag: e2.tag, substitution: h }));
                break;
              case "12":
                h = f(t.current), h && r.splice(n, 1, new Se({ id: 12, tag: e2.tag, substitution: h }));
                break;
              case "63":
                h = f(t), Array.isArray(h) && h.length && r.splice(n, 1, new Se({ id: 63, tag: e2.tag, substitution: h }));
                break;
              case "41":
                h = f(t), h && r.splice(n, 1, new Se({ id: 41, tag: e2.tag, substitution: h }));
                break;
              case "21":
                h = f(t.current), h && r.splice(n, 1, new Se({ id: 21, tag: e2.tag, substitution: h }));
                break;
            }
            t = new z(r, n), !(Array.isArray(h) && !h.length) && (h = null);
          }
        }
        return r.length ? r : null;
      };
      te.prototype.supports = function(e2) {
        if (!e2.script)
          return false;
        this.getScriptFeatures(e2.script);
        let t = Object.prototype.hasOwnProperty.call(this.features, e2.script);
        if (!e2.tag)
          return t;
        let n = this.features[e2.script].some((s) => s.tag === e2.tag);
        return t && n;
      };
      te.prototype.getLookupSubtables = function(e2) {
        return e2.subtables || null;
      };
      te.prototype.getLookupByIndex = function(e2) {
        return this.font.tables.gsub.lookups[e2] || null;
      };
      te.prototype.getFeatureLookups = function(e2) {
        return e2.lookupListIndexes.map(this.getLookupByIndex.bind(this));
      };
      te.prototype.getFeature = function(t) {
        if (!this.font)
          return { FAIL: "No font was found" };
        Object.prototype.hasOwnProperty.call(this.features, t.script) || this.getScriptFeatures(t.script);
        let n = this.features[t.script];
        return n ? n.tags[t.tag] ? this.features[t.script].tags[t.tag] : null : { FAIL: `No feature for script ${t.script}` };
      };
      var eo = te;
      function vl(e2) {
        let t = e2.current, n = e2.get(-1);
        return n === null && ye(t) || !ye(n) && ye(t);
      }
      function Tl(e2) {
        let t = e2.get(1);
        return t === null || !ye(t);
      }
      var to = { startCheck: vl, endCheck: Tl };
      function kl(e2) {
        let t = e2.current, n = e2.get(-1);
        return (ye(t) || pe(t)) && !ye(n);
      }
      function Fl(e2) {
        let t = e2.get(1);
        switch (true) {
          case t === null:
            return true;
          case (!ye(t) && !pe(t)): {
            let n = Js(t);
            if (!n)
              return true;
            if (n) {
              let s = false;
              if (s = e2.lookahead.some((o) => ye(o) || pe(o)), !s)
                return true;
            }
            break;
          }
          default:
            return false;
        }
      }
      var no = { startCheck: kl, endCheck: Fl };
      function Ul(e2, t, n) {
        t[n].setState(e2.tag, e2.substitution);
      }
      function Ol(e2, t, n) {
        t[n].setState(e2.tag, e2.substitution);
      }
      function Cl(e2, t, n) {
        for (let s = 0; s < e2.substitution.length; s++) {
          let o = e2.substitution[s];
          t[n + s].setState(e2.tag, o);
        }
      }
      function Ll(e2, t, n) {
        let s = t[n];
        s.setState(e2.tag, e2.substitution.ligGlyph);
        let o = e2.substitution.components.length;
        for (let r = 0; r < o; r++)
          s = t[n + r + 1], s.setState("deleted", true);
      }
      var so = { 11: Ul, 12: Ol, 63: Cl, 41: Ll };
      function Rl(e2, t, n) {
        e2 instanceof Se && so[e2.id] && so[e2.id](e2, t, n);
      }
      var se = Rl;
      function El(e2) {
        let t = [].concat(e2.backtrack);
        for (let n = t.length - 1; n >= 0; n--) {
          let s = t[n], o = Sn(s), r = pe(s);
          if (!o && !r)
            return true;
          if (o)
            return false;
        }
        return false;
      }
      function wl(e2) {
        if (Sn(e2.current))
          return false;
        for (let t = 0; t < e2.lookahead.length; t++) {
          let n = e2.lookahead[t];
          if (!pe(n))
            return true;
        }
        return false;
      }
      function Dl(e2) {
        let t = "arab", n = this.featuresTags[t], s = this.tokenizer.getRangeTokens(e2);
        if (s.length === 1)
          return;
        let o = new z(s.map((i) => i.getState("glyphIndex")), 0), r = new z(s.map((i) => i.char), 0);
        for (let i = 0; i < s.length; i++) {
          let a = s[i];
          if (pe(a.char))
            continue;
          o.setCurrentIndex(i), r.setCurrentIndex(i);
          let c = 0;
          El(r) && (c |= 1), wl(r) && (c |= 2);
          let l;
          switch (c) {
            case 1:
              l = "fina";
              break;
            case 2:
              l = "init";
              break;
            case 3:
              l = "medi";
              break;
          }
          if (n.indexOf(l) === -1)
            continue;
          let u = this.query.lookupFeature({ tag: l, script: t, contextParams: o });
          if (u instanceof Error) {
            console.info(u.message);
            continue;
          }
          for (let p = 0; p < u.length; p++) {
            let f = u[p];
            f instanceof Se && (se(f, s, p), o.context[p] = f.substitution);
          }
        }
      }
      var oo = Dl;
      function ro(e2, t) {
        let n = e2.map((s) => s.activeState.value);
        return new z(n, t || 0);
      }
      function Il(e2) {
        let t = "arab", n = this.tokenizer.getRangeTokens(e2), s = ro(n);
        for (let o = 0; o < s.context.length; o++) {
          s.setCurrentIndex(o);
          let r = this.query.lookupFeature({ tag: "rlig", script: t, contextParams: s });
          if (r.length) {
            for (let i = 0; i < r.length; i++) {
              let a = r[i];
              se(a, n, o);
            }
            s = ro(n);
          }
        }
      }
      var io = Il;
      function Al(e2) {
        let t = e2.current, n = e2.get(-1);
        return n === null && ot(t) || !ot(n) && ot(t);
      }
      function Ml(e2) {
        let t = e2.get(1);
        return t === null || !ot(t);
      }
      var ao = { startCheck: Al, endCheck: Ml };
      function lo(e2, t) {
        let n = e2.map((s) => s.activeState.value);
        return new z(n, t || 0);
      }
      function Pl(e2) {
        let t = "latn", n = this.tokenizer.getRangeTokens(e2), s = lo(n);
        for (let o = 0; o < s.context.length; o++) {
          s.setCurrentIndex(o);
          let r = this.query.lookupFeature({ tag: "liga", script: t, contextParams: s });
          if (r.length) {
            for (let i = 0; i < r.length; i++) {
              let a = r[i];
              se(a, n, o);
            }
            s = lo(n);
          }
        }
      }
      var co = Pl;
      function Bl(e2) {
        let t = e2.current, n = e2.get(-1);
        return n === null && st(t) || !st(n) && st(t);
      }
      function Gl(e2) {
        let t = e2.get(1);
        return t === null || !st(t);
      }
      var uo = { startCheck: Bl, endCheck: Gl };
      function po(e2, t) {
        let n = e2.map((s) => s.activeState.value);
        return new z(n, t || 0);
      }
      function Nl(e2) {
        let t = "thai", n = this.tokenizer.getRangeTokens(e2), s = po(n, 0);
        for (let o = 0; o < s.context.length; o++) {
          s.setCurrentIndex(o);
          let r = this.query.lookupFeature({ tag: "ccmp", script: t, contextParams: s });
          if (r.length) {
            for (let i = 0; i < r.length; i++) {
              let a = r[i];
              se(a, n, o);
            }
            s = po(n, o);
          }
        }
      }
      var fo = Nl;
      function ho(e2, t) {
        let n = e2.map((s) => s.activeState.value);
        return new z(n, t || 0);
      }
      function Hl(e2) {
        let t = "thai", n = this.tokenizer.getRangeTokens(e2), s = ho(n, 0);
        for (let o = 0; o < s.context.length; o++) {
          s.setCurrentIndex(o);
          let r = this.query.lookupFeature({ tag: "liga", script: t, contextParams: s });
          if (r.length) {
            for (let i = 0; i < r.length; i++) {
              let a = r[i];
              se(a, n, o);
            }
            s = ho(n, o);
          }
        }
      }
      var mo = Hl;
      function go(e2, t) {
        let n = e2.map((s) => s.activeState.value);
        return new z(n, t || 0);
      }
      function Vl(e2) {
        let t = "thai", n = this.tokenizer.getRangeTokens(e2), s = go(n, 0);
        for (let o = 0; o < s.context.length; o++) {
          s.setCurrentIndex(o);
          let r = this.query.lookupFeature({ tag: "rlig", script: t, contextParams: s });
          if (r.length) {
            for (let i = 0; i < r.length; i++) {
              let a = r[i];
              se(a, n, o);
            }
            s = go(n, o);
          }
        }
      }
      var yo = Vl;
      function Tn(e2) {
        if (e2 === null)
          return false;
        let t = e2.codePointAt(0);
        return t >= 6155 && t <= 6157 || t >= 65024 && t <= 65039 || t >= 917760 && t <= 917999;
      }
      function zl(e2) {
        let t = e2.current, n = e2.get(1);
        return n === null && Tn(t) || Tn(n);
      }
      function _l(e2) {
        let t = e2.get(1);
        return t === null || !Tn(t);
      }
      var xo = { startCheck: zl, endCheck: _l };
      function Wl(e2) {
        let t = this.query.font, n = this.tokenizer.getRangeTokens(e2);
        if (n[1].setState("deleted", true), t.tables.cmap && t.tables.cmap.varSelectorList) {
          let s = n[0].char.codePointAt(0), o = n[1].char.codePointAt(0), r = t.tables.cmap.varSelectorList[o];
          if (r !== void 0 && r.nonDefaultUVS) {
            let i = r.nonDefaultUVS.uvsMappings;
            if (i[s]) {
              let a = i[s].glyphID;
              t.glyphs.glyphs[a] !== void 0 && n[0].setState("glyphIndex", a);
            }
          }
        }
      }
      var bo = Wl;
      function oe(e2) {
        this.baseDir = e2 || "ltr", this.tokenizer = new Qs(), this.featuresTags = {};
      }
      oe.prototype.setText = function(e2) {
        this.text = e2;
      };
      oe.prototype.contextChecks = { latinWordCheck: ao, arabicWordCheck: to, arabicSentenceCheck: no, thaiWordCheck: uo, unicodeVariationSequenceCheck: xo };
      function it(e2) {
        let t = this.contextChecks[`${e2}Check`];
        return this.tokenizer.registerContextChecker(e2, t.startCheck, t.endCheck);
      }
      function jl() {
        return it.call(this, "latinWord"), it.call(this, "arabicWord"), it.call(this, "arabicSentence"), it.call(this, "thaiWord"), it.call(this, "unicodeVariationSequence"), this.tokenizer.tokenize(this.text);
      }
      function ql() {
        let e2 = this.tokenizer.getContextRanges("arabicSentence");
        for (let t = 0; t < e2.length; t++) {
          let n = e2[t], s = this.tokenizer.getRangeTokens(n);
          this.tokenizer.replaceRange(n.startIndex, n.endOffset, s.reverse());
        }
      }
      oe.prototype.registerFeatures = function(e2, t) {
        let n = t.filter((s) => this.query.supports({ script: e2, tag: s }));
        Object.prototype.hasOwnProperty.call(this.featuresTags, e2) ? this.featuresTags[e2] = this.featuresTags[e2].concat(n) : this.featuresTags[e2] = n;
      };
      oe.prototype.applyFeatures = function(e2, t) {
        if (!e2)
          throw new Error("No valid font was provided to apply features");
        this.query || (this.query = new eo(e2));
        for (let n = 0; n < t.length; n++) {
          let s = t[n];
          this.query.supports({ script: s.script }) && this.registerFeatures(s.script, s.tags);
        }
      };
      oe.prototype.registerModifier = function(e2, t, n) {
        this.tokenizer.registerModifier(e2, t, n);
      };
      function _t() {
        if (this.tokenizer.registeredModifiers.indexOf("glyphIndex") === -1)
          throw new Error("glyphIndex modifier is required to apply arabic presentation features.");
      }
      function Xl() {
        let e2 = "arab";
        if (!Object.prototype.hasOwnProperty.call(this.featuresTags, e2))
          return;
        _t.call(this);
        let t = this.tokenizer.getContextRanges("arabicWord");
        for (let n = 0; n < t.length; n++) {
          let s = t[n];
          oo.call(this, s);
        }
      }
      function Yl() {
        if (!this.hasFeatureEnabled("arab", "rlig"))
          return;
        _t.call(this);
        let e2 = this.tokenizer.getContextRanges("arabicWord");
        for (let t = 0; t < e2.length; t++) {
          let n = e2[t];
          io.call(this, n);
        }
      }
      function Zl() {
        if (!this.hasFeatureEnabled("latn", "liga"))
          return;
        _t.call(this);
        let e2 = this.tokenizer.getContextRanges("latinWord");
        for (let t = 0; t < e2.length; t++) {
          let n = e2[t];
          co.call(this, n);
        }
      }
      function $l() {
        let e2 = this.tokenizer.getContextRanges("unicodeVariationSequence");
        for (let t = 0; t < e2.length; t++) {
          let n = e2[t];
          bo.call(this, n);
        }
      }
      function Kl() {
        _t.call(this);
        let e2 = this.tokenizer.getContextRanges("thaiWord");
        for (let t = 0; t < e2.length; t++) {
          let n = e2[t];
          this.hasFeatureEnabled("thai", "liga") && mo.call(this, n), this.hasFeatureEnabled("thai", "rlig") && yo.call(this, n), this.hasFeatureEnabled("thai", "ccmp") && fo.call(this, n);
        }
      }
      oe.prototype.checkContextReady = function(e2) {
        return !!this.tokenizer.getContext(e2);
      };
      oe.prototype.applyFeaturesToContexts = function() {
        this.checkContextReady("arabicWord") && (Xl.call(this), Yl.call(this)), this.checkContextReady("latinWord") && Zl.call(this), this.checkContextReady("arabicSentence") && ql.call(this), this.checkContextReady("thaiWord") && Kl.call(this), this.checkContextReady("unicodeVariationSequence") && $l.call(this);
      };
      oe.prototype.hasFeatureEnabled = function(e2, t) {
        return (this.featuresTags[e2] || []).indexOf(t) !== -1;
      };
      oe.prototype.processText = function(e2) {
        (!this.text || this.text !== e2) && (this.setText(e2), jl.call(this), this.applyFeaturesToContexts());
      };
      oe.prototype.getBidiText = function(e2) {
        return this.processText(e2), this.tokenizer.getText();
      };
      oe.prototype.getTextGlyphs = function(e2) {
        this.processText(e2);
        let t = [];
        for (let n = 0; n < this.tokenizer.tokens.length; n++) {
          let s = this.tokenizer.tokens[n];
          if (s.state.deleted)
            continue;
          let o = s.activeState.value;
          t.push(Array.isArray(o) ? o[0] : o);
        }
        return t;
      };
      var So = oe;
      function kn(e2) {
        return { fontFamily: { en: e2.familyName || " " }, fontSubfamily: { en: e2.styleName || " " }, fullName: { en: e2.fullName || e2.familyName + " " + e2.styleName }, postScriptName: { en: e2.postScriptName || (e2.familyName + e2.styleName).replace(/\s/g, "") }, designer: { en: e2.designer || " " }, designerURL: { en: e2.designerURL || " " }, manufacturer: { en: e2.manufacturer || " " }, manufacturerURL: { en: e2.manufacturerURL || " " }, license: { en: e2.license || " " }, licenseURL: { en: e2.licenseURL || " " }, version: { en: e2.version || "Version 0.1" }, description: { en: e2.description || " " }, copyright: { en: e2.copyright || " " }, trademark: { en: e2.trademark || " " } };
      }
      function A(e2) {
        e2 = e2 || {}, e2.tables = e2.tables || {}, e2.empty || (Ne(e2.familyName, "When creating a new Font object, familyName is required."), Ne(e2.styleName, "When creating a new Font object, styleName is required."), Ne(e2.unitsPerEm, "When creating a new Font object, unitsPerEm is required."), Ne(e2.ascender, "When creating a new Font object, ascender is required."), Ne(e2.descender <= 0, "When creating a new Font object, negative descender value is required."), this.names = {}, this.names.unicode = kn(e2), this.names.macintosh = kn(e2), this.names.windows = kn(e2), this.unitsPerEm = e2.unitsPerEm || 1e3, this.ascender = e2.ascender, this.descender = e2.descender, this.createdTimestamp = e2.createdTimestamp, this.tables = Object.assign(e2.tables, { os2: Object.assign({ usWeightClass: e2.weightClass || this.usWeightClasses.MEDIUM, usWidthClass: e2.widthClass || this.usWidthClasses.MEDIUM, fsSelection: e2.fsSelection || this.fsSelectionValues.REGULAR }, e2.tables.os2) })), this.supported = true, this.glyphs = new J.GlyphSet(this, e2.glyphs || []), this.encoding = new tn(this), this.position = new Fs(this), this.substitution = new Us(this), this.tables = this.tables || {}, this._push = null, this._hmtxTableData = {}, Object.defineProperty(this, "hinting", { get: function() {
          return this._hinting ? this._hinting : this.outlinesFormat === "truetype" ? this._hinting = new Ks(this) : null;
        } });
      }
      A.prototype.hasChar = function(e2) {
        return this.encoding.charToGlyphIndex(e2) !== null;
      };
      A.prototype.charToGlyphIndex = function(e2) {
        return this.encoding.charToGlyphIndex(e2);
      };
      A.prototype.charToGlyph = function(e2) {
        let t = this.charToGlyphIndex(e2), n = this.glyphs.get(t);
        return n || (n = this.glyphs.get(0)), n;
      };
      A.prototype.updateFeatures = function(e2) {
        return this.defaultRenderOptions.features.map((t) => t.script === "latn" ? { script: "latn", tags: t.tags.filter((n) => e2[n]) } : t);
      };
      A.prototype.stringToGlyphIndexes = function(e2, t) {
        let n = new So(), s = (r) => this.charToGlyphIndex(r.char);
        n.registerModifier("glyphIndex", null, s);
        let o = t ? this.updateFeatures(t.features) : this.defaultRenderOptions.features;
        return n.applyFeatures(this, o), n.getTextGlyphs(e2);
      };
      A.prototype.stringToGlyphs = function(e2, t) {
        let n = this.stringToGlyphIndexes(e2, t), s = n.length, o = new Array(s), r = this.glyphs.get(0);
        for (let i = 0; i < s; i += 1)
          o[i] = this.glyphs.get(n[i]) || r;
        return o;
      };
      A.prototype.nameToGlyphIndex = function(e2) {
        return this.glyphNames.nameToGlyphIndex(e2);
      };
      A.prototype.nameToGlyph = function(e2) {
        let t = this.nameToGlyphIndex(e2), n = this.glyphs.get(t);
        return n || (n = this.glyphs.get(0)), n;
      };
      A.prototype.glyphIndexToName = function(e2) {
        return this.glyphNames.glyphIndexToName ? this.glyphNames.glyphIndexToName(e2) : "";
      };
      A.prototype.getKerningValue = function(e2, t) {
        e2 = e2.index || e2, t = t.index || t;
        let n = this.position.defaultKerningTables;
        return n ? this.position.getKerningValue(n, e2, t) : this.kerningPairs[e2 + "," + t] || 0;
      };
      A.prototype.defaultRenderOptions = { kerning: true, features: [{ script: "arab", tags: ["init", "medi", "fina", "rlig"] }, { script: "latn", tags: ["liga", "rlig"] }, { script: "thai", tags: ["liga", "rlig", "ccmp"] }] };
      A.prototype.forEachGlyph = function(e2, t, n, s, o, r) {
        t = t !== void 0 ? t : 0, n = n !== void 0 ? n : 0, s = s !== void 0 ? s : 72, o = Object.assign({}, this.defaultRenderOptions, o);
        let i = 1 / this.unitsPerEm * s, a = this.stringToGlyphs(e2, o), c;
        if (o.kerning) {
          let l = o.script || this.position.getDefaultScriptName();
          c = this.position.getKerningTables(l, o.language);
        }
        for (let l = 0; l < a.length; l += 1) {
          let u = a[l];
          if (r.call(this, u, t, n, s, o), u.advanceWidth && (t += u.advanceWidth * i), o.kerning && l < a.length - 1) {
            let p = c ? this.position.getKerningValue(c, u.index, a[l + 1].index) : this.getKerningValue(u, a[l + 1]);
            t += p * i;
          }
          o.letterSpacing ? t += o.letterSpacing * s : o.tracking && (t += o.tracking / 1e3 * s);
        }
        return t;
      };
      A.prototype.getPath = function(e2, t, n, s, o) {
        let r = new le();
        return this.forEachGlyph(e2, t, n, s, o, function(i, a, c, l) {
          let u = i.getPath(a, c, l, o, this);
          r.extend(u);
        }), r;
      };
      A.prototype.getPaths = function(e2, t, n, s, o) {
        let r = [];
        return this.forEachGlyph(e2, t, n, s, o, function(i, a, c, l) {
          let u = i.getPath(a, c, l, o, this);
          r.push(u);
        }), r;
      };
      A.prototype.getAdvanceWidth = function(e2, t, n) {
        return this.forEachGlyph(e2, 0, 0, t, n, function() {
        });
      };
      A.prototype.draw = function(e2, t, n, s, o, r) {
        this.getPath(t, n, s, o, r).draw(e2);
      };
      A.prototype.drawPoints = function(e2, t, n, s, o, r) {
        this.forEachGlyph(t, n, s, o, r, function(i, a, c, l) {
          i.drawPoints(e2, a, c, l);
        });
      };
      A.prototype.drawMetrics = function(e2, t, n, s, o, r) {
        this.forEachGlyph(t, n, s, o, r, function(i, a, c, l) {
          i.drawMetrics(e2, a, c, l);
        });
      };
      A.prototype.getEnglishName = function(e2) {
        let t = (this.names.unicode || this.names.macintosh || this.names.windows)[e2];
        if (t)
          return t.en;
      };
      A.prototype.validate = function() {
        let e2 = [], t = this;
        function n(o, r) {
          o || e2.push(r);
        }
        function s(o) {
          let r = t.getEnglishName(o);
          n(r && r.trim().length > 0, "No English " + o + " specified.");
        }
        s("fontFamily"), s("weightName"), s("manufacturer"), s("copyright"), s("version"), n(this.unitsPerEm > 0, "No unitsPerEm specified.");
      };
      A.prototype.toTables = function() {
        return Ss.fontToTable(this);
      };
      A.prototype.toBuffer = function() {
        return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."), this.toArrayBuffer();
      };
      A.prototype.toArrayBuffer = function() {
        let t = this.toTables().encode(), n = new ArrayBuffer(t.length), s = new Uint8Array(n);
        for (let o = 0; o < t.length; o++)
          s[o] = t[o];
        return n;
      };
      A.prototype.download = function(e2) {
        let t = this.getEnglishName("fontFamily"), n = this.getEnglishName("fontSubfamily");
        e2 = e2 || t.replace(/\s/g, "") + "-" + n + ".otf";
        let s = this.toArrayBuffer();
        if (hs())
          if (window.URL = window.URL || window.webkitURL, window.URL) {
            let o = new DataView(s), r = new Blob([o], { type: "font/opentype" }), i = document.createElement("a");
            i.href = window.URL.createObjectURL(r), i.download = e2;
            let a = document.createEvent("MouseEvents");
            a.initEvent("click", true, false), i.dispatchEvent(a);
          } else
            console.warn("Font file could not be downloaded. Try using a different browser.");
        else {
          let o = jt("fs"), r = Buffer.alloc(s.byteLength), i = new Uint8Array(s);
          for (let a = 0; a < r.length; ++a)
            r[a] = i[a];
          o.writeFileSync(e2, r);
        }
      };
      A.prototype.fsSelectionValues = { ITALIC: 1, UNDERSCORE: 2, NEGATIVE: 4, OUTLINED: 8, STRIKEOUT: 16, BOLD: 32, REGULAR: 64, USER_TYPO_METRICS: 128, WWS: 256, OBLIQUE: 512 };
      A.prototype.usWidthClasses = { ULTRA_CONDENSED: 1, EXTRA_CONDENSED: 2, CONDENSED: 3, SEMI_CONDENSED: 4, MEDIUM: 5, SEMI_EXPANDED: 6, EXPANDED: 7, EXTRA_EXPANDED: 8, ULTRA_EXPANDED: 9 };
      A.prototype.usWeightClasses = { THIN: 100, EXTRA_LIGHT: 200, LIGHT: 300, NORMAL: 400, MEDIUM: 500, SEMI_BOLD: 600, BOLD: 700, EXTRA_BOLD: 800, BLACK: 900 };
      var Fn = A;
      function Ql() {
        console.warn("Writing of gvar tables is not yet supported.");
      }
      function Jl() {
        console.warn("Parsing of gvar tables is not yet supported.");
      }
      var vo = { make: Ql, parse: Jl };
      var ec = function() {
        return { coverage: this.parsePointer(d.coverage), attachPoints: this.parseList(d.pointer(d.uShortList)) };
      }, tc = function() {
        var e2 = this.parseUShort();
        if (S.argument(e2 === 1 || e2 === 2 || e2 === 3, "Unsupported CaretValue table version."), e2 === 1)
          return { coordinate: this.parseShort() };
        if (e2 === 2)
          return { pointindex: this.parseShort() };
        if (e2 === 3)
          return { coordinate: this.parseShort() };
      }, nc = function() {
        return this.parseList(d.pointer(tc));
      }, sc = function() {
        return { coverage: this.parsePointer(d.coverage), ligGlyphs: this.parseList(d.pointer(nc)) };
      }, oc = function() {
        return this.parseUShort(), this.parseList(d.pointer(d.coverage));
      };
      function rc(e2, t) {
        t = t || 0;
        let n = new d(e2, t), s = n.parseVersion(1);
        S.argument(s === 1 || s === 1.2 || s === 1.3, "Unsupported GDEF table version.");
        var o = { version: s, classDef: n.parsePointer(d.classDef), attachList: n.parsePointer(ec), ligCaretList: n.parsePointer(sc), markAttachClassDef: n.parsePointer(d.classDef) };
        return s >= 1.2 && (o.markGlyphSets = n.parsePointer(oc)), o;
      }
      var To = { parse: rc };
      var fe = new Array(10);
      fe[1] = function() {
        let t = this.offset + this.relativeOffset, n = this.parseUShort();
        if (n === 1)
          return { posFormat: 1, coverage: this.parsePointer(d.coverage), value: this.parseValueRecord() };
        if (n === 2)
          return { posFormat: 2, coverage: this.parsePointer(d.coverage), values: this.parseValueRecordList() };
        S.assert(false, "0x" + t.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.");
      };
      fe[2] = function() {
        let t = this.offset + this.relativeOffset, n = this.parseUShort();
        S.assert(n === 1 || n === 2, "0x" + t.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.");
        let s = this.parsePointer(d.coverage), o = this.parseUShort(), r = this.parseUShort();
        if (n === 1)
          return { posFormat: n, coverage: s, valueFormat1: o, valueFormat2: r, pairSets: this.parseList(d.pointer(d.list(function() {
            return { secondGlyph: this.parseUShort(), value1: this.parseValueRecord(o), value2: this.parseValueRecord(r) };
          }))) };
        if (n === 2) {
          let i = this.parsePointer(d.classDef), a = this.parsePointer(d.classDef), c = this.parseUShort(), l = this.parseUShort();
          return { posFormat: n, coverage: s, valueFormat1: o, valueFormat2: r, classDef1: i, classDef2: a, class1Count: c, class2Count: l, classRecords: this.parseList(c, d.list(l, function() {
            return { value1: this.parseValueRecord(o), value2: this.parseValueRecord(r) };
          })) };
        }
      };
      fe[3] = function() {
        return { error: "GPOS Lookup 3 not supported" };
      };
      fe[4] = function() {
        return { error: "GPOS Lookup 4 not supported" };
      };
      fe[5] = function() {
        return { error: "GPOS Lookup 5 not supported" };
      };
      fe[6] = function() {
        return { error: "GPOS Lookup 6 not supported" };
      };
      fe[7] = function() {
        return { error: "GPOS Lookup 7 not supported" };
      };
      fe[8] = function() {
        return { error: "GPOS Lookup 8 not supported" };
      };
      fe[9] = function() {
        return { error: "GPOS Lookup 9 not supported" };
      };
      function ic(e2, t) {
        t = t || 0;
        let n = new d(e2, t), s = n.parseVersion(1);
        return S.argument(s === 1 || s === 1.1, "Unsupported GPOS table version " + s), s === 1 ? { version: s, scripts: n.parseScriptList(), features: n.parseFeatureList(), lookups: n.parseLookupList(fe) } : { version: s, scripts: n.parseScriptList(), features: n.parseFeatureList(), lookups: n.parseLookupList(fe), variations: n.parseFeatureVariationsList() };
      }
      var ac = new Array(10);
      function lc(e2) {
        return new g.Table("GPOS", [{ name: "version", type: "ULONG", value: 65536 }, { name: "scripts", type: "TABLE", value: new g.ScriptList(e2.scripts) }, { name: "features", type: "TABLE", value: new g.FeatureList(e2.features) }, { name: "lookups", type: "TABLE", value: new g.LookupList(e2.lookups, ac) }]);
      }
      var ko = { parse: ic, make: lc };
      function cc(e2) {
        let t = {};
        e2.skip("uShort");
        let n = e2.parseUShort();
        S.argument(n === 0, "Unsupported kern sub-table version."), e2.skip("uShort", 2);
        let s = e2.parseUShort();
        e2.skip("uShort", 3);
        for (let o = 0; o < s; o += 1) {
          let r = e2.parseUShort(), i = e2.parseUShort(), a = e2.parseShort();
          t[r + "," + i] = a;
        }
        return t;
      }
      function uc(e2) {
        let t = {};
        e2.skip("uShort"), e2.parseULong() > 1 && console.warn("Only the first kern subtable is supported."), e2.skip("uLong");
        let o = e2.parseUShort() & 255;
        if (e2.skip("uShort"), o === 0) {
          let r = e2.parseUShort();
          e2.skip("uShort", 3);
          for (let i = 0; i < r; i += 1) {
            let a = e2.parseUShort(), c = e2.parseUShort(), l = e2.parseShort();
            t[a + "," + c] = l;
          }
        }
        return t;
      }
      function pc(e2, t) {
        let n = new x.Parser(e2, t), s = n.parseUShort();
        if (s === 0)
          return cc(n);
        if (s === 1)
          return uc(n);
        throw new Error("Unsupported kern table version (" + s + ").");
      }
      var Fo = { parse: pc };
      function fc(e2, t, n, s) {
        let o = new x.Parser(e2, t), r = s ? o.parseUShort : o.parseULong, i = [];
        for (let a = 0; a < n + 1; a += 1) {
          let c = r.call(o);
          s && (c *= 2), i.push(c);
        }
        return i;
      }
      var Uo = { parse: fc };
      function hc(e2, t) {
        jt("fs").readFile(e2, function(n, s) {
          if (n)
            return t(n.message);
          t(null, s);
        });
      }
      function dc(e2, t) {
        let n = new XMLHttpRequest();
        n.open("get", e2, true), n.responseType = "arraybuffer", n.onload = function() {
          return n.response ? t(null, n.response) : t("Font could not be loaded: " + n.statusText);
        }, n.onerror = function() {
          t("Font could not be loaded");
        }, n.send();
      }
      function Oo(e2, t) {
        let n = [], s = 12;
        for (let o = 0; o < t; o += 1) {
          let r = x.getTag(e2, s), i = x.getULong(e2, s + 4), a = x.getULong(e2, s + 8), c = x.getULong(e2, s + 12);
          n.push({ tag: r, checksum: i, offset: a, length: c, compression: false }), s += 16;
        }
        return n;
      }
      function mc(e2, t) {
        let n = [], s = 44;
        for (let o = 0; o < t; o += 1) {
          let r = x.getTag(e2, s), i = x.getULong(e2, s + 4), a = x.getULong(e2, s + 8), c = x.getULong(e2, s + 12), l;
          a < c ? l = "WOFF" : l = false, n.push({ tag: r, offset: i, compression: l, compressedLength: a, length: c }), s += 20;
        }
        return n;
      }
      function M(e2, t) {
        if (t.compression === "WOFF") {
          let n = new Uint8Array(e2.buffer, t.offset + 2, t.compressedLength - 2), s = new Uint8Array(t.length);
          if (Mn(n, s), s.byteLength !== t.length)
            throw new Error("Decompression error: " + t.tag + " decompressed length doesn't match recorded length");
          return { data: new DataView(s.buffer, 0), offset: 0 };
        } else
          return { data: e2, offset: t.offset };
      }
      function Un(e2, t = {}) {
        let n, s, o = new Fn({ empty: true });
        e2.constructor !== ArrayBuffer && (e2 = new Uint8Array(e2).buffer);
        let r = new DataView(e2, 0), i, a = [], c = x.getTag(r, 0);
        if (c === String.fromCharCode(0, 1, 0, 0) || c === "true" || c === "typ1")
          o.outlinesFormat = "truetype", i = x.getUShort(r, 4), a = Oo(r, i);
        else if (c === "OTTO")
          o.outlinesFormat = "cff", i = x.getUShort(r, 4), a = Oo(r, i);
        else if (c === "wOFF") {
          let F = x.getTag(r, 4);
          if (F === String.fromCharCode(0, 1, 0, 0))
            o.outlinesFormat = "truetype";
          else if (F === "OTTO")
            o.outlinesFormat = "cff";
          else
            throw new Error("Unsupported OpenType flavor " + c);
          i = x.getUShort(r, 12), a = mc(r, i);
        } else if (c === "wOF2") {
          var l = "https://github.com/opentypejs/opentype.js/issues/183#issuecomment-1147228025";
          throw new Error("WOFF2 require an external decompressor library, see examples at: " + l);
        } else
          throw new Error("Unsupported OpenType signature " + c);
        let u, p, f, h, m, b, y, O, k, L, D, w, H, X, q, E;
        for (let F = 0; F < i; F += 1) {
          let R = a[F], C;
          switch (R.tag) {
            case "avar":
              b = R;
              break;
            case "cmap":
              C = M(r, R), o.tables.cmap = xt.parse(C.data, C.offset), o.encoding = new nn(o.tables.cmap);
              break;
            case "cvt ":
              C = M(r, R), E = new x.Parser(C.data, C.offset), o.tables.cvt = E.parseShortList(R.length / 2);
              break;
            case "fvar":
              f = R;
              break;
            case "STAT":
              h = R;
              break;
            case "gvar":
              m = R;
              break;
            case "fpgm":
              C = M(r, R), E = new x.Parser(C.data, C.offset), o.tables.fpgm = E.parseByteList(R.length);
              break;
            case "head":
              C = M(r, R), o.tables.head = Tt.parse(C.data, C.offset), o.unitsPerEm = o.tables.head.unitsPerEm, n = o.tables.head.indexToLocFormat;
              break;
            case "hhea":
              C = M(r, R), o.tables.hhea = kt.parse(C.data, C.offset), o.ascender = o.tables.hhea.ascender, o.descender = o.tables.hhea.descender, o.numberOfHMetrics = o.tables.hhea.numberOfHMetrics;
              break;
            case "hmtx":
              D = R;
              break;
            case "ltag":
              C = M(r, R), s = Ut.parse(C.data, C.offset);
              break;
            case "COLR":
              C = M(r, R), o.tables.colr = Dt.parse(C.data, C.offset);
              break;
            case "CPAL":
              C = M(r, R), o.tables.cpal = It.parse(C.data, C.offset);
              break;
            case "maxp":
              C = M(r, R), o.tables.maxp = Ot.parse(C.data, C.offset), o.numGlyphs = o.tables.maxp.numGlyphs;
              break;
            case "name":
              X = R;
              break;
            case "OS/2":
              C = M(r, R), o.tables.os2 = $e.parse(C.data, C.offset);
              break;
            case "post":
              C = M(r, R), o.tables.post = Rt.parse(C.data, C.offset), o.glyphNames = new bt(o.tables.post);
              break;
            case "prep":
              C = M(r, R), E = new x.Parser(C.data, C.offset), o.tables.prep = E.parseByteList(R.length);
              break;
            case "glyf":
              y = R;
              break;
            case "loca":
              H = R;
              break;
            case "CFF ":
              u = R;
              break;
            case "CFF2":
              p = R;
              break;
            case "kern":
              w = R;
              break;
            case "GDEF":
              O = R;
              break;
            case "GPOS":
              k = R;
              break;
            case "GSUB":
              L = R;
              break;
            case "meta":
              q = R;
              break;
            case "gasp":
              C = M(r, R), o.tables.gasp = Gt.parse(C.data, C.offset);
              break;
          }
        }
        let I = M(r, X);
        if (o.tables.name = Lt.parse(I.data, I.offset, s), o.names = o.tables.name, y && H) {
          let F = n === 0, R = M(r, H), C = Uo.parse(R.data, R.offset, o.numGlyphs, F), re = M(r, y);
          o.glyphs = Nt.parse(re.data, re.offset, C, o, t);
        } else if (u) {
          let F = M(r, u);
          Ze.parse(F.data, F.offset, o, t);
        } else if (p) {
          let F = M(r, p);
          Ze.parse(F.data, F.offset, o, t);
        } else
          throw new Error("Font doesn't contain TrueType, CFF or CFF2 outlines.");
        let P = M(r, D);
        if (Ft.parse(o, P.data, P.offset, o.numberOfHMetrics, o.numGlyphs, o.glyphs, t), Yn(o, t), w) {
          let F = M(r, w);
          o.kerningPairs = Fo.parse(F.data, F.offset);
        } else
          o.kerningPairs = {};
        if (O) {
          let F = M(r, O);
          o.tables.gdef = To.parse(F.data, F.offset);
        }
        if (k) {
          let F = M(r, k);
          o.tables.gpos = ko.parse(F.data, F.offset), o.position.init();
        }
        if (L) {
          let F = M(r, L);
          o.tables.gsub = Et.parse(F.data, F.offset);
        }
        if (f) {
          let F = M(r, f);
          o.tables.fvar = Mt.parse(F.data, F.offset, o.names);
        }
        if (h) {
          let F = M(r, h);
          o.tables.stat = Pt.parse(F.data, F.offset, o.tables.fvar);
        }
        if (m) {
          f || console.warn("This font provides a gvar table, but no fvar table, which is required for variable fonts."), y || console.warn("This font provides a gvar table, but no glyf table. Glyph variation only works with TrueType outlines.");
          let F = M(r, m);
          o.tables.gvar = vo.parse(F.data, F.offset, o.names);
        }
        if (b) {
          f || console.warn("This font provides an avar table, but no fvar table, which is required for variable fonts.");
          let F = M(r, b);
          o.tables.avar = Bt.parse(F.data, F.offset, o.tables.fvar);
        }
        if (q) {
          let F = M(r, q);
          o.tables.meta = wt.parse(F.data, F.offset), o.metas = o.tables.meta;
        }
        return o;
      }
      function gc(e2, t, n = {}) {
        let o = typeof window == "undefined" && !n.isUrl ? hc : dc;
        return new Promise((r, i) => {
          o(e2, function(a, c) {
            if (a) {
              if (t)
                return t(a);
              i(a);
            }
            let l;
            try {
              l = Un(c, n);
            } catch (u) {
              if (t)
                return t(u, null);
              i(u);
            }
            if (t)
              return t(null, l);
            r(l);
          });
        });
      }
      function yc(e2, t) {
        return Un(jt("fs").readFileSync(e2), t);
      }
      return Do(xc);
    })();
    (function(root, factory) {
      if (typeof define === "function" && define.amd)
        define(factory);
      else if (typeof module2 === "object" && module2.exports)
        module2.exports = factory();
      else
        root.opentype = factory();
    })(typeof self !== "undefined" ? self : exports2, () => ({ ...opentype2, "default": opentype2 }));
  }
});

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/index.js
var zip_exports = {};
__export(zip_exports, {
  BlobReader: () => BlobReader,
  BlobWriter: () => BlobWriter,
  Data64URIReader: () => Data64URIReader,
  Data64URIWriter: () => Data64URIWriter,
  ERR_BAD_FORMAT: () => ERR_BAD_FORMAT,
  ERR_CENTRAL_DIRECTORY_NOT_FOUND: () => ERR_CENTRAL_DIRECTORY_NOT_FOUND,
  ERR_DUPLICATED_NAME: () => ERR_DUPLICATED_NAME,
  ERR_ENCRYPTED: () => ERR_ENCRYPTED,
  ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND: () => ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND,
  ERR_EOCDR_NOT_FOUND: () => ERR_EOCDR_NOT_FOUND,
  ERR_EOCDR_ZIP64_NOT_FOUND: () => ERR_EOCDR_ZIP64_NOT_FOUND,
  ERR_EXTRAFIELD_ZIP64_NOT_FOUND: () => ERR_EXTRAFIELD_ZIP64_NOT_FOUND,
  ERR_HTTP_RANGE: () => ERR_HTTP_RANGE,
  ERR_INVALID_COMMENT: () => ERR_INVALID_COMMENT,
  ERR_INVALID_ENCRYPTION_STRENGTH: () => ERR_INVALID_ENCRYPTION_STRENGTH,
  ERR_INVALID_ENTRY_COMMENT: () => ERR_INVALID_ENTRY_COMMENT,
  ERR_INVALID_ENTRY_NAME: () => ERR_INVALID_ENTRY_NAME,
  ERR_INVALID_EXTRAFIELD_DATA: () => ERR_INVALID_EXTRAFIELD_DATA,
  ERR_INVALID_EXTRAFIELD_TYPE: () => ERR_INVALID_EXTRAFIELD_TYPE,
  ERR_INVALID_PASSWORD: () => ERR_INVALID_PASSWORD,
  ERR_INVALID_SIGNATURE: () => ERR_INVALID_SIGNATURE,
  ERR_INVALID_VERSION: () => ERR_INVALID_VERSION,
  ERR_ITERATOR_COMPLETED_TOO_SOON: () => ERR_ITERATOR_COMPLETED_TOO_SOON,
  ERR_LOCAL_FILE_HEADER_NOT_FOUND: () => ERR_LOCAL_FILE_HEADER_NOT_FOUND,
  ERR_SPLIT_ZIP_FILE: () => ERR_SPLIT_ZIP_FILE,
  ERR_UNSUPPORTED_COMPRESSION: () => ERR_UNSUPPORTED_COMPRESSION,
  ERR_UNSUPPORTED_ENCRYPTION: () => ERR_UNSUPPORTED_ENCRYPTION,
  ERR_UNSUPPORTED_FORMAT: () => ERR_UNSUPPORTED_FORMAT,
  HttpRangeReader: () => HttpRangeReader,
  HttpReader: () => HttpReader,
  Reader: () => Reader,
  SplitDataReader: () => SplitDataReader,
  SplitDataWriter: () => SplitDataWriter,
  SplitZipReader: () => SplitZipReader,
  SplitZipWriter: () => SplitZipWriter,
  TextReader: () => TextReader,
  TextWriter: () => TextWriter,
  Uint8ArrayReader: () => Uint8ArrayReader,
  Uint8ArrayWriter: () => Uint8ArrayWriter,
  Writer: () => Writer,
  ZipReader: () => ZipReader,
  ZipWriter: () => ZipWriter,
  configure: () => configure,
  fs: () => fs,
  getMimeType: () => getMimeType2,
  initShimAsyncCodec: () => initShimAsyncCodec,
  terminateWorkers: () => terminateWorkers
});

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/streams/codecs/deflate.js
var MAX_BITS = 15;
var D_CODES = 30;
var BL_CODES = 19;
var LENGTH_CODES = 29;
var LITERALS = 256;
var L_CODES = LITERALS + 1 + LENGTH_CODES;
var HEAP_SIZE = 2 * L_CODES + 1;
var END_BLOCK = 256;
var MAX_BL_BITS = 7;
var REP_3_6 = 16;
var REPZ_3_10 = 17;
var REPZ_11_138 = 18;
var Buf_size = 8 * 2;
var Z_DEFAULT_COMPRESSION = -1;
var Z_FILTERED = 1;
var Z_HUFFMAN_ONLY = 2;
var Z_DEFAULT_STRATEGY = 0;
var Z_NO_FLUSH = 0;
var Z_PARTIAL_FLUSH = 1;
var Z_FULL_FLUSH = 3;
var Z_FINISH = 4;
var Z_OK = 0;
var Z_STREAM_END = 1;
var Z_NEED_DICT = 2;
var Z_STREAM_ERROR = -2;
var Z_DATA_ERROR = -3;
var Z_BUF_ERROR = -5;
function extractArray(array) {
  return flatArray(array.map(([length, value]) => new Array(length).fill(value, 0, length)));
}
function flatArray(array) {
  return array.reduce((a, b) => a.concat(Array.isArray(b) ? flatArray(b) : b), []);
}
var _dist_code = [0, 1, 2, 3].concat(...extractArray([
  [2, 4],
  [2, 5],
  [4, 6],
  [4, 7],
  [8, 8],
  [8, 9],
  [16, 10],
  [16, 11],
  [32, 12],
  [32, 13],
  [64, 14],
  [64, 15],
  [2, 0],
  [1, 16],
  [1, 17],
  [2, 18],
  [2, 19],
  [4, 20],
  [4, 21],
  [8, 22],
  [8, 23],
  [16, 24],
  [16, 25],
  [32, 26],
  [32, 27],
  [64, 28],
  [64, 29]
]));
function Tree() {
  const that = this;
  function gen_bitlen(s) {
    const tree = that.dyn_tree;
    const stree = that.stat_desc.static_tree;
    const extra = that.stat_desc.extra_bits;
    const base = that.stat_desc.extra_base;
    const max_length = that.stat_desc.max_length;
    let h;
    let n, m;
    let bits;
    let xbits;
    let f;
    let overflow = 0;
    for (bits = 0; bits <= MAX_BITS; bits++)
      s.bl_count[bits] = 0;
    tree[s.heap[s.heap_max] * 2 + 1] = 0;
    for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
      n = s.heap[h];
      bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
      if (bits > max_length) {
        bits = max_length;
        overflow++;
      }
      tree[n * 2 + 1] = bits;
      if (n > that.max_code)
        continue;
      s.bl_count[bits]++;
      xbits = 0;
      if (n >= base)
        xbits = extra[n - base];
      f = tree[n * 2];
      s.opt_len += f * (bits + xbits);
      if (stree)
        s.static_len += f * (stree[n * 2 + 1] + xbits);
    }
    if (overflow === 0)
      return;
    do {
      bits = max_length - 1;
      while (s.bl_count[bits] === 0)
        bits--;
      s.bl_count[bits]--;
      s.bl_count[bits + 1] += 2;
      s.bl_count[max_length]--;
      overflow -= 2;
    } while (overflow > 0);
    for (bits = max_length; bits !== 0; bits--) {
      n = s.bl_count[bits];
      while (n !== 0) {
        m = s.heap[--h];
        if (m > that.max_code)
          continue;
        if (tree[m * 2 + 1] != bits) {
          s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
          tree[m * 2 + 1] = bits;
        }
        n--;
      }
    }
  }
  function bi_reverse(code, len) {
    let res = 0;
    do {
      res |= code & 1;
      code >>>= 1;
      res <<= 1;
    } while (--len > 0);
    return res >>> 1;
  }
  function gen_codes(tree, max_code, bl_count) {
    const next_code = [];
    let code = 0;
    let bits;
    let n;
    let len;
    for (bits = 1; bits <= MAX_BITS; bits++) {
      next_code[bits] = code = code + bl_count[bits - 1] << 1;
    }
    for (n = 0; n <= max_code; n++) {
      len = tree[n * 2 + 1];
      if (len === 0)
        continue;
      tree[n * 2] = bi_reverse(next_code[len]++, len);
    }
  }
  that.build_tree = function(s) {
    const tree = that.dyn_tree;
    const stree = that.stat_desc.static_tree;
    const elems = that.stat_desc.elems;
    let n, m;
    let max_code = -1;
    let node;
    s.heap_len = 0;
    s.heap_max = HEAP_SIZE;
    for (n = 0; n < elems; n++) {
      if (tree[n * 2] !== 0) {
        s.heap[++s.heap_len] = max_code = n;
        s.depth[n] = 0;
      } else {
        tree[n * 2 + 1] = 0;
      }
    }
    while (s.heap_len < 2) {
      node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
      tree[node * 2] = 1;
      s.depth[node] = 0;
      s.opt_len--;
      if (stree)
        s.static_len -= stree[node * 2 + 1];
    }
    that.max_code = max_code;
    for (n = Math.floor(s.heap_len / 2); n >= 1; n--)
      s.pqdownheap(tree, n);
    node = elems;
    do {
      n = s.heap[1];
      s.heap[1] = s.heap[s.heap_len--];
      s.pqdownheap(tree, 1);
      m = s.heap[1];
      s.heap[--s.heap_max] = n;
      s.heap[--s.heap_max] = m;
      tree[node * 2] = tree[n * 2] + tree[m * 2];
      s.depth[node] = Math.max(s.depth[n], s.depth[m]) + 1;
      tree[n * 2 + 1] = tree[m * 2 + 1] = node;
      s.heap[1] = node++;
      s.pqdownheap(tree, 1);
    } while (s.heap_len >= 2);
    s.heap[--s.heap_max] = s.heap[1];
    gen_bitlen(s);
    gen_codes(tree, that.max_code, s.bl_count);
  };
}
Tree._length_code = [0, 1, 2, 3, 4, 5, 6, 7].concat(...extractArray([
  [2, 8],
  [2, 9],
  [2, 10],
  [2, 11],
  [4, 12],
  [4, 13],
  [4, 14],
  [4, 15],
  [8, 16],
  [8, 17],
  [8, 18],
  [8, 19],
  [16, 20],
  [16, 21],
  [16, 22],
  [16, 23],
  [32, 24],
  [32, 25],
  [32, 26],
  [31, 27],
  [1, 28]
]));
Tree.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0];
Tree.base_dist = [
  0,
  1,
  2,
  3,
  4,
  6,
  8,
  12,
  16,
  24,
  32,
  48,
  64,
  96,
  128,
  192,
  256,
  384,
  512,
  768,
  1024,
  1536,
  2048,
  3072,
  4096,
  6144,
  8192,
  12288,
  16384,
  24576
];
Tree.d_code = function(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};
Tree.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
Tree.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
Tree.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
Tree.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
function StaticTree(static_tree, extra_bits, extra_base, elems, max_length) {
  const that = this;
  that.static_tree = static_tree;
  that.extra_bits = extra_bits;
  that.extra_base = extra_base;
  that.elems = elems;
  that.max_length = max_length;
}
var static_ltree2_first_part = [
  12,
  140,
  76,
  204,
  44,
  172,
  108,
  236,
  28,
  156,
  92,
  220,
  60,
  188,
  124,
  252,
  2,
  130,
  66,
  194,
  34,
  162,
  98,
  226,
  18,
  146,
  82,
  210,
  50,
  178,
  114,
  242,
  10,
  138,
  74,
  202,
  42,
  170,
  106,
  234,
  26,
  154,
  90,
  218,
  58,
  186,
  122,
  250,
  6,
  134,
  70,
  198,
  38,
  166,
  102,
  230,
  22,
  150,
  86,
  214,
  54,
  182,
  118,
  246,
  14,
  142,
  78,
  206,
  46,
  174,
  110,
  238,
  30,
  158,
  94,
  222,
  62,
  190,
  126,
  254,
  1,
  129,
  65,
  193,
  33,
  161,
  97,
  225,
  17,
  145,
  81,
  209,
  49,
  177,
  113,
  241,
  9,
  137,
  73,
  201,
  41,
  169,
  105,
  233,
  25,
  153,
  89,
  217,
  57,
  185,
  121,
  249,
  5,
  133,
  69,
  197,
  37,
  165,
  101,
  229,
  21,
  149,
  85,
  213,
  53,
  181,
  117,
  245,
  13,
  141,
  77,
  205,
  45,
  173,
  109,
  237,
  29,
  157,
  93,
  221,
  61,
  189,
  125,
  253,
  19,
  275,
  147,
  403,
  83,
  339,
  211,
  467,
  51,
  307,
  179,
  435,
  115,
  371,
  243,
  499,
  11,
  267,
  139,
  395,
  75,
  331,
  203,
  459,
  43,
  299,
  171,
  427,
  107,
  363,
  235,
  491,
  27,
  283,
  155,
  411,
  91,
  347,
  219,
  475,
  59,
  315,
  187,
  443,
  123,
  379,
  251,
  507,
  7,
  263,
  135,
  391,
  71,
  327,
  199,
  455,
  39,
  295,
  167,
  423,
  103,
  359,
  231,
  487,
  23,
  279,
  151,
  407,
  87,
  343,
  215,
  471,
  55,
  311,
  183,
  439,
  119,
  375,
  247,
  503,
  15,
  271,
  143,
  399,
  79,
  335,
  207,
  463,
  47,
  303,
  175,
  431,
  111,
  367,
  239,
  495,
  31,
  287,
  159,
  415,
  95,
  351,
  223,
  479,
  63,
  319,
  191,
  447,
  127,
  383,
  255,
  511,
  0,
  64,
  32,
  96,
  16,
  80,
  48,
  112,
  8,
  72,
  40,
  104,
  24,
  88,
  56,
  120,
  4,
  68,
  36,
  100,
  20,
  84,
  52,
  116,
  3,
  131,
  67,
  195,
  35,
  163,
  99,
  227
];
var static_ltree2_second_part = extractArray([[144, 8], [112, 9], [24, 7], [8, 8]]);
StaticTree.static_ltree = flatArray(static_ltree2_first_part.map((value, index) => [value, static_ltree2_second_part[index]]));
var static_dtree_first_part = [0, 16, 8, 24, 4, 20, 12, 28, 2, 18, 10, 26, 6, 22, 14, 30, 1, 17, 9, 25, 5, 21, 13, 29, 3, 19, 11, 27, 7, 23];
var static_dtree_second_part = extractArray([[30, 5]]);
StaticTree.static_dtree = flatArray(static_dtree_first_part.map((value, index) => [value, static_dtree_second_part[index]]));
StaticTree.static_l_desc = new StaticTree(StaticTree.static_ltree, Tree.extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
StaticTree.static_d_desc = new StaticTree(StaticTree.static_dtree, Tree.extra_dbits, 0, D_CODES, MAX_BITS);
StaticTree.static_bl_desc = new StaticTree(null, Tree.extra_blbits, 0, BL_CODES, MAX_BL_BITS);
var MAX_MEM_LEVEL = 9;
var DEF_MEM_LEVEL = 8;
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  const that = this;
  that.good_length = good_length;
  that.max_lazy = max_lazy;
  that.nice_length = nice_length;
  that.max_chain = max_chain;
  that.func = func;
}
var STORED = 0;
var FAST = 1;
var SLOW = 2;
var config_table = [
  new Config(0, 0, 0, 0, STORED),
  new Config(4, 4, 8, 4, FAST),
  new Config(4, 5, 16, 8, FAST),
  new Config(4, 6, 32, 32, FAST),
  new Config(4, 4, 16, 16, SLOW),
  new Config(8, 16, 32, 32, SLOW),
  new Config(8, 16, 128, 128, SLOW),
  new Config(8, 32, 128, 256, SLOW),
  new Config(32, 128, 258, 1024, SLOW),
  new Config(32, 258, 258, 4096, SLOW)
];
var z_errmsg = [
  "need dictionary",
  // Z_NEED_DICT
  // 2
  "stream end",
  // Z_STREAM_END 1
  "",
  // Z_OK 0
  "",
  // Z_ERRNO (-1)
  "stream error",
  // Z_STREAM_ERROR (-2)
  "data error",
  // Z_DATA_ERROR (-3)
  "",
  // Z_MEM_ERROR (-4)
  "buffer error",
  // Z_BUF_ERROR (-5)
  "",
  // Z_VERSION_ERROR (-6)
  ""
];
var NeedMore = 0;
var BlockDone = 1;
var FinishStarted = 2;
var FinishDone = 3;
var PRESET_DICT = 32;
var INIT_STATE = 42;
var BUSY_STATE = 113;
var FINISH_STATE = 666;
var Z_DEFLATED = 8;
var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES = 2;
var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
function smaller(tree, n, m, depth) {
  const tn2 = tree[n * 2];
  const tm2 = tree[m * 2];
  return tn2 < tm2 || tn2 == tm2 && depth[n] <= depth[m];
}
function Deflate() {
  const that = this;
  let strm;
  let status;
  let pending_buf_size;
  let last_flush;
  let w_size;
  let w_bits;
  let w_mask;
  let win;
  let window_size;
  let prev;
  let head;
  let ins_h;
  let hash_size;
  let hash_bits;
  let hash_mask;
  let hash_shift;
  let block_start;
  let match_length;
  let prev_match;
  let match_available;
  let strstart;
  let match_start;
  let lookahead;
  let prev_length;
  let max_chain_length;
  let max_lazy_match;
  let level;
  let strategy;
  let good_match;
  let nice_match;
  let dyn_ltree;
  let dyn_dtree;
  let bl_tree;
  const l_desc = new Tree();
  const d_desc = new Tree();
  const bl_desc = new Tree();
  that.depth = [];
  let lit_bufsize;
  let last_lit;
  let matches;
  let last_eob_len;
  let bi_buf;
  let bi_valid;
  that.bl_count = [];
  that.heap = [];
  dyn_ltree = [];
  dyn_dtree = [];
  bl_tree = [];
  function lm_init() {
    window_size = 2 * w_size;
    head[hash_size - 1] = 0;
    for (let i = 0; i < hash_size - 1; i++) {
      head[i] = 0;
    }
    max_lazy_match = config_table[level].max_lazy;
    good_match = config_table[level].good_length;
    nice_match = config_table[level].nice_length;
    max_chain_length = config_table[level].max_chain;
    strstart = 0;
    block_start = 0;
    lookahead = 0;
    match_length = prev_length = MIN_MATCH - 1;
    match_available = 0;
    ins_h = 0;
  }
  function init_block() {
    let i;
    for (i = 0; i < L_CODES; i++)
      dyn_ltree[i * 2] = 0;
    for (i = 0; i < D_CODES; i++)
      dyn_dtree[i * 2] = 0;
    for (i = 0; i < BL_CODES; i++)
      bl_tree[i * 2] = 0;
    dyn_ltree[END_BLOCK * 2] = 1;
    that.opt_len = that.static_len = 0;
    last_lit = matches = 0;
  }
  function tr_init() {
    l_desc.dyn_tree = dyn_ltree;
    l_desc.stat_desc = StaticTree.static_l_desc;
    d_desc.dyn_tree = dyn_dtree;
    d_desc.stat_desc = StaticTree.static_d_desc;
    bl_desc.dyn_tree = bl_tree;
    bl_desc.stat_desc = StaticTree.static_bl_desc;
    bi_buf = 0;
    bi_valid = 0;
    last_eob_len = 8;
    init_block();
  }
  that.pqdownheap = function(tree, k) {
    const heap = that.heap;
    const v = heap[k];
    let j = k << 1;
    while (j <= that.heap_len) {
      if (j < that.heap_len && smaller(tree, heap[j + 1], heap[j], that.depth)) {
        j++;
      }
      if (smaller(tree, v, heap[j], that.depth))
        break;
      heap[k] = heap[j];
      k = j;
      j <<= 1;
    }
    heap[k] = v;
  };
  function scan_tree(tree, max_code) {
    let prevlen = -1;
    let curlen;
    let nextlen = tree[0 * 2 + 1];
    let count = 0;
    let max_count = 7;
    let min_count = 4;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }
    tree[(max_code + 1) * 2 + 1] = 65535;
    for (let n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1];
      if (++count < max_count && curlen == nextlen) {
        continue;
      } else if (count < min_count) {
        bl_tree[curlen * 2] += count;
      } else if (curlen !== 0) {
        if (curlen != prevlen)
          bl_tree[curlen * 2]++;
        bl_tree[REP_3_6 * 2]++;
      } else if (count <= 10) {
        bl_tree[REPZ_3_10 * 2]++;
      } else {
        bl_tree[REPZ_11_138 * 2]++;
      }
      count = 0;
      prevlen = curlen;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen == nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  }
  function build_bl_tree() {
    let max_blindex;
    scan_tree(dyn_ltree, l_desc.max_code);
    scan_tree(dyn_dtree, d_desc.max_code);
    bl_desc.build_tree(that);
    for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
      if (bl_tree[Tree.bl_order[max_blindex] * 2 + 1] !== 0)
        break;
    }
    that.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    return max_blindex;
  }
  function put_byte(p) {
    that.pending_buf[that.pending++] = p;
  }
  function put_short(w) {
    put_byte(w & 255);
    put_byte(w >>> 8 & 255);
  }
  function putShortMSB(b) {
    put_byte(b >> 8 & 255);
    put_byte(b & 255 & 255);
  }
  function send_bits(value, length) {
    let val;
    const len = length;
    if (bi_valid > Buf_size - len) {
      val = value;
      bi_buf |= val << bi_valid & 65535;
      put_short(bi_buf);
      bi_buf = val >>> Buf_size - bi_valid;
      bi_valid += len - Buf_size;
    } else {
      bi_buf |= value << bi_valid & 65535;
      bi_valid += len;
    }
  }
  function send_code(c, tree) {
    const c2 = c * 2;
    send_bits(tree[c2] & 65535, tree[c2 + 1] & 65535);
  }
  function send_tree(tree, max_code) {
    let n;
    let prevlen = -1;
    let curlen;
    let nextlen = tree[0 * 2 + 1];
    let count = 0;
    let max_count = 7;
    let min_count = 4;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }
    for (n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1];
      if (++count < max_count && curlen == nextlen) {
        continue;
      } else if (count < min_count) {
        do {
          send_code(curlen, bl_tree);
        } while (--count !== 0);
      } else if (curlen !== 0) {
        if (curlen != prevlen) {
          send_code(curlen, bl_tree);
          count--;
        }
        send_code(REP_3_6, bl_tree);
        send_bits(count - 3, 2);
      } else if (count <= 10) {
        send_code(REPZ_3_10, bl_tree);
        send_bits(count - 3, 3);
      } else {
        send_code(REPZ_11_138, bl_tree);
        send_bits(count - 11, 7);
      }
      count = 0;
      prevlen = curlen;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen == nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  }
  function send_all_trees(lcodes, dcodes, blcodes) {
    let rank;
    send_bits(lcodes - 257, 5);
    send_bits(dcodes - 1, 5);
    send_bits(blcodes - 4, 4);
    for (rank = 0; rank < blcodes; rank++) {
      send_bits(bl_tree[Tree.bl_order[rank] * 2 + 1], 3);
    }
    send_tree(dyn_ltree, lcodes - 1);
    send_tree(dyn_dtree, dcodes - 1);
  }
  function bi_flush() {
    if (bi_valid == 16) {
      put_short(bi_buf);
      bi_buf = 0;
      bi_valid = 0;
    } else if (bi_valid >= 8) {
      put_byte(bi_buf & 255);
      bi_buf >>>= 8;
      bi_valid -= 8;
    }
  }
  function _tr_align() {
    send_bits(STATIC_TREES << 1, 3);
    send_code(END_BLOCK, StaticTree.static_ltree);
    bi_flush();
    if (1 + last_eob_len + 10 - bi_valid < 9) {
      send_bits(STATIC_TREES << 1, 3);
      send_code(END_BLOCK, StaticTree.static_ltree);
      bi_flush();
    }
    last_eob_len = 7;
  }
  function _tr_tally(dist, lc) {
    let out_length, in_length, dcode;
    that.dist_buf[last_lit] = dist;
    that.lc_buf[last_lit] = lc & 255;
    last_lit++;
    if (dist === 0) {
      dyn_ltree[lc * 2]++;
    } else {
      matches++;
      dist--;
      dyn_ltree[(Tree._length_code[lc] + LITERALS + 1) * 2]++;
      dyn_dtree[Tree.d_code(dist) * 2]++;
    }
    if ((last_lit & 8191) === 0 && level > 2) {
      out_length = last_lit * 8;
      in_length = strstart - block_start;
      for (dcode = 0; dcode < D_CODES; dcode++) {
        out_length += dyn_dtree[dcode * 2] * (5 + Tree.extra_dbits[dcode]);
      }
      out_length >>>= 3;
      if (matches < Math.floor(last_lit / 2) && out_length < Math.floor(in_length / 2))
        return true;
    }
    return last_lit == lit_bufsize - 1;
  }
  function compress_block(ltree, dtree) {
    let dist;
    let lc;
    let lx = 0;
    let code;
    let extra;
    if (last_lit !== 0) {
      do {
        dist = that.dist_buf[lx];
        lc = that.lc_buf[lx];
        lx++;
        if (dist === 0) {
          send_code(lc, ltree);
        } else {
          code = Tree._length_code[lc];
          send_code(code + LITERALS + 1, ltree);
          extra = Tree.extra_lbits[code];
          if (extra !== 0) {
            lc -= Tree.base_length[code];
            send_bits(lc, extra);
          }
          dist--;
          code = Tree.d_code(dist);
          send_code(code, dtree);
          extra = Tree.extra_dbits[code];
          if (extra !== 0) {
            dist -= Tree.base_dist[code];
            send_bits(dist, extra);
          }
        }
      } while (lx < last_lit);
    }
    send_code(END_BLOCK, ltree);
    last_eob_len = ltree[END_BLOCK * 2 + 1];
  }
  function bi_windup() {
    if (bi_valid > 8) {
      put_short(bi_buf);
    } else if (bi_valid > 0) {
      put_byte(bi_buf & 255);
    }
    bi_buf = 0;
    bi_valid = 0;
  }
  function copy_block(buf, len, header) {
    bi_windup();
    last_eob_len = 8;
    if (header) {
      put_short(len);
      put_short(~len);
    }
    that.pending_buf.set(win.subarray(buf, buf + len), that.pending);
    that.pending += len;
  }
  function _tr_stored_block(buf, stored_len, eof) {
    send_bits((STORED_BLOCK << 1) + (eof ? 1 : 0), 3);
    copy_block(buf, stored_len, true);
  }
  function _tr_flush_block(buf, stored_len, eof) {
    let opt_lenb, static_lenb;
    let max_blindex = 0;
    if (level > 0) {
      l_desc.build_tree(that);
      d_desc.build_tree(that);
      max_blindex = build_bl_tree();
      opt_lenb = that.opt_len + 3 + 7 >>> 3;
      static_lenb = that.static_len + 3 + 7 >>> 3;
      if (static_lenb <= opt_lenb)
        opt_lenb = static_lenb;
    } else {
      opt_lenb = static_lenb = stored_len + 5;
    }
    if (stored_len + 4 <= opt_lenb && buf != -1) {
      _tr_stored_block(buf, stored_len, eof);
    } else if (static_lenb == opt_lenb) {
      send_bits((STATIC_TREES << 1) + (eof ? 1 : 0), 3);
      compress_block(StaticTree.static_ltree, StaticTree.static_dtree);
    } else {
      send_bits((DYN_TREES << 1) + (eof ? 1 : 0), 3);
      send_all_trees(l_desc.max_code + 1, d_desc.max_code + 1, max_blindex + 1);
      compress_block(dyn_ltree, dyn_dtree);
    }
    init_block();
    if (eof) {
      bi_windup();
    }
  }
  function flush_block_only(eof) {
    _tr_flush_block(block_start >= 0 ? block_start : -1, strstart - block_start, eof);
    block_start = strstart;
    strm.flush_pending();
  }
  function fill_window() {
    let n, m;
    let p;
    let more;
    do {
      more = window_size - lookahead - strstart;
      if (more === 0 && strstart === 0 && lookahead === 0) {
        more = w_size;
      } else if (more == -1) {
        more--;
      } else if (strstart >= w_size + w_size - MIN_LOOKAHEAD) {
        win.set(win.subarray(w_size, w_size + w_size), 0);
        match_start -= w_size;
        strstart -= w_size;
        block_start -= w_size;
        n = hash_size;
        p = n;
        do {
          m = head[--p] & 65535;
          head[p] = m >= w_size ? m - w_size : 0;
        } while (--n !== 0);
        n = w_size;
        p = n;
        do {
          m = prev[--p] & 65535;
          prev[p] = m >= w_size ? m - w_size : 0;
        } while (--n !== 0);
        more += w_size;
      }
      if (strm.avail_in === 0)
        return;
      n = strm.read_buf(win, strstart + lookahead, more);
      lookahead += n;
      if (lookahead >= MIN_MATCH) {
        ins_h = win[strstart] & 255;
        ins_h = (ins_h << hash_shift ^ win[strstart + 1] & 255) & hash_mask;
      }
    } while (lookahead < MIN_LOOKAHEAD && strm.avail_in !== 0);
  }
  function deflate_stored(flush) {
    let max_block_size = 65535;
    let max_start;
    if (max_block_size > pending_buf_size - 5) {
      max_block_size = pending_buf_size - 5;
    }
    while (true) {
      if (lookahead <= 1) {
        fill_window();
        if (lookahead === 0 && flush == Z_NO_FLUSH)
          return NeedMore;
        if (lookahead === 0)
          break;
      }
      strstart += lookahead;
      lookahead = 0;
      max_start = block_start + max_block_size;
      if (strstart === 0 || strstart >= max_start) {
        lookahead = strstart - max_start;
        strstart = max_start;
        flush_block_only(false);
        if (strm.avail_out === 0)
          return NeedMore;
      }
      if (strstart - block_start >= w_size - MIN_LOOKAHEAD) {
        flush_block_only(false);
        if (strm.avail_out === 0)
          return NeedMore;
      }
    }
    flush_block_only(flush == Z_FINISH);
    if (strm.avail_out === 0)
      return flush == Z_FINISH ? FinishStarted : NeedMore;
    return flush == Z_FINISH ? FinishDone : BlockDone;
  }
  function longest_match(cur_match) {
    let chain_length = max_chain_length;
    let scan = strstart;
    let match;
    let len;
    let best_len = prev_length;
    const limit = strstart > w_size - MIN_LOOKAHEAD ? strstart - (w_size - MIN_LOOKAHEAD) : 0;
    let _nice_match = nice_match;
    const wmask = w_mask;
    const strend = strstart + MAX_MATCH;
    let scan_end1 = win[scan + best_len - 1];
    let scan_end = win[scan + best_len];
    if (prev_length >= good_match) {
      chain_length >>= 2;
    }
    if (_nice_match > lookahead)
      _nice_match = lookahead;
    do {
      match = cur_match;
      if (win[match + best_len] != scan_end || win[match + best_len - 1] != scan_end1 || win[match] != win[scan] || win[++match] != win[scan + 1])
        continue;
      scan += 2;
      match++;
      do {
      } while (win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && scan < strend);
      len = MAX_MATCH - (strend - scan);
      scan = strend - MAX_MATCH;
      if (len > best_len) {
        match_start = cur_match;
        best_len = len;
        if (len >= _nice_match)
          break;
        scan_end1 = win[scan + best_len - 1];
        scan_end = win[scan + best_len];
      }
    } while ((cur_match = prev[cur_match & wmask] & 65535) > limit && --chain_length !== 0);
    if (best_len <= lookahead)
      return best_len;
    return lookahead;
  }
  function deflate_fast(flush) {
    let hash_head = 0;
    let bflush;
    while (true) {
      if (lookahead < MIN_LOOKAHEAD) {
        fill_window();
        if (lookahead < MIN_LOOKAHEAD && flush == Z_NO_FLUSH) {
          return NeedMore;
        }
        if (lookahead === 0)
          break;
      }
      if (lookahead >= MIN_MATCH) {
        ins_h = (ins_h << hash_shift ^ win[strstart + (MIN_MATCH - 1)] & 255) & hash_mask;
        hash_head = head[ins_h] & 65535;
        prev[strstart & w_mask] = head[ins_h];
        head[ins_h] = strstart;
      }
      if (hash_head !== 0 && (strstart - hash_head & 65535) <= w_size - MIN_LOOKAHEAD) {
        if (strategy != Z_HUFFMAN_ONLY) {
          match_length = longest_match(hash_head);
        }
      }
      if (match_length >= MIN_MATCH) {
        bflush = _tr_tally(strstart - match_start, match_length - MIN_MATCH);
        lookahead -= match_length;
        if (match_length <= max_lazy_match && lookahead >= MIN_MATCH) {
          match_length--;
          do {
            strstart++;
            ins_h = (ins_h << hash_shift ^ win[strstart + (MIN_MATCH - 1)] & 255) & hash_mask;
            hash_head = head[ins_h] & 65535;
            prev[strstart & w_mask] = head[ins_h];
            head[ins_h] = strstart;
          } while (--match_length !== 0);
          strstart++;
        } else {
          strstart += match_length;
          match_length = 0;
          ins_h = win[strstart] & 255;
          ins_h = (ins_h << hash_shift ^ win[strstart + 1] & 255) & hash_mask;
        }
      } else {
        bflush = _tr_tally(0, win[strstart] & 255);
        lookahead--;
        strstart++;
      }
      if (bflush) {
        flush_block_only(false);
        if (strm.avail_out === 0)
          return NeedMore;
      }
    }
    flush_block_only(flush == Z_FINISH);
    if (strm.avail_out === 0) {
      if (flush == Z_FINISH)
        return FinishStarted;
      else
        return NeedMore;
    }
    return flush == Z_FINISH ? FinishDone : BlockDone;
  }
  function deflate_slow(flush) {
    let hash_head = 0;
    let bflush;
    let max_insert;
    while (true) {
      if (lookahead < MIN_LOOKAHEAD) {
        fill_window();
        if (lookahead < MIN_LOOKAHEAD && flush == Z_NO_FLUSH) {
          return NeedMore;
        }
        if (lookahead === 0)
          break;
      }
      if (lookahead >= MIN_MATCH) {
        ins_h = (ins_h << hash_shift ^ win[strstart + (MIN_MATCH - 1)] & 255) & hash_mask;
        hash_head = head[ins_h] & 65535;
        prev[strstart & w_mask] = head[ins_h];
        head[ins_h] = strstart;
      }
      prev_length = match_length;
      prev_match = match_start;
      match_length = MIN_MATCH - 1;
      if (hash_head !== 0 && prev_length < max_lazy_match && (strstart - hash_head & 65535) <= w_size - MIN_LOOKAHEAD) {
        if (strategy != Z_HUFFMAN_ONLY) {
          match_length = longest_match(hash_head);
        }
        if (match_length <= 5 && (strategy == Z_FILTERED || match_length == MIN_MATCH && strstart - match_start > 4096)) {
          match_length = MIN_MATCH - 1;
        }
      }
      if (prev_length >= MIN_MATCH && match_length <= prev_length) {
        max_insert = strstart + lookahead - MIN_MATCH;
        bflush = _tr_tally(strstart - 1 - prev_match, prev_length - MIN_MATCH);
        lookahead -= prev_length - 1;
        prev_length -= 2;
        do {
          if (++strstart <= max_insert) {
            ins_h = (ins_h << hash_shift ^ win[strstart + (MIN_MATCH - 1)] & 255) & hash_mask;
            hash_head = head[ins_h] & 65535;
            prev[strstart & w_mask] = head[ins_h];
            head[ins_h] = strstart;
          }
        } while (--prev_length !== 0);
        match_available = 0;
        match_length = MIN_MATCH - 1;
        strstart++;
        if (bflush) {
          flush_block_only(false);
          if (strm.avail_out === 0)
            return NeedMore;
        }
      } else if (match_available !== 0) {
        bflush = _tr_tally(0, win[strstart - 1] & 255);
        if (bflush) {
          flush_block_only(false);
        }
        strstart++;
        lookahead--;
        if (strm.avail_out === 0)
          return NeedMore;
      } else {
        match_available = 1;
        strstart++;
        lookahead--;
      }
    }
    if (match_available !== 0) {
      bflush = _tr_tally(0, win[strstart - 1] & 255);
      match_available = 0;
    }
    flush_block_only(flush == Z_FINISH);
    if (strm.avail_out === 0) {
      if (flush == Z_FINISH)
        return FinishStarted;
      else
        return NeedMore;
    }
    return flush == Z_FINISH ? FinishDone : BlockDone;
  }
  function deflateReset(strm2) {
    strm2.total_in = strm2.total_out = 0;
    strm2.msg = null;
    that.pending = 0;
    that.pending_out = 0;
    status = BUSY_STATE;
    last_flush = Z_NO_FLUSH;
    tr_init();
    lm_init();
    return Z_OK;
  }
  that.deflateInit = function(strm2, _level, bits, _method, memLevel, _strategy) {
    if (!_method)
      _method = Z_DEFLATED;
    if (!memLevel)
      memLevel = DEF_MEM_LEVEL;
    if (!_strategy)
      _strategy = Z_DEFAULT_STRATEGY;
    strm2.msg = null;
    if (_level == Z_DEFAULT_COMPRESSION)
      _level = 6;
    if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || _method != Z_DEFLATED || bits < 9 || bits > 15 || _level < 0 || _level > 9 || _strategy < 0 || _strategy > Z_HUFFMAN_ONLY) {
      return Z_STREAM_ERROR;
    }
    strm2.dstate = that;
    w_bits = bits;
    w_size = 1 << w_bits;
    w_mask = w_size - 1;
    hash_bits = memLevel + 7;
    hash_size = 1 << hash_bits;
    hash_mask = hash_size - 1;
    hash_shift = Math.floor((hash_bits + MIN_MATCH - 1) / MIN_MATCH);
    win = new Uint8Array(w_size * 2);
    prev = [];
    head = [];
    lit_bufsize = 1 << memLevel + 6;
    that.pending_buf = new Uint8Array(lit_bufsize * 4);
    pending_buf_size = lit_bufsize * 4;
    that.dist_buf = new Uint16Array(lit_bufsize);
    that.lc_buf = new Uint8Array(lit_bufsize);
    level = _level;
    strategy = _strategy;
    return deflateReset(strm2);
  };
  that.deflateEnd = function() {
    if (status != INIT_STATE && status != BUSY_STATE && status != FINISH_STATE) {
      return Z_STREAM_ERROR;
    }
    that.lc_buf = null;
    that.dist_buf = null;
    that.pending_buf = null;
    head = null;
    prev = null;
    win = null;
    that.dstate = null;
    return status == BUSY_STATE ? Z_DATA_ERROR : Z_OK;
  };
  that.deflateParams = function(strm2, _level, _strategy) {
    let err = Z_OK;
    if (_level == Z_DEFAULT_COMPRESSION) {
      _level = 6;
    }
    if (_level < 0 || _level > 9 || _strategy < 0 || _strategy > Z_HUFFMAN_ONLY) {
      return Z_STREAM_ERROR;
    }
    if (config_table[level].func != config_table[_level].func && strm2.total_in !== 0) {
      err = strm2.deflate(Z_PARTIAL_FLUSH);
    }
    if (level != _level) {
      level = _level;
      max_lazy_match = config_table[level].max_lazy;
      good_match = config_table[level].good_length;
      nice_match = config_table[level].nice_length;
      max_chain_length = config_table[level].max_chain;
    }
    strategy = _strategy;
    return err;
  };
  that.deflateSetDictionary = function(_strm, dictionary, dictLength) {
    let length = dictLength;
    let n, index = 0;
    if (!dictionary || status != INIT_STATE)
      return Z_STREAM_ERROR;
    if (length < MIN_MATCH)
      return Z_OK;
    if (length > w_size - MIN_LOOKAHEAD) {
      length = w_size - MIN_LOOKAHEAD;
      index = dictLength - length;
    }
    win.set(dictionary.subarray(index, index + length), 0);
    strstart = length;
    block_start = length;
    ins_h = win[0] & 255;
    ins_h = (ins_h << hash_shift ^ win[1] & 255) & hash_mask;
    for (n = 0; n <= length - MIN_MATCH; n++) {
      ins_h = (ins_h << hash_shift ^ win[n + (MIN_MATCH - 1)] & 255) & hash_mask;
      prev[n & w_mask] = head[ins_h];
      head[ins_h] = n;
    }
    return Z_OK;
  };
  that.deflate = function(_strm, flush) {
    let i, header, level_flags, old_flush, bstate;
    if (flush > Z_FINISH || flush < 0) {
      return Z_STREAM_ERROR;
    }
    if (!_strm.next_out || !_strm.next_in && _strm.avail_in !== 0 || status == FINISH_STATE && flush != Z_FINISH) {
      _strm.msg = z_errmsg[Z_NEED_DICT - Z_STREAM_ERROR];
      return Z_STREAM_ERROR;
    }
    if (_strm.avail_out === 0) {
      _strm.msg = z_errmsg[Z_NEED_DICT - Z_BUF_ERROR];
      return Z_BUF_ERROR;
    }
    strm = _strm;
    old_flush = last_flush;
    last_flush = flush;
    if (status == INIT_STATE) {
      header = Z_DEFLATED + (w_bits - 8 << 4) << 8;
      level_flags = (level - 1 & 255) >> 1;
      if (level_flags > 3)
        level_flags = 3;
      header |= level_flags << 6;
      if (strstart !== 0)
        header |= PRESET_DICT;
      header += 31 - header % 31;
      status = BUSY_STATE;
      putShortMSB(header);
    }
    if (that.pending !== 0) {
      strm.flush_pending();
      if (strm.avail_out === 0) {
        last_flush = -1;
        return Z_OK;
      }
    } else if (strm.avail_in === 0 && flush <= old_flush && flush != Z_FINISH) {
      strm.msg = z_errmsg[Z_NEED_DICT - Z_BUF_ERROR];
      return Z_BUF_ERROR;
    }
    if (status == FINISH_STATE && strm.avail_in !== 0) {
      _strm.msg = z_errmsg[Z_NEED_DICT - Z_BUF_ERROR];
      return Z_BUF_ERROR;
    }
    if (strm.avail_in !== 0 || lookahead !== 0 || flush != Z_NO_FLUSH && status != FINISH_STATE) {
      bstate = -1;
      switch (config_table[level].func) {
        case STORED:
          bstate = deflate_stored(flush);
          break;
        case FAST:
          bstate = deflate_fast(flush);
          break;
        case SLOW:
          bstate = deflate_slow(flush);
          break;
        default:
      }
      if (bstate == FinishStarted || bstate == FinishDone) {
        status = FINISH_STATE;
      }
      if (bstate == NeedMore || bstate == FinishStarted) {
        if (strm.avail_out === 0) {
          last_flush = -1;
        }
        return Z_OK;
      }
      if (bstate == BlockDone) {
        if (flush == Z_PARTIAL_FLUSH) {
          _tr_align();
        } else {
          _tr_stored_block(0, 0, false);
          if (flush == Z_FULL_FLUSH) {
            for (i = 0; i < hash_size; i++)
              head[i] = 0;
          }
        }
        strm.flush_pending();
        if (strm.avail_out === 0) {
          last_flush = -1;
          return Z_OK;
        }
      }
    }
    if (flush != Z_FINISH)
      return Z_OK;
    return Z_STREAM_END;
  };
}
function ZStream() {
  const that = this;
  that.next_in_index = 0;
  that.next_out_index = 0;
  that.avail_in = 0;
  that.total_in = 0;
  that.avail_out = 0;
  that.total_out = 0;
}
ZStream.prototype = {
  deflateInit(level, bits) {
    const that = this;
    that.dstate = new Deflate();
    if (!bits)
      bits = MAX_BITS;
    return that.dstate.deflateInit(that, level, bits);
  },
  deflate(flush) {
    const that = this;
    if (!that.dstate) {
      return Z_STREAM_ERROR;
    }
    return that.dstate.deflate(that, flush);
  },
  deflateEnd() {
    const that = this;
    if (!that.dstate)
      return Z_STREAM_ERROR;
    const ret = that.dstate.deflateEnd();
    that.dstate = null;
    return ret;
  },
  deflateParams(level, strategy) {
    const that = this;
    if (!that.dstate)
      return Z_STREAM_ERROR;
    return that.dstate.deflateParams(that, level, strategy);
  },
  deflateSetDictionary(dictionary, dictLength) {
    const that = this;
    if (!that.dstate)
      return Z_STREAM_ERROR;
    return that.dstate.deflateSetDictionary(that, dictionary, dictLength);
  },
  // Read a new buffer from the current input stream, update the
  // total number of bytes read. All deflate() input goes through
  // this function so some applications may wish to modify it to avoid
  // allocating a large strm->next_in buffer and copying from it.
  // (See also flush_pending()).
  read_buf(buf, start, size) {
    const that = this;
    let len = that.avail_in;
    if (len > size)
      len = size;
    if (len === 0)
      return 0;
    that.avail_in -= len;
    buf.set(that.next_in.subarray(that.next_in_index, that.next_in_index + len), start);
    that.next_in_index += len;
    that.total_in += len;
    return len;
  },
  // Flush as much pending output as possible. All deflate() output goes
  // through this function so some applications may wish to modify it
  // to avoid allocating a large strm->next_out buffer and copying into it.
  // (See also read_buf()).
  flush_pending() {
    const that = this;
    let len = that.dstate.pending;
    if (len > that.avail_out)
      len = that.avail_out;
    if (len === 0)
      return;
    that.next_out.set(that.dstate.pending_buf.subarray(that.dstate.pending_out, that.dstate.pending_out + len), that.next_out_index);
    that.next_out_index += len;
    that.dstate.pending_out += len;
    that.total_out += len;
    that.avail_out -= len;
    that.dstate.pending -= len;
    if (that.dstate.pending === 0) {
      that.dstate.pending_out = 0;
    }
  }
};
function ZipDeflate(options) {
  const that = this;
  const z = new ZStream();
  const bufsize = getMaximumCompressedSize(options && options.chunkSize ? options.chunkSize : 64 * 1024);
  const flush = Z_NO_FLUSH;
  const buf = new Uint8Array(bufsize);
  let level = options ? options.level : Z_DEFAULT_COMPRESSION;
  if (typeof level == "undefined")
    level = Z_DEFAULT_COMPRESSION;
  z.deflateInit(level);
  z.next_out = buf;
  that.append = function(data, onprogress) {
    let err, array, lastIndex = 0, bufferIndex = 0, bufferSize = 0;
    const buffers = [];
    if (!data.length)
      return;
    z.next_in_index = 0;
    z.next_in = data;
    z.avail_in = data.length;
    do {
      z.next_out_index = 0;
      z.avail_out = bufsize;
      err = z.deflate(flush);
      if (err != Z_OK)
        throw new Error("deflating: " + z.msg);
      if (z.next_out_index)
        if (z.next_out_index == bufsize)
          buffers.push(new Uint8Array(buf));
        else
          buffers.push(buf.subarray(0, z.next_out_index));
      bufferSize += z.next_out_index;
      if (onprogress && z.next_in_index > 0 && z.next_in_index != lastIndex) {
        onprogress(z.next_in_index);
        lastIndex = z.next_in_index;
      }
    } while (z.avail_in > 0 || z.avail_out === 0);
    if (buffers.length > 1) {
      array = new Uint8Array(bufferSize);
      buffers.forEach(function(chunk) {
        array.set(chunk, bufferIndex);
        bufferIndex += chunk.length;
      });
    } else {
      array = buffers[0] ? new Uint8Array(buffers[0]) : new Uint8Array();
    }
    return array;
  };
  that.flush = function() {
    let err, array, bufferIndex = 0, bufferSize = 0;
    const buffers = [];
    do {
      z.next_out_index = 0;
      z.avail_out = bufsize;
      err = z.deflate(Z_FINISH);
      if (err != Z_STREAM_END && err != Z_OK)
        throw new Error("deflating: " + z.msg);
      if (bufsize - z.avail_out > 0)
        buffers.push(buf.slice(0, z.next_out_index));
      bufferSize += z.next_out_index;
    } while (z.avail_in > 0 || z.avail_out === 0);
    z.deflateEnd();
    array = new Uint8Array(bufferSize);
    buffers.forEach(function(chunk) {
      array.set(chunk, bufferIndex);
      bufferIndex += chunk.length;
    });
    return array;
  };
}
function getMaximumCompressedSize(uncompressedSize) {
  return uncompressedSize + 5 * (Math.floor(uncompressedSize / 16383) + 1);
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/streams/codecs/inflate.js
var MAX_BITS2 = 15;
var Z_OK2 = 0;
var Z_STREAM_END2 = 1;
var Z_NEED_DICT2 = 2;
var Z_STREAM_ERROR2 = -2;
var Z_DATA_ERROR2 = -3;
var Z_MEM_ERROR = -4;
var Z_BUF_ERROR2 = -5;
var inflate_mask = [
  0,
  1,
  3,
  7,
  15,
  31,
  63,
  127,
  255,
  511,
  1023,
  2047,
  4095,
  8191,
  16383,
  32767,
  65535
];
var MANY = 1440;
var Z_NO_FLUSH2 = 0;
var Z_FINISH2 = 4;
var fixed_bl = 9;
var fixed_bd = 5;
var fixed_tl = [
  96,
  7,
  256,
  0,
  8,
  80,
  0,
  8,
  16,
  84,
  8,
  115,
  82,
  7,
  31,
  0,
  8,
  112,
  0,
  8,
  48,
  0,
  9,
  192,
  80,
  7,
  10,
  0,
  8,
  96,
  0,
  8,
  32,
  0,
  9,
  160,
  0,
  8,
  0,
  0,
  8,
  128,
  0,
  8,
  64,
  0,
  9,
  224,
  80,
  7,
  6,
  0,
  8,
  88,
  0,
  8,
  24,
  0,
  9,
  144,
  83,
  7,
  59,
  0,
  8,
  120,
  0,
  8,
  56,
  0,
  9,
  208,
  81,
  7,
  17,
  0,
  8,
  104,
  0,
  8,
  40,
  0,
  9,
  176,
  0,
  8,
  8,
  0,
  8,
  136,
  0,
  8,
  72,
  0,
  9,
  240,
  80,
  7,
  4,
  0,
  8,
  84,
  0,
  8,
  20,
  85,
  8,
  227,
  83,
  7,
  43,
  0,
  8,
  116,
  0,
  8,
  52,
  0,
  9,
  200,
  81,
  7,
  13,
  0,
  8,
  100,
  0,
  8,
  36,
  0,
  9,
  168,
  0,
  8,
  4,
  0,
  8,
  132,
  0,
  8,
  68,
  0,
  9,
  232,
  80,
  7,
  8,
  0,
  8,
  92,
  0,
  8,
  28,
  0,
  9,
  152,
  84,
  7,
  83,
  0,
  8,
  124,
  0,
  8,
  60,
  0,
  9,
  216,
  82,
  7,
  23,
  0,
  8,
  108,
  0,
  8,
  44,
  0,
  9,
  184,
  0,
  8,
  12,
  0,
  8,
  140,
  0,
  8,
  76,
  0,
  9,
  248,
  80,
  7,
  3,
  0,
  8,
  82,
  0,
  8,
  18,
  85,
  8,
  163,
  83,
  7,
  35,
  0,
  8,
  114,
  0,
  8,
  50,
  0,
  9,
  196,
  81,
  7,
  11,
  0,
  8,
  98,
  0,
  8,
  34,
  0,
  9,
  164,
  0,
  8,
  2,
  0,
  8,
  130,
  0,
  8,
  66,
  0,
  9,
  228,
  80,
  7,
  7,
  0,
  8,
  90,
  0,
  8,
  26,
  0,
  9,
  148,
  84,
  7,
  67,
  0,
  8,
  122,
  0,
  8,
  58,
  0,
  9,
  212,
  82,
  7,
  19,
  0,
  8,
  106,
  0,
  8,
  42,
  0,
  9,
  180,
  0,
  8,
  10,
  0,
  8,
  138,
  0,
  8,
  74,
  0,
  9,
  244,
  80,
  7,
  5,
  0,
  8,
  86,
  0,
  8,
  22,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  118,
  0,
  8,
  54,
  0,
  9,
  204,
  81,
  7,
  15,
  0,
  8,
  102,
  0,
  8,
  38,
  0,
  9,
  172,
  0,
  8,
  6,
  0,
  8,
  134,
  0,
  8,
  70,
  0,
  9,
  236,
  80,
  7,
  9,
  0,
  8,
  94,
  0,
  8,
  30,
  0,
  9,
  156,
  84,
  7,
  99,
  0,
  8,
  126,
  0,
  8,
  62,
  0,
  9,
  220,
  82,
  7,
  27,
  0,
  8,
  110,
  0,
  8,
  46,
  0,
  9,
  188,
  0,
  8,
  14,
  0,
  8,
  142,
  0,
  8,
  78,
  0,
  9,
  252,
  96,
  7,
  256,
  0,
  8,
  81,
  0,
  8,
  17,
  85,
  8,
  131,
  82,
  7,
  31,
  0,
  8,
  113,
  0,
  8,
  49,
  0,
  9,
  194,
  80,
  7,
  10,
  0,
  8,
  97,
  0,
  8,
  33,
  0,
  9,
  162,
  0,
  8,
  1,
  0,
  8,
  129,
  0,
  8,
  65,
  0,
  9,
  226,
  80,
  7,
  6,
  0,
  8,
  89,
  0,
  8,
  25,
  0,
  9,
  146,
  83,
  7,
  59,
  0,
  8,
  121,
  0,
  8,
  57,
  0,
  9,
  210,
  81,
  7,
  17,
  0,
  8,
  105,
  0,
  8,
  41,
  0,
  9,
  178,
  0,
  8,
  9,
  0,
  8,
  137,
  0,
  8,
  73,
  0,
  9,
  242,
  80,
  7,
  4,
  0,
  8,
  85,
  0,
  8,
  21,
  80,
  8,
  258,
  83,
  7,
  43,
  0,
  8,
  117,
  0,
  8,
  53,
  0,
  9,
  202,
  81,
  7,
  13,
  0,
  8,
  101,
  0,
  8,
  37,
  0,
  9,
  170,
  0,
  8,
  5,
  0,
  8,
  133,
  0,
  8,
  69,
  0,
  9,
  234,
  80,
  7,
  8,
  0,
  8,
  93,
  0,
  8,
  29,
  0,
  9,
  154,
  84,
  7,
  83,
  0,
  8,
  125,
  0,
  8,
  61,
  0,
  9,
  218,
  82,
  7,
  23,
  0,
  8,
  109,
  0,
  8,
  45,
  0,
  9,
  186,
  0,
  8,
  13,
  0,
  8,
  141,
  0,
  8,
  77,
  0,
  9,
  250,
  80,
  7,
  3,
  0,
  8,
  83,
  0,
  8,
  19,
  85,
  8,
  195,
  83,
  7,
  35,
  0,
  8,
  115,
  0,
  8,
  51,
  0,
  9,
  198,
  81,
  7,
  11,
  0,
  8,
  99,
  0,
  8,
  35,
  0,
  9,
  166,
  0,
  8,
  3,
  0,
  8,
  131,
  0,
  8,
  67,
  0,
  9,
  230,
  80,
  7,
  7,
  0,
  8,
  91,
  0,
  8,
  27,
  0,
  9,
  150,
  84,
  7,
  67,
  0,
  8,
  123,
  0,
  8,
  59,
  0,
  9,
  214,
  82,
  7,
  19,
  0,
  8,
  107,
  0,
  8,
  43,
  0,
  9,
  182,
  0,
  8,
  11,
  0,
  8,
  139,
  0,
  8,
  75,
  0,
  9,
  246,
  80,
  7,
  5,
  0,
  8,
  87,
  0,
  8,
  23,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  119,
  0,
  8,
  55,
  0,
  9,
  206,
  81,
  7,
  15,
  0,
  8,
  103,
  0,
  8,
  39,
  0,
  9,
  174,
  0,
  8,
  7,
  0,
  8,
  135,
  0,
  8,
  71,
  0,
  9,
  238,
  80,
  7,
  9,
  0,
  8,
  95,
  0,
  8,
  31,
  0,
  9,
  158,
  84,
  7,
  99,
  0,
  8,
  127,
  0,
  8,
  63,
  0,
  9,
  222,
  82,
  7,
  27,
  0,
  8,
  111,
  0,
  8,
  47,
  0,
  9,
  190,
  0,
  8,
  15,
  0,
  8,
  143,
  0,
  8,
  79,
  0,
  9,
  254,
  96,
  7,
  256,
  0,
  8,
  80,
  0,
  8,
  16,
  84,
  8,
  115,
  82,
  7,
  31,
  0,
  8,
  112,
  0,
  8,
  48,
  0,
  9,
  193,
  80,
  7,
  10,
  0,
  8,
  96,
  0,
  8,
  32,
  0,
  9,
  161,
  0,
  8,
  0,
  0,
  8,
  128,
  0,
  8,
  64,
  0,
  9,
  225,
  80,
  7,
  6,
  0,
  8,
  88,
  0,
  8,
  24,
  0,
  9,
  145,
  83,
  7,
  59,
  0,
  8,
  120,
  0,
  8,
  56,
  0,
  9,
  209,
  81,
  7,
  17,
  0,
  8,
  104,
  0,
  8,
  40,
  0,
  9,
  177,
  0,
  8,
  8,
  0,
  8,
  136,
  0,
  8,
  72,
  0,
  9,
  241,
  80,
  7,
  4,
  0,
  8,
  84,
  0,
  8,
  20,
  85,
  8,
  227,
  83,
  7,
  43,
  0,
  8,
  116,
  0,
  8,
  52,
  0,
  9,
  201,
  81,
  7,
  13,
  0,
  8,
  100,
  0,
  8,
  36,
  0,
  9,
  169,
  0,
  8,
  4,
  0,
  8,
  132,
  0,
  8,
  68,
  0,
  9,
  233,
  80,
  7,
  8,
  0,
  8,
  92,
  0,
  8,
  28,
  0,
  9,
  153,
  84,
  7,
  83,
  0,
  8,
  124,
  0,
  8,
  60,
  0,
  9,
  217,
  82,
  7,
  23,
  0,
  8,
  108,
  0,
  8,
  44,
  0,
  9,
  185,
  0,
  8,
  12,
  0,
  8,
  140,
  0,
  8,
  76,
  0,
  9,
  249,
  80,
  7,
  3,
  0,
  8,
  82,
  0,
  8,
  18,
  85,
  8,
  163,
  83,
  7,
  35,
  0,
  8,
  114,
  0,
  8,
  50,
  0,
  9,
  197,
  81,
  7,
  11,
  0,
  8,
  98,
  0,
  8,
  34,
  0,
  9,
  165,
  0,
  8,
  2,
  0,
  8,
  130,
  0,
  8,
  66,
  0,
  9,
  229,
  80,
  7,
  7,
  0,
  8,
  90,
  0,
  8,
  26,
  0,
  9,
  149,
  84,
  7,
  67,
  0,
  8,
  122,
  0,
  8,
  58,
  0,
  9,
  213,
  82,
  7,
  19,
  0,
  8,
  106,
  0,
  8,
  42,
  0,
  9,
  181,
  0,
  8,
  10,
  0,
  8,
  138,
  0,
  8,
  74,
  0,
  9,
  245,
  80,
  7,
  5,
  0,
  8,
  86,
  0,
  8,
  22,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  118,
  0,
  8,
  54,
  0,
  9,
  205,
  81,
  7,
  15,
  0,
  8,
  102,
  0,
  8,
  38,
  0,
  9,
  173,
  0,
  8,
  6,
  0,
  8,
  134,
  0,
  8,
  70,
  0,
  9,
  237,
  80,
  7,
  9,
  0,
  8,
  94,
  0,
  8,
  30,
  0,
  9,
  157,
  84,
  7,
  99,
  0,
  8,
  126,
  0,
  8,
  62,
  0,
  9,
  221,
  82,
  7,
  27,
  0,
  8,
  110,
  0,
  8,
  46,
  0,
  9,
  189,
  0,
  8,
  14,
  0,
  8,
  142,
  0,
  8,
  78,
  0,
  9,
  253,
  96,
  7,
  256,
  0,
  8,
  81,
  0,
  8,
  17,
  85,
  8,
  131,
  82,
  7,
  31,
  0,
  8,
  113,
  0,
  8,
  49,
  0,
  9,
  195,
  80,
  7,
  10,
  0,
  8,
  97,
  0,
  8,
  33,
  0,
  9,
  163,
  0,
  8,
  1,
  0,
  8,
  129,
  0,
  8,
  65,
  0,
  9,
  227,
  80,
  7,
  6,
  0,
  8,
  89,
  0,
  8,
  25,
  0,
  9,
  147,
  83,
  7,
  59,
  0,
  8,
  121,
  0,
  8,
  57,
  0,
  9,
  211,
  81,
  7,
  17,
  0,
  8,
  105,
  0,
  8,
  41,
  0,
  9,
  179,
  0,
  8,
  9,
  0,
  8,
  137,
  0,
  8,
  73,
  0,
  9,
  243,
  80,
  7,
  4,
  0,
  8,
  85,
  0,
  8,
  21,
  80,
  8,
  258,
  83,
  7,
  43,
  0,
  8,
  117,
  0,
  8,
  53,
  0,
  9,
  203,
  81,
  7,
  13,
  0,
  8,
  101,
  0,
  8,
  37,
  0,
  9,
  171,
  0,
  8,
  5,
  0,
  8,
  133,
  0,
  8,
  69,
  0,
  9,
  235,
  80,
  7,
  8,
  0,
  8,
  93,
  0,
  8,
  29,
  0,
  9,
  155,
  84,
  7,
  83,
  0,
  8,
  125,
  0,
  8,
  61,
  0,
  9,
  219,
  82,
  7,
  23,
  0,
  8,
  109,
  0,
  8,
  45,
  0,
  9,
  187,
  0,
  8,
  13,
  0,
  8,
  141,
  0,
  8,
  77,
  0,
  9,
  251,
  80,
  7,
  3,
  0,
  8,
  83,
  0,
  8,
  19,
  85,
  8,
  195,
  83,
  7,
  35,
  0,
  8,
  115,
  0,
  8,
  51,
  0,
  9,
  199,
  81,
  7,
  11,
  0,
  8,
  99,
  0,
  8,
  35,
  0,
  9,
  167,
  0,
  8,
  3,
  0,
  8,
  131,
  0,
  8,
  67,
  0,
  9,
  231,
  80,
  7,
  7,
  0,
  8,
  91,
  0,
  8,
  27,
  0,
  9,
  151,
  84,
  7,
  67,
  0,
  8,
  123,
  0,
  8,
  59,
  0,
  9,
  215,
  82,
  7,
  19,
  0,
  8,
  107,
  0,
  8,
  43,
  0,
  9,
  183,
  0,
  8,
  11,
  0,
  8,
  139,
  0,
  8,
  75,
  0,
  9,
  247,
  80,
  7,
  5,
  0,
  8,
  87,
  0,
  8,
  23,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  119,
  0,
  8,
  55,
  0,
  9,
  207,
  81,
  7,
  15,
  0,
  8,
  103,
  0,
  8,
  39,
  0,
  9,
  175,
  0,
  8,
  7,
  0,
  8,
  135,
  0,
  8,
  71,
  0,
  9,
  239,
  80,
  7,
  9,
  0,
  8,
  95,
  0,
  8,
  31,
  0,
  9,
  159,
  84,
  7,
  99,
  0,
  8,
  127,
  0,
  8,
  63,
  0,
  9,
  223,
  82,
  7,
  27,
  0,
  8,
  111,
  0,
  8,
  47,
  0,
  9,
  191,
  0,
  8,
  15,
  0,
  8,
  143,
  0,
  8,
  79,
  0,
  9,
  255
];
var fixed_td = [
  80,
  5,
  1,
  87,
  5,
  257,
  83,
  5,
  17,
  91,
  5,
  4097,
  81,
  5,
  5,
  89,
  5,
  1025,
  85,
  5,
  65,
  93,
  5,
  16385,
  80,
  5,
  3,
  88,
  5,
  513,
  84,
  5,
  33,
  92,
  5,
  8193,
  82,
  5,
  9,
  90,
  5,
  2049,
  86,
  5,
  129,
  192,
  5,
  24577,
  80,
  5,
  2,
  87,
  5,
  385,
  83,
  5,
  25,
  91,
  5,
  6145,
  81,
  5,
  7,
  89,
  5,
  1537,
  85,
  5,
  97,
  93,
  5,
  24577,
  80,
  5,
  4,
  88,
  5,
  769,
  84,
  5,
  49,
  92,
  5,
  12289,
  82,
  5,
  13,
  90,
  5,
  3073,
  86,
  5,
  193,
  192,
  5,
  24577
];
var cplens = [
  // Copy lengths for literal codes 257..285
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
];
var cplext = [
  // Extra bits for literal codes 257..285
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  112,
  112
  // 112==invalid
];
var cpdist = [
  // Copy offsets for distance codes 0..29
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577
];
var cpdext = [
  // Extra bits for distance codes
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13
];
var BMAX = 15;
function InfTree() {
  const that = this;
  let hn;
  let v;
  let c;
  let r;
  let u;
  let x;
  function huft_build(b, bindex, n, s, d, e2, t, m, hp, hn2, v2) {
    let a;
    let f;
    let g;
    let h;
    let i;
    let j;
    let k;
    let l;
    let mask;
    let p;
    let q;
    let w;
    let xp;
    let y;
    let z;
    p = 0;
    i = n;
    do {
      c[b[bindex + p]]++;
      p++;
      i--;
    } while (i !== 0);
    if (c[0] == n) {
      t[0] = -1;
      m[0] = 0;
      return Z_OK2;
    }
    l = m[0];
    for (j = 1; j <= BMAX; j++)
      if (c[j] !== 0)
        break;
    k = j;
    if (l < j) {
      l = j;
    }
    for (i = BMAX; i !== 0; i--) {
      if (c[i] !== 0)
        break;
    }
    g = i;
    if (l > i) {
      l = i;
    }
    m[0] = l;
    for (y = 1 << j; j < i; j++, y <<= 1) {
      if ((y -= c[j]) < 0) {
        return Z_DATA_ERROR2;
      }
    }
    if ((y -= c[i]) < 0) {
      return Z_DATA_ERROR2;
    }
    c[i] += y;
    x[1] = j = 0;
    p = 1;
    xp = 2;
    while (--i !== 0) {
      x[xp] = j += c[p];
      xp++;
      p++;
    }
    i = 0;
    p = 0;
    do {
      if ((j = b[bindex + p]) !== 0) {
        v2[x[j]++] = i;
      }
      p++;
    } while (++i < n);
    n = x[g];
    x[0] = i = 0;
    p = 0;
    h = -1;
    w = -l;
    u[0] = 0;
    q = 0;
    z = 0;
    for (; k <= g; k++) {
      a = c[k];
      while (a-- !== 0) {
        while (k > w + l) {
          h++;
          w += l;
          z = g - w;
          z = z > l ? l : z;
          if ((f = 1 << (j = k - w)) > a + 1) {
            f -= a + 1;
            xp = k;
            if (j < z) {
              while (++j < z) {
                if ((f <<= 1) <= c[++xp])
                  break;
                f -= c[xp];
              }
            }
          }
          z = 1 << j;
          if (hn2[0] + z > MANY) {
            return Z_DATA_ERROR2;
          }
          u[h] = q = /* hp+ */
          hn2[0];
          hn2[0] += z;
          if (h !== 0) {
            x[h] = i;
            r[0] = /* (byte) */
            j;
            r[1] = /* (byte) */
            l;
            j = i >>> w - l;
            r[2] = /* (int) */
            q - u[h - 1] - j;
            hp.set(r, (u[h - 1] + j) * 3);
          } else {
            t[0] = q;
          }
        }
        r[1] = /* (byte) */
        k - w;
        if (p >= n) {
          r[0] = 128 + 64;
        } else if (v2[p] < s) {
          r[0] = /* (byte) */
          v2[p] < 256 ? 0 : 32 + 64;
          r[2] = v2[p++];
        } else {
          r[0] = /* (byte) */
          e2[v2[p] - s] + 16 + 64;
          r[2] = d[v2[p++] - s];
        }
        f = 1 << k - w;
        for (j = i >>> w; j < z; j += f) {
          hp.set(r, (q + j) * 3);
        }
        for (j = 1 << k - 1; (i & j) !== 0; j >>>= 1) {
          i ^= j;
        }
        i ^= j;
        mask = (1 << w) - 1;
        while ((i & mask) != x[h]) {
          h--;
          w -= l;
          mask = (1 << w) - 1;
        }
      }
    }
    return y !== 0 && g != 1 ? Z_BUF_ERROR2 : Z_OK2;
  }
  function initWorkArea(vsize) {
    let i;
    if (!hn) {
      hn = [];
      v = [];
      c = new Int32Array(BMAX + 1);
      r = [];
      u = new Int32Array(BMAX);
      x = new Int32Array(BMAX + 1);
    }
    if (v.length < vsize) {
      v = [];
    }
    for (i = 0; i < vsize; i++) {
      v[i] = 0;
    }
    for (i = 0; i < BMAX + 1; i++) {
      c[i] = 0;
    }
    for (i = 0; i < 3; i++) {
      r[i] = 0;
    }
    u.set(c.subarray(0, BMAX), 0);
    x.set(c.subarray(0, BMAX + 1), 0);
  }
  that.inflate_trees_bits = function(c2, bb, tb, hp, z) {
    let result;
    initWorkArea(19);
    hn[0] = 0;
    result = huft_build(c2, 0, 19, 19, null, null, tb, bb, hp, hn, v);
    if (result == Z_DATA_ERROR2) {
      z.msg = "oversubscribed dynamic bit lengths tree";
    } else if (result == Z_BUF_ERROR2 || bb[0] === 0) {
      z.msg = "incomplete dynamic bit lengths tree";
      result = Z_DATA_ERROR2;
    }
    return result;
  };
  that.inflate_trees_dynamic = function(nl, nd, c2, bl, bd, tl, td, hp, z) {
    let result;
    initWorkArea(288);
    hn[0] = 0;
    result = huft_build(c2, 0, nl, 257, cplens, cplext, tl, bl, hp, hn, v);
    if (result != Z_OK2 || bl[0] === 0) {
      if (result == Z_DATA_ERROR2) {
        z.msg = "oversubscribed literal/length tree";
      } else if (result != Z_MEM_ERROR) {
        z.msg = "incomplete literal/length tree";
        result = Z_DATA_ERROR2;
      }
      return result;
    }
    initWorkArea(288);
    result = huft_build(c2, nl, nd, 0, cpdist, cpdext, td, bd, hp, hn, v);
    if (result != Z_OK2 || bd[0] === 0 && nl > 257) {
      if (result == Z_DATA_ERROR2) {
        z.msg = "oversubscribed distance tree";
      } else if (result == Z_BUF_ERROR2) {
        z.msg = "incomplete distance tree";
        result = Z_DATA_ERROR2;
      } else if (result != Z_MEM_ERROR) {
        z.msg = "empty distance tree with lengths";
        result = Z_DATA_ERROR2;
      }
      return result;
    }
    return Z_OK2;
  };
}
InfTree.inflate_trees_fixed = function(bl, bd, tl, td) {
  bl[0] = fixed_bl;
  bd[0] = fixed_bd;
  tl[0] = fixed_tl;
  td[0] = fixed_td;
  return Z_OK2;
};
var START = 0;
var LEN = 1;
var LENEXT = 2;
var DIST = 3;
var DISTEXT = 4;
var COPY = 5;
var LIT = 6;
var WASH = 7;
var END = 8;
var BADCODE = 9;
function InfCodes() {
  const that = this;
  let mode2;
  let len = 0;
  let tree;
  let tree_index = 0;
  let need = 0;
  let lit = 0;
  let get = 0;
  let dist = 0;
  let lbits = 0;
  let dbits = 0;
  let ltree;
  let ltree_index = 0;
  let dtree;
  let dtree_index = 0;
  function inflate_fast(bl, bd, tl, tl_index, td, td_index, s, z) {
    let t;
    let tp;
    let tp_index;
    let e2;
    let b;
    let k;
    let p;
    let n;
    let q;
    let m;
    let ml;
    let md;
    let c;
    let d;
    let r;
    let tp_index_t_3;
    p = z.next_in_index;
    n = z.avail_in;
    b = s.bitb;
    k = s.bitk;
    q = s.write;
    m = q < s.read ? s.read - q - 1 : s.end - q;
    ml = inflate_mask[bl];
    md = inflate_mask[bd];
    do {
      while (k < 20) {
        n--;
        b |= (z.read_byte(p++) & 255) << k;
        k += 8;
      }
      t = b & ml;
      tp = tl;
      tp_index = tl_index;
      tp_index_t_3 = (tp_index + t) * 3;
      if ((e2 = tp[tp_index_t_3]) === 0) {
        b >>= tp[tp_index_t_3 + 1];
        k -= tp[tp_index_t_3 + 1];
        s.win[q++] = /* (byte) */
        tp[tp_index_t_3 + 2];
        m--;
        continue;
      }
      do {
        b >>= tp[tp_index_t_3 + 1];
        k -= tp[tp_index_t_3 + 1];
        if ((e2 & 16) !== 0) {
          e2 &= 15;
          c = tp[tp_index_t_3 + 2] + /* (int) */
          (b & inflate_mask[e2]);
          b >>= e2;
          k -= e2;
          while (k < 15) {
            n--;
            b |= (z.read_byte(p++) & 255) << k;
            k += 8;
          }
          t = b & md;
          tp = td;
          tp_index = td_index;
          tp_index_t_3 = (tp_index + t) * 3;
          e2 = tp[tp_index_t_3];
          do {
            b >>= tp[tp_index_t_3 + 1];
            k -= tp[tp_index_t_3 + 1];
            if ((e2 & 16) !== 0) {
              e2 &= 15;
              while (k < e2) {
                n--;
                b |= (z.read_byte(p++) & 255) << k;
                k += 8;
              }
              d = tp[tp_index_t_3 + 2] + (b & inflate_mask[e2]);
              b >>= e2;
              k -= e2;
              m -= c;
              if (q >= d) {
                r = q - d;
                if (q - r > 0 && 2 > q - r) {
                  s.win[q++] = s.win[r++];
                  s.win[q++] = s.win[r++];
                  c -= 2;
                } else {
                  s.win.set(s.win.subarray(r, r + 2), q);
                  q += 2;
                  r += 2;
                  c -= 2;
                }
              } else {
                r = q - d;
                do {
                  r += s.end;
                } while (r < 0);
                e2 = s.end - r;
                if (c > e2) {
                  c -= e2;
                  if (q - r > 0 && e2 > q - r) {
                    do {
                      s.win[q++] = s.win[r++];
                    } while (--e2 !== 0);
                  } else {
                    s.win.set(s.win.subarray(r, r + e2), q);
                    q += e2;
                    r += e2;
                    e2 = 0;
                  }
                  r = 0;
                }
              }
              if (q - r > 0 && c > q - r) {
                do {
                  s.win[q++] = s.win[r++];
                } while (--c !== 0);
              } else {
                s.win.set(s.win.subarray(r, r + c), q);
                q += c;
                r += c;
                c = 0;
              }
              break;
            } else if ((e2 & 64) === 0) {
              t += tp[tp_index_t_3 + 2];
              t += b & inflate_mask[e2];
              tp_index_t_3 = (tp_index + t) * 3;
              e2 = tp[tp_index_t_3];
            } else {
              z.msg = "invalid distance code";
              c = z.avail_in - n;
              c = k >> 3 < c ? k >> 3 : c;
              n += c;
              p -= c;
              k -= c << 3;
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in += p - z.next_in_index;
              z.next_in_index = p;
              s.write = q;
              return Z_DATA_ERROR2;
            }
          } while (true);
          break;
        }
        if ((e2 & 64) === 0) {
          t += tp[tp_index_t_3 + 2];
          t += b & inflate_mask[e2];
          tp_index_t_3 = (tp_index + t) * 3;
          if ((e2 = tp[tp_index_t_3]) === 0) {
            b >>= tp[tp_index_t_3 + 1];
            k -= tp[tp_index_t_3 + 1];
            s.win[q++] = /* (byte) */
            tp[tp_index_t_3 + 2];
            m--;
            break;
          }
        } else if ((e2 & 32) !== 0) {
          c = z.avail_in - n;
          c = k >> 3 < c ? k >> 3 : c;
          n += c;
          p -= c;
          k -= c << 3;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return Z_STREAM_END2;
        } else {
          z.msg = "invalid literal/length code";
          c = z.avail_in - n;
          c = k >> 3 < c ? k >> 3 : c;
          n += c;
          p -= c;
          k -= c << 3;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return Z_DATA_ERROR2;
        }
      } while (true);
    } while (m >= 258 && n >= 10);
    c = z.avail_in - n;
    c = k >> 3 < c ? k >> 3 : c;
    n += c;
    p -= c;
    k -= c << 3;
    s.bitb = b;
    s.bitk = k;
    z.avail_in = n;
    z.total_in += p - z.next_in_index;
    z.next_in_index = p;
    s.write = q;
    return Z_OK2;
  }
  that.init = function(bl, bd, tl, tl_index, td, td_index) {
    mode2 = START;
    lbits = /* (byte) */
    bl;
    dbits = /* (byte) */
    bd;
    ltree = tl;
    ltree_index = tl_index;
    dtree = td;
    dtree_index = td_index;
    tree = null;
  };
  that.proc = function(s, z, r) {
    let j;
    let tindex;
    let e2;
    let b = 0;
    let k = 0;
    let p = 0;
    let n;
    let q;
    let m;
    let f;
    p = z.next_in_index;
    n = z.avail_in;
    b = s.bitb;
    k = s.bitk;
    q = s.write;
    m = q < s.read ? s.read - q - 1 : s.end - q;
    while (true) {
      switch (mode2) {
        case START:
          if (m >= 258 && n >= 10) {
            s.bitb = b;
            s.bitk = k;
            z.avail_in = n;
            z.total_in += p - z.next_in_index;
            z.next_in_index = p;
            s.write = q;
            r = inflate_fast(lbits, dbits, ltree, ltree_index, dtree, dtree_index, s, z);
            p = z.next_in_index;
            n = z.avail_in;
            b = s.bitb;
            k = s.bitk;
            q = s.write;
            m = q < s.read ? s.read - q - 1 : s.end - q;
            if (r != Z_OK2) {
              mode2 = r == Z_STREAM_END2 ? WASH : BADCODE;
              break;
            }
          }
          need = lbits;
          tree = ltree;
          tree_index = ltree_index;
          mode2 = LEN;
        case LEN:
          j = need;
          while (k < j) {
            if (n !== 0)
              r = Z_OK2;
            else {
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in += p - z.next_in_index;
              z.next_in_index = p;
              s.write = q;
              return s.inflate_flush(z, r);
            }
            n--;
            b |= (z.read_byte(p++) & 255) << k;
            k += 8;
          }
          tindex = (tree_index + (b & inflate_mask[j])) * 3;
          b >>>= tree[tindex + 1];
          k -= tree[tindex + 1];
          e2 = tree[tindex];
          if (e2 === 0) {
            lit = tree[tindex + 2];
            mode2 = LIT;
            break;
          }
          if ((e2 & 16) !== 0) {
            get = e2 & 15;
            len = tree[tindex + 2];
            mode2 = LENEXT;
            break;
          }
          if ((e2 & 64) === 0) {
            need = e2;
            tree_index = tindex / 3 + tree[tindex + 2];
            break;
          }
          if ((e2 & 32) !== 0) {
            mode2 = WASH;
            break;
          }
          mode2 = BADCODE;
          z.msg = "invalid literal/length code";
          r = Z_DATA_ERROR2;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return s.inflate_flush(z, r);
        case LENEXT:
          j = get;
          while (k < j) {
            if (n !== 0)
              r = Z_OK2;
            else {
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in += p - z.next_in_index;
              z.next_in_index = p;
              s.write = q;
              return s.inflate_flush(z, r);
            }
            n--;
            b |= (z.read_byte(p++) & 255) << k;
            k += 8;
          }
          len += b & inflate_mask[j];
          b >>= j;
          k -= j;
          need = dbits;
          tree = dtree;
          tree_index = dtree_index;
          mode2 = DIST;
        case DIST:
          j = need;
          while (k < j) {
            if (n !== 0)
              r = Z_OK2;
            else {
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in += p - z.next_in_index;
              z.next_in_index = p;
              s.write = q;
              return s.inflate_flush(z, r);
            }
            n--;
            b |= (z.read_byte(p++) & 255) << k;
            k += 8;
          }
          tindex = (tree_index + (b & inflate_mask[j])) * 3;
          b >>= tree[tindex + 1];
          k -= tree[tindex + 1];
          e2 = tree[tindex];
          if ((e2 & 16) !== 0) {
            get = e2 & 15;
            dist = tree[tindex + 2];
            mode2 = DISTEXT;
            break;
          }
          if ((e2 & 64) === 0) {
            need = e2;
            tree_index = tindex / 3 + tree[tindex + 2];
            break;
          }
          mode2 = BADCODE;
          z.msg = "invalid distance code";
          r = Z_DATA_ERROR2;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return s.inflate_flush(z, r);
        case DISTEXT:
          j = get;
          while (k < j) {
            if (n !== 0)
              r = Z_OK2;
            else {
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in += p - z.next_in_index;
              z.next_in_index = p;
              s.write = q;
              return s.inflate_flush(z, r);
            }
            n--;
            b |= (z.read_byte(p++) & 255) << k;
            k += 8;
          }
          dist += b & inflate_mask[j];
          b >>= j;
          k -= j;
          mode2 = COPY;
        case COPY:
          f = q - dist;
          while (f < 0) {
            f += s.end;
          }
          while (len !== 0) {
            if (m === 0) {
              if (q == s.end && s.read !== 0) {
                q = 0;
                m = q < s.read ? s.read - q - 1 : s.end - q;
              }
              if (m === 0) {
                s.write = q;
                r = s.inflate_flush(z, r);
                q = s.write;
                m = q < s.read ? s.read - q - 1 : s.end - q;
                if (q == s.end && s.read !== 0) {
                  q = 0;
                  m = q < s.read ? s.read - q - 1 : s.end - q;
                }
                if (m === 0) {
                  s.bitb = b;
                  s.bitk = k;
                  z.avail_in = n;
                  z.total_in += p - z.next_in_index;
                  z.next_in_index = p;
                  s.write = q;
                  return s.inflate_flush(z, r);
                }
              }
            }
            s.win[q++] = s.win[f++];
            m--;
            if (f == s.end)
              f = 0;
            len--;
          }
          mode2 = START;
          break;
        case LIT:
          if (m === 0) {
            if (q == s.end && s.read !== 0) {
              q = 0;
              m = q < s.read ? s.read - q - 1 : s.end - q;
            }
            if (m === 0) {
              s.write = q;
              r = s.inflate_flush(z, r);
              q = s.write;
              m = q < s.read ? s.read - q - 1 : s.end - q;
              if (q == s.end && s.read !== 0) {
                q = 0;
                m = q < s.read ? s.read - q - 1 : s.end - q;
              }
              if (m === 0) {
                s.bitb = b;
                s.bitk = k;
                z.avail_in = n;
                z.total_in += p - z.next_in_index;
                z.next_in_index = p;
                s.write = q;
                return s.inflate_flush(z, r);
              }
            }
          }
          r = Z_OK2;
          s.win[q++] = /* (byte) */
          lit;
          m--;
          mode2 = START;
          break;
        case WASH:
          if (k > 7) {
            k -= 8;
            n++;
            p--;
          }
          s.write = q;
          r = s.inflate_flush(z, r);
          q = s.write;
          m = q < s.read ? s.read - q - 1 : s.end - q;
          if (s.read != s.write) {
            s.bitb = b;
            s.bitk = k;
            z.avail_in = n;
            z.total_in += p - z.next_in_index;
            z.next_in_index = p;
            s.write = q;
            return s.inflate_flush(z, r);
          }
          mode2 = END;
        case END:
          r = Z_STREAM_END2;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return s.inflate_flush(z, r);
        case BADCODE:
          r = Z_DATA_ERROR2;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return s.inflate_flush(z, r);
        default:
          r = Z_STREAM_ERROR2;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return s.inflate_flush(z, r);
      }
    }
  };
  that.free = function() {
  };
}
var border = [
  // Order of the bit length code lengths
  16,
  17,
  18,
  0,
  8,
  7,
  9,
  6,
  10,
  5,
  11,
  4,
  12,
  3,
  13,
  2,
  14,
  1,
  15
];
var TYPE = 0;
var LENS = 1;
var STORED2 = 2;
var TABLE = 3;
var BTREE = 4;
var DTREE = 5;
var CODES = 6;
var DRY = 7;
var DONELOCKS = 8;
var BADBLOCKS = 9;
function InfBlocks(z, w) {
  const that = this;
  let mode2 = TYPE;
  let left = 0;
  let table3 = 0;
  let index = 0;
  let blens;
  const bb = [0];
  const tb = [0];
  const codes = new InfCodes();
  let last = 0;
  let hufts = new Int32Array(MANY * 3);
  const check = 0;
  const inftree = new InfTree();
  that.bitk = 0;
  that.bitb = 0;
  that.win = new Uint8Array(w);
  that.end = w;
  that.read = 0;
  that.write = 0;
  that.reset = function(z2, c) {
    if (c)
      c[0] = check;
    if (mode2 == CODES) {
      codes.free(z2);
    }
    mode2 = TYPE;
    that.bitk = 0;
    that.bitb = 0;
    that.read = that.write = 0;
  };
  that.reset(z, null);
  that.inflate_flush = function(z2, r) {
    let n;
    let p;
    let q;
    p = z2.next_out_index;
    q = that.read;
    n = /* (int) */
    (q <= that.write ? that.write : that.end) - q;
    if (n > z2.avail_out)
      n = z2.avail_out;
    if (n !== 0 && r == Z_BUF_ERROR2)
      r = Z_OK2;
    z2.avail_out -= n;
    z2.total_out += n;
    z2.next_out.set(that.win.subarray(q, q + n), p);
    p += n;
    q += n;
    if (q == that.end) {
      q = 0;
      if (that.write == that.end)
        that.write = 0;
      n = that.write - q;
      if (n > z2.avail_out)
        n = z2.avail_out;
      if (n !== 0 && r == Z_BUF_ERROR2)
        r = Z_OK2;
      z2.avail_out -= n;
      z2.total_out += n;
      z2.next_out.set(that.win.subarray(q, q + n), p);
      p += n;
      q += n;
    }
    z2.next_out_index = p;
    that.read = q;
    return r;
  };
  that.proc = function(z2, r) {
    let t;
    let b;
    let k;
    let p;
    let n;
    let q;
    let m;
    let i;
    p = z2.next_in_index;
    n = z2.avail_in;
    b = that.bitb;
    k = that.bitk;
    q = that.write;
    m = /* (int) */
    q < that.read ? that.read - q - 1 : that.end - q;
    while (true) {
      let bl, bd, tl, td, bl_, bd_, tl_, td_;
      switch (mode2) {
        case TYPE:
          while (k < 3) {
            if (n !== 0) {
              r = Z_OK2;
            } else {
              that.bitb = b;
              that.bitk = k;
              z2.avail_in = n;
              z2.total_in += p - z2.next_in_index;
              z2.next_in_index = p;
              that.write = q;
              return that.inflate_flush(z2, r);
            }
            n--;
            b |= (z2.read_byte(p++) & 255) << k;
            k += 8;
          }
          t = /* (int) */
          b & 7;
          last = t & 1;
          switch (t >>> 1) {
            case 0:
              b >>>= 3;
              k -= 3;
              t = k & 7;
              b >>>= t;
              k -= t;
              mode2 = LENS;
              break;
            case 1:
              bl = [];
              bd = [];
              tl = [[]];
              td = [[]];
              InfTree.inflate_trees_fixed(bl, bd, tl, td);
              codes.init(bl[0], bd[0], tl[0], 0, td[0], 0);
              b >>>= 3;
              k -= 3;
              mode2 = CODES;
              break;
            case 2:
              b >>>= 3;
              k -= 3;
              mode2 = TABLE;
              break;
            case 3:
              b >>>= 3;
              k -= 3;
              mode2 = BADBLOCKS;
              z2.msg = "invalid block type";
              r = Z_DATA_ERROR2;
              that.bitb = b;
              that.bitk = k;
              z2.avail_in = n;
              z2.total_in += p - z2.next_in_index;
              z2.next_in_index = p;
              that.write = q;
              return that.inflate_flush(z2, r);
          }
          break;
        case LENS:
          while (k < 32) {
            if (n !== 0) {
              r = Z_OK2;
            } else {
              that.bitb = b;
              that.bitk = k;
              z2.avail_in = n;
              z2.total_in += p - z2.next_in_index;
              z2.next_in_index = p;
              that.write = q;
              return that.inflate_flush(z2, r);
            }
            n--;
            b |= (z2.read_byte(p++) & 255) << k;
            k += 8;
          }
          if ((~b >>> 16 & 65535) != (b & 65535)) {
            mode2 = BADBLOCKS;
            z2.msg = "invalid stored block lengths";
            r = Z_DATA_ERROR2;
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          left = b & 65535;
          b = k = 0;
          mode2 = left !== 0 ? STORED2 : last !== 0 ? DRY : TYPE;
          break;
        case STORED2:
          if (n === 0) {
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          if (m === 0) {
            if (q == that.end && that.read !== 0) {
              q = 0;
              m = /* (int) */
              q < that.read ? that.read - q - 1 : that.end - q;
            }
            if (m === 0) {
              that.write = q;
              r = that.inflate_flush(z2, r);
              q = that.write;
              m = /* (int) */
              q < that.read ? that.read - q - 1 : that.end - q;
              if (q == that.end && that.read !== 0) {
                q = 0;
                m = /* (int) */
                q < that.read ? that.read - q - 1 : that.end - q;
              }
              if (m === 0) {
                that.bitb = b;
                that.bitk = k;
                z2.avail_in = n;
                z2.total_in += p - z2.next_in_index;
                z2.next_in_index = p;
                that.write = q;
                return that.inflate_flush(z2, r);
              }
            }
          }
          r = Z_OK2;
          t = left;
          if (t > n)
            t = n;
          if (t > m)
            t = m;
          that.win.set(z2.read_buf(p, t), q);
          p += t;
          n -= t;
          q += t;
          m -= t;
          if ((left -= t) !== 0)
            break;
          mode2 = last !== 0 ? DRY : TYPE;
          break;
        case TABLE:
          while (k < 14) {
            if (n !== 0) {
              r = Z_OK2;
            } else {
              that.bitb = b;
              that.bitk = k;
              z2.avail_in = n;
              z2.total_in += p - z2.next_in_index;
              z2.next_in_index = p;
              that.write = q;
              return that.inflate_flush(z2, r);
            }
            n--;
            b |= (z2.read_byte(p++) & 255) << k;
            k += 8;
          }
          table3 = t = b & 16383;
          if ((t & 31) > 29 || (t >> 5 & 31) > 29) {
            mode2 = BADBLOCKS;
            z2.msg = "too many length or distance symbols";
            r = Z_DATA_ERROR2;
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          t = 258 + (t & 31) + (t >> 5 & 31);
          if (!blens || blens.length < t) {
            blens = [];
          } else {
            for (i = 0; i < t; i++) {
              blens[i] = 0;
            }
          }
          b >>>= 14;
          k -= 14;
          index = 0;
          mode2 = BTREE;
        case BTREE:
          while (index < 4 + (table3 >>> 10)) {
            while (k < 3) {
              if (n !== 0) {
                r = Z_OK2;
              } else {
                that.bitb = b;
                that.bitk = k;
                z2.avail_in = n;
                z2.total_in += p - z2.next_in_index;
                z2.next_in_index = p;
                that.write = q;
                return that.inflate_flush(z2, r);
              }
              n--;
              b |= (z2.read_byte(p++) & 255) << k;
              k += 8;
            }
            blens[border[index++]] = b & 7;
            b >>>= 3;
            k -= 3;
          }
          while (index < 19) {
            blens[border[index++]] = 0;
          }
          bb[0] = 7;
          t = inftree.inflate_trees_bits(blens, bb, tb, hufts, z2);
          if (t != Z_OK2) {
            r = t;
            if (r == Z_DATA_ERROR2) {
              blens = null;
              mode2 = BADBLOCKS;
            }
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          index = 0;
          mode2 = DTREE;
        case DTREE:
          while (true) {
            t = table3;
            if (index >= 258 + (t & 31) + (t >> 5 & 31)) {
              break;
            }
            let j, c;
            t = bb[0];
            while (k < t) {
              if (n !== 0) {
                r = Z_OK2;
              } else {
                that.bitb = b;
                that.bitk = k;
                z2.avail_in = n;
                z2.total_in += p - z2.next_in_index;
                z2.next_in_index = p;
                that.write = q;
                return that.inflate_flush(z2, r);
              }
              n--;
              b |= (z2.read_byte(p++) & 255) << k;
              k += 8;
            }
            t = hufts[(tb[0] + (b & inflate_mask[t])) * 3 + 1];
            c = hufts[(tb[0] + (b & inflate_mask[t])) * 3 + 2];
            if (c < 16) {
              b >>>= t;
              k -= t;
              blens[index++] = c;
            } else {
              i = c == 18 ? 7 : c - 14;
              j = c == 18 ? 11 : 3;
              while (k < t + i) {
                if (n !== 0) {
                  r = Z_OK2;
                } else {
                  that.bitb = b;
                  that.bitk = k;
                  z2.avail_in = n;
                  z2.total_in += p - z2.next_in_index;
                  z2.next_in_index = p;
                  that.write = q;
                  return that.inflate_flush(z2, r);
                }
                n--;
                b |= (z2.read_byte(p++) & 255) << k;
                k += 8;
              }
              b >>>= t;
              k -= t;
              j += b & inflate_mask[i];
              b >>>= i;
              k -= i;
              i = index;
              t = table3;
              if (i + j > 258 + (t & 31) + (t >> 5 & 31) || c == 16 && i < 1) {
                blens = null;
                mode2 = BADBLOCKS;
                z2.msg = "invalid bit length repeat";
                r = Z_DATA_ERROR2;
                that.bitb = b;
                that.bitk = k;
                z2.avail_in = n;
                z2.total_in += p - z2.next_in_index;
                z2.next_in_index = p;
                that.write = q;
                return that.inflate_flush(z2, r);
              }
              c = c == 16 ? blens[i - 1] : 0;
              do {
                blens[i++] = c;
              } while (--j !== 0);
              index = i;
            }
          }
          tb[0] = -1;
          bl_ = [];
          bd_ = [];
          tl_ = [];
          td_ = [];
          bl_[0] = 9;
          bd_[0] = 6;
          t = table3;
          t = inftree.inflate_trees_dynamic(257 + (t & 31), 1 + (t >> 5 & 31), blens, bl_, bd_, tl_, td_, hufts, z2);
          if (t != Z_OK2) {
            if (t == Z_DATA_ERROR2) {
              blens = null;
              mode2 = BADBLOCKS;
            }
            r = t;
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          codes.init(bl_[0], bd_[0], hufts, tl_[0], hufts, td_[0]);
          mode2 = CODES;
        case CODES:
          that.bitb = b;
          that.bitk = k;
          z2.avail_in = n;
          z2.total_in += p - z2.next_in_index;
          z2.next_in_index = p;
          that.write = q;
          if ((r = codes.proc(that, z2, r)) != Z_STREAM_END2) {
            return that.inflate_flush(z2, r);
          }
          r = Z_OK2;
          codes.free(z2);
          p = z2.next_in_index;
          n = z2.avail_in;
          b = that.bitb;
          k = that.bitk;
          q = that.write;
          m = /* (int) */
          q < that.read ? that.read - q - 1 : that.end - q;
          if (last === 0) {
            mode2 = TYPE;
            break;
          }
          mode2 = DRY;
        case DRY:
          that.write = q;
          r = that.inflate_flush(z2, r);
          q = that.write;
          m = /* (int) */
          q < that.read ? that.read - q - 1 : that.end - q;
          if (that.read != that.write) {
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          mode2 = DONELOCKS;
        case DONELOCKS:
          r = Z_STREAM_END2;
          that.bitb = b;
          that.bitk = k;
          z2.avail_in = n;
          z2.total_in += p - z2.next_in_index;
          z2.next_in_index = p;
          that.write = q;
          return that.inflate_flush(z2, r);
        case BADBLOCKS:
          r = Z_DATA_ERROR2;
          that.bitb = b;
          that.bitk = k;
          z2.avail_in = n;
          z2.total_in += p - z2.next_in_index;
          z2.next_in_index = p;
          that.write = q;
          return that.inflate_flush(z2, r);
        default:
          r = Z_STREAM_ERROR2;
          that.bitb = b;
          that.bitk = k;
          z2.avail_in = n;
          z2.total_in += p - z2.next_in_index;
          z2.next_in_index = p;
          that.write = q;
          return that.inflate_flush(z2, r);
      }
    }
  };
  that.free = function(z2) {
    that.reset(z2, null);
    that.win = null;
    hufts = null;
  };
  that.set_dictionary = function(d, start, n) {
    that.win.set(d.subarray(start, start + n), 0);
    that.read = that.write = n;
  };
  that.sync_point = function() {
    return mode2 == LENS ? 1 : 0;
  };
}
var PRESET_DICT2 = 32;
var Z_DEFLATED2 = 8;
var METHOD = 0;
var FLAG = 1;
var DICT4 = 2;
var DICT3 = 3;
var DICT2 = 4;
var DICT1 = 5;
var DICT0 = 6;
var BLOCKS = 7;
var DONE = 12;
var BAD = 13;
var mark = [0, 0, 255, 255];
function Inflate() {
  const that = this;
  that.mode = 0;
  that.method = 0;
  that.was = [0];
  that.need = 0;
  that.marker = 0;
  that.wbits = 0;
  function inflateReset(z) {
    if (!z || !z.istate)
      return Z_STREAM_ERROR2;
    z.total_in = z.total_out = 0;
    z.msg = null;
    z.istate.mode = BLOCKS;
    z.istate.blocks.reset(z, null);
    return Z_OK2;
  }
  that.inflateEnd = function(z) {
    if (that.blocks)
      that.blocks.free(z);
    that.blocks = null;
    return Z_OK2;
  };
  that.inflateInit = function(z, w) {
    z.msg = null;
    that.blocks = null;
    if (w < 8 || w > 15) {
      that.inflateEnd(z);
      return Z_STREAM_ERROR2;
    }
    that.wbits = w;
    z.istate.blocks = new InfBlocks(z, 1 << w);
    inflateReset(z);
    return Z_OK2;
  };
  that.inflate = function(z, f) {
    let r;
    let b;
    if (!z || !z.istate || !z.next_in)
      return Z_STREAM_ERROR2;
    const istate = z.istate;
    f = f == Z_FINISH2 ? Z_BUF_ERROR2 : Z_OK2;
    r = Z_BUF_ERROR2;
    while (true) {
      switch (istate.mode) {
        case METHOD:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          if (((istate.method = z.read_byte(z.next_in_index++)) & 15) != Z_DEFLATED2) {
            istate.mode = BAD;
            z.msg = "unknown compression method";
            istate.marker = 5;
            break;
          }
          if ((istate.method >> 4) + 8 > istate.wbits) {
            istate.mode = BAD;
            z.msg = "invalid win size";
            istate.marker = 5;
            break;
          }
          istate.mode = FLAG;
        case FLAG:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          b = z.read_byte(z.next_in_index++) & 255;
          if (((istate.method << 8) + b) % 31 !== 0) {
            istate.mode = BAD;
            z.msg = "incorrect header check";
            istate.marker = 5;
            break;
          }
          if ((b & PRESET_DICT2) === 0) {
            istate.mode = BLOCKS;
            break;
          }
          istate.mode = DICT4;
        case DICT4:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          istate.need = (z.read_byte(z.next_in_index++) & 255) << 24 & 4278190080;
          istate.mode = DICT3;
        case DICT3:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          istate.need += (z.read_byte(z.next_in_index++) & 255) << 16 & 16711680;
          istate.mode = DICT2;
        case DICT2:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          istate.need += (z.read_byte(z.next_in_index++) & 255) << 8 & 65280;
          istate.mode = DICT1;
        case DICT1:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          istate.need += z.read_byte(z.next_in_index++) & 255;
          istate.mode = DICT0;
          return Z_NEED_DICT2;
        case DICT0:
          istate.mode = BAD;
          z.msg = "need dictionary";
          istate.marker = 0;
          return Z_STREAM_ERROR2;
        case BLOCKS:
          r = istate.blocks.proc(z, r);
          if (r == Z_DATA_ERROR2) {
            istate.mode = BAD;
            istate.marker = 0;
            break;
          }
          if (r == Z_OK2) {
            r = f;
          }
          if (r != Z_STREAM_END2) {
            return r;
          }
          r = f;
          istate.blocks.reset(z, istate.was);
          istate.mode = DONE;
        case DONE:
          z.avail_in = 0;
          return Z_STREAM_END2;
        case BAD:
          return Z_DATA_ERROR2;
        default:
          return Z_STREAM_ERROR2;
      }
    }
  };
  that.inflateSetDictionary = function(z, dictionary, dictLength) {
    let index = 0, length = dictLength;
    if (!z || !z.istate || z.istate.mode != DICT0)
      return Z_STREAM_ERROR2;
    const istate = z.istate;
    if (length >= 1 << istate.wbits) {
      length = (1 << istate.wbits) - 1;
      index = dictLength - length;
    }
    istate.blocks.set_dictionary(dictionary, index, length);
    istate.mode = BLOCKS;
    return Z_OK2;
  };
  that.inflateSync = function(z) {
    let n;
    let p;
    let m;
    let r, w;
    if (!z || !z.istate)
      return Z_STREAM_ERROR2;
    const istate = z.istate;
    if (istate.mode != BAD) {
      istate.mode = BAD;
      istate.marker = 0;
    }
    if ((n = z.avail_in) === 0)
      return Z_BUF_ERROR2;
    p = z.next_in_index;
    m = istate.marker;
    while (n !== 0 && m < 4) {
      if (z.read_byte(p) == mark[m]) {
        m++;
      } else if (z.read_byte(p) !== 0) {
        m = 0;
      } else {
        m = 4 - m;
      }
      p++;
      n--;
    }
    z.total_in += p - z.next_in_index;
    z.next_in_index = p;
    z.avail_in = n;
    istate.marker = m;
    if (m != 4) {
      return Z_DATA_ERROR2;
    }
    r = z.total_in;
    w = z.total_out;
    inflateReset(z);
    z.total_in = r;
    z.total_out = w;
    istate.mode = BLOCKS;
    return Z_OK2;
  };
  that.inflateSyncPoint = function(z) {
    if (!z || !z.istate || !z.istate.blocks)
      return Z_STREAM_ERROR2;
    return z.istate.blocks.sync_point();
  };
}
function ZStream2() {
}
ZStream2.prototype = {
  inflateInit(bits) {
    const that = this;
    that.istate = new Inflate();
    if (!bits)
      bits = MAX_BITS2;
    return that.istate.inflateInit(that, bits);
  },
  inflate(f) {
    const that = this;
    if (!that.istate)
      return Z_STREAM_ERROR2;
    return that.istate.inflate(that, f);
  },
  inflateEnd() {
    const that = this;
    if (!that.istate)
      return Z_STREAM_ERROR2;
    const ret = that.istate.inflateEnd(that);
    that.istate = null;
    return ret;
  },
  inflateSync() {
    const that = this;
    if (!that.istate)
      return Z_STREAM_ERROR2;
    return that.istate.inflateSync(that);
  },
  inflateSetDictionary(dictionary, dictLength) {
    const that = this;
    if (!that.istate)
      return Z_STREAM_ERROR2;
    return that.istate.inflateSetDictionary(that, dictionary, dictLength);
  },
  read_byte(start) {
    const that = this;
    return that.next_in[start];
  },
  read_buf(start, size) {
    const that = this;
    return that.next_in.subarray(start, start + size);
  }
};
function ZipInflate(options) {
  const that = this;
  const z = new ZStream2();
  const bufsize = options && options.chunkSize ? Math.floor(options.chunkSize * 2) : 128 * 1024;
  const flush = Z_NO_FLUSH2;
  const buf = new Uint8Array(bufsize);
  let nomoreinput = false;
  z.inflateInit();
  z.next_out = buf;
  that.append = function(data, onprogress) {
    const buffers = [];
    let err, array, lastIndex = 0, bufferIndex = 0, bufferSize = 0;
    if (data.length === 0)
      return;
    z.next_in_index = 0;
    z.next_in = data;
    z.avail_in = data.length;
    do {
      z.next_out_index = 0;
      z.avail_out = bufsize;
      if (z.avail_in === 0 && !nomoreinput) {
        z.next_in_index = 0;
        nomoreinput = true;
      }
      err = z.inflate(flush);
      if (nomoreinput && err === Z_BUF_ERROR2) {
        if (z.avail_in !== 0)
          throw new Error("inflating: bad input");
      } else if (err !== Z_OK2 && err !== Z_STREAM_END2)
        throw new Error("inflating: " + z.msg);
      if ((nomoreinput || err === Z_STREAM_END2) && z.avail_in === data.length)
        throw new Error("inflating: bad input");
      if (z.next_out_index)
        if (z.next_out_index === bufsize)
          buffers.push(new Uint8Array(buf));
        else
          buffers.push(buf.subarray(0, z.next_out_index));
      bufferSize += z.next_out_index;
      if (onprogress && z.next_in_index > 0 && z.next_in_index != lastIndex) {
        onprogress(z.next_in_index);
        lastIndex = z.next_in_index;
      }
    } while (z.avail_in > 0 || z.avail_out === 0);
    if (buffers.length > 1) {
      array = new Uint8Array(bufferSize);
      buffers.forEach(function(chunk) {
        array.set(chunk, bufferIndex);
        bufferIndex += chunk.length;
      });
    } else {
      array = buffers[0] ? new Uint8Array(buffers[0]) : new Uint8Array();
    }
    return array;
  };
  that.flush = function() {
    z.inflateEnd();
  };
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/constants.js
var MAX_32_BITS = 4294967295;
var MAX_16_BITS = 65535;
var COMPRESSION_METHOD_DEFLATE = 8;
var COMPRESSION_METHOD_STORE = 0;
var COMPRESSION_METHOD_AES = 99;
var LOCAL_FILE_HEADER_SIGNATURE = 67324752;
var SPLIT_ZIP_FILE_SIGNATURE = 134695760;
var DATA_DESCRIPTOR_RECORD_SIGNATURE = SPLIT_ZIP_FILE_SIGNATURE;
var CENTRAL_FILE_HEADER_SIGNATURE = 33639248;
var END_OF_CENTRAL_DIR_SIGNATURE = 101010256;
var ZIP64_END_OF_CENTRAL_DIR_SIGNATURE = 101075792;
var ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE = 117853008;
var END_OF_CENTRAL_DIR_LENGTH = 22;
var ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH = 20;
var ZIP64_END_OF_CENTRAL_DIR_LENGTH = 56;
var ZIP64_END_OF_CENTRAL_DIR_TOTAL_LENGTH = END_OF_CENTRAL_DIR_LENGTH + ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH + ZIP64_END_OF_CENTRAL_DIR_LENGTH;
var EXTRAFIELD_TYPE_ZIP64 = 1;
var EXTRAFIELD_TYPE_AES = 39169;
var EXTRAFIELD_TYPE_NTFS = 10;
var EXTRAFIELD_TYPE_NTFS_TAG1 = 1;
var EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP = 21589;
var EXTRAFIELD_TYPE_UNICODE_PATH = 28789;
var EXTRAFIELD_TYPE_UNICODE_COMMENT = 25461;
var EXTRAFIELD_TYPE_USDZ = 6534;
var BITFLAG_ENCRYPTED = 1;
var BITFLAG_LEVEL = 6;
var BITFLAG_DATA_DESCRIPTOR = 8;
var BITFLAG_LANG_ENCODING_FLAG = 2048;
var FILE_ATTR_MSDOS_DIR_MASK = 16;
var VERSION_DEFLATE = 20;
var VERSION_ZIP64 = 45;
var VERSION_AES = 51;
var DIRECTORY_SIGNATURE = "/";
var MAX_DATE = new Date(2107, 11, 31);
var MIN_DATE = new Date(1980, 0, 1);
var UNDEFINED_VALUE = void 0;
var UNDEFINED_TYPE = "undefined";
var FUNCTION_TYPE = "function";

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/streams/stream-adapter.js
var StreamAdapter = class {
  constructor(Codec) {
    return class extends TransformStream {
      constructor(_format, options) {
        const codec2 = new Codec(options);
        super({
          transform(chunk, controller) {
            controller.enqueue(codec2.append(chunk));
          },
          flush(controller) {
            const chunk = codec2.flush();
            if (chunk) {
              controller.enqueue(chunk);
            }
          }
        });
      }
    };
  }
};

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/configuration.js
var MINIMUM_CHUNK_SIZE = 64;
var maxWorkers = 2;
try {
  if (typeof navigator != UNDEFINED_TYPE && navigator.hardwareConcurrency) {
    maxWorkers = navigator.hardwareConcurrency;
  }
} catch (_error) {
}
var DEFAULT_CONFIGURATION = {
  chunkSize: 512 * 1024,
  maxWorkers,
  terminateWorkerTimeout: 5e3,
  useWebWorkers: true,
  useCompressionStream: true,
  workerScripts: UNDEFINED_VALUE,
  CompressionStreamNative: typeof CompressionStream != UNDEFINED_TYPE && CompressionStream,
  DecompressionStreamNative: typeof DecompressionStream != UNDEFINED_TYPE && DecompressionStream
};
var config = Object.assign({}, DEFAULT_CONFIGURATION);
function getConfiguration() {
  return config;
}
function getChunkSize(config2) {
  return Math.max(config2.chunkSize, MINIMUM_CHUNK_SIZE);
}
function configure(configuration) {
  const {
    baseURL: baseURL2,
    chunkSize,
    maxWorkers: maxWorkers2,
    terminateWorkerTimeout,
    useCompressionStream,
    useWebWorkers,
    Deflate: Deflate2,
    Inflate: Inflate2,
    CompressionStream: CompressionStream2,
    DecompressionStream: DecompressionStream2,
    workerScripts
  } = configuration;
  setIfDefined("baseURL", baseURL2);
  setIfDefined("chunkSize", chunkSize);
  setIfDefined("maxWorkers", maxWorkers2);
  setIfDefined("terminateWorkerTimeout", terminateWorkerTimeout);
  setIfDefined("useCompressionStream", useCompressionStream);
  setIfDefined("useWebWorkers", useWebWorkers);
  if (Deflate2) {
    config.CompressionStream = new StreamAdapter(Deflate2);
  }
  if (Inflate2) {
    config.DecompressionStream = new StreamAdapter(Inflate2);
  }
  setIfDefined("CompressionStream", CompressionStream2);
  setIfDefined("DecompressionStream", DecompressionStream2);
  if (workerScripts !== UNDEFINED_VALUE) {
    const { deflate, inflate } = workerScripts;
    if (deflate || inflate) {
      if (!config.workerScripts) {
        config.workerScripts = {};
      }
    }
    if (deflate) {
      if (!Array.isArray(deflate)) {
        throw new Error("workerScripts.deflate must be an array");
      }
      config.workerScripts.deflate = deflate;
    }
    if (inflate) {
      if (!Array.isArray(inflate)) {
        throw new Error("workerScripts.inflate must be an array");
      }
      config.workerScripts.inflate = inflate;
    }
  }
}
function setIfDefined(propertyName, propertyValue) {
  if (propertyValue !== UNDEFINED_VALUE) {
    config[propertyName] = propertyValue;
  }
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/util/default-mime-type.js
function getMimeType() {
  return "application/octet-stream";
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/util/mime-type.js
var table = {
  "application": {
    "andrew-inset": "ez",
    "annodex": "anx",
    "atom+xml": "atom",
    "atomcat+xml": "atomcat",
    "atomserv+xml": "atomsrv",
    "bbolin": "lin",
    "cu-seeme": "cu",
    "davmount+xml": "davmount",
    "dsptype": "tsp",
    "ecmascript": [
      "es",
      "ecma"
    ],
    "futuresplash": "spl",
    "hta": "hta",
    "java-archive": "jar",
    "java-serialized-object": "ser",
    "java-vm": "class",
    "m3g": "m3g",
    "mac-binhex40": "hqx",
    "mathematica": [
      "nb",
      "ma",
      "mb"
    ],
    "msaccess": "mdb",
    "msword": [
      "doc",
      "dot",
      "wiz"
    ],
    "mxf": "mxf",
    "oda": "oda",
    "ogg": "ogx",
    "pdf": "pdf",
    "pgp-keys": "key",
    "pgp-signature": [
      "asc",
      "sig"
    ],
    "pics-rules": "prf",
    "postscript": [
      "ps",
      "ai",
      "eps",
      "epsi",
      "epsf",
      "eps2",
      "eps3"
    ],
    "rar": "rar",
    "rdf+xml": "rdf",
    "rss+xml": "rss",
    "rtf": "rtf",
    "xhtml+xml": [
      "xhtml",
      "xht"
    ],
    "xml": [
      "xml",
      "xsl",
      "xsd",
      "xpdl"
    ],
    "xspf+xml": "xspf",
    "zip": "zip",
    "vnd.android.package-archive": "apk",
    "vnd.cinderella": "cdy",
    "vnd.google-earth.kml+xml": "kml",
    "vnd.google-earth.kmz": "kmz",
    "vnd.mozilla.xul+xml": "xul",
    "vnd.ms-excel": [
      "xls",
      "xlb",
      "xlt",
      "xlm",
      "xla",
      "xlc",
      "xlw"
    ],
    "vnd.ms-pki.seccat": "cat",
    "vnd.ms-pki.stl": "stl",
    "vnd.ms-powerpoint": [
      "ppt",
      "pps",
      "pot",
      "ppa",
      "pwz"
    ],
    "vnd.oasis.opendocument.chart": "odc",
    "vnd.oasis.opendocument.database": "odb",
    "vnd.oasis.opendocument.formula": "odf",
    "vnd.oasis.opendocument.graphics": "odg",
    "vnd.oasis.opendocument.graphics-template": "otg",
    "vnd.oasis.opendocument.image": "odi",
    "vnd.oasis.opendocument.presentation": "odp",
    "vnd.oasis.opendocument.presentation-template": "otp",
    "vnd.oasis.opendocument.spreadsheet": "ods",
    "vnd.oasis.opendocument.spreadsheet-template": "ots",
    "vnd.oasis.opendocument.text": "odt",
    "vnd.oasis.opendocument.text-master": [
      "odm",
      "otm"
    ],
    "vnd.oasis.opendocument.text-template": "ott",
    "vnd.oasis.opendocument.text-web": "oth",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
    "vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
    "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
    "vnd.openxmlformats-officedocument.presentationml.template": "potx",
    "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
    "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
    "vnd.smaf": "mmf",
    "vnd.stardivision.calc": "sdc",
    "vnd.stardivision.chart": "sds",
    "vnd.stardivision.draw": "sda",
    "vnd.stardivision.impress": "sdd",
    "vnd.stardivision.math": [
      "sdf",
      "smf"
    ],
    "vnd.stardivision.writer": [
      "sdw",
      "vor"
    ],
    "vnd.stardivision.writer-global": "sgl",
    "vnd.sun.xml.calc": "sxc",
    "vnd.sun.xml.calc.template": "stc",
    "vnd.sun.xml.draw": "sxd",
    "vnd.sun.xml.draw.template": "std",
    "vnd.sun.xml.impress": "sxi",
    "vnd.sun.xml.impress.template": "sti",
    "vnd.sun.xml.math": "sxm",
    "vnd.sun.xml.writer": "sxw",
    "vnd.sun.xml.writer.global": "sxg",
    "vnd.sun.xml.writer.template": "stw",
    "vnd.symbian.install": [
      "sis",
      "sisx"
    ],
    "vnd.visio": [
      "vsd",
      "vst",
      "vss",
      "vsw",
      "vsdx",
      "vssx",
      "vstx",
      "vssm",
      "vstm"
    ],
    "vnd.wap.wbxml": "wbxml",
    "vnd.wap.wmlc": "wmlc",
    "vnd.wap.wmlscriptc": "wmlsc",
    "vnd.wordperfect": "wpd",
    "vnd.wordperfect5.1": "wp5",
    "x-123": "wk",
    "x-7z-compressed": "7z",
    "x-abiword": "abw",
    "x-apple-diskimage": "dmg",
    "x-bcpio": "bcpio",
    "x-bittorrent": "torrent",
    "x-cbr": [
      "cbr",
      "cba",
      "cbt",
      "cb7"
    ],
    "x-cbz": "cbz",
    "x-cdf": [
      "cdf",
      "cda"
    ],
    "x-cdlink": "vcd",
    "x-chess-pgn": "pgn",
    "x-cpio": "cpio",
    "x-csh": "csh",
    "x-director": [
      "dir",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa"
    ],
    "x-dms": "dms",
    "x-doom": "wad",
    "x-dvi": "dvi",
    "x-httpd-eruby": "rhtml",
    "x-font": "pcf.Z",
    "x-freemind": "mm",
    "x-gnumeric": "gnumeric",
    "x-go-sgf": "sgf",
    "x-graphing-calculator": "gcf",
    "x-gtar": [
      "gtar",
      "taz"
    ],
    "x-hdf": "hdf",
    "x-httpd-php": [
      "phtml",
      "pht",
      "php"
    ],
    "x-httpd-php-source": "phps",
    "x-httpd-php3": "php3",
    "x-httpd-php3-preprocessed": "php3p",
    "x-httpd-php4": "php4",
    "x-httpd-php5": "php5",
    "x-ica": "ica",
    "x-info": "info",
    "x-internet-signup": [
      "ins",
      "isp"
    ],
    "x-iphone": "iii",
    "x-iso9660-image": "iso",
    "x-java-jnlp-file": "jnlp",
    "x-jmol": "jmz",
    "x-killustrator": "kil",
    "x-latex": "latex",
    "x-lyx": "lyx",
    "x-lzx": "lzx",
    "x-maker": [
      "frm",
      "fb",
      "fbdoc"
    ],
    "x-ms-wmd": "wmd",
    "x-msdos-program": [
      "com",
      "exe",
      "bat",
      "dll"
    ],
    "x-netcdf": [
      "nc"
    ],
    "x-ns-proxy-autoconfig": [
      "pac",
      "dat"
    ],
    "x-nwc": "nwc",
    "x-object": "o",
    "x-oz-application": "oza",
    "x-pkcs7-certreqresp": "p7r",
    "x-python-code": [
      "pyc",
      "pyo"
    ],
    "x-qgis": [
      "qgs",
      "shp",
      "shx"
    ],
    "x-quicktimeplayer": "qtl",
    "x-redhat-package-manager": [
      "rpm",
      "rpa"
    ],
    "x-ruby": "rb",
    "x-sh": "sh",
    "x-shar": "shar",
    "x-shockwave-flash": [
      "swf",
      "swfl"
    ],
    "x-silverlight": "scr",
    "x-stuffit": "sit",
    "x-sv4cpio": "sv4cpio",
    "x-sv4crc": "sv4crc",
    "x-tar": "tar",
    "x-tex-gf": "gf",
    "x-tex-pk": "pk",
    "x-texinfo": [
      "texinfo",
      "texi"
    ],
    "x-trash": [
      "~",
      "%",
      "bak",
      "old",
      "sik"
    ],
    "x-ustar": "ustar",
    "x-wais-source": "src",
    "x-wingz": "wz",
    "x-x509-ca-cert": [
      "crt",
      "der",
      "cer"
    ],
    "x-xcf": "xcf",
    "x-xfig": "fig",
    "x-xpinstall": "xpi",
    "applixware": "aw",
    "atomsvc+xml": "atomsvc",
    "ccxml+xml": "ccxml",
    "cdmi-capability": "cdmia",
    "cdmi-container": "cdmic",
    "cdmi-domain": "cdmid",
    "cdmi-object": "cdmio",
    "cdmi-queue": "cdmiq",
    "docbook+xml": "dbk",
    "dssc+der": "dssc",
    "dssc+xml": "xdssc",
    "emma+xml": "emma",
    "epub+zip": "epub",
    "exi": "exi",
    "font-tdpfr": "pfr",
    "gml+xml": "gml",
    "gpx+xml": "gpx",
    "gxf": "gxf",
    "hyperstudio": "stk",
    "inkml+xml": [
      "ink",
      "inkml"
    ],
    "ipfix": "ipfix",
    "jsonml+json": "jsonml",
    "lost+xml": "lostxml",
    "mads+xml": "mads",
    "marc": "mrc",
    "marcxml+xml": "mrcx",
    "mathml+xml": [
      "mathml",
      "mml"
    ],
    "mbox": "mbox",
    "mediaservercontrol+xml": "mscml",
    "metalink+xml": "metalink",
    "metalink4+xml": "meta4",
    "mets+xml": "mets",
    "mods+xml": "mods",
    "mp21": [
      "m21",
      "mp21"
    ],
    "mp4": "mp4s",
    "oebps-package+xml": "opf",
    "omdoc+xml": "omdoc",
    "onenote": [
      "onetoc",
      "onetoc2",
      "onetmp",
      "onepkg"
    ],
    "oxps": "oxps",
    "patch-ops-error+xml": "xer",
    "pgp-encrypted": "pgp",
    "pkcs10": "p10",
    "pkcs7-mime": [
      "p7m",
      "p7c"
    ],
    "pkcs7-signature": "p7s",
    "pkcs8": "p8",
    "pkix-attr-cert": "ac",
    "pkix-crl": "crl",
    "pkix-pkipath": "pkipath",
    "pkixcmp": "pki",
    "pls+xml": "pls",
    "prs.cww": "cww",
    "pskc+xml": "pskcxml",
    "reginfo+xml": "rif",
    "relax-ng-compact-syntax": "rnc",
    "resource-lists+xml": "rl",
    "resource-lists-diff+xml": "rld",
    "rls-services+xml": "rs",
    "rpki-ghostbusters": "gbr",
    "rpki-manifest": "mft",
    "rpki-roa": "roa",
    "rsd+xml": "rsd",
    "sbml+xml": "sbml",
    "scvp-cv-request": "scq",
    "scvp-cv-response": "scs",
    "scvp-vp-request": "spq",
    "scvp-vp-response": "spp",
    "sdp": "sdp",
    "set-payment-initiation": "setpay",
    "set-registration-initiation": "setreg",
    "shf+xml": "shf",
    "sparql-query": "rq",
    "sparql-results+xml": "srx",
    "srgs": "gram",
    "srgs+xml": "grxml",
    "sru+xml": "sru",
    "ssdl+xml": "ssdl",
    "ssml+xml": "ssml",
    "tei+xml": [
      "tei",
      "teicorpus"
    ],
    "thraud+xml": "tfi",
    "timestamped-data": "tsd",
    "vnd.3gpp.pic-bw-large": "plb",
    "vnd.3gpp.pic-bw-small": "psb",
    "vnd.3gpp.pic-bw-var": "pvb",
    "vnd.3gpp2.tcap": "tcap",
    "vnd.3m.post-it-notes": "pwn",
    "vnd.accpac.simply.aso": "aso",
    "vnd.accpac.simply.imp": "imp",
    "vnd.acucobol": "acu",
    "vnd.acucorp": [
      "atc",
      "acutc"
    ],
    "vnd.adobe.air-application-installer-package+zip": "air",
    "vnd.adobe.formscentral.fcdt": "fcdt",
    "vnd.adobe.fxp": [
      "fxp",
      "fxpl"
    ],
    "vnd.adobe.xdp+xml": "xdp",
    "vnd.adobe.xfdf": "xfdf",
    "vnd.ahead.space": "ahead",
    "vnd.airzip.filesecure.azf": "azf",
    "vnd.airzip.filesecure.azs": "azs",
    "vnd.amazon.ebook": "azw",
    "vnd.americandynamics.acc": "acc",
    "vnd.amiga.ami": "ami",
    "vnd.anser-web-certificate-issue-initiation": "cii",
    "vnd.anser-web-funds-transfer-initiation": "fti",
    "vnd.antix.game-component": "atx",
    "vnd.apple.installer+xml": "mpkg",
    "vnd.apple.mpegurl": "m3u8",
    "vnd.aristanetworks.swi": "swi",
    "vnd.astraea-software.iota": "iota",
    "vnd.audiograph": "aep",
    "vnd.blueice.multipass": "mpm",
    "vnd.bmi": "bmi",
    "vnd.businessobjects": "rep",
    "vnd.chemdraw+xml": "cdxml",
    "vnd.chipnuts.karaoke-mmd": "mmd",
    "vnd.claymore": "cla",
    "vnd.cloanto.rp9": "rp9",
    "vnd.clonk.c4group": [
      "c4g",
      "c4d",
      "c4f",
      "c4p",
      "c4u"
    ],
    "vnd.cluetrust.cartomobile-config": "c11amc",
    "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
    "vnd.commonspace": "csp",
    "vnd.contact.cmsg": "cdbcmsg",
    "vnd.cosmocaller": "cmc",
    "vnd.crick.clicker": "clkx",
    "vnd.crick.clicker.keyboard": "clkk",
    "vnd.crick.clicker.palette": "clkp",
    "vnd.crick.clicker.template": "clkt",
    "vnd.crick.clicker.wordbank": "clkw",
    "vnd.criticaltools.wbs+xml": "wbs",
    "vnd.ctc-posml": "pml",
    "vnd.cups-ppd": "ppd",
    "vnd.curl.car": "car",
    "vnd.curl.pcurl": "pcurl",
    "vnd.dart": "dart",
    "vnd.data-vision.rdz": "rdz",
    "vnd.dece.data": [
      "uvf",
      "uvvf",
      "uvd",
      "uvvd"
    ],
    "vnd.dece.ttml+xml": [
      "uvt",
      "uvvt"
    ],
    "vnd.dece.unspecified": [
      "uvx",
      "uvvx"
    ],
    "vnd.dece.zip": [
      "uvz",
      "uvvz"
    ],
    "vnd.denovo.fcselayout-link": "fe_launch",
    "vnd.dna": "dna",
    "vnd.dolby.mlp": "mlp",
    "vnd.dpgraph": "dpg",
    "vnd.dreamfactory": "dfac",
    "vnd.ds-keypoint": "kpxx",
    "vnd.dvb.ait": "ait",
    "vnd.dvb.service": "svc",
    "vnd.dynageo": "geo",
    "vnd.ecowin.chart": "mag",
    "vnd.enliven": "nml",
    "vnd.epson.esf": "esf",
    "vnd.epson.msf": "msf",
    "vnd.epson.quickanime": "qam",
    "vnd.epson.salt": "slt",
    "vnd.epson.ssf": "ssf",
    "vnd.eszigno3+xml": [
      "es3",
      "et3"
    ],
    "vnd.ezpix-album": "ez2",
    "vnd.ezpix-package": "ez3",
    "vnd.fdf": "fdf",
    "vnd.fdsn.mseed": "mseed",
    "vnd.fdsn.seed": [
      "seed",
      "dataless"
    ],
    "vnd.flographit": "gph",
    "vnd.fluxtime.clip": "ftc",
    "vnd.framemaker": [
      "fm",
      "frame",
      "maker",
      "book"
    ],
    "vnd.frogans.fnc": "fnc",
    "vnd.frogans.ltf": "ltf",
    "vnd.fsc.weblaunch": "fsc",
    "vnd.fujitsu.oasys": "oas",
    "vnd.fujitsu.oasys2": "oa2",
    "vnd.fujitsu.oasys3": "oa3",
    "vnd.fujitsu.oasysgp": "fg5",
    "vnd.fujitsu.oasysprs": "bh2",
    "vnd.fujixerox.ddd": "ddd",
    "vnd.fujixerox.docuworks": "xdw",
    "vnd.fujixerox.docuworks.binder": "xbd",
    "vnd.fuzzysheet": "fzs",
    "vnd.genomatix.tuxedo": "txd",
    "vnd.geogebra.file": "ggb",
    "vnd.geogebra.tool": "ggt",
    "vnd.geometry-explorer": [
      "gex",
      "gre"
    ],
    "vnd.geonext": "gxt",
    "vnd.geoplan": "g2w",
    "vnd.geospace": "g3w",
    "vnd.gmx": "gmx",
    "vnd.grafeq": [
      "gqf",
      "gqs"
    ],
    "vnd.groove-account": "gac",
    "vnd.groove-help": "ghf",
    "vnd.groove-identity-message": "gim",
    "vnd.groove-injector": "grv",
    "vnd.groove-tool-message": "gtm",
    "vnd.groove-tool-template": "tpl",
    "vnd.groove-vcard": "vcg",
    "vnd.hal+xml": "hal",
    "vnd.handheld-entertainment+xml": "zmm",
    "vnd.hbci": "hbci",
    "vnd.hhe.lesson-player": "les",
    "vnd.hp-hpgl": "hpgl",
    "vnd.hp-hpid": "hpid",
    "vnd.hp-hps": "hps",
    "vnd.hp-jlyt": "jlt",
    "vnd.hp-pcl": "pcl",
    "vnd.hp-pclxl": "pclxl",
    "vnd.hydrostatix.sof-data": "sfd-hdstx",
    "vnd.ibm.minipay": "mpy",
    "vnd.ibm.modcap": [
      "afp",
      "listafp",
      "list3820"
    ],
    "vnd.ibm.rights-management": "irm",
    "vnd.ibm.secure-container": "sc",
    "vnd.iccprofile": [
      "icc",
      "icm"
    ],
    "vnd.igloader": "igl",
    "vnd.immervision-ivp": "ivp",
    "vnd.immervision-ivu": "ivu",
    "vnd.insors.igm": "igm",
    "vnd.intercon.formnet": [
      "xpw",
      "xpx"
    ],
    "vnd.intergeo": "i2g",
    "vnd.intu.qbo": "qbo",
    "vnd.intu.qfx": "qfx",
    "vnd.ipunplugged.rcprofile": "rcprofile",
    "vnd.irepository.package+xml": "irp",
    "vnd.is-xpr": "xpr",
    "vnd.isac.fcs": "fcs",
    "vnd.jam": "jam",
    "vnd.jcp.javame.midlet-rms": "rms",
    "vnd.jisp": "jisp",
    "vnd.joost.joda-archive": "joda",
    "vnd.kahootz": [
      "ktz",
      "ktr"
    ],
    "vnd.kde.karbon": "karbon",
    "vnd.kde.kchart": "chrt",
    "vnd.kde.kformula": "kfo",
    "vnd.kde.kivio": "flw",
    "vnd.kde.kontour": "kon",
    "vnd.kde.kpresenter": [
      "kpr",
      "kpt"
    ],
    "vnd.kde.kspread": "ksp",
    "vnd.kde.kword": [
      "kwd",
      "kwt"
    ],
    "vnd.kenameaapp": "htke",
    "vnd.kidspiration": "kia",
    "vnd.kinar": [
      "kne",
      "knp"
    ],
    "vnd.koan": [
      "skp",
      "skd",
      "skt",
      "skm"
    ],
    "vnd.kodak-descriptor": "sse",
    "vnd.las.las+xml": "lasxml",
    "vnd.llamagraphics.life-balance.desktop": "lbd",
    "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
    "vnd.lotus-1-2-3": "123",
    "vnd.lotus-approach": "apr",
    "vnd.lotus-freelance": "pre",
    "vnd.lotus-notes": "nsf",
    "vnd.lotus-organizer": "org",
    "vnd.lotus-screencam": "scm",
    "vnd.lotus-wordpro": "lwp",
    "vnd.macports.portpkg": "portpkg",
    "vnd.mcd": "mcd",
    "vnd.medcalcdata": "mc1",
    "vnd.mediastation.cdkey": "cdkey",
    "vnd.mfer": "mwf",
    "vnd.mfmp": "mfm",
    "vnd.micrografx.flo": "flo",
    "vnd.micrografx.igx": "igx",
    "vnd.mif": "mif",
    "vnd.mobius.daf": "daf",
    "vnd.mobius.dis": "dis",
    "vnd.mobius.mbk": "mbk",
    "vnd.mobius.mqy": "mqy",
    "vnd.mobius.msl": "msl",
    "vnd.mobius.plc": "plc",
    "vnd.mobius.txf": "txf",
    "vnd.mophun.application": "mpn",
    "vnd.mophun.certificate": "mpc",
    "vnd.ms-artgalry": "cil",
    "vnd.ms-cab-compressed": "cab",
    "vnd.ms-excel.addin.macroenabled.12": "xlam",
    "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
    "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
    "vnd.ms-excel.template.macroenabled.12": "xltm",
    "vnd.ms-fontobject": "eot",
    "vnd.ms-htmlhelp": "chm",
    "vnd.ms-ims": "ims",
    "vnd.ms-lrm": "lrm",
    "vnd.ms-officetheme": "thmx",
    "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
    "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
    "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
    "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
    "vnd.ms-powerpoint.template.macroenabled.12": "potm",
    "vnd.ms-project": [
      "mpp",
      "mpt"
    ],
    "vnd.ms-word.document.macroenabled.12": "docm",
    "vnd.ms-word.template.macroenabled.12": "dotm",
    "vnd.ms-works": [
      "wps",
      "wks",
      "wcm",
      "wdb"
    ],
    "vnd.ms-wpl": "wpl",
    "vnd.ms-xpsdocument": "xps",
    "vnd.mseq": "mseq",
    "vnd.musician": "mus",
    "vnd.muvee.style": "msty",
    "vnd.mynfc": "taglet",
    "vnd.neurolanguage.nlu": "nlu",
    "vnd.nitf": [
      "ntf",
      "nitf"
    ],
    "vnd.noblenet-directory": "nnd",
    "vnd.noblenet-sealer": "nns",
    "vnd.noblenet-web": "nnw",
    "vnd.nokia.n-gage.data": "ngdat",
    "vnd.nokia.n-gage.symbian.install": "n-gage",
    "vnd.nokia.radio-preset": "rpst",
    "vnd.nokia.radio-presets": "rpss",
    "vnd.novadigm.edm": "edm",
    "vnd.novadigm.edx": "edx",
    "vnd.novadigm.ext": "ext",
    "vnd.oasis.opendocument.chart-template": "otc",
    "vnd.oasis.opendocument.formula-template": "odft",
    "vnd.oasis.opendocument.image-template": "oti",
    "vnd.olpc-sugar": "xo",
    "vnd.oma.dd2+xml": "dd2",
    "vnd.openofficeorg.extension": "oxt",
    "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
    "vnd.osgeo.mapguide.package": "mgp",
    "vnd.osgi.dp": "dp",
    "vnd.osgi.subsystem": "esa",
    "vnd.palm": [
      "pdb",
      "pqa",
      "oprc"
    ],
    "vnd.pawaafile": "paw",
    "vnd.pg.format": "str",
    "vnd.pg.osasli": "ei6",
    "vnd.picsel": "efif",
    "vnd.pmi.widget": "wg",
    "vnd.pocketlearn": "plf",
    "vnd.powerbuilder6": "pbd",
    "vnd.previewsystems.box": "box",
    "vnd.proteus.magazine": "mgz",
    "vnd.publishare-delta-tree": "qps",
    "vnd.pvi.ptid1": "ptid",
    "vnd.quark.quarkxpress": [
      "qxd",
      "qxt",
      "qwd",
      "qwt",
      "qxl",
      "qxb"
    ],
    "vnd.realvnc.bed": "bed",
    "vnd.recordare.musicxml": "mxl",
    "vnd.recordare.musicxml+xml": "musicxml",
    "vnd.rig.cryptonote": "cryptonote",
    "vnd.rn-realmedia": "rm",
    "vnd.rn-realmedia-vbr": "rmvb",
    "vnd.route66.link66+xml": "link66",
    "vnd.sailingtracker.track": "st",
    "vnd.seemail": "see",
    "vnd.sema": "sema",
    "vnd.semd": "semd",
    "vnd.semf": "semf",
    "vnd.shana.informed.formdata": "ifm",
    "vnd.shana.informed.formtemplate": "itp",
    "vnd.shana.informed.interchange": "iif",
    "vnd.shana.informed.package": "ipk",
    "vnd.simtech-mindmapper": [
      "twd",
      "twds"
    ],
    "vnd.smart.teacher": "teacher",
    "vnd.solent.sdkm+xml": [
      "sdkm",
      "sdkd"
    ],
    "vnd.spotfire.dxp": "dxp",
    "vnd.spotfire.sfs": "sfs",
    "vnd.stepmania.package": "smzip",
    "vnd.stepmania.stepchart": "sm",
    "vnd.sus-calendar": [
      "sus",
      "susp"
    ],
    "vnd.svd": "svd",
    "vnd.syncml+xml": "xsm",
    "vnd.syncml.dm+wbxml": "bdm",
    "vnd.syncml.dm+xml": "xdm",
    "vnd.tao.intent-module-archive": "tao",
    "vnd.tcpdump.pcap": [
      "pcap",
      "cap",
      "dmp"
    ],
    "vnd.tmobile-livetv": "tmo",
    "vnd.trid.tpt": "tpt",
    "vnd.triscape.mxs": "mxs",
    "vnd.trueapp": "tra",
    "vnd.ufdl": [
      "ufd",
      "ufdl"
    ],
    "vnd.uiq.theme": "utz",
    "vnd.umajin": "umj",
    "vnd.unity": "unityweb",
    "vnd.uoml+xml": "uoml",
    "vnd.vcx": "vcx",
    "vnd.visionary": "vis",
    "vnd.vsf": "vsf",
    "vnd.webturbo": "wtb",
    "vnd.wolfram.player": "nbp",
    "vnd.wqd": "wqd",
    "vnd.wt.stf": "stf",
    "vnd.xara": "xar",
    "vnd.xfdl": "xfdl",
    "vnd.yamaha.hv-dic": "hvd",
    "vnd.yamaha.hv-script": "hvs",
    "vnd.yamaha.hv-voice": "hvp",
    "vnd.yamaha.openscoreformat": "osf",
    "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
    "vnd.yamaha.smaf-audio": "saf",
    "vnd.yamaha.smaf-phrase": "spf",
    "vnd.yellowriver-custom-menu": "cmp",
    "vnd.zul": [
      "zir",
      "zirz"
    ],
    "vnd.zzazz.deck+xml": "zaz",
    "voicexml+xml": "vxml",
    "widget": "wgt",
    "winhlp": "hlp",
    "wsdl+xml": "wsdl",
    "wspolicy+xml": "wspolicy",
    "x-ace-compressed": "ace",
    "x-authorware-bin": [
      "aab",
      "x32",
      "u32",
      "vox"
    ],
    "x-authorware-map": "aam",
    "x-authorware-seg": "aas",
    "x-blorb": [
      "blb",
      "blorb"
    ],
    "x-bzip": "bz",
    "x-bzip2": [
      "bz2",
      "boz"
    ],
    "x-cfs-compressed": "cfs",
    "x-chat": "chat",
    "x-conference": "nsc",
    "x-dgc-compressed": "dgc",
    "x-dtbncx+xml": "ncx",
    "x-dtbook+xml": "dtb",
    "x-dtbresource+xml": "res",
    "x-eva": "eva",
    "x-font-bdf": "bdf",
    "x-font-ghostscript": "gsf",
    "x-font-linux-psf": "psf",
    "x-font-pcf": "pcf",
    "x-font-snf": "snf",
    "x-font-ttf": [
      "ttf",
      "ttc"
    ],
    "x-font-type1": [
      "pfa",
      "pfb",
      "pfm",
      "afm"
    ],
    "x-freearc": "arc",
    "x-gca-compressed": "gca",
    "x-glulx": "ulx",
    "x-gramps-xml": "gramps",
    "x-install-instructions": "install",
    "x-lzh-compressed": [
      "lzh",
      "lha"
    ],
    "x-mie": "mie",
    "x-mobipocket-ebook": [
      "prc",
      "mobi"
    ],
    "x-ms-application": "application",
    "x-ms-shortcut": "lnk",
    "x-ms-xbap": "xbap",
    "x-msbinder": "obd",
    "x-mscardfile": "crd",
    "x-msclip": "clp",
    "application/x-ms-installer": "msi",
    "x-msmediaview": [
      "mvb",
      "m13",
      "m14"
    ],
    "x-msmetafile": [
      "wmf",
      "wmz",
      "emf",
      "emz"
    ],
    "x-msmoney": "mny",
    "x-mspublisher": "pub",
    "x-msschedule": "scd",
    "x-msterminal": "trm",
    "x-mswrite": "wri",
    "x-nzb": "nzb",
    "x-pkcs12": [
      "p12",
      "pfx"
    ],
    "x-pkcs7-certificates": [
      "p7b",
      "spc"
    ],
    "x-research-info-systems": "ris",
    "x-silverlight-app": "xap",
    "x-sql": "sql",
    "x-stuffitx": "sitx",
    "x-subrip": "srt",
    "x-t3vm-image": "t3",
    "x-tex-tfm": "tfm",
    "x-tgif": "obj",
    "x-xliff+xml": "xlf",
    "x-xz": "xz",
    "x-zmachine": [
      "z1",
      "z2",
      "z3",
      "z4",
      "z5",
      "z6",
      "z7",
      "z8"
    ],
    "xaml+xml": "xaml",
    "xcap-diff+xml": "xdf",
    "xenc+xml": "xenc",
    "xml-dtd": "dtd",
    "xop+xml": "xop",
    "xproc+xml": "xpl",
    "xslt+xml": "xslt",
    "xv+xml": [
      "mxml",
      "xhvml",
      "xvml",
      "xvm"
    ],
    "yang": "yang",
    "yin+xml": "yin",
    "envoy": "evy",
    "fractals": "fif",
    "internet-property-stream": "acx",
    "olescript": "axs",
    "vnd.ms-outlook": "msg",
    "vnd.ms-pkicertstore": "sst",
    "x-compress": "z",
    "x-perfmon": [
      "pma",
      "pmc",
      "pmr",
      "pmw"
    ],
    "ynd.ms-pkipko": "pko",
    "gzip": [
      "gz",
      "tgz"
    ],
    "smil+xml": [
      "smi",
      "smil"
    ],
    "vnd.debian.binary-package": [
      "deb",
      "udeb"
    ],
    "vnd.hzn-3d-crossword": "x3d",
    "vnd.sqlite3": [
      "db",
      "sqlite",
      "sqlite3",
      "db-wal",
      "sqlite-wal",
      "db-shm",
      "sqlite-shm"
    ],
    "vnd.wap.sic": "sic",
    "vnd.wap.slc": "slc",
    "x-krita": [
      "kra",
      "krz"
    ],
    "x-perl": [
      "pm",
      "pl"
    ],
    "yaml": [
      "yaml",
      "yml"
    ]
  },
  "audio": {
    "amr": "amr",
    "amr-wb": "awb",
    "annodex": "axa",
    "basic": [
      "au",
      "snd"
    ],
    "flac": "flac",
    "midi": [
      "mid",
      "midi",
      "kar",
      "rmi"
    ],
    "mpeg": [
      "mpga",
      "mpega",
      "mp3",
      "m4a",
      "mp2a",
      "m2a",
      "m3a"
    ],
    "mpegurl": "m3u",
    "ogg": [
      "oga",
      "ogg",
      "spx"
    ],
    "prs.sid": "sid",
    "x-aiff": "aifc",
    "x-gsm": "gsm",
    "x-ms-wma": "wma",
    "x-ms-wax": "wax",
    "x-pn-realaudio": "ram",
    "x-realaudio": "ra",
    "x-sd2": "sd2",
    "adpcm": "adp",
    "mp4": "mp4a",
    "s3m": "s3m",
    "silk": "sil",
    "vnd.dece.audio": [
      "uva",
      "uvva"
    ],
    "vnd.digital-winds": "eol",
    "vnd.dra": "dra",
    "vnd.dts": "dts",
    "vnd.dts.hd": "dtshd",
    "vnd.lucent.voice": "lvp",
    "vnd.ms-playready.media.pya": "pya",
    "vnd.nuera.ecelp4800": "ecelp4800",
    "vnd.nuera.ecelp7470": "ecelp7470",
    "vnd.nuera.ecelp9600": "ecelp9600",
    "vnd.rip": "rip",
    "webm": "weba",
    "x-caf": "caf",
    "x-matroska": "mka",
    "x-pn-realaudio-plugin": "rmp",
    "xm": "xm",
    "aac": "aac",
    "aiff": [
      "aiff",
      "aif",
      "aff"
    ],
    "opus": "opus",
    "wav": "wav"
  },
  "chemical": {
    "x-alchemy": "alc",
    "x-cache": [
      "cac",
      "cache"
    ],
    "x-cache-csf": "csf",
    "x-cactvs-binary": [
      "cbin",
      "cascii",
      "ctab"
    ],
    "x-cdx": "cdx",
    "x-chem3d": "c3d",
    "x-cif": "cif",
    "x-cmdf": "cmdf",
    "x-cml": "cml",
    "x-compass": "cpa",
    "x-crossfire": "bsd",
    "x-csml": [
      "csml",
      "csm"
    ],
    "x-ctx": "ctx",
    "x-cxf": [
      "cxf",
      "cef"
    ],
    "x-embl-dl-nucleotide": [
      "emb",
      "embl"
    ],
    "x-gamess-input": [
      "inp",
      "gam",
      "gamin"
    ],
    "x-gaussian-checkpoint": [
      "fch",
      "fchk"
    ],
    "x-gaussian-cube": "cub",
    "x-gaussian-input": [
      "gau",
      "gjc",
      "gjf"
    ],
    "x-gaussian-log": "gal",
    "x-gcg8-sequence": "gcg",
    "x-genbank": "gen",
    "x-hin": "hin",
    "x-isostar": [
      "istr",
      "ist"
    ],
    "x-jcamp-dx": [
      "jdx",
      "dx"
    ],
    "x-kinemage": "kin",
    "x-macmolecule": "mcm",
    "x-macromodel-input": "mmod",
    "x-mdl-molfile": "mol",
    "x-mdl-rdfile": "rd",
    "x-mdl-rxnfile": "rxn",
    "x-mdl-sdfile": "sd",
    "x-mdl-tgf": "tgf",
    "x-mmcif": "mcif",
    "x-mol2": "mol2",
    "x-molconn-Z": "b",
    "x-mopac-graph": "gpt",
    "x-mopac-input": [
      "mop",
      "mopcrt",
      "zmt"
    ],
    "x-mopac-out": "moo",
    "x-ncbi-asn1": "asn",
    "x-ncbi-asn1-ascii": [
      "prt",
      "ent"
    ],
    "x-ncbi-asn1-binary": "val",
    "x-rosdal": "ros",
    "x-swissprot": "sw",
    "x-vamas-iso14976": "vms",
    "x-vmd": "vmd",
    "x-xtel": "xtel",
    "x-xyz": "xyz"
  },
  "font": {
    "otf": "otf",
    "woff": "woff",
    "woff2": "woff2"
  },
  "image": {
    "gif": "gif",
    "ief": "ief",
    "jpeg": [
      "jpeg",
      "jpg",
      "jpe",
      "jfif",
      "jfif-tbnl",
      "jif"
    ],
    "pcx": "pcx",
    "png": "png",
    "svg+xml": [
      "svg",
      "svgz"
    ],
    "tiff": [
      "tiff",
      "tif"
    ],
    "vnd.djvu": [
      "djvu",
      "djv"
    ],
    "vnd.wap.wbmp": "wbmp",
    "x-canon-cr2": "cr2",
    "x-canon-crw": "crw",
    "x-cmu-raster": "ras",
    "x-coreldraw": "cdr",
    "x-coreldrawpattern": "pat",
    "x-coreldrawtemplate": "cdt",
    "x-corelphotopaint": "cpt",
    "x-epson-erf": "erf",
    "x-icon": "ico",
    "x-jg": "art",
    "x-jng": "jng",
    "x-nikon-nef": "nef",
    "x-olympus-orf": "orf",
    "x-portable-anymap": "pnm",
    "x-portable-bitmap": "pbm",
    "x-portable-graymap": "pgm",
    "x-portable-pixmap": "ppm",
    "x-rgb": "rgb",
    "x-xbitmap": "xbm",
    "x-xpixmap": "xpm",
    "x-xwindowdump": "xwd",
    "bmp": "bmp",
    "cgm": "cgm",
    "g3fax": "g3",
    "ktx": "ktx",
    "prs.btif": "btif",
    "sgi": "sgi",
    "vnd.dece.graphic": [
      "uvi",
      "uvvi",
      "uvg",
      "uvvg"
    ],
    "vnd.dwg": "dwg",
    "vnd.dxf": "dxf",
    "vnd.fastbidsheet": "fbs",
    "vnd.fpx": "fpx",
    "vnd.fst": "fst",
    "vnd.fujixerox.edmics-mmr": "mmr",
    "vnd.fujixerox.edmics-rlc": "rlc",
    "vnd.ms-modi": "mdi",
    "vnd.ms-photo": "wdp",
    "vnd.net-fpx": "npx",
    "vnd.xiff": "xif",
    "webp": "webp",
    "x-3ds": "3ds",
    "x-cmx": "cmx",
    "x-freehand": [
      "fh",
      "fhc",
      "fh4",
      "fh5",
      "fh7"
    ],
    "x-pict": [
      "pic",
      "pct"
    ],
    "x-tga": "tga",
    "cis-cod": "cod",
    "avif": "avifs",
    "heic": [
      "heif",
      "heic"
    ],
    "pjpeg": [
      "pjpg"
    ],
    "vnd.adobe.photoshop": "psd",
    "x-adobe-dng": "dng",
    "x-fuji-raf": "raf",
    "x-icns": "icns",
    "x-kodak-dcr": "dcr",
    "x-kodak-k25": "k25",
    "x-kodak-kdc": "kdc",
    "x-minolta-mrw": "mrw",
    "x-panasonic-raw": [
      "raw",
      "rw2",
      "rwl"
    ],
    "x-pentax-pef": [
      "pef",
      "ptx"
    ],
    "x-sigma-x3f": "x3f",
    "x-sony-arw": "arw",
    "x-sony-sr2": "sr2",
    "x-sony-srf": "srf"
  },
  "message": {
    "rfc822": [
      "eml",
      "mime",
      "mht",
      "mhtml",
      "nws"
    ]
  },
  "model": {
    "iges": [
      "igs",
      "iges"
    ],
    "mesh": [
      "msh",
      "mesh",
      "silo"
    ],
    "vrml": [
      "wrl",
      "vrml"
    ],
    "x3d+vrml": [
      "x3dv",
      "x3dvz"
    ],
    "x3d+xml": "x3dz",
    "x3d+binary": [
      "x3db",
      "x3dbz"
    ],
    "vnd.collada+xml": "dae",
    "vnd.dwf": "dwf",
    "vnd.gdl": "gdl",
    "vnd.gtw": "gtw",
    "vnd.mts": "mts",
    "vnd.usdz+zip": "usdz",
    "vnd.vtu": "vtu"
  },
  "text": {
    "cache-manifest": [
      "manifest",
      "appcache"
    ],
    "calendar": [
      "ics",
      "icz",
      "ifb"
    ],
    "css": "css",
    "csv": "csv",
    "h323": "323",
    "html": [
      "html",
      "htm",
      "shtml",
      "stm"
    ],
    "iuls": "uls",
    "plain": [
      "txt",
      "text",
      "brf",
      "conf",
      "def",
      "list",
      "log",
      "in",
      "bas",
      "diff",
      "ksh"
    ],
    "richtext": "rtx",
    "scriptlet": [
      "sct",
      "wsc"
    ],
    "texmacs": "tm",
    "tab-separated-values": "tsv",
    "vnd.sun.j2me.app-descriptor": "jad",
    "vnd.wap.wml": "wml",
    "vnd.wap.wmlscript": "wmls",
    "x-bibtex": "bib",
    "x-boo": "boo",
    "x-c++hdr": [
      "h++",
      "hpp",
      "hxx",
      "hh"
    ],
    "x-c++src": [
      "c++",
      "cpp",
      "cxx",
      "cc"
    ],
    "x-component": "htc",
    "x-dsrc": "d",
    "x-diff": "patch",
    "x-haskell": "hs",
    "x-java": "java",
    "x-literate-haskell": "lhs",
    "x-moc": "moc",
    "x-pascal": [
      "p",
      "pas",
      "pp",
      "inc"
    ],
    "x-pcs-gcd": "gcd",
    "x-python": "py",
    "x-scala": "scala",
    "x-setext": "etx",
    "x-tcl": [
      "tcl",
      "tk"
    ],
    "x-tex": [
      "tex",
      "ltx",
      "sty",
      "cls"
    ],
    "x-vcalendar": "vcs",
    "x-vcard": "vcf",
    "n3": "n3",
    "prs.lines.tag": "dsc",
    "sgml": [
      "sgml",
      "sgm"
    ],
    "troff": [
      "t",
      "tr",
      "roff",
      "man",
      "me",
      "ms"
    ],
    "turtle": "ttl",
    "uri-list": [
      "uri",
      "uris",
      "urls"
    ],
    "vcard": "vcard",
    "vnd.curl": "curl",
    "vnd.curl.dcurl": "dcurl",
    "vnd.curl.scurl": "scurl",
    "vnd.curl.mcurl": "mcurl",
    "vnd.dvb.subtitle": "sub",
    "vnd.fly": "fly",
    "vnd.fmi.flexstor": "flx",
    "vnd.graphviz": "gv",
    "vnd.in3d.3dml": "3dml",
    "vnd.in3d.spot": "spot",
    "x-asm": [
      "s",
      "asm"
    ],
    "x-c": [
      "c",
      "h",
      "dic"
    ],
    "x-fortran": [
      "f",
      "for",
      "f77",
      "f90"
    ],
    "x-opml": "opml",
    "x-nfo": "nfo",
    "x-sfv": "sfv",
    "x-uuencode": "uu",
    "webviewhtml": "htt",
    "javascript": "js",
    "json": "json",
    "markdown": [
      "md",
      "markdown",
      "mdown",
      "markdn"
    ],
    "vnd.wap.si": "si",
    "vnd.wap.sl": "sl"
  },
  "video": {
    "avif": "avif",
    "3gpp": "3gp",
    "annodex": "axv",
    "dl": "dl",
    "dv": [
      "dif",
      "dv"
    ],
    "fli": "fli",
    "gl": "gl",
    "mpeg": [
      "mpeg",
      "mpg",
      "mpe",
      "m1v",
      "m2v",
      "mp2",
      "mpa",
      "mpv2"
    ],
    "mp4": [
      "mp4",
      "mp4v",
      "mpg4"
    ],
    "quicktime": [
      "qt",
      "mov"
    ],
    "ogg": "ogv",
    "vnd.mpegurl": [
      "mxu",
      "m4u"
    ],
    "x-flv": "flv",
    "x-la-asf": [
      "lsf",
      "lsx"
    ],
    "x-mng": "mng",
    "x-ms-asf": [
      "asf",
      "asx",
      "asr"
    ],
    "x-ms-wm": "wm",
    "x-ms-wmv": "wmv",
    "x-ms-wmx": "wmx",
    "x-ms-wvx": "wvx",
    "x-msvideo": "avi",
    "x-sgi-movie": "movie",
    "x-matroska": [
      "mpv",
      "mkv",
      "mk3d",
      "mks"
    ],
    "3gpp2": "3g2",
    "h261": "h261",
    "h263": "h263",
    "h264": "h264",
    "jpeg": "jpgv",
    "jpm": [
      "jpm",
      "jpgm"
    ],
    "mj2": [
      "mj2",
      "mjp2"
    ],
    "vnd.dece.hd": [
      "uvh",
      "uvvh"
    ],
    "vnd.dece.mobile": [
      "uvm",
      "uvvm"
    ],
    "vnd.dece.pd": [
      "uvp",
      "uvvp"
    ],
    "vnd.dece.sd": [
      "uvs",
      "uvvs"
    ],
    "vnd.dece.video": [
      "uvv",
      "uvvv"
    ],
    "vnd.dvb.file": "dvb",
    "vnd.fvt": "fvt",
    "vnd.ms-playready.media.pyv": "pyv",
    "vnd.uvvu.mp4": [
      "uvu",
      "uvvu"
    ],
    "vnd.vivo": "viv",
    "webm": "webm",
    "x-f4v": "f4v",
    "x-m4v": "m4v",
    "x-ms-vob": "vob",
    "x-smv": "smv",
    "mp2t": "ts"
  },
  "x-conference": {
    "x-cooltalk": "ice"
  },
  "x-world": {
    "x-vrml": [
      "vrm",
      "flr",
      "wrz",
      "xaf",
      "xof"
    ]
  }
};
var mimeTypes = (() => {
  const mimeTypes2 = {};
  for (const type of Object.keys(table)) {
    for (const subtype of Object.keys(table[type])) {
      const value = table[type][subtype];
      if (typeof value == "string") {
        mimeTypes2[value] = type + "/" + subtype;
      } else {
        for (let indexMimeType = 0; indexMimeType < value.length; indexMimeType++) {
          mimeTypes2[value[indexMimeType]] = type + "/" + subtype;
        }
      }
    }
  }
  return mimeTypes2;
})();
function getMimeType2(filename) {
  return filename && mimeTypes[filename.split(".").pop().toLowerCase()] || getMimeType();
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/streams/codecs/crc32.js
var table2 = [];
for (let i = 0; i < 256; i++) {
  let t = i;
  for (let j = 0; j < 8; j++) {
    if (t & 1) {
      t = t >>> 1 ^ 3988292384;
    } else {
      t = t >>> 1;
    }
  }
  table2[i] = t;
}
var Crc32 = class {
  constructor(crc) {
    this.crc = crc || -1;
  }
  append(data) {
    let crc = this.crc | 0;
    for (let offset = 0, length = data.length | 0; offset < length; offset++) {
      crc = crc >>> 8 ^ table2[(crc ^ data[offset]) & 255];
    }
    this.crc = crc;
  }
  get() {
    return ~this.crc;
  }
};

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/streams/crc32-stream.js
var Crc32Stream = class extends TransformStream {
  constructor() {
    let stream;
    const crc32 = new Crc32();
    super({
      transform(chunk, controller) {
        crc32.append(chunk);
        controller.enqueue(chunk);
      },
      flush() {
        const value = new Uint8Array(4);
        const dataView = new DataView(value.buffer);
        dataView.setUint32(0, crc32.get());
        stream.value = value;
      }
    });
    stream = this;
  }
};

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/util/encode-text.js
function encodeText(value) {
  if (typeof TextEncoder == UNDEFINED_TYPE) {
    value = unescape(encodeURIComponent(value));
    const result = new Uint8Array(value.length);
    for (let i = 0; i < result.length; i++) {
      result[i] = value.charCodeAt(i);
    }
    return result;
  } else {
    return new TextEncoder().encode(value);
  }
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/streams/codecs/sjcl.js
var bitArray = {
  /**
   * Concatenate two bit arrays.
   * @param {bitArray} a1 The first array.
   * @param {bitArray} a2 The second array.
   * @return {bitArray} The concatenation of a1 and a2.
   */
  concat(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
      return a1.concat(a2);
    }
    const last = a1[a1.length - 1], shift = bitArray.getPartial(last);
    if (shift === 32) {
      return a1.concat(a2);
    } else {
      return bitArray._shiftRight(a2, shift, last | 0, a1.slice(0, a1.length - 1));
    }
  },
  /**
   * Find the length of an array of bits.
   * @param {bitArray} a The array.
   * @return {Number} The length of a, in bits.
   */
  bitLength(a) {
    const l = a.length;
    if (l === 0) {
      return 0;
    }
    const x = a[l - 1];
    return (l - 1) * 32 + bitArray.getPartial(x);
  },
  /**
   * Truncate an array.
   * @param {bitArray} a The array.
   * @param {Number} len The length to truncate to, in bits.
   * @return {bitArray} A new array, truncated to len bits.
   */
  clamp(a, len) {
    if (a.length * 32 < len) {
      return a;
    }
    a = a.slice(0, Math.ceil(len / 32));
    const l = a.length;
    len = len & 31;
    if (l > 0 && len) {
      a[l - 1] = bitArray.partial(len, a[l - 1] & 2147483648 >> len - 1, 1);
    }
    return a;
  },
  /**
   * Make a partial word for a bit array.
   * @param {Number} len The number of bits in the word.
   * @param {Number} x The bits.
   * @param {Number} [_end=0] Pass 1 if x has already been shifted to the high side.
   * @return {Number} The partial word.
   */
  partial(len, x, _end) {
    if (len === 32) {
      return x;
    }
    return (_end ? x | 0 : x << 32 - len) + len * 1099511627776;
  },
  /**
   * Get the number of bits used by a partial word.
   * @param {Number} x The partial word.
   * @return {Number} The number of bits used by the partial word.
   */
  getPartial(x) {
    return Math.round(x / 1099511627776) || 32;
  },
  /** Shift an array right.
   * @param {bitArray} a The array to shift.
   * @param {Number} shift The number of bits to shift.
   * @param {Number} [carry=0] A byte to carry in
   * @param {bitArray} [out=[]] An array to prepend to the output.
   * @private
   */
  _shiftRight(a, shift, carry, out) {
    if (out === void 0) {
      out = [];
    }
    for (; shift >= 32; shift -= 32) {
      out.push(carry);
      carry = 0;
    }
    if (shift === 0) {
      return out.concat(a);
    }
    for (let i = 0; i < a.length; i++) {
      out.push(carry | a[i] >>> shift);
      carry = a[i] << 32 - shift;
    }
    const last2 = a.length ? a[a.length - 1] : 0;
    const shift2 = bitArray.getPartial(last2);
    out.push(bitArray.partial(shift + shift2 & 31, shift + shift2 > 32 ? carry : out.pop(), 1));
    return out;
  }
};
var codec = {
  bytes: {
    /** Convert from a bitArray to an array of bytes. */
    fromBits(arr) {
      const bl = bitArray.bitLength(arr);
      const byteLength = bl / 8;
      const out = new Uint8Array(byteLength);
      let tmp;
      for (let i = 0; i < byteLength; i++) {
        if ((i & 3) === 0) {
          tmp = arr[i / 4];
        }
        out[i] = tmp >>> 24;
        tmp <<= 8;
      }
      return out;
    },
    /** Convert from an array of bytes to a bitArray. */
    toBits(bytes) {
      const out = [];
      let i;
      let tmp = 0;
      for (i = 0; i < bytes.length; i++) {
        tmp = tmp << 8 | bytes[i];
        if ((i & 3) === 3) {
          out.push(tmp);
          tmp = 0;
        }
      }
      if (i & 3) {
        out.push(bitArray.partial(8 * (i & 3), tmp));
      }
      return out;
    }
  }
};
var hash = {};
hash.sha1 = class {
  constructor(hash2) {
    const sha1 = this;
    sha1.blockSize = 512;
    sha1._init = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    sha1._key = [1518500249, 1859775393, 2400959708, 3395469782];
    if (hash2) {
      sha1._h = hash2._h.slice(0);
      sha1._buffer = hash2._buffer.slice(0);
      sha1._length = hash2._length;
    } else {
      sha1.reset();
    }
  }
  /**
   * Reset the hash state.
   * @return this
   */
  reset() {
    const sha1 = this;
    sha1._h = sha1._init.slice(0);
    sha1._buffer = [];
    sha1._length = 0;
    return sha1;
  }
  /**
   * Input several words to the hash.
   * @param {bitArray|String} data the data to hash.
   * @return this
   */
  update(data) {
    const sha1 = this;
    if (typeof data === "string") {
      data = codec.utf8String.toBits(data);
    }
    const b = sha1._buffer = bitArray.concat(sha1._buffer, data);
    const ol = sha1._length;
    const nl = sha1._length = ol + bitArray.bitLength(data);
    if (nl > 9007199254740991) {
      throw new Error("Cannot hash more than 2^53 - 1 bits");
    }
    const c = new Uint32Array(b);
    let j = 0;
    for (let i = sha1.blockSize + ol - (sha1.blockSize + ol & sha1.blockSize - 1); i <= nl; i += sha1.blockSize) {
      sha1._block(c.subarray(16 * j, 16 * (j + 1)));
      j += 1;
    }
    b.splice(0, 16 * j);
    return sha1;
  }
  /**
   * Complete hashing and output the hash value.
   * @return {bitArray} The hash value, an array of 5 big-endian words. TODO
   */
  finalize() {
    const sha1 = this;
    let b = sha1._buffer;
    const h = sha1._h;
    b = bitArray.concat(b, [bitArray.partial(1, 1)]);
    for (let i = b.length + 2; i & 15; i++) {
      b.push(0);
    }
    b.push(Math.floor(sha1._length / 4294967296));
    b.push(sha1._length | 0);
    while (b.length) {
      sha1._block(b.splice(0, 16));
    }
    sha1.reset();
    return h;
  }
  /**
   * The SHA-1 logical functions f(0), f(1), ..., f(79).
   * @private
   */
  _f(t, b, c, d) {
    if (t <= 19) {
      return b & c | ~b & d;
    } else if (t <= 39) {
      return b ^ c ^ d;
    } else if (t <= 59) {
      return b & c | b & d | c & d;
    } else if (t <= 79) {
      return b ^ c ^ d;
    }
  }
  /**
   * Circular left-shift operator.
   * @private
   */
  _S(n, x) {
    return x << n | x >>> 32 - n;
  }
  /**
   * Perform one cycle of SHA-1.
   * @param {Uint32Array|bitArray} words one block of words.
   * @private
   */
  _block(words) {
    const sha1 = this;
    const h = sha1._h;
    const w = Array(80);
    for (let j = 0; j < 16; j++) {
      w[j] = words[j];
    }
    let a = h[0];
    let b = h[1];
    let c = h[2];
    let d = h[3];
    let e2 = h[4];
    for (let t = 0; t <= 79; t++) {
      if (t >= 16) {
        w[t] = sha1._S(1, w[t - 3] ^ w[t - 8] ^ w[t - 14] ^ w[t - 16]);
      }
      const tmp = sha1._S(5, a) + sha1._f(t, b, c, d) + e2 + w[t] + sha1._key[Math.floor(t / 20)] | 0;
      e2 = d;
      d = c;
      c = sha1._S(30, b);
      b = a;
      a = tmp;
    }
    h[0] = h[0] + a | 0;
    h[1] = h[1] + b | 0;
    h[2] = h[2] + c | 0;
    h[3] = h[3] + d | 0;
    h[4] = h[4] + e2 | 0;
  }
};
var cipher = {};
cipher.aes = class {
  constructor(key) {
    const aes = this;
    aes._tables = [[[], [], [], [], []], [[], [], [], [], []]];
    if (!aes._tables[0][0][0]) {
      aes._precompute();
    }
    const sbox = aes._tables[0][4];
    const decTable = aes._tables[1];
    const keyLen = key.length;
    let i, encKey, decKey, rcon = 1;
    if (keyLen !== 4 && keyLen !== 6 && keyLen !== 8) {
      throw new Error("invalid aes key size");
    }
    aes._key = [encKey = key.slice(0), decKey = []];
    for (i = keyLen; i < 4 * keyLen + 28; i++) {
      let tmp = encKey[i - 1];
      if (i % keyLen === 0 || keyLen === 8 && i % keyLen === 4) {
        tmp = sbox[tmp >>> 24] << 24 ^ sbox[tmp >> 16 & 255] << 16 ^ sbox[tmp >> 8 & 255] << 8 ^ sbox[tmp & 255];
        if (i % keyLen === 0) {
          tmp = tmp << 8 ^ tmp >>> 24 ^ rcon << 24;
          rcon = rcon << 1 ^ (rcon >> 7) * 283;
        }
      }
      encKey[i] = encKey[i - keyLen] ^ tmp;
    }
    for (let j = 0; i; j++, i--) {
      const tmp = encKey[j & 3 ? i : i - 4];
      if (i <= 4 || j < 4) {
        decKey[j] = tmp;
      } else {
        decKey[j] = decTable[0][sbox[tmp >>> 24]] ^ decTable[1][sbox[tmp >> 16 & 255]] ^ decTable[2][sbox[tmp >> 8 & 255]] ^ decTable[3][sbox[tmp & 255]];
      }
    }
  }
  // public
  /* Something like this might appear here eventually
  name: "AES",
  blockSize: 4,
  keySizes: [4,6,8],
  */
  /**
   * Encrypt an array of 4 big-endian words.
   * @param {Array} data The plaintext.
   * @return {Array} The ciphertext.
   */
  encrypt(data) {
    return this._crypt(data, 0);
  }
  /**
   * Decrypt an array of 4 big-endian words.
   * @param {Array} data The ciphertext.
   * @return {Array} The plaintext.
   */
  decrypt(data) {
    return this._crypt(data, 1);
  }
  /**
   * Expand the S-box tables.
   *
   * @private
   */
  _precompute() {
    const encTable = this._tables[0];
    const decTable = this._tables[1];
    const sbox = encTable[4];
    const sboxInv = decTable[4];
    const d = [];
    const th = [];
    let xInv, x2, x4, x8;
    for (let i = 0; i < 256; i++) {
      th[(d[i] = i << 1 ^ (i >> 7) * 283) ^ i] = i;
    }
    for (let x = xInv = 0; !sbox[x]; x ^= x2 || 1, xInv = th[xInv] || 1) {
      let s = xInv ^ xInv << 1 ^ xInv << 2 ^ xInv << 3 ^ xInv << 4;
      s = s >> 8 ^ s & 255 ^ 99;
      sbox[x] = s;
      sboxInv[s] = x;
      x8 = d[x4 = d[x2 = d[x]]];
      let tDec = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
      let tEnc = d[s] * 257 ^ s * 16843008;
      for (let i = 0; i < 4; i++) {
        encTable[i][x] = tEnc = tEnc << 24 ^ tEnc >>> 8;
        decTable[i][s] = tDec = tDec << 24 ^ tDec >>> 8;
      }
    }
    for (let i = 0; i < 5; i++) {
      encTable[i] = encTable[i].slice(0);
      decTable[i] = decTable[i].slice(0);
    }
  }
  /**
   * Encryption and decryption core.
   * @param {Array} input Four words to be encrypted or decrypted.
   * @param dir The direction, 0 for encrypt and 1 for decrypt.
   * @return {Array} The four encrypted or decrypted words.
   * @private
   */
  _crypt(input, dir) {
    if (input.length !== 4) {
      throw new Error("invalid aes block size");
    }
    const key = this._key[dir];
    const nInnerRounds = key.length / 4 - 2;
    const out = [0, 0, 0, 0];
    const table3 = this._tables[dir];
    const t0 = table3[0];
    const t1 = table3[1];
    const t2 = table3[2];
    const t3 = table3[3];
    const sbox = table3[4];
    let a = input[0] ^ key[0];
    let b = input[dir ? 3 : 1] ^ key[1];
    let c = input[2] ^ key[2];
    let d = input[dir ? 1 : 3] ^ key[3];
    let kIndex = 4;
    let a2, b2, c2;
    for (let i = 0; i < nInnerRounds; i++) {
      a2 = t0[a >>> 24] ^ t1[b >> 16 & 255] ^ t2[c >> 8 & 255] ^ t3[d & 255] ^ key[kIndex];
      b2 = t0[b >>> 24] ^ t1[c >> 16 & 255] ^ t2[d >> 8 & 255] ^ t3[a & 255] ^ key[kIndex + 1];
      c2 = t0[c >>> 24] ^ t1[d >> 16 & 255] ^ t2[a >> 8 & 255] ^ t3[b & 255] ^ key[kIndex + 2];
      d = t0[d >>> 24] ^ t1[a >> 16 & 255] ^ t2[b >> 8 & 255] ^ t3[c & 255] ^ key[kIndex + 3];
      kIndex += 4;
      a = a2;
      b = b2;
      c = c2;
    }
    for (let i = 0; i < 4; i++) {
      out[dir ? 3 & -i : i] = sbox[a >>> 24] << 24 ^ sbox[b >> 16 & 255] << 16 ^ sbox[c >> 8 & 255] << 8 ^ sbox[d & 255] ^ key[kIndex++];
      a2 = a;
      a = b;
      b = c;
      c = d;
      d = a2;
    }
    return out;
  }
};
var random = {
  /** 
   * Generate random words with pure js, cryptographically not as strong & safe as native implementation.
   * @param {TypedArray} typedArray The array to fill.
   * @return {TypedArray} The random values.
   */
  getRandomValues(typedArray) {
    const words = new Uint32Array(typedArray.buffer);
    const r = (m_w) => {
      let m_z = 987654321;
      const mask = 4294967295;
      return function() {
        m_z = 36969 * (m_z & 65535) + (m_z >> 16) & mask;
        m_w = 18e3 * (m_w & 65535) + (m_w >> 16) & mask;
        const result = ((m_z << 16) + m_w & mask) / 4294967296 + 0.5;
        return result * (Math.random() > 0.5 ? 1 : -1);
      };
    };
    for (let i = 0, rcache; i < typedArray.length; i += 4) {
      const _r = r((rcache || Math.random()) * 4294967296);
      rcache = _r() * 987654071;
      words[i / 4] = _r() * 4294967296 | 0;
    }
    return typedArray;
  }
};
var mode = {};
mode.ctrGladman = class {
  constructor(prf, iv) {
    this._prf = prf;
    this._initIv = iv;
    this._iv = iv;
  }
  reset() {
    this._iv = this._initIv;
  }
  /** Input some data to calculate.
   * @param {bitArray} data the data to process, it must be intergral multiple of 128 bits unless it's the last.
   */
  update(data) {
    return this.calculate(this._prf, data, this._iv);
  }
  incWord(word) {
    if ((word >> 24 & 255) === 255) {
      let b1 = word >> 16 & 255;
      let b2 = word >> 8 & 255;
      let b3 = word & 255;
      if (b1 === 255) {
        b1 = 0;
        if (b2 === 255) {
          b2 = 0;
          if (b3 === 255) {
            b3 = 0;
          } else {
            ++b3;
          }
        } else {
          ++b2;
        }
      } else {
        ++b1;
      }
      word = 0;
      word += b1 << 16;
      word += b2 << 8;
      word += b3;
    } else {
      word += 1 << 24;
    }
    return word;
  }
  incCounter(counter) {
    if ((counter[0] = this.incWord(counter[0])) === 0) {
      counter[1] = this.incWord(counter[1]);
    }
  }
  calculate(prf, data, iv) {
    let l;
    if (!(l = data.length)) {
      return [];
    }
    const bl = bitArray.bitLength(data);
    for (let i = 0; i < l; i += 4) {
      this.incCounter(iv);
      const e2 = prf.encrypt(iv);
      data[i] ^= e2[0];
      data[i + 1] ^= e2[1];
      data[i + 2] ^= e2[2];
      data[i + 3] ^= e2[3];
    }
    return bitArray.clamp(data, bl);
  }
};
var misc = {
  importKey(password) {
    return new misc.hmacSha1(codec.bytes.toBits(password));
  },
  pbkdf2(prf, salt, count, length) {
    count = count || 1e4;
    if (length < 0 || count < 0) {
      throw new Error("invalid params to pbkdf2");
    }
    const byteLength = (length >> 5) + 1 << 2;
    let u, ui, i, j, k;
    const arrayBuffer = new ArrayBuffer(byteLength);
    const out = new DataView(arrayBuffer);
    let outLength = 0;
    const b = bitArray;
    salt = codec.bytes.toBits(salt);
    for (k = 1; outLength < (byteLength || 1); k++) {
      u = ui = prf.encrypt(b.concat(salt, [k]));
      for (i = 1; i < count; i++) {
        ui = prf.encrypt(ui);
        for (j = 0; j < ui.length; j++) {
          u[j] ^= ui[j];
        }
      }
      for (i = 0; outLength < (byteLength || 1) && i < u.length; i++) {
        out.setInt32(outLength, u[i]);
        outLength += 4;
      }
    }
    return arrayBuffer.slice(0, length / 8);
  }
};
misc.hmacSha1 = class {
  constructor(key) {
    const hmac = this;
    const Hash = hmac._hash = hash.sha1;
    const exKey = [[], []];
    hmac._baseHash = [new Hash(), new Hash()];
    const bs = hmac._baseHash[0].blockSize / 32;
    if (key.length > bs) {
      key = new Hash().update(key).finalize();
    }
    for (let i = 0; i < bs; i++) {
      exKey[0][i] = key[i] ^ 909522486;
      exKey[1][i] = key[i] ^ 1549556828;
    }
    hmac._baseHash[0].update(exKey[0]);
    hmac._baseHash[1].update(exKey[1]);
    hmac._resultHash = new Hash(hmac._baseHash[0]);
  }
  reset() {
    const hmac = this;
    hmac._resultHash = new hmac._hash(hmac._baseHash[0]);
    hmac._updated = false;
  }
  update(data) {
    const hmac = this;
    hmac._updated = true;
    hmac._resultHash.update(data);
  }
  digest() {
    const hmac = this;
    const w = hmac._resultHash.finalize();
    const result = new hmac._hash(hmac._baseHash[1]).update(w).finalize();
    hmac.reset();
    return result;
  }
  encrypt(data) {
    if (!this._updated) {
      this.update(data);
      return this.digest(data);
    } else {
      throw new Error("encrypt on already updated hmac called!");
    }
  }
};

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/streams/common-crypto.js
var GET_RANDOM_VALUES_SUPPORTED = typeof crypto != UNDEFINED_TYPE && typeof crypto.getRandomValues == FUNCTION_TYPE;
var ERR_INVALID_PASSWORD = "Invalid password";
var ERR_INVALID_SIGNATURE = "Invalid signature";
var ERR_ABORT_CHECK_PASSWORD = "zipjs-abort-check-password";
function getRandomValues(array) {
  if (GET_RANDOM_VALUES_SUPPORTED) {
    return crypto.getRandomValues(array);
  } else {
    return random.getRandomValues(array);
  }
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/streams/aes-crypto-stream.js
var BLOCK_LENGTH = 16;
var RAW_FORMAT = "raw";
var PBKDF2_ALGORITHM = { name: "PBKDF2" };
var HASH_ALGORITHM = { name: "HMAC" };
var HASH_FUNCTION = "SHA-1";
var BASE_KEY_ALGORITHM = Object.assign({ hash: HASH_ALGORITHM }, PBKDF2_ALGORITHM);
var DERIVED_BITS_ALGORITHM = Object.assign({ iterations: 1e3, hash: { name: HASH_FUNCTION } }, PBKDF2_ALGORITHM);
var DERIVED_BITS_USAGE = ["deriveBits"];
var SALT_LENGTH = [8, 12, 16];
var KEY_LENGTH = [16, 24, 32];
var SIGNATURE_LENGTH = 10;
var COUNTER_DEFAULT_VALUE = [0, 0, 0, 0];
var CRYPTO_API_SUPPORTED = typeof crypto != UNDEFINED_TYPE;
var subtle = CRYPTO_API_SUPPORTED && crypto.subtle;
var SUBTLE_API_SUPPORTED = CRYPTO_API_SUPPORTED && typeof subtle != UNDEFINED_TYPE;
var codecBytes = codec.bytes;
var Aes = cipher.aes;
var CtrGladman = mode.ctrGladman;
var HmacSha1 = misc.hmacSha1;
var IMPORT_KEY_SUPPORTED = CRYPTO_API_SUPPORTED && SUBTLE_API_SUPPORTED && typeof subtle.importKey == FUNCTION_TYPE;
var DERIVE_BITS_SUPPORTED = CRYPTO_API_SUPPORTED && SUBTLE_API_SUPPORTED && typeof subtle.deriveBits == FUNCTION_TYPE;
var AESDecryptionStream = class extends TransformStream {
  constructor({ password, rawPassword, signed, encryptionStrength, checkPasswordOnly }) {
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((resolve) => this.resolveReady = resolve),
          password: encodePassword(password, rawPassword),
          signed,
          strength: encryptionStrength - 1,
          pending: new Uint8Array()
        });
      },
      async transform(chunk, controller) {
        const aesCrypto = this;
        const {
          password: password2,
          strength,
          resolveReady,
          ready
        } = aesCrypto;
        if (password2) {
          await createDecryptionKeys(aesCrypto, strength, password2, subarray(chunk, 0, SALT_LENGTH[strength] + 2));
          chunk = subarray(chunk, SALT_LENGTH[strength] + 2);
          if (checkPasswordOnly) {
            controller.error(new Error(ERR_ABORT_CHECK_PASSWORD));
          } else {
            resolveReady();
          }
        } else {
          await ready;
        }
        const output = new Uint8Array(chunk.length - SIGNATURE_LENGTH - (chunk.length - SIGNATURE_LENGTH) % BLOCK_LENGTH);
        controller.enqueue(append(aesCrypto, chunk, output, 0, SIGNATURE_LENGTH, true));
      },
      async flush(controller) {
        const {
          signed: signed2,
          ctr,
          hmac,
          pending,
          ready
        } = this;
        if (hmac && ctr) {
          await ready;
          const chunkToDecrypt = subarray(pending, 0, pending.length - SIGNATURE_LENGTH);
          const originalSignature = subarray(pending, pending.length - SIGNATURE_LENGTH);
          let decryptedChunkArray = new Uint8Array();
          if (chunkToDecrypt.length) {
            const encryptedChunk = toBits(codecBytes, chunkToDecrypt);
            hmac.update(encryptedChunk);
            const decryptedChunk = ctr.update(encryptedChunk);
            decryptedChunkArray = fromBits(codecBytes, decryptedChunk);
          }
          if (signed2) {
            const signature = subarray(fromBits(codecBytes, hmac.digest()), 0, SIGNATURE_LENGTH);
            for (let indexSignature = 0; indexSignature < SIGNATURE_LENGTH; indexSignature++) {
              if (signature[indexSignature] != originalSignature[indexSignature]) {
                throw new Error(ERR_INVALID_SIGNATURE);
              }
            }
          }
          controller.enqueue(decryptedChunkArray);
        }
      }
    });
  }
};
var AESEncryptionStream = class extends TransformStream {
  constructor({ password, rawPassword, encryptionStrength }) {
    let stream;
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((resolve) => this.resolveReady = resolve),
          password: encodePassword(password, rawPassword),
          strength: encryptionStrength - 1,
          pending: new Uint8Array()
        });
      },
      async transform(chunk, controller) {
        const aesCrypto = this;
        const {
          password: password2,
          strength,
          resolveReady,
          ready
        } = aesCrypto;
        let preamble = new Uint8Array();
        if (password2) {
          preamble = await createEncryptionKeys(aesCrypto, strength, password2);
          resolveReady();
        } else {
          await ready;
        }
        const output = new Uint8Array(preamble.length + chunk.length - chunk.length % BLOCK_LENGTH);
        output.set(preamble, 0);
        controller.enqueue(append(aesCrypto, chunk, output, preamble.length, 0));
      },
      async flush(controller) {
        const {
          ctr,
          hmac,
          pending,
          ready
        } = this;
        if (hmac && ctr) {
          await ready;
          let encryptedChunkArray = new Uint8Array();
          if (pending.length) {
            const encryptedChunk = ctr.update(toBits(codecBytes, pending));
            hmac.update(encryptedChunk);
            encryptedChunkArray = fromBits(codecBytes, encryptedChunk);
          }
          stream.signature = fromBits(codecBytes, hmac.digest()).slice(0, SIGNATURE_LENGTH);
          controller.enqueue(concat(encryptedChunkArray, stream.signature));
        }
      }
    });
    stream = this;
  }
};
function append(aesCrypto, input, output, paddingStart, paddingEnd, verifySignature) {
  const {
    ctr,
    hmac,
    pending
  } = aesCrypto;
  const inputLength = input.length - paddingEnd;
  if (pending.length) {
    input = concat(pending, input);
    output = expand(output, inputLength - inputLength % BLOCK_LENGTH);
  }
  let offset;
  for (offset = 0; offset <= inputLength - BLOCK_LENGTH; offset += BLOCK_LENGTH) {
    const inputChunk = toBits(codecBytes, subarray(input, offset, offset + BLOCK_LENGTH));
    if (verifySignature) {
      hmac.update(inputChunk);
    }
    const outputChunk = ctr.update(inputChunk);
    if (!verifySignature) {
      hmac.update(outputChunk);
    }
    output.set(fromBits(codecBytes, outputChunk), offset + paddingStart);
  }
  aesCrypto.pending = subarray(input, offset);
  return output;
}
async function createDecryptionKeys(decrypt2, strength, password, preamble) {
  const passwordVerificationKey = await createKeys(decrypt2, strength, password, subarray(preamble, 0, SALT_LENGTH[strength]));
  const passwordVerification = subarray(preamble, SALT_LENGTH[strength]);
  if (passwordVerificationKey[0] != passwordVerification[0] || passwordVerificationKey[1] != passwordVerification[1]) {
    throw new Error(ERR_INVALID_PASSWORD);
  }
}
async function createEncryptionKeys(encrypt2, strength, password) {
  const salt = getRandomValues(new Uint8Array(SALT_LENGTH[strength]));
  const passwordVerification = await createKeys(encrypt2, strength, password, salt);
  return concat(salt, passwordVerification);
}
async function createKeys(aesCrypto, strength, password, salt) {
  aesCrypto.password = null;
  const baseKey = await importKey(RAW_FORMAT, password, BASE_KEY_ALGORITHM, false, DERIVED_BITS_USAGE);
  const derivedBits = await deriveBits(Object.assign({ salt }, DERIVED_BITS_ALGORITHM), baseKey, 8 * (KEY_LENGTH[strength] * 2 + 2));
  const compositeKey = new Uint8Array(derivedBits);
  const key = toBits(codecBytes, subarray(compositeKey, 0, KEY_LENGTH[strength]));
  const authentication = toBits(codecBytes, subarray(compositeKey, KEY_LENGTH[strength], KEY_LENGTH[strength] * 2));
  const passwordVerification = subarray(compositeKey, KEY_LENGTH[strength] * 2);
  Object.assign(aesCrypto, {
    keys: {
      key,
      authentication,
      passwordVerification
    },
    ctr: new CtrGladman(new Aes(key), Array.from(COUNTER_DEFAULT_VALUE)),
    hmac: new HmacSha1(authentication)
  });
  return passwordVerification;
}
async function importKey(format, password, algorithm, extractable, keyUsages) {
  if (IMPORT_KEY_SUPPORTED) {
    try {
      return await subtle.importKey(format, password, algorithm, extractable, keyUsages);
    } catch (_error) {
      IMPORT_KEY_SUPPORTED = false;
      return misc.importKey(password);
    }
  } else {
    return misc.importKey(password);
  }
}
async function deriveBits(algorithm, baseKey, length) {
  if (DERIVE_BITS_SUPPORTED) {
    try {
      return await subtle.deriveBits(algorithm, baseKey, length);
    } catch (_error) {
      DERIVE_BITS_SUPPORTED = false;
      return misc.pbkdf2(baseKey, algorithm.salt, DERIVED_BITS_ALGORITHM.iterations, length);
    }
  } else {
    return misc.pbkdf2(baseKey, algorithm.salt, DERIVED_BITS_ALGORITHM.iterations, length);
  }
}
function encodePassword(password, rawPassword) {
  if (rawPassword === UNDEFINED_VALUE) {
    return encodeText(password);
  } else {
    return rawPassword;
  }
}
function concat(leftArray, rightArray) {
  let array = leftArray;
  if (leftArray.length + rightArray.length) {
    array = new Uint8Array(leftArray.length + rightArray.length);
    array.set(leftArray, 0);
    array.set(rightArray, leftArray.length);
  }
  return array;
}
function expand(inputArray, length) {
  if (length && length > inputArray.length) {
    const array = inputArray;
    inputArray = new Uint8Array(length);
    inputArray.set(array, 0);
  }
  return inputArray;
}
function subarray(array, begin, end) {
  return array.subarray(begin, end);
}
function fromBits(codecBytes2, chunk) {
  return codecBytes2.fromBits(chunk);
}
function toBits(codecBytes2, chunk) {
  return codecBytes2.toBits(chunk);
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/streams/zip-crypto-stream.js
var HEADER_LENGTH = 12;
var ZipCryptoDecryptionStream = class extends TransformStream {
  constructor({ password, passwordVerification, checkPasswordOnly }) {
    super({
      start() {
        Object.assign(this, {
          password,
          passwordVerification
        });
        createKeys2(this, password);
      },
      transform(chunk, controller) {
        const zipCrypto = this;
        if (zipCrypto.password) {
          const decryptedHeader = decrypt(zipCrypto, chunk.subarray(0, HEADER_LENGTH));
          zipCrypto.password = null;
          if (decryptedHeader[HEADER_LENGTH - 1] != zipCrypto.passwordVerification) {
            throw new Error(ERR_INVALID_PASSWORD);
          }
          chunk = chunk.subarray(HEADER_LENGTH);
        }
        if (checkPasswordOnly) {
          controller.error(new Error(ERR_ABORT_CHECK_PASSWORD));
        } else {
          controller.enqueue(decrypt(zipCrypto, chunk));
        }
      }
    });
  }
};
var ZipCryptoEncryptionStream = class extends TransformStream {
  constructor({ password, passwordVerification }) {
    super({
      start() {
        Object.assign(this, {
          password,
          passwordVerification
        });
        createKeys2(this, password);
      },
      transform(chunk, controller) {
        const zipCrypto = this;
        let output;
        let offset;
        if (zipCrypto.password) {
          zipCrypto.password = null;
          const header = getRandomValues(new Uint8Array(HEADER_LENGTH));
          header[HEADER_LENGTH - 1] = zipCrypto.passwordVerification;
          output = new Uint8Array(chunk.length + header.length);
          output.set(encrypt(zipCrypto, header), 0);
          offset = HEADER_LENGTH;
        } else {
          output = new Uint8Array(chunk.length);
          offset = 0;
        }
        output.set(encrypt(zipCrypto, chunk), offset);
        controller.enqueue(output);
      }
    });
  }
};
function decrypt(target, input) {
  const output = new Uint8Array(input.length);
  for (let index = 0; index < input.length; index++) {
    output[index] = getByte(target) ^ input[index];
    updateKeys(target, output[index]);
  }
  return output;
}
function encrypt(target, input) {
  const output = new Uint8Array(input.length);
  for (let index = 0; index < input.length; index++) {
    output[index] = getByte(target) ^ input[index];
    updateKeys(target, input[index]);
  }
  return output;
}
function createKeys2(target, password) {
  const keys = [305419896, 591751049, 878082192];
  Object.assign(target, {
    keys,
    crcKey0: new Crc32(keys[0]),
    crcKey2: new Crc32(keys[2])
  });
  for (let index = 0; index < password.length; index++) {
    updateKeys(target, password.charCodeAt(index));
  }
}
function updateKeys(target, byte) {
  let [key0, key1, key2] = target.keys;
  target.crcKey0.append([byte]);
  key0 = ~target.crcKey0.get();
  key1 = getInt32(Math.imul(getInt32(key1 + getInt8(key0)), 134775813) + 1);
  target.crcKey2.append([key1 >>> 24]);
  key2 = ~target.crcKey2.get();
  target.keys = [key0, key1, key2];
}
function getByte(target) {
  const temp = target.keys[2] | 2;
  return getInt8(Math.imul(temp, temp ^ 1) >>> 8);
}
function getInt8(number) {
  return number & 255;
}
function getInt32(number) {
  return number & 4294967295;
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/streams/zip-entry-stream.js
var COMPRESSION_FORMAT = "deflate-raw";
var DeflateStream = class extends TransformStream {
  constructor(options, { chunkSize, CompressionStream: CompressionStream2, CompressionStreamNative }) {
    super({});
    const { compressed, encrypted, useCompressionStream, zipCrypto, signed, level } = options;
    const stream = this;
    let crc32Stream, encryptionStream;
    let readable = filterEmptyChunks(super.readable);
    if ((!encrypted || zipCrypto) && signed) {
      crc32Stream = new Crc32Stream();
      readable = pipeThrough(readable, crc32Stream);
    }
    if (compressed) {
      readable = pipeThroughCommpressionStream(readable, useCompressionStream, { level, chunkSize }, CompressionStreamNative, CompressionStream2);
    }
    if (encrypted) {
      if (zipCrypto) {
        readable = pipeThrough(readable, new ZipCryptoEncryptionStream(options));
      } else {
        encryptionStream = new AESEncryptionStream(options);
        readable = pipeThrough(readable, encryptionStream);
      }
    }
    setReadable(stream, readable, () => {
      let signature;
      if (encrypted && !zipCrypto) {
        signature = encryptionStream.signature;
      }
      if ((!encrypted || zipCrypto) && signed) {
        signature = new DataView(crc32Stream.value.buffer).getUint32(0);
      }
      stream.signature = signature;
    });
  }
};
var InflateStream = class extends TransformStream {
  constructor(options, { chunkSize, DecompressionStream: DecompressionStream2, DecompressionStreamNative }) {
    super({});
    const { zipCrypto, encrypted, signed, signature, compressed, useCompressionStream } = options;
    let crc32Stream, decryptionStream;
    let readable = filterEmptyChunks(super.readable);
    if (encrypted) {
      if (zipCrypto) {
        readable = pipeThrough(readable, new ZipCryptoDecryptionStream(options));
      } else {
        decryptionStream = new AESDecryptionStream(options);
        readable = pipeThrough(readable, decryptionStream);
      }
    }
    if (compressed) {
      readable = pipeThroughCommpressionStream(readable, useCompressionStream, { chunkSize }, DecompressionStreamNative, DecompressionStream2);
    }
    if ((!encrypted || zipCrypto) && signed) {
      crc32Stream = new Crc32Stream();
      readable = pipeThrough(readable, crc32Stream);
    }
    setReadable(this, readable, () => {
      if ((!encrypted || zipCrypto) && signed) {
        const dataViewSignature = new DataView(crc32Stream.value.buffer);
        if (signature != dataViewSignature.getUint32(0, false)) {
          throw new Error(ERR_INVALID_SIGNATURE);
        }
      }
    });
  }
};
function filterEmptyChunks(readable) {
  return pipeThrough(readable, new TransformStream({
    transform(chunk, controller) {
      if (chunk && chunk.length) {
        controller.enqueue(chunk);
      }
    }
  }));
}
function setReadable(stream, readable, flush) {
  readable = pipeThrough(readable, new TransformStream({ flush }));
  Object.defineProperty(stream, "readable", {
    get() {
      return readable;
    }
  });
}
function pipeThroughCommpressionStream(readable, useCompressionStream, options, CodecStreamNative, CodecStream2) {
  try {
    const CompressionStream2 = useCompressionStream && CodecStreamNative ? CodecStreamNative : CodecStream2;
    readable = pipeThrough(readable, new CompressionStream2(COMPRESSION_FORMAT, options));
  } catch (error) {
    if (useCompressionStream) {
      try {
        readable = pipeThrough(readable, new CodecStream2(COMPRESSION_FORMAT, options));
      } catch (error2) {
        return readable;
      }
    } else {
      return readable;
    }
  }
  return readable;
}
function pipeThrough(readable, transformStream) {
  return readable.pipeThrough(transformStream);
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/streams/codec-stream.js
var MESSAGE_EVENT_TYPE = "message";
var MESSAGE_START = "start";
var MESSAGE_PULL = "pull";
var MESSAGE_DATA = "data";
var MESSAGE_ACK_DATA = "ack";
var MESSAGE_CLOSE = "close";
var CODEC_DEFLATE = "deflate";
var CODEC_INFLATE = "inflate";
var CodecStream = class extends TransformStream {
  constructor(options, config2) {
    super({});
    const codec2 = this;
    const { codecType } = options;
    let Stream2;
    if (codecType.startsWith(CODEC_DEFLATE)) {
      Stream2 = DeflateStream;
    } else if (codecType.startsWith(CODEC_INFLATE)) {
      Stream2 = InflateStream;
    }
    let outputSize = 0;
    let inputSize = 0;
    const stream = new Stream2(options, config2);
    const readable = super.readable;
    const inputSizeStream = new TransformStream({
      transform(chunk, controller) {
        if (chunk && chunk.length) {
          inputSize += chunk.length;
          controller.enqueue(chunk);
        }
      },
      flush() {
        Object.assign(codec2, {
          inputSize
        });
      }
    });
    const outputSizeStream = new TransformStream({
      transform(chunk, controller) {
        if (chunk && chunk.length) {
          outputSize += chunk.length;
          controller.enqueue(chunk);
        }
      },
      flush() {
        const { signature } = stream;
        Object.assign(codec2, {
          signature,
          outputSize,
          inputSize
        });
      }
    });
    Object.defineProperty(codec2, "readable", {
      get() {
        return readable.pipeThrough(inputSizeStream).pipeThrough(stream).pipeThrough(outputSizeStream);
      }
    });
  }
};
var ChunkStream = class extends TransformStream {
  constructor(chunkSize) {
    let pendingChunk;
    super({
      transform,
      flush(controller) {
        if (pendingChunk && pendingChunk.length) {
          controller.enqueue(pendingChunk);
        }
      }
    });
    function transform(chunk, controller) {
      if (pendingChunk) {
        const newChunk = new Uint8Array(pendingChunk.length + chunk.length);
        newChunk.set(pendingChunk);
        newChunk.set(chunk, pendingChunk.length);
        chunk = newChunk;
        pendingChunk = null;
      }
      if (chunk.length > chunkSize) {
        controller.enqueue(chunk.slice(0, chunkSize));
        transform(chunk.slice(chunkSize), controller);
      } else {
        pendingChunk = chunk;
      }
    }
  }
};

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/codec-worker.js
var WEB_WORKERS_SUPPORTED = typeof Worker != UNDEFINED_TYPE;
var CodecWorker = class {
  constructor(workerData, { readable, writable }, { options, config: config2, streamOptions, useWebWorkers, transferStreams, scripts }, onTaskFinished) {
    const { signal } = streamOptions;
    Object.assign(workerData, {
      busy: true,
      readable: readable.pipeThrough(new ChunkStream(config2.chunkSize)).pipeThrough(new ProgressWatcherStream(readable, streamOptions), { signal }),
      writable,
      options: Object.assign({}, options),
      scripts,
      transferStreams,
      terminate() {
        return new Promise((resolve) => {
          const { worker, busy } = workerData;
          if (worker) {
            if (busy) {
              workerData.resolveTerminated = resolve;
            } else {
              worker.terminate();
              resolve();
            }
            workerData.interface = null;
          } else {
            resolve();
          }
        });
      },
      onTaskFinished() {
        const { resolveTerminated } = workerData;
        if (resolveTerminated) {
          workerData.resolveTerminated = null;
          workerData.terminated = true;
          workerData.worker.terminate();
          resolveTerminated();
        }
        workerData.busy = false;
        onTaskFinished(workerData);
      }
    });
    return (useWebWorkers && WEB_WORKERS_SUPPORTED ? createWebWorkerInterface : createWorkerInterface)(workerData, config2);
  }
};
var ProgressWatcherStream = class extends TransformStream {
  constructor(readableSource, { onstart, onprogress, size, onend }) {
    let chunkOffset = 0;
    super({
      async start() {
        if (onstart) {
          await callHandler(onstart, size);
        }
      },
      async transform(chunk, controller) {
        chunkOffset += chunk.length;
        if (onprogress) {
          await callHandler(onprogress, chunkOffset, size);
        }
        controller.enqueue(chunk);
      },
      async flush() {
        readableSource.size = chunkOffset;
        if (onend) {
          await callHandler(onend, chunkOffset);
        }
      }
    });
  }
};
async function callHandler(handler, ...parameters) {
  try {
    await handler(...parameters);
  } catch (_error) {
  }
}
function createWorkerInterface(workerData, config2) {
  return {
    run: () => runWorker(workerData, config2)
  };
}
function createWebWorkerInterface(workerData, config2) {
  const { baseURL: baseURL2, chunkSize } = config2;
  if (!workerData.interface) {
    let worker;
    try {
      worker = getWebWorker(workerData.scripts[0], baseURL2, workerData);
    } catch (error) {
      WEB_WORKERS_SUPPORTED = false;
      return createWorkerInterface(workerData, config2);
    }
    Object.assign(workerData, {
      worker,
      interface: {
        run: () => runWebWorker(workerData, { chunkSize })
      }
    });
  }
  return workerData.interface;
}
async function runWorker({ options, readable, writable, onTaskFinished }, config2) {
  try {
    const codecStream = new CodecStream(options, config2);
    await readable.pipeThrough(codecStream).pipeTo(writable, { preventClose: true, preventAbort: true });
    const {
      signature,
      inputSize,
      outputSize
    } = codecStream;
    return {
      signature,
      inputSize,
      outputSize
    };
  } finally {
    onTaskFinished();
  }
}
async function runWebWorker(workerData, config2) {
  let resolveResult, rejectResult;
  const result = new Promise((resolve, reject) => {
    resolveResult = resolve;
    rejectResult = reject;
  });
  Object.assign(workerData, {
    reader: null,
    writer: null,
    resolveResult,
    rejectResult,
    result
  });
  const { readable, options, scripts } = workerData;
  const { writable, closed } = watchClosedStream(workerData.writable);
  const streamsTransferred = sendMessage({
    type: MESSAGE_START,
    scripts: scripts.slice(1),
    options,
    config: config2,
    readable,
    writable
  }, workerData);
  if (!streamsTransferred) {
    Object.assign(workerData, {
      reader: readable.getReader(),
      writer: writable.getWriter()
    });
  }
  const resultValue = await result;
  try {
    await writable.getWriter().close();
  } catch (_error) {
  }
  await closed;
  return resultValue;
}
function watchClosedStream(writableSource) {
  let resolveStreamClosed;
  const closed = new Promise((resolve) => resolveStreamClosed = resolve);
  const writable = new WritableStream({
    async write(chunk) {
      const writer = writableSource.getWriter();
      await writer.ready;
      await writer.write(chunk);
      writer.releaseLock();
    },
    close() {
      resolveStreamClosed();
    },
    abort(reason) {
      const writer = writableSource.getWriter();
      return writer.abort(reason);
    }
  });
  return { writable, closed };
}
var classicWorkersSupported = true;
var transferStreamsSupported = true;
function getWebWorker(url, baseURL2, workerData) {
  const workerOptions = { type: "module" };
  let scriptUrl, worker;
  if (typeof url == FUNCTION_TYPE) {
    url = url();
  }
  try {
    scriptUrl = new URL(url, baseURL2);
  } catch (_error) {
    scriptUrl = url;
  }
  if (classicWorkersSupported) {
    try {
      worker = new Worker(scriptUrl);
    } catch (_error) {
      classicWorkersSupported = false;
      worker = new Worker(scriptUrl, workerOptions);
    }
  } else {
    worker = new Worker(scriptUrl, workerOptions);
  }
  worker.addEventListener(MESSAGE_EVENT_TYPE, (event) => onMessage(event, workerData));
  return worker;
}
function sendMessage(message, { worker, writer, onTaskFinished, transferStreams }) {
  try {
    let { value, readable, writable } = message;
    const transferables = [];
    if (value) {
      if (value.byteLength < value.buffer.byteLength) {
        message.value = value.buffer.slice(0, value.byteLength);
      } else {
        message.value = value.buffer;
      }
      transferables.push(message.value);
    }
    if (transferStreams && transferStreamsSupported) {
      if (readable) {
        transferables.push(readable);
      }
      if (writable) {
        transferables.push(writable);
      }
    } else {
      message.readable = message.writable = null;
    }
    if (transferables.length) {
      try {
        worker.postMessage(message, transferables);
        return true;
      } catch (_error) {
        transferStreamsSupported = false;
        message.readable = message.writable = null;
        worker.postMessage(message);
      }
    } else {
      worker.postMessage(message);
    }
  } catch (error) {
    if (writer) {
      writer.releaseLock();
    }
    onTaskFinished();
    throw error;
  }
}
async function onMessage({ data }, workerData) {
  const { type, value, messageId, result, error } = data;
  const { reader, writer, resolveResult, rejectResult, onTaskFinished } = workerData;
  try {
    if (error) {
      const { message, stack, code, name } = error;
      const responseError = new Error(message);
      Object.assign(responseError, { stack, code, name });
      close(responseError);
    } else {
      if (type == MESSAGE_PULL) {
        const { value: value2, done } = await reader.read();
        sendMessage({ type: MESSAGE_DATA, value: value2, done, messageId }, workerData);
      }
      if (type == MESSAGE_DATA) {
        await writer.ready;
        await writer.write(new Uint8Array(value));
        sendMessage({ type: MESSAGE_ACK_DATA, messageId }, workerData);
      }
      if (type == MESSAGE_CLOSE) {
        close(null, result);
      }
    }
  } catch (error2) {
    sendMessage({ type: MESSAGE_CLOSE, messageId }, workerData);
    close(error2);
  }
  function close(error2, result2) {
    if (error2) {
      rejectResult(error2);
    } else {
      resolveResult(result2);
    }
    if (writer) {
      writer.releaseLock();
    }
    onTaskFinished();
  }
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/codec-pool.js
var pool = [];
var pendingRequests = [];
var indexWorker = 0;
async function runWorker2(stream, workerOptions) {
  const { options, config: config2 } = workerOptions;
  const { transferStreams, useWebWorkers, useCompressionStream, codecType, compressed, signed, encrypted } = options;
  const { workerScripts, maxWorkers: maxWorkers2 } = config2;
  workerOptions.transferStreams = transferStreams || transferStreams === UNDEFINED_VALUE;
  const streamCopy = !compressed && !signed && !encrypted && !workerOptions.transferStreams;
  workerOptions.useWebWorkers = !streamCopy && (useWebWorkers || useWebWorkers === UNDEFINED_VALUE && config2.useWebWorkers);
  workerOptions.scripts = workerOptions.useWebWorkers && workerScripts ? workerScripts[codecType] : [];
  options.useCompressionStream = useCompressionStream || useCompressionStream === UNDEFINED_VALUE && config2.useCompressionStream;
  return (await getWorker()).run();
  async function getWorker() {
    const workerData = pool.find((workerData2) => !workerData2.busy);
    if (workerData) {
      clearTerminateTimeout(workerData);
      return new CodecWorker(workerData, stream, workerOptions, onTaskFinished);
    } else if (pool.length < maxWorkers2) {
      const workerData2 = { indexWorker };
      indexWorker++;
      pool.push(workerData2);
      return new CodecWorker(workerData2, stream, workerOptions, onTaskFinished);
    } else {
      return new Promise((resolve) => pendingRequests.push({ resolve, stream, workerOptions }));
    }
  }
  function onTaskFinished(workerData) {
    if (pendingRequests.length) {
      const [{ resolve, stream: stream2, workerOptions: workerOptions2 }] = pendingRequests.splice(0, 1);
      resolve(new CodecWorker(workerData, stream2, workerOptions2, onTaskFinished));
    } else if (workerData.worker) {
      clearTerminateTimeout(workerData);
      terminateWorker(workerData, workerOptions);
    } else {
      pool = pool.filter((data) => data != workerData);
    }
  }
}
function terminateWorker(workerData, workerOptions) {
  const { config: config2 } = workerOptions;
  const { terminateWorkerTimeout } = config2;
  if (Number.isFinite(terminateWorkerTimeout) && terminateWorkerTimeout >= 0) {
    if (workerData.terminated) {
      workerData.terminated = false;
    } else {
      workerData.terminateTimeout = setTimeout(async () => {
        pool = pool.filter((data) => data != workerData);
        try {
          await workerData.terminate();
        } catch (_error) {
        }
      }, terminateWorkerTimeout);
    }
  }
}
function clearTerminateTimeout(workerData) {
  const { terminateTimeout } = workerData;
  if (terminateTimeout) {
    clearTimeout(terminateTimeout);
    workerData.terminateTimeout = null;
  }
}
async function terminateWorkers() {
  await Promise.allSettled(pool.map((workerData) => {
    clearTerminateTimeout(workerData);
    return workerData.terminate();
  }));
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/z-worker-inline.js
function e(e2) {
  const t = () => URL.createObjectURL(new Blob(['const{Array:e,Object:t,Number:n,Math:r,Error:s,Uint8Array:i,Uint16Array:o,Uint32Array:c,Int32Array:f,Map:a,DataView:l,Promise:u,TextEncoder:w,crypto:h,postMessage:d,TransformStream:p,ReadableStream:y,WritableStream:m,CompressionStream:b,DecompressionStream:g}=self,k=void 0,v="undefined",S="function";class z{constructor(e){return class extends p{constructor(t,n){const r=new e(n);super({transform(e,t){t.enqueue(r.append(e))},flush(e){const t=r.flush();t&&e.enqueue(t)}})}}}}const C=[];for(let e=0;256>e;e++){let t=e;for(let e=0;8>e;e++)1&t?t=t>>>1^3988292384:t>>>=1;C[e]=t}class x{constructor(e){this.t=e||-1}append(e){let t=0|this.t;for(let n=0,r=0|e.length;r>n;n++)t=t>>>8^C[255&(t^e[n])];this.t=t}get(){return~this.t}}class A extends p{constructor(){let e;const t=new x;super({transform(e,n){t.append(e),n.enqueue(e)},flush(){const n=new i(4);new l(n.buffer).setUint32(0,t.get()),e.value=n}}),e=this}}const _={concat(e,t){if(0===e.length||0===t.length)return e.concat(t);const n=e[e.length-1],r=_.i(n);return 32===r?e.concat(t):_.o(t,r,0|n,e.slice(0,e.length-1))},l(e){const t=e.length;if(0===t)return 0;const n=e[t-1];return 32*(t-1)+_.i(n)},u(e,t){if(32*e.length<t)return e;const n=(e=e.slice(0,r.ceil(t/32))).length;return t&=31,n>0&&t&&(e[n-1]=_.h(t,e[n-1]&2147483648>>t-1,1)),e},h:(e,t,n)=>32===e?t:(n?0|t:t<<32-e)+1099511627776*e,i:e=>r.round(e/1099511627776)||32,o(e,t,n,r){for(void 0===r&&(r=[]);t>=32;t-=32)r.push(n),n=0;if(0===t)return r.concat(e);for(let s=0;s<e.length;s++)r.push(n|e[s]>>>t),n=e[s]<<32-t;const s=e.length?e[e.length-1]:0,i=_.i(s);return r.push(_.h(t+i&31,t+i>32?n:r.pop(),1)),r}},I={p:{m(e){const t=_.l(e)/8,n=new i(t);let r;for(let s=0;t>s;s++)0==(3&s)&&(r=e[s/4]),n[s]=r>>>24,r<<=8;return n},g(e){const t=[];let n,r=0;for(n=0;n<e.length;n++)r=r<<8|e[n],3==(3&n)&&(t.push(r),r=0);return 3&n&&t.push(_.h(8*(3&n),r)),t}}},P=class{constructor(e){const t=this;t.blockSize=512,t.k=[1732584193,4023233417,2562383102,271733878,3285377520],t.v=[1518500249,1859775393,2400959708,3395469782],e?(t.S=e.S.slice(0),t.C=e.C.slice(0),t.A=e.A):t.reset()}reset(){const e=this;return e.S=e.k.slice(0),e.C=[],e.A=0,e}update(e){const t=this;"string"==typeof e&&(e=I._.g(e));const n=t.C=_.concat(t.C,e),r=t.A,i=t.A=r+_.l(e);if(i>9007199254740991)throw new s("Cannot hash more than 2^53 - 1 bits");const o=new c(n);let f=0;for(let e=t.blockSize+r-(t.blockSize+r&t.blockSize-1);i>=e;e+=t.blockSize)t.I(o.subarray(16*f,16*(f+1))),f+=1;return n.splice(0,16*f),t}P(){const e=this;let t=e.C;const n=e.S;t=_.concat(t,[_.h(1,1)]);for(let e=t.length+2;15&e;e++)t.push(0);for(t.push(r.floor(e.A/4294967296)),t.push(0|e.A);t.length;)e.I(t.splice(0,16));return e.reset(),n}D(e,t,n,r){return e>19?e>39?e>59?e>79?void 0:t^n^r:t&n|t&r|n&r:t^n^r:t&n|~t&r}V(e,t){return t<<e|t>>>32-e}I(t){const n=this,s=n.S,i=e(80);for(let e=0;16>e;e++)i[e]=t[e];let o=s[0],c=s[1],f=s[2],a=s[3],l=s[4];for(let e=0;79>=e;e++){16>e||(i[e]=n.V(1,i[e-3]^i[e-8]^i[e-14]^i[e-16]));const t=n.V(5,o)+n.D(e,c,f,a)+l+i[e]+n.v[r.floor(e/20)]|0;l=a,a=f,f=n.V(30,c),c=o,o=t}s[0]=s[0]+o|0,s[1]=s[1]+c|0,s[2]=s[2]+f|0,s[3]=s[3]+a|0,s[4]=s[4]+l|0}},D={getRandomValues(e){const t=new c(e.buffer),n=e=>{let t=987654321;const n=4294967295;return()=>(t=36969*(65535&t)+(t>>16)&n,(((t<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n)/4294967296+.5)*(r.random()>.5?1:-1))};for(let s,i=0;i<e.length;i+=4){const e=n(4294967296*(s||r.random()));s=987654071*e(),t[i/4]=4294967296*e()|0}return e}},V={importKey:e=>new V.R(I.p.g(e)),B(e,t,n,r){if(n=n||1e4,0>r||0>n)throw new s("invalid params to pbkdf2");const i=1+(r>>5)<<2;let o,c,f,a,u;const w=new ArrayBuffer(i),h=new l(w);let d=0;const p=_;for(t=I.p.g(t),u=1;(i||1)>d;u++){for(o=c=e.encrypt(p.concat(t,[u])),f=1;n>f;f++)for(c=e.encrypt(c),a=0;a<c.length;a++)o[a]^=c[a];for(f=0;(i||1)>d&&f<o.length;f++)h.setInt32(d,o[f]),d+=4}return w.slice(0,r/8)},R:class{constructor(e){const t=this,n=t.M=P,r=[[],[]];t.U=[new n,new n];const s=t.U[0].blockSize/32;e.length>s&&(e=(new n).update(e).P());for(let t=0;s>t;t++)r[0][t]=909522486^e[t],r[1][t]=1549556828^e[t];t.U[0].update(r[0]),t.U[1].update(r[1]),t.K=new n(t.U[0])}reset(){const e=this;e.K=new e.M(e.U[0]),e.N=!1}update(e){this.N=!0,this.K.update(e)}digest(){const e=this,t=e.K.P(),n=new e.M(e.U[1]).update(t).P();return e.reset(),n}encrypt(e){if(this.N)throw new s("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}}},R=typeof h!=v&&typeof h.getRandomValues==S,B="Invalid password",E="Invalid signature",M="zipjs-abort-check-password";function U(e){return R?h.getRandomValues(e):D.getRandomValues(e)}const K=16,N={name:"PBKDF2"},O=t.assign({hash:{name:"HMAC"}},N),T=t.assign({iterations:1e3,hash:{name:"SHA-1"}},N),W=["deriveBits"],j=[8,12,16],H=[16,24,32],L=10,F=[0,0,0,0],q=typeof h!=v,G=q&&h.subtle,J=q&&typeof G!=v,Q=I.p,X=class{constructor(e){const t=this;t.O=[[[],[],[],[],[]],[[],[],[],[],[]]],t.O[0][0][0]||t.T();const n=t.O[0][4],r=t.O[1],i=e.length;let o,c,f,a=1;if(4!==i&&6!==i&&8!==i)throw new s("invalid aes key size");for(t.v=[c=e.slice(0),f=[]],o=i;4*i+28>o;o++){let e=c[o-1];(o%i==0||8===i&&o%i==4)&&(e=n[e>>>24]<<24^n[e>>16&255]<<16^n[e>>8&255]<<8^n[255&e],o%i==0&&(e=e<<8^e>>>24^a<<24,a=a<<1^283*(a>>7))),c[o]=c[o-i]^e}for(let e=0;o;e++,o--){const t=c[3&e?o:o-4];f[e]=4>=o||4>e?t:r[0][n[t>>>24]]^r[1][n[t>>16&255]]^r[2][n[t>>8&255]]^r[3][n[255&t]]}}encrypt(e){return this.W(e,0)}decrypt(e){return this.W(e,1)}T(){const e=this.O[0],t=this.O[1],n=e[4],r=t[4],s=[],i=[];let o,c,f,a;for(let e=0;256>e;e++)i[(s[e]=e<<1^283*(e>>7))^e]=e;for(let l=o=0;!n[l];l^=c||1,o=i[o]||1){let i=o^o<<1^o<<2^o<<3^o<<4;i=i>>8^255&i^99,n[l]=i,r[i]=l,a=s[f=s[c=s[l]]];let u=16843009*a^65537*f^257*c^16843008*l,w=257*s[i]^16843008*i;for(let n=0;4>n;n++)e[n][l]=w=w<<24^w>>>8,t[n][i]=u=u<<24^u>>>8}for(let n=0;5>n;n++)e[n]=e[n].slice(0),t[n]=t[n].slice(0)}W(e,t){if(4!==e.length)throw new s("invalid aes block size");const n=this.v[t],r=n.length/4-2,i=[0,0,0,0],o=this.O[t],c=o[0],f=o[1],a=o[2],l=o[3],u=o[4];let w,h,d,p=e[0]^n[0],y=e[t?3:1]^n[1],m=e[2]^n[2],b=e[t?1:3]^n[3],g=4;for(let e=0;r>e;e++)w=c[p>>>24]^f[y>>16&255]^a[m>>8&255]^l[255&b]^n[g],h=c[y>>>24]^f[m>>16&255]^a[b>>8&255]^l[255&p]^n[g+1],d=c[m>>>24]^f[b>>16&255]^a[p>>8&255]^l[255&y]^n[g+2],b=c[b>>>24]^f[p>>16&255]^a[y>>8&255]^l[255&m]^n[g+3],g+=4,p=w,y=h,m=d;for(let e=0;4>e;e++)i[t?3&-e:e]=u[p>>>24]<<24^u[y>>16&255]<<16^u[m>>8&255]<<8^u[255&b]^n[g++],w=p,p=y,y=m,m=b,b=w;return i}},Y=class{constructor(e,t){this.j=e,this.H=t,this.L=t}reset(){this.L=this.H}update(e){return this.F(this.j,e,this.L)}q(e){if(255==(e>>24&255)){let t=e>>16&255,n=e>>8&255,r=255&e;255===t?(t=0,255===n?(n=0,255===r?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}else e+=1<<24;return e}G(e){0===(e[0]=this.q(e[0]))&&(e[1]=this.q(e[1]))}F(e,t,n){let r;if(!(r=t.length))return[];const s=_.l(t);for(let s=0;r>s;s+=4){this.G(n);const r=e.encrypt(n);t[s]^=r[0],t[s+1]^=r[1],t[s+2]^=r[2],t[s+3]^=r[3]}return _.u(t,s)}},Z=V.R;let $=q&&J&&typeof G.importKey==S,ee=q&&J&&typeof G.deriveBits==S;class te extends p{constructor({password:e,rawPassword:n,signed:r,encryptionStrength:o,checkPasswordOnly:c}){super({start(){t.assign(this,{ready:new u((e=>this.J=e)),password:ie(e,n),signed:r,X:o-1,pending:new i})},async transform(e,t){const n=this,{password:r,X:o,J:f,ready:a}=n;r?(await(async(e,t,n,r)=>{const i=await se(e,t,n,ce(r,0,j[t])),o=ce(r,j[t]);if(i[0]!=o[0]||i[1]!=o[1])throw new s(B)})(n,o,r,ce(e,0,j[o]+2)),e=ce(e,j[o]+2),c?t.error(new s(M)):f()):await a;const l=new i(e.length-L-(e.length-L)%K);t.enqueue(re(n,e,l,0,L,!0))},async flush(e){const{signed:t,Y:n,Z:r,pending:o,ready:c}=this;if(r&&n){await c;const f=ce(o,0,o.length-L),a=ce(o,o.length-L);let l=new i;if(f.length){const e=ae(Q,f);r.update(e);const t=n.update(e);l=fe(Q,t)}if(t){const e=ce(fe(Q,r.digest()),0,L);for(let t=0;L>t;t++)if(e[t]!=a[t])throw new s(E)}e.enqueue(l)}}})}}class ne extends p{constructor({password:e,rawPassword:n,encryptionStrength:r}){let s;super({start(){t.assign(this,{ready:new u((e=>this.J=e)),password:ie(e,n),X:r-1,pending:new i})},async transform(e,t){const n=this,{password:r,X:s,J:o,ready:c}=n;let f=new i;r?(f=await(async(e,t,n)=>{const r=U(new i(j[t]));return oe(r,await se(e,t,n,r))})(n,s,r),o()):await c;const a=new i(f.length+e.length-e.length%K);a.set(f,0),t.enqueue(re(n,e,a,f.length,0))},async flush(e){const{Y:t,Z:n,pending:r,ready:o}=this;if(n&&t){await o;let c=new i;if(r.length){const e=t.update(ae(Q,r));n.update(e),c=fe(Q,e)}s.signature=fe(Q,n.digest()).slice(0,L),e.enqueue(oe(c,s.signature))}}}),s=this}}function re(e,t,n,r,s,o){const{Y:c,Z:f,pending:a}=e,l=t.length-s;let u;for(a.length&&(t=oe(a,t),n=((e,t)=>{if(t&&t>e.length){const n=e;(e=new i(t)).set(n,0)}return e})(n,l-l%K)),u=0;l-K>=u;u+=K){const e=ae(Q,ce(t,u,u+K));o&&f.update(e);const s=c.update(e);o||f.update(s),n.set(fe(Q,s),u+r)}return e.pending=ce(t,u),n}async function se(n,r,s,o){n.password=null;const c=await(async(e,t,n,r,s)=>{if(!$)return V.importKey(t);try{return await G.importKey("raw",t,n,!1,s)}catch(e){return $=!1,V.importKey(t)}})(0,s,O,0,W),f=await(async(e,t,n)=>{if(!ee)return V.B(t,e.salt,T.iterations,n);try{return await G.deriveBits(e,t,n)}catch(r){return ee=!1,V.B(t,e.salt,T.iterations,n)}})(t.assign({salt:o},T),c,8*(2*H[r]+2)),a=new i(f),l=ae(Q,ce(a,0,H[r])),u=ae(Q,ce(a,H[r],2*H[r])),w=ce(a,2*H[r]);return t.assign(n,{keys:{key:l,$:u,passwordVerification:w},Y:new Y(new X(l),e.from(F)),Z:new Z(u)}),w}function ie(e,t){return t===k?(e=>{if(typeof w==v){const t=new i((e=unescape(encodeURIComponent(e))).length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}return(new w).encode(e)})(e):t}function oe(e,t){let n=e;return e.length+t.length&&(n=new i(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function ce(e,t,n){return e.subarray(t,n)}function fe(e,t){return e.m(t)}function ae(e,t){return e.g(t)}class le extends p{constructor({password:e,passwordVerification:n,checkPasswordOnly:r}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;if(n.password){const t=we(n,e.subarray(0,12));if(n.password=null,t[11]!=n.passwordVerification)throw new s(B);e=e.subarray(12)}r?t.error(new s(M)):t.enqueue(we(n,e))}})}}class ue extends p{constructor({password:e,passwordVerification:n}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;let r,s;if(n.password){n.password=null;const t=U(new i(12));t[11]=n.passwordVerification,r=new i(e.length+t.length),r.set(he(n,t),0),s=12}else r=new i(e.length),s=0;r.set(he(n,e),s),t.enqueue(r)}})}}function we(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ye(e)^t[r],pe(e,n[r]);return n}function he(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ye(e)^t[r],pe(e,t[r]);return n}function de(e,n){const r=[305419896,591751049,878082192];t.assign(e,{keys:r,ee:new x(r[0]),te:new x(r[2])});for(let t=0;t<n.length;t++)pe(e,n.charCodeAt(t))}function pe(e,t){let[n,s,i]=e.keys;e.ee.append([t]),n=~e.ee.get(),s=be(r.imul(be(s+me(n)),134775813)+1),e.te.append([s>>>24]),i=~e.te.get(),e.keys=[n,s,i]}function ye(e){const t=2|e.keys[2];return me(r.imul(t,1^t)>>>8)}function me(e){return 255&e}function be(e){return 4294967295&e}const ge="deflate-raw";class ke extends p{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:r}){super({});const{compressed:s,encrypted:i,useCompressionStream:o,zipCrypto:c,signed:f,level:a}=e,u=this;let w,h,d=Se(super.readable);i&&!c||!f||(w=new A,d=xe(d,w)),s&&(d=Ce(d,o,{level:a,chunkSize:t},r,n)),i&&(c?d=xe(d,new ue(e)):(h=new ne(e),d=xe(d,h))),ze(u,d,(()=>{let e;i&&!c&&(e=h.signature),i&&!c||!f||(e=new l(w.value.buffer).getUint32(0)),u.signature=e}))}}class ve extends p{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:r}){super({});const{zipCrypto:i,encrypted:o,signed:c,signature:f,compressed:a,useCompressionStream:u}=e;let w,h,d=Se(super.readable);o&&(i?d=xe(d,new le(e)):(h=new te(e),d=xe(d,h))),a&&(d=Ce(d,u,{chunkSize:t},r,n)),o&&!i||!c||(w=new A,d=xe(d,w)),ze(this,d,(()=>{if((!o||i)&&c){const e=new l(w.value.buffer);if(f!=e.getUint32(0,!1))throw new s(E)}}))}}function Se(e){return xe(e,new p({transform(e,t){e&&e.length&&t.enqueue(e)}}))}function ze(e,n,r){n=xe(n,new p({flush:r})),t.defineProperty(e,"readable",{get:()=>n})}function Ce(e,t,n,r,s){try{e=xe(e,new(t&&r?r:s)(ge,n))}catch(r){if(!t)return e;try{e=xe(e,new s(ge,n))}catch(t){return e}}return e}function xe(e,t){return e.pipeThrough(t)}const Ae="data",_e="close";class Ie extends p{constructor(e,n){super({});const r=this,{codecType:s}=e;let i;s.startsWith("deflate")?i=ke:s.startsWith("inflate")&&(i=ve);let o=0,c=0;const f=new i(e,n),a=super.readable,l=new p({transform(e,t){e&&e.length&&(c+=e.length,t.enqueue(e))},flush(){t.assign(r,{inputSize:c})}}),u=new p({transform(e,t){e&&e.length&&(o+=e.length,t.enqueue(e))},flush(){const{signature:e}=f;t.assign(r,{signature:e,outputSize:o,inputSize:c})}});t.defineProperty(r,"readable",{get:()=>a.pipeThrough(l).pipeThrough(f).pipeThrough(u)})}}class Pe extends p{constructor(e){let t;super({transform:function n(r,s){if(t){const e=new i(t.length+r.length);e.set(t),e.set(r,t.length),r=e,t=null}r.length>e?(s.enqueue(r.slice(0,e)),n(r.slice(e),s)):t=r},flush(e){t&&t.length&&e.enqueue(t)}})}}const De=new a,Ve=new a;let Re,Be=0,Ee=!0;async function Me(e){try{const{options:t,scripts:r,config:s}=e;if(r&&r.length)try{Ee?importScripts.apply(k,r):await Ue(r)}catch(e){Ee=!1,await Ue(r)}self.initCodec&&self.initCodec(),s.CompressionStreamNative=self.CompressionStream,s.DecompressionStreamNative=self.DecompressionStream,self.Deflate&&(s.CompressionStream=new z(self.Deflate)),self.Inflate&&(s.DecompressionStream=new z(self.Inflate));const i={highWaterMark:1},o=e.readable||new y({async pull(e){const t=new u((e=>De.set(Be,e)));Ke({type:"pull",messageId:Be}),Be=(Be+1)%n.MAX_SAFE_INTEGER;const{value:r,done:s}=await t;e.enqueue(r),s&&e.close()}},i),c=e.writable||new m({async write(e){let t;const r=new u((e=>t=e));Ve.set(Be,t),Ke({type:Ae,value:e,messageId:Be}),Be=(Be+1)%n.MAX_SAFE_INTEGER,await r}},i),f=new Ie(t,s);Re=new AbortController;const{signal:a}=Re;await o.pipeThrough(f).pipeThrough(new Pe(s.chunkSize)).pipeTo(c,{signal:a,preventClose:!0,preventAbort:!0});try{await c.getWriter().close()}catch(e){}const{signature:l,inputSize:w,outputSize:h}=f;Ke({type:_e,result:{signature:l,inputSize:w,outputSize:h}})}catch(e){Ne(e)}}async function Ue(e){for(const t of e)await import(t)}function Ke(e){let{value:t}=e;if(t)if(t.length)try{t=new i(t),e.value=t.buffer,d(e,[e.value])}catch(t){d(e)}else d(e);else d(e)}function Ne(e=new s("Unknown error")){const{message:t,stack:n,code:r,name:i}=e;d({error:{message:t,stack:n,code:r,name:i}})}addEventListener("message",(({data:e})=>{const{type:t,messageId:n,value:r,done:s}=e;try{if("start"==t&&Me(e),t==Ae){const e=De.get(n);De.delete(n),e({value:new i(r),done:s})}if("ack"==t){const e=Ve.get(n);Ve.delete(n),e()}t==_e&&Re.abort()}catch(e){Ne(e)}}));const Oe=-2;function Te(t){return We(t.map((([t,n])=>new e(t).fill(n,0,t))))}function We(t){return t.reduce(((t,n)=>t.concat(e.isArray(n)?We(n):n)),[])}const je=[0,1,2,3].concat(...Te([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function He(){const e=this;function t(e,t){let n=0;do{n|=1&e,e>>>=1,n<<=1}while(--t>0);return n>>>1}e.ne=n=>{const s=e.re,i=e.ie.se,o=e.ie.oe;let c,f,a,l=-1;for(n.ce=0,n.fe=573,c=0;o>c;c++)0!==s[2*c]?(n.ae[++n.ce]=l=c,n.le[c]=0):s[2*c+1]=0;for(;2>n.ce;)a=n.ae[++n.ce]=2>l?++l:0,s[2*a]=1,n.le[a]=0,n.ue--,i&&(n.we-=i[2*a+1]);for(e.he=l,c=r.floor(n.ce/2);c>=1;c--)n.de(s,c);a=o;do{c=n.ae[1],n.ae[1]=n.ae[n.ce--],n.de(s,1),f=n.ae[1],n.ae[--n.fe]=c,n.ae[--n.fe]=f,s[2*a]=s[2*c]+s[2*f],n.le[a]=r.max(n.le[c],n.le[f])+1,s[2*c+1]=s[2*f+1]=a,n.ae[1]=a++,n.de(s,1)}while(n.ce>=2);n.ae[--n.fe]=n.ae[1],(t=>{const n=e.re,r=e.ie.se,s=e.ie.pe,i=e.ie.ye,o=e.ie.me;let c,f,a,l,u,w,h=0;for(l=0;15>=l;l++)t.be[l]=0;for(n[2*t.ae[t.fe]+1]=0,c=t.fe+1;573>c;c++)f=t.ae[c],l=n[2*n[2*f+1]+1]+1,l>o&&(l=o,h++),n[2*f+1]=l,f>e.he||(t.be[l]++,u=0,i>f||(u=s[f-i]),w=n[2*f],t.ue+=w*(l+u),r&&(t.we+=w*(r[2*f+1]+u)));if(0!==h){do{for(l=o-1;0===t.be[l];)l--;t.be[l]--,t.be[l+1]+=2,t.be[o]--,h-=2}while(h>0);for(l=o;0!==l;l--)for(f=t.be[l];0!==f;)a=t.ae[--c],a>e.he||(n[2*a+1]!=l&&(t.ue+=(l-n[2*a+1])*n[2*a],n[2*a+1]=l),f--)}})(n),((e,n,r)=>{const s=[];let i,o,c,f=0;for(i=1;15>=i;i++)s[i]=f=f+r[i-1]<<1;for(o=0;n>=o;o++)c=e[2*o+1],0!==c&&(e[2*o]=t(s[c]++,c))})(s,e.he,n.be)}}function Le(e,t,n,r,s){const i=this;i.se=e,i.pe=t,i.ye=n,i.oe=r,i.me=s}He.ge=[0,1,2,3,4,5,6,7].concat(...Te([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),He.ke=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],He.ve=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],He.Se=e=>256>e?je[e]:je[256+(e>>>7)],He.ze=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],He.Ce=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],He.xe=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],He.Ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];const Fe=Te([[144,8],[112,9],[24,7],[8,8]]);Le._e=We([12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227].map(((e,t)=>[e,Fe[t]])));const qe=Te([[30,5]]);function Ge(e,t,n,r,s){const i=this;i.Ie=e,i.Pe=t,i.De=n,i.Ve=r,i.Re=s}Le.Be=We([0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23].map(((e,t)=>[e,qe[t]]))),Le.Ee=new Le(Le._e,He.ze,257,286,15),Le.Me=new Le(Le.Be,He.Ce,0,30,15),Le.Ue=new Le(null,He.xe,0,19,7);const Je=[new Ge(0,0,0,0,0),new Ge(4,4,8,4,1),new Ge(4,5,16,8,1),new Ge(4,6,32,32,1),new Ge(4,4,16,16,2),new Ge(8,16,32,32,2),new Ge(8,16,128,128,2),new Ge(8,32,128,256,2),new Ge(32,128,258,1024,2),new Ge(32,258,258,4096,2)],Qe=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],Xe=113,Ye=666,Ze=262;function $e(e,t,n,r){const s=e[2*t],i=e[2*n];return i>s||s==i&&r[t]<=r[n]}function et(){const e=this;let t,n,s,c,f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z,C,x,A,_,I,P,D,V,R,B,E,M,U;const K=new He,N=new He,O=new He;let T,W,j,H,L,F;function q(){let t;for(t=0;286>t;t++)E[2*t]=0;for(t=0;30>t;t++)M[2*t]=0;for(t=0;19>t;t++)U[2*t]=0;E[512]=1,e.ue=e.we=0,W=j=0}function G(e,t){let n,r=-1,s=e[1],i=0,o=7,c=4;0===s&&(o=138,c=3),e[2*(t+1)+1]=65535;for(let f=0;t>=f;f++)n=s,s=e[2*(f+1)+1],++i<o&&n==s||(c>i?U[2*n]+=i:0!==n?(n!=r&&U[2*n]++,U[32]++):i>10?U[36]++:U[34]++,i=0,r=n,0===s?(o=138,c=3):n==s?(o=6,c=3):(o=7,c=4))}function J(t){e.Ke[e.pending++]=t}function Q(e){J(255&e),J(e>>>8&255)}function X(e,t){let n;const r=t;F>16-r?(n=e,L|=n<<F&65535,Q(L),L=n>>>16-F,F+=r-16):(L|=e<<F&65535,F+=r)}function Y(e,t){const n=2*e;X(65535&t[n],65535&t[n+1])}function Z(e,t){let n,r,s=-1,i=e[1],o=0,c=7,f=4;for(0===i&&(c=138,f=3),n=0;t>=n;n++)if(r=i,i=e[2*(n+1)+1],++o>=c||r!=i){if(f>o)do{Y(r,U)}while(0!=--o);else 0!==r?(r!=s&&(Y(r,U),o--),Y(16,U),X(o-3,2)):o>10?(Y(18,U),X(o-11,7)):(Y(17,U),X(o-3,3));o=0,s=r,0===i?(c=138,f=3):r==i?(c=6,f=3):(c=7,f=4)}}function $(){16==F?(Q(L),L=0,F=0):8>F||(J(255&L),L>>>=8,F-=8)}function ee(t,n){let s,i,o;if(e.Ne[W]=t,e.Oe[W]=255&n,W++,0===t?E[2*n]++:(j++,t--,E[2*(He.ge[n]+256+1)]++,M[2*He.Se(t)]++),0==(8191&W)&&D>2){for(s=8*W,i=C-k,o=0;30>o;o++)s+=M[2*o]*(5+He.Ce[o]);if(s>>>=3,j<r.floor(W/2)&&s<r.floor(i/2))return!0}return W==T-1}function te(t,n){let r,s,i,o,c=0;if(0!==W)do{r=e.Ne[c],s=e.Oe[c],c++,0===r?Y(s,t):(i=He.ge[s],Y(i+256+1,t),o=He.ze[i],0!==o&&(s-=He.ke[i],X(s,o)),r--,i=He.Se(r),Y(i,n),o=He.Ce[i],0!==o&&(r-=He.ve[i],X(r,o)))}while(W>c);Y(256,t),H=t[513]}function ne(){F>8?Q(L):F>0&&J(255&L),L=0,F=0}function re(t,n,r){X(0+(r?1:0),3),((t,n)=>{ne(),H=8,Q(n),Q(~n),e.Ke.set(u.subarray(t,t+n),e.pending),e.pending+=n})(t,n)}function se(n){((t,n,r)=>{let s,i,o=0;D>0?(K.ne(e),N.ne(e),o=(()=>{let t;for(G(E,K.he),G(M,N.he),O.ne(e),t=18;t>=3&&0===U[2*He.Ae[t]+1];t--);return e.ue+=14+3*(t+1),t})(),s=e.ue+3+7>>>3,i=e.we+3+7>>>3,i>s||(s=i)):s=i=n+5,n+4>s||-1==t?i==s?(X(2+(r?1:0),3),te(Le._e,Le.Be)):(X(4+(r?1:0),3),((e,t,n)=>{let r;for(X(e-257,5),X(t-1,5),X(n-4,4),r=0;n>r;r++)X(U[2*He.Ae[r]+1],3);Z(E,e-1),Z(M,t-1)})(K.he+1,N.he+1,o+1),te(E,M)):re(t,n,r),q(),r&&ne()})(0>k?-1:k,C-k,n),k=C,t.Te()}function ie(){let e,n,r,s;do{if(s=w-A-C,0===s&&0===C&&0===A)s=f;else if(-1==s)s--;else if(C>=f+f-Ze){u.set(u.subarray(f,f+f),0),x-=f,C-=f,k-=f,e=y,r=e;do{n=65535&d[--r],d[r]=f>n?0:n-f}while(0!=--e);e=f,r=e;do{n=65535&h[--r],h[r]=f>n?0:n-f}while(0!=--e);s+=f}if(0===t.We)return;e=t.je(u,C+A,s),A+=e,3>A||(p=255&u[C],p=(p<<g^255&u[C+1])&b)}while(Ze>A&&0!==t.We)}function oe(e){let t,n,r=I,s=C,i=_;const o=C>f-Ze?C-(f-Ze):0;let c=B;const a=l,w=C+258;let d=u[s+i-1],p=u[s+i];R>_||(r>>=2),c>A&&(c=A);do{if(t=e,u[t+i]==p&&u[t+i-1]==d&&u[t]==u[s]&&u[++t]==u[s+1]){s+=2,t++;do{}while(u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&w>s);if(n=258-(w-s),s=w-258,n>i){if(x=e,i=n,n>=c)break;d=u[s+i-1],p=u[s+i]}}}while((e=65535&h[e&a])>o&&0!=--r);return i>A?A:i}e.le=[],e.be=[],e.ae=[],E=[],M=[],U=[],e.de=(t,n)=>{const r=e.ae,s=r[n];let i=n<<1;for(;i<=e.ce&&(i<e.ce&&$e(t,r[i+1],r[i],e.le)&&i++,!$e(t,s,r[i],e.le));)r[n]=r[i],n=i,i<<=1;r[n]=s},e.He=(t,S,x,W,j,G)=>(W||(W=8),j||(j=8),G||(G=0),t.Le=null,-1==S&&(S=6),1>j||j>9||8!=W||9>x||x>15||0>S||S>9||0>G||G>2?Oe:(t.Fe=e,a=x,f=1<<a,l=f-1,m=j+7,y=1<<m,b=y-1,g=r.floor((m+3-1)/3),u=new i(2*f),h=[],d=[],T=1<<j+6,e.Ke=new i(4*T),s=4*T,e.Ne=new o(T),e.Oe=new i(T),D=S,V=G,(t=>(t.qe=t.Ge=0,t.Le=null,e.pending=0,e.Je=0,n=Xe,c=0,K.re=E,K.ie=Le.Ee,N.re=M,N.ie=Le.Me,O.re=U,O.ie=Le.Ue,L=0,F=0,H=8,q(),(()=>{w=2*f,d[y-1]=0;for(let e=0;y-1>e;e++)d[e]=0;P=Je[D].Pe,R=Je[D].Ie,B=Je[D].De,I=Je[D].Ve,C=0,k=0,A=0,v=_=2,z=0,p=0})(),0))(t))),e.Qe=()=>42!=n&&n!=Xe&&n!=Ye?Oe:(e.Oe=null,e.Ne=null,e.Ke=null,d=null,h=null,u=null,e.Fe=null,n==Xe?-3:0),e.Xe=(e,t,n)=>{let r=0;return-1==t&&(t=6),0>t||t>9||0>n||n>2?Oe:(Je[D].Re!=Je[t].Re&&0!==e.qe&&(r=e.Ye(1)),D!=t&&(D=t,P=Je[D].Pe,R=Je[D].Ie,B=Je[D].De,I=Je[D].Ve),V=n,r)},e.Ze=(e,t,r)=>{let s,i=r,o=0;if(!t||42!=n)return Oe;if(3>i)return 0;for(i>f-Ze&&(i=f-Ze,o=r-i),u.set(t.subarray(o,o+i),0),C=i,k=i,p=255&u[0],p=(p<<g^255&u[1])&b,s=0;i-3>=s;s++)p=(p<<g^255&u[s+2])&b,h[s&l]=d[p],d[p]=s;return 0},e.Ye=(r,i)=>{let o,w,m,I,R;if(i>4||0>i)return Oe;if(!r.$e||!r.et&&0!==r.We||n==Ye&&4!=i)return r.Le=Qe[4],Oe;if(0===r.tt)return r.Le=Qe[7],-5;var B;if(t=r,I=c,c=i,42==n&&(w=8+(a-8<<4)<<8,m=(D-1&255)>>1,m>3&&(m=3),w|=m<<6,0!==C&&(w|=32),w+=31-w%31,n=Xe,J((B=w)>>8&255),J(255&B)),0!==e.pending){if(t.Te(),0===t.tt)return c=-1,0}else if(0===t.We&&I>=i&&4!=i)return t.Le=Qe[7],-5;if(n==Ye&&0!==t.We)return r.Le=Qe[7],-5;if(0!==t.We||0!==A||0!=i&&n!=Ye){switch(R=-1,Je[D].Re){case 0:R=(e=>{let n,r=65535;for(r>s-5&&(r=s-5);;){if(1>=A){if(ie(),0===A&&0==e)return 0;if(0===A)break}if(C+=A,A=0,n=k+r,(0===C||C>=n)&&(A=C-n,C=n,se(!1),0===t.tt))return 0;if(C-k>=f-Ze&&(se(!1),0===t.tt))return 0}return se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i);break;case 1:R=(e=>{let n,r=0;for(;;){if(Ze>A){if(ie(),Ze>A&&0==e)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C),0===r||(C-r&65535)>f-Ze||2!=V&&(v=oe(r)),3>v)n=ee(0,255&u[C]),A--,C++;else if(n=ee(C-x,v-3),A-=v,v>P||3>A)C+=v,v=0,p=255&u[C],p=(p<<g^255&u[C+1])&b;else{v--;do{C++,p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C}while(0!=--v);C++}if(n&&(se(!1),0===t.tt))return 0}return se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i);break;case 2:R=(e=>{let n,r,s=0;for(;;){if(Ze>A){if(ie(),Ze>A&&0==e)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C),_=v,S=x,v=2,0!==s&&P>_&&f-Ze>=(C-s&65535)&&(2!=V&&(v=oe(s)),5>=v&&(1==V||3==v&&C-x>4096)&&(v=2)),3>_||v>_)if(0!==z){if(n=ee(0,255&u[C-1]),n&&se(!1),C++,A--,0===t.tt)return 0}else z=1,C++,A--;else{r=C+A-3,n=ee(C-1-S,_-3),A-=_-1,_-=2;do{++C>r||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C)}while(0!=--_);if(z=0,v=2,C++,n&&(se(!1),0===t.tt))return 0}}return 0!==z&&(n=ee(0,255&u[C-1]),z=0),se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i)}if(2!=R&&3!=R||(n=Ye),0==R||2==R)return 0===t.tt&&(c=-1),0;if(1==R){if(1==i)X(2,3),Y(256,Le._e),$(),9>1+H+10-F&&(X(2,3),Y(256,Le._e),$()),H=7;else if(re(0,0,!1),3==i)for(o=0;y>o;o++)d[o]=0;if(t.Te(),0===t.tt)return c=-1,0}}return 4!=i?0:1}}function tt(){const e=this;e.nt=0,e.rt=0,e.We=0,e.qe=0,e.tt=0,e.Ge=0}function nt(e){const t=new tt,n=(o=e&&e.chunkSize?e.chunkSize:65536)+5*(r.floor(o/16383)+1);var o;const c=new i(n);let f=e?e.level:-1;void 0===f&&(f=-1),t.He(f),t.$e=c,this.append=(e,r)=>{let o,f,a=0,l=0,u=0;const w=[];if(e.length){t.nt=0,t.et=e,t.We=e.length;do{if(t.rt=0,t.tt=n,o=t.Ye(0),0!=o)throw new s("deflating: "+t.Le);t.rt&&(t.rt==n?w.push(new i(c)):w.push(c.subarray(0,t.rt))),u+=t.rt,r&&t.nt>0&&t.nt!=a&&(r(t.nt),a=t.nt)}while(t.We>0||0===t.tt);return w.length>1?(f=new i(u),w.forEach((e=>{f.set(e,l),l+=e.length}))):f=w[0]?new i(w[0]):new i,f}},this.flush=()=>{let e,r,o=0,f=0;const a=[];do{if(t.rt=0,t.tt=n,e=t.Ye(4),1!=e&&0!=e)throw new s("deflating: "+t.Le);n-t.tt>0&&a.push(c.slice(0,t.rt)),f+=t.rt}while(t.We>0||0===t.tt);return t.Qe(),r=new i(f),a.forEach((e=>{r.set(e,o),o+=e.length})),r}}tt.prototype={He(e,t){const n=this;return n.Fe=new et,t||(t=15),n.Fe.He(n,e,t)},Ye(e){const t=this;return t.Fe?t.Fe.Ye(t,e):Oe},Qe(){const e=this;if(!e.Fe)return Oe;const t=e.Fe.Qe();return e.Fe=null,t},Xe(e,t){const n=this;return n.Fe?n.Fe.Xe(n,e,t):Oe},Ze(e,t){const n=this;return n.Fe?n.Fe.Ze(n,e,t):Oe},je(e,t,n){const r=this;let s=r.We;return s>n&&(s=n),0===s?0:(r.We-=s,e.set(r.et.subarray(r.nt,r.nt+s),t),r.nt+=s,r.qe+=s,s)},Te(){const e=this;let t=e.Fe.pending;t>e.tt&&(t=e.tt),0!==t&&(e.$e.set(e.Fe.Ke.subarray(e.Fe.Je,e.Fe.Je+t),e.rt),e.rt+=t,e.Fe.Je+=t,e.Ge+=t,e.tt-=t,e.Fe.pending-=t,0===e.Fe.pending&&(e.Fe.Je=0))}};const rt=-2,st=-3,it=-5,ot=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],ct=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],ft=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],at=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],lt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],ut=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],wt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function ht(){let e,t,n,r,s,i;function o(e,t,o,c,f,a,l,u,w,h,d){let p,y,m,b,g,k,v,S,z,C,x,A,_,I,P;C=0,g=o;do{n[e[t+C]]++,C++,g--}while(0!==g);if(n[0]==o)return l[0]=-1,u[0]=0,0;for(S=u[0],k=1;15>=k&&0===n[k];k++);for(v=k,k>S&&(S=k),g=15;0!==g&&0===n[g];g--);for(m=g,S>g&&(S=g),u[0]=S,I=1<<k;g>k;k++,I<<=1)if(0>(I-=n[k]))return st;if(0>(I-=n[g]))return st;for(n[g]+=I,i[1]=k=0,C=1,_=2;0!=--g;)i[_]=k+=n[C],_++,C++;g=0,C=0;do{0!==(k=e[t+C])&&(d[i[k]++]=g),C++}while(++g<o);for(o=i[m],i[0]=g=0,C=0,b=-1,A=-S,s[0]=0,x=0,P=0;m>=v;v++)for(p=n[v];0!=p--;){for(;v>A+S;){if(b++,A+=S,P=m-A,P=P>S?S:P,(y=1<<(k=v-A))>p+1&&(y-=p+1,_=v,P>k))for(;++k<P&&(y<<=1)>n[++_];)y-=n[_];if(P=1<<k,h[0]+P>1440)return st;s[b]=x=h[0],h[0]+=P,0!==b?(i[b]=g,r[0]=k,r[1]=S,k=g>>>A-S,r[2]=x-s[b-1]-k,w.set(r,3*(s[b-1]+k))):l[0]=x}for(r[1]=v-A,o>C?d[C]<c?(r[0]=256>d[C]?0:96,r[2]=d[C++]):(r[0]=a[d[C]-c]+16+64,r[2]=f[d[C++]-c]):r[0]=192,y=1<<v-A,k=g>>>A;P>k;k+=y)w.set(r,3*(x+k));for(k=1<<v-1;0!=(g&k);k>>>=1)g^=k;for(g^=k,z=(1<<A)-1;(g&z)!=i[b];)b--,A-=S,z=(1<<A)-1}return 0!==I&&1!=m?it:0}function c(o){let c;for(e||(e=[],t=[],n=new f(16),r=[],s=new f(15),i=new f(16)),t.length<o&&(t=[]),c=0;o>c;c++)t[c]=0;for(c=0;16>c;c++)n[c]=0;for(c=0;3>c;c++)r[c]=0;s.set(n.subarray(0,15),0),i.set(n.subarray(0,16),0)}this.st=(n,r,s,i,f)=>{let a;return c(19),e[0]=0,a=o(n,0,19,19,null,null,s,r,i,e,t),a==st?f.Le="oversubscribed dynamic bit lengths tree":a!=it&&0!==r[0]||(f.Le="incomplete dynamic bit lengths tree",a=st),a},this.it=(n,r,s,i,f,a,l,u,w)=>{let h;return c(288),e[0]=0,h=o(s,0,n,257,at,lt,a,i,u,e,t),0!=h||0===i[0]?(h==st?w.Le="oversubscribed literal/length tree":-4!=h&&(w.Le="incomplete literal/length tree",h=st),h):(c(288),h=o(s,n,r,0,ut,wt,l,f,u,e,t),0!=h||0===f[0]&&n>257?(h==st?w.Le="oversubscribed distance tree":h==it?(w.Le="incomplete distance tree",h=st):-4!=h&&(w.Le="empty distance tree with lengths",h=st),h):0)}}function dt(){const e=this;let t,n,r,s,i=0,o=0,c=0,f=0,a=0,l=0,u=0,w=0,h=0,d=0;function p(e,t,n,r,s,i,o,c){let f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z;d=c.nt,p=c.We,w=o.ot,h=o.ct,y=o.write,m=y<o.read?o.read-y-1:o.end-y,b=ot[e],g=ot[t];do{for(;20>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;if(f=w&b,a=n,l=r,z=3*(l+f),0!==(u=a[z]))for(;;){if(w>>=a[z+1],h-=a[z+1],0!=(16&u)){for(u&=15,k=a[z+2]+(w&ot[u]),w>>=u,h-=u;15>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;for(f=w&g,a=s,l=i,z=3*(l+f),u=a[z];;){if(w>>=a[z+1],h-=a[z+1],0!=(16&u)){for(u&=15;u>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;if(v=a[z+2]+(w&ot[u]),w>>=u,h-=u,m-=k,v>y){S=y-v;do{S+=o.end}while(0>S);if(u=o.end-S,k>u){if(k-=u,y-S>0&&u>y-S)do{o.lt[y++]=o.lt[S++]}while(0!=--u);else o.lt.set(o.lt.subarray(S,S+u),y),y+=u,S+=u,u=0;S=0}}else S=y-v,y-S>0&&2>y-S?(o.lt[y++]=o.lt[S++],o.lt[y++]=o.lt[S++],k-=2):(o.lt.set(o.lt.subarray(S,S+2),y),y+=2,S+=2,k-=2);if(y-S>0&&k>y-S)do{o.lt[y++]=o.lt[S++]}while(0!=--k);else o.lt.set(o.lt.subarray(S,S+k),y),y+=k,S+=k,k=0;break}if(0!=(64&u))return c.Le="invalid distance code",k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,st;f+=a[z+2],f+=w&ot[u],z=3*(l+f),u=a[z]}break}if(0!=(64&u))return 0!=(32&u)?(k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,1):(c.Le="invalid literal/length code",k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,st);if(f+=a[z+2],f+=w&ot[u],z=3*(l+f),0===(u=a[z])){w>>=a[z+1],h-=a[z+1],o.lt[y++]=a[z+2],m--;break}}else w>>=a[z+1],h-=a[z+1],o.lt[y++]=a[z+2],m--}while(m>=258&&p>=10);return k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,0}e.init=(e,i,o,c,f,a)=>{t=0,u=e,w=i,r=o,h=c,s=f,d=a,n=null},e.ut=(e,y,m)=>{let b,g,k,v,S,z,C,x=0,A=0,_=0;for(_=y.nt,v=y.We,x=e.ot,A=e.ct,S=e.write,z=S<e.read?e.read-S-1:e.end-S;;)switch(t){case 0:if(z>=258&&v>=10&&(e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,m=p(u,w,r,h,s,d,e,y),_=y.nt,v=y.We,x=e.ot,A=e.ct,S=e.write,z=S<e.read?e.read-S-1:e.end-S,0!=m)){t=1==m?7:9;break}c=u,n=r,o=h,t=1;case 1:for(b=c;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(_++))<<A,A+=8}if(g=3*(o+(x&ot[b])),x>>>=n[g+1],A-=n[g+1],k=n[g],0===k){f=n[g+2],t=6;break}if(0!=(16&k)){a=15&k,i=n[g+2],t=2;break}if(0==(64&k)){c=k,o=g/3+n[g+2];break}if(0!=(32&k)){t=7;break}return t=9,y.Le="invalid literal/length code",m=st,e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);case 2:for(b=a;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(_++))<<A,A+=8}i+=x&ot[b],x>>=b,A-=b,c=w,n=s,o=d,t=3;case 3:for(b=c;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(_++))<<A,A+=8}if(g=3*(o+(x&ot[b])),x>>=n[g+1],A-=n[g+1],k=n[g],0!=(16&k)){a=15&k,l=n[g+2],t=4;break}if(0==(64&k)){c=k,o=g/3+n[g+2];break}return t=9,y.Le="invalid distance code",m=st,e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);case 4:for(b=a;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(_++))<<A,A+=8}l+=x&ot[b],x>>=b,A-=b,t=5;case 5:for(C=S-l;0>C;)C+=e.end;for(;0!==i;){if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);e.lt[S++]=e.lt[C++],z--,C==e.end&&(C=0),i--}t=0;break;case 6:if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);m=0,e.lt[S++]=f,z--,t=0;break;case 7:if(A>7&&(A-=8,v++,_--),e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,e.read!=e.write)return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);t=8;case 8:return m=1,e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);case 9:return m=st,e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);default:return m=rt,e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m)}},e.ht=()=>{}}ht.dt=(e,t,n,r)=>(e[0]=9,t[0]=5,n[0]=ct,r[0]=ft,0);const pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function yt(e,t){const n=this;let r,s=0,o=0,c=0,a=0;const l=[0],u=[0],w=new dt;let h=0,d=new f(4320);const p=new ht;n.ct=0,n.ot=0,n.lt=new i(t),n.end=t,n.read=0,n.write=0,n.reset=(e,t)=>{t&&(t[0]=0),6==s&&w.ht(e),s=0,n.ct=0,n.ot=0,n.read=n.write=0},n.reset(e,null),n.wt=(e,t)=>{let r,s,i;return s=e.rt,i=n.read,r=(i>n.write?n.end:n.write)-i,r>e.tt&&(r=e.tt),0!==r&&t==it&&(t=0),e.tt-=r,e.Ge+=r,e.$e.set(n.lt.subarray(i,i+r),s),s+=r,i+=r,i==n.end&&(i=0,n.write==n.end&&(n.write=0),r=n.write-i,r>e.tt&&(r=e.tt),0!==r&&t==it&&(t=0),e.tt-=r,e.Ge+=r,e.$e.set(n.lt.subarray(i,i+r),s),s+=r,i+=r),e.rt=s,n.read=i,t},n.ut=(e,t)=>{let i,f,y,m,b,g,k,v;for(m=e.nt,b=e.We,f=n.ot,y=n.ct,g=n.write,k=g<n.read?n.read-g-1:n.end-g;;){let S,z,C,x,A,_,I,P;switch(s){case 0:for(;3>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}switch(i=7&f,h=1&i,i>>>1){case 0:f>>>=3,y-=3,i=7&y,f>>>=i,y-=i,s=1;break;case 1:S=[],z=[],C=[[]],x=[[]],ht.dt(S,z,C,x),w.init(S[0],z[0],C[0],0,x[0],0),f>>>=3,y-=3,s=6;break;case 2:f>>>=3,y-=3,s=3;break;case 3:return f>>>=3,y-=3,s=9,e.Le="invalid block type",t=st,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t)}break;case 1:for(;32>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if((~f>>>16&65535)!=(65535&f))return s=9,e.Le="invalid stored block lengths",t=st,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);o=65535&f,f=y=0,s=0!==o?2:0!==h?7:0;break;case 2:if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(0===k&&(g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k&&(n.write=g,t=n.wt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k)))return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(t=0,i=o,i>b&&(i=b),i>k&&(i=k),n.lt.set(e.je(m,i),g),m+=i,b-=i,g+=i,k-=i,0!=(o-=i))break;s=0!==h?7:0;break;case 3:for(;14>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(c=i=16383&f,(31&i)>29||(i>>5&31)>29)return s=9,e.Le="too many length or distance symbols",t=st,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(i=258+(31&i)+(i>>5&31),!r||r.length<i)r=[];else for(v=0;i>v;v++)r[v]=0;f>>>=14,y-=14,a=0,s=4;case 4:for(;4+(c>>>10)>a;){for(;3>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}r[pt[a++]]=7&f,f>>>=3,y-=3}for(;19>a;)r[pt[a++]]=0;if(l[0]=7,i=p.st(r,l,u,d,e),0!=i)return(t=i)==st&&(r=null,s=9),n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);a=0,s=5;case 5:for(;i=c,258+(31&i)+(i>>5&31)>a;){let o,w;for(i=l[0];i>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(i=d[3*(u[0]+(f&ot[i]))+1],w=d[3*(u[0]+(f&ot[i]))+2],16>w)f>>>=i,y-=i,r[a++]=w;else{for(v=18==w?7:w-14,o=18==w?11:3;i+v>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(f>>>=i,y-=i,o+=f&ot[v],f>>>=v,y-=v,v=a,i=c,v+o>258+(31&i)+(i>>5&31)||16==w&&1>v)return r=null,s=9,e.Le="invalid bit length repeat",t=st,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);w=16==w?r[v-1]:0;do{r[v++]=w}while(0!=--o);a=v}}if(u[0]=-1,A=[],_=[],I=[],P=[],A[0]=9,_[0]=6,i=c,i=p.it(257+(31&i),1+(i>>5&31),r,A,_,I,P,d,e),0!=i)return i==st&&(r=null,s=9),t=i,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);w.init(A[0],_[0],d,I[0],d,P[0]),s=6;case 6:if(n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,1!=(t=w.ut(n,e,t)))return n.wt(e,t);if(t=0,w.ht(e),m=e.nt,b=e.We,f=n.ot,y=n.ct,g=n.write,k=g<n.read?n.read-g-1:n.end-g,0===h){s=0;break}s=7;case 7:if(n.write=g,t=n.wt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,n.read!=n.write)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);s=8;case 8:return t=1,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);case 9:return t=st,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);default:return t=rt,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t)}}},n.ht=e=>{n.reset(e,null),n.lt=null,d=null},n.yt=(e,t,r)=>{n.lt.set(e.subarray(t,t+r),0),n.read=n.write=r},n.bt=()=>1==s?1:0}const mt=13,bt=[0,0,255,255];function gt(){const e=this;function t(e){return e&&e.gt?(e.qe=e.Ge=0,e.Le=null,e.gt.mode=7,e.gt.kt.reset(e,null),0):rt}e.mode=0,e.method=0,e.vt=[0],e.St=0,e.marker=0,e.zt=0,e.Ct=t=>(e.kt&&e.kt.ht(t),e.kt=null,0),e.xt=(n,r)=>(n.Le=null,e.kt=null,8>r||r>15?(e.Ct(n),rt):(e.zt=r,n.gt.kt=new yt(n,1<<r),t(n),0)),e.At=(e,t)=>{let n,r;if(!e||!e.gt||!e.et)return rt;const s=e.gt;for(t=4==t?it:0,n=it;;)switch(s.mode){case 0:if(0===e.We)return n;if(n=t,e.We--,e.qe++,8!=(15&(s.method=e.ft(e.nt++)))){s.mode=mt,e.Le="unknown compression method",s.marker=5;break}if(8+(s.method>>4)>s.zt){s.mode=mt,e.Le="invalid win size",s.marker=5;break}s.mode=1;case 1:if(0===e.We)return n;if(n=t,e.We--,e.qe++,r=255&e.ft(e.nt++),((s.method<<8)+r)%31!=0){s.mode=mt,e.Le="incorrect header check",s.marker=5;break}if(0==(32&r)){s.mode=7;break}s.mode=2;case 2:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St=(255&e.ft(e.nt++))<<24&4278190080,s.mode=3;case 3:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St+=(255&e.ft(e.nt++))<<16&16711680,s.mode=4;case 4:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St+=(255&e.ft(e.nt++))<<8&65280,s.mode=5;case 5:return 0===e.We?n:(n=t,e.We--,e.qe++,s.St+=255&e.ft(e.nt++),s.mode=6,2);case 6:return s.mode=mt,e.Le="need dictionary",s.marker=0,rt;case 7:if(n=s.kt.ut(e,n),n==st){s.mode=mt,s.marker=0;break}if(0==n&&(n=t),1!=n)return n;n=t,s.kt.reset(e,s.vt),s.mode=12;case 12:return e.We=0,1;case mt:return st;default:return rt}},e._t=(e,t,n)=>{let r=0,s=n;if(!e||!e.gt||6!=e.gt.mode)return rt;const i=e.gt;return s<1<<i.zt||(s=(1<<i.zt)-1,r=n-s),i.kt.yt(t,r,s),i.mode=7,0},e.It=e=>{let n,r,s,i,o;if(!e||!e.gt)return rt;const c=e.gt;if(c.mode!=mt&&(c.mode=mt,c.marker=0),0===(n=e.We))return it;for(r=e.nt,s=c.marker;0!==n&&4>s;)e.ft(r)==bt[s]?s++:s=0!==e.ft(r)?0:4-s,r++,n--;return e.qe+=r-e.nt,e.nt=r,e.We=n,c.marker=s,4!=s?st:(i=e.qe,o=e.Ge,t(e),e.qe=i,e.Ge=o,c.mode=7,0)},e.Pt=e=>e&&e.gt&&e.gt.kt?e.gt.kt.bt():rt}function kt(){}function vt(e){const t=new kt,n=e&&e.chunkSize?r.floor(2*e.chunkSize):131072,o=new i(n);let c=!1;t.xt(),t.$e=o,this.append=(e,r)=>{const f=[];let a,l,u=0,w=0,h=0;if(0!==e.length){t.nt=0,t.et=e,t.We=e.length;do{if(t.rt=0,t.tt=n,0!==t.We||c||(t.nt=0,c=!0),a=t.At(0),c&&a===it){if(0!==t.We)throw new s("inflating: bad input")}else if(0!==a&&1!==a)throw new s("inflating: "+t.Le);if((c||1===a)&&t.We===e.length)throw new s("inflating: bad input");t.rt&&(t.rt===n?f.push(new i(o)):f.push(o.subarray(0,t.rt))),h+=t.rt,r&&t.nt>0&&t.nt!=u&&(r(t.nt),u=t.nt)}while(t.We>0||0===t.tt);return f.length>1?(l=new i(h),f.forEach((e=>{l.set(e,w),w+=e.length}))):l=f[0]?new i(f[0]):new i,l}},this.flush=()=>{t.Ct()}}kt.prototype={xt(e){const t=this;return t.gt=new gt,e||(e=15),t.gt.xt(t,e)},At(e){const t=this;return t.gt?t.gt.At(t,e):rt},Ct(){const e=this;if(!e.gt)return rt;const t=e.gt.Ct(e);return e.gt=null,t},It(){const e=this;return e.gt?e.gt.It(e):rt},_t(e,t){const n=this;return n.gt?n.gt._t(n,e,t):rt},ft(e){return this.et[e]},je(e,t){return this.et.subarray(e,e+t)}},self.initCodec=()=>{self.Deflate=nt,self.Inflate=vt};\n'], { type: "text/javascript" }));
  e2({ workerScripts: { inflate: [t], deflate: [t] } });
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/util/stream-codec-shim.js
function initShimAsyncCodec(library, options = {}, registerDataHandler) {
  return {
    Deflate: createCodecClass(library.Deflate, options.deflate, registerDataHandler),
    Inflate: createCodecClass(library.Inflate, options.inflate, registerDataHandler)
  };
}
function objectHasOwn(object, propertyName) {
  return typeof Object.hasOwn === FUNCTION_TYPE ? Object.hasOwn(object, propertyName) : object.hasOwnProperty(propertyName);
}
function createCodecClass(constructor, constructorOptions, registerDataHandler) {
  return class {
    constructor(options) {
      const codecAdapter = this;
      const onData = (data) => {
        if (codecAdapter.pendingData) {
          const previousPendingData = codecAdapter.pendingData;
          codecAdapter.pendingData = new Uint8Array(previousPendingData.length + data.length);
          const { pendingData } = codecAdapter;
          pendingData.set(previousPendingData, 0);
          pendingData.set(data, previousPendingData.length);
        } else {
          codecAdapter.pendingData = new Uint8Array(data);
        }
      };
      if (objectHasOwn(options, "level") && options.level === UNDEFINED_VALUE) {
        delete options.level;
      }
      codecAdapter.codec = new constructor(Object.assign({}, constructorOptions, options));
      registerDataHandler(codecAdapter.codec, onData);
    }
    append(data) {
      this.codec.push(data);
      return getResponse(this);
    }
    flush() {
      this.codec.push(new Uint8Array(), true);
      return getResponse(this);
    }
  };
  function getResponse(codec2) {
    if (codec2.pendingData) {
      const output = codec2.pendingData;
      codec2.pendingData = null;
      return output;
    } else {
      return new Uint8Array();
    }
  }
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/io.js
var ERR_HTTP_STATUS = "HTTP error ";
var ERR_HTTP_RANGE = "HTTP Range not supported";
var ERR_ITERATOR_COMPLETED_TOO_SOON = "Writer iterator completed too soon";
var CONTENT_TYPE_TEXT_PLAIN = "text/plain";
var HTTP_HEADER_CONTENT_LENGTH = "Content-Length";
var HTTP_HEADER_CONTENT_RANGE = "Content-Range";
var HTTP_HEADER_ACCEPT_RANGES = "Accept-Ranges";
var HTTP_HEADER_RANGE = "Range";
var HTTP_HEADER_CONTENT_TYPE = "Content-Type";
var HTTP_METHOD_HEAD = "HEAD";
var HTTP_METHOD_GET = "GET";
var HTTP_RANGE_UNIT = "bytes";
var DEFAULT_CHUNK_SIZE = 64 * 1024;
var PROPERTY_NAME_WRITABLE = "writable";
var Stream = class {
  constructor() {
    this.size = 0;
  }
  init() {
    this.initialized = true;
  }
};
var Reader = class extends Stream {
  get readable() {
    const reader = this;
    const { chunkSize = DEFAULT_CHUNK_SIZE } = reader;
    const readable = new ReadableStream({
      start() {
        this.chunkOffset = 0;
      },
      async pull(controller) {
        const { offset = 0, size, diskNumberStart } = readable;
        const { chunkOffset } = this;
        controller.enqueue(await readUint8Array(reader, offset + chunkOffset, Math.min(chunkSize, size - chunkOffset), diskNumberStart));
        if (chunkOffset + chunkSize > size) {
          controller.close();
        } else {
          this.chunkOffset += chunkSize;
        }
      }
    });
    return readable;
  }
};
var Writer = class extends Stream {
  constructor() {
    super();
    const writer = this;
    const writable = new WritableStream({
      write(chunk) {
        return writer.writeUint8Array(chunk);
      }
    });
    Object.defineProperty(writer, PROPERTY_NAME_WRITABLE, {
      get() {
        return writable;
      }
    });
  }
  writeUint8Array() {
  }
};
var Data64URIReader = class extends Reader {
  constructor(dataURI) {
    super();
    let dataEnd = dataURI.length;
    while (dataURI.charAt(dataEnd - 1) == "=") {
      dataEnd--;
    }
    const dataStart = dataURI.indexOf(",") + 1;
    Object.assign(this, {
      dataURI,
      dataStart,
      size: Math.floor((dataEnd - dataStart) * 0.75)
    });
  }
  readUint8Array(offset, length) {
    const {
      dataStart,
      dataURI
    } = this;
    const dataArray = new Uint8Array(length);
    const start = Math.floor(offset / 3) * 4;
    const bytes = atob(dataURI.substring(start + dataStart, Math.ceil((offset + length) / 3) * 4 + dataStart));
    const delta = offset - Math.floor(start / 4) * 3;
    for (let indexByte = delta; indexByte < delta + length; indexByte++) {
      dataArray[indexByte - delta] = bytes.charCodeAt(indexByte);
    }
    return dataArray;
  }
};
var Data64URIWriter = class extends Writer {
  constructor(contentType) {
    super();
    Object.assign(this, {
      data: "data:" + (contentType || "") + ";base64,",
      pending: []
    });
  }
  writeUint8Array(array) {
    const writer = this;
    let indexArray = 0;
    let dataString = writer.pending;
    const delta = writer.pending.length;
    writer.pending = "";
    for (indexArray = 0; indexArray < Math.floor((delta + array.length) / 3) * 3 - delta; indexArray++) {
      dataString += String.fromCharCode(array[indexArray]);
    }
    for (; indexArray < array.length; indexArray++) {
      writer.pending += String.fromCharCode(array[indexArray]);
    }
    if (dataString.length > 2) {
      writer.data += btoa(dataString);
    } else {
      writer.pending = dataString;
    }
  }
  getData() {
    return this.data + btoa(this.pending);
  }
};
var BlobReader = class extends Reader {
  constructor(blob) {
    super();
    Object.assign(this, {
      blob,
      size: blob.size
    });
  }
  async readUint8Array(offset, length) {
    const reader = this;
    const offsetEnd = offset + length;
    const blob = offset || offsetEnd < reader.size ? reader.blob.slice(offset, offsetEnd) : reader.blob;
    let arrayBuffer = await blob.arrayBuffer();
    if (arrayBuffer.byteLength > length) {
      arrayBuffer = arrayBuffer.slice(offset, offsetEnd);
    }
    return new Uint8Array(arrayBuffer);
  }
};
var BlobWriter = class extends Stream {
  constructor(contentType) {
    super();
    const writer = this;
    const transformStream = new TransformStream();
    const headers = [];
    if (contentType) {
      headers.push([HTTP_HEADER_CONTENT_TYPE, contentType]);
    }
    Object.defineProperty(writer, PROPERTY_NAME_WRITABLE, {
      get() {
        return transformStream.writable;
      }
    });
    writer.blob = new Response(transformStream.readable, { headers }).blob();
  }
  getData() {
    return this.blob;
  }
};
var TextReader = class extends BlobReader {
  constructor(text) {
    super(new Blob([text], { type: CONTENT_TYPE_TEXT_PLAIN }));
  }
};
var TextWriter = class extends BlobWriter {
  constructor(encoding) {
    super(encoding);
    Object.assign(this, {
      encoding,
      utf8: !encoding || encoding.toLowerCase() == "utf-8"
    });
  }
  async getData() {
    const {
      encoding,
      utf8
    } = this;
    const blob = await super.getData();
    if (blob.text && utf8) {
      return blob.text();
    } else {
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
        Object.assign(reader, {
          onload: ({ target }) => resolve(target.result),
          onerror: () => reject(reader.error)
        });
        reader.readAsText(blob, encoding);
      });
    }
  }
};
var FetchReader = class extends Reader {
  constructor(url, options) {
    super();
    createHttpReader(this, url, options);
  }
  async init() {
    await initHttpReader(this, sendFetchRequest, getFetchRequestData);
    super.init();
  }
  readUint8Array(index, length) {
    return readUint8ArrayHttpReader(this, index, length, sendFetchRequest, getFetchRequestData);
  }
};
var XHRReader = class extends Reader {
  constructor(url, options) {
    super();
    createHttpReader(this, url, options);
  }
  async init() {
    await initHttpReader(this, sendXMLHttpRequest, getXMLHttpRequestData);
    super.init();
  }
  readUint8Array(index, length) {
    return readUint8ArrayHttpReader(this, index, length, sendXMLHttpRequest, getXMLHttpRequestData);
  }
};
function createHttpReader(httpReader, url, options) {
  const {
    preventHeadRequest,
    useRangeHeader,
    forceRangeRequests
  } = options;
  options = Object.assign({}, options);
  delete options.preventHeadRequest;
  delete options.useRangeHeader;
  delete options.forceRangeRequests;
  delete options.useXHR;
  Object.assign(httpReader, {
    url,
    options,
    preventHeadRequest,
    useRangeHeader,
    forceRangeRequests
  });
}
async function initHttpReader(httpReader, sendRequest, getRequestData2) {
  const {
    url,
    useRangeHeader,
    forceRangeRequests
  } = httpReader;
  if (isHttpFamily(url) && (useRangeHeader || forceRangeRequests)) {
    const { headers } = await sendRequest(HTTP_METHOD_GET, httpReader, getRangeHeaders(httpReader));
    if (!forceRangeRequests && headers.get(HTTP_HEADER_ACCEPT_RANGES) != HTTP_RANGE_UNIT) {
      throw new Error(ERR_HTTP_RANGE);
    } else {
      let contentSize;
      const contentRangeHeader = headers.get(HTTP_HEADER_CONTENT_RANGE);
      if (contentRangeHeader) {
        const splitHeader = contentRangeHeader.trim().split(/\s*\/\s*/);
        if (splitHeader.length) {
          const headerValue = splitHeader[1];
          if (headerValue && headerValue != "*") {
            contentSize = Number(headerValue);
          }
        }
      }
      if (contentSize === UNDEFINED_VALUE) {
        await getContentLength(httpReader, sendRequest, getRequestData2);
      } else {
        httpReader.size = contentSize;
      }
    }
  } else {
    await getContentLength(httpReader, sendRequest, getRequestData2);
  }
}
async function readUint8ArrayHttpReader(httpReader, index, length, sendRequest, getRequestData2) {
  const {
    useRangeHeader,
    forceRangeRequests,
    options
  } = httpReader;
  if (useRangeHeader || forceRangeRequests) {
    const response = await sendRequest(HTTP_METHOD_GET, httpReader, getRangeHeaders(httpReader, index, length));
    if (response.status != 206) {
      throw new Error(ERR_HTTP_RANGE);
    }
    return new Uint8Array(await response.arrayBuffer());
  } else {
    const { data } = httpReader;
    if (!data) {
      await getRequestData2(httpReader, options);
    }
    return new Uint8Array(httpReader.data.subarray(index, index + length));
  }
}
function getRangeHeaders(httpReader, index = 0, length = 1) {
  return Object.assign({}, getHeaders(httpReader), { [HTTP_HEADER_RANGE]: HTTP_RANGE_UNIT + "=" + index + "-" + (index + length - 1) });
}
function getHeaders({ options }) {
  const { headers } = options;
  if (headers) {
    if (Symbol.iterator in headers) {
      return Object.fromEntries(headers);
    } else {
      return headers;
    }
  }
}
async function getFetchRequestData(httpReader) {
  await getRequestData(httpReader, sendFetchRequest);
}
async function getXMLHttpRequestData(httpReader) {
  await getRequestData(httpReader, sendXMLHttpRequest);
}
async function getRequestData(httpReader, sendRequest) {
  const response = await sendRequest(HTTP_METHOD_GET, httpReader, getHeaders(httpReader));
  httpReader.data = new Uint8Array(await response.arrayBuffer());
  if (!httpReader.size) {
    httpReader.size = httpReader.data.length;
  }
}
async function getContentLength(httpReader, sendRequest, getRequestData2) {
  if (httpReader.preventHeadRequest) {
    await getRequestData2(httpReader, httpReader.options);
  } else {
    const response = await sendRequest(HTTP_METHOD_HEAD, httpReader, getHeaders(httpReader));
    const contentLength = response.headers.get(HTTP_HEADER_CONTENT_LENGTH);
    if (contentLength) {
      httpReader.size = Number(contentLength);
    } else {
      await getRequestData2(httpReader, httpReader.options);
    }
  }
}
async function sendFetchRequest(method, { options, url }, headers) {
  const response = await fetch(url, Object.assign({}, options, { method, headers }));
  if (response.status < 400) {
    return response;
  } else {
    throw response.status == 416 ? new Error(ERR_HTTP_RANGE) : new Error(ERR_HTTP_STATUS + (response.statusText || response.status));
  }
}
function sendXMLHttpRequest(method, { url }, headers) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("load", () => {
      if (request.status < 400) {
        const headers2 = [];
        request.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((header) => {
          const splitHeader = header.trim().split(/\s*:\s*/);
          splitHeader[0] = splitHeader[0].trim().replace(/^[a-z]|-[a-z]/g, (value) => value.toUpperCase());
          headers2.push(splitHeader);
        });
        resolve({
          status: request.status,
          arrayBuffer: () => request.response,
          headers: new Map(headers2)
        });
      } else {
        reject(request.status == 416 ? new Error(ERR_HTTP_RANGE) : new Error(ERR_HTTP_STATUS + (request.statusText || request.status)));
      }
    }, false);
    request.addEventListener("error", (event) => reject(event.detail ? event.detail.error : new Error("Network error")), false);
    request.open(method, url);
    if (headers) {
      for (const entry of Object.entries(headers)) {
        request.setRequestHeader(entry[0], entry[1]);
      }
    }
    request.responseType = "arraybuffer";
    request.send();
  });
}
var HttpReader = class extends Reader {
  constructor(url, options = {}) {
    super();
    Object.assign(this, {
      url,
      reader: options.useXHR ? new XHRReader(url, options) : new FetchReader(url, options)
    });
  }
  set size(value) {
  }
  get size() {
    return this.reader.size;
  }
  async init() {
    await this.reader.init();
    super.init();
  }
  readUint8Array(index, length) {
    return this.reader.readUint8Array(index, length);
  }
};
var HttpRangeReader = class extends HttpReader {
  constructor(url, options = {}) {
    options.useRangeHeader = true;
    super(url, options);
  }
};
var Uint8ArrayReader = class extends Reader {
  constructor(array) {
    super();
    Object.assign(this, {
      array,
      size: array.length
    });
  }
  readUint8Array(index, length) {
    return this.array.slice(index, index + length);
  }
};
var Uint8ArrayWriter = class extends Writer {
  init(initSize = 0) {
    Object.assign(this, {
      offset: 0,
      array: new Uint8Array(initSize)
    });
    super.init();
  }
  writeUint8Array(array) {
    const writer = this;
    if (writer.offset + array.length > writer.array.length) {
      const previousArray = writer.array;
      writer.array = new Uint8Array(previousArray.length + array.length);
      writer.array.set(previousArray);
    }
    writer.array.set(array, writer.offset);
    writer.offset += array.length;
  }
  getData() {
    return this.array;
  }
};
var SplitDataReader = class extends Reader {
  constructor(readers) {
    super();
    this.readers = readers;
  }
  async init() {
    const reader = this;
    const { readers } = reader;
    reader.lastDiskNumber = 0;
    reader.lastDiskOffset = 0;
    await Promise.all(readers.map(async (diskReader, indexDiskReader) => {
      await diskReader.init();
      if (indexDiskReader != readers.length - 1) {
        reader.lastDiskOffset += diskReader.size;
      }
      reader.size += diskReader.size;
    }));
    super.init();
  }
  async readUint8Array(offset, length, diskNumber = 0) {
    const reader = this;
    const { readers } = this;
    let result;
    let currentDiskNumber = diskNumber;
    if (currentDiskNumber == -1) {
      currentDiskNumber = readers.length - 1;
    }
    let currentReaderOffset = offset;
    while (currentReaderOffset >= readers[currentDiskNumber].size) {
      currentReaderOffset -= readers[currentDiskNumber].size;
      currentDiskNumber++;
    }
    const currentReader = readers[currentDiskNumber];
    const currentReaderSize = currentReader.size;
    if (currentReaderOffset + length <= currentReaderSize) {
      result = await readUint8Array(currentReader, currentReaderOffset, length);
    } else {
      const chunkLength = currentReaderSize - currentReaderOffset;
      result = new Uint8Array(length);
      result.set(await readUint8Array(currentReader, currentReaderOffset, chunkLength));
      result.set(await reader.readUint8Array(offset + chunkLength, length - chunkLength, diskNumber), chunkLength);
    }
    reader.lastDiskNumber = Math.max(currentDiskNumber, reader.lastDiskNumber);
    return result;
  }
};
var SplitDataWriter = class extends Stream {
  constructor(writerGenerator, maxSize = 4294967295) {
    super();
    const zipWriter = this;
    Object.assign(zipWriter, {
      diskNumber: 0,
      diskOffset: 0,
      size: 0,
      maxSize,
      availableSize: maxSize
    });
    let diskSourceWriter, diskWritable, diskWriter;
    const writable = new WritableStream({
      async write(chunk) {
        const { availableSize } = zipWriter;
        if (!diskWriter) {
          const { value, done } = await writerGenerator.next();
          if (done && !value) {
            throw new Error(ERR_ITERATOR_COMPLETED_TOO_SOON);
          } else {
            diskSourceWriter = value;
            diskSourceWriter.size = 0;
            if (diskSourceWriter.maxSize) {
              zipWriter.maxSize = diskSourceWriter.maxSize;
            }
            zipWriter.availableSize = zipWriter.maxSize;
            await initStream(diskSourceWriter);
            diskWritable = value.writable;
            diskWriter = diskWritable.getWriter();
          }
          await this.write(chunk);
        } else if (chunk.length >= availableSize) {
          await writeChunk(chunk.slice(0, availableSize));
          await closeDisk();
          zipWriter.diskOffset += diskSourceWriter.size;
          zipWriter.diskNumber++;
          diskWriter = null;
          await this.write(chunk.slice(availableSize));
        } else {
          await writeChunk(chunk);
        }
      },
      async close() {
        await diskWriter.ready;
        await closeDisk();
      }
    });
    Object.defineProperty(zipWriter, PROPERTY_NAME_WRITABLE, {
      get() {
        return writable;
      }
    });
    async function writeChunk(chunk) {
      const chunkLength = chunk.length;
      if (chunkLength) {
        await diskWriter.ready;
        await diskWriter.write(chunk);
        diskSourceWriter.size += chunkLength;
        zipWriter.size += chunkLength;
        zipWriter.availableSize -= chunkLength;
      }
    }
    async function closeDisk() {
      diskWritable.size = diskSourceWriter.size;
      await diskWriter.close();
    }
  }
};
function isHttpFamily(url) {
  const { baseURL: baseURL2 } = getConfiguration();
  const { protocol } = new URL(url, baseURL2);
  return protocol == "http:" || protocol == "https:";
}
async function initStream(stream, initSize) {
  if (stream.init && !stream.initialized) {
    await stream.init(initSize);
  }
}
function initReader(reader) {
  if (Array.isArray(reader)) {
    reader = new SplitDataReader(reader);
  }
  if (reader instanceof ReadableStream) {
    reader = {
      readable: reader
    };
  }
  return reader;
}
function initWriter(writer) {
  if (writer.writable === UNDEFINED_VALUE && typeof writer.next == FUNCTION_TYPE) {
    writer = new SplitDataWriter(writer);
  }
  if (writer instanceof WritableStream) {
    writer = {
      writable: writer
    };
  }
  const { writable } = writer;
  if (writable.size === UNDEFINED_VALUE) {
    writable.size = 0;
  }
  if (!(writer instanceof SplitDataWriter)) {
    Object.assign(writer, {
      diskNumber: 0,
      diskOffset: 0,
      availableSize: Infinity,
      maxSize: Infinity
    });
  }
  return writer;
}
function readUint8Array(reader, offset, size, diskNumber) {
  return reader.readUint8Array(offset, size, diskNumber);
}
var SplitZipReader = SplitDataReader;
var SplitZipWriter = SplitDataWriter;

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/util/cp437-decode.js
var CP437 = "\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 ".split("");
var VALID_CP437 = CP437.length == 256;
function decodeCP437(stringValue) {
  if (VALID_CP437) {
    let result = "";
    for (let indexCharacter = 0; indexCharacter < stringValue.length; indexCharacter++) {
      result += CP437[stringValue[indexCharacter]];
    }
    return result;
  } else {
    return new TextDecoder().decode(stringValue);
  }
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/util/decode-text.js
function decodeText(value, encoding) {
  if (encoding && encoding.trim().toLowerCase() == "cp437") {
    return decodeCP437(value);
  } else {
    return new TextDecoder(encoding).decode(value);
  }
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/zip-entry.js
var PROPERTY_NAME_FILENAME = "filename";
var PROPERTY_NAME_RAW_FILENAME = "rawFilename";
var PROPERTY_NAME_COMMENT = "comment";
var PROPERTY_NAME_RAW_COMMENT = "rawComment";
var PROPERTY_NAME_UNCOMPPRESSED_SIZE = "uncompressedSize";
var PROPERTY_NAME_COMPPRESSED_SIZE = "compressedSize";
var PROPERTY_NAME_OFFSET = "offset";
var PROPERTY_NAME_DISK_NUMBER_START = "diskNumberStart";
var PROPERTY_NAME_LAST_MODIFICATION_DATE = "lastModDate";
var PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE = "rawLastModDate";
var PROPERTY_NAME_LAST_ACCESS_DATE = "lastAccessDate";
var PROPERTY_NAME_RAW_LAST_ACCESS_DATE = "rawLastAccessDate";
var PROPERTY_NAME_CREATION_DATE = "creationDate";
var PROPERTY_NAME_RAW_CREATION_DATE = "rawCreationDate";
var PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTE = "internalFileAttribute";
var PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTE = "externalFileAttribute";
var PROPERTY_NAME_MS_DOS_COMPATIBLE = "msDosCompatible";
var PROPERTY_NAME_ZIP64 = "zip64";
var PROPERTY_NAMES = [
  PROPERTY_NAME_FILENAME,
  PROPERTY_NAME_RAW_FILENAME,
  PROPERTY_NAME_COMPPRESSED_SIZE,
  PROPERTY_NAME_UNCOMPPRESSED_SIZE,
  PROPERTY_NAME_LAST_MODIFICATION_DATE,
  PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE,
  PROPERTY_NAME_COMMENT,
  PROPERTY_NAME_RAW_COMMENT,
  PROPERTY_NAME_LAST_ACCESS_DATE,
  PROPERTY_NAME_CREATION_DATE,
  PROPERTY_NAME_OFFSET,
  PROPERTY_NAME_DISK_NUMBER_START,
  PROPERTY_NAME_DISK_NUMBER_START,
  PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTE,
  PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTE,
  PROPERTY_NAME_MS_DOS_COMPATIBLE,
  PROPERTY_NAME_ZIP64,
  "directory",
  "bitFlag",
  "encrypted",
  "signature",
  "filenameUTF8",
  "commentUTF8",
  "compressionMethod",
  "version",
  "versionMadeBy",
  "extraField",
  "rawExtraField",
  "extraFieldZip64",
  "extraFieldUnicodePath",
  "extraFieldUnicodeComment",
  "extraFieldAES",
  "extraFieldNTFS",
  "extraFieldExtendedTimestamp"
];
var Entry = class {
  constructor(data) {
    PROPERTY_NAMES.forEach((name) => this[name] = data[name]);
  }
};

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/zip-reader.js
var ERR_BAD_FORMAT = "File format is not recognized";
var ERR_EOCDR_NOT_FOUND = "End of central directory not found";
var ERR_EOCDR_ZIP64_NOT_FOUND = "End of Zip64 central directory not found";
var ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND = "End of Zip64 central directory locator not found";
var ERR_CENTRAL_DIRECTORY_NOT_FOUND = "Central directory header not found";
var ERR_LOCAL_FILE_HEADER_NOT_FOUND = "Local file header not found";
var ERR_EXTRAFIELD_ZIP64_NOT_FOUND = "Zip64 extra field not found";
var ERR_ENCRYPTED = "File contains encrypted entry";
var ERR_UNSUPPORTED_ENCRYPTION = "Encryption method not supported";
var ERR_UNSUPPORTED_COMPRESSION = "Compression method not supported";
var ERR_SPLIT_ZIP_FILE = "Split zip file";
var CHARSET_UTF8 = "utf-8";
var CHARSET_CP437 = "cp437";
var ZIP64_PROPERTIES = [
  [PROPERTY_NAME_UNCOMPPRESSED_SIZE, MAX_32_BITS],
  [PROPERTY_NAME_COMPPRESSED_SIZE, MAX_32_BITS],
  [PROPERTY_NAME_OFFSET, MAX_32_BITS],
  [PROPERTY_NAME_DISK_NUMBER_START, MAX_16_BITS]
];
var ZIP64_EXTRACTION = {
  [MAX_16_BITS]: {
    getValue: getUint32,
    bytes: 4
  },
  [MAX_32_BITS]: {
    getValue: getBigUint64,
    bytes: 8
  }
};
var ZipReader = class {
  constructor(reader, options = {}) {
    Object.assign(this, {
      reader: initReader(reader),
      options,
      config: getConfiguration()
    });
  }
  async *getEntriesGenerator(options = {}) {
    const zipReader = this;
    let { reader } = zipReader;
    const { config: config2 } = zipReader;
    await initStream(reader);
    if (reader.size === UNDEFINED_VALUE || !reader.readUint8Array) {
      reader = new BlobReader(await new Response(reader.readable).blob());
      await initStream(reader);
    }
    if (reader.size < END_OF_CENTRAL_DIR_LENGTH) {
      throw new Error(ERR_BAD_FORMAT);
    }
    reader.chunkSize = getChunkSize(config2);
    const endOfDirectoryInfo = await seekSignature(reader, END_OF_CENTRAL_DIR_SIGNATURE, reader.size, END_OF_CENTRAL_DIR_LENGTH, MAX_16_BITS * 16);
    if (!endOfDirectoryInfo) {
      const signatureArray = await readUint8Array(reader, 0, 4);
      const signatureView = getDataView(signatureArray);
      if (getUint32(signatureView) == SPLIT_ZIP_FILE_SIGNATURE) {
        throw new Error(ERR_SPLIT_ZIP_FILE);
      } else {
        throw new Error(ERR_EOCDR_NOT_FOUND);
      }
    }
    const endOfDirectoryView = getDataView(endOfDirectoryInfo);
    let directoryDataLength = getUint32(endOfDirectoryView, 12);
    let directoryDataOffset = getUint32(endOfDirectoryView, 16);
    const commentOffset = endOfDirectoryInfo.offset;
    const commentLength = getUint16(endOfDirectoryView, 20);
    const appendedDataOffset = commentOffset + END_OF_CENTRAL_DIR_LENGTH + commentLength;
    let lastDiskNumber = getUint16(endOfDirectoryView, 4);
    const expectedLastDiskNumber = reader.lastDiskNumber || 0;
    let diskNumber = getUint16(endOfDirectoryView, 6);
    let filesLength = getUint16(endOfDirectoryView, 8);
    let prependedDataLength = 0;
    let startOffset = 0;
    if (directoryDataOffset == MAX_32_BITS || directoryDataLength == MAX_32_BITS || filesLength == MAX_16_BITS || diskNumber == MAX_16_BITS) {
      const endOfDirectoryLocatorArray = await readUint8Array(reader, endOfDirectoryInfo.offset - ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH, ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH);
      const endOfDirectoryLocatorView = getDataView(endOfDirectoryLocatorArray);
      if (getUint32(endOfDirectoryLocatorView, 0) != ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE) {
        throw new Error(ERR_EOCDR_ZIP64_NOT_FOUND);
      }
      directoryDataOffset = getBigUint64(endOfDirectoryLocatorView, 8);
      let endOfDirectoryArray = await readUint8Array(reader, directoryDataOffset, ZIP64_END_OF_CENTRAL_DIR_LENGTH, -1);
      let endOfDirectoryView2 = getDataView(endOfDirectoryArray);
      const expectedDirectoryDataOffset = endOfDirectoryInfo.offset - ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH - ZIP64_END_OF_CENTRAL_DIR_LENGTH;
      if (getUint32(endOfDirectoryView2, 0) != ZIP64_END_OF_CENTRAL_DIR_SIGNATURE && directoryDataOffset != expectedDirectoryDataOffset) {
        const originalDirectoryDataOffset = directoryDataOffset;
        directoryDataOffset = expectedDirectoryDataOffset;
        prependedDataLength = directoryDataOffset - originalDirectoryDataOffset;
        endOfDirectoryArray = await readUint8Array(reader, directoryDataOffset, ZIP64_END_OF_CENTRAL_DIR_LENGTH, -1);
        endOfDirectoryView2 = getDataView(endOfDirectoryArray);
      }
      if (getUint32(endOfDirectoryView2, 0) != ZIP64_END_OF_CENTRAL_DIR_SIGNATURE) {
        throw new Error(ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND);
      }
      if (lastDiskNumber == MAX_16_BITS) {
        lastDiskNumber = getUint32(endOfDirectoryView2, 16);
      }
      if (diskNumber == MAX_16_BITS) {
        diskNumber = getUint32(endOfDirectoryView2, 20);
      }
      if (filesLength == MAX_16_BITS) {
        filesLength = getBigUint64(endOfDirectoryView2, 32);
      }
      if (directoryDataLength == MAX_32_BITS) {
        directoryDataLength = getBigUint64(endOfDirectoryView2, 40);
      }
      directoryDataOffset -= directoryDataLength;
    }
    if (directoryDataOffset >= reader.size) {
      prependedDataLength = reader.size - directoryDataOffset - directoryDataLength - END_OF_CENTRAL_DIR_LENGTH;
      directoryDataOffset = reader.size - directoryDataLength - END_OF_CENTRAL_DIR_LENGTH;
    }
    if (expectedLastDiskNumber != lastDiskNumber) {
      throw new Error(ERR_SPLIT_ZIP_FILE);
    }
    if (directoryDataOffset < 0) {
      throw new Error(ERR_BAD_FORMAT);
    }
    let offset = 0;
    let directoryArray = await readUint8Array(reader, directoryDataOffset, directoryDataLength, diskNumber);
    let directoryView = getDataView(directoryArray);
    if (directoryDataLength) {
      const expectedDirectoryDataOffset = endOfDirectoryInfo.offset - directoryDataLength;
      if (getUint32(directoryView, offset) != CENTRAL_FILE_HEADER_SIGNATURE && directoryDataOffset != expectedDirectoryDataOffset) {
        const originalDirectoryDataOffset = directoryDataOffset;
        directoryDataOffset = expectedDirectoryDataOffset;
        prependedDataLength += directoryDataOffset - originalDirectoryDataOffset;
        directoryArray = await readUint8Array(reader, directoryDataOffset, directoryDataLength, diskNumber);
        directoryView = getDataView(directoryArray);
      }
    }
    const expectedDirectoryDataLength = endOfDirectoryInfo.offset - directoryDataOffset - (reader.lastDiskOffset || 0);
    if (directoryDataLength != expectedDirectoryDataLength && expectedDirectoryDataLength >= 0) {
      directoryDataLength = expectedDirectoryDataLength;
      directoryArray = await readUint8Array(reader, directoryDataOffset, directoryDataLength, diskNumber);
      directoryView = getDataView(directoryArray);
    }
    if (directoryDataOffset < 0 || directoryDataOffset >= reader.size) {
      throw new Error(ERR_BAD_FORMAT);
    }
    const filenameEncoding = getOptionValue(zipReader, options, "filenameEncoding");
    const commentEncoding = getOptionValue(zipReader, options, "commentEncoding");
    for (let indexFile = 0; indexFile < filesLength; indexFile++) {
      const fileEntry = new ZipEntry(reader, config2, zipReader.options);
      if (getUint32(directoryView, offset) != CENTRAL_FILE_HEADER_SIGNATURE) {
        throw new Error(ERR_CENTRAL_DIRECTORY_NOT_FOUND);
      }
      readCommonHeader(fileEntry, directoryView, offset + 6);
      const languageEncodingFlag = Boolean(fileEntry.bitFlag.languageEncodingFlag);
      const filenameOffset = offset + 46;
      const extraFieldOffset = filenameOffset + fileEntry.filenameLength;
      const commentOffset2 = extraFieldOffset + fileEntry.extraFieldLength;
      const versionMadeBy = getUint16(directoryView, offset + 4);
      const msDosCompatible = (versionMadeBy & 0) == 0;
      const rawFilename = directoryArray.subarray(filenameOffset, extraFieldOffset);
      const commentLength2 = getUint16(directoryView, offset + 32);
      const endOffset = commentOffset2 + commentLength2;
      const rawComment = directoryArray.subarray(commentOffset2, endOffset);
      const filenameUTF8 = languageEncodingFlag;
      const commentUTF8 = languageEncodingFlag;
      const directory = msDosCompatible && (getUint8(directoryView, offset + 38) & FILE_ATTR_MSDOS_DIR_MASK) == FILE_ATTR_MSDOS_DIR_MASK;
      const offsetFileEntry = getUint32(directoryView, offset + 42) + prependedDataLength;
      Object.assign(fileEntry, {
        versionMadeBy,
        msDosCompatible,
        compressedSize: 0,
        uncompressedSize: 0,
        commentLength: commentLength2,
        directory,
        offset: offsetFileEntry,
        diskNumberStart: getUint16(directoryView, offset + 34),
        internalFileAttribute: getUint16(directoryView, offset + 36),
        externalFileAttribute: getUint32(directoryView, offset + 38),
        rawFilename,
        filenameUTF8,
        commentUTF8,
        rawExtraField: directoryArray.subarray(extraFieldOffset, commentOffset2)
      });
      const [filename, comment] = await Promise.all([
        decodeText(rawFilename, filenameUTF8 ? CHARSET_UTF8 : filenameEncoding || CHARSET_CP437),
        decodeText(rawComment, commentUTF8 ? CHARSET_UTF8 : commentEncoding || CHARSET_CP437)
      ]);
      Object.assign(fileEntry, {
        rawComment,
        filename,
        comment,
        directory: directory || filename.endsWith(DIRECTORY_SIGNATURE)
      });
      startOffset = Math.max(offsetFileEntry, startOffset);
      await readCommonFooter(fileEntry, fileEntry, directoryView, offset + 6);
      const entry = new Entry(fileEntry);
      entry.getData = (writer, options2) => fileEntry.getData(writer, entry, options2);
      offset = endOffset;
      const { onprogress } = options;
      if (onprogress) {
        try {
          await onprogress(indexFile + 1, filesLength, new Entry(fileEntry));
        } catch (_error) {
        }
      }
      yield entry;
    }
    const extractPrependedData = getOptionValue(zipReader, options, "extractPrependedData");
    const extractAppendedData = getOptionValue(zipReader, options, "extractAppendedData");
    if (extractPrependedData) {
      zipReader.prependedData = startOffset > 0 ? await readUint8Array(reader, 0, startOffset) : new Uint8Array();
    }
    zipReader.comment = commentLength ? await readUint8Array(reader, commentOffset + END_OF_CENTRAL_DIR_LENGTH, commentLength) : new Uint8Array();
    if (extractAppendedData) {
      zipReader.appendedData = appendedDataOffset < reader.size ? await readUint8Array(reader, appendedDataOffset, reader.size - appendedDataOffset) : new Uint8Array();
    }
    return true;
  }
  async getEntries(options = {}) {
    const entries = [];
    for await (const entry of this.getEntriesGenerator(options)) {
      entries.push(entry);
    }
    return entries;
  }
  async close() {
  }
};
var ZipEntry = class {
  constructor(reader, config2, options) {
    Object.assign(this, {
      reader,
      config: config2,
      options
    });
  }
  async getData(writer, fileEntry, options = {}) {
    const zipEntry = this;
    const {
      reader,
      offset,
      diskNumberStart,
      extraFieldAES,
      compressionMethod,
      config: config2,
      bitFlag,
      signature,
      rawLastModDate,
      uncompressedSize,
      compressedSize
    } = zipEntry;
    const localDirectory = fileEntry.localDirectory = {};
    const dataArray = await readUint8Array(reader, offset, 30, diskNumberStart);
    const dataView = getDataView(dataArray);
    let password = getOptionValue(zipEntry, options, "password");
    let rawPassword = getOptionValue(zipEntry, options, "rawPassword");
    password = password && password.length && password;
    rawPassword = rawPassword && rawPassword.length && rawPassword;
    if (extraFieldAES) {
      if (extraFieldAES.originalCompressionMethod != COMPRESSION_METHOD_AES) {
        throw new Error(ERR_UNSUPPORTED_COMPRESSION);
      }
    }
    if (compressionMethod != COMPRESSION_METHOD_STORE && compressionMethod != COMPRESSION_METHOD_DEFLATE) {
      throw new Error(ERR_UNSUPPORTED_COMPRESSION);
    }
    if (getUint32(dataView, 0) != LOCAL_FILE_HEADER_SIGNATURE) {
      throw new Error(ERR_LOCAL_FILE_HEADER_NOT_FOUND);
    }
    readCommonHeader(localDirectory, dataView, 4);
    localDirectory.rawExtraField = localDirectory.extraFieldLength ? await readUint8Array(reader, offset + 30 + localDirectory.filenameLength, localDirectory.extraFieldLength, diskNumberStart) : new Uint8Array();
    await readCommonFooter(zipEntry, localDirectory, dataView, 4, true);
    Object.assign(fileEntry, {
      lastAccessDate: localDirectory.lastAccessDate,
      creationDate: localDirectory.creationDate
    });
    const encrypted = zipEntry.encrypted && localDirectory.encrypted;
    const zipCrypto = encrypted && !extraFieldAES;
    if (encrypted) {
      if (!zipCrypto && extraFieldAES.strength === UNDEFINED_VALUE) {
        throw new Error(ERR_UNSUPPORTED_ENCRYPTION);
      } else if (!password && !rawPassword) {
        throw new Error(ERR_ENCRYPTED);
      }
    }
    const dataOffset = offset + 30 + localDirectory.filenameLength + localDirectory.extraFieldLength;
    const size = compressedSize;
    const readable = reader.readable;
    Object.assign(readable, {
      diskNumberStart,
      offset: dataOffset,
      size
    });
    const signal = getOptionValue(zipEntry, options, "signal");
    const checkPasswordOnly = getOptionValue(zipEntry, options, "checkPasswordOnly");
    if (checkPasswordOnly) {
      writer = new WritableStream();
    }
    writer = initWriter(writer);
    await initStream(writer, uncompressedSize);
    const { writable } = writer;
    const { onstart, onprogress, onend } = options;
    const workerOptions = {
      options: {
        codecType: CODEC_INFLATE,
        password,
        rawPassword,
        zipCrypto,
        encryptionStrength: extraFieldAES && extraFieldAES.strength,
        signed: getOptionValue(zipEntry, options, "checkSignature"),
        passwordVerification: zipCrypto && (bitFlag.dataDescriptor ? rawLastModDate >>> 8 & 255 : signature >>> 24 & 255),
        signature,
        compressed: compressionMethod != 0,
        encrypted,
        useWebWorkers: getOptionValue(zipEntry, options, "useWebWorkers"),
        useCompressionStream: getOptionValue(zipEntry, options, "useCompressionStream"),
        transferStreams: getOptionValue(zipEntry, options, "transferStreams"),
        checkPasswordOnly
      },
      config: config2,
      streamOptions: { signal, size, onstart, onprogress, onend }
    };
    let outputSize = 0;
    try {
      ({ outputSize } = await runWorker2({ readable, writable }, workerOptions));
    } catch (error) {
      if (!checkPasswordOnly || error.message != ERR_ABORT_CHECK_PASSWORD) {
        throw error;
      }
    } finally {
      const preventClose = getOptionValue(zipEntry, options, "preventClose");
      writable.size += outputSize;
      if (!preventClose && !writable.locked) {
        await writable.getWriter().close();
      }
    }
    return checkPasswordOnly ? UNDEFINED_VALUE : writer.getData ? writer.getData() : writable;
  }
};
function readCommonHeader(directory, dataView, offset) {
  const rawBitFlag = directory.rawBitFlag = getUint16(dataView, offset + 2);
  const encrypted = (rawBitFlag & BITFLAG_ENCRYPTED) == BITFLAG_ENCRYPTED;
  const rawLastModDate = getUint32(dataView, offset + 6);
  Object.assign(directory, {
    encrypted,
    version: getUint16(dataView, offset),
    bitFlag: {
      level: (rawBitFlag & BITFLAG_LEVEL) >> 1,
      dataDescriptor: (rawBitFlag & BITFLAG_DATA_DESCRIPTOR) == BITFLAG_DATA_DESCRIPTOR,
      languageEncodingFlag: (rawBitFlag & BITFLAG_LANG_ENCODING_FLAG) == BITFLAG_LANG_ENCODING_FLAG
    },
    rawLastModDate,
    lastModDate: getDate(rawLastModDate),
    filenameLength: getUint16(dataView, offset + 22),
    extraFieldLength: getUint16(dataView, offset + 24)
  });
}
async function readCommonFooter(fileEntry, directory, dataView, offset, localDirectory) {
  const { rawExtraField } = directory;
  const extraField = directory.extraField = /* @__PURE__ */ new Map();
  const rawExtraFieldView = getDataView(new Uint8Array(rawExtraField));
  let offsetExtraField = 0;
  try {
    while (offsetExtraField < rawExtraField.length) {
      const type = getUint16(rawExtraFieldView, offsetExtraField);
      const size = getUint16(rawExtraFieldView, offsetExtraField + 2);
      extraField.set(type, {
        type,
        data: rawExtraField.slice(offsetExtraField + 4, offsetExtraField + 4 + size)
      });
      offsetExtraField += 4 + size;
    }
  } catch (_error) {
  }
  const compressionMethod = getUint16(dataView, offset + 4);
  Object.assign(directory, {
    signature: getUint32(dataView, offset + 10),
    uncompressedSize: getUint32(dataView, offset + 18),
    compressedSize: getUint32(dataView, offset + 14)
  });
  const extraFieldZip64 = extraField.get(EXTRAFIELD_TYPE_ZIP64);
  if (extraFieldZip64) {
    readExtraFieldZip64(extraFieldZip64, directory);
    directory.extraFieldZip64 = extraFieldZip64;
  }
  const extraFieldUnicodePath = extraField.get(EXTRAFIELD_TYPE_UNICODE_PATH);
  if (extraFieldUnicodePath) {
    await readExtraFieldUnicode(extraFieldUnicodePath, PROPERTY_NAME_FILENAME, PROPERTY_NAME_RAW_FILENAME, directory, fileEntry);
    directory.extraFieldUnicodePath = extraFieldUnicodePath;
  }
  const extraFieldUnicodeComment = extraField.get(EXTRAFIELD_TYPE_UNICODE_COMMENT);
  if (extraFieldUnicodeComment) {
    await readExtraFieldUnicode(extraFieldUnicodeComment, PROPERTY_NAME_COMMENT, PROPERTY_NAME_RAW_COMMENT, directory, fileEntry);
    directory.extraFieldUnicodeComment = extraFieldUnicodeComment;
  }
  const extraFieldAES = extraField.get(EXTRAFIELD_TYPE_AES);
  if (extraFieldAES) {
    readExtraFieldAES(extraFieldAES, directory, compressionMethod);
    directory.extraFieldAES = extraFieldAES;
  } else {
    directory.compressionMethod = compressionMethod;
  }
  const extraFieldNTFS = extraField.get(EXTRAFIELD_TYPE_NTFS);
  if (extraFieldNTFS) {
    readExtraFieldNTFS(extraFieldNTFS, directory);
    directory.extraFieldNTFS = extraFieldNTFS;
  }
  const extraFieldExtendedTimestamp = extraField.get(EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP);
  if (extraFieldExtendedTimestamp) {
    readExtraFieldExtendedTimestamp(extraFieldExtendedTimestamp, directory, localDirectory);
    directory.extraFieldExtendedTimestamp = extraFieldExtendedTimestamp;
  }
  const extraFieldUSDZ = extraField.get(EXTRAFIELD_TYPE_USDZ);
  if (extraFieldUSDZ) {
    directory.extraFieldUSDZ = extraFieldUSDZ;
  }
}
function readExtraFieldZip64(extraFieldZip64, directory) {
  directory.zip64 = true;
  const extraFieldView = getDataView(extraFieldZip64.data);
  const missingProperties = ZIP64_PROPERTIES.filter(([propertyName, max]) => directory[propertyName] == max);
  for (let indexMissingProperty = 0, offset = 0; indexMissingProperty < missingProperties.length; indexMissingProperty++) {
    const [propertyName, max] = missingProperties[indexMissingProperty];
    if (directory[propertyName] == max) {
      const extraction = ZIP64_EXTRACTION[max];
      directory[propertyName] = extraFieldZip64[propertyName] = extraction.getValue(extraFieldView, offset);
      offset += extraction.bytes;
    } else if (extraFieldZip64[propertyName]) {
      throw new Error(ERR_EXTRAFIELD_ZIP64_NOT_FOUND);
    }
  }
}
async function readExtraFieldUnicode(extraFieldUnicode, propertyName, rawPropertyName, directory, fileEntry) {
  const extraFieldView = getDataView(extraFieldUnicode.data);
  const crc32 = new Crc32();
  crc32.append(fileEntry[rawPropertyName]);
  const dataViewSignature = getDataView(new Uint8Array(4));
  dataViewSignature.setUint32(0, crc32.get(), true);
  const signature = getUint32(extraFieldView, 1);
  Object.assign(extraFieldUnicode, {
    version: getUint8(extraFieldView, 0),
    [propertyName]: decodeText(extraFieldUnicode.data.subarray(5)),
    valid: !fileEntry.bitFlag.languageEncodingFlag && signature == getUint32(dataViewSignature, 0)
  });
  if (extraFieldUnicode.valid) {
    directory[propertyName] = extraFieldUnicode[propertyName];
    directory[propertyName + "UTF8"] = true;
  }
}
function readExtraFieldAES(extraFieldAES, directory, compressionMethod) {
  const extraFieldView = getDataView(extraFieldAES.data);
  const strength = getUint8(extraFieldView, 4);
  Object.assign(extraFieldAES, {
    vendorVersion: getUint8(extraFieldView, 0),
    vendorId: getUint8(extraFieldView, 2),
    strength,
    originalCompressionMethod: compressionMethod,
    compressionMethod: getUint16(extraFieldView, 5)
  });
  directory.compressionMethod = extraFieldAES.compressionMethod;
}
function readExtraFieldNTFS(extraFieldNTFS, directory) {
  const extraFieldView = getDataView(extraFieldNTFS.data);
  let offsetExtraField = 4;
  let tag1Data;
  try {
    while (offsetExtraField < extraFieldNTFS.data.length && !tag1Data) {
      const tagValue = getUint16(extraFieldView, offsetExtraField);
      const attributeSize = getUint16(extraFieldView, offsetExtraField + 2);
      if (tagValue == EXTRAFIELD_TYPE_NTFS_TAG1) {
        tag1Data = extraFieldNTFS.data.slice(offsetExtraField + 4, offsetExtraField + 4 + attributeSize);
      }
      offsetExtraField += 4 + attributeSize;
    }
  } catch (_error) {
  }
  try {
    if (tag1Data && tag1Data.length == 24) {
      const tag1View = getDataView(tag1Data);
      const rawLastModDate = tag1View.getBigUint64(0, true);
      const rawLastAccessDate = tag1View.getBigUint64(8, true);
      const rawCreationDate = tag1View.getBigUint64(16, true);
      Object.assign(extraFieldNTFS, {
        rawLastModDate,
        rawLastAccessDate,
        rawCreationDate
      });
      const lastModDate = getDateNTFS(rawLastModDate);
      const lastAccessDate = getDateNTFS(rawLastAccessDate);
      const creationDate = getDateNTFS(rawCreationDate);
      const extraFieldData = { lastModDate, lastAccessDate, creationDate };
      Object.assign(extraFieldNTFS, extraFieldData);
      Object.assign(directory, extraFieldData);
    }
  } catch (_error) {
  }
}
function readExtraFieldExtendedTimestamp(extraFieldExtendedTimestamp, directory, localDirectory) {
  const extraFieldView = getDataView(extraFieldExtendedTimestamp.data);
  const flags = getUint8(extraFieldView, 0);
  const timeProperties = [];
  const timeRawProperties = [];
  if (localDirectory) {
    if ((flags & 1) == 1) {
      timeProperties.push(PROPERTY_NAME_LAST_MODIFICATION_DATE);
      timeRawProperties.push(PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE);
    }
    if ((flags & 2) == 2) {
      timeProperties.push(PROPERTY_NAME_LAST_ACCESS_DATE);
      timeRawProperties.push(PROPERTY_NAME_RAW_LAST_ACCESS_DATE);
    }
    if ((flags & 4) == 4) {
      timeProperties.push(PROPERTY_NAME_CREATION_DATE);
      timeRawProperties.push(PROPERTY_NAME_RAW_CREATION_DATE);
    }
  } else if (extraFieldExtendedTimestamp.data.length >= 5) {
    timeProperties.push(PROPERTY_NAME_LAST_MODIFICATION_DATE);
    timeRawProperties.push(PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE);
  }
  let offset = 1;
  timeProperties.forEach((propertyName, indexProperty) => {
    if (extraFieldExtendedTimestamp.data.length >= offset + 4) {
      const time = getUint32(extraFieldView, offset);
      directory[propertyName] = extraFieldExtendedTimestamp[propertyName] = new Date(time * 1e3);
      const rawPropertyName = timeRawProperties[indexProperty];
      extraFieldExtendedTimestamp[rawPropertyName] = time;
    }
    offset += 4;
  });
}
async function seekSignature(reader, signature, startOffset, minimumBytes, maximumLength) {
  const signatureArray = new Uint8Array(4);
  const signatureView = getDataView(signatureArray);
  setUint32(signatureView, 0, signature);
  const maximumBytes = minimumBytes + maximumLength;
  return await seek(minimumBytes) || await seek(Math.min(maximumBytes, startOffset));
  async function seek(length) {
    const offset = startOffset - length;
    const bytes = await readUint8Array(reader, offset, length);
    for (let indexByte = bytes.length - minimumBytes; indexByte >= 0; indexByte--) {
      if (bytes[indexByte] == signatureArray[0] && bytes[indexByte + 1] == signatureArray[1] && bytes[indexByte + 2] == signatureArray[2] && bytes[indexByte + 3] == signatureArray[3]) {
        return {
          offset: offset + indexByte,
          buffer: bytes.slice(indexByte, indexByte + minimumBytes).buffer
        };
      }
    }
  }
}
function getOptionValue(zipReader, options, name) {
  return options[name] === UNDEFINED_VALUE ? zipReader.options[name] : options[name];
}
function getDate(timeRaw) {
  const date = (timeRaw & 4294901760) >> 16, time = timeRaw & 65535;
  try {
    return new Date(1980 + ((date & 65024) >> 9), ((date & 480) >> 5) - 1, date & 31, (time & 63488) >> 11, (time & 2016) >> 5, (time & 31) * 2, 0);
  } catch (_error) {
  }
}
function getDateNTFS(timeRaw) {
  return new Date(Number(timeRaw / BigInt(1e4) - BigInt(116444736e5)));
}
function getUint8(view, offset) {
  return view.getUint8(offset);
}
function getUint16(view, offset) {
  return view.getUint16(offset, true);
}
function getUint32(view, offset) {
  return view.getUint32(offset, true);
}
function getBigUint64(view, offset) {
  return Number(view.getBigUint64(offset, true));
}
function setUint32(view, offset, value) {
  view.setUint32(offset, value, true);
}
function getDataView(array) {
  return new DataView(array.buffer);
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/zip-writer.js
var ERR_DUPLICATED_NAME = "File already exists";
var ERR_INVALID_COMMENT = "Zip file comment exceeds 64KB";
var ERR_INVALID_ENTRY_COMMENT = "File entry comment exceeds 64KB";
var ERR_INVALID_ENTRY_NAME = "File entry name exceeds 64KB";
var ERR_INVALID_VERSION = "Version exceeds 65535";
var ERR_INVALID_ENCRYPTION_STRENGTH = "The strength must equal 1, 2, or 3";
var ERR_INVALID_EXTRAFIELD_TYPE = "Extra field type exceeds 65535";
var ERR_INVALID_EXTRAFIELD_DATA = "Extra field data exceeds 64KB";
var ERR_UNSUPPORTED_FORMAT = "Zip64 is not supported (make sure 'keepOrder' is set to 'true')";
var EXTRAFIELD_DATA_AES = new Uint8Array([7, 0, 2, 0, 65, 69, 3, 0, 0]);
var workers = 0;
var pendingEntries = [];
var ZipWriter = class {
  constructor(writer, options = {}) {
    writer = initWriter(writer);
    Object.assign(this, {
      writer,
      addSplitZipSignature: writer instanceof SplitDataWriter,
      options,
      config: getConfiguration(),
      files: /* @__PURE__ */ new Map(),
      filenames: /* @__PURE__ */ new Set(),
      offset: writer.writable.size,
      pendingEntriesSize: 0,
      pendingAddFileCalls: /* @__PURE__ */ new Set(),
      bufferedWrites: 0
    });
  }
  async add(name = "", reader, options = {}) {
    const zipWriter = this;
    const {
      pendingAddFileCalls,
      config: config2
    } = zipWriter;
    if (workers < config2.maxWorkers) {
      workers++;
    } else {
      await new Promise((resolve) => pendingEntries.push(resolve));
    }
    let promiseAddFile;
    try {
      name = name.trim();
      if (zipWriter.filenames.has(name)) {
        throw new Error(ERR_DUPLICATED_NAME);
      }
      zipWriter.filenames.add(name);
      promiseAddFile = addFile(zipWriter, name, reader, options);
      pendingAddFileCalls.add(promiseAddFile);
      return await promiseAddFile;
    } catch (error) {
      zipWriter.filenames.delete(name);
      throw error;
    } finally {
      pendingAddFileCalls.delete(promiseAddFile);
      const pendingEntry = pendingEntries.shift();
      if (pendingEntry) {
        pendingEntry();
      } else {
        workers--;
      }
    }
  }
  async close(comment = new Uint8Array(), options = {}) {
    const zipWriter = this;
    const { pendingAddFileCalls, writer } = this;
    const { writable } = writer;
    while (pendingAddFileCalls.size) {
      await Promise.allSettled(Array.from(pendingAddFileCalls));
    }
    await closeFile(this, comment, options);
    const preventClose = getOptionValue2(zipWriter, options, "preventClose");
    if (!preventClose) {
      await writable.getWriter().close();
    }
    return writer.getData ? writer.getData() : writable;
  }
};
async function addFile(zipWriter, name, reader, options) {
  name = name.trim();
  if (options.directory && !name.endsWith(DIRECTORY_SIGNATURE)) {
    name += DIRECTORY_SIGNATURE;
  } else {
    options.directory = name.endsWith(DIRECTORY_SIGNATURE);
  }
  const rawFilename = encodeText(name);
  if (getLength(rawFilename) > MAX_16_BITS) {
    throw new Error(ERR_INVALID_ENTRY_NAME);
  }
  const comment = options.comment || "";
  const rawComment = encodeText(comment);
  if (getLength(rawComment) > MAX_16_BITS) {
    throw new Error(ERR_INVALID_ENTRY_COMMENT);
  }
  const version = getOptionValue2(zipWriter, options, "version", VERSION_DEFLATE);
  if (version > MAX_16_BITS) {
    throw new Error(ERR_INVALID_VERSION);
  }
  const versionMadeBy = getOptionValue2(zipWriter, options, "versionMadeBy", 20);
  if (versionMadeBy > MAX_16_BITS) {
    throw new Error(ERR_INVALID_VERSION);
  }
  const lastModDate = getOptionValue2(zipWriter, options, PROPERTY_NAME_LAST_MODIFICATION_DATE, /* @__PURE__ */ new Date());
  const lastAccessDate = getOptionValue2(zipWriter, options, PROPERTY_NAME_LAST_ACCESS_DATE);
  const creationDate = getOptionValue2(zipWriter, options, PROPERTY_NAME_CREATION_DATE);
  const msDosCompatible = getOptionValue2(zipWriter, options, PROPERTY_NAME_MS_DOS_COMPATIBLE, true);
  const internalFileAttribute = getOptionValue2(zipWriter, options, PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTE, 0);
  const externalFileAttribute = getOptionValue2(zipWriter, options, PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTE, 0);
  const password = getOptionValue2(zipWriter, options, "password");
  const rawPassword = getOptionValue2(zipWriter, options, "rawPassword");
  const encryptionStrength = getOptionValue2(zipWriter, options, "encryptionStrength", 3);
  const zipCrypto = getOptionValue2(zipWriter, options, "zipCrypto");
  const extendedTimestamp = getOptionValue2(zipWriter, options, "extendedTimestamp", true);
  const keepOrder = getOptionValue2(zipWriter, options, "keepOrder", true);
  const level = getOptionValue2(zipWriter, options, "level");
  const useWebWorkers = getOptionValue2(zipWriter, options, "useWebWorkers");
  const bufferedWrite = getOptionValue2(zipWriter, options, "bufferedWrite");
  const dataDescriptorSignature = getOptionValue2(zipWriter, options, "dataDescriptorSignature", false);
  const signal = getOptionValue2(zipWriter, options, "signal");
  const useCompressionStream = getOptionValue2(zipWriter, options, "useCompressionStream");
  let dataDescriptor = getOptionValue2(zipWriter, options, "dataDescriptor", true);
  let zip64 = getOptionValue2(zipWriter, options, PROPERTY_NAME_ZIP64);
  if (password !== UNDEFINED_VALUE && encryptionStrength !== UNDEFINED_VALUE && (encryptionStrength < 1 || encryptionStrength > 3)) {
    throw new Error(ERR_INVALID_ENCRYPTION_STRENGTH);
  }
  let rawExtraField = new Uint8Array();
  const { extraField } = options;
  if (extraField) {
    let extraFieldSize = 0;
    let offset = 0;
    extraField.forEach((data) => extraFieldSize += 4 + getLength(data));
    rawExtraField = new Uint8Array(extraFieldSize);
    extraField.forEach((data, type) => {
      if (type > MAX_16_BITS) {
        throw new Error(ERR_INVALID_EXTRAFIELD_TYPE);
      }
      if (getLength(data) > MAX_16_BITS) {
        throw new Error(ERR_INVALID_EXTRAFIELD_DATA);
      }
      arraySet(rawExtraField, new Uint16Array([type]), offset);
      arraySet(rawExtraField, new Uint16Array([getLength(data)]), offset + 2);
      arraySet(rawExtraField, data, offset + 4);
      offset += 4 + getLength(data);
    });
  }
  let maximumCompressedSize = 0;
  let maximumEntrySize = 0;
  let uncompressedSize = 0;
  const zip64Enabled = zip64 === true;
  if (reader) {
    reader = initReader(reader);
    await initStream(reader);
    if (reader.size === UNDEFINED_VALUE) {
      dataDescriptor = true;
      if (zip64 || zip64 === UNDEFINED_VALUE) {
        zip64 = true;
        uncompressedSize = maximumCompressedSize = MAX_32_BITS;
      }
    } else {
      uncompressedSize = reader.size;
      maximumCompressedSize = getMaximumCompressedSize2(uncompressedSize);
    }
  }
  const { diskOffset, diskNumber, maxSize } = zipWriter.writer;
  const zip64UncompressedSize = zip64Enabled || uncompressedSize >= MAX_32_BITS;
  const zip64CompressedSize = zip64Enabled || maximumCompressedSize >= MAX_32_BITS;
  const zip64Offset = zip64Enabled || zipWriter.offset + zipWriter.pendingEntriesSize - diskOffset >= MAX_32_BITS;
  const supportZip64SplitFile = getOptionValue2(zipWriter, options, "supportZip64SplitFile", true);
  const zip64DiskNumberStart = supportZip64SplitFile && zip64Enabled || diskNumber + Math.ceil(zipWriter.pendingEntriesSize / maxSize) >= MAX_16_BITS;
  if (zip64Offset || zip64UncompressedSize || zip64CompressedSize || zip64DiskNumberStart) {
    if (zip64 === false || !keepOrder) {
      throw new Error(ERR_UNSUPPORTED_FORMAT);
    } else {
      zip64 = true;
    }
  }
  zip64 = zip64 || false;
  options = Object.assign({}, options, {
    rawFilename,
    rawComment,
    version,
    versionMadeBy,
    lastModDate,
    lastAccessDate,
    creationDate,
    rawExtraField,
    zip64,
    zip64UncompressedSize,
    zip64CompressedSize,
    zip64Offset,
    zip64DiskNumberStart,
    password,
    rawPassword,
    level,
    useWebWorkers,
    encryptionStrength,
    extendedTimestamp,
    zipCrypto,
    bufferedWrite,
    keepOrder,
    dataDescriptor,
    dataDescriptorSignature,
    signal,
    msDosCompatible,
    internalFileAttribute,
    externalFileAttribute,
    useCompressionStream
  });
  const headerInfo = getHeaderInfo(options);
  const dataDescriptorInfo = getDataDescriptorInfo(options);
  const metadataSize = getLength(headerInfo.localHeaderArray, dataDescriptorInfo.dataDescriptorArray);
  maximumEntrySize = metadataSize + maximumCompressedSize;
  if (zipWriter.options.usdz) {
    maximumEntrySize += maximumEntrySize + 64;
  }
  zipWriter.pendingEntriesSize += maximumEntrySize;
  let fileEntry;
  try {
    fileEntry = await getFileEntry(zipWriter, name, reader, { headerInfo, dataDescriptorInfo, metadataSize }, options);
  } finally {
    zipWriter.pendingEntriesSize -= maximumEntrySize;
  }
  Object.assign(fileEntry, { name, comment, extraField });
  return new Entry(fileEntry);
}
async function getFileEntry(zipWriter, name, reader, entryInfo, options) {
  const {
    files,
    writer
  } = zipWriter;
  const {
    keepOrder,
    dataDescriptor,
    signal
  } = options;
  const {
    headerInfo
  } = entryInfo;
  const { usdz } = zipWriter.options;
  const previousFileEntry = Array.from(files.values()).pop();
  let fileEntry = {};
  let bufferedWrite;
  let releaseLockWriter;
  let releaseLockCurrentFileEntry;
  let writingBufferedEntryData;
  let writingEntryData;
  let fileWriter;
  files.set(name, fileEntry);
  try {
    let lockPreviousFileEntry;
    if (keepOrder) {
      lockPreviousFileEntry = previousFileEntry && previousFileEntry.lock;
      requestLockCurrentFileEntry();
    }
    if ((options.bufferedWrite || zipWriter.writerLocked || zipWriter.bufferedWrites && keepOrder || !dataDescriptor) && !usdz) {
      fileWriter = new BlobWriter();
      fileWriter.writable.size = 0;
      bufferedWrite = true;
      zipWriter.bufferedWrites++;
      await initStream(writer);
    } else {
      fileWriter = writer;
      await requestLockWriter();
    }
    await initStream(fileWriter);
    const { writable } = writer;
    let { diskOffset } = writer;
    if (zipWriter.addSplitZipSignature) {
      delete zipWriter.addSplitZipSignature;
      const signatureArray = new Uint8Array(4);
      const signatureArrayView = getDataView2(signatureArray);
      setUint322(signatureArrayView, 0, SPLIT_ZIP_FILE_SIGNATURE);
      await writeData(writable, signatureArray);
      zipWriter.offset += 4;
    }
    if (usdz) {
      appendExtraFieldUSDZ(entryInfo, zipWriter.offset - diskOffset);
    }
    if (!bufferedWrite) {
      await lockPreviousFileEntry;
      await skipDiskIfNeeded(writable);
    }
    const { diskNumber } = writer;
    writingEntryData = true;
    fileEntry.diskNumberStart = diskNumber;
    fileEntry = await createFileEntry(reader, fileWriter, fileEntry, entryInfo, zipWriter.config, options);
    writingEntryData = false;
    files.set(name, fileEntry);
    fileEntry.filename = name;
    if (bufferedWrite) {
      await fileWriter.writable.getWriter().close();
      let blob = await fileWriter.getData();
      await lockPreviousFileEntry;
      await requestLockWriter();
      writingBufferedEntryData = true;
      if (!dataDescriptor) {
        blob = await writeExtraHeaderInfo(fileEntry, blob, writable, options);
      }
      await skipDiskIfNeeded(writable);
      fileEntry.diskNumberStart = writer.diskNumber;
      diskOffset = writer.diskOffset;
      await blob.stream().pipeTo(writable, { preventClose: true, preventAbort: true, signal });
      writable.size += blob.size;
      writingBufferedEntryData = false;
    }
    fileEntry.offset = zipWriter.offset - diskOffset;
    if (fileEntry.zip64) {
      setZip64ExtraInfo(fileEntry, options);
    } else if (fileEntry.offset >= MAX_32_BITS) {
      throw new Error(ERR_UNSUPPORTED_FORMAT);
    }
    zipWriter.offset += fileEntry.size;
    return fileEntry;
  } catch (error) {
    if (bufferedWrite && writingBufferedEntryData || !bufferedWrite && writingEntryData) {
      zipWriter.hasCorruptedEntries = true;
      if (error) {
        try {
          error.corruptedEntry = true;
        } catch (_error) {
        }
      }
      if (bufferedWrite) {
        zipWriter.offset += fileWriter.writable.size;
      } else {
        zipWriter.offset = fileWriter.writable.size;
      }
    }
    files.delete(name);
    throw error;
  } finally {
    if (bufferedWrite) {
      zipWriter.bufferedWrites--;
    }
    if (releaseLockCurrentFileEntry) {
      releaseLockCurrentFileEntry();
    }
    if (releaseLockWriter) {
      releaseLockWriter();
    }
  }
  function requestLockCurrentFileEntry() {
    fileEntry.lock = new Promise((resolve) => releaseLockCurrentFileEntry = resolve);
  }
  async function requestLockWriter() {
    zipWriter.writerLocked = true;
    const { lockWriter } = zipWriter;
    zipWriter.lockWriter = new Promise((resolve) => releaseLockWriter = () => {
      zipWriter.writerLocked = false;
      resolve();
    });
    await lockWriter;
  }
  async function skipDiskIfNeeded(writable) {
    if (getLength(headerInfo.localHeaderArray) > writer.availableSize) {
      writer.availableSize = 0;
      await writeData(writable, new Uint8Array());
    }
  }
}
async function createFileEntry(reader, writer, { diskNumberStart, lock }, entryInfo, config2, options) {
  const {
    headerInfo,
    dataDescriptorInfo,
    metadataSize
  } = entryInfo;
  const {
    localHeaderArray,
    headerArray,
    lastModDate,
    rawLastModDate,
    encrypted,
    compressed,
    version,
    compressionMethod,
    rawExtraFieldExtendedTimestamp,
    extraFieldExtendedTimestampFlag,
    rawExtraFieldNTFS,
    rawExtraFieldAES
  } = headerInfo;
  const { dataDescriptorArray } = dataDescriptorInfo;
  const {
    rawFilename,
    lastAccessDate,
    creationDate,
    password,
    rawPassword,
    level,
    zip64,
    zip64UncompressedSize,
    zip64CompressedSize,
    zip64Offset,
    zip64DiskNumberStart,
    zipCrypto,
    dataDescriptor,
    directory,
    versionMadeBy,
    rawComment,
    rawExtraField,
    useWebWorkers,
    onstart,
    onprogress,
    onend,
    signal,
    encryptionStrength,
    extendedTimestamp,
    msDosCompatible,
    internalFileAttribute,
    externalFileAttribute,
    useCompressionStream
  } = options;
  const fileEntry = {
    lock,
    versionMadeBy,
    zip64,
    directory: Boolean(directory),
    filenameUTF8: true,
    rawFilename,
    commentUTF8: true,
    rawComment,
    rawExtraFieldExtendedTimestamp,
    rawExtraFieldNTFS,
    rawExtraFieldAES,
    rawExtraField,
    extendedTimestamp,
    msDosCompatible,
    internalFileAttribute,
    externalFileAttribute,
    diskNumberStart
  };
  let compressedSize = 0;
  let uncompressedSize = 0;
  let signature;
  const { writable } = writer;
  if (reader) {
    reader.chunkSize = getChunkSize(config2);
    await writeData(writable, localHeaderArray);
    const readable = reader.readable;
    const size = readable.size = reader.size;
    const workerOptions = {
      options: {
        codecType: CODEC_DEFLATE,
        level,
        rawPassword,
        password,
        encryptionStrength,
        zipCrypto: encrypted && zipCrypto,
        passwordVerification: encrypted && zipCrypto && rawLastModDate >> 8 & 255,
        signed: true,
        compressed,
        encrypted,
        useWebWorkers,
        useCompressionStream,
        transferStreams: false
      },
      config: config2,
      streamOptions: { signal, size, onstart, onprogress, onend }
    };
    const result = await runWorker2({ readable, writable }, workerOptions);
    uncompressedSize = result.inputSize;
    compressedSize = result.outputSize;
    signature = result.signature;
    writable.size += uncompressedSize;
  } else {
    await writeData(writable, localHeaderArray);
  }
  let rawExtraFieldZip64;
  if (zip64) {
    let rawExtraFieldZip64Length = 4;
    if (zip64UncompressedSize) {
      rawExtraFieldZip64Length += 8;
    }
    if (zip64CompressedSize) {
      rawExtraFieldZip64Length += 8;
    }
    if (zip64Offset) {
      rawExtraFieldZip64Length += 8;
    }
    if (zip64DiskNumberStart) {
      rawExtraFieldZip64Length += 4;
    }
    rawExtraFieldZip64 = new Uint8Array(rawExtraFieldZip64Length);
  } else {
    rawExtraFieldZip64 = new Uint8Array();
  }
  setEntryInfo({
    signature,
    rawExtraFieldZip64,
    compressedSize,
    uncompressedSize,
    headerInfo,
    dataDescriptorInfo
  }, options);
  if (dataDescriptor) {
    await writeData(writable, dataDescriptorArray);
  }
  Object.assign(fileEntry, {
    uncompressedSize,
    compressedSize,
    lastModDate,
    rawLastModDate,
    creationDate,
    lastAccessDate,
    encrypted,
    size: metadataSize + compressedSize,
    compressionMethod,
    version,
    headerArray,
    signature,
    rawExtraFieldZip64,
    extraFieldExtendedTimestampFlag,
    zip64UncompressedSize,
    zip64CompressedSize,
    zip64Offset,
    zip64DiskNumberStart
  });
  return fileEntry;
}
function getHeaderInfo(options) {
  const {
    rawFilename,
    lastModDate,
    lastAccessDate,
    creationDate,
    rawPassword,
    password,
    level,
    zip64,
    zipCrypto,
    dataDescriptor,
    directory,
    rawExtraField,
    encryptionStrength,
    extendedTimestamp
  } = options;
  const compressed = level !== 0 && !directory;
  const encrypted = Boolean(password && getLength(password) || rawPassword && getLength(rawPassword));
  let version = options.version;
  let rawExtraFieldAES;
  if (encrypted && !zipCrypto) {
    rawExtraFieldAES = new Uint8Array(getLength(EXTRAFIELD_DATA_AES) + 2);
    const extraFieldAESView = getDataView2(rawExtraFieldAES);
    setUint16(extraFieldAESView, 0, EXTRAFIELD_TYPE_AES);
    arraySet(rawExtraFieldAES, EXTRAFIELD_DATA_AES, 2);
    setUint8(extraFieldAESView, 8, encryptionStrength);
  } else {
    rawExtraFieldAES = new Uint8Array();
  }
  let rawExtraFieldNTFS;
  let rawExtraFieldExtendedTimestamp;
  let extraFieldExtendedTimestampFlag;
  if (extendedTimestamp) {
    rawExtraFieldExtendedTimestamp = new Uint8Array(9 + (lastAccessDate ? 4 : 0) + (creationDate ? 4 : 0));
    const extraFieldExtendedTimestampView = getDataView2(rawExtraFieldExtendedTimestamp);
    setUint16(extraFieldExtendedTimestampView, 0, EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP);
    setUint16(extraFieldExtendedTimestampView, 2, getLength(rawExtraFieldExtendedTimestamp) - 4);
    extraFieldExtendedTimestampFlag = 1 + (lastAccessDate ? 2 : 0) + (creationDate ? 4 : 0);
    setUint8(extraFieldExtendedTimestampView, 4, extraFieldExtendedTimestampFlag);
    let offset = 5;
    setUint322(extraFieldExtendedTimestampView, offset, Math.floor(lastModDate.getTime() / 1e3));
    offset += 4;
    if (lastAccessDate) {
      setUint322(extraFieldExtendedTimestampView, offset, Math.floor(lastAccessDate.getTime() / 1e3));
      offset += 4;
    }
    if (creationDate) {
      setUint322(extraFieldExtendedTimestampView, offset, Math.floor(creationDate.getTime() / 1e3));
    }
    try {
      rawExtraFieldNTFS = new Uint8Array(36);
      const extraFieldNTFSView = getDataView2(rawExtraFieldNTFS);
      const lastModTimeNTFS = getTimeNTFS(lastModDate);
      setUint16(extraFieldNTFSView, 0, EXTRAFIELD_TYPE_NTFS);
      setUint16(extraFieldNTFSView, 2, 32);
      setUint16(extraFieldNTFSView, 8, EXTRAFIELD_TYPE_NTFS_TAG1);
      setUint16(extraFieldNTFSView, 10, 24);
      setBigUint64(extraFieldNTFSView, 12, lastModTimeNTFS);
      setBigUint64(extraFieldNTFSView, 20, getTimeNTFS(lastAccessDate) || lastModTimeNTFS);
      setBigUint64(extraFieldNTFSView, 28, getTimeNTFS(creationDate) || lastModTimeNTFS);
    } catch (_error) {
      rawExtraFieldNTFS = new Uint8Array();
    }
  } else {
    rawExtraFieldNTFS = rawExtraFieldExtendedTimestamp = new Uint8Array();
  }
  let bitFlag = BITFLAG_LANG_ENCODING_FLAG;
  if (dataDescriptor) {
    bitFlag = bitFlag | BITFLAG_DATA_DESCRIPTOR;
  }
  let compressionMethod = COMPRESSION_METHOD_STORE;
  if (compressed) {
    compressionMethod = COMPRESSION_METHOD_DEFLATE;
  }
  if (zip64) {
    version = version > VERSION_ZIP64 ? version : VERSION_ZIP64;
  }
  if (encrypted) {
    bitFlag = bitFlag | BITFLAG_ENCRYPTED;
    if (!zipCrypto) {
      version = version > VERSION_AES ? version : VERSION_AES;
      compressionMethod = COMPRESSION_METHOD_AES;
      if (compressed) {
        rawExtraFieldAES[9] = COMPRESSION_METHOD_DEFLATE;
      }
    }
  }
  const headerArray = new Uint8Array(26);
  const headerView = getDataView2(headerArray);
  setUint16(headerView, 0, version);
  setUint16(headerView, 2, bitFlag);
  setUint16(headerView, 4, compressionMethod);
  const dateArray = new Uint32Array(1);
  const dateView = getDataView2(dateArray);
  let lastModDateMsDos;
  if (lastModDate < MIN_DATE) {
    lastModDateMsDos = MIN_DATE;
  } else if (lastModDate > MAX_DATE) {
    lastModDateMsDos = MAX_DATE;
  } else {
    lastModDateMsDos = lastModDate;
  }
  setUint16(dateView, 0, (lastModDateMsDos.getHours() << 6 | lastModDateMsDos.getMinutes()) << 5 | lastModDateMsDos.getSeconds() / 2);
  setUint16(dateView, 2, (lastModDateMsDos.getFullYear() - 1980 << 4 | lastModDateMsDos.getMonth() + 1) << 5 | lastModDateMsDos.getDate());
  const rawLastModDate = dateArray[0];
  setUint322(headerView, 6, rawLastModDate);
  setUint16(headerView, 22, getLength(rawFilename));
  const extraFieldLength = getLength(rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS, rawExtraField);
  setUint16(headerView, 24, extraFieldLength);
  const localHeaderArray = new Uint8Array(30 + getLength(rawFilename) + extraFieldLength);
  const localHeaderView = getDataView2(localHeaderArray);
  setUint322(localHeaderView, 0, LOCAL_FILE_HEADER_SIGNATURE);
  arraySet(localHeaderArray, headerArray, 4);
  arraySet(localHeaderArray, rawFilename, 30);
  arraySet(localHeaderArray, rawExtraFieldAES, 30 + getLength(rawFilename));
  arraySet(localHeaderArray, rawExtraFieldExtendedTimestamp, 30 + getLength(rawFilename, rawExtraFieldAES));
  arraySet(localHeaderArray, rawExtraFieldNTFS, 30 + getLength(rawFilename, rawExtraFieldAES, rawExtraFieldExtendedTimestamp));
  arraySet(localHeaderArray, rawExtraField, 30 + getLength(rawFilename, rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS));
  return {
    localHeaderArray,
    headerArray,
    headerView,
    lastModDate,
    rawLastModDate,
    encrypted,
    compressed,
    version,
    compressionMethod,
    extraFieldExtendedTimestampFlag,
    rawExtraFieldExtendedTimestamp,
    rawExtraFieldNTFS,
    rawExtraFieldAES,
    extraFieldLength
  };
}
function appendExtraFieldUSDZ(entryInfo, zipWriterOffset) {
  const { headerInfo } = entryInfo;
  let { localHeaderArray, extraFieldLength } = headerInfo;
  let localHeaderArrayView = getDataView2(localHeaderArray);
  let extraBytesLength = 64 - (zipWriterOffset + getLength(localHeaderArray)) % 64;
  if (extraBytesLength < 4) {
    extraBytesLength += 64;
  }
  const rawExtraFieldUSDZ = new Uint8Array(extraBytesLength);
  const extraFieldUSDZView = getDataView2(rawExtraFieldUSDZ);
  setUint16(extraFieldUSDZView, 0, EXTRAFIELD_TYPE_USDZ);
  setUint16(extraFieldUSDZView, 2, extraBytesLength - 2);
  const previousLocalHeaderArray = localHeaderArray;
  headerInfo.localHeaderArray = localHeaderArray = new Uint8Array(getLength(previousLocalHeaderArray) + extraBytesLength);
  arraySet(localHeaderArray, previousLocalHeaderArray);
  arraySet(localHeaderArray, rawExtraFieldUSDZ, getLength(previousLocalHeaderArray));
  localHeaderArrayView = getDataView2(localHeaderArray);
  setUint16(localHeaderArrayView, 28, extraFieldLength + extraBytesLength);
  entryInfo.metadataSize += extraBytesLength;
}
function getDataDescriptorInfo(options) {
  const {
    zip64,
    dataDescriptor,
    dataDescriptorSignature
  } = options;
  let dataDescriptorArray = new Uint8Array();
  let dataDescriptorView, dataDescriptorOffset = 0;
  if (dataDescriptor) {
    dataDescriptorArray = new Uint8Array(zip64 ? dataDescriptorSignature ? 24 : 20 : dataDescriptorSignature ? 16 : 12);
    dataDescriptorView = getDataView2(dataDescriptorArray);
    if (dataDescriptorSignature) {
      dataDescriptorOffset = 4;
      setUint322(dataDescriptorView, 0, DATA_DESCRIPTOR_RECORD_SIGNATURE);
    }
  }
  return {
    dataDescriptorArray,
    dataDescriptorView,
    dataDescriptorOffset
  };
}
function setEntryInfo(entryInfo, options) {
  const {
    signature,
    rawExtraFieldZip64,
    compressedSize,
    uncompressedSize,
    headerInfo,
    dataDescriptorInfo
  } = entryInfo;
  const {
    headerView,
    encrypted
  } = headerInfo;
  const {
    dataDescriptorView,
    dataDescriptorOffset
  } = dataDescriptorInfo;
  const {
    zip64,
    zip64UncompressedSize,
    zip64CompressedSize,
    zipCrypto,
    dataDescriptor
  } = options;
  if ((!encrypted || zipCrypto) && signature !== UNDEFINED_VALUE) {
    setUint322(headerView, 10, signature);
    if (dataDescriptor) {
      setUint322(dataDescriptorView, dataDescriptorOffset, signature);
    }
  }
  if (zip64) {
    const rawExtraFieldZip64View = getDataView2(rawExtraFieldZip64);
    setUint16(rawExtraFieldZip64View, 0, EXTRAFIELD_TYPE_ZIP64);
    setUint16(rawExtraFieldZip64View, 2, getLength(rawExtraFieldZip64) - 4);
    let rawExtraFieldZip64Offset = 4;
    if (zip64UncompressedSize) {
      setUint322(headerView, 18, MAX_32_BITS);
      setBigUint64(rawExtraFieldZip64View, rawExtraFieldZip64Offset, BigInt(uncompressedSize));
      rawExtraFieldZip64Offset += 8;
    }
    if (zip64CompressedSize) {
      setUint322(headerView, 14, MAX_32_BITS);
      setBigUint64(rawExtraFieldZip64View, rawExtraFieldZip64Offset, BigInt(compressedSize));
    }
    if (dataDescriptor) {
      setBigUint64(dataDescriptorView, dataDescriptorOffset + 4, BigInt(compressedSize));
      setBigUint64(dataDescriptorView, dataDescriptorOffset + 12, BigInt(uncompressedSize));
    }
  } else {
    setUint322(headerView, 14, compressedSize);
    setUint322(headerView, 18, uncompressedSize);
    if (dataDescriptor) {
      setUint322(dataDescriptorView, dataDescriptorOffset + 4, compressedSize);
      setUint322(dataDescriptorView, dataDescriptorOffset + 8, uncompressedSize);
    }
  }
}
async function writeExtraHeaderInfo(fileEntry, entryData, writable, { zipCrypto }) {
  let arrayBuffer;
  arrayBuffer = await entryData.slice(0, 26).arrayBuffer();
  if (arrayBuffer.byteLength != 26) {
    arrayBuffer = arrayBuffer.slice(0, 26);
  }
  const arrayBufferView = new DataView(arrayBuffer);
  if (!fileEntry.encrypted || zipCrypto) {
    setUint322(arrayBufferView, 14, fileEntry.signature);
  }
  if (fileEntry.zip64) {
    setUint322(arrayBufferView, 18, MAX_32_BITS);
    setUint322(arrayBufferView, 22, MAX_32_BITS);
  } else {
    setUint322(arrayBufferView, 18, fileEntry.compressedSize);
    setUint322(arrayBufferView, 22, fileEntry.uncompressedSize);
  }
  await writeData(writable, new Uint8Array(arrayBuffer));
  return entryData.slice(arrayBuffer.byteLength);
}
function setZip64ExtraInfo(fileEntry, options) {
  const { rawExtraFieldZip64, offset, diskNumberStart } = fileEntry;
  const { zip64UncompressedSize, zip64CompressedSize, zip64Offset, zip64DiskNumberStart } = options;
  const rawExtraFieldZip64View = getDataView2(rawExtraFieldZip64);
  let rawExtraFieldZip64Offset = 4;
  if (zip64UncompressedSize) {
    rawExtraFieldZip64Offset += 8;
  }
  if (zip64CompressedSize) {
    rawExtraFieldZip64Offset += 8;
  }
  if (zip64Offset) {
    setBigUint64(rawExtraFieldZip64View, rawExtraFieldZip64Offset, BigInt(offset));
    rawExtraFieldZip64Offset += 8;
  }
  if (zip64DiskNumberStart) {
    setUint322(rawExtraFieldZip64View, rawExtraFieldZip64Offset, diskNumberStart);
  }
}
async function closeFile(zipWriter, comment, options) {
  const { files, writer } = zipWriter;
  const { diskOffset, writable } = writer;
  let { diskNumber } = writer;
  let offset = 0;
  let directoryDataLength = 0;
  let directoryOffset = zipWriter.offset - diskOffset;
  let filesLength = files.size;
  for (const [, fileEntry] of files) {
    const {
      rawFilename,
      rawExtraFieldZip64,
      rawExtraFieldAES,
      rawComment,
      rawExtraFieldNTFS,
      rawExtraField,
      extendedTimestamp,
      extraFieldExtendedTimestampFlag,
      lastModDate
    } = fileEntry;
    let rawExtraFieldTimestamp;
    if (extendedTimestamp) {
      rawExtraFieldTimestamp = new Uint8Array(9);
      const extraFieldExtendedTimestampView = getDataView2(rawExtraFieldTimestamp);
      setUint16(extraFieldExtendedTimestampView, 0, EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP);
      setUint16(extraFieldExtendedTimestampView, 2, 5);
      setUint8(extraFieldExtendedTimestampView, 4, extraFieldExtendedTimestampFlag);
      setUint322(extraFieldExtendedTimestampView, 5, Math.floor(lastModDate.getTime() / 1e3));
    } else {
      rawExtraFieldTimestamp = new Uint8Array();
    }
    fileEntry.rawExtraFieldCDExtendedTimestamp = rawExtraFieldTimestamp;
    directoryDataLength += 46 + getLength(
      rawFilename,
      rawComment,
      rawExtraFieldZip64,
      rawExtraFieldAES,
      rawExtraFieldNTFS,
      rawExtraFieldTimestamp,
      rawExtraField
    );
  }
  const directoryArray = new Uint8Array(directoryDataLength);
  const directoryView = getDataView2(directoryArray);
  await initStream(writer);
  let directoryDiskOffset = 0;
  for (const [indexFileEntry, fileEntry] of Array.from(files.values()).entries()) {
    const {
      offset: fileEntryOffset,
      rawFilename,
      rawExtraFieldZip64,
      rawExtraFieldAES,
      rawExtraFieldCDExtendedTimestamp,
      rawExtraFieldNTFS,
      rawExtraField,
      rawComment,
      versionMadeBy,
      headerArray,
      directory,
      zip64: zip642,
      zip64UncompressedSize,
      zip64CompressedSize,
      zip64DiskNumberStart,
      zip64Offset,
      msDosCompatible,
      internalFileAttribute,
      externalFileAttribute,
      diskNumberStart,
      uncompressedSize,
      compressedSize
    } = fileEntry;
    const extraFieldLength = getLength(rawExtraFieldZip64, rawExtraFieldAES, rawExtraFieldCDExtendedTimestamp, rawExtraFieldNTFS, rawExtraField);
    setUint322(directoryView, offset, CENTRAL_FILE_HEADER_SIGNATURE);
    setUint16(directoryView, offset + 4, versionMadeBy);
    const headerView = getDataView2(headerArray);
    if (!zip64UncompressedSize) {
      setUint322(headerView, 18, uncompressedSize);
    }
    if (!zip64CompressedSize) {
      setUint322(headerView, 14, compressedSize);
    }
    arraySet(directoryArray, headerArray, offset + 6);
    setUint16(directoryView, offset + 30, extraFieldLength);
    setUint16(directoryView, offset + 32, getLength(rawComment));
    setUint16(directoryView, offset + 34, zip642 && zip64DiskNumberStart ? MAX_16_BITS : diskNumberStart);
    setUint16(directoryView, offset + 36, internalFileAttribute);
    if (externalFileAttribute) {
      setUint322(directoryView, offset + 38, externalFileAttribute);
    } else if (directory && msDosCompatible) {
      setUint8(directoryView, offset + 38, FILE_ATTR_MSDOS_DIR_MASK);
    }
    setUint322(directoryView, offset + 42, zip642 && zip64Offset ? MAX_32_BITS : fileEntryOffset);
    arraySet(directoryArray, rawFilename, offset + 46);
    arraySet(directoryArray, rawExtraFieldZip64, offset + 46 + getLength(rawFilename));
    arraySet(directoryArray, rawExtraFieldAES, offset + 46 + getLength(rawFilename, rawExtraFieldZip64));
    arraySet(directoryArray, rawExtraFieldCDExtendedTimestamp, offset + 46 + getLength(rawFilename, rawExtraFieldZip64, rawExtraFieldAES));
    arraySet(directoryArray, rawExtraFieldNTFS, offset + 46 + getLength(rawFilename, rawExtraFieldZip64, rawExtraFieldAES, rawExtraFieldCDExtendedTimestamp));
    arraySet(directoryArray, rawExtraField, offset + 46 + getLength(rawFilename, rawExtraFieldZip64, rawExtraFieldAES, rawExtraFieldCDExtendedTimestamp, rawExtraFieldNTFS));
    arraySet(directoryArray, rawComment, offset + 46 + getLength(rawFilename) + extraFieldLength);
    const directoryEntryLength = 46 + getLength(rawFilename, rawComment) + extraFieldLength;
    if (offset - directoryDiskOffset > writer.availableSize) {
      writer.availableSize = 0;
      await writeData(writable, directoryArray.slice(directoryDiskOffset, offset));
      directoryDiskOffset = offset;
    }
    offset += directoryEntryLength;
    if (options.onprogress) {
      try {
        await options.onprogress(indexFileEntry + 1, files.size, new Entry(fileEntry));
      } catch (_error) {
      }
    }
  }
  await writeData(writable, directoryDiskOffset ? directoryArray.slice(directoryDiskOffset) : directoryArray);
  let lastDiskNumber = writer.diskNumber;
  const { availableSize } = writer;
  if (availableSize < END_OF_CENTRAL_DIR_LENGTH) {
    lastDiskNumber++;
  }
  let zip64 = getOptionValue2(zipWriter, options, "zip64");
  if (directoryOffset >= MAX_32_BITS || directoryDataLength >= MAX_32_BITS || filesLength >= MAX_16_BITS || lastDiskNumber >= MAX_16_BITS) {
    if (zip64 === false) {
      throw new Error(ERR_UNSUPPORTED_FORMAT);
    } else {
      zip64 = true;
    }
  }
  const endOfdirectoryArray = new Uint8Array(zip64 ? ZIP64_END_OF_CENTRAL_DIR_TOTAL_LENGTH : END_OF_CENTRAL_DIR_LENGTH);
  const endOfdirectoryView = getDataView2(endOfdirectoryArray);
  offset = 0;
  if (zip64) {
    setUint322(endOfdirectoryView, 0, ZIP64_END_OF_CENTRAL_DIR_SIGNATURE);
    setBigUint64(endOfdirectoryView, 4, BigInt(44));
    setUint16(endOfdirectoryView, 12, 45);
    setUint16(endOfdirectoryView, 14, 45);
    setUint322(endOfdirectoryView, 16, lastDiskNumber);
    setUint322(endOfdirectoryView, 20, diskNumber);
    setBigUint64(endOfdirectoryView, 24, BigInt(filesLength));
    setBigUint64(endOfdirectoryView, 32, BigInt(filesLength));
    setBigUint64(endOfdirectoryView, 40, BigInt(directoryDataLength));
    setBigUint64(endOfdirectoryView, 48, BigInt(directoryOffset));
    setUint322(endOfdirectoryView, 56, ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE);
    setBigUint64(endOfdirectoryView, 64, BigInt(directoryOffset) + BigInt(directoryDataLength));
    setUint322(endOfdirectoryView, 72, lastDiskNumber + 1);
    const supportZip64SplitFile = getOptionValue2(zipWriter, options, "supportZip64SplitFile", true);
    if (supportZip64SplitFile) {
      lastDiskNumber = MAX_16_BITS;
      diskNumber = MAX_16_BITS;
    }
    filesLength = MAX_16_BITS;
    directoryOffset = MAX_32_BITS;
    directoryDataLength = MAX_32_BITS;
    offset += ZIP64_END_OF_CENTRAL_DIR_LENGTH + ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH;
  }
  setUint322(endOfdirectoryView, offset, END_OF_CENTRAL_DIR_SIGNATURE);
  setUint16(endOfdirectoryView, offset + 4, lastDiskNumber);
  setUint16(endOfdirectoryView, offset + 6, diskNumber);
  setUint16(endOfdirectoryView, offset + 8, filesLength);
  setUint16(endOfdirectoryView, offset + 10, filesLength);
  setUint322(endOfdirectoryView, offset + 12, directoryDataLength);
  setUint322(endOfdirectoryView, offset + 16, directoryOffset);
  const commentLength = getLength(comment);
  if (commentLength) {
    if (commentLength <= MAX_16_BITS) {
      setUint16(endOfdirectoryView, offset + 20, commentLength);
    } else {
      throw new Error(ERR_INVALID_COMMENT);
    }
  }
  await writeData(writable, endOfdirectoryArray);
  if (commentLength) {
    await writeData(writable, comment);
  }
}
async function writeData(writable, array) {
  const streamWriter = writable.getWriter();
  try {
    await streamWriter.ready;
    writable.size += getLength(array);
    await streamWriter.write(array);
  } finally {
    streamWriter.releaseLock();
  }
}
function getTimeNTFS(date) {
  if (date) {
    return (BigInt(date.getTime()) + BigInt(116444736e5)) * BigInt(1e4);
  }
}
function getOptionValue2(zipWriter, options, name, defaultValue) {
  const result = options[name] === UNDEFINED_VALUE ? zipWriter.options[name] : options[name];
  return result === UNDEFINED_VALUE ? defaultValue : result;
}
function getMaximumCompressedSize2(uncompressedSize) {
  return uncompressedSize + 5 * (Math.floor(uncompressedSize / 16383) + 1);
}
function setUint8(view, offset, value) {
  view.setUint8(offset, value);
}
function setUint16(view, offset, value) {
  view.setUint16(offset, value, true);
}
function setUint322(view, offset, value) {
  view.setUint32(offset, value, true);
}
function setBigUint64(view, offset, value) {
  view.setBigUint64(offset, value, true);
}
function arraySet(array, typedArray, offset) {
  array.set(typedArray, offset);
}
function getDataView2(array) {
  return new DataView(array.buffer);
}
function getLength(...arrayLikes) {
  let result = 0;
  arrayLikes.forEach((arrayLike) => arrayLike && (result += arrayLike.length));
  return result;
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/core/zip-fs-core.js
var ZipEntry2 = class {
  constructor(fs2, name, params, parent) {
    const zipEntry = this;
    if (fs2.root && parent && parent.getChildByName(name)) {
      throw new Error("Entry filename already exists");
    }
    if (!params) {
      params = {};
    }
    Object.assign(zipEntry, {
      fs: fs2,
      name,
      data: params.data,
      options: params.options,
      id: fs2.entries.length,
      parent,
      children: [],
      uncompressedSize: params.uncompressedSize || 0
    });
    fs2.entries.push(zipEntry);
    if (parent) {
      zipEntry.parent.children.push(zipEntry);
    }
  }
  moveTo(target) {
    const zipEntry = this;
    zipEntry.fs.move(zipEntry, target);
  }
  getFullname() {
    return this.getRelativeName();
  }
  getRelativeName(ancestor = this.fs.root) {
    const zipEntry = this;
    let relativeName = zipEntry.name;
    let entry = zipEntry.parent;
    while (entry && entry != ancestor) {
      relativeName = (entry.name ? entry.name + "/" : "") + relativeName;
      entry = entry.parent;
    }
    return relativeName;
  }
  isDescendantOf(ancestor) {
    let entry = this.parent;
    while (entry && entry.id != ancestor.id) {
      entry = entry.parent;
    }
    return Boolean(entry);
  }
  rename(name) {
    const parent = this.parent;
    if (parent && parent.getChildByName(name)) {
      throw new Error("Entry filename already exists");
    } else {
      this.name = name;
    }
  }
};
var ZipFileEntry = class _ZipFileEntry extends ZipEntry2 {
  constructor(fs2, name, params, parent) {
    super(fs2, name, params, parent);
    const zipEntry = this;
    zipEntry.Reader = params.Reader;
    zipEntry.Writer = params.Writer;
    if (params.getData) {
      zipEntry.getData = params.getData;
    }
  }
  clone() {
    return new _ZipFileEntry(this.fs, this.name, this);
  }
  async getData(writer, options = {}) {
    const zipEntry = this;
    if (!writer || writer.constructor == zipEntry.Writer && zipEntry.data) {
      return zipEntry.data;
    } else {
      const reader = zipEntry.reader = new zipEntry.Reader(zipEntry.data, options);
      const uncompressedSize = zipEntry.data ? zipEntry.data.uncompressedSize : reader.size;
      await Promise.all([initStream(reader), initStream(writer, uncompressedSize)]);
      const readable = reader.readable;
      readable.size = zipEntry.uncompressedSize = reader.size;
      await readable.pipeTo(writer.writable);
      return writer.getData ? writer.getData() : writer.writable;
    }
  }
  isPasswordProtected() {
    return this.data.encrypted;
  }
  async checkPassword(password, options = {}) {
    const zipEntry = this;
    if (zipEntry.isPasswordProtected()) {
      options.password = password;
      options.checkPasswordOnly = true;
      try {
        await zipEntry.data.getData(null, options);
        return true;
      } catch (error) {
        if (error.message == ERR_INVALID_PASSWORD) {
          return false;
        } else {
          throw error;
        }
      }
    } else {
      return true;
    }
  }
  getText(encoding, options) {
    return this.getData(new TextWriter(encoding), options);
  }
  getBlob(mimeType, options) {
    return this.getData(new BlobWriter(mimeType), options);
  }
  getData64URI(mimeType, options) {
    return this.getData(new Data64URIWriter(mimeType), options);
  }
  getUint8Array(options) {
    return this.getData(new Uint8ArrayWriter(), options);
  }
  getWritable(writable = new WritableStream(), options) {
    return this.getData({ writable }, options);
  }
  replaceBlob(blob) {
    Object.assign(this, {
      data: blob,
      Reader: BlobReader,
      Writer: BlobWriter,
      reader: null
    });
  }
  replaceText(text) {
    Object.assign(this, {
      data: text,
      Reader: TextReader,
      Writer: TextWriter,
      reader: null
    });
  }
  replaceData64URI(dataURI) {
    Object.assign(this, {
      data: dataURI,
      Reader: Data64URIReader,
      Writer: Data64URIWriter,
      reader: null
    });
  }
  replaceUint8Array(array) {
    Object.assign(this, {
      data: array,
      Reader: Uint8ArrayReader,
      Writer: Uint8ArrayWriter,
      reader: null
    });
  }
  replaceReadable(readable) {
    Object.assign(this, {
      data: null,
      Reader: function() {
        return { readable };
      },
      Writer: null,
      reader: null
    });
  }
};
var ZipDirectoryEntry = class _ZipDirectoryEntry extends ZipEntry2 {
  constructor(fs2, name, params, parent) {
    super(fs2, name, params, parent);
    this.directory = true;
  }
  clone(deepClone) {
    const zipEntry = this;
    const clonedEntry = new _ZipDirectoryEntry(zipEntry.fs, zipEntry.name);
    if (deepClone) {
      clonedEntry.children = zipEntry.children.map((child) => {
        const childClone = child.clone(deepClone);
        childClone.parent = clonedEntry;
        return childClone;
      });
    }
    return clonedEntry;
  }
  addDirectory(name, options) {
    return addChild(this, name, { options }, true);
  }
  addText(name, text, options = {}) {
    return addChild(this, name, {
      data: text,
      Reader: TextReader,
      Writer: TextWriter,
      options,
      uncompressedSize: text.length
    });
  }
  addBlob(name, blob, options = {}) {
    return addChild(this, name, {
      data: blob,
      Reader: BlobReader,
      Writer: BlobWriter,
      options,
      uncompressedSize: blob.size
    });
  }
  addData64URI(name, dataURI, options = {}) {
    let dataEnd = dataURI.length;
    while (dataURI.charAt(dataEnd - 1) == "=") {
      dataEnd--;
    }
    const dataStart = dataURI.indexOf(",") + 1;
    return addChild(this, name, {
      data: dataURI,
      Reader: Data64URIReader,
      Writer: Data64URIWriter,
      options,
      uncompressedSize: Math.floor((dataEnd - dataStart) * 0.75)
    });
  }
  addUint8Array(name, array, options = {}) {
    return addChild(this, name, {
      data: array,
      Reader: Uint8ArrayReader,
      Writer: Uint8ArrayWriter,
      options,
      uncompressedSize: array.length
    });
  }
  addHttpContent(name, url, options = {}) {
    return addChild(this, name, {
      data: url,
      Reader: class extends HttpReader {
        constructor(url2) {
          super(url2, options);
        }
      },
      options
    });
  }
  addReadable(name, readable, options = {}) {
    return addChild(this, name, {
      Reader: function() {
        return { readable };
      },
      options
    });
  }
  addFileSystemEntry(fileSystemEntry, options = {}) {
    return addFileSystemHandle(this, fileSystemEntry, options);
  }
  addFileSystemHandle(handle, options = {}) {
    return addFileSystemHandle(this, handle, options);
  }
  addFile(file, options = {}) {
    if (!options.lastModDate) {
      options.lastModDate = new Date(file.lastModified);
    }
    return addChild(this, file.name, {
      data: file,
      Reader: function() {
        const readable = file.stream();
        const size = file.size;
        return { readable, size };
      },
      options,
      uncompressedSize: file.size
    });
  }
  addData(name, params) {
    return addChild(this, name, params);
  }
  importBlob(blob, options) {
    return this.importZip(new BlobReader(blob), options);
  }
  importData64URI(dataURI, options) {
    return this.importZip(new Data64URIReader(dataURI), options);
  }
  importUint8Array(array, options) {
    return this.importZip(new Uint8ArrayReader(array), options);
  }
  importHttpContent(url, options) {
    return this.importZip(new HttpReader(url, options), options);
  }
  importReadable(readable, options) {
    return this.importZip({ readable }, options);
  }
  exportBlob(options = {}) {
    return this.exportZip(new BlobWriter(options.mimeType || "application/zip"), options);
  }
  exportData64URI(options = {}) {
    return this.exportZip(new Data64URIWriter(options.mimeType || "application/zip"), options);
  }
  exportUint8Array(options = {}) {
    return this.exportZip(new Uint8ArrayWriter(), options);
  }
  async exportWritable(writable = new WritableStream(), options = {}) {
    await this.exportZip({ writable }, options);
    return writable;
  }
  async importZip(reader, options = {}) {
    await initStream(reader);
    const zipReader = new ZipReader(reader, options);
    const importedEntries = [];
    const entries = await zipReader.getEntries();
    for (const entry of entries) {
      let parent = this;
      try {
        const path = entry.filename.split("/");
        const name = path.pop();
        path.forEach((pathPart, pathIndex) => {
          const previousParent = parent;
          parent = parent.getChildByName(pathPart);
          if (!parent) {
            parent = new _ZipDirectoryEntry(this.fs, pathPart, { data: pathIndex == path.length - 1 ? entry : null }, previousParent);
            importedEntries.push(parent);
          }
        });
        if (!entry.directory) {
          importedEntries.push(addChild(parent, name, {
            data: entry,
            Reader: getZipBlobReader(Object.assign({}, options)),
            uncompressedSize: entry.uncompressedSize
          }));
        }
      } catch (error) {
        try {
          error.cause = {
            entry
          };
        } catch (_error) {
        }
        throw error;
      }
    }
    return importedEntries;
  }
  async exportZip(writer, options) {
    const zipEntry = this;
    if (options.bufferedWrite === UNDEFINED_VALUE) {
      options.bufferedWrite = true;
    }
    await Promise.all([initReaders(zipEntry, options.readerOptions), initStream(writer)]);
    const zipWriter = new ZipWriter(writer, options);
    await exportZip(zipWriter, zipEntry, getTotalSize([zipEntry], "uncompressedSize"), options);
    await zipWriter.close();
    return writer.getData ? writer.getData() : writer.writable;
  }
  getChildByName(name) {
    const children = this.children;
    for (let childIndex = 0; childIndex < children.length; childIndex++) {
      const child = children[childIndex];
      if (child.name == name) {
        return child;
      }
    }
  }
  isPasswordProtected() {
    const children = this.children;
    for (let childIndex = 0; childIndex < children.length; childIndex++) {
      const child = children[childIndex];
      if (child.isPasswordProtected()) {
        return true;
      }
    }
    return false;
  }
  async checkPassword(password, options = {}) {
    const children = this.children;
    const result = await Promise.all(children.map((child) => child.checkPassword(password, options)));
    return !result.includes(false);
  }
};
var FS = class {
  constructor() {
    resetFS(this);
  }
  get children() {
    return this.root.children;
  }
  remove(entry) {
    detach(entry);
    this.entries[entry.id] = null;
  }
  move(entry, destination) {
    if (entry == this.root) {
      throw new Error("Root directory cannot be moved");
    } else {
      if (destination.directory) {
        if (!destination.isDescendantOf(entry)) {
          if (entry != destination) {
            if (destination.getChildByName(entry.name)) {
              throw new Error("Entry filename already exists");
            }
            detach(entry);
            entry.parent = destination;
            destination.children.push(entry);
          }
        } else {
          throw new Error("Entry is a ancestor of target entry");
        }
      } else {
        throw new Error("Target entry is not a directory");
      }
    }
  }
  find(fullname) {
    const path = fullname.split("/");
    let node = this.root;
    for (let index = 0; node && index < path.length; index++) {
      node = node.getChildByName(path[index]);
    }
    return node;
  }
  getById(id) {
    return this.entries[id];
  }
  getChildByName(name) {
    return this.root.getChildByName(name);
  }
  addDirectory(name, options) {
    return this.root.addDirectory(name, options);
  }
  addText(name, text, options) {
    return this.root.addText(name, text, options);
  }
  addBlob(name, blob, options) {
    return this.root.addBlob(name, blob, options);
  }
  addData64URI(name, dataURI, options) {
    return this.root.addData64URI(name, dataURI, options);
  }
  addUint8Array(name, array, options) {
    return this.root.addUint8Array(name, array, options);
  }
  addHttpContent(name, url, options) {
    return this.root.addHttpContent(name, url, options);
  }
  addReadable(name, readable, options) {
    return this.root.addReadable(name, readable, options);
  }
  addFileSystemEntry(fileSystemEntry, options) {
    return this.root.addFileSystemEntry(fileSystemEntry, options);
  }
  addFileSystemHandle(handle, options) {
    return this.root.addFileSystemHandle(handle, options);
  }
  addFile(file, options) {
    return this.root.addFile(file, options);
  }
  addData(name, params) {
    return this.root.addData(name, params);
  }
  importBlob(blob, options) {
    resetFS(this);
    return this.root.importBlob(blob, options);
  }
  importData64URI(dataURI, options) {
    resetFS(this);
    return this.root.importData64URI(dataURI, options);
  }
  importUint8Array(array, options) {
    resetFS(this);
    return this.root.importUint8Array(array, options);
  }
  importHttpContent(url, options) {
    resetFS(this);
    return this.root.importHttpContent(url, options);
  }
  importReadable(readable, options) {
    resetFS(this);
    return this.root.importReadable(readable, options);
  }
  importZip(reader, options) {
    return this.root.importZip(reader, options);
  }
  exportBlob(options) {
    return this.root.exportBlob(options);
  }
  exportData64URI(options) {
    return this.root.exportData64URI(options);
  }
  exportUint8Array(options) {
    return this.root.exportUint8Array(options);
  }
  exportWritable(writable, options) {
    return this.root.exportWritable(writable, options);
  }
  isPasswordProtected() {
    return this.root.isPasswordProtected();
  }
  async checkPassword(password, options) {
    return this.root.checkPassword(password, options);
  }
};
var fs = { FS, ZipDirectoryEntry, ZipFileEntry };
function getTotalSize(entries, propertyName) {
  let size = 0;
  entries.forEach(process2);
  return size;
  function process2(entry) {
    size += entry[propertyName];
    if (entry.children) {
      entry.children.forEach(process2);
    }
  }
}
function getZipBlobReader(options) {
  return class extends Reader {
    constructor(entry, options2 = {}) {
      super();
      this.entry = entry;
      this.options = options2;
    }
    async init() {
      const zipBlobReader = this;
      zipBlobReader.size = zipBlobReader.entry.uncompressedSize;
      const data = await zipBlobReader.entry.getData(new BlobWriter(), Object.assign({}, zipBlobReader.options, options));
      zipBlobReader.data = data;
      zipBlobReader.blobReader = new BlobReader(data);
      super.init();
    }
    readUint8Array(index, length) {
      return this.blobReader.readUint8Array(index, length);
    }
  };
}
async function initReaders(entry, options) {
  if (entry.children.length) {
    await Promise.all(entry.children.map(async (child) => {
      if (child.directory) {
        await initReaders(child, options);
      } else {
        const reader = child.reader = new child.Reader(child.data, options);
        try {
          await initStream(reader);
        } catch (error) {
          try {
            error.entryId = child.id;
            error.cause = {
              entry: child
            };
          } catch (_error) {
          }
          throw error;
        }
        child.uncompressedSize = reader.size;
      }
    }));
  }
}
function detach(entry) {
  if (entry.parent) {
    const children = entry.parent.children;
    children.forEach((child, index) => {
      if (child.id == entry.id) {
        children.splice(index, 1);
      }
    });
  }
}
async function exportZip(zipWriter, entry, totalSize, options) {
  const selectedEntry = entry;
  const entryOffsets = /* @__PURE__ */ new Map();
  await process2(zipWriter, entry);
  async function process2(zipWriter2, entry2) {
    await exportChild();
    async function exportChild() {
      if (options.bufferedWrite) {
        await Promise.allSettled(entry2.children.map(processChild));
      } else {
        for (const child of entry2.children) {
          await processChild(child);
        }
      }
    }
    async function processChild(child) {
      const name = options.relativePath ? child.getRelativeName(selectedEntry) : child.getFullname();
      let childOptions = child.options || {};
      let zipEntryOptions = {};
      if (child.data instanceof Entry) {
        const {
          externalFileAttribute,
          versionMadeBy,
          comment,
          lastModDate,
          creationDate,
          lastAccessDate
        } = child.data;
        zipEntryOptions = {
          externalFileAttribute,
          versionMadeBy,
          comment,
          lastModDate,
          creationDate,
          lastAccessDate
        };
      }
      await zipWriter2.add(name, child.reader, Object.assign({
        directory: child.directory
      }, Object.assign({}, options, zipEntryOptions, childOptions, {
        onprogress: async (indexProgress) => {
          if (options.onprogress) {
            entryOffsets.set(name, indexProgress);
            try {
              await options.onprogress(Array.from(entryOffsets.values()).reduce((previousValue, currentValue) => previousValue + currentValue), totalSize);
            } catch (_error) {
            }
          }
        }
      })));
      await process2(zipWriter2, child);
    }
  }
}
async function addFileSystemHandle(zipEntry, handle, options) {
  return addFile2(zipEntry, handle, []);
  async function addFile2(parentEntry, handle2, addedEntries) {
    if (handle2) {
      try {
        if (handle2.isFile || handle2.isDirectory) {
          handle2 = await transformToFileSystemhandle(handle2);
        }
        if (handle2.kind == "file") {
          const file = await handle2.getFile();
          addedEntries.push(
            parentEntry.addData(file.name, {
              Reader: function() {
                const readable = file.stream();
                const size = file.size;
                return { readable, size };
              },
              options: Object.assign({}, { lastModDate: new Date(file.lastModified) }, options),
              uncompressedSize: file.size
            })
          );
        } else if (handle2.kind == "directory") {
          const directoryEntry = parentEntry.addDirectory(handle2.name);
          addedEntries.push(directoryEntry);
          for await (const childHandle of handle2.values()) {
            await addFile2(directoryEntry, childHandle, addedEntries);
          }
        }
      } catch (error) {
        const message = error.message + (handle2 ? " (" + handle2.name + ")" : "");
        throw new Error(message);
      }
    }
    return addedEntries;
  }
}
async function transformToFileSystemhandle(entry) {
  const handle = {
    name: entry.name
  };
  if (entry.isFile) {
    handle.kind = "file";
    handle.getFile = () => new Promise((resolve, reject) => entry.file(resolve, reject));
  }
  if (entry.isDirectory) {
    handle.kind = "directory";
    const handles = await transformToFileSystemhandles(entry);
    handle.values = () => handles;
  }
  return handle;
}
async function transformToFileSystemhandles(entry) {
  const entries = [];
  function readEntries(directoryReader, resolve, reject) {
    directoryReader.readEntries(async (entriesPart) => {
      if (!entriesPart.length) {
        resolve(entries);
      } else {
        for (const entry2 of entriesPart) {
          entries.push(await transformToFileSystemhandle(entry2));
        }
        readEntries(directoryReader, resolve, reject);
      }
    }, reject);
  }
  await new Promise(
    (resolve, reject) => readEntries(entry.createReader(), resolve, reject)
  );
  return {
    [Symbol.iterator]() {
      let entryIndex = 0;
      return {
        next() {
          const result = {
            value: entries[entryIndex],
            done: entryIndex === entries.length
          };
          entryIndex++;
          return result;
        }
      };
    }
  };
}
function resetFS(fs2) {
  fs2.entries = [];
  fs2.root = new ZipDirectoryEntry(fs2);
}
function addChild(parent, name, params, directory) {
  if (parent.directory) {
    return directory ? new ZipDirectoryEntry(parent.fs, name, params, parent) : new ZipFileEntry(parent.fs, name, params, parent);
  } else {
    throw new Error("Parent entry is not a directory");
  }
}

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/lib/zip-fs.js
var import_meta = {};
var baseURL;
try {
  baseURL = import_meta.url;
} catch (_error) {
}
configure({ baseURL });
e(configure);

// node_modules/.pnpm/@zip.js+zip.js@2.7.34/node_modules/@zip.js/zip.js/index.js
configure({ Deflate: ZipDeflate, Inflate: ZipInflate });

// download.mjs
var import_opentype_min = __toESM(require_opentype_min(), 1);
var import_fs = require("fs");
var import_promises = require("fs/promises");
var fontBaseURL = process.argv[2];
var versionOfCommitMono = process.argv[3];
var globalFontName = "CommitMono";
var downloadSettingsCustom = {
  weight: 400,
  italic: false,
  alternates: {
    cv01: false,
    cv02: true,
    cv03: false,
    cv04: false,
    cv05: false,
    cv06: false,
    cv07: false,
    cv08: false,
    cv09: false,
    cv10: false,
    cv11: false
  },
  features: {
    ss01: false,
    ss02: false,
    ss03: true,
    ss04: true,
    ss05: true
  },
  letterSpacing: 0,
  lineHeight: 1
};
async function downloadFont() {
  let allSettings = {};
  allSettings.regular = { ...downloadSettingsCustom, style: "Regular" };
  allSettings.italic = {
    ...downloadSettingsCustom,
    style: "Italic",
    italic: true
  };
  allSettings.bold = {
    ...downloadSettingsCustom,
    style: "Bold",
    weight: 700
  };
  allSettings.bolditalic = {
    ...downloadSettingsCustom,
    style: "Bold Italic",
    italic: true,
    weight: 700
  };
  allSettings.light = {
    ...downloadSettingsCustom,
    style: "Light",
    weight: 300
  };
  allSettings.lightitalic = {
    ...downloadSettingsCustom,
    style: "Light Italic",
    italic: true,
    weight: 300
  };
  allSettings.medium = {
    ...downloadSettingsCustom,
    style: "Medium",
    weight: 450
  };
  allSettings.mediumitalic = {
    ...downloadSettingsCustom,
    style: "Medium Italic",
    italic: true,
    weight: 450
  };
  return Promise.all(
    Object.values(allSettings).map((settings) => makeCustomFont(settings))
  ).then((resolve) => getZipFileBlob(resolve)).then((resolve) => initializeDownload(resolve)).catch((error) => catchError(error));
}
async function initializeDownload(blob) {
  await saveFile(blob, `${globalFontName}${versionOfCommitMono}.zip`);
}
function catchError(error) {
  console.log(error);
  process.exit(-1);
}
async function makeCustomFont(settings) {
  const fontName = "CommitMono" + versionOfCommitMono;
  const fontWeight = settings.weight;
  const fontItalic = settings.italic ? "Italic" : "Regular";
  const fontFilePath = `${fontBaseURL}/${fontName}-${fontWeight}${fontItalic}.otf`;
  return (0, import_promises.readFile)(fontFilePath).then((file) => file.buffer).then((font) => import_opentype_min.default.parse(font)).then((font) => {
    Object.entries(settings.alternates).reverse().forEach(([alternate, active]) => {
      if (!active)
        return;
      font.tables.gsub.features.forEach((feature) => {
        if (feature.tag == alternate) {
          feature.feature.lookupListIndexes.forEach((lookupIndex) => {
            font.tables.gsub.lookups[lookupIndex].subtables.forEach(
              (subtable) => {
                let glyphs = [];
                if (subtable.coverage.format == 1) {
                  glyphs = subtable.coverage.glyphs;
                }
                if (subtable.coverage.format == 2) {
                  glyphs = subtable.coverage.ranges.map(
                    (range) => Array.from(Array(range.end - range.start + 1)).map(
                      (_, index) => range.start + index
                    )
                  ).flat();
                }
                glyphs.forEach((glyphIndexOriginal, index) => {
                  const glyphIndexSubstitute = subtable.substitute[index];
                  const glyphPathOriginal = font.glyphs.glyphs[glyphIndexOriginal].path;
                  const glyphPathSubstitute = font.glyphs.glyphs[glyphIndexSubstitute].path;
                  font.glyphs.glyphs[glyphIndexOriginal].path = glyphPathSubstitute;
                  font.glyphs.glyphs[glyphIndexSubstitute].path = glyphPathOriginal;
                });
              }
            );
          });
        }
      });
    });
    const defaultWidth = 600;
    const newWidth = defaultWidth + downloadSettingsCustom.letterSpacing * 10;
    const newWidthDecrease = downloadSettingsCustom.letterSpacing * 10;
    const newWidthMoveAmount = downloadSettingsCustom.letterSpacing * 5;
    Object.values(font.glyphs.glyphs).forEach((glyph) => {
      glyph.path.commands.forEach((command) => {
        if (command.type === "M" || command.type === "L") {
          command.x += newWidthMoveAmount;
        }
        if (command.type === "C") {
          command.x += newWidthMoveAmount;
          command.x1 += newWidthMoveAmount;
          command.x2 += newWidthMoveAmount;
        }
      });
      glyph.leftSideBearing += newWidthMoveAmount;
      glyph.advanceWidth = newWidth;
    });
    font.defaultWidthX = newWidth;
    font.tables.cff.topDict._defaultWidthX = newWidth;
    font.tables.cff.topDict._privateDict.defaultWidthX = newWidth;
    font.tables.head.yMax += newWidthMoveAmount;
    font.tables.head.yMin += newWidthMoveAmount;
    font.tables.hhea.advanceWidthMax = newWidth;
    font.tables.hhea.minLeftSideBearing += newWidthMoveAmount;
    font.tables.hhea.minRightSideBearing += newWidthMoveAmount;
    font.tables.hhea.xMaxExtent += newWidthDecrease;
    font.tables.os2.xAvgCharWidth = newWidth;
    const newHeightOffset = downloadSettingsCustom.lineHeight * 500 - 500;
    font.ascender += newHeightOffset;
    font.descender -= newHeightOffset;
    font.tables.hhea.ascender += newHeightOffset;
    font.tables.hhea.descender -= newHeightOffset;
    font.tables.os2.sTypoAscender += newHeightOffset;
    font.tables.os2.sTypoDescender -= newHeightOffset;
    font.tables.os2.usWinAscent += newHeightOffset;
    font.tables.os2.usWinDescent += newHeightOffset;
    const emptyCalt = {
      tag: "calt",
      feature: { featureParams: 0, lookupListIndexes: [] }
    };
    font.tables.gsub.features.push(emptyCalt);
    const caltLookupIndexes = [];
    Object.entries(settings.features).forEach(([alternate, active]) => {
      if (!active)
        return;
      font.tables.gsub.features.forEach((feature) => {
        if (feature.tag == alternate) {
          feature.feature.lookupListIndexes.forEach(
            (lookupIndex) => caltLookupIndexes.push(lookupIndex)
          );
        }
      });
      font.tables.gsub.features.forEach((feature) => {
        if (feature.tag === "calt") {
          feature.feature.lookupListIndexes = caltLookupIndexes;
        }
      });
    });
    font.tables.gsub.scripts.forEach(
      (script) => script.script.defaultLangSys.featureIndexes.push(
        script.script.defaultLangSys.featureIndexes.length
      )
    );
    const { style, weight } = settings;
    const fontName2 = globalFontName;
    const styleNoSpace = style.split(" ").join("");
    const fontFamily = fontName2;
    const fullName = `${fontName2} ${style}`;
    const postScriptName = `${fontName2}-${styleNoSpace}`;
    const uniqueID = `${font.names.windows.version.en};;${fontName2}-${styleNoSpace};2023;FL820`;
    font.names.macintosh.fontFamily.en = fontFamily;
    font.names.macintosh.fontSubfamily.en = style;
    font.names.macintosh.fullName.en = fullName;
    font.names.macintosh.postScriptName.en = postScriptName;
    font.names.macintosh.preferredFamily = fontFamily;
    font.names.macintosh.preferredSubfamily = style;
    font.names.windows.fontFamily.en = fontFamily;
    font.names.windows.fontSubfamily.en = style;
    font.names.windows.fullName.en = fullName;
    font.names.windows.postScriptName.en = postScriptName;
    font.names.windows.preferredFamily = fontFamily;
    font.names.windows.preferredSubfamily = style;
    font.names.windows.uniqueID.en = uniqueID;
    font.tables.cff.topDict.familyName = fontFamily;
    font.tables.cff.topDict.fullName = fullName;
    font.tables.cff.topDict.weight = weight == 700 ? "Bold" : "Regular";
    font.tables.cff.topDict.uniqueId = uniqueID;
    const macStyles = ["Regular", "Bold", "Italic", "Bold Italic"];
    font.tables.head.macStyle = macStyles.indexOf(style);
    font.tables.hhea.numberOfHMetrics = 3;
    font.tables.cff.topDict.isFixedPitch = 1;
    font.tables.post.isFixedPitch = 1;
    font.tables.name = font.names;
    font.tables.os2.usWeightClass = weight;
    let fsSelection = 0;
    fsSelection += style.includes("Italic") ? Math.pow(2, 0) : 0;
    fsSelection += style.includes("Bold") ? Math.pow(2, 5) : 0;
    font.tables.os2.fsSelection = fsSelection;
    const fontAB = font.toArrayBuffer();
    const blob = new Blob([fontAB], { type: "font/otf" });
    return { weight, style: fontItalic, blob };
  }).catch((error) => catchError(error));
}
async function getZipFileBlob(fonts) {
  const { BlobWriter: BlobWriter2, BlobReader: BlobReader2, ZipWriter: ZipWriter2, TextReader: TextReader2 } = zip_exports;
  const zipFileWriter = new BlobWriter2();
  const zipWriter = new ZipWriter2(zipFileWriter);
  await Promise.all([
    ...fonts.map(
      (font) => zipWriter.add(
        `${globalFontName}-${font.weight}-${font.style}.otf`,
        new BlobReader2(font.blob)
      )
    ),
    zipWriter.add(
      "custom-settings.json",
      new TextReader2(JSON.stringify(downloadSettingsCustom))
    )
  ]);
  const zipFileBlob = await zipWriter.close();
  return zipFileBlob;
}
async function saveFile(blob, filename) {
  (0, import_fs.writeFileSync)(
    filename,
    await blob.arrayBuffer().then((arrayBuffer) => Buffer.from(arrayBuffer, "binary"))
  );
}
downloadFont();
