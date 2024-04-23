import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#d3d3d3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="107" cy="137" r="97" />
        <rect x="3" y="259" rx="0" ry="0" width="218" height="38" />
        <rect x="3" y="310" rx="0" ry="0" width="217" height="67" />
        <rect x="4" y="385" rx="0" ry="0" width="89" height="41" />
        <rect x="129" y="384" rx="0" ry="0" width="92" height="41" />
    </ContentLoader>
)

export default Skeleton

