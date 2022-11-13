let messageCounter = 0;
const originalConsoleLog = console.log;
console.log = (...messages) => {
  messageCounter += 1;
  const dataType = messages.length === 1 ? `[${typeof messages[0]}]` : '';
  originalConsoleLog(`[${messageCounter}]${dataType}`, ...messages);
};
