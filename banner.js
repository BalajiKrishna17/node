import React from "react";


export const Banner = () => {
  return (
    <div>
      <h2>RECENT RELEASES</h2>
      <div class="card">
        <img src="..\public\assets\download.webp" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">INDIAN 2</h5>
          <p class="card-text">
          CBFC: U/A 2024 ‧ Action/Thriller ‧ 2h 30m

          </p>
        </div>
      </div>
      <div class="card">
        <img src="..\public\assets\download.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">GOAT</h5>
          <p class="card-text">
          CCBFC: U/A 2024 ‧ Action/Sci-fi ‧ 3 hours


          </p>
        </div>
      </div>
    </div>
  );
};


