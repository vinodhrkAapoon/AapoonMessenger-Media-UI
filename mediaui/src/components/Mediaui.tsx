import React, { useState, useRef } from "react";
import { Gallery } from "react-grid-gallery";
import { images, CustomImage } from "./images";
import {
  Button,
  Box,
  Tabs,
  Tab,
  Divider,
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Link,
  IconButton,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleRoundedIcon from '@mui/icons-material/PauseCircleRounded';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HeadsetIcon from "@mui/icons-material/Headset";
import Modal from "react-modal";
import "./Mediaui.scss";
import { CloseOutlined } from "@mui/icons-material";

Modal.setAppElement("#root");

interface Video {
  videoUrl: string;
  title: string;
  thumbnailUrl: string;
}

const MediaUI = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [index, setIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isAudio, setIsAudio] = useState<number | null>(null);
  const [isDocument, setIsDocument] = useState(false);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const prevIndex = (index + images.length - 1) % images.length;

  const handleClick = (index: number, item: CustomImage) => {
    setIndex(index);
    setModalOpen(true);
  };
  const handleOpen = () => setOpen(true);
  const handleCloseModal = () => {
    setOpen(false);
    setModalOpen(false);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleVideoClick = (video: any) => {
    setSelectedVideo(video);
    setVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setVideoModalOpen(false);
    setSelectedVideo(null);
  };
  const handleOpenDocument = (file: any) => {
    setIsDocument(file);
    setOpen(true);
  };
  const handleDocumentClose = () => {
    setIsDocument(false);
  };
  const handlePrev = () => {
    setIndex(prevIndex);
  };
  const handleNext = () => {
    setIndex(nextIndex);
  };
  const handleCloseImageModal = () => {
    setModalOpen(false);
  };
  const pdfFiles = [
    {
      id: 1,
      title: "Document 1",
      content: "This is the content of document 1.",
      name: "XML",
      ref: React.createRef(),
    },
    {
      id: 2,
      title: "Document 2",
      content: "This is the content of document 2.",
      name: "DOC",
      ref: React.createRef(),
    },
    {
      id: 3,
      title: "Document 3",
      content: "This is the content of document 3.",
      name: "PDF",
      ref: React.createRef(),
    },
    {
      id: 4,
      title: "Document 4",
      content: "This is the content of document 4.",
      name: "DOC",
      ref: React.createRef(),
    },
    {
      id: 5,
      title: "Document 5",
      content: "This is the content of document 5.",
      name: "PDF",
      ref: React.createRef(),
    },
    {
      id: 6,
      title: "Document 6",
      content: "This is the content of document 6.",
      name: "XML",
      ref: React.createRef(),
    },
  ];

  const videoItems = [
    {
      id: "1",
      title: "Big Buck Bunny",
      thumbnailUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "Vlc Media Player",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      subscriber: "25254545 Subscribers",
      isLive: true,
    },
    {
      id: "2",
      title: "The first Blender Open Movie from 2006",
      thumbnailUrl:
        "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
      duration: "12:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "Blender Inc.",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      description:
        "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      subscriber: "25254545 Subscribers",
      isLive: true,
    },
    {
      id: "3",
      title: "For Bigger Blazes",
      thumbnailUrl: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "T-Series Regional",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      description:
        "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      subscriber: "25254545 Subscribers",
      isLive: true,
    },
    {
      id: "4",
      title: "For Bigger Escape",
      thumbnailUrl:
        "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "T-Series Regional",
      videoUrl:
        " https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      subscriber: "25254545 Subscribers",
      isLive: false,
    },
  ];

  const audioItems = [
    {
      title: "Sample Audio 1",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "Sample Audio 2",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "Sample Audio 3",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
  ];

  const links = [
    {
      id: 1,
      title: "Google",
      url: "https://www.google.com",
    },
    {
      id: 2,
      title: "Facebook",
      url: "https://www.facebook.com",
    },
    {
      id: 3,
      title: "Twitter",
      url: "https://www.twitter.com",
    },
    {
      id: 4,
      title: "Instagram",
      url: "https://www.instagram.com",
    },
    {
      id: 5,
      title: "LinkedIn",
      url: "https://www.linkedin.com",
    },
  ];
  const audioRefs = useRef(
    audioItems.map(() => React.createRef<HTMLAudioElement>())
  );
  const handlePlayPause = (index: number) => {
    const currentAudio = audioRefs.current[index].current;

    if (currentAudio) {
      if (currentAudio.paused) {
        currentAudio.play();
        setIsAudio(index);
      } else {
        currentAudio.pause();
        setIsAudio(null);
      }
    }
  };
  const tabPanels = [
    <Box key={0} sx={{ height: 500 }}>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Modal
        isOpen={modalOpen}
        onRequestClose={handleCloseImageModal}
        style={{
          content: {
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            height: "80%",
            padding: "2rem",
            margin: "auto",
            position: "relative",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
      >
        <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
          {currentImage && (
            <>
              <img
                src={currentImage.original}
                alt={currentImage.alt}
                style={{ width: "100%", height: "auto", cursor: "pointer" }}
              />
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  color: "white",
                  zIndex: 10,
                }}
              >
                <ArrowBackIosIcon  className="imagePreviousArrow"/>
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  color: "white",
                  zIndex: 10,
                }}
              >
                <ArrowForwardIosIcon className="imagePreviousArrow"/>
              </IconButton>
            </>
          )}
        </Box>
        <IconButton
          onClick={handleCloseImageModal}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            color: "black",
            zIndex: 10,
          }}
        >
          <CloseOutlined />
        </IconButton>
      </Modal>
    </Box>,
    <Box key={1} sx={{ height: 500 }}>
      <Grid container spacing={2}>
        {audioItems.map((audio, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ padding: 2 }} className="audioCard">
              <Box sx={{ marginRight: "20px" }}>
                <HeadsetIcon className="audioHeadsetIcon" />
              </Box>
              <h3>{audio.title}</h3>
              <audio ref={audioRefs.current[index]} src={audio.src} />
              <Button onClick={() => handlePlayPause(index)}>
                {isAudio === index ? <PauseCircleRoundedIcon className="audioPausePlayIcon"/> : <PlayCircleIcon  className="audioPausePlayIcon"/>}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>,
    <Box key={2} sx={{ height: 500 }}>
      <Grid container spacing={2}>
        {videoItems.map((video, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
          >
            <Card
              onClick={() => handleVideoClick(video)}
              sx={{ cursor: "pointer", position: "relative", height: "200px" }}
            >
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  width: "100%",
                  padding: 1,
                }}
              >
                <h3>{video.title}</h3>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        isOpen={videoModalOpen}
        onRequestClose={handleCloseVideoModal}
        style={{
          content: {
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            height: "80%",
            padding: "2rem",
            margin: "auto",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
      >
        <Box sx={{ width: "100%", height: "100%", backgroundColor: "black" }}>
          {selectedVideo && (
            <>
              <video width="100%" height="100%" controls autoPlay>
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <IconButton
                onClick={handleCloseVideoModal}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  color: "black",
                  zIndex: 10,
                }}
              >
                <CloseOutlined />
              </IconButton>
            </>
          )}
        </Box>
      </Modal>
    </Box>,
    <Box key={4} sx={{ height: 500 }}>
      <Grid container spacing={2} className="documentGrid">
        {pdfFiles.map((file, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ padding: 2 }}
              onClick={() => handleOpenDocument(file)}
              className="documentCard"
            >
              <span className="document-container">
                <img
                  src="document.svg"
                  alt="document"
                  className="documentImage"
                />
                <p className="documentText">{file.name}</p>
              </span>
              <div key={file.id} className="documentCardText">
                <h3>{file.title}</h3>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>,
    <Box key={4} sx={{ height: 500 }}>
      <Grid container spacing={2}>
        {links.map((link, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ marginBottom: "16px", width: "100%" }}>
              <CardActionArea href={link.url} target="_blank">
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <LinkIcon />
                    <Link
                      variant="h6"
                      component="div"
                      sx={{ ml: 1, fontSize: "20px", textDecoration: "none" }}
                    >
                      {link.url}
                    </Link>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>,
  ];

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Media
      </Button>
      <Modal
        isOpen={open && !isDocument}
        onRequestClose={handleCloseModal}
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        style={{
          content: {
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
            height: "80%",
            padding: "2rem",
            margin: "auto",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <Box sx={{ width: "100%", backgroundColor: "white" }}>
          <Tabs value={value} onChange={handleChange} aria-label="modal tabs">
            <Tab label="Images" value={0} />
            <Tab label="Audio" value={1} />
            <Tab label="Video" value={2} />
            <Tab label="Documents" value={3} />
            <Tab label="Link" value={4} />
          </Tabs>
          <Divider />
          <br />
          <div>{tabPanels[value]}</div>
        </Box>
      </Modal>
      <Modal
        isOpen={isDocument}
        onRequestClose={handleDocumentClose}
        style={{
          content: {
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            height: "80%",
            padding: "2rem",
            margin: "auto",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
      >
        <Box sx={{ width: "100%", height: "100%", backgroundColor: "white" }}>
          {isDocument && (
            <>
              <iframe
                src="dummy-2.pdf"
                width="100%"
                height="100%"
                title="PDF Document"
              ></iframe>
              <IconButton
                onClick={handleDocumentClose} // Define this function to handle closing the video/modal
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  color: "black", // Ensure the icon is visible against a dark background
                  zIndex: 10, // Ensure the icon is above other content
                }}
              >
                <CloseOutlined />
              </IconButton>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};
export default MediaUI;
