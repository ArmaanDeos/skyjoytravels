import FlightSearch from "../FlightSearchForm";

const FixedBackground = () => {
  return (
    <section
      className="relative w-full h-full min-h-[400px] sm:h-[600px] bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/best-flight-deals.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 text-white">
        <FlightSearch />
      </div>
    </section>
  );
};

export default FixedBackground;
