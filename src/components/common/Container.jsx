import React from 'react'
import styled from 'styled-components'

const Container = ({children}) => {
  return (
    <CommonContainer>{children}</CommonContainer>
  )
}

export default Container

const CommonContainer = styled.div`
max-width : 1200px;
margin : 0 auto;
`