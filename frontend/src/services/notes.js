import axios from 'axios'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001/api/notes'

const getAll = () => {
  return axios.get(baseUrl)
    .then(response => response.data)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
    .then(response => response.data)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
    .then(response => response.data)
}

export default { getAll, create, update }
