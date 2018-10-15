import React from "react";

const VideoDetails = ({ video }) => {
  if(!video){
    return <div>Loading....</div>
  }
    const videoId = video.id.videoId;
    const url = `http://www.youtube.com/embed/${videoId}`
  return (
    <div className="video-detail col-md-8 col-sm-12">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allowFullScreen frameborder="0"/>
      </div>
      <div>
        <div className="title">{video.snippet.title}</div>
        <div className="details">{video.snippet.description}</div>
      </div>
    </div>
  );
};
export default VideoDetails;
