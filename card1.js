
function sd(params) {
    
    let ammu = fetch("https://jsonplaceholder.typicode.com/users");
    
    ammu.then((res) => {
        return res.json();
    
    }).then ((res) => {
        
        for (let i = 0; i < 10; i++) { 
            
            let a = res[i];
            let b = document.createElement("p");
            let c = document.getElementById("aa"+(i+1)); 
            
            b.innerText = `Name: ${a.name}\n\nID: ${a.id}\n\nPhone: ${a.phone}\n\nEmail: ${a.email}\n\nWebsite: ${a.website}`;
            
            c.appendChild(b);
            c.style.border = "2px solid black";
            c.style.width = "220px";
            c.style.fontSize = "18px";
            c.style.paddingLeft = "22px";
            c.style.borderRadius = "25px";
            c.style.border = "none";
            c.style.color = "white";
            c.style.fontFamily = "'Times New Roman', Times, serif";
        

        if (i === 0) {
            c.style.backgroundColor = "#88C273";
            c.style.boxShadow = "-6px -10px 30px #88C273";

        } else if (i === 1) {
            c.style.backgroundColor="#7E60BF"
            c.style.boxShadow="-6px -10px 30px #7E60BF"
        } else if (i === 2) {
            c.style.backgroundColor="#705C53"
            c.style.boxShadow="-6px -10px 30px #705C53"
        } else if (i === 3) {
           c.style.backgroundColor="#6A9AB0"
            c.style.boxShadow="-6px -10px 30px #6A9AB0"
        } else if (i === 4) {
            c.style.backgroundColor="#CB80AB"
            c.style.boxShadow="-6px -10px 30px #CB80AB"
        } else if (i === 5) {
           c.style.backgroundColor="#36BA98"
           c.style.boxShadow="-6px -10px 30px #36BA98"
        } else if (i === 6) {
            c.style.backgroundColor="#FF9D3D"
             c.style.boxShadow="-6px -10px 30px #FF9D3D"
        } else if (i === 7) {
            c.style.backgroundColor="#B5CFB7"
             c.style.boxShadow="-6px -10px 30px #B5CFB7"
        } else if (i === 8) {
          c.style.backgroundColor="#A0DEFF"
           c.style.boxShadow="-6px -10px 30px #A0DEFF"
        } else if (i === 9) {
           c.style.backgroundColor="#BC9F8B"
           c.style.boxShadow="-6px -10px 30px #BC9F8B"
        }
    }

        let s1=document.getElementById("dhana")
        s1.style.flexWrap="wrap";
        s1.style.display="flex";
        s1.style.columnGap="24px";
        s1.style.paddingLeft="14px";
        s1.style.rowGap="40px";
        s1.style.paddingTop="30px";
    
        let ss2=document.getElementById("ss1")
        ss2.style.marginLeft="80px";
        ss2.style.flexWrap="wrap";
        ss2.style.paddingLeft="20px";
        ss2.style.paddingRight="20px";
        ss2.style.paddingTop="5px";
        ss2.style.paddingBottom="5px";
        ss2.style.fontFamily="'Times New Roman', Times, serif"
        ss2.style.fontSize="25px"
        ss2.style.borderRadius="30px";
        ss2.style.border="none"
        ss2.style.backgroundColor="#007bff";
        ss2.style.color="white";
    
    });
}
function sd1(params) {
    let ammu = fetch("https://jsonplaceholder.typicode.com/users")
ammu.then((res)=>{
return res.json()

}).then ((res)=>{
    
    for (let i = 0; i < 10; i++) {
        let a = res[i];
       
            let c = document.getElementById("aa" + (i + 1)); 
            c.innerText =" ";
    }

})

let ss3=document.getElementById("ss4")
ss3.style.marginLeft="80px";
ss3.style.flexWrap="wrap";
ss3.style.borderRadius="30px";
ss3.style.paddingLeft="20px";
ss3.style.paddingRight="20px";
ss3.style.paddingTop="5px";
ss3.style.paddingBottom="5px";
ss3.style.fontFamily="'Times New Roman', Times, serif"
ss3.style.fontSize="25px"
ss3.style.border="none"
ss3.style.backgroundColor="#007bff"
ss3.style.color="white"

}