"use client";
import { Share2, Bookmark, Check } from 'lucide-react';
import { useState } from 'react';

export default function BlogActions({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing', err);
    }
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    // Simple mock bookmark logic
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    if (!bookmarked) {
      bookmarks.push({ title, url });
    } else {
      const index = bookmarks.findIndex((b: any) => b.url === url);
      if (index > -1) bookmarks.splice(index, 1);
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  };

  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <button 
        onClick={handleShare}
        className="btn" 
        style={{ 
          padding: '10px', 
          background: copied ? 'var(--success)' : 'var(--bg-color)', 
          border: '1px solid var(--card-border)',
          color: copied ? 'white' : 'inherit'
        }}
        title="Share Article"
      >
        {copied ? <Check size={18} /> : <Share2 size={18} />}
      </button>
      <button 
        onClick={handleBookmark}
        className="btn" 
        style={{ 
          padding: '10px', 
          background: bookmarked ? 'var(--accent-blue)' : 'var(--bg-color)', 
          border: '1px solid var(--card-border)',
          color: bookmarked ? 'white' : 'inherit'
        }}
        title="Bookmark Article"
      >
        <Bookmark size={18} fill={bookmarked ? "currentColor" : "none"} />
      </button>
    </div>
  );
}
