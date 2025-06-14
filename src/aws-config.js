export const awsConfig = {
  Auth: {
    region: "ap-south-1", // e.g. "us-east-1"
    userPoolId: "ap-south-1_uXraGS772",
    userPoolWebClientId: "49fn7gpltbgvcrsd33e4mdqfdg",
    oauth: {
      domain: "https://ap-south-1uxrags772.auth.ap-south-1.amazoncognito.com",
      redirectSignIn: "https://main.d1t5v4kvnmyy89.amplifyapp.com/",
      redirectSignOut: "https://main.d1t5v4kvnmyy89.amplifyapp.com/logout",
      responseType: "code" // or "code"
    }
  }
};
