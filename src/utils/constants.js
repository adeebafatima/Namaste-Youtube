const API_KEY = "AIzaSyC4TQDCNoV_T7M6MJ-T33M7pu-SHnjmvfo";

export const YOUTUBE_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  API_KEY;
