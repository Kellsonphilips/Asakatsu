import './contributor.style.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contributor = () => {
    return (
        <div className="contributor">
            <h1>Contributors</h1>
            <a href = "https://github.com/asakatsuOrg/AsaKatsuProject/graphs/contributors">
                <img src = "https://contrib.rocks/image?repo=asakatsuOrg/AsaKatsuProject"/>
            </a>
        </div>
    )
}

export default Contributor