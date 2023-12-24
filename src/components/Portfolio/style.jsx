import { styled } from "styled-components";
import bg from '../../assets/022dc63b-8053-4ad6-bc98-c55d1196185f.jpg'
import Card1 from '../../assets/Снимок экрана_20230729_102104.png'
import Card2 from '../../assets/Снимок экрана_20230729_102442.png'
import Card3 from '../../assets/Снимок экрана_20230729_102718.png'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-left: 10%;
    padding-right: 10%;

    @media (max-width: 768px) {
        padding-left: 5%;
        padding-right: 5%;
    }
`
// ! ----------------------------------------------------- Nav ----------------------------------------------------------

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #0e0e1b;
`

export const NavContainer = styled.div`
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    margin: 0 auto;
    
    &>svg {
        display: none;

        @media (max-width: 768px) {
            display: block;
        }
    }

`

export const Logo = styled.a`
    text-decoration: none;
    font-family: 'Russo One';
    font-size: 5em;
    font-weight: 700;
    color: #fc4747;
    letter-spacing: 3px;
    text-transform: uppercase;
    cursor: pointer;
`

export const NavLinks = styled.ul`
    display: flex;
    transition: 0.5s;
    gap: 20px;

    &>svg {
        display: none;

        @media (max-width: 768px) {
            display: block;
        }
    }

    @media (max-width: 768px) {
        width: 200px;
        height: 100vh;
        position: fixed;
        top: 0;
        right: -200px;
        flex-direction: column;
        background-color: #0e0e1b;
        padding-top: 20px;
        padding-left: 50px;
        gap: 50px;
    }
`

export const Link = styled.li`
    list-style: none;
`

export const NavLink = styled.a`
    list-style: none;
    font-size: 2em;
    font-weight: 400;
    letter-spacing: 3px;
    color: #ffffff;
    cursor: pointer;
    transition: 0.5s;
    text-transform: capitalize;
    text-decoration: none;
    &:hover {
        color: #fc4747;
    }
`

//  ! ------------------------------------------------------ HOME ------------------------------------------------------

export const HomeWrapper = styled.div`
    background-image: url('${bg}');
    background-size: 55%;
    background-repeat: no-repeat;
    transform: scale(-1, 1);
    background-position: top 250px left 0;
    overflow: hidden;

    @media (max-width: 768px) {
        background-position: top 125px left 0;
    }
`

export const ScaleBg = styled.div`   
    transform: scale(-1, 1);
    padding-top: 250px;

    @media (max-width: 768px) {
        padding-top: 150px;
    }

    @media (max-width: 375px) {
        padding-top: 75px;
    }
`

export const Title = styled.h2`
    font-weight: 700;
    font-size: 10em;
    font-family: 'Poppins';
    letter-spacing: 3px;
    text-transform: capitalize;

    @media (max-width: 768px) {
        font-size: 4.5em;
    }
    @media (max-width: 375px) {
        font-size: 3.5em;
    }
`

export const SubTitle = styled.h3`
    display: block;
    font-weight: 700;
    font-size: 5.5em;
    letter-spacing: 3px;
    text-transform: capitalize;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        font-size: 4em;
        margin-bottom: 20px;
    }
    @media (max-width: 375px) {
        font-size: 3em;
        margin-bottom: 10px;
    }
`

export const MyProf = styled.span`
    font-weight: 900;
    font-style: 4.5em;
    letter-spacing: 3px;
    color: #fc4747;
    font-family: 'Poppins';
    text-transform: capitalize;
`

export const PTitle = styled.p`
    width: 40%;
    font-size: 2em;
`

export const Btns = styled.div`
    margin-left: 10%;
    display: flex;

    @media (max-width: 768px) {
        margin-left: 5%;
    }

    @media (max-width: 375px) {
        margin-left: 10%;
    }
`

export const Btn = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 2.5em;
    font-weight: 400;
    color: #ffffff;
    background-color: #5a698f;
    padding: 8px 14px;
    margin: 40px 5px;
    letter-spacing: 2px;
    transition: 0.5s;
    text-transform: capitalize;
    box-shadow: 5px 15px 10px rgba(0, 0, 0, 0.4);
    &:hover {
        background-color: #fc4747;
    }

    @media (max-width: 768px) {
        padding: 6px 12px;
        font-size: 2em;
        margin: 30px 5px;
    }

    &>svg {
        width: 20px;
        height: 20px;

        @media (max-width: 768px) {
            width: 16px;
            height: 16px;
        }
    }
`

// ! ------------------------------------------------------------------- ABOUT ---------------------------------------------------------------

export const AboutWrapper = styled.div`
    display: flex;
    padding-top: 300px;
    padding-bottom: 150px;
    width: 100%;

    @media (max-width: 375px) {
        flex-direction: column;
        gap: 50px;
        padding-top: 100px;
        padding-bottom: 100px;
    }
`

export const AboutInfo = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;

    @media (max-width: 375px) {
        width: 100%;
    }
`

export const AboutPTitle = styled.p`
    width: 100%;
    font-size: 2em;
`

export const Skills = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    margin-left: 80px;
    gap: 20px;
    position: relative;
    &>h3 {
        color: #fc4747;
    }

    @media (max-width: 375px) {
        width: 100%;
        margin-left: 0;
    }
`

export const Skill = styled.h2`
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 3em;
    font-family: 'Poppins';
    text-transform: capitalize;
`

export const SkillBorder = styled.div`
    display: flex;
    width: 65%;
    height: 7px;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid #fc4747;
    background-color: #0e0e1b;

    @media (max-width: 768px) {
        margin-top: 10px;
    }
`

export const SkillHtml = styled.div`
    display: flex;
    height: 5px;
    border-radius: 2px;
    border: 1px solid #0e0e1b;
    width: 70%;
    background-color: #fc4747;
`
export const SkillCss = styled.div`
    display: flex;
    height: 5px;
    border-radius: 2px;
    border: 1px solid #0e0e1b;
    width: 60%;
    background-color: #fc4747;
`
export const SkillJs= styled.div`
    display: flex;
    height: 5px;
    border-radius: 2px;
    border: 1px solid #0e0e1b;
    width: 40%;
    background-color: #fc4747;
`
export const SkillReact = styled.div`
    display: flex;
    height: 5px;
    border-radius: 2px;
    border: 1px solid #0e0e1b;
    width: 35%;
    background-color: #fc4747;
`

// ! ---------------------------------------------- Projects -------------------------------------------------------

export const ProjectName = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 150px;
`

export const ProjectWrapper = styled.div`
    display: flex;
    padding-bottom: 150px;
    width: 100%;
    gap: 25px;

    @media (max-width: 375px) {
        flex-direction: column;
        padding-top: 100px;
        padding-bottom: 100px;
    }
`

export const CardImg1 = styled.div`
    width: calc((100% - 75px) / 3);
    height: 420px;
    border-radius: 5px;
    background-image: linear-gradient(180deg, rgba(74, 77, 89, 0.2), #10141e), url('${Card1}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
        height: 176px;
    }

    @media (max-width: 375px) {
        width: 100%;
        height: 300px;
    }
`

export const CardImg2 = styled.div`
    width: calc((100% - 75px) / 3);
    height: 420px;
    border-radius: 5px;
    background-image: linear-gradient(180deg, rgba(74, 77, 89, 0.2), #10141e), url('${Card2}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
    @media (max-width: 768px) {
        height: 176px;
    }
    
    @media (max-width: 375px) {
        width: 100%;
        height: 300px;
    }
`

export const CardImg3 = styled.div`
    width: calc((100% - 75px) / 3);
    height: 420px;
    border-radius: 5px;
    background-image: linear-gradient(180deg, rgba(74, 77, 89, 0.2), #10141e), url('${Card3}');
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
        height: 176px;
    }

    @media (max-width: 375px) {
        width: 100%;
        height: 300px;
    }
`

// ! ---------------------------------------------------------------- Contact ----------------------------------------------------------------------

export const ContactWrapper = styled.div`
    display: flex;
    width: 100%;
    padding-top: 200px;
    margin-bottom: 100px;

    @media (max-width: 375px) {
        padding-top: 100px;
        flex-direction: column;
    }
`

export const ContactConnect = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
    width: 50%;
    margin-bottom: 50px;
    &>h3 {
        width: 100%;
        display: flex;
        justify-content: center;
        
        @media (max-width: 1440px) {
            font-size: 5em;
        }
    }
    &>p {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 375px) {
        width: 100%;
    }
`

export const ContactNavLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    `

export const ContactNavLink = styled.a`
    display: flex;
    justify-content: center;
    gap: 20px;
    list-style: none;
    font-size: 2em;
    font-weight: 400;
    letter-spacing: 3px;
    color: #ffffff;
    text-decoration: none;
    
    &>svg {
        width: 40px;
        height: 40px;
        cursor: pointer;
        transition: 0.5s;
        
        &:hover {
            color: #fc4747;
        }

        @media (max-width: 768px) {
            width: 30px;
            height: 30px;
        }

        @media (max-width: 375px) {
            width: 20px;
            height: 20px;
        }
    }

`