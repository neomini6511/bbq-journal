'use client';

import dynamic from 'next/dynamic';
import { RecipeLink } from '@/data/recipes';

// Dynamically import YouTubeEmbed to avoid SSR
const YouTubeEmbed = dynamic(
  () => import('@/components/youtube-embed'),
  { ssr: false }
);

function isYouTubeLink(url: string): boolean {
  return /youtu\.?be/.test(url);
}

interface SourcesSectionProps {
  sourceLinks: RecipeLink[];
}

export default function SourcesSection({ sourceLinks }: SourcesSectionProps) {
  return (
    <div className="sources-grid">
      {sourceLinks.map((link) => {
        const isYouTube = isYouTubeLink(link.href);
        if (isYouTube) {
          return (
            <div key={link.href} className="youtube-source">
              <YouTubeEmbed url={link.href} title={link.label} />
            </div>
          );
        }
        return (
          <div key={link.href} className="text-source">
            <a href={link.href} target="_blank" rel="noreferrer noopener">
              {link.label}
            </a>
          </div>
        );
      })}
    </div>
  );
}