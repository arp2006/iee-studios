"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, Repeat2, Bookmark, Play } from "lucide-react";

export default function SocialPostCard() {
  return (
    <Link
      href="https://x.com/shensi/status/2059273388871516650"
      target="_blank"
      className="
        group flex h-full flex-col overflow-hidden rounded-3xl
        border border-black/10 bg-black/[0.02]
        p-5 transition-all duration-300
        hover:-translate-y-1
        hover:border-black/20
        hover:bg-black/[0.035]
        dark:border-white/10 dark:bg-white/[0.03]
        dark:hover:border-white/20 dark:hover:bg-white/[0.05]
      "
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src="https://pbs.twimg.com/profile_images/2012242313796259840/Q2fxc9nv_bigger.jpg"
            alt="Shensi Ding"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="truncate text-sm font-semibold text-black dark:text-white">
                Shensi Ding
              </p>

              {/* Verified badge */}
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-black dark:bg-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3 fill-white dark:fill-black"
                >
                  <path d="M9.55 18.2 4.8 13.45l1.4-1.4 3.35 3.35 8.25-8.25 1.4 1.4Z" />
                </svg>
              </div>
            </div>

            <p className="truncate text-xs text-black/50 dark:text-white/50">
              @shensi
            </p>
          </div>
        </div>

        {/* X logo */}
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0 fill-black/45 dark:fill-white/45"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>

      {/* Content */}
      <p
        className="
          mb-4 text-sm leading-relaxed text-black dark:text-white
          line-clamp-4
        "
      >
        Introducing Merge Gateway — Build Your Own Router.
        <br />
        <br />
        You're three sprints into your coding assistant.
        <br />
        You pick the most hyped model, integrate, test, deploy.
        <br />
        <br />
        A month later, a new model drops.
      </p>

      {/* Media */}
      <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl">
        <Image
          src="https://ycjvjlkxkfopguxymwci.supabase.co/storage/v1/object/public/directory-thumbnails/homepage/955963ad-ebbc-4ba6-9671-faa7339fe6bf/6c400405-c501-49a1-aa1f-ad582a0c3276.jpg"
          alt="Preview"
          fill
          className="
            object-cover transition-transform duration-500
            group-hover:scale-[1.02]
          "
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="
              flex h-12 w-12 items-center justify-center rounded-full
              bg-black/65 backdrop-blur-md
            "
          >
            <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <div
          className="
            mb-3 border-b border-black/10 pb-3
            text-xs text-black/50
            dark:border-white/10 dark:text-white/50
          "
        >
          7:00 AM · May 26, 2026 ·{" "}
          <span className="font-semibold text-black dark:text-white">
            2.6M
          </span>{" "}
          Views
        </div>

        <div
          className="
            flex flex-wrap gap-4 text-xs
            text-black/55 dark:text-white/55
          "
        >
          <div className="flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5" />
            <span className="font-medium">160</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Repeat2 className="h-3.5 w-3.5" />
            <span className="font-medium">495</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Heart className="h-3.5 w-3.5" />
            <span className="font-medium">1.6K</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Bookmark className="h-3.5 w-3.5" />
            <span className="font-medium">1.1K</span>
          </div>
        </div>
      </div>
    </Link>
  );
}