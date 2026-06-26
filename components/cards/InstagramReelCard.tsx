import { useState } from "react";

interface InstagramReelCardProps {
  author: {
    name: string;
    handle: string;
    avatarUrl: string;
    verified?: boolean;
  };
  caption: string;
  mediaUrl?: string;
  mediaAlt?: string;
  timestamp: string;
  views?: string;
  likes: number;
  comments: number;
  reelUrl: string;
}

const InstagramLogo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const ReelIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
    <line x1="17" y1="17" x2="22" y2="17" />
  </svg>
);

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const VerifiedBadge = () => (
  <svg width="12" height="12" viewBox="0 0 40 40" fill="none">
    <defs>
      <linearGradient id="ig-verified" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4FC3F7" />
        <stop offset="100%" stopColor="#1565C0" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="20" fill="url(#ig-verified)" />
    <path d="M12 20l6 6 10-12" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const formatCount = (n: number): string => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
};

export default function InstagramReelCard({
  author,
  caption,
  mediaUrl,
  mediaAlt,
  timestamp,
  views,
  likes,
  comments,
  reelUrl,
}: InstagramReelCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={reelUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        padding: "16px",
        borderRadius: "12px",
        border: `1px solid ${hovered ? "rgb(180,180,180)" : "rgb(219,219,219)"}`,
        background: hovered ? "rgba(0,0,0,0.02)" : "#fff",
        transition: "border-color 0.2s, background 0.2s, transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 6px 24px rgba(0,0,0,0.08)" : "none",
        cursor: "pointer",
        maxWidth: "460px",
        width: "100%",
        boxSizing: "border-box",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
          {/* Avatar with gradient ring */}
          <div style={{
            padding: "2px",
            borderRadius: "50%",
            background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            flexShrink: 0,
          }}>
            <div style={{
              padding: "2px",
              borderRadius: "50%",
              background: "#fff",
            }}>
              <img
                src={author.avatarUrl}
                alt={author.name}
                style={{ width: "32px", height: "32px", borderRadius: "50%", display: "block" }}
              />
            </div>
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontWeight: 600,
              fontSize: "13px",
              color: "#0f1419",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{author.handle}</span>
              {author.verified && <VerifiedBadge />}
            </div>
            <div style={{ fontSize: "11px", color: "#737373" }}>{author.name}</div>
          </div>
        </div>
        <div style={{ color: "#737373", flexShrink: 0 }}>
          <InstagramLogo />
        </div>
      </div>

      {/* Media */}
      {mediaUrl && (
        <div style={{
          borderRadius: "8px",
          overflow: "hidden",
          marginBottom: "12px",
          position: "relative",
          aspectRatio: "9 / 16",
          flexShrink: 0,
          maxHeight: "320px",
        }}>
          <img
            src={mediaUrl}
            alt={mediaAlt ?? "Reel preview"}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.25)",
          }}>
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <PlayIcon />
            </div>
          </div>
          {/* Reel badge */}
          <div style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            background: "rgba(0,0,0,0.5)",
            borderRadius: "4px",
            padding: "3px 6px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            color: "#fff",
            fontSize: "10px",
            fontWeight: 600,
          }}>
            <ReelIcon /> Reel
          </div>
        </div>
      )}

      {/* Caption */}
      <p style={{
        fontSize: "13px",
        lineHeight: 1.5,
        color: "#0f1419",
        margin: "0 0 10px 0",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}>
        <span style={{ fontWeight: 600 }}>{author.handle}</span>{" "}
        {caption}
      </p>

      {/* Footer */}
      <div style={{ marginTop: "auto" }}>
        <div style={{
          fontSize: "11px",
          color: "#737373",
          marginBottom: "8px",
          paddingBottom: "8px",
          borderBottom: "1px solid rgb(219,219,219)",
        }}>
          {timestamp}{views && <> · <span style={{ fontWeight: 600, color: "#0f1419" }}>{views}</span> views</>}
        </div>

        <div style={{ display: "flex", gap: "14px", fontSize: "11px", color: "#737373" }}>
          {/* Likes */}
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            <span style={{ fontWeight: 500 }}>{formatCount(likes)}</span>
          </span>

          {/* Comments */}
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            <span style={{ fontWeight: 500 }}>{formatCount(comments)}</span>
          </span>
        </div>
      </div>
    </a>
  );
}