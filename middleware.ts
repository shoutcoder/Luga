import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Your admin-only routes
const adminRoutes = [
  "/dashboard",
  "/faq",
  "/edit-pricing",
  "/heroBanner",
  "/services",
  "/testimonial",
  "/visit-us"
];

// Function to safely decode base64 JSON token payload
function decodePayload(token: string) {
  try {
    const payloadBase64 = token.split(".")[1];
    const decoded = JSON.parse(atob(payloadBase64));
    return decoded;
  } catch (error) {
    console.error("Failed to decode token payload:", error);
    return null;
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

    const token = req.cookies.get("token")?.value;

    if (!token) {
      // No token: redirect to login

      return NextResponse.redirect(new URL("/login", req.url));
    }
  // Check if it's an admin protected route
  if (adminRoutes.some((route) => pathname.startsWith(route))) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      // No token: redirect to login
    //   console.log("No token found, redirecting to login...");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    const decoded = decodePayload(token);
    // console.log("decoded",decoded)

    if (!decoded || decoded.role !== "ADMIN") {
      // No role or wrong role
    //   console.log("No ADMIN role or wrong role, redirecting...");
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Role verified
    return NextResponse.next();
  }

  // Not a protected route
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/faq",
    "/edit-pricing",
    "/heroBanner",
    "/services",
    "/testimonial",
    "/visit-us"
  ],
};
