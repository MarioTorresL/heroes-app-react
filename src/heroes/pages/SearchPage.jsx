import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;

  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({ searchText: q });

  const onSearchSubmit = (event) => {
    event.preventDefault(); //evita el full refreach
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>Search Page</h1>
      <hr />
      <div className="">
        <form className="mt-2 d-flex flex-column" onSubmit={onSearchSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Busca un heroe"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
          />
          <button className="btn btn-outline-warning mt-3">Search</button>
        </form>

        {/* {q === "" ? ( */}
        {/*   <div className="alert alert-secondary mt-2"> */}
        {/*     Waiting for search a hero.... */}
        {/*   </div> */}
        {/* ) : ( */}
        {/*   heroes.length === 0 && ( */}
        {/*     <div className="alert alert-danger mt-2"> */}
        {/*       There's no results with <b>{q}</b> */}
        {/*     </div> */}
        {/*   ) */}
        {/* )} */}

        <div
          className="alert alert-secondary mt-2"
          style={{ display: showSearch ? "" : "none" }} >
          Waiting for search a hero....
        </div>
        <div
          className="alert alert-danger mt-2"
          style={{ display: showError ? "" : "none" }} >
          There's no results with <b>{q}</b>
        </div>

        <div className="d-flex flex-wrap mt-2">
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
