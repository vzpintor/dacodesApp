import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Container} from '../../shared/components/screen/screen.component';
import {homeSyles} from '@screens/home/home-styles';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToDetail = () => {
    navigation.navigate('detail');
  };

  const renderMovies = ({item}) => {
    return (
      <TouchableOpacity style={homeSyles.wrapper} onPress={goToDetail}>
        <View style={homeSyles.card}>
          <Image
            style={homeSyles.wrapperImageContainer}
            source={{
              uri:
                'https://image.tmdb.org/t/p/w500/3ombg55JQiIpoPnXYb2oYdr6DtP.jpg',
            }}
          />
          <View style={homeSyles.overlay}>
            <View>
              <Text style={homeSyles.text}>{'Guasón'}</Text>
            </View>
            <View style={homeSyles.overlayContainer}>
              <Text style={homeSyles.text}>{'04-Oct-2019'}</Text>
              <View style={homeSyles.voteAverage}>
                <Image
                  style={homeSyles.star}
                  source={require('@images/star.png')}
                />
                <Text style={homeSyles.text}>{8.5}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Container unsafe>
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
