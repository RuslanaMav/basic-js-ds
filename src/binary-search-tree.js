const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, val) {
      if (!node) return new Node(val);
      if (node.data === val) return node;
      if (node.data > val) node.right = addNode(node.right, val);
      else node.left = addNode(node.left, val);
      return node;
    }
  }

  has(data) {
    return this._searchNode(this.rootNode, data);
  }

  _searchNode(node, val) {
    if (!node) return false;
    if (node.data === val) return true;
    return node.data > val ? this._searchNode(node.right, val) : this._searchNode(node.left, val);
  }


  find(/*data*/) {
    throw new NotImplementedError('Not implemented');
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    let root = this.rootNode;
  

    function removaNode() {
      
    }
    
  }


  findMin(node) {
    while (node.left) 
      node = node.left;
    return node;
  }

  findMax(node) {
    while (node.right) 
      node = node.right;
    return node;
  }

  min() {
    const node = this.findMin(this.rootNode);
    return node ? node.data : null;
  }

  max() {
    const node =this.findMin(this.rootNode);
    return node ? node.data : null;
  }

}


module.exports = {
  BinarySearchTree
};