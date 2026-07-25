####################################################################
# Backend Dockerfile
#
# Purpose:
# Creates a Docker image for the Node.js backend.
####################################################################

# Use lightweight Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Backend listens on port 5000
EXPOSE 5000

# Start the application
CMD ["npm", "start"]