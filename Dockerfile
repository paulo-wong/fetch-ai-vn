# ── Stage 1: Build ──────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@10.4.1

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY patches/ ./patches/

# Install all dependencies (including dev)
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build frontend + backend
RUN pnpm run build

# ── Stage 2: Production ──────────────────────────────────────────
FROM node:22-alpine AS production
WORKDIR /app

# Install pnpm for production deps
RUN npm install -g pnpm@10.4.1

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY patches/ ./patches/

# Install production dependencies only
RUN pnpm install --frozen-lockfile --prod

# Copy built artifacts from builder
COPY --from=builder /app/dist ./dist

# Expose port (DigitalOcean App Platform uses $PORT env var)
EXPOSE 8080

# Start the server
CMD ["node", "dist/index.js"]
