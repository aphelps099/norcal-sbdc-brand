"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// Minimal YouTube IFrame API type shim
declare global {
  interface Window {
    YT: {
      Player: new (
        el: HTMLElement,
        opts: {
          videoId: string;
          playerVars: Record<string, number | string>;
          events: {
            onReady?: (e: { target: YTPlayer }) => void;
            onStateChange?: (e: { data: number }) => void;
          };
        }
      ) => YTPlayer;
      PlayerState: { PLAYING: number; PAUSED: number; ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  setVolume(v: number): void;
  getVolume(): number;
  isMuted(): boolean;
  mute(): void;
  unMute(): void;
  getPlayerState(): number;
  destroy(): void;
}

export default function BrandVideoPlayer({ videoId }: { videoId: string }) {
  const containerRef   = useRef<HTMLDivElement>(null);
  const playerElRef    = useRef<HTMLDivElement>(null);
  const playerRef      = useRef<YTPlayer | null>(null);
  const [ready,   setReady]   = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted,   setMuted]   = useState(false);
  const [volume,  setVolume]  = useState(80);
  const [showVol, setShowVol] = useState(false);
  const volTimeout = useRef<ReturnType<typeof setTimeout>>();

  // Load YouTube IFrame API once
  useEffect(() => {
    function initPlayer() {
      if (!playerElRef.current) return;
      playerRef.current = new window.YT.Player(playerElRef.current, {
        videoId,
        playerVars: {
          controls:       0,
          disablekb:      1,
          modestbranding: 1,
          rel:            0,
          showinfo:       0,
          iv_load_policy: 3,
          fs:             0,
          playsinline:    1,
        },
        events: {
          onReady: () => {
            playerRef.current?.setVolume(80);
            setReady(true);
          },
          onStateChange: (e) => {
            setPlaying(e.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    }

    if (window.YT?.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
      if (!document.getElementById("yt-iframe-api")) {
        const tag = document.createElement("script");
        tag.id  = "yt-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
    }

    return () => {
      playerRef.current?.destroy();
    };
  }, [videoId]);

  const togglePlay = useCallback(() => {
    if (!playerRef.current) return;
    playing ? playerRef.current.pauseVideo() : playerRef.current.playVideo();
  }, [playing]);

  const handleVolume = useCallback((v: number) => {
    setVolume(v);
    playerRef.current?.setVolume(v);
    if (v === 0) {
      playerRef.current?.mute();
      setMuted(true);
    } else {
      playerRef.current?.unMute();
      setMuted(false);
    }
    clearTimeout(volTimeout.current);
    volTimeout.current = setTimeout(() => setShowVol(false), 1800);
  }, []);

  const toggleMute = useCallback(() => {
    if (!playerRef.current) return;
    if (muted) {
      playerRef.current.unMute();
      playerRef.current.setVolume(volume || 80);
      setMuted(false);
    } else {
      playerRef.current.mute();
      setMuted(true);
    }
  }, [muted, volume]);

  const thumbUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#0f1c2e] group"
      style={{ aspectRatio: "16/9" }}
    >
      {/* YouTube iframe — hidden controls, fills container */}
      <div
        ref={playerElRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ transform: "scale(1.02)" }} /* slight scale hides letterbox borders */
      />

      {/* Thumbnail shown before API is ready */}
      {!ready && (
        <div className="absolute inset-0">
          <img src={thumbUrl} alt="Video thumbnail"
               className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[rgba(15,28,46,0.45)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-white/20 bg-white/10 flex items-center justify-center animate-pulse">
              <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-0.5 opacity-60">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Click-to-play overlay — covers iframe to capture clicks while paused */}
      {ready && !playing && (
        <div
          className="absolute inset-0 cursor-pointer flex items-center justify-center bg-[rgba(15,28,46,0.30)]"
          onClick={togglePlay}
        >
          <div className="w-16 h-16 rounded-full border border-white/25 bg-white/15 backdrop-blur-sm flex items-center justify-center
                          transition-all duration-300 hover:bg-white/25 hover:scale-105">
            <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-0.5">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}

      {/* Bottom control bar — visible on hover or when paused */}
      {ready && (
        <div
          className={`absolute bottom-0 left-0 right-0 flex items-center gap-3 px-5 py-4
                      transition-opacity duration-300
                      ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
          style={{ background: "linear-gradient(to top, rgba(15,28,46,0.85) 0%, transparent 100%)" }}
        >
          {/* Play / Pause */}
          <button
            onClick={togglePlay}
            className="text-white/80 hover:text-white transition-colors flex-shrink-0"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              /* Pause icon */
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              /* Play icon */
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Volume control */}
          <div className="flex items-center gap-2 relative">
            {/* Volume slider — shown on hover of volume area */}
            <div
              className={`flex items-center gap-2 transition-all duration-200 overflow-hidden
                          ${showVol ? "w-24 opacity-100" : "w-0 opacity-0"}`}
            >
              <input
                type="range"
                min={0}
                max={100}
                value={muted ? 0 : volume}
                onChange={(e) => handleVolume(Number(e.target.value))}
                className="w-full h-[3px] accent-white cursor-pointer"
                style={{ accentColor: "white" }}
              />
            </div>

            {/* Mute/unmute button — hover reveals slider */}
            <button
              onClick={toggleMute}
              onMouseEnter={() => { setShowVol(true); clearTimeout(volTimeout.current); }}
              onMouseLeave={() => { volTimeout.current = setTimeout(() => setShowVol(false), 1200); }}
              className="text-white/80 hover:text-white transition-colors flex-shrink-0"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted || volume === 0 ? (
                /* Muted icon */
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
              ) : volume > 50 ? (
                /* Volume high */
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
              ) : (
                /* Volume low */
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
