import axios from "axios";
const queryString = require("query-string");

// config axios
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,

    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },

    paramsSerializer: (params) => queryString.stringify(params),
});

// interceptors
// axiosClient.interceptors.request.use((config) => {
//     const token = store.getState().auth.auth?.accessToken;
//     config.headers["access-token"] = token;
//     config.headers["client-id"] = ADMINS_SITE;

//     return config;
// });

// axiosClient.interceptors.response.use(
//     (response) => {
//         if (response && response.data) {
//             return response;
//         }
//         return response;
//     },
//     async (error: any) => {
//         // Handle errors
//         if (error.response && error.response.status === 401) {
//             //refreshToken
//             const refreshTk = store.getState().auth.auth?.refreshToken?._id;
//             if (refreshTk) {
//                 const refreshTokenBody = { refreshTk };
//                 const res = await axios.post("/auth/login-refresh-token", refreshTokenBody);
//                 if (res.status === 200) {
//                     store.dispatch(refreshToken(res.data as IRefreshTokenRes));
//                 } else {
//                     store.dispatch(logout());
//                 }
//             } else {
//                 store.dispatch(logout());
//             }
//         }
//         throw error;
//     }
// );

export default axiosClient;
