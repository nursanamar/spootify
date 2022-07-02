import React, { useEffect } from 'react'
import Spinner from "../../common/components/Spinner";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../store/slices/auth";
import "./_styles.scss";


export default function Index() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const urlParams = new URLSearchParams(
        window.location.hash.substring(1) // skip the first char (#)
    );


    useEffect(() => {
        startRequestToken()
    }, [])

    const startRequestToken = () => {
        if (urlParams.get("error")) {
            navigate("/")
        }

        let accessToken = urlParams.get("access_token")
        if (accessToken) {
            dispatch(setLogin({ token: accessToken }))
            navigate("/")
        }
    }

    return (
        <div className="container">
            <Spinner />
        </div>
    )
}
