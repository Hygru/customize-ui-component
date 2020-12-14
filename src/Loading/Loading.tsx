import React from 'react'
import './Loading.scss'

interface IProps {
    [propsName: string]: unknown
}

const Loading: React.SFC<IProps> = () => <div className="loading" />

export default Loading
