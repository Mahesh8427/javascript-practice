// static method are define 

"use strict"
class Point {
  constructor(x, y) {
    this.first = x;
    this.second = y;
  }

  static distance(a, b) {
    const dx = a.first - b.first;
    const dy = a.second - b.second;

    return dx + dy;
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.distance; //undefined
p2.distance; //undefined

console.log(Point.distance(p1, p2)); //static function are refference only by using the class name. 


