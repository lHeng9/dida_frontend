#  **__get__  和  __getattr__  和  __getattribute__  的区别于联系**

## get，getattr,  getattribute  都是访问属性的方法，但是不太相同

 1. "object._______getattribute_______(self, name)"
 无条件的被调用，通过实例访问实例。如果class中定义了 __getattr__() ，则__getattr__() 不会被调用，除非显示调用或引发attributeERROR异常

 2. object._______getattr_______(self, name)
      当一般位置找不到属性时，会调用getattr，返回一个值或 AttributeError 异常
   
 3. object._______get_______(self, instance, owner)
 如果类中重写了它，则这个类就可以称为“描述符”。拥有者是所有者的类，实例是访问描述符的实例，如果不是通过实例访问，而是通过类访问的话，实例则为空。（描述符的实例自己访问自己是不会触发__get__，而会触发call，只有描述符作为其他类的属性才有意义。）（所以下文的 a1 是作为 B 的一个属性被调用）


```python
class A:
    att = 'abc'
    def __getattribute__(self, item):
        print("触发了 __getattribut__()")
        return object.__getattribute__(self, item) + ' from getattribute'

    def __getattr__(self, item):
        print("触发了 __getattr__() 方法")
        return item + " form getatter"

    def __get__(self, instance, owner):
        print("触发了 __get__()方法", instance, owner)
        return self

class B:
    a1 = A()

if __name__ == '__main__':
    a2 = A()
    b = B()

    print('————————————————————————————————————————')
    print(a2.att)
    print('————————————————————————————————————————')
    print(a2.ppppppppp)
    print('————————————————————————————————————————')
    b.a1
    print('————————————————————————————————————————')
    print(b.a1.att)


```
————————————————————————————————————————

触发了 __getattribut__()
abc from getattribute

————————————————————————————————————————

触发了 __getattribut__()
触发了 __getattr__() 方法
ppppppppp form getatter

————————————————————————————————————————

触发了 __get__()方法 <__main__.B object at 0x000001C55187A5F8> <class '__main__.B'>

————————————————————————————————————————

触发了 __get__()方法 <__main__.B object at 0x000001C55187A5F8> <class '__main__.B'>
触发了 __getattribut__()
abc from getattribute

上例中，描述符就是class A，因为它重写了__get__()

由上述例子看出：
​	1. 每次通过实例访问属性，都会触发__getattribute__方法。
​	2. 当通过实例访问的属性不存在时，仍然触发 __getattribute__，不过接着要触发 __getattr__，这是个异常处理
​	3. 每次访问 描述符（即实现了__get__的类），都会先经过 __get__方法。
​	4. 需要注意的是，当使用类访问不存在的变量时，不会触发 __getattr__ 方法。而描述符不存在此问题，只是把实例 标识为None 而已。
