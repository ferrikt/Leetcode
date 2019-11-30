/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {

    if (!t) return true;
    if (!t && !s) return true;
    if (!s && t) return false;


    const isSame = (s,t) => {
      if (!t && !s) return true;
      if (!t || !s) return false;

      return s.val===t.val && isSame(s.left, t.left)
        && isSame(s.right, t.right);

    }

    return isSame(s, t) || isSubtree(s.left, t)
    || isSubtree(s.right, t);


};
