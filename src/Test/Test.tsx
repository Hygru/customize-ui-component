import React from 'react'
import './test.scss'

interface IProps {
    text?: string
}

const Test: React.SFC<IProps> = ({ text = 'test' }: IProps) => {
    return <div className="test">{text}</div>
}

export default Test
