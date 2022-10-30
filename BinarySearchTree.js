// Binary Search Tree is a node-based binary tree data structure which has the following properties:

// The left subtree of a node contains only nodes with keys lesser than the node’s key.
// The right subtree of a node contains only nodes with keys greater than the node’s key.
// The left and right subtree each must also be a binary search tree.

class Node{
   constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
   };
};
class BinarySearchTree{
   constructor(){
      this.root = null;
   }
   insert(data){
      var newNode = new Node(data);
      if(this.root === null){
         this.root = newNode;
      }else{
         this.insertNode(this.root, newNode);
      };
   };
   insertNode(node, newNode){
      if(newNode.data < node.data){
         if(node.left === null){
            node.left = newNode;
         }else{
            this.insertNode(node.left, newNode);
         };
      } else {
         if(node.right === null){
            node.right = newNode;
         }else{
            this.insertNode(node.right,newNode);
         };
      };
   };
};
const BST = new BinarySearchTree();
BST.insert(1);
BST.insert(3);
BST.insert(2);
console.log(BST)
