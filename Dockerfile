FROM ruby:3.2-alpine

# Install system dependencies
RUN apk add --no-cache \
    build-base \
    git \
    nodejs \
    npm \
    tzdata \
    && rm -rf /var/cache/apk/*

# Set working directory
WORKDIR /app

# Copy dependency files
COPY Gemfile* ./
COPY package*.json ./

# Install Ruby and Node.js dependencies
RUN bundle install && \
    npm install

# Expose Jekyll default port and LiveReload port
EXPOSE 4000 35729

# Default command - will be overridden by docker-compose
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload", "--force_polling"]
