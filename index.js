'use strict';

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.push = function(val) {
  var root = this.root;

  if(!root) {
    this.root = new Node(val);
    return;
  }

  var currentNode = root;
  var newNode = new Node(val);

  while(currentNode) {
    if(val < currentNode.value) {
      if(!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else if(!currentNode.right) {
      currentNode.right = newNode;
      break;
    } else {
      currentNode = currentNode.right;
    }
  }
}



var bst = new BinarySearchTree();
bst.push(50);
bst.push(22);
bst.push(7);
bst.push(44);
bst.push(55);
bst.push(124);
bst.push(2);
bst.push(92);
bst.push(88);


function dfs(node){
  if(node){
    console.log(node.value);
    dfs(node.left);
    dfs(node.right);
  }
}

function inorder(node){
  if(node){
    inorder(node.left);
    console.log(node.value);
    inorder(node.right);
  }
}

function preorder(node){
  if(node){
    console.log(node.value);
    preorder(node.left);
    preorder(node.right);
  }
}

function postorder(node){
  if(node){
    postorder(node.left);
    postorder(node.right);
    console.log(node.value);
  }
}

function findMin(node){
  if(!node) return 0;

  if(node.left){
    return findMin(node.left);
  }
  return node.value;
}

function findMax(node){
  if(!node) return 0;

  if(node.right){
    return findMax(node.right);
  }
  return node.value;
}

function findHeight(node){
  if(!node) return 0;
  var leftHeight = findHeight(node.left);
  var rightHeight = findHeight(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

function treeContains(node, num){
  if(node.value === num) {
    return true;
  }

  if(node.value > num) {
    if(node.left != null) {
      return treeContains(node.left, num);
    } else {
      return false;
    }
  } else if(node.right != null) {
      return treeContains(node.right, num);
    } else {
      return false;
    }
}

function findNearest(node, num){
  var current = node.value;
  console.log('current:', current);
  var next = num < current ? node.left : node.right;
  if(next != null) {
    var next2 = findNearest(next, num);
  }

  return current;

  console.log();
  return Math.abs(current - num) < Math.abs(next - num) ? current : next;
}

// console.log('DFS:');
// dfs(bst.root);
// console.log('Inorder:');
// inorder(bst.root);
// console.log('Preorder:');
// preorder(bst.root);
// console.log('Postorder:');
// postorder(bst.root);
// console.log('Min:', findMin(bst.root));
// console.log('Max:', findMax(bst.root));
//
// console.log('Height:', findHeight(bst.root));

// console.log('Nearest to 1:', findNearest(bst.root, 1));

console.log('Tree contains 50?:', treeContains(bst.root, 50));
console.log('Tree contains 55?:', treeContains(bst.root, 55));
console.log('Tree contains 28?:', treeContains(bst.root, 28));
