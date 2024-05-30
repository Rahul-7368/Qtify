import Accordian from "../Accordian/Accordian";
import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <div className={styles.wrapper}>
      <h1>FAQs</h1>
      {data.map(({ title, content }) => (
        <Accordian title={title} content={content} />
      ))}
    </div>
  );
};

const data = [
  {
    title: "Is QTify free to use?",
    content: "Yes! It is 100% free, and has 0% ads!"
  },
  {
    title: "Can I download and listen to songs offline?",
    content: `Sorry, unfortunately we don't provide the service to download any songs.`
  }
];

export default FAQ;
