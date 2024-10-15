import React from 'react'
import "./Features.css"
import toDoList from "../../Images/icon-todo.svg"
import calender from "../../Images/icon-calendar.svg"
import reminders from "../../Images/icon-reminders.svg"
import planning from "../../Images/icon-planning.svg"

function Features() {
    return (
        <ul className="inner-links features">
            <li>
                <div className="icon">
                    <img src={toDoList} alt="ToDo List" />
                </div>
                <a href="#">ToDo List</a>
            </li>
            <li>
                <div className="icon">
                    <img src={calender} alt="Calender" />
                </div>
                <a href="#">calender</a>
            </li>
            <li>
                <div className="icon">
                    <img src={reminders} alt="reminders" />
                </div>
                <a href="#">reminders</a>
            </li>
            <li>
                <div className="icon">
                    <img src={planning} alt="planning" />
                </div>
                <a href="#">planning</a>
            </li>
        </ul>
    )
}

export default Features;