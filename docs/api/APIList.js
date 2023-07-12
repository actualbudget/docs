import React from 'react';

export default function APIList({ title, sections }) {
  return (
    <div className="mt-4">
      <div className="">{title}</div>

      <ul>
        {sections.map(name => {
          let id = name.replace(/[A-Z]/g, '-$&'); 
          id = id.replace(/[ -]/g, '-').toLowerCase();
          id = id.replace(/^-/g, '');
          return (
            <li className="list-none m-0 mt-1 pl-4 text-sm link-color-inherit text-gray-700">
              <a className="no-underline" href={'#' + id}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
