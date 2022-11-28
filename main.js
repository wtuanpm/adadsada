let interestElement = document.getElementById("interest");
let monthlyPaymentElement = document.getElementById('monthly-payment');

let arr=[{name:'cc',age:'23',contact:'02345775',address:'asdasds',gender:'male',mail:'ffffff',id:'22222'}]
let sixMonths = 6;
let twelveMonths = 12;


let twentyFourMonths = 24;
function calculatePaidMonthly() {
    let interestRate1 = 10;
    let interestRate2 = 12;

    let interestRate3 = 14;
    let amountElement = document.getElementById('amount');
    let tenorElement = document.getElementById('tenor');
    let amount= Number(amountElement.value);

    let tenor = Number(tenorElement.value);
    let interestRate = 10;
    if (tenor == sixMonths) {
        interestElement.value = interestRate1 + "%";
        interestRate = interestRate1;
    } else if (tenor == sixMonths) {
        interestElement.value = interestRate2 + "%";

        interestRate = interestRate1;
    } else {
        interestElement.value = interestRate3 + "%";
        interestRate = interestRate1;

    }
    let monthlyPaymentAmount = (amount / tenor) * (interestRate / 100)  +   (amount / tenor);

    monthlyPaymentElement.value = monthlyPaymentAmount;


}
function advice() {
    alert("Nhân viên của chúng tôi sẽ sớm liên hệ với bạn")

}
function apply() {
    let amountElement = document.getElementById('amount');
    let amount = amountElement.value;
    if (!amount || amount <= 0) {

        alert("Vui lòng nhập số tiền muốn vay")
    }
    display(arr)

}
function register(){
    let name=document.getElementById("fname").value
    let age=document.getElementById("age").value
    let address=document.getElementById("address").value
    let gender=document.getElementById("gender").value
    let contact=document.getElementById("contact").value
    let mail=document.getElementById("mail").value
    let id=document.getElementById("id").value
    arr.push({
        name:name,
        age:age,
        address:address,
        gender:gender,
        contact:contact,
        mail:mail,
        id:id,
    },)
    display(arr)

}
function display(arr){
    let result = "";
    result += '<table style="border: 1px solid">'
    result += '<tr>'
    result += '<th>' + "Full Name" + '</th>'
    result += '<th>' + "Age" + '</th>'
    result += '<th>' + "Mobile Phone" + '</th>'
    result += '<th>' + "Amount of money" + '</th>'
    result += '<th>' + "Monthly payment" + '</th>'
    result += '</tr>'
    result+='<tr>'
    for(let i=0;i<arr.length;i++){
        result+='<td>'+arr[i].name+'</td>'
        result+='<td>'+arr[i].age+'</td>'
        result+='<td>'+arr[i].address +'</td>'
        result+='<td>'+arr[i].gender+'</td>'
        result+='<td>'+arr[i].contact+'</td>'
        result+='<td>'+arr[i].mail+'</td>'
        result+='<td>'+arr[i].id+'</td>'
    }
    result+='</tr>'
    result+='</table>'
    document.getElementById("display").innerHTML=result;
}