class Node {
  constructor(value) {
    this.key = value;
    this.left = null;
    this.right = null;
  }
}

// Create a new BST node
function newNode(item) {
  var temp = new Node();
  temp.key = item;
  temp.left = temp.right = null;
  return temp;
}

// Inorder traversal of BST
function inorder(root) {
  if (root != null) {
    inorder(root.left);
    console.log(root.key + " ");
    inorder(root.right);
  }
}

// Insert a new node using the key in BST
function insert(node, key) {
  // returning new node if tree is empty
  if (node == null) {
    return newNode(key);
  }

  if (key < node.key) {
    node.left = insert(node.left, key);
  } else {
    node.right = insert(node.right, key);
  }

  return node;
}

// deleting a node of the tree
function deleteNode(root, value) {
  if (root == null) {
    return root;
  }

  if (root.key > value) {
    root.left = deleteNode(root.left, value);
    return root;
  } else if (root.key < value) {
    root.right = deleteNode(root.right, value);
    return root;
  }

  // If one of the child node is empty
  if (root.left == null) {
    var temp = root.right;
    return temp;
  } else if (root.right == null) {
    var temp = root.left;
    return temp;
  } else {
    var parent = root;
    var parentNode = root.right;

    while (parentNode.left != null) {
      parent = parentNode;
      parentNode = parentNode.left;
    }

    if (parent != root) parent.left = parentNode.right;
    else parent.right = parentNode.right;

    root.key = parentNode.key;

    return root;
  }
}

var root = null;
root = insert(root, 50);
root = insert(root, 30);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 70);
root = insert(root, 60);
root = insert(root, 80);

console.log("Inorder traversal of the given tree");
inorder(root);

console.log("Delete 20:");
root = deleteNode(root, 20);
console.log("Inorder traversal of the modified tree");
inorder(root);

console.log("Delete 30:");
root = deleteNode(root, 30);
console.log("Inorder traversal of the modified tree");
inorder(root);

console.log("Delete 50:");
root = deleteNode(root, 50);
console.log("Inorder traversal of the modified tree");
inorder(root);
