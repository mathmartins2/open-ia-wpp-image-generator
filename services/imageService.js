import downloadImage from '../utils/image.js';
import createImage from '../utils/openai.js';

const createAndDownloadImage = async prompt => {
  const response = await createImage(prompt);
  const imageUrl = response.data.data[0].url;
  await downloadImage(imageUrl, 'image.png');
  return 'image.png';
};

export default createAndDownloadImage;