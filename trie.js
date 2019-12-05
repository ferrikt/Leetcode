/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new Node();
};


class Node {
    constructor() {
        this.keys = new Map();
        this.end = false;
    }

    isEnd = () => this.end;

    setEnd = () => this.end = true;
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {

    const helper = (word, node) => {
        if (word) {
            if (!node.keys.has(word[0])) {
               node.keys.set(word[0], new Node());
            }
            helper(word.substring(1), node.keys.get(word[0]));

        }
        else {
            node.setEnd();
        }
    }

    helper(word, this.root);
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */


Trie.prototype.search = function(word) {
    let node = this.root;

    while(word.length>1) {

        if (node.keys.has(word[0])) {
            node = node.keys.get(word[0]);
            word = word.substring(1);
        }
        else {
            return false;
        }
    }
    return node.keys.has(word[0]) && node.keys.get(word[0]).isEnd();
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */



Trie.prototype.startsWith = function(prefix) {
    let node = this.root;

    while(prefix) {
        if (node.keys.has(prefix[0])) {
            node = node.keys.get(prefix[0]);
            prefix = prefix.substring(1);

        }
        else {
            return false;
        }
    }
    return node.keys.size>0 || node.isEnd();
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
