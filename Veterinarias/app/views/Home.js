import React, {Component} from 'react';
import { StyleSheet, Text, View, Header, Dimensions, TouchableOpacity} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, ProviderPropType } from 'react-native-maps';
import flagPinkImg from '../assets/mapMarker.png';

const { width, height } = Dimensions.get('window');


const ASPECT_RATIO = width / height;
const LATITUDE = 3.148561;
const LONGITUDE = 101.652778;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

class Home extends Component{

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [{
        title: 'hello',
        coordinates: {
          latitude: 3.148561,
          longitude: 101.652778
        },
      },
      {
        title: 'hello',
        coordinates: {
          latitude: 3.149771,
          longitude: 101.655449
        },  
      }],
    };
  }

    render(){
      return(
      <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={this.state.region}
        showsUserLocation={true}
        followUserLocation={true}
        zoomEnabled={true}
      >
        {this.state.markers.map(marker => (
          <Marker
            title={marker.title}
            image={flagPinkImg}
            coordinate={marker.coordinates}
            key={id++}
          />
        ))}
      </MapView>
    </View>
          
        );
    }
}

Home.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  });

  export default Home;