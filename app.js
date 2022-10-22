console.log("js linked");

const myList = [20, 90, 40, 70, 10, 100, 80];
const anotherList = [30, 25, 20, 15, 10, 5];

function numericalOrder(list) {
    
    const originalLength = list.length;
    let orderedList = [];
    let counter = 0;
    let placeholder = 0;

    do {
            for (i = 0; i < list.length; i++) {
                placeholder = 0;
                counter = 0;
                placeholder = list.splice(i, 1);
                for (x = 0; x < list.length; x++) {
                    if (placeholder[0] <= list[x]) {
                        counter = counter + 1;
                    }
                }
                if (counter === list.length) {
                    orderedList.push(placeholder[0]);
                } else {
                    list.push(placeholder[0]);
                }
            } 
      } while (orderedList.length < originalLength)


    return orderedList;
}


console.log(numericalOrder(anotherList));