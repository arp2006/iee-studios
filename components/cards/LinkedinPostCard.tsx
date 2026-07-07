import { useState } from "react";

interface LinkedInPostCardProps {
  author: {
    name: string;
    headline: string; // e.g. "Product Designer at Acme · 2nd"
    avatarUrl: string;
    verified?: boolean;
  };
  content: string;
  mediaUrl?: string;
  mediaAlt?: string;
  timestamp: string; // e.g. "2h" or "1d"
  reactions: number;
  comments: number;
  reposts: number;
  postUrl: string;
}

const LinkedInLogo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const VerifiedBadge = () => (
  <svg width="14" height="14" viewBox="0 0 22 22" fill="#0a66c2">
    <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.853-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.69-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.636.433 1.221.878 1.69.47.446 1.055.752 1.69.883.635.13 1.294.083 1.902-.14.272.587.7 1.086 1.24 1.44s1.167.551 1.813.568c.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.223 1.26.27 1.89.14.63-.134 1.212-.438 1.68-.884.468-.47.77-1.055.9-1.69.134-.636.085-1.294-.137-1.9.586-.273 1.084-.706 1.438-1.246.355-.54.552-1.17.57-1.817z" />
    <path d="M9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" fill="#fff" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.542 8.5h2.026c.1 1.5.42 2.878.902 3.99A6.51 6.51 0 011.542 8.5zm0-1a6.51 6.51 0 013.928-4.99c-.482 1.112-.802 2.49-.902 3.99H1.542zM8 1.008c.694.833 1.35 2.281 1.554 4.492H6.446C6.65 3.289 7.306 1.841 8 1.008zM6.386 8.5h3.228c-.09 1.545-.42 2.844-.898 3.897C8.29 13.086 7.999 13.5 7.999 13.5s-.29-.414-.716-1.103c-.478-1.053-.808-2.352-.898-3.897zm0-1c.09-1.545.42-2.844.898-3.897C7.71 2.914 8 2.5 8 2.5s.29.414.716 1.103c.478 1.053.808 2.352.898 3.897H6.386zM10.53 3.51a6.51 6.51 0 013.928 4.99h-2.026c-.1-1.5-.42-2.878-.902-3.99zm.902 4.99h2.026a6.51 6.51 0 01-3.928 4.99c.482-1.112.802-2.49.902-3.99zM4.568 12.49c-.482-1.112-.802-2.49-.902-3.99H1.64a6.51 6.51 0 003.928 4.99z" />
  </svg>
);

const ReactionIcons = () => (
  <div style={{ display: "flex", marginRight: "6px" }}>
    <span style={{
      width: "16px", height: "16px", borderRadius: "50%",
      background: "#0a66c2", display: "flex", alignItems: "center",
      justifyContent: "center", zIndex: 3, border: "1.5px solid #fff",
    }}>
      <svg width="10" height="10" viewBox="0 0 16 16" fill="#fff">
        <path d="M6.5 3.5C6.5 2 7.5 1 8.5 1c.7 0 1.2.6 1.2 1.4 0 .5-.1 1-.3 1.6h2.4c.9 0 1.6.8 1.4 1.7l-1 5c-.2.9-.9 1.3-1.7 1.3H4.5V6.2c1-.3 1.9-1.4 2-2.7zM3.5 6H2c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h1.5V6z" />
      </svg>
    </span>
    <span style={{
      width: "16px", height: "16px", borderRadius: "50%",
      background: "#e06847", display: "flex", alignItems: "center",
      justifyContent: "center", marginLeft: "-5px", zIndex: 2, border: "1.5px solid #fff",
    }}>
      <svg width="10" height="10" viewBox="0 0 16 16" fill="#fff">
        <path d="M8 14.5s6-4 6-8.3C14 3.9 12.4 2.3 10.5 2.3c-1 0-1.9.5-2.5 1.3-.6-.8-1.5-1.3-2.5-1.3C3.6 2.3 2 3.9 2 6.2c0 4.3 6 8.3 6 8.3z" />
      </svg>
    </span>
    <span style={{
      width: "16px", height: "16px", borderRadius: "50%",
      background: "#f5bb5c", display: "flex", alignItems: "center",
      justifyContent: "center", marginLeft: "-5px", zIndex: 1, border: "1.5px solid #fff",
    }}>
      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#333" strokeWidth="1.3">
        <circle cx="8" cy="8" r="6.5" fill="#f5bb5c" stroke="none" />
        <path d="M5.5 10c.6.7 1.4 1 2.5 1s1.9-.3 2.5-1" strokeLinecap="round" />
        <circle cx="5.7" cy="6.3" r="0.8" fill="#333" stroke="none" />
        <circle cx="10.3" cy="6.3" r="0.8" fill="#333" stroke="none" />
      </svg>
    </span>
  </div>
);

const CommentIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M7 8.5h10M7 12h6.5M21 12c0 4.556-4.03 8.25-9 8.25a9.9 9.9 0 01-3.535-.65L3 21l1.284-3.457C3.47 16.312 3 14.699 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>
);

const RepostIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M6 4.5v9a3 3 0 003 3h9M9 13.5L6 16.5 3 13.5" />
    <path d="M18 19.5v-9a3 3 0 00-3-3H6M15 10.5l3-3 3 3" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M21.5 2.5L11 13" />
    <path d="M21.5 2.5l-7 19-4-8-8-4z" />
  </svg>
);

const MoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="5" cy="12" r="1.6" />
    <circle cx="12" cy="12" r="1.6" />
    <circle cx="19" cy="12" r="1.6" />
  </svg>
);

const formatCount = (n: number): string => {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;
  return String(n);
};

export default function LinkedInPostCard({
  author,
  content,
  mediaUrl,
  mediaAlt,
  timestamp,
  reactions,
  comments,
  reposts,
  postUrl,
}: LinkedInPostCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={postUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        padding: "16px",
        borderRadius: "8px",
        border: `1px solid ${hovered ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.15)"}`,
        background: "#ffffff",
        boxShadow: hovered
          ? "0 4px 12px rgba(0,0,0,0.12)"
          : "0 1px 2px rgba(0,0,0,0.04)",
        transition: "border-color 0.2s, box-shadow 0.2s",
        cursor: "pointer",
        maxWidth: "540px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", minWidth: 0 }}>
          <img
            src={author.avatarUrl}
            alt={author.name}
            style={{ width: "48px", height: "48px", borderRadius: "50%", flexShrink: 0, objectFit: "cover" }}
          />
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontWeight: 600,
              fontSize: "14px",
              color: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              lineHeight: 1.3,
            }}>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {author.name}
              </span>
              {author.verified && <VerifiedBadge />}
            </div>
            <div style={{
              fontSize: "12px",
              color: "rgba(0,0,0,0.6)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              lineHeight: 1.3,
            }}>
              {author.headline}
            </div>
            <div style={{
              fontSize: "12px",
              color: "rgba(0,0,0,0.6)",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              marginTop: "2px",
            }}>
              <span>{timestamp}</span>
              <GlobeIcon />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(0,0,0,0.6)", flexShrink: 0 }}>
          <MoreIcon />
        </div>
      </div>

      {/* Content */}
      <p style={{
        fontSize: "14px",
        lineHeight: 1.4,
        color: "rgba(0,0,0,0.9)",
        margin: "0 0 12px 0",
        whiteSpace: "pre-wrap",
        display: "-webkit-box",
        WebkitLineClamp: 5,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}>
        {content}
      </p>

      {/* Media */}
      {mediaUrl && (
        <div style={{
          borderRadius: "4px",
          overflow: "hidden",
          marginBottom: "12px",
          maxHeight: "260px",
          flexShrink: 0,
          border: "1px solid rgba(0,0,0,0.08)",
        }}>
          <img
            src={mediaUrl}
            alt={mediaAlt ?? "Post media"}
            style={{ width: "100%", height: "100%", maxHeight: "260px", objectFit: "cover", display: "block" }}
          />
        </div>
      )}

      {/* Engagement summary */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "12px",
        color: "rgba(0,0,0,0.6)",
        paddingBottom: "8px",
        marginBottom: "4px",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ReactionIcons />
          <span>{formatCount(reactions)}</span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <span>{formatCount(comments)} comments</span>
          <span>{formatCount(reposts)} reposts</span>
        </div>
      </div>

      {/* Action bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: "2px",
        color: "rgba(0,0,0,0.6)",
      }}>
        <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, padding: "8px 12px", borderRadius: "4px" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M7 22V11M2 13v7a2 2 0 002 2h12.5a2 2 0 002-1.6l1.35-6.5A2 2 0 0017.9 12H14V6a2 2 0 00-2-2h-.5L7 11" />
          </svg>
          Like
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, padding: "8px 12px", borderRadius: "4px" }}>
          <CommentIcon />
          Comment
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, padding: "8px 12px", borderRadius: "4px" }}>
          <RepostIcon />
          Repost
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, padding: "8px 12px", borderRadius: "4px" }}>
          <SendIcon />
          Send
        </span>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px", color: "rgba(0,0,0,0.3)" }}>
        <LinkedInLogo />
      </div>
    </a>
  );
}