import React, { useEffect, useRef, useState } from 'react'
import Text from '../../atoms/Text/Text'
import { HiCheck } from 'react-icons/hi'

interface SelectOption {
  label: string
  value: string
}

interface RenderOptionProps {
  isSelected: boolean
  option: SelectOption
  getOptionRecommendedProps: (overrideProps?: Object) => Object
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void
  options: SelectOption[]
  label?: string
  renderOption?: (props: RenderOptionProps) => React.ReactNode
}
import { HiChevronDown } from 'react-icons/hi'

const Select: React.FC<SelectProps> = ({
  options = [],
  label = 'Please select an option...',
  onOptionSelected: handler,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null)
  const labelRef = useRef<HTMLButtonElement>(null)
  const [overlayTop, setOverlayTop] = useState<number>(0)

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    setIsOpen(!isOpen)

    if (handler) {
      handler(option, optionIndex)
    }

    setSelectedIndex(optionIndex)
    setIsOpen(false)
  }

  const onLabelClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setOverlayTop(labelRef.current?.offsetHeight || 0)
  }, [labelRef.current?.offsetHeight])

  let selectedOption = null

  if (selectedIndex !== null) {
    selectedOption = options[selectedIndex]
  }

  return (
    <div className='sds-select'>
      <button
        ref={labelRef}
        className='sds-select__label'
        onClick={() => onLabelClick()}
      >
        <Text>{selectedOption === null ? label : selectedOption.label}</Text>
        <span>
          <HiChevronDown
            width='1rem'
            height='1rem'
            className={`sds-select__caret ${
              isOpen ? 'sds-select__caret--open' : 'sds-select__caret--closed'
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <ul className='sds-select__overlay' style={{ top: overlayTop }}>
          {options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex
            const renderOptionProps = {
              option,
              isSelected,
              getOptionRecommendedProps: (overrideProps = {}) => {
                return {
                  className: `sds-select__option ${
                    isSelected ? 'sds-select__option--selected' : ''
                  }`,
                  key: option.value,
                  onClick:() => onOptionSelected(option, optionIndex),
                  ...overrideProps,
                }
              },
            }

            if (renderOption) {
              return renderOption(renderOptionProps)
            }
            return (
              <li
                key={option.value}
                className={`sds-select__option ${
                  isSelected ? 'sds-select__option--selected' : ''
                }`}
                onClick={() => onOptionSelected(option, optionIndex)}
              >
                <Text>{option.label}</Text>

                {isSelected && <HiCheck width='1rem' height='1rem' />}
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default Select
