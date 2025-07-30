# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist/kendo-store/browser /usr/share/nginx/html
