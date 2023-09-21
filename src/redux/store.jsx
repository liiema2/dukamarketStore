import { configureStore } from '@reduxjs/toolkit';
// import apiReducer from './api';
// import count from './count';
import marketStore from './addYouCart/marketStore';




export default configureStore({
reducer: {
shopping:marketStore,
// api: apiReducer
// countProduct:count

},

});

