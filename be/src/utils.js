const getNoExtFileName = (fileName) => {
  const arr = fileName.split('.');
  arr.pop();
  return arr.join('');
};

module.exports = {
  getNoExtFileName,
};
