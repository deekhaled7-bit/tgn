'use client';

import { useEffect, useRef } from 'react';

interface TikTokEmbedProps {
  url: string;
  caption?: string;
}

export default function TikTokEmbed({ url, caption }: TikTokEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    
    // Add script to document
    document.body.appendChild(script);
    
    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  // Extract video ID from URL
  const videoId = url.match(/\/video\/(\d+)/)?.[1] || '';
  
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-md overflow-hidden" ref={containerRef}>
      <blockquote 
        className="tiktok-embed" 
        cite={url}
        data-video-id={videoId}
        style={{ maxWidth: '325px', minWidth: '325px' }}
        data-autoplay="false"
        data-muted="false"
      >
        <section></section>
      </blockquote>
    </div>
  );
}