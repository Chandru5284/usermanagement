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
                    state_id: "Karnataka",
                    label: "Bengaluru",
                    value: "Bengaluru",
                },
                {
                    state_id: "Karnataka",
                    label: "Mysuru",
                    value: "Mysuru",
                },
                {
                    state_id: "Karnataka",
                    label: "Mangalore",
                    value: "Mangalore",
                },
                {
                    state_id: "Maharashtra",
                    label: "Mumbai",
                    value: "Mumbai",
                },
                {
                    state_id: "Maharashtra",
                    label: "Pune",
                    value: "Pune",
                },
                {
                    state_id: "Maharashtra",
                    label: "Nagpur",
                    value: "Nagpur",
                },
                {
                    state_id: "Rajasthan",
                    label: "Jaipur",
                    value: "Jaipur",
                },
                {
                    state_id: "Rajasthan",
                    label: "Udaipur",
                    value: "Udaipur",
                },
                {
                    state_id: "Rajasthan",
                    label: "Jodhpur",
                    value: "Jodhpur",
                },
                {
                    state_id: "Tamil Nadu",
                    label: "Chennai",
                    value: "Chennai",
                },
                {
                    state_id: "Tamil Nadu",
                    label: "Coimbatore",
                    value: "Coimbatore",
                },
                {
                    state_id: "Tamil Nadu",
                    label: "Madurai",
                    value: "Madurai",
                },
                {
                    state_id: "Uttar Pradesh",
                    label: "Lucknow",
                    value: "Lucknow",
                },
                {
                    state_id: "Uttar Pradesh",
                    label: "Kanpur",
                    value: "Kanpur",
                },
                {
                    state_id: "Uttar Pradesh",
                    label: "Varanasi",
                    value: "Varanasi",
                },
                {
                    state_id: "West Bengal",
                    label: "Kolkata",
                    value: "Kolkata",
                },
                {
                    state_id: "West Bengal",
                    label: "Darjeeling",
                    value: "Darjeeling",
                },
                {
                    state_id: "West Bengal",
                    label: "Howrah",
                    value: "Howrah",
                },
                {
                    state_id: "Kerala",
                    label: "Thiruvananthapuram",
                    value: "Thiruvananthapuram",
                },
                {
                    state_id: "Kerala",
                    label: "Kochi",
                    value: "Kochi",
                },
                {
                    state_id: "Kerala",
                    label: "Kozhikode",
                    value: "Kozhikode",
                }
            ]
        }
    )
}
