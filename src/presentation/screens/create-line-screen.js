import React, { useEffect } from "react";
import MapViewCreateLine from "../components/create_line_screen_components/cl-map-view";
import { StyleSheet, View } from "react-native";
import { getTheme } from "../theme/themes";
import { useSelector } from "react-redux";
import {
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
} from "../../domain/resources/operating_system/dimensions";
import CreateLineToolbar from "../components/create_line_screen_components/cl-toolbar-menu";
import {
  mapPressedForFirstPin,
  mapPressedForSecondPin,
} from "../state_management/actions/actions";
import store from "../state_management/store/store";
import CreateLineMapMenu from "../components/create_line_screen_components/cl-create-map-menu";
import ActivityIndicatorOnTransparentView from "../components/_re-useables/activity-indicator-transparent-view.js";

export default function CreateLineScreen({ navigation }) {
  const { containerStyle } = styles();

  const { latitude, longitude } = useSelector(
    (state) => state.aSingleCurrentPosition
  );
  const toolbarVisible = useSelector((state) => state.toolbarVisibleHandler);
  const menuVisible = useSelector((state) => state.menuVisibleHandler);
  const loadingVisible = useSelector((state) => state.loadingVisibleHandler);

  const aSingleCurrentPosition = useSelector(
    (state) => state.aSingleCurrentPosition
  );

  const initialStartingPoint = aSingleCurrentPosition;

  const initialEndPoint = {
    latitude: aSingleCurrentPosition.latitude + 0.111,
    longitude: aSingleCurrentPosition.longitude + 0.111,
  };

  const initialRegion = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  useEffect(() => {
    store.dispatch(mapPressedForFirstPin(initialStartingPoint));
    store.dispatch(mapPressedForSecondPin(initialEndPoint));
  }, []);

  return (
    <View style={containerStyle}>
      {loadingVisible && (
        <ActivityIndicatorOnTransparentView></ActivityIndicatorOnTransparentView>
      )}
      <MapViewCreateLine initialRegion={initialRegion}></MapViewCreateLine>
      {toolbarVisible && <CreateLineToolbar></CreateLineToolbar>}
      {menuVisible && <CreateLineMapMenu></CreateLineMapMenu>}
    </View>
  );
}
const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    containerStyle: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.containerBackgroundColor,
      flex: 1,
      flexDirection: "column",
      height: "100%",
    },
  });
};
