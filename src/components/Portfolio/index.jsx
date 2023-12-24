import React from 'react';
import { AboutInfo, AboutPTitle, AboutWrapper, Btn, Btns, Container, HomeWrapper, Logo, MyProf, Nav, NavContainer, NavLink, NavLinks, PTitle, ScaleBg, Skills, Skill, SubTitle, Title, ProjectWrapper, CardWrapper, ContactWrapper, ContactNavLinks, ContactNavLink, ContactConnect, Link, CardImg1, CardImg2, CardImg3, SkillDiv, SkillHtml, SkillCss, SkillJs, SkillReact, SkillBorder, ProjectName } from './style'
import { ReactComponent as ChatIcon } from '../../assets/chat-left-dots.svg'
import { ReactComponent as PDFIcon } from '../../assets/filetype-pdf.svg'
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg'
import { ReactComponent as GitHubIcon } from '../../assets/github.svg'
import { ReactComponent as XIcon } from '../../assets/x-lg.svg'
import { ReactComponent as ListIcon } from '../../assets/list.svg'
import { ContactUs } from '../ContactUs';

export default function index() {

    function openMenu() {
        document.getElementById('links').style.right = '0'
    }

    function closeMenu() {
        document.getElementById('links').style.right = '-200px'
    }

    return (
        <Container>

            <Nav>
                <NavContainer>
                    <Logo href='#home'>boris</Logo>

                    <NavLinks id='links'>
                        <XIcon onClick={closeMenu} />
                        <Link>
                            <NavLink href='#home'>home</NavLink>
                        </Link>

                        <Link>
                            <NavLink href='#about'>about me</NavLink>
                        </Link>

                        <Link>
                            <NavLink href='#project'>projects</NavLink>
                        </Link>

                        <Link>
                            <NavLink href='#contact'>contact</NavLink>
                        </Link>
                    </NavLinks>
                    <ListIcon onClick={openMenu} />

                </NavContainer>
            </Nav>

            <HomeWrapper id='home'>
                <ScaleBg>
                    <Title>hello!</Title>
                    <SubTitle>I'm <MyProf>Coder</MyProf></SubTitle>
                    <PTitle>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque sunt ut consequuntur error impedit repellat! Minus aliquid sed,
                        consequatur consequuntur dolores voluptas quas maiores qui
                        praesentium cum et repellendus possimus.
                    </PTitle>
                    <Btns>
                        <Btn>dowload CV <PDFIcon /></Btn>
                        <Btn>hire me <ChatIcon /></Btn>
                    </Btns>
                </ScaleBg>
            </HomeWrapper>

            <AboutWrapper id='about'>
                <AboutInfo>
                    <SubTitle>about me</SubTitle>
                    <AboutPTitle>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt praesentium fugit saepe,
                        reprehenderit vero amet ea atque illum voluptatem, perspiciatis debitis explicabo officia
                        fugiat accusantium non quibusdam nisi dolorem, aperiam laborum quasi! Maiores id vel
                        accusantium quas quos tempora expedita sed dicta, ex natus nemo nihil! Iure ad,
                        pariatur molestiae illum natus error deserunt quod, exercitationem blanditiis dolore
                        laborum. Alias, animi ab consectetur tenetur facilis voluptates commodi tempore architecto
                        vero aperiam nulla debitis corrupti explicabo.
                    </AboutPTitle>
                </AboutInfo>
                <Skills>
                    <SubTitle>skills</SubTitle>
                    <Skill>html <SkillBorder><SkillHtml /></SkillBorder> </Skill>
                    <Skill>css <SkillBorder><SkillCss /></SkillBorder> </Skill>
                    <Skill>javaScript <SkillBorder><SkillJs /></SkillBorder></Skill>
                    <Skill>react JS <SkillBorder><SkillReact /></SkillBorder> </Skill>
                </Skills>
            </AboutWrapper>

            <ProjectName id='project'><SubTitle>My Projects</SubTitle></ProjectName>
            <ProjectWrapper>
                <CardImg1 />
                <CardImg2 />
                <CardImg3 />
            </ProjectWrapper>

            <ContactWrapper id='contact'>
                <ContactConnect>
                    <SubTitle>conetc with me:</SubTitle>
                    <PTitle>Satisfied with me? Please contact me</PTitle>
                    <ContactNavLinks>
                        <ContactNavLink>
                            <FacebookIcon />
                            <PTitle>@d1sumar</PTitle>
                        </ContactNavLink>
                        <ContactNavLink>
                            <InstagramIcon />
                            <PTitle>@d1sumar</PTitle>
                        </ContactNavLink>
                        <ContactNavLink>
                            <GitHubIcon />
                            <PTitle>@d1sumar</PTitle>
                        </ContactNavLink>
                    </ContactNavLinks>
                </ContactConnect>

                <ContactUs />

            </ContactWrapper>

        </Container>
    )
}