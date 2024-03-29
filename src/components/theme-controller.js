import React, {
  useMemo,
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useCallback
} from 'react'
import PropTypes from 'prop-types'
import { css } from 'linaria'

import { ThemesNames, Themes } from 'src/themes'
import { useMedia } from 'src/hooks'

const THEME_TRANSITIONS_TIME = 500

const themeTransition = css`
  * {
    transition: all ${THEME_TRANSITIONS_TIME}ms ease-in;
  }
`

const ThemeContext = React.createContext({
  theme: ThemesNames.LIGHT,
  toggleTheme: () => {}
})

const themeFromLs =
  typeof window !== `undefined` ? window.localStorage.getItem('theme') : null

export const useTheme = () => useContext(ThemeContext)

export const ThemeController = ({ children }) => {
  const prefersDarkTheme = useMedia({ prefersDarkTheme: 'dark' })

  const preferredScheme = useMemo(
    () => (prefersDarkTheme ? ThemesNames.DARK : ThemesNames.LIGHT),
    [prefersDarkTheme]
  )

  const initialState = themeFromLs || preferredScheme

  const [themeName, setThemeName] = useState(initialState)
  const [isChangingTheme, setIsChangingTheme] = useState(false)

  const toggleTheme = useCallback(() => {
    setIsChangingTheme(true)

    setThemeName((currentThemeName) => {
      if (currentThemeName === ThemesNames.DARK) return ThemesNames.LIGHT

      return ThemesNames.DARK
    })
  }, [])

  useLayoutEffect(() => {
    if (!isChangingTheme) {
      document.body.classList.remove(themeTransition)
      return
    }

    document.body.classList.add(themeTransition)

    const timeoutId = window.setTimeout(
      () => setIsChangingTheme(false),
      THEME_TRANSITIONS_TIME
    )

    return () => {
      document.body.classList.remove(themeTransition)
      window.clearTimeout(timeoutId)
    }
  }, [isChangingTheme])

  useEffect(() => window.localStorage.setItem('theme', themeName), [themeName])

  const contextValue = useMemo(
    () => ({
      theme: Themes[themeName],
      toggleTheme
    }),
    [themeName, toggleTheme]
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeController.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
