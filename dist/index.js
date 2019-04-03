"use strict";
var m = new Map();
m.set('0', 'foo');
m.set(1, 'bar');
for (var _i = 0, _a = m.entries(); _i < _a.length; _i++) {
    var _b = _a[_i], k = _b[0], v = _b[1];
    console.log(k, v);
}
