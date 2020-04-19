import axios from 'axios';
import { API_KEY } from '../key.json';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snipper',
        maxResults: 5,
        key: API_KEY
    }
});