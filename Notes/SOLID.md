# SOILD PRINCIPLES
## S -> Single Responsibility Principle 
* Class should have only one responsiblity and should change only due to one reason
* If there is a modification needed in the class then it shoudl be the ONLY reason to modify the class
* Example :
`class Pen{
  properties...
}
class invoice{
  calc()
  store()
  print()
}
`
* In the above example changes in the class can be due to change in calculation method or change in way to store or way to print
* Better approach would be to create a different class under the pen class for each of the operations 

## O -> Open/Closed Principle
* A classs should be open to extension of the class but close to modification of the class
* Whenever a mew feature is to be added, it shoudld not modify the class but rather it should extend the class so that other features when added can simply extend the class instead of modifying the class already working properly therefore chances of break down is less
* Example :
Say in the previous example if storing feature was to be done in file but we wanted to also ass storing to DB we will not modify the store feature but extend i tto storing to DB and file 

## L -> Liskov Substituition Principle
* If B is a subclass of A then we should be able to replace the objects of A with that of B without breaking the current behaviour of the program.
* Example
`
class Bike{
  engine 
  tire
}
`
if motorcycle and cycle are sub classes , the objects of cycle on extending the bike class will have access to engine and will break regular behaviour

## I -> Interface Segregation Principle 
* Interfaces should be need specific and should not contain unnecesassary funcitons which are not to be used
* Example
`
Interface Employee{
  Clean()
  Cook()
  Serve()
}
class waiter implements Employee{
  Clean()
  Cook()
  Serve()
}
`
In the above example the waiter class does not need the function of the interface employee such as cook and clean so it is unnecesassary

## D -> Dependency Inversion Principle 
* Classes should depend on interfaces rather than concrete classes
* Example
`
class Mackbook{
  WiredKeyboard k
  WiredMouse m
  constructor(){
  m = new WiredMouse;
  }
}
`
here the class has properties such as k and m i.e keyboard and mouse which depend on concrete classes
rather if they were dependent on interfaces like say keyboard and mouse and that interface had classes wiredkeyboard and wirelesskeyboard then we could replace or used combinations easily with passing them to constructors 
`
class Mackbook{
  Keyboard k
  WiredMouse m
  constructor(WiredMouse,WirelessKeyboard){
  m = new WiredMouse;
  k = new WirelessKeyboard
  }
}
`

