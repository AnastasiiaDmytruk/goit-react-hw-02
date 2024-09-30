import styles from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  console.log("totalFeedback: ", totalFeedback);
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.item}>Good: {feedback.good}</li>
        <li className={styles.item}>Neutral: {feedback.neutral}</li>
        <li className={styles.item}>Bad: {feedback.bad}</li>
        <li className={styles.item}>Total: {totalFeedback}</li>

        <li className={styles.item}>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
