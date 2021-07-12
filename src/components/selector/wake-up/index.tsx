import React from 'react'
import moment from 'moment'
import clsx from 'clsx'
import TimePicker from '@/components/time-picker'
import { baseButtonStyle } from '@/styles'

interface IWakeUpProps {
	handleResults(value: string[]): any
	handleBack(): any
}

export default function WakeUp(props: IWakeUpProps): JSX.Element {
	const { handleResults, handleBack } = props
	const timeNow = moment().format(`HH:mm`)
	const [timeValue, setTimeValue] = React.useState<string>(timeNow)

	function handleChange(event: React.BaseSyntheticEvent): void {
		event.preventDefault()

		setTimeValue(event.target.value)
	}

	function handleClick(event: React.BaseSyntheticEvent): void {
		event.preventDefault()

		const selectedTime = moment(timeValue, [`hh:mm`])
		const results: string[] = []

		results.push(selectedTime.minutes(selectedTime.minutes() + 375).format(`hh:mm A`))
		results.push(selectedTime.minutes(selectedTime.minutes() + 90).format(`hh:mm A`))

		handleResults(results)
	}

	React.useEffect(() => setTimeValue(timeNow), [timeNow])

	return (
		<div className="w-3/4 md:w-2/4 mx-auto">
			<div className="grid grid-cols-1 gap-4 justify-center">
				<p className="text-3xl text-primary text-center font-bold">Сэрэх цаг тооцоолох</p>
				<p className="text-2xl text-white text-center">Хэзээ унтах цагаа тохируулна уу.</p>

				<TimePicker onChange={handleChange} value={timeValue} />

				<button
					type="button"
					className={clsx(baseButtonStyle, `bg-primary`)}
					onClick={handleClick}
				>
					Тооцоолох
				</button>

				<button
					type="button"
					className={clsx(baseButtonStyle, `bg-secondary text-white`)}
					onClick={handleBack}
				>
					Буцах
				</button>
			</div>
		</div>
	)
}
