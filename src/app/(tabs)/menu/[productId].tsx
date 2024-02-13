import { Stack, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const productDetails = () => {

  const { productId } = useLocalSearchParams()

  return (
    <View>

      <Stack.Screen options={{title: "Product Details"}} />

      <Text>productDetails {productId}</Text>
    </View>
  )
}

export default productDetails