import { Member } from "./Member/Member";
import { defaultTeamMembers } from "../../Constants/Constants";

export const Team = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="border-start border-5 border-primary ps-5 mb-5" style={{ "maxWidth": "600px" }}>
                    <h6 className="text-primary text-uppercase">Team Members</h6>
                    <h1 className="display-5 text-uppercase mb-0">Qualified Pets Care Professionals</h1>
                </div>
               <div className="owlCarousel teamCarousel positionRelative" style={{ "paddingRight": "25px" }}>
                    <Member user={defaultTeamMembers[0]}/>
                    <Member user={defaultTeamMembers[1]}/>
                    <Member user={defaultTeamMembers[2]}/>
                </div>
            </div>
        </div>
    );
}