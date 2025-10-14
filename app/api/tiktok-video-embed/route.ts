import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json(
        { error: 'URL parameter is required' },
        { status: 400 }
      );
    }

    // Validate that it's a TikTok URL
    if (!url.includes('tiktok.com')) {
      return NextResponse.json(
        { error: 'Invalid TikTok URL' },
        { status: 400 }
      );
    }

    // Extract video ID from URL
    const videoIdMatch = url.match(/\/video\/(\d+)/);
    if (!videoIdMatch) {
      return NextResponse.json(
        { error: 'Could not extract video ID from URL' },
        { status: 400 }
      );
    }

    const videoId = videoIdMatch[1];
    const username = url.match(/@([^\/]+)/)?.[1] || 'user';

    // Return the data needed to render the TikTok embed
    return NextResponse.json({
      videoId: videoId,
      username: username,
      url: url
    });
  } catch (error) {
    console.error('Error processing TikTok video embed:', error);
    return NextResponse.json(
      { error: 'Failed to process TikTok video embed' },
      { status: 500 }
    );
  }
}