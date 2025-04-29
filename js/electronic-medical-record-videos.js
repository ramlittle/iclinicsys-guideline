const VideosContainer=document.querySelector('#electronic-medical-record-videos-container');
const videoUrl = '../json/electronic-medical-record-videos.json';

function fetchData(){
    fetch(videoUrl)
    .then(res=>res.json())
    .then(data=>{
       displayData(data);
    })
}

function displayData(data){
    if(!data.length){
        return VideosContainer.insertAdjacentHTML('beforeend',`
            <span>No Menu List Found</span>
        `)
    }
    //display menu list here
    for(let i=0;i<data.length;i++){
        VideosContainer.insertAdjacentHTML('beforeend',`
            <div style="margin-bottom: 20px;">
                <p><strong>${data[i].title}</strong></p>
                <video width="480" controls>
                    <source src="${data[i].link}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `)
    }
}

//Obtain Menu and Display
fetchData();