import { NextResponse } from "next/server";

/**
 * Note: This middleware run only on Node server or Edge Runtime like vercel
 * @type {import("next/server").NextMiddleware}
 */
export default async function _middleware(req, event) {
  const response = NextResponse.next();

  // this is example to append headers object at all request
  response.headers.set("X-Site-Name", "Arisris.con");
  return response;
}
