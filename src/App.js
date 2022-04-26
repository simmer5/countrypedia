import React, { useEffect, useState } from 'react'
import axios from 'axios'

import SearchBar from './components/SearchBar'
import ShowCountries from './components/ShowCountries'
import ShowAll from './components/ShowAllCountries'
import CountryData from './components/CountryData'

const App = () => {
	const [data, setdata] = useState([])
	const [searchTerm, setSearchTerm] = useState('')
	const [showAll, setShowAll] = useState(false)
	const [clickedData, setClickedData] = useState([])
	const [showClicked, setShowClicked] = useState(false)

	useEffect(() => {
		axios.get('https://restcountries.com/v3.1/all').then(res => {
			console.log(res.data)
			setdata(res.data)
		})
	}, [])

	const handleChange = event => {
		setSearchTerm(event.target.value)
	}
	const handelShowAll = event => {
		setShowAll(!showAll)
		setShowClicked(false)
	}
	const handelClicked = (idx, country) => {
		setClickedData(data[idx])
		setShowClicked(true)
	}

	return (
		<>
			<SearchBar searchTerm={searchTerm} onChange={handleChange} />
			<ShowAll handleShow={handelShowAll} />
			<ShowCountries
				countries={data}
				searchTerm={searchTerm}
				showAll={showAll}
				handelClicked={handelClicked}
			/>
			{showClicked && (
				<div style={{ position: 'fixed', top: '20vh', left: '50vw' }}>
					<CountryData country={clickedData} />
				</div>
			)}
		</>
	)
}

export default App
