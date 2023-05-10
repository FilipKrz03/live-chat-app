import {createSlice} from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : 'chat' , 
    initialState : {
        messages: []  , 
        messageNumbers : 0 , 
    } , 
    reducers : {
        addMessage(state , action) {
            state.messages.push({
            id : action.payload.id , 
            nickname : action.payload.nickname , 
            messageBody : action.payload.messageBody , 
            month : action.payload.month , 
            day : action.payload.day , 
            })
            state.messageNumbers ++;
        } , 
        delateMessage (state , action) {
            state.messages.filter(message => message.id !== action.payload.id);
            state.messageNumbers --;
        } , 
        replaceMessages(state , action){
            state.messages = action.payload.messages;
        }
    }
});

export const chatActions = chatSlice.actions;
export default chatSlice;
