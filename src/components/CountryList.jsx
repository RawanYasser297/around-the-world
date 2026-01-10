import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import Loader from "./Loader";
import DataNotFound from "./DataNotFound";

export default function CountryList({
  selectedContinent,
  result,
  loading,
  searchValue,
  fetchError
}) {

  console.log('fetchError')
  console.log(fetchError)
  console.log(Boolean(fetchError))
  const filteredList = (rslt, slctdCntent, srchVlu) => {
    let list = [];
    slctdCntent === "All"
      ? (list = [...rslt])
      : (list = rslt.filter((country) => country.region === selectedContinent));

    return srchVlu
      ? list.filter((item) =>
          item.name.official.toLowerCase().includes(srchVlu.toLowerCase())
        )
      : list;
  };

  return (
    <div className="relative w-full max-w-6xl p-lg mx-auto  flex  justify-center items-center">
      {loading ? (
        <Loader />
      ) : !filteredList(result, selectedContinent, searchValue).length ? (
        <DataNotFound />
      ) : (
        <div className="w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
          {fetchError && <p className="text-red-700 font-semibold col-span-full">{fetchError}</p>}
          {filteredList(result, selectedContinent, searchValue).map(
            (countryResult) => (
              <Link
                key={countryResult.flags.svg}
                to={`/countries/${countryResult.name.common}`}
              >
                <CountryCard
                  capital={countryResult.capital[0]}
                  flags={countryResult.flags}
                  languages={countryResult.languages}
                  name={countryResult.name.common}
                  region={countryResult.region}
                  population={countryResult.population}
                />
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}
