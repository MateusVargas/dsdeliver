import './styles.css'
import {ReactComponent as Instagram} from './instagram.svg'
import {ReactComponent as Linkedin} from './linkedin.svg'
import {ReactComponent as Youtube} from './youtube.svg'

function Footer() {
    return (
        <footer className="main-footer">
            2021
            <div className="footer-icons">
                <a href="https://www.youtube.com" target="_new"><Youtube/></a>
                <a href="https://www.instagram.com" target="_new"><Instagram/></a>
                <a href="https://www.linkedin.com" target="_new"><Linkedin/></a>
            </div>
        </footer>
    )
}

export default Footer