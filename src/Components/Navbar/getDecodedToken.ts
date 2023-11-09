import jwtDecode from "jwt-decode";

export function getDecodedToken(token: string) {
    let decoded = {
        email: "",
      };
      try {
        decoded = jwtDecode(token);
      } catch (error) {
        // console.log('JWT decoding error:', error);
        decoded.email = "";
      }
      return decoded
}