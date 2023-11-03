const Items = ({ greeting }) => {
  const greetingStyles = {
    fontSize: "2rem",
    fontWeight: "700",
    textAlign: "center",
    color: "Black",
  };
  return <div style={greetingStyles}>{greeting}</div>;
};

export default Items;
