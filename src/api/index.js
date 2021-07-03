import axios from 'axios';

export const api = axios({ baseURL:process.env.FOODIFY_API_URL });