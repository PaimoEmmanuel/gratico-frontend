interface IStory {
	id: number
	writerName?: string
	title: string
	content?: string
	cover_img?: string
	date?: string
	readTime?: number
	likes?: number
}

const dateFormatter = (date: string) => {
	const dateTemp = new Date(date).toDateString()
	let dayName = dateTemp.substring(0, 3)
	let dayNumber = dateTemp.substring(8, 10)
	let month = dateTemp.substring(4, 7)
	let year = dateTemp.substring(11)

	switch (dayNumber[1]) {
		case '1':
			dayNumber = `${dayNumber}st`
			break
		case '2':
			dayNumber = `${dayNumber}nd`
			break
		case '3':
			dayNumber = `${dayNumber}rd`
			break
		default:
			dayNumber = `${dayNumber}th`
			break
	}

	if (dayNumber[0] === '0') {
		dayNumber = dayNumber.substring(1)
	}

	let formattedDate = `${month} ${dayNumber} ${year}`
	return formattedDate
}

export const dataFilter = (data: []) => {
	let filteredData: any = []

	data.map((incomingStory: any) => {
		let formattedDate = dateFormatter(incomingStory.created_at)

		let filteredStory: IStory = {
			id: incomingStory.id,
			writerName: incomingStory.user.name,
			title: incomingStory.title,
			content: incomingStory.body,
			cover_img: incomingStory.cover_img,
			date: formattedDate,
			readTime: incomingStory.read_time,
			likes: incomingStory.likes,
		}

		filteredData.push(filteredStory)
	})

	return filteredData
}
