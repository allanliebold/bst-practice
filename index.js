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
bst.push(40);
bst.push(25);
bst.push(10);
bst.push(32);
bst.push(78);

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
  if(!node){
    return 0;
  }
  if(node.left){
    return findMin(node.left);
  }
  return node.value;
}

function findMax(node){
  if(!node){
    return 0;
  }
  if(node.right){
    return findMax(node.right);
  }
  return node.value;
}

console.log('DFS:');
dfs(bst.root);
console.log('Inorder:');
inorder(bst.root);
console.log('Preorder:');
preorder(bst.root);
console.log('Postorder:');
postorder(bst.root);
console.log('Min:', findMin(bst.root));
console.log('Max:', findMax(bst.root));
