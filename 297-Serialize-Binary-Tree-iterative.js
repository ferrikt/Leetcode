function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = {
  val: 1,
  right: {
    val: 3,
    right: { val: 5, right: null, left: null },
    left: { val: 4, right: null, left: null }
  },
  left: { val: 2, right: null, left: null }
};


var deserialize = function(data) {

    const helper = (queue) => {

      let val = queue.shift();

      if (val === "null") {
        return null;
      }
      else {
        let node = new TreeNode();
        node.val = val;
        node.left = helper(queue);
        node.right = helper(queue);
        return node;
      }

    }

    return helper(data.split(','));

};

var serialize = function(root) {

  let result = "";
  const stack = [];
  stack.push(root);

  while(stack.length) {
    const node = stack.pop();

    if (!node) {
      result += "null,";
    }
    else {
      result = result + node.val + ",";
      stack.push(node.right);
      stack.push(node.left);
    }
  }
  //
  // const helper = (root) => {
  //   if (!root) {
  //     result += "null,";
  //   }
  //   else {
  //     result = result + root.val + ",";
  //     helper(root.left);
  //     helper(root.right);
  //   }

  }

//  helper(root);

  return result.substring(0,result.length-1);

};
console.log('---------');
console.log(root);
console.log('---------');

const test = serialize(root);
console.log(test);

console.log('---------');

console.log(deserialize(test));
