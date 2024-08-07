import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { HomeIcon, LibraryIcon, SearchIcon } from './Icons';

function CustomTabBar() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable>
        <View style={styles.tab}>
          <HomeIcon />
          <Text style={styles.tabText}>Home</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => router.push("/")}>
        <View style={styles.tab}>
          <SearchIcon focused={true}/>
          <Text style={styles.tabText}>Search</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.tab}>
          <LibraryIcon />
          <Text style={styles.tabText}>Library</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height: 70,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
  }
});

export default CustomTabBar;