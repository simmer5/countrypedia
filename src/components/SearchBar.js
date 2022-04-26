import React from 'react'
import TextField from '@mui/material/TextField'

const SearcBar = ({ searchTerm, onChange }) => {
	return (
		<div>
			<TextField
				id='outlined-search'
				label='Search field'
				type='search'
				value={searchTerm}
				onChange={onChange}
			/>
		</div>
	)
}

export default SearcBar
