export { default as Test } from './Test'

export default function() {
    const demo = { test: 'test test'}
    const { test } = demo
    console.log(test)
}