function calc() {
        this.message="";
}

calc.prototype.displayResult=function (resultDiv) {
            if(!this.message.includes("Result")){
                document.getElementById('res').style.color = 'rgb(255, 0, 0)';
                resultDiv.innerHTML=this.message;
                confirm(this.message);
            }
            else{
                document.getElementById('res').style.color = 'rgb(13, 255, 88)';
                resultDiv.innerHTML=this.message;
                confirm(this.message);
            }
};

calc.prototype.computeResult=function (form) {
            var m1=new money(parseInt(form.elements['v1'].value),
                            form.elements['c1'].value);
            var m2=new money(parseInt(form.elements['v2'].value),
                            form.elements['c2'].value);

            var ops=form.elements['ops'].value;

            try{

                if (ops==="ADD") {
                    let res=MoneyOps.add(m1,m2);
                    this.message="Result : "+(res.toString())+"";

                }else if (ops==="SUB") {
                    let res=MoneyOps.sub(m1,m2);
                    this.message="Result : "+(res.toString())+"";
                }
                else if (ops==="MUL") {
                    let res=MoneyOps.multiplication(m1,m2);
                    this.message="Result : "+(res.toString())+"";
                }
                else {
                    this.message="Unsupported operation "+ops+"";
                }
            }catch (e) {
                this.message=e.toString();

            }
	};

function doComputation(form,resDiv) {
    var c=new calc();
    c.computeResult(form);
    c.displayResult(resDiv);
}
