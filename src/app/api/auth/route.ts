import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request body
    const { email, password } = await req.json();

    // Call the external API for login
    const response = await fetch('https://dia-backend.numbersprotocol.io/api/v3/auth/token/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    // If the API response is not ok (e.g., 400 or 500), throw an error
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || 'Login failed');
    }

    // Parse the successful response
    const data = await response.json();
    const { auth_token } = data
    console.log("auth_token", auth_token)

    const res = NextResponse.json(data)

    res.cookies.set('auth_token', auth_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7,
    });

    // You can store the token, user info, etc. here or pass it back to the client
    return res;
  } catch (error) {
    console.error('Login failed:', error);

    // Return an error response with a relevant message
    return NextResponse.json(
      { message: 'Something went wrong during the login process.' },
      { status: 500 }
    );
  }
}
