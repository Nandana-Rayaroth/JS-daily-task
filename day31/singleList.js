var ItemArray = [];
var head = -1;
var tail = -1;
function AddatStart(item) {
    if (ItemArray.length === 0) {
        ItemArray.push(item);
        head = tail = 0;
    }
    else {
        ItemArray.splice(0, 0, item);
        tail++;
    }
    console.log(ItemArray, head, tail);
}
AddatStart({ data: 24, link: 10024 });
AddatStart({ data: 43, link: 100043 });
// let item: LinkedList = { data: 24, link: 532 };
