import React, { useEffect } from "react";
import RickMarketListCard from "./RickMarketListCard";
import { useSelector, useDispatch } from "react-redux";
import { ajaxActions } from "../../actions";

function RickMarketList() {
  const dispatch = useDispatch();
  const { ajaxList } = useSelector((state) => state);

  useEffect(() => {
    dispatch(ajaxActions.queryAllCharacters());
  }, [dispatch]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:w-10/12 lg:8/12 mx-auto mt-24 py-16 col-gap-8 row-gap-8">
      {ajaxList.map((character) => {
        return <RickMarketListCard character={character} key={character.id} />;
      })}
    </section>
  );
}

export default RickMarketList;
