/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 //iterative
 //time complexity is O(n)-
 //Since each node in the tree is visited / added to the queue only once
 //Space complexity is O(n)O(n), since in the worst case,
 // the queue will contain all nodes in one level of the binary tree.

var invertTree = function(root) {
    const queue = [];
    if (!root) return null;
    queue.push(root);
    while(queue.length>0) {
        let node = queue.shift();
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return root;
};


//recursive
//time complexity is O(n)
//Because of recursion, O(h)O(h) function calls will be placed on the stack in the worst case,
//where hh is the height of the tree. Because h∈O(n), the space complexity is O(n).

var invertTree = function(root) {
   if (!root) {
        return null;
   };
    const temp = root.right;
    root.right = root.left;
    root.left = temp;
    root.left && invertTree(root.left);
    root.right && invertTree(root.right);
    return root;
};
