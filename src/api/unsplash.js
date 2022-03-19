import axios from "axios";

//shortform of fetching code
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID VSKxBF0AAYmc8y1HuNHE0TPq7fUkSwI7GdQmpPEiJzc'
    }

})