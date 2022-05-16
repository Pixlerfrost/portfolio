import { Box, Container, Heading, Image, useColorModeValue, Button, List, ListItem, chakra, Text, useToast } from "@chakra-ui/react"
import Paragraph from '../Components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
import { BioSection, BioYear } from '../Components/bio.js'
import Section from '../Components/section.js'
import { IoLogoDiscord } from "react-icons/io5";


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

function Page() {

  const toast = useToast()

  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('#ffffff40', 'whiteAlpha.200')} style={{ backdropFilter: 'blur(10px' }} p={3} mb={6} align="center">
      <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mohamad Youness
          </Heading>
          <Text fontSize={{base: 13, md: 16}} >Digital Specialist [ 3D Artist / Developer / Animator ]</Text>
        </Box>
      </Box>

   
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          Mohamad Youness is a front-end developer based in the U.S. He is a passionate programmer and aspires to become a Freelancer. In his free time he likes to play sports and watch Anime/tv. 
        </Paragraph>
        <Box align="center" my={4}>
          <Link href="/contact_page" scroll={false} passHref>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" >
              Contact me
            </Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2008</BioYear>
          Born in Lebanon, Beirut.
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          Started getting into all sorts of Technology, like Robots, Electrical Circuits etc.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Started Coding in Java.
        </BioSection>
        <BioSection>
          <BioYear>Mid 2019 to present</BioYear>
          Learned Python, Html, Css, JavaScript, Django and a couple of JavaScript Frameworks.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art
        </Paragraph>
        <Paragraph>
          Music
        </Paragraph>
        <Paragraph>
          Playing Flute
        </Paragraph>
        <Paragraph>
          3d Animating/Modeling
        </Paragraph>
        <Paragraph>
          Machine Learning
        </Paragraph>
        <Paragraph>
          Coding
        </Paragraph>
        <Paragraph>
          FootBall/Soccer
        </Paragraph>
        <Paragraph>
          Wrestling
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Pixlerfrost" target="_blank" passHref>
              <Button
                variant="ghost"
                colorScheme="gray"
                leftIcon={<IoLogoGithub />}
              >
                GitHub
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/Pixlerfrost" target="_blank" passHref>
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoTwitter />}
              >
                Twitter
              </Button>
            </Link>
          </ListItem>
          <ListItem>     
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoDiscord/>}
                onClick={() =>
                  toast({
                    position: 'bottom-left',
                    title: 'Pixlerfrost#3174',
                    duration: 9000,
                    isClosable: true,
                  })
                }
              >
                Discord
              </Button>
          </ListItem>
        </List>
      </Section>
    </Container >
  )
}

export default Page
