import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const options = [
  {value: '/profile.jpeg', label: 'Peter Parker'},
  {value: '/marie_jane_profile.jpeg', label: 'Marie Jane'},
  {value: '/Lex_Luthor.jpg', label: 'Lex Luthor'},
];

const CustomDropdown = ({onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option)
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown pl-10">
      <div className="dropdown-header flex items-center" onClick={() => setIsOpen(!isOpen)}>
     
        {selectedOption ? <div className='flex gap-2 items-center cursor-pointer my-2'>
          <img src={selectedOption.value} alt="img" className='w-10 h-10'/>
          {selectedOption.label}
        </div> : 'Select an assignee'}
        <div className='p-3'><IoIosArrowDown /></div>
      </div>
      {isOpen && (
        <div className="dropdown-options cursor-pointer">
          {options.map((option) => (
            <div
              key={option.value}
              className='dropdown-option flex items-center gap-2'
              onClick={() => handleSelect(option)}
            >
              <img src={option.value} alt="opt" className='h-10 w-10'/>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
