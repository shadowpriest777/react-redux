import { ROOT_URL } from "./config";
import { now } from "moment";
const { v4 } = require('uuid');

export const api = {
    posts: {
        fetch () {
            return fetch(`${ROOT_URL}/posts`)
        },
        fakeFetchTypePost (comment) {
            return   {
                "id": v4(),
                "comment": comment,
                "created": now(),
                "likes": [],
                "author": {
                    "id":"d9722bc0-0a60-48f2-b20f-b038ed65b66a",
                    "avatar": "https://orig00.deviantart.net/8459/f/2016/186/2/c/heisenberg_portrait_by_yannickbouchard-da8twpb.jpg",
                    "firstName": "Walter",
                    "lastName": "Wix"
                }
            }
        }
    }
}