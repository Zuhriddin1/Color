import styles from "./bg.module.css";
function Button({ color, title, RGB, HSL }) {
  return (
    <>
      <div className={styles.bg}>{color}</div>
      <div className="info">
        <h1>{title}</h1>
        <span>{RGB}</span>
        <span className={styles.spanOne}>{HSL}</span>
      </div>
    </>
  );
}
export default Button;
