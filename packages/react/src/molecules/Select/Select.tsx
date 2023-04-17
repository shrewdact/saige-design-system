import React, { useEffect, useRef, useState } from 'react'

interface SelectOption {
  label: string
  value: string
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void
  options: SelectOption[]
  label?: string
}
import { HiChevronDown } from 'react-icons/hi'

const Select: React.FC<SelectProps> = ({
  options = [],
  label = 'Please select an option...',
  onOptionSelected: handler,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const labelRef = useRef<HTMLButtonElement>(null)
  const [overlayTop, setOverlayTop] = useState<number>(0)

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    setIsOpen(!isOpen)

    if (handler) {
      handler(option, optionIndex)
    }
  }

  const onLabelClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setOverlayTop(labelRef.current?.offsetHeight || 0)
  }, [labelRef.current?.offsetHeight])

  return (
    <div className='sds-select'>
      <button
        ref={labelRef}
        className='sds-select__label'
        onClick={() => onLabelClick()}
      >
        <span>{label}</span>
        <span>
          <HiChevronDown width='1rem' height='1rem' />
        </span>
      </button>

      {isOpen ? (
        <ul className='sds-select__overlay' style={{top: overlayTop}}>
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
