import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";

import { BlogContainer } from "./styles";

export function Blog () {
    return (
        <BlogContainer>
            <header>
                <img src="./src/assets/logo.svg" alt="" />
            </header>

            <Profile/>

            <div>
                <div>
                    <h3>Publicações</h3>

                    <span>6 publicações</span>
                </div>

                <SearchForm/>
            </div>
            
            <div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
            
        </BlogContainer>
    );
}