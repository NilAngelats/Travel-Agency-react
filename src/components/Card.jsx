import { Link } from "react-router";

const Card = ({ destination }) => {
  const {
    slug,
    city,
    country,
    continent,
    description,
    image,
    price,
    duration,
    rating,
  } = destination;

  return (
    <article className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition">
      <figure className="h-44 overflow-hidden">
        <img
          src={image}
          alt={`${city}, ${country}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </figure>

      <div className="card-body gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="card-title leading-tight">
              {city}
              <span className="text-base font-normal text-base-content/70">
                , {country}
              </span>
            </h2>

            <div className="mt-1 flex flex-wrap gap-2">
              <span className="badge badge-outline">{continent}</span>
              {duration && (
                <span className="badge badge-ghost">{duration}</span>
              )}
            </div>
          </div>

          {typeof rating === "number" && (
            <div className="badge badge-primary badge-lg">
              ⭐ {rating.toFixed(1)}
            </div>
          )}
        </div>

        <p className="text-sm text-base-content/80 line-clamp-3">
          {description}
        </p>

        <div className="mt-1 flex items-center justify-between">
          {typeof price === "number" ? (
            <div className="text-sm">
              <span className="font-semibold">From €{price}</span>
              <span className="text-base-content/60"> / person</span>
            </div>
          ) : (
            <div />
          )}

          <div className="card-actions">
            <Link
              to={`/destinations/${slug}`}
              className="btn btn-sm btn-primary"
            >
              View details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
