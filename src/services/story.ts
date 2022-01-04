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
	return request.post(`/story/${storyId}/likes`)
}

export const postStory = (story: { name: string; email: string; title: string; body: string, image?: any }) => {
	let formData = new FormData();
	formData.append("name", story.name);
	formData.append("email", story.email);
	formData.append("body", story.body);
	formData.append("title", story.title);
	if (story.image) {
		formData.append("image", story.image);
		return request.post(`/stories`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
	}
	return request.post(`/stories`, formData, { headers: { 'Content-Type': 'application/json' } });

}
