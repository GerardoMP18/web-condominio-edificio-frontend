import React, { useState } from "react";
import TableCargaMasiva from '../../components/Tables/TableCargaMasiva/TableCargaMasiva';
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../components/Tables/TableCargaMasiva/someStyle";
import { FeaturedContainer, FeaturedItem, FeaturedTitle } from "./someStyle";
import { UserForm, CargaItem, Button2 } from "./someStyle";
import { ServiceUploadFile } from "../../service/CargaMasiva/ServiceUploadFile";
import * as XLSX from 'xlsx';


export function CargaMasiva() {
	const [excelFile, setExcelFile] = useState(null);
	const [fileName, setFileName] = useState(null);
	const [excelFileError, setExcelFileError] = useState(null);
	const [excelData, setExcelData] = useState(null);
	const fileType = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

	const handleSaveFile = () => {
		ServiceUploadFile(fileName);
	}

	const handleFile = (e) => {
		let selectedFile = e.target.files[0];
		setFileName(selectedFile);
		if (selectedFile) {
			// console.log(selectedFile.type);
			if (selectedFile && fileType.includes(selectedFile.type)) {
				let reader = new FileReader();
				reader.readAsArrayBuffer(selectedFile);
				reader.onload = (e) => {
					setExcelFileError(null);
					setExcelFile(e.target.result);
				}
			}
			else {
				setExcelFileError('Seleccione solo tipos de archivos de Excel');
				setExcelFile(null);
			}
		}
		else {
			console.log('Por favor seleccionar un archivo');
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (excelFile !== null) {
			const workbook = XLSX.read(excelFile, { type: 'array' });
			const worksheetName = workbook.SheetNames[0];
			const worksheet = workbook.Sheets[worksheetName];
			const data = XLSX.utils.sheet_to_json(worksheet);
			let newSalida = [];

			for (let index = 0; index < data.length; index++) {
				const ga = data[index];
				newSalida.push({
					...ga,
					birth_date: JSON.stringify(new Date((ga.birth_date - (25567 + 2)) * 86400 * 1000)).split('"')[1].split("T")[0]
				});
			}
			setExcelData(newSalida);
		}
		else {
			setExcelData(null);
		}
	}

	return (
		<FeaturedContainer>
			<FeaturedItem>
				<FeaturedTitle>Carga Masiva</FeaturedTitle>
				<UserForm autoComplete="off" onSubmit={handleSubmit}>
					<CargaItem>
						<label>Filename</label>
						<input type='file'
							onChange={handleFile} required></input>
						{excelFileError && <div
							style={{ marginTop: 5 + 'px' }}>{excelFileError}</div>}
					</CargaItem>
					{/* <Button1>Import</Button1> */}
					<Button2 type='submit' onClick={handleSaveFile}>Cargar</Button2>
				</UserForm>
				<ThemeProvider theme={lightTheme}>
					{console.log(excelData)}
					{excelData === null && <>Ningún archivo seleccionado</>}
					{excelData !== null && (
						<TableCargaMasiva data={excelData} />
					)}
				</ThemeProvider>
			</FeaturedItem>
		</FeaturedContainer>
	);
}
