'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by wikeLi on 2017/3/2.
 */
var User = function () {
  _createClass(User, null, [{
    key: 'delete',
    value: function _delete() {
      console.log('delete me');
    }
  }]);

  function User() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'frank';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;

    _classCallCheck(this, User);

    this.name = name;
    this.age = age;
  }

  _createClass(User, [{
    key: 'sayHi',
    value: function sayHi() {
      console.log('helllo,my name is ' + this.name + ',I\'m ' + this.age + ' \u5C81');
    }
  }]);

  return User;
}();

User.foo = 'bar';

var user = new User('Lily', 17);
user.sayHi();
User.delete();
console.log(User.foo);
