// Use the deployed backend URL or fallback to localhost for local development
// const BASE_URL = 
//   process.env.NODE_ENV === "production" 
//     ? "https://sid-ko9b-backend.vercel.app"
//     : "http://localhost:3000";
const BASE_URL = "https://sid-ko9b-backend.vercel.app";
console.log("BASE_URL:", BASE_URL);

// Export API endpoint constants
export const TOP_RESULTS = `${BASE_URL}/api/auth/topResults`;
export const SIGN_IN = `${BASE_URL}/api/auth/signin`;
export const SIGN_UP = `${BASE_URL}/api/auth/signup`;

// Export logo (as a placeholder example)
export const LOGO_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX...";
