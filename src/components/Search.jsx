const Search = ({ searchHandler }) => {
  return (
    <div className='search-form'>
      <input
        type='text'
        className='search-form__input'
        autoFocus
        onChange={(e) => searchHandler(e.target.value)}
        placeholder='Search by name'
      />
    </div>
  );
};

export default Search;
