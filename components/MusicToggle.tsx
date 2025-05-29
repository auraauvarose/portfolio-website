import React, { useEffect, useRef, useState } from "react";

const MUSIC_SRC = "/assets/music.mp3"; // Letakkan file music.mp3 di folder public

const MusicToggle: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(true);

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

  return (
    <div>
      <button
        aria-label={playing ? "Matikan Musik" : "Nyalakan Musik"}
        onClick={() => setPlaying((p) => !p)}
        className="text-xl"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        {playing ? "🔊" : "🔇"}
      </button>
      <audio ref={audioRef} src={MUSIC_SRC} loop autoPlay />
    </div>
  );
};

export default MusicToggle;