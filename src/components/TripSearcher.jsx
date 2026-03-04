const TripSearcher = () => {
  return (
    <section className="w-full mb-10 mt-10">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Find Your Next Trip
        </h1>
        <p className="mt-2 text-base-content/70">
          Choose trip details and continue to destinations.
        </p>

        <div className="mt-8 rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Origin */}
            <label className="form-control">
              <div className="label">
                <span className="label-text font-medium">Origin</span>
              </div>
              <input
                type="text"
                placeholder="Origin"
                className="input input-bordered w-full rounded-full"
              />
            </label>

            {/* Destination */}
            <label className="form-control">
              <div className="label">
                <span className="label-text font-medium">Destination</span>
              </div>
              <input
                type="text"
                placeholder="Destination"
                className="input input-bordered w-full rounded-full"
              />
            </label>

            {/* Depart date */}
            <label className="form-control">
              <div className="label">
                <span className="label-text font-medium">Depart</span>
              </div>
              <input
                type="date"
                className="input input-bordered w-full rounded-full"
              />
            </label>

            {/* Return date */}
            <label className="form-control">
              <div className="label">
                <span className="label-text font-medium">Return</span>
              </div>
              <input
                type="date"
                className="input input-bordered w-full rounded-full"
              />
            </label>
          </div>

          <button className="btn mt-6 w-full rounded-full bg-fuchsia-600 text-white hover:bg-fuchsia-700 border-0">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default TripSearcher;
