// eslint-disable-next-line react/prop-types
function Service({title, svg, description}) {
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