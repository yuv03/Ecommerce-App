import React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  const [search, setSearch] = React.useState('');

  const onChangeSearch = val => setSearch(val);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={search}
    />
  );
};

export default SearchBar;