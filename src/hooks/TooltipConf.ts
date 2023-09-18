import {
	computePosition,
	flip,
	shift,
	offset,
	arrow,
	limitShift
} from '@floating-ui/dom'

const buttons = document.querySelectorAll('.tooltip-button')
const tooltips = document.querySelectorAll('.tooltip')
const arrowElements = document.querySelectorAll('.arrow')
const textos = document.querySelectorAll('.texto')
const pictures = document.querySelectorAll('.picture')

const buttonArray = Array.from(buttons) as HTMLElement[]
const tooltipArray = Array.from(tooltips) as HTMLElement[]
const arrowArray = Array.from(arrowElements) as HTMLElement[]
const textoArray = Array.from(textos) as HTMLElement[]
const pictureArray = Array.from(pictures) as HTMLElement[]

function update(index: number): void {
	computePosition(buttonArray[index], tooltipArray[index], {
		placement: 'top',
		middleware: [
			offset(6),
			flip(),
			shift({
				padding: 5,
				crossAxis: true,
				limiter: limitShift({
					crossAxis: true
				})
			}),
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

function isTooltipOpen(index: number): boolean {
	const tooltip = tooltipArray[index]
	const fondo = document.createElement('div')
	fondo.style.position = 'fixed'
	fondo.style.top = '0'
	fondo.style.left = '0'
	fondo.style.width = '100vw'
	fondo.style.height = '100vh'
	fondo.style.backgroundColor = 'rgba(0,0,0,0.3)'
	fondo.style.backdropFilter = 'blur(2px)'
	fondo.style.zIndex = '51'
	fondo.style.pointerEvents = 'auto'
	fondo.addEventListener('click', () => {
		tooltip.style.display = ''
		fondo.remove()
		tooltipArray[index].style.display = 'none'
		pictureArray[index].style.zIndex = ''
		pictureArray[index].style.pointerEvents = ''
		update(index)
	})
	document.body.appendChild(fondo)
	return tooltip.style.display === 'block'
}

function showTooltip(index: number): void {
	if (!isTooltipOpen(index)) {
		tooltipArray[index].style.display = 'block'
		pictureArray[index].style.zIndex = '52'
		pictureArray[index].style.pointerEvents = 'none'
		update(index)
	}
}

buttonArray.forEach((button, index) => {
	button.addEventListener('click', () => {
		showTooltip(index)
	})
})

textoArray.forEach((texto, index) => {
	texto.addEventListener('click', () => {
		showTooltip(index)
	})
})
