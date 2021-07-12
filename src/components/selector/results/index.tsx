import clsx from 'clsx'
import { baseButtonStyle, baseCardStyle, baseContextStyle } from '@/styles'

interface IResultsProps {
	results: string[]
	handleBack(): any
}

export default function Result(props: IResultsProps): JSX.Element {
	const { results, handleBack } = props

	function renderResults(): JSX.Element[] {
		return results.map((item: string, index: number) => (
			<div className={clsx(baseCardStyle, `bg-primary`)} key={index}>
				<p>{item}</p>
			</div>
		))
	}

	return (
		<div className="w-3/4 md:w-2/4 mx-auto">
			<div className="grid grid-cols-1 gap-4 justify-center">
				<p className="text-3xl text-primary text-center font-bold">Тооцоолсон цаг</p>
				<p className={clsx(baseContextStyle)}>
					Хүн дундажаар 15 минутын дотор унтдаг байна. Унталтын мөчлөг нь 90 минут байдаг
					ба нийт 5-6 мөчлөгт хүний нойр бүрэн ханадаг байна.
				</p>
				{renderResults()}
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
