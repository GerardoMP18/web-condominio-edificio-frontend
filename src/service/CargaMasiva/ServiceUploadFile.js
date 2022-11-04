import Swal from 'sweetalert2';

export const ServiceUploadFile = async (props) => {
	console.log("ACAC ES " + props);
	const f = new FormData();
	f.append('file', props)
	await fetch('http://127.0.0.1:5014/api/bulkload', {
		method: 'POST',
		body: f,
	})
		.then((response) => {
			if (response.status === 201) {
				Swal.fire({
					title: 'Exito',
					text: 'Se registro correctamente',
					icon: 'success',
					confirmButtonText: 'Aceptar'
				})
			} else {
				Swal.fire({
					title: 'Fallo',
					text: 'Fallo al enviar',
					icon: 'error',
					confirmButtonText: 'Aceptar'
				  })
			}  
			return response.json()
		})
		.catch((err) => {
			console.log(err.message);
		});
}

