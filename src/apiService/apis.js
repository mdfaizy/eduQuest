// const BASE_URL = "https://localhost:4000/api/v1"


// // CATAGORIES API
// export const categories = {
//     CATEGORIES_API: BASE_URL + "/course/showAllCategories",
//   }


const BASE_URL = "http://localhost:3000/api/v1"

// http://localhost:5173/api/v1"

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

// CATAGORIES API
export const categories = {
    CATEGORIES_API: BASE_URL + "/course/showAllCategories",
  };