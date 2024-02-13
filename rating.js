            const ratingStart = document.getElementById('rating_start');
            const rating = document.getElementsByName('rating');
            const thankYouBlock = document.getElementById('thankyou');

            const submitButton = document.getElementById('submit');
            const backLink = document.getElementById('back');
            const errorBlock = document.getElementById('error');

            let ratingValue = "";

            submitButton.addEventListener('click',myFunction);
            backLink.addEventListener('click',backFunction);

            function myFunction(event) {
                event.preventDefault();
        
                for(let i=0; i < rating.length; i++){

                    if(rating[i].checked){
                        ratingValue = rating[i].value;
                        document.getElementById("results").innerHTML = `You selected ${rating[i].value} out of 5`;
                        errorBlock.style.display = "none";
                        ratingStart.style.display = "none";
                        thankYouBlock.style.display = "block";
                        break;
                        
                    }
                    else if(!rating[i].checked){
                        ratingStart.style.display = "none";
                        thankYouBlock.style.display = "none";
                        errorBlock.style.display = 'block';
                    }
                                    

                    
                }


            }

            function backFunction(event){
                thankYouBlock.style.display = "none";
                errorBlock.style.display = "none";
                ratingStart.style.display = "block";
                
            }

