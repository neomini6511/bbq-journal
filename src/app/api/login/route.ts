import { NextRequest, NextResponse } from 'next/server';

const PASSWORD = process.env.PROTECTION_PASSWORD;

export async function POST(request: NextRequest) {
  if (!PASSWORD) {
    return NextResponse.json(
      { error: 'Password protection not configured' },
      { status: 500 }
    );
  }

  const { password } = await request.json();

  if (password === PASSWORD) {
    const response = NextResponse.json({ success: true });
    // Set cookie that lasts 7 days
    response.cookies.set('bbq-journal-auth', '1', {
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    });
    return response;
  }

  return NextResponse.json(
    { error: 'Invalid password' },
    { status: 401 }
  );
}