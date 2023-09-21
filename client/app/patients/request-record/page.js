'use client'

import React, { useState, useEffect } from 'react';
import FormCard from '../../components/FormCard';
import Download from '../../components/Download';
import notify from '../../lib/toasts';

const RequestRecordPage = () => {

	const [downloadUrl, setDownloadUrl] = useState(null);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: ""
	});

	const handleInputChange = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const response = await fetch('http://localhost:8000/api/patient/download', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});

		const responseJson = await response.json();
		if (!response.ok) {
			notify({
				message: responseJson.message,
				display: true,
				type: "error"
			})
		} else {
			setDownloadUrl(responseJson.data.downloadUrl)
		}
	};

	if (downloadUrl) {
		return <Download downloadUrl={downloadUrl} />
	}

	return (
		<div>
			<FormCard cardTitle={'Request Patient Record'} handleInput={handleInputChange} handleFormSubmit={handleSubmit} />
		</div>
	)
}

export default RequestRecordPage;