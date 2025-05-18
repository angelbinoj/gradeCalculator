        //prompt the user
        const sub1=prompt("Enter mark of sub1 :");
        console.log("Subject 1 :" + sub1);
        const sub2=prompt("Enter mark of sub2 :");
        console.log("Subject 2 :" + sub2);
        const sub3=prompt("Enter mark of sub3 :");
        console.log("Subject 3 :" + sub3);
        const sub4=prompt("Enter mark of sub4 :");
        console.log("Subject 4 :" + sub4);
        const sub5=prompt("Enter mark of sub5 :");
        console.log("Subject 5 :" + sub5);


        // calculate total marks
        
        let total
        total= parseInt(sub1) + parseInt(sub2)+parseInt(sub3) +parseInt(sub4)+parseInt(sub5);
        alert("Total Mark :" + total);
        
        // Average marks calculation
        
        let avg
        avg= total/5;
        alert("Average mark :" + avg);

        //Grade Calculation

        if(avg>=90){
            alert("Grade :" + "A+");
        }else if(avg>=80 && avg<90){
             alert("Grade :" + "A");
        }else if(avg>=70 && avg<80){
             alert("Grade :" + "B");
        }else if(avg>=60 && avg<70){
             alert("Grade :" + "C");
        }else if(avg>=50 && avg<60){
             alert("Grade :" + "D");
        }else{
            alert("Grade :" +"F")
        }
        