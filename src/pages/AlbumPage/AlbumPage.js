import styles from "./AlbumPage.module.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { ReactComponent as BackArrow } from "../../assests/backArrow.svg";
import { ReactComponent as LibraryIcon } from "../../assests/library.svg";
import { ReactComponent as ShuffleIcon } from "../../assests/shuffle.svg";
import SongCard from "../../components/SongCard/SongCard";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";

const AlbumPage = ({
  topAlbums,
  newAlbums,
  currSong,
  setCurrSong,
  feedbackFlag,
  setFeedbackFlag
}) => {
  const { slug } = useParams();
  const [page, setPage] = useState(1);
  const [album, setAlbum] = useState(null);
  const [count, setCount] = useState(null);
  const [filteredSongs, setFilteredSongs] = useState(null);
  const PER_PAGE = 13;

  const fetchAlbum = async () => {
    await axios
      .get(`https://qtify-backend-labs.crio.do/album/${slug}`)
      .then((res) => {
        setAlbum(res.data);
        setCount(Math.ceil(res.data.songs.length / PER_PAGE));
        setFilteredSongs(
          res.data.songs.slice(0, Math.min(PER_PAGE, res.data.songs.length))
        );
        //console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (e, p) => {
    //console.log(p);
    setFilteredSongs(
      album.songs.slice((p - 1) * PER_PAGE),
      Math.min(album.songs.length, p * PER_PAGE)
    );
    setPage(p);
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <div className={styles.albumWrapper}>
      <NavBar
        data={[...topAlbums, ...newAlbums]}
        setFeedbackFlag={setFeedbackFlag}
      />
      <div className={styles.arrowDiv}>
        <Link to="/">
          <BackArrow />
        </Link>
      </div>
      <div className={styles.wrapper}>
        {album && <img src={album.image} alt={album.title} />}
        <div className={styles.contentDiv}>
          <h3>Best of Punjabi Bae in 2022</h3>
          <p>Catch the most romantic punjabi tracks of 2022 #SpotifyWrapped</p>
          <p>2022</p>
          <p>
            75 songs <span></span> 3 hr 45 min <span></span> 100 Follows
          </p>
          <div className={styles.btnDiv}>
            <button className={styles.shuffleBtn}>
              <ShuffleIcon />
              Shuffle
            </button>
            <button className={styles.libraryBtn}>
              <LibraryIcon />
              Add to library
            </button>
          </div>
        </div>
      </div>
      <Pagination
        count={count}
        color="primary"
        page={page}
        onChange={handleChange}
        sx={[
          {
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "85px",
            marginTop: "18px",
            marginBottom: "25px"
          },
          {
            ".css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root, .css-1v2lvtn-MuiPaginationItem-root": {
              color: "white"
            }
          },
          {
            ".css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected, .css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover": {
              backgroundColor: "#34C94B"
            }
          }
        ]}
      />
      <div
        style={{
          margin: "0px 85px",
          marginTop: "26px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <p style={{ width: "250px" }}>Title</p>
        <p>Artist</p>
        <p>Duration</p>
      </div>
      {album &&
        filteredSongs &&
        filteredSongs.map((ele) => (
          <SongCard song={ele} key={ele.id} setCurrSong={setCurrSong} />
        ))}
      {currSong && <Footer song={currSong} />}
      {feedbackFlag && <FeedbackForm setFeedbackFlag={setFeedbackFlag} />}
    </div>
  );
};

export default AlbumPage;
