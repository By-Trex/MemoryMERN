const axios = require('axios').default;
var qs = require('qs');


axios.defaults.timeout = 5000;


var baseUrl = "http://127.0.0.1:5000/"

class request {

    static async get(url = "", params = {}, headers = {}) {
        try {
            url = baseUrl + url;
            const { data } = await axios.get(url, { params: params });
            return { data };
        } catch (error) {
            return console.log(error);;
        }
    }


    static async post(url = "", body = {}, headers = {}) {
        try {
            url = baseUrl + url;
            const response = await axios.post(url, body, { headers });
            const { data } = response;
            return { data };
        } catch (error) {
            return console.log(error);;
        }
    }

    static async put(url = "", body = {}, headers = {}) {
        try {
            url = baseUrl + url;
            const response = await axios.put(url, body, { headers });
            const { data } = response;
            return { data };
        } catch (error) {
            return console.log(error);;
        }
    }

    static async delete(url = "", data = {}, headers = {}) {
        try {
            url = baseUrl + url;
            const { data: response } = await axios.delete(url, { headers, data });
            return { data: response };
        } catch (error) {
            return console.log(error);;
        }
    }
}

export default request;
