import axios from "axios";

export default class NewsService {
    static async getAll() {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=c230c59c9ac14a188e89039aa2009bee')
            return response.data
        
    }
}