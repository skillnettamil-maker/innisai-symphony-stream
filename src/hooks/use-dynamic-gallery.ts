import { useEffect, useState } from "react";
import { GALLERY_SETS, type GallerySet } from "@/data/site";

export const GALLERY_ENDPOINT = "/gallery/gallery.php";

type GalleryResponse = Record<string, string[]>;

/**
 * Returns the static numbered gallery sets, merged with any images found by the
 * PHP endpoint at runtime (images uploaded through cPanel/Bluehost File Manager).
 * Falls back silently to the static sets when the endpoint is unavailable (e.g. `npm run dev`).
 */
export function useDynamicGallery(): GallerySet[] {
  const [sets, setSets] = useState<GallerySet[]>(GALLERY_SETS);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(GALLERY_ENDPOINT, { headers: { Accept: "application/json" } });
        if (!res.ok) return;
        const data = (await res.json()) as GalleryResponse;
        if (cancelled || !data || typeof data !== "object") return;

        setSets(
          GALLERY_SETS.map((set) => {
            const extra = set.folder ? data[set.folder] : undefined;
            if (!Array.isArray(extra) || extra.length === 0) return set;
            const images = [...set.images, ...extra.filter((src) => !set.images.includes(src))];
            return { ...set, images };
          }),
        );
      } catch {
        // endpoint missing (dev server / static preview) – keep static images
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return sets;
}
