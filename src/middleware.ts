import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protect /admin and /api/admin routes
  if (path.startsWith("/admin") || path.startsWith("/api/admin")) {
    // Skip protection for login page and login API
    if (path === "/admin/login" || path === "/api/admin/login") {
      return NextResponse.next();
    }

    const authCookie = request.cookies.get("admin_auth");

    if (!authCookie || authCookie.value !== "true") {
      // If it's an API request, return 401
      if (path.startsWith("/api/")) {
        return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
      }
      // If it's a page request, redirect to login
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
