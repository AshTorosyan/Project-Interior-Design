import { Component } from "react";
import Card from "../../Components/Card/Card";
import Title1 from "../../Components/Title1/Title1";
import "./RightSide.css";
import Title2 from "../../Components/Title2/Title2";
import Img from "../../Img/Img";
import TextItem from "../../Components/TextItem/TextItem";
import List from "../../Components/List/List";
import ListItem from "../../Components/ListItem/ListItem";
import Button from "../../Components/Button/Button";
import Label from "../../Components/Label/Label";
import Input from "../../Components/Input/Input";

class RightSide extends Component {
    render() {
        return (
            <Card className="right-side-container">
                <Title1 className="title_1">Interior Design</Title1>
                <Title2 className="title_2">Showcase.</Title2>
                <Card className="red_line"></Card>
                <Card className="img_blocks">
                    <Img src="https://www.w3schools.com/w3images/kitchenconcrete.jpg"/>
                    <Img src="https://www.w3schools.com/w3images/atrium.jpg"/>
                    <Img src="https://www.w3schools.com/w3images/livingroom.jpg"/>
                    <Img src="https://www.w3schools.com/w3images/bedroom.jpg"/>
                    <Img src="https://www.w3schools.com/w3images/diningroom.jpg"/>
                    <Img src="https://www.w3schools.com/w3images/livingroom2.jpg"/>
                </Card>
                <Title2 className="title_2 title-2">Services.</Title2>
                <Card className="red_line"></Card>
                <TextItem>We are a interior design service that focus on what's best for your home and what's best for you!</TextItem> <br></br>
                <TextItem className="text">
                    Some text about our services - what we do and what we offer. We are lorem ipsum consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </TextItem>
                <Title2 className="title_2 title-2">Designers.</Title2>
                <Card className="red_line"></Card>
                <TextItem>The best team in the world.</TextItem> <br></br>
                <TextItem className="text">
                We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </TextItem>
                <b>Our designers are thoughtfully chosen:</b> 
                <Card className="designers_blocks">
                    <Card className="designer_block">
                        <Img src="https://www.w3schools.com/w3images/team2.jpg"/>
                        <Title2 className="title_designer">John Doe</Title2>
                        <TextItem className="prof_designer">CEO & Founder</TextItem>
                        <TextItem className="text_designer">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</TextItem>
                    </Card>
                    <Card className="designer_block">
                    <Img src="https://www.w3schools.com/w3images/team1.jpg"/>
                        <Title2 className="title_designer">John Doe</Title2>
                        <TextItem className="prof_designer">Designer</TextItem>
                        <TextItem className="text_designer">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</TextItem>
                    </Card>
                    <Card className="designer_block">
                    <Img src="https://www.w3schools.com/w3images/team3.jpg"/>
                        <Title2 className="title_designer">Mike Ross</Title2>
                        <TextItem className="prof_designer">Architect</TextItem>
                        <TextItem className="text_designer">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</TextItem>
                    </Card>
                </Card>
                <Title2 className="title_2 title-2">Packages.</Title2>
                <Card className="red_line"></Card>
                <TextItem className="text">
                    Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure
                </TextItem>
                <Card className="blocks">
                    <List>
                        <ListItem className="list_item2 basic">Basic</ListItem>
                        <ListItem className="list_item2">Floorplanning</ListItem> <hr></hr>
                        <ListItem className="list_item2">10 hours support</ListItem> <hr></hr>
                        <ListItem className="list_item2">Photography</ListItem> <hr></hr>
                        <ListItem className="list_item2">20% furniture discount</ListItem> <hr></hr>
                        <ListItem className="list_item2">Good deals</ListItem> <hr></hr>
                        <ListItem className="list_item2 dollar">$ 199<TextItem className="per_room">per room</TextItem></ListItem> <hr></hr>
                        <ListItem className="list_item2"><Button className="button">Sign Up</Button></ListItem>
                    </List>
                    <List>
                        <ListItem className="list_item2 basic pro">Pro</ListItem>
                        <ListItem className="list_item2">Floorplanning</ListItem> <hr></hr>
                        <ListItem className="list_item2">50 hours support</ListItem> <hr></hr>
                        <ListItem className="list_item2">Photography</ListItem> <hr></hr>
                        <ListItem className="list_item2">50% furniture discount</ListItem> <hr></hr>
                        <ListItem className="list_item2">GREAT  deals</ListItem> <hr></hr>
                        <ListItem className="list_item2 dollar">$ 249 <TextItem className="per_room">per room</TextItem></ListItem> <hr></hr>
                        <ListItem className="list_item2"><Button className="button red">Sign Up</Button></ListItem>
                    </List>
                </Card>
                <Title2 className="title_2 title-2">Contact.</Title2>
                <Card className="red_line"></Card>
                <TextItem className="text">Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!</TextItem>
                <Label>Name</Label> <br></br>
                <Input type="text"/>
                <Label>Email</Label> <br></br>
                <Input type="email"/>
                <Label>Message</Label> <br></br>
                <Input type="text"/>
                <Button className="send_message">Send Message</Button>
            </Card>
        );
    }
}

export default RightSide;