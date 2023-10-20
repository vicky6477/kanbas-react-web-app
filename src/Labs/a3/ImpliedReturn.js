function multiply(a, b) {
    return a * b;
}
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

function ImpliedReturn() {
    return (
        <div>
            <h2>Implied Return</h2>
            fourTimesFive = {fourTimesFive}
            <br />
            multiply(4, 5) = {multiply(4, 5)}
            <br />
        </div>
    );
}
export default ImpliedReturn;
