        const ratingStart = document.getElementById('rating_start');
        const x = document.getElementsByName('rating');
        const y = document.getElementById('thankyou');

        const submitButton = document.getElementById('submit');
        const backLink = document.getElementById('back');

        let rating = "";

        submitButton.addEventListener('click',myFunction);
        backLink.addEventListener('click',backFunction);

        function myFunction(event) {
            event.preventDefault();
      
            for(i=0;i<x.length;i++){

                if(x[i].checked){

                    rating = x[i].value;


                    document.getElementById("results").innerHTML = `You selected ${x[i].value} out of 5`;
                    ratingStart.style.display = "none";
                    y.style.display = "block";
                }
                

                
            }


        }

        function backFunction(event){
            y.style.display = "none";
            ratingStart.style.display = "block";
            
        }

