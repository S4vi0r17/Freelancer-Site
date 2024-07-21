// eslint-disable-next-line react/prop-types
const Service = ({ title, svg, description }) => {
    return (
        <section className="service">
            <h3>{title}</h3>
            <div className="icons">
                {svg}
            </div>
            <p>{description}</p>
        </section>
    );
}

export default Service
