const videos = [
{
    name: 'Замыкания от и до',
    duration:15,
    id: 1
},
{
    name: 'Роадмеп',
    duration:15,
    id: 2
},
{
    name: 'JS JSX',
    duration:15,
    id: 3
}
]
export function VideoList(){
    return(
        <>
        
          <h1>Video List</h1>
            {videos.map((video)=> {
                return(
                    <div className="listItem" key={video.id}>
                        <p>{video.name}</p>
                        <p>{video.duration}</p>
                        <button>like</button>
                    </div>
                )
            })}
        </>
    )
}