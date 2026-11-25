// DFS
var mergeTrees = function(root1, root2) {
    if (root1 === null) return root2;
    if (root2 === null) return root1;

    let root = new TreeNode(root1.val + root2.val);

    root.left = mergeTrees(root1.left, root2.left);
    root.right = mergeTrees(root1.right, root2.right);

    return root;
};

// BFS
var mergeTrees = function(root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;

    let root = new TreeNode(root1.val + root2.val);

    let queue = [[root, root1, root2]];
    let index = 0;

    while (index < queue.length) {
        let [node, n1, n2] = queue[index++];

        if (n1.left && n2.left) {
            node.left = new TreeNode(n1.left.val + n2.left.val);
            queue.push([node.left, n1.left, n2.left]);
        } else {
            node.left = n1.left || n2.left;
        }

        if (n1.right && n2.right) {
            node.right = new TreeNode(n1.right.val + n2.right.val);
            queue.push([node.right, n1.right, n2.right]);
        } else {
            node.right = n1.right || n2.right;
        }
    }

    return root;
};