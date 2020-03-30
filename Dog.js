function Dog(){
	this.stomach = [];
}

Dog.prototype.eat = function(animal) {
	this.stomach.push(animal);
};

module.exports = Dog;