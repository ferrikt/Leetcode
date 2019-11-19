//recursive
//Time complexity : O(N),
//Space complexity: O(log(N))-best case, O(N)-worse case
var isSameTree = function(p, q) {
    if (p===null && q===null) {
        return true;
    }
    if (!(p && q)) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    if (p.val === q.val) {
        return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
    }

};

//iterative
//Time complexity : O(N),
//Space complexity: O(log(N))-best case, O(N)-worse case
var isSameTree = function(p, q) {
   const check = (p,q) => {
       if (p===null && q===null) return true;
       if (!(p && q)) return false;
       return p.val === q.val;
   }

    const queueP = [];
    const queueQ = [];

    queueP.push(p);
    queueQ.push(q);

    while(queueP.length>0) {
        const elemP = queueP.shift();
        const elemQ = queueQ.shift();

        if (elemP===null && elemQ===null) {
            continue;
        }
        if (!check(elemP, elemQ)) {
            return false;
        }

        if (elemP!=null)  {
             if (!check(elemP.left, elemQ.left)) {
            return false;
        }
        else {
            queueP.push(elemP.left);
            queueQ.push(elemQ.left);
        }

        if (!check(elemP.right, elemQ.right)) {
            return false;
        }
        else {
            queueP.push(elemP.right);
            queueQ.push(elemQ.right);
        }
        }


    }
    return true;

};
