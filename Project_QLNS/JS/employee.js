function growDiv() {
    var growDiv = document.getElementById('grow');
    var wrapper1 = document.querySelector('#more-button');
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } 
    else {
      var wrapper = document.querySelector('.measuringWrapper');
      growDiv.style.height = wrapper.clientHeight + "px";
      wrapper1.style.background="gray";
    }

    if (growDiv.clientHeight) {
        wrapper1.style.background="#0d07b2";
      } 
  }


  function growDiv1() {
    var growDiv = document.getElementById('grow1');
    var wrapper1 = document.querySelector('#more-button1');
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector('.measuringWrapper1');
      growDiv.style.height = wrapper.clientHeight + "px";
      wrapper1.style.background="gray";
    }
    if (growDiv.clientHeight) {
        wrapper1.style.background="#0d07b2";
      }
  }