import { defineModel } from 'foca'

export interface TemplateState {
  num1: number
  num2: number
}

const initialState: TemplateState = {
  num1: 0,
  num2: 0,
}

export const templateModel = defineModel('template', {
  initialState,
  computed: {
    sum() {
      return this.state.num1 + this.state.num2
    },
  },
  actions: {
    updateNum1(state, num: TemplateState['num1']) {
      state.num1 = num
    },
    updateNum2(state, num: TemplateState['num2']) {
      state.num2 = num
    },
  },
  effects: {
    async fetchNum() {},
  },
  events: {
    onInit() {
      // this.fetchNum()
    },
    onChange(prevState, nextState) {
      console.log('templateModel onChange')
      console.log('prevState: ', prevState)
      console.log('nextState: ', nextState)
    },
    onDestroy() {
      console.log('templateModel onDestroy')
    },
  },
})
