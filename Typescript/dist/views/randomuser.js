        let currentPage = 1;
        const limit = 5;
        let total = 0;
        const url = `http://localhost:5000/?page=${currentPage}&results=${limit}&seed=foobar`;
        const loader = document.querySelector('.loader');
        


        window.onscroll = () =>{
            
            if(window.innerHeight + window.scrollY >= document.body.offsetHeight ){
                currentPage++;
                makeRequest(url,currentPage,limit);
            }
        
        }


        var jsonData;


        async function makeRequest(url,currentPage,results){
            const data = await fetch(`http://localhost:5000/?page=${currentPage}&results=${results}&seed=foobar`);
            jsonData = await data.json();
            createRow(jsonData.results);
        }
        
        

        function createRow(obj){
            // console.log(obj);
            
            let mainTable = document.getElementById('tb');
           

            

                for(let i in obj){
                    let table_header_row = document.createElement('tr');
                    // console.log(i);

                    let img = document.createElement("td");

                    let imgsrc = document.createElement("img");
                    imgsrc.src = obj[i].picture.thumbnail;
                    img.appendChild(imgsrc);
                    table_header_row.appendChild(img);

                    let name =document.createElement("td");
                    name.innerHTML = obj[i].name.first + obj[i].name.last;
                    table_header_row.appendChild(name);

                    let gender = document.createElement("td");
                    gender.innerHTML = obj[i].gender;
                    table_header_row.appendChild(gender);

                    let age=document.createElement("td");
                    age.innerHTML = obj[i].dob.age;
                    table_header_row.appendChild(age);

                    let state=document.createElement("td");
                    state.innerHTML = obj[i].location.state;
                    table_header_row.appendChild(state);

                    let country=document.createElement("td");
                    country.innerHTML = obj[i].location.country;
                    table_header_row.appendChild(country);
                    mainTable.appendChild(table_header_row);
                }

                
            }

            let table = document.getElementById("tb");
            
        function search(){
            let searchVal = document.getElementById('nameSearch').value.toLowerCase();
            
            let trows = table.rows;
            

            for(let i = 1; i < trows.length ; i++){
                let cols = trows[i].getElementsByTagName('td');
                let flag = false;
                for(d of cols){
                    colVal = d.textContent || d.innerText;
                    
                    if(colVal.toLowerCase().includes(searchVal)){
                        flag = true;
                        break;
                    }
                }
                if(flag == false){
                    trows[i].style.display = 'none';
                }
                else{
                    trows[i].style.display = "";
                }
            }

        }
        

        function sort(){
          
            console.log("Hello");
            let clm = document.getElementById('option').value;
            console.log(clm);
            let sortOption = document.getElementById('sort').value;
            console.log(sortOption);
            if(sortOption == "ascend"){
                // console.log("working",trows.length);

                let switchs = true;
                while(switchs){

                    let trows = table.rows;
                    switchs = false;
                    let should=false;
                    let i;   

                for(i = 1; i < (trows.length - 1); i++){
                    
                    

                    let a = trows[i].getElementsByTagName('td');
                    // console.log(a[3].innerHTML);
                    let b = trows[i+1].getElementsByTagName('td');

                        if(a[clm].innerHTML > b[clm].innerHTML){
                            should = true;
                            console.log(should);
                            break;
                        }
                 
                    
                }
                
                if(should){
                    console.log("swap");
                    trows[i].parentNode.insertBefore(trows[i+1],trows[i]);
                    switchs = true;
                }
                    
            }
        }
        else{
            let switchs = true;
            while(switchs){
                let trows = table.rows;
                switchs = false;
                let should=false;
                let i;   

            for(i = 1; i < (trows.length - 1); i++){
                
                

                let a = trows[i].getElementsByTagName('td');
                // console.log(a[3].innerHTML);
                let b = trows[i+1].getElementsByTagName('td');

                    if(a[clm].innerHTML < b[clm].innerHTML){
                        should = true;
                        break;
                    }
             
                
            }
            
            if(should){
                console.log("swap");
                trows[i].parentNode.insertBefore(trows[i+1],trows[i]);
                switchs = true;
            }
                
        }


        }
            


        }
        


        
        makeRequest(url,1,20);
        // createRow(jsonData.results);