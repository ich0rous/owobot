module.exports = {
  sendImage: function(m, url) { // Does this need explanation?
    return m.channel.send({
      files: [url]
    })
  }
}
