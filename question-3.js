// เริ่มเขียนโค้ดตรงนี้
const getUsers = async() => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // console.log(response);
        const data = await response.json();
        // console.log(data);
        const nameInData = data.map((user) => user.name);
        // console.log(nameInData);
        const nameLengthMorthan17 = nameInData.filter((nameInArr) => nameInArr.length > 17);
        console.log(nameLengthMorthan17); // [ 'Mrs. Dennis Schulist', 'Nicholas Runolfsdottir V', 'Clementina DuBuque' ]
    }
    catch(error){
        console.log(error);
    }
}

getUsers();

