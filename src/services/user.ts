import { request } from '.'

export const checkUserByEmail = (email: string) => {
	return request.post(`/user/email`, { email })
}
