const fs = require('fs');


// function to count words
const countWords = () => {
  try {
    fs.readFile('./data.txt', 'utf8', (err, data) => {
      if (err) throw Error('Error while reading file');
      const words = data.split(/\s+/);
      const wordCount = words.length;
      console.log(`Word count in text file ${wordCount}`);
    });
  } catch (err) {
    console.log('Error while reading file');
  }
}


const countWordsInFile = (req, res) => {
  // let count = 0;
  countWords();
  // console.log("Count", count);
  res.status(200).send('File under process!!');
}


module.exports = countWordsInFile;