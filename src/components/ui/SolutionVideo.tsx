interface SolutionVideoProps {
    src: string;
    title: string;
    enabled: boolean; // Hidden until every offering has its video
    poster?: string;
}

// Short (20–25s) product clip. Muted autoplay loop so it behaves like a moving screenshot.
export function SolutionVideo({ src, title, enabled, poster }: SolutionVideoProps) {
    if (!enabled) return null;

    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-gray-900">
            <video
                src={src}
                poster={poster}
                title={title}
                aria-label={`${title} product video`}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
            />
        </div>
    );
}
