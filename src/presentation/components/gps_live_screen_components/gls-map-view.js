import React, { useEffect } from "react";
import MapView, { Polyline, Marker, Circle } from "react-native-maps";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { watchHeading } from "../../../domain/resources/operating_system/watch-heading";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { followUserPosition } from "../../../domain/use_cases/follow-user-position";
import { getPositionOnce } from "../../../domain/resources/operating_system/get-position-once";
import UserSvgComponent from "../_re-useables/svg_components/user-svg";
import PinSvgComponent from "../_re-useables/svg_components/map-pin-svg";
import { getTheme } from "../../theme/themes";
import { SCREEN_WIDTH } from "../../../domain/resources/operating_system/dimensions";
import store from "../../state_management/store/store";
import {
  gpsLiveMapHeadingUpdate,
  gpsLiveMapViewRefUpdate,
} from "../../state_management/actions/actions";

//TODO create button to start directions
//TODO screen doesn't follow curser
//TODO show something that indicates recording is going on

export default function MapViewGPSLive({ navigation }) {
  const { mapStyle, buttonStyle, textStyleB } = styles();

  const path = useSelector((state) => state.pathHandler);

  const {
    rawLineData: {
      startingCoordinates: { lat: pointALat, lng: pointALng },
      finishCoordinates: { lat: pointBLat, lng: pointBLng },
    },
  } = useSelector((state) => state.selectedLineDraftHandler);
  const liveCurrentPosition = useSelector(
    (state) => state.watchCurrentPosition
  );
  const pointA = {
    latitude: pointALat,
    longitude: pointALng,
  };

  const pointB = {
    latitude: pointBLat,
    longitude: pointBLng,
  };
  const liveDirection = useSelector((state) => state.watchDirection);
  const mapType = useSelector((state) => state.gpsLiveMapTypeHandler);

  // const {
  //   latitude: aSingleCurrentPositionLatitude,
  //   longitude: aSingleCurrentPositionLongitude,
  // } = useSelector((state) => state.aSingleCurrentPosition);

  const aSingleCurrentPosition = useSelector(
    (state) => state.aSingleCurrentPosition
  );

  const { radiusForBounds, circleColor } = useSelector(
    (state) => state.radiusForBoundsHandler
  );

  let mapViewRef;

  const initialCamera = {
    center: aSingleCurrentPosition,
    pitch: 50,
    heading: 0.0,
    altitude: 5000,
    zoom: 40,
  };

  useEffect(() => {
    getPositionOnce(); //TODO this function bypasses use_cases

    if (mapViewRef) {
      followUserPosition(pointA, mapViewRef);
      //watchHeading(mapViewRef); //TODO this function bypasses use_cases
    }
  }, [mapViewRef]);

  return (
    <MapView
      onPress={(e) => {}}
      ref={async (ref) => {
        mapViewRef = ref;
        //To control the map with the map menu component

        store.dispatch(gpsLiveMapViewRefUpdate(mapViewRef));
      }}
      style={mapStyle}
      //followsUserLocation={true}
      mapType={mapType}
      //liteMode={true}
      onRegionChange={async () => {
        //const mapHeading = await mapViewRef.getCamera();
        //store.dispatch(gpsLiveMapHeadingUpdate(mapHeading.heading));
      }}
      showsCompass={false}
      initialCamera={initialCamera}
      // initialRegion={{
      //   latitude: aSingleCurrentPositionLatitude,
      //   longitude: aSingleCurrentPositionLongitude,
      //   latitudeDelta: 0.0002,
      //   longitudeDelta: 0.001,
      // }}
    >
      {/* <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          navigation.navigate("LINE_REVIEW");
        }}
      >
        <Text style={textStyleB}>Review line</Text>
      </TouchableOpacity> */}
      <Marker
        key={90342}
        coordinate={pointB}
        title={"End point"}
        centerOffset={{ x: 0.5, y: -17 }}
      >
        <PinSvgComponent></PinSvgComponent>
      </Marker>
      <Marker
        key={647573}
        flat={true}
        tracksViewChanges={false}
        tracksInfoWindowChanges={false}
        coordinate={liveCurrentPosition}
        title={"You"}
      >
        <View
          style={{
            transform: [
              {
                rotate: `${0.0}deg`, //liveDirection
              },
            ],
          }}
        >
          <UserSvgComponent></UserSvgComponent>
        </View>
      </Marker>
      <Circle
        zIndex={3}
        strokeWidth={0.00001}
        fillColor={circleColor} //rgba(144, 202, 249, 0.2)rgba(252, 156, 4, 0.2)
        center={liveCurrentPosition}
        radius={radiusForBounds}
      ></Circle>
      {/* <Circle
        zIndex={2}
        strokeWidth={0.00001}
        fillColor={"rgba(252, 156, 4, 0.2)"} //rgba(144, 202, 249, 0.2)
        center={liveCurrentPosition}
        radius={50}
      ></Circle>
      <Circle
        zIndex={1}
        strokeWidth={0.00001}
        fillColor={"rgba(211, 211, 211, 0.2)"} //rgba(144, 202, 249, 0.2)
        center={liveCurrentPosition}
        radius={75}
      ></Circle>
      <Circle
        zIndex={0}
        strokeWidth={0.00001}
        fillColor={"rgba(205, 127, 50, 0.2)"} //rgba(144, 202, 249, 0.2)
        center={liveCurrentPosition}
        radius={100}
      ></Circle> */}
      <Polyline
        style={{
          elevation: 5,
          position: "absolute",
          zIndex: 5,
        }}
        strokeWidth={3}
        coordinates={[pointA, pointB]}
        strokeColor={"white"}
      />

      {path.map((x) => {
        const { id, path, pathColor } = x;

        return (
          <Polyline
            key={id}
            style={{
              position: "absolute",
            }}
            strokeWidth={3}
            coordinates={path}
            strokeColor={pathColor}
          />
        );
      })}
      <Marker
        key={9034232}
        coordinate={pointA}
        title={"Starting point"}
        centerOffset={{ x: 0.5, y: -16 }}
      >
        <PinSvgComponent></PinSvgComponent>
      </Marker>
      <Circle
        zIndex={0}
        strokeWidth={0.00001}
        fillColor={"rgba(252, 62, 8, 0.2)"}
        center={pointA}
        radius={10}
      ></Circle>
    </MapView>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyle: {
      paddingTop: 12,
      position: "relative",
      marginTop: 120,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 155,
      height: 50,
      borderRadius: 16,
    },
    textStyleB: {
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    mapStyle: {
      ...StyleSheet.absoluteFillObject,
    },
  });
};
