####################################################################
# Frontend Dockerfile
#
# Purpose:
# Serves static HTML/CSS/JS using Nginx.
####################################################################

FROM nginx:alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy frontend files
COPY . /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80