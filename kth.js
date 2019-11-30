function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = {
  val: 3,
  right: { val: 4, right: null, left: null },
  left: {
    val: 1,
    right: { val: 2, right: null, left: null },
    left: null
  }
};

var kthSmallest = function(root, k) {
  let result = null;

  const helper = (root, inorder = []) => {
    //  if (!root) return;

    root.left && helper(root.left, inorder);

    inorder.push(root.val);

    if (inorder.length === k) {
      result = root.val;
      return;
    }

    root.right && helper(root.right, inorder);
  };

  helper(root);
  return result;
};

console.log(kthSmallest(root, 1));
