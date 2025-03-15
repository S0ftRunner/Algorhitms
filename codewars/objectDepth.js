function depth(obj) {
  if (Object.keys(obj).length === 0) return 0;
  const keys = Object.keys(obj);



  return 1 + depth(obj);
}