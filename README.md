# Idea Generator

A web application that generates creative ideas using Google's Gemini AI API.

## Prerequisites

- Docker ([Install Docker](https://docs.docker.com/engine/install/))
- Git

## Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/MoinZargar/Idea-Generator.git
   ```

2. Configure Frontend Environment:
   - Navigate to the frontend folder
   - Create a new `.env` file based on `.env.example`
   - Add the following line:
     ```
     VITE_BACKEND_URL=http://localhost:8000
     ```

3. Configure Backend Environment:
   - Navigate to the backend folder
   - Create a new `.env` file based on `.env.example`
   - Add the following environment variables:
     ```
     CORS_ORIGIN='http://localhost:5173'
     GENAI_API_KEY=your-gemini-api-key
     MONGODB_URI=your-mongodb-uri
     DB_NAME=idea_db
     PORT=8000
     ```

## Getting Required API Keys

### Google Gemini API Key
1. Visit [Google AI Studio](https://ai.google.dev/gemini-api)
2. Follow the instructions to create an API key
3. Copy the API key and paste it in your backend `.env` file

### MongoDB URI
1. Visit [MongoDB Atlas](https://www.mongodb.com/)
2. Create an account or sign in
3. Create a new cluster
4. Get your connection string
5. Replace `your-mongodb-uri` in the `.env` file with your actual MongoDB connection string

## Running the Application

### Development Mode
1. From the root folder, run:
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```
2. Open your browser and navigate to: `http://localhost:5173`

### Production Mode ( If you want to deploy this app and run it in production, then run )
1. From the root folder, run:
   ```bash
   docker-compose -f docker-compose.prod.yml up --build
   ```

### Stopping the Application
To stop the containers, run:
```bash
docker-compose -f docker-compose.prod.yml down
```


