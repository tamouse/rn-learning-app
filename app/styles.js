import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: `white`,
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`
  },
  header: {
    width: `100%`,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'azure'
  },
  headerText: {
    fontSize: 30,
    color: 'black'
  },
  defaultText: {
    color: `black`
  },
  h1: {
    color: `blue`,
    fontSize: 30,
  }
})

export default styles