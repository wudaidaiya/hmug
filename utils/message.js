function message(title) {
  uni.showToast({
    title,
    icon: "none",
    duration: 2000
  })
}
message.err = function(title) {
  uni.showToast({
    title,
    icon: "error",
    duration: 1000
  })
}
message.success = function(title) {
  uni.showToast({
    title,
    icon: "success",
    duration: 1000
  })
}
message.loading = (title, duration) => {
  uni.showToast({
    title: '加载中...',
    icon: 'loading'
  })
}
export default message
