let messageCounter = 0;
const originalConsoleLog = console.log;
console.log = (...messages) => {
  messageCounter += 1;
  const oneMessage = messages.length === 1;
  const isProperString =
    oneMessage && typeof messages[0] === 'string' && !messages[0].includes('"');

  const dataType = oneMessage ? `[${typeof messages[0]}]` : '';
  const data = isProperString ? [`"${messages[0]}"`] : messages;

  originalConsoleLog(`[${messageCounter}]${dataType}`, ...data);
};
