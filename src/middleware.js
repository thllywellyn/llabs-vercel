import { NextResponse } from 'next/server'

export function middleware(request) {
  // Get the origin from the request headers
  const origin = request.headers.get('origin') || '*'

  // Define allowed origins
  const allowedOrigins = [
    'https://lsanalab.xyz',
    'http://localhost:3000',
    // Add any other origins you want to allow
  ]

  // Check if the origin is allowed
  const isAllowedOrigin = allowedOrigins.includes(origin) || origin === '*'

  // Handle preflight OPTIONS request
  if (request.method === 'OPTIONS') {
    return NextResponse.json({}, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': isAllowedOrigin ? origin : '',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
      },
    })
  }

  // Handle actual request
  const response = NextResponse.next()

  // Add CORS headers to response
  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }
  
  return response
}

export const config = {
  matcher: '/api/:path*',
}