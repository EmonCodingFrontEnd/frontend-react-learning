/**
 * 装饰器
 * 装饰器是一个对类进行处理的函数。
 */
@fn
@fn2('flyin')
@fn3
class MyClass {
    @readonly message = 'hello world';
    @noenumerable name = 'MyClass';

    @noenumerable
    test() {
        console.log('test')
    }
}

/**
 * 函数类装饰器基本语法：添加类属性
 *
 * @param target - 目标类
 */
function fn(target) {
    target.foo = 'bar';
}

/**
 * 函数类装饰器语法：返回函数作为装饰器，添加类属性
 *
 * @param value - 传参
 * @returns {(function(*): void)|*} - 函数，作为装饰器
 */
function fn2(value) {
    return function (target) {
        target.value = value;
    }
}

/**
 * 函数类装饰器语法：添加实例属性
 * @param target
 */
function fn3(target) {
    target.prototype.foo = 'baz';
}

/**
 * 函数实例装饰器语法：
 * @param target - 目标类的.prototype
 * @param name - 被修饰的类成员的名称
 * @param descriptor - 被修饰的类成员的描述对象
 */
function readonly(target, name, descriptor) {
    descriptor.writable = false;
}

function noenumerable(target, name, descriptor) {
    descriptor.enumerable = false;
}


// console.log(MyClass.foo) // bar
// console.log(MyClass.value) // flyin
// console.log(new MyClass().foo) // baz

// const c1 = new MyClass();
// console.log(c1.message)
// c1.message = 'hello' // decorator.js:59 Uncaught TypeError: Cannot assign to read only property 'message' of object '#<MyClass>'

// for (let key in c1) {
//     console.log(key + '=' + c1[key])
// }

// c1.test()