const formatToFuse = inputArray => {
  return inputArray.map(el => ({ item: { ...el } }));
};

export default formatToFuse;
