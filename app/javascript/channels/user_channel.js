import consumer from "./consumer"

consumer.subscriptions.create("UserChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('connected to users action');
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data);
    if (data.type === 'badge') {
      Swal.fire({
        title: 'Sweet!',
        text: `You got the ${data.badge.description} badge!`,
        imageUrl: data.badge_image_url,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image'
      });
    }
  }
});
