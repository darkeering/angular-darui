import { animate, state, style, transition, trigger } from '@angular/animations';

const easeIn = 'cubic-bezier(0.16, 0.75, 0.5, 1)'
const easeOut = 'cubic-bezier(0.5, 0, 0.84, 0.25)'
const linear = 'cubic-bezier(0.16, 0.75, 0.5, 1)'
const duration = '0.2s'
const fast = '0.1s'


export const dropDownToggle = trigger('toggle', [
  state('void', style({
    transform: 'scaleY(0)',
    opacity: 0, transformOrigin: 'top',
  })),
  state('show', style({
    transform: 'scaleY(1)',
    opacity: 1, transformOrigin: 'top'
  })),
  transition('void => show', animate(`${duration}`)),
  transition('show => void', animate(`${duration}`)),
])

export const flyInOut = trigger('flyInOut', [
  state('void', style({
    transform: 'translateX(-100%)', left: 0, opacity: 0
  })),
  state('in', style({
    transform: 'translateX(0)', left: 0, opacity: 1
  })),
  transition('in => void', [
    animate(`${duration} ${easeIn}`)
  ]),
  transition('void => in', [
    animate(`${duration} ${easeOut}`)
  ]),
])

export const backbgFadeInOut = trigger('backbgFadeInOut', [
  state('void', style({
    opacity: 0, display: 'none'
  })),
  state('in', style({
    opacity: 1, display: 'block'
  })),
  transition('void => in', [
    animate(`${fast} ${linear}`)
  ]),
  transition('in => void', [
    animate(`${fast} ${linear}`)
  ]),
])