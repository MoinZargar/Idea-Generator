import axios from "axios";

class chatService {
    async getResponse({prompt}) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/generate`, { prompt }); 
        
        return response.data;
      } catch (error) {
        return error;
      }
    }
   
  };
const ChatService = new chatService();
export default ChatService;