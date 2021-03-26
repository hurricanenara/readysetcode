// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
  //iterative
  depthFirstSearch(array) {
		const stack = [this];
		while (stack.length) {
			const currentNode = stack.shift();
			array.push(currentNode.name);
			if (currentNode.children) stack.unshift(...currentNode.children);
		}
		return array;
  }

  //recursive
  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
        child.depthFirstSearch(array);
    }
    return array;
  }
}


