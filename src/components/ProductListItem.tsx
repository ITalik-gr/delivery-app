import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Product } from '../types';
import Colors from '../constants/Colors';
import { Link } from 'expo-router';


type ProductListItemProps = {
  product: Product
}

export const defaultProductImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

export default function ProductListItem({ product } : ProductListItemProps) {
  return (
    <Link href={`/menu/${product.id}`} asChild>

      <Pressable style={styles.itemContainer}>

        <Image source={{ uri: product.image || defaultProductImage }} style={styles.image} />

        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>


      </Pressable> 

    </Link>
  )
}


const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
    objectFit: 'contain'
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '49%'
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