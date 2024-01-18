addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === 'POST') {
    const payload = await request.json()
    let chatId = payload.message.chat.id
    let text = payload.message.text
    let API_KEY = '6773856822:AAFHAnMGUQ6-DGYd-qnA3qLMESSX6nButQY'; 
    let url = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=Recibí esto: ${text}`
    await fetch(url)
  }
  return new Response('OK')
}
