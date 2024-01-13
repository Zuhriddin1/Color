import Button from "./Button";
const card = [
  {
    color: "",
    title: "#666CA3",
    RGB: "RGB   102, 108, 163",
    HSL: `HSL   234°, 25%, 52%`,
  },
  {
    color: "",
    title: "#13183F",
    RGB: "RGB   19, 24, 63",
    HSL: `HSL   233°, 54%, 16%`,
  },
  {
    color: "",
    title: "#83869A",
    RGB: "RGB   131, 134, 154",
    HSL: `HSL   232°, 10%, 56%`,
  },
  {
    color: "",
    title: "#FFA7C3",
    RGB: "RGB   247, 71, 128",
    HSL: `HSL   341°, 92%, 62%`,
  },
  {
    color: "",
    title: "#666CA3",
    RGB: "RGB   255, 167, 195",
    HSL: `HSL   341°, 100%, 83%`,
  },
  {
    color: "",
    title: "#FFFFF",
    RGB: "RGB   255, 255, 255",
    HSL: `HSL   0°, 0%, 100%`,
  },
  {
    color: "",
    title: "#F02AA6 - FF6F48",
    RGB: "RGB   240, 42, 166 255, 111, 72",
    HSL: `HSL   322°, 87%, 55% 13°, 100%, 64%`,
  },
  {
    bg: "",
    title: "#666CA3",
    RGB: "RGB   72, 81, 255 240, 42, 166",
    HSL: `HSL   237°, 100%, 64% 322°, 87%, 55%`,
  },
];
function App() {
  return (
    <>
      <div className="cards">
        {card.map((card) => (
          <Button {...card} />
        ))}
      </div>
    </>
  );
}
export default App;
