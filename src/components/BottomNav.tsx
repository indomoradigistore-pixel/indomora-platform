export default function BottomNav() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "60px",
        background: "#000",
        borderTop: "1px solid #333",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "#fff",
        zIndex: 999,
      }}
    >
      <div>🏠 Home</div>
      <div style={{ fontSize: "28px" }}>➕</div>
      <div>👤 Profile</div>
    </div>
  );
}