const conversationData = [
    {
        userName: "user",
        userText: "เอ๊ะ ! ว่าแต่การวางเเผนเปิดร้านขายผักต้องใช้ความรู้เรื่องอะไรบ้างครับพี่ Theta",
    },
    {
        userName: "Theta",
        userText: "ใช่แล้ว user เเละที่สำคัญชาวบ้านที่หมู่บ้าน Newmathcian ตั้งใจทำงานกันมากเลยนะเรามาที่นี้เพื่อช่วยเหลือพวกเขาล่ะ",
    },
    {
        userName: "user",
        userText: "อย่างนี้เราต้องมีความรู้เรื่องหน่วยใช่ไหมพี่ Theta",
    },
    {
        userName: "Theta",
        userText: "ถูกต้องเเล้ว user เรามานำความรู้เรื่องหน่วยไปช่วยชาวบ้านกัน",
    },
];

let currentConversationIndex = 0;

function displayInitialConversation() {
    // Call nextPage() to display the first conversation
    nextPage();
}

// Function to display the next conversation
function nextPage() {
    // Get the next conversation from the conversation data
    const conversation = conversationData[currentConversationIndex];
    // Check if there are more conversations
    if (conversation) {
        // Update the dialog box with the conversation data
        document.getElementById("userName").textContent = conversation.userName;
        document.getElementById("userText").textContent = conversation.userText;
        if(conversation.userName != 'user')
        {
            document.getElementById("userName").style.display = 'block';
        }

        // Display the appropriate character image based on the userName
        const charImages = document.querySelectorAll('.char img');
        charImages.forEach(img => {
            if (img.alt === conversation.userName) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
        
        // Increment the conversation index for the next iteration
        currentConversationIndex++;
    } else {
        // If there are no more conversations, redirect to the specified URL
        window.location.href = "https://cdn-icons-png.flaticon.com/512/1505/1505465.png";
    }
}


