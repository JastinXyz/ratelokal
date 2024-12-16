import useTypedPage from "@/Hooks/useTypedPage"
import React, { useEffect } from "react"
import twemoji from "twemoji"

export default function TwemojiWrapper({ children }: any) {
    const { url } = useTypedPage();

    useEffect(() => {
        twemoji.parse(document.body, { className: "twemoji", base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/', });
    }, [url])
    return (
        <div>{children}</div>
    )
}