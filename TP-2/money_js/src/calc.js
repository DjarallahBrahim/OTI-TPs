function calc() {
        this.message="";
}

calc.prototype.displayResult=function (resultDiv) {
            if(!this.message.includes("Result")){
                document.getElementById('res').style.color = 'rgb(255, 0, 0)';
                resultDiv.innerHTML=this.message;
            }
            else{
                document.getElementById('res').style.color = 'rgb(13, 255, 88)';
                resultDiv.innerHTML=this.message;
            }
};

calc.prototype.computeResult=function (form) {
            m1=new money(parseInt(form.elements['v1'].value),
                            form.elements['c1'].value);
            m2=new money(parseInt(form.elements['v2'].value),
                            form.elements['c2'].value);

            ops=form.elements['ops'].value;

            try{
                if (ops==="ADD") {
                    res=MoneyOps.add(m1,m2);
                    this.message="Result : "+(res.toString())+"";

                }else if (ops==="SUB") {
                    res=MoneyOps.sub(m1,m2);
                    this.message="Result : "+(res.toString())+"";
                }
                else {
                    this.message="Unsupported operation "+ops+"";
                    alert(this.message);
                }
            }catch (e) {
                this.message=e.toString();
                alert(this.message);
            }
	};

function doComputation(form,resDiv) {
    c=new calc();
    c.computeResult(form);
    c.displayResult(resDiv);
}
