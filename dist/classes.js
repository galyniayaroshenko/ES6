'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task() {
        var title = arguments.length <= 0 || arguments[0] === undefined ? Task.getDefaultTitle() : arguments[0];

        _classCallCheck(this, Task);

        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('Создание задачи');
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.done = 1;
            console.log('Задача "' + this.title + '" выполнена');
        }
    }, {
        key: 'done',
        get: function get() {
            return this._done === true ? 'Выполнена' : 'Не выполнена';
        },
        set: function set(value) {
            if (value !== undefined && typeof value === 'boolean') {
                this._done = value;
            } else {
                console.error('Ошибка! Укажите значение true или false');
            }
        }
    }], [{
        key: 'getDefaultTitle',
        value: function getDefaultTitle() {
            return 'Задача';
        }
    }]);

    return Task;
}();

// let Task = class {
//     constructor() {
//         console.log('Creating a task');
//     }
// }

Task.count = 0;

var task = new Task('Убрать комнату');
console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);