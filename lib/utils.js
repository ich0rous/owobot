module.exports = {
  sendImage: function(m, url) {
    return m.channel.send({
      files: [url]
    })
  }
}
