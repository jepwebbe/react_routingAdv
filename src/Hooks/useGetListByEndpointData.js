import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useGetListByEndpointData = (endpoint) => {
    const [state, setState] = useState([])

    useEffect(() => {
        const fetchApiData = async () => {
            const response = await axios.get(endpoint)
            try {
                if (response.data) {
                    setState(response.data.products)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchApiData()
    }, [endpoint])
    return { state }
}

export default useGetListByEndpointData