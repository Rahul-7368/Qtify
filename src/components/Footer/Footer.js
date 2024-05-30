import styles from "./Footer.module.css";
import { ReactComponent as PlayButton } from "../../assests/play.svg";
import { ReactComponent as PauseButton } from "../../assests/pause.svg";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";

const Footer = ({ song }) => {
  console.log(song);
  const [progress, setProgress] = useState(0);
  const [play, setPlay] = useState(true);
  const [diff, setDiff] = useState(0);
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const MAX = Math.floor(song.durationInMs / 1000);
  const MIN = 0;
  const minutes = Math.floor(song.durationInMs / 60000);
  const seconds = Math.floor(song.durationInMs / 1000) - minutes * 60;
  const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

  const handleClick = () => {
    if (play) {
      setDiff(1);
    } else {
      setDiff(0);
    }
    setPlay(!play);
  };

  const handleTime = () => {
    const min = Math.floor(progress / 60);
    const sec = progress - min * 60;
    setTime({ minutes: min, seconds: sec });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === MAX) {
          return 0;
        }
        return Math.min(oldProgress + diff, MAX);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [diff]);

  useEffect(() => {
    handleTime();
  }, [progress]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageDiv}>
        <img src={song.image} alt={song.title} />
        <div className={styles.content}>
          <p>{song && song.title}</p>
          <p>{song && song.artists.join(",")}</p>
        </div>
      </div>
      <div className={styles.audioPlayer}>
        {play ? (
          <PlayButton style={{ cursor: "pointer" }} onClick={handleClick} />
        ) : (
          <PauseButton style={{ cursor: "pointer" }} onClick={handleClick} />
        )}
        <div className={styles.progressBar}>
          <span>{`${time.minutes.toLocaleString("en-US", {
            minimumIntegerDigits: 2
          })}:${time.seconds.toLocaleString("en-US", {
            minimumIntegerDigits: 2
          })}`}</span>
          <LinearProgress
            variant="determinate"
            value={normalise(progress)}
            sx={[
              { width: "clamp(200px,100%,676px)", backgroundColor: "white" },
              {
                ".css-5xe99f-MuiLinearProgress-bar1": {
                  backgroundColor: "var(--primary-color)"
                }
              }
            ]}
          />
          <span>{`${minutes.toLocaleString("en-US", {
            minimumIntegerDigits: 2
          })}:${seconds.toLocaleString("en-US", {
            minimumIntegerDigits: 2
          })}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
