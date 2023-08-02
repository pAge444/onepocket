
const sumOfArray = (req, res) => {
  //For this test I am using already defined array
  const arr = [45, 34, 13, 67];
  const totalSum = arr.reduce((prevSum, currVal) => prevSum + currVal);
  res.status(200).send({
    Array: arr,
    Sum : totalSum,
  });
};

module.exports = sumOfArray;