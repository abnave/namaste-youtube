//const GOOGLE_API_KEY = "AIzaSyA4TjlRQxYvU5ZIJkhVdCIr1OVM8AwgeoA";
const GOOGLE_API_KEY = "AIzaSyA31_dePV0wcBryjOu18VgGBdT7MxG28ig";
export const YOUTUBE_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const RELATED_SEARCH =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=17&type=video&key=" +
  GOOGLE_API_KEY +
  "&relatedToVideoId=";

export const SEARCH_BY_CHANNEL_ID = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;
export const YOUTUBE_SEARCH_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;

export const LIVE_CHAT_COUNT = 25;
// GET [YOUR_API_KEY] HTTP/1.1
