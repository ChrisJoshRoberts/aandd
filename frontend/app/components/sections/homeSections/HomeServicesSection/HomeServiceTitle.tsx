export default function HomeServiceTitle() {
  return (
    <div
      style={{
        height: "50vh",
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          color: "var(--color-aubergine)",
          fontFamily: "var(--font-josefin-sans)",
          position: "absolute",
          fontWeight: "600",
          top: -300,
        }}
      >
        How we help you grow
      </h2>
    </div>
  );
}
