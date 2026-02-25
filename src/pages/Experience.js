
import TimelineItem from "../components/TimelineItem";

import experience from "../assets/data/experience.json";

const Experience = () => {
    return(
        <div class="content">
            <div class="experience">
            <h1 style={{ paddingTop: "70px", paddingBottom: "10px" }}>experience</h1>
            {
                experience.map((item, index) => (
                <TimelineItem key={index} {...item} />
                ))
            }
            </div>
        </div>
    )
}

export default Experience;