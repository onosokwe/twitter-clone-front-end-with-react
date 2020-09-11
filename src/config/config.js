import axios from 'axios';

export const baseURL = "http://localhost/apis/chat";

// postData
export function postData(payload){
    return new Promise((resolve, reject) => {
        fetch(baseURL + "/api.php", {method:'POST', body: JSON.stringify(payload)})
        .then((response) => response.json())
        .then((responseJson) => {resolve(responseJson);})
        .catch((error) => {reject(error);});
    });
}

// getData
export function getData(payload){
	axios.get(baseURL + "/api.php", {params: {payload}})
	.then(res => res.data)
	.catch((err) => console.log(err))
}

// get request with axios
export const axiosInstance = axios.create({
    baseURL: baseURL
})

// return the user data from the session storage
export const getUser = () => {
    const userObj = sessionStorage.getItem('user');
    const userDetails = JSON.parse(userObj);
    if (userDetails) return userDetails;
    else return null;
}

// remove the token and user from the local storage
export const removeUserSession = () => {
    const offUserMic = {
        u: localStorage.removeItem('message'),
        v: sessionStorage.removeItem('user'),
        w: localStorage.clear(),
        s: sessionStorage.clear()
    }
    return offUserMic
}