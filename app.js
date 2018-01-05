
//querySelectorAll returns a node list which can be converted to an array with Array.from or ... spread operator
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
        .map(node => node.dataset.time)
        .map(timeCode => {
          const [mins, secs] = timeCode.split(':').map(parseFloat);
          console.log(mins, secs);
          return (mins * 60) + secs;

        });
