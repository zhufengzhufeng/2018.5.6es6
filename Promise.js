function Promise(executor) {
  let self = this;
  self.value = undefined;
  self.reason = undefined;
  self.status = 'pending';
  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value;
      self.status = 'resolved'
    }
  }
  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected';
    }
  }
  executor(resolve, reject);
}
Promise.prototype.then = function (onFufiled, onRejected) {
  let self = this;
  if(self.status === 'resolved'){
    onFufiled(self.value)
  }
  if (self.status === 'rejected') {
    onRejected(self.reason)
  }
}
module.exports = Promise;