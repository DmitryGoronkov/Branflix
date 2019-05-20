const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const shortId = require('shortid');
const vidList = require('./data/vidList.js');
const mainVideos = require('./data/mainVideos.js');
const url = `http://localhost:8080`;

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cors());
app.use(express.static('assets'));

const formatVidList = video => ({
    ...video,
    image: `${url}/${video.image}`,
    link: `${url}/videos/${video.id}`
});
const formatMainVideo = video => ({
    ...video,
    image: `${url}/${video.image}`
})

const getVideoList = (req, res) => {
    res.json(vidList.map(formatVidList))
}
const getMainVideo = (req, res) => {
    const singleVideo = mainVideos.find(video => video.id === req.params.id);
    let formatedSingleVideo = {};
    if (!singleVideo) {
        res.status(404).json({ error: 'No video with that ID was found' });
    } else {
        formatedSingleVideo = formatMainVideo(singleVideo);
    }
    res.json(formatedSingleVideo);
}
const createNewVideo = (req, res) => {
    const {title, description} = req.body;
    const newVideo = {
        id: shortId.generate(),
        title: title,
        channel: "Mohan Muruge",
        image: "Upload.jpg",
        description: description,
        views: "0",
        likes: "0",
        duration: "0:20",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: Date.now(),
        comments:[]
    };
    const newVideoList = {
        id: newVideo.id,
        title: title,
        channel: "Mohan Muruge",
        image: "Upload.jpg"
    }
    mainVideos.push(newVideo);
    vidList.push(newVideoList);
    res.json(formatMainVideo(newVideo));
}
const postComment = (req, res) => {
    const targetVideo = mainVideos.find(video => video.id === req.params.id);
    let updatedVideo = targetVideo;
    updatedVideo.comments.push(req.body);
    res.json(updatedVideo);
}
const addLike = (req, res) => {
    const targetVideo = mainVideos.find(video => video.id === req.params.id);
    let updatedVideo = Object.assign(targetVideo, req.body);
    res.json(updatedVideo);
}

app.get('/videos', getVideoList);
app.get('/videos/:id', getMainVideo);
app.put('/videos/:id', postComment);
app.post('/videos', createNewVideo);
app.put('/videos/:id/likes', addLike);

app.listen(port, () => {
    console.log(`This server is listening on the ${port} port`)
});