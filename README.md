###  App Control de Ventas Movistar

##### Dependencias

| React Native || Expo |
| ------------- || ------------- |
| react-native-picker/picker  || expo-sqlite  |
| react-navigation/bottom-tabs  || expo-image-picker  |
| react-navigation/native-stack  || expo-file-system  |
| react-redux  || expo-permissions  |
| redux  || expo-font  |
| redux-thunk  |

#### Pantallas y Funcionabilidades

- Login (Pantalla para logearse y crear cuenta)
- Register (Pantalla para crear cuenta)
- SelectOption (Pantalla para cargar ventas)
- Sells (Pantalla para ver las ventas que has cargado)
- SeeUsers (Pantalla para ver todos los usarios registrados, solo quien tiene permiso de admin puede entrar, y tambien se puede asignar admin)
- Setting (Pantalla donde te dice la informacion de usuario y se puede elegir entre español o ingles)

### Detalles

- Uso de Firebase para Auth y Database RealTime
- Para dar el primer admin es necesario darlo en la base de datos
