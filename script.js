//complete this code
class Rectangle {
	constructor(width , height){
		this.width = width,
		this.height = height	
	}
	get width(){
		return this.width;
	}
	get height(){
		return this.height;
	}

	getArea(){
		console.log(this.width * this.heigth);
	}
}

class Square extends Rectangle {
	super();
	constructor(side){
		this.side = side;
	}
	getPerimeter(){
		console.log(4 * this.side)
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
