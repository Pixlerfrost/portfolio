import { Box, Container, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../Components/navbar'
import EarthLoader from '../Components/earth-3d-loader'
import dynamic from 'next/dynamic'
import Footer from '../Components/footer'


const Earth3d = dynamic(() => import('../Components/earth-3d'), {
  ssr: false,
  loading: () => <EarthLoader />
})


const Main = ({ router, children }) => {
  return (
    <>
      <Box as='main' pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1 " />
          <title>Mohamad Youness - HomePage</title>
          <meta name="description" content="Mohamad's homepage" />
          <meta name="author" content="Mohamad Youness" />
          <meta name="author" content="Pixlerfrost" />
          <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Pixlerfrost" />
          <meta property="og:site_name" content="Mohamad Youness's Homepage" />
          <meta property="og:type" content="website" />
        </Head>

        <Navbar path={router.asPath} />

        <Container maxW="container.md" pt={1} pb={20}>
          <Earth3d />

        </Container>
      </Box>
      <Box>

        {children}

        <Footer />
      </Box>
    </>

  )
}

export default Main