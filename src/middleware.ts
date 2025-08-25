import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  // Only apply to preview domain (not localhost)
  if (context.url.hostname === 'preview.devarmor.com') {
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