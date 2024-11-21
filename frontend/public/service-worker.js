self.addEventListener('message', (event) => {
  if (event.data.type === 'SET_REMINDER') {
    const { task, delay } = event.data;
    setTimeout(() => {
      self.registration.showNotification('Task Reminder', {
        body: `It's time to complete: "${task}"`,
        icon: '/path-to-icon.png', // Update the path to your icon
      });
    }, delay);
  }
});
