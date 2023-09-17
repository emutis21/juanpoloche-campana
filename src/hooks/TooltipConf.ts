import { computePosition, flip, shift, offset, arrow } from '@floating-ui/dom'

const buttons = document.querySelectorAll('.tooltip-button')
const tooltips = document.querySelectorAll('.tooltip')
const arrowElements = document.querySelectorAll('.arrow')
const textos = document.querySelectorAll('.texto')

const buttonArray = Array.from(buttons) as HTMLElement[]
const tooltipArray = Array.from(tooltips) as HTMLElement[]
const arrowArray = Array.from(arrowElements) as HTMLElement[]
const textoArray = Array.from(textos) as HTMLElement[]

function update(index: number): void {
	computePosition(buttonArray[index], tooltipArray[index], {
		placement: 'bottom',
		middleware: [
			offset(6),
			flip(),
			shift({ padding: 5 }),
			arrow({ element: arrowArray[index] })
		]
	}).then(({ x, y, placement, middlewareData }) => {
		Object.assign(tooltipArray[index].style, {
			left: `${x}px`,
			top: `${y}px`
		})

		const { x: arrowX, y: arrowY } = middlewareData.arrow
		const staticSide = {
			top: 'bottom',
			right: 'left',
			bottom: 'top',
			left: 'right'
		}[placement.split('-')[0]]

		Object.assign(arrowArray[index].style, {
			left: arrowX != null ? `${arrowX}px` : '',
			top: arrowY != null ? `${arrowY}px` : '',
			right: '',
			bottom: '',
			[staticSide]: '-4px'
		})
	})
}

function showTooltip(index: number): void {
	if (tooltipArray[index]) {
		tooltipArray[index].style.display = 'block'
		update(index)
	}
}

function hideTooltip(index: number): void {
	if (tooltipArray[index]) {
		tooltipArray[index].style.display = ''
	}
}

buttonArray.forEach((button, index) => {
	;['mouseenter', 'mouseleave', 'focus', 'blur'].forEach((event) => {
		button.addEventListener(event, () => {
			if (event === 'mouseenter' || event === 'focus') {
				showTooltip(index)
			} else if (event === 'mouseleave' || event === 'blur') {
				hideTooltip(index)
			}
		})
	})
})

textoArray.forEach((texto, index) => {
	texto.addEventListener('click', () => {
		showTooltip(index)
	})
})

// ahora crearemos un evento que nos permita saber si se hace click fuera del tooltip cuando
// este está abierto, para que se cierre, solamente si el tooltip es true
if (tooltipArray[1]) {
	document.addEventListener('click', (e) => {
		if (tooltipArray[1].style.display === 'block') {
			if (e.target !== tooltipArray[0] && e.target !== buttonArray[0]) {
				hideTooltip(0)
				console.log('click fuera');
				
			}
		}
	})
}
