import { Link, useParams } from "react-router-dom";
import { useFetchData } from "../useFetchData";
import Loader from "../components/Loader";

export default function CountryDetails() {
  const { name } = useParams();

  const COUNTRY_URL = `https://restcountries.com/v3.1/name/${name}`;
  const { result, loading, fetchError } = useFetchData(COUNTRY_URL);

  // Loading state
  if (loading) {
    return <Loader />;
  }

  // Error state
  if (fetchError || !result || result.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        Failed to load country details
      </div>
    );
  }

  const {
    name: countryName,
    tld,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    borders,
    flags,
  } = result[0];

  const commonName = countryName?.common ?? "N/A";

  const nativeName = countryName?.nativeName
    ? Object.values(countryName.nativeName)[0]?.common
    : "N/A";

  const topLevelDomain = tld?.[0] ?? "N/A";
  const countryCapital = capital?.[0] ?? "N/A";
  const countryPopulation = population ?? 0;
  const countryRegion = region ?? "N/A";
  const countrySubRegion = subregion ?? "N/A";

  const countryLanguages = Object.values(languages || {}).join(", ") || "N/A";

  const countryCurrencies =
    Object.values(currencies || {})
      .map((c) => c.name)
      .join(", ") || "N/A";

  const countryBorders = borders || [];
  const flag = flags?.png;

  return (
    <div className="w-full max-w-5xl  bg-mainBg  p-8 relative mx-auto">
      <div className="w-full  max-w-5xl flex  flex-col lg:grid   lg:grid-cols-[2fr_1fr_1fr]   gap-10">
        <div className=" max-w-[569px] max-h-[400px]  shadow-xl rounded-2xl overflow-hidden lg:row-start-1 lg:row-end-3">
          <img
            src={flag}
            alt={commonName + " Flag"}
            className="w-full h-full object-cover p-2 rounded-4xl"
          />
        </div>
        {/* Left Section */}
        <div className=" w-[184px]">
          <h1 className="text-[2rem] font-bold text-text mb-6">
            {commonName} - {nativeName}
          </h1>

          <div className="space-y-3 text-text text-[1rem]">
            <p>
              <span className="font-semibold">Native Name:</span> {nativeName}
            </p>
            <p>
              <span className="font-semibold">Population:</span>{" "}
              {countryPopulation.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Region:</span> {countryRegion}
            </p>
            <p>
              <span className="font-semibold">Sub Region:</span>{" "}
              {countrySubRegion}
            </p>
            <p>
              <span className="font-semibold">Capital:</span> {countryCapital}
            </p>
          </div>
        </div>

        <div className=" w-[204px] text-[1rem]">
          <p>
            <span className="font-semibold">Top Level Domain:</span>{" "}
            {topLevelDomain}
          </p>
          <p>
            <span className="font-semibold">Currencies:</span>{" "}
            {countryCurrencies}
          </p>
          <p>
            <span className="font-semibold">Languages:</span> {countryLanguages}
          </p>
        </div>
        {/* Border Countries */}
        <div className="mt-6 col-start-2 row-start-2">
          <p className="font-semibold mb-3">Border Countries:</p>
          <div className="flex gap-3 flex-wrap">
            {countryBorders.length > 0 ? (
              countryBorders.map((code) => (
                <span
                  key={code}
                  className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 text-sm cursor-pointer hover:bg-gray-50"
                >
                  {code}
                </span>
              ))
            ) : (
              <p className="text-gray-500">No border countries</p>
            )}
          </div>
        </div>
      </div>

      {/* Back Button */}
      <Link
        to=".."
        className="absolute top-3 left-3 p-3 bg-white shadow-lg rounded-full hover:bg-gray-50 transition"
      >
        <img src="/images/left (2).png" className="w-full" alt="back" />
      </Link>
    </div>
  );
}
