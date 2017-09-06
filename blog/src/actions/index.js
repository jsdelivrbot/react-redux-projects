import axios from 'axios';

export const FETCH_POSTS = "fetchPosts";
export const FETCH_POST = "fetchPost";
export const CREATE_POST = "createPosts";
export const DELETE_POST = "deletePost";

const ROOT_URL = "http://reduxblog.herokuapp.com/api/";
const API_KEY = "?key=rosnovsky";

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}posts/${API_KEY}`, values)
    .then( () => callback() );

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    
    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`, id)
    .then( () => callback() );

    return {
        type: DELETE_POST,
        payload: id
    }
}