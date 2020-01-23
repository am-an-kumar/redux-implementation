// generates a random id to be used for todos and goals
const generateId = () =>
  Math.random()
    .toString(36)
    .substring(2) + new Date().getTime().toString(36);

module.exports = {
  generateId
};
