import React, { useState } from "react";
import { URL, useFetchData } from "../useFetchData";
import SearchInput from "./../components/SearchInput";
import SelectorInput from "../components/SelectorInput";
import CountryList from "../components/CountryList";

const MainPage = () => {
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const { result, loading,fetchError } = useFetchData(URL);
  
  return (
    <>
      <div className="w-full max-w-6xl h-full p-lg mx-auto  flex flex-col flex-1 items-start space-x-4 mt-3.5 mb-10 sm:flex-row  md:items-center md:justify-between">
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <SelectorInput setSelectedContinent={setSelectedContinent} />
      </div>
      <CountryList
        selectedContinent={selectedContinent}
        searchValue={searchValue}
        result={result}
        loading={loading}
        fetchError={fetchError}
      />
    </>
  );
};

export default MainPage;
