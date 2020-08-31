import makeID from './makeID'

export default function createBar(dimension, startLocation, props) {
  return {
    id: makeID(),
    length: 1,
    dimension: dimension,
    editing: true,
    ...startLocation,
    ...props
  }
}
