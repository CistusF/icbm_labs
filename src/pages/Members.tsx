import Head from 'next/head'
import styles from 'modules/styles/Members.module.css'

import Nav from 'modules/components/Nav'
import Footer from 'modules/components/Footer'

import { researches, wanted, welfares } from 'modules/Data/ments';
import Link from 'next/link';
import { profiles } from 'modules/Data/profile';

export default function Home() {
    return (
        <>
            <Head>
                <title>ICBM_LABS</title>
                <meta name="description" content="ICBM Members" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <Nav />
            <div className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.backBoard}>
                        <p className={styles.title}>ICBM Members</p>
                        <div className={styles.description}>
                            <p>ICBM의 자랑스러운</p>
                            <p>연구원들 입니다.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cards}>
                    {profiles.map(({ name, number, bio, github, blog }, index) => {
                        return <div className={styles.card} key={index}>
                            <div className={styles.profile}>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
                                    <path d="M24.9375 24.5C28.3896 24.5 31.1875 21.7021 31.1875 18.25C31.1875 14.7979 28.3896 12 24.9375 12C21.4854 12 18.6875 14.7979 18.6875 18.25C18.6875 21.7021 21.4854 24.5 24.9375 24.5ZM29.3125 26.0625H28.4971C27.4131 26.5605 26.207 26.8438 24.9375 26.8438C23.668 26.8438 22.4668 26.5605 21.3779 26.0625H20.5625C16.9395 26.0625 14 29.002 14 32.625V34.6562C14 35.9502 15.0498 37 16.3438 37H33.5312C34.8252 37 35.875 35.9502 35.875 34.6562V32.625C35.875 29.002 32.9355 26.0625 29.3125 26.0625Z" fill="black" />
                                </svg>
                                <div className={styles.info}>
                                    <p>{name}</p>
                                    <p>{number}학번</p>
                                </div>
                            </div>
                            <div className={styles.content}>
                                {bio}
                            </div>
                            <div className={styles.links}>
                                {
                                    github ? <Link href={"https://github.com/" + github}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="32" height="32" rx="16" fill="white" />
                                            <path d="M16 2C8.265 2 2 8.265 2 16C2 22.195 6.0075 27.4275 11.5725 29.2825C12.2725 29.405 12.535 28.985 12.535 28.6175C12.535 28.285 12.5175 27.1825 12.5175 26.01C9 26.6575 8.09 25.1525 7.81 24.365C7.6525 23.9625 6.97 22.72 6.375 22.3875C5.885 22.125 5.185 21.4775 6.3575 21.46C7.46 21.4425 8.2475 22.475 8.51 22.895C9.77 25.0125 11.7825 24.4175 12.5875 24.05C12.71 23.14 13.0775 22.5275 13.48 22.1775C10.365 21.8275 7.11 20.62 7.11 15.265C7.11 13.7425 7.6525 12.4825 8.545 11.5025C8.405 11.1525 7.915 9.7175 8.685 7.7925C8.685 7.7925 9.8575 7.425 12.535 9.2275C13.655 8.9125 14.845 8.755 16.035 8.755C17.225 8.755 18.415 8.9125 19.535 9.2275C22.2125 7.4075 23.385 7.7925 23.385 7.7925C24.155 9.7175 23.665 11.1525 23.525 11.5025C24.4175 12.4825 24.96 13.725 24.96 15.265C24.96 20.6375 21.6875 21.8275 18.5725 22.1775C19.08 22.615 19.5175 23.455 19.5175 24.7675C19.5175 26.64 19.5 28.145 19.5 28.6175C19.5 28.985 19.7625 29.4225 20.4625 29.2825C23.2418 28.3443 25.6568 26.5581 27.3677 24.1753C29.0786 21.7926 29.9993 18.9334 30 16C30 8.265 23.735 2 16 2Z" fill="black" />
                                        </svg>
                                    </Link>
                                        :
                                        <></>
                                }
                                {
                                    blog ? <Link href={blog}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.15 12.25C12.45 11.9437 12.5375 11.9312 14.425 11.9312C16.125 11.9312 16.1812 11.9375 16.4312 12.0625C16.7937 12.2437 16.95 12.5 16.95 12.9125C16.95 13.2812 16.8 13.5375 16.475 13.75C16.3 13.8625 16.1938 13.8687 14.5312 13.8812C13.5063 13.8875 12.6875 13.8687 12.5625 13.8312C11.9187 13.65 11.6812 12.725 12.15 12.25ZM15.9875 18.1562C12.6188 18.1562 12.5 18.1687 12.225 18.4125C12.0063 18.6062 11.8687 19 11.9062 19.2812C11.95 19.575 12.2062 19.9125 12.4812 20.0312C12.6187 20.0937 13.3625 20.1375 16 20.1062L18.9937 20.0687L19.5688 19.975C20.1313 19.6562 20.225 18.8875 19.7625 18.45C19.4313 18.1562 19.45 18.1562 15.9875 18.1562ZM29.95 26.2875C29.7313 28.0625 28.5125 29.4375 26.7563 29.8812C26.3063 29.9937 26.15 30 15.95 29.9937C6.0875 29.9937 5.58125 29.9875 5.2 29.8812C4.675 29.7437 4.225 29.5375 3.80625 29.2562C3.45625 29.0187 2.9375 28.5187 2.74375 28.2312C2.50625 27.8812 2.23125 27.275 2.11875 26.8562C2.00625 26.4375 2 26.2687 2 16.0187C2 5.82497 2 5.60622 2.1125 5.16247C2.50625 3.61872 3.73125 2.43747 5.3125 2.08747C5.76875 1.98747 26.0687 1.96872 26.5625 2.06872C27.8875 2.33747 28.9313 3.13747 29.5375 4.34372C30.0188 5.29997 29.975 4.24997 29.9937 15.6312C30.0062 22.8687 29.9938 25.9125 29.95 26.2875ZM24.6125 14.7125C24.5437 14.4 24.35 14.1125 24.1313 13.9937C24.0625 13.9562 23.6313 13.9125 23.1625 13.8875C22.3875 13.85 22.3 13.8375 22.05 13.6937C21.6625 13.4687 21.5562 13.2187 21.55 12.55C21.55 11.275 21.0187 10.0875 19.9688 9.01872C19.2188 8.25622 18.3875 7.73747 17.4312 7.44997C17.2062 7.38122 16.6937 7.35622 14.9812 7.33747C12.3 7.30622 11.7 7.36247 10.7875 7.72497C9.1 8.39372 7.89375 9.81247 7.45 11.625C7.36875 11.9625 7.35 12.5125 7.33125 15.6437C7.30625 19.5687 7.33125 20.15 7.58125 20.925C8.1875 22.8437 9.9 24.2625 11.6187 24.575C12.1937 24.6812 19.2563 24.7062 19.975 24.6062C21.2313 24.4375 22.2187 23.9312 23.1437 22.9875C23.8125 22.3062 24.2313 21.5625 24.5063 20.5812C24.7063 19.9 24.6875 15.0562 24.6125 14.7125Z" fill="black" />
                                        </svg>
                                    </Link> :
                                        <></>
                                }
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}
