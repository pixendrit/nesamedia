/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Dritë` : `Terr`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. Të gjitha të drejtat e rezervuara.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <img width="30" height="30" src="https://i.imgur.com/CvmvAcX.png" alt="Nesa Media Logo" />
        {` `}
        <Link
          aria-label="Zhvilluar nga Nesa Media"
          sx={{ ml: 2 }}
          href="https://instagram.com/nesamedia2020"
        >
          Zhvilluar
        </Link>
        <div sx={{ mx: 1 }}>nga</div>
        {` `}
        <Link aria-label="Të gjitha të drejtat e rezervuara" href="https://www.nesa.media">
          Nesa Media
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
