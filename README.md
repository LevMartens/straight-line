## About The Project

### Straight Line 

Straight Line is a game where the objective is to walk a line through a rough terrain as straight as possible. 
The gps will track how much you deviate from the set line and will give you a score in the end. 

### Technical Stuff

#### Build With

* React Native
* Expo
* Graphql
* AWS Amplify 
* Redux
* Codemagic CI/CD
* Material UI
* react-native-maps
* react-native-paper
* lodash

#### Architecture

<img width="417" alt="Screen Shot 2022-01-12 at 12 08 04 pm" src="https://user-images.githubusercontent.com/73681740/149047481-5242e107-b043-4bf4-843c-e3f7dba210e4.png">

#### Presentation

##### The presentation layer handles only user input and data display, there will be no other logic in the presentation layer. User input and useEffect functions will always call a use case function wereby the use case function handles the data.

Example: 

<img width="512" alt="Screen Shot 2022-01-12 at 1 15 48 pm" src="https://user-images.githubusercontent.com/73681740/149051963-9f825494-8a80-4579-a778-34d27ea11931.png">

#### Domain

##### Use case functions do 3 main things: Fetching data, error handling and modifying data so it's compatible with the UI components. The use case functions use generator and helper functions to modify the data, this keep the use cases concise and easy to read. 

Example:

<img width="521" alt="withcom" src="https://user-images.githubusercontent.com/73681740/149051542-a8304ffa-2b1c-4833-9bee-d83fd230ac4a.png">

#### Resources

##### The Resource layer handles the actual data fetching. From local sources we get screen dimensions and gps data with the help of expo libraries, from remote sources we get weather data or geographical data (elevation) or data from the AWS backend with GraphQl. 

Example: 

<img width="528" alt="Screen Shot 2022-01-12 at 2 13 58 pm" src="https://user-images.githubusercontent.com/73681740/149057789-0c50701b-21f9-4c02-a59b-da733d6df7b1.png">

### The App

Welcome Screen | Explore Screen 

<img width="334" alt="Screen Shot 2022-01-12 at 2 48 08 pm" src="https://user-images.githubusercontent.com/73681740/149060589-9d4354c8-6ebb-47dc-b936-2bc89186ea8b.png"> | <img width="328" alt="Screen Shot 2022-01-12 at 2 50 19 pm" src="https://user-images.githubusercontent.com/73681740/149060790-dc96902a-ffe0-469a-a252-8256b80a9972.png"> 

Create Line Screen | Detail Screen

<img width="331" alt="Screen Shot 2022-01-12 at 2 54 21 pm" src="https://user-images.githubusercontent.com/73681740/149061175-a98b7f99-e137-47aa-9b34-43e90483cd57.png"> | <img width="325" alt="Screen Shot 2022-01-12 at 2 56 53 pm" src="https://user-images.githubusercontent.com/73681740/149061423-856ceb87-a227-41cb-ab74-3e806b890b4b.png">

Live Screen | Review Screen

<img width="336" alt="Screen Shot 2022-01-12 at 3 00 04 pm" src="https://user-images.githubusercontent.com/73681740/149061712-eec874d3-6efd-4ba5-bdec-cc90ca822fed.png"> | <img width="331" alt="Screen Shot 2022-01-12 at 3 00 28 pm" src="https://user-images.githubusercontent.com/73681740/149061726-f6935ff0-6615-4c11-820b-d06123b7b34e.png">











