export default function SearchInput({ setSearchValue }) {
  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearchValue(e.target.elements.search.value);
  };

  return (
    <form
      className="relative w-full max-w-[480px] h-14 rounded-[105px] shadow  mb-10 sm:mb-0"
      onSubmit={(e) => handleSearchInput(e)}
    >
      <div className="bg-bg  rounded-[105px]">
        <input
          type="text"
          name="search"
          className="w-full h-14 bg-transparent rounded-[105px] p-1.5 pl-16 focus:outline-none focus:border-none"
        />
        <svg
          className="absolute top-5 left-[23px]"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z"
            fill="#374151"
          />
        </svg>
      </div>
    </form>
  );
}
