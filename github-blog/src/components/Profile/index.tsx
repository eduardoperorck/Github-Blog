import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUsers, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { ProfileContainer, ProfileContent, ProfileImage } from "./styles";

export function Profile () {
    return (
        <ProfileContainer>
            <ProfileImage>
                <img src="https://avatars.githubusercontent.com/u/57379069?v=4" alt="" />
            </ProfileImage>

            <ProfileContent>
                <div>
                    <h1>Eduardo Perorck</h1>
                    <a href="">Github</a>
                </div>

                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid laborum molestiae ad ex necessitatibus officia doloremque non ea, facilis placeat labore iste aliquam tempora fuga laudantium excepturi repudiandae quis reiciendis?</p>
                </div>

                <div>
                    <a href="">
                        <FontAwesomeIcon icon={faGithub} />
                        Github
                    </a>

                    <a href="">
                        <FontAwesomeIcon icon={faBuilding} />
                        Rocketseat
                    </a>

                    <a href="">
                        <FontAwesomeIcon icon={faUsers} />
                        32 seguidores
                    </a>
                </div>
            </ProfileContent>
        </ProfileContainer>
    );
}