import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { VideoMetadataType } from "@/types/video-metadata.types";

const VideoCard = ({ videoMetadata }: { videoMetadata: VideoMetadataType }) => {
  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/video?id=${videoMetadata.videoId}`);
  };

  return (
    <article className="flex flex-col gap-2">
      <motion.div
        className="relative cursor-pointer"
        role="button"
        aria-label="Play video"
        whileHover={{
          scale: 1.025,
        }}
        transition={{
          duration: 0.2,
        }}
        onClick={handleVideoClick}
      >
        <img
          className="aspect-video w-full rounded-xl"
          src={
            videoMetadata.thumbnail
              ? videoMetadata.thumbnail[videoMetadata.thumbnail.length - 1].url
              : ""
          }
          alt="Thumbnail"
        />

        {videoMetadata.lengthText !== "LIVE" && (
          <p className="absolute bottom-2 right-2 select-none rounded-md bg-black p-1 text-xs font-medium text-white">
            {videoMetadata.lengthText}
          </p>
        )}

        {videoMetadata.lengthText === "LIVE" && (
          <p className="absolute bottom-2 right-2 rounded-sm bg-red-500 px-2 text-xs font-semibold text-white">
            LIVE
          </p>
        )}
      </motion.div>

      <p className="break-words font-semibold">{videoMetadata.title}</p>

      <div className="flex items-center gap-2">
        <img
          className="h-7 w-7 rounded-full"
          src={videoMetadata.channelThumbnail?.[0]?.url}
          alt="Channel logo"
        />

        <Link
          className="cursor-pointer text-sm font-semibold text-red-600 hover:underline dark:text-red-500"
          to={`https://youtube.com/channel/${videoMetadata.channelId}`}
          target="_blank"
          aria-label="Visit channel"
        >
          {videoMetadata.channelHandle?.substring(0, 30) ??
            videoMetadata.channelTitle}
        </Link>
      </div>

      <div className="flex items-center gap-2 text-xs font-medium text-black/90 dark:text-white/80">
        {videoMetadata.lengthText !== "LIVE" && (
          <>
            <p>
              {videoMetadata.viewCountText
                ? videoMetadata.viewCountText
                : Intl.NumberFormat("en", { notation: "compact" }).format(
                    Number(videoMetadata.viewCount)
                  ) + " views"}
              {}
            </p>
            <p className="h-1 w-1 rounded-full bg-black/90 dark:bg-white/80"></p>
            <p>{videoMetadata.publishedTimeText}</p>
          </>
        )}
      </div>
    </article>
  );
};

export default VideoCard;
