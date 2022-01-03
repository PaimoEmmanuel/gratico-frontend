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
export const getStoriesFromEmail = (email: string) => {
	return request.post(`/user/email/stories`, { email })
}

export const sendEditStoryLink = (emailId: string) => {
	return request.post(`/user/${emailId}/stories/edit`)
}

export const likeStory = (storyId: string) => {
	return request.post(`/stories/${storyId}/like`)
}

export const postStory = (userToken: string) => {
	return request.post(`/stories`, {}, { headers: { Authorization: `Bearer ${userToken}` } })
}
