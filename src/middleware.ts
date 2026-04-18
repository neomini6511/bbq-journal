import { NextRequest, NextResponse } from 'next/server';

const PASSWORD = process.env.PROTECTION_PASSWORD || '';

export function middleware(request: NextRequest) {
  // Allow access to login page and API login endpoint
  const path = request.nextUrl.pathname;
  if (path.startsWith('/api/login') || path === '/login') {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[middleware] Allowing access to', path);
    }
    return NextResponse.next();
  }

  // Check for auth cookie
  const authCookie = request.cookies.get('bbq-journal-auth');
  if (authCookie?.value === '1') {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[middleware] Auth cookie found, allowing', path);
    }
    return NextResponse.next();
  }

  if (process.env.NODE_ENV !== 'production') {
    console.log('[middleware] No auth cookie, redirecting to login from', path);
  }

  // Redirect to login page
  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('from', path);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|images/).*)',
  ],
};