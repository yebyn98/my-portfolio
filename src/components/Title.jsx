import './Title.css'
export default function Title(props) {
    return <div className="Title">
    <div>{props.title}({props.name});</div>
    </div>
}