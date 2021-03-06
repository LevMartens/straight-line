import { createGraphQLCoordinateType } from "../../resources/aws/dynamo_db/create-graphql-coordinates-type";
import { getPluscodeFromCoordinates } from "../../resources/rest_api/get-pluscode";
import { getDistanceBetween } from "../generators/distance-generator";
import { mapElevationPoints, packLineData } from "../helpers/packers";
import { showAlert } from "../../resources/operating_system/alerts";
import { saveLineDraftToDB } from "../../resources/aws/dynamo_db/save-line-draft";
import { selectLineDraft } from "../../presentation/state_management/actions/actions";
import { getLatLongDeltaBasedOn } from "../generators/lat-long-delta-generator";
import { getElevation } from "../../resources/rest_api/get-elevation";
import store from "../../presentation/state_management/store/store";
import { getCoordinatesBetween } from "../generators/coordinates-generator";
import { v4 as uuidv4 } from "uuid";

export async function createLineDraft(pointA, pointB, lineTitle) {
  const startingPoint = pointA;

  const endPoint = pointB;

  const title = lineTitle;

  const { latitude: startLatitude, longitude: startLongitude } = startingPoint;

  const pluscode = await getPluscodeFromCoordinates(
    `${startLatitude},${startLongitude}`
  );

  const completePluscode = pluscode.substring(0, 6);

  const distance = await getDistanceBetween(startingPoint, endPoint);

  const midPoint = await getCoordinatesBetween(startingPoint, endPoint, 0.5);

  const fitLineInFrame = await getLatLongDeltaBasedOn(distance);

  const { latitudeDelta, longitudeDelta } = fitLineInFrame;

  const rawElevationData = await getElevation(startingPoint, endPoint);

  const elevationPoints = await mapElevationPoints(rawElevationData);

  const lineCompleted = false; // Becomes public after completion

  const verified = false; // Can be set/amended by an authorised person

  const difficultyLevel = "0"; // Can be set by the user after completion

  const hashtags = []; // Can be set by the user after completion

  const description = "N/A"; // Can be set by the user after completion

  const creatorName = "N/A"; //TODO

  const { latitude: endLatitude, longitude: endLongitude } = endPoint;
  const { latitude: midLatitude, longitude: midLongitude } = midPoint;

  const id = uuidv4();

  const input = {
    data: {
      id: id,
      parentId: "NOPARENTID",
      complete3LevelPluscode: completePluscode,
      startingCoordinates: { lat: startLatitude, lng: startLongitude },
      finishCoordinates: { lat: endLatitude, lng: endLongitude },
      midLineCoordinates: { lat: midLatitude, lng: midLongitude },
      creatorName: creatorName,
      description: description,
      difficultyLevel: difficultyLevel,
      distance: distance,
      elevationPoints: elevationPoints,
      hashtags: hashtags,
      latitudeDeltaFit: latitudeDelta,
      longitudeDeltaFit: longitudeDelta,
      lineCompleted: lineCompleted,
      title: title,
      verified: verified,
    },
  };

  const lineDraft = await packLineData(input);

  store.dispatch(selectLineDraft(lineDraft));

  return { distanceToLong: false, lineDraft: lineDraft }; // Return for testing
}
