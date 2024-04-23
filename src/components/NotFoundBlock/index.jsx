import React from 'react'

import styles from "./NotFoundBlock.module.scss"

const index = () => {
    return (
        <div className={styles.root}>
            <h1>Нічого не знайдено</h1>
            <p className={styles.description}>На жаль дана сторінка відстуня на нашому сайті</p>
        </div>
    )
}

export default index
