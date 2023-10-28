# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Set the environment variable for production
ENV NODE_ENV=production

# Expose the port Next.js runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
