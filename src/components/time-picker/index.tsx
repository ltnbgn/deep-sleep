import React from 'react'

interface ITimePickerProps {
	value?: string
	onChange?(event: React.BaseSyntheticEvent): any
}

export default function TimePicker(props: ITimePickerProps): JSX.Element {
	const { value, onChange } = props

	return (
		<input
			type="time"
			className="w-full bg-tertiary text-white text-2xl font-bold outline-none rounded-lg border-4 border-primary px-3 py-3"
			title="Time Picker"
			placeholder="Time Picker"
			value={value}
			onChange={onChange}
		/>
	)
}
