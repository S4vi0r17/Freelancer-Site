const Form = () => {
    return (
        <form
            className="form"
            action="https://formsubmit.co/gbp17@outlook.com"
            method="POST"
        >
            <fieldset>
                <legend>Contact me by filling out all the fields.</legend>

                <div className="field-container">
                    <div className="field">
                        <label
                        >Name
                            <input
                                className="input-text"
                                placeholder="e.g. John Doe"
                                type="text"
                                name="name"
                                required
                            /></label>
                    </div>
                    <div className="field">
                        <label
                        >Cellphone
                            <input
                                className="input-text"
                                placeholder="e.g. 555-123-4567"
                                type="number"
                                name="cellphone"
                                required
                            /></label>
                    </div>
                    <div className="field">
                        <label
                        >Email<input
                                className="input-text"
                                placeholder="e.g. email@example.com"
                                type="email"
                                name="email"
                                required
                            /></label>
                    </div>
                    <div className="field">
                        <label
                        >Message
                            <textarea
                                placeholder="e.g. Hi, I'd like to know more about..."
                                className="input-text"
                                name="message"
                                cols="30"
                                rows="10"
                                required
                            ></textarea>
                        </label>
                    </div>
                </div>
                <div className="align-right flex">

                    <input className="button w-100" value="Submit" type="submit" />

                </div>
            </fieldset>
        </form>
    )
}

export default Form
