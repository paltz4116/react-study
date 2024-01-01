import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetchting, setIsFectching] = useState();
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fectchPlaces() {
      setIsFectching(true);

      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }

        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({
          message: error.message || "Could not fetch places",
        });
      }

      setIsFectching(false);
    }

    fectchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occured." message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetchting}
      loadingText="Fetcthing place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
