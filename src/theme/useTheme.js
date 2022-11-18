import { useContext } from 'react'
import ThemeContext from './ThemeCOntext'

function useTheme () {
  return useContext(ThemeContext)
}

export default useTheme
