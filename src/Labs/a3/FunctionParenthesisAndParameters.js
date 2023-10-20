function square(a) {
    return a * a;
}

function plusOne(a) {
    return a + 1;
}

function twoSquared() {
    return square(2);
}

function threePlusOne() {
    return plusOne(3);
}

function FunctionParenthesisAndParameters() {
    return (
        <div>
            <h2>Parenthesis and Parameters</h2>
            twoSquared(2) = {twoSquared(2)}
            <br />
            square(2) = {square(2)}
            <br />
            threePlusOne = {threePlusOne()}
            <br />
            plusOne(3) = {plusOne(3)}
            <br />
        </div>
    );
}
export default FunctionParenthesisAndParameters;
