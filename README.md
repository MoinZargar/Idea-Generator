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
## Deploying on AWS EC2

### Step 1: Launch EC2 Instance
![aws1](https://github.com/user-attachments/assets/f5ec84a2-c34c-47a5-acbf-56ca16992b39)

### Step 2: SSH into Server
![aws2](https://github.com/user-attachments/assets/bc696146-0ad7-4d67-8734-a0aa48425b35)

### Step 3: Clone Repository
```bash
git clone https://github.com/MoinZargar/Idea-Generator.git
cd Idea-Generator
```

### Step 4: Configure Environment Variables
- Create and configure `.env` files in both frontend and backend directories
- Update the environment variables with production values
![aws4](https://github.com/user-attachments/assets/723826f1-a44b-4d13-b03f-68429e9c28f6)
### Step 5: Install Docker
![aws3](https://github.com/user-attachments/assets/d84e6a01-1981-451e-a3d1-c8a59690b794)

### Step 6: Configure Nginx
```bash
# Install Nginx
sudo apt update
sudo apt install nginx

sudo rm sudo vi /etc/nginx/nginx.conf
sudo vi /etc/nginx/nginx.conf

# Add the following configuration:
server {
    listen 80;
    

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}

sudo nginx -s reload
```

### Step 7: Deploy Application
```bash
# Run in production mode
docker-compose -f docker-compose.prod.yml up --build -d
```

![aws5](https://github.com/user-attachments/assets/97364850-8b76-451c-8e9c-c73198298565)


### Step 8: Access Application
- Open your web browser
- Navigate to your EC2 instance's public IPv4 address
- The application should now be accessible
![aws6](https://github.com/user-attachments/assets/1d4a0de2-f78c-4f00-92b5-6e0a5ad5b0d8)

### Technologies used:
- Frontend : React js
- Backend : Express js



