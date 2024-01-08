import React from "react";

const AnimatedBorderImage = ({ src, alt }) => {
  return (
    <div className="relative inline-block">
      {/* Image */}
      <img
        className="rounded-full w-32 h-32 object-cover"
        src={src}
        alt={alt}
      />

      {/* Animated border */}
      <div className="absolute inset-0 rounded-full border-2 border-[#00aeff] dark:border-[#89cff0] borderSpin" />
      <div className="absolute inset-0 rounded-full border-2 border-x-cyan-700/50 dark:border-x-blue-700/50 borderSpin" />
      <div className="absolute inset-0 rounded-full border-2 border-b-cyan-700/50 dark:border-b-blue-700/50 borderSpin" />
    </div>
  );
};

export default AnimatedBorderImage;
