import FAQ from "../../components/FAQ/FAQ";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css";

const HomePage = ({
  topAlbums,
  newAlbums,
  songs,
  currSong,
  setCurrSong,
  feedbackFlag,
  setFeedbackFlag
}) => {
  return (
    <>
      <NavBar
        data={[...topAlbums, ...newAlbums]}
        setFeedbackFlag={setFeedbackFlag}
      />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section data={topAlbums} type="top" title="Top Albums" />
        <Section data={newAlbums} type="new" title="New Albums" />
        <Section
          data={songs}
          type="songs"
          title="Songs"
          setCurrSong={setCurrSong}
        />
      </div>
      {currSong && <Footer song={currSong} />}
      <FAQ />
      {feedbackFlag && <FeedbackForm setFeedbackFlag={setFeedbackFlag} />}
    </>
  );
};

export default HomePage;
