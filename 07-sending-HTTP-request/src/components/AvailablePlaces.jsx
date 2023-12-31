import { useState, useEffect } from "react";

import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetchting, setIsFectching] = useState();
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fectchPlaces() {
      setIsFectching(true);
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setIsFectching(false);
    }

    fectchPlaces();
  }, []);

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
