import React from 'react'
import { Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { createStyles } from 'antd-style'

interface EnterButtonConfig {
  color?: string
  icon?: React.ReactNode
  className?: string
}

interface CommonInputProps {
  value: string
  placeholder?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  suffix?: React.ReactNode
  enterButton?: EnterButtonConfig
  disabled?: boolean
}

const CommonInput: React.FC<CommonInputProps> = ({
  value,
  placeholder = 'Search',
  onChange,
  onSearch,
  suffix,
  enterButton,
  disabled,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const useStyles = createStyles(({ css }) => ({
    noHoverFocus: css`
      &.ant-input,
      &.ant-input-affix-wrapper {
        border: none !important;
        box-shadow: none !important;

        &:hover,
        &:focus,
        &-focused,
        &:focus-within {
          border: none !important;
          box-shadow: none !important;
        }
      }
    `,
  }))

  const { styles } = useStyles()

  if (enterButton) {
    return (
      <div className="flex items-center bg-white rounded-md w-full shadow-sm">
        <Input
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          allowClear
          onChange={handleChange}
          className={styles.noHoverFocus}
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
          }}
        />
        <Button
          className={` ${enterButton?.className || ''}`}
          type="primary"
          style={{
            backgroundColor: disabled
              ? 'var(--color-gray-300)'
              : enterButton?.color || 'var(--color-primary)',
            width: '10px',
            borderRadius: '8px',
          }}
          disabled={disabled}
        >
          {enterButton?.icon || (
            <SearchOutlined className="text-white text-lg" />
          )}
        </Button>
      </div>
    )
  }

  return (
    <Input
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      allowClear
      onChange={handleChange}
      onPressEnter={() => onSearch?.(value)}
      suffix={suffix}
      className={styles.noHoverFocus}
    />
  )
}

export { CommonInput }
