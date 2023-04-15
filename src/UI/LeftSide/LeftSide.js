import { Component, Fragment } from "react";
import Card from "../../Components/Card/Card";
import Title2 from "../../Components/Title2/Title2";
import "./LeftSide.css";
import ListItem from "../../Components/ListItem/ListItem";
import List from "../../Components/List/List";
class LeftSide extends Component {
    render() {
        return (
            <Fragment>
                <Card className="left-side-container">
                    <Title2 className="company_name">Company <br/> Name</Title2>
                    <List className="list">
                        <ListItem className="list_item">Home</ListItem>
                        <ListItem className="list_item">Showcase</ListItem>
                        <ListItem className="list_item">Services</ListItem>
                        <ListItem className="list_item">Designers</ListItem>
                        <ListItem className="list_item">Packages</ListItem>
                        <ListItem className="list_item">Contact</ListItem>
                    </List>
                </Card>
            </Fragment>
        );
    }
}

export default LeftSide;