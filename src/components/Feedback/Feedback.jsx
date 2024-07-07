export const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  console.log("Feedback Component - Positive Percentage:", positivePercentage);
  return (
    <div>
      <h2>Good: {good}</h2>
      <h2>Neutral: {neutral}</h2>
      <h2>Bad: {bad}</h2>
      <h2>Total: {total}</h2>
      <h2>Positive: {positivePercentage}%</h2>
    </div>
  );
};
