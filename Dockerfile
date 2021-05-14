FROM node:14.17.0

# Add package file
COPY package.json ./
COPY yarn.lock

# Install deps
RUN npm i yarn
RUN yarn install 

# Copy source
COPY . ./source

WORKDIR /source
# Build dist
RUN yarn build

# Expose port 3000
EXPOSE 3000

CMD yarn start