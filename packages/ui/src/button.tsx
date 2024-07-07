'use client'

import { Text, View, TouchableOpacity } from 'react-native'

interface ButtonProps {
  title?: string
  appName?: string
  primary?: boolean
  className?: string
  backgroundColor?: string
  size?: 'small' | 'large'
  onPress?: () => void
}

export const Button = ({ title, backgroundColor }: ButtonProps) => {
  return (
    <TouchableOpacity>
      <View style={{ backgroundColor: backgroundColor || 'red', padding: 12 }}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
