import axios from "axios";

const instance=axios.create({
    baseURL:"http://api.themoviedb.org/3",// rest endpts will append to this using baseURL provided by axios

});
export default instance;