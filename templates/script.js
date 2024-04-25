// Code for fetching and displaying video list
fetch('data/Naruto.csv')
  .then(response => response.text())
  .then(csvData => {
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');
    const videoList = document.getElementById('video-list');

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      if (values.length === headers.length) {
        const videoTitle = values[0].trim();
        const videoUrl = values[2].trim();

        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
          <h2>${videoTitle}</h2>
          <button onclick="playVideo('${videoTitle}', '${videoUrl}')">Play</button>
        `;
        videoList.appendChild(videoItem);
      }
    }
  });

// Function to play video
function playVideo(title, url) {
  window.location.href = `video_page.html?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
}

// Code for reading video links from 'Naruto.csv' in JavaScript
function readVideoLinks() {
  const results = [];
  fetch('data/Naruto.csv')
    .then(response => response.text())
    .then(csvData => {
      const lines = csvData.split('\n');
      const headers = lines[0].split(',');

      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        if (values.length === headers.length) {
          const obj = {};
          for (let j = 0; j < headers.length; j++) {
            obj[headers[j].trim()] = values[j].trim();
          }
          results.push(obj);
        }
      }
      console.log(results);
      // Process the parsed CSV data here
    });
}
