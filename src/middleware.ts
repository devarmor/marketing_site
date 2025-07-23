import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  // Apply to preview domain or localhost for testing
  if (context.url.hostname === 'preview.devarmor.com' || context.url.hostname === 'localhost') {
    // Skip auth check for the auth page itself
    if (context.url.pathname === '/auth') {
      return next();
    }

    // Check if user is authenticated
    const authCookie = context.cookies.get('preview-auth');
    const isAuthenticated = authCookie?.value === 'true';

    // If not authenticated, redirect to auth page
    if (!isAuthenticated) {
      return context.redirect('/auth');
    }
  }

  return next();
}); 