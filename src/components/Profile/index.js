import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Avatar from '../Avatar'
import * as S from './styled'

const Profile = ({ isMobileHeader }) => {
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
      <S.ProfileWrapper $isMobileHeader={isMobileHeader}>
         <S.ProfileLink>
            <Avatar />
            <S.ProfileAuthor>
               {title}
               <S.ProfilePosition>{position}</S.ProfilePosition>
            </S.ProfileAuthor>
            
         </S.ProfileLink>
         <S.ProfileDescription>{description}</S.ProfileDescription>
      </S.ProfileWrapper>
   )
}
export default Profile