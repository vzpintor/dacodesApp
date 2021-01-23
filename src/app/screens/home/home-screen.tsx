import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Container} from '@shared/components/screen/screen.component';
import {homeStyles} from '@screens/home/home-styles';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {getMovies} from '@shared/services/movies-service';
import {IMovie} from '@shared/interfaces/movie-interface';
import {setCurrentMovie} from '@stores/movies/home-action';

const HomeScreen = (props: any) => {
  const navigation = useNavigation();

  useEffect(() => {
    props.fetchMovies(props.listMovies.page);
  }, []);

  const goToDetail = (movie: IMovie) => {
    props.currentMovie(movie);
    navigation.navigate('detail');
  };

  const paginate = () => {
    props.fetchMovies(props.listMovies.page + 1);
  };

  const renderMovies = ({item}: {item: IMovie}) => {
    return (
      <TouchableOpacity
        style={homeStyles.wrapper}
        onPress={() => goToDetail(item)}>
        <View style={homeStyles.card}>
          <Image
            style={homeStyles.wrapperImageContainer}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${item.image}`,
            }}
          />
          <View style={homeStyles.overlay}>
            <View>
              <Text style={homeStyles.text}>{item.title}</Text>
            </View>
            <View style={homeStyles.overlayContainer}>
              <Text style={homeStyles.text}>{item.date}</Text>
              <View style={homeStyles.voteAverage}>
                <Image
                  style={homeStyles.star}
                  source={require('@images/star.png')}
                />
                <Text style={homeStyles.text}>{item.voteAverage}</Text>
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
        data={props.listMovies.movies}
        renderItem={renderMovies}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl
            refreshing={props.loading}
            onRefresh={() => props.fetchMovies(1)}
          />
        }
        onEndReached={paginate}
        onEndReachedThreshold={0.5}
        initialNumToRender={4}
      />
    </Container>
  );
};

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state: any) => {
  return {
    listMovies: state.moviesReducer.listMovies,
    loading: state.moviesReducer.loading,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch: any) => ({
  fetchMovies: (page: number) => dispatch(getMovies(page)),
  currentMovie: (movie: IMovie) => dispatch(setCurrentMovie(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
