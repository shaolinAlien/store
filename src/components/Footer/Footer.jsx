import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../utils/routes'

import styles from '../../styles/Footer.module.css'
import LOGO from '../../images/logo.svg'


const Footer = () => (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt='Stuff' />
                </Link>
            </div>
            <div className={styles.rights}>
                Developed by Tamkovich
                <br />
                Repeated by {' '}
                <a href="https://vk.com/id315440378"
                    target='_blank'
                    rel='noreferrer'
                > 
                    Shaolin Alien
                </a>
            </div>
            <div className={styles.socials}>
                <a href="https://youtube.com"
                    target='_blank'
                    rel='noreferrer'
                >
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
                    </svg>
                </a>

                <a href="https://instagram.com"
                    target='_blank'
                    rel='noreferrer'
                >
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
                    </svg>
                </a>

                <a href="https://facebook.com"
                    target='_blank'
                    rel='noreferrer'
                >
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
                    </svg>
                </a>
            </div>
        </section>
    )


export default Footer