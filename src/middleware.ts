import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/api/auth/signin", request.url));
    }
    if (token.role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  if (pathname === "/api/auth/signin" && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token && pathname !== "/api/auth/signin") {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|api/auth).*)",
  ],
};
