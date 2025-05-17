"use client";

export default function PageHeader({ title, subtitle }) {
  const backgroundImage = "/images/11.jpg"; // Place your one image here

  return (
    <div
      className="relative text-indigo-50 py-20 md:py-28"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(30, 41, 59, 0.85), rgba(49, 46, 129, 0.85)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold font-head">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-indigo-200 font-body">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
