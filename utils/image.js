import axios from 'axios';
import fs from 'fs';

const downloadImage = (url, imagePath) =>
  axios({
    url,
    responseType: 'stream'
  })
  .then(response =>
    new Promise((resolve, reject) => {
      response.data
        .pipe(fs.createWriteStream(imagePath))
        .on('finish', () => resolve())
        .on('error', e => reject(e));
  })
);

export default downloadImage;
