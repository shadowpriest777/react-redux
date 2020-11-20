import { ROOT_URL } from "./config";

export const api = {
    posts: {
        fetch () {
            return fetch(`${ROOT_URL}/posts`)
        }
    }
}