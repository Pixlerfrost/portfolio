import Link from 'next/link'
import { Text, useColorModeValue, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'


const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const logoImage = `/images/favicon${useColorModeValue('', '-dark')}.ico`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={logoImage} width={7} height={7} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            className='m'
          >
            Mohamad Youness
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo