// ye connected he messageroutes me and senderid and receiver id  ka id isauthincated middleware sse aya he    and conversation model also used  and message moel use hua he

import { Conversation } from "../models/conversationModel.js"
import { Message } from "../models/messageModel.js"
import { getReceiverSocketId, io } from "../socket/socket.js"

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id
    const receiverId = req.params.id
    const { message } = req.body   // get message from conversationmoel
    let gotConversation = await Conversation.findOne({
      participant: { $all: [senderId, receiverId] }
    })      // all ek function he jo check ke liye use hua he
    if (!gotConversation) {
      gotConversation = await Conversation.create({
        participant: [senderId, receiverId]
      }) // exist karta he ki nahi check conversation 
    }



    const newMessage = await Message.create({
      senderId,
      receiverId,
      message
    })
    if (newMessage) {
      gotConversation.messages.push(newMessage._id)
    }
    await Promise.all([gotConversation.save(),newMessage.save()])
    //socket connection debi ethi mu

    const receiversocketId = getReceiverSocketId(receiverId)
    if (receiversocketId) {
      io.to(receiversocketId).emit("newMessage", newMessage)
    }



    return res.status(201).json({
      newMessage
    })

  } catch (error) {
    console.log(error);

  }
}



export const getMessage = async (req, res) => {
  try {
    const receiverId = req.params.id
    const senderId = req.id
    const conversation = await Conversation.findOne({
      participant: { $all: [senderId, receiverId] }
    }).populate("messages")
    // console.log(conversation, conversation.messages);
    return res.status(200).json(conversation.messages)
  } catch (error) {
    console.log(error);

  }
}
