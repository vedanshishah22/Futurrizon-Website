import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import logoVideo from '../assets/Futurrizon_logo_animation.mp4';

const SplashScreen = ({ onComplete }) => {
  const [opacity, setOpacity] = useState(1);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;

      // When about 1.5 seconds are left, fade to 50% opacity
      if (duration > 0 && currentTime > duration - 1.5) {
        setOpacity(0.5);
      }
    };

    const handleEnded = () => {
      // Final fade to 0 before unmounting
      setOpacity(0);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800); // Wait for the final fade out
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: opacity }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-[80%] max-w-[800px] aspect-video flex items-center justify-center">
        <video
          ref={videoRef}
          src={logoVideo}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-contain"
        />
      </div>
    </motion.div>
  );
};

export default SplashScreen;
