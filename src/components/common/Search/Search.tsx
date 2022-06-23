import { ChangeEventHandler, FC, useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';

const Search: FC = () => {
  const [text, setText] = useState('');

  const handleTextChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setText(e.target.value);

  return (
    <div className="mx-4 flex w-full max-w-lg items-center space-x-2 rounded border p-2 md:mx-8">
      <SearchIcon className="h-6 w-6 text-dark/50 dark:text-light/50" />
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="w-full bg-transparent focus:outline-none"
        type="search"
        name="search"
        id="search"
        value={text}
        placeholder="Search..."
        onChange={handleTextChange}
      />
    </div>
  );
};

export default Search;
