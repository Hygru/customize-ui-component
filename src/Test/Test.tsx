import React from 'react'
import './test.scss'

interface IProps {
    text?: string
}

const Test: React.SFC<IProps> = ({ text }: IProps) => <div className="test">{text}</div>

export default Test
