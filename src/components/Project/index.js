import React from "react"
import * as S from './styled'

const Project = ({ title, description, link }) => {
  return (
    <S.CourseLink href={link} target="_blank">
      <S.CourseWrapper>
        <S.CourseInfo>
          <S.CourseTitle>{title}</S.CourseTitle>
          <S.CourseDescription>{description}</S.CourseDescription>
        </S.CourseInfo>
      </S.CourseWrapper>
    </S.CourseLink>
  )
}

export default Project