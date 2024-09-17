import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const GIPHY_BASE_URL = 'https://api.giphy.com/v1/gifs/search';
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

const searchTerms = {
  'easy': 'happy SpongeBob',
  'intermediate': 'Focused SpongeBob',
  'hard': 'angry SpongeBob',
};

export const getGifUrlByDifficulty = async (difficulty) => {
  const query = searchTerms[difficulty];
  if (!query) throw new Error('Invalid difficulty level');

  try {
    const response = await axios.get(GIPHY_BASE_URL, {
      params: {
        api_key: GIPHY_API_KEY,
        q: query,
        limit: 1, 
      }
    });

    if (response.data?.data?.length === 0) {
      console.error('No GIFs found for query:', query);
      console.log('Full API response:', response.data); 
      throw new Error('No GIF found');
    }

    const gifUrl = response.data.data[0]?.images?.original?.url;
    if (!gifUrl) throw new Error('No GIF found');

    return gifUrl;
  } catch (error) {
    console.error('Error fetching GIF:', error);
    throw new Error(`Giphy request failed: ${error.message}`);
  }
};
