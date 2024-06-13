import * as React from "react";

type LoaderProps = {
    size: number,
}


const BarLoader: React.FC<LoaderProps> = ({ size = 45 }) => {
    return (
        <div style={{ height: size, width: size }} className="loader-bar"></div>
    )
}
const DotLoader: React.FC<LoaderProps> = ({ size = 45 }) => {
    return (
        <div style={{ height: size }} className="loader-dot"></div>
    )
}
const SpinnerLoader: React.FC<LoaderProps & { color: string }> = ({ size = 45, color = "#000" }) => {
    return (
        <div style={{ height: size, width: size, background: color }} className="loader-spinner"></div>
    )
}


export { BarLoader, DotLoader, SpinnerLoader }

