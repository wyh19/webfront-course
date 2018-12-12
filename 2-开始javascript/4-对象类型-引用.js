/**
 * 还记得基本类型里变量a赋值给变量b的问题吗
 * 现在，在学习了对象类型后，我们再试验一下
 */

 var a = {
     name:'lhh',
     age:26
 }

 var b = a

 //开始修改a的信息
 a.age = 27
 //打印a
 console.log(a)
 //打印b
 console.log(b)
 //有没有发现a和b的age都是27？改了a会影响到b，对吧。

 /**
  * 以上涉及到计算机科学的一个常见问题，就是引用（简化后的指针）。引用的设计一个主要目的是节省内存，防止多次拷贝大量数据
  * 当一个数据对象赋值给一个变量时，这个变量并不是这个数据对象本身，
  * 而只是保留了对这个对象的引用，即这个变量只是指向那个数据对象
  * 当变量a赋值给变量b时，b也得到了一份引用，从而指向 a指向的数据对象
  * 当通过a修改数据对象时，数据对象得到了修改，那么通过b找到的对象就是修改后的
  */