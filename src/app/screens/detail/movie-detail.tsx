import React from 'react';
import {Image, Text, View} from 'react-native';
import {Container} from '../../shared/components/screen/screen.component';
import {detailStyles} from '@screens/detail/detail-movie-styles';

const MovieDetail = () => {
  return (
    <Container preset={'scroll'} unsafe={true}>
      <View>
        <Image
          resizeMode={'cover'}
          source={{
            uri:
              'https://image.tmdb.org/t/p/w500/3ombg55JQiIpoPnXYb2oYdr6DtP.jpg',
          }}
          style={detailStyles.image}
        />
      </View>

      <View>
        <View>
          <Text style={detailStyles.title}>{'Guasón'}</Text>
        </View>

        <View style={detailStyles.item}>
          <Text style={detailStyles.titleText}>Duración:</Text>
          <Text style={detailStyles.text}>122 min</Text>
        </View>

        <View style={detailStyles.item}>
          <Text style={detailStyles.titleText}>Fecha de estreno:</Text>
          <Text style={detailStyles.text}>2 Octubre 2019</Text>
        </View>

        <View style={detailStyles.item}>
          <Text style={detailStyles.titleText}>Calificación</Text>
          <Text style={detailStyles.text}>8.5</Text>
        </View>

        <View style={detailStyles.item}>
          <Text style={detailStyles.titleText}>Géneros:</Text>
          <Text style={detailStyles.text}>Crimen, Suspense, Drama</Text>
        </View>

        <View style={detailStyles.item}>
          <Text style={detailStyles.titleText}>Descripción:</Text>
          <Text style={detailStyles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default MovieDetail;
