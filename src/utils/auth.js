// src/utils/auth.js
export const getUserFromCookie = () => {
    return new Promise((resolve, reject) => {
      try {
        const cookieString = document.cookie; // Get the cookie string
        const cookies = cookieString.split('; ').reduce((acc, cookie) => {
          const [name, value] = cookie.split('=');
          acc[name] = decodeURIComponent(value);
          return acc;
        }, {});
  
        // Assuming the user information is stored as a JSON string in a cookie named "user"
        const userCookie = cookies['user'];
  
        if (userCookie) {
          const userData = JSON.parse(userCookie); // Parse the JSON string
          resolve(userData); // Resolve with user data
        } else {
          resolve(null); // No user data found
        }
      } catch (error) {
        reject(error); // Handle any errors
      }
    });
  };
  