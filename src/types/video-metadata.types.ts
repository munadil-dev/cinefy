interface Thumbnail {
  url: string;
}

interface ChannelThumbnail {
  url: string;
}

export interface VideoMetadataType {
  type: string;
  title: string;
  videoId: string;
  channelId: string;
  viewCount: string;
  viewCountText: string;
  lengthText: string;
  channelTitle: string;
  channelHandle: string;
  thumbnail?: Thumbnail[];
  publishedTimeText: string;
  channelThumbnail?: ChannelThumbnail[];
}
