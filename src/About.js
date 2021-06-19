import owners from './images/owners.JPG'

function About() {
    return (
        <div>
            <h2>Our Story...</h2>
            <p className="story">Healthy Harvest was founded by Kendra Beach. A climber, nutritionist and lover of life. Kendra studied nutrition and is passionate about sharing healthy food options with her community. Healthy Harvest serves vegan, vegetarian and gluten free options that are quick and delicious.</p>
            <img src={owners} />
        </div>
    )
}

export default About