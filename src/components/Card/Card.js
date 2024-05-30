import styles from "./Card.module.css";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";

const Card = ({ data, type, setCurrSong }) => {
  //console.log(type);
  // const getCard = (type) => {
  switch (type) {
    case "top": {
      const { image, follows, title, slug, songs } = data;
      return (
        <Link to={`albums/${slug}`} style={{ textDecoration: "none" }}>
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="album" />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className={styles.chip}
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        </Link>
      );
    }
    case "new": {
      const { image, follows, title, slug, songs } = data;
      return (
        <Link to={`albums/${slug}`} style={{ textDecoration: "none" }}>
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="album" />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className={styles.chip}
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        </Link>
      );
    }
    case "songs": {
      const { image, likes, title } = data;
      return (
        <Tooltip title={title} placement="top" arrow>
          <div className={styles.wrapper} onClick={() => setCurrSong(data)}>
            <div className={styles.card}>
              <img src={image} alt="album" />
              <div className={styles.banner}>
                <Chip
                  label={`${likes} Likes`}
                  size="small"
                  className={styles.chip}
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        </Tooltip>
      );
    }
    default:
      return <></>;
  }
  // };
  // return getCard(type);
};

export default Card;
