import axios from 'axios';

const API_KEY = 'YOUR_YOUTUBE_API_KEY';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

class YouTubeService {
    static async searchSongs(query: string) {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: {
                part: 'snippet',
                q: query,
                type: 'video',
                key: API_KEY,
            },
        });
        return response.data.items;
    }

    static async getVideoDetails(videoId: string) {
        const response = await axios.get(`${BASE_URL}/videos`, {
            params: {
                part: 'snippet,contentDetails',
                id: videoId,
                key: API_KEY,
            },
        });
        return response.data.items[0];
    }

    static getVideoUrl(videoId: string) {
        return `https://www.youtube.com/watch?v=${videoId}`;
    }
}

export default YouTubeService;