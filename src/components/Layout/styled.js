import styled from 'styled-components'

// Create a Wrapper component that'll render a <section> tag with some styles
export const LayoutWrapper = styled.section`
display: flex;
`
// main tag
export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
`
