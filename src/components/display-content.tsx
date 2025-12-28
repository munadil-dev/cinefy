import { memo } from "react";
import { motion } from "framer-motion";
import VideoCard from "@/components/video-card";
import VideoCardLoader from "@/loaders/video-card-loader";
import { VideoMetadataType } from "@/types/video-metadata.types";

interface DisplayContentProps {
  data: VideoMetadataType[];
  isLoading: boolean;
}

const isValidVideo = (video: VideoMetadataType): boolean => {
  return video.type === "video";
};

const DisplayContent = memo(({ data, isLoading }: DisplayContentProps) => {
  const validVideos = data.filter(isValidVideo);

  return (
    <section>
      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          delay: 1,
          damping: 10,
          stiffness: 120,
        }}
      >
        {isLoading &&
          Array.from({ length: 6 }, (_, index) => {
            return <VideoCardLoader key={index} />;
          })}

        {validVideos.map((video) => {
          return <VideoCard key={video.videoId} videoMetadata={video} />;
        })}
      </motion.div>
    </section>
  );
});

export default DisplayContent;
