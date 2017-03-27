nodejs所有的异步I/O操作在完成时都会发送一个事件到事件队列
nodejs藜麦的许多对象都会分发事件：一个net.Server对象会在每次有新链接时候分发一个事件，一个fs.readStream对象会在文件被打开的时候发出一个事件，所有这些产生事件的对象都是 events.EventEmitter的实例

events模块只提供了一个对象，events.EventEmitter。他的核心就是 事件触发与事件监听功能的封装。

大多数时候不会直接使用EventEmitter,而是在对象中继承它。包括fs net http 在内的，只要是支持事件响应的核心模块都是EventEmitter的子类；
这样的原因有两点：

1.具有某个实体功能的对象实现事件符合语义，事件的监听和发射应该是一个对象的方法；

2.其次，JavaScript的对象机制是基于原型的，支持部分多重继承，继承EventEmmiter不会打乱对象原有的继承关系。