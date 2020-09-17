import React from "react";

function RickMarketFooter() {
  return (
    <footer className="flex flex-col md:flex-row justify-center items-center shadow-lg py-8 text-xl text-blue-500">
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
    </footer>
  );
}

export default RickMarketFooter;
