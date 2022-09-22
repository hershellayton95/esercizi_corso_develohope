class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {

  static calculate(obj) {
    
    let area = 0;

    if (obj instanceof Square) {

      area = obj.side**2;

    } else if (obj instanceof Rectangle) {

      area = obj.width * obj.height;

    } else if (obj instanceof Circle) {

      area = 3.14 * obj.radius ** 2;
    }

    return `${area} mq`;
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));