import axios from 'axios'

export default axios.create({
  baseURL: 'https://finnhub.io/api/v1',
  params: {
    token: 'cdrq1j2ad3icpsta0aogcdrq1j2ad3icpsta0ap0',
  },
})
