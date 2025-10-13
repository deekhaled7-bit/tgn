export function TestimonialCard({ text, direction, index }: any) {
  // Rotation values for a playful look
  const rotations = [
    "-rotate-6",
    "-rotate-3",
    "rotate-2",
    "rotate-3",
    // "rotate-6",
    // "-rotate-2",
  ];
  // Pick a rotation based on index or direction
  const rotationClass = rotations[index % rotations.length];
  return (
    <div
      className={`relative bg-hot-pink rounded-2xl 
       shadow-lg p-2 flex justify-start flex-col md:mb-10 items-center w-64 text-white min-h-[80px] h-auto border ${rotationClass} `}
      // style={{ marginBottom: "2.5rem" }}
    >
      <div className="text-center text-base font-medium text-creamey mb-1">
        {text}
      </div>
      {/* Chat bubble tail */}
      <div
        className={`absolute -bottom-4 ${
          direction === "left" ? "left-6" : "right-6"
        } w-4 h-4 overflow-visible text-hot-pink pointer-events-none`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          {/* Simple triangle for classic chat bubble tail */}
          <polygon points="0,0 16,0 8,16" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
