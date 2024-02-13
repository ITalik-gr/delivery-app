import { Image, StyleSheet, Text, View } from 'react-native'
import { Product } from '../types';
import Colors from '../constants/Colors';


type ProductListItemProps = {
  product: Product
}

export const defaultProductImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default'

export default function ProductListItem({ product } : ProductListItemProps) {
  return (
    <View style={styles.container}>

      <Image source={{ uri: product.image || defaultProductImage }} style={styles.image} />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>

    </View> 
  )
}


const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint
  }
});