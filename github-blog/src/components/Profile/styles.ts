import styled from "styled-components";

export const ProfileContainer = styled.div`
    background: ${(props) => props.theme['base-profile']};
    
    margin: 3rem 0;
    padding: 2rem 3rem;

    display: flex;
    justify-content: space-between;

    border-radius: 10px;

    box-shadow: 10px 5px 5pxrgba(0, 0, 0, 0.2);
`

export const ProfileImage = styled.div`
    img {
        width: 12rem;
        border-radius: 10px;
    }
`

export const ProfileContent = styled.div`
    margin: 0 2rem;

    div:first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 0.7rem 0;

        a {
            color: ${(props) => props.theme['blue']};
        }
    }
    
    h1 {
        color: ${(props) => props.theme['base-title']}
    }

    div:last-child {
        margin: 2.5rem 0 0;
        
        
        a {
            display: inline-flex;
            align-items: "center";
            gap: 0.5rem;
            margin-right: 1rem;

            color: ${(props) => props.theme['base-subtitle']};
            text-decoration: none;
        }


    }
    
`
