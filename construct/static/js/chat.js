document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.querySelector(".chat-input textarea"); 
    const sendChatBtn = document.querySelector(".chat-input span"); 
    const chatbox = document.querySelector(".chatbox"); 
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    
    let userMessage; 
    const API_KEY= "AIzaSyDBBaEQx4g7qSl_sFakGxqbSu-q5Fq8bA4";
    const inputInitHeight = chatInput.scrollHeight;

    // Function to create a chat <li> element with the given message and className
    const createChatLi = (message, className) => { 
        const chatLi = document.createElement("li"); 
        chatLi.classList.add("chat", className); 
        
        // Define chat content based on message type (outgoing or incoming)
        let chatContent = className === "outgoing"
            ? `<p></p>` 
            : `<span class="material-symbols-outlined">smart_toy</span><p></p>`; 
        chatLi.innerHTML = chatContent; 
        chatLi.querySelector("p").textContent = message;
        return chatLi; 
    };
    
    const generateResponse =(incomingChatLi)=>{
        const API_URL=`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
        const messageElement = incomingChatLi.querySelector("p");
        
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
              contents: [{ 
                role: "user", 
                parts: [{ text: userMessage }] 
              }] 
            }),
          };
          //Send POST request to API, get response
          fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
            let responseText = data.candidates[0].content.parts[0].text;

            // Remove asterisks used for bold formatting (**bold**)
            responseText = responseText.replace(/\*\*(.*?)\*\*/g, "$1")  // Remove **bold**
            .replace(/\*(.*?)\*/g, "$1");  

            messageElement.textContent = responseText;
          }).catch((error)=>{
            messageElement.classList.add("error");
            messageElement.textContent = "Oops! Something went wrong. Please try again.";
          }).finally(()=>chatbox.scrollTo(0, chatbox.scrollHeight));
    }


    const handleChat = () => { 
        userMessage = chatInput.value.trim(); 
        if (!userMessage) return;
        chatInput.value = "";
        chatInput.style.height = `${inputInitHeight}px`;

        // Append user's message to the chatbox
        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
        chatbox.scrollTo(0, chatbox.scrollHeight);

        // chatInput.value = "";
        setTimeout(() => {
            const incomingChatLi = createChatLi("Thinking...","incoming")
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight)
            generateResponse(incomingChatLi);
        },600);
        
    }

    chatInput.addEventListener("input", ()=>{
      //Adjust the height of the input textarea baesd on its content
        chatInput.style.height = `${inputInitHeight}px`;
        chatInput.style.height = `${chatInput.scrollHeight}px`;
    });
    chatInput.addEventListener("keydown", (e) => {
      //If enter key is pressed without shift key and the window
      if(e.key === "Enter" && !e.shiftKey ) {
          e.preventDefault();
          handleChat();
      }
    });
    // Attach event listener to the send button
    sendChatBtn.addEventListener("click", handleChat);  
    chatbotToggler.addEventListener("click", ()=> document.body.classList.toggle("show-chatbot"));
});