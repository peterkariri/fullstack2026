/* operators are used to perform operations on variables and values.
JavaScript has a wide variety of operators, including:{
    ARITHMETIC OPERATORS>>THIS operators 
    are used to perform arithmetic operations on numbers. They include:
    + (addition)
    - (subtraction)
    * (multiplication)
    / (division)

    % (modulus)>>WE WERE CHECKING FOR EVEN NUMBERS USING THIS OPERATOR(GIVE REMINDER)
    ** (exponentiation)

    ASSIGNMENT OPERATOR >THEY ARE USED TO ASSIGN WHATEVER IS ON THE RIGHT TO THE VARIABLE ON THE LEFT{
        LET NAME="Aila"
        NAME="Aila" IS THE ASSIGNMENT OPERATOR
        They include {
            =(assignment)
            ==(equality)
            ===(strict equality)
            +=(incremental>>whatever is on the right side is added by one or the variabl on the right side)
            -=(decremental>>whatever is on the right side is subtracted by one or the variabl on the right side)
            *=(multiplication assignment)
            /=(division assignment)
            %=(modulus assignment)
             **=(exponentiation assignment)

        }
    }
} */

    let number=0;
    console.log(number);//0
    
    number+=1;//number=number+1 
    console.log(number);

    number-=0; //number=number-0
    console.log(number);

    number++;//number=number+1
    console.log(number);
    number--;//number=number-1
    console.log(number);
    
    number--;//number=number-1
    console.log(number);
    
   /*  the other operators{
        comparison operartors >>we use tis to compare values in a logical manner 

        examples {
            greater than(>)
            less than(<)
            greater than or equal to(>=)
            less than or equal to(<=)
            equality(==)
            strict equality(===)
            inequality(!=)
            strict inequality(!==)
        }
    } */

        let age=18;
        if(age>=18){
            console.log("you are an adult");
            
        }
        else{
            console.log("you are a minor");
        }


        let numberPerson=50;
        let numberPerson2="50";
        console.log(numberPerson==numberPerson2);
        console.log(numberPerson===numberPerson2);


        let isStudent=false;
        if(isStudent !== true){
            console.log("you are not a student"); 
        }


/*         logical operators >>this operators are used to combine multiple conditions 
        in a logical manner (they include and ,or ,not )and their bitwise counterparts (&,|,~)
the logical AND is a truthy truthy operator that returns true if both operands are true, 
otherwise it returns false.(1*1=1, 1*0=0, 0*0=0 this is like multiplication)
the logical OR is a truthy truthy operator that returns true if at least one of the operands is true, otherwise it returns false.(1+1=1, 1+0=1, 0+0=0 this is like addition)
the logical NOT is a unary operator that returns the opposite of the operand's truthiness. 
 */