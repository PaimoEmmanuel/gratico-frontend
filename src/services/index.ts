import axios from 'axios'

export const request = axios.create({
	// baseURL: process.env.REACT_APP_BASE_URL,
	baseURL: 'https://api.gratico.xyz/api',
	// withCredentials: true,
	timeout: 60000,
	headers: {
		'X-Requested-With': 'XMLHttpRequest',
		'Content-Type': 'application/json',
	},
})
