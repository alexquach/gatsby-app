import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

export default function Layout({ children }) {
    return (
        <div
            css={css`
            background: linear-gradient(135deg, #046cab 0%, #f58afc 100%);
            width: 99vw;
            height: 99vh;
            overflow-x: hidden;`
        }>
            {children}
        </div>
    )
}