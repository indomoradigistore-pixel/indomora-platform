import videos from "../data/videos";

export default function VideoFeed() {
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      {videos.map((video) => (
        <div
          key={video.id}
          style={{
            height: "100vh",
            background: "linear-gradient(to bottom, #222, #000)",
            position: "relative",
            scrollSnapAlign: "start",
          }}
        >
          {/* Info Video */}
          <div
            style={{
              position: "absolute",
              bottom: "100px",
              left: "15px",
              color: "#fff",
              maxWidth: "70%",
            }}
          >
            <h3>{video.user}</h3>
            <p>{video.caption}</p>
          </div>

          {/* Tombol Aksi */}
          <div
            style={{
              position: "absolute",
              right: "15px",
              bottom: "120px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "25px",
              fontSize: "28px",
            }}
          >
            <div>
              ❤️
              <div style={{ fontSize: "14px" }}>120</div>
            </div>

            <div>
              💬
              <div style={{ fontSize: "14px" }}>45</div>
            </div>

            <div>
              🔄
              <div style={{ fontSize: "14px" }}>12</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}