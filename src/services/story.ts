import { request } from '.'

export const getAllStories = () => {
	return request.get(`/stories`)
}

export const getOneStory = (storyId: string) => {
	return request.get(`/stories/${storyId}`)
}

export const likeStory = (storyId: string, userToken: string) => {
	return request.post(`/stories/${storyId}/like`, {}, { headers: { Authorization: `Bearer ${userToken}` } })
}

export const postStory = (userToken: string) => {
	return request.post(`/stories`, {}, { headers: { Authorization: `Bearer ${userToken}` } })
}
