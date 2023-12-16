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
      if (val < node.data) node.left = addNode(node.left, val);
      else node.right = addNode(node.right, val);
      return node;
    }
  }

  _searchNode(node, val) {
    if (!node) return null;
    if (node.data === val) return node;
    if (node.data > val) return this._searchNode(node.left, val)
    else return this._searchNode(node.right, val);
  }

  has(data) {
    return this._searchNode(this.rootNode, data) !== null;
  }

  find(data) {
    return this._searchNode(this.rootNode, data);
  }


  remove(data) {
    this.rootNode = removeEl(this.rootNode, data);

    function removeEl(node, val) {
      if (!node) return null;
      if (val > node.data) node.right = removeEl(node.right, val);
      else if (val < node.data) node.left = removeEl(node.left, val);
      else {
        if (!node.right && !node.left) return null;
        if (!node.right) return node.left;
        if (!node.left) return node.right;

        let minNode = node.right;
        while (minNode.left)
          minNode = minNode.left;
        node.data = minNode.data;
        node.right = removeEl(node.right, minNode.data);
      }
      return node;
    }

  }

  min() {
    let minNode = this.rootNode;
    while (minNode.left)
      minNode = minNode.left;
    return minNode.data;
  }

  max() {
    let node = this.rootNode;
    while (node.right)
      node = node.right;
    return node.data;
  }

}


module.exports = {
  BinarySearchTree
};