import React from 'react'
import CountryListItem from './CountryLisItem'
import CoutryData from './CountryData'

const ShowCountries = ({ countries, searchTerm, showAll, handelClicked }) => {
	const filterCountries = (countries, searchTerm) => {
		const filteredCountries = countries.filter(
			country =>
				country.name.common.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
				-1
		)

		if (filteredCountries.length > 10) {
			return (
				<>
					<div>To many Countries. </div>
					<div>{filteredCountries.length} countries in the list.</div>
				</>
			)
		} else if (filteredCountries.length === 1) {
			return <CoutryData country={filteredCountries[0]} />
		} else {
			return filteredCountries.map((country, idx) => (
				<CountryListItem name={country.name.common} key={idx} />
			))
		}
	}

	const showAllCountries = countries => {
		return countries.map((country, idx) => (
			<>
				<CountryListItem name={country.name.common} key={idx} />
				<button onClick={() => handelClicked(idx, country)}>
					Show Details
				</button>
			</>
		))
	}

	return (
		<>
			{showAll
				? showAllCountries(countries)
				: filterCountries(countries, searchTerm)}
		</>
	)
}

export default ShowCountries
