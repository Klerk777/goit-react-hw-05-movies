import { toast } from 'react-toastify';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.scss';

const SearchForm = ({ onFormSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      toast('Pleas, enter some query', {
        icon: '❔',
      });
      return;
    } else {
      onFormSubmit(inputValue);
      setInputValue('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter yor query"
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
