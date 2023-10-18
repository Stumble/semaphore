import { Icon } from "@chakra-ui/react"
import React from "react"

export type IconEyelashProps = {
    width?: number
    height?: number
    color?: string
}

export default function IconEyelash({ width, height, color }: IconEyelashProps): JSX.Element {
    return (
        <Icon viewBox="0 0 55 32" width={width} height={height} color={color}>
            <path
                fill="currentColor"
                d="M20.9148 31.0633L16.1257 29.7786L18.0775 22.4894C15.1558 21.4119 12.4405 19.8415 10.0493 17.8466L4.70958 23.1888L1.20018 19.6794L6.5424 14.3397C3.52674 10.728 1.50049 6.3952 0.661987 1.76537L5.5429 0.875C7.42533 11.2965 16.5423 19.2032 27.507 19.2032C38.4692 19.2032 47.5887 11.2965 49.4711 0.875L54.3521 1.76289C53.5147 6.39335 51.4893 10.727 48.4741 14.3397L53.8139 19.6794L50.3045 23.1888L44.9647 17.8466C42.5736 19.8415 39.8582 21.4119 36.9365 22.4894L38.8884 29.781L34.0992 31.0633L32.1449 23.7717C29.0753 24.2976 25.9387 24.2976 22.8692 23.7717L20.9148 31.0633Z"
            />
        </Icon>
    )
}
