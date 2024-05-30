import styles from "./SongCard.module.css";

const SongCard = ({ song, setCurrSong }) => {
  const minutes = Math.floor(song.durationInMs / 60000);
  const seconds = Math.floor((song.durationInMs - minutes * 60000) / 1000);
  return (
    <div className={styles.wrapper} onClick={() => setCurrSong(song)}>
      <div className={styles.imageDiv}>
        <img src={song.image} alt={song.title} />
        <p style={{ wordWrap: "break-word" }}>{song.title}</p>
      </div>
      <p>{song.artists.join(", ")}</p>
      <p
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "68.58px"
        }}
      >
        {`${minutes}:${seconds}`}
      </p>
    </div>
  );
};

export default SongCard;
