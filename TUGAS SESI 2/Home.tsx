import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.location}>
        <View>
          <Text style={styles.locationText}>Location</Text>
          <Text style={styles.locationName}>jampang ciemas</Text>
        </View>
        <Image
          style={styles.profileImage}
          source={require('./source/image/USO.jpg')}
        />
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search coffee"
        placeholderTextColor="#888"
      />
      <View style={styles.promo}>
        <Image
          style={styles.promoImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1550948309-0d8983dbdcc3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
        <View style={styles.promoBadge}>
          <Text style={styles.promoBadgeText}>Promo</Text>
        </View>
        <Text style={styles.promoText}>Buy one get one FREE</Text>
      </View>
      <View style={styles.categories}>
        <TouchableOpacity
          style={[styles.categoryButton, styles.activeCategory]}>
          <Text style={styles.categoryText}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Machiatto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Latte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Americano</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.products}>
        <View style={styles.productCard}>
          <Image
            source={{
              uri: 'https://foodzilla.io/dist/images/does-cappuccino-have-caffeine-in-it.jpg',
            }}
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <View>
              <Text style={styles.productTitle}>Cappuccino</Text>
              <Text style={styles.productSubtitle}>with Chocolate</Text>
              <Text style={styles.productPrice}>$ 4.53</Text>
            </View>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.productCard}>
          <Image
            style={styles.productImage}
            source={{
              uri: 'https://foodzilla.io/dist/images/does-cappuccino-have-caffeine-in-it.jpg',
            }}
          />
          <View style={styles.productInfo}>
            <View>
              <Text style={styles.productTitle}>Cappuccino</Text>
              <Text style={styles.productSubtitle}>with Oat Milk</Text>
              <Text style={styles.productPrice}>$ 3.90</Text>
            </View>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.productCard}>
          <Image
            style={styles.productImage}
            source={{
              uri: 'https://foodzilla.io/dist/images/does-cappuccino-have-caffeine-in-it.jpg',
            }}
          />
          <View style={styles.productInfo}>
            <View>
              <Text style={styles.productTitle}>Cappuccino</Text>
              <Text style={styles.productSubtitle}>with Almond Milk</Text>
              <Text style={styles.productPrice}>$ 4.50</Text>
            </View>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.productCard}>
          <Image
            style={styles.productImage}
            source={{
              uri: 'https://foodzilla.io/dist/images/does-cappuccino-have-caffeine-in-it.jpg',
            }}
          />
          <View style={styles.productInfo}>
            <View>
              <Text style={styles.productTitle}>Cappuccino</Text>
              <Text style={styles.productSubtitle}>with Soy Milk</Text>
              <Text style={styles.productPrice}>$ 4.00</Text>
            </View>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 20,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationText: {
    color: '#888',
  },
  locationName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchBar: {
    backgroundColor: '#2c2c2c',
    color: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  promo: {
    position: 'relative',
    marginBottom: 20,
  },
  promoImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  promoBadge: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  promoBadgeText: {
    color: 'white',
    fontSize: 14,
  },
  promoText: {
    position: 'absolute',
    top: 50,
    left: 20,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#3e3e3e',
    padding: 10,
    borderRadius: 20,
  },
  activeCategory: {
    backgroundColor: '#b5651d',
  },
  categoryText: {
    color: 'white',
    fontSize: 14,
  },
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#2c2c2c',
    borderRadius: 10,
    padding: 10,
    width: '48%',
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  productTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productSubtitle: {
    color: '#888',
  },
  productPrice: {
    color: '#b5651d',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#b5651d',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 18,
  },
});
