import { request } from '.'

export const getAllStories = (pageNumber: number, filterBy?: 'popular' | 'newest' | 'oldest') => {
	return request.get(`/stories?page=${pageNumber}&filter=${filterBy && filterBy}`)
}

export const getOneStory = (storyId: string) => {
	return request.get(`/stories/${storyId}`)
}

export const getStoryFromToken = (token: string) => {
	return request.get(`/tokens/${token}/story`)
}
export const sendEditStoryLink = (email: string) => {
	return request.post(`/user/email/stories`, { email })
}

export const likeStory = (storyId: string, userToken: string) => {
	return request.post(`/stories/${storyId}/like`, {}, { headers: { Authorization: `Bearer ${userToken}` } })
}

export const postStory = (userToken: string) => {
	return request.post(`/stories`, {}, { headers: { Authorization: `Bearer ${userToken}` } })
}
