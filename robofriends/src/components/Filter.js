import React, {useState} from "react";
import {DropdownButton, Dropdown} from "react-bootstrap";

export const Filter = ({setRobots, robots}) => {
    const idhtl = () => {
        setRobots(robots.sort((robot) => -robot.id));
        console.log(robots.sort((a,b) => a.id>b.id ? -1 : 1))
    }
    const idlth = () => {
        setRobots(robots.sort((a,b) => a.id<b.id ? -1 : 1));
        console.log(robots.sort((a,b) => a.id<b.id ? -1 : 1));
    }
    const alpha = () => {
        setRobots(robots.sort((a, b) => {
                let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            }))
    }
    return (
        <DropdownButton id="dropdown-basic-button" title="Filter">
            <div className="">
                <Dropdown.Item onClick={idlth} className="nav-items" as="button">Id: Low to High</Dropdown.Item><br/>
                <Dropdown.Item  onClick={idhtl} className="nav-items" as="button">Id: High to Low</Dropdown.Item><br/>
                <Dropdown.Item onClick={alpha} className="nav-items" as="button">Alphabetical</Dropdown.Item>
                <Dropdown.Divider className="nav-items" />
                <Dropdown.Item onClick={idlth} className="nav-items" as="button">Reset</Dropdown.Item>
            </div>
        </DropdownButton>
    );
}