// call node functions on the tree to start at the root

class Tree {
  add(value) {
    if (this.root) this.root.add(value);
    else this.root = new Node(value);
  }
  has(value) {
    if (this.root) return this.root.has(value);
    else return false;
  }
  delete(value) {
    if (this.root) this.root.delete(value, this, 'root');
  }
}

class Node {
  constructor(value) {
    this.value = value;
  }
  add(value) {
    if (value < this.value) {
      if (this.left) this.left.add(value);
      else this.left = new Node(value);
    } else if (value > this.value) {
      if (this.right) this.right.add(value);
      else this.right = new Node(value);
    }
  }
  has(value) {
    if (value < this.value) {
      if (this.left) return this.left.has(value);
      else return false;
    } else if (value > this.value) {
      if (this.right) return this.right.has(value);
      else return false;
    } else if (value === this.value) {
      return true;
    }
  }
  delete(value, parent, which) {
    if (value < this.value) {
      if (this.left) this.left.delete(value, this, 'left');
    } else if (value > this.value) {
      if (this.right) this.right.delete(value, this, 'right');
    } else if (value === this.value) {
      if (this.left) {
        let node = this.left;
        while (node.right) node = node.right;
        this.value = node.value;
        this.left.delete(this.value, this, 'left');
      } else if (this.right) {
        let node = this.right;
        while (node.left) node = node.left;
        this.value = node.value;
        this.right.delete(this.value, this, 'right');
      } else {
        delete parent[which];
      }
    }
  }
}

// add third node value in the center

add(value) {
  if (value < this.value) {
    if (this.left) this.left.add(value);
    else this.left = new Node(value);
  } else if (value > this.value) {
    if (this.right) this.right.add(value);
    else this.right = new Node(value);
  } else if (value === this.value) {
    if(this.middle) this.middle.add(value);
    else this.middle = new Node(value);
  }
}
