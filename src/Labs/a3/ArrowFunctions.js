function subtract(a,b) {
        return a - b;
    }

const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

function ArrowFunctions() {
    return (
        <div>
            <h3>New ES6 arrow functions</h3>
            threeMinusOne = {threeMinusOne}
            <br />
            subtract(3, 1) = {subtract(3, 1)}
            <br />
        </div>
    );
}

export default ArrowFunctions;
