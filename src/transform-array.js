const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  let res = arr.slice();


  arr.forEach((el, ind) => {
    switch (el) {
      case '--discard-next':
        if (ind < res.length - 1) {
          res[ind + 1] = null;
          res[ind] = null;
        } else {
          res[ind] = null;
        }
        break;
    }
  }
}

module.exports = {
  transform
};
