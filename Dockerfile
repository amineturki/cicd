# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install
ENV NODE_OPTIONS=--openssl-legacy-provider
# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx servera

# Use official nginx image as the base image
#FROM nginx:latest
FROM nginx:1.17.1-alpine
# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/frontend /usr/share/nginx/html

#COPY /usr/local/app/dist/frontend /usr/share/nginx/html