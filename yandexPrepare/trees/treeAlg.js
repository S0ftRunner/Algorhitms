// обход дерева

const recursive = (tree) => {
  let sum = 0;
  tree.forEach(node => {
    sum += node.v;
    if (!node.c) {
      return node.v;
    }
    sum += recursive(node.c)
  });

  return sum;
}

const iterative = (tree) => {
   if (!tree.length) {
    return 0;
   }

   let sum = 0;

   let stack = [];

   tree.forEach((node) => {
    stack.push(node);
   });

   while(stack.length) {
    const node = stack.pop();
    sum += node.v;
    if(node.c) {
      node.c.forEach((child) => {
        stack.push(child);
      })
    }
   }

   return sum;
}