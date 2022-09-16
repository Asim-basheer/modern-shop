import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Search = ({ searchHandler, setMenuToggle }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate('/');
    setMenuToggle(false);
    searchHandler(e.target.value);
  };
  return (
    <div className='search-form'>
      <input
        type='text'
        className='search-form__input'
        autoFocus
        onChange={handleChange}
        placeholder='Search by name'
      />

      <div className='search-form__icon'>
        <BiSearch />
      </div>
    </div>
  );
};

export default Search;
