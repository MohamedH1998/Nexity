import { NextApiRequest, NextApiResponse } from "next"

export default function preview(req: NextApiRequest, res: NextApiResponse) {
    // everytime a request comes it, it will see that you're in preview mode
    res.setPreviewData({})
    res.writeHead(307, {Location: '/'})
    res.end()
  }
  