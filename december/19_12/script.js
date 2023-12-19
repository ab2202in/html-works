// '^' and '$' can only be used in the starting and end of the string and cannot be used in between  strings to match, so we can use lookup for giving starting and ending in between strings

//(?=)  - positive lookahead, A(?=B) -> matches: A only if A  is followed by B
//(?!)  - negative lookahead, A(?!B) -> matches: A only if A  is not followed by B
//(?<=) - positive lookbehind, (?<=B)A -> matches: A only if A  is preceeded by B
//(?<!) - negative lookbehind, (?<!B)A -> matches: A only if A  is not preceeded by B

{

    let dateString = '19-12-2002';
    let regex = /-\d+-/; //it will also match  -12- in result and gives as result array
    const result = dateString.match(regex);

    console.log("result : ", result);

    //in order to match exactly  '12' in dateString we can use lookaheads
    let regex1 = /(?<=-)\d+(?=-)/; //this match '12' in string
    const result1 = dateString.match(regex1);
    console.log("result1 :", result1);

    //example for negative lookaheads and lookbehinds

    let phone = "(91)1234567890";
    //to match the phone numbers outside of (91)
    const phoneRegex = /(?<!\()\d+(?!\))/;
    const phoneRegexResult = phone.match(phoneRegex);
    console.log("phoneResult : ", phoneRegexResult);

}

{
    function findUser(userid){
        let userInfo =[{
            id   : 1,
            name : 'John',
            age  : 30,
        },
        {
            id   : 2,
            name : 'Jane',
            age  : 25,
        },
        {
            id   : 3,
            name : 'Jonathan',
            age  : 28,
        }];
        let user =userInfo.find((element)=> element.id ==userid);
        return user;
        
    }
}
let user =findUser(2);
console.log("user : ",user);



function findUser1(userid){
     
    let userInfo =[{
        id   : 1,
        name : 'John',
        age  : 30,
    },
    {
        id   : 2,
        name : 'Jane',
        age  : 25,
    },
    {
        id   : 3,
        name : 'Jonathan',
        age  : 28,
    }];

    setTimeout (()=>{
        let user = userInfo.find(()=>userInfo.id===userid);
        return user1;
    },500);
}

let user1 =findUser1(2);
console.log("user1 : ",user1);


//using promises
function findUser2(userid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let userInfo =[{
                id   : 1,
                name : 'John',
                age  : 30,
            },
            {
                id   : 2,
                name : 'Jane',
                age  : 25,
            },
            {
                id   : 3,
                name : 'Jonathan',
                age  : 28,
            }];
        })
    })
}