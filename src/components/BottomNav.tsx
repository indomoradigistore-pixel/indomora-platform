export default function BottomNav() {
  return (
    <nav className="bottom-nav">

      <button className="nav-item">
        <span>🏠</span>
        <small>Beranda</small>
      </button>

      <button className="nav-item">
        <span>📩</span>
        <small>Kotak Masuk</small>
      </button>

      <button className="nav-item upload-center">
        <span>➕</span>
      </button>

      <button className="nav-item">
        <span>🔔</span>
        <small>Notifikasi</small>
      </button>

      <button className="nav-item">
        <span>👤</span>
        <small>Profil</small>
      </button>

    </nav>
  );
}