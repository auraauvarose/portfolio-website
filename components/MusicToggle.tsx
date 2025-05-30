import React, { useEffect, useRef, useState } from "react";

const MUSIC_SRC = "/assets/music.mp3";

const MusicToggle: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Cek class 'dark' di <html>
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    // Jika ada perubahan tema (misal pakai Tailwind dark mode)
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.volume = 0.5;
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    const tryPlay = () => {
      if (audioRef.current && playing) {
        audioRef.current.play().catch(() => {});
      }
      window.removeEventListener("click", tryPlay);
    };
    window.addEventListener("click", tryPlay);
    return () => window.removeEventListener("click", tryPlay);
  }, [playing]);

  // Pilih icon sesuai tema dan status
  const iconSrc = isDark
    ? (playing ? "/assets/images_audio/audio-light.png" : "/assets/images_audio/audio-off-light.png")
    : (playing ? "/assets/images_audio/audio-dark.png" : "/assets/images_audio/audio-off-dark.png");

  return (
    <div>
      <button
        aria-label={playing ? "Matikan Musik" : "Nyalakan Musik"}
        onClick={() => setPlaying((p) => !p)}
        className="text-xl"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <img
          src={iconSrc}
          alt={playing ? "Matikan Musik" : "Nyalakan Musik"}
          style={{ width: 20, height: 20 }} // Ubah ukuran di sini
        />
      </button>
      <audio ref={audioRef} src={MUSIC_SRC} loop autoPlay />
    </div>
  );
};

export default MusicToggle;