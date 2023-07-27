// localhost:8080/maths?num1=6&num2=392
// requrst.query is {"num1":"6","num2":"392"}
function maths(request, response) {
        const { num1, num2 } = request.query; // #Destructuring
        const product = num1 * num2;
        response.json(product);
};
module.exports = maths;