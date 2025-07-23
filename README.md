# DevArmor Marketing Site

A modern marketing website built with [Astro](https://astro.build), featuring fast static deployment and secure preview environments.

## 🏗️ Build System

This site uses **static generation** to take advantage of Vercel's edge network for optimal performance:

- **Static Output**: All pages are pre-rendered at build time for lightning-fast delivery
- **Edge Deployment**: Content is served from Vercel's global edge network
- **No Serverless Functions**: Avoids cold starts and runtime issues for maximum reliability

## 🚀 Deployment Strategy

### Production (Main Branch)

- **Automatic Deployment**: Vercel automatically deploys the `main` branch to `devarmor.com`
- **Static Generation**: Uses `output: "static"` for optimal performance
- **Edge Network**: Content served from Vercel's global CDN

### Preview (Staging Branch)

- **Preview URL**: `staging` branch deploys to `preview.devarmor.com`
- **Password Protection**: Uses Vercel Pro's built-in password protection
- **Secure Access**: Only authorized team members can access preview deployments

## 🔐 Password Protection

### Production vs Preview

- **Production Site** (`devarmor.com`): No password protection - publicly accessible
- **Preview Site** (`preview.devarmor.com`): Password protected for team access

### Vercel Pro Features

- **Built-in Protection**: No custom code needed for preview authentication
- **Team Management**: Easy to add/remove team members with access
- **Secure**: Enterprise-grade security for your preview environments

## 🧪 Local Development

### Testing Password Protection Locally

```bash
# Start development server with full server functionality
pnpm dev
```

- Uses `astro.config.dev.mjs` with `output: "server"`
- Includes middleware and password protection
- Test at `http://localhost:4321` (will redirect to auth page)

### Testing Static Build Locally

```bash
# Build the static site (same as production)
pnpm build

# Preview the static build
pnpm preview
```

- Simulates exact production behavior
- No password protection (as expected in production)
- No middleware or server-side logic

### Development Scripts

```bash
pnpm dev          # Server mode with password protection (for testing)
pnpm dev:static   # Static mode (still runs middleware in dev)
pnpm build        # Build static site for production
pnpm preview      # Preview static build locally
```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layouts
├── pages/          # Route pages
├── content/        # Blog posts and team data
└── middleware.ts   # Authentication middleware (dev only)
```

## 🔧 Configuration Files

- **`astro.config.mjs`**: Production config (static output)
- **`astro.config.dev.mjs`**: Development config (server output)
- **`src/middleware.ts`**: Password protection middleware (dev only)

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start development server:**

   ```bash
   pnpm dev
   ```

3. **Build for production:**
   ```bash
   pnpm build
   ```

## 📝 Environment Variables

Create a `.env` file for local development:

```env
# Add any environment variables here
```

## 🔄 Deployment Workflow

1. **Development**: Work on feature branches
2. **Preview**: Push to `staging` branch → deploys to `preview.devarmor.com`
3. **Production**: Merge to `main` branch → deploys to `devarmor.com`

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Vercel](https://vercel.com)** - Deployment platform
- **TypeScript** - Type safety
- **MDX** - Markdown with JSX support

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
