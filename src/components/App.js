import React, { useState } from 'react';
import Nav from './Nav';
import HogTile from './HogTile';
import hogs from '../porkers_data';

function App() {
  const [selectedHog, setSelectedHog] = useState(null);
  const [greasedFilter, setGreasedFilter] = useState(false);
  const [sortBy, setSortBy] = useState(null); // State to track sort criteria

  const handleHogClick = (hog) => {
    setSelectedHog(hog);
  };

  const toggleGreasedFilter = () => {
    setGreasedFilter(!greasedFilter);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Apply greased filter and sorting to hog data
  let displayedHogs = [...hogs];
  if (greasedFilter) {
    displayedHogs = displayedHogs.filter((hog) => hog.greased);
  }
  if (sortBy === "name") {
    displayedHogs.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "weight") {
    displayedHogs.sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="App">
      <Nav toggleGreasedFilter={toggleGreasedFilter} handleSortChange={handleSortChange} />
      <div className="ui grid container">
        {displayedHogs.map((hog) => (
          <div className="ui eight wide column" key={hog.name}>
            <HogTile
              name={hog.name}
              image={hog.image}
              handleClick={() => handleHogClick(hog)}
            />
          </div>
        ))}
      </div>
      {selectedHog && (
        <div className="hogDetails">
          <h2>{selectedHog.name}</h2>
          <p>Specialty: {selectedHog.specialty}</p>
          <p>Weight: {selectedHog.weight}</p>
          <p>Greased: {selectedHog.greased ? 'Yes' : 'No'}</p>
          <p>Highest Medal Achieved: {selectedHog['highest medal achieved']}</p>
        </div>
      )}
    </div>
  );
}

export default App;
