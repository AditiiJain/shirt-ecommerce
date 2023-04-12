import React from "react";
import "./Sort.css";
import { useDispatch, useSelector } from "react-redux";
import { GET_SORT_VALUE } from "../../redux/filterItemsSlice";


function Sort() {
  const dispatch = useDispatch();
  const sorting = (e) =>{
    let userValue = e.target.value
     dispatch(GET_SORT_VALUE(userValue))
  }
  return (
    <div className="sort-sortBy">
      <span>Sort By: </span>
      <form>
        <label htmlFor="sort"></label>
        <select name="sort" id="sort" className="select-sort" onClick={(e)=>sorting(e)}> 
          <option value="lowest">Price(lowest)</option>
          <option value="highest">Price(highest)</option>
          <option value="a-z">Name(A-Z)</option>
          <option value="z-a">Name(Z-A)</option>
        </select>
      </form>

    </div>
  );
}

export default Sort;
