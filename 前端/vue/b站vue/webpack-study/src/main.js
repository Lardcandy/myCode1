//这个main.js是我们项目中js入口文件

//1.导入jquery
// import *** from ***是es6中导入模块的方式
// 由于es6中的语法太高级，浏览器解析不了，报语法错误
// 这就需要用到webpack了，命令：
// npm init -y
// npm i jquery -s
// webpack ./src/main.js -o ./dist/bundle.js
import $ from 'jquery'
// const $ = require('jquery')

import './css/index.css'
import './css/index.less'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'

$(function () {
    $('li:odd').css('backgroundColor','lightgray')
    $('li:even').css('backgroundColor',function () {
        return 'lightpink'
    })
})

// class关键字是es6中提供的新语法，是用来实现es6中面向对象编程的方式
class Person{
    // 使用static关键字，可以定义静态属性
    //静态属性：可以直接通过类名，直接访问的属性
    //实力属性：只能通过类的实例的访问的属性
    static info = {name:'zs',age:20}
}

// java c# 实现面向对象的方式完全一样，class是从后端语言中借鉴过来的，来实现面向对象
// var p1 = new Person()

console.log(Person.info)