import axios from 'axios'

const hostname = window.location.hostname

const port = 8082

const remotePath = '/phl'

const url = `${hostname}:${port}${remotePath}`

export const _fetch = async (data: Record<string, any>) => {
	return axios.post(url, JSON.stringify(data), {
		headers: { 'Content-type': 'application/json' },
	})
}
