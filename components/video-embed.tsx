interface VideoEmbedProps {
    videoId: string
    title?: string
}

export function VideoEmbed({ videoId, title = "Video player" }: VideoEmbedProps) {
    return (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg my-8 bg-gray-100 dark:bg-gray-800">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
            />
        </div>
    )
}
