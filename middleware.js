import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.SECRET,
  });
  const isAuthenticated = !!token;

  //   if (request === "/") {
  //     return NextResponse.next(); // Proceed without any modifications
  //   }

  if (!token) return NextResponse.redirect(new URL("/", request.url));
  if (request === "/login" && isAuthenticated) {
    return NextResponse.redirect(new URL("/user", req.url));
  }
  // Check the role and redirect based on the role
  switch (token.role) {
    case "USER":
      if (!request.nextUrl.pathname.startsWith("/user")) {
        return NextResponse.redirect(new URL("/user", request.url));
      }
      break;
    case "VENDOR":
      if (!request.nextUrl.pathname.startsWith("/vendor")) {
        return NextResponse.redirect(new URL("/vendor", request.url));
      }
      break;
    case "ADMIN":
      // Add the paths that the nurse can access here
      if (!request.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
      break;
    default:
      return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    // Match all routes except the ones that start with /login and api and the static folder
    // "/((?!/|api|_next/static|_next/image|favicon.ico|login|register|about|contact|forgetPassword|register-vendor|verifyEmail|admin-login).*)",
    "/user",
    "/vendor",
    "/user/home",
    "/admin",
    "/vendor/completeRegistration",
    "/vendor/createTask",
  ],
};
