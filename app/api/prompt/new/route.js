import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json(); //extract all data from the POST request

try {
    await connectToDB(); //connect to the DB. it's a lambda function, need to connect, do its thing, then die.
    const newPrompt = new Prompt({
        creator: userId,
        prompt,
        tag
    })

    await newPrompt.save(); //save new prompt into the DB
    
    return new Response(JSON.stringify(newPrompt), {status:201})
} catch (error) {
    return new Response("Failed to create a new prompt", {status:500})
}
}