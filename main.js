let interestElement = document.getElementById("interest");
let monthlyPaymentElement = document.getElementById('monthly-payment');

let arr=[]
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
    


    return { 
        monthlyPaymentAmount, 
        interestRate,
        amount
    }


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
    const item = sessionStorage.getItem('info'); 
    if(item) { 
        let paidMonthly = calculatePaidMonthly();
        let info = JSON.parse(item); 
        info.monthlyPaymentAmount = paidMonthly.monthlyPaymentAmount; 
        info.interest= paidMonthly.interestRate;
        info.amount = paidMonthly.amount;
        arr.push(info);
        display(arr)
    }
  
}
function register(){
    let name=document.getElementById("fname").value
    let age=document.getElementById("age").value
    let address=document.getElementById("address").value
    let gender=document.getElementById("gender").value
    let contact=document.getElementById("contact").value
    let mail=document.getElementById("mail").value
    let id=document.getElementById("id").value

    sessionStorage.setItem("info",JSON.stringify({
        name:name,
        age:age,
        address:address,
        gender:gender,
        contact:contact,
        mail:mail,
        id:id,
    })); 
    
}
function display(arr){
    let result = "";
    result += '<table style="border: 1px solid">'
    result += '<tr>'
    result += '<th>' + "Full Name" + '</th>'
    result += '<th>' + "Age" + '</th>'
    result += '<th>' + "Contact" + '</th>'
    result += '<th>' + "Gender" + '</th>'
    result += '<th>' + "Email" + '</th>'
    result += '<th>' + "Amount of money" + '</th>'
    result += '<th>' + "Monthly payment" + '</th>'
    result += '</tr>'
    
    for(let i=0;i<arr.length;i++){
        result+='<tr>'
        result+='<td>'+arr[i].name+'</td>'
        result+='<td>'+arr[i].age+'</td>'
        result+='<td>'+arr[i].contact+'</td>'
        result+='<td>'+arr[i].gender+'</td>'
        result+='<td>'+arr[i].mail+'</td>'
        result+='<td>'+arr[i].amount+'</td>'
        result+='<td>'+arr[i].monthlyPaymentAmount+'</td>'
        result+='<td> <input type="button" value="Edit"> </input></td>'
        result+='<td> <input type="button" value="Delete"> </input></td>'
        result+='</tr>'
    }
   
    result+='</table>'
    document.getElementById("display").innerHTML=result;
}