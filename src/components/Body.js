import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../constants";
import RestaruantCard from "./RestarauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allResto, setAllResto] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterResto, setFilterResto] = useState([]);

  useEffect(() => {
    //Api Call
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
      console.log(json);
      //optional Chaining
      setAllResto(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterResto(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  }
  const onChangeInput = (e) => {
    setSearchText(e.target.value);
  };

  // const isOnline = useOnline();

  // if (!isOnline) {
  //   return <h1>🔴 Offline, Please check your internet connection!!</h1>;
  // }

  if (!allResto) {
    return null;
  }

  return allResto?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={onChangeInput}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allResto);
            setFilterResto(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="rest-list">
        {filterResto.length > 0 ? (
          filterResto.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaruantCard {...restaurant?.info} />
              </Link>
            );
          })
        ) : (
          <h1>No Resturents Found...</h1>
        )}
      </div>
    </>
  );
};

export default Body;
