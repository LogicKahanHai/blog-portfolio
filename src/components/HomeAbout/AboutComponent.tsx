const AboutComponent = () => {
    return (
        <>
            {/* Phone */}
            <PhoneAboutComponent />

            {/* Web */}
            <WebAboutComponent />
        </>
    );
}

const PhoneAboutComponent = () => {
    return (
        <div>
            <h1>About</h1>
            <p>About us</p>
        </div>
    );
}

const WebAboutComponent = () => {
    return (
        <div>
            <h1>About</h1>
            <p>About us</p>
        </div>
    );
}

export default AboutComponent;