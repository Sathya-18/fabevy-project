import React from 'react'
import './Sidebar.css'

import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import appContext from '../../context/context'

const Sidebar = () => {

    const navigateTo = useNavigate()
    let currentChapter = useContext(appContext).currentChapter
    let setDetails = useContext(appContext).setDetails;

    const chapters = [
        { id:"a-tag", name:"<a>", definition: "The <a> tag defines a hyperlink, which is used to link from one page to another.The most important attribute of the <a> element is the href attribute,which indicates the link's destination.", example: "<a href='https://www.w3schools.com'>Visit W3Schools.com!</a>" },
        {id: "b-tag", name: "<b>", definition: "The <b> tag specifies bold text without any extra importance.", example:"<b>This is bold text</b>"},
        {id: "button-tag", name: "<button>", definition: "The <button> tag defines a clickable button. Inside a <button> element you can put text (and tags like <i>, <b>, <strong>, <br>, <img>, etc.). That is not possible with a button created with the <input> element!",example: "<button type='button'>Click Me!</button>"},
        {id: "p-tag", name: "<p>", definition: "The <p> tag defines a paragraph. Browsers automatically add a single blank line before and after each <p> element.", example: "<p>This is some text in a paragraph.</p>"}
    ]

    const [showSideBar, setShowSideBar] = useState(true)

    return (
        <div className={showSideBar ? 'Sidebar' : 'Sidebar hidden'}>
            {/* <div className='Sidebar hidden'> */}
            <div className='Sidebar-head'>
                <h2 className='Sidebar-heading'>HTML Tags</h2>

                <div className='burger' onClick={() => { setShowSideBar(!showSideBar) }}>
                    <div className='burger-bar'></div>
                    <div className='burger-bar'></div>
                    <div className='burger-bar'></div>
                </div>
            </div>
            <div className='Sidebar-chapters'>
                <ol>
                    {
                        chapters.map((chapter) => {
                            return <li className={currentChapter === chapter.id ? 'Chapter current' : 'Chapter'}
                                key={chapter.id}
                                onClick={() => {
                                    navigateTo('/learn/' + chapter.id)
                                    setDetails(chapter)
                                }}
                            >{chapter.name} - Tag</li>
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default Sidebar