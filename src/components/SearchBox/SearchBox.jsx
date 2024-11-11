import { useDispatch, useSelector } from "react-redux";

import { filtersContacts, setFilter } from "../../redux/filtersSlice"

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const filters = useSelector(filtersContacts)
  const dispatch = useDispatch();
  
  return (
    <div className={css.SearchBox}>
      <p className={css.filterText}>
        <b>Find contact by name</b>
      </p>
      <input
        className={css.filterInput}
        type="text"
        value={filters}
        onChange={(e) => {
          const action =setFilter(e.target.value)
        dispatch(action)
        }}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;

