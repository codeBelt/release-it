'use client'

interface ButtonProps {
  title?: string
  appName?: string
  primary?: boolean
  className?: string
  backgroundColor?: string
  size?: 'small' | 'large'
  onClick?: () => void
}

export const Button = ({
  title,
  appName,
  className,
  backgroundColor,
  onClick, // TODO: onPress -> react-native => react-native-web
}: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={
        onClick
          ? onClick
          : () => alert(`Hello from your ${appName || '??'} app!`)
      }
      style={{ backgroundColor }}
    >
      {title}
    </button>
  )
}
