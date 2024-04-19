import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Avatar from '../Avatar'
import * as S from './styled'

const Profile = () => {
   const {
      site: {
         siteMetadata: { title, position, description },
      },
   } = useStaticQuery(graphql`
   query MySiteMetadata{
    site {
     siteMetadata {
       title
       position
       description
       author
    }
  }
 }
`)
   return (
      <S.ProfileWrapper>
         <S.ProfileLink>
            <Avatar />
            <S.ProfileAuthor>{title}</S.ProfileAuthor>
            <S.ProfilePosition>{position}</S.ProfilePosition>
            <S.ProfilePosition>{description}</S.ProfilePosition>
         </S.ProfileLink>
      </S.ProfileWrapper>
   )
}
export default Profile