import { ClassNames } from "@emotion/core"
import React from "react"
import containerStyles from "./container.module.css"


export function Container({ children }) {
    return (
        <div className={containerStyles.base + " "+ containerStyles.splash}>
            <div className={containerStyles.container}>
                {children}
            </div>
        </div>
    )
}

export function WhiteContainer({ children }) {
    return (
        <div className={containerStyles.base + " " + containerStyles.white} >
            <div className={containerStyles.container}>
                {children}
            </div>
        </div>
    )
}