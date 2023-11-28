

export default function Packages({ packages }) {
    const display = packages.map((spaPackage, i) => {
        return <li key={i}>{spaPackage}</li>
    })

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                    <ul>
                        {display}
                    </ul>
                </div>
                
            </div>
        </div>
    )
}