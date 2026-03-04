import { useNavigate, useOutletContext, useParams } from "react-router";
import NotFound from "./NotFound";

const SingleDestination = () => {
  const { slug } = useParams();
  const destinations = useOutletContext();
  const navigate = useNavigate();

  if (!destinations) return <p className="p-6">Loading...</p>;

  const destination = destinations.find(
    (destination) => destination.slug === slug,
  );

  if (!destination) return <NotFound />;

  const {
    city,
    country,
    continent,
    price,
    duration,
    rating,
    image,
    description,
  } = destination;

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-ghost mb-6 gap-2"
        type="button"
      >
        ← Go back
      </button>

      {/* Hero */}
      <div className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm">
        <div className="relative">
          <img
            src={image}
            alt={`${city}, ${country}`}
            className="h-72 w-full object-cover md:h-96"
            loading="eager"
            decoding="async"
          />

          {/* soft overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white md:text-4xl">
                  {city}
                  <span className="text-white/80 font-normal">, {country}</span>
                </h1>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="badge badge-outline text-white border-white/60">
                    {continent}
                  </span>
                  <span className="badge badge-outline text-white border-white/60">
                    {duration}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="badge badge-primary badge-lg gap-2">
                  ⭐ {Number(rating).toFixed(1)}
                </div>
                <div className="badge badge-secondary badge-lg">
                  From €{price}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-6 p-6 md:grid-cols-3">
          {/* Left: description */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold">About this destination</h2>
            <p className="text-base-content/80 leading-relaxed">
              {description}
            </p>

            {/* highlights */}
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-base-300 p-4">
                <p className="text-sm text-base-content/60">Best for</p>
                <p className="font-semibold">Nature, city views, culture</p>
              </div>
              <div className="rounded-xl border border-base-300 p-4">
                <p className="text-sm text-base-content/60">Typical trip</p>
                <p className="font-semibold">{duration}</p>
              </div>
            </div>
          </div>

          {/* Right: booking card (UI only) */}
          <aside className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm h-fit">
            <h3 className="text-lg font-semibold mb-4">Trip summary</h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-base-content/70">Destination</span>
                <span className="font-medium">
                  {city}, {country}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-base-content/70">Duration</span>
                <span className="font-medium">{duration}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-base-content/70">Rating</span>
                <span className="font-medium">
                  ⭐ {Number(rating).toFixed(1)}
                </span>
              </div>

              <div className="divider my-2" />

              <div className="flex items-center justify-between">
                <span className="text-base-content/70">From</span>
                <span className="text-lg font-bold">€{price}</span>
              </div>
              <p className="text-xs text-base-content/60">
                Pricing is a mock example for this exercise.
              </p>

              <button className="btn btn-primary w-full mt-2" type="button">
                Continue
              </button>

              <button className="btn btn-outline w-full" type="button">
                Save for later
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default SingleDestination;
