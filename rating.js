    const ratingStart = document.getElementById('rating_start');
    const x = document.getElementsByName('rating');
    const y = document.getElementById('thankyou');
    const thankYouConatiner = document.getElementById("results");

    const submitButton = document.getElementById('submit');


    function myFunction() {
        ratingStart.style.display = "none";
        y.style.display = "block";
    
        for(i=0;i<x.length;i++){

            if(x[i].checked){
                rating = x[i].value;

                document.getElementById("results").innerHTML = `You selected ${x[i].value} out of 5`;

            }

            
        }

    
    }
