import { VideoCard } from "./videocard"



const VIDEOS = [{
    title : "How to learn coding in 30 days | 30 day Code with me!",
    image : "maxresdefault.jpg",
    thumbImage : "tseries.png",
    author  : "Ritik Raj Yadav",
    views  : "100k",
    timestamp : "2 days ago"
},{
    title : "How to learn jumping in 30 days | 30 day Code with me!",
    image : "maxresdefault.jpg",
    thumbImage : "tseries.png",
    author  : "Ritik Raj Yadav",
    views  : "100k",
    timestamp : "2 days ago"
    },{
        title : "How to learn playing in 30 days | 30 day Code with me!",
        image : "maxresdefault.jpg",
        thumbImage : "tseries.png",
        author  : "Ritik Raj Yadav",
        views  : "100k",
        timestamp : "2 days ago"
    } ,{
        title : "How to learn playing in 30 days | 30 day Code with me!",
        image : "maxresdefault.jpg",
        thumbImage : "tseries.png",
        author  : "Ritik Raj Yadav",
        views  : "100k",
        timestamp : "2 days ago"
    },{
        title : "How to learn playing in 30 days | 30 day Code with me!",
        image : "maxresdefault.jpg",
        thumbImage : "tseries.png",
        author  : "Ritik Raj Yadav",
        views  : "100k",
        timestamp : "2 days ago"
    },{
        title : "How to learn playing in 30 days | 30 day Code with me!",
        image : "maxresdefault.jpg",
        thumbImage : "tseries.png",
        author  : "Ritik Raj Yadav",
        views  : "100k",
        timestamp : "2 days ago"
    },{
        title : "How to learn playing in 30 days | 30 day Code with me!",
        image : "maxresdefault.jpg",
        thumbImage : "tseries.png",
        author  : "Ritik Raj Yadav",
        views  : "100k",
        timestamp : "2 days ago"
    },{
        title : "How to learn playing in 30 days | 30 day Code with me!",
        image : "maxresdefault.jpg",
        thumbImage : "tseries.png",
        author  : "Ritik Raj Yadav",
        views  : "100k",
        timestamp : "2 days ago"
    },{
        title : "How to learn playing in 30 days | 30 day Code with me!",
        image : "maxresdefault.jpg",
        thumbImage : "tseries.png",
        author  : "Ritik Raj Yadav",
        views  : "100k",
        timestamp : "2 days ago"
    },{
        title : "How to learn playing in 30 days | 30 day Code with me!",
        image : "maxresdefault.jpg",
        thumbImage : "tseries.png",
        author  : "Ritik Raj Yadav",
        views  : "100k",
        timestamp : "2 days ago"
    },{
        title : "How to learn playing in 30 days | 30 day Code with me!",
        image : "maxresdefault.jpg",
        thumbImage : "tseries.png",
        author  : "Ritik Raj Yadav",
        views  : "100k",
        timestamp : "2 days ago"
    },{
        title : "How to learn playing in 30 days | 30 day Code with me!",
        image : "maxresdefault.jpg",
        thumbImage : "tseries.png",
        author  : "Ritik Raj Yadav",
        views  : "100k",
        timestamp : "2 days ago"
    },{
        title : "How to learn playing in 30 days | 30 day Code with me!",
        image : "maxresdefault.jpg",
        thumbImage : "tseries.png",
        author  : "Ritik Raj Yadav",
        views  : "100k",
        timestamp : "2 days ago"
    },{
        title : "How to learn playing in 30 days | 30 day Code with me!",
        image : "maxresdefault.jpg",
        thumbImage : "tseries.png",
        author  : "Ritik Raj Yadav",
        views  : "100k",
        timestamp : "2 days ago"
    },{
        title : "How to learn playing in 30 days | 30 day Code with me!",
        image : "maxresdefault.jpg",
        thumbImage : "tseries.png",
        author  : "Ritik Raj Yadav",
        views  : "100k",
        timestamp : "2 days ago"
    },{
        title : "How to learn playing in 30 days | 30 day Code with me!",
        image : "maxresdefault.jpg",
        thumbImage : "tseries.png",
        author  : "Ritik Raj Yadav",
        views  : "100k",
        timestamp : "2 days ago"
    }
]
export function VideoGrid(){
      return <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map(video => <div> 
                <VideoCard
                title = {video.title}
                image  = {video.image}
                thumbImage = {video.thumbImage}
                author = {video.author}
                views = {video.views}
                timestamp = {video.timestamp}>
                </VideoCard>
            </div>)}
      </div>
}