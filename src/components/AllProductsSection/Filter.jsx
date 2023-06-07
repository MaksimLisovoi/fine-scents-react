import { memo } from 'react';

export const Filter = memo(({ options, changeFilter, filter }) => {
  return (
    <ul className="section-products__controls-list">
      {options.map(option => (
        <li key={option}>
          <button
            className={`${option === filter ? 'active' : ''}`}
            type="button"
            name={option}
            onClick={changeFilter}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
});
