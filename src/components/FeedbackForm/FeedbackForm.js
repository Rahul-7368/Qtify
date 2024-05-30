import styles from "./FeedbackForm.module.css";
import { ReactComponent as CloseIcon } from "../../assests/close.svg";
import { useSnackbar } from "notistack";

const FeedbackForm = ({ setFeedbackFlag }) => {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <div className={styles.wrapper}>
      <div className={styles.outerDiv}>
        <div className={styles.innerDiv}>
          <div className={styles.feedbackDiv}>
            <h3>Feedback</h3>
            <CloseIcon
              onClick={() => setFeedbackFlag(false)}
              style={{ position: "absolute", right: "0", cursor: "pointer" }}
            />
          </div>
          <div className={styles.feedbackForm}>
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Email ID" />
            <input type="text" placeholder="Subject" />
            <textarea type="text" placeholder="Description" />
          </div>
          <button
            onClick={() => {
              setFeedbackFlag(false);
              enqueueSnackbar("Feedback Form Submitted Seccessfully", {
                autoHideDuration: 3000,
                variant: "success"
              });
            }}
            className={styles.feedbackBtn}
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
