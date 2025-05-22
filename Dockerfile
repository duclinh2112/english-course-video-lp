# Stage 1: Build Stage
FROM node:20-alpine as build

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies (including dev dependencies) for building the app
RUN yarn install

# Copy the rest of your application code into the container
COPY . .

# Build the Next.js app for production
RUN yarn build

# Stage 2: Production Stage
FROM node:20-alpine as production

WORKDIR /app

# Copy only the production dependencies and the build artifacts from the previous stage
COPY --from=build /app/package*.json ./
RUN npm install --only=production

# Copy the built app from the build stage
COPY --from=build /app ./

# Expose the default port for Next.js
EXPOSE 3000

# Run the Next.js app in production mode
CMD ["yarn", "start"]
