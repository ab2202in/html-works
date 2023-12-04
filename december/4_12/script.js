//1
{
    function double(Numbers) {
        let doubleArr = Numbers.map((element) => {
            return element * 2;
        });
        return doubleArr;
    }
    let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(`array is : ${Numbers}`);
    let arraydouble = double(Numbers);
    console.log("doubled array : ", arraydouble);
}

//2
{
    function findAllEven(Numbers) {
        let allEven = Numbers.filter((item) => {
            return item % 2 == 0;
        });
        return allEven;
    }
    let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(`array is : ${Numbers}`);
    let allEven = findAllEven(Numbers);
    console.log("all even numbers of the array : ", allEven);
}