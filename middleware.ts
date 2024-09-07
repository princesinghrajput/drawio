import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function middleware(request: NextRequest) {
  // Await the result of getKindeServerSession() to get the session
  const session = await getKindeServerSession();
  
  // Check if the session exists and the user is authenticated
  if (!session?.isAuthenticated) {
    return NextResponse.redirect(
      new URL('/api/auth/login?post_login_redirect_url=/dashboard', request.url)
    );
  }
  
  // Continue with the request if the user is authenticated
  return NextResponse.next();
}

// Configuration for matching the "/dashboard" path
export const config = {
  matcher: '/dashboard',
};
