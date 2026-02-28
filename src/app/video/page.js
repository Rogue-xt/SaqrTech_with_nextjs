"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function VideoWatchPage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  return (
    <main className="z-80 mt-1 relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      {/* --- Close Button (Back to Home) --- */}
      <Link
        href="/"
        className="group absolute top-8 right-8 z-50 rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all hover:bg-white/10"
      >
        <X
          className="text-white transition-transform group-hover:rotate-90"
          size={24}
        />
      </Link>

      {/* --- The Video Player --- */}
      <div className="group relative h-full w-full">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="h-full w-full object-contain" // Contain ensures the whole video fits without cropping
          onClick={togglePlay}
          onEnded={() => setIsPlaying(false)}
        >
          <source src="/Mpos/Mpos-Banner-Video.mp4" type="video/mp4" />
        </video>

        {/* --- Floating Custom Controls (Visible on Hover) --- */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-12 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="text-white transition-colors hover:text-red-500"
              >
                {isPlaying ? (
                  <Pause size={32} fill="currentColor" />
                ) : (
                  <Play size={32} fill="currentColor" />
                )}
              </button>

              {/* Mute/Unmute */}
              <button
                onClick={toggleMute}
                className="text-white transition-colors hover:text-red-500"
              >
                {isMuted ? <VolumeX size={28} /> : <Volume2 size={28} />}
              </button>

              {/* Replay */}
              <button
                onClick={() => {
                  videoRef.current.currentTime = 0;
                  videoRef.current.play();
                  setIsPlaying(true);
                }}
                className="text-white transition-colors hover:text-red-500"
              >
                <RotateCcw size={24} />
              </button>
            </div>

            {/* Branding context */}
            <div className="hidden md:block">
              <p className="text-xs font-black tracking-widest text-white/40 uppercase">
                mPos Enterprise Solutions • 2026 Showcase
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Play Overlay (Visible only when paused) --- */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={togglePlay}
            className="absolute inset-0 z-40 flex cursor-pointer items-center justify-center bg-black/20"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-600 shadow-2xl shadow-red-600/50">
              <Play className="ml-2 text-white" fill="currentColor" size={40} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
