type ButtonProps = {
    text: string;
};

function ButtonPotvrdi(props: ButtonProps) {
    // onClick događaj izvršava anonimnu funkciju koja pokreće alert
    return (
        <button onClick={() => alert("Klik!")}>
            {props.text}
        </button>
    );
}

export default ButtonPotvrdi;