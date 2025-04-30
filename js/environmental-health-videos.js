const videoContainer = document.querySelector('#environmental-health-videos-container');
const videoUrl = '../json/environmental-health-videos.json';

function fetchVideos() {
    fetch(videoUrl)
        .then(res => res.json())
        .then(data => {
            displayVideos(data);
        });
}

function displayVideos(data) {
    if (!data.length) {
        return videoContainer.insertAdjacentHTML('beforeend', `
            <span>No Videos Found</span>
        `);
    }

    for (let i = 0; i < data.length; i++) {
        // Only include files that end with .mkv, .mp4, etc.
        const isVideo = /\.(mkv|mp4|webm)$/i.test(data[i].link);
        if (isVideo) {
            videoContainer.insertAdjacentHTML('beforeend', `
                <div class="video-container">
                    <video width="320" height="240" controls>
                        <source src="${data[i].link}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <p><b>${data[i].title}</b></p>
                </div>
            `);
        }
    }
}

fetchVideos();
