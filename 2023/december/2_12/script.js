{

    let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(" array : ", Numbers);
    const arr1 = Numbers.forEach((square, index) => {
        square = square * square;
        console.log(`square of ${Numbers[index]}: `, square);
    });

    var sumSquares = 0;

    Numbers.forEach((element) => {
        sumSquares += Math.pow(element, 2);
    });

    console.log(`sum of squares of array : ${sumSquares}`);


    function findEven(Numbers) {
        let even = Numbers.find((item) => {
            return item % 2 == 0;
        });
        return even;
    }
    let firstEven = findEven(Numbers);
    console.log("first even number of the array : ", firstEven);


    function findAllEven(Numbers) {
        let allEven = Numbers.filter((item) => {
            return item % 2 == 0;
        });
        return allEven;
    }
    let allEven = findAllEven(Numbers);
    console.log("all even numbers of the array : ", allEven);


    function double(Numbers) {
        let doubleArr = Numbers.map((element) => {
            return element * 2;
        });
        return doubleArr;
    }
    let arraydouble = double(Numbers);
    console.log("doubled array : ", arraydouble);

    function productPositive(Numbers){
        const prod = Numbers.reduce((prod,element)=>{
            if (element>0) {
                return prod =prod *element;
            }else {
                return prod;
            }
        },1);
        return prod;
    }
    let product = productPositive(Numbers);
    console.log("product of array : ", product);
   
}
