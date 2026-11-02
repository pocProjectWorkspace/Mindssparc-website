interface SolutionVideoProps {
    src: string;
    title: string;
    enabled: boolean; // Lets callers keep a video wired up but hidden
    poster?: string;
}

// Narrated product demo. Click-to-play with a poster frame; only metadata is fetched until the visitor presses play.
export function SolutionVideo({ src, title, enabled, poster }: SolutionVideoProps) {
    if (!enabled) return null;

    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-gray-900">
            <video
                src={src}
                poster={poster}
                title={title}
                aria-label={`${title} product video`}
                className="h-full w-full object-contain"
                playsInline
                controls
                preload="metadata"
            />
        </div>
    );
}
