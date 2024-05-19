FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies as root
RUN yarn install

# Switch to non-root user
USER node

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 3000

# Command to run the application
CMD ["yarn", "run", "dev"]
