import axios from 'axios';

export const handleApiCall = async (method, url, data = null) => {
    try {
        const response = await axios({
          method,
          url,
          data,
          headers: {
                'Content-Type': 'application/json',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
      console.error('API Error:', error.response ? error.response.data : error.message);
      return { success: false, error: error.response ? error.response.data.message : error.message };
    }
};