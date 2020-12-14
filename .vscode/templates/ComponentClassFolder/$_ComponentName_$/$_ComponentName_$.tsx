import React from 'react'
import styles from './$_ComponentName_$.scss'

interface IProps {
    [propsName: string]: any
}

interface IState {
    [propsName: string]: any
}

class $_ComponentName_$ extends React.Component<IProps, IState> {
    componentDidMount() {}

    render() {
        return <div className={styles.container}>$_ComponentName_$</div>
    }
}

export default $_ComponentName_$
