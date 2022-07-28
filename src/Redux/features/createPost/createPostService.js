import axios from 'axios'

const API_URL =''

//create new gaol
const createPostServ = async (postData, token) => {
    const config= {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

const response = await axios.post(API_URL,postData,config)

return response.data

}

const createPostService = {
    createPostServ
}

export default createPostService 