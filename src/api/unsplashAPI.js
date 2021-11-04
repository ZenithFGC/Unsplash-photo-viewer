import Unsplash from "unsplash-js";

export const unsplash = new Unsplash({
    accessKey: "GtEaPbvUghivVzTAaD0QpFzsB1Ewbj579sZv7nBg39Q",
    secret: "i1tTeY_iDzZDkssMNLo78ZQSD0a6h2r3NkDSZf6kiMA",
    callbackUrl: "https://rufgc.ru/"
    // callbackUrl: "http://localhost:3000/"
})

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
   ]);