function Cat(name){
	this.name = name;
	this.stomach = [];
}
cat.prototype.eat = function(animal) {
	this.stomach.push(animal);
};
module.exports = Cat;