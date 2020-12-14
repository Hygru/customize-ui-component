import React from 'react'
import styles from './$_ComponentName_$.scss'

interface IProps {
    [propsName: string]: any
}

const $_ComponentName_$: React.SFC<IProps> = (props) => {
    return <div className={styles.container}>$_ComponentName_$</div>
}

export default $_ComponentName_$
