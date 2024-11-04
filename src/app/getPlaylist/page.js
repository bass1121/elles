import styles from "./playlist.css"

export default async function getPlaylist() {
  const res = await fetch(`${process.env.API_URL}?part=snippet&playlistId=UU-HvkbTWtG_AC0d-PjQ-9YA&key=${process.env.API_KEY}&channelId=${process.env.CHANNEL_ID}&pageToken&maxResults=20`);
  const data = await res.json();
  console.log("data", data);
  
  return (
    console.log("data", data),
    <div className="playlist-wrapper">
      <h2>Recent Youtube Uploads</h2>
       <div className="video-container">
        <ul className="video_list">
          {data.items.map((item) => {
            const { id, snippet = {} } = item;
            const { title, thumbnails = {}, resourceId } = snippet;
            const { medium = {} } = thumbnails;
            return (
              <li key={id} className="video_card">
                <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                  <p className="video">
                    <img width={medium.width} height={medium.height} src={medium.url} alt="" />
                  </p>
                  <h3 className="video_title">{ title }</h3>
                </a>
              </li>
            ) 
          })}
        </ul>        
      </div> 
    </div>
  );
}