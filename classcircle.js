class Circle {
	constructor(radius){
		this.radius = radius;
	}
	calcArea(){
		return 3.14 * this.radius * this.radius
	}
	calcPerimeter(){
		return 2 * 3.14 * this.radius
	}
	calcDiameter(){
		area = this.calcArea() * 3.14
		return Math sqrt(area)
	}

}
const circle = new Circle(14);
console.log(" the area", circle.calcArea());
console.log(" perimeter", circle.calcPerimeter());
console.log("circle diameter",circle.calcDiameter());