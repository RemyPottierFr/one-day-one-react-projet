import React from "react";

function RickMarketFooter() {
  return (
    <footer className="flex flex-col md:flex-row justify-center items-center bg-white shadow-lg py-8 text-xl text-blue-500">
      <span>
        Find more about Rick and Morty{" "}
        <a
          alt="link to rick and morty api"
          className="underline"
          href="https://rickandmortyapi.com/"
        >
          here
        </a>
        .
      </span>
      <span className="ml-2">
        Made with{" "}
        <span aria-label="heart icon" role="img">
          ❤️
        </span>{" "}
        by Rémy Pottier
      </span>
    </footer>
  );
}

export default RickMarketFooter;
