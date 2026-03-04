import { useOutletContext } from "react-router";
import Card from "../components/Card";

const Destinations = () => {
  const destinations = useOutletContext();
  if (!destinations) return <p className="message--loading">Loading...</p>;

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-3xl font-bold">Destinations</h2>
        <span className="text-base-content/70">
          Click on a destination to view all the details.
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <Card key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
