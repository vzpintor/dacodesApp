import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Container} from '@components/screen/screen.component';
import {HEIGHT, homeSyles, SIZE} from '@screens/home/home-styles';

const HomeScreen = () => {
  const styles = homeSyles;

  const renderMovies = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          console.log('Press');
        }}>
        <View style={styles.card}>
          <Image
            style={styles.wrapperImageContainer}
            source={{
              uri:
                'https://image.tmdb.org/t/p/w500/3ombg55JQiIpoPnXYb2oYdr6DtP.jpg',
            }}
          />
          <View style={styles.overlay}>
            <View>
              <Text style={styles.text}>{'Guasón'}</Text>
            </View>
            <View style={styles.overlayContainer}>
              <Text style={styles.text}>{'04-Oct-2019'}</Text>
              <View style={styles.voteAverage}>
                {/*<Icon type={'material'} name="star-border" color="#BF9022" />*/}
                <Text style={styles.text}>{8.5}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={[4, 2, 1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={renderMovies}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
};

export default HomeScreen;
