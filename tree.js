class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    if (this.root === null) {
      this.root = new Node(data);
      console.log(`add node ${data} to the root`);
      return;
    } else {
      const searchTree = function(node) {

        console.log('search tree');

        if (node.data == data) {
          return;
        } else if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            console.log(`add node ${data} to the left`);
            return;
          } else {
            searchTree(node.left);
          }

        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            console.log(`add node ${data} to the right`);
            return;
          } else {
            searchTree(node.right);
          }
        }

      }
      searchTree(this.root);
    }

  }

  findMin() {
    let node = this.root;
    while (node.left != null)
      node = node.left;
    return node.data;
  }

  findMax() {
    let node = this.root;
    while (node.right != null)
      node = node.right;
    return node.data;
  }


  remove(data) {
    const removeNode = function(node,data) {
      if (node == null) {
       return null;
     }
        if (node.data === data) {
          if (node.left===null && node.right===null) {
            node=null;
            return;
          }
          if (node.left===null) {
            return node.right;
          }
          if (node.right===null) {
            return node.left;
          }
          if (node.right!=null && node.left!=null) {
            let tempNode = node.right;
            while(tempNode.left) {
              tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right =  removeNode(tempNode,node.right.data);
            return node;
          }

        }
        else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }

     this.root = removeNode(this.root, data);
  }



  findMinHeight(node=this.root){
    if (node===null) {
      return -1;
    }

    let left = this.findMinHeight(node.left);
    console.log('left='+left);

    let right = this.findMinHeight(node.right);

    if (left < right) {
          return left + 1;
      } else {
          return right + 1;
      };
    }

    /*In-order: left-node-right*/

    InOrderTraversal(node=this.root){
      node.left && this.InOrderTraversal(node.left);
      console.log(node.data);
      node.right && this.InOrderTraversal(node.right);
    }

    IterativeInOrderTraversal(root=this.root) {
      let stack = [];

      while(true) {

        if (root) {
          stack.push(root);
          root = root.left
        }
        else {
          if (stack.length===0) break;

          let node = stack.pop();
          console.log(node.data);
          root = node.right;
        }

      }
    }


    /*Pre-order: node-left-right */

    PreOrderTraversal(node=this.root){
      console.log(node.data);
      node.left && this.PreOrderTraversal(node.left);
      node.right && this.PreOrderTraversal(node.right);
    }

    PreOrderTraversalIterative(root = this.root) {
      let stack = [];

      stack.push(root);

      while(stack.length) {
        let node = stack.pop();
        console.log(node.data);

        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
      }
    }


    /*Post-order: left-right-node*/

    PostOrderTraversal(node = this.root){
      node.left && this.PostOrderTraversal(node.left);
      node.right && this.PostOrderTraversal(node.right);
      console.log(node.data);
    }

    PostOrderTraversalIterative(node = this.root){
      if (!node) return;
      const stack1 = [];
      const stack2 = [];
      stack1.push(node);
      while(stack1.length>0) {
        node = stack1.pop();
        stack2.push(node);
        node.left && stack1.push(node.left);
        node.right && stack1.push(node.right);
      }

      while(stack2.length>0) {
        const node = stack2.pop();
        console.log(node.data);
      }
    }



}

const bst = new BST();
console.log('create BST');
bst.add(51);

bst.add(23);
bst.add(4);
bst.add(90);
bst.add(89);
bst.add(91);

//bst.remove(89);

//bst.PostOrderTraversal();

//bst.remove(89);
//bst.remove(51);



console.log('-------');
console.log('Postorder traversal');
bst.PostOrderTraversal();


console.log('Postorder traversal iterative');
bst.PostOrderTraversalIterative();



//console.log(`Tree minumum is ${bst.findMin()}`);
//console.log(`Tree maximum is ${bst.findMax()}`);


//console.log(bst.findMinHeight());
