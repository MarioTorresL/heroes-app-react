import {HeroCard} from "../components";

export const SearchPage = () => {
  return (
    <>
      <h1>Search Page</h1>
      <hr />
      <div className="">
        <form className="mt-2 d-flex flex-column">
          <input
            type="text"
            className="form-control"
            placeholder="Busca un heroe"
            name="seartchText"
            autoComplete="off"
          />
          <button className="btn btn-outline-warning mt-3">Search</button>
        </form>

        <div className="mt-2">

          <div className="alert alert-secondary">Waiting for search a hero</div>

          <div className="alert alert-danger">
            There's no results with <b>XXXXXXXX</b>
          </div>

          <div className="d-flex">
            {/* <HeroCard /> */}
          </div>
        </div>
      </div>
    </>
  );
};
