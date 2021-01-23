import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {Container} from '@shared/components/screen/screen.component';
import {detailStyles} from '@screens/detail/detail-movie-styles';
import {connect} from 'react-redux';
import {getMovieDetail} from '@shared/services/movies-service';
import {IGenre} from '@shared/interfaces/movie-interface';

const MovieDetail = ({currentMovie, getMovieDetail}: any) => {
  useEffect(() => {
    getMovieDetail(currentMovie.id);
  }, []);

  return (
    <Container preset={'scroll'} unsafe={true}>
      <View>
        <Image
          resizeMode={'cover'}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${currentMovie.image}`,
          }}
          style={detailStyles.image}
        />
      </View>

      <View>
        <View>
          <Text style={detailStyles.title}>{currentMovie.title}</Text>
        </View>

        <View style={detailStyles.item}>
          <Text style={detailStyles.titleText}>Duración:</Text>
          <Text style={detailStyles.text}>{currentMovie.time} min</Text>
        </View>

        <View style={detailStyles.item}>
          <Text style={detailStyles.titleText}>Fecha de estreno:</Text>
          <Text style={detailStyles.text}>{currentMovie.date}</Text>
        </View>

        <View style={detailStyles.item}>
          <Text style={detailStyles.titleText}>Calificación</Text>
          <Text style={detailStyles.text}>{currentMovie.voteAverage}</Text>
        </View>

        <View style={detailStyles.item}>
          <Text style={detailStyles.titleText}>Géneros:</Text>
          <Text style={detailStyles.text}>
            {currentMovie.genres?.map((gender: IGenre) => gender.name + ', ')}
          </Text>
        </View>

        <View style={detailStyles.item}>
          <Text style={detailStyles.titleText}>Descripción:</Text>
          <Text style={detailStyles.text}>{currentMovie.description}</Text>
        </View>
      </View>
    </Container>
  );
};

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state: any) => {
  return {
    currentMovie: state.moviesReducer.currentMovie,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch: any) => ({
  getMovieDetail: (idMovie: number) => dispatch(getMovieDetail(idMovie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
