import csv
from flask import Flask, render_template

app = Flask(__name__)

# Function to read video links from 'Naruto.csv'
def read_video_links():
    video_links = []
    with open('Naruto.csv', newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            video_links.append({"title": row[0], "url": row[1]})
    return video_links

@app.route('/')
def index():
    # Read related videos from 'Naruto.csv'
    related_videos = read_video_links()
    return render_template('index.html', related_videos=related_videos)

@app.route('/video/<title>/<path:url>')
def video_page(title, url):
    # Read related videos from 'Naruto.csv'
    related_videos = read_video_links()
    return render_template('video_page.html', video_title=title, video_url=url, related_videos=related_videos)

if __name__ == '__main__':
    app.run(debug=True)
