module.exports = function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue) return `rgba(var(${variableName}), ${opacityValue})`;
    return `rgb(var(${variableName}))`;
  };
};
