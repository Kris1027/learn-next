'use client';
import { useState } from 'react';

export function LanguageSelector() {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <>
      <p>Wybrana opcja: {selectedOption}</p>
      <select
        className='text-xl m-10 p-5 w-52'
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value='PL'>Polski</option>
        <option value='EN'>Angielski</option>
      </select>
    </>
  );
}
