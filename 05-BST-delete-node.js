class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function deleteTree(node) {
  if (node == null) {
    return;
  }

  // Deleting the subtrees
  deleteTree(node.left);
  deleteTree(node.right);

  // Deleting the node
 console.log("Deleting node: " + node.data);
}

// Deleting the tree and making the root node as null
function deleteTreeReference(rootNode) {
  deleteTree(rootNode);
  rootNode = null;
}

let root;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

deleteTreeReference(root);
console.log("Tree deleted");
