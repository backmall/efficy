const oppoStatus = [
    {
      "K_OPPO_STATUS": 1,
      "STATUS": "1. Initial Contact",
      "SUCCESS": 0
    },
    {
      "K_OPPO_STATUS": 2,
      "STATUS": "2. Demonstration",
      "SUCCESS": 25
    },
    {
      "K_OPPO_STATUS": 3,
      "STATUS": "3. Proposal",
      "SUCCESS": 50
    },
    {
      "K_OPPO_STATUS": 4,
      "STATUS": "4. Negotiation",
      "SUCCESS": 75
    },
    {
      "K_OPPO_STATUS": 5,
      "STATUS": "5. Order",
      "SUCCESS": 100
    }
  ];
  
  const Module = class {

      form;
      select;
      input;
      button;
      output;

    constructor() {

        this.form = document.getElementsByTagName("form")[0];
        this.select = document.getElementsByTagName("select")[0];
        this.input = document.getElementsByTagName("input")[0];
        this.output = document.getElementsByClassName("output")[0];
        this.button = document.getElementsByTagName("button")[0];
    }

    /**
     * Populate form with @oppoStatus
     * set eventListeners
     */
    start() {

        //add new option elements to select element
        oppoStatus.forEach(element => {
            let option = document.createElement("option");
            option.value = element.K_OPPO_STATUS;
            option.setAttribute("success", element.SUCCESS);
            option.innerHTML = element.STATUS;
            
            this.select.appendChild(option); 
        });

        //add event listener to select field
        this.select.addEventListener("change", ()=>{
            
            //change value of input box using attribute of selected option
            const value = this.select.options[this.select.selectedIndex].getAttribute("success");
            this.input.value = value;

        })


        //substitute submit action with custom event 
        this.form.addEventListener("submit", (e)=>{
            e.preventDefault();
            const status = parseInt(this.select.value);
            const success = parseInt(this.input.value);
            const data = {
                status: status,
                success: success
            }
            this.output.innerHTML = JSON.stringify(data);;
        });



        // Start modifying the form elements here!
        // You are allowed to add extra methods and properties to this class
    }
    
    /**
     * Basic styling 
     */
    style(){

        this.input.style.textAlign = "right";

        //wrap button in div box
        const outputBox = document.createElement("div");
        this.button.parentNode.appendChild(outputBox)
        outputBox.appendChild(this.button);

        outputBox.style.padding = "10px 0px";

        this.output.style.fontFamily = "Courier New, monospace"
    }
  }
  
  const main = new Module();
  main.start();
  main.style();