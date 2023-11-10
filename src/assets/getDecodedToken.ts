import jwtDecode from "jwt-decode";

export function getDecodedToken(token: string) {
    let decoded = {
        id: 0,
        email: "",
      };
      try {
        decoded = jwtDecode(token);
      } catch (error) {
        // console.log('JWT decoding error:', error);
        decoded.id = 0;

        decoded.email = "";
      }
      return decoded
}