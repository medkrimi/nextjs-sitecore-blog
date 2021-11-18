import { getPostById } from '../../lib/api'

export default async function preview(req, res) {
  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})
  console.log(req.headers.referer)
  // Redirect the user back to the index page.
  res.writeHead(307, { Location: '/' })
  res.end(`Preview mode enabled!`)
}
