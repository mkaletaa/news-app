import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  StyleSheet,
} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function HeadlineList({ newsList }) {

  const router = useRouter()

  const renderItem = ({ item }) => {
    return item.urlToImage ? (
      <TouchableOpacity style={styles.itemContainer}
              onPress={() =>
          router.push(
            `/Article?title=${item.title}&image=${item.urlToImage}&content=${item.content}&url=${item.url}`
          )
        }
      >
        <Image style={styles.image} source={{ uri: item.urlToImage }} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.itemContainer}
              onPress={() =>
          router.push(
            `/Article?title=${item.title}&image=${item.urlToImage}&content=${item.content}&url=${item.url}`
          )
        }
      >
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        // showsVerticalScrollIndicator={false}
        data={newsList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flexWrap: 'wrap',
  },
})
