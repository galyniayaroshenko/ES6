'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked = [generate].map(regeneratorRuntime.mark);

function generate() {
    return regeneratorRuntime.wrap(function generate$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log('Start');
                    _context.next = 3;
                    return 1;

                case 3:
                    _context.next = 5;
                    return 2;

                case 5:
                    _context.next = 7;
                    return 3;

                case 7:
                    console.log('Finish');

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

function generate() {
    var currunt = 1;
    console.log('Start');
    return _defineProperty({}, Symbol.iterator, function () {
        return {
            next: function next() {
                var result = { value: undefined, done: true };

                if (currunt <= 3) {
                    result.value = currunt;
                    result.done = false;
                    currunt++;
                } else {
                    result.value = undefined;
                    result.done = true;
                    console.log('Finish');
                }

                return result;
            }
        };
    });
}

console.log(typeof generate === 'undefined' ? 'undefined' : _typeof(generate));
var iterator = generate()[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

var numbers = {
    range: regeneratorRuntime.mark(function range(start, end) {
        var current;
        return regeneratorRuntime.wrap(function range$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        current = start;

                    case 1:
                        if (!(current <= end)) {
                            _context2.next = 6;
                            break;
                        }

                        _context2.next = 4;
                        return current++;

                    case 4:
                        _context2.next = 1;
                        break;

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, range, this);
    })
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = numbers.range(1, 10)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;

        console.log(num);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}