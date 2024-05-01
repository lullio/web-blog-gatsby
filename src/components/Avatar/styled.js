import styled from 'styled-components'
import media from "styled-media-query"
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

export const AvatarWrapper = styled(GatsbyImage)`
   border-radius: 50%;
   height: 3.75rem;
   width: 3.75rem;
   margin: auto;
   clip-path: circle(50% at 50% 50%);

   ${media.lessThan("large")`
   height: 2rem;
   width: 2rem;
  `}
`