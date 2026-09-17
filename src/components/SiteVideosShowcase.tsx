import React, { useState, useRef, useEffect, useCallback } from "react";
import { FENCING_VIDEOS } from "../data/fencingVideos";
import { ChevronLeft, ChevronRight, Video, MapPin, Sparkles, Volume2, VolumeX, Play } from "lucide-react";

export const SiteVideosShowcase: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const totalVideos = FENCING_VIDEOS.length;
  const currentVideo = FENCING_VIDEOS[activeVideoIndex];

  const handleNext = useCallback(() => {
    setActiveVideoIndex((prev) => (prev + 1) % totalVideos);
  }, [totalVideos]);

  const handlePrev = useCallback(() => {
    setActiveVideoIndex((prev) => (prev - 1 + totalVideos) % totalVideos);
  }, [totalVideos]);

  // When activeVideoIndex changes, load and play the video from the beginning
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay was prevented; video is ready for user click or muted play
          setIsPlaying(false);
        });
    }
  }, [activeVideoIndex]);

  // When current video finishes, automatically advance to next video immediately
  const handleVideoEnded = () => {
    handleNext();
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuteState = !isMuted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
    }
  };

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="videos" className="site-videos-showcase-section section-space">
      <div className="container">
        {/* Header with Simple English */}
        <div className="custom-header">
          <div className="custom-badge">
            <Video size={14} />
            <span>Real Site Videos</span>
          </div>
          <h2 className="custom-title">OUR SITE WORK VIDEOS</h2>
          <p className="custom-sub">
            Watch our actual on-site wire tensioning, concrete pillar fixing, and finished fence boundary work across Tamil Nadu.
          </p>
        </div>

        {/* Video Carousel Stage with Left and Right Navigation Arrows */}
        <div className="video-carousel-wrapper">
          {/* Left Navigation Arrow */}
          <button
            type="button"
            className="video-nav-arrow prev"
            onClick={handlePrev}
            aria-label="Previous work video"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Centered Single Active Video Card */}
          <div className="video-card-stage">
            <div className="video-presentation-card">
              <div className="video-screen-frame">
                <video
                  ref={videoRef}
                  src={currentVideo.src}
                  autoPlay
                  muted={isMuted}
                  playsInline
                  controls
                  onEnded={handleVideoEnded}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="active-playback-video"
                >
                  <source src={currentVideo.src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>

                {/* Mute/Unmute Quick Toggle Button */}
                <button
                  type="button"
                  className="video-sound-toggle-btn"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  <span>{isMuted ? "Unmute" : "Muted"}</span>
                </button>

                {/* Video Play Overlay if autoplay blocked */}
                {!isPlaying && (
                  <div className="video-play-hint-overlay" onClick={handleManualPlay}>
                    <div className="play-hint-icon">
                      <Play size={28} />
                    </div>
                    <span>Click to Play Video {activeVideoIndex + 1}</span>
                  </div>
                )}
              </div>

              {/* Video Info Card */}
              <div className="video-details-row">
                <div className="video-info-left">
                  <div className="video-badge-pill-row">
                    <span className="video-badge-tag">
                      <Sparkles size={12} />
                      {currentVideo.category}
                    </span>
                    {currentVideo.location && (
                      <span className="video-loc-tag">
                        <MapPin size={12} />
                        {currentVideo.location}
                      </span>
                    )}
                  </div>
                  <h3 className="video-active-title">{currentVideo.title}</h3>
                  <p className="video-active-desc">{currentVideo.description}</p>
                </div>

                <div className="video-counter-indicator">
                  <span className="current-video-index">{activeVideoIndex + 1}</span>
                  <span className="total-video-count">/ {totalVideos}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            className="video-nav-arrow next"
            onClick={handleNext}
            aria-label="Next work video"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Video Thumbnail / Quick Dot Selector */}
        <div className="video-dot-indicators">
          {FENCING_VIDEOS.map((video, idx) => (
            <button
              key={video.id}
              type="button"
              className={`video-dot-btn ${idx === activeVideoIndex ? "active" : ""}`}
              onClick={() => setActiveVideoIndex(idx)}
              aria-label={`Go to video ${idx + 1}: ${video.title}`}
            >
              <span>Video {idx + 1}</span>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .site-videos-showcase-section {
          background-color: var(--color-bg-alt);
          padding: 80px 0;
        }

        .video-carousel-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          max-width: 960px;
          margin: 32px auto 20px auto;
          position: relative;
        }

        .video-nav-arrow {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-full);
          background: #ffffff;
          border: 1px solid var(--color-border);
          color: var(--color-charcoal-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          box-shadow: var(--shadow-md);
          transition: all 0.2s ease;
          z-index: 10;
        }

        .video-nav-arrow:hover {
          background: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
          transform: scale(1.08);
          box-shadow: var(--shadow-lg);
        }

        .video-card-stage {
          flex: 1;
          min-width: 0;
          max-width: 820px;
        }

        .video-presentation-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-xl);
        }

        .video-screen-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .active-playback-video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #000000;
          display: block;
        }

        .video-sound-toggle-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(4px);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-full);
          padding: 6px 14px;
          font-size: 0.78rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          z-index: 15;
          transition: background 0.2s ease;
        }

        .video-sound-toggle-btn:hover {
          background: rgba(15, 23, 42, 0.95);
        }

        .video-play-hint-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #ffffff;
          cursor: pointer;
          z-index: 14;
        }

        .play-hint-icon {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-full);
          background: var(--color-primary);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 18px rgba(0,0,0,0.4);
          transition: transform 0.2s ease;
        }

        .play-hint-icon:hover {
          transform: scale(1.1);
        }

        .video-details-row {
          padding: 22px 26px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .video-info-left {
          flex: 1;
        }

        .video-badge-pill-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }

        .video-badge-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-primary);
          background: rgba(46, 125, 50, 0.1);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .video-loc-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        .video-active-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-charcoal-dark);
          line-height: 1.3;
          margin-bottom: 6px;
        }

        .video-active-desc {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.45;
        }

        .video-counter-indicator {
          background: rgba(16, 56, 39, 0.08);
          border-radius: var(--radius-md);
          padding: 6px 12px;
          font-weight: 800;
          white-space: nowrap;
        }

        .current-video-index {
          color: var(--color-primary);
          font-size: 1.15rem;
        }

        .total-video-count {
          color: var(--color-text-muted);
          font-size: 0.85rem;
        }

        .video-dot-indicators {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
          flex-wrap: wrap;
        }

        .video-dot-btn {
          background: #ffffff;
          border: 1px solid var(--color-border);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .video-dot-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }

        .video-dot-btn.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(16, 56, 39, 0.25);
        }

        @media (max-width: 768px) {
          .site-videos-showcase-section {
            padding: 50px 0;
          }
          .video-carousel-wrapper {
            gap: 8px;
            margin: 20px 0 16px 0;
          }
          .video-nav-arrow {
            width: 38px;
            height: 38px;
          }
          .video-details-row {
            padding: 16px;
            flex-direction: column;
            gap: 12px;
          }
          .video-active-title {
            font-size: 1.1rem;
          }
          .video-screen-frame {
            aspect-ratio: 16 / 9;
          }
        }
      `}</style>
    </section>
  );
};
