import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {
	const[isLoading, setIsLoading] = useState(false);
	const[fetchData, setFetchData] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error('Failed to fetch.');
			}
			return response.json();
		})
		.then(data => {
			setIsLoading(false);
			setFetchData(data);
		})
		.catch(err => {
			setIsLoading(false);
			console.log(err);
		});
	}, dependencies);
	
	return [isLoading, fetchData];
};
