import React from "react"
import PropTypes from "prop-types"
// import ReactDisqusComments from "react-disqus-comments"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import * as S from "./styled"

const Comments = ({ url, title }) => {
  const completeURL = `https://nerdanalytics.com.br${url}`
  const disqusConfig = {
    url: completeURL,
    identifier: url, // ou algum identificador único que você queira usar para cada post
    title: title,
  };

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <Disqus config={disqusConfig} />
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments