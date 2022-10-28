import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import './chapter.css'
import { useContext } from 'react'
import appContext from '../../context/context'
import Code from '../definition/codeEditor'
import Result from '../result/result'

const Chapter = () => {
    const params = useParams()
    const setCurrentChapter = useContext(appContext).setCurrentChapter
    const details = useContext(appContext).details

    useEffect(() => {
        setCurrentChapter(params.chapter)
    }, [params])

    return (
        <div className='section'>
            <div className='section-container'>
                <div className='details'>
                    <h1>HTML - {params.chapter} </h1>
                    <p>{details.name}</p>
                    <p>{details.definition}</p>
                </div>
                <div className='code'>
                    <Code></Code>
                </div>
            </div>

            <div className='result'>
                <Result></Result>
            </div>

        </div>
    )
}

export default Chapter