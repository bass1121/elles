const channelId = process.env.YOUTUBE_CHANNEL_ID;
const API_URL = process.env.YOUTUBE_API_URL;
const API_KEY = process.env.YOUTUBE_API_KEY;

export default async function getPlaylist() {
  const res = await fetch(API_URL);
  const data = await res.json();
  
  return (
    console.log("data", data),
    <div>
      <h1>Videos</h1>
      <div>


      </div>
    </div>
  );
}