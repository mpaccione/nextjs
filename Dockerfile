# Use Node.js as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
# COPY /app/package*.json ./

# Copy the rest of the application code
COPY /app ./

# Install dependencies
RUN npm install

# Build the application
# RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
