import {
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
} from "../../resources/operating_system/dimensions";

//* Functions in packers.js unpack data (objects) and put them back together in a way the presentation layer can use it

export async function mapElevationPoints(rawData) {
  let elevationPointsArray = [];
  rawData.map((x) => {
    const elevationPoint = x.elevation.toFixed(1);
    elevationPointsArray.push(elevationPoint);
  });
  return elevationPointsArray;
}

export async function packLineData(rawData) {
  const { data } = rawData;

  const {
    id,
    startingCoordinates,
    midLineCoordinates,
    latitudeDeltaFit,
    longitudeDeltaFit,
  } = data;

  const { lat: startingLatitude, lng: startingLongitude } = startingCoordinates;
  const { lat: midLineLatitude, lng: midLineLongitude } = midLineCoordinates;

  const markerCoordinates = {
    latitude: startingLatitude,
    longitude: startingLongitude,
  };
  const { latitude, longitude } = markerCoordinates;

  const markerRegion = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  const markerRegionZoomedIn = {
    latitude: midLineLatitude,
    longitude: midLineLongitude,
    latitudeDelta: latitudeDeltaFit,
    longitudeDelta: longitudeDeltaFit,
  };

  const lineData = {
    id: id,
    isLoaded: true,
    rawLineData: data,
    markerCoordinates: markerCoordinates,
    markerRegion: markerRegion,
    markerRegionZoomedIn: markerRegionZoomedIn,
  };

  return lineData;
}

export async function packPublicLineData(rawData) {
  const {
    id,
    startingCoordinates,
    midLineCoordinates,
    latitudeDeltaFit,
    longitudeDeltaFit,
  } = rawData;

  const { lat: startingLatitude, lng: startingLongitude } = startingCoordinates;

  const markerCoordinates = {
    latitude: startingLatitude,
    longitude: startingLongitude,
  };
  const { latitude, longitude } = markerCoordinates;

  const markerRegion = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  const markerRegionZoomedIn = {
    latitude: startingLatitude,
    longitude: startingLongitude,
    latitudeDelta: latitudeDeltaFit,
    longitudeDelta: longitudeDeltaFit,
  };

  const lineData = {
    id: id,
    isLoaded: true,
    rawLineData: rawData,
    markerCoordinates: markerCoordinates,
    markerRegion: markerRegion,
    markerRegionZoomedIn: markerRegionZoomedIn,
  };

  return lineData;
}
