// gatsby-ssr.js
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  
  // Sort components to place Helmet tags first
  const sortedComponents = headComponents.sort((a, b) => {
    if (a.props && a.props["data-react-helmet"]) {
      return -1
    }
    return 1
  })
  
  replaceHeadComponents(sortedComponents)
}