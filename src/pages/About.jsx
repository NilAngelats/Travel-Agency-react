const About = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">About TravelNow</h1>

      {/* Intro text */}
      <p className="text-base-content/70 max-w-3xl mb-8">
        TravelNow helps people plan better trips with practical guidance,
        transparent pricing, and simple booking flows. We focus on clarity
        first: fewer surprises, faster decisions, and itineraries that actually
        match the way people travel.
      </p>

      {/* Content Card */}
      <div className="grid md:grid-cols-2 border border-base-300 rounded-2xl overflow-hidden shadow-sm">
        {/* Image */}
        <div className="h-full">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Beautiful travel destination"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="p-8 bg-base-100">
          <h2 className="text-2xl font-semibold mb-4">What we do</h2>

          <p className="text-base-content/70 mb-6">
            We help turn travel ideas into real experiences. From the first
            destination dream to the final booking, we guide each step so
            planning feels simple, clear, and exciting.
          </p>

          <ul className="space-y-3 list-disc list-inside text-base-content/80">
            <li>Flight and stay planning</li>
            <li>Destination suggestions based on your travel style</li>
            <li>Practical support before you leave</li>
            <li>Flexible options for different budgets</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
