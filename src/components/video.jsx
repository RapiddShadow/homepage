import video from "../assets/welcome.mp4"

const VideoComp = () => {
    return(
        <video className="videos" src={video} autoPlay loop muted aria-label="Introduction video by Siddharth, typing in a code editor">
            <track kind="captions" src="captions.vtt" default srclang="en" label="English"/>
        </video>
    )
}


export default VideoComp;