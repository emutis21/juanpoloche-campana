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

// ahora vamos a hacer que cuando se haga hover sobre los textos
// se active el buttonArray también
textoArray.forEach((texto, index) => {
  ;['mouseenter', 'mouseleave', 'focus', 'blur'].forEach((event) => {
    texto.addEventListener(event, () => {
      if (event === 'mouseenter' || event === 'focus') {
        showTooltip(index)
      } else if (event === 'mouseleave' || event === 'blur') {
        hideTooltip(index)
      }
    })
  })
})
