import { Stack, useLocalSearchParams } from 'expo-router'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import products from '@assets/data/products'
import { defaultProductImage } from '@/components/ProductListItem'
import { useState } from 'react'
import Button from '@/components/Button'


const pizzaSizes = ['S', 'M', 'L', 'XL']

const productDetails = () => {

  const { productId } = useLocalSearchParams()

  const [selectedSize, setSelectedSize] = useState('M')

  const product = products.find((p) => p.id.toString() == productId)

  const addToCart = () => {
    console.log('Button pressed!')
  }

  if(!product) {
    return <Text>Product not found</Text>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: product?.name}} />

      <Image source={{uri: product.image || defaultProductImage}} style={styles.image}/>

      <Text>Select Size</Text>

      <View style={styles.sizes}>
        {pizzaSizes.map((item) => (
          <Pressable 
            style={[styles.size, {backgroundColor: selectedSize == item ? 'gainsboro' : 'white'}]} 
            key={item} 
            onPress={() => setSelectedSize(item)} >

            <Text 
              style={[styles.sizeText, {color: selectedSize == item ? 'black' : 'gray'}]}
              >
                {item}
            </Text>

          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>

      <Button text='Add to cart' onPress={addToCart} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500'
  }
})

export default productDetails