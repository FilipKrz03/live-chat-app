export const sendMessageData = (messages) => {
return async(dispatch) => {
    const sendData = async () => {
        const response = await fetch("https://chat-app-c5ebc-default-rtdb.europe-west1.firebasedatabase.app/messages.json" , {
            method : 'PUT' , 
            body : JSON.stringify(messages) , 
        })
        if(!response.ok){
            throw new Error ('Sending message to server failer');
        }
    }
    await sendData();
  }
}