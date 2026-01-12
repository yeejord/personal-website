import headshot from '../public/headshot.JPEG';
import InfoBar from './InfoBar';

{/*
    Name + Profile Picture static component
  */}
const NameTag = () => {
    return (
        <div className="name-tag">
            <img src={headshot} alt="Photo of Jordyn Yee" className="headshot-img" />
            <p2>Hello! My name is</p2>
            <h1>Jordyn Yee</h1>
            <InfoBar />
        </div>
    )
}

export default NameTag;