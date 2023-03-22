import React, { useState } from "react";
import "./styles.css";

function App() {
  const [showGrid, setShowGrid] = useState(false);
  const [highlightedZone, setHighlightedZone] = useState(null);
  const [showZoom, setShowZoom] = useState(false);
  const [showImage, setShowImage] = useState(true);

  const handleHover = (event) => {
    setShowGrid(true);
    setHighlightedZone(null);
  };

  const handleGridHover = (event, row, col) => {
    setHighlightedZone({ row, col });
  };

  const handleGridClick = () => {
    setShowImage(false);
    setShowZoom(true);
    setShowGrid(false);
  };

  return (
    <div
      className="container"
      onMouseEnter={handleHover}
      onMouseLeave={() => setShowGrid(false)}
    >
      <div className="image-container">
        {showImage && (
          <img src="https://picsum.photos/800" alt="placeholder-image" />
        )}
        {showGrid && (
          <div className="grid-container">
            {[...Array(10)].map((_, row) =>
              [...Array(10)].map((_, col) => (
                <div
                  key={`${row}-${col}`}
                  className={`grid-item ${
                    highlightedZone?.row === row && highlightedZone?.col === col
                      ? "highlighted"
                      : ""
                  }`}
                  onMouseEnter={(event) => handleGridHover(event, row, col)}
                  // onClick={handleGridClick}
                />
              ))
            )}
          </div>
        )}
      </div>
      {/* {showZoom && (
        <div className="zoom-container">
          {[...Array(10)].map((_, row) =>
            [...Array(10)].map((_, col) => (
              <div key={`${row}-${col}`} className="zoom-item">
                <img
                  src={`https://picsum.photos/200?random=${row}-${col}`}
                  alt="zoom-image"
                  className="zoom-image"
                />
              </div>
            ))
          )}
        </div>
      )} */}
    </div>
  );
}

export default App;
