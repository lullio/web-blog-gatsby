import React from 'react'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'

import * as S from './styled'

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => (
 <S.SidebarContainer $isMenuOpen={isMenuOpen}>
   <Profile $isMobileHeader={false} />
   <S.SidebarLinksContainer>
    <SocialLinks />
    <MenuLinks setIsMenuOpen={setIsMenuOpen} $isMenuOpen={isMenuOpen} />
   </S.SidebarLinksContainer>
 </S.SidebarContainer>
)

export default Sidebar