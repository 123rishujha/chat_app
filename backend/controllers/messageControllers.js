const asyncHandler = require("express-async-handler");
const Message  = require("../module/messageModel");
const User  = require("../module/userModel");
const Chat  = require("../module/chatModel");


const sendMessage = asyncHandler( async (req,res) => {
   const { chatId,content } = req.body;
   if(!content || chatId){
       console.log("Invalid data passed into request");
       return res.status(400).send({success:false});
   } 
   
   const newMessage = {sender:req.user._id,content,chatId}
   
   try{
    let message  = await Message.create(newMessage);
    message = await message.populate("sender","name pic");
    message = await message.populate("chat");
    message = await User.populate(message,{
        path: "chat.users",
        select: "name pic email",
    });   
    
    await Chat.findByIdAndUpdate(req.body.chatId,{latestMessage: message});
    
    res.json(message);
   }
   catch(error){
    res.status(400);
    throw new Error(error.message);
   }
   
});



const allMessages = asyncHandler(async (req,res)=>{
    const chatId = req.params.chatId;
    try{
        const message = await Message.find({chat: chatId})
        .populate("sender","name pic email")
        .populate("chat")
        res.json(messages);
    }
    catch(error){
        res.status(400);
        throw new Error(error.message);
    }
})

module.exports = {
    sendMessage,
    allMessages
}
