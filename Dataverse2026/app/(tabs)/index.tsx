import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { hobby1 } from '@/assets/images/hobby1';
import { hobby2 } from '@/assets/images/hobby2';

export default function PortfolioScreen() {
  const openSocial = async () => {
    const url = 'https://instagram.com/thedoodlekart';
    try {
      await Linking.openURL(url);
    } catch (e) {
      // fallback: do nothing
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.socialIcon} onPress={openSocial} accessibilityLabel="social">
        <Text style={styles.socialText}>@thedoodlekart</Text>
      </Pressable>

      <Text style={styles.heading}>Portfolio</Text>

      <View style={styles.section}>
        <Text style={styles.subheading}>Degree</Text>
        <Text style={styles.text}>B.Tech in Food Technology</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Research Project</Text>
        <Text style={styles.text}>Developed fortified biscuits using lotus stem powder and pearl millet flour.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Internships</Text>
        <Text style={styles.text}>• Quality Control — Excellent Bio Research Limited</Text>
        <Text style={styles.text}>• Quality Assurance — Oceanic Foods Limited</Text>
        <Text style={styles.text}>• Quality Assurance — Sanchi</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Hobbies</Text>
        <View style={styles.hobbyRow}>
          <Text style={styles.text}>Art and craft</Text>
          <View style={styles.tiles}>
            {/* Replace `uri` with local files once you add them to `assets/images/`:
                source={require('@/assets/images/hobby1.jpg')}
            */}
            <Image source={{ uri: hobby1 }} style={styles.tile} />
            <Image source={{ uri: hobby2 }} style={styles.tile} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFF9C4', // pale yellow
  },
  socialIcon: {
    position: 'absolute',
    top: 18,
    right: 18,
    backgroundColor: '#001f3f',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  socialText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  heading: {
    marginTop: 28,
    fontSize: 28,
    fontWeight: '700',
    color: '#001f3f', // navy blue
    marginBottom: 12,
  },
  section: {
    marginBottom: 12,
  },
  hobbyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tiles: {
    flexDirection: 'row',
    gap: 8,
    marginLeft: 12,
  },
  tile: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  subheading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#001f3f',
    marginBottom: 6,
  },
  text: {
    fontSize: 16,
    color: '#000',
    lineHeight: 22,
  },
});
