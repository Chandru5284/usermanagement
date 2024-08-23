// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    res.status(200).json(
        {
            "results": [
                {
                    label: "Karnataka",
                    value: "Karnataka",
                },
                {
                    label: "Maharashtra",
                    value: "Maharashtra",
                },
                {
                    label: "Rajasthan",
                    value: "Rajasthan",
                },
                {
                    label: "Tamil Nadu",
                    value: "Tamil Nadu",
                },
                {
                    label: "Uttar Pradesh",
                    value: "Uttar Pradesh",
                },
                {
                    label: "West Bengal",
                    value: "West Bengal",
                },
                {
                    label: "Kerala",
                    value: "Kerala",
                }
            ]
        }
    )
}
