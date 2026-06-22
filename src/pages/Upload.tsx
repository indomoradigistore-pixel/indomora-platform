import { useState } from "react";
import { supabase } from "../services/supabase";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    if (!file) {
      alert("Pilih video terlebih dahulu");
      return;
    }

    try {
      setLoading(true);

      const fileName = `${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("videos")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("videos")
        .getPublicUrl(fileName);

      const videoUrl = data.publicUrl;

      const { error: insertError } = await supabase
        .from("videos")
        .insert([
          {
            title,
            caption,
            video_url: videoUrl,
            views: 0,
            likes_count: 0,
            comments_count: 0,
            shares_count: 0,
            status: "published",
          },
        ]);

      if (insertError) throw insertError;

      alert("Video berhasil diupload!");

      setTitle("");
      setCaption("");
      setFile(null);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="upload-page">
      <div className="upload-card">
        <h1 className="upload-title">📹 Upload Video</h1>

        <input
          className="upload-input"
          type="text"
          placeholder="Judul Video"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="upload-textarea"
          placeholder="Tulis caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <input
          className="upload-file"
          type="file"
          accept="video/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <button
          className="upload-button"
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Video"}
        </button>
      </div>
    </div>
  );
}