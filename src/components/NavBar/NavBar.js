import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({ data, setFeedbackFlag }) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar data={data} placeholder="Search a song of your choice" />
      <Button text="Give Feedback" setFeedbackFlag={setFeedbackFlag} />
    </nav>
  );
};

export default NavBar;
