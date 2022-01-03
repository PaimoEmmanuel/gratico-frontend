import { request } from '.'

export const getAllStories = (pageNumber: number, filterBy?: 'popular' | 'newest' | 'oldest') => {
	return request.get(`/stories?page=${pageNumber}&filter=${filterBy && filterBy}`)
}
// http://api.gratico.xyz/api/stories?page=1&filter=oldest
export const getOneStory = (storyId: string) => {
	return request.get(`/stories/${storyId}`)
}

export const getStoryFromToken = (token: string) => {
	return request.get(`/tokens/${token}/story`)
}

export const likeStory = (storyId: string, userToken: string) => {
	return request.post(`/stories/${storyId}/like`, {}, { headers: { Authorization: `Bearer ${userToken}` } })
}

export const postStory = (userToken: string) => {
	return request.post(`/stories`, {}, { headers: { Authorization: `Bearer ${userToken}` } })
}
