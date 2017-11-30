export const asArray = (obj) => {
  if (Object.keys(obj).length > 0){
    return Object.keys(obj).map(k => obj[k]);
  }
  return [];
};
