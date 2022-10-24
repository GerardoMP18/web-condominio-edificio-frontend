
export const ServiceUploadFile = async (props) => {
	const f = new FormData();
	f.append('file', props)
	await fetch('http://127.0.0.1:5020/api/bulkload', {
		method: 'POST',
		body: f,
	})
		.then((response) => response.json())
		.catch((err) => {
			console.log(err.message);
		});
}

