let instance = null;

class SocketService {
  constructor() {
    if (!instance) {
      console.log("IO connection build.");
      instance = this;
    }

    return instance;
  }

  sendData() {
    console.log("Send Data on IO");
  }
}

export default SocketService;
