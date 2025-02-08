import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const bgRef = useRef(null); // Ref for the background container

  useEffect(() => {
    // Function to handle GSAP animations setup
    const setupGSAP = () => {
      // Disable GSAP animations on mobile devices (below 768px)
      if (window.innerWidth < 768) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill existing ScrollTriggers
        return;
      }

      // GSAP animation for scaling the background image
      gsap.fromTo(
        bgRef.current,
        {
          backgroundSize: "80% 80%", // Start with a smaller size
        },
        {
          backgroundSize: "110% 100%", // End with the actual size
          scrollTrigger: {
            trigger: bgRef.current, // Trigger animation when this element is in view
            start: "top center", // Start animation when the top of the element hits the center of the viewport
            end: "center bottom", // End animation when the bottom of the element hits the center of the viewport
            scrub: 1, // Smoothly animate on scroll
          },
        }
      );
    };

    // Initialize GSAP animations
    setupGSAP();

    // Listen for window resize to disable or enable GSAP based on screen width
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => {
      if (mediaQuery.matches) {
        // If the screen is smaller than 768px, kill the ScrollTriggers and animations
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      } else {
        // If the screen is larger than 768px, re-setup the animations
        setupGSAP();
      }
    };

    // Add listener for screen size changes
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div
      ref={bgRef}
      className="animals bg-[url('/Video.png')] h-[900px] bg-no-repeat bg-center flex items-center justify-center relative object-cover mobile:bg-[10%_20%]"
    >
      {/* Centered image */}
      <div className="absolute pt-[50px] top-0 left-1/2 transform -translate-x-1/2">
        <img className="mobile:hidden" src="/mouse.png" alt="Mouse Image" />
      </div>

      {/* Nested div for absolute positioning at top left */}
      <div className="absolute top-0 left-0 ml-[200px] -mb-8">
        <img
          className="w-[93px] ml-[70px] h-[159px] -mt-24 mobile:hidden"
          src="/Frame 154.png"
          alt="Frame Image"
        />
      </div>
    </div>
  );
};

export default Video;
