import { useState } from "react";

interface TweetCardProps {
  author: {
    name: string;
    handle: string;
    avatarUrl: string;
    verified?: boolean;
  };
  content: string;
  mediaUrl?: string;
  mediaAlt?: string;
  timestamp: string;
  views: string;
  replies: number;
  retweets: number;
  likes: number;
  bookmarks: number;
  tweetUrl: string;
}

const VerifiedBadge = () => (
  <svg width="14" height="14" viewBox="0 0 22 22" fill="#000">
    <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.853-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.69-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.636.433 1.221.878 1.69.47.446 1.055.752 1.69.883.635.13 1.294.083 1.902-.14.272.587.7 1.086 1.24 1.44s1.167.551 1.813.568c.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.223 1.26.27 1.89.14.63-.134 1.212-.438 1.68-.884.468-.47.77-1.055.9-1.69.134-.636.085-1.294-.137-1.9.586-.273 1.084-.706 1.438-1.246.355-.54.552-1.17.57-1.817z" />
    <path d="M9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" fill="#fff" />
  </svg>
);

const XLogo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const formatCount = (n: number): string => {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
};

export default function TweetCard({
  author,
  content,
  mediaUrl,
  mediaAlt,
  timestamp,
  views,
  replies,
  retweets,
  likes,
  bookmarks,
  tweetUrl,
}: TweetCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={tweetUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        padding: "20px",
        borderRadius: "16px",
        border: `1px solid ${hovered ? "rgba(0,0,0,0.18)" : "rgba(0,0,0,0.08)"}`,
        background: hovered ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.02)",
        transition: "border-color 0.2s, background 0.2s, transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 6px 24px rgba(0,0,0,0.08)" : "none",
        cursor: "pointer",
        maxWidth: "520px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
          <img
            src={author.avatarUrl}
            alt={author.name}
            style={{ width: "36px", height: "36px", borderRadius: "50%", flexShrink: 0 }}
          />
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontWeight: 600,
              fontSize: "14px",
              color: "#0f1419",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{author.name}</span>
              {author.verified && <VerifiedBadge />}
            </div>
            <div style={{ fontSize: "12px", color: "#536471", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              @{author.handle}
            </div>
          </div>
        </div>
        <div style={{ color: "#536471", flexShrink: 0 }}>
          <XLogo />
        </div>
      </div>

      {/* Content */}
      <p style={{
        fontSize: "14px",
        lineHeight: 1.5,
        color: "#0f1419",
        margin: "0 0 12px 0",
        whiteSpace: "pre-wrap",
        display: "-webkit-box",
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}>
        {content}
      </p>

      {/* Media */}
      {mediaUrl && (
        <div style={{
          borderRadius: "12px",
          overflow: "hidden",
          marginBottom: "12px",
          position: "relative",
          aspectRatio: "16 / 9",
          flexShrink: 0,
        }}>
          <img
            src={mediaUrl}
            alt={mediaAlt ?? "Media"}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.35)",
          }}>
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <PlayIcon />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{ marginTop: "auto" }}>
        <div style={{
          fontSize: "12px",
          color: "#536471",
          marginBottom: "10px",
          paddingBottom: "10px",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}>
          {timestamp} · <span style={{ fontWeight: 600, color: "#0f1419" }}>{views}</span> Views
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", fontSize: "11px", color: "#536471" }}>
          {/* Replies */}
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            <span style={{ fontWeight: 500 }}>{formatCount(replies)}</span>
          </span>

          {/* Retweets */}
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M17 1l4 4-4 4" />
              <path d="M3 11V9a4 4 0 014-4h14" />
              <path d="M7 23l-4-4 4-4" />
              <path d="M21 13v2a4 4 0 01-4 4H3" />
            </svg>
            <span style={{ fontWeight: 500 }}>{formatCount(retweets)}</span>
          </span>

          {/* Likes */}
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            <span style={{ fontWeight: 500 }}>{formatCount(likes)}</span>
          </span>

          {/* Bookmarks */}
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
            <span style={{ fontWeight: 500 }}>{formatCount(bookmarks)}</span>
          </span>
        </div>
      </div>
    </a>
  );
}

// Example usage / demo
export function TweetCardDemo() {
  return (
    <div style={{ padding: "40px", display: "flex", justifyContent: "center", fontFamily: "sans-serif" }}>
      <TweetCard
        author={{
          name: "Shensi Ding",
          handle: "shensi",
          avatarUrl: "https://pbs.twimg.com/profile_images/2012242313796259840/Q2fxc9nv_bigger.jpg",
          verified: true,
        }}
        content={`Introducing Merge Gateway - Build Your Own Router.\n\nYou're three sprints into your coding assistant. You pick the most hyped model, integrate, test, deploy. A month later, a new model drops. Now you re-test, re-integrate, re-deploy. Your product didn't change, but the`}
        mediaUrl="https://ycjvjlkxkfopguxymwci.supabase.co/storage/v1/object/public/directory-thumbnails/homepage/955963ad-ebbc-4ba6-9671-faa7339fe6bf/6c400405-c501-49a1-aa1f-ad582a0c3276.jpg"
        mediaAlt="Launch preview"
        timestamp="7:00 AM · May 26, 2026"
        views="2.6M"
        replies={160}
        retweets={495}
        likes={1600}
        bookmarks={1100}
        tweetUrl="https://x.com/shensi/status/2059273388871516650"
      />
    </div>
  );
}