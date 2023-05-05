export default function Greeting (props){
    const greetingStyle = {
        color: "Black",
        backgroundColor: "rgb(17, 0, 17);"
    };

    return <h1 style={greetingStyle}>{ props.greeting }</h1>
}