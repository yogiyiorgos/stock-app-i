import axios from 'axios'

export default axios.create({
  baseURL: 'https://finnhub.io/api/v1',
  params: {
    token: 'cccdljiad3i4bak96clg',
  },
})
