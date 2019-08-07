/* eslint-disable no-undef */
import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'

const socket = io(window.location.host, {
  transports: ['websocket'],
})

const client = feathers()
client.configure(socketio(socket))
// TODO: should have a callback if device supports localStorage, if not use cookie
client.configure(auth({ storage: window.localStorage }))
window.client = client;

export default client
