import React, { useState } from 'react'

interface SelectOption {
  label: string
  value: string
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void
  options: SelectOption[]
  label?: string
}

const Select: React.FC<SelectProps> = ({
  options = [],
  label = 'Please select an option.',
  onOptionSelected: handler,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    setIsOpen(!isOpen)

    if (handler) {
      handler(option, optionIndex)
    }
  }

  const onLabelClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button onClick={() => onLabelClick()}>{label}</button>

      {isOpen ? (
        <ul>
          {options.map((option, optionIndex) => {
            return (
              <li
                key={option.value}
                onClick={() => onOptionSelected(option, optionIndex)}
              >
                {option.label}
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default Select
