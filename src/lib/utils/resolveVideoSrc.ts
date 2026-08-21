import path from "node:path";

export interface ResolvedVideoSrc {
  src: string | undefined;
  isLocalHostedVideo: boolean;
  embedSrc: string | undefined;
}

export function resolveVideoSrc(
  src: string | undefined,
  provider: string,
  autoplay: boolean,
): ResolvedVideoSrc {
  const isLocalHostedVideo = Boolean(
    src?.includes("/videos/") && provider === "html5",
  );

  // Local videos are served as-is from `public/`, so they need the Astro base path prepended
  if (isLocalHostedVideo && src) {
    src = path.posix.join(import.meta.env.BASE_URL, src);
  }

  const dailymotionId = src?.match(
    /(?:dailymotion\.com\/video\/)?([^/?]+)$/,
  )?.[1];

  const embedSrc =
    provider === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${src}?rel=0&playsinline=1&autoplay=${autoplay ? 1 : 0}`
      : provider === "dailymotion"
        ? `https://www.dailymotion.com/embed/video/${dailymotionId}?autoplay=${autoplay ? 1 : 0}`
        : undefined;

  return { src, isLocalHostedVideo, embedSrc };
}
