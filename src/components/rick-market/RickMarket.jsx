import React from "react";
import RickMarketHeader from "./RickMarketHeader";
import RickMarketList from "./RickMarketList";
import RickMarketFooter from "./RickMarketFooter";

function RickMarket() {
  return (
      <div className="bg-gray-100">
          <RickMarketHeader />
          <RickMarketList />
          <RickMarketFooter />
      </div>
  );
}

export default RickMarket;
